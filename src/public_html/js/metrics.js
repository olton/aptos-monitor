
const updateCounters = data => {
    let {sent_requests_total, sent_requests_summary_server, streaming_service_global_summary_error, error_responses_total, error_responses_storage_server_summary} = data

    $("#sent-requests-total").text(sent_requests_total)
    $("#server-summary-requests").text(sent_requests_summary_server)
    $("#server-summary-errors").text(streaming_service_global_summary_error)
    $("#error_responses_total").text(error_responses_total)
    $("#error_responses_storage_server_summary").text(error_responses_storage_server_summary)
}

const updateCountersStorageLedger = data => {
    let {storage_ledger_events_created, storage_ledger_new_state_leaves, storage_ledger_new_state_nodes, storage_ledger_stale_state_leaves, storage_ledger_stale_state_nodes} = data

    $("#storage-ledger-events-created").text(storage_ledger_events_created)
    $("#storage-ledger-new-state-leaves").text(storage_ledger_new_state_leaves)
    $("#storage-ledger-new-state-nodes").text(storage_ledger_new_state_nodes)
    $("#storage-ledger-stale-state-leaves").text(storage_ledger_stale_state_leaves)
    $("#storage-ledger-stale-state-nodes").text(storage_ledger_stale_state_nodes)
}

const updateCountersJellyfish = data => {
    let {jellyfish_internal_encoded_bytes, jellyfish_leaf_encoded_bytes, jellyfish_storage_reads} = data

    $("#jellyfish-internal-encoded-bytes").text(jellyfish_internal_encoded_bytes)
    $("#jellyfish-leaf-encoded-bytes").text(jellyfish_leaf_encoded_bytes)
    $("#jellyfish-storage-reads").text(jellyfish_storage_reads)
}

const updateCountersMetrics = data => {
    let {metrics_families_over_1000, metrics_total, metrics_total_bytes} = data

    $("#metrics_families_over_1000").text(metrics_families_over_1000)
    $("#metrics_total").text(metrics_total)
    $("#metrics_total_bytes").text(metrics_total_bytes)
}

const updateCountersSendData = data => {
    let {network_direct_send_messages_received, network_direct_send_messages_sent, network_direct_send_bytes_received, network_direct_send_bytes_sent} = data

    $("#network_direct_send_messages_received").text(network_direct_send_messages_received)
    $("#network_direct_send_messages_sent").text(network_direct_send_messages_sent)
    $("#network_direct_send_bytes_received").text(network_direct_send_bytes_received)
    $("#network_direct_send_bytes_sent").text(network_direct_send_bytes_sent)
}

const updateCountersConnections = data => {
    const {connections_inbound, connections_outbound, secure_net_events_connect, secure_net_events_read} = data

    $("#conn-inbound").text(connections_inbound)
    $("#conn-outbound").text(connections_outbound)
    $("#secure_net_events_connect").text(secure_net_events_connect)
    $("#secure_net_events_read").text(secure_net_events_read)
}

const updateSyncState = data => {
    const {committed, highest, synced, target, state_sync_reconfig_count, state_sync_timeout_total} = data
    $("#sync-committed").text(committed)
    $("#sync-highest").text(highest)
    $("#sync-synced").text(synced)
    $("#sync-target").text(target)
    $("#state_sync_reconfig_count").text(state_sync_reconfig_count)
    $("#state_sync_timeout_total").text(state_sync_timeout_total)
}