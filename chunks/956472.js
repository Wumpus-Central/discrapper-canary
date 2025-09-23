n.d(t, {
    Ip: () => h,
    oQ: () => f,
    oo: () => d,
}),
    n(539854);
var r = n(932563),
    i = n(825102),
    l = n(594174),
    a = n(74538),
    o = n(27123),
    s = n(215023),
    c = n(981631);
let u = (e) => {
        let { product: t, isPremiumUser: n } = e,
            r = (0, o.v)({
                product: t,
                isPremiumUser: n,
            }),
            { enabled: l } = (0, i.CE)({ location: "getShopBasePricingData" }),
            a = l ? r.find((e) => e.currency === c.pKx.DISCORD_ORB) : void 0,
            s = r.find((e) => e.currency !== c.pKx.DISCORD_ORB),
            u = 1 === r.length && null != a;
        return {
            orbPrice: a,
            fiatPrice: s,
            isOrbExclusive: u,
        };
    },
    d = (e) => {
        let { product: t, isPremiumUser: n, tab: r, hasDiscountOffer: i = !1 } = e,
            {
                orbPrice: l,
                fiatPrice: a,
                isOrbExclusive: o,
            } = u({
                product: t,
                isPremiumUser: n,
            }),
            c = [];
        return (
            r === s.AW.ORBS ? null != l && (c = [l]) : (null != a && c.push(a), null == l || i || c.push(l)),
            {
                orbPrice: l,
                fiatPrice: a,
                isOrbExclusive: o,
                displayPrices: c,
            }
        );
    },
    p = (e) => {
        var t;
        let {
                hasSufficientOrbs: n,
                orbPrice: r,
                fiatPrice: i,
                isOrbExclusive: l,
                hasDiscountOffer: a = !1,
                tab: o = null,
            } = e,
            u = [];
        null != r && null != i
            ? n && (!a || o === s.AW.ORBS)
                ? u.push(r, i)
                : u.push(i, r)
            : null != r
              ? u.push(r)
              : null != i && u.push(i);
        let d = u.length > 0 && (null == (t = u[0]) ? void 0 : t.currency) === c.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: u,
            isOrbExclusive: l,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: d,
        };
    },
    f = (e) => {
        let { product: t } = e,
            n = (0, r.zl)(),
            i = l.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: s,
                isOrbExclusive: c,
            } = u({
                product: t,
                isPremiumUser: a.ZP.canUseCollectibles(i),
            }),
            d = null != o && null != n && n >= o.amount,
            { shouldCheckoutWithOrbs: f } = p({
                orbPrice: o,
                fiatPrice: s,
                isOrbExclusive: c,
                hasSufficientOrbs: d,
            });
        return f;
    };
function h(e) {
    let { product: t, isPremiumUser: n, tab: i, hasDiscountOffer: l = !1 } = e,
        {
            orbPrice: a,
            fiatPrice: o,
            isOrbExclusive: s,
            displayPrices: c,
        } = d({
            product: t,
            isPremiumUser: n,
            tab: i,
            hasDiscountOffer: l,
        }),
        u = (0, r.V_)(null != a ? a.amount : null);
    return (function (e) {
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
    })(
        { displayPrices: c },
        p({
            orbPrice: a,
            fiatPrice: o,
            isOrbExclusive: s,
            hasSufficientOrbs: u,
            hasDiscountOffer: l,
            tab: i,
        }),
    );
}
