l.d(t, { Ay: () => m, Bf: () => A, Mv: () => d, Wg: () => c, b5: () => u });
var r = l(64700),
    a = l(702841),
    s = l(736056),
    n = l(29292),
    i = l(4227),
    o = l(315949);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
        [l, o, c, u, d, m] = (0, a.yK)([i.A], () => [
            i.A.isFetching,
            i.A.isClaiming,
            i.A.fetchError,
            i.A.claimError,
            i.A.purchases,
            i.A.hasPreviouslyFetched,
        ]),
        A = (0, r.useRef)(i.A.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        A.current = m;
    }, [m]);
    let p = (0, r.useRef)(i.A.fetchError);
    (0, r.useEffect)(() => {
        p.current = c;
    }, [c]);
    let h = (0, r.useRef)(i.A.isFetching);
    return (
        (0, r.useEffect)(() => {
            h.current = l;
        }, [l]),
        (0, r.useEffect)(() => {
            !t || h.current || (!0 === e && A.current && null == p.current) || (0, n.gB)();
        }, [e, t]),
        { isClaiming: o, fetchPurchasesError: c, claimError: u, isFetching: l, purchases: d, hasPreviouslyFetched: m }
    );
}
let u = () => c(!0),
    d = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: l } = c(t);
        return null != e ? l.get(e) : void 0;
    };
function m(e, t) {
    let l = e?.paymentGateway,
        {
            isFetching: r,
            categories: a,
            fetchCategoriesError: s,
            refreshCategories: n,
        } = (0, o.A)({ paymentGateway: l, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: i,
            fetchPurchasesError: u,
            claimError: d,
            isFetching: m,
            purchases: A,
            hasPreviouslyFetched: p,
        } = c(e?.stalePurchasesOK);
    return {
        isFetching: r || m,
        isFetchingCategories: r,
        isFetchingPurchases: m,
        isClaiming: i,
        categories: a,
        purchases: A,
        fetchCategoriesError: s,
        fetchPurchasesError: u,
        claimError: d,
        refreshCategories: n,
        hasPreviouslyFetched: p,
    };
}
let A = (e) => m({ ...(e ?? {}), stalePurchasesOK: !0 });
