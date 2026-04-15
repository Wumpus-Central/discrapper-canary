"use strict";
n.d(t, { JL: () => O, Oj: () => v, ou: () => R });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(871123),
    l = n(773669),
    u = n(955945),
    c = n(178213),
    d = n(287809),
    _ = n(927578),
    f = n(580630),
    p = n(728458),
    h = n(561573),
    m = n(288106),
    E = n(652215),
    g = n(788868);
function A(e) {
    return { pricingResultId: e.pricing_result_id, rewardResultIds: e.reward_result_ids };
}
function I(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function T(e) {
    return s().mapValues(e, (e) =>
        s().mapValues(e, (e) => ({
            userPrice: I(e.user_price),
            prices: s().mapValues(e.prices, (e) => s().mapValues(e, (e) => I(e))),
        })),
    );
}
function S(e) {
    return { type: e.type, amount: e.amount };
}
function y(e) {
    return s().mapValues(e, (e) => s().mapValues(e, (e) => S(e)));
}
function v(e) {
    return {
        skuPriceMap: s().mapValues(e.sku_price_map, (e) => A(e)),
        pricingResultIdMap: T(e.pricing_result_id_map),
        rewardResultIdMap: y(e.reward_result_id_map),
    };
}
let N = (e) => {
    if (null == e) return m.QK.SELF_PURCHASE;
    switch (e) {
        case E.lid.DEFAULT:
            return m.QK.SELF_PURCHASE;
        case E.lid.GIFT:
            return m.QK.GIFT;
        default:
            return m.QK.SELF_PURCHASE;
    }
};
function C(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: i } = e,
        s = (0, a.bG)([h.A], () => h.A.getPricesForSkuId(t?.id ?? null));
    return r.useMemo(() => {
        let e = N(n);
        if (null == t || null == s)
            return { userPrice: void 0, pricesForPurchaseType: void 0, purchaseType: e, storeHasPrice: null != s };
        let r = s[e] ?? s[m.QK.SELF_PURCHASE];
        return {
            userPrice: r?.userPrice?.find((e) =>
                i ? e.currency === E.Yri.DISCORD_ORB : e.currency !== E.Yri.DISCORD_ORB,
            ),
            pricesForPurchaseType: r,
            purchaseType: e,
            storeHasPrice: !0,
        };
    }, [t, s, n, i]);
}
function R(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = E.lid.DEFAULT } = e,
        i = (0, c.A)("useSKUPrice"),
        {
            userPrice: s,
            pricesForPurchaseType: u,
            purchaseType: _,
            storeHasPrice: g,
        } = C({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !1 }),
        A = (0, a.yK)([h.A], () => h.A.getRewardsForSkuId(t?.id) ?? []),
        I = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        T = (0, a.bG)([l.default], () => l.default.locale),
        {
            normalPrice: S,
            discountedPrice: y,
            discountPercent: v,
        } = r.useMemo(() => {
            if (null == t) return { normalPrice: null, discountedPrice: null, discountPercent: null };
            if (!g) {
                let e = t.productLine === E.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, o.y8)(t, n) : t.getPrice(I?.premiumType);
                return {
                    normalPrice: null != e && e.amount > 0 ? (0, f.$g)(e.amount, e.currency) : null,
                    discountedPrice: null,
                    discountPercent: null,
                };
            }
            let e = A.find((e) => e[_]?.type === m.Ns.DISCOUNT),
                r = null != e ? e[_] : null,
                i = null != r ? s : null,
                a = null != r && r.amount > 0 ? r.amount : null,
                l = null != r ? u?.prices[E.FBC.BASE]?.[m.v8.NORMAL]?.find((e) => e.currency !== E.Yri.DISCORD_ORB) : s;
            return {
                normalPrice: null != l && l.amount > 0 ? (0, f.$g)(l.amount, l.currency) : null,
                discountedPrice: null != i ? (0, f.$g)(i.amount, i.currency) : null,
                discountPercent: null != a ? (0, f.l9)(T, -a / 100) : null,
            };
        }, [t, n, I?.premiumType, g, s, u, _, A, T]);
    return (
        r.useEffect(() => {
            i &&
                null != t &&
                null == S &&
                p.A.captureException(Error("SKU price not found for item."), { extra: { skuId: t.id } });
        }, [i, t, S]),
        { normalPrice: S, discountedPrice: y, discountPercent: v }
    );
}
function O(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = E.lid.DEFAULT } = e,
        { userPrice: i, storeHasPrice: s } = C({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !0 }),
        o = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        l = r.useMemo(() => _.Ay.isPremium(o, g.PremiumTypes.TIER_2), [o]);
    return r.useMemo(() => {
        if (null == t) return null;
        if (!s) {
            let e = (0, u.d)(t.prices, l);
            return null != e ? { amount: e.amount, currency: e.currency } : null;
        }
        return i ?? null;
    }, [t, l, s, i]);
}
