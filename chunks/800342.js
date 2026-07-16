i.d(t, { JI: () => o, QB: () => d });
var l = i(636537),
    r = i(228366);
i(587895);
var n = i(977445),
    s = i(67480);
i(328968);
var u = i(371794),
    a = i(652215);
function o(e) {
    return (0, u.aP)({
        url: a.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: e },
        oldFormErrors: !0,
        rejectWithError: (0, l.fT)(),
    }).then(
        (e) => (
            r.h.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body.map((e) => ({ ...e, published: !0 })),
            }),
            e.body
        ),
    );
}
function d(e) {
    let t = s.A.get(e),
        i = null != t && (0, n.Fs)(t.applicationId);
    return (
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, u.aP)({
            url: i ? a.Rsh.STORE_LISTINGS_SKU(e) : a.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e),
            rejectWithError: (0, l.fT)(),
        })
            .then((e) => {
                i
                    ? r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.body })
                    : r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
            })
            .catch(() => {
                r.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e });
            })
    );
}
