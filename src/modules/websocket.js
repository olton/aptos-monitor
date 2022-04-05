import {WebSocketServer, WebSocket} from "ws";
import {debug} from "./logging.js";
import {isset} from "../helpers/isset.js";
import {getHostApiData, getHostMetrics, testPorts} from "./aptos.js";
import {parseMetrics2} from "./metrics";
import {HEALTH_ENDPOINT, LEDGER_ENDPOINT} from "../helpers/consts.js";

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
                    if (cache.metrics && isset(cache.metrics.sync, false)) response(ws, channel, cache.metrics.sync)
                    break
                }
                case "counters": {
                    if (cache.metrics && isset(cache.metrics.counters, false)) response(ws, channel, cache.metrics.counters)
                    break
                }
                case "metrics": {
                    response(ws, channel, await getHostMetrics(data))
                    break
                }
                case "metrics2": {
                    const res = await getHostMetrics(data)
                    response(ws, channel, res.includes(`:error:`) ? res : parseMetrics2(res))
                    break
                }
                case "api2": {
                    // console.log(data)
                    const health = await getHostApiData({path: HEALTH_ENDPOINT, json: false, ...data})
                    const ledger = health.includes(":error:") ?
                        {error: "Node API not available"} :
                        await getHostApiData({path: LEDGER_ENDPOINT, json: true, ...data})
                    response(ws, channel, {
                        ledger,
                        health,
                        target: data
                    })
                    break
                }
                case "port-test": {
                    response(ws, channel, {
                        test: await testPorts(data.host, data.ports),
                        target: data
                    })
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
