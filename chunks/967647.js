t.d(n, { Q: () => a });
var i = t(951288),
    r = t(481060);
function a(e) {
    (0, r.ZDy)(async () => {
        let { default: n } = await t.e("88856").then(t.bind(t, 862065));
        return (t) =>
            (0, i.jsx)(
                n,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = i);
                            });
                    }
                    return e;
                })({ gameInstance: e }, t),
            );
    });
}
