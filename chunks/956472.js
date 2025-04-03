r.d(t, {
    Ip: () => m,
    T4: () => a,
    oQ: () => p
}),
    r(653041);
var n = r(932563),
    l = r(822857),
    s = r(594174),
    o = r(74538),
    i = r(215023),
    u = r(981631);
let c = (e) => {
        var t, r, n, l;
        let { product: s, isPremiumUser: o } = e;
        return null != (l = null == (n = s.prices[o ? u.tuJ.PREMIUM_TIER_2 : u.tuJ.DEFAULT]) || null == (r = n.countryPrices) || null == (t = r.prices) ? void 0 : t.slice(0, 2)) ? l : [];
    },
    a = (e) => {
        var t;
        let { product: r, isPremiumUser: n } = e;
        return null !=
            (t = c({
                product: r,
                isPremiumUser: n
            }).find((e) => e.currency === u.pKx.DISCORD_ORB))
            ? t
            : null;
    },
    d = (e) => {
        var t;
        let { product: r, isPremiumUser: n, tab: s, orbBalance: o } = e,
            a = c({
                product: r,
                isPremiumUser: n
            }),
            { enabled: d } = (0, l.C)({ location: 'getShopProductPrices' }),
            p = d ? a.find((e) => e.currency === u.pKx.DISCORD_ORB) : void 0,
            m = a.find((e) => e.currency !== u.pKx.DISCORD_ORB),
            b = [],
            x = [],
            h = 1 === a.length && null != p,
            j = null != p && null != o && o >= p.amount;
        null != p && null != m ? (j ? b.push(p, m) : b.push(m, p), s === i.AW.ORBS ? x.push(p) : x.push(m, p)) : null != p ? (b.push(p), x.push(p)) : null != m && (b.push(m), s !== i.AW.ORBS && x.push(m));
        let f = b.length > 0 && (null == (t = b[0]) ? void 0 : t.currency) === u.pKx.DISCORD_ORB;
        return {
            displayPrices: x,
            checkoutEligiblePrices: b,
            isOrbExclusive: h,
            hasSufficientOrbs: j,
            shouldCheckoutWithOrbs: f
        };
    },
    p = (e) => {
        let { tab: t, product: r } = e,
            l = (0, n.z)(),
            i = s.default.getCurrentUser(),
            { shouldCheckoutWithOrbs: u } = d({
                product: r,
                isPremiumUser: o.ZP.canUseCollectibles(i),
                orbBalance: l,
                tab: t
            });
        return u;
    };
function m(e) {
    let { product: t, isPremiumUser: r, tab: l } = e;
    return d({
        product: t,
        isPremiumUser: r,
        tab: l,
        orbBalance: (0, n.c)()
    });
}
