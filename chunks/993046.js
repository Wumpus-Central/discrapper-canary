"use strict";
n.d(t, { CD: () => I, JL: () => T, Oj: () => g });
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
    E = n(788868);
function m(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function g(e) {
    var t, n;
    return {
        skuPriceMap: s().mapValues(e.sku_price_map, (e) => ({
            pricingResultId: e.pricing_result_id,
            rewardResultIds: e.reward_result_ids,
        })),
        pricingResultIdMap:
            ((t = e.pricing_result_id_map),
            s().mapValues(t, (e) =>
                s().mapValues(e, (e) => ({
                    userPrice: m(e.user_price),
                    prices: s().mapValues(e.prices, (e) => s().mapValues(e, (e) => m(e))),
                })),
            )),
        rewardResultIdMap:
            ((n = e.reward_result_id_map),
            s().mapValues(n, (e) => s().mapValues(e, (e) => ({ type: e.type, amount: e.amount })))),
    };
}
function A(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: i } = e,
        s = (0, a.bG)([f.A], () => f.A.getPricesForSkuId(t?.id ?? null));
    return r.useMemo(() => {
        let e = ((e) => {
            if (null == e) return p.QK.SELF_PURCHASE;
            switch (e) {
                case h.lid.DEFAULT:
                    return p.QK.SELF_PURCHASE;
                case h.lid.GIFT:
                    return p.QK.GIFT;
                default:
                    return p.QK.SELF_PURCHASE;
            }
        })(n);
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
function I(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
        {
            normalPrice: i,
            discountedPrice: s,
            discountPercent: u,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
                {
                    userPrice: i,
                    pricesForPurchaseType: s,
                    purchaseType: l,
                    storeHasPrice: u,
                } = A({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !1 }),
                d = (0, a.yK)([f.A], () => f.A.getRewardsForSkuId(t?.id) ?? []),
                _ = (0, a.bG)([c.default], () => c.default.getCurrentUser());
            return r.useMemo(() => {
                if (null == t) return { normalPrice: null, discountedPrice: null, discountPercent: null };
                if (!u) {
                    let e =
                        t.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, o.y8)(t, n) : t.getPrice(_?.premiumType);
                    return {
                        normalPrice: null != e && e.amount > 0 ? e : null,
                        discountedPrice: null,
                        discountPercent: null,
                    };
                }
                let e = d.find((e) => e[l]?.type === p.Ns.DISCOUNT),
                    r = null != e ? e[l] : null,
                    a = null != r && null != i ? i : null,
                    c = null != r && r.amount > 0 ? r.amount : null,
                    f =
                        null != r
                            ? s?.prices[h.FBC.BASE]?.[p.v8.NORMAL]?.find((e) => e.currency !== h.Yri.DISCORD_ORB)
                            : i;
                return { normalPrice: null != f && f.amount > 0 ? f : null, discountedPrice: a, discountPercent: c };
            }, [t, n, _?.premiumType, u, i, s, l, d]);
        })({ sku: t, priceSetAssignmentPurchaseType: n }),
        d = (0, a.bG)([l.default], () => l.default.locale);
    return r.useMemo(
        () => ({
            normalPrice: null != i && i.amount > 0 ? (0, _.$g)(i.amount, i.currency) : null,
            discountedPrice: null != s ? (0, _.$g)(s.amount, s.currency) : null,
            discountPercent: null != u ? (0, _.l9)(d, -u / 100) : null,
        }),
        [i, s, u, d],
    );
}
function T(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
        { userPrice: i, storeHasPrice: s } = A({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !0 }),
        o = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        l = r.useMemo(() => d.Ay.isPremium(o, E.PremiumTypes.TIER_2), [o]);
    return r.useMemo(() => {
        if (null == t) return null;
        if (!s) {
            let e = (0, u.d)(t.prices, l);
            return null != e ? { amount: e.amount, currency: e.currency } : null;
        }
        return i ?? null;
    }, [t, l, s, i]);
}
