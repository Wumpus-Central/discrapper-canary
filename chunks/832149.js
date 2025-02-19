n.d(t, { Z: () => s });
var l = n(200651);
n(192379);
var i = n(481060);
let s = (e) => {
    let { product: t, analyticsLocations: s, overrideTitle: r, overrideDescription: a, shouldShowPromotionalExperience: o } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 331042));
        return (n) =>
            (0, l.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })(
                    {
                        product: t,
                        analyticsLocations: s,
                        overrideTitle: r,
                        overrideDescription: a,
                        shouldShowPromotionalExperience: o
                    },
                    n
                )
            );
    });
};
