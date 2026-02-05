"use strict";
n.d(t, { A: () => u });
var r = n(315069),
    i = n(611010),
    a = n(520606),
    s = n(872472),
    o = n(721932),
    l = n(652215);
class u extends r.A {
    id;
    userId;
    items;
    applications;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.userId = e.userId),
            (this.items = e.items),
            (this.applications = e.applications ?? void 0);
    }
    static fromServer(e) {
        let { user_id: t, wishlist_items: n, ...r } = e,
            c = n.map((e) => {
                switch (e.sku_product_line) {
                    case l.EZt.COLLECTIBLES:
                        return s.A.fromServer(e);
                    case l.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return o.A.fromServer(e);
                    default:
                        return a.A.fromServer(e);
                }
            });
        return new u({
            ...r,
            userId: t,
            items: c,
            applications: r.applications?.map((e) => i.Ay.createFromServer(e)) ?? void 0,
        });
    }
    getSkuIds() {
        return this.items.map((e) => e.skuId);
    }
    hasSkuId(e) {
        return this.items.some((t) => t.skuId === e);
    }
    getProductLines() {
        return new Set(this.items.map((e) => e.skuProductLine));
    }
}
