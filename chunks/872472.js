n.d(t, {
    A: () => f,
    L: () => d,
}),
    n(321073),
    n(896048),
    n(65821);
var r = n(575593),
    i = n(898461),
    a = n(837015),
    s = n(203632),
    o = n(520606),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = (e) => {
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
    d = (e) => e instanceof f;
class f extends o.A {
    static fromServer(e) {
        return new f(e);
    }
    constructor(e) {
        if (
            (super(e),
            c(this, "collectiblesItem", void 0),
            c(this, "bundleItems", void 0),
            (this.skuProductLine = l.EZt.COLLECTIBLES),
            null != e.bundle_items)
        ) {
            const t = [];
            for (const n of e.bundle_items) {
                const e = u(n);
                null != e && t.push(e);
            }
            if (0 === t.length) throw Error("Bundle has no valid items");
            this.bundleItems = t;
        } else if (null != e.collectibles_item) {
            const t = u(e.collectibles_item);
            if (null == t) throw Error("Collectibles item not found");
            this.collectiblesItem = t;
        } else throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
}
