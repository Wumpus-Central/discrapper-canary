n.d(t, {
    CW: () => M,
    Eo: () => m,
    GG: () => F,
    HV: () => U,
    I$: () => H,
    Is: () => g,
    K: () => D,
    M7: () => B,
    Ru: () => k,
    U1: () => b,
    Zq: () => x,
    b8: () => O,
    dm: () => G,
    gA: () => N,
    hF: () => A,
    oB: () => P,
    tZ: () => V,
    xx: () => L,
});
var i = n(636537),
    r = n(499979),
    l = n(73153),
    o = n(382483),
    s = n(627363),
    u = n(573163),
    a = n(287809),
    d = n(673724),
    c = n(927899),
    f = n(936494),
    h = n(933294),
    p = n(972786),
    _ = n(652215),
    w = n(790782);
function g(e, t, n) {
    (0, c.Z0)(e, {
        location: "publish",
        code: c.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function E(e) {
    h.A.reloadAppFrames(e);
}
function m(e) {
    let t = p.Ay.getProject(e);
    null != t && (E(t.application_id), E(t.preview_application_id ?? null));
}
let I = null,
    T = null;
async function A(e) {
    let t = e ?? null;
    if (p.Ay.getProjectsFetchState()?.type === "loading") {
        null != t && t !== I && (T = t);
        return;
    }
    ((I = t), l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await i.Bo.get({
            url: _.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), v());
    } catch {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = T;
    ((T = null), null != n && n !== t && A(n));
}
let S = !1;
async function v() {
    if (!S) {
        for (let e of ((S = !0), u.Ay.getResourceIds(w.P.CONJURING_PROJECT)))
            if (null == p.Ay.getProject(e)) {
                if (0 === u.Ay.getMentionCount(e, w.P.CONJURING_PROJECT)) {
                    y(e);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == p.Ay.getProject(e)))
                    try {
                        await b(e);
                    } catch (n) {
                        let t = (0, f.$k)(n);
                        (403 === t || 404 === t) && y(e);
                    }
            }
    }
}
function y(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e });
}
let R = null;
async function O() {
    let e = a.default.getCurrentUser()?.id ?? null;
    if (null == e || R === e || p.Ay.hasFetchedProjectLimit()) return;
    R = e;
    let t = null;
    try {
        let { body: e } = await i.Bo.get({ url: _.Rsh.VIBEGRATIONS_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (R === e && (R = null),
        a.default.getCurrentUser()?.id === e &&
            l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
async function b(e, t) {
    let n = await i.Bo.get({ url: _.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
        var r;
        (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (r = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            l.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: e,
                integrationStatus: r,
            }));
    }
    return n;
}
async function N(e) {
    let t;
    try {
        let { body: n } = await i.Bo.post({
            url: _.Rsh.VIBEGRATIONS_PROJECTS,
            body: { flags: d.A2.PUBLIC, ...e },
            rejectWithError: !1,
        });
        t = n;
    } catch (e) {
        throw new f.uQ((0, f.hj)(e), (0, f.$k)(e));
    }
    return (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function C(e, t) {
    let n = await i.Bo.patch({ url: _.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function P(e, t) {
    return C(e, { name: t });
}
function M(e, t) {
    return C(e, t);
}
async function k(e, t) {
    let n = await C(e, { icon: t });
    if (n.ok) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, s.TA)(e);
            } catch {}
    }
    return n;
}
function B(e, t) {
    return C(e, t);
}
async function L(e) {
    let t;
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_START", projectId: e });
    try {
        t = await i.Bo.del({ url: _.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (
        l.h.dispatch({
            type: t.ok ? "VIBEGRATIONS_PROJECT_DELETE_SUCCESS" : "VIBEGRATIONS_PROJECT_DELETE_FAIL",
            projectId: e,
        }),
        t
    );
}
function D(e, t) {
    L(e).then((e) => {
        e.ok || t();
    }, t);
}
function G(e, t) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function V(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await b(e)).body,
        u = n ? l.preview_application_id : l.application_id;
    (null != u && (await (0, s.TA)(u), await (0, o.un)(u, { force: !0 }).catch(() => {}), (n && (!r || i)) || E(u)),
        (0, c.qs)(e, { isPreview: n }));
}
function H(e, t) {
    l.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
function x(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function U(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function F(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
