"use strict";
n.d(t, {
    HV: () => p,
    M7: () => E,
    TV: () => h,
    Zq: () => f,
    gA: () => u,
    hF: () => c,
    oB: () => _,
    ti: () => I,
    xx: () => A,
});
var i = n(562465),
    r = n(228366),
    a = n(113854),
    s = n(91242),
    l = n(972786),
    o = n(652215);
function d(e) {
    null != e && s.A.getConnectedFrame()?.applicationId === e && a.A.refreshProxyTicket({ applicationId: e });
}
async function c() {
    if (l.A.getProjectsFetchState()?.type !== "loading") {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: e } = await i.Bo.get({ url: o.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: e });
        } catch {
            r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function u(e) {
    let { body: t } = await i.Bo.post({ url: o.Rsh.VIBEGRATIONS_PROJECTS, body: e, rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function _(e, t) {
    let n = await i.Bo.patch({ url: o.Rsh.VIBEGRATIONS_PROJECT(e), body: { name: t }, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
async function E(e, t) {
    let n = await i.Bo.patch({ url: o.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
async function A(e) {
    let t = await i.Bo.del({ url: o.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return t.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
async function h(e) {
    let t = await i.Bo.post({ url: o.Rsh.VIBEGRATIONS_PROJECT_PUBLISH(e), rejectWithError: !1 });
    if (t.ok) {
        let { application: e, project: n } = t.body;
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n }),
            r.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e, isHydrated: !0 }),
            d(e.id);
    }
    return t;
}
async function I(e) {
    let t = await i.Bo.post({ url: o.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(e), rejectWithError: !1 });
    if (t.ok) {
        let { application: e, project: n } = t.body;
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n }),
            r.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e, isHydrated: !0 }),
            d(e.id);
    }
    return t;
}
function f(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function p(e) {
    r.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
