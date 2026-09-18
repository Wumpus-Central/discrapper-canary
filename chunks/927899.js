n.d(t, { Xv: () => f, Z0: () => h, qs: () => p, xA: () => u });
var i = n(587895),
    r = n(174459),
    l = n(972786),
    o = n(683180),
    s = n(652215);
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
function a(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function d(e) {
    let t = l.Ay.getProject(e);
    return {
        project_id: e,
        project_name: a(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
    };
}
function c(e, t) {
    let n = l.Ay.getProject(e),
        i = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != r ? (0, o.SH)(i, r) : null };
}
function f(e, t) {
    var n;
    r.default.track(s.HAw.VIBEGRATION_TURN_RESULTED, {
        ...d(e),
        turn_result: t.result ?? null,
        turn_summary: a(t.detail ?? t.summary),
        turn_cost: t.cost_usd ?? null,
        ...(null == (n = t.tokens)
            ? {
                  turn_input_tokens: null,
                  turn_output_tokens: null,
                  turn_cache_write_tokens: null,
                  turn_cache_read_tokens: null,
                  turn_total_tokens: null,
              }
            : {
                  turn_input_tokens: n.input_tokens,
                  turn_output_tokens: n.output_tokens,
                  turn_cache_write_tokens: n.cache_creation_input_tokens,
                  turn_cache_read_tokens: n.cache_read_input_tokens,
                  turn_total_tokens:
                      n.input_tokens + n.output_tokens + n.cache_creation_input_tokens + n.cache_read_input_tokens,
              }),
    });
}
function p(e, t) {
    let { isPreview: n } = t,
        l = d(e),
        o = n ? l.preview_application_id : l.application_id,
        u = null != o ? i.A.getApplication(o) : null;
    r.default.track(s.HAw.VIBEGRATION_DEPLOYED, {
        ...l,
        project_summary: a(u?.description),
        is_preview: n,
        ...c(e, n),
    });
}
function h(e, t) {
    let { location: n, code: i, message: l, details: o, isPreview: u = !0 } = t;
    r.default.track(s.HAw.VIBEGRATION_ERRORED, {
        ...d(e),
        is_preview: u,
        ...c(e, u),
        error_location: n,
        error_code: i,
        error_message: a(l),
        error_details: a(o),
    });
}
