t.d(n, { Z: () => s });
var l = t(255367);
t(73800);
var i = t(481060),
    r = t(215023);
let s = (e) => {
    let { product: n, analyticsLocations: s, overrideTitle: a, overrideDescription: o, shouldShowPromotionalExperience: C, shouldCheckoutWithOrbs: d, onCloseCallback: c, itemConsumed: u, purchaseType: p = r.o8.FIAT } = e;
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(t.bind(t, 331042));
            return (t) =>
                (0, l.jsx)(
                    e,
                    (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                l = Object.keys(t);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    })
                                )),
                                l.forEach(function (n) {
                                    var l;
                                    (l = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[n] = l);
                                });
                        }
                        return e;
                    })(
                        {
                            product: n,
                            analyticsLocations: s,
                            overrideTitle: a,
                            overrideDescription: o,
                            shouldShowPromotionalExperience: C,
                            shouldCheckoutWithOrbs: d,
                            itemConsumed: u,
                            purchaseType: p
                        },
                        t
                    )
                );
        },
        { onCloseCallback: c }
    );
};
