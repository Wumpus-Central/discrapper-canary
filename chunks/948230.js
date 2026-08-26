n.d(t, {
    Eo: () => A,
    GG: () => b,
    HV: () => G,
    Is: () => E,
    M7: () => y,
    Ok: () => P,
    Ru: () => B,
    U1: () => f,
    Zq: () => L,
    dm: () => v,
    gA: () => S,
    gv: () => k,
    hF: () => R,
    oB: () => O,
    tZ: () => m,
    xx: () => N,
}),
    n(938796);
var i = n(636537),
    r = n(228366),
    o = n(382483),
    a = n(627363),
    l = n(625180),
    u = n(91242),
    c = n(673724),
    _ = n(927899),
    d = n(972786),
    s = n(652215),
    p = n(165610);
function E(e, t, n) {
    (0, _.Z0)(e, {
        location: "publish",
        code: _.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function h(e) {
    if (null != e)
        for (let t of u.A.getAllFrames())
            (0, p.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && l.A.refreshProxyTicket(t.id);
}
function A(e) {
    let t = d.A.getProject(e);
    null != t && (h(t.application_id), h(t.preview_application_id ?? null));
}
let I = null,
    T = null;
async function R(e) {
    let t = e ?? null;
    if (d.A.getProjectsFetchState()?.type === "loading") {
        null != t && t !== I && (T = t);
        return;
    }
    (I = t), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
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
    let n = T;
    (T = null), null != n && n !== t && R(n);
}
async function f(e, t) {
    let n = await i.Bo.get({ url: s.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
        var o;
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (o = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            r.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: e,
                integrationStatus: o,
            });
    }
    return n;
}
async function S(e) {
    let { body: t } = await i.Bo.post({
        url: s.Rsh.VIBEGRATIONS_PROJECTS,
        body: { flags: c.A2.PUBLIC, ...e },
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function g(e, t) {
    let n = await i.Bo.patch({ url: s.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
function O(e, t) {
    return g(e, { name: t });
}
let C = new Map();
function w(e, t) {
    let n = (C.get(e) ?? Promise.resolve()).then(() => g(e, { flags: t(d.A.getProject(e)?.flags ?? 0) })),
        i = n.then(
            () => {
                C.get(e) === i && C.delete(e);
            },
            () => {
                C.get(e) === i && C.delete(e);
            },
        );
    return C.set(e, i), n;
}
function P(e, t) {
    return w(e, (e) => (t ? e | c.A2.PUBLIC : e & ~c.A2.PUBLIC));
}
function k(e, t) {
    return w(e, (e) => (t ? e | c.A2.SHAREABLE : e & ~c.A2.SHAREABLE));
}
async function B(e, t) {
    let n = await g(e, { icon: t });
    if (n.ok) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, a.TA)(e);
            } catch {}
    }
    return n;
}
function y(e, t) {
    return g(e, t);
}
async function N(e) {
    let t = await i.Bo.del({ url: s.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
function v(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function m(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await f(e)).body,
        u = n ? l.preview_application_id : l.application_id;
    null != u && (await (0, a.TA)(u), await (0, o.un)(u, { force: !0 }).catch(() => {}), (n && (!r || i)) || h(u)),
        (0, _.qs)(e, { isPreview: n });
}
function L(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function G(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function b(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
