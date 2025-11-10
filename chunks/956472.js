n.d(t, {
    Ip: () => m,
    oQ: () => h,
    oo: () => _,
}),
    n(539854);
var r = n(932563),
    i = n(825102),
    a = n(594174),
    o = n(74538),
    s = n(27123),
    l = n(786040),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = (e) => {
        let { product: t, isPremiumUser: n } = e,
            r = (0, s.vH)({
                product: t,
                isPremiumUser: n,
            }),
            { enabled: a } = (0, i.CE)({ location: "getShopBasePricingData" }),
            o = a ? r.find((e) => e.currency === c.pKx.DISCORD_ORB) : void 0,
            l = r.find((e) => e.currency !== c.pKx.DISCORD_ORB),
            u = 1 === r.length && null != o;
        return {
            orbPrice: o,
            fiatPrice: l,
            isOrbExclusive: u,
        };
    },
    _ = (e) => {
        let { product: t, isPremiumUser: n, prioritizedCurrency: r, hasDiscountOffer: i = !1 } = e,
            {
                orbPrice: a,
                fiatPrice: o,
                isOrbExclusive: s,
            } = f({
                product: t,
                isPremiumUser: n,
            }),
            c = [];
        return (
            r === l.tA.ORBS ? null != a && (c = [a]) : (null != o && c.push(o), null == a || i || c.push(a)),
            {
                orbPrice: a,
                fiatPrice: o,
                isOrbExclusive: s,
                displayPrices: c,
            }
        );
    },
    p = (e) => {
        var t;
        let {
                hasSufficientOrbs: n,
                orbPrice: r,
                fiatPrice: i,
                isOrbExclusive: a,
                hasDiscountOffer: o = !1,
                prioritizedCurrency: s = null,
            } = e,
            u = [],
            d = s === l.tA.ORBS;
        null != r && null != i
            ? d || (n && !o)
                ? u.push(r, i)
                : u.push(i, r)
            : null != r
              ? u.push(r)
              : null != i && u.push(i);
        let f = u.length > 0 && (null == (t = u[0]) ? void 0 : t.currency) === c.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: u,
            isOrbExclusive: a,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: f,
        };
    },
    h = (e) => {
        let { product: t } = e,
            n = (0, r.zl)(),
            i = a.default.getCurrentUser(),
            {
                orbPrice: s,
                fiatPrice: l,
                isOrbExclusive: c,
            } = f({
                product: t,
                isPremiumUser: o.ZP.canUseCollectibles(i),
            }),
            u = null != s && null != n && n >= s.amount,
            { shouldCheckoutWithOrbs: d } = p({
                orbPrice: s,
                fiatPrice: l,
                isOrbExclusive: c,
                hasSufficientOrbs: u,
            });
        return d;
    };
function m(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: i, hasDiscountOffer: a = !1 } = e,
        {
            orbPrice: o,
            fiatPrice: s,
            isOrbExclusive: l,
            displayPrices: c,
        } = _({
            product: t,
            isPremiumUser: n,
            prioritizedCurrency: i,
            hasDiscountOffer: a,
        }),
        u = (0, r.V_)(null != o ? o.amount : null);
    return d(
        { displayPrices: c },
        p({
            orbPrice: o,
            fiatPrice: s,
            isOrbExclusive: l,
            hasSufficientOrbs: u,
            hasDiscountOffer: a,
            prioritizedCurrency: i,
        }),
    );
}
