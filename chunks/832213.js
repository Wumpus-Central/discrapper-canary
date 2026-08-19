"use strict";
n.d(t, { D: () => a, M: () => r });
var i,
    r =
        (((i = {}).Unknown = "unknown"),
        (i.Main = "main"),
        (i.Renderer = "renderer"),
        (i.GPU = "gpu"),
        (i.Utility = "utility"),
        (i.Crashpad = "crashpad"),
        (i.Clips = "clips"),
        i);
class a {
    cpuCoreCount;
    getSystemMetrics() {
        return Promise.resolve(null);
    }
    setShouldCollectHermesInstrumentedStats(e) {}
    getCurrentHermesInstrumentedStatsSummary() {}
    getCPUCoreCount() {
        return this.cpuCoreCount;
    }
}
