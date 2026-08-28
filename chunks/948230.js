n.d(e, {
    CW: () => y,
    Eo: () => I,
    GG: () => k,
    HV: () => L,
    I$: () => m,
    Is: () => p,
    M7: () => w,
    Qb: () => V,
    Ru: () => C,
    U1: () => S,
    Zq: () => G,
    dm: () => P,
    gA: () => h,
    hF: () => f,
    oB: () => O,
    tZ: () => B,
    xx: () => N,
});
var l = n(636537),
    r = n(228366),
    i = n(382483),
    o = n(627363),
    a = n(625180),
    u = n(91242),
    s = n(673724),
    d = n(927899),
    c = n(972786),
    _ = n(652215),
    E = n(165610);
function p(t, e, n) {
    (0, d.Z0)(t, {
        location: "publish",
        code: d.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function T(t) {
    if (null != t)
        for (let e of u.A.getAllFrames())
            (0, E.x1)(e) && e.applicationId === t && !e.data.proxyTicketRefreshing && a.A.refreshProxyTicket(e.id);
}
function I(t) {
    let e = c.A.getProject(t);
    null != e && (T(e.application_id), T(e.preview_application_id ?? null));
}
let A = null,
    R = null;
async function f(t) {
    let e = t ?? null;
    if (c.A.getProjectsFetchState()?.type === "loading") {
        null != e && e !== A && (R = e);
        return;
    }
    (A = e), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: n } = await l.Bo.get({
            url: _.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e });
    } catch {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
    }
    let n = R;
    (R = null), null != n && n !== e && f(n);
}
async function S(t, e) {
    let n = await l.Bo.get({ url: _.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && n.ok) {
        var i;
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (i = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            r.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: t,
                integrationStatus: i,
            });
    }
    return n;
}
async function h(t) {
    let { body: e } = await l.Bo.post({
        url: _.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: s.A2.PUBLIC, ...t },
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function g(t, e) {
    let n = await l.Bo.patch({ url: _.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
function O(t, e) {
    return g(t, { name: e });
}
function y(t, e) {
    return g(t, e);
}
async function C(t, e) {
    let n = await g(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, o.TA)(t);
            } catch {}
    }
    return n;
}
function w(t, e) {
    return g(t, e);
}
async function N(t) {
    let e = await l.Bo.del({ url: _.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function P(t, e) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function B(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: l, integration_installed: r, project: a } = (await S(t)).body,
        u = n ? a.preview_application_id : a.application_id;
    null != u && (await (0, o.TA)(u), await (0, i.un)(u, { force: !0 }).catch(() => {}), (n && (!r || l)) || T(u)),
        (0, d.qs)(t, { isPreview: n });
}
function m(t, e) {
    r.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function G(t) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function L(t) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function k(t) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function V(t) {
    r.h.dispatch({ type: "VIBEGRATIONS_LOGS_SEEN", projectId: t });
}
