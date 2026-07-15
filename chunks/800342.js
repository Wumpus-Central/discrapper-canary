"use strict";
n.d(t, { JI: () => d, QB: () => c });
var i = n(636537),
    r = n(228366);
n(587895);
var a = n(977445),
    s = n(67480);
n(328968);
var l = n(371794),
    o = n(652215);
function d(e) {
    return (0, l.aP)({
        url: o.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: e },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
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
function c(e) {
    let t = s.A.get(e),
        n = null != t && (0, a.Fs)(t.applicationId);
    return (
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, l.aP)({
            url: n ? o.Rsh.STORE_LISTINGS_SKU(e) : o.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e),
            rejectWithError: (0, i.fT)(),
        })
            .then((e) => {
                n
                    ? r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.body })
                    : r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
            })
            .catch(() => {
                r.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e });
            })
    );
}
