n.d(t, {
    BH: () => I,
    Cs: () => A,
    G1: () => g,
    IC: () => G,
    OT: () => V,
    Vw: () => E,
    WW: () => Z,
    XM: () => v,
    XS: () => M,
    Yq: () => F,
    aj: () => x,
    bl: () => k,
    eu: () => W,
    f_: () => S,
    iC: () => w,
    mO: () => j,
    qS: () => m,
    ql: () => O,
    rN: () => T,
    uV: () => L,
    x0: () => Y,
    x6: () => H
}),
    n(653041),
    n(47120);
var r = n(392711),
    i = n(979554),
    o = n(134432),
    a = n(358085),
    s = n(937615),
    l = n(922347),
    c = n(212161),
    u = n(215023),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
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
function h(e, t) {
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
let g = (e) => (null == e ? void 0 : e.premiumType) != null,
    m = (e) => (null == e ? void 0 : e.purchaseType) === d.qc2.PREMIUM_PURCHASE,
    E = (e, t, n) => {
        let r;
        return O(e, (r = n ? (t ? d.tuJ.MOBILE_PREMIUM_TIER_2 : d.tuJ.MOBILE) : t ? d.tuJ.PREMIUM_TIER_2 : d.tuJ.DEFAULT));
    },
    v = (e, t, n) => {
        let r = E(e, t, n);
        return null == r ? '' : (0, s.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    b = (e) => ((0, a.isAndroid)() || (0, a.isIOS)() ? (e ? d.tuJ.MOBILE_PREMIUM_TIER_2 : d.tuJ.MOBILE) : e ? d.tuJ.PREMIUM_TIER_2 : d.tuJ.DEFAULT),
    y = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = b(!1);
        return t.reduce((e, t) => {
            var r;
            let i = O(t, n);
            return e + (null !== (r = null == i ? void 0 : i.amount) && void 0 !== r ? r : 0);
        }, 0);
    },
    O = (e, t) => {
        var n, r, i;
        let o = null !== (i = e.prices[t]) && void 0 !== i ? i : null;
        return null != o ? (null === (r = o.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0]) : null;
    },
    S = {
        original: -1,
        discountPercentage: -1
    },
    I = (e, t) => {
        let n = y(e);
        if (n <= 0) return S;
        let r = O(e, b(t));
        return null == r
            ? S
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100)
              };
    },
    T = (e) => {
        var t;
        return (null === (t = O(e, d.tuJ.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0;
    },
    N = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) => h(_({}, e), { variantGroupStoreListingId: t.storeListingId }))
                      )
                    : (e.push(t), e),
            []
        ),
    A = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], 'products');
        return (0, r.uniqBy)(t ? N(n) : n, 'storeListingId');
    },
    C = (e, t) => {
        if (t === i.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(l.M);
            return (0, r.uniqBy)(t, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(c.H);
            return (0, r.uniqBy)(t, 'id');
        }
    },
    R = (e, t) => {
        let n = A(e, !0);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, 'items').filter(l.M);
            return (0, r.uniqBy)(e, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, 'items').filter(c.H);
            return (0, r.uniqBy)(e, 'id');
        }
    },
    P = (e) => C(e, i.Z.AVATAR_DECORATION),
    D = (e) => R(e, i.Z.AVATAR_DECORATION),
    w = (e, t) => (0, r.uniqBy)([...P(e), ...D(t)], 'id'),
    L = (e, t) => {
        var n;
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            a = (0, o.oO)(t.size * (0, o.x_)()),
            s = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : 'png';
        if (null != r) return ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(d.XAJ, '/').concat(e, '.').concat(s, '?size=').concat(a);
        let l = d.ANM.APPLICATION_ASSET(d.XAJ, e, s);
        return ''.concat(location.protocol).concat(i).concat(l, '?size=').concat(a);
    },
    x = (e) => C(e, i.Z.PROFILE_EFFECT),
    M = (e) => R(e, i.Z.PROFILE_EFFECT),
    k = (e, t) => {
        let n = x(t),
            r = M(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r
        };
    },
    j = (e) => e.applicationId === d.XAJ,
    U = 3.8,
    G = (e) => U * e,
    B = 86400000,
    V = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / B);
    },
    F = (e) => {
        let t = u.yf[e];
        return null != t && new Date().getTime() < t;
    },
    Z = (e) => {
        let t = u.i0[e];
        return null != t && new Date().getTime() < t;
    },
    H = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    W = (e, t, n) => {
        if (H(e)) return y(e);
        let r = O(e, t ? (n ? d.tuJ.MOBILE : d.tuJ.DEFAULT) : n ? d.tuJ.MOBILE_PREMIUM_TIER_2 : d.tuJ.PREMIUM_TIER_2);
        return null == r ? void 0 : r.amount;
    },
    Y = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !H(e) && (n.push(r), n.length >= u.K8)) return n;
                }
        }
        return K(n);
    },
    K = (e) => {
        if (e.length < u.K8) {
            let t = u.HU.slice(0, u.K8 - e.length);
            return e.concat(t);
        }
        return e;
    };
