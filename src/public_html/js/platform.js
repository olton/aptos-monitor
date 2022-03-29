
const updatePlatform = data => {
    let uptime = Metro.utils.secondsToTime(data.time.uptime)

    $("#os-distro").html(data.platform.osVersion)
    $("#cpu-info").html(data.cpu.model)
    $("#server-time").text(datetime(data.time.time).format(dateFormat.full))
    $("#monitor-time").html(datetime().format(dateFormat.full))
    $("#server-uptime").text(`${uptime.d}d, ${uptime.h}h ${uptime.m}m`)
}
