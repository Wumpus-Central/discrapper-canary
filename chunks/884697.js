n.d(t, {
    $2: () => v,
    $W: () => et,
    Ad: () => U,
    BH: () => P,
    Cs: () => L,
    G1: () => O,
    IC: () => X,
    OT: () => J,
    QG: () => j,
    Qf: () => ec,
    Vw: () => T,
    XM: () => S,
    XS: () => F,
    Y: () => K,
    Yq: () => $,
    bl: () => H,
    eu: () => er,
    f_: () => R,
    gc: () => A,
    hC: () => el,
    iC: () => B,
    jT: () => Y,
    jm: () => es,
    mO: () => z,
    ne: () => eo,
    qS: () => I,
    ql: () => N,
    rN: () => w,
    uV: () => k,
    v5: () => en,
    x0: () => ei,
    x6: () => ee,
    yn: () => V,
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
    _ = n(27123),
    p = n(215023),
    h = n(981631),
    m = n(231338);
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
    v = (e) => e === p.cv,
    I = (e) => (null == e ? void 0 : e.purchaseType) === h.qc2.PREMIUM_PURCHASE,
    T = (e, t, n) => {
        let r;
        return N(
            e,
            (r = n ? (t ? h.tuJ.MOBILE_PREMIUM_TIER_2 : h.tuJ.MOBILE) : t ? h.tuJ.PREMIUM_TIER_2 : h.tuJ.DEFAULT),
        );
    },
    S = (e, t, n) => {
        let r = T(e, t, n);
        return null == r ? "" : (0, l.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    A = (e) =>
        (0, s.isAndroid)() || (0, s.isIOS)()
            ? e
                ? h.tuJ.MOBILE_PREMIUM_TIER_2
                : h.tuJ.MOBILE
            : e
              ? h.tuJ.PREMIUM_TIER_2
              : h.tuJ.DEFAULT,
    C = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = A(!1);
        return t.reduce((e, t) => {
            var r;
            let i = N(t, n);
            return e + (null != (r = null == i ? void 0 : i.amount) ? r : 0);
        }, 0);
    },
    N = (e, t) => {
        var n, r, i;
        let a = null != (i = e.prices[t]) ? i : null;
        return null != a ? (null == (r = a.countryPrices) || null == (n = r.prices) ? void 0 : n[0]) : null;
    },
    R = {
        original: -1,
        discountPercentage: -1,
    },
    P = (e, t) => {
        let n = C(e);
        if (n <= 0) return R;
        let r = N(e, A(t));
        return null == r
            ? R
            : {
                  original: n,
                  discountPercentage: Math.round(((n - r.amount) / n) * 100),
              };
    },
    w = (e) => {
        var t;
        return (null == (t = N(e, h.tuJ.DEFAULT)) ? void 0 : t.amount) === 0;
    },
    D = (e) =>
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
    L = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(t ? D(n) : n, "storeListingId");
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
    M = (e, t) => {
        let n = L(e, !0);
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
    k = (e, t) => {
        var n;
        if (null == e || "" === e) return "";
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            o = (0, a.oO)(t.size * (0, a.x_)()),
            s = null != (n = null == t ? void 0 : t.format) ? n : "png";
        if (null != r)
            return "https://".concat(r, "/app-assets/").concat(h.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
        let l = h.ANM.APPLICATION_ASSET(h.XAJ, e, s);
        return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o);
    },
    j = (e) => (null != e ? f.X.fromServer(e) : void 0),
    U = (e) => x(e, i.Z.AVATAR_DECORATION),
    G = (e) => M(e, i.Z.AVATAR_DECORATION),
    B = (e, t) => (0, r.uniqBy)([...U(e), ...G(t)], "skuId"),
    Z = (e) => x(e, i.Z.PROFILE_EFFECT),
    F = (e) => M(e, i.Z.PROFILE_EFFECT),
    V = (e, t) => (0, r.uniqBy)([...Z(e), ...F(t)], "skuId"),
    H = (e, t) => {
        let n = Z(t),
            r = F(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return {
            purchased: n,
            shopPreviews: r,
        };
    },
    Y = (e) => x(e, i.Z.NAMEPLATE),
    W = (e) => M(e, i.Z.NAMEPLATE),
    K = (e, t) => (0, r.uniqBy)([...Y(e), ...W(t)], "skuId"),
    z = (e) => e.applicationId === h.XAJ,
    q = 3.8,
    X = (e) => q * e,
    Q = 86400000,
    J = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / Q);
    },
    $ = (e) => {
        let t = p.yf[e];
        return null != t && new Date().getTime() < t;
    },
    ee = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    et = (e) => {
        var t, n;
        if (null != e)
            return e.type === i.Z.BUNDLE ? i.Z.BUNDLE : null == (n = e.items) || null == (t = n[0]) ? void 0 : t.type;
    },
    en = (e) => {
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
            _ = null != f ? u(f.amount, f.currency) : void 0;
        if (null == _ && null != s) {
            let e = c[s];
            (null == e ? void 0 : e.price) != null && (_ = u(e.price.amount, e.price.currency));
        }
        return _;
    },
    er =
        (m.pK.KZT,
        m.pK.NGN,
        m.pK.EGP,
        (e, t, n) => {
            if (ee(e)) return C(e);
            let r = N(
                e,
                t ? (n ? h.tuJ.MOBILE : h.tuJ.DEFAULT) : n ? h.tuJ.MOBILE_PREMIUM_TIER_2 : h.tuJ.PREMIUM_TIER_2,
            );
            return null == r ? void 0 : r.amount;
        }),
    ei = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !ee(e) && (n.push(r), n.length >= p.K8)) return n;
                }
        }
        return ea(n);
    },
    ea = (e) => {
        if (e.length < p.K8) {
            let t = p.HU.slice(0, p.K8 - e.length);
            return e.concat(t);
        }
        return e;
    },
    eo = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(p.Vt.ORB_PROFILE_BADGE === (null == t ? void 0 : t.skuId) && r);
    },
    es = (e, t) => {
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
                if (t === p.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === p.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case i.Z.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    el = (e, t, n) =>
        e.sort((e, r) => {
            var i, a;
            let o = n
                    ? (0, _.T4)({
                          product: e,
                          isPremiumUser: t,
                      })
                    : T(e, t, !1),
                s = n
                    ? (0, _.T4)({
                          product: r,
                          isPremiumUser: t,
                      })
                    : T(r, t, !1);
            return (
                (null != (i = null == o ? void 0 : o.amount) ? i : 0) -
                (null != (a = null == s ? void 0 : s.amount) ? a : 0)
            );
        }),
    ec = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            var r, i, a, o;
            let s = null != (a = null == (r = e.eligibleOffers) ? void 0 : r.some((e) => n.includes(e))) && a;
            return (null != (o = null == (i = t.eligibleOffers) ? void 0 : i.some((e) => n.includes(e))) && o) - s;
        });
    };
