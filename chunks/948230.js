n.d(t, {
    CW: () => y,
    Eo: () => I,
    GG: () => k,
    HV: () => L,
    I$: () => m,
    Is: () => p,
    M7: () => w,
    Ru: () => C,
    U1: () => S,
    Zq: () => G,
    dm: () => N,
    gA: () => h,
    hF: () => f,
    oB: () => O,
    tZ: () => B,
    xx: () => P,
});
var l = n(636537),
    r = n(228366),
    i = n(382483),
    o = n(627363),
    a = n(625180),
    u = n(91242),
    s = n(673724),
    d = n(927899),
    _ = n(972786),
    c = n(652215),
    E = n(165610);
function p(e, t, n) {
    (0, d.Z0)(e, {
        location: "publish",
        code: d.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function T(e) {
    if (null != e)
        for (let t of u.A.getAllFrames())
            (0, E.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && a.A.refreshProxyTicket(t.id);
}
function I(e) {
    let t = _.Ay.getProject(e);
    null != t && (T(t.application_id), T(t.preview_application_id ?? null));
}
let A = null,
    R = null;
async function f(e) {
    let t = e ?? null;
    if (_.Ay.getProjectsFetchState()?.type === "loading") {
        null != t && t !== A && (R = t);
        return;
    }
    (A = t), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: n } = await l.Bo.get({
            url: c.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t });
    } catch {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
    }
    let n = R;
    (R = null), null != n && n !== t && f(n);
}
async function S(e, t) {
    let n = await l.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
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
                projectId: e,
                integrationStatus: i,
            });
    }
    return n;
}
async function h(e) {
    let { body: t } = await l.Bo.post({
        url: c.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: s.A2.PUBLIC, ...e },
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function g(e, t) {
    let n = await l.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
function O(e, t) {
    return g(e, { name: t });
}
function y(e, t) {
    return g(e, t);
}
async function C(e, t) {
    let n = await g(e, { icon: t });
    if (n.ok) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, o.TA)(e);
            } catch {}
    }
    return n;
}
function w(e, t) {
    return g(e, t);
}
async function P(e) {
    let t = await l.Bo.del({ url: c.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
function N(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function B(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: l, integration_installed: r, project: a } = (await S(e)).body,
        u = n ? a.preview_application_id : a.application_id;
    null != u && (await (0, o.TA)(u), await (0, i.un)(u, { force: !0 }).catch(() => {}), (n && (!r || l)) || T(u)),
        (0, d.qs)(e, { isPreview: n });
}
function m(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
function G(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function L(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function k(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
