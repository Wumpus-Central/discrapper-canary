n.d(t, { q: () => s });
var r = n(200651);
n(192379);
var i = n(952265);
function s(e) {
    let { demonetized: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, i.ZD)(
        async () => {
            let { default: i } = await n.e('90220').then(n.bind(n, 418225));
            return (n) =>
                (0, r.jsx)(
                    i,
                    (function (e) {
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
                    })(
                        {
                            guildId: e,
                            demonetized: t
                        },
                        n
                    )
                );
        },
        {
            onCloseRequest: () => {}
        }
    );
}
