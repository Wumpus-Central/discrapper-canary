n.d(t, { M: () => d });
var r = n(951288),
    i = n(481060),
    a = n(272304),
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
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    let { applicationId: t, viewId: s, showOutdatedInfoOption: c = !0 } = e,
        d = (0, a.P6)("GameProfileModal");
    if (null == t) return null;
    let f = () =>
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e("46923").then(n.bind(n, 55396));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(
                            {
                                showOutdatedInfoOption: c,
                                applicationId: t,
                                viewId: s,
                            },
                            n,
                        ),
                    );
            }),
        _ = () =>
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        u(l({}, n), {
                            detectedActivity: {
                                application_id: t,
                                name: "",
                            },
                        }),
                    );
            });
    return (0, r.jsx)(i.sNh, {
        id: "game-profile-something-wrong",
        label: o.intl.string(o.t.qP2cXV),
        action: d ? _ : f,
    });
}
