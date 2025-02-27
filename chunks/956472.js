r.d(t, {
    Ip: () => d,
    oQ: () => c
}),
    r(47120);
var n = r(932563),
    l = r(594174),
    i = r(74538),
    a = r(215023),
    o = r(981631);
let s = (e) => {
        var t, r, n, l;
        let { product: i, isPremiumUser: s, tab: c, orbBalance: d } = e,
            u = null !== (l = null === (n = i.prices[s ? o.tuJ.PREMIUM_TIER_2 : o.tuJ.DEFAULT]) || void 0 === n ? void 0 : null === (r = n.countryPrices) || void 0 === r ? void 0 : null === (t = r.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== l ? l : [],
            p = u.find((e) => e.currency === o.pKx.DISCORD_ORB),
            f = 1 === u.length && null != p;
        return c === a.AW.ORBS
            ? null != p
                ? {
                      displayPrices: [p],
                      checkoutEligiblePrices: [p],
                      isOrbExclusive: f,
                      shouldCheckoutWithOrbs: !0
                  }
                : {
                      displayPrices: [],
                      checkoutEligiblePrices: [],
                      isOrbExclusive: f,
                      shouldCheckoutWithOrbs: !1
                  }
            : null != p && null != d && d >= p.amount
              ? {
                    displayPrices: u,
                    checkoutEligiblePrices: [p, ...u.filter((e) => e !== p)],
                    isOrbExclusive: f,
                    shouldCheckoutWithOrbs: !0
                }
              : {
                    displayPrices: u,
                    checkoutEligiblePrices: u,
                    isOrbExclusive: f,
                    shouldCheckoutWithOrbs: !1
                };
    },
    c = (e) => {
        let { tab: t, product: r } = e,
            a = (0, n.z)(),
            o = l.default.getCurrentUser(),
            { shouldCheckoutWithOrbs: c } = s({
                product: r,
                isPremiumUser: i.ZP.canUseCollectibles(o),
                orbBalance: a,
                tab: t
            });
        return c;
    };
function d(e) {
    let { product: t, isPremiumUser: r, tab: l } = e;
    return s({
        product: t,
        isPremiumUser: r,
        tab: l,
        orbBalance: (0, n.c)()
    });
}
