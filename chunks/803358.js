n.d(t, { Z: () => u });
var i = n(979590),
    r = n.n(i),
    a = n(866442),
    s = n(81825);
function o(e, t, n) {
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
let l = (e) =>
    null == e
        ? e
        : {
              backgroundColors: e.background_colors.map((e) => r()((0, a.Rf)(e))),
              buttonColors: e.button_colors.map((e) => r()((0, a.Rf)(e))),
              confettiColors: e.confetti_colors.map((e) => r()((0, a.Rf)(e)))
          };
class u extends s.Z {
    static fromServer(e) {
        let { store_listing_id: t, sku_id: n, unpublished_at: i, banner_asset: r, styles: a, ...s } = e,
            o = null != i ? new Date(i) : null;
        return new u({
            ...s,
            storeListingId: t,
            skuId: n,
            unpublishedAt: o,
            bannerAsset: r,
            styles: l(a)
        });
    }
    constructor(e) {
        super(), o(this, 'storeListingId', void 0), o(this, 'skuId', void 0), o(this, 'name', void 0), o(this, 'summary', void 0), o(this, 'banner', void 0), o(this, 'bannerAsset', void 0), o(this, 'unpublishedAt', void 0), o(this, 'styles', void 0), (this.storeListingId = e.storeListingId), (this.skuId = e.skuId), (this.name = e.name), (this.summary = e.summary), (this.banner = e.banner), (this.unpublishedAt = e.unpublishedAt), (this.styles = e.styles), (this.bannerAsset = e.bannerAsset);
    }
}
