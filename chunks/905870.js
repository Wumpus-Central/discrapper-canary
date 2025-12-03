n.d(t, { Z: () => F }), n(642613), n(388685), n(539854), n(361932), n(187205);
var r = n(268146),
    i = n(433517),
    a = n(147913),
    o = n(579806),
    s = n(703558),
    l = n(517100),
    c = n(131951),
    u = n(19780),
    d = n(626135),
    f = n(70956),
    p = n(358085),
    _ = n(848479),
    m = n(960048),
    h = n(998502),
    g = n(4087),
    E = n(981631);
function b(e, t, n) {
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
let y = 1048576,
    O = 15 * f.Z.Millis.MINUTE,
    v = 2 * y,
    S = 3 * y,
    I = 4096,
    T = 12,
    A = !0,
    C = !0,
    N = 15 * f.Z.Millis.MINUTE,
    P = +y,
    R = 1.5 * y,
    w = 256,
    D = 12,
    x = !0,
    L = 4 * y,
    j = 30 * f.Z.Millis.MINUTE,
    M = 8 * y,
    k = 60 * f.Z.Millis.MINUTE,
    U = "lastMemoryUsageRestart",
    G = +f.Z.Millis.DAY;
function Z() {
    return p.isPlatformEmbedded && (0, p.isWindows)();
}
class B extends a.Z {
    _initialize() {}
    _terminate() {
        Z() &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = null),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = null),
            _.Z.disablePerfMemoryHooks(),
            _.Z.disablePAMemoryProfiler());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!Z()) return;
        let n = null == (e = (t = o.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        ("development" === n || "canary" === n) &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = setInterval(async () => {
                await this.trackNativeHeapPerformanceStats();
            }, O)),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = setInterval(async () => {
                await this.trackPartitionAllocPerformanceStats();
            }, N)));
    }
    async trackNativeHeapPerformanceStats() {
        var e, t, n, a, o;
        let f = _.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null == f) return;
        let p = null != (t = null == (e = f.renderer) ? void 0 : e.wss_priv_kb) ? t : 0;
        if (
            (!this._nativeHeapHooksInstalled &&
                p > v &&
                _.Z.enablePerfMemoryHooks({
                    allocationThresholdKB: T,
                    enableCallStackTracking: A,
                }) &&
                (this._nativeHeapHooksInstalled = !0),
            this._nativeHeapHooksInstalled)
        ) {
            if (p < S) return;
            let e = _.Z.getPerfAttributedMemory();
            if (null == e) return;
            let t = [],
                r = [],
                i = [],
                s = [],
                l = Object.entries(e);
            for (let [e, c] of (l.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            l.slice(0, 10)))
                null != c &&
                    (t.push(e),
                    r.push(null != (n = c.total_allocation_kb) ? n : 0),
                    i.push(null != (a = c.allocation_count) ? a : 0),
                    s.push(null != (o = c.module_version) ? o : ""));
            let u = _.Z.getPerfAttributedMemoryStats(),
                f = null == u ? void 0 : u.events_dropped,
                m = {
                    memory_type: "native_heap",
                    module_name: t,
                    allocation_total_size_kb: r,
                    allocation_count: i,
                    module_version: s,
                    events_dropped: f,
                };
            if ((d.default.track(E.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, m), A)) {
                let e = l.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) => _.Z.getPerfAttributedMemoryCallstacks(e))
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
                        memory_type: "native_heap",
                        module_name: n.module_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: f,
                    };
                    d.default.track(E.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
            C &&
                this._pushedNativeDeadlockMinidumpCount < 5 &&
                (await h.ZP.submitLiveCrashReport({
                    message: "Desktop Memory Thread State",
                    extra: {
                        renderer_memory_kb: p,
                        gpu_brand: c.Z.getGpuBrand(),
                    },
                }),
                (this._pushedNativeDeadlockMinidumpCount += 1));
        }
        if (p >= L) {
            let e = performance.now() - this._startupTime;
            if (e < k) return;
            let t = i.K.get(U);
            if (null != t && t.timestamp >= Date.now() - G) return;
            let n = !0,
                { enable: a, enableForce: o } = g.Z.getConfig({ location: "DesktopPerfAnalyticsManager" });
            if (!a) return;
            if (p < M || !o) {
                let e = l.Z.getIdleSince();
                if (null == e || e > Date.now() - j || null != u.Z.getRTCConnection()) return;
            } else n = !1;
            s.Z.persist(),
                i.K.set(U, {
                    timeSinceStartup: e,
                    timestamp: Date.now(),
                }),
                h.ZP.setCrashInformation(
                    r.X4.IntentionalCrashReason,
                    "excessive-memory-usage".concat(n ? "-forced" : ""),
                ),
                m.Z.addBreadcrumb({
                    category: "excessive-memory-usage-restart",
                    message: "Restarting due to excessive renderer memory usage: ".concat(p, "kB"),
                }),
                h.ZP.crash(3);
        }
    }
    trackPartitionAllocPerformanceStats() {
        var e, t, n;
        let r = _.Z.getPartitionAllocatorStats();
        if (null == r) return;
        let i = null != (e = r.total_alloc_kb) ? e : 0;
        if (!this._paHeapHooksInstalled && i > P) {
            let e = _.Z.enablePAMemoryProfiler({
                allocationThresholdKB: D,
                enableCallStackTracking: x,
            });
            null != e && e && (this._paHeapHooksInstalled = !0);
        }
        if (this._paHeapHooksInstalled) {
            if (i < R) return;
            let e = _.Z.getPerfAttributedPAMemory();
            if (null == e) return;
            let r = [],
                a = [],
                o = [],
                s = [],
                l = Object.entries(e);
            for (let [e, i] of (l.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            l.slice(0, 10)))
                null != i &&
                    (r.push(e),
                    a.push(null != (t = i.total_allocation_kb) ? t : 0),
                    o.push(null != (n = i.allocation_count) ? n : 0),
                    s.push(""));
            let c = {
                memory_type: "part_alloc",
                module_name: r,
                allocation_total_size_kb: a,
                allocation_count: o,
                module_version: s,
                events_dropped: void 0,
            };
            if ((d.default.track(E.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, c), x)) {
                let e = l.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) => _.Z.getPerfAttributedPAMemoryCallstacks({ typeName: e }))
                    .filter((e) => null != e)
                    .flatMap((e) => e)
                    .sort((e, t) => {
                        var n, r;
                        return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0);
                    })
                    .slice(0, t)
                    .filter((e) => {
                        var t;
                        return (null != (t = e.total_alloc_kb) ? t : 0) > w;
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
                    d.default.track(E.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
        }
    }
    constructor(...e) {
        super(...e),
            b(this, "_checkIntervalNativeHeap", null),
            b(this, "_checkIntervalPA", null),
            b(this, "_nativeHeapHooksInstalled", !1),
            b(this, "_paHeapHooksInstalled", !1),
            b(this, "_pushedNativeDeadlockMinidumpCount", 0),
            b(this, "_startupTime", performance.now()),
            b(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let F = new B();
