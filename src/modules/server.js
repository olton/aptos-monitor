import {info} from "./logging.js";
import fs from "fs";
import {runWebServer} from "./webserver.js";
import {processCpuLoad, processCpuTemp, processMem, processNetConn, processNetStat, processPlatform} from "./system.js";
import {processLedgerInfo, processMetrics, processNodeHealth} from "./aptos";

const readConfig = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'))

const runProcesses = () => {
    setImmediate( processPlatform )
    setImmediate( processMem )
    setImmediate( processCpuLoad )
    setImmediate( processCpuTemp )
    setImmediate( processNetStat )
    setImmediate( processNetConn )

    setImmediate( processNodeHealth )
    setImmediate( processLedgerInfo )
    setImmediate( processMetrics )
}

export const run = (configPath) => {
    info("Starting Aptos Monitor...")

    try {

        globalThis.config = readConfig(configPath)
        globalThis.ssl = config.server.ssl && (config.server.ssl.cert && config.server.ssl.key)
        globalThis.cache = new Proxy({
        }, {
            set(target, p, value, receiver) {
                target[p] = value
                return true
            }
        })

        runProcesses()
        runWebServer()

        info("Welcome to Aptos Monitor!")
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}