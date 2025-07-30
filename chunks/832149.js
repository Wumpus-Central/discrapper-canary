n.d(t, { Z: () => s });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(215023);
let s = (e) => {
    let { product: t, analyticsLocations: s, overrideTitle: a, overrideDescription: o, shouldShowPromotionalExperience: C, shouldCheckoutWithOrbs: d, onCloseCallback: c, itemConsumed: u, purchaseType: p = l.o8.FIAT } = e;
    (0, r.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 331042));
            return (n) =>
                (0, i.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })(
                        {
                            product: t,
                            analyticsLocations: s,
                            overrideTitle: a,
                            overrideDescription: o,
                            shouldShowPromotionalExperience: C,
                            shouldCheckoutWithOrbs: d,
                            itemConsumed: u,
                            purchaseType: p
                        },
                        n
                    )
                );
        },
        { onCloseCallback: c }
    );
};
