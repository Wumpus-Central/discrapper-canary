"use strict";
n.d(t, { A: () => f, L: () => _ }), n(321073);
var r = n(575593),
    i = n(898461),
    a = n(474012),
    s = n(837015),
    o = n(203632),
    l = n(731935),
    u = n(520606),
    c = n(652215);
let d = (e) => {
        switch (e.type) {
            case r.R.AVATAR_DECORATION:
                return i.A.fromServer(e);
            case r.R.PROFILE_EFFECT:
                return o.A.fromServer(e);
            case r.R.NAMEPLATE:
                return s.A.fromServer(e);
            default:
                return null;
        }
    },
    _ = (e) => e instanceof f;
class f extends u.A {
    collectiblesItem;
    bundleItems;
    constructor(e) {
        if ((super(e), (this.skuProductLine = c.EZt.COLLECTIBLES), null != e.bundle_items)) {
            const t = [];
            for (const n of e.bundle_items) {
                const e = d(n);
                null != e && t.push(e);
            }
            if (0 === t.length) throw Error("Bundle has no valid items");
            this.bundleItems = t;
        } else if (null != e.collectibles_item) {
            const t = d(e.collectibles_item);
            if (null == t) throw Error("Collectibles item not found");
            this.collectiblesItem = t;
        } else if (!e.skipValidation)
            throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
    static fromServer(e) {
        return new f({ ...e, sku: null != e.sku ? l.A.createFromServer(e.sku) : void 0 });
    }
    static fromSKU(e) {
        let t = (0, a.T)(e);
        if (null == t) return null;
        let n = new f({
            sku_id: e.id,
            sku_product_line: c.EZt.COLLECTIBLES,
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
