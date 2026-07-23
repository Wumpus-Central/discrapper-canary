n.d(t, { gA: () => u, hF: () => E, ti: () => S });
var r = n(562465),
    l = n(228366),
    i = n(627363),
    s = n(113854),
    o = n(91242),
    a = n(972786),
    c = n(652215);
async function E() {
    if (a.A.getProjectsFetchState()?.type !== "loading") {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
        try {
            let { body: e } = await r.Bo.get({ url: c.Rsh.VIBEGRATIONS_PROJECTS, rejectWithError: !0 });
            l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: e });
        } catch {
            l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        }
    }
}
async function u(e) {
    let { body: t } = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECTS, body: e, rejectWithError: !1 });
    return l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id;
}
async function S(e) {
    let t = await r.Bo.post({ url: c.Rsh.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(e), rejectWithError: !1 });
    if (t.ok) {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: t.body });
        var n,
            a = t.body;
        for (let e of [a.application_id, a.preview_application_id]) null != e && (0, i.TA)(e).catch(() => {});
        null != (n = t.body.preview_application_id) &&
            o.A.getConnectedFrame()?.applicationId === n &&
            s.A.refreshProxyTicket({ applicationId: n });
    }
    return t;
}
