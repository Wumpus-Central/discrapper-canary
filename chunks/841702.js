r.d(t, { Ay: () => f, Bf: () => d, Mv: () => a, Wg: () => h, b5: () => l });
var s = r(64700),
    c = r(702841),
    n = r(736056),
    u = r(859040),
    i = r(4227),
    o = r(315949);
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, c.bG)([n.A], () => n.A.hasLoadedExperiments),
        [r, o, h, l, a, f] = (0, c.yK)([i.A], () => [
            i.A.isFetching,
            i.A.isClaiming,
            i.A.fetchError,
            i.A.claimError,
            i.A.purchases,
            i.A.hasPreviouslyFetched,
        ]),
        d = (0, s.useRef)(i.A.hasPreviouslyFetched);
    (0, s.useEffect)(() => {
        d.current = f;
    }, [f]);
    let A = (0, s.useRef)(i.A.fetchError);
    (0, s.useEffect)(() => {
        A.current = h;
    }, [h]);
    let p = (0, s.useRef)(i.A.isFetching);
    return (
        (0, s.useEffect)(() => {
            p.current = r;
        }, [r]),
        (0, s.useEffect)(() => {
            !t || p.current || (!0 === e && d.current && null == A.current) || (0, u.gB)();
        }, [e, t]),
        { isClaiming: o, fetchPurchasesError: h, claimError: l, isFetching: r, purchases: a, hasPreviouslyFetched: f }
    );
}
let l = () => h(!0),
    a = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: r } = h(t);
        return null != e ? r.get(e) : void 0;
    };
function f(e, t) {
    let r = e?.paymentGateway,
        {
            isFetching: s,
            categories: c,
            fetchCategoriesError: n,
            refreshCategories: u,
        } = (0, o.A)({ paymentGateway: r, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: i,
            fetchPurchasesError: l,
            claimError: a,
            isFetching: f,
            purchases: d,
            hasPreviouslyFetched: A,
        } = h(e?.stalePurchasesOK);
    return {
        isFetching: s || f,
        isFetchingCategories: s,
        isFetchingPurchases: f,
        isClaiming: i,
        categories: c,
        purchases: d,
        fetchCategoriesError: n,
        fetchPurchasesError: l,
        claimError: a,
        refreshCategories: u,
        hasPreviouslyFetched: A,
    };
}
let d = (e) => f({ ...(e ?? {}), stalePurchasesOK: !0 });
