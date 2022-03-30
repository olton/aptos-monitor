
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

    $("#storage_committed_txns").text(storage_committed_txns)
    $("#vm_system_transactions_executed").text(vm_system_transactions_executed)
    $("#vm_user_transactions_executed").text(vm_user_transactions_executed)
    $("#vm_num_txns_per_block_sum").text(vm_num_txns_per_block_sum)
    $("#vm_num_txns_per_block_count").text(vm_num_txns_per_block_count)
    $("#vm_txn_gas_usage_sum").text(vm_txn_gas_usage_sum)
    $("#vm_txn_gas_usage_count").text(vm_txn_gas_usage_count)
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

    $("#network_pending_health_check_events_dequeued").text(network_pending_health_check_events_dequeued)
    $("#network_pending_health_check_events_enqueued").text(network_pending_health_check_events_enqueued)
    $("#state_sync_pending_network_events_dequeued").text(state_sync_pending_network_events_dequeued)
    $("#state_sync_pending_network_events_enqueued").text(state_sync_pending_network_events_enqueued)
    $("#storage_service_server_pending_network_events_dequeued").text(storage_service_server_pending_network_events_dequeued)
    $("#storage_service_server_pending_network_events_enqueued").text(storage_service_server_pending_network_events_enqueued)
}

const updateMetric = data => {
    updateCounters(data)
    updateCountersStorageLedger(data)
    updateCountersJellyfish(data)
    updateCountersMetrics(data)
    updateCountersSendData(data)
    updateCountersConnections(data)
    updateRpcBytes(data)
    updateRpcMessages(data)
    updateTransactions(data)
    updateQueues(data)
}