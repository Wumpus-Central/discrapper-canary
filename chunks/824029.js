"use strict";
n.d(t, { Ts: () => m });
var r = n(141931),
    i = n(506774),
    s = n(430452),
    a = n(287809),
    o = n(954571),
    l = n(723702),
    u = n(837921),
    c = n(98919),
    d = n(652215);
let _ = window.DiscordNative,
    f = `${d.HAw.APP_NATIVE_CRASH}Storage`;
function p(e) {
    return {
        did_crash: !0,
        electron_crash_reporter_did_crash: !0,
        child_process_crash_type: e.type?.toLowerCase() ?? null,
        child_process_crash_reason: e.reason ?? null,
        child_process_crash_exit_code: e.exitCode ?? null,
    };
}
function h(e, t) {
    let n = p(t);
    o.default.track(d.HAw.APP_NATIVE_CRASH, n);
}
async function m() {
    if (__OVERLAY__) return;
    let e = _?.processUtils?.getLastCrash;
    if (((0, l.isDesktop)() && u.Ay.on("CRASH_REPORTER_NEW_CRASH", h), null == e))
        return void console.log("AppCrashedFatalReport: getLastCrash not supported.");
    let t = await e(),
        { didCrashReporterSeeCrash: n, didCrashOrUncleanExit: r } = E(i.w.get(f, {}), t),
        s = A(n, r, t);
    o.default.track(d.HAw.APP_NATIVE_CRASH, s),
        i.w.set(f, { lastId: t?.id }),
        r && setTimeout(async () => await g(), 1e4);
}
function E(e, t) {
    let n = e?.lastId !== t?.id && t?.id != null,
        r = t?.rendererCrashExitCode ?? null,
        i = n || (null != r && 0 !== r);
    return { didCrashReporterSeeCrash: n, didCrashOrUncleanExit: i };
}
async function g() {
    if (a.default.getCurrentUser()?.isStaff())
        try {
            await s.Ay.getMediaEngine().writeAudioDebugState(),
                await (0, c.a)(d.Umv.RTC),
                console.log("Successfully uploaded debug files");
        } catch (e) {
            console.log("Failed to upload debug files");
        }
}
function A(e, t, n) {
    function i(e) {
        return n?.storedInformation != null && 1 === n.storedInformation[e];
    }
    function s(e) {
        return n?.storedInformation == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
    }
    let a = {
            did_crash: t,
            renderer_crash_reason: n?.rendererCrashReason ?? null,
            renderer_crash_exit_code: n?.rendererCrashExitCode ?? null,
            child_process_crash_type: null,
            child_process_crash_reason: null,
            child_process_crash_exit_code: null,
            had_rtc_connection: i(r.du.HasRTCConnection),
            was_sending_video: i(r.du.IsSendingVideo),
            was_sending_stream: i(r.du.IsSendingStream),
            was_receiving_video: i(r.du.IsReceivingVideo),
            was_receiving_stream: i(r.du.IsReceivingStream),
            video_media_session_id: s(r.du.VideoMediaSessionId),
            stream_media_session_id: s(r.du.StreamMediaSessionId),
            intentional_crash_reason: s(r.du.IntentionalCrashReason),
            last_memory_usage_kb: n?.lastMemoryInformation?.memoryUsageKB ?? null,
            last_used_js_heap_size_kb: n?.lastMemoryInformation?.usedJSHeapSizeKB ?? null,
            last_memory_usage_uptime: n?.lastMemoryInformation?.uptimeSeconds ?? null,
            highest_memory_usage_kb: n?.highestMemoryInformation?.memoryUsageKB ?? null,
            highest_used_js_heap_size_kb: n?.highestMemoryInformation?.usedJSHeapSizeKB ?? null,
            highest_memory_usage_uptime: n?.highestMemoryInformation?.uptimeSeconds ?? null,
        },
        o = n?.minidumpInformation;
    return {
        electron_crash_reporter_did_crash: e,
        minidump_exception_type: o?.exceptionString ?? null,
        minidump_exception_module_name: o?.exceptionModuleName ?? null,
        minidump_relative_crash_address: o?.relativeCrashAddress ?? null,
        minidump_exception_module_version: o?.exceptionModuleVersion ?? null,
        minidump_exception_module_code_id: o?.exceptionModuleCodeId ?? null,
        minidump_exception_thread_name: o?.exceptionThreadName ?? null,
        ...a,
    };
}
