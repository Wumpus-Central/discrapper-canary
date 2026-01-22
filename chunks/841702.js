n.d(t, {
    Ay: () => E,
    Bf: () => b,
    Mv: () => g,
    Wg: () => h,
    b5: () => m,
}),
    n(896048);
var r = n(64700),
    i = n(635358),
    a = n(417597),
    s = n(49463),
    o = n(979286),
    l = n(4227),
    c = n(233525),
    u = n(315949);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (0, c.n)("useFetchPurchases");
    let t = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
        n = i.g.VARIANTS_GROUP,
        [u, d, f, p, _, h] = (0, a.yK)([l.A], () => [
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
        g.current = f;
    }, [f]);
    let E = (0, r.useRef)(l.A.isFetching);
    return (
        (0, r.useEffect)(() => {
            E.current = u;
        }, [u]),
        (0, r.useEffect)(() => {
            !t || E.current || (!0 === e && m.current && null == g.current) || (0, o.gB)({ variantsReturnStyle: n });
        }, [e, n, t]),
        {
            isClaiming: d,
            fetchPurchasesError: f,
            claimError: p,
            isFetching: u,
            purchases: _,
            hasPreviouslyFetched: h,
        }
    );
}
n(259248);
let m = () => h(!0),
    g = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = h(t);
        return null != e ? n.get(e) : void 0;
    };
function E(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: a,
            refreshCategories: s,
        } = (0, u.A)(
            {
                paymentGateway: n,
                noOp: null == e ? void 0 : e.noOp,
                logPerf: null == e ? void 0 : e.logPerf,
                countryCode: null == e ? void 0 : e.countryCode,
            },
            t,
        ),
        {
            isClaiming: o,
            fetchPurchasesError: l,
            claimError: c,
            isFetching: d,
            purchases: f,
            hasPreviouslyFetched: p,
        } = h(null == e ? void 0 : e.stalePurchasesOK);
    return {
        isFetching: r || d,
        isFetchingCategories: r,
        isFetchingPurchases: d,
        isClaiming: o,
        categories: i,
        purchases: f,
        fetchCategoriesError: a,
        fetchPurchasesError: l,
        claimError: c,
        refreshCategories: s,
        hasPreviouslyFetched: p,
    };
}
let b = (e) => E(_(f({}, null != e ? e : {}), { stalePurchasesOK: !0 }));
