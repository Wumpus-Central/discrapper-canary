"use strict";
n.d(t, { A: () => l });
var r = n(440745),
    i = n.n(r),
    s = n(317097),
    a = n(315069);
let o = (e) =>
    null == e
        ? e
        : {
              backgroundColors: e.background_colors.map((e) => i()((0, s.Hl)(e))),
              buttonColors: e.button_colors.map((e) => i()((0, s.Hl)(e))),
              confettiColors: e.confetti_colors.map((e) => i()((0, s.Hl)(e))),
          };
class l extends a.A {
    storeListingId;
    skuId;
    name;
    summary;
    styles;
    constructor(e) {
        super(),
            (this.storeListingId = e.storeListingId),
            (this.skuId = e.skuId),
            (this.name = e.name),
            (this.summary = e.summary?.trim()),
            (this.styles = e.styles);
    }
    static fromServer(e) {
        let { store_listing_id: t, sku_id: n, styles: r, ...i } = e;
        return new l({ ...i, storeListingId: t, skuId: n, styles: o(r) });
    }
}
