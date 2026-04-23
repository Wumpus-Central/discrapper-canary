n.d(t, { JI: () => o, QB: () => d });
var s = n(228366);
n(587895);
var i = n(977445),
    l = n(67480);
n(328968);
var r = n(371794),
    a = n(652215);
function o(e) {
    return (0, r.aP)({
        url: a.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => (
            s.h.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body.map((e) => ({ ...e, published: !0 })),
            }),
            e.body
        ),
    );
}
function d(e) {
    let t = l.A.get(e),
        n = null != t && (0, i.F)(t.applicationId);
    return (
        s.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, r.aP)({ url: n ? a.Rsh.STORE_LISTINGS_SKU(e) : a.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
            .then((e) => {
                n
                    ? s.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.body })
                    : s.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
            })
            .catch(() => {
                s.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e });
            })
    );
}
