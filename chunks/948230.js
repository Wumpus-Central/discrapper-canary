n.d(t, {
    CW: () => C,
    Eo: () => E,
    GG: () => H,
    HV: () => V,
    I$: () => G,
    Is: () => g,
    K: () => M,
    M7: () => P,
    Ru: () => N,
    U1: () => O,
    Zq: () => D,
    dm: () => B,
    gA: () => y,
    hF: () => m,
    oB: () => b,
    tZ: () => L,
    xx: () => k,
});
var i = n(636537),
    r = n(499979),
    l = n(73153),
    o = n(382483),
    s = n(627363),
    u = n(573163),
    a = n(673724),
    d = n(927899),
    c = n(936494),
    f = n(933294),
    h = n(972786),
    _ = n(652215),
    p = n(790782);
function g(e, t, n) {
    (0, d.Z0)(e, {
        location: "publish",
        code: d.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function w(e) {
    f.A.reloadAppFrames(e);
}
function E(e) {
    let t = h.Ay.getProject(e);
    null != t && (w(t.application_id), w(t.preview_application_id ?? null));
}
let T = null,
    I = null;
async function m(e) {
    let t = e ?? null;
    if (h.Ay.getProjectsFetchState()?.type === "loading") {
        null != t && t !== T && (I = t);
        return;
    }
    ((T = t), l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await i.Bo.get({
            url: _.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), S());
    } catch {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = I;
    ((I = null), null != n && n !== t && m(n));
}
let A = !1;
async function S() {
    if (!A) {
        for (let e of ((A = !0), u.Ay.getResourceIds(p.P.CONJURING_PROJECT)))
            if (null == h.Ay.getProject(e)) {
                if (0 === u.Ay.getMentionCount(e, p.P.CONJURING_PROJECT)) {
                    R(e);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == h.Ay.getProject(e)))
                    try {
                        await O(e);
                    } catch (n) {
                        let t = (0, c.$k)(n);
                        (403 === t || 404 === t) && R(e);
                    }
            }
    }
}
function R(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e });
}
async function O(e, t) {
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
async function y(e) {
    let t;
    try {
        let { body: n } = await i.Bo.post({
            url: _.Rsh.VIBEGRATIONS_PROJECTS,
            body: { flags: a.A2.PUBLIC, ...e },
            rejectWithError: !1,
        });
        t = n;
    } catch (e) {
        throw new c.uQ((0, c.hj)(e), (0, c.$k)(e));
    }
    return (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function v(e, t) {
    let n = await i.Bo.patch({ url: _.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function b(e, t) {
    return v(e, { name: t });
}
function C(e, t) {
    return v(e, t);
}
async function N(e, t) {
    let n = await v(e, { icon: t });
    if (n.ok) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, s.TA)(e);
            } catch {}
    }
    return n;
}
function P(e, t) {
    return v(e, t);
}
async function k(e) {
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
function M(e, t) {
    k(e).then((e) => {
        e.ok || t();
    }, t);
}
function B(e, t) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function L(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await O(e)).body,
        u = n ? l.preview_application_id : l.application_id;
    (null != u && (await (0, s.TA)(u), await (0, o.un)(u, { force: !0 }).catch(() => {}), (n && (!r || i)) || w(u)),
        (0, d.qs)(e, { isPreview: n }));
}
function G(e, t) {
    l.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
function D(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function V(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function H(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
