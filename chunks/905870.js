n.d(t, { Z: () => b }), n(642613), n(388685), n(539854), n(361932), n(187205);
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
let d = 15 * o.Z.Millis.MINUTE,
    f = 1310720,
    _ = 1835008,
    p = 4096,
    h = !0,
    m = 12;
function g() {
    return s.isPlatformEmbedded && (0, s.isWindows)();
}
class E extends r.Z {
    _initialize() {}
    _terminate() {
        g() && (clearInterval(this._checkInterval), (this._checkInterval = null), l.Z.disablePerfMemoryHooks());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!g()) return;
        let n = null == (e = (t = i.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        ("development" === n || "canary" === n) &&
            (this._checkInterval = setInterval(() => {
                this.trackPerformanceStats();
            }, d));
    }
    trackPerformanceStats() {
        var e, t, n, r, i;
        let o = l.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null == o) return;
        let s = null != (t = null == (e = o.renderer) ? void 0 : e.wss_priv_kb) ? t : 0;
        if (
            (!this._heapHooksInstalled &&
                s > f &&
                l.Z.enablePerfMemoryHooks({
                    allocationThresholdKB: m,
                    enableCallStackTracking: h,
                }) &&
                (this._heapHooksInstalled = !0),
            this._heapHooksInstalled)
        ) {
            if (s < _) return;
            let e = l.Z.getPerfAttributedMemory();
            if (null == e) return;
            let t = [],
                o = [],
                u = [],
                d = [],
                f = Object.entries(e);
            for (let [e, a] of (f.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            f.slice(0, 10)))
                null != a &&
                    (t.push(e),
                    o.push(null != (n = a.total_allocation_kb) ? n : 0),
                    u.push(null != (r = a.allocation_count) ? r : 0),
                    d.push(null != (i = a.module_version) ? i : ""));
            let m = l.Z.getPerfAttributedMemoryStats(),
                g = null == m ? void 0 : m.events_dropped,
                E = {
                    module_name: t,
                    allocation_total_size_kb: o,
                    allocation_count: u,
                    module_version: d,
                    events_dropped: g,
                };
            if ((a.default.track(c.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, E), h)) {
                let e = f.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) => l.Z.getPerfAttributedMemoryCallstacks(e))
                    .filter((e) => null != e)
                    .flatMap((e) => e)
                    .sort((e, t) => {
                        var n, r;
                        return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0);
                    })
                    .slice(0, t)
                    .filter((e) => {
                        var t;
                        return (null != (t = e.total_alloc_kb) ? t : 0) > p;
                    })) {
                    let e = {
                        module_name: n.module_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: g,
                    };
                    a.default.track(c.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
        }
    }
    constructor(...e) {
        super(...e),
            u(this, "_checkInterval", null),
            u(this, "_heapHooksInstalled", !1),
            u(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let b = new E();
