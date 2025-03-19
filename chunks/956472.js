n.d(t, {
    Ip: () => h,
    T4: () => c,
    oQ: () => d
}),
    n(47120);
var r = n(932563),
    i = n(594174),
    o = n(74538),
    l = n(215023),
    a = n(981631);
let s = (e) => {
        var t, n, r, i;
        let { product: o, isPremiumUser: l } = e;
        return null !== (i = null === (r = o.prices[l ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || void 0 === r ? void 0 : null === (n = r.countryPrices) || void 0 === n ? void 0 : null === (t = n.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== i ? i : [];
    },
    c = (e) => {
        var t;
        let { product: n, isPremiumUser: r } = e;
        return null !==
            (t = s({
                product: n,
                isPremiumUser: r
            }).find((e) => e.currency === a.pKx.DISCORD_ORB)) && void 0 !== t
            ? t
            : null;
    },
    u = (e) => {
        let { product: t, isPremiumUser: n, tab: r, orbBalance: i } = e,
            o = s({
                product: t,
                isPremiumUser: n
            }),
            c = o.find((e) => e.currency === a.pKx.DISCORD_ORB),
            u = 1 === o.length && null != c;
        return r === l.AW.ORBS
            ? null != c
                ? {
                      displayPrices: [c],
                      checkoutEligiblePrices: [c],
                      isOrbExclusive: u,
                      shouldCheckoutWithOrbs: !0
                  }
                : {
                      displayPrices: [],
                      checkoutEligiblePrices: [],
                      isOrbExclusive: u,
                      shouldCheckoutWithOrbs: !1
                  }
            : null != c && null != i && i >= c.amount
              ? {
                    displayPrices: o,
                    checkoutEligiblePrices: [c, ...o.filter((e) => e !== c)],
                    isOrbExclusive: u,
                    shouldCheckoutWithOrbs: !0
                }
              : {
                    displayPrices: o,
                    checkoutEligiblePrices: o,
                    isOrbExclusive: u,
                    shouldCheckoutWithOrbs: !1
                };
    },
    d = (e) => {
        let { tab: t, product: n } = e,
            l = (0, r.z)(),
            a = i.default.getCurrentUser(),
            { shouldCheckoutWithOrbs: s } = u({
                product: n,
                isPremiumUser: o.ZP.canUseCollectibles(a),
                orbBalance: l,
                tab: t
            });
        return s;
    };
function h(e) {
    let { product: t, isPremiumUser: n, tab: i } = e;
    return u({
        product: t,
        isPremiumUser: n,
        tab: i,
        orbBalance: (0, r.c)()
    });
}
