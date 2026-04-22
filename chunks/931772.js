"use strict";
n.d(t, { A: () => o });
var r = n(440745),
    i = n.n(r),
    s = n(317097),
    a = n(315069);
class o extends a.A {
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
        let { store_listing_id: t, sku_id: n, styles: r, ...a } = e;
        return new o({
            ...a,
            storeListingId: t,
            skuId: n,
            styles:
                null == r
                    ? r
                    : {
                          backgroundColors: r.background_colors.map((e) => i()((0, s.Hl)(e))),
                          buttonColors: r.button_colors.map((e) => i()((0, s.Hl)(e))),
                          confettiColors: r.confetti_colors.map((e) => i()((0, s.Hl)(e))),
                      },
        });
    }
}
