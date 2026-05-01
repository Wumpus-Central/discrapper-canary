"use strict";
n.d(t, { Ay: () => c, C3: () => _, Lh: () => d, y9: () => f });
var i = n(315069),
    r = n(395671),
    s = n(520606),
    a = n(872472),
    o = n(394300),
    l = n(721932),
    u = n(652215);
class c extends i.A {
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
        let { user_id: t, wishlist_items: n, ...i } = e,
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
            ...i,
            userId: t,
            items: d,
            applications: i.applications?.map((e) => r.Ay.createFromServer(e)) ?? void 0,
        });
    }
}
function d(e) {
    return e.items.map((e) => e.skuId);
}
function _(e, t) {
    return e.items.some((e) => e.skuId === t);
}
function f(e) {
    return new Set(e.items.map((e) => e.skuProductLine));
}
