"use strict";
n.d(t, { A: () => I });
var r = n(735438),
    i = n(575593),
    s = n(311907),
    a = n(73153),
    o = n(203632);
let l = {},
    u = (e, t) => !(0, r.isEqual)(l[e], t) && ((l[e] = t), !0),
    c = (e) => {
        let t = !1;
        if (e.type !== i.R.PROFILE_EFFECT && e.type !== i.R.VARIANTS_GROUP) return t;
        let n = [
            ...e.items,
            ...(e.variants?.flatMap((e) => {
                let { items: t } = e;
                return t;
            }) ?? []),
        ].filter(o.C);
        for (let e of (0, r.uniqBy)(n, "skuId")) {
            let n = { skuId: e.skuId, config: e };
            u(e.skuId, n) && (t = !0);
        }
        return t;
    },
    d = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                e.products.forEach((e) => {
                    c(e) && (t = !0);
                });
            }),
            t
        );
    },
    _ = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                c(e) && (t = !0);
            }),
            t
        );
    },
    f = (e) => {
        let { product: t } = e;
        return c(t);
    },
    p = (e) => {
        let { categories: t } = e;
        return d(t.categories);
    },
    h = (e) => {
        let { shopHome: t } = e;
        return d(t.categories);
    },
    m = (e) => {
        let { purchases: t } = e;
        return _(t);
    },
    E = (e) => {
        let { purchases: t } = e;
        return null != t && _(t);
    },
    g = (e) => {
        l = {};
    };
class A extends s.Ay.Store {
    static displayName = "ProfileEffectStore";
    getAllProfileEffects() {
        return Object.values(l);
    }
    getProfileEffect(e) {
        return null != e ? l[e] : void 0;
    }
}
let I = new A(a.h, {
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: f,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: p,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: h,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: m,
    COLLECTIBLES_CLAIM_SUCCESS: E,
    LOGOUT: g,
});
