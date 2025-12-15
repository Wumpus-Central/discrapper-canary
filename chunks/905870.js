n.d(t, { Z: () => K }), n(642613), n(388685), n(539854), n(361932), n(187205);
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
    C = !0,
    A = !0,
    N = 15 * f.Z.Millis.MINUTE,
    P = +y,
    R = 1.5 * y,
    w = 256,
    D = 12,
    x = !0,
    L = 15 * f.Z.Millis.MINUTE,
    j = 0.75 * y,
    M = +y,
    k = 64,
    U = 4 * y,
    G = 30 * f.Z.Millis.MINUTE,
    Z = 8 * y,
    F = 60 * f.Z.Millis.MINUTE,
    B = "lastMemoryUsageRestart",
    V = +f.Z.Millis.DAY,
    H = +f.Z.Millis.MINUTE;
function Y() {
    return p.isPlatformEmbedded && (0, p.isWindows)();
}
class W extends a.Z {
    _initialize() {}
    _terminate() {
        Y() &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = null),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = null),
            clearInterval(this._checkIntervalV8),
            (this._checkIntervalV8 = null),
            _.Z.disablePerfMemoryHooks(),
            _.Z.disablePAMemoryProfiler(),
            _.Z.disableProfilingV8Heap());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!Y()) return;
        let n = null == (e = (t = o.Z.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        "development" !== n && "canary" !== n && (this._supportedNativeChannel = !1),
            clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = setInterval(async () => {
                await this.trackNativeHeapPerformanceStats();
            }, O)),
            this._supportedNativeChannel &&
                (clearInterval(this._checkIntervalPA),
                (this._checkIntervalPA = setInterval(async () => {
                    await this.trackPartitionAllocPerformanceStats();
                }, N)),
                clearInterval(this._checkIntervalV8),
                (this._checkIntervalV8 = setInterval(async () => {
                    await this.trackV8HeapAlloc();
                }, L)));
    }
    async trackNativeHeapPerformanceStats() {
        var e, t;
        let n = _.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null == n) return;
        let r = null != (t = null == (e = n.renderer) ? void 0 : e.wss_priv_kb) ? t : 0;
        !this._nativeHeapHooksInstalled &&
            this._supportedNativeChannel &&
            r > v &&
            _.Z.enablePerfMemoryHooks({
                allocationThresholdKB: T,
                enableCallStackTracking: C,
            }) &&
            (this._nativeHeapHooksInstalled = !0),
            this._nativeHeapHooksInstalled && (await this.trackNativeHeapHookStats(r)),
            this.doRestartIfNeeded(r);
    }
    async trackNativeHeapHookStats(e) {
        if (e < S) return;
        let t = _.Z.getPerfAttributedMemory();
        if (null == t) return;
        let n = [],
            r = [],
            i = [],
            a = [],
            o = Object.entries(t);
        for (let [e, t] of (o.sort((e, t) => {
            var n, r;
            let [, i] = e,
                [, a] = t;
            return (
                (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
            );
        }),
        o.slice(0, 10)))
            if (null != t) {
                var s, l, u;
                n.push(e),
                    r.push(null != (s = t.total_allocation_kb) ? s : 0),
                    i.push(null != (l = t.allocation_count) ? l : 0),
                    a.push(null != (u = t.module_version) ? u : "");
            }
        let f = _.Z.getPerfAttributedMemoryStats(),
            p = null == f ? void 0 : f.events_dropped,
            m = {
                memory_type: "native_heap",
                module_name: n,
                allocation_total_size_kb: r,
                allocation_count: i,
                module_version: a,
                events_dropped: p,
            };
        if ((d.default.track(E.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, m), C)) {
            let e = o.slice(0, 3).map((e) => e[0]),
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
                    events_dropped: p,
                };
                d.default.track(E.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
            }
        }
        A &&
            this._pushedNativeDeadlockMinidumpCount < 5 &&
            (await h.ZP.submitLiveCrashReport({
                message: "Desktop Memory Thread State",
                extra: {
                    renderer_memory_kb: e,
                    gpu_brand: c.Z.getGpuBrand(),
                },
            }),
            (this._pushedNativeDeadlockMinidumpCount += 1));
    }
    doRestartIfNeeded(e) {
        if (e < U) return;
        let t = performance.now() - this._startupTime;
        if (t < F) return;
        let n = i.K.get(B);
        if (null != n && n.timestamp >= Date.now() - V) return;
        let { enable: a, enableForce: o } = g.Z.getConfig({ location: "DesktopPerfAnalyticsManager" });
        a &&
            setTimeout(() => {
                let n = !0;
                if (e < Z || !o) {
                    let e = l.Z.getIdleSince();
                    if (null == e || e > Date.now() - G || null != u.Z.getRTCConnection()) return;
                } else n = !1;
                s.Z.persist(),
                    i.K.set(B, {
                        timeSinceStartup: t,
                        timestamp: Date.now(),
                    }),
                    h.ZP.setCrashInformation(
                        r.X4.IntentionalCrashReason,
                        "excessive-memory-usage".concat(n ? "-forced" : ""),
                    ),
                    m.Z.addBreadcrumb({
                        category: "excessive-memory-usage-restart",
                        message: "Restarting due to excessive renderer memory usage: ".concat(e, "kB"),
                    }),
                    h.ZP.crash(3);
            }, H);
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
    trackV8HeapAlloc() {
        var e, t, n, r, i, a, o, s, l;
        let c = _.Z.getMemoryHeapStats();
        if (null == c) return;
        let u = null != (e = c.usedHeapSize) ? e : 0;
        if (
            (!this._v8ProfilerRunning &&
                u >= j &&
                (_.Z.enableProfilingV8Heap({
                    allocationThresholdKB: k,
                    sampleIntervalBytes: 65536,
                    stackDepth: 64,
                }),
                (this._v8ProfilerRunning = !0)),
            this._v8ProfilerRunning)
        ) {
            if (u < M) return;
            let e = _.Z.getProfilerV8MemoryCallstacks();
            if (null != e) {
                let c = 3,
                    u = e.map((e) => {
                        var t, n;
                        return {
                            callstack: e,
                            totalSize:
                                null != (n = null == (t = e.frame_alloc_size) ? void 0 : t.reduce((e, t) => e + t, 0))
                                    ? n
                                    : 0,
                        };
                    });
                for (let e of (u.sort((e, t) => t.totalSize - e.totalSize), u.slice(0, c).map((e) => e.callstack))) {
                    let c = null != (s = null == (t = e.frame_script_name) ? void 0 : t.length) ? s : 0;
                    if (
                        null == c ||
                        c !== (null == (n = e.frame_name) ? void 0 : n.length) ||
                        c !== (null == (r = e.frame_line) ? void 0 : r.length) ||
                        c !== (null == (i = e.frame_col) ? void 0 : i.length)
                    )
                        continue;
                    let u = {
                        memory_type: "v8_heap",
                        callstack_allocation_total_size_kb: Math.floor(
                            (null != (l = null == (a = e.frame_alloc_size) ? void 0 : a.reduce((e, t) => e + t, 0))
                                ? l
                                : 0) / 1024,
                        ),
                        callstack_frame_module_names:
                            null == (o = e.frame_script_name)
                                ? void 0
                                : o.map((t, n) => {
                                      var r, i, a, o, s, l;
                                      let c = null != (o = null == (r = e.frame_name) ? void 0 : r[n]) ? o : "",
                                          u = null != (s = null == (i = e.frame_line) ? void 0 : i[n]) ? s : 0,
                                          d = null != (l = null == (a = e.frame_col) ? void 0 : a[n]) ? l : 0;
                                      return c.length > 0
                                          ? "at ".concat(c, " (").concat(t, ":").concat(u, ":").concat(d, ")")
                                          : "at ".concat(t, ":").concat(u, ":").concat(d);
                                  }),
                    };
                    d.default.track(E.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, u);
                }
            }
        }
    }
    constructor(...e) {
        super(...e),
            b(this, "_checkIntervalNativeHeap", null),
            b(this, "_checkIntervalPA", null),
            b(this, "_checkIntervalV8", null),
            b(this, "_nativeHeapHooksInstalled", !1),
            b(this, "_paHeapHooksInstalled", !1),
            b(this, "_v8ProfilerRunning", !1),
            b(this, "_pushedNativeDeadlockMinidumpCount", 0),
            b(this, "_startupTime", performance.now()),
            b(this, "_supportedNativeChannel", !0),
            b(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let K = new W();
