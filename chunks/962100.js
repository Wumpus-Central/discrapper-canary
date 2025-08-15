n.d(t, { y: () => l });
var r = n(951288);
n(647438);
var i = n(481060);
function l(e) {
    (0, i.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
        return (n) =>
            (0, r.jsx)(
                t,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({ source: e }, n),
            );
    });
}
