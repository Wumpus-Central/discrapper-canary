i.d(e, {
    GG: () => y,
    HV: () => C,
    Is: () => R,
    M7: () => T,
    U1: () => d,
    Zq: () => O,
    dm: () => S,
    gA: () => u,
    hF: () => I,
    oB: () => s,
    tZ: () => h,
    xx: () => A,
});
var r = i(636537),
    _ = i(228366),
    n = i(627363),
    E = i(625180),
    a = i(91242),
    c = i(927899),
    o = i(972786),
    l = i(652215),
    p = i(165610);
function R(t, e, i) {
    (0, c.Z0)(t, {
        location: "publish",
        code: c.xA.PUBLISH_FAILED,
        message: `publish${i ? "-preview" : ""} failed`,
        details: e,
        isPreview: i,
    });
}
async function I() {
    if (o.A.getProjectsFetchState()?.type !== "loading") {
        _.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: t } = await r.Bo.get({ url: l.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            _.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: t });
        } catch {
            _.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function d(t, e) {
    let i = await r.Bo.get({ url: l.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0) {
        var n;
        _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            (n = {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
                preview_ready: i.body.preview_ready,
            }),
            _.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: t,
                integrationStatus: n,
            });
    }
    return i;
}
async function u(t) {
    let { body: e } = await r.Bo.post({ url: l.Rsh.VIBEGRATIONS_PROJECTS, body: t, rejectWithError: !1 });
    return _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function s(t, e) {
    let i = await r.Bo.patch({ url: l.Rsh.VIBEGRATIONS_PROJECT(t), body: { name: e }, rejectWithError: !1 });
    return _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function T(t, e) {
    let i = await r.Bo.patch({ url: l.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function A(t) {
    let e = await r.Bo.del({ url: l.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function S(t, e) {
    _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function h(t, e) {
    let { isPreview: i } = e,
        { bot_permissions_changed: r, integration_installed: _, project: o } = (await d(t)).body,
        l = i ? o.preview_application_id : o.application_id;
    null != l &&
        (await (0, n.TA)(l),
        (i && (!_ || r)) ||
            (function (t) {
                if (null != t)
                    for (let e of a.A.getAllFrames())
                        (0, p.x1)(e) &&
                            e.applicationId === t &&
                            !e.data.proxyTicketRefreshing &&
                            E.A.refreshProxyTicket(e.id);
            })(l)),
        (0, c.qs)(t, { isPreview: i });
}
function O(t) {
    _.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function C(t) {
    _.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function y(t) {
    _.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
