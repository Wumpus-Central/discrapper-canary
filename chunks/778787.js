n.d(t, {
    Z: () => p,
    q: () => h
}),
    n(627341),
    n(724458),
    n(653041);
var i = n(278074),
    r = n(979554),
    a = n(922347),
    s = n(587177),
    o = n(311850),
    l = n(803358),
    u = n(212161),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = (e) =>
        (0, i.EQ)(e)
            .with({ type: r.Z.AVATAR_DECORATION }, (e) => a.Z.fromServer(e))
            .with({ type: r.Z.PROFILE_EFFECT }, (e) => u.Z.fromServer(e))
            .otherwise(() => null),
    _ = (e) =>
        null != e
            ? e.reduce((e, t) => {
                  let n = f(t);
                  return null != n && e.push(n), e;
              }, [])
            : [];
class p extends l.Z {
    static fromServer(e) {
        let { type: t, premium_type: n, category_sku_id: i, prices: r, bundled_products: a, variants: l, ...u } = e;
        return new p({
            ...super.fromServer(u),
            type: t,
            premiumType: n === c.WND ? null : n,
            categorySkuId: i,
            prices: (0, o.l)(r),
            items: _(u.items),
            bundledProducts: null == a ? void 0 : a.map(s.Z.fromServer),
            variants: null == l ? void 0 : l.map(h.fromServer),
            googleSkuIds: u.google_sku_ids
        });
    }
    constructor(e) {
        super(e), d(this, 'prices', void 0), d(this, 'type', void 0), d(this, 'premiumType', void 0), d(this, 'items', void 0), d(this, 'categorySkuId', void 0), d(this, 'bundledProducts', void 0), d(this, 'variants', void 0), d(this, 'variantGroupStoreListingId', void 0), d(this, 'googleSkuIds', void 0), (this.summary = e.summary), (this.type = e.type), (this.premiumType = e.premiumType), (this.items = e.items), (this.categorySkuId = e.categorySkuId), (this.prices = e.prices), (this.bundledProducts = e.bundledProducts), (this.googleSkuIds = e.googleSkuIds), (this.variants = e.variants);
    }
}
class h extends p {
    static fromServer(e) {
        let { base_variant_name: t, base_variant_sku_id: n, variant_label: i, variant_value: r, ...a } = e;
        return new h({
            ...super.fromServer(a),
            baseVariantName: t,
            baseVariantSkuId: n,
            variantLabel: i,
            variantValue: r
        });
    }
    constructor(e) {
        super(e), d(this, 'baseVariantName', void 0), d(this, 'baseVariantSkuId', void 0), d(this, 'variantLabel', void 0), d(this, 'variantValue', void 0), (this.baseVariantName = e.baseVariantName), (this.baseVariantSkuId = e.baseVariantSkuId), (this.variantLabel = e.variantLabel), (this.variantValue = e.variantValue);
    }
}
