r.d(n, {
    BH: function () {
        return b;
    },
    Cs: function () {
        return A;
    },
    G1: function () {
        return p;
    },
    IC: function () {
        return U;
    },
    OT: function () {
        return G;
    },
    Vw: function () {
        return g;
    },
    XM: function () {
        return E;
    },
    XS: function () {
        return w;
    },
    Yq: function () {
        return Z;
    },
    aj: function () {
        return x;
    },
    bl: function () {
        return P;
    },
    eu: function () {
        return V;
    },
    f_: function () {
        return T;
    },
    iC: function () {
        return D;
    },
    mO: function () {
        return M;
    },
    qS: function () {
        return m;
    },
    ql: function () {
        return I;
    },
    rN: function () {
        return y;
    },
    uV: function () {
        return L;
    },
    x0: function () {
        return j;
    },
    x6: function () {
        return F;
    }
});
var i = r(724458);
var a = r(653041);
var s = r(47120);
var o = r(392711);
var l = r(979554),
    u = r(134432),
    c = r(937615),
    d = r(922347),
    f = r(212161),
    _ = r(215023),
    h = r(981631);
let p = (e) => (null == e ? void 0 : e.premiumType) != null,
    m = (e) => (null == e ? void 0 : e.purchaseType) === h.qc2.PREMIUM_PURCHASE,
    g = (e, n, r) => {
        let i;
        return I(e, (i = r ? (n ? h.tuJ.MOBILE_PREMIUM_TIER_2 : h.tuJ.MOBILE) : n ? h.tuJ.PREMIUM_TIER_2 : h.tuJ.DEFAULT));
    },
    E = (e, n, r) => {
        let i = g(e, n, r);
        return null == i ? '' : (0, c.T4)(null == i ? void 0 : i.amount, null == i ? void 0 : i.currency);
    },
    v = (e) => {
        let n = e.bundledProducts;
        return null == n
            ? 0
            : n.reduce((e, n) => {
                  var r;
                  let i = I(n, h.tuJ.DEFAULT);
                  return e + (null !== (r = null == i ? void 0 : i.amount) && void 0 !== r ? r : 0);
              }, 0);
    },
    I = (e, n) => {
        var r, i, a;
        let s = null !== (a = e.prices[n]) && void 0 !== a ? a : null;
        return null == s ? null : null === (i = s.countryPrices) || void 0 === i ? void 0 : null === (r = i.prices) || void 0 === r ? void 0 : r[0];
    },
    T = {
        original: -1,
        discountPercentage: -1
    },
    b = (e, n) => {
        let r = v(e);
        if (r <= 0) return T;
        let i = I(e, n ? h.tuJ.PREMIUM_TIER_2 : h.tuJ.DEFAULT);
        return null == i
            ? T
            : {
                  original: r,
                  discountPercentage: Math.round(((r - i.amount) / r) * 100)
              };
    },
    y = (e) => {
        var n;
        return (null === (n = I(e, h.tuJ.DEFAULT)) || void 0 === n ? void 0 : n.amount) === 0;
    },
    S = (e) =>
        e.reduce(
            (e, n) =>
                null != n && n.type === l.Z.VARIANTS_GROUP && null != n.variants
                    ? (0, o.concat)(
                          e,
                          n.variants.map((e) => ({
                              ...e,
                              variantGroupStoreListingId: n.storeListingId
                          }))
                      )
                    : (e.push(n), e),
            []
        ),
    A = (e, n) => {
        let r = (0, o.flatMap)([...e.values()], 'products');
        return (0, o.uniqBy)(n ? S(r) : r, 'storeListingId');
    },
    N = (e, n) => {
        if (n === l.Z.AVATAR_DECORATION) {
            let n = (0, o.flatMap)([...e.values()], 'items').filter(d.M);
            return (0, o.uniqBy)(n, 'id');
        }
        if (n === l.Z.PROFILE_EFFECT) {
            let n = (0, o.flatMap)([...e.values()], 'items').filter(f.H);
            return (0, o.uniqBy)(n, 'id');
        }
    },
    C = (e, n) => {
        let r = A(e, !0);
        if (n === l.Z.AVATAR_DECORATION) {
            let e = (0, o.flatMap)(r, 'items').filter(d.M);
            return (0, o.uniqBy)(e, 'id');
        }
        if (n === l.Z.PROFILE_EFFECT) {
            let e = (0, o.flatMap)(r, 'items').filter(f.H);
            return (0, o.uniqBy)(e, 'id');
        }
    },
    R = (e) => N(e, l.Z.AVATAR_DECORATION),
    O = (e) => C(e, l.Z.AVATAR_DECORATION),
    D = (e, n) => (0, o.uniqBy)([...R(e), ...O(n)], 'id'),
    L = (e, n) => {
        var r;
        let { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
            s = (0, u.oO)(n.size * (0, u.x_)()),
            o = null !== (r = null == n ? void 0 : n.format) && void 0 !== r ? r : 'png';
        if (null != i) return ''.concat(location.protocol, '//').concat(i, '/app-assets/').concat(h.XAJ, '/').concat(e, '.').concat(o, '?size=').concat(s);
        let l = h.ANM.APPLICATION_ASSET(h.XAJ, e, o);
        return ''.concat(location.protocol).concat(a).concat(l, '?size=').concat(s);
    },
    x = (e) => N(e, l.Z.PROFILE_EFFECT),
    w = (e) => C(e, l.Z.PROFILE_EFFECT),
    P = (e, n) => {
        let r = x(n),
            i = w(e).filter((e) => {
                let { id: n } = e;
                return !r.some((e) => e.id === n);
            });
        return {
            purchased: r,
            shopPreviews: i
        };
    },
    M = (e) => e.applicationId === h.XAJ,
    k = 3.8,
    U = (e) => k * e,
    B = 86400000,
    G = (e) => {
        let n = new Date(),
            r = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - r) / B);
    },
    Z = (e) => {
        let n = _.yf[e];
        return null != n && new Date().getTime() < n;
    },
    F = (e) => (null == e ? void 0 : e.type) === l.Z.BUNDLE,
    V = (e, n, r) => {
        if (F(e)) return v(e);
        let i = I(e, n ? (r ? h.tuJ.MOBILE : h.tuJ.DEFAULT) : r ? h.tuJ.MOBILE_PREMIUM_TIER_2 : h.tuJ.PREMIUM_TIER_2);
        return null == i ? void 0 : i.amount;
    },
    j = (e, n) => {
        let r = [];
        for (let i of e) {
            let e = i.heroRanking;
            if (null != e)
                for (let i of e) {
                    let e = n.get(i);
                    if (null != e && !F(e) && (r.push(i), r.length >= _.K8)) return r;
                }
        }
        return H(r);
    },
    H = (e) => {
        if (e.length < _.K8) {
            let n = _.HU.slice(0, _.K8 - e.length);
            return e.concat(n);
        }
        return e;
    };
