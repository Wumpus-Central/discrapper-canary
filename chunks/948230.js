i.d(e, {
    HV: () => C,
    TV: () => S,
    U1: () => I,
    Zq: () => O,
    dm: () => A,
    gA: () => d,
    hF: () => R,
    oB: () => u,
    ti: () => h,
    xx: () => T,
});
var r = i(562465),
    n = i(228366),
    _ = i(113854),
    E = i(91242),
    a = i(927899),
    o = i(972786),
    c = i(652215);
function l(t, e) {
    n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: e });
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
    null != t && E.A.getConnectedFrame()?.applicationId === t && _.A.refreshProxyTicket({ applicationId: t });
}
async function R() {
    if (o.A.getProjectsFetchState()?.type !== "loading") {
        n.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: t } = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            n.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: t });
        } catch {
            n.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function I(t, e) {
    let i = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    return (
        i.ok &&
            e?.aborted !== !0 &&
            (n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            l(t, {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
            })),
        i
    );
}
async function d(t) {
    let { body: e } = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECTS, body: t, rejectWithError: !1 });
    return n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id;
}
async function u(t, e) {
    let i = await r.Bo.patch({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), body: { name: e }, rejectWithError: !1 });
    return i.ok && n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: i.body }), i;
}
async function T(t) {
    let e = await r.Bo.del({ url: c.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return e.ok && n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e;
}
function A(t, e) {
    n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function S(t) {
    let e = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECT_PUBLISH(t), rejectWithError: !1 });
    if (!e.ok) return p(t, e.status, !1), e;
    let { application: i, project: _ } = e.body;
    return (
        n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: _ }),
        n.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: i, isHydrated: !0 }),
        s(i.id),
        (0, a.qs)(t, { isPreview: !1 }),
        e
    );
}
async function h(t) {
    let { countAsDeploy: e = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(t), rejectWithError: !1 });
    if (!i.ok) return p(t, i.status, !0), i;
    let { application: _, bot_permissions_changed: E, integration_installed: o, project: R } = i.body;
    return (
        n.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: R }),
        n.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: _, isHydrated: !0 }),
        l(t, { bot_permissions_changed: E, integration_installed: o }),
        o && !E && s(_.id),
        e && (0, a.qs)(t, { isPreview: !0 }),
        i
    );
}
function O(t) {
    n.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function C(t) {
    n.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
