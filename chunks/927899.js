n.d(e, { Xv: () => d, Z0: () => p, qs: () => s, xA: () => _ });
var i = n(587895),
    l = n(174459),
    r = n(972786),
    a = n(683180),
    o = n(652215);
let _ = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function u(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function c(t) {
    let e = r.A.getProject(t);
    return {
        project_id: t,
        project_name: u(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function E(t, e) {
    let n = r.A.getProject(t),
        i = (e ? n?.preview_guild_id : n?.guild_id) ?? null,
        l = (e ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != l ? (0, a.SH)(i, l) : null };
}
function d(t, e) {
    l.default.track(o.HAw.VIBEGRATION_TURN_RESULTED, {
        ...c(t),
        turn_result: e.result ?? null,
        turn_summary: u(e.detail ?? e.summary),
        turn_cost: e.cost_usd ?? null,
    });
}
function s(t, e) {
    let { isPreview: n } = e,
        r = c(t),
        a = n ? r.preview_application_id : r.application_id,
        _ = null != a ? i.A.getApplication(a) : null;
    l.default.track(o.HAw.VIBEGRATION_DEPLOYED, {
        ...r,
        project_summary: u(_?.description),
        is_preview: n,
        ...E(t, n),
    });
}
function p(t, e) {
    let { location: n, code: i, message: r, details: a, isPreview: _ = !0 } = e;
    l.default.track(o.HAw.VIBEGRATION_ERRORED, {
        ...c(t),
        is_preview: _,
        ...E(t, _),
        error_location: n,
        error_code: i,
        error_message: u(r),
        error_details: u(a),
    });
}
