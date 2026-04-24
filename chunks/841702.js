"use strict";
n.d(t, { Ay: () => c, Bf: () => E, Mv: () => u, Wg: () => d, b5: () => _ });
var i = n(64700),
    r = n(702841),
    s = n(736056),
    a = n(29292),
    o = n(4227),
    l = n(315949);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, r.bG)([s.A], () => s.A.hasLoadedExperiments),
        [n, l, d, _, u, c] = (0, r.yK)([o.A], () => [
            o.A.isFetching,
            o.A.isClaiming,
            o.A.fetchError,
            o.A.claimError,
            o.A.purchases,
            o.A.hasPreviouslyFetched,
        ]),
        E = (0, i.useRef)(o.A.hasPreviouslyFetched);
    (0, i.useEffect)(() => {
        E.current = c;
    }, [c]);
    let h = (0, i.useRef)(o.A.fetchError);
    (0, i.useEffect)(() => {
        h.current = d;
    }, [d]);
    let m = (0, i.useRef)(o.A.isFetching);
    return (
        (0, i.useEffect)(() => {
            m.current = n;
        }, [n]),
        (0, i.useEffect)(() => {
            !t || m.current || (!0 === e && E.current && null == h.current) || (0, a.gB)();
        }, [e, t]),
        { isClaiming: l, fetchPurchasesError: d, claimError: _, isFetching: n, purchases: u, hasPreviouslyFetched: c }
    );
}
let _ = () => d(!0),
    u = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = d(t);
        return null != e ? n.get(e) : void 0;
    };
function c(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: i,
            categories: r,
            fetchCategoriesError: s,
            refreshCategories: a,
        } = (0, l.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: o,
            fetchPurchasesError: _,
            claimError: u,
            isFetching: c,
            purchases: E,
            hasPreviouslyFetched: h,
        } = d(e?.stalePurchasesOK);
    return {
        isFetching: i || c,
        isFetchingCategories: i,
        isFetchingPurchases: c,
        isClaiming: o,
        categories: r,
        purchases: E,
        fetchCategoriesError: s,
        fetchPurchasesError: _,
        claimError: u,
        refreshCategories: a,
        hasPreviouslyFetched: h,
    };
}
let E = (e) => c({ ...(e ?? {}), stalePurchasesOK: !0 });
