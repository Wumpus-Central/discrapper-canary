i.d(t, { Xv: () => d, Z0: () => E, qs: () => s, xA: () => u });
var n = i(587895),
    r = i(174459),
    a = i(972786),
    o = i(683180),
    l = i(652215);
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
function _(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function c(e) {
    let t = a.A.getProject(e);
    return {
        project_id: e,
        project_name: _(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
    };
}
function p(e, t) {
    let i = a.A.getProject(e),
        n = (t ? i?.preview_guild_id : i?.guild_id) ?? null,
        r = (t ? i?.preview_application_id : i?.application_id) ?? null;
    return { guild_id: n, channel_id: null != n && null != r ? (0, o.SH)(n, r) : null };
}
function d(e, t) {
    r.default.track(l.HAw.VIBEGRATION_TURN_RESULTED, {
        ...c(e),
        turn_result: t.result ?? null,
        turn_summary: _(t.detail ?? t.summary),
        turn_cost: t.cost_usd ?? null,
    });
}
function s(e, t) {
    let { isPreview: i } = t,
        a = c(e),
        o = i ? a.preview_application_id : a.application_id,
        u = null != o ? n.A.getApplication(o) : null;
    r.default.track(l.HAw.VIBEGRATION_DEPLOYED, {
        ...a,
        project_summary: _(u?.description),
        is_preview: i,
        ...p(e, i),
    });
}
function E(e, t) {
    let { location: i, code: n, message: a, details: o, isPreview: u = !0 } = t;
    r.default.track(l.HAw.VIBEGRATION_ERRORED, {
        ...c(e),
        is_preview: u,
        ...p(e, u),
        error_location: i,
        error_code: n,
        error_message: _(a),
        error_details: _(o),
    });
}
