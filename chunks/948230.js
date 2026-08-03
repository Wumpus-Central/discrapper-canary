i.d(e, {
    HV: () => P,
    M7: () => T,
    TV: () => h,
    U1: () => d,
    Zq: () => C,
    dm: () => S,
    gA: () => I,
    hF: () => R,
    oB: () => u,
    ti: () => O,
    xx: () => A,
});
var r = i(562465),
    _ = i(228366),
    n = i(113854),
    E = i(91242),
    a = i(927899),
    o = i(972786),
    c = i(652215);
function l(t, e) {
    _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: e });
}
function p(t, e, i) {
    (0, a.Z0)(t, {
        location: "publish",
        code: a.xA.PUBLISH_FAILED,
        message: `publish${i ? "-preview" : ""} failed`,
        details: `HTTP ${e}`,
        isPreview: i,
    });
}
function s(t) {
    null != t && E.A.getConnectedFrame()?.applicationId === t && n.A.refreshProxyTicket({ applicationId: t });
}
async function R() {
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
async function d(t, e) {
    let i = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    return (
        i.ok &&
            e?.aborted !== !0 &&
            (_.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            l(t, {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
                preview_ready: i.body.preview_ready,
            })),
        i
    );
}
async function I(t) {
    let { body: e } = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECTS, body: t, rejectWithError: !1 });
    return _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function u(t, e) {
    let i = await r.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: { name: e }, rejectWithError: !1 });
    return i.ok && _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function T(t, e) {
    let i = await r.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return i.ok && _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function A(t) {
    let e = await r.Bo.del({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return e.ok && _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function S(t, e) {
    _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function h(t) {
    let e = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECT_PUBLISH(t), rejectWithError: !1 });
    if (!e.ok) return p(t, e.status, !1), e;
    let { application: i, project: n } = e.body;
    return (
        _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n }),
        _.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: i, isHydrated: !0 }),
        s(i.id),
        (0, a.qs)(t, { isPreview: !1 }),
        e
    );
}
async function O(t) {
    let { countAsDeploy: e = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(t), rejectWithError: !1 });
    if (!i.ok) return p(t, i.status, !0), i;
    let { application: n, bot_permissions_changed: E, integration_installed: o, project: R } = i.body;
    return (
        _.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: R }),
        _.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: n, isHydrated: !0 }),
        l(t, { bot_permissions_changed: E, integration_installed: o, preview_ready: !0 }),
        o && !E && s(n.id),
        e && (0, a.qs)(t, { isPreview: !0 }),
        i
    );
}
function C(t) {
    _.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function P(t) {
    _.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
