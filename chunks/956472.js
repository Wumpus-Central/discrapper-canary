n.d(t, {
    Ip: () => E,
    oQ: () => g,
    oo: () => p,
}),
    n(539854);
var r = n(932563),
    i = n(825102),
    a = n(594174),
    o = n(74538),
    s = n(27123),
    l = n(786040),
    c = n(215023),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = (e) => {
        let { product: t, isPremiumUser: n } = e,
            r = (0, s.vH)({
                product: t,
                isPremiumUser: n,
            }),
            { enabled: a } = (0, i.CE)({ location: "getShopBasePricingData" }),
            o = a ? r.find((e) => e.currency === u.pKx.DISCORD_ORB) : void 0,
            l = r.find((e) => e.currency !== u.pKx.DISCORD_ORB),
            c = 1 === r.length && null != o;
        return {
            orbPrice: o,
            fiatPrice: l,
            isOrbExclusive: c,
        };
    },
    p = (e) => {
        let { product: t, isPremiumUser: n, prioritizedCurrency: r, hasDiscountOffer: i = !1 } = e,
            {
                orbPrice: a,
                fiatPrice: o,
                isOrbExclusive: s,
            } = _({
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
    h = (e) => {
        var t;
        let {
                hasSufficientOrbs: n,
                orbPrice: r,
                fiatPrice: i,
                isOrbExclusive: a,
                hasDiscountOffer: o = !1,
                prioritizedCurrency: s = null,
            } = e,
            c = [],
            d = s === l.tA.ORBS;
        null != r && null != i
            ? d || (n && !o)
                ? c.push(r, i)
                : c.push(i, r)
            : null != r
              ? c.push(r)
              : null != i && c.push(i);
        let f = c.length > 0 && (null == (t = c[0]) ? void 0 : t.currency) === u.pKx.DISCORD_ORB;
        return {
            checkoutEligiblePrices: c,
            isOrbExclusive: a,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: f,
        };
    },
    m = () => {
        let e = [c.sT];
        return {
            orbPrice: c.sT,
            displayPrices: e,
            fiatPrice: void 0,
            isOrbExclusive: !0,
        };
    },
    g = (e) => {
        let { product: t } = e,
            n = (0, r.zl)(),
            i = a.default.getCurrentUser(),
            {
                orbPrice: s,
                fiatPrice: l,
                isOrbExclusive: c,
            } = _({
                product: t,
                isPremiumUser: o.ZP.canUseCollectibles(i),
            }),
            u = null != s && null != n && n >= s.amount,
            { shouldCheckoutWithOrbs: d } = h({
                orbPrice: s,
                fiatPrice: l,
                isOrbExclusive: c,
                hasSufficientOrbs: u,
            });
        return d;
    };
function E(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: i, hasDiscountOffer: a = !1, isRental: o = !1 } = e,
        {
            orbPrice: s,
            fiatPrice: l,
            isOrbExclusive: c,
            displayPrices: u,
        } = o
            ? m()
            : p({
                  product: t,
                  isPremiumUser: n,
                  prioritizedCurrency: i,
                  hasDiscountOffer: a,
              }),
        d = (0, r.V_)(null != s ? s.amount : null);
    return f(
        { displayPrices: u },
        h({
            orbPrice: s,
            fiatPrice: l,
            isOrbExclusive: c,
            hasSufficientOrbs: d,
            hasDiscountOffer: a,
            prioritizedCurrency: i,
        }),
    );
}
