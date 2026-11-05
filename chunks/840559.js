var l = n(613412),
    i = n(933681),
    r = n(73153),
    s = n(499785),
    a = n(997187),
    d = n(161091),
    c = n(723923),
    o = n(652215);
function u(e) {
    let { categories: t } = a.A.getEmailSettings(),
        n = {};
    for (let l of Object.keys(e)) n[l] = t[l];
    return n;
}
n.d(
    t,
    {},
    {
        CA: async function (e, t) {
            let n = u({ [e]: t });
            r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: { [e]: t } });
            try {
                let n = await s.A.patch({
                    url: o.Rsh.EMAIL_SETTINGS,
                    body: { settings: { categories: { [e]: t } } },
                    trackedActionData: {
                        event: l.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                        properties: { category: e, value: t },
                    },
                    rejectWithError: !0,
                });
                r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: n.body });
            } catch (e) {
                (r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE", previous: n }), (0, d.A)());
            }
        },
        NI: async function () {
            let e = c.Zk.reduce((e, t) => ({ ...e, [t]: !1 }), {}),
                t = u(e);
            r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: e });
            try {
                let t = await s.A.patch({
                    url: o.Rsh.EMAIL_SETTINGS,
                    body: { settings: { categories: e } },
                    trackedActionData: {
                        event: l.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                        properties: { category: "marketing", value: !1 },
                    },
                    rejectWithError: !0,
                });
                r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: t.body });
            } catch (e) {
                (r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE", previous: t }), (0, d.A)());
            }
        },
        cR: async function () {
            try {
                let e = await s.A.get({
                    url: o.Rsh.EMAIL_SETTINGS,
                    trackedActionData: {
                        event: l.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                        properties: (e) => {
                            let t = e?.body?.initialized;
                            return (0, i.e0)({ initialized: t });
                        },
                    },
                    rejectWithError: !0,
                });
                return (r.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: e.body }), e.body);
            } catch {
                r.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
            }
        },
    },
);
