"use strict";
n.d(t, { JL: () => C, Oj: () => S, ou: () => N });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(871123),
    l = n(773669),
    u = n(955945),
    c = n(287809),
    d = n(927578),
    _ = n(580630),
    f = n(561573),
    p = n(288106),
    h = n(652215),
    m = n(788868);
function E(e) {
    return { pricingResultId: e.pricing_result_id, rewardResultIds: e.reward_result_ids };
}
function g(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function A(e) {
    return s().mapValues(e, (e) =>
        s().mapValues(e, (e) => ({
            userPrice: g(e.user_price),
            prices: s().mapValues(e.prices, (e) => s().mapValues(e, (e) => g(e))),
        })),
    );
}
function I(e) {
    return { type: e.type, amount: e.amount };
}
function T(e) {
    return s().mapValues(e, (e) => s().mapValues(e, (e) => I(e)));
}
function S(e) {
    return {
        skuPriceMap: s().mapValues(e.sku_price_map, (e) => E(e)),
        pricingResultIdMap: A(e.pricing_result_id_map),
        rewardResultIdMap: T(e.reward_result_id_map),
    };
}
let y = (e) => {
    if (null == e) return p.QK.SELF_PURCHASE;
    switch (e) {
        case h.lid.DEFAULT:
            return p.QK.SELF_PURCHASE;
        case h.lid.GIFT:
            return p.QK.GIFT;
        default:
            return p.QK.SELF_PURCHASE;
    }
};
function v(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: i } = e,
        s = (0, a.bG)([f.A], () => f.A.getPricesForSkuId(t?.id ?? null));
    return r.useMemo(() => {
        let e = y(n);
        if (null == t || null == s)
            return { userPrice: void 0, pricesForPurchaseType: void 0, purchaseType: e, storeHasPrice: null != s };
        let r = s[e] ?? s[p.QK.SELF_PURCHASE];
        return {
            userPrice: r?.userPrice?.find((e) =>
                i ? e.currency === h.Yri.DISCORD_ORB : e.currency !== h.Yri.DISCORD_ORB,
            ),
            pricesForPurchaseType: r,
            purchaseType: e,
            storeHasPrice: !0,
        };
    }, [t, s, n, i]);
}
function N(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
        {
            userPrice: i,
            pricesForPurchaseType: s,
            purchaseType: u,
            storeHasPrice: d,
        } = v({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !1 }),
        m = (0, a.yK)([f.A], () => f.A.getRewardsForSkuId(t?.id) ?? []),
        E = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        g = (0, a.bG)([l.default], () => l.default.locale),
        {
            normalPrice: A,
            discountedPrice: I,
            discountPercent: T,
        } = r.useMemo(() => {
            if (null == t) return { normalPrice: null, discountedPrice: null, discountPercent: null };
            if (!d) {
                let e = t.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, o.y8)(t, n) : t.getPrice(E?.premiumType);
                return {
                    normalPrice: null != e && e.amount > 0 ? (0, _.$g)(e.amount, e.currency) : null,
                    discountedPrice: null,
                    discountPercent: null,
                };
            }
            let e = m.find((e) => e[u]?.type === p.Ns.DISCOUNT),
                r = null != e ? e[u] : null,
                a = null != r ? i : null,
                l = null != r && r.amount > 0 ? r.amount : null,
                c = null != r ? s?.prices[h.FBC.BASE]?.[p.v8.NORMAL]?.find((e) => e.currency !== h.Yri.DISCORD_ORB) : i;
            return {
                normalPrice: null != c && c.amount > 0 ? (0, _.$g)(c.amount, c.currency) : null,
                discountedPrice: null != a ? (0, _.$g)(a.amount, a.currency) : null,
                discountPercent: null != l ? (0, _.l9)(g, -l / 100) : null,
            };
        }, [t, n, E?.premiumType, d, i, s, u, m, g]);
    return { normalPrice: A, discountedPrice: I, discountPercent: T };
}
function C(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
        { userPrice: i, storeHasPrice: s } = v({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !0 }),
        o = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        l = r.useMemo(() => d.Ay.isPremium(o, m.PremiumTypes.TIER_2), [o]);
    return r.useMemo(() => {
        if (null == t) return null;
        if (!s) {
            let e = (0, u.d)(t.prices, l);
            return null != e ? { amount: e.amount, currency: e.currency } : null;
        }
        return i ?? null;
    }, [t, l, s, i]);
}
