n.d(t, {
    Z: () => y,
    q: () => v
}),
    n(627341),
    n(653041);
var r = n(278074),
    i = n(979554),
    o = n(922347),
    a = n(587177),
    s = n(311850),
    l = n(803358),
    c = n(135483),
    u = n(212161),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = (e) =>
        (0, r.EQ)(e)
            .with({ type: i.Z.AVATAR_DECORATION }, (e) => o.Z.fromServer(e))
            .with({ type: i.Z.PROFILE_EFFECT }, (e) => u.Z.fromServer(e))
            .with({ type: i.Z.NAMEPLATE }, (e) => c.Z.fromServer(e))
            .otherwise(() => null),
    b = (e) =>
        null != e
            ? e.reduce((e, t) => {
                  let n = E(t);
                  return null != n && e.push(n), e;
              }, [])
            : [];
class y extends l.Z {
    static fromServer(e) {
        var { type: t, premium_type: n, category_sku_id: r, prices: i, bundled_products: o, variants: l } = e,
            c = m(e, ['type', 'premium_type', 'category_sku_id', 'prices', 'bundled_products', 'variants']);
        return new y(
            h(_({}, super.fromServer(c)), {
                type: t,
                premiumType: n === d.WND ? null : n,
                categorySkuId: r,
                prices: (0, s.l)(i),
                items: b(c.items),
                bundledProducts: null == o ? void 0 : o.map(a.Z.fromServer),
                variants: null == l ? void 0 : l.map(v.fromServer),
                googleSkuIds: c.google_sku_ids
            })
        );
    }
    constructor(e) {
        super(e), f(this, 'prices', void 0), f(this, 'type', void 0), f(this, 'premiumType', void 0), f(this, 'items', void 0), f(this, 'categorySkuId', void 0), f(this, 'bundledProducts', void 0), f(this, 'variants', void 0), f(this, 'variantGroupStoreListingId', void 0), f(this, 'googleSkuIds', void 0), (this.summary = e.summary), (this.type = e.type), (this.premiumType = e.premiumType), (this.items = e.items), (this.categorySkuId = e.categorySkuId), (this.prices = e.prices), (this.bundledProducts = e.bundledProducts), (this.googleSkuIds = e.googleSkuIds), (this.variants = e.variants);
    }
}
class v extends y {
    static fromServer(e) {
        var { base_variant_name: t, base_variant_sku_id: n, variant_label: r, variant_value: i } = e,
            o = m(e, ['base_variant_name', 'base_variant_sku_id', 'variant_label', 'variant_value']);
        return new v(
            h(_({}, super.fromServer(o)), {
                baseVariantName: t,
                baseVariantSkuId: n,
                variantLabel: r,
                variantValue: i
            })
        );
    }
    constructor(e) {
        super(e), f(this, 'baseVariantName', void 0), f(this, 'baseVariantSkuId', void 0), f(this, 'variantLabel', void 0), f(this, 'variantValue', void 0), (this.baseVariantName = e.baseVariantName), (this.baseVariantSkuId = e.baseVariantSkuId), (this.variantLabel = e.variantLabel), (this.variantValue = e.variantValue);
    }
}
