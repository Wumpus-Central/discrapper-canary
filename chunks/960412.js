n.d(t, {
    Y7: () => c,
    oc: () => u,
    pR: () => d
});
var i = n(990547),
    r = n(283693),
    s = n(570140),
    l = n(573261),
    a = n(930441),
    o = n(981631);
async function c() {
    try {
        let e = await l.Z.get({
            url: o.ANM.EMAIL_SETTINGS,
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e || null == (t = e.body) ? void 0 : t.initialized;
                    return (0, r.iG)({ initialized: n });
                }
            },
            rejectWithError: !0
        });
        return (
            s.Z.dispatch({
                type: 'EMAIL_SETTINGS_FETCH_SUCCESS',
                settings: e.body
            }),
            e.body
        );
    } catch (e) {
        s.Z.dispatch({ type: 'EMAIL_SETTINGS_FETCH_FAILURE' });
    }
}
async function d(e, t) {
    s.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: { [e]: t }
    });
    try {
        let n = await l.Z.patch({
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
        s.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: n.body
        });
    } catch (e) {
        s.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
async function u() {
    let e = a.M0.reduce((e, t) => {
        var n, i;
        return (
            (n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e)),
            (i = i = { [t]: !1 }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            n
        );
    }, {});
    s.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: e
    });
    try {
        let t = await l.Z.patch({
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
        s.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: t.body
        });
    } catch (e) {
        s.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
