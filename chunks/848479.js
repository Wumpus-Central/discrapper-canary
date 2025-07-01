n.d(t, { Z: () => u });
var r = n(579806),
    i = n(710845),
    a = n(77450),
    o = n(998502);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new i.Z('ProcessUtilsElectron');
class c extends a.h {
    setupReportingTimer() {
        var e, t;
        let n = null === r.Z || void 0 === r.Z || null == (e = r.Z.processUtils) ? void 0 : e.setMemoryInformation;
        if (null == n) return void l.log('setMemoryInformation not available.');
        function i(e) {
            return Math.ceil(e / 1024);
        }
        ((null == (t = performance.memory) ? void 0 : t.usedJSHeapSize) == null && l.error('usedJSHeapSize is not available.'),
            setInterval(() => {
                var e, t, r;
                let a = null != (t = null == (e = performance.memory) ? void 0 : e.usedJSHeapSize) ? t : 0;
                n({
                    memoryUsageKB: null != (r = this.lastMemoryUsageKB) ? r : 0,
                    usedJSHeapSizeKB: i(a)
                });
            }, 10000));
    }
    getProcessUptime() {
        var e, t;
        return null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getProcessUptime) ? void 0 : e.call(t);
    }
    getCurrentCPUUsagePercent() {
        var e, t;
        return null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getCurrentCPUUsagePercent) ? void 0 : e.call(t);
    }
    getCumulativeCPUUsage() {
        var e, t;
        return null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getCumulativeCPUUsage) ? void 0 : e.call(t);
    }
    getCurrentMemoryUsageKB() {
        let e = c.getCurrentMemoryUsageKBCore();
        return ((this.lastMemoryUsageKB = e), e);
    }
    static getCurrentMemoryUsageKBCore() {
        try {
            let e = o.ZP.getDiscordMemoryUsage();
            if (null == e) return 0;
            let t = Object.values(e).reduce((e, t) => e + t, 0);
            return Math.ceil(t / 1024);
        } catch (e) {
            return 0;
        }
    }
    getMemoryUsageDetails() {
        return o.ZP.getDiscordMemoryUsage();
    }
    getMemoryUsageElectronRenderer() {
        try {
            return o.ZP.getDiscordMemoryUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryUsageElectronRendererUsedHeapSize() {
        var e, t;
        return null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getUsedHeapSize) ? void 0 : e.call(t);
    }
    getMemoryUsageElectronProcessTypeDetails() {
        try {
            return o.ZP.getDiscordMemoryUsageElectronProcessTypeDetails();
        } catch (e) {
            return null;
        }
    }
    constructor() {
        var e, t;
        (super(), s(this, 'lastMemoryUsageKB', void 0), (this.cpuCoreCount = null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getCPUCoreCount) ? void 0 : e.call(t)), this.setupReportingTimer());
    }
}
let u = new c();
