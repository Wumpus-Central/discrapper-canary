r.d(e, { A: () => s }), r(321073);
var o = r(17928),
    l = r(228366);
let c = {},
    n = {};
class u extends o.Ay.Store {
    static displayName = "StorefrontProductStore";
    getFetchState(t) {
        return null != t ? c[t]?.state : void 0;
    }
    getFetchStateForSku(t) {
        return null != t ? n[t]?.state : void 0;
    }
    getFetchedAt(t) {
        return null != t ? c[t]?.fetchedAt : void 0;
    }
    getFetchedAtForSku(t) {
        return null != t ? n[t]?.fetchedAt : void 0;
    }
    getFetchError(t) {
        return null != t ? c[t]?.fetchError : void 0;
    }
    getFetchErrorForSku(t) {
        return null != t ? n[t]?.fetchError : void 0;
    }
    getProduct(t) {
        let e = null != t ? c[t] : null;
        return null == e || e?.state === "error" || null == e.product ? null : e.product;
    }
    getProductsForSku(t) {
        return null != t ? n[t]?.products : void 0;
    }
}
let s = new u(l.h, {
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function (t) {
        let { productIds: e } = t;
        e.forEach((t) => {
            c[t] = { state: "loading", product: c[t]?.product };
        });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function (t) {
        let { productIds: e, products: r } = t,
            o = Date.now(),
            l = new Set();
        r.forEach((t) => {
            l.add(t.id), (c[t.id] = { state: "success", product: t, fetchedAt: o });
        }),
            e.forEach((t) => {
                l.has(t) || delete c[t];
            });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function (t) {
        let { productIds: e, apiError: r } = t,
            o = Date.now();
        e.forEach((t) => {
            c[t] = { state: "error", fetchedAt: o, fetchError: r };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function (t) {
        let { skuIds: e } = t;
        e.forEach((t) => {
            n[t] = { state: "loading", products: n[t]?.products };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function (t) {
        let { skuIds: e, products: r } = t,
            o = Date.now(),
            l = r.reduce(
                (t, e) => (
                    e.skuIds.forEach((r) => {
                        null == t[r] ? (t[r] = [e]) : t[r].push(e);
                    }),
                    t
                ),
                {},
            );
        e.forEach((t) => {
            null == l[t] ? delete n[t] : (n[t] = { state: "success", products: l[t], fetchedAt: o });
        }),
            r.forEach((t) => {
                c[t.id] = { state: "success", product: t, fetchedAt: o };
            });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function (t) {
        let { skuIds: e, apiError: r } = t,
            o = Date.now();
        e.forEach((t) => {
            n[t] = { state: "error", fetchedAt: o, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { collections: e } = t,
            r = Date.now();
        e.forEach((t) => {
            t.products.forEach((t) => {
                c[t.id] = { state: "success", product: t, fetchedAt: r };
            });
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (t) {
        let { collections: e } = t,
            r = Date.now();
        e.forEach((t) => {
            t.products.forEach((t) => {
                c[t.id] = { state: "success", product: t, fetchedAt: r };
            });
        });
    },
    LOGOUT: function (t) {
        (c = {}), (n = {});
    },
});
