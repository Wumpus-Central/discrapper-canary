n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(215023);
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
let l = (e) => {
    let {
        product: t,
        analyticsLocations: o,
        overrideTitle: l,
        overrideDescription: c,
        shouldShowPromotionalExperience: u,
        onCloseCallback: d,
        itemConsumed: f,
        purchaseType: _ = a.o8.FIAT,
        overrideGraphic: p,
        isRental: h = !1,
        rentalDuration: m,
        rentalExpiresAt: g,
    } = e;
    (0, i.ZDy)(
        async () => {
            if (t.skuId === a.Vt.FRACTIONAL_PREMIUM || t.skuId === a.Vt.ORB_PROFILE_BADGE) {
                let { default: e } = await Promise.all([n.e("30141"), n.e("77198")]).then(n.bind(n, 509428));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        s(
                            {
                                product: t,
                                analyticsLocations: o,
                                overrideTitle: l,
                                overrideDescription: c,
                                itemConsumed: f,
                                purchaseType: a.o8.ORB,
                            },
                            n,
                        ),
                    );
            }
            let { default: e } = await Promise.all([n.e("30141"), n.e("87624")]).then(n.bind(n, 331042));
            return (n) =>
                (0, r.jsx)(
                    e,
                    s(
                        {
                            product: t,
                            analyticsLocations: o,
                            overrideTitle: l,
                            overrideDescription: c,
                            shouldShowPromotionalExperience: u,
                            purchaseType: _,
                            overrideGraphic: p,
                            isRental: h,
                            rentalDuration: m,
                            rentalExpiresAt: g,
                        },
                        n,
                    ),
                );
        },
        { onCloseCallback: d },
    );
};
