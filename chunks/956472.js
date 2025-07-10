(n.d(t, {
    Ip: () => g,
    T4: () => u,
    oQ: () => f,
    oo: () => h
}),
    n(539854));
var r = n(932563),
    i = n(822857),
    l = n(594174),
    o = n(74538),
    a = n(215023),
    s = n(981631);
let c = (e) => {
        var t, n, r, i;
        let { product: l, isPremiumUser: o } = e;
        return null != (i = null == (r = l.prices[o ? s.tuJ.PREMIUM_TIER_2 : s.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? i : [];
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
        let { product: t, isPremiumUser: n } = e,
            r = c({
                product: t,
                isPremiumUser: n
            }),
            { enabled: l } = (0, i.CE)({ location: 'getShopBasePricingData' }),
            o = l ? r.find((e) => e.currency === s.pKx.DISCORD_ORB) : void 0,
            a = r.find((e) => e.currency !== s.pKx.DISCORD_ORB),
            u = 1 === r.length && null != o;
        return {
            orbPrice: o,
            fiatPrice: a,
            isOrbExclusive: u
        };
    },
    h = (e) => {
        let { product: t, isPremiumUser: n, tab: r } = e,
            {
                orbPrice: i,
                fiatPrice: l,
                isOrbExclusive: o
            } = d({
                product: t,
                isPremiumUser: n
            }),
            s = [];
        return (
            r === a.AW.ORBS ? null != i && (s = [i]) : (null != l && s.push(l), null != i && s.push(i)),
            {
                orbPrice: i,
                fiatPrice: l,
                isOrbExclusive: o,
                displayPrices: s
            }
        );
    },
    p = (e) => {
        var t;
        let { hasSufficientOrbs: n, orbPrice: r, fiatPrice: i, isOrbExclusive: l } = e,
            o = [];
        null != r && null != i ? (n ? o.push(r, i) : o.push(i, r)) : null != r ? o.push(r) : null != i && o.push(i);
        let a = o.length > 0 && (null == (t = o[0]) ? void 0 : t.currency) === s.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: o,
            isOrbExclusive: l,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: a
        };
    },
    f = (e) => {
        let { product: t } = e,
            n = (0, r.zl)(),
            i = l.default.getCurrentUser(),
            {
                orbPrice: a,
                fiatPrice: s,
                isOrbExclusive: c
            } = d({
                product: t,
                isPremiumUser: o.ZP.canUseCollectibles(i)
            }),
            u = null != a && null != n && n >= a.amount,
            { shouldCheckoutWithOrbs: h } = p({
                orbPrice: a,
                fiatPrice: s,
                isOrbExclusive: c,
                hasSufficientOrbs: u
            });
        return h;
    };
function g(e) {
    let { product: t, isPremiumUser: n, tab: i } = e,
        {
            orbPrice: l,
            fiatPrice: o,
            isOrbExclusive: a,
            displayPrices: s
        } = h({
            product: t,
            isPremiumUser: n,
            tab: i
        }),
        c = (0, r.V_)(null != l ? l.amount : null);
    return (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            ('function' == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                )),
                r.forEach(function (t) {
                    var r;
                    ((r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r));
                }));
        }
        return e;
    })(
        { displayPrices: s },
        p({
            orbPrice: l,
            fiatPrice: o,
            isOrbExclusive: a,
            hasSufficientOrbs: c
        })
    );
}
