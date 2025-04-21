n.d(t, {
    BH: () => A,
    Cs: () => R,
    G1: () => E,
    IC: () => F,
    OT: () => Z,
    Vw: () => y,
    WW: () => Y,
    XM: () => v,
    XS: () => j,
    Yq: () => H,
    aj: () => k,
    bl: () => U,
    eu: () => K,
    f_: () => T,
    gc: () => O,
    iC: () => x,
    jm: () => J,
    mO: () => G,
    ne: () => X,
    qS: () => b,
    ql: () => S,
    rN: () => N,
    uV: () => M,
    x0: () => z,
    x6: () => W,
    yV: () => Q
}),
    n(539854),
    n(388685);
var r = n(392711),
    i = n(979554),
    a = n(134432),
    o = n(358085),
    s = n(937615),
    l = n(223143),
    c = n(922347),
    u = n(135483),
    d = n(212161),
    f = n(215023),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = (e) => (null == e ? void 0 : e.premiumType) != null,
    b = (e) => (null == e ? void 0 : e.purchaseType) === _.qc2.PREMIUM_PURCHASE,
    y = (e, t, n) => {
        let r;
        return S(e, (r = n ? (t ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE) : t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT));
    },
    v = (e, t, n) => {
        let r = y(e, t, n);
        return null == r ? '' : (0, s.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    O = (e) => ((0, o.isAndroid)() || (0, o.isIOS)() ? (e ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE) : e ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT),
    I = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = O(!1);
        return t.reduce((e, t) => {
            var r;
            let i = S(t, n);
            return e + (null != (r = null == i ? void 0 : i.amount) ? r : 0);
        }, 0);
    },
    S = (e, t) => {
        var n, r, i;
        let a = null != (i = e.prices[t]) ? i : null;
        return null != a ? (null == (r = a.countryPrices) || null == (n = r.prices) ? void 0 : n[0]) : null;
    },
    T = {
        original: -1,
        discountPercentage: -1
    },
    A = (e, t) => {
        let n = I(e);
        if (n <= 0) return T;
        let r = S(e, O(t));
        return null == r
            ? T
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100)
              };
    },
    N = (e) => {
        var t;
        return (null == (t = S(e, _.tuJ.DEFAULT)) ? void 0 : t.amount) === 0;
    },
    C = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) => g(h({}, e), { variantGroupStoreListingId: t.storeListingId }))
                      )
                    : (e.push(t), e),
            []
        ),
    R = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], 'products');
        return (0, r.uniqBy)(t ? C(n) : n, 'storeListingId');
    },
    P = (e, t) => {
        if (t === i.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(c.M);
            return (0, r.uniqBy)(t, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(d.H);
            return (0, r.uniqBy)(t, 'id');
        }
        if (t === i.Z.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(u.k);
            return (0, r.uniqBy)(t, 'id');
        }
        return [];
    },
    w = (e, t) => {
        let n = R(e, !0);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, 'items').filter(c.M);
            return (0, r.uniqBy)(e, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, 'items').filter(d.H);
            return (0, r.uniqBy)(e, 'id');
        }
        if (t === i.Z.NAMEPLATE) {
            let e = (0, r.flatMap)(n, 'items').filter(u.k);
            return (0, r.uniqBy)(e, 'id');
        }
        return [];
    },
    D = (e) => P(e, i.Z.AVATAR_DECORATION),
    L = (e) => w(e, i.Z.AVATAR_DECORATION),
    x = (e, t) => (0, r.uniqBy)([...D(e), ...L(t)], 'id'),
    M = (e, t) => {
        var n;
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            o = (0, a.oO)(t.size * (0, a.x_)()),
            s = null != (n = null == t ? void 0 : t.format) ? n : 'png';
        if (null != r) return ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(_.XAJ, '/').concat(e, '.').concat(s, '?size=').concat(o);
        let l = _.ANM.APPLICATION_ASSET(_.XAJ, e, s);
        return ''.concat(location.protocol).concat(i).concat(l, '?size=').concat(o);
    },
    k = (e) => P(e, i.Z.PROFILE_EFFECT),
    j = (e) => w(e, i.Z.PROFILE_EFFECT),
    U = (e, t) => {
        let n = k(t),
            r = j(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r
        };
    },
    G = (e) => e.applicationId === _.XAJ,
    B = 3.8,
    F = (e) => B * e,
    V = 86400000,
    Z = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / V);
    },
    H = (e) => {
        let t = f.yf[e];
        return null != t && new Date().getTime() < t;
    },
    Y = (e) => {
        let t = f.i0[e];
        return null != t && new Date().getTime() < t;
    },
    W = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    K = (e, t, n) => {
        if (W(e)) return I(e);
        let r = S(e, t ? (n ? _.tuJ.MOBILE : _.tuJ.DEFAULT) : n ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.PREMIUM_TIER_2);
        return null == r ? void 0 : r.amount;
    },
    z = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !W(e) && (n.push(r), n.length >= f.K8)) return n;
                }
        }
        return q(n);
    },
    q = (e) => {
        if (e.length < f.K8) {
            let t = f.HU.slice(0, f.K8 - e.length);
            return e.concat(t);
        }
        return e;
    },
    Q = (e) => {
        let { categories: t, purchases: n, isFetchingCategories: r, isFetchingPurchases: a } = (0, l.ZP)({ location: e }),
            o = w(t, i.Z.NAMEPLATE),
            s = P(n, i.Z.NAMEPLATE),
            c = new Set(s.map((e) => e.id));
        return {
            available: o.filter((e) => !c.has(e.id)),
            purchased: s,
            isFetchingCategories: r,
            isFetchingPurchases: a
        };
    },
    X = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(f.Vt.ORB_PROFILE_BADGE === (null == t ? void 0 : t.skuId) && r);
    },
    J = (e, t) => {
        switch (e) {
            case i.Z.AVATAR_DECORATION:
                return 'avatar decoration';
            case i.Z.PROFILE_EFFECT:
                return 'profile effect';
            case i.Z.NAMEPLATE:
                return 'nameplate';
            case i.Z.BUNDLE:
                return 'bundle';
            case i.Z.EXTERNAL_SKU:
                if (t === f.Vt.FRACTIONAL_PREMIUM) return '3-day nitro credit';
                if (t === f.Vt.ORB_PROFILE_BADGE) return 'orb profile badge';
                return 'unknown';
            case i.Z.VARIANTS_GROUP:
                return 'variants group';
            default:
                return 'unknown';
        }
    };
