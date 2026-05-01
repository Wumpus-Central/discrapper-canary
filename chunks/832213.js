"use strict";
n.d(t, { D: () => i });
class i {
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
