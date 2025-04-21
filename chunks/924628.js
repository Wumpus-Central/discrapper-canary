n.d(t, {
    I: () => c,
    g: () => d
}),
    n(415506);
var i = n(544891),
    r = n(570140),
    s = n(981631),
    l = n(388032);
function a(e) {
    return (
        null != e &&
            null != e.body &&
            r.Z.dispatch({
                type: 'UPDATE_CONSENTS',
                consents: (function (e) {
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
                })({}, e.body)
            }),
        e.body
    );
}
function o(e) {
    let t;
    throw Error(e.status >= 500 && e.status <= 599 ? l.intl.string(l.t.cvJdtr) : null != e && null != e.body && null != e.body.message ? e.body.message : l.intl.string(l.t.cvJdtr));
}
function c() {
    return i.tn
        .get({
            url: s.ANM.SETTINGS_CONSENT,
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(a, (e) => Promise.reject(Error(e.body.message)));
}
function d(e, t) {
    return i.tn
        .post({
            url: s.ANM.SETTINGS_CONSENT,
            body: {
                grant: e,
                revoke: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(a, o);
}
