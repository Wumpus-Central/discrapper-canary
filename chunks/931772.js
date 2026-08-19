"use strict";
n.d(t, { A: () => l });
var i = n(440745),
    r = n.n(i),
    a = n(317097),
    s = n(315069);
class l extends s.A {
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
        let { store_listing_id: t, sku_id: n, styles: i, ...s } = e;
        return new l({
            ...s,
            storeListingId: t,
            skuId: n,
            styles:
                null == i
                    ? i
                    : {
                          backgroundColors: i.background_colors.map((e) => r()((0, a.Hl)(e))),
                          buttonColors: i.button_colors.map((e) => r()((0, a.Hl)(e))),
                          confettiColors: i.confetti_colors.map((e) => r()((0, a.Hl)(e))),
                      },
        });
    }
}
