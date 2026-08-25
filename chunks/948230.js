"use strict";
n.d(t, {
    Eo: () => h,
    GG: () => P,
    HV: () => M,
    Is: () => E,
    M7: () => L,
    Ok: () => R,
    U1: () => T,
    Zq: () => b,
    dm: () => D,
    gA: () => m,
    gv: () => O,
    hF: () => p,
    oB: () => S,
    tZ: () => v,
    xx: () => y,
}),
    n(938796);
var i = n(636537),
    r = n(228366),
    a = n(627363),
    s = n(625180),
    l = n(91242),
    o = n(673724),
    d = n(927899),
    c = n(972786),
    u = n(652215),
    _ = n(165610);
function E(e, t, n) {
    (0, d.Z0)(e, {
        location: "publish",
        code: d.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function A(e) {
    if (null != e)
        for (let t of l.A.getAllFrames())
            (0, _.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && s.A.refreshProxyTicket(t.id);
}
function h(e) {
    let t = c.A.getProject(e);
    null != t && (A(t.application_id), A(t.preview_application_id ?? null));
}
let I = null,
    f = null;
async function p(e) {
    let t = e ?? null;
    if (c.A.getProjectsFetchState()?.type === "loading") {
        null != t && t !== I && (f = t);
        return;
    }
    (I = t), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
    try {
        let { body: n } = await i.Bo.get({
            url: u.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t });
    } catch {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
    }
    let n = f;
    (f = null), null != n && n !== t && p(n);
}
async function T(e, t) {
    let n = await i.Bo.get({ url: u.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
        var a;
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (a = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
            }),
            r.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: e,
                integrationStatus: a,
            });
    }
    return n;
}
async function m(e) {
    let { body: t } = await i.Bo.post({
        url: u.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: o.A2.PUBLIC, ...e },
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function g(e, t) {
    let n = await i.Bo.patch({ url: u.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
function S(e, t) {
    return g(e, { name: t });
}
let N = new Map();
function C(e, t) {
    let n = (N.get(e) ?? Promise.resolve()).then(() => g(e, { flags: t(c.A.getProject(e)?.flags ?? 0) })),
        i = n.then(
            () => {
                N.get(e) === i && N.delete(e);
            },
            () => {
                N.get(e) === i && N.delete(e);
            },
        );
    return N.set(e, i), n;
}
function R(e, t) {
    return C(e, (e) => (t ? e | o.A2.PUBLIC : e & ~o.A2.PUBLIC));
}
function O(e, t) {
    return C(e, (e) => (t ? e | o.A2.SHAREABLE : e & ~o.A2.SHAREABLE));
}
function L(e, t) {
    return g(e, t);
}
async function y(e) {
    let t = await i.Bo.del({ url: u.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
function D(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function v(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: s } = (await T(e)).body,
        l = n ? s.preview_application_id : s.application_id;
    null != l && (await (0, a.TA)(l), (n && (!r || i)) || A(l)), (0, d.qs)(e, { isPreview: n });
}
function b(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function M(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function P(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
