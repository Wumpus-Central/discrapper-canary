n.d(t, { JI: () => o, QB: () => d });
var i = n(73153);
n(587895);
var l = n(977445),
    a = n(67480);
n(328968);
var s = n(371794),
    r = n(652215);
function o(e) {
    return (0, s.aP)({
        url: r.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => (
            i.h.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body.map((e) => ({ ...e, published: !0 })),
            }),
            e.body
        ),
    );
}
function d(e) {
    let t = a.A.get(e),
        n = null != t && (0, l.F)(t.applicationId);
    return (
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, s.aP)({ url: n ? r.Rsh.STORE_LISTINGS_SKU(e) : r.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
            .then((e) => {
                n
                    ? i.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.body })
                    : i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
            })
            .catch(() => {
                i.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e });
            })
    );
}
