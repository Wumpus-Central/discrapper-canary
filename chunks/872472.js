n.d(t, {
    A: () => m,
    L: () => h,
}),
    n(321073),
    n(896048),
    n(65821);
var r = n(575593),
    i = n(898461),
    a = n(837015),
    s = n(203632),
    o = n(731935),
    l = n(520606),
    c = n(652215);

function u(e, t, n) {
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

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = (e) => {
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
    h = (e) => e instanceof m;
class m extends l.A {
    static fromServer(e) {
        return new m(
            p(d({}, e), {
                sku: null != e.sku ? o.A.createFromServer(e.sku) : void 0,
            }),
        );
    }
    constructor(e) {
        if (
            (super(e),
            u(this, "collectiblesItem", void 0),
            u(this, "bundleItems", void 0),
            (this.skuProductLine = c.EZt.COLLECTIBLES),
            null != e.bundle_items)
        ) {
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
        } else throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
}
