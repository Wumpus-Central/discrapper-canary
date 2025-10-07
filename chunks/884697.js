n.d(t, {
    $2: () => y,
    Ad: () => k,
    BH: () => R,
    Cs: () => D,
    G1: () => b,
    IC: () => q,
    OT: () => Q,
    QG: () => j,
    Qf: () => es,
    Vw: () => I,
    WW: () => $,
    XM: () => T,
    XS: () => Z,
    Y: () => W,
    Yq: () => J,
    bl: () => V,
    eu: () => et,
    f_: () => N,
    fp: () => O,
    gc: () => S,
    hC: () => eo,
    iC: () => G,
    jT: () => H,
    jm: () => ea,
    mO: () => K,
    ne: () => ei,
    qS: () => v,
    ql: () => C,
    rN: () => P,
    uV: () => M,
    x0: () => en,
    x6: () => ee,
    yn: () => F,
}),
    n(539854),
    n(388685),
    n(642613);
var r = n(392711),
    i = n(979554),
    a = n(134432),
    o = n(358085),
    s = n(937615),
    l = n(922347),
    c = n(135483),
    u = n(212161),
    d = n(889577),
    f = n(215023),
    _ = n(981631),
    p = n(231338);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = (e) => (null == e ? void 0 : e.premiumType) != null,
    y = (e) => e === f.cv,
    O = (e) => y(null == e ? void 0 : e.categorySkuId),
    v = (e) => (null == e ? void 0 : e.purchaseType) === _.qc2.PREMIUM_PURCHASE,
    I = (e, t, n) => {
        let r;
        return C(
            e,
            (r = n ? (t ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE) : t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT),
        );
    },
    T = (e, t, n) => {
        let r = I(e, t, n);
        return null == r ? "" : (0, s.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    S = (e) =>
        (0, o.isAndroid)() || (0, o.isIOS)()
            ? e
                ? _.tuJ.MOBILE_PREMIUM_TIER_2
                : _.tuJ.MOBILE
            : e
              ? _.tuJ.PREMIUM_TIER_2
              : _.tuJ.DEFAULT,
    A = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = S(!1);
        return t.reduce((e, t) => {
            var r;
            let i = C(t, n);
            return e + (null != (r = null == i ? void 0 : i.amount) ? r : 0);
        }, 0);
    },
    C = (e, t) => {
        var n, r, i;
        let a = null != (i = e.prices[t]) ? i : null;
        return null != a ? (null == (r = a.countryPrices) || null == (n = r.prices) ? void 0 : n[0]) : null;
    },
    N = {
        original: -1,
        discountPercentage: -1,
    },
    R = (e, t) => {
        let n = A(e);
        if (n <= 0) return N;
        let r = C(e, S(t));
        return null == r
            ? N
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100),
              };
    },
    P = (e) => {
        var t;
        return (null == (t = C(e, _.tuJ.DEFAULT)) ? void 0 : t.amount) === 0;
    },
    w = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) =>
                              E(m({}, e), {
                                  variantGroupStoreListingId: t.storeListingId,
                                  eligibleOffers: t.eligibleOffers,
                              }),
                          ),
                      )
                    : (e.push(t), e),
            [],
        ),
    D = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(t ? w(n) : n, "storeListingId");
    },
    L = (e, t) => {
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
    x = (e, t) => {
        let n = D(e, !0);
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
    M = (e, t) => {
        var n;
        if (null == e || "" === e) return "";
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            o = (0, a.oO)(t.size * (0, a.x_)()),
            s = null != (n = null == t ? void 0 : t.format) ? n : "png";
        if (null != r)
            return "https://".concat(r, "/app-assets/").concat(_.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
        let l = _.ANM.APPLICATION_ASSET(_.XAJ, e, s);
        return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o);
    },
    j = (e) => (null != e ? d.X.fromServer(e) : void 0),
    k = (e) => L(e, i.Z.AVATAR_DECORATION),
    U = (e) => x(e, i.Z.AVATAR_DECORATION),
    G = (e, t) => (0, r.uniqBy)([...k(e), ...U(t)], "id"),
    B = (e) => L(e, i.Z.PROFILE_EFFECT),
    Z = (e) => x(e, i.Z.PROFILE_EFFECT),
    F = (e, t) => (0, r.uniqBy)([...B(e), ...Z(t)], "id"),
    V = (e, t) => {
        let n = B(t),
            r = Z(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r,
        };
    },
    H = (e) => L(e, i.Z.NAMEPLATE),
    Y = (e) => x(e, i.Z.NAMEPLATE),
    W = (e, t) => (0, r.uniqBy)([...H(e), ...Y(t)], "id"),
    K = (e) => e.applicationId === _.XAJ,
    z = 3.8,
    q = (e) => z * e,
    X = 86400000,
    Q = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / X);
    },
    J = (e) => {
        let t = f.yf[e];
        return null != t && new Date().getTime() < t;
    },
    $ = (e) => {
        let t = f.i0[e];
        return null != t && new Date().getTime() < t;
    },
    ee = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    et =
        (p.pK.KZT,
        p.pK.NGN,
        p.pK.EGP,
        (e, t, n) => {
            if (ee(e)) return A(e);
            let r = C(
                e,
                t ? (n ? _.tuJ.MOBILE : _.tuJ.DEFAULT) : n ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.PREMIUM_TIER_2,
            );
            return null == r ? void 0 : r.amount;
        }),
    en = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !ee(e) && (n.push(r), n.length >= f.K8)) return n;
                }
        }
        return er(n);
    },
    er = (e) => {
        if (e.length < f.K8) {
            let t = f.HU.slice(0, f.K8 - e.length);
            return e.concat(t);
        }
        return e;
    },
    ei = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(f.Vt.ORB_PROFILE_BADGE === (null == t ? void 0 : t.skuId) && r);
    },
    ea = (e, t) => {
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
                if (t === f.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === f.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case i.Z.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    eo = (e, t) =>
        e.sort((e, n) => {
            var r, i;
            let a = I(e, t, !1),
                o = I(n, t, !1);
            return (
                (null != (r = null == a ? void 0 : a.amount) ? r : 0) -
                (null != (i = null == o ? void 0 : o.amount) ? i : 0)
            );
        }),
    es = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            var r, i, a, o;
            let s = null != (a = null == (r = e.eligibleOffers) ? void 0 : r.some((e) => n.includes(e))) && a;
            return (null != (o = null == (i = t.eligibleOffers) ? void 0 : i.some((e) => n.includes(e))) && o) - s;
        });
    };
