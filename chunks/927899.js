i.d(e, { Xv: () => R, Z0: () => d, qs: () => I, xA: () => c });
var r = i(587895),
    _ = i(174459),
    n = i(972786),
    E = i(683180),
    a = i(652215);
let c = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function o(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function l(t) {
    let e = n.A.getProject(t);
    return {
        project_id: t,
        project_name: o(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function p(t, e) {
    let i = n.A.getProject(t),
        r = (e ? i?.preview_guild_id : i?.guild_id) ?? null,
        _ = (e ? i?.preview_application_id : i?.application_id) ?? null;
    return { guild_id: r, channel_id: null != r && null != _ ? (0, E.SH)(r, _) : null };
}
function R(t, e) {
    _.default.track(a.HAw.VIBEGRATION_TURN_RESULTED, {
        ...l(t),
        turn_result: e.result ?? null,
        turn_summary: o(e.detail ?? e.summary),
        turn_cost: e.cost_usd ?? null,
    });
}
function I(t, e) {
    let { isPreview: i } = e,
        n = l(t),
        E = i ? n.preview_application_id : n.application_id,
        c = null != E ? r.A.getApplication(E) : null;
    _.default.track(a.HAw.VIBEGRATION_DEPLOYED, {
        ...n,
        project_summary: o(c?.description),
        is_preview: i,
        ...p(t, i),
    });
}
function d(t, e) {
    let { location: i, code: r, message: n, details: E, isPreview: c = !0 } = e;
    _.default.track(a.HAw.VIBEGRATION_ERRORED, {
        ...l(t),
        is_preview: c,
        ...p(t, c),
        error_location: i,
        error_code: r,
        error_message: o(n),
        error_details: o(E),
    });
}
