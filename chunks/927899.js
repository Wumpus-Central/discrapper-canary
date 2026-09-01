n.d(e, { Xv: () => d, Z0: () => p, qs: () => s, xA: () => u });
var i = n(587895),
    l = n(174459),
    r = n(972786),
    a = n(683180),
    o = n(652215);
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
function _(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function c(t) {
    let e = r.Ay.getProject(t);
    return {
        project_id: t,
        project_name: _(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function E(t, e) {
    let n = r.Ay.getProject(t),
        i = (e ? n?.preview_guild_id : n?.guild_id) ?? null,
        l = (e ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != l ? (0, a.SH)(i, l) : null };
}
function d(t, e) {
    l.default.track(o.HAw.VIBEGRATION_TURN_RESULTED, {
        ...c(t),
        turn_result: e.result ?? null,
        turn_summary: _(e.detail ?? e.summary),
        turn_cost: e.cost_usd ?? null,
    });
}
function s(t, e) {
    let { isPreview: n } = e,
        r = c(t),
        a = n ? r.preview_application_id : r.application_id,
        u = null != a ? i.A.getApplication(a) : null;
    l.default.track(o.HAw.VIBEGRATION_DEPLOYED, {
        ...r,
        project_summary: _(u?.description),
        is_preview: n,
        ...E(t, n),
    });
}
function p(t, e) {
    let { location: n, code: i, message: r, details: a, isPreview: u = !0 } = e;
    l.default.track(o.HAw.VIBEGRATION_ERRORED, {
        ...c(t),
        is_preview: u,
        ...E(t, u),
        error_location: n,
        error_code: i,
        error_message: _(r),
        error_details: _(a),
    });
}
