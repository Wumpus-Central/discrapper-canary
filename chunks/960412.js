n.d(t, {
    Y7: () => c,
    oc: () => u,
    pR: () => d
}),
    n(724458);
var i = n(990547),
    r = n(283693),
    a = n(570140),
    s = n(573261),
    l = n(930441),
    o = n(981631);
async function c() {
    try {
        let e = await s.Z.get({
            url: o.ANM.EMAIL_SETTINGS,
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
                    return (0, r.iG)({ initialized: n });
                }
            },
            rejectWithError: !0
        });
        return (
            a.Z.dispatch({
                type: 'EMAIL_SETTINGS_FETCH_SUCCESS',
                settings: e.body
            }),
            e.body
        );
    } catch {
        a.Z.dispatch({ type: 'EMAIL_SETTINGS_FETCH_FAILURE' });
    }
}
async function d(e, t) {
    a.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: { [e]: t }
    });
    try {
        let n = await s.Z.patch({
            url: o.ANM.EMAIL_SETTINGS,
            body: { settings: { categories: { [e]: t } } },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: e,
                    value: t
                }
            },
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: n.body
        });
    } catch (e) {
        a.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
async function u() {
    let e = l.M0.reduce(
        (e, t) => ({
            ...e,
            [t]: !1
        }),
        {}
    );
    a.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: e
    });
    try {
        let t = await s.Z.patch({
            url: o.ANM.EMAIL_SETTINGS,
            body: { settings: { categories: e } },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: 'marketing',
                    value: !1
                }
            },
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: t.body
        });
    } catch (e) {
        a.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
