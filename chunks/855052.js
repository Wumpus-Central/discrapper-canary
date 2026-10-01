r.d(e, { Ay: () => d, C3: () => S, Lh: () => c, y9: () => I });
var i = r(315069),
    s = r(395671),
    n = r(520606),
    l = r(872472),
    u = r(394300),
    o = r(721932),
    a = r(652215);
class d extends i.A {
    id;
    userId;
    items;
    applications;
    constructor(t) {
        (super(),
            (this.id = t.id),
            (this.userId = t.userId),
            (this.items = t.items),
            (this.applications = t.applications ?? void 0));
    }
    static fromServer(t) {
        let { user_id: e, wishlist_items: r, ...i } = t,
            c = r.map((t) => {
                switch (t.sku_product_line) {
                    case a.EZt.COLLECTIBLES:
                        return l.A.fromServer(t);
                    case a.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return o.A.fromServer(t);
                    case a.EZt.PREMIUM:
                        return u.A.fromServer(t);
                    default:
                        return n.A.fromServer(t);
                }
            });
        return new d({
            ...i,
            userId: e,
            items: c,
            applications: i.applications?.map((t) => s.Ay.createFromServer(t)) ?? void 0,
        });
    }
}
function c(t) {
    return t.items.map((t) => t.skuId);
}
function S(t, e) {
    return t.items.some((t) => t.skuId === e);
}
function I(t) {
    return new Set(t.items.map((t) => t.skuProductLine));
}
