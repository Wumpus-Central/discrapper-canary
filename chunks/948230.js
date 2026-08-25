n.d(t, {
    Eo: () => h,
    GG: () => v,
    HV: () => y,
    Is: () => p,
    M7: () => w,
    Ok: () => P,
    U1: () => R,
    Zq: () => L,
    dm: () => N,
    gA: () => f,
    gv: () => k,
    hF: () => T,
    oB: () => g,
    tZ: () => m,
    xx: () => B,
}),
    n(938796);
var i = n(636537),
    r = n(228366),
    l = n(627363),
    o = n(625180),
    a = n(91242),
    u = n(673724),
    c = n(927899),
    _ = n(972786),
    s = n(652215),
    d = n(165610);
function p(e, t, n) {
    (0, c.Z0)(e, {
        location: "publish",
        code: c.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function E(e) {
    if (null != e)
        for (let t of a.A.getAllFrames())
            (0, d.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && o.A.refreshProxyTicket(t.id);
}
function h(e) {
    let t = _.A.getProject(e);
    null != t && (E(t.application_id), E(t.preview_application_id ?? null));
}
let A = null,
    I = null;
async function T(e) {
    let t = e ?? null;
    if (_.A.getProjectsFetchState()?.type === "loading") {
        null != t && t !== A && (I = t);
        return;
    }
    (A = t), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: n } = await i.Bo.get({
            url: s.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t });
    } catch {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
    }
    let n = I;
    (I = null), null != n && n !== t && T(n);
}
async function R(e, t) {
    let n = await i.Bo.get({ url: s.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
        var l;
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (l = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
            }),
            r.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: e,
                integrationStatus: l,
            });
    }
    return n;
}
async function f(e) {
    let { body: t } = await i.Bo.post({
        url: s.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: u.A2.PUBLIC, ...e },
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function S(e, t) {
    let n = await i.Bo.patch({ url: s.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
function g(e, t) {
    return S(e, { name: t });
}
let O = new Map();
function C(e, t) {
    let n = (O.get(e) ?? Promise.resolve()).then(() => S(e, { flags: t(_.A.getProject(e)?.flags ?? 0) })),
        i = n.then(
            () => {
                O.get(e) === i && O.delete(e);
            },
            () => {
                O.get(e) === i && O.delete(e);
            },
        );
    return O.set(e, i), n;
}
function P(e, t) {
    return C(e, (e) => (t ? e | u.A2.PUBLIC : e & ~u.A2.PUBLIC));
}
function k(e, t) {
    return C(e, (e) => (t ? e | u.A2.SHAREABLE : e & ~u.A2.SHAREABLE));
}
function w(e, t) {
    return S(e, t);
}
async function B(e) {
    let t = await i.Bo.del({ url: s.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
function N(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function m(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: o } = (await R(e)).body,
        a = n ? o.preview_application_id : o.application_id;
    null != a && (await (0, l.TA)(a), (n && (!r || i)) || E(a)), (0, c.qs)(e, { isPreview: n });
}
function L(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function y(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function v(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
