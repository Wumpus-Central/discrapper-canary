"use strict";
n.d(t, { A: () => o }), n(817476);
let { getDeviceState: i, logger: r } = n(82193);
var s = n(321034),
    a = n(687658);
class o {
    cpuHistogram = new a.d();
    memoryHistogram = new a.d();
    startCPU = s.A.getCumulativeCPUUsage();
    lastCPU = this.startCPU;
    lastBattery = null;
    getStats() {
        let e = this.cpuHistogram.getReport(),
            t = this.memoryHistogram.getReport(),
            n = s.A.getCumulativeCPUUsage(),
            i =
                null == this.startCPU || null == n
                    ? void 0
                    : ((n.usage - this.startCPU.usage) * 100) / ((n.sampleTime - this.startCPU.sampleTime) / 1e3);
        return {
            client_performance_cpu_percentile25: e.percentiles[25],
            client_performance_cpu_percentile50: e.percentiles[50],
            client_performance_cpu_percentile75: e.percentiles[75],
            client_performance_cpu_percentile90: e.percentiles[90],
            client_performance_cpu_percentile95: e.percentiles[95],
            client_performance_cpu_mean: null != i ? i : e.mean,
            client_performance_memory_percentile25: t.percentiles[25],
            client_performance_memory_percentile50: t.percentiles[50],
            client_performance_memory_percentile75: t.percentiles[75],
            client_performance_memory_percentile90: t.percentiles[90],
            client_performance_memory_percentile95: t.percentiles[95],
            client_performance_memory_min: t.min,
            client_performance_memory_max: t.max,
            client_performance_memory_mean: t.mean,
        };
    }
    takeSample() {
        let e = s.A.getCumulativeCPUUsage(),
            t = s.A.getCurrentMemoryUsageKB();
        if (null != e) {
            let t = !0;
            if (null != this.lastCPU) {
                let n = e.sampleTime - this.lastCPU.sampleTime;
                if (n >= 1) {
                    let t = e.usage - this.lastCPU.usage;
                    this.cpuHistogram.addSample((t / (n / 1e3)) * 100, n);
                } else t = !1;
            }
            t && (this.lastCPU = e);
        } else {
            let e = s.A.getCurrentCPUUsagePercent();
            null != e && this.cpuHistogram.addSample(e);
        }
        null != t && this.memoryHistogram.addSample(t);
    }
    async getCurrentBattery() {
        try {
            let { batteryLevel: e } = await i({ fallback: !1 });
            return e;
        } catch (e) {
            return null;
        }
    }
    async setLastBattery() {
        this.lastBattery = await this.getCurrentBattery();
    }
    async getBatteryLevelStats() {
        let e = await this.getCurrentBattery();
        return null == this.lastBattery || null == e
            ? { startBattery: this.lastBattery, currentBattery: e, batteryUsageRounded: null }
            : {
                  startBattery: this.lastBattery,
                  currentBattery: e,
                  batteryUsageRounded: Math.round((e - this.lastBattery) * 1e3) / 1e3,
              };
    }
}
