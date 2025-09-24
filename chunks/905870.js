n.d(t, { Z: () => O }), n(642613), n(388685), n(539854), n(361932), n(187205);
var r = n(147913),
    i = n(579806),
    a = n(626135),
    o = n(70956),
    s = n(358085),
    l = n(848479),
    c = n(998502),
    u = n(981631);
function d(e, t, n) {
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
let f = 15 * o.Z.Millis.MINUTE,
    _ = 1310720,
    p = 1835008,
    h = 4096,
    m = 12,
    g = !0,
    E = !0;
function b() {
    return s.isPlatformEmbedded && (0, s.isWindows)();
}
class y extends r.Z {
    _initialize() {}
    _terminate() {
        b() && (clearInterval(this._checkInterval), (this._checkInterval = null), l.Z.disablePerfMemoryHooks());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!b()) return;
        let n = null == (e = (t = i.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        ("development" === n || "canary" === n) &&
            (this._checkInterval = setInterval(async () => {
                await this.trackPerformanceStats();
            }, f));
    }
    async trackPerformanceStats() {
        var e, t, n, r, i;
        let o = l.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null == o) return;
        let s = null != (t = null == (e = o.renderer) ? void 0 : e.wss_priv_kb) ? t : 0;
        if (
            (!this._heapHooksInstalled &&
                s > _ &&
                l.Z.enablePerfMemoryHooks({
                    allocationThresholdKB: m,
                    enableCallStackTracking: g,
                }) &&
                (this._heapHooksInstalled = !0),
            this._heapHooksInstalled)
        ) {
            if (s < p) return;
            let e = l.Z.getPerfAttributedMemory();
            if (null == e) return;
            let t = [],
                o = [],
                d = [],
                f = [],
                _ = Object.entries(e);
            for (let [e, a] of (_.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            _.slice(0, 10)))
                null != a &&
                    (t.push(e),
                    o.push(null != (n = a.total_allocation_kb) ? n : 0),
                    d.push(null != (r = a.allocation_count) ? r : 0),
                    f.push(null != (i = a.module_version) ? i : ""));
            let m = l.Z.getPerfAttributedMemoryStats(),
                b = null == m ? void 0 : m.events_dropped,
                y = {
                    module_name: t,
                    allocation_total_size_kb: o,
                    allocation_count: d,
                    module_version: f,
                    events_dropped: b,
                };
            if ((a.default.track(u.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, y), g)) {
                let e = _.slice(0, 3).map((e) => e[0]),
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
                        return (null != (t = e.total_alloc_kb) ? t : 0) > h;
                    })) {
                    let e = {
                        module_name: n.module_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: b,
                    };
                    a.default.track(u.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
            E &&
                this._pushedDeadlockMinidumpCount < 5 &&
                (await c.ZP.submitLiveCrashReport({
                    message: "Desktop Memory Thread State",
                    extra: { renderer_memory_kb: s },
                }),
                (this._pushedDeadlockMinidumpCount += 1));
        }
    }
    constructor(...e) {
        super(...e),
            d(this, "_checkInterval", null),
            d(this, "_heapHooksInstalled", !1),
            d(this, "_pushedDeadlockMinidumpCount", 0),
            d(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let O = new y();
