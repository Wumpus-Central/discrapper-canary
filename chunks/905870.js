n.d(t, { Z: () => h }), n(642613), n(388685), n(539854);
var r = n(147913),
    i = n(579806),
    a = n(626135),
    o = n(70956),
    s = n(358085),
    l = n(848479),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = 5 * o.Z.Millis.MINUTE,
    f = 1048576;
function _() {
    return s.isPlatformEmbedded && (0, s.isWindows)();
}
class p extends r.Z {
    _initialize() {}
    _terminate() {
        _() && (clearInterval(this._checkInterval), (this._checkInterval = null), l.Z.disablePerfMemoryHooks());
    }
    handlePostConnectionOpen() {
        var e, t;
        _() &&
            "development" === (null == (e = (t = i.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t)) &&
            (this._checkInterval = setInterval(() => {
                this.trackPerformanceStats();
            }, d));
    }
    trackPerformanceStats() {
        var e, t, n, r, i;
        if (!this._heapHooksInstalled) {
            let n = l.Z.getMemoryUsageElectronProcessTypeDetails();
            if (null == n) return;
            (null != (t = null == (e = n.renderer) ? void 0 : e.wss_priv_kb) ? t : 0) > f &&
                l.Z.enablePerfMemoryHooks({ allocationThresholdKB: 256 }) &&
                (this._heapHooksInstalled = !0);
        }
        if (this._heapHooksInstalled) {
            let e = l.Z.getPerfAttributedMemory();
            if (null == e) return;
            let t = [],
                o = [],
                s = [],
                u = [],
                d = Object.entries(e);
            for (let [e, a] of (d.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            d.slice(0, 10)))
                null != a &&
                    (t.push(e),
                    o.push(null != (n = a.total_allocation_kb) ? n : 0),
                    s.push(null != (r = a.allocation_count) ? r : 0),
                    u.push(null != (i = a.module_version) ? i : ""));
            let f = {
                module_name: t,
                allocation_total_size_kb: o,
                allocation_count: s,
                module_version: u,
            };
            a.default.track(c.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, f);
        }
    }
    constructor(...e) {
        super(...e),
            u(this, "_checkInterval", null),
            u(this, "_heapHooksInstalled", !1),
            u(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let h = new p();
