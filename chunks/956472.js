n.d(t, {
    Ip: () => p,
    T4: () => u,
    oQ: () => h
}),
    n(539854);
var r = n(932563),
    i = n(822857),
    l = n(594174),
    o = n(74538),
    s = n(215023),
    a = n(981631);
let c = (e) => {
        var t, n, r, i;
        let { product: l, isPremiumUser: o } = e;
        return null != (i = null == (r = l.prices[o ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? i : [];
    },
    u = (e) => {
        var t;
        let { product: n, isPremiumUser: r } = e;
        return null !=
            (t = c({
                product: n,
                isPremiumUser: r
            }).find((e) => e.currency === a.pKx.DISCORD_ORB))
            ? t
            : null;
    },
    d = (e) => {
        var t;
        let { product: n, isPremiumUser: r, tab: l, orbBalance: o } = e,
            u = c({
                product: n,
                isPremiumUser: r
            }),
            { enabled: d } = (0, i.C)({ location: 'getShopProductPrices' }),
            h = d ? u.find((e) => e.currency === a.pKx.DISCORD_ORB) : void 0,
            p = u.find((e) => e.currency !== a.pKx.DISCORD_ORB),
            f = [],
            g = [],
            m = 1 === u.length && null != h,
            b = null != h && null != o && o >= h.amount;
        null != h && null != p ? (b ? f.push(h, p) : f.push(p, h), l === s.AW.ORBS ? g.push(h) : g.push(p, h)) : null != h ? (f.push(h), g.push(h)) : null != p && (f.push(p), l !== s.AW.ORBS && g.push(p));
        let y = f.length > 0 && (null == (t = f[0]) ? void 0 : t.currency) === a.pKx.DISCORD_ORB;
        return {
            displayPrices: g,
            checkoutEligiblePrices: f,
            isOrbExclusive: m,
            hasSufficientOrbs: b,
            shouldCheckoutWithOrbs: y
        };
    },
    h = (e) => {
        let { tab: t, product: n } = e,
            i = (0, r.z)(),
            s = l.default.getCurrentUser(),
            { shouldCheckoutWithOrbs: a } = d({
                product: n,
                isPremiumUser: o.ZP.canUseCollectibles(s),
                orbBalance: i,
                tab: t
            });
        return a;
    };
function p(e) {
    let { product: t, isPremiumUser: n, tab: i } = e;
    return d({
        product: t,
        isPremiumUser: n,
        tab: i,
        orbBalance: (0, r.c)()
    });
}
