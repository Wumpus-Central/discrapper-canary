i.d(e, { Ay: () => d, C3: () => p, Lh: () => c, y9: () => S });
var r = i(315069),
    s = i(395671),
    l = i(520606),
    n = i(872472),
    a = i(394300),
    u = i(721932),
    o = i(652215);
class d extends r.A {
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
        let { user_id: e, wishlist_items: i, ...r } = t,
            c = i.map((t) => {
                switch (t.sku_product_line) {
                    case o.EZt.COLLECTIBLES:
                        return n.A.fromServer(t);
                    case o.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return u.A.fromServer(t);
                    case o.EZt.PREMIUM:
                        return a.A.fromServer(t);
                    default:
                        return l.A.fromServer(t);
                }
            });
        return new d({
            ...r,
            userId: e,
            items: c,
            applications: r.applications?.map((t) => s.Ay.createFromServer(t)) ?? void 0,
        });
    }
}
function c(t) {
    return t.items.map((t) => t.skuId);
}
function p(t, e) {
    return t.items.some((t) => t.skuId === e);
}
function S(t) {
    return new Set(t.items.map((t) => t.skuProductLine));
}
