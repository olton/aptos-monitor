import {info} from "./logging.js";
import fs from "fs";
import {runWebServer} from "./webserver.js";

const readConfig = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'))

export const run = (configPath) => {
    info("Starting Aptos Monitor...")

    try {

        globalThis.config = readConfig(configPath)
        globalThis.ssl = config.server.ssl && (config.server.ssl.cert && config.server.ssl.key)
        globalThis.cache = new Proxy({
            price: null,
            transactionPool: [],
            lastBlock: null
        }, {
            set(target, p, value, receiver) {
                target[p] = value
                return true
            }
        })

        runWebServer()

        info("Welcome to Aptos Monitor!")
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}