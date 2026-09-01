n.d(t, { Xv: () => c, Z0: () => p, qs: () => E, xA: () => u });
var l = n(587895),
    r = n(174459),
    i = n(972786),
    o = n(683180),
    a = n(652215);
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
function s(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function d(e) {
    let t = i.Ay.getProject(e);
    return {
        project_id: e,
        project_name: s(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
    };
}
function _(e, t) {
    let n = i.Ay.getProject(e),
        l = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: l, channel_id: null != l && null != r ? (0, o.SH)(l, r) : null };
}
function c(e, t) {
    r.default.track(a.HAw.VIBEGRATION_TURN_RESULTED, {
        ...d(e),
        turn_result: t.result ?? null,
        turn_summary: s(t.detail ?? t.summary),
        turn_cost: t.cost_usd ?? null,
    });
}
function E(e, t) {
    let { isPreview: n } = t,
        i = d(e),
        o = n ? i.preview_application_id : i.application_id,
        u = null != o ? l.A.getApplication(o) : null;
    r.default.track(a.HAw.VIBEGRATION_DEPLOYED, {
        ...i,
        project_summary: s(u?.description),
        is_preview: n,
        ..._(e, n),
    });
}
function p(e, t) {
    let { location: n, code: l, message: i, details: o, isPreview: u = !0 } = t;
    r.default.track(a.HAw.VIBEGRATION_ERRORED, {
        ...d(e),
        is_preview: u,
        ..._(e, u),
        error_location: n,
        error_code: l,
        error_message: s(i),
        error_details: s(o),
    });
}
