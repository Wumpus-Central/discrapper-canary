s.d(e, { Ay: () => d, C3: () => S, Lh: () => c, y9: () => h });
var r = s(315069),
    i = s(395671),
    n = s(520606),
    l = s(872472),
    a = s(394300),
    o = s(721932),
    u = s(652215);
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
        let { user_id: e, wishlist_items: s, ...r } = t,
            c = s.map((t) => {
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
            applications: r.applications?.map((t) => i.Ay.createFromServer(t)) ?? void 0,
        });
    }
}
function c(t) {
    return t.items.map((t) => t.skuId);
}
function S(t, e) {
    return t.items.some((t) => t.skuId === e);
}
function h(t) {
    return new Set(t.items.map((t) => t.skuProductLine));
}
