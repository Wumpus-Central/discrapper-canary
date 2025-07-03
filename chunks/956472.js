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
    l = n(74538),
    a = n(215023),
    o = n(981631);
let c = (e) => {
        var t, n, i, r;
        let { product: s, isPremiumUser: l } = e;
        return null != (r = null == (i = s.prices[l ? o.tuJ.PREMIUM_TIER_2 : o.tuJ.DEFAULT]) || null == (n = i.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? r : [];
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
            l = s ? i.find((e) => e.currency === o.pKx.DISCORD_ORB) : void 0,
            a = i.find((e) => e.currency !== o.pKx.DISCORD_ORB),
            d = 1 === i.length && null != l;
        return {
            orbPrice: l,
            fiatPrice: a,
            isOrbExclusive: d
        };
    },
    m = (e) => {
        let { product: t, isPremiumUser: n, tab: i } = e,
            {
                orbPrice: r,
                fiatPrice: s,
                isOrbExclusive: l
            } = u({
                product: t,
                isPremiumUser: n
            }),
            o = [];
        return (
            i === a.AW.ORBS ? null != r && (o = [r]) : (null != s && o.push(s), null != r && o.push(r)),
            {
                orbPrice: r,
                fiatPrice: s,
                isOrbExclusive: l,
                displayPrices: o
            }
        );
    },
    p = (e) => {
        var t;
        let { hasSufficientOrbs: n, orbPrice: i, fiatPrice: r, isOrbExclusive: s } = e,
            l = [];
        null != i && null != r ? (n ? l.push(i, r) : l.push(r, i)) : null != i ? l.push(i) : null != r && l.push(r);
        let a = l.length > 0 && (null == (t = l[0]) ? void 0 : t.currency) === o.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: l,
            isOrbExclusive: s,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: a
        };
    },
    g = (e) => {
        let { product: t } = e,
            n = (0, i.zl)(),
            r = s.default.getCurrentUser(),
            {
                orbPrice: a,
                fiatPrice: o,
                isOrbExclusive: c
            } = u({
                product: t,
                isPremiumUser: l.ZP.canUseCollectibles(r)
            }),
            d = null != a && null != n && n >= a.amount,
            { shouldCheckoutWithOrbs: m } = p({
                orbPrice: a,
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
            fiatPrice: l,
            isOrbExclusive: a,
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
            fiatPrice: l,
            isOrbExclusive: a,
            hasSufficientOrbs: c
        })
    );
}
