"use strict";
n.d(t, { D: () => s, M: () => r });
var i,
    r =
        (((i = {}).Unknown = "unknown"),
        (i.Main = "main"),
        (i.Renderer = "renderer"),
        (i.GPU = "gpu"),
        (i.Utility = "utility"),
        (i.Crashpad = "crashpad"),
        i);
class s {
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
