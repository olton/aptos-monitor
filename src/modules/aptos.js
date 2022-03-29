import {HEALTH_ENDPOINT, LEDGER_ENDPOINT} from "../helpers/consts.js";
import fetch from "node-fetch";
import {alert} from "./logging.js";
import {getConnections, getCounters, getSyncState} from "./metrics.js";

export const processNodeHealth = async () => {
    const link = `${config.aptos.api}${HEALTH_ENDPOINT}`
    try {
        const response = await fetch(link);
        globalThis.cache.health = response.ok ? await response.text() : "aptos-node:error"
    } catch (e) {
        alert(e.message, e.stack)
    }

    setTimeout(processNodeHealth, 30000)
}

export const processLedgerInfo = async () => {
    const link = `${config.aptos.api}${LEDGER_ENDPOINT}`

    try {
        const response = await fetch(link);
        globalThis.cache.ledger = response.ok ? await response.json() : {}
    } catch (e) {
        alert(e.message, e.stack)
    }

    setTimeout(processLedgerInfo, 2000)
}

export const processMetrics = async () => {
    const link = `${config.aptos.metrics}/metrics`

    try {
        const response = await fetch(link);
        globalThis.cache.metrics = response.ok ? await response.text() : ""
        globalThis.cache.sync = getSyncState(globalThis.cache.metrics)
        globalThis.cache.counters = getCounters(globalThis.cache.metrics)
        globalThis.cache.connections = getConnections(globalThis.cache.metrics)
    } catch (e) {
        alert(e.message, e.stack)
    }

    setTimeout(processMetrics, 5000)
}