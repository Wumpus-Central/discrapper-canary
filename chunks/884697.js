n.d(t, {
    BH: () => E,
    Cs: () => I,
    G1: () => d,
    IC: () => P,
    OT: () => M,
    Vw: () => _,
    XM: () => p,
    XS: () => O,
    Yq: () => k,
    aj: () => R,
    bl: () => D,
    eu: () => G,
    f_: () => g,
    iC: () => N,
    mO: () => L,
    qS: () => f,
    ql: () => m,
    rN: () => v,
    uV: () => C,
    x0: () => B,
    x6: () => U
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(392711),
    r = n(979554),
    a = n(134432),
    s = n(937615),
    o = n(922347),
    l = n(212161),
    u = n(215023),
    c = n(981631);
let d = (e) => (null == e ? void 0 : e.premiumType) != null,
    f = (e) => (null == e ? void 0 : e.purchaseType) === c.qc2.PREMIUM_PURCHASE,
    _ = (e, t, n) => {
        let i;
        return m(e, (i = n ? (t ? c.tuJ.MOBILE_PREMIUM_TIER_2 : c.tuJ.MOBILE) : t ? c.tuJ.PREMIUM_TIER_2 : c.tuJ.DEFAULT));
    },
    p = (e, t, n) => {
        let i = _(e, t, n);
        return null == i ? '' : (0, s.T4)(null == i ? void 0 : i.amount, null == i ? void 0 : i.currency);
    },
    h = (e) => {
        let t = e.bundledProducts;
        return null == t
            ? 0
            : t.reduce((e, t) => {
                  var n;
                  let i = m(t, c.tuJ.DEFAULT);
                  return e + (null !== (n = null == i ? void 0 : i.amount) && void 0 !== n ? n : 0);
              }, 0);
    },
    m = (e, t) => {
        var n, i, r;
        let a = null !== (r = e.prices[t]) && void 0 !== r ? r : null;
        return null == a ? null : null === (i = a.countryPrices) || void 0 === i ? void 0 : null === (n = i.prices) || void 0 === n ? void 0 : n[0];
    },
    g = {
        original: -1,
        discountPercentage: -1
    },
    E = (e, t) => {
        let n = h(e);
        if (n <= 0) return g;
        let i = m(e, t ? c.tuJ.PREMIUM_TIER_2 : c.tuJ.DEFAULT);
        return null == i
            ? g
            : {
                  original: n,
                  discountPercentage: Math.round(((n - i.amount) / n) * 100)
              };
    },
    v = (e) => {
        var t;
        return (null === (t = m(e, c.tuJ.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0;
    },
    y = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === r.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, i.concat)(
                          e,
                          t.variants.map((e) => ({
                              ...e,
                              variantGroupStoreListingId: t.storeListingId
                          }))
                      )
                    : (e.push(t), e),
            []
        ),
    I = (e, t) => {
        let n = (0, i.flatMap)([...e.values()], 'products');
        return (0, i.uniqBy)(t ? y(n) : n, 'storeListingId');
    },
    T = (e, t) => {
        if (t === r.Z.AVATAR_DECORATION) {
            let t = (0, i.flatMap)([...e.values()], 'items').filter(o.M);
            return (0, i.uniqBy)(t, 'id');
        }
        if (t === r.Z.PROFILE_EFFECT) {
            let t = (0, i.flatMap)([...e.values()], 'items').filter(l.H);
            return (0, i.uniqBy)(t, 'id');
        }
    },
    b = (e, t) => {
        let n = I(e, !0);
        if (t === r.Z.AVATAR_DECORATION) {
            let e = (0, i.flatMap)(n, 'items').filter(o.M);
            return (0, i.uniqBy)(e, 'id');
        }
        if (t === r.Z.PROFILE_EFFECT) {
            let e = (0, i.flatMap)(n, 'items').filter(l.H);
            return (0, i.uniqBy)(e, 'id');
        }
    },
    S = (e) => T(e, r.Z.AVATAR_DECORATION),
    A = (e) => b(e, r.Z.AVATAR_DECORATION),
    N = (e, t) => (0, i.uniqBy)([...S(e), ...A(t)], 'id'),
    C = (e, t) => {
        var n;
        let { CDN_HOST: i, API_ENDPOINT: r } = window.GLOBAL_ENV,
            s = (0, a.oO)(t.size * (0, a.x_)()),
            o = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : 'png';
        if (null != i) return ''.concat(location.protocol, '//').concat(i, '/app-assets/').concat(c.XAJ, '/').concat(e, '.').concat(o, '?size=').concat(s);
        let l = c.ANM.APPLICATION_ASSET(c.XAJ, e, o);
        return ''.concat(location.protocol).concat(r).concat(l, '?size=').concat(s);
    },
    R = (e) => T(e, r.Z.PROFILE_EFFECT),
    O = (e) => b(e, r.Z.PROFILE_EFFECT),
    D = (e, t) => {
        let n = R(t),
            i = O(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: i
        };
    },
    L = (e) => e.applicationId === c.XAJ,
    x = 3.8,
    P = (e) => x * e,
    w = 86400000,
    M = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / w);
    },
    k = (e) => {
        let t = u.yf[e];
        return null != t && new Date().getTime() < t;
    },
    U = (e) => (null == e ? void 0 : e.type) === r.Z.BUNDLE,
    G = (e, t, n) => {
        if (U(e)) return h(e);
        let i = m(e, t ? (n ? c.tuJ.MOBILE : c.tuJ.DEFAULT) : n ? c.tuJ.MOBILE_PREMIUM_TIER_2 : c.tuJ.PREMIUM_TIER_2);
        return null == i ? void 0 : i.amount;
    },
    B = (e, t) => {
        let n = [];
        for (let i of e) {
            let e = i.heroRanking;
            if (null != e)
                for (let i of e) {
                    let e = t.get(i);
                    if (null != e && !U(e) && (n.push(i), n.length >= u.K8)) return n;
                }
        }
        return Z(n);
    },
    Z = (e) => {
        if (e.length < u.K8) {
            let t = u.HU.slice(0, u.K8 - e.length);
            return e.concat(t);
        }
        return e;
    };
