"use strict";
n.d(t, { Ay: () => h, Bf: () => m, Mv: () => d, Wg: () => c, b5: () => u });
var l = n(64700),
    i = n(702841),
    s = n(736056),
    a = n(693477),
    r = n(4227),
    o = n(315949);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([s.A], () => s.A.hasLoadedExperiments),
        [n, o, c, u, d, h] = (0, i.yK)([r.A], () => [
            r.A.isFetching,
            r.A.isClaiming,
            r.A.fetchError,
            r.A.claimError,
            r.A.purchases,
            r.A.hasPreviouslyFetched,
        ]),
        m = (0, l.useRef)(r.A.hasPreviouslyFetched);
    (0, l.useEffect)(() => {
        m.current = h;
    }, [h]);
    let p = (0, l.useRef)(r.A.fetchError);
    (0, l.useEffect)(() => {
        p.current = c;
    }, [c]);
    let f = (0, l.useRef)(r.A.isFetching);
    return (
        (0, l.useEffect)(() => {
            f.current = n;
        }, [n]),
        (0, l.useEffect)(() => {
            !t || f.current || (!0 === e && m.current && null == p.current) || (0, a.gB)();
        }, [e, t]),
        { isClaiming: o, fetchPurchasesError: c, claimError: u, isFetching: n, purchases: d, hasPreviouslyFetched: h }
    );
}
let u = () => c(!0),
    d = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = c(t);
        return null != e ? n.get(e) : void 0;
    };
function h(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: l,
            categories: i,
            fetchCategoriesError: s,
            refreshCategories: a,
        } = (0, o.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: r,
            fetchPurchasesError: u,
            claimError: d,
            isFetching: h,
            purchases: m,
            hasPreviouslyFetched: p,
        } = c(e?.stalePurchasesOK);
    return {
        isFetching: l || h,
        isFetchingCategories: l,
        isFetchingPurchases: h,
        isClaiming: r,
        categories: i,
        purchases: m,
        fetchCategoriesError: s,
        fetchPurchasesError: u,
        claimError: d,
        refreshCategories: a,
        hasPreviouslyFetched: p,
    };
}
let m = (e) => h({ ...(e ?? {}), stalePurchasesOK: !0 });
