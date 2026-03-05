"use strict";
n.d(t, { Ay: () => f, Bf: () => p, Mv: () => _, Wg: () => c, b5: () => d });
var r = n(64700),
    i = n(635358),
    s = n(417597),
    a = n(49463),
    o = n(979286),
    l = n(4227),
    u = n(315949);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        [n, u, c, d, _, f] = (0, s.yK)([l.A], () => [
            l.A.isFetching,
            l.A.isClaiming,
            l.A.fetchError,
            l.A.claimError,
            l.A.purchases,
            l.A.hasPreviouslyFetched,
        ]),
        p = (0, r.useRef)(l.A.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        p.current = f;
    }, [f]);
    let h = (0, r.useRef)(l.A.fetchError);
    (0, r.useEffect)(() => {
        h.current = c;
    }, [c]);
    let m = (0, r.useRef)(l.A.isFetching);
    return (
        (0, r.useEffect)(() => {
            m.current = n;
        }, [n]),
        (0, r.useEffect)(() => {
            !t ||
                m.current ||
                (!0 === e && p.current && null == h.current) ||
                (0, o.gB)({ variantsReturnStyle: i.g.VARIANTS_GROUP });
        }, [e, t]),
        { isClaiming: u, fetchPurchasesError: c, claimError: d, isFetching: n, purchases: _, hasPreviouslyFetched: f }
    );
}
n(259248);
let d = () => c(!0),
    _ = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = c(t);
        return null != e ? n.get(e) : void 0;
    };
function f(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: s,
            refreshCategories: a,
        } = (0, u.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: o,
            fetchPurchasesError: l,
            claimError: d,
            isFetching: _,
            purchases: f,
            hasPreviouslyFetched: p,
        } = c(e?.stalePurchasesOK);
    return {
        isFetching: r || _,
        isFetchingCategories: r,
        isFetchingPurchases: _,
        isClaiming: o,
        categories: i,
        purchases: f,
        fetchCategoriesError: s,
        fetchPurchasesError: l,
        claimError: d,
        refreshCategories: a,
        hasPreviouslyFetched: p,
    };
}
let p = (e) => f({ ...(e ?? {}), stalePurchasesOK: !0 });
