n.d(t, {
    Ip: () => m,
    oQ: () => _,
}),
    n(539854);
var r = n(932563),
    i = n(825102),
    a = n(594174),
    o = n(74538),
    s = n(27123),
    l = n(786040),
    c = n(215023),
    u = n(981631);
let d = (e) => {
        var t;
        let { product: n, isPremiumUser: r } = e,
            { enabled: a } = (0, i.C)({ location: "getShopBasePricingData" }),
            o = a
                ? (0, s.T4)({
                      product: n,
                      isPremiumUser: r,
                  })
                : void 0;
        return {
            orbPrice: o,
            fiatPrice:
                null !=
                (t = (0, s.cB)({
                    product: n,
                    isPremiumUser: r,
                }))
                    ? t
                    : void 0,
            isOrbExclusive: !!a && (0, s.r1)(n),
        };
    },
    f = (e) => {
        var t;
        let {
                hasSufficientOrbs: n,
                orbPrice: r,
                fiatPrice: i,
                isOrbExclusive: a,
                hasDiscountOffer: o = !1,
                prioritizedCurrency: s = null,
            } = e,
            c = [],
            d = s === l.tA.ORBS;
        null != r && null != i
            ? d || (n && !o)
                ? c.push(r, i)
                : c.push(i, r)
            : null != r
              ? c.push(r)
              : null != i && c.push(i);
        let f = c.length > 0 && (null == (t = c[0]) ? void 0 : t.currency) === u.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: c,
            isOrbExclusive: a,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: f,
        };
    },
    p = () => ({
        orbPrice: c.sT,
        fiatPrice: void 0,
        isOrbExclusive: !0,
    }),
    _ = (e) => {
        let { product: t } = e,
            n = (0, r.zl)(),
            i = a.default.getCurrentUser(),
            {
                orbPrice: s,
                fiatPrice: l,
                isOrbExclusive: c,
            } = d({
                product: t,
                isPremiumUser: o.ZP.canUseCollectibles(i),
            }),
            u = null != s && null != n && n >= s.amount,
            { shouldCheckoutWithOrbs: p } = f({
                orbPrice: s,
                fiatPrice: l,
                isOrbExclusive: c,
                hasSufficientOrbs: u,
            });
        return p;
    };
function m(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: i, hasDiscountOffer: a = !1, isRental: o = !1 } = e,
        {
            orbPrice: s,
            fiatPrice: l,
            isOrbExclusive: c,
        } = o
            ? p()
            : d({
                  product: t,
                  isPremiumUser: n,
              }),
        u = (0, r.V_)(null != s ? s.amount : null);
    return f({
        orbPrice: s,
        fiatPrice: l,
        isOrbExclusive: c,
        hasSufficientOrbs: u,
        hasDiscountOffer: a,
        prioritizedCurrency: i,
    });
}
