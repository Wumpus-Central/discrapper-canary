n.d(t, {
    Ip: () => h,
    T4: () => u,
    oQ: () => p
}),
    n(539854);
var r = n(932563),
    i = n(822857),
    o = n(594174),
    l = n(74538),
    s = n(215023),
    a = n(981631);
let c = (e) => {
        var t, n, r, i;
        let { product: o, isPremiumUser: l } = e;
        return null != (i = null == (r = o.prices[l ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? i : [];
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
        let { product: n, isPremiumUser: r, tab: o, orbBalance: l } = e,
            u = c({
                product: n,
                isPremiumUser: r
            }),
            { enabled: d } = (0, i.C)({ location: 'getShopProductPrices' }),
            p = d ? u.find((e) => e.currency === a.pKx.DISCORD_ORB) : void 0,
            h = u.find((e) => e.currency !== a.pKx.DISCORD_ORB),
            _ = [],
            f = [],
            m = 1 === u.length && null != p,
            b = null != p && null != l && l >= p.amount;
        null != p && null != h ? (b ? _.push(p, h) : _.push(h, p), o === s.AW.ORBS ? f.push(p) : f.push(h, p)) : null != p ? (_.push(p), f.push(p)) : null != h && (_.push(h), o !== s.AW.ORBS && f.push(h));
        let g = _.length > 0 && (null == (t = _[0]) ? void 0 : t.currency) === a.pKx.DISCORD_ORB;
        return {
            displayPrices: f,
            checkoutEligiblePrices: _,
            isOrbExclusive: m,
            hasSufficientOrbs: b,
            shouldCheckoutWithOrbs: g
        };
    },
    p = (e) => {
        let { tab: t, product: n } = e,
            i = (0, r.z)(),
            s = o.default.getCurrentUser(),
            { shouldCheckoutWithOrbs: a } = d({
                product: n,
                isPremiumUser: l.ZP.canUseCollectibles(s),
                orbBalance: i,
                tab: t
            });
        return a;
    };
function h(e) {
    let { product: t, isPremiumUser: n, tab: i } = e;
    return d({
        product: t,
        isPremiumUser: n,
        tab: i,
        orbBalance: (0, r.c)()
    });
}
