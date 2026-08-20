r.d(e, { Ay: () => c, C3: () => S, Lh: () => d, y9: () => I });
var i = r(315069),
    n = r(395671),
    s = r(520606),
    l = r(872472),
    a = r(394300),
    u = r(721932),
    o = r(652215);
class c extends i.A {
    id;
    userId;
    items;
    applications;
    constructor(t) {
        super(),
            (this.id = t.id),
            (this.userId = t.userId),
            (this.items = t.items),
            (this.applications = t.applications ?? void 0);
    }
    static fromServer(t) {
        let { user_id: e, wishlist_items: r, ...i } = t,
            d = r.map((t) => {
                switch (t.sku_product_line) {
                    case o.EZt.COLLECTIBLES:
                        return l.A.fromServer(t);
                    case o.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return u.A.fromServer(t);
                    case o.EZt.PREMIUM:
                        return a.A.fromServer(t);
                    default:
                        return s.A.fromServer(t);
                }
            });
        return new c({
            ...i,
            userId: e,
            items: d,
            applications: i.applications?.map((t) => n.Ay.createFromServer(t)) ?? void 0,
        });
    }
}
function d(t) {
    return t.items.map((t) => t.skuId);
}
function S(t, e) {
    return t.items.some((t) => t.skuId === e);
}
function I(t) {
    return new Set(t.items.map((t) => t.skuProductLine));
}
