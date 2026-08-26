i.d(e, { Xv: () => d, Z0: () => p, qs: () => s, xA: () => _ });
var n = i(587895),
    l = i(174459),
    r = i(972786),
    a = i(683180),
    o = i(652215);
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
function c(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function E(t) {
    let e = r.A.getProject(t);
    return {
        project_id: t,
        project_name: c(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function u(t, e) {
    let i = r.A.getProject(t),
        n = (e ? i?.preview_guild_id : i?.guild_id) ?? null,
        l = (e ? i?.preview_application_id : i?.application_id) ?? null;
    return { guild_id: n, channel_id: null != n && null != l ? (0, a.SH)(n, l) : null };
}
function d(t, e) {
    l.default.track(o.HAw.VIBEGRATION_TURN_RESULTED, {
        ...E(t),
        turn_result: e.result ?? null,
        turn_summary: c(e.detail ?? e.summary),
        turn_cost: e.cost_usd ?? null,
    });
}
function s(t, e) {
    let { isPreview: i } = e,
        r = E(t),
        a = i ? r.preview_application_id : r.application_id,
        _ = null != a ? n.A.getApplication(a) : null;
    l.default.track(o.HAw.VIBEGRATION_DEPLOYED, {
        ...r,
        project_summary: c(_?.description),
        is_preview: i,
        ...u(t, i),
    });
}
function p(t, e) {
    let { location: i, code: n, message: r, details: a, isPreview: _ = !0 } = e;
    l.default.track(o.HAw.VIBEGRATION_ERRORED, {
        ...E(t),
        is_preview: _,
        ...u(t, _),
        error_location: i,
        error_code: n,
        error_message: c(r),
        error_details: c(a),
    });
}
