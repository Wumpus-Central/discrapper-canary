i.d(e, {
    CW: () => P,
    Eo: () => T,
    GG: () => L,
    HV: () => D,
    I$: () => G,
    Is: () => p,
    M7: () => y,
    Ru: () => g,
    U1: () => h,
    Zq: () => V,
    dm: () => N,
    gA: () => f,
    hF: () => S,
    oB: () => C,
    tZ: () => B,
    xx: () => w,
});
var n = i(636537),
    l = i(228366),
    r = i(382483),
    a = i(627363),
    o = i(625180),
    _ = i(91242),
    c = i(673724),
    E = i(927899),
    u = i(972786),
    d = i(652215),
    s = i(165610);
function p(t, e, i) {
    (0, E.Z0)(t, {
        location: "publish",
        code: E.xA.PUBLISH_FAILED,
        message: `publish${i ? "-preview" : ""} failed`,
        details: e,
        isPreview: i,
    });
}
function I(t) {
    if (null != t)
        for (let e of _.A.getAllFrames())
            (0, s.x1)(e) && e.applicationId === t && !e.data.proxyTicketRefreshing && o.A.refreshProxyTicket(e.id);
}
function T(t) {
    let e = u.A.getProject(t);
    null != e && (I(e.application_id), I(e.preview_application_id ?? null));
}
let R = null,
    A = null;
async function S(t) {
    let e = t ?? null;
    if (u.A.getProjectsFetchState()?.type === "loading") {
        null != e && e !== R && (A = e);
        return;
    }
    (R = e), l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: i } = await n.Bo.get({
            url: d.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: i, guildId: e });
    } catch {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
    }
    let i = A;
    (A = null), null != i && i !== e && S(i);
}
async function h(t, e) {
    let i = await n.Bo.get({ url: d.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && i.ok) {
        var r;
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            (r = {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
                preview_ready: i.body.preview_ready,
                has_activity: i.body.has_activity,
                owner_authorization_revoked: i.body.owner_authorization_revoked,
            }),
            l.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: t,
                integrationStatus: r,
            });
    }
    return i;
}
async function f(t) {
    let { body: e } = await n.Bo.post({
        url: d.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: c.A2.PUBLIC, ...t },
        rejectWithError: !1,
    });
    return l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function O(t, e) {
    let i = await n.Bo.patch({ url: d.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return i.ok && l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
function C(t, e) {
    return O(t, { name: e });
}
function P(t, e) {
    return O(t, e);
}
async function g(t, e) {
    let i = await O(t, { icon: e });
    if (i.ok) {
        let t = i.body.preview_application_id;
        if (null != t)
            try {
                await (0, a.TA)(t);
            } catch {}
    }
    return i;
}
function y(t, e) {
    return O(t, e);
}
async function w(t) {
    let e = await n.Bo.del({ url: d.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function N(t, e) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function B(t, e) {
    let { isPreview: i } = e,
        { bot_permissions_changed: n, integration_installed: l, project: o } = (await h(t)).body,
        _ = i ? o.preview_application_id : o.application_id;
    null != _ && (await (0, a.TA)(_), await (0, r.un)(_, { force: !0 }).catch(() => {}), (i && (!l || n)) || I(_)),
        (0, E.qs)(t, { isPreview: i });
}
function G(t, e) {
    l.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function V(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function D(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function L(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
