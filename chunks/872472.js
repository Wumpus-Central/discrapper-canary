"use strict";
n.d(t, { A: () => f }), n(321073);
var i = n(575593),
    r = n(898461),
    s = n(474012),
    a = n(837015),
    o = n(203632),
    l = n(892118),
    u = n(32731),
    c = n(520606),
    d = n(652215);
let _ = (e) => {
    switch (e.type) {
        case i.R.AVATAR_DECORATION:
            return r.A.fromServer(e);
        case i.R.PROFILE_EFFECT:
            return o.Ay.fromServer(e);
        case i.R.NAMEPLATE:
            return a.A.fromServer(e);
        case i.R.PROFILE_FRAME:
            return l.A.fromServer(e);
        default:
            return null;
    }
};
class f extends c.A {
    collectiblesItem;
    bundleItems;
    constructor(e) {
        if ((super(e), (this.skuProductLine = d.EZt.COLLECTIBLES), null != e.bundle_items)) {
            const t = [];
            for (const n of e.bundle_items) {
                const e = _(n);
                null != e && t.push(e);
            }
            if (0 === t.length) throw Error("Bundle has no valid items");
            this.bundleItems = t;
        } else if (null != e.collectibles_item) {
            const t = _(e.collectibles_item);
            if (null == t) throw Error("Collectibles item not found");
            this.collectiblesItem = t;
        } else if (!e.skipValidation)
            throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
    static fromServer(e) {
        return new f({ ...e, sku: null != e.sku ? u.A.createFromServer(e.sku) : void 0 });
    }
    static fromSKU(e) {
        let t = (0, s.T)(e);
        if (null == t) return null;
        let n = new f({
            sku_id: e.id,
            sku_product_line: d.EZt.COLLECTIBLES,
            sku_name: e.name,
            sku: e,
            skipValidation: !0,
        });
        return (
            (n.collectiblesItem = "single" === t.type ? t.item : void 0),
            (n.bundleItems = "bundle" === t.type ? t.items : void 0),
            n
        );
    }
}
