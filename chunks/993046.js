"use strict";
n.d(t, { O: () => A, o: () => T });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(871123),
    l = n(773669),
    u = n(287809),
    c = n(580630),
    d = n(561573),
    _ = n(288106),
    f = n(652215);
function p(e) {
    return { pricingResultId: e.pricing_result_id, rewardResultIds: e.reward_result_ids };
}
function h(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function m(e) {
    return s().mapValues(e, (e) =>
        s().mapValues(e, (e) => ({
            userPrice: h(e.user_price),
            prices: s().mapValues(e.prices, (e) => s().mapValues(e, (e) => h(e))),
        })),
    );
}
function E(e) {
    return { type: e.type, amount: e.amount };
}
function g(e) {
    return s().mapValues(e, (e) => s().mapValues(e, (e) => E(e)));
}
function A(e) {
    return {
        skuPriceMap: s().mapValues(e.sku_price_map, (e) => p(e)),
        pricingResultIdMap: m(e.pricing_result_id_map),
        rewardResultIdMap: g(e.reward_result_id_map),
    };
}
let I = (e) => {
    if (null == e) return _.QK.SELF_PURCHASE;
    switch (e) {
        case f.lid.DEFAULT:
            return _.QK.SELF_PURCHASE;
        case f.lid.GIFT:
            return _.QK.GIFT;
        default:
            return _.QK.SELF_PURCHASE;
    }
};
function T(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = f.lid.DEFAULT } = e,
        i = (0, a.bG)([d.A], () => d.A.getPricesForSkuId(t?.id ?? null)),
        s = (0, a.yK)([d.A], () => d.A.getRewardsForSkuId(t?.id) ?? []),
        p = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        h = (0, a.bG)([l.default], () => l.default.locale),
        {
            normalPrice: m,
            discountedPrice: E,
            discountPercent: g,
        } = r.useMemo(() => {
            if (null == t) return { normalPrice: "", discountedPrice: null, discountPercent: null };
            if (null == i) {
                let e = t.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, o.y8)(t, n) : t.getPrice(p?.premiumType);
                return {
                    normalPrice: null != e ? (0, c.$g)(e.amount, e.currency) : "",
                    discountedPrice: null,
                    discountPercent: null,
                };
            }
            let e = I(n),
                r = i[e] ?? i[_.QK.SELF_PURCHASE],
                a = r?.userPrice?.find((e) => e.currency !== f.Yri.DISCORD_ORB),
                l = s.find((t) => t[e]?.type === _.Ns.DISCOUNT),
                u = null != l ? l[e] : null,
                d = null != u ? a : null,
                m = null != u && u.amount > 0 ? u.amount : null,
                E = null != u ? r?.prices[f.FBC.BASE]?.[_.v8.NORMAL]?.find((e) => e.currency !== f.Yri.DISCORD_ORB) : a;
            return {
                normalPrice: null != E ? (0, c.$g)(E.amount, E.currency) : "",
                discountedPrice: null != d ? (0, c.$g)(d.amount, d.currency) : null,
                discountPercent: null != m ? (0, c.l9)(h, -m / 100) : null,
            };
        }, [t, n, p?.premiumType, i, s, h]);
    return { normalPrice: m, discountedPrice: E, discountPercent: g };
}
