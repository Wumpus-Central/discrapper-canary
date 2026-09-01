n.d(e, {
    CW: () => C,
    Eo: () => T,
    GG: () => D,
    HV: () => V,
    I$: () => G,
    Is: () => p,
    M7: () => P,
    Ru: () => y,
    U1: () => f,
    Zq: () => L,
    dm: () => N,
    gA: () => h,
    hF: () => S,
    oB: () => g,
    tZ: () => B,
    xx: () => w,
});
var i = n(636537),
    l = n(228366),
    r = n(382483),
    a = n(627363),
    o = n(625180),
    _ = n(91242),
    u = n(673724),
    c = n(927899),
    E = n(972786),
    d = n(652215),
    s = n(165610);
function p(t, e, n) {
    (0, c.Z0)(t, {
        location: "publish",
        code: c.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function I(t) {
    if (null != t)
        for (let e of _.A.getAllFrames())
            (0, s.x1)(e) && e.applicationId === t && !e.data.proxyTicketRefreshing && o.A.refreshProxyTicket(e.id);
}
function T(t) {
    let e = E.A.getProject(t);
    null != e && (I(e.application_id), I(e.preview_application_id ?? null));
}
let R = null,
    A = null;
async function S(t) {
    let e = t ?? null;
    if (E.A.getProjectsFetchState()?.type === "loading") {
        null != e && e !== R && (A = e);
        return;
    }
    (R = e), l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: n } = await i.Bo.get({
            url: d.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e });
    } catch {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
    }
    let n = A;
    (A = null), null != n && n !== e && S(n);
}
async function f(t, e) {
    let n = await i.Bo.get({ url: d.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && n.ok) {
        var r;
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (r = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            l.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: t,
                integrationStatus: r,
            });
    }
    return n;
}
async function h(t) {
    let { body: e } = await i.Bo.post({
        url: d.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: u.A2.PUBLIC, ...t },
        rejectWithError: !1,
    });
    return l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function O(t, e) {
    let n = await i.Bo.patch({ url: d.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return n.ok && l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
function g(t, e) {
    return O(t, { name: e });
}
function C(t, e) {
    return O(t, e);
}
async function y(t, e) {
    let n = await O(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, a.TA)(t);
            } catch {}
    }
    return n;
}
function P(t, e) {
    return O(t, e);
}
async function w(t) {
    let e = await i.Bo.del({ url: d.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function N(t, e) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function B(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: i, integration_installed: l, project: o } = (await f(t)).body,
        _ = n ? o.preview_application_id : o.application_id;
    null != _ && (await (0, a.TA)(_), await (0, r.un)(_, { force: !0 }).catch(() => {}), (n && (!l || i)) || I(_)),
        (0, c.qs)(t, { isPreview: n });
}
function G(t, e) {
    l.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function L(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function V(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function D(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
