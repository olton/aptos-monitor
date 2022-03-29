
const updateNodeConnections = data => {
    const {inbound, outbound} = data

    $("#conn-inbound").text(inbound)
    $("#conn-outbound").text(outbound)
}