"use strict";
n.d(t, {
    HV: () => m,
    TV: () => f,
    Zq: () => T,
    dm: () => I,
    gA: () => E,
    hF: () => _,
    oB: () => A,
    ti: () => p,
    xx: () => h,
});
var i = n(562465),
    r = n(228366),
    a = n(113854),
    s = n(91242),
    l = n(927899),
    o = n(972786),
    d = n(652215);
function c(e, t, n) {
    (0, l.Z0)(e, {
        location: "publish",
        code: l.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: `HTTP ${t}`,
        isPreview: n,
    });
}
function u(e) {
    null != e && s.A.getConnectedFrame()?.applicationId === e && a.A.refreshProxyTicket({ applicationId: e });
}
async function _() {
    if (o.A.getProjectsFetchState()?.type !== "loading") {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: e } = await i.Bo.get({ url: d.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: e });
        } catch {
            r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function E(e) {
    let { body: t } = await i.Bo.post({ url: d.Rsh.VIBEGRATIONS_PROJECTS, body: e, rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function A(e, t) {
    let n = await i.Bo.patch({ url: d.Rsh.VIBEGRATIONS_PROJECT(e), body: { name: t }, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
async function h(e) {
    let t = await i.Bo.del({ url: d.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return t.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
function I(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function f(e) {
    let t = await i.Bo.post({ url: d.Rsh.VIBEGRATIONS_PROJECT_PUBLISH(e), rejectWithError: !1 });
    if (!t.ok) return c(e, t.status, !1), t;
    let { application: n, project: a } = t.body;
    return (
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: a }),
        r.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: n, isHydrated: !0 }),
        u(n.id),
        (0, l.qs)(e, { isPreview: !1 }),
        t
    );
}
async function p(e) {
    let { countAsDeploy: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = await i.Bo.post({ url: d.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(e), rejectWithError: !1 });
    if (!n.ok) return c(e, n.status, !0), n;
    let { application: a, project: s } = n.body;
    return (
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: s }),
        r.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: a, isHydrated: !0 }),
        u(a.id),
        t && (0, l.qs)(e, { isPreview: !0 }),
        n
    );
}
function T(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function m(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
