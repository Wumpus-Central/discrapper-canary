n.d(t, {
    A: () => h,
    x: () => m,
});
var r = n(696444),
    i = n(474012),
    a = n(935816),
    s = n(931772),
    o = n(758836),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
class h extends s.A {
    static fromServer(e) {
        let { type: t, premium_type: n, category_sku_id: s, prices: c, bundled_products: d, variants: _ } = e,
            g = p(e, ["type", "premium_type", "category_sku_id", "prices", "bundled_products", "variants"]);
        return new h(
            f(u({}, super.fromServer(g)), {
                type: t,
                premiumType: n === l.oA2 ? null : n,
                categorySkuId: s,
                isCategoryReward: o.MS.some((e) => {
                    let { rewardSkuId: t } = e;
                    return t === g.sku_id;
                }),
                prices: (0, a.m)(c),
                items: (0, i.K)(g.items),
                bundledProducts: null == d ? void 0 : d.map(r.A.fromServer),
                variants: null == _ ? void 0 : _.map(m.fromServer),
                googleSkuIds: g.google_sku_ids,
                eligibleOffers: g.eligible_offers,
            }),
        );
    }
    constructor(e) {
        super(e),
            c(this, "prices", void 0),
            c(this, "type", void 0),
            c(this, "premiumType", void 0),
            c(this, "items", void 0),
            c(this, "categorySkuId", void 0),
            c(this, "isCategoryReward", void 0),
            c(this, "bundledProducts", void 0),
            c(this, "variants", void 0),
            c(this, "variantGroupStoreListingId", void 0),
            c(this, "googleSkuIds", void 0),
            c(this, "eligibleOffers", void 0),
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
}
class m extends h {
    static fromServer(e) {
        let { base_variant_name: t, base_variant_sku_id: n, variant_label: r, variant_value: i } = e,
            a = p(e, ["base_variant_name", "base_variant_sku_id", "variant_label", "variant_value"]);
        return new m(
            f(u({}, super.fromServer(a)), {
                baseVariantName: t,
                baseVariantSkuId: n,
                variantLabel: r,
                variantValue: i,
            }),
        );
    }
    constructor(e) {
        super(e),
            c(this, "baseVariantName", void 0),
            c(this, "baseVariantSkuId", void 0),
            c(this, "variantLabel", void 0),
            c(this, "variantValue", void 0),
            (this.baseVariantName = e.baseVariantName),
            (this.baseVariantSkuId = e.baseVariantSkuId),
            (this.variantLabel = e.variantLabel),
            (this.variantValue = e.variantValue);
    }
}
