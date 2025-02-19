n.d(t, {
    I: () => c,
    g: () => d
}),
    n(411104);
var r = n(544891),
    i = n(570140),
    s = n(981631),
    a = n(388032);
function l(e) {
    return (
        null != e &&
            null != e.body &&
            i.Z.dispatch({
                type: 'UPDATE_CONSENTS',
                consents: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
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
    throw Error(e.status >= 500 && e.status <= 599 ? a.NW.string(a.t.cvJdtr) : null != e && null != e.body && null != e.body.message ? e.body.message : a.NW.string(a.t.cvJdtr));
}
function c() {
    return r.tn
        .get({
            url: s.ANM.SETTINGS_CONSENT,
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(l, (e) => Promise.reject(Error(e.body.message)));
}
function d(e, t) {
    return r.tn
        .post({
            url: s.ANM.SETTINGS_CONSENT,
            body: {
                grant: e,
                revoke: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(l, o);
}
