n.d(t, { Xv: () => s, Z0: () => E, qs: () => p, xA: () => u });
var i = n(587895),
    r = n(174459),
    o = n(972786),
    a = n(683180),
    l = n(652215);
let u = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function c(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function _(e) {
    let t = o.A.getProject(e);
    return {
        project_id: e,
        project_name: c(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
    };
}
function d(e, t) {
    let n = o.A.getProject(e),
        i = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != r ? (0, a.SH)(i, r) : null };
}
function s(e, t) {
    r.default.track(l.HAw.VIBEGRATION_TURN_RESULTED, {
        ..._(e),
        turn_result: t.result ?? null,
        turn_summary: c(t.detail ?? t.summary),
        turn_cost: t.cost_usd ?? null,
    });
}
function p(e, t) {
    let { isPreview: n } = t,
        o = _(e),
        a = n ? o.preview_application_id : o.application_id,
        u = null != a ? i.A.getApplication(a) : null;
    r.default.track(l.HAw.VIBEGRATION_DEPLOYED, {
        ...o,
        project_summary: c(u?.description),
        is_preview: n,
        ...d(e, n),
    });
}
function E(e, t) {
    let { location: n, code: i, message: o, details: a, isPreview: u = !0 } = t;
    r.default.track(l.HAw.VIBEGRATION_ERRORED, {
        ..._(e),
        is_preview: u,
        ...d(e, u),
        error_location: n,
        error_code: i,
        error_message: c(o),
        error_details: c(a),
    });
}
