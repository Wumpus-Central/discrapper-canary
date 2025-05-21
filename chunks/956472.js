n.d(t, {
    Ip: () => g,
    T4: () => u,
    oQ: () => f,
    oo: () => h
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
        let { product: t, isPremiumUser: n } = e,
            r = c({
                product: t,
                isPremiumUser: n
            }),
            { enabled: l } = (0, i.CE)({ location: 'getShopBasePricingData' }),
            o = l ? r.find((e) => e.currency === a.pKx.DISCORD_ORB) : void 0,
            s = r.find((e) => e.currency !== a.pKx.DISCORD_ORB),
            u = 1 === r.length && null != o;
        return {
            orbPrice: o,
            fiatPrice: s,
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
            a = [];
        return (
            r === s.AW.ORBS ? null != i && (a = [i]) : (null != l && a.push(l), null != i && a.push(i)),
            {
                orbPrice: i,
                fiatPrice: l,
                isOrbExclusive: o,
                displayPrices: a
            }
        );
    },
    p = (e) => {
        var t;
        let { hasSufficientOrbs: n, orbPrice: r, fiatPrice: i, isOrbExclusive: l } = e,
            o = [];
        null != r && null != i ? (n ? o.push(r, i) : o.push(i, r)) : null != r ? o.push(r) : null != i && o.push(i);
        let s = o.length > 0 && (null == (t = o[0]) ? void 0 : t.currency) === a.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: o,
            isOrbExclusive: l,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: s
        };
    },
    f = (e) => {
        let { product: t } = e,
            n = (0, r.zl)(),
            i = l.default.getCurrentUser(),
            {
                orbPrice: s,
                fiatPrice: a,
                isOrbExclusive: c
            } = d({
                product: t,
                isPremiumUser: o.ZP.canUseCollectibles(i)
            }),
            u = null != s && null != n && n >= s.amount,
            { shouldCheckoutWithOrbs: h } = p({
                orbPrice: s,
                fiatPrice: a,
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
            isOrbExclusive: s,
            displayPrices: a
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
            'function' == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                )),
                r.forEach(function (t) {
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })(
        { displayPrices: a },
        p({
            orbPrice: l,
            fiatPrice: o,
            isOrbExclusive: s,
            hasSufficientOrbs: c
        })
    );
}
