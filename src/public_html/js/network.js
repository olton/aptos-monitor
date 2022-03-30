let networkChartRx, networkChartTx

const updateNetwork = data => {
    if (!data) return

    const netChartConfig = {
        ...defaultChartConfig,
        height: 60,
        legend: {
            position: 'top-left',
            vertical: true,
            background: globalThis.chartBackground,
            margin: {
                left: 32,
                top: 0
            },
            border: {
                color: globalThis.chartBorder
            },
            padding: 5,
            font: {
                color: globalThis.chartLabelColor
            },
        },
        axis: {
            x: {
                line: {
                    color: globalThis.chartLineColor,
                    shortLineSize: 0
                },
                label: {
                    count: 6,
                    color: globalThis.chartLabelColor,
                },
            },
            y: {
                line: {
                    color: globalThis.chartLineColor
                },
                label: {
                    count: 6,
                    fixed: 0,
                    color: globalThis.chartLabelColor,
                    font: {
                        size: 10
                    },
                    skip: 2
                },
            }
        },
        arrows: false,
        padding: {
            left: 35,
            top: 5,
            right: 1,
            bottom: 10
        },
        onDrawLabelX: (v) => {
            return ``
            // return `${datetime(+v).format("HH:mm:ss")}`
        },
        onDrawLabelY: (v) => {
            return `${(+v / 1024 ** 2).toFixed(3)}`
        }
    }

    if (!networkChartRx) {
        networkChartRx = chart.areaChart("#net-load-rx", [
            getFakeData(40)
        ], {
            ...netChartConfig,
            colors: [Metro.colors.toRGBA('#aa00ff', .5)],
            areas: [
                {
                    name: "Rx",
                },
            ],
        })
    }
    if (!networkChartTx) {
        networkChartTx = chart.areaChart("#net-load-tx", [
            getFakeData(40)
        ], {
            ...netChartConfig,
            colors: [Metro.colors.toRGBA('#00AFF0', .5)],
            areas: [
                {
                    name: "Tx",
                },
            ],
        })
    }

    let [net] = data.stat

    networkChartTx.add(0, [datetime().time(), Math.round(net.tx_sec)], true, {maxX: true, maxY: true})
    networkChartRx.add(0, [datetime().time(), Math.round(net.rx_sec)], true, {maxX: true, maxY: true})

    $("#all-traffic").text( ((Math.round(net.rx_sec) + Math.round(net.tx_sec)) / 1024 / 1024).toFixed(2) )
    $("#net-conn").text( data.conn )
}