r(321073);
var l = r(855986),
    n = r(73153);
let c = {},
    o = {};
function i(t, e, r) {
    let l = c[t.id];
    if (!r && l?.state === "success" && l.includePricing) {
        c[t.id] = { ...l, fetchedAt: e };
        return;
    }
    c[t.id] = { state: "success", product: t, fetchedAt: e, includePricing: r };
}
function u(t) {}
class s extends l.Ay.Store {
    static displayName = "StorefrontProductStore";
    initialize() {}
    getFetchState(t) {
        return null != t ? c[t]?.state : void 0;
    }
    getFetchStateForSku(t) {
        return null != t ? o[t]?.state : void 0;
    }
    getFetchedAt(t) {
        return null != t ? c[t]?.fetchedAt : void 0;
    }
    getFetchedAtForSku(t) {
        return null != t ? o[t]?.fetchedAt : void 0;
    }
    getFetchError(t) {
        return null != t ? c[t]?.fetchError : void 0;
    }
    getFetchErrorForSku(t) {
        return null != t ? o[t]?.fetchError : void 0;
    }
    getProduct(t) {
        let e = null != t ? c[t] : null;
        return null == e || e?.state === "error" || null == e.product ? null : e.product;
    }
    getPricingKeyForSku(t) {
        let e = null != t ? o[t] : null;
        return e?.state === "success" ? e.pricingKey : void 0;
    }
    getNativeStorefrontCountry() {
        let t;
        return null != t && "" !== t ? t : null;
    }
    getProductsForSku(t) {
        return null != t ? o[t]?.products : void 0;
    }
    hasPricingCoverage(t) {
        return !0 === (null != t && c[t]?.includePricing);
    }
}
let _ = new s(n.h, {
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function (t) {
        let { productIds: e } = t;
        e.forEach((t) => {
            c[t] = { state: "loading", product: c[t]?.product, includePricing: !0 };
        });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function (t) {
        let { productIds: e, products: r } = t,
            l = Date.now(),
            n = new Set();
        (r.forEach((t) => {
            (n.add(t.id), (c[t.id] = { state: "success", product: t, fetchedAt: l, includePricing: !0 }));
        }),
            e.forEach((t) => {
                n.has(t) || delete c[t];
            }));
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function (t) {
        let { productIds: e, apiError: r } = t,
            l = Date.now();
        e.forEach((t) => {
            c[t] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function (t) {
        let { skuIds: e } = t;
        e.forEach((t) => {
            o[t] = { state: "loading", products: o[t]?.products };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function (t) {
        let { skuIds: e, products: r, pricingKey: l = "" } = t,
            n = Date.now(),
            i = r.reduce(
                (t, e) => (
                    e.skuIds.forEach((r) => {
                        null == t[r] ? (t[r] = [e]) : t[r].push(e);
                    }),
                    t
                ),
                {},
            );
        (e.forEach((t) => {
            null == i[t] ? delete o[t] : (o[t] = { state: "success", products: i[t], fetchedAt: n, pricingKey: l });
        }),
            r.forEach((t) => {
                c[t.id] = { state: "success", product: t, fetchedAt: n, includePricing: !0 };
            }));
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function (t) {
        let { skuIds: e, apiError: r } = t,
            l = Date.now();
        e.forEach((t) => {
            o[t] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { collections: e, includePricing: r, pricingKey: l = "" } = t,
            n = Date.now();
        e.forEach((t) => {
            t.products.forEach((t) => {
                (i(t, n, r),
                    r &&
                        t.skuIds.forEach((e) => {
                            o[e] = { state: "success", products: [t], fetchedAt: n, pricingKey: l };
                        }));
            });
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (t) {
        let { collections: e, includePricing: r } = t,
            l = Date.now();
        e.forEach((t) => {
            t.products.forEach((t) => {
                i(t, l, r);
            });
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function (t) {
        let { collections: e, pricingKey: r = "" } = t,
            l = Date.now();
        e.forEach((t) => {
            t.products.forEach((t) => {
                ((c[t.id] = { state: "success", product: t, fetchedAt: l, includePricing: !0 }),
                    t.skuIds.forEach((e) => {
                        o[e] = { state: "success", products: [t], fetchedAt: l, pricingKey: r };
                    }));
            });
        });
    },
    LOGOUT: function (t) {
        ((c = {}), (o = {}));
    },
    GENERIC_IAP_SET_STORE_FRONT: u,
    IAP_LOAD_GENERIC_PRODUCTS: u,
});
r.d(e, {}, { A: _ });
