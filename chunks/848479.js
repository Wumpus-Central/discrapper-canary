n.d(t, { Z: () => u });
var r = n(259443),
    i = n(579806),
    o = n(77450),
    a = n(998502);
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
let l = new r.Yd('ProcessUtilsElectron');
class c extends o.h {
    setupReportingTimer() {
        var e, t;
        let n = null === i.Z || void 0 === i.Z || null == (e = i.Z.processUtils) ? void 0 : e.setMemoryInformation;
        if (null == n) return void l.log('setMemoryInformation not available.');
        function r(e) {
            return Math.ceil(e / 1024);
        }
        (null == (t = performance.memory) ? void 0 : t.usedJSHeapSize) == null && l.error('usedJSHeapSize is not available.'),
            setInterval(() => {
                var e, t, i;
                let o = null != (t = null == (e = performance.memory) ? void 0 : e.usedJSHeapSize) ? t : 0;
                n({
                    memoryUsageKB: null != (i = this.lastMemoryUsageKB) ? i : 0,
                    usedJSHeapSizeKB: r(o)
                });
            }, 10000);
    }
    getProcessUptime() {
        var e, t;
        return null === i.Z || void 0 === i.Z || null == (t = i.Z.processUtils) || null == (e = t.getProcessUptime) ? void 0 : e.call(t);
    }
    getCurrentCPUUsagePercent() {
        var e, t;
        return null === i.Z || void 0 === i.Z || null == (t = i.Z.processUtils) || null == (e = t.getCurrentCPUUsagePercent) ? void 0 : e.call(t);
    }
    getCumulativeCPUUsage() {
        var e, t;
        return null === i.Z || void 0 === i.Z || null == (t = i.Z.processUtils) || null == (e = t.getCumulativeCPUUsage) ? void 0 : e.call(t);
    }
    getCurrentMemoryUsageKB() {
        let e = c.getCurrentMemoryUsageKBCore();
        return (this.lastMemoryUsageKB = e), e;
    }
    static getCurrentMemoryUsageKBCore() {
        try {
            let e = a.ZP.getDiscordMemoryUsage();
            if (null == e) return 0;
            let t = Object.values(e).reduce((e, t) => e + t, 0);
            return Math.ceil(t / 1024);
        } catch (e) {
            return 0;
        }
    }
    getMemoryUsageDetails() {
        return a.ZP.getDiscordMemoryUsage();
    }
    getMemoryUsageElectronRenderer() {
        try {
            return a.ZP.getDiscordMemoryUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryUsageElectronRendererUsedHeapSize() {
        var e, t;
        return null === i.Z || void 0 === i.Z || null == (t = i.Z.processUtils) || null == (e = t.getUsedHeapSize) ? void 0 : e.call(t);
    }
    constructor() {
        var e, t;
        super(), s(this, 'lastMemoryUsageKB', void 0), (this.cpuCoreCount = null === i.Z || void 0 === i.Z || null == (t = i.Z.processUtils) || null == (e = t.getCPUCoreCount) ? void 0 : e.call(t)), this.setupReportingTimer();
    }
}
let u = new c();
