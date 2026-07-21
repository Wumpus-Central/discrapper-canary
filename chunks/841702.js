"use strict";
n.d(t, { Ay: () => _, Bf: () => E, Mv: () => u, Wg: () => d, b5: () => c });
var i = n(64700),
    r = n(702841),
    a = n(736056),
    s = n(34332),
    l = n(4227),
    o = n(579151);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, r.bG)([a.A], () => a.A.hasLoadedExperiments),
        [n, o, d, c, u, _] = (0, r.yK)([l.A], () => [
            l.A.isFetching,
            l.A.isClaiming,
            l.A.fetchError,
            l.A.claimError,
            l.A.purchases,
            l.A.hasPreviouslyFetched,
        ]),
        E = (0, i.useRef)(l.A.hasPreviouslyFetched);
    (0, i.useEffect)(() => {
        E.current = _;
    }, [_]);
    let A = (0, i.useRef)(l.A.fetchError);
    (0, i.useEffect)(() => {
        A.current = d;
    }, [d]);
    let h = (0, i.useRef)(l.A.isFetching);
    return (
        (0, i.useEffect)(() => {
            h.current = n;
        }, [n]),
        (0, i.useEffect)(() => {
            !t || h.current || (!0 === e && E.current && null == A.current) || (0, s.gB)();
        }, [e, t]),
        { isClaiming: o, fetchPurchasesError: d, claimError: c, isFetching: n, purchases: u, hasPreviouslyFetched: _ }
    );
}
function c() {
    return d(!0);
}
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { purchases: n } = d(t);
    return null != e ? n.get(e) : void 0;
}
function _(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: i,
            categories: r,
            fetchCategoriesError: a,
            refreshCategories: s,
        } = (0, o.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: l,
            fetchPurchasesError: c,
            claimError: u,
            isFetching: _,
            purchases: E,
            hasPreviouslyFetched: A,
        } = d(e?.stalePurchasesOK);
    return {
        isFetching: i || _,
        isFetchingCategories: i,
        isFetchingPurchases: _,
        isClaiming: l,
        categories: r,
        purchases: E,
        fetchCategoriesError: a,
        fetchPurchasesError: c,
        claimError: u,
        refreshCategories: s,
        hasPreviouslyFetched: A,
    };
}
function E(e) {
    return _({ ...(e ?? {}), stalePurchasesOK: !0 });
}
