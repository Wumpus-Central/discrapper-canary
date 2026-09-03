r.d(t, { A: () => s }), r(321073);
var l = r(17928),
    o = r(228366);
let u = {},
    n = {};
class c extends l.Ay.Store {
    static displayName = "StorefrontProductStore";
    getFetchState(e) {
        return null != e ? u[e]?.state : void 0;
    }
    getFetchStateForSku(e) {
        return null != e ? n[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? u[e]?.fetchedAt : void 0;
    }
    getFetchedAtForSku(e) {
        return null != e ? n[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? u[e]?.fetchError : void 0;
    }
    getFetchErrorForSku(e) {
        return null != e ? n[e]?.fetchError : void 0;
    }
    getProduct(e) {
        let t = null != e ? u[e] : null;
        return null == t || t?.state === "error" || null == t.product ? null : t.product;
    }
    getProductsForSku(e) {
        return null != e ? n[e]?.products : void 0;
    }
}
let s = new c(o.h, {
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function (e) {
        let { productIds: t } = e;
        t.forEach((e) => {
            u[e] = { state: "loading", product: u[e]?.product };
        });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function (e) {
        let { productIds: t, products: r } = e,
            l = Date.now(),
            o = new Set();
        r.forEach((e) => {
            o.add(e.id), (u[e.id] = { state: "success", product: e, fetchedAt: l });
        }),
            t.forEach((e) => {
                o.has(e) || delete u[e];
            });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function (e) {
        let { productIds: t, apiError: r } = e,
            l = Date.now();
        t.forEach((e) => {
            u[e] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function (e) {
        let { skuIds: t } = e;
        t.forEach((e) => {
            n[e] = { state: "loading", products: n[e]?.products };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function (e) {
        let { skuIds: t, products: r } = e,
            l = Date.now(),
            o = r.reduce(
                (e, t) => (
                    t.skuIds.forEach((r) => {
                        null == e[r] ? (e[r] = [t]) : e[r].push(t);
                    }),
                    e
                ),
                {},
            );
        t.forEach((e) => {
            null == o[e] ? delete n[e] : (n[e] = { state: "success", products: o[e], fetchedAt: l });
        }),
            r.forEach((e) => {
                u[e.id] = { state: "success", product: e, fetchedAt: l };
            });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function (e) {
        let { skuIds: t, apiError: r } = e,
            l = Date.now();
        t.forEach((e) => {
            n[e] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { collections: t } = e,
            r = Date.now();
        t.forEach((e) => {
            e.products.forEach((e) => {
                u[e.id] = { state: "success", product: e, fetchedAt: r };
            });
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (e) {
        let { collections: t } = e,
            r = Date.now();
        t.forEach((e) => {
            e.products.forEach((e) => {
                u[e.id] = { state: "success", product: e, fetchedAt: r };
            });
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function (e) {
        let { collections: t } = e,
            r = Date.now();
        t.forEach((e) => {
            e.products.forEach((e) => {
                (u[e.id] = { state: "success", product: e, fetchedAt: r }),
                    e.skuIds.forEach((t) => {
                        n[t] = { state: "success", products: [e], fetchedAt: r };
                    });
            });
        });
    },
    LOGOUT: function (e) {
        (u = {}), (n = {});
    },
});
