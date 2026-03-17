"use strict";
n.d(t, { JI: () => u, QB: () => c });
var r = n(73153),
    i = n(10716);
n(587895);
var s = n(67480);
n(328968);
var a = n(147964),
    o = n(371794),
    l = n(652215);
function u(e) {
    let t = { application_id: e };
    return (0, o.aP)({
        url: l.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
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
function c(e) {
    let t = s.A.get(e),
        n =
            null != t &&
            (a.A.inTestModeForApplication(t.applicationId) || i.A.inDevModeForApplication(t.applicationId));
    return (
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, o.aP)({ url: n ? l.Rsh.STORE_LISTINGS_SKU(e) : l.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
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
