n.d(t, {
    Ad: () => L,
    BH: () => C,
    Cs: () => P,
    G1: () => E,
    IC: () => W,
    OT: () => z,
    Qf: () => ea,
    Vw: () => O,
    WW: () => X,
    XM: () => v,
    XS: () => U,
    Y: () => V,
    Yq: () => q,
    bl: () => B,
    eu: () => $,
    f_: () => A,
    fp: () => b,
    gc: () => I,
    hC: () => ei,
    iC: () => M,
    iP: () => J,
    jT: () => Z,
    jm: () => er,
    mO: () => H,
    ne: () => en,
    qS: () => y,
    ql: () => S,
    rN: () => N,
    uV: () => x,
    x0: () => ee,
    x6: () => Q,
    yn: () => G,
}),
    n(539854),
    n(388685),
    n(642613);
var r = n(392711),
    i = n(180650),
    a = n(979554),
    o = n(134432),
    s = n(358085),
    l = n(937615),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
    b = (e) => (null == e ? void 0 : e.categorySkuId) === i.T.ORB,
    y = (e) => (null == e ? void 0 : e.purchaseType) === _.qc2.PREMIUM_PURCHASE,
    O = (e, t, n) => {
        let r;
        return S(
            e,
            (r = n ? (t ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE) : t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT),
        );
    },
    v = (e, t, n) => {
        let r = O(e, t, n);
        return null == r ? "" : (0, l.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    I = (e) =>
        (0, s.isAndroid)() || (0, s.isIOS)()
            ? e
                ? _.tuJ.MOBILE_PREMIUM_TIER_2
                : _.tuJ.MOBILE
            : e
              ? _.tuJ.PREMIUM_TIER_2
              : _.tuJ.DEFAULT,
    T = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = I(!1);
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
    A = {
        original: -1,
        discountPercentage: -1,
    },
    C = (e, t) => {
        let n = T(e);
        if (n <= 0) return A;
        let r = S(e, I(t));
        return null == r
            ? A
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100),
              };
    },
    N = (e) => {
        var t;
        return (null == (t = S(e, _.tuJ.DEFAULT)) ? void 0 : t.amount) === 0;
    },
    R = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === a.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) =>
                              g(h({}, e), {
                                  variantGroupStoreListingId: t.storeListingId,
                                  eligibleOffers: t.eligibleOffers,
                              }),
                          ),
                      )
                    : (e.push(t), e),
            [],
        ),
    P = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(t ? R(n) : n, "storeListingId");
    },
    w = (e, t) => {
        if (t === a.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(c.M);
            return (0, r.uniqBy)(t, "id");
        }
        if (t === a.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(d.H);
            return (0, r.uniqBy)(t, "id");
        }
        if (t === a.Z.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(u.k);
            return (0, r.uniqBy)(t, "id");
        }
        return [];
    },
    D = (e, t) => {
        let n = P(e, !0);
        if (t === a.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(c.M);
            return (0, r.uniqBy)(e, "id");
        }
        if (t === a.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(d.H);
            return (0, r.uniqBy)(e, "id");
        }
        if (t === a.Z.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(u.k);
            return (0, r.uniqBy)(e, "id");
        }
        return [];
    },
    x = (e, t) => {
        var n;
        if (null == e || "" === e) return "";
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            a = (0, o.oO)(t.size * (0, o.x_)()),
            s = null != (n = null == t ? void 0 : t.format) ? n : "png";
        if (null != r)
            return "https://".concat(r, "/app-assets/").concat(_.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(a);
        let l = _.ANM.APPLICATION_ASSET(_.XAJ, e, s);
        return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(a);
    },
    L = (e) => w(e, a.Z.AVATAR_DECORATION),
    j = (e) => D(e, a.Z.AVATAR_DECORATION),
    M = (e, t) => (0, r.uniqBy)([...L(e), ...j(t)], "id"),
    k = (e) => w(e, a.Z.PROFILE_EFFECT),
    U = (e) => D(e, a.Z.PROFILE_EFFECT),
    G = (e, t) => (0, r.uniqBy)([...k(e), ...U(t)], "id"),
    B = (e, t) => {
        let n = k(t),
            r = U(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r,
        };
    },
    Z = (e) => w(e, a.Z.NAMEPLATE),
    F = (e) => D(e, a.Z.NAMEPLATE),
    V = (e, t) => (0, r.uniqBy)([...Z(e), ...F(t)], "id"),
    H = (e) => e.applicationId === _.XAJ,
    Y = 3.8,
    W = (e) => Y * e,
    K = 86400000,
    z = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / K);
    },
    q = (e) => {
        let t = f.yf[e];
        return null != t && new Date().getTime() < t;
    },
    X = (e) => {
        let t = f.i0[e];
        return null != t && new Date().getTime() < t;
    },
    Q = (e) => (null == e ? void 0 : e.type) === a.Z.BUNDLE,
    J = (e) => !!e && !_.w2V.has(e),
    $ = (e, t, n) => {
        if (Q(e)) return T(e);
        let r = S(e, t ? (n ? _.tuJ.MOBILE : _.tuJ.DEFAULT) : n ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.PREMIUM_TIER_2);
        return null == r ? void 0 : r.amount;
    },
    ee = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !Q(e) && (n.push(r), n.length >= f.K8)) return n;
                }
        }
        return et(n);
    },
    et = (e) => {
        if (e.length < f.K8) {
            let t = f.HU.slice(0, f.K8 - e.length);
            return e.concat(t);
        }
        return e;
    },
    en = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(f.Vt.ORB_PROFILE_BADGE === (null == t ? void 0 : t.skuId) && r);
    },
    er = (e, t) => {
        switch (e) {
            case a.Z.AVATAR_DECORATION:
                return "avatar decoration";
            case a.Z.PROFILE_EFFECT:
                return "profile effect";
            case a.Z.NAMEPLATE:
                return "nameplate";
            case a.Z.BUNDLE:
                return "bundle";
            case a.Z.EXTERNAL_SKU:
                if (t === f.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === f.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case a.Z.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    ei = (e, t) =>
        e.sort((e, n) => {
            var r, i;
            let a = O(e, t, !1),
                o = O(n, t, !1);
            return (
                (null != (r = null == a ? void 0 : a.amount) ? r : 0) -
                (null != (i = null == o ? void 0 : o.amount) ? i : 0)
            );
        }),
    ea = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            var r, i, a, o;
            let s = null != (a = null == (r = e.eligibleOffers) ? void 0 : r.some((e) => n.includes(e))) && a;
            return (null != (o = null == (i = t.eligibleOffers) ? void 0 : i.some((e) => n.includes(e))) && o) - s;
        });
    };
