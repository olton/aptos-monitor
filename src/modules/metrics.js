export const getSyncState = (metrics = "") => {
    const lines = metrics.split("\n")
    let committed = 0, highest = 0, synced = 0, target = 0

    for(let l of lines) {
        if (l[0] === "#") continue
        if (l.includes("aptos_state_sync_version")) {
            if (l.includes("committed")) committed = l.split(" ")[1]
            if (l.includes("highest")) highest = l.split(" ")[1]
            if (l.includes("synced")) synced = l.split(" ")[1]
            if (l.includes("target")) target = l.split(" ")[1]
        }
    }

    return {
        committed,
        highest,
        synced,
        target
    }
}

export const getConnections = (metrics = "") => {
    const lines = metrics.split("\n")
    let inbound = 0, outbound = 0

    for(let l of lines) {
        if (l[0] === "#") continue
        if (l.includes("aptos_connections")) {
            if (l.includes("inbound")) inbound = l.split(" ")[1]
            if (l.includes("outbound")) outbound = l.split(" ")[1]
        }
    }

    return {
        inbound,
        outbound
    }
}

export const getCounters = (metrics = "") => {
    const lines = metrics.split("\n")
    let total_count = 0, summary_server = 0, summary_error = 0

    for(let l of lines) {
        if (l[0] === "#") continue
        if (l.includes("aptos_data_client_sent_requests")) {
            let val = l.split(" ")[1]
            if (l.includes("TOTAL_COUNT")) {
                total_count = val
            } else {
                summary_server = val
            }
        }
        if (l.includes("aptos_data_streaming_service_global_summary_error")) {
            let val = l.split(" ")[1]
            summary_error = val
        }
    }

    return {
        total_count,
        summary_server,
        summary_error
    }
}

