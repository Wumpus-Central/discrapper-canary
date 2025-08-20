n.d(t, {
    I: () => d,
    g: () => f,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    a = n(981631),
    o = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    return (
        null != e &&
            null != e.body &&
            i.Z.dispatch({
                type: "UPDATE_CONSENTS",
                consents: l({}, e.body),
            }),
        e.body
    );
}
function u(e) {
    let t;
    throw Error(
        (t =
            e.status >= 500 && e.status <= 599
                ? o.intl.string(o.t.cvJdtr)
                : null != e && null != e.body && null != e.body.message
                  ? e.body.message
                  : o.intl.string(o.t.cvJdtr)),
    );
}
function d() {
    return r.tn
        .get({
            url: a.ANM.SETTINGS_CONSENT,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
        .then(c, (e) => Promise.reject(Error(e.body.message)));
}
function f(e, t) {
    return r.tn
        .post({
            url: a.ANM.SETTINGS_CONSENT,
            body: {
                grant: e,
                revoke: t,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
        .then(c, u);
}
