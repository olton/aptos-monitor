
const updateSyncState = data => {
    const {committed, highest, synced, target} = data
    $("#sync-committed").text(committed)
    $("#sync-highest").text(highest)
    $("#sync-synced").text(synced)
    $("#sync-target").text(target)
}