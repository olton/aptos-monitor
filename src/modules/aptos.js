import {HEALTH_ENDPOINT, LEDGER_ENDPOINT} from "../helpers/consts.js";
import fetch from "node-fetch";
import {alert} from "./logging.js";
import {parseMetrics} from "./metrics.js";

export const processNodeHealth = async () => {
    const link = `${config.aptos.api}${HEALTH_ENDPOINT}`
    try {
        const response = await fetch(link);
        globalThis.cache.health = response.ok ? await response.text() : "aptos-node:error"
    } catch (e) {
        globalThis.cache.health = "aptos-node:error"
        alert(e.message)
    }

    setTimeout(processNodeHealth, 30000)
}

export const processLedgerInfo = async () => {
    const link = `${config.aptos.api}${LEDGER_ENDPOINT}`

    try {
        const response = await fetch(link);
        globalThis.cache.ledger = response.ok ? await response.json() : {}
    } catch (e) {
        globalThis.cache.ledger = {}
        alert(e.message)
    }

    setTimeout(processLedgerInfo, 2000)
}

export const processMetrics = async () => {
    const link = `${config.aptos.metrics}/metrics`

    try {
        const response = await fetch(link);
        globalThis.cache.metricsRaw = response.ok ? await response.text() : ""
        globalThis.cache.metrics = parseMetrics(globalThis.cache.metricsRaw)
    } catch (e) {
        globalThis.cache.metricsRaw = ""
        globalThis.cache.metrics = {}
        alert(e.message)
    }

    setTimeout(processMetrics, 5000)
}

export const getHostMetrics = async ({host = "", port = 9101, prot = "http"}) => {
    const link = `${prot}://${host}:${port}/metrics`
    let result = ""

    try {
        const response = await fetch(link);
        result = response.ok ? (await response.text()) : ""
    } catch (e) {
        result = `:error:${e.message}`
        alert(e.message)
    }

    return result
}

export const getHostApiData = async ({path = LEDGER_ENDPOINT, json = true, host = "", port = 9101, prot = "http"}) => {
    const link = `${prot}://${host}:${port}${path}`

    console.log(link)

    try {
        const response = await fetch(link);
        if (response.ok) {
            return json ? await response.json() : await response.text()
        } else {
            return json ? {error: "no response"} : ":error:no response"
        }
    } catch (e) {
        return json ? {error: e.message} : `:error:${e.message}`
    }
}
