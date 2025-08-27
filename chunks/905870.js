n.d(t, { Z: () => m }), n(642613), n(388685), n(539854), n(361932), n(187205);
var r = n(147913),
    i = n(579806),
    o = n(626135),
    a = n(70956),
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
let d = 15 * a.Z.Millis.MINUTE,
    f = 1835008,
    _ = !0;
function p() {
    return s.isPlatformEmbedded && (0, s.isWindows)();
}
class h extends r.Z {
    _initialize() {}
    _terminate() {
        p() && (clearInterval(this._checkInterval), (this._checkInterval = null), l.Z.disablePerfMemoryHooks());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!p()) return;
        let n = null == (e = (t = i.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        ("development" === n || "canary" === n) &&
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
                l.Z.enablePerfMemoryHooks({
                    allocationThresholdKB: 128,
                    enableCallStackTracking: _,
                }) &&
                (this._heapHooksInstalled = !0);
        }
        if (this._heapHooksInstalled) {
            let e = l.Z.getPerfAttributedMemory();
            if (null == e) return;
            let t = [],
                a = [],
                s = [],
                u = [],
                d = Object.entries(e);
            for (let [e, o] of (d.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, o] = t;
                return (
                    (null != (n = null == o ? void 0 : o.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            d.slice(0, 10)))
                null != o &&
                    (t.push(e),
                    a.push(null != (n = o.total_allocation_kb) ? n : 0),
                    s.push(null != (r = o.allocation_count) ? r : 0),
                    u.push(null != (i = o.module_version) ? i : ""));
            let f = l.Z.getPerfAttributedMemoryStats(),
                p = null == f ? void 0 : f.events_dropped,
                h = {
                    module_name: t,
                    allocation_total_size_kb: a,
                    allocation_count: s,
                    module_version: u,
                    events_dropped: p,
                };
            if ((o.default.track(c.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, h), _)) {
                let e = d.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) => l.Z.getPerfAttributedMemoryCallstacks(e))
                    .filter((e) => null != e)
                    .flatMap((e) => e)
                    .sort((e, t) => {
                        var n, r;
                        return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0);
                    })
                    .slice(0, t)) {
                    let e = {
                        module_name: n.module_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: p,
                    };
                    o.default.track(c.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
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
let m = new h();
