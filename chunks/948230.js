"use strict";
n.d(t, {
    HV: () => m,
    M7: () => h,
    TV: () => f,
    Zq: () => T,
    gA: () => E,
    hF: () => _,
    oB: () => A,
    ti: () => p,
    xx: () => I,
});
var i = n(562465),
    r = n(228366),
    a = n(627363),
    s = n(113854),
    l = n(91242),
    o = n(972786),
    d = n(652215);
async function c(e) {
    null != e && (await a.Ay.fetchApplications([e]).catch(() => {}));
}
function u(e) {
    null != e && l.A.getConnectedFrame()?.applicationId === e && s.A.refreshProxyTicket({ applicationId: e });
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
async function h(e, t) {
    let n = await i.Bo.patch({ url: d.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
async function I(e) {
    let t = await i.Bo.del({ url: d.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return t.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
async function f(e) {
    let t = await i.Bo.post({ url: d.Rsh.VIBEGRATIONS_PROJECT_PUBLISH(e), rejectWithError: !1 });
    return (
        t.ok &&
            (r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: t.body }),
            c(t.body.application_id),
            u(t.body.application_id)),
        t
    );
}
async function p(e) {
    let t = await i.Bo.post({ url: d.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(e), rejectWithError: !1 });
    return (
        t.ok &&
            (r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: t.body }),
            await c(t.body.preview_application_id),
            u(t.body.preview_application_id)),
        t
    );
}
function T(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function m(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
