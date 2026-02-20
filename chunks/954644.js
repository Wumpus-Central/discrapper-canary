l.d(r, { A: () => u });
var t = l(627968),
    o = l(64700),
    i = l(986630),
    n = l(151645),
    a = l(751304),
    c = l(561769),
    d = l(652215),
    s = l(758836);
let u = (e) => {
    let { skuId: r } = e,
        { product: l } = (0, n.A)(r),
        u = o.useMemo(() => {
            if (null == l) return;
            let e = l.skus[0];
            if (null != e)
                return new i.A({
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
                    isCategoryReward: s.MS.some((r) => {
                        let { rewardSkuId: l } = r;
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
        : (0, t.jsx)(c.v3.Provider, { value: { productOverride: u }, children: (0, t.jsx)(a.A, { skuId: r }) });
};
