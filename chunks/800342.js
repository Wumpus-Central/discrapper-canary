"use strict";
n.d(t, { JI: () => l, QB: () => u });
var i = n(228366);
n(587895);
var r = n(977445),
    s = n(67480);
n(328968);
var a = n(371794),
    o = n(652215);
function l(e) {
    return (0, a.aP)({
        url: o.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
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
function u(e) {
    let t = s.A.get(e),
        n = null != t && (0, r.F)(t.applicationId);
    return (
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, a.aP)({ url: n ? o.Rsh.STORE_LISTINGS_SKU(e) : o.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
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
