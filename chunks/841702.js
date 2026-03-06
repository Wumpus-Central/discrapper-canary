"use strict";
n.d(t, { Ay: () => _, Bf: () => f, Mv: () => d, Wg: () => u, b5: () => c });
var r = n(64700),
    i = n(417597),
    s = n(49463),
    a = n(979286),
    o = n(4227),
    l = n(315949);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([s.A], () => s.A.hasLoadedExperiments),
        [n, l, u, c, d, _] = (0, i.yK)([o.A], () => [
            o.A.isFetching,
            o.A.isClaiming,
            o.A.fetchError,
            o.A.claimError,
            o.A.purchases,
            o.A.hasPreviouslyFetched,
        ]),
        f = (0, r.useRef)(o.A.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        f.current = _;
    }, [_]);
    let p = (0, r.useRef)(o.A.fetchError);
    (0, r.useEffect)(() => {
        p.current = u;
    }, [u]);
    let h = (0, r.useRef)(o.A.isFetching);
    return (
        (0, r.useEffect)(() => {
            h.current = n;
        }, [n]),
        (0, r.useEffect)(() => {
            !t || h.current || (!0 === e && f.current && null == p.current) || (0, a.gB)();
        }, [e, t]),
        { isClaiming: l, fetchPurchasesError: u, claimError: c, isFetching: n, purchases: d, hasPreviouslyFetched: _ }
    );
}
n(259248);
let c = () => u(!0),
    d = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = u(t);
        return null != e ? n.get(e) : void 0;
    };
function _(e, t) {
    let n = e?.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: s,
            refreshCategories: a,
        } = (0, l.A)({ paymentGateway: n, noOp: e?.noOp, logPerf: e?.logPerf, countryCode: e?.countryCode }, t),
        {
            isClaiming: o,
            fetchPurchasesError: c,
            claimError: d,
            isFetching: _,
            purchases: f,
            hasPreviouslyFetched: p,
        } = u(e?.stalePurchasesOK);
    return {
        isFetching: r || _,
        isFetchingCategories: r,
        isFetchingPurchases: _,
        isClaiming: o,
        categories: i,
        purchases: f,
        fetchCategoriesError: s,
        fetchPurchasesError: c,
        claimError: d,
        refreshCategories: a,
        hasPreviouslyFetched: p,
    };
}
let f = (e) => _({ ...(e ?? {}), stalePurchasesOK: !0 });
