r.d(t, { Ay: () => h, Bf: () => f, Wg: () => o, b5: () => l });
var s = r(582128),
    n = r(702841),
    i = r(736056),
    c = r(839534),
    u = r(4227),
    a = r(315949);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, n.bG)([i.A], () => i.A.hasLoadedExperiments),
        [r, a, o, l, h, f] = (0, n.yK)([u.A], () => [
            u.A.isFetching,
            u.A.isClaiming,
            u.A.fetchError,
            u.A.claimError,
            u.A.purchases,
            u.A.hasPreviouslyFetched,
        ]),
        A = (0, s.useRef)(u.A.hasPreviouslyFetched);
    (0, s.useEffect)(() => {
        A.current = f;
    }, [f]);
    let g = (0, s.useRef)(u.A.fetchError);
    (0, s.useEffect)(() => {
        g.current = o;
    }, [o]);
    let d = (0, s.useRef)(u.A.isFetching);
    return (
        (0, s.useEffect)(() => {
            d.current = r;
        }, [r]),
        (0, s.useEffect)(() => {
            !t || d.current || (!0 === e && A.current && null == g.current) || (0, c.gB)();
        }, [e, t]),
        { isClaiming: a, fetchPurchasesError: o, claimError: l, isFetching: r, purchases: h, hasPreviouslyFetched: f }
    );
}
function l() {
    return o(!0);
}
function h(e, t) {
    let r = e?.paymentGateway,
        {
            isFetching: s,
            categories: n,
            fetchCategoriesError: i,
            refreshCategories: c,
        } = (0, a.A)({ paymentGateway: r, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: u,
            fetchPurchasesError: l,
            claimError: h,
            isFetching: f,
            purchases: A,
            hasPreviouslyFetched: g,
        } = o(e?.stalePurchasesOK);
    return {
        isFetching: s || f,
        isFetchingCategories: s,
        isFetchingPurchases: f,
        isClaiming: u,
        categories: n,
        purchases: A,
        fetchCategoriesError: i,
        fetchPurchasesError: l,
        claimError: h,
        refreshCategories: c,
        hasPreviouslyFetched: g,
    };
}
function f(e) {
    return h({ ...(e ?? {}), stalePurchasesOK: !0 });
}
