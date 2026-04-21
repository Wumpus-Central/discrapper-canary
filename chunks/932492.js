"use strict";
n.d(t, { A: () => h });
var r = n(687658),
    i = n(626584),
    s = n(723702),
    a = n(321034),
    o = n(837921),
    l = n(358203);
let u = new i.A("RunningGameSystemMetricsMonitor"),
    c = 1e3,
    d = 3e4,
    _ = [50, 95, 99];
function f(e) {
    let t = e.getReport(_);
    return {
        p50: t.percentiles[50] ?? 0,
        p95: t.percentiles[95] ?? 0,
        p99: t.percentiles[99] ?? 0,
        avg: t.mean,
        max: t.max,
        min: t.min,
    };
}
class p {
    cpuHistogram = new r.d();
    memoryHistogram = new r.d();
    gpuMemoryHistogram = new r.d();
    discordMemoryHistogram = new r.d();
    lastCpuSnapshot = null;
    samplingInterval = null;
    gpuSamplingInterval = null;
    discordMediaReady = !1;
    isExperimentEnabled() {
        return l.M.getConfig({ location: "RunningGameSystemMetricsMonitor" }).enabled;
    }
    enable() {
        this.isExperimentEnabled() &&
            null == this.samplingInterval &&
            (this.resetHistograms(),
            this.initDiscordMediaModule(),
            (this.samplingInterval = setInterval(() => {
                this.takeSample();
            }, c)),
            (this.gpuSamplingInterval = setInterval(() => {
                this.sampleGpuMemory();
            }, d)));
    }
    disable() {
        null != this.samplingInterval && (clearInterval(this.samplingInterval), (this.samplingInterval = null)),
            null != this.gpuSamplingInterval &&
                (clearInterval(this.gpuSamplingInterval), (this.gpuSamplingInterval = null)),
            (this.lastCpuSnapshot = null),
            this.resetHistograms();
    }
    getSnapshot() {
        if (
            [this.cpuHistogram, this.memoryHistogram, this.gpuMemoryHistogram, this.discordMemoryHistogram].every(
                (e) => 0 === e.getReport().count,
            )
        )
            return null;
        let e = f(this.cpuHistogram),
            t = f(this.memoryHistogram),
            n = f(this.gpuMemoryHistogram),
            r = f(this.discordMemoryHistogram);
        return (
            this.resetHistograms(),
            {
                system_cpu_pct_p50: e.p50,
                system_cpu_pct_p95: e.p95,
                system_cpu_pct_p99: e.p99,
                system_cpu_pct_avg: e.avg,
                system_cpu_pct_max: e.max,
                system_cpu_pct_min: e.min,
                system_memory_pct_p50: t.p50,
                system_memory_pct_p95: t.p95,
                system_memory_pct_p99: t.p99,
                system_memory_pct_avg: t.avg,
                system_memory_pct_max: t.max,
                system_memory_pct_min: t.min,
                system_gpu_memory_pct_p50: n.p50,
                system_gpu_memory_pct_p95: n.p95,
                system_gpu_memory_pct_p99: n.p99,
                system_gpu_memory_pct_avg: n.avg,
                system_gpu_memory_pct_max: n.max,
                system_gpu_memory_pct_min: n.min,
                discord_memory_pct_p50: r.p50,
                discord_memory_pct_p95: r.p95,
                discord_memory_pct_p99: r.p99,
                discord_memory_pct_avg: r.avg,
                discord_memory_pct_max: r.max,
                discord_memory_pct_min: r.min,
            }
        );
    }
    resetHistograms() {
        (this.cpuHistogram = new r.d()),
            (this.memoryHistogram = new r.d()),
            (this.gpuMemoryHistogram = new r.d()),
            (this.discordMemoryHistogram = new r.d());
    }
    async initDiscordMediaModule() {
        if (s.isPlatformEmbedded && (0, s.isWindows)())
            try {
                await o.Ay.ensureModule("discord_media"), (this.discordMediaReady = !0);
            } catch (e) {
                u.warn("Failed to initialize Discord media module", e?.message), (this.discordMediaReady = !1);
            }
    }
    async takeSample() {
        this.sampleDiscordMemory(), await this.sampleCpuAndMemory();
    }
    async sampleCpuAndMemory() {
        try {
            let e = await a.A.getSystemMetrics();
            if (null == e) return;
            if (e.memoryTotal > 0) {
                let t = ((e.memoryTotal - e.memoryFree) / e.memoryTotal) * 100;
                this.memoryHistogram.addSample(t);
            }
            if (null != this.lastCpuSnapshot) {
                let t = e.cpuTotalTick - this.lastCpuSnapshot.cpuTotalTick,
                    n = e.cpuTotalIdle - this.lastCpuSnapshot.cpuTotalIdle;
                if (t > 0) {
                    let e = ((t - n) / t) * 100;
                    this.cpuHistogram.addSample(e);
                }
            }
            this.lastCpuSnapshot = e;
        } catch (e) {
            u.warn("Failed to sample CPU/memory metrics", e?.message);
        }
    }
    async sampleGpuMemory() {
        if (this.discordMediaReady)
            try {
                let e = o.Ay.requireModule("discord_media");
                if (e?.getMemoryUsageBlob == null) return;
                let t = await e.getMemoryUsageBlob(),
                    n = t?.[0]?.data?.gpus ?? [],
                    r = new Set(),
                    i = 0,
                    s = 0;
                for (let e of n)
                    if (
                        !(!e.luid || 0 === e.luid || r.has(e.luid)) &&
                        (r.add(e.luid), null != e.memory && e.memory > 0)
                    ) {
                        i += e.memory;
                        let t = 0;
                        if (null != e.memory_usage)
                            for (let n of e.memory_usage) null != n.memory_usage && (t += n.memory_usage);
                        s += t;
                    }
                if (i > 0) {
                    let e = (s / i) * 100;
                    this.gpuMemoryHistogram.addSample(e);
                }
            } catch (e) {
                u.warn("Failed to sample GPU memory metrics", e?.message);
            }
    }
    sampleDiscordMemory() {
        try {
            let e;
            if (null == this.lastCpuSnapshot || this.lastCpuSnapshot.memoryTotal <= 0) return;
            let t = a.A.getCurrentMemoryUsageKB();
            if (null != t && t > 0) e = 1024 * t;
            else {
                let t = a.A.getMemoryUsageDetails();
                if (null == t || (e = Object.values(t).reduce((e, t) => e + t, 0)) <= 0) return;
            }
            let n = (e / this.lastCpuSnapshot.memoryTotal) * 100;
            this.discordMemoryHistogram.addSample(n);
        } catch (e) {
            u.warn("Failed to sample Discord memory metrics", e?.message);
        }
    }
}
let h = new p();
