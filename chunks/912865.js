"use strict";
n.d(t, { A: () => P });
var r = n(311907),
    i = n(73153),
    a = n(15285),
    s = n(954571),
    o = n(9302),
    l = n(777334),
    u = n(41984),
    c = n(833551),
    d = n(515183),
    _ = n(680243),
    f = n(672396),
    p = n(652215);
let h = {};
function m(e) {
    return c.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function g(e) {
    let t = m(e);
    h[e] = { ...h[e], overlay_method: null != t ? u.Ue[t] : u.Ue[u.Ue.OutOfProcess] };
}
function E(e) {
    if (null != h[e]) return;
    let t = a.Ay.getGameOrTransformedSubgameForPID(e),
        n = m(e);
    h[e] = {
        overlay_method: null != n ? u.Ue[n] : u.Ue[u.Ue.OutOfProcess],
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
function A(e) {
    return h[e] ?? {};
}
function I(e, t) {
    let n = h[e]?.error,
        r = h[e]?.error_description;
    (h[e] = { ...h[e], ...t }), null != n && (h[e].error = n), null != r && (h[e].error_description = r);
}
function T(e) {
    s.default.track(p.HAw.OVERLAY_HOOK_RESULT, A(e));
}
function y(e, t) {
    e !== o.UNSET_PID && I(e, { host_crash_count: 1, error: t.message, error_description: t.stack });
}
function S(e, t) {
    e !== o.UNSET_PID && I(e, { renderer_crash_count: 1, error: t.message, error_description: t.stack });
}
function v() {
    h = {};
}
function C(e, t) {
    let n = a.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
function b(e) {
    let { pid: t, error: n, crashType: r } = e,
        i = n instanceof Error ? n : Error(n ?? "Unknown error");
    return (
        "native" === r
            ? (y(t, i), (0, l.St)(i, u.Ue.OutOfProcess, { extra: C(t, "host") }))
            : (S(t, i), (0, l.St)(i, u.Ue.OutOfProcess, { extra: C(t, "renderer") })),
        !0
    );
}
function N(e) {
    let { createWindowTriggeringPID: t } = e;
    return I(t, { mounting_started_at: new Date().getTime() }), !0;
}
function R(e) {
    let { createWindowTriggeringPID: t } = e,
        n = A(t)?.mounting_started_at ?? new Date().getTime(),
        r = { renderer_started: !0, fullscreen_type: (0, d.ph)(t), graphics_info_after: new Date().getTime() - n };
    return I(t, r), !0;
}
function O(e) {
    let { createWindowTriggeringPID: t } = e,
        n = A(t)?.mounting_started_at ?? new Date().getTime();
    return I(t, { renderer_started_after: new Date().getTime() - n }), !0;
}
function D(e) {
    let { pid: t } = e;
    return E(t), !0;
}
function L(e) {
    let { lastAssociatedPID: t } = e;
    if (t !== o.UNSET_PID) return T(t), v(), !0;
}
function w(e) {
    let { pid: t } = e,
        n = A(t)?.mounting_started_at ?? new Date().getTime();
    return I(t, { total_mount_time_ms: null != n ? new Date().getTime() - n : void 0, success: !0 }), g(t), !0;
}
class x extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(c.default, _.A, a.Ay);
    }
    getData(e) {
        return A(e);
    }
    getCrashExtra(e, t) {
        return C(e, t);
    }
}
let P = new x(
    i.h,
    __OVERLAY__ || !f.OX
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: N,
              OVERLAY_V3_POST_CREATE_POPOUT: R,
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: O,
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: L,
              OVERLAY_SUCCESSFULLY_SHOWN: w,
              OVERLAY_CRASHED: b,
              OVERLAY_V3_NATIVE_TRACK_GAME: D,
          },
);
