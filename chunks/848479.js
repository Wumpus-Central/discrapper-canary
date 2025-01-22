var i = r(724458);
var a = r(259443),
    o = r(579806),
    s = r(77450),
    l = r(998502);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = new a.Yd('ProcessUtilsElectron');
class d extends s.h {
    setupReportingTimer() {
        var e, n;
        let r = null === o.Z || void 0 === o.Z ? void 0 : null === (e = o.Z.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
        if (null == r) {
            c.log('setMemoryInformation not available.');
            return;
        }
        function i(e) {
            return Math.ceil(e / 1024);
        }
        (null === (n = performance.memory) || void 0 === n ? void 0 : n.usedJSHeapSize) == null && c.error('usedJSHeapSize is not available.'),
            setInterval(() => {
                var e, n, a;
                let o = null !== (n = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== n ? n : 0;
                r({
                    memoryUsageKB: null !== (a = this.lastMemoryUsageKB) && void 0 !== a ? a : 0,
                    usedJSHeapSizeKB: i(o)
                });
            }, 10000);
    }
    getProcessUptime() {
        var e, n;
        return null === o.Z || void 0 === o.Z ? void 0 : null === (n = o.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getProcessUptime) || void 0 === e ? void 0 : e.call(n);
    }
    getCurrentCPUUsagePercent() {
        var e, n;
        return null === o.Z || void 0 === o.Z ? void 0 : null === (n = o.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(n);
    }
    getCumulativeCPUUsage() {
        var e, n;
        return null === o.Z || void 0 === o.Z ? void 0 : null === (n = o.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getCumulativeCPUUsage) || void 0 === e ? void 0 : e.call(n);
    }
    getCurrentMemoryUsageKB() {
        let e = d.getCurrentMemoryUsageKBCore();
        return (this.lastMemoryUsageKB = e), e;
    }
    static getCurrentMemoryUsageKBCore() {
        try {
            let e = l.ZP.getDiscordMemoryUsage();
            if (null == e) return 0;
            let n = Object.values(e).reduce((e, n) => e + n, 0);
            return Math.ceil(n / 1024);
        } catch (e) {
            return 0;
        }
    }
    getMemoryUsageDetails() {
        return l.ZP.getDiscordMemoryUsage();
    }
    getMemoryUsageElectronRenderer() {
        try {
            return l.ZP.getDiscordMemoryUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryUsageElectronRendererUsedHeapSize() {
        var e, n;
        return null === o.Z || void 0 === o.Z ? void 0 : null === (n = o.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getUsedHeapSize) || void 0 === e ? void 0 : e.call(n);
    }
    constructor() {
        var e, n;
        super(), u(this, 'lastMemoryUsageKB', void 0), (this.cpuCoreCount = null === o.Z || void 0 === o.Z ? void 0 : null === (n = o.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getCPUCoreCount) || void 0 === e ? void 0 : e.call(n)), this.setupReportingTimer();
    }
}
n.Z = new d();
