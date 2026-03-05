t.d(l, { M0: () => h, vZ: () => u });
var r = t(574381),
    o = t(73153),
    n = t(198982);
t(384726);
var a = t(371794),
    i = t(124338),
    d = t(631467),
    s = t(507832),
    c = t(652215);
async function u(e) {
    let {
        collectionId: l,
        includeUnpublishedProducts: t = !1,
        includeUnpublishedCollection: s = !1,
        includePricing: u = !1,
        ignoreCache: h = !1,
    } = e;
    if (!l || i.A.isFetching(l)) return;
    let p = i.A.getApiError(l);
    if (p?.status !== 404 && p?.status !== 429)
        try {
            o.h.dispatch({ type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH", collectionId: l });
            let e = await (0, a.aP)({
                url: c.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(l),
                query: {
                    collection_id: l,
                    include_unpublished_products: t,
                    include_unpublished_collection: s,
                    include_pricing: u,
                    ignore_cache: h,
                    include_google_sku_ids: (0, r.m0)(),
                },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS",
                collection: d.A.fromServer(e.body),
            });
        } catch (t) {
            let e = new n.LG(t);
            throw (
                (o.h.dispatch({
                    type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE",
                    collectionId: l,
                    apiError: e,
                }),
                e)
            );
        }
}
async function h(e) {
    let { productId: l, includePricing: t = !1, includeUnpublished: d = !1, ignoreCache: u = !1 } = e;
    if (!l || i.A.isFetching(l)) return;
    let h = i.A.getApiError(l);
    if (h?.status !== 404 && h?.status !== 429)
        try {
            o.h.dispatch({ type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH", productId: l });
            let e = await (0, a.aP)({
                url: c.Rsh.STOREFRONT_PRODUCT_WITH_SKUS(l),
                query: {
                    include_pricing: t,
                    include_unpublished: d,
                    ignore_cache: u,
                    include_google_sku_ids: (0, r.m0)(),
                },
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS", product: s.A.fromServer(e.body) });
        } catch (t) {
            let e = new n.LG(t);
            throw (o.h.dispatch({ type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE", productId: l, apiError: e }), e);
        }
}
