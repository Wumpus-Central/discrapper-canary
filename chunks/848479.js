n.d(t, { Z: () => c }), n(724458);
var i = n(259443),
    r = n(579806),
    a = n(77450),
    s = n(998502);
function o(e, t, n) {
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
let l = new i.Yd('ProcessUtilsElectron');
class u extends a.h {
    setupReportingTimer() {
        var e, t;
        let n = null === r.Z || void 0 === r.Z ? void 0 : null === (e = r.Z.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
        if (null == n) {
            l.log('setMemoryInformation not available.');
            return;
        }
        function i(e) {
            return Math.ceil(e / 1024);
        }
        (null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && l.error('usedJSHeapSize is not available.'),
            setInterval(() => {
                var e, t, r;
                let a = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
                n({
                    memoryUsageKB: null !== (r = this.lastMemoryUsageKB) && void 0 !== r ? r : 0,
                    usedJSHeapSizeKB: i(a)
                });
            }, 10000);
    }
    getProcessUptime() {
        var e, t;
        return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t);
    }
    getCurrentCPUUsagePercent() {
        var e, t;
        return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t);
    }
    getCumulativeCPUUsage() {
        var e, t;
        return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCumulativeCPUUsage) || void 0 === e ? void 0 : e.call(t);
    }
    getCurrentMemoryUsageKB() {
        let e = u.getCurrentMemoryUsageKBCore();
        return (this.lastMemoryUsageKB = e), e;
    }
    static getCurrentMemoryUsageKBCore() {
        try {
            let e = s.ZP.getDiscordMemoryUsage();
            if (null == e) return 0;
            let t = Object.values(e).reduce((e, t) => e + t, 0);
            return Math.ceil(t / 1024);
        } catch (e) {
            return 0;
        }
    }
    getMemoryUsageDetails() {
        return s.ZP.getDiscordMemoryUsage();
    }
    getMemoryUsageElectronRenderer() {
        try {
            return s.ZP.getDiscordMemoryUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryUsageElectronRendererUsedHeapSize() {
        var e, t;
        return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t);
    }
    constructor() {
        var e, t;
        super(), o(this, 'lastMemoryUsageKB', void 0), (this.cpuCoreCount = null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCPUCoreCount) || void 0 === e ? void 0 : e.call(t)), this.setupReportingTimer();
    }
}
let c = new u();
