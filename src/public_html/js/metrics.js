
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
    let {metrics_families_over_1000, metrics_total, metrics_total_bytes, simple_onchain_discovery_counts} = data

    $("#metrics_families_over_1000").text(metrics_families_over_1000)
    $("#metrics_total").text(metrics_total)
    $("#metrics_total_bytes").text(metrics_total_bytes)
    $("#simple_onchain_discovery_counts").text(simple_onchain_discovery_counts)
}

const updateCountersSendData = data => {
    let {network_direct_send_messages_received, network_direct_send_messages_sent, network_direct_send_bytes_received, network_direct_send_bytes_sent} = data

    $("#network_direct_send_messages_received").text(network_direct_send_messages_received)
    $("#network_direct_send_messages_sent").text(network_direct_send_messages_sent)
    $("#network_direct_send_bytes_received").text(network_direct_send_bytes_received)
    $("#network_direct_send_bytes_sent").text(network_direct_send_bytes_sent)
}

const updateCountersConnections = data => {
    let {connections_inbound, connections_outbound, secure_net_events_connect, secure_net_events_read, shared_mempool_events_lost_peer, shared_mempool_events_new_peer} = data

    $("#conn-inbound").text(connections_inbound)
    $("#conn-outbound").text(connections_outbound)
    $("#secure_net_events_connect").text(secure_net_events_connect)
    $("#secure_net_events_read").text(secure_net_events_read)
    $("#shared_mempool_events_lost_peer").text(shared_mempool_events_lost_peer)
    $("#shared_mempool_events_new_peer").text(shared_mempool_events_new_peer)
}

const updateSyncState = data => {
    let {committed, highest, synced, target, state_sync_reconfig_count, state_sync_timeout_total} = data

    $("#sync-committed").text(committed)
    $("#sync-highest").text(highest)
    $("#sync-synced").text(synced)
    $("#sync-target").text(target)
    $("#state_sync_reconfig_count").text(state_sync_reconfig_count)
    $("#state_sync_timeout_total").text(state_sync_timeout_total)
}

const updateRpcBytes = data => {
    let {network_rpc_bytes_received_request, network_rpc_bytes_received_response, network_rpc_bytes_sent_request, network_rpc_bytes_sent_response} = data

    $("#network_rpc_bytes_received_request").text(network_rpc_bytes_received_request)
    $("#network_rpc_bytes_received_response").text(network_rpc_bytes_received_response)
    $("#network_rpc_bytes_sent_request").text(network_rpc_bytes_sent_request)
    $("#network_rpc_bytes_sent_response").text(network_rpc_bytes_sent_response)
}

const updateRpcMessages = data => {
    let {network_rpc_messages_failed_request, network_rpc_messages_received_request, network_rpc_messages_received_response, network_rpc_messages_sent_request, network_rpc_messages_sent_response} = data

    $("#network_rpc_messages_failed_request").text(network_rpc_messages_failed_request)
    $("#network_rpc_messages_received_request").text(network_rpc_messages_received_request)
    $("#network_rpc_messages_received_response").text(network_rpc_messages_received_response)
    $("#network_rpc_messages_sent_request").text(network_rpc_messages_sent_request)
    $("#network_rpc_messages_sent_response").text(network_rpc_messages_sent_response)
}