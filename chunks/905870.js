n.d(t, { Z: () => v }), n(642613), n(388685), n(539854), n(361932), n(187205);
var r = n(147913),
    i = n(579806),
    a = n(131951),
    o = n(626135),
    s = n(70956),
    l = n(358085),
    c = n(848479),
    u = n(998502),
    d = n(981631);
function f(e, t, n) {
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
let _ = 15 * s.Z.Millis.MINUTE,
    p = 3145728,
    h = 5242880,
    m = 4096,
    g = 12,
    E = !0,
    b = !0;
function y() {
    return l.isPlatformEmbedded && (0, l.isWindows)();
}
class O extends r.Z {
    _initialize() {}
    _terminate() {
        y() && (clearInterval(this._checkInterval), (this._checkInterval = null), c.Z.disablePerfMemoryHooks());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!y()) return;
        let n = null == (e = (t = i.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        ("development" === n || "canary" === n) &&
            (this._checkInterval = setInterval(async () => {
                await this.trackPerformanceStats();
            }, _));
    }
    async trackPerformanceStats() {
        var e, t, n, r, i;
        let s = c.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null == s) return;
        let l = null != (t = null == (e = s.renderer) ? void 0 : e.wss_priv_kb) ? t : 0;
        if (
            (!this._heapHooksInstalled &&
                l > p &&
                c.Z.enablePerfMemoryHooks({
                    allocationThresholdKB: g,
                    enableCallStackTracking: E,
                }) &&
                (this._heapHooksInstalled = !0),
            this._heapHooksInstalled)
        ) {
            if (l < h) return;
            let e = c.Z.getPerfAttributedMemory();
            if (null == e) return;
            let t = [],
                s = [],
                f = [],
                _ = [],
                p = Object.entries(e);
            for (let [e, a] of (p.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            p.slice(0, 10)))
                null != a &&
                    (t.push(e),
                    s.push(null != (n = a.total_allocation_kb) ? n : 0),
                    f.push(null != (r = a.allocation_count) ? r : 0),
                    _.push(null != (i = a.module_version) ? i : ""));
            let g = c.Z.getPerfAttributedMemoryStats(),
                y = null == g ? void 0 : g.events_dropped,
                O = {
                    module_name: t,
                    allocation_total_size_kb: s,
                    allocation_count: f,
                    module_version: _,
                    events_dropped: y,
                };
            if ((o.default.track(d.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, O), E)) {
                let e = p.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) => c.Z.getPerfAttributedMemoryCallstacks(e))
                    .filter((e) => null != e)
                    .flatMap((e) => e)
                    .sort((e, t) => {
                        var n, r;
                        return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0);
                    })
                    .slice(0, t)
                    .filter((e) => {
                        var t;
                        return (null != (t = e.total_alloc_kb) ? t : 0) > m;
                    })) {
                    let e = {
                        module_name: n.module_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: y,
                    };
                    o.default.track(d.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
            b &&
                this._pushedDeadlockMinidumpCount < 5 &&
                (await u.ZP.submitLiveCrashReport({
                    message: "Desktop Memory Thread State",
                    extra: {
                        renderer_memory_kb: l,
                        gpu_brand: a.Z.getGpuBrand(),
                    },
                }),
                (this._pushedDeadlockMinidumpCount += 1));
        }
    }
    constructor(...e) {
        super(...e),
            f(this, "_checkInterval", null),
            f(this, "_heapHooksInstalled", !1),
            f(this, "_pushedDeadlockMinidumpCount", 0),
            f(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let v = new O();
