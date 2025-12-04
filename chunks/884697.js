n.d(t, {
    $W: () => ee,
    Ad: () => k,
    BH: () => P,
    Cs: () => D,
    G1: () => O,
    IC: () => q,
    OT: () => X,
    QG: () => M,
    Qf: () => el,
    Vw: () => S,
    XM: () => I,
    Y: () => W,
    Yq: () => J,
    bl: () => V,
    eu: () => en,
    f_: () => N,
    gc: () => T,
    hC: () => es,
    iC: () => G,
    jT: () => H,
    jm: () => eo,
    mO: () => K,
    ne: () => ea,
    qS: () => v,
    ql: () => C,
    rN: () => R,
    uV: () => j,
    v5: () => et,
    wO: () => ec,
    x0: () => er,
    x6: () => $,
    yn: () => F,
}),
    n(539854),
    n(388685),
    n(642613);
var r = n(392711),
    i = n(979554),
    a = n(134432),
    o = n(855775),
    s = n(358085),
    l = n(937615),
    c = n(922347),
    u = n(135483),
    d = n(212161),
    f = n(889577),
    p = n(27123),
    _ = n(215023),
    m = n(981631),
    h = n(231338);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (e) => (null == e ? void 0 : e.premiumType) != null,
    v = (e) => (null == e ? void 0 : e.purchaseType) === m.qc2.PREMIUM_PURCHASE,
    S = (e, t, n) => {
        let r;
        return C(
            e,
            (r = n ? (t ? m.tuJ.MOBILE_PREMIUM_TIER_2 : m.tuJ.MOBILE) : t ? m.tuJ.PREMIUM_TIER_2 : m.tuJ.DEFAULT),
        );
    },
    I = (e, t, n) => {
        let r = S(e, t, n);
        return null == r ? "" : (0, l.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    T = (e) =>
        (0, s.isAndroid)() || (0, s.isIOS)()
            ? e
                ? m.tuJ.MOBILE_PREMIUM_TIER_2
                : m.tuJ.MOBILE
            : e
              ? m.tuJ.PREMIUM_TIER_2
              : m.tuJ.DEFAULT,
    A = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = T(!1);
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
    P = (e, t) => {
        let n = A(e);
        if (n <= 0) return N;
        let r = C(e, T(t));
        return null == r
            ? N
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100),
              };
    },
    R = (e) => {
        var t;
        return (null == (t = C(e, m.tuJ.DEFAULT)) ? void 0 : t.amount) === 0;
    },
    w = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) =>
                              y(E({}, e), {
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
    x = (e, t) => {
        if (t === i.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(c.M);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(d.H);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.Z.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(u.k);
            return (0, r.uniqBy)(t, "skuId");
        }
        return [];
    },
    L = (e, t) => {
        let n = D(e, !0);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(c.M);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(d.H);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.Z.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(u.k);
            return (0, r.uniqBy)(e, "skuId");
        }
        return [];
    },
    j = (e, t) => {
        var n;
        if (null == e || "" === e) return "";
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            o = (0, a.oO)(t.size * (0, a.x_)()),
            s = null != (n = null == t ? void 0 : t.format) ? n : "png";
        if (null != r)
            return "https://".concat(r, "/app-assets/").concat(m.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
        let l = m.ANM.APPLICATION_ASSET(m.XAJ, e, s);
        return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o);
    },
    M = (e) => (null != e ? f.X.fromServer(e) : void 0),
    k = (e) => x(e, i.Z.AVATAR_DECORATION),
    U = (e) => L(e, i.Z.AVATAR_DECORATION),
    G = (e, t) => (0, r.uniqBy)([...k(e), ...U(t)], "skuId"),
    Z = (e) => x(e, i.Z.PROFILE_EFFECT),
    B = (e) => L(e, i.Z.PROFILE_EFFECT),
    F = (e, t) => (0, r.uniqBy)([...Z(e), ...B(t)], "skuId"),
    V = (e, t) => {
        let n = Z(t),
            r = B(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return {
            purchased: n,
            shopPreviews: r,
        };
    },
    H = (e) => x(e, i.Z.NAMEPLATE),
    Y = (e) => L(e, i.Z.NAMEPLATE),
    W = (e, t) => (0, r.uniqBy)([...H(e), ...Y(t)], "skuId"),
    K = (e) => e.applicationId === m.XAJ,
    z = 3.8,
    q = (e) => z * e,
    Q = 86400000,
    X = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / Q);
    },
    J = (e) => {
        let t = _.yf[e];
        return null != t && new Date().getTime() < t;
    },
    $ = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    ee = (e) => {
        var t, n;
        if (null != e)
            return e.type === i.Z.BUNDLE ? i.Z.BUNDLE : null == (n = e.items) || null == (t = n[0]) ? void 0 : t.type;
    },
    et = (e) => {
        var t, n, r;
        let {
                selectedSkuPricePreview: i,
                paymentSourceId: a,
                selectedSkuId: s,
                skuPricePreviewsById: l,
                skusById: c,
                formatPrice: u,
            } = e,
            d = null != i ? i : null != a && null != s ? (null == (t = l[s]) ? void 0 : t[o.c]) : null,
            f = null == d || null == (r = d.invoice_items) || null == (n = r[0]) ? void 0 : n.unit_price,
            p = null != f ? u(f.amount, f.currency) : void 0;
        if (null == p && null != s) {
            let e = c[s];
            (null == e ? void 0 : e.price) != null && (p = u(e.price.amount, e.price.currency));
        }
        return p;
    },
    en =
        (h.pK.KZT,
        h.pK.NGN,
        h.pK.EGP,
        (e, t, n) => {
            if ($(e)) return A(e);
            let r = C(
                e,
                t ? (n ? m.tuJ.MOBILE : m.tuJ.DEFAULT) : n ? m.tuJ.MOBILE_PREMIUM_TIER_2 : m.tuJ.PREMIUM_TIER_2,
            );
            return null == r ? void 0 : r.amount;
        }),
    er = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !$(e) && (n.push(r), n.length >= _.K8)) return n;
                }
        }
        return ei(n);
    },
    ei = (e) => {
        if (e.length < _.K8) {
            let t = _.HU.slice(0, _.K8 - e.length);
            return e.concat(t);
        }
        return e;
    },
    ea = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(_.Vt.ORB_PROFILE_BADGE === (null == t ? void 0 : t.skuId) && r);
    },
    eo = (e, t) => {
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
                if (t === _.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === _.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case i.Z.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    es = (e, t, n) =>
        e.sort((e, r) => {
            var i, a;
            let o = n
                    ? (0, p.T4)({
                          product: e,
                          isPremiumUser: t,
                      })
                    : S(e, t, !1),
                s = n
                    ? (0, p.T4)({
                          product: r,
                          isPremiumUser: t,
                      })
                    : S(r, t, !1);
            return (
                (null != (i = null == o ? void 0 : o.amount) ? i : 0) -
                (null != (a = null == s ? void 0 : s.amount) ? a : 0)
            );
        }),
    el = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            var r, i, a, o;
            let s = null != (a = null == (r = e.eligibleOffers) ? void 0 : r.some((e) => n.includes(e))) && a;
            return (null != (o = null == (i = t.eligibleOffers) ? void 0 : i.some((e) => n.includes(e))) && o) - s;
        });
    },
    ec = (e) => e.filter((e) => !e.isCategoryReward);
