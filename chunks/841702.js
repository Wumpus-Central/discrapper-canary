r.d(t, { Ay: () => l, Wg: () => o, b5: () => h });
var s = r(582128),
    n = r(702841),
    i = r(736056),
    c = r(815996),
    u = r(4227),
    a = r(579151);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, n.bG)([i.A], () => i.A.hasLoadedExperiments),
        [r, a, o, h, l, A] = (0, n.yK)([u.A], () => [
            u.A.isFetching,
            u.A.isClaiming,
            u.A.fetchError,
            u.A.claimError,
            u.A.purchases,
            u.A.hasPreviouslyFetched,
        ]),
        f = (0, s.useRef)(u.A.hasPreviouslyFetched);
    (0, s.useEffect)(() => {
        f.current = A;
    }, [A]);
    let d = (0, s.useRef)(u.A.fetchError);
    (0, s.useEffect)(() => {
        d.current = o;
    }, [o]);
    let g = (0, s.useRef)(u.A.isFetching);
    return (
        (0, s.useEffect)(() => {
            g.current = r;
        }, [r]),
        (0, s.useEffect)(() => {
            !t || g.current || (!0 === e && f.current && null == d.current) || (0, c.gB)();
        }, [e, t]),
        { isClaiming: a, fetchPurchasesError: o, claimError: h, isFetching: r, purchases: l, hasPreviouslyFetched: A }
    );
}
function h() {
    return o(!0);
}
function l(e, t) {
    let r = e?.paymentGateway,
        {
            isFetching: s,
            categories: n,
            fetchCategoriesError: i,
            refreshCategories: c,
        } = (0, a.A)(
            {
                paymentGateway: r,
                noOp: e?.noOp,
                logPerf: e?.logPerf,
                countryCode: e?.countryCode,
                skipFetch: e?.skipFetch,
            },
            t,
        ),
        {
            isClaiming: u,
            fetchPurchasesError: h,
            claimError: l,
            isFetching: A,
            purchases: f,
            hasPreviouslyFetched: d,
        } = o(e?.stalePurchasesOK);
    return {
        isFetching: s || A,
        isFetchingCategories: s,
        isFetchingPurchases: A,
        isClaiming: u,
        categories: n,
        purchases: f,
        fetchCategoriesError: i,
        fetchPurchasesError: h,
        claimError: l,
        refreshCategories: c,
        hasPreviouslyFetched: d,
    };
}
