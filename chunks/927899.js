i.d(e, { Xv: () => s, Z0: () => I, qs: () => R, xA: () => o });
var r = i(587895),
    n = i(174459),
    _ = i(972786),
    E = i(683180),
    a = i(652215);
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
function c(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function l(t) {
    let e = _.A.getProject(t);
    return {
        project_id: t,
        project_name: c(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function p(t, e) {
    let i = _.A.getProject(t),
        r = (e ? i?.preview_guild_id : i?.guild_id) ?? null,
        n = (e ? i?.preview_application_id : i?.application_id) ?? null;
    return { guild_id: r, channel_id: null != r && null != n ? (0, E.SH)(r, n) : null };
}
function s(t, e) {
    n.default.track(a.HAw.VIBEGRATION_TURN_RESULTED, {
        ...l(t),
        turn_result: e.result ?? null,
        turn_summary: c(e.detail ?? e.summary),
        turn_cost: e.cost_usd ?? null,
    });
}
function R(t, e) {
    let { isPreview: i } = e,
        _ = l(t),
        E = i ? _.preview_application_id : _.application_id,
        o = null != E ? r.A.getApplication(E) : null;
    n.default.track(a.HAw.VIBEGRATION_DEPLOYED, {
        ..._,
        project_summary: c(o?.description),
        is_preview: i,
        ...p(t, i),
    });
}
function I(t, e) {
    let { location: i, code: r, message: _, details: E, isPreview: o = !0 } = e;
    n.default.track(a.HAw.VIBEGRATION_ERRORED, {
        ...l(t),
        is_preview: o,
        ...p(t, o),
        error_location: i,
        error_code: r,
        error_message: c(_),
        error_details: c(E),
    });
}
