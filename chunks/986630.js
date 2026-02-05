"use strict";
n.d(t, { A: () => u, x: () => c });
var r = n(696444),
    i = n(474012),
    a = n(935816),
    s = n(931772),
    o = n(758836),
    l = n(652215);
class u extends s.A {
    prices;
    type;
    premiumType;
    items;
    categorySkuId;
    isCategoryReward;
    bundledProducts;
    variants;
    variantGroupStoreListingId;
    googleSkuIds;
    eligibleOffers;
    constructor(e) {
        super(e),
            (this.summary = e.summary),
            (this.type = e.type),
            (this.premiumType = e.premiumType),
            (this.items = e.items),
            (this.categorySkuId = e.categorySkuId),
            (this.isCategoryReward = e.isCategoryReward),
            (this.prices = e.prices),
            (this.bundledProducts = e.bundledProducts),
            (this.googleSkuIds = e.googleSkuIds),
            (this.variants = e.variants),
            (this.eligibleOffers = e.eligibleOffers);
    }
    static fromServer(e) {
        let { type: t, premium_type: n, category_sku_id: s, prices: d, bundled_products: _, variants: f, ...p } = e;
        return new u({
            ...super.fromServer(p),
            type: t,
            premiumType: n === l.oA2 ? null : n,
            categorySkuId: s,
            isCategoryReward: o.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === p.sku_id;
            }),
            prices: (0, a.m)(d),
            items: (0, i.K)(p.items),
            bundledProducts: _?.map(r.A.fromServer),
            variants: f?.map(c.fromServer),
            googleSkuIds: p.google_sku_ids,
            eligibleOffers: p.eligible_offers,
        });
    }
}
class c extends u {
    baseVariantName;
    baseVariantSkuId;
    variantLabel;
    variantValue;
    constructor(e) {
        super(e),
            (this.baseVariantName = e.baseVariantName),
            (this.baseVariantSkuId = e.baseVariantSkuId),
            (this.variantLabel = e.variantLabel),
            (this.variantValue = e.variantValue);
    }
    static fromServer(e) {
        let { base_variant_name: t, base_variant_sku_id: n, variant_label: r, variant_value: i, ...a } = e;
        return new c({
            ...super.fromServer(a),
            baseVariantName: t,
            baseVariantSkuId: n,
            variantLabel: r,
            variantValue: i,
        });
    }
}
