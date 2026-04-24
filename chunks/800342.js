"use strict";
n.d(t, { JI: () => o, QB: () => c });
var i = n(228366);
n(587895);
var r = n(977445),
    a = n(67480);
n(328968);
var s = n(371794),
    l = n(652215);
function o(e) {
    return (0, s.aP)({
        url: l.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
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
function c(e) {
    let t = a.A.get(e),
        n = null != t && (0, r.F)(t.applicationId);
    return (
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, s.aP)({ url: n ? l.Rsh.STORE_LISTINGS_SKU(e) : l.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
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
