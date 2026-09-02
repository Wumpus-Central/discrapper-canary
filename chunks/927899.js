n.d(e, { Xv: () => c, Z0: () => p, qs: () => E, xA: () => a });
var l = n(587895),
    r = n(174459),
    i = n(972786),
    o = n(683180),
    u = n(652215);
let a = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function s(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function _(t) {
    let e = i.Ay.getProject(t);
    return {
        project_id: t,
        project_name: s(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function d(t, e) {
    let n = i.Ay.getProject(t),
        l = (e ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (e ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: l, channel_id: null != l && null != r ? (0, o.SH)(l, r) : null };
}
function c(t, e) {
    var n;
    r.default.track(u.HAw.VIBEGRATION_TURN_RESULTED, {
        ..._(t),
        turn_result: e.result ?? null,
        turn_summary: s(e.detail ?? e.summary),
        turn_cost: e.cost_usd ?? null,
        ...(null == (n = e.tokens)
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
function E(t, e) {
    let { isPreview: n } = e,
        i = _(t),
        o = n ? i.preview_application_id : i.application_id,
        a = null != o ? l.A.getApplication(o) : null;
    r.default.track(u.HAw.VIBEGRATION_DEPLOYED, {
        ...i,
        project_summary: s(a?.description),
        is_preview: n,
        ...d(t, n),
    });
}
function p(t, e) {
    let { location: n, code: l, message: i, details: o, isPreview: a = !0 } = e;
    r.default.track(u.HAw.VIBEGRATION_ERRORED, {
        ..._(t),
        is_preview: a,
        ...d(t, a),
        error_location: n,
        error_code: l,
        error_message: s(i),
        error_details: s(o),
    });
}
