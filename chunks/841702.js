r.d(t, { Ay: () => f, Bf: () => A, Mv: () => h, Wg: () => o, b5: () => l });
var s = r(582128),
    n = r(702841),
    i = r(736056),
    u = r(839534),
    c = r(4227),
    a = r(315949);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, n.bG)([i.A], () => i.A.hasLoadedExperiments),
        [r, a, o, l, h, f] = (0, n.yK)([c.A], () => [
            c.A.isFetching,
            c.A.isClaiming,
            c.A.fetchError,
            c.A.claimError,
            c.A.purchases,
            c.A.hasPreviouslyFetched,
        ]),
        A = (0, s.useRef)(c.A.hasPreviouslyFetched);
    (0, s.useEffect)(() => {
        A.current = f;
    }, [f]);
    let g = (0, s.useRef)(c.A.fetchError);
    (0, s.useEffect)(() => {
        g.current = o;
    }, [o]);
    let d = (0, s.useRef)(c.A.isFetching);
    return (
        (0, s.useEffect)(() => {
            d.current = r;
        }, [r]),
        (0, s.useEffect)(() => {
            !t || d.current || (!0 === e && A.current && null == g.current) || (0, u.gB)();
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
            isFetching: s,
            categories: n,
            fetchCategoriesError: i,
            refreshCategories: u,
        } = (0, a.A)({ paymentGateway: r, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: c,
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
        isClaiming: c,
        categories: n,
        purchases: A,
        fetchCategoriesError: i,
        fetchPurchasesError: l,
        claimError: h,
        refreshCategories: u,
        hasPreviouslyFetched: g,
    };
}
function A(e) {
    return f({ ...(e ?? {}), stalePurchasesOK: !0 });
}
