i.d(e, { A: () => S }), i(321073);
var r = i(575593),
    s = i(898461),
    n = i(474012),
    l = i(837015),
    a = i(203632),
    o = i(892118),
    u = i(260811),
    d = i(520606),
    c = i(652215);
let p = (t) => {
    switch (t.type) {
        case r.R.AVATAR_DECORATION:
            return s.A.fromServer(t);
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
class S extends d.A {
    collectiblesItem;
    bundleItems;
    constructor(t) {
        if ((super(t), (this.skuProductLine = c.EZt.COLLECTIBLES), null != t.bundle_items)) {
            const e = [];
            for (const i of t.bundle_items) {
                const t = p(i);
                null != t && e.push(t);
            }
            if (0 === e.length) throw Error("Bundle has no valid items");
            this.bundleItems = e;
        } else if (null != t.collectibles_item) {
            const e = p(t.collectibles_item);
            if (null == e) throw Error("Collectibles item not found");
            this.collectiblesItem = e;
        } else if (!t.skipValidation)
            throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
    static fromServer(t) {
        return new S({ ...t, sku: null != t.sku ? u.A.createFromServer(t.sku) : void 0 });
    }
    static fromSKU(t) {
        let e = (0, n.T)(t);
        if (null == e) return null;
        let i = new S({
            sku_id: t.id,
            sku_product_line: c.EZt.COLLECTIBLES,
            sku_name: t.name,
            sku: t,
            skipValidation: !0,
        });
        return (
            (i.collectiblesItem = "single" === e.type ? e.item : void 0),
            (i.bundleItems = "bundle" === e.type ? e.items : void 0),
            i
        );
    }
}
