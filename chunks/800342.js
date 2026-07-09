i.d(t, { JI: () => a, QB: () => o });
var l = i(228366);
i(587895);
var r = i(977445),
    n = i(67480);
i(328968);
var s = i(371794),
    u = i(652215);
function a(e) {
    return (0, s.aP)({
        url: u.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => (
            l.h.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body.map((e) => ({ ...e, published: !0 })),
            }),
            e.body
        ),
    );
}
function o(e) {
    let t = n.A.get(e),
        i = null != t && (0, r.Fs)(t.applicationId);
    return (
        l.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, s.aP)({ url: i ? u.Rsh.STORE_LISTINGS_SKU(e) : u.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
            .then((e) => {
                i
                    ? l.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.body })
                    : l.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
            })
            .catch(() => {
                l.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e });
            })
    );
}
