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
    baseVariantName;
    variantLabel;
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
            (this.isFirstParty = e.isFirstParty),
            (this.baseVariantName = e.baseVariantName),
            (this.variantLabel = e.variantLabel);
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
        let { flattenVariantSkuId: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = null != t ? e.skus.find((e) => e.id === t) : void 0,
            r = n ?? e.skus[0];
        if (null == r) return;
        let l = r.tenantMetadata?.collectibles;
        if (null == l) return;
        let _ = null != n && e.skus.length > 1,
            E = e.skus.length > 1 && !_ ? i.R.VARIANTS_GROUP : l.type,
            { items: A, item: h } = (0, s.T)(r) ?? {},
            [I] = r.selectedOptions;
        return new c({
            storeListingId: r.id,
            skuId: r.id,
            name: e.name,
            summary: e.summary,
            styles: e.primaryCollectionStyles,
            type: E,
            baseVariantName: _ ? e.name : void 0,
            variantLabel: _ ? (I?.optionValue ?? "") : void 0,
            premiumType: l.premiumType === d.oA2 ? null : l.premiumType,
            items: A ?? [h].filter((e) => null != e),
            categorySkuId: e.primaryCollectionId ?? l.categorySkuId ?? "",
            isCategoryReward: o.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === r.id;
            }),
            prices: r.prices,
            badgeOverride: e.badgeOverride,
            hideBadge: e.hideBadge,
            previewAssets: r.previewAssetPaths ?? void 0,
            variants:
                E === i.R.VARIANTS_GROUP
                    ? e.skus
                          .map((t) => {
                              let n = t.tenantMetadata?.collectibles;
                              if (null == n) return null;
                              let { items: i, item: a } = (0, s.T)(t) ?? {},
                                  [l] = t.selectedOptions;
                              return new u({
                                  baseVariantName: e.name,
                                  baseVariantSkuId: r.id,
                                  variantLabel: l?.optionValue ?? "",
                                  variantValue: n.optionSelectorDisplayValue ?? "",
                                  storeListingId: t.id,
                                  skuId: t.id,
                                  name: t.name,
                                  summary: t.summary,
                                  styles: void 0,
                                  type: n.type,
                                  premiumType: n.premiumType === d.oA2 ? null : n.premiumType,
                                  items: i ?? [a].filter((e) => null != e),
                                  categorySkuId: e.primaryCollectionId ?? n.categorySkuId ?? "",
                                  isCategoryReward: o.MS.some((e) => {
                                      let { rewardSkuId: n } = e;
                                      return n === t.id;
                                  }),
                                  prices: t.prices,
                                  previewAssets: t.previewAssetPaths ?? void 0,
                                  googleSkuIds: t.googleSkuIds ?? {
                                      [d.lid.MOBILE]: "",
                                      [d.lid.MOBILE_PREMIUM_TIER_2]: "",
                                  },
                                  eligibleOffers: t.eligibleOffers,
                                  variants: void 0,
                                  bundledProducts: void 0,
                                  isFirstParty: n.isFirstParty,
                              });
                          })
                          .filter((e) => null != e)
                    : void 0,
            googleSkuIds: r.googleSkuIds ?? { [d.lid.MOBILE]: "", [d.lid.MOBILE_PREMIUM_TIER_2]: "" },
            eligibleOffers: r.eligibleOffers,
            isFirstParty: l.isFirstParty,
            bundledProducts: r.bundledSkus
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
