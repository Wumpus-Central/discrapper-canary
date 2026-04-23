"use strict";
n.d(t, { Ay: () => h, Bf: () => m, Mv: () => d, Wg: () => c, b5: () => u });
var i = n(64700),
    l = n(417597),
    s = n(49463),
    r = n(979286),
    a = n(4227),
    o = n(315949);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([s.A], () => s.A.hasLoadedExperiments),
        [n, o, c, u, d, h] = (0, l.yK)([a.A], () => [
            a.A.isFetching,
            a.A.isClaiming,
            a.A.fetchError,
            a.A.claimError,
            a.A.purchases,
            a.A.hasPreviouslyFetched,
        ]),
        m = (0, i.useRef)(a.A.hasPreviouslyFetched);
    (0, i.useEffect)(() => {
        m.current = h;
    }, [h]);
    let p = (0, i.useRef)(a.A.fetchError);
    (0, i.useEffect)(() => {
        p.current = c;
    }, [c]);
    let f = (0, i.useRef)(a.A.isFetching);
    return (
        (0, i.useEffect)(() => {
            f.current = n;
        }, [n]),
        (0, i.useEffect)(() => {
            !t || f.current || (!0 === e && m.current && null == p.current) || (0, r.gB)();
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
            isFetching: i,
            categories: l,
            fetchCategoriesError: s,
            refreshCategories: r,
        } = (0, o.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: a,
            fetchPurchasesError: u,
            claimError: d,
            isFetching: h,
            purchases: m,
            hasPreviouslyFetched: p,
        } = c(e?.stalePurchasesOK);
    return {
        isFetching: i || h,
        isFetchingCategories: i,
        isFetchingPurchases: h,
        isClaiming: a,
        categories: l,
        purchases: m,
        fetchCategoriesError: s,
        fetchPurchasesError: u,
        claimError: d,
        refreshCategories: r,
        hasPreviouslyFetched: p,
    };
}
let m = (e) => h({ ...(e ?? {}), stalePurchasesOK: !0 });
