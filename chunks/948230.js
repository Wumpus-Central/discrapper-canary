i.d(t, {
    Eo: () => h,
    GG: () => y,
    HV: () => m,
    Is: () => s,
    M7: () => O,
    Ok: () => k,
    U1: () => T,
    Zq: () => b,
    dm: () => C,
    gA: () => f,
    hF: () => R,
    oB: () => g,
    tZ: () => P,
    xx: () => B,
}),
    i(938796);
var n = i(636537),
    r = i(228366),
    a = i(627363),
    o = i(625180),
    l = i(91242),
    u = i(673724),
    _ = i(927899),
    c = i(972786),
    p = i(652215),
    d = i(165610);
function s(e, t, i) {
    (0, _.Z0)(e, {
        location: "publish",
        code: _.xA.PUBLISH_FAILED,
        message: `publish${i ? "-preview" : ""} failed`,
        details: t,
        isPreview: i,
    });
}
function E(e) {
    if (null != e)
        for (let t of l.A.getAllFrames())
            (0, d.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && o.A.refreshProxyTicket(t.id);
}
function h(e) {
    let t = c.A.getProject(e);
    null != t && (E(t.application_id), E(t.preview_application_id ?? null));
}
let A = null,
    I = null;
async function R(e) {
    let t = e ?? null;
    if (c.A.getProjectsFetchState()?.type === "loading") {
        null != t && t !== A && (I = t);
        return;
    }
    (A = t), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: i } = await n.Bo.get({
            url: p.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: i, guildId: t });
    } catch {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
    }
    let i = I;
    (I = null), null != i && i !== t && R(i);
}
async function T(e, t) {
    let i = await n.Bo.get({ url: p.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && i.ok) {
        var a;
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            (a = {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
                preview_ready: i.body.preview_ready,
            }),
            r.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: e,
                integrationStatus: a,
            });
    }
    return i;
}
async function f(e) {
    let { body: t } = await n.Bo.post({
        url: p.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: u.A2.PUBLIC, ...e },
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function S(e, t) {
    let i = await n.Bo.patch({ url: p.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return i.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
function g(e, t) {
    return S(e, { name: t });
}
function k(e, t) {
    let i = c.A.getProject(e)?.flags ?? 0;
    return S(e, { flags: t ? i | u.A2.PUBLIC : i & ~u.A2.PUBLIC });
}
function O(e, t) {
    return S(e, t);
}
async function B(e) {
    let t = await n.Bo.del({ url: p.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
function C(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function P(e, t) {
    let { isPreview: i } = t,
        { bot_permissions_changed: n, integration_installed: r, project: o } = (await T(e)).body,
        l = i ? o.preview_application_id : o.application_id;
    null != l && (await (0, a.TA)(l), (i && (!r || n)) || E(l)), (0, _.qs)(e, { isPreview: i });
}
function b(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function m(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function y(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
