(n.d(t, {
    Ip: () => h,
    T4: () => d,
    oQ: () => g,
    oo: () => m
}),
    n(539854));
var i = n(932563),
    r = n(822857),
    s = n(594174),
    a = n(74538),
    l = n(215023),
    o = n(981631);
let c = (e) => {
        var t, n, i, r;
        let { product: s, isPremiumUser: a } = e;
        return null != (r = null == (i = s.prices[a ? o.tuJ.PREMIUM_TIER_2 : o.tuJ.DEFAULT]) || null == (n = i.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? r : [];
    },
    d = (e) => {
        var t;
        let { product: n, isPremiumUser: i } = e;
        return null !=
            (t = c({
                product: n,
                isPremiumUser: i
            }).find((e) => e.currency === o.pKx.DISCORD_ORB))
            ? t
            : null;
    },
    u = (e) => {
        let { product: t, isPremiumUser: n } = e,
            i = c({
                product: t,
                isPremiumUser: n
            }),
            { enabled: s } = (0, r.CE)({ location: 'getShopBasePricingData' }),
            a = s ? i.find((e) => e.currency === o.pKx.DISCORD_ORB) : void 0,
            l = i.find((e) => e.currency !== o.pKx.DISCORD_ORB),
            d = 1 === i.length && null != a;
        return {
            orbPrice: a,
            fiatPrice: l,
            isOrbExclusive: d
        };
    },
    m = (e) => {
        let { product: t, isPremiumUser: n, tab: i } = e,
            {
                orbPrice: r,
                fiatPrice: s,
                isOrbExclusive: a
            } = u({
                product: t,
                isPremiumUser: n
            }),
            o = [];
        return (
            i === l.AW.ORBS ? null != r && (o = [r]) : (null != s && o.push(s), null != r && o.push(r)),
            {
                orbPrice: r,
                fiatPrice: s,
                isOrbExclusive: a,
                displayPrices: o
            }
        );
    },
    p = (e) => {
        var t;
        let { hasSufficientOrbs: n, orbPrice: i, fiatPrice: r, isOrbExclusive: s } = e,
            a = [];
        null != i && null != r ? (n ? a.push(i, r) : a.push(r, i)) : null != i ? a.push(i) : null != r && a.push(r);
        let l = a.length > 0 && (null == (t = a[0]) ? void 0 : t.currency) === o.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: a,
            isOrbExclusive: s,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: l
        };
    },
    g = (e) => {
        let { product: t } = e,
            n = (0, i.zl)(),
            r = s.default.getCurrentUser(),
            {
                orbPrice: l,
                fiatPrice: o,
                isOrbExclusive: c
            } = u({
                product: t,
                isPremiumUser: a.ZP.canUseCollectibles(r)
            }),
            d = null != l && null != n && n >= l.amount,
            { shouldCheckoutWithOrbs: m } = p({
                orbPrice: l,
                fiatPrice: o,
                isOrbExclusive: c,
                hasSufficientOrbs: d
            });
        return m;
    };
function h(e) {
    let { product: t, isPremiumUser: n, tab: r } = e,
        {
            orbPrice: s,
            fiatPrice: a,
            isOrbExclusive: l,
            displayPrices: o
        } = m({
            product: t,
            isPremiumUser: n,
            tab: r
        }),
        c = (0, i.V_)(null != s ? s.amount : null);
    return (function (e) {
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
        { displayPrices: o },
        p({
            orbPrice: s,
            fiatPrice: a,
            isOrbExclusive: l,
            hasSufficientOrbs: c
        })
    );
}
