"use strict";
n.d(t, { O: () => T, o: () => y });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(871123),
    l = n(773669),
    u = n(178213),
    c = n(287809),
    d = n(580630),
    _ = n(728458),
    f = n(561573),
    p = n(288106),
    h = n(652215);
function m(e) {
    return { pricingResultId: e.pricing_result_id, rewardResultIds: e.reward_result_ids };
}
function E(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function g(e) {
    return s().mapValues(e, (e) =>
        s().mapValues(e, (e) => ({
            userPrice: E(e.user_price),
            prices: s().mapValues(e.prices, (e) => s().mapValues(e, (e) => E(e))),
        })),
    );
}
function A(e) {
    return { type: e.type, amount: e.amount };
}
function I(e) {
    return s().mapValues(e, (e) => s().mapValues(e, (e) => A(e)));
}
function T(e) {
    return {
        skuPriceMap: s().mapValues(e.sku_price_map, (e) => m(e)),
        pricingResultIdMap: g(e.pricing_result_id_map),
        rewardResultIdMap: I(e.reward_result_id_map),
    };
}
let S = (e) => {
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
function y(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
        i = (0, u.AZ)("useSKUPrice"),
        s = (0, a.bG)([f.A], () => f.A.getPricesForSkuId(t?.id ?? null)),
        m = (0, a.yK)([f.A], () => f.A.getRewardsForSkuId(t?.id) ?? []),
        E = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        g = (0, a.bG)([l.default], () => l.default.locale),
        {
            normalPrice: A,
            discountedPrice: I,
            discountPercent: T,
        } = r.useMemo(() => {
            if (null == t) return { normalPrice: null, discountedPrice: null, discountPercent: null };
            if (null == s) {
                let e = t.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, o.y8)(t, n) : t.getPrice(E?.premiumType);
                return {
                    normalPrice: null != e && e.amount > 0 ? (0, d.$g)(e.amount, e.currency) : null,
                    discountedPrice: null,
                    discountPercent: null,
                };
            }
            let e = S(n),
                r = s[e] ?? s[p.QK.SELF_PURCHASE],
                i = r?.userPrice?.find((e) => e.currency !== h.Yri.DISCORD_ORB),
                a = m.find((t) => t[e]?.type === p.Ns.DISCOUNT),
                l = null != a ? a[e] : null,
                u = null != l ? i : null,
                c = null != l && l.amount > 0 ? l.amount : null,
                _ = null != l ? r?.prices[h.FBC.BASE]?.[p.v8.NORMAL]?.find((e) => e.currency !== h.Yri.DISCORD_ORB) : i;
            return {
                normalPrice: null != _ && _.amount > 0 ? (0, d.$g)(_.amount, _.currency) : null,
                discountedPrice: null != u ? (0, d.$g)(u.amount, u.currency) : null,
                discountPercent: null != c ? (0, d.l9)(g, -c / 100) : null,
            };
        }, [t, n, E?.premiumType, s, m, g]);
    return (
        r.useEffect(() => {
            i &&
                null != t &&
                null == A &&
                _.A.captureException(Error("SKU price not found for item."), { extra: { skuId: t.id } });
        }, [i, t, A]),
        { normalPrice: A, discountedPrice: I, discountPercent: T }
    );
}
