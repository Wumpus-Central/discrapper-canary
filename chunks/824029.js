"use strict";
n.d(t, { Ts: () => h });
var r = n(141931),
    i = n(506774),
    s = n(430452),
    a = n(287809),
    o = n(954571),
    l = n(723702),
    u = n(837921),
    d = n(98919),
    c = n(652215);
let _ = window.DiscordNative,
    f = `${c.HAw.APP_NATIVE_CRASH}Storage`;
function E(e, t) {
    let n = {
        did_crash: !0,
        electron_crash_reporter_did_crash: !0,
        child_process_crash_type: t.type?.toLowerCase() ?? null,
        child_process_crash_reason: t.reason ?? null,
        child_process_crash_exit_code: t.exitCode ?? null,
    };
    o.default.track(c.HAw.APP_NATIVE_CRASH, n);
}
async function h() {
    var e, t;
    let n, s;
    if (__OVERLAY__) return;
    let a = _?.processUtils?.getLastCrash;
    if (((0, l.isDesktop)() && u.Ay.on("CRASH_REPORTER_NEW_CRASH", E), null == a))
        return void console.log("AppCrashedFatalReport: getLastCrash not supported.");
    let d = await a(),
        { didCrashReporterSeeCrash: h, didCrashOrUncleanExit: m } =
            ((e = i.w.get(f, {})),
            (t = d),
            (n = e?.lastId !== t?.id && t?.id != null),
            (s = t?.rendererCrashExitCode ?? null),
            { didCrashReporterSeeCrash: n, didCrashOrUncleanExit: n || (null != s && 0 !== s) }),
        g = (function (e, t, n) {
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
        })(h, m, d);
    o.default.track(c.HAw.APP_NATIVE_CRASH, g),
        i.w.set(f, { lastId: d?.id }),
        m && setTimeout(async () => await p(), 1e4);
}
async function p() {
    if (a.default.getCurrentUser()?.isStaff())
        try {
            await s.Ay.getMediaEngine().writeAudioDebugState(),
                await (0, d.a)(c.Umv.RTC),
                console.log("Successfully uploaded debug files");
        } catch (e) {
            console.log("Failed to upload debug files");
        }
}
