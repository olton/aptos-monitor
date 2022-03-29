let memoryGauge, memoryUsageChart

const updateMemory = (data) => {
    if (!data) return

    const memUsage = data.memory.used / (1024 ** 3)
    const memFree = data.memory.free / (1024 ** 3)
    const memTotal = data.memory.total / (1024 ** 3)

    if (!memoryUsageChart) {

        memoryUsageChart = chart.areaChart("#memory-usage", [
            getFakeData(40),
            getFakeData(40)
        ], {
            ...defaultChartConfig,
            legend: {
                position: 'top-left',
                vertical: true,
                background: globalThis.chartBackground,
                margin: {
                    left: 4,
                    top: 4
                },
                border: {
                    color: globalThis.chartBorder
                },
                padding: 2,
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
                        count: 10,
                        fixed: 0,
                        color: globalThis.chartLabelColor,
                        font: {
                            size: 10
                        }
                    },
                    skip: 2,
                },
                y: {
                    line: {
                        color: globalThis.chartLineColor
                    },
                    label: {
                        count: 10,
                        fixed: 0,
                        color: globalThis.chartLabelColor,
                        font: {
                            size: 10
                        },
                        skip: 2,
                        showLabel: false
                    }
                }
            },
            arrows: false,
            padding: 1,
            margin: 0,
            boundaries: {
                maxY: 0,
                minY: 0
            },
            onDrawLabelX: (v) => {
                return ``
            },
            height: 220,
            colors: [Metro.colors.toRGBA('#7dc37b', .5), Metro.colors.toRGBA('#aa00ff', .5)],
            areas: [
                {
                    name: "Free"
                },
                {
                    name: "Used"
                }
            ]
        });
    }

    memoryUsageChart.setBoundaries({maxY: memTotal})
    memoryUsageChart.add(0, [datetime().time() - 2000, memTotal], true)
    memoryUsageChart.add(1, [datetime().time() - 2000, memUsage], true)

    if (!memoryGauge) {
        memoryGauge = chart.gauge('#memory-use', [0], {
            ...defaultGaugeConfig,
            backStyle: globalThis.darkMode ? '#1e2228' : '#f0f6fc',
            padding: 0,
            boundaries: {
                max: Math.round(memTotal),
            },
            onDrawValue: (v, p) => {
                return +p.toFixed(0) + "%"
            }
        })
    }
    memoryGauge.setData([memUsage])

    $("#free-ram").text(memFree.toFixed(0))
    $("#used-ram").text(memUsage.toFixed(0))
    $("#ram-total").text(memTotal.toFixed(0))
}