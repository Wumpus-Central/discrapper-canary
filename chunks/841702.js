r.d(t, { Ay: () => f, Bf: () => A, Mv: () => h, Wg: () => o, b5: () => l });
var n = r(582128),
    s = r(702841),
    i = r(736056),
    u = r(839534),
    c = r(4227),
    a = r(579151);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, s.bG)([i.A], () => i.A.hasLoadedExperiments),
        [r, a, o, l, h, f] = (0, s.yK)([c.A], () => [
            c.A.isFetching,
            c.A.isClaiming,
            c.A.fetchError,
            c.A.claimError,
            c.A.purchases,
            c.A.hasPreviouslyFetched,
        ]),
        A = (0, n.useRef)(c.A.hasPreviouslyFetched);
    (0, n.useEffect)(() => {
        A.current = f;
    }, [f]);
    let d = (0, n.useRef)(c.A.fetchError);
    (0, n.useEffect)(() => {
        d.current = o;
    }, [o]);
    let g = (0, n.useRef)(c.A.isFetching);
    return (
        (0, n.useEffect)(() => {
            g.current = r;
        }, [r]),
        (0, n.useEffect)(() => {
            !t || g.current || (!0 === e && A.current && null == d.current) || (0, u.gB)();
        }, [e, t]),
        { isClaiming: a, fetchPurchasesError: o, claimError: l, isFetching: r, purchases: h, hasPreviouslyFetched: f }
    );
}
function l() {
    return o(!0);
}
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { purchases: r } = o(t);
    return null != e ? r.get(e) : void 0;
}
function f(e, t) {
    let r = e?.paymentGateway,
        {
            isFetching: n,
            categories: s,
            fetchCategoriesError: i,
            refreshCategories: u,
        } = (0, a.A)({ paymentGateway: r, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: c,
            fetchPurchasesError: l,
            claimError: h,
            isFetching: f,
            purchases: A,
            hasPreviouslyFetched: d,
        } = o(e?.stalePurchasesOK);
    return {
        isFetching: n || f,
        isFetchingCategories: n,
        isFetchingPurchases: f,
        isClaiming: c,
        categories: s,
        purchases: A,
        fetchCategoriesError: i,
        fetchPurchasesError: l,
        claimError: h,
        refreshCategories: u,
        hasPreviouslyFetched: d,
    };
}
function A(e) {
    return f({ ...(e ?? {}), stalePurchasesOK: !0 });
}
