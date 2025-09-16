n.d(t, {
    Ad: () => D,
    BH: () => S,
    Cs: () => N,
    G1: () => g,
    IC: () => H,
    OT: () => W,
    Qf: () => en,
    Vw: () => b,
    WW: () => z,
    XM: () => y,
    XS: () => M,
    Y: () => Z,
    Yq: () => K,
    bl: () => U,
    eu: () => X,
    f_: () => T,
    gc: () => O,
    hC: () => et,
    iC: () => L,
    jT: () => G,
    jm: () => ee,
    mO: () => F,
    ne: () => $,
    qS: () => E,
    ql: () => I,
    rN: () => A,
    uV: () => w,
    x0: () => Q,
    x6: () => q,
    yn: () => k,
}),
    n(539854),
    n(388685),
    n(642613);
var r = n(392711);
n(180650);
var i = n(979554),
    a = n(134432),
    o = n(358085),
    s = n(937615),
    l = n(922347),
    c = n(135483),
    u = n(212161),
    d = n(215023),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => (null == e ? void 0 : e.premiumType) != null,
    E = (e) => (null == e ? void 0 : e.purchaseType) === f.qc2.PREMIUM_PURCHASE,
    b = (e, t, n) => {
        let r;
        return I(
            e,
            (r = n ? (t ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.MOBILE) : t ? f.tuJ.PREMIUM_TIER_2 : f.tuJ.DEFAULT),
        );
    },
    y = (e, t, n) => {
        let r = b(e, t, n);
        return null == r ? "" : (0, s.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    O = (e) =>
        (0, o.isAndroid)() || (0, o.isIOS)()
            ? e
                ? f.tuJ.MOBILE_PREMIUM_TIER_2
                : f.tuJ.MOBILE
            : e
              ? f.tuJ.PREMIUM_TIER_2
              : f.tuJ.DEFAULT,
    v = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = O(!1);
        return t.reduce((e, t) => {
            var r;
            let i = I(t, n);
            return e + (null != (r = null == i ? void 0 : i.amount) ? r : 0);
        }, 0);
    },
    I = (e, t) => {
        var n, r, i;
        let a = null != (i = e.prices[t]) ? i : null;
        return null != a ? (null == (r = a.countryPrices) || null == (n = r.prices) ? void 0 : n[0]) : null;
    },
    T = {
        original: -1,
        discountPercentage: -1,
    },
    S = (e, t) => {
        let n = v(e);
        if (n <= 0) return T;
        let r = I(e, O(t));
        return null == r
            ? T
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100),
              };
    },
    A = (e) => {
        var t;
        return (null == (t = I(e, f.tuJ.DEFAULT)) ? void 0 : t.amount) === 0;
    },
    C = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) =>
                              m(p({}, e), {
                                  variantGroupStoreListingId: t.storeListingId,
                                  eligibleOffers: t.eligibleOffers,
                              }),
                          ),
                      )
                    : (e.push(t), e),
            [],
        ),
    N = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(t ? C(n) : n, "storeListingId");
    },
    R = (e, t) => {
        if (t === i.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(l.M);
            return (0, r.uniqBy)(t, "id");
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(u.H);
            return (0, r.uniqBy)(t, "id");
        }
        if (t === i.Z.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(c.k);
            return (0, r.uniqBy)(t, "id");
        }
        return [];
    },
    P = (e, t) => {
        let n = N(e, !0);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(l.M);
            return (0, r.uniqBy)(e, "id");
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(u.H);
            return (0, r.uniqBy)(e, "id");
        }
        if (t === i.Z.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(c.k);
            return (0, r.uniqBy)(e, "id");
        }
        return [];
    },
    w = (e, t) => {
        var n;
        if (null == e || "" === e) return "";
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            o = (0, a.oO)(t.size * (0, a.x_)()),
            s = null != (n = null == t ? void 0 : t.format) ? n : "png";
        if (null != r)
            return "https://".concat(r, "/app-assets/").concat(f.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
        let l = f.ANM.APPLICATION_ASSET(f.XAJ, e, s);
        return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o);
    },
    D = (e) => R(e, i.Z.AVATAR_DECORATION),
    x = (e) => P(e, i.Z.AVATAR_DECORATION),
    L = (e, t) => (0, r.uniqBy)([...D(e), ...x(t)], "id"),
    j = (e) => R(e, i.Z.PROFILE_EFFECT),
    M = (e) => P(e, i.Z.PROFILE_EFFECT),
    k = (e, t) => (0, r.uniqBy)([...j(e), ...M(t)], "id"),
    U = (e, t) => {
        let n = j(t),
            r = M(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r,
        };
    },
    G = (e) => R(e, i.Z.NAMEPLATE),
    B = (e) => P(e, i.Z.NAMEPLATE),
    Z = (e, t) => (0, r.uniqBy)([...G(e), ...B(t)], "id"),
    F = (e) => e.applicationId === f.XAJ,
    V = 3.8,
    H = (e) => V * e,
    Y = 86400000,
    W = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / Y);
    },
    K = (e) => {
        let t = d.yf[e];
        return null != t && new Date().getTime() < t;
    },
    z = (e) => {
        let t = d.i0[e];
        return null != t && new Date().getTime() < t;
    },
    q = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    X = (e, t, n) => {
        if (q(e)) return v(e);
        let r = I(e, t ? (n ? f.tuJ.MOBILE : f.tuJ.DEFAULT) : n ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.PREMIUM_TIER_2);
        return null == r ? void 0 : r.amount;
    },
    Q = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !q(e) && (n.push(r), n.length >= d.K8)) return n;
                }
        }
        return J(n);
    },
    J = (e) => {
        if (e.length < d.K8) {
            let t = d.HU.slice(0, d.K8 - e.length);
            return e.concat(t);
        }
        return e;
    },
    $ = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(d.Vt.ORB_PROFILE_BADGE === (null == t ? void 0 : t.skuId) && r);
    },
    ee = (e, t) => {
        switch (e) {
            case i.Z.AVATAR_DECORATION:
                return "avatar decoration";
            case i.Z.PROFILE_EFFECT:
                return "profile effect";
            case i.Z.NAMEPLATE:
                return "nameplate";
            case i.Z.BUNDLE:
                return "bundle";
            case i.Z.EXTERNAL_SKU:
                if (t === d.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === d.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case i.Z.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    et = (e, t) =>
        e.sort((e, n) => {
            var r, i;
            let a = b(e, t, !1),
                o = b(n, t, !1);
            return (
                (null != (r = null == a ? void 0 : a.amount) ? r : 0) -
                (null != (i = null == o ? void 0 : o.amount) ? i : 0)
            );
        }),
    en = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            var r, i, a, o;
            let s = null != (a = null == (r = e.eligibleOffers) ? void 0 : r.some((e) => n.includes(e))) && a;
            return (null != (o = null == (i = t.eligibleOffers) ? void 0 : i.some((e) => n.includes(e))) && o) - s;
        });
    };
