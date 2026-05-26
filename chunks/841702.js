"use strict";
n.d(t, { Ay: () => _, Bf: () => f, Mv: () => d, Wg: () => u, b5: () => c });
var i = n(64700),
    r = n(702841),
    s = n(736056),
    a = n(859040),
    o = n(4227),
    l = n(315949);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, r.bG)([s.A], () => s.A.hasLoadedExperiments),
        [n, l, u, c, d, _] = (0, r.yK)([o.A], () => [
            o.A.isFetching,
            o.A.isClaiming,
            o.A.fetchError,
            o.A.claimError,
            o.A.purchases,
            o.A.hasPreviouslyFetched,
        ]),
        f = (0, i.useRef)(o.A.hasPreviouslyFetched);
    (0, i.useEffect)(() => {
        f.current = _;
    }, [_]);
    let h = (0, i.useRef)(o.A.fetchError);
    (0, i.useEffect)(() => {
        h.current = u;
    }, [u]);
    let p = (0, i.useRef)(o.A.isFetching);
    return (
        (0, i.useEffect)(() => {
            p.current = n;
        }, [n]),
        (0, i.useEffect)(() => {
            !t || p.current || (!0 === e && f.current && null == h.current) || (0, a.gB)();
        }, [e, t]),
        { isClaiming: l, fetchPurchasesError: u, claimError: c, isFetching: n, purchases: d, hasPreviouslyFetched: _ }
    );
}
let c = () => u(!0),
    d = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = u(t);
        return null != e ? n.get(e) : void 0;
    };
function _(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: i,
            categories: r,
            fetchCategoriesError: s,
            refreshCategories: a,
        } = (0, l.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: o,
            fetchPurchasesError: c,
            claimError: d,
            isFetching: _,
            purchases: f,
            hasPreviouslyFetched: h,
        } = u(e?.stalePurchasesOK);
    return {
        isFetching: i || _,
        isFetchingCategories: i,
        isFetchingPurchases: _,
        isClaiming: o,
        categories: r,
        purchases: f,
        fetchCategoriesError: s,
        fetchPurchasesError: c,
        claimError: d,
        refreshCategories: a,
        hasPreviouslyFetched: h,
    };
}
let f = (e) => _({ ...(e ?? {}), stalePurchasesOK: !0 });
