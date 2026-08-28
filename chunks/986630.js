"use strict";
n.d(t, { A: () => c, x: () => u });
var i = n(575593),
    r = n(384726),
    a = n(696444),
    s = n(474012),
    l = n(931772),
    o = n(758836),
    d = n(652215);
class c extends l.A {
    prices;
    type;
    premiumType;
    items;
    categorySkuId;
    isCategoryReward;
    bundledProducts;
    previewAssets;
    variants;
    variantGroupStoreListingId;
    googleSkuIds;
    eligibleOffers;
    badgeOverride;
    hideBadge;
    isFirstParty;
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
            (this.previewAssets = e.previewAssets),
            (this.googleSkuIds = e.googleSkuIds),
            (this.variants = e.variants),
            (this.eligibleOffers = e.eligibleOffers),
            (this.badgeOverride = e.badgeOverride),
            (this.hideBadge = e.hideBadge),
            (this.isFirstParty = e.isFirstParty);
    }
    static fromServer(e) {
        let {
            type: t,
            premium_type: n,
            category_sku_id: i,
            prices: l,
            bundled_products: _,
            preview_assets: E,
            variants: A,
            badge_override: h,
            hide_badge: I,
            is_first_party: f,
            ...p
        } = e;
        return new c({
            ...super.fromServer(p),
            type: t,
            premiumType: n === d.oA2 ? null : n,
            categorySkuId: i,
            isCategoryReward: o.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === p.sku_id;
            }),
            prices: (0, r.A)(l),
            items: (0, s.K)(p.items),
            bundledProducts: _?.map(a.A.fromServer),
            previewAssets:
                null != E
                    ? {
                          fgStatic: E.fg_static,
                          fgAnimated: E.fg_animated,
                          bgStatic: E.bg_static,
                          bgAnimated: E.bg_animated,
                      }
                    : void 0,
            variants: A?.map(u.fromServer),
            googleSkuIds: p.google_sku_ids,
            eligibleOffers: p.eligible_offers,
            badgeOverride: h,
            hideBadge: I,
            isFirstParty: f,
        });
    }
    static fromStorefrontProductRecord(e) {
        let t = e.skus[0];
        if (null == t) return;
        let n = t.tenantMetadata?.collectibles;
        if (null == n) return;
        let r = e.skus.length > 1 ? i.R.VARIANTS_GROUP : n.type,
            { items: l, item: _ } = (0, s.T)(t) ?? {};
        return new c({
            storeListingId: t.id,
            skuId: t.id,
            name: e.name,
            summary: e.summary,
            styles: e.primaryCollectionStyles,
            type: r,
            premiumType: n.premiumType === d.oA2 ? null : n.premiumType,
            items: l ?? [_].filter((e) => null != e),
            categorySkuId: e.primaryCollectionId ?? n.categorySkuId ?? "",
            isCategoryReward: o.MS.some((e) => {
                let { rewardSkuId: n } = e;
                return n === t.id;
            }),
            prices: t.prices,
            badgeOverride: e.badgeOverride,
            hideBadge: e.hideBadge,
            previewAssets: t.previewAssetPaths ?? void 0,
            variants:
                r === i.R.VARIANTS_GROUP
                    ? e.skus
                          .map((n) => {
                              let i = n.tenantMetadata?.collectibles;
                              if (null == i) return null;
                              let { items: r, item: a } = (0, s.T)(n) ?? {},
                                  [l] = n.selectedOptions;
                              return new u({
                                  baseVariantName: e.name,
                                  baseVariantSkuId: t.id,
                                  variantLabel: l?.optionValue ?? "",
                                  variantValue: i.optionSelectorDisplayValue ?? "",
                                  storeListingId: n.id,
                                  skuId: n.id,
                                  name: n.name,
                                  summary: n.summary,
                                  styles: void 0,
                                  type: i.type,
                                  premiumType: i.premiumType === d.oA2 ? null : i.premiumType,
                                  items: r ?? [a].filter((e) => null != e),
                                  categorySkuId: e.primaryCollectionId ?? i.categorySkuId ?? "",
                                  isCategoryReward: o.MS.some((e) => {
                                      let { rewardSkuId: t } = e;
                                      return t === n.id;
                                  }),
                                  prices: n.prices,
                                  previewAssets: n.previewAssetPaths ?? void 0,
                                  googleSkuIds: n.googleSkuIds ?? {
                                      [d.lid.MOBILE]: "",
                                      [d.lid.MOBILE_PREMIUM_TIER_2]: "",
                                  },
                                  eligibleOffers: n.eligibleOffers,
                                  variants: void 0,
                                  bundledProducts: void 0,
                                  isFirstParty: i.isFirstParty,
                              });
                          })
                          .filter((e) => null != e)
                    : void 0,
            googleSkuIds: t.googleSkuIds ?? { [d.lid.MOBILE]: "", [d.lid.MOBILE_PREMIUM_TIER_2]: "" },
            eligibleOffers: t.eligibleOffers,
            isFirstParty: n.isFirstParty,
            bundledProducts: t.bundledSkus
                ?.map((e) => {
                    let t = e.tenantMetadata?.collectibles;
                    return null == t
                        ? null
                        : new a.A({
                              type: t.type,
                              premiumType: t.premiumType === d.oA2 ? null : t.premiumType,
                              name: e.name,
                              skuId: e.id,
                              summary: e.summary,
                              prices: e.prices,
                          });
                })
                .filter((e) => null != e),
        });
    }
}
class u extends c {
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
        let { base_variant_name: t, base_variant_sku_id: n, variant_label: i, variant_value: r, ...a } = e;
        return new u({
            ...super.fromServer(a),
            baseVariantName: t,
            baseVariantSkuId: n,
            variantLabel: i,
            variantValue: r,
        });
    }
}
