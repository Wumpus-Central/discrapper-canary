i.d(e, {
    HV: () => y,
    M7: () => A,
    TV: () => O,
    U1: () => I,
    Zq: () => P,
    dm: () => h,
    gA: () => u,
    hF: () => d,
    oB: () => T,
    ti: () => C,
    xx: () => S,
});
var r = i(562465),
    _ = i(228366),
    E = i(113854),
    n = i(91242),
    a = i(927899),
    o = i(972786),
    c = i(652215),
    l = i(165610);
function p(t, e) {
    _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: e });
}
function s(t, e, i) {
    (0, a.Z0)(t, {
        location: "publish",
        code: a.xA.PUBLISH_FAILED,
        message: `publish${i ? "-preview" : ""} failed`,
        details: `HTTP ${e}`,
        isPreview: i,
    });
}
function R(t) {
    let e = n.A.getMainFrame();
    null != t && (0, l.x1)(e) && e.applicationId === t && E.A.refreshProxyTicket(e.id);
}
async function d() {
    if (o.A.getProjectsFetchState()?.type !== "loading") {
        _.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: t } = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            _.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: t });
        } catch {
            _.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function I(t, e) {
    let i = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    return (
        i.ok &&
            e?.aborted !== !0 &&
            (_.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            p(t, {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
                preview_ready: i.body.preview_ready,
            })),
        i
    );
}
async function u(t) {
    let { body: e } = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECTS, body: t, rejectWithError: !1 });
    return _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function T(t, e) {
    let i = await r.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: { name: e }, rejectWithError: !1 });
    return i.ok && _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function A(t, e) {
    let i = await r.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return i.ok && _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function S(t) {
    let e = await r.Bo.del({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return e.ok && _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function h(t, e) {
    _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function O(t) {
    let e = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECT_PUBLISH(t), rejectWithError: !1 });
    if (!e.ok) return s(t, e.status, !1), e;
    let { application: i, project: E } = e.body;
    return (
        _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: E }),
        _.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: i, isHydrated: !0 }),
        R(i.id),
        (0, a.qs)(t, { isPreview: !1 }),
        e
    );
}
async function C(t) {
    let { countAsDeploy: e = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(t), rejectWithError: !1 });
    if (!i.ok) return s(t, i.status, !0), i;
    let { application: E, bot_permissions_changed: n, integration_installed: o, project: l } = i.body;
    return (
        _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: l }),
        _.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: E, isHydrated: !0 }),
        p(t, { bot_permissions_changed: n, integration_installed: o, preview_ready: !0 }),
        o && !n && R(E.id),
        e && (0, a.qs)(t, { isPreview: !0 }),
        i
    );
}
function P(t) {
    _.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function y(t) {
    _.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
