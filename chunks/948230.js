n.d(t, {
    CW: () => S,
    Eo: () => _,
    GG: () => M,
    HV: () => C,
    I$: () => N,
    Is: () => h,
    K: () => O,
    M7: () => v,
    Ru: () => R,
    U1: () => m,
    Zq: () => P,
    dm: () => b,
    gA: () => T,
    hF: () => E,
    oB: () => A,
    tZ: () => k,
    xx: () => y,
});
var i = n(636537),
    r = n(228366),
    l = n(382483),
    o = n(627363),
    s = n(673724),
    u = n(927899),
    a = n(936494),
    d = n(933294),
    c = n(972786),
    f = n(652215);
function h(e, t, n) {
    (0, u.Z0)(e, {
        location: "publish",
        code: u.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function p(e) {
    d.A.reloadAppFrames(e);
}
function _(e) {
    let t = c.Ay.getProject(e);
    null != t && (p(t.application_id), p(t.preview_application_id ?? null));
}
let g = null,
    w = null;
async function E(e) {
    let t = e ?? null;
    if (c.Ay.getProjectsFetchState()?.type === "loading") {
        null != t && t !== g && (w = t);
        return;
    }
    ((g = t), r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await i.Bo.get({
            url: f.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t });
    } catch {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = w;
    ((w = null), null != n && n !== t && E(n));
}
async function m(e, t) {
    let n = await i.Bo.get({ url: f.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
        var l;
        (r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (l = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            r.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: e,
                integrationStatus: l,
            }));
    }
    return n;
}
async function T(e) {
    let t;
    try {
        let { body: n } = await i.Bo.post({
            url: f.Rsh.VIBEGRATIONS_PROJECTS,
            body: { flags: s.A2.PUBLIC, ...e },
            rejectWithError: !1,
        });
        t = n;
    } catch (e) {
        throw new a.uQ((0, a.hj)(e), (0, a.$k)(e));
    }
    return (r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function I(e, t) {
    let n = await i.Bo.patch({ url: f.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return (n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function A(e, t) {
    return I(e, { name: t });
}
function S(e, t) {
    return I(e, t);
}
async function R(e, t) {
    let n = await I(e, { icon: t });
    if (n.ok) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, o.TA)(e);
            } catch {}
    }
    return n;
}
function v(e, t) {
    return I(e, t);
}
async function y(e) {
    let t;
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_START", projectId: e });
    try {
        t = await i.Bo.del({ url: f.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (
        r.h.dispatch({
            type: t.ok ? "VIBEGRATIONS_PROJECT_DELETE_SUCCESS" : "VIBEGRATIONS_PROJECT_DELETE_FAIL",
            projectId: e,
        }),
        t
    );
}
function O(e, t) {
    y(e).then((e) => {
        e.ok || t();
    }, t);
}
function b(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function k(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: s } = (await m(e)).body,
        a = n ? s.preview_application_id : s.application_id;
    (null != a && (await (0, o.TA)(a), await (0, l.un)(a, { force: !0 }).catch(() => {}), (n && (!r || i)) || p(a)),
        (0, u.qs)(e, { isPreview: n }));
}
function N(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
function P(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function C(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function M(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
