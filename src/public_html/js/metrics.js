
const updateRequests = data => {
    let {sent_requests_total, sent_requests_summary_server, streaming_service_global_summary_error, error_responses_total, error_responses_storage_server_summary} = data

    $("#sent-requests-total").text(n2f(sent_requests_total))
    $("#server-summary-requests").text(n2f(sent_requests_summary_server))
    $("#server-summary-errors").text(n2f(streaming_service_global_summary_error))
    $("#error_responses_total").text(n2f(error_responses_total))
    $("#error_responses_storage_server_summary").text(n2f(error_responses_storage_server_summary))
}

const updateStorageLedger = data => {
    let {storage_ledger_events_created, storage_ledger_new_state_leaves, storage_ledger_new_state_nodes, storage_ledger_stale_state_leaves, storage_ledger_stale_state_nodes} = data

    $("#storage-ledger-events-created").text(n2f(storage_ledger_events_created))
    $("#storage-ledger-new-state-leaves").text(n2f(storage_ledger_new_state_leaves))
    $("#storage-ledger-new-state-nodes").text(n2f(storage_ledger_new_state_nodes))
    $("#storage-ledger-stale-state-leaves").text(n2f(storage_ledger_stale_state_leaves))
    $("#storage-ledger-stale-state-nodes").text(n2f(storage_ledger_stale_state_nodes))
}

const updateJellyfish = data => {
    let {jellyfish_internal_encoded_bytes, jellyfish_leaf_encoded_bytes, jellyfish_storage_reads} = data

    $("#jellyfish-internal-encoded-bytes").text(n2f(jellyfish_internal_encoded_bytes))
    $("#jellyfish-leaf-encoded-bytes").text(n2f(jellyfish_leaf_encoded_bytes))
    $("#jellyfish-storage-reads").text(n2f(jellyfish_storage_reads))
}

const updateNodeMetrics = data => {
    let {metrics_families_over_1000, metrics_total, metrics_total_bytes, simple_onchain_discovery_counts} = data

    $("#metrics_families_over_1000").text(n2f(metrics_families_over_1000))
    $("#metrics_total").text(n2f(metrics_total))
    $("#metrics_total_bytes").text(n2f(metrics_total_bytes))
    $("#simple_onchain_discovery_counts").text(n2f(simple_onchain_discovery_counts))
}

const updateSendData = data => {
    let {network_direct_send_messages_received, network_direct_send_messages_sent, network_direct_send_bytes_received, network_direct_send_bytes_sent} = data

    $("#network_direct_send_messages_received").text(n2f(network_direct_send_messages_received))
    $("#network_direct_send_messages_sent").text(n2f(network_direct_send_messages_sent))
    $("#network_direct_send_bytes_received").text(n2f(network_direct_send_bytes_received))
    $("#network_direct_send_bytes_sent").text(n2f(network_direct_send_bytes_sent))
}

const updateConnections = data => {
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

    $("#sync-committed").text(n2f(committed))
    $("#sync-highest").text(n2f(highest))
    $("#sync-synced").text(n2f(synced))
    $("#sync-target").text(n2f(target))
    $("#state_sync_reconfig_count").text(n2f(state_sync_reconfig_count))
    $("#state_sync_timeout_total").text(n2f(state_sync_timeout_total))
}

const updateRpcBytes = data => {
    let {network_rpc_bytes_received_request, network_rpc_bytes_received_response, network_rpc_bytes_sent_request, network_rpc_bytes_sent_response} = data

    $("#network_rpc_bytes_received_request").text(n2f(network_rpc_bytes_received_request))
    $("#network_rpc_bytes_received_response").text(n2f(network_rpc_bytes_received_response))
    $("#network_rpc_bytes_sent_request").text(n2f(network_rpc_bytes_sent_request))
    $("#network_rpc_bytes_sent_response").text(n2f(network_rpc_bytes_sent_response))
}

const updateRpcMessages = data => {
    let {network_rpc_messages_failed_request, network_rpc_messages_received_request, network_rpc_messages_received_response, network_rpc_messages_sent_request, network_rpc_messages_sent_response} = data

    $("#network_rpc_messages_failed_request").text(n2f(network_rpc_messages_failed_request))
    $("#network_rpc_messages_received_request").text(n2f(network_rpc_messages_received_request))
    $("#network_rpc_messages_received_response").text(n2f(network_rpc_messages_received_response))
    $("#network_rpc_messages_sent_request").text(n2f(network_rpc_messages_sent_request))
    $("#network_rpc_messages_sent_response").text(n2f(network_rpc_messages_sent_response))
}

const updateTransactions = data => {
    let {
        storage_committed_txns,
        vm_system_transactions_executed,
        vm_user_transactions_executed,
        vm_num_txns_per_block_sum,
        vm_num_txns_per_block_count,
        vm_txn_gas_usage_sum,
        vm_txn_gas_usage_count
    } = data

    $("#storage_committed_txns").text(n2f(storage_committed_txns))
    $("#vm_system_transactions_executed").text(n2f(vm_system_transactions_executed))
    $("#vm_user_transactions_executed").text(n2f(vm_user_transactions_executed))
    $("#vm_num_txns_per_block_sum").text(n2f(vm_num_txns_per_block_sum))
    $("#vm_num_txns_per_block_count").text(n2f(vm_num_txns_per_block_count))
    $("#vm_txn_gas_usage_sum").text(n2f(vm_txn_gas_usage_sum))
    $("#vm_txn_gas_usage_count").text(n2f(vm_txn_gas_usage_count))
}

const updateQueues = data => {
    let {
        network_pending_health_check_events_dequeued,
        network_pending_health_check_events_enqueued,
        state_sync_pending_network_events_dequeued,
        state_sync_pending_network_events_enqueued,
        storage_service_server_pending_network_events_dequeued,
        storage_service_server_pending_network_events_enqueued
    } = data

    $("#network_pending_health_check_events_dequeued").text(n2f(network_pending_health_check_events_dequeued))
    $("#network_pending_health_check_events_enqueued").text(n2f(network_pending_health_check_events_enqueued))
    $("#state_sync_pending_network_events_dequeued").text(n2f(state_sync_pending_network_events_dequeued))
    $("#state_sync_pending_network_events_enqueued").text(n2f(state_sync_pending_network_events_enqueued))
    $("#storage_service_server_pending_network_events_dequeued").text(n2f(storage_service_server_pending_network_events_dequeued))
    $("#storage_service_server_pending_network_events_enqueued").text(n2f(storage_service_server_pending_network_events_enqueued))
}

const updateMetric = data => {
    updateRequests(data)
    updateStorageLedger(data)
    updateJellyfish(data)
    updateNodeMetrics(data)
    updateSendData(data)
    updateConnections(data)
    updateRpcBytes(data)
    updateRpcMessages(data)
    updateTransactions(data)
    updateQueues(data)
}