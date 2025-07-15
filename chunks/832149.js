r.d(t, { Z: () => i });
var n = r(255367);
r(73800);
var l = r(481060),
    o = r(215023);
let i = (e) => {
    let { product: t, analyticsLocations: i, overrideTitle: a, overrideDescription: s, shouldShowPromotionalExperience: c, shouldCheckoutWithOrbs: u, onCloseCallback: d, itemConsumed: p, purchaseType: g = o.o8.FIAT } = e;
    (0, l.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(r.bind(r, 331042));
            return (r) =>
                (0, n.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })(
                        {
                            product: t,
                            analyticsLocations: i,
                            overrideTitle: a,
                            overrideDescription: s,
                            shouldShowPromotionalExperience: c,
                            shouldCheckoutWithOrbs: u,
                            itemConsumed: p,
                            purchaseType: g
                        },
                        r
                    )
                );
        },
        { onCloseCallback: d }
    );
};
