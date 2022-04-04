import {HEALTH_ENDPOINT, LEDGER_ENDPOINT} from "../helpers/consts.js";
import fetch, {AbortError} from "node-fetch";
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

    const controller = new AbortController()
    const timeout = setTimeout(() => {
        controller.abort()
    }, 10000)

    try {
        const response = await fetch(link, {
            signal: controller.signal
        });
        result = response.ok ? (await response.text()) : ""
    } catch (e) {
        const msg = (e instanceof AbortError) ? "Get Metrics Data: Operation aborted by timeout" : e.message
        result = `:error:${msg}`
        alert(msg)
    } finally {
        clearTimeout(timeout)
    }

    return result
}

export const getHostApiData = async ({path = LEDGER_ENDPOINT, json = true, host = "", port = 9101, prot = "http"}) => {
    const link = `${prot}://${host}:${port}${path}`
    let result

    const controller = new AbortController()
    const timeout = setTimeout(() => {
        controller.abort()
    }, 10000)

    try {
        const response = await fetch(link, {
            signal: controller.signal
        });
        if (response.ok) {
            result = json ? await response.json() : await response.text()
        } else {
            result = json ? {error: "no response"} : ":error:no response"
        }
    } catch (e) {
        const msg = (e instanceof AbortError) ? "Get API Data: Operation aborted by timeout" : e.message
        result = json ? {error: msg} : `:error:${msg}`
    } finally {
        clearTimeout(timeout)
    }

    return result
}
