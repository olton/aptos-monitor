const updateLedgerInfo = data => {
    if (!data || !data.ledger_version) return

    const {chain_id, epoch, ledger_version, ledger_timestamp} = data

    $("#chain_id").text(chain_id)
    $("#epoch").text(epoch)
    $("#ledger_version").text(n2f(ledger_version))
    $("#ledger_timestamp").text(datetime(+ledger_timestamp/1000).format(dateFormat.full))
}