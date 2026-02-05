"use strict";
n.d(t, { A: () => _, L: () => d }), n(321073);
var r = n(575593),
    i = n(898461),
    a = n(837015),
    s = n(203632),
    o = n(731935),
    l = n(520606),
    u = n(652215);
let c = (e) => {
        switch (e.type) {
            case r.R.AVATAR_DECORATION:
                return i.A.fromServer(e);
            case r.R.PROFILE_EFFECT:
                return s.A.fromServer(e);
            case r.R.NAMEPLATE:
                return a.A.fromServer(e);
            default:
                return null;
        }
    },
    d = (e) => e instanceof _;
class _ extends l.A {
    collectiblesItem;
    bundleItems;
    constructor(e) {
        if ((super(e), (this.skuProductLine = u.EZt.COLLECTIBLES), null != e.bundle_items)) {
            const t = [];
            for (const n of e.bundle_items) {
                const e = c(n);
                null != e && t.push(e);
            }
            if (0 === t.length) throw Error("Bundle has no valid items");
            this.bundleItems = t;
        } else if (null != e.collectibles_item) {
            const t = c(e.collectibles_item);
            if (null == t) throw Error("Collectibles item not found");
            this.collectiblesItem = t;
        } else throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
    static fromServer(e) {
        return new _({ ...e, sku: null != e.sku ? o.A.createFromServer(e.sku) : void 0 });
    }
}
