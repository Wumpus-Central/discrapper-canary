r.d(e, { Ay: () => d, C3: () => S, Lh: () => c, y9: () => A });
var i = r(315069),
    n = r(395671),
    l = r(520606),
    s = r(872472),
    u = r(394300),
    a = r(721932),
    o = r(652215);
class d extends i.A {
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
            c = r.map((t) => {
                switch (t.sku_product_line) {
                    case o.EZt.COLLECTIBLES:
                        return s.A.fromServer(t);
                    case o.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return a.A.fromServer(t);
                    case o.EZt.PREMIUM:
                        return u.A.fromServer(t);
                    default:
                        return l.A.fromServer(t);
                }
            });
        return new d({
            ...i,
            userId: e,
            items: c,
            applications: i.applications?.map((t) => n.Ay.createFromServer(t)) ?? void 0,
        });
    }
}
function c(t) {
    return t.items.map((t) => t.skuId);
}
function S(t, e) {
    return t.items.some((t) => t.skuId === e);
}
function A(t) {
    return new Set(t.items.map((t) => t.skuProductLine));
}
