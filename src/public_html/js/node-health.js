
const updateNodeHealth = data => {
    const c = data.includes("error") ? "fg-red" : "fg-green"
    $("#node-health").removeClassBy("fg-").addClass(c).html(data)
}
