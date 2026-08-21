i.d(e, {
    Eo: () => d,
    GG: () => P,
    HV: () => B,
    Is: () => R,
    M7: () => S,
    U1: () => s,
    Zq: () => y,
    dm: () => O,
    gA: () => A,
    hF: () => I,
    oB: () => T,
    tZ: () => C,
    xx: () => h,
});
var r = i(636537),
    n = i(228366),
    _ = i(627363),
    E = i(625180),
    a = i(91242),
    l = i(927899),
    o = i(972786),
    c = i(652215),
    p = i(165610);
function R(t, e, i) {
    (0, l.Z0)(t, {
        location: "publish",
        code: l.xA.PUBLISH_FAILED,
        message: `publish${i ? "-preview" : ""} failed`,
        details: e,
        isPreview: i,
    });
}
function u(t) {
    if (null != t)
        for (let e of a.A.getAllFrames())
            (0, p.x1)(e) && e.applicationId === t && !e.data.proxyTicketRefreshing && E.A.refreshProxyTicket(e.id);
}
function d(t) {
    let e = o.A.getProject(t);
    null != e && (u(e.application_id), u(e.preview_application_id ?? null));
}
async function I() {
    if (o.A.getProjectsFetchState()?.type !== "loading") {
        n.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: t } = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            n.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: t });
        } catch {
            n.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function s(t, e) {
    let i = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0) {
        var _;
        n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            (_ = {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
                preview_ready: i.body.preview_ready,
            }),
            n.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: t,
                integrationStatus: _,
            });
    }
    return i;
}
async function A(t) {
    let { body: e } = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECTS, body: t, rejectWithError: !1 });
    return n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function T(t, e) {
    let i = await r.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: { name: e }, rejectWithError: !1 });
    return n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function S(t, e) {
    let i = await r.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function h(t) {
    let e = await r.Bo.del({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function O(t, e) {
    n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function C(t, e) {
    let { isPreview: i } = e,
        { bot_permissions_changed: r, integration_installed: n, project: E } = (await s(t)).body,
        a = i ? E.preview_application_id : E.application_id;
    null != a && (await (0, _.TA)(a), (i && (!n || r)) || u(a)), (0, l.qs)(t, { isPreview: i });
}
function y(t) {
    n.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function B(t) {
    n.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function P(t) {
    n.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
