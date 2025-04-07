n.d(t, {
    Ip: () => p,
    T4: () => u,
    oQ: () => b
}),
    n(539854);
var r = n(932563),
    l = n(822857),
    a = n(594174),
    o = n(74538),
    i = n(215023),
    s = n(981631);
let c = (e) => {
        var t, n, r, l;
        let { product: a, isPremiumUser: o } = e;
        return null != (l = null == (r = a.prices[o ? s.tuJ.PREMIUM_TIER_2 : s.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? l : [];
    },
    u = (e) => {
        var t;
        let { product: n, isPremiumUser: r } = e;
        return null !=
            (t = c({
                product: n,
                isPremiumUser: r
            }).find((e) => e.currency === s.pKx.DISCORD_ORB))
            ? t
            : null;
    },
    d = (e) => {
        var t;
        let { product: n, isPremiumUser: r, tab: a, orbBalance: o } = e,
            u = c({
                product: n,
                isPremiumUser: r
            }),
            { enabled: d } = (0, l.C)({ location: 'getShopProductPrices' }),
            b = d ? u.find((e) => e.currency === s.pKx.DISCORD_ORB) : void 0,
            p = u.find((e) => e.currency !== s.pKx.DISCORD_ORB),
            f = [],
            g = [],
            h = 1 === u.length && null != b,
            m = null != b && null != o && o >= b.amount;
        null != b && null != p ? (m ? f.push(b, p) : f.push(p, b), a === i.AW.ORBS ? g.push(b) : g.push(p, b)) : null != b ? (f.push(b), g.push(b)) : null != p && (f.push(p), a !== i.AW.ORBS && g.push(p));
        let _ = f.length > 0 && (null == (t = f[0]) ? void 0 : t.currency) === s.pKx.DISCORD_ORB;
        return {
            displayPrices: g,
            checkoutEligiblePrices: f,
            isOrbExclusive: h,
            hasSufficientOrbs: m,
            shouldCheckoutWithOrbs: _
        };
    },
    b = (e) => {
        let { tab: t, product: n } = e,
            l = (0, r.z)(),
            i = a.default.getCurrentUser(),
            { shouldCheckoutWithOrbs: s } = d({
                product: n,
                isPremiumUser: o.ZP.canUseCollectibles(i),
                orbBalance: l,
                tab: t
            });
        return s;
    };
function p(e) {
    let { product: t, isPremiumUser: n, tab: l } = e;
    return d({
        product: t,
        isPremiumUser: n,
        tab: l,
        orbBalance: (0, r.c)()
    });
}
