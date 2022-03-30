
globalThis.webSocket = null

const isOpen = (ws) => ws && ws.readyState === ws.OPEN

const connect = () => {
    const {host, secure} = config.server
    const ws = new WebSocket(`${secure ? 'wss' : 'ws'}://${host}`)

    globalThis.webSocket = ws

    ws.onmessage = event => {
        try {
            const content = JSON.parse(event.data)
            if (typeof wsMessageController === 'function') {
                wsMessageController.apply(null, [ws, content])
            }
        } catch (e) {
            log(e.message)
            log(event.data)
            log(e.stack)
        }
    }

    ws.onerror = error => {
        error('Socket encountered error: ', error.message, 'Closing socket');
        ws.close();
    }

    ws.onclose = event => {
        log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);
        setTimeout(connect, 1000)
    }

    ws.onopen = event => {
        log('Connected to Aptos Node Monitor');
    }
}

const wsMessageController = (ws, response) => {
    const {channel, data} = response

    if (!channel) {
        return
    }

    const requestData = ws => {
        if (isOpen(ws)) {
            ws.send(JSON.stringify({channel: 'platform'}))
            ws.send(JSON.stringify({channel: 'cpu'}))
            ws.send(JSON.stringify({channel: 'memory'}))
            ws.send(JSON.stringify({channel: 'net'}))
            ws.send(JSON.stringify({channel: 'health'}))
            ws.send(JSON.stringify({channel: 'ledger'}))
            ws.send(JSON.stringify({channel: 'sync'}))
            ws.send(JSON.stringify({channel: 'counters'}))
        }

        setTimeout(requestData, 2000, ws)
    }

    switch(channel) {
        case 'welcome': {
            requestData(ws)
            break
        }
        case 'platform': {
            updatePlatform(data)
            break
        }
        case 'cpu': {
            updateCpuLoad(data.load)
            updateCpuTemp(data.temp)
            break
        }
        case 'memory': {
            updateMemory(data)
            break
        }
        case 'net': {
            updateNet(data)
            break
        }
        case 'health': {
            updateNodeHealth(data)
            break
        }
        case 'ledger': {
            updateLedgerInfo(data)
            break
        }
        case 'sync': {
            updateSyncState(data)
            break
        }
        case 'counters': {
            updateCounters(data)
            updateCountersStorageLedger(data)
            updateCountersJellyfish(data)
            updateCountersMetrics(data)
            updateCountersSendData(data)
            updateCountersConnections(data)
            break
        }
    }
}


connect()


const updateCpu = data => {
    log("CPU", data)
}

const updateNet = data => {
    // log("Net", data)
}
