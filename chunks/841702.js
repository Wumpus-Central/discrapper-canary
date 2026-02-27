"use strict";
n.d(t, { Ay: () => p, Bf: () => h, Mv: () => f, Wg: () => d, b5: () => _ });
var r = n(64700),
    i = n(635358),
    s = n(417597),
    a = n(49463),
    o = n(979286),
    l = n(4227),
    u = n(233525),
    c = n(315949);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (0, u.n)("useFetchPurchases");
    let t = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        n = i.g.VARIANTS_GROUP,
        [c, d, _, f, p, h] = (0, s.yK)([l.A], () => [
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
    let E = (0, r.useRef)(l.A.fetchError);
    (0, r.useEffect)(() => {
        E.current = _;
    }, [_]);
    let g = (0, r.useRef)(l.A.isFetching);
    return (
        (0, r.useEffect)(() => {
            g.current = c;
        }, [c]),
        (0, r.useEffect)(() => {
            !t || g.current || (!0 === e && m.current && null == E.current) || (0, o.gB)({ variantsReturnStyle: n });
        }, [e, n, t]),
        { isClaiming: d, fetchPurchasesError: _, claimError: f, isFetching: c, purchases: p, hasPreviouslyFetched: h }
    );
}
n(259248);
let _ = () => d(!0),
    f = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = d(t);
        return null != e ? n.get(e) : void 0;
    };
function p(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: s,
            refreshCategories: a,
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
        fetchCategoriesError: s,
        fetchPurchasesError: l,
        claimError: u,
        refreshCategories: a,
        hasPreviouslyFetched: p,
    };
}
let h = (e) => p({ ...(e ?? {}), stalePurchasesOK: !0 });
