t.d(n, { Q: () => r });
var a = t(951288),
    i = t(481060);
function r(e) {
    (0, i.ZDy)(async () => {
        let { default: n } = await Promise.all([t.e("31924"), t.e("99285")]).then(t.bind(t, 862065));
        return (t) =>
            (0, a.jsx)(
                n,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            a.forEach(function (n) {
                                var a;
                                (a = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = a);
                            });
                    }
                    return e;
                })({ gameInstance: e }, t),
            );
    });
}
