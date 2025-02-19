n.d(t, {
    Z: () => v,
    q: () => b
}),
    n(627341),
    n(653041);
var r = n(278074),
    i = n(979554),
    o = n(922347),
    a = n(587177),
    s = n(311850),
    l = n(803358),
    c = n(212161),
    u = n(981631);
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = (e) =>
        (0, r.EQ)(e)
            .with({ type: i.Z.AVATAR_DECORATION }, (e) => o.Z.fromServer(e))
            .with({ type: i.Z.PROFILE_EFFECT }, (e) => c.Z.fromServer(e))
            .otherwise(() => null),
    E = (e) =>
        null != e
            ? e.reduce((e, t) => {
                  let n = g(t);
                  return null != n && e.push(n), e;
              }, [])
            : [];
class v extends l.Z {
    static fromServer(e) {
        var { type: t, premium_type: n, category_sku_id: r, prices: i, bundled_products: o, variants: l } = e,
            c = h(e, ['type', 'premium_type', 'category_sku_id', 'prices', 'bundled_products', 'variants']);
        return new v(
            _(f({}, super.fromServer(c)), {
                type: t,
                premiumType: n === u.WND ? null : n,
                categorySkuId: r,
                prices: (0, s.l)(i),
                items: E(c.items),
                bundledProducts: null == o ? void 0 : o.map(a.Z.fromServer),
                variants: null == l ? void 0 : l.map(b.fromServer),
                googleSkuIds: c.google_sku_ids
            })
        );
    }
    constructor(e) {
        super(e), d(this, 'prices', void 0), d(this, 'type', void 0), d(this, 'premiumType', void 0), d(this, 'items', void 0), d(this, 'categorySkuId', void 0), d(this, 'bundledProducts', void 0), d(this, 'variants', void 0), d(this, 'variantGroupStoreListingId', void 0), d(this, 'googleSkuIds', void 0), (this.summary = e.summary), (this.type = e.type), (this.premiumType = e.premiumType), (this.items = e.items), (this.categorySkuId = e.categorySkuId), (this.prices = e.prices), (this.bundledProducts = e.bundledProducts), (this.googleSkuIds = e.googleSkuIds), (this.variants = e.variants);
    }
}
class b extends v {
    static fromServer(e) {
        var { base_variant_name: t, base_variant_sku_id: n, variant_label: r, variant_value: i } = e,
            o = h(e, ['base_variant_name', 'base_variant_sku_id', 'variant_label', 'variant_value']);
        return new b(
            _(f({}, super.fromServer(o)), {
                baseVariantName: t,
                baseVariantSkuId: n,
                variantLabel: r,
                variantValue: i
            })
        );
    }
    constructor(e) {
        super(e), d(this, 'baseVariantName', void 0), d(this, 'baseVariantSkuId', void 0), d(this, 'variantLabel', void 0), d(this, 'variantValue', void 0), (this.baseVariantName = e.baseVariantName), (this.baseVariantSkuId = e.baseVariantSkuId), (this.variantLabel = e.variantLabel), (this.variantValue = e.variantValue);
    }
}
