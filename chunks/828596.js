t.d(l, { M0: () => p, vZ: () => h });
var r = t(574381),
    o = t(73153),
    n = t(198982);
t(384726);
var a = t(773669),
    i = t(371794),
    d = t(124338),
    s = t(631467),
    c = t(507832),
    u = t(652215);
async function h(e) {
    let {
        collectionId: l,
        includeUnpublishedProducts: t = !1,
        includeUnpublishedCollection: c = !1,
        includePricing: h = !1,
        ignoreCache: p = !1,
    } = e;
    if (!l || d.A.isFetching(l)) return;
    let m = d.A.getApiError(l);
    if (m?.status !== 404 && m?.status !== 429)
        try {
            o.h.dispatch({ type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH", collectionId: l });
            let e = await (0, i.aP)({
                url: u.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(l),
                query: {
                    locale: a.default.locale,
                    collection_id: l,
                    include_unpublished_products: t,
                    include_unpublished_collection: c,
                    include_pricing: h,
                    ignore_cache: p,
                    include_google_sku_ids: (0, r.m0)(),
                },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS",
                collection: s.A.fromServer(e.body),
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
async function p(e) {
    let { productId: l, includePricing: t = !1, includeUnpublished: s = !1, ignoreCache: h = !1 } = e;
    if (!l || d.A.isFetching(l)) return;
    let p = d.A.getApiError(l);
    if (p?.status !== 404 && p?.status !== 429)
        try {
            o.h.dispatch({ type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH", productId: l });
            let e = await (0, i.aP)({
                url: u.Rsh.STOREFRONT_PRODUCT_WITH_SKUS(l),
                query: {
                    locale: a.default.locale,
                    include_pricing: t,
                    include_unpublished: s,
                    ignore_cache: h,
                    include_google_sku_ids: (0, r.m0)(),
                },
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS", product: c.A.fromServer(e.body) });
        } catch (t) {
            let e = new n.LG(t);
            throw (o.h.dispatch({ type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE", productId: l, apiError: e }), e);
        }
}
