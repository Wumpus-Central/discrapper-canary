n.d(t, {
    $2: () => O,
    $W: () => en,
    Ad: () => U,
    BH: () => P,
    Cs: () => L,
    G1: () => y,
    IC: () => X,
    OT: () => J,
    QG: () => k,
    Qf: () => eu,
    Vw: () => T,
    WW: () => ee,
    XM: () => S,
    XS: () => F,
    Y: () => K,
    Yq: () => $,
    bl: () => H,
    eu: () => ei,
    f_: () => R,
    fp: () => v,
    gc: () => A,
    hC: () => ec,
    iC: () => B,
    jT: () => Y,
    jm: () => el,
    mO: () => z,
    ne: () => es,
    qS: () => I,
    ql: () => N,
    rN: () => w,
    uV: () => j,
    v5: () => er,
    x0: () => ea,
    x6: () => et,
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
    _ = n(215023),
    p = n(981631),
    h = n(231338);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = (e) => (null == e ? void 0 : e.premiumType) != null,
    O = (e) => e === _.cv,
    v = (e) => O(null == e ? void 0 : e.categorySkuId),
    I = (e) => (null == e ? void 0 : e.purchaseType) === p.qc2.PREMIUM_PURCHASE,
    T = (e, t, n) => {
        let r;
        return N(
            e,
            (r = n ? (t ? p.tuJ.MOBILE_PREMIUM_TIER_2 : p.tuJ.MOBILE) : t ? p.tuJ.PREMIUM_TIER_2 : p.tuJ.DEFAULT),
        );
    },
    S = (e, t, n) => {
        let r = T(e, t, n);
        return null == r ? "" : (0, l.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    A = (e) =>
        (0, s.isAndroid)() || (0, s.isIOS)()
            ? e
                ? p.tuJ.MOBILE_PREMIUM_TIER_2
                : p.tuJ.MOBILE
            : e
              ? p.tuJ.PREMIUM_TIER_2
              : p.tuJ.DEFAULT,
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
        return (null == (t = N(e, p.tuJ.DEFAULT)) ? void 0 : t.amount) === 0;
    },
    D = (e) =>
        e.reduce(
            (e, t) =>
                null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants
                    ? (0, r.concat)(
                          e,
                          t.variants.map((e) =>
                              b(g({}, e), {
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
            return (0, r.uniqBy)(t, "id");
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(d.H);
            return (0, r.uniqBy)(t, "id");
        }
        if (t === i.Z.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(u.k);
            return (0, r.uniqBy)(t, "id");
        }
        return [];
    },
    M = (e, t) => {
        let n = L(e, !0);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(c.M);
            return (0, r.uniqBy)(e, "id");
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(d.H);
            return (0, r.uniqBy)(e, "id");
        }
        if (t === i.Z.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(u.k);
            return (0, r.uniqBy)(e, "id");
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
            return "https://".concat(r, "/app-assets/").concat(p.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
        let l = p.ANM.APPLICATION_ASSET(p.XAJ, e, s);
        return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o);
    },
    k = (e) => (null != e ? f.X.fromServer(e) : void 0),
    U = (e) => x(e, i.Z.AVATAR_DECORATION),
    G = (e) => M(e, i.Z.AVATAR_DECORATION),
    B = (e, t) => (0, r.uniqBy)([...U(e), ...G(t)], "id"),
    Z = (e) => x(e, i.Z.PROFILE_EFFECT),
    F = (e) => M(e, i.Z.PROFILE_EFFECT),
    V = (e, t) => (0, r.uniqBy)([...Z(e), ...F(t)], "id"),
    H = (e, t) => {
        let n = Z(t),
            r = F(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r,
        };
    },
    Y = (e) => x(e, i.Z.NAMEPLATE),
    W = (e) => M(e, i.Z.NAMEPLATE),
    K = (e, t) => (0, r.uniqBy)([...Y(e), ...W(t)], "id"),
    z = (e) => e.applicationId === p.XAJ,
    q = 3.8,
    X = (e) => q * e,
    Q = 86400000,
    J = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / Q);
    },
    $ = (e) => {
        let t = _.yf[e];
        return null != t && new Date().getTime() < t;
    },
    ee = (e) => {
        let t = _.i0[e];
        return null != t && new Date().getTime() < t;
    },
    et = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    en = (e) => {
        var t, n;
        if (null != e)
            return e.type === i.Z.BUNDLE ? i.Z.BUNDLE : null == (n = e.items) || null == (t = n[0]) ? void 0 : t.type;
    },
    er = (e) => {
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
    ei =
        (h.pK.KZT,
        h.pK.NGN,
        h.pK.EGP,
        (e, t, n) => {
            if (et(e)) return C(e);
            let r = N(
                e,
                t ? (n ? p.tuJ.MOBILE : p.tuJ.DEFAULT) : n ? p.tuJ.MOBILE_PREMIUM_TIER_2 : p.tuJ.PREMIUM_TIER_2,
            );
            return null == r ? void 0 : r.amount;
        }),
    ea = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !et(e) && (n.push(r), n.length >= _.K8)) return n;
                }
        }
        return eo(n);
    },
    eo = (e) => {
        if (e.length < _.K8) {
            let t = _.HU.slice(0, _.K8 - e.length);
            return e.concat(t);
        }
        return e;
    },
    es = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(_.Vt.ORB_PROFILE_BADGE === (null == t ? void 0 : t.skuId) && r);
    },
    el = (e, t) => {
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
    ec = (e, t) =>
        e.sort((e, n) => {
            var r, i;
            let a = T(e, t, !1),
                o = T(n, t, !1);
            return (
                (null != (r = null == a ? void 0 : a.amount) ? r : 0) -
                (null != (i = null == o ? void 0 : o.amount) ? i : 0)
            );
        }),
    eu = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            var r, i, a, o;
            let s = null != (a = null == (r = e.eligibleOffers) ? void 0 : r.some((e) => n.includes(e))) && a;
            return (null != (o = null == (i = t.eligibleOffers) ? void 0 : i.some((e) => n.includes(e))) && o) - s;
        });
    };
