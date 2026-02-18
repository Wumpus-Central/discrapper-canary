"use strict";
n.d(t, { A: () => M });
var r = n(311907),
    i = n(73153),
    a = n(15285),
    s = n(954571),
    o = n(9302),
    l = n(777334),
    u = n(206885),
    c = n(41984),
    d = n(833551),
    _ = n(515183),
    f = n(680243),
    h = n(652215);
let p = {};
function g(e) {
    return d.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function E(e) {
    let t = g(e);
    p[e] = { ...p[e], overlay_method: null != t ? c.Ue[t] : c.Ue[c.Ue.OutOfProcess] };
}
function A(e) {
    if (null != p[e]) return;
    let t = a.Ay.getGameOrTransformedSubgameForPID(e),
        n = g(e);
    p[e] = {
        overlay_method: null != n ? c.Ue[n] : c.Ue[c.Ue.OutOfProcess],
        success: !1,
        game_name: t?.name ?? null,
        game_id: t?.id ?? null,
        error: null,
        error_description: null,
        renderer_started: !1,
        renderer_started_after: null,
        renderer_ready_after: null,
        renderer_load_succeeded_after: null,
        renderer_crash_count: 0,
        renderer_load_failures: 0,
        renderer_ignored_paints: 0,
        host_crash_count: 0,
    };
}
function I(e) {
    return p[e] ?? {};
}
function T(e, t) {
    let n = p[e]?.error,
        r = p[e]?.error_description;
    (p[e] = { ...p[e], ...t }), null != n && (p[e].error = n), null != r && (p[e].error_description = r);
}
function y(e) {
    s.default.track(h.HAw.OVERLAY_HOOK_RESULT, I(e));
}
function S(e, t) {
    e !== o.UNSET_PID && T(e, { host_crash_count: 1, error: t.message, error_description: t.stack });
}
function v(e, t) {
    e !== o.UNSET_PID && T(e, { renderer_crash_count: 1, error: t.message, error_description: t.stack });
}
function C() {
    p = {};
}
function b(e, t) {
    let n = a.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
function N(e) {
    let { pid: t, error: n, crashType: r } = e,
        i = n instanceof Error ? n : Error(n ?? "Unknown error");
    return (
        "native" === r
            ? (S(t, i), (0, l.St)(i, c.Ue.OutOfProcess, { extra: b(t, "host") }))
            : (v(t, i), (0, l.St)(i, c.Ue.OutOfProcess, { extra: b(t, "renderer") })),
        !0
    );
}
function R(e) {
    let { createWindowTriggeringPID: t } = e;
    return T(t, { mounting_started_at: new Date().getTime() }), !0;
}
function O(e) {
    let { createWindowTriggeringPID: t } = e,
        n = I(t)?.mounting_started_at ?? new Date().getTime(),
        r = { renderer_started: !0, fullscreen_type: (0, _.ph)(t), graphics_info_after: new Date().getTime() - n };
    return T(t, r), !0;
}
function D(e) {
    let { createWindowTriggeringPID: t } = e,
        n = I(t)?.mounting_started_at ?? new Date().getTime();
    return T(t, { renderer_started_after: new Date().getTime() - n }), !0;
}
function L(e) {
    let { pid: t } = e;
    return A(t), !0;
}
function w(e) {
    let { lastAssociatedPID: t } = e;
    if (t !== o.UNSET_PID) return y(t), C(), !0;
}
function x(e) {
    let { pid: t } = e,
        n = I(t)?.mounting_started_at ?? new Date().getTime();
    return T(t, { total_mount_time_ms: null != n ? new Date().getTime() - n : void 0, success: !0 }), E(t), !0;
}
class P extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(d.default, f.A, a.Ay);
    }
    getData(e) {
        return I(e);
    }
    getCrashExtra(e, t) {
        return b(e, t);
    }
}
let M = new P(
    i.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: R,
              OVERLAY_V3_POST_CREATE_POPOUT: O,
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: w,
              OVERLAY_SUCCESSFULLY_SHOWN: x,
              OVERLAY_CRASHED: N,
              OVERLAY_V3_NATIVE_TRACK_GAME: L,
          },
);
