i.d(e, { Ay: () => d, C3: () => p, Lh: () => c, y9: () => S });
var r = i(315069),
    s = i(611010),
    n = i(520606),
    l = i(872472),
    a = i(394300),
    o = i(721932),
    u = i(652215);
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
                    case u.EZt.COLLECTIBLES:
                        return l.A.fromServer(t);
                    case u.EZt.SOCIAL_LAYER_GAME_ITEM:
                        return o.A.fromServer(t);
                    case u.EZt.PREMIUM:
                        return a.A.fromServer(t);
                    default:
                        return n.A.fromServer(t);
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
