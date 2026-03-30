"use strict";
n.d(t, { A: () => c });
var r = n(315069),
    i = n(611010),
    s = n(520606),
    a = n(872472),
    o = n(394300),
    l = n(721932),
    u = n(652215);
class c extends r.A {
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
            d = n.map((e) => {
                switch (e.sku_product_line) {
                    case u.EZt.COLLECTIBLES:
                        return a.A.fromServer(e);
                    case u.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return l.A.fromServer(e);
                    case u.EZt.PREMIUM:
                        return o.A.fromServer(e);
                    default:
                        return s.A.fromServer(e);
                }
            });
        return new c({
            ...r,
            userId: t,
            items: d,
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
