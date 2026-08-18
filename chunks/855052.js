"use strict";
n.d(t, { Ay: () => c, C3: () => h, Lh: () => d, y9: () => m });
var l = n(315069),
    i = n(395671),
    s = n(520606),
    r = n(872472),
    a = n(394300),
    o = n(721932),
    u = n(652215);
class c extends l.A {
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
        let { user_id: t, wishlist_items: n, ...l } = e,
            d = n.map((e) => {
                switch (e.sku_product_line) {
                    case u.EZt.COLLECTIBLES:
                        return r.A.fromServer(e);
                    case u.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return o.A.fromServer(e);
                    case u.EZt.PREMIUM:
                        return a.A.fromServer(e);
                    default:
                        return s.A.fromServer(e);
                }
            });
        return new c({
            ...l,
            userId: t,
            items: d,
            applications: l.applications?.map((e) => i.Ay.createFromServer(e)) ?? void 0,
        });
    }
}
function d(e) {
    return e.items.map((e) => e.skuId);
}
function h(e, t) {
    return e.items.some((e) => e.skuId === t);
}
function m(e) {
    return new Set(e.items.map((e) => e.skuProductLine));
}
