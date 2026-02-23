"use strict";
l.d(t, { A: () => u });
var r = l(627968),
    a = l(64700),
    n = l(986630),
    i = l(151645),
    s = l(751304),
    o = l(561769),
    d = l(652215),
    c = l(758836);
let u = (e) => {
    let { skuId: t } = e,
        { product: l } = (0, i.A)(t),
        u = a.useMemo(() => {
            if (null == l) return;
            let e = l.skus[0];
            if (null != e)
                return new n.A({
                    storeListingId: e.id,
                    skuId: e.id,
                    name: l.name,
                    summary: l.summary.trim(),
                    unpublishedAt: void 0,
                    styles: void 0,
                    type: e.itemType,
                    premiumType: e.premiumType,
                    items: null != e.item ? [e.item] : [],
                    categorySkuId: l.primaryCollectionId,
                    isCategoryReward: c.MS.some((t) => {
                        let { rewardSkuId: l } = t;
                        return l === e.id;
                    }),
                    prices: {},
                    bundledProducts: [],
                    variants: [],
                    googleSkuIds: { [d.lid.MOBILE]: "", [d.lid.MOBILE_PREMIUM_TIER_2]: "" },
                    eligibleOffers: void 0,
                });
        }, [l]);
    return null == u
        ? null
        : (0, r.jsx)(o.v3.Provider, { value: { productOverride: u }, children: (0, r.jsx)(s.A, { skuId: t }) });
};
