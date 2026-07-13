"use strict";
n.d(t, { CD: () => m, JL: () => g, Oj: () => p }), n(938796);
var i = n(64700),
    r = n(735438),
    a = n.n(r);
n(665260), n(574381);
var s = n(17928),
    l = n(871123),
    o = n(773669),
    d = n(457008),
    c = n(287809),
    u = n(428262),
    _ = n(580630),
    E = n(561573),
    A = n(288106),
    h = n(652215),
    I = n(202541);
function f(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function p(e) {
    var t, n;
    return {
        skuPriceMap: a().mapValues(e.sku_price_map, (e) => ({
            pricingResultId: e.pricing_result_id,
            rewardResultIds: e.reward_result_ids,
        })),
        pricingResultIdMap:
            ((t = e.pricing_result_id_map),
            a().mapValues(t, (e) =>
                a().mapValues(e, (e) => ({
                    userPrice: f(e.user_price),
                    prices: a().mapValues(e.prices, (e) => a().mapValues(e, (e) => f(e))),
                })),
            )),
        rewardResultIdMap:
            ((n = e.reward_result_id_map),
            a().mapValues(n, (e) => a().mapValues(e, (e) => ({ type: e.type, amount: e.amount })))),
    };
}
function T(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: r } = e,
        a = (0, s.bG)([E.A], () => E.A.getPricesForSkuId(t?.id ?? null));
    return i.useMemo(() => {
        let e = (function (e) {
            if (null == e) return A.QK.SELF_PURCHASE;
            switch (e) {
                case h.lid.DEFAULT:
                    return A.QK.SELF_PURCHASE;
                case h.lid.GIFT:
                    return A.QK.GIFT;
                default:
                    return A.QK.SELF_PURCHASE;
            }
        })(n);
        if (null == t || null == a)
            return { userPrice: void 0, pricesForPurchaseType: void 0, purchaseType: e, storeHasPrice: null != a };
        let i = a[e] ?? a[A.QK.SELF_PURCHASE];
        return {
            userPrice: i?.userPrice?.find((e) =>
                r ? e.currency === h.Yri.DISCORD_ORB : e.currency !== h.Yri.DISCORD_ORB,
            ),
            pricesForPurchaseType: i,
            purchaseType: e,
            storeHasPrice: !0,
        };
    }, [t, a, n, r]);
}
function m(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
        r = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
                {
                    userPrice: r,
                    pricesForPurchaseType: a,
                    purchaseType: o,
                    storeHasPrice: d,
                } = T({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !1 }),
                u = (0, s.yK)([E.A], () => E.A.getRewardsForSkuId(t?.id) ?? []),
                _ = (0, s.bG)([c.default], () => c.default.getCurrentUser());
            return i.useMemo(() => {
                if (null == t)
                    return { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
                if (!d) {
                    let e =
                        (t.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM
                            ? (0, l.y8)(t, n)
                            : t.getPrice(_?.premiumType)) ?? null;
                    return { normalPrice: e, discountedPrice: null, discountPercent: null, userPrice: e };
                }
                let e = u.find((e) => {
                        let t = e[o];
                        if (null == t) return !1;
                        switch (t.type) {
                            case A.Ns.DISCOUNT:
                                return !0;
                            case A.Ns.FIXED_PRICE:
                            case A.Ns.ACTION:
                                return !1;
                            default:
                                return t.type, !1;
                        }
                    }),
                    i = null != e ? e[o] : null,
                    s = null != i && null != r ? r : null,
                    c = null != i && i.amount > 0 ? i.amount : null;
                return {
                    normalPrice:
                        (null != i
                            ? a?.prices[h.FBC.BASE]?.[A.v8.NORMAL]?.find((e) => e.currency !== h.Yri.DISCORD_ORB)
                            : r) ?? null,
                    discountedPrice: s,
                    discountPercent: c,
                    userPrice: r ?? null,
                };
            }, [t, n, _?.premiumType, d, r, a, o, u]);
        })({ sku: t, priceSetAssignmentPurchaseType: n }),
        a = (0, s.bG)([o.default], () => o.default.locale);
    return i.useMemo(
        () =>
            (function (e, t) {
                let { normalPrice: n, discountedPrice: i, discountPercent: r, userPrice: a } = e;
                return {
                    normalPrice: null != n ? (0, _.$g)(n.amount, n.currency) : null,
                    discountedPrice: null != i ? (0, _.$g)(i.amount, i.currency) : null,
                    discountPercent: null != r ? (0, _.l9)(t, -r / 100) : null,
                    userPrice: null != a ? (0, _.$g)(a.amount, a.currency) : null,
                };
            })(r, a),
        [r, a],
    );
}
function g(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = h.lid.DEFAULT } = e,
        { userPrice: r, storeHasPrice: a } = T({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !0 }),
        l = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        o = i.useMemo(() => u.Ay.isPremium(l, I.PremiumTypes.TIER_2), [l]);
    return i.useMemo(() => {
        if (null == t) return null;
        if (!a) {
            let e = (0, d.dR)(t.prices, o);
            return null != e ? { amount: e.amount, currency: e.currency } : null;
        }
        return r ?? null;
    }, [t, o, a, r]);
}
