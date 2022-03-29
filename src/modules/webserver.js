import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import express from "express";
import {websocket} from "./websocket.js"
import {info} from "./logging.js";
import favicon from "serve-favicon"

const app = express()

const route = () => {
    app.use(express.static(path.join(rootPath, 'public_html')))
    app.use(favicon(path.join(rootPath, 'public_html', 'favicon.ico')))
    app.locals.pretty = true
    app.set('views', path.resolve(rootPath, 'public_html'))
    app.set('view engine', 'pug')

    const clientConfig = JSON.stringify(config.client)
    const dateFormat = JSON.stringify(config['date-format'])

    app.get('/', async (req, res) => {
        res.render('index', {
            title: `Aptos Monitor v${version}`,
            version,
            clientConfig,
            dateFormat
        })
    })
}

export const runWebServer = () => {
    let httpWebserver, httpsWebserver

    if (ssl) {
        const {cert, key} = config.server.ssl
        httpWebserver = http.createServer((req, res)=>{
            res.writeHead(301,{Location: `https://${req.headers.host}${req.url}`});
            res.end();
        })

        httpsWebserver = https.createServer({
            key: fs.readFileSync(key[0] === "." ? path.resolve(rootPath, key) : key),
            cert: fs.readFileSync(cert[0] === "." ? path.resolve(rootPath, cert) : cert)
        }, app)
    } else {
        httpWebserver = http.createServer({}, app)
    }

    route()

    httpWebserver.listen(80, () => {
        info(`Aptos Monitor running on http`)
    })

    if (ssl) {
        httpsWebserver.listen(443, () => {
            info(`Aptos Monitor running on https`)
        })
    }

    websocket(ssl ? httpsWebserver : httpWebserver)
}
