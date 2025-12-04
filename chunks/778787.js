n.d(t, {
    Z: () => O,
    q: () => v,
}),
    n(314940),
    n(539854);
var r = n(278074),
    i = n(979554),
    a = n(922347),
    o = n(587177),
    s = n(311850),
    l = n(803358),
    c = n(135483),
    u = n(212161),
    d = n(215023),
    f = n(981631);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = (e) =>
        (0, r.EQ)(e)
            .with({ type: i.Z.AVATAR_DECORATION }, (e) => a.Z.fromServer(e))
            .with({ type: i.Z.PROFILE_EFFECT }, (e) => u.Z.fromServer(e))
            .with({ type: i.Z.NAMEPLATE }, (e) => c.Z.fromServer(e))
            .otherwise(() => null),
    y = (e) =>
        null != e
            ? e.reduce((e, t) => {
                  let n = b(t);
                  return null != n && e.push(n), e;
              }, [])
            : [];
class O extends l.Z {
    static fromServer(e) {
        var { type: t, premium_type: n, category_sku_id: r, prices: i, bundled_products: a, variants: l } = e,
            c = g(e, ["type", "premium_type", "category_sku_id", "prices", "bundled_products", "variants"]);
        return new O(
            h(_({}, super.fromServer(c)), {
                type: t,
                premiumType: n === f.WND ? null : n,
                categorySkuId: r,
                isCategoryReward: d.y8.some((e) => {
                    let { rewardSkuId: t } = e;
                    return t === c.sku_id;
                }),
                prices: (0, s.l)(i),
                items: y(c.items),
                bundledProducts: null == a ? void 0 : a.map(o.Z.fromServer),
                variants: null == l ? void 0 : l.map(v.fromServer),
                googleSkuIds: c.google_sku_ids,
                eligibleOffers: c.eligible_offers,
            }),
        );
    }
    constructor(e) {
        super(e),
            p(this, "prices", void 0),
            p(this, "type", void 0),
            p(this, "premiumType", void 0),
            p(this, "items", void 0),
            p(this, "categorySkuId", void 0),
            p(this, "isCategoryReward", void 0),
            p(this, "bundledProducts", void 0),
            p(this, "variants", void 0),
            p(this, "variantGroupStoreListingId", void 0),
            p(this, "googleSkuIds", void 0),
            p(this, "eligibleOffers", void 0),
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
class v extends O {
    static fromServer(e) {
        var { base_variant_name: t, base_variant_sku_id: n, variant_label: r, variant_value: i } = e,
            a = g(e, ["base_variant_name", "base_variant_sku_id", "variant_label", "variant_value"]);
        return new v(
            h(_({}, super.fromServer(a)), {
                baseVariantName: t,
                baseVariantSkuId: n,
                variantLabel: r,
                variantValue: i,
            }),
        );
    }
    constructor(e) {
        super(e),
            p(this, "baseVariantName", void 0),
            p(this, "baseVariantSkuId", void 0),
            p(this, "variantLabel", void 0),
            p(this, "variantValue", void 0),
            (this.baseVariantName = e.baseVariantName),
            (this.baseVariantSkuId = e.baseVariantSkuId),
            (this.variantLabel = e.variantLabel),
            (this.variantValue = e.variantValue);
    }
}
