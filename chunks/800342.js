"use strict";
n.d(t, { JI: () => l, QB: () => u });
var r = n(73153);
n(587895);
var i = n(977445),
    s = n(67480);
n(328968);
var a = n(371794),
    o = n(652215);
function l(e) {
    let t = { application_id: e };
    return (0, a.aP)({
        url: o.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: t,
        oldFormErrors: !0,
        rejectWithError: !1,
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
function u(e) {
    let t = s.A.get(e),
        n = null != t && (0, i.F)(t.applicationId);
    return (
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, a.aP)({ url: n ? o.Rsh.STORE_LISTINGS_SKU(e) : o.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
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
