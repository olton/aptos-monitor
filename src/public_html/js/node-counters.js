
const updateCounters = data => {
    const {total_count, summary_server, summary_error} = data

    $("#sent-requests-total").text(total_count)
    $("#server-summary-requests").text(summary_server)
    $("#server-summary-errors").text(summary_error)
}