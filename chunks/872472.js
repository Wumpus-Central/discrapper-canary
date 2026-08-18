"use strict";
n.d(t, { A: () => m }), n(321073);
var l = n(575593),
    i = n(898461),
    s = n(474012),
    r = n(837015),
    a = n(203632),
    o = n(892118),
    u = n(32731),
    c = n(520606),
    d = n(652215);
function h(e) {
    switch (e.type) {
        case l.R.AVATAR_DECORATION:
            return i.A.fromServer(e);
        case l.R.PROFILE_EFFECT:
            return a.Ay.fromServer(e);
        case l.R.NAMEPLATE:
            return r.A.fromServer(e);
        case l.R.PROFILE_FRAME:
            return o.A.fromServer(e);
        default:
            return null;
    }
}
class m extends c.A {
    collectiblesItem;
    bundleItems;
    constructor(e) {
        if ((super(e), (this.skuProductLine = d.EZt.COLLECTIBLES), null != e.bundle_items)) {
            const t = [];
            for (const n of e.bundle_items) {
                const e = h(n);
                null != e && t.push(e);
            }
            if (0 === t.length) throw Error("Bundle has no valid items");
            this.bundleItems = t;
        } else if (null != e.collectibles_item) {
            const t = h(e.collectibles_item);
            if (null == t) throw Error("Collectibles item not found");
            this.collectiblesItem = t;
        } else if (!e.skipValidation)
            throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
    static fromServer(e) {
        return new m({ ...e, sku: null != e.sku ? u.A.createFromServer(e.sku) : void 0 });
    }
    static fromSKU(e) {
        let t = (0, s.T)(e);
        if (null == t) return null;
        let n = new m({
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
