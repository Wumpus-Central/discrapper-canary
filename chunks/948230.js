n.d(t, { M7: () => p, TV: () => A, gA: () => S, hF: () => T, oB: () => _, ti: () => C, xx: () => d });
var l = n(562465),
    r = n(228366),
    i = n(627363),
    o = n(113854),
    a = n(91242),
    s = n(972786),
    u = n(652215);
function c(e) {
    for (let t of [e.application_id, e.preview_application_id]) null != t && (0, i.TA)(t).catch(() => {});
}
function E(e) {
    null != e && a.A.getConnectedFrame()?.applicationId === e && o.A.refreshProxyTicket({ applicationId: e });
}
async function T() {
    if (s.A.getProjectsFetchState()?.type !== "loading") {
        r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: e } = await l.Bo.get({ url: u.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: e });
        } catch {
            r.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function S(e) {
    let { body: t } = await l.Bo.post({ url: u.Rsh.VIBEGRATIONS_PROJECTS, body: e, rejectWithError: !1 });
    return r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function _(e, t) {
    let n = await l.Bo.patch({ url: u.Rsh.VIBEGRATIONS_PROJECT(e), body: { name: t }, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
async function p(e, t) {
    let n = await l.Bo.patch({ url: u.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return n.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n;
}
async function d(e) {
    let t = await l.Bo.del({ url: u.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    return t.ok && r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e }), t;
}
async function A(e) {
    let t = await l.Bo.post({ url: u.Rsh.VIBEGRATIONS_PROJECT_PUBLISH(e), rejectWithError: !1 });
    return (
        t.ok &&
            (r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: t.body }),
            c(t.body),
            E(t.body.application_id)),
        t
    );
}
async function C(e) {
    let t = await l.Bo.post({ url: u.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(e), rejectWithError: !1 });
    return (
        t.ok &&
            (r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: t.body }),
            c(t.body),
            E(t.body.preview_application_id)),
        t
    );
}
