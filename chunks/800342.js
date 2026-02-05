"use strict";
n.d(t, { JI: () => d, QB: () => _, S5: () => g, VD: () => h, W6: () => f, b: () => p, bf: () => m, ct: () => E });
var r = n(562465),
    i = n(73153),
    a = n(10716);
n(587895);
var s = n(976860),
    o = n(67480);
n(328968);
var l = n(147964),
    u = n(371794),
    c = n(652215);
function d(e) {
    let t = { application_id: e };
    return (0, u.aP)({
        url: c.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: t,
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
function _(e) {
    let t = o.A.get(e),
        n =
            null != t &&
            (l.A.inTestModeForApplication(t.applicationId) || a.A.inDevModeForApplication(t.applicationId));
    return (
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
        (0, u.aP)({ url: n ? c.Rsh.STORE_LISTINGS_SKU(e) : c.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 })
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
function f(e) {
    return (0, u.aP)({ url: c.Rsh.STORE_LISTING(e), rejectWithError: !1 }).then((e) => {
        i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
    });
}
function p(e) {
    return (0, u.aP)({ url: c.Rsh.STORE_PUBLISHED_LISTINGS_APPLICATION(e), rejectWithError: !1 }).then((e) => {
        i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
    });
}
function h() {
    i.h.dispatch({ type: "APPLICATION_STORE_MATURE_AGREE" });
}
function m() {
    (0, s.pX)(c.BVt.APPLICATION_STORE);
}
function g(e) {
    return r.Bo.post({ url: c.Rsh.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e), oldFormErrors: !0, rejectWithError: !1 });
}
function E(e, t) {
    let { pathname: n, ...r } = (0, u.vy)(e, t);
    (0, s.pX)(n, r);
}
