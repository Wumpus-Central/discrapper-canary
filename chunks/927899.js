"use strict";
n.d(t, { Xv: () => _, Z0: () => A, qs: () => E, xA: () => o });
var i = n(587895),
    r = n(174459),
    a = n(972786),
    s = n(683180),
    l = n(652215);
let o = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function d(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function c(e) {
    let t = a.A.getProject(e);
    return {
        project_id: e,
        project_name: d(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
    };
}
function u(e, t) {
    let n = a.A.getProject(e),
        i = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != r ? (0, s.SH)(i, r) : null };
}
function _(e, t) {
    r.default.track(l.HAw.VIBEGRATION_TURN_RESULTED, {
        ...c(e),
        turn_result: t.result ?? null,
        turn_summary: d(t.summary),
        turn_cost: t.cost_usd ?? null,
    });
}
function E(e, t) {
    let { isPreview: n } = t,
        a = c(e),
        s = n ? a.preview_application_id : a.application_id,
        o = null != s ? i.A.getApplication(s) : null;
    r.default.track(l.HAw.VIBEGRATION_DEPLOYED, {
        ...a,
        project_summary: d(o?.description),
        is_preview: n,
        ...u(e, n),
    });
}
function A(e, t) {
    let { location: n, code: i, message: a, details: s, isPreview: o = !0 } = t;
    r.default.track(l.HAw.VIBEGRATION_ERRORED, {
        ...c(e),
        is_preview: o,
        ...u(e, o),
        error_location: n,
        error_code: i,
        error_message: d(a),
        error_details: d(s),
    });
}
