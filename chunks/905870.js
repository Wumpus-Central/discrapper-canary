n.d(t, { Z: () => P }), n(642613), n(388685), n(539854), n(361932), n(187205);
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
let p = 1048576,
    _ = 15 * s.Z.Millis.MINUTE,
    m = 3 * p,
    h = 5 * p,
    g = 4096,
    E = 12,
    b = !0,
    y = !0,
    O = 15 * s.Z.Millis.MINUTE,
    v = +p,
    S = 1.5 * p,
    I = 256,
    T = 12,
    A = !0;
function C() {
    return l.isPlatformEmbedded && (0, l.isWindows)();
}
class N extends r.Z {
    _initialize() {}
    _terminate() {
        C() &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = null),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = null),
            c.Z.disablePerfMemoryHooks(),
            c.Z.disablePAMemoryProfiler());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!C()) return;
        let n = null == (e = (t = i.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        ("development" === n || "canary" === n) &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = setInterval(async () => {
                await this.trackNativeHeapPerformanceStats();
            }, _)),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = setInterval(async () => {
                await this.trackPartitionAllocPerformanceStats();
            }, O)));
    }
    async trackNativeHeapPerformanceStats() {
        var e, t, n, r, i;
        let s = c.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null == s) return;
        let l = null != (t = null == (e = s.renderer) ? void 0 : e.wss_priv_kb) ? t : 0;
        if (
            (!this._nativeHeapHooksInstalled &&
                l > m &&
                c.Z.enablePerfMemoryHooks({
                    allocationThresholdKB: E,
                    enableCallStackTracking: b,
                }) &&
                (this._nativeHeapHooksInstalled = !0),
            this._nativeHeapHooksInstalled)
        ) {
            if (l < h) return;
            let e = c.Z.getPerfAttributedMemory();
            if (null == e) return;
            let t = [],
                s = [],
                f = [],
                p = [],
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
                    s.push(null != (n = a.total_allocation_kb) ? n : 0),
                    f.push(null != (r = a.allocation_count) ? r : 0),
                    p.push(null != (i = a.module_version) ? i : ""));
            let m = c.Z.getPerfAttributedMemoryStats(),
                E = null == m ? void 0 : m.events_dropped,
                O = {
                    memory_type: "native_heap",
                    module_name: t,
                    allocation_total_size_kb: s,
                    allocation_count: f,
                    module_version: p,
                    events_dropped: E,
                };
            if ((o.default.track(d.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, O), b)) {
                let e = _.slice(0, 3).map((e) => e[0]),
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
                        return (null != (t = e.total_alloc_kb) ? t : 0) > g;
                    })) {
                    let e = {
                        memory_type: "native_heap",
                        module_name: n.module_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: E,
                    };
                    o.default.track(d.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
            y &&
                this._pushedNativeDeadlockMinidumpCount < 5 &&
                (await u.ZP.submitLiveCrashReport({
                    message: "Desktop Memory Thread State",
                    extra: {
                        renderer_memory_kb: l,
                        gpu_brand: a.Z.getGpuBrand(),
                    },
                }),
                (this._pushedNativeDeadlockMinidumpCount += 1));
        }
    }
    trackPartitionAllocPerformanceStats() {
        var e, t, n;
        let r = c.Z.getPartitionAllocatorStats();
        if (null == r) return;
        let i = null != (e = r.total_alloc_kb) ? e : 0;
        if (!this._paHeapHooksInstalled && i > v) {
            let e = c.Z.enablePAMemoryProfiler({
                allocationThresholdKB: T,
                enableCallStackTracking: A,
            });
            null != e && e && (this._paHeapHooksInstalled = !0);
        }
        if (this._paHeapHooksInstalled) {
            if (i < S) return;
            let e = c.Z.getPerfAttributedPAMemory();
            if (null == e) return;
            let r = [],
                a = [],
                s = [],
                l = [],
                u = Object.entries(e);
            for (let [e, i] of (u.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            u.slice(0, 10)))
                null != i &&
                    (r.push(e),
                    a.push(null != (t = i.total_allocation_kb) ? t : 0),
                    s.push(null != (n = i.allocation_count) ? n : 0),
                    l.push(""));
            let f = {
                memory_type: "part_alloc",
                module_name: r,
                allocation_total_size_kb: a,
                allocation_count: s,
                module_version: l,
                events_dropped: void 0,
            };
            if ((o.default.track(d.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, f), A)) {
                let e = u.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) => c.Z.getPerfAttributedPAMemoryCallstacks({ typeName: e }))
                    .filter((e) => null != e)
                    .flatMap((e) => e)
                    .sort((e, t) => {
                        var n, r;
                        return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0);
                    })
                    .slice(0, t)
                    .filter((e) => {
                        var t;
                        return (null != (t = e.total_alloc_kb) ? t : 0) > I;
                    })) {
                    let e = {
                        memory_type: "part_alloc",
                        module_name: n.type_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: void 0,
                    };
                    o.default.track(d.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
        }
    }
    constructor(...e) {
        super(...e),
            f(this, "_checkIntervalNativeHeap", null),
            f(this, "_checkIntervalPA", null),
            f(this, "_nativeHeapHooksInstalled", !1),
            f(this, "_paHeapHooksInstalled", !1),
            f(this, "_pushedNativeDeadlockMinidumpCount", 0),
            f(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let P = new N();
