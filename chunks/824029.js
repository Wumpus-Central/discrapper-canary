n.d(t, {
    Ts: () => E,
});
var r = n(141931),
    i = n(506774),
    a = n(430452),
    s = n(287809),
    o = n(954571),
    l = n(723702),
    c = n(837921),
    u = n(98919),
    d = n(652215);

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

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = window.DiscordNative,
    h = "".concat(d.HAw.APP_NATIVE_CRASH, "Storage");

function m(e) {
    var t, n, r, i;
    return {
        did_crash: !0,
        electron_crash_reporter_did_crash: !0,
        child_process_crash_type: null != (t = null == (i = e.type) ? void 0 : i.toLowerCase()) ? t : null,
        child_process_crash_reason: null != (n = e.reason) ? n : null,
        child_process_crash_exit_code: null != (r = e.exitCode) ? r : null,
    };
}

function g(e, t) {
    let n = m(t);
    o.default.track(d.HAw.APP_NATIVE_CRASH, n);
}
async function E() {
    var e;
    if (__OVERLAY__) return;
    let t = null == _ || null == (e = _.processUtils) ? void 0 : e.getLastCrash;
    if (((0, l.isDesktop)() && c.Ay.on("CRASH_REPORTER_NEW_CRASH", g), null == t))
        return void console.log("AppCrashedFatalReport: getLastCrash not supported.");
    let n = await t(),
        { didCrashReporterSeeCrash: r, didCrashOrUncleanExit: a } = b(i.w.get(h, {}), n),
        s = O(r, a, n);
    o.default.track(d.HAw.APP_NATIVE_CRASH, s),
        i.w.set(h, {
            lastId: null == n ? void 0 : n.id,
        }),
        a && setTimeout(async () => await y(), 1e4);
}

function b(e, t) {
    var n;
    let r = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
        i = null != (n = null == t ? void 0 : t.rendererCrashExitCode) ? n : null,
        a = r || (null != i && 0 !== i);
    return {
        didCrashReporterSeeCrash: r,
        didCrashOrUncleanExit: a,
    };
}
async function y() {
    var e, t;
    if (null != (e = null == (t = s.default.getCurrentUser()) ? void 0 : t.isStaff()) && e)
        try {
            await a.A.getMediaEngine().writeAudioDebugState(),
                await (0, u.a)(d.Umv.RTC),
                console.log("Successfully uploaded debug files");
        } catch (e) {
            console.log("Failed to upload debug files");
        }
}

function O(e, t, n) {
    var i, a, s, o, l, c, u, d, f, _, h, m, g, E, b, y, O, A, v;

    function S(e) {
        return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e];
    }

    function I(e) {
        return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e]
            ? null
            : n.storedInformation[e];
    }
    let T = {
        did_crash: t,
        renderer_crash_reason: null != (i = null == n ? void 0 : n.rendererCrashReason) ? i : null,
        renderer_crash_exit_code: null != (a = null == n ? void 0 : n.rendererCrashExitCode) ? a : null,
        child_process_crash_type: null,
        child_process_crash_reason: null,
        child_process_crash_exit_code: null,
        had_rtc_connection: S(r.du.HasRTCConnection),
        was_sending_video: S(r.du.IsSendingVideo),
        was_sending_stream: S(r.du.IsSendingStream),
        was_receiving_video: S(r.du.IsReceivingVideo),
        was_receiving_stream: S(r.du.IsReceivingStream),
        video_media_session_id: I(r.du.VideoMediaSessionId),
        stream_media_session_id: I(r.du.StreamMediaSessionId),
        intentional_crash_reason: I(r.du.IntentionalCrashReason),
        last_memory_usage_kb:
            null != (s = null == n || null == (E = n.lastMemoryInformation) ? void 0 : E.memoryUsageKB) ? s : null,
        last_used_js_heap_size_kb:
            null != (o = null == n || null == (b = n.lastMemoryInformation) ? void 0 : b.usedJSHeapSizeKB) ? o : null,
        last_memory_usage_uptime:
            null != (l = null == n || null == (y = n.lastMemoryInformation) ? void 0 : y.uptimeSeconds) ? l : null,
        highest_memory_usage_kb:
            null != (c = null == n || null == (O = n.highestMemoryInformation) ? void 0 : O.memoryUsageKB) ? c : null,
        highest_used_js_heap_size_kb:
            null != (u = null == n || null == (A = n.highestMemoryInformation) ? void 0 : A.usedJSHeapSizeKB)
                ? u
                : null,
        highest_memory_usage_uptime:
            null != (d = null == n || null == (v = n.highestMemoryInformation) ? void 0 : v.uptimeSeconds) ? d : null,
    };
    if (!e || null == n)
        return p(
            {
                electron_crash_reporter_did_crash: !1,
                minidump_exception_type: null,
                minidump_exception_module_name: null,
                minidump_relative_crash_address: null,
                minidump_exception_module_version: null,
                minidump_exception_module_code_id: null,
            },
            T,
        );
    console.log("AppCrashedFatalReport lastCrash:", n, e);
    let C = null == n ? void 0 : n.minidumpInformation;
    return p(
        {
            electron_crash_reporter_did_crash: e,
            minidump_exception_type: null != (f = null == C ? void 0 : C.exceptionString) ? f : null,
            minidump_exception_module_name: null != (_ = null == C ? void 0 : C.exceptionModuleName) ? _ : null,
            minidump_relative_crash_address: null != (h = null == C ? void 0 : C.relativeCrashAddress) ? h : null,
            minidump_exception_module_version: null != (m = null == C ? void 0 : C.exceptionModuleVersion) ? m : null,
            minidump_exception_module_code_id: null != (g = null == C ? void 0 : C.exceptionModuleCodeId) ? g : null,
        },
        T,
    );
}
