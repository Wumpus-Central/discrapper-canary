var i,
    r =
        (((i = {}).Unknown = "unknown"),
        (i.Main = "main"),
        (i.Renderer = "renderer"),
        (i.GPU = "gpu"),
        (i.Utility = "utility"),
        (i.Crashpad = "crashpad"),
        (i.Clips = "clips"),
        (i.Ndi = "ndi"),
        i);
n.d(
    t,
    {},
    {
        D: class {
            cpuCoreCount;
            getSystemMetrics(e) {
                return Promise.resolve(null);
            }
            setShouldCollectHermesInstrumentedStats(e) {}
            getCurrentHermesInstrumentedStatsSummary() {}
            getCPUCoreCount() {
                return this.cpuCoreCount;
            }
        },
        M: r,
    },
);
