n.d(t, { Z: () => p });
var r = n(979590),
    i = n.n(r),
    o = n(866442),
    a = n(81825);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = (e) =>
    null == e
        ? e
        : {
              backgroundColors: e.background_colors.map((e) => i()((0, o.Rf)(e))),
              buttonColors: e.button_colors.map((e) => i()((0, o.Rf)(e))),
              confettiColors: e.confetti_colors.map((e) => i()((0, o.Rf)(e)))
          };
class p extends a.Z {
    static fromServer(e) {
        var { store_listing_id: t, sku_id: n, unpublished_at: r, banner_asset: i, styles: o } = e,
            a = d(e, ['store_listing_id', 'sku_id', 'unpublished_at', 'banner_asset', 'styles']);
        let s = null != r ? new Date(r) : null;
        return new p(
            u(l({}, a), {
                storeListingId: t,
                skuId: n,
                unpublishedAt: s,
                bannerAsset: i,
                styles: _(o)
            })
        );
    }
    constructor(e) {
        super(), s(this, 'storeListingId', void 0), s(this, 'skuId', void 0), s(this, 'name', void 0), s(this, 'summary', void 0), s(this, 'banner', void 0), s(this, 'bannerAsset', void 0), s(this, 'unpublishedAt', void 0), s(this, 'styles', void 0), (this.storeListingId = e.storeListingId), (this.skuId = e.skuId), (this.name = e.name), (this.summary = e.summary), (this.banner = e.banner), (this.unpublishedAt = e.unpublishedAt), (this.styles = e.styles), (this.bannerAsset = e.bannerAsset);
    }
}
