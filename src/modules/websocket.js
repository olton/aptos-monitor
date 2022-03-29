import {WebSocketServer} from "ws";
import {debug, info} from "./logging.js";

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
                case "ping": {
                    response(ws, "pong")
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

export const sendBroadcast = (data) => {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data))
        }
    })
}
