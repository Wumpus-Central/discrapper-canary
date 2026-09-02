n.d(e, {
    CW: () => y,
    Eo: () => I,
    GG: () => L,
    HV: () => G,
    I$: () => B,
    Is: () => p,
    M7: () => w,
    Ru: () => C,
    U1: () => h,
    Zq: () => m,
    dm: () => P,
    gA: () => S,
    hF: () => f,
    oB: () => O,
    tZ: () => N,
    xx: () => k,
});
var l = n(636537),
    r = n(228366),
    i = n(382483),
    o = n(627363),
    u = n(625180),
    a = n(91242),
    s = n(673724),
    _ = n(927899),
    d = n(972786),
    c = n(652215),
    E = n(165610);
function p(t, e, n) {
    (0, _.Z0)(t, {
        location: "publish",
        code: _.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function T(t) {
    if (null != t)
        for (let e of a.A.getAllFrames())
            (0, E.x1)(e) && e.applicationId === t && !e.data.proxyTicketRefreshing && u.A.refreshProxyTicket(e.id);
}
function I(t) {
    let e = d.Ay.getProject(t);
    null != e && (T(e.application_id), T(e.preview_application_id ?? null));
}
let A = null,
    R = null;
async function f(t) {
    let e = t ?? null;
    if (d.Ay.getProjectsFetchState()?.type === "loading") {
        null != e && e !== A && (R = e);
        return;
    }
    (A = e), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: n } = await l.Bo.get({
            url: c.Rsh.VIBEGRATIONS_PROJECTS,
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
async function h(t, e) {
    let n = await l.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
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
async function S(t) {
    let { body: e } = await l.Bo.post({
        url: c.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: s.A2.PUBLIC, ...t },
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function g(t, e) {
    let n = await l.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
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
async function k(t) {
    let e = await l.Bo.del({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function P(t, e) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function N(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: l, integration_installed: r, project: u } = (await h(t)).body,
        a = n ? u.preview_application_id : u.application_id;
    null != a && (await (0, o.TA)(a), await (0, i.un)(a, { force: !0 }).catch(() => {}), (n && (!r || l)) || T(a)),
        (0, _.qs)(t, { isPreview: n });
}
function B(t, e) {
    r.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function m(t) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function G(t) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function L(t) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
