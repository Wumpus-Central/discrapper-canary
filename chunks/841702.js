"use strict";
n.d(t, { Ay: () => f, Bf: () => p, Mv: () => _, Wg: () => d });
var r = n(64700),
    i = n(635358),
    a = n(417597),
    s = n(49463),
    o = n(979286),
    l = n(4227),
    u = n(233525),
    c = n(315949);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (0, u.n)("useFetchPurchases");
    let t = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
        n = i.g.VARIANTS_GROUP,
        [c, d, _, f, p, h] = (0, a.yK)([l.A], () => [
            l.A.isFetching,
            l.A.isClaiming,
            l.A.fetchError,
            l.A.claimError,
            l.A.purchases,
            l.A.hasPreviouslyFetched,
        ]),
        m = (0, r.useRef)(l.A.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        m.current = h;
    }, [h]);
    let g = (0, r.useRef)(l.A.fetchError);
    (0, r.useEffect)(() => {
        g.current = _;
    }, [_]);
    let E = (0, r.useRef)(l.A.isFetching);
    return (
        (0, r.useEffect)(() => {
            E.current = c;
        }, [c]),
        (0, r.useEffect)(() => {
            !t || E.current || (!0 === e && m.current && null == g.current) || (0, o.gB)({ variantsReturnStyle: n });
        }, [e, n, t]),
        { isClaiming: d, fetchPurchasesError: _, claimError: f, isFetching: c, purchases: p, hasPreviouslyFetched: h }
    );
}
n(259248);
let _ = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { purchases: n } = d(t);
    return null != e ? n.get(e) : void 0;
};
function f(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: a,
            refreshCategories: s,
        } = (0, c.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: o,
            fetchPurchasesError: l,
            claimError: u,
            isFetching: _,
            purchases: f,
            hasPreviouslyFetched: p,
        } = d(e?.stalePurchasesOK);
    return {
        isFetching: r || _,
        isFetchingCategories: r,
        isFetchingPurchases: _,
        isClaiming: o,
        categories: i,
        purchases: f,
        fetchCategoriesError: a,
        fetchPurchasesError: l,
        claimError: u,
        refreshCategories: s,
        hasPreviouslyFetched: p,
    };
}
let p = (e) => f({ ...(e ?? {}), stalePurchasesOK: !0 });
