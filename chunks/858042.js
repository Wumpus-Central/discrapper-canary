n.d(t, { M: () => u });
var r = n(54381),
    i = n(481060),
    a = n(388032);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    if (null == e) return null;
    let t = () =>
        (0, i.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e("82077"), n.e("30709")]).then(n.bind(n, 953848));
            return (n) =>
                (0, r.jsx)(
                    t,
                    c(s({}, n), {
                        detectedActivity: {
                            application_id: e,
                            name: "",
                        },
                    }),
                );
        });
    return (0, r.jsx)(i.sNh, {
        id: "game-profile-something-wrong",
        label: a.intl.string(a.t.qP2cXd),
        action: t,
    });
}
