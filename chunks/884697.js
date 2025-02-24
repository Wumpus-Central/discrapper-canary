n.d(t, {
    BH: () => O,
    Cs: () => T,
    G1: () => h,
    IC: () => j,
    OT: () => G,
    Vw: () => g,
    WW: () => Z,
    XM: () => E,
    XS: () => x,
    Yq: () => B,
    aj: () => D,
    bl: () => L,
    eu: () => V,
    f_: () => y,
    iC: () => P,
    mO: () => M,
    qS: () => m,
    ql: () => b,
    rN: () => S,
    uV: () => w,
    x0: () => H,
    x6: () => F
}),
    n(653041),
    n(47120);
var r = n(392711),
    i = n(979554),
    o = n(134432),
    a = n(937615),
    s = n(922347),
    l = n(212161),
    c = n(215023),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
let h = (e) => (null == e ? void 0 : e.premiumType) != null,
    m = (e) => (null == e ? void 0 : e.purchaseType) === u.qc2.PREMIUM_PURCHASE,
    g = (e, t, n) => {
        let r;
        return b(e, (r = n ? (t ? u.tuJ.MOBILE_PREMIUM_TIER_2 : u.tuJ.MOBILE) : t ? u.tuJ.PREMIUM_TIER_2 : u.tuJ.DEFAULT));
    },
    E = (e, t, n) => {
        let r = g(e, t, n);
        return null == r ? '' : (0, a.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    v = (e) => {
        let t = e.bundledProducts;
        return null == t
            ? 0
            : t.reduce((e, t) => {
                  var n;
                  let r = b(t, u.tuJ.DEFAULT);
                  return e + (null !== (n = null == r ? void 0 : r.amount) && void 0 !== n ? n : 0);
              }, 0);
    },
    b = (e, t) => {
        var n, r, i;
        let o = null !== (i = e.prices[t]) && void 0 !== i ? i : null;
        return null == o ? null : null === (r = o.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0];
    },
    y = {
        original: -1,
        discountPercentage: -1
    },
    O = (e, t) => {
        let n = v(e);
        if (n <= 0) return y;
        let r = b(e, t ? u.tuJ.PREMIUM_TIER_2 : u.tuJ.DEFAULT);
        return null == r
            ? y
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100)
              };
    },
    S = (e) => {
        var t;
        return (null === (t = b(e, u.tuJ.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0;
    },
    I = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) => _(f({}, e), { variantGroupStoreListingId: t.storeListingId }))
                      )
                    : (e.push(t), e),
            []
        ),
    T = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], 'products');
        return (0, r.uniqBy)(t ? I(n) : n, 'storeListingId');
    },
    N = (e, t) => {
        if (t === i.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(s.M);
            return (0, r.uniqBy)(t, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(l.H);
            return (0, r.uniqBy)(t, 'id');
        }
    },
    A = (e, t) => {
        let n = T(e, !0);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, 'items').filter(s.M);
            return (0, r.uniqBy)(e, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, 'items').filter(l.H);
            return (0, r.uniqBy)(e, 'id');
        }
    },
    C = (e) => N(e, i.Z.AVATAR_DECORATION),
    R = (e) => A(e, i.Z.AVATAR_DECORATION),
    P = (e, t) => (0, r.uniqBy)([...C(e), ...R(t)], 'id'),
    w = (e, t) => {
        var n;
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            a = (0, o.oO)(t.size * (0, o.x_)()),
            s = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : 'png';
        if (null != r) return ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(u.XAJ, '/').concat(e, '.').concat(s, '?size=').concat(a);
        let l = u.ANM.APPLICATION_ASSET(u.XAJ, e, s);
        return ''.concat(location.protocol).concat(i).concat(l, '?size=').concat(a);
    },
    D = (e) => N(e, i.Z.PROFILE_EFFECT),
    x = (e) => A(e, i.Z.PROFILE_EFFECT),
    L = (e, t) => {
        let n = D(t),
            r = x(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r
        };
    },
    M = (e) => e.applicationId === u.XAJ,
    k = 3.8,
    j = (e) => k * e,
    U = 86400000,
    G = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / U);
    },
    B = (e) => {
        let t = c.yf[e];
        return null != t && new Date().getTime() < t;
    },
    Z = (e) => {
        let t = c.i0[e];
        return null != t && new Date().getTime() < t;
    },
    F = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    V = (e, t, n) => {
        if (F(e)) return v(e);
        let r = b(e, t ? (n ? u.tuJ.MOBILE : u.tuJ.DEFAULT) : n ? u.tuJ.MOBILE_PREMIUM_TIER_2 : u.tuJ.PREMIUM_TIER_2);
        return null == r ? void 0 : r.amount;
    },
    H = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !F(e) && (n.push(r), n.length >= c.K8)) return n;
                }
        }
        return W(n);
    },
    W = (e) => {
        if (e.length < c.K8) {
            let t = c.HU.slice(0, c.K8 - e.length);
            return e.concat(t);
        }
        return e;
    };
