import {WebSocketServer, WebSocket} from "ws";
import {debug} from "./logging.js";

export const websocket = (server) => {
    globalThis.wss = new WebSocketServer({ server })

    wss.on('connection', (ws, req) => {

        const ip = req.socket.remoteAddress

        ws.send(JSON.stringify({
            channel: "welcome",
            data: `Welcome to Aptos Monitor v${version}`
        }))

        ws.on('message', async (msg) => {
            const {channel, data} = JSON.parse(msg)
            switch (channel) {
                case "platform": {
                    response(ws, channel, {platform: cache.platform, time: cache.time, cpu: cache.cpu})
                    break
                }
                case "cpu": {
                    response(ws, channel, {temp: cache.cpuTemp, load: cache.cpuLoad})
                    break
                }
                case "memory": {
                    response(ws, channel, {memory: cache.mem})
                    break
                }
                case "net": {
                    response(ws, channel, {stat: cache.netStat, conn: cache.netConn})
                    break
                }
                case "health": {
                    response(ws, channel, cache.health)
                    break
                }
                case "ledger": {
                    response(ws, channel, cache.ledger)
                    break
                }
                case "sync": {
                    response(ws, channel, cache.metrics.sync)
                    break
                }
                case "counters": {
                    response(ws, channel, cache.metrics.counters)
                    break
                }
            }
        })
    })
}

export const response = (ws, channel, data) => {
    if (config.debug["ws-channel"]) {
        debug("WS Channel", channel)
    }

    ws.send(JSON.stringify({
        channel,
        data
    }))
}

export const broadcast = (data) => {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data))
        }
    })
}
