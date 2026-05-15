"use strict";
n.d(t, { A: () => c, x: () => d });
var i = n(575593),
    r = n(384726),
    s = n(696444),
    a = n(474012),
    o = n(931772),
    l = n(758836),
    u = n(652215);
class c extends o.A {
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
            (this.hideBadge = e.hideBadge);
    }
    static fromServer(e) {
        let {
            type: t,
            premium_type: n,
            category_sku_id: i,
            prices: o,
            bundled_products: _,
            preview_assets: f,
            variants: h,
            badge_override: p,
            hide_badge: E,
            ...m
        } = e;
        return new c({
            ...super.fromServer(m),
            type: t,
            premiumType: n === u.oA2 ? null : n,
            categorySkuId: i,
            isCategoryReward: l.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === m.sku_id;
            }),
            prices: (0, r.A)(o),
            items: (0, a.K)(m.items),
            bundledProducts: _?.map(s.A.fromServer),
            previewAssets:
                null != f
                    ? {
                          fgStatic: f.fg_static,
                          fgAnimated: f.fg_animated,
                          bgStatic: f.bg_static,
                          bgAnimated: f.bg_animated,
                      }
                    : void 0,
            variants: h?.map(d.fromServer),
            googleSkuIds: m.google_sku_ids,
            eligibleOffers: m.eligible_offers,
            badgeOverride: p,
            hideBadge: E,
        });
    }
    static fromStorefrontProductRecord(e) {
        let t = e.skus[0];
        if (null == t) return;
        let n = t.tenantMetadata?.collectibles;
        if (null == n) return;
        let r = e.skus.length > 1 ? i.R.VARIANTS_GROUP : n.type,
            { items: o, item: _ } = (0, a.T)(t) ?? {};
        return new c({
            storeListingId: t.id,
            skuId: t.id,
            name: e.name,
            summary: e.summary,
            styles: e.primaryCollectionStyles,
            type: r,
            premiumType: n.premiumType === u.oA2 ? null : n.premiumType,
            items: o ?? [_].filter((e) => null != e),
            categorySkuId: e.primaryCollectionId ?? n.categorySkuId ?? "",
            isCategoryReward: l.MS.some((e) => {
                let { rewardSkuId: n } = e;
                return n === t.id;
            }),
            prices: t.prices,
            variants:
                r === i.R.VARIANTS_GROUP
                    ? e.skus
                          .map((n) => {
                              let i = n.tenantMetadata?.collectibles;
                              if (null == i) return null;
                              let { items: r, item: s } = (0, a.T)(n) ?? {},
                                  [o] = n.selectedOptions;
                              return new d({
                                  baseVariantName: e.name,
                                  baseVariantSkuId: t.id,
                                  variantLabel: o?.optionValue ?? "",
                                  variantValue: i.optionSelectorDisplayValue ?? "",
                                  storeListingId: n.id,
                                  skuId: n.id,
                                  name: n.name,
                                  summary: n.summary,
                                  styles: void 0,
                                  type: i.type,
                                  premiumType: i.premiumType === u.oA2 ? null : i.premiumType,
                                  items: r ?? [s].filter((e) => null != e),
                                  categorySkuId: e.primaryCollectionId ?? i.categorySkuId ?? "",
                                  isCategoryReward: l.MS.some((e) => {
                                      let { rewardSkuId: t } = e;
                                      return t === n.id;
                                  }),
                                  prices: n.prices,
                                  googleSkuIds: n.googleSkuIds ?? {
                                      [u.lid.MOBILE]: "",
                                      [u.lid.MOBILE_PREMIUM_TIER_2]: "",
                                  },
                                  eligibleOffers: void 0,
                                  variants: void 0,
                                  bundledProducts: void 0,
                              });
                          })
                          .filter((e) => null != e)
                    : void 0,
            googleSkuIds: t.googleSkuIds ?? { [u.lid.MOBILE]: "", [u.lid.MOBILE_PREMIUM_TIER_2]: "" },
            eligibleOffers: void 0,
            bundledProducts: t.bundledSkus
                ?.map((e) => {
                    let t = e.tenantMetadata?.collectibles;
                    return null == t
                        ? null
                        : new s.A({
                              type: t.type,
                              premiumType: t.premiumType === u.oA2 ? null : t.premiumType,
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
class d extends c {
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
        let { base_variant_name: t, base_variant_sku_id: n, variant_label: i, variant_value: r, ...s } = e;
        return new d({
            ...super.fromServer(s),
            baseVariantName: t,
            baseVariantSkuId: n,
            variantLabel: i,
            variantValue: r,
        });
    }
}
