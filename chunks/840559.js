n.d(t, { CA: () => u, NI: () => o, cR: () => c });
var l = n(562708),
    i = n(933681),
    r = n(228366),
    s = n(499785),
    a = n(723923),
    d = n(652215);
async function c() {
    try {
        let e = await s.A.get({
            url: d.Rsh.EMAIL_SETTINGS,
            trackedActionData: {
                event: l.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    let t = e?.body?.initialized;
                    return (0, i.e0)({ initialized: t });
                },
            },
            rejectWithError: !0,
        });
        return r.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: e.body }), e.body;
    } catch {
        r.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
    }
}
async function u(e, t) {
    r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: { [e]: t } });
    try {
        let n = await s.A.patch({
            url: d.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: { [e]: t } } },
            trackedActionData: {
                event: l.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: { category: e, value: t },
            },
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: n.body });
    } catch (e) {
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
async function o() {
    let e = a.Zk.reduce((e, t) => ({ ...e, [t]: !1 }), {});
    r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: e });
    try {
        let t = await s.A.patch({
            url: d.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: e } },
            trackedActionData: {
                event: l.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: { category: "marketing", value: !1 },
            },
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: t.body });
    } catch (e) {
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
