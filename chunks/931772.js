"use strict";
n.d(t, { A: () => l });
var r = n(440745),
    i = n.n(r),
    a = n(317097),
    s = n(315069);
let o = (e) =>
    null == e
        ? e
        : {
              backgroundColors: e.background_colors.map((e) => i()((0, a.Hl)(e))),
              buttonColors: e.button_colors.map((e) => i()((0, a.Hl)(e))),
              confettiColors: e.confetti_colors.map((e) => i()((0, a.Hl)(e))),
          };
class l extends s.A {
    storeListingId;
    skuId;
    name;
    summary;
    unpublishedAt;
    styles;
    constructor(e) {
        super(),
            (this.storeListingId = e.storeListingId),
            (this.skuId = e.skuId),
            (this.name = e.name),
            (this.summary = e.summary?.trim()),
            (this.unpublishedAt = e.unpublishedAt),
            (this.styles = e.styles);
    }
    static fromServer(e) {
        let { store_listing_id: t, sku_id: n, unpublished_at: r, styles: i, ...a } = e,
            s = null != r ? new Date(r) : null;
        return new l({ ...a, storeListingId: t, skuId: n, unpublishedAt: s, styles: o(i) });
    }
}
