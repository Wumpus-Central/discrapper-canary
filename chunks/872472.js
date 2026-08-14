r.d(e, { A: () => I }), r(321073);
var i = r(575593),
    n = r(898461),
    s = r(474012),
    l = r(837015),
    a = r(203632),
    u = r(892118),
    o = r(32731),
    d = r(520606),
    c = r(652215);
function S(t) {
    switch (t.type) {
        case i.R.AVATAR_DECORATION:
            return n.A.fromServer(t);
        case i.R.PROFILE_EFFECT:
            return a.Ay.fromServer(t);
        case i.R.NAMEPLATE:
            return l.A.fromServer(t);
        case i.R.PROFILE_FRAME:
            return u.A.fromServer(t);
        default:
            return null;
    }
}
class I extends d.A {
    collectiblesItem;
    bundleItems;
    constructor(t) {
        if ((super(t), (this.skuProductLine = c.EZt.COLLECTIBLES), null != t.bundle_items)) {
            const e = [];
            for (const r of t.bundle_items) {
                const t = S(r);
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
        return new I({ ...t, sku: null != t.sku ? o.A.createFromServer(t.sku) : void 0 });
    }
    static fromSKU(t) {
        let e = (0, s.T)(t);
        if (null == e) return null;
        let r = new I({
            sku_id: t.id,
            sku_product_line: c.EZt.COLLECTIBLES,
            sku_name: t.name,
            sku: t,
            skipValidation: !0,
        });
        return (
            (r.collectiblesItem = "single" === e.type ? e.item : void 0),
            (r.bundleItems = "bundle" === e.type ? e.items : void 0),
            r
        );
    }
}
