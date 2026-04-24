s.d(e, { A: () => h }), s(321073);
var r = s(575593),
    i = s(898461),
    n = s(474012),
    l = s(837015),
    a = s(203632),
    o = s(892118),
    u = s(32731),
    d = s(520606),
    c = s(652215);
let S = (t) => {
    switch (t.type) {
        case r.R.AVATAR_DECORATION:
            return i.A.fromServer(t);
        case r.R.PROFILE_EFFECT:
            return a.Ay.fromServer(t);
        case r.R.NAMEPLATE:
            return l.A.fromServer(t);
        case r.R.PROFILE_FRAME:
            return o.A.fromServer(t);
        default:
            return null;
    }
};
class h extends d.A {
    collectiblesItem;
    bundleItems;
    constructor(t) {
        if ((super(t), (this.skuProductLine = c.EZt.COLLECTIBLES), null != t.bundle_items)) {
            const e = [];
            for (const s of t.bundle_items) {
                const t = S(s);
                null != t && e.push(t);
            }
            if (0 === e.length) throw Error("Bundle has no valid items");
            this.bundleItems = e;
        } else if (null != t.collectibles_item) {
            const e = S(t.collectibles_item);
            if (null == e) throw Error("Collectibles item not found");
            this.collectiblesItem = e;
        } else if (!t.skipValidation)
            throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
    static fromServer(t) {
        return new h({ ...t, sku: null != t.sku ? u.A.createFromServer(t.sku) : void 0 });
    }
    static fromSKU(t) {
        let e = (0, n.T)(t);
        if (null == e) return null;
        let s = new h({
            sku_id: t.id,
            sku_product_line: c.EZt.COLLECTIBLES,
            sku_name: t.name,
            sku: t,
            skipValidation: !0,
        });
        return (
            (s.collectiblesItem = "single" === e.type ? e.item : void 0),
            (s.bundleItems = "bundle" === e.type ? e.items : void 0),
            s
        );
    }
}
