"use strict";
n.d(t, {
    $W: () => P,
    $b: () => H,
    Br: () => A,
    Bs: () => Z,
    CE: () => ee,
    G0: () => m,
    HF: () => W,
    MG: () => F,
    P_: () => C,
    R8: () => I,
    V6: () => Q,
    WD: () => R,
    WU: () => Y,
    Wj: () => x,
    Zu: () => X,
    aT: () => j,
    aw: () => K,
    bf: () => J,
    c7: () => q,
    f6: () => L,
    fT: () => O,
    gA: () => g,
    hU: () => B,
    l8: () => T,
    oj: () => $,
    pA: () => z,
    ps: () => M,
    rr: () => N,
    sz: () => V,
    tt: () => v,
    wo: () => G,
    x9: () => w,
    yt: () => y,
    zd: () => U,
}),
    n(321073);
var r = n(735438),
    i = n(575593),
    s = n(79387),
    a = n(723702),
    o = n(580630),
    l = n(898461),
    u = n(837015),
    d = n(203632),
    c = n(892118),
    _ = n(719986),
    f = n(623373),
    E = n(758836),
    h = n(652215),
    p = n(818348);
let m = (e) => e?.premiumType != null,
    g = (e) => e?.purchaseType === h.zF_.PREMIUM_PURCHASE,
    A = (e, t, n) =>
        y(e, n ? (t ? h.lid.MOBILE_PREMIUM_TIER_2 : h.lid.MOBILE) : t ? h.lid.PREMIUM_TIER_2 : h.lid.DEFAULT),
    I = (e, t, n) => {
        let r = A(e, t, n);
        return null == r ? "" : (0, o.$g)(r?.amount, r?.currency);
    },
    T = (e) =>
        (0, a.isAndroid)() || (0, a.isIOS)()
            ? e
                ? h.lid.MOBILE_PREMIUM_TIER_2
                : h.lid.MOBILE
            : e
              ? h.lid.PREMIUM_TIER_2
              : h.lid.DEFAULT,
    S = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = T(!1);
        return t.reduce((e, t) => {
            let r = y(t, n);
            return e + (r?.amount ?? 0);
        }, 0);
    },
    y = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    N = { original: -1, discountPercentage: -1 },
    O = (e, t) => {
        if (null == e) return N;
        let n = S(e);
        if (n <= 0) return N;
        let r = y(e, T(t));
        return null == r ? N : { original: n, discountPercentage: Math.round(((n - r.amount) / n) * 100) };
    },
    R = (e, t) => {
        let { isPremiumUser: n, discount: r } = t,
            i = y(e, h.lid.DEFAULT);
        if (null == i) return null;
        if (i.amount <= 0) return { defaultPrice: i, showDefaultPriceOnly: !0 };
        let s = y(e, h.lid.PREMIUM_TIER_2),
            a = K(e) && n ? { ...i, amount: r.original } : i,
            o = n && null != s,
            l = o ? s : a;
        return {
            defaultPrice: i,
            originalPrice: a,
            premiumPrice: s,
            finalPrice: l,
            showNitroPrice: o,
            finalPriceIsDifferent: l.amount !== a.amount,
            showDefaultPriceOnly: !1,
        };
    },
    v = (e) => y(e, h.lid.DEFAULT)?.amount === 0,
    C = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(
            t
                ? n.reduce(
                      (e, t) =>
                          null != t && t.type === i.R.VARIANTS_GROUP && null != t.variants
                              ? (0, r.concat)(
                                    e,
                                    t.variants.map((e) => ({
                                        ...e,
                                        variantGroupStoreListingId: t.storeListingId,
                                        eligibleOffers: t.eligibleOffers,
                                    })),
                                )
                              : (e.push(t), e),
                      [],
                  )
                : n,
            "storeListingId",
        );
    },
    b = (e, t) => {
        if (t === i.R.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(l.T);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.R.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(u.F);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.R.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(d.C3);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.R.PROFILE_FRAME) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(c.s);
            return (0, r.uniqBy)(t, "skuId");
        }
        return [];
    },
    D = (e, t) => {
        let n = C(e, !0);
        if (t === i.R.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(l.T);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(u.F);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(d.C3);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.PROFILE_FRAME) {
            let e = (0, r.flatMap)(n, "items").filter(c.s);
            return (0, r.uniqBy)(e, "skuId");
        }
        return [];
    },
    L = (e) => (null != e ? _.M.fromServer(e) : void 0),
    w = (e) => b(e, i.R.AVATAR_DECORATION),
    M = (e, t) => (0, r.uniqBy)([...w(e), ...D(t, i.R.AVATAR_DECORATION)], "skuId"),
    P = (e) => b(e, i.R.NAMEPLATE),
    U = (e, t) => (0, r.uniqBy)([...P(e), ...D(t, i.R.NAMEPLATE)], "skuId"),
    k = (e) => b(e, i.R.PROFILE_EFFECT),
    x = (e) => D(e, i.R.PROFILE_EFFECT),
    G = (e, t) => (0, r.uniqBy)([...k(e), ...x(t)], "skuId"),
    V = (e, t) => {
        let n = k(t),
            r = x(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: r };
    },
    F = (e, t) => (0, r.uniqBy)([...b(e, i.R.PROFILE_FRAME), ...D(t, i.R.PROFILE_FRAME)], "skuId"),
    B = (e) => e.applicationId === h.FYj,
    H = (e) => 3.8 * e,
    Y = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    W = (e) => null != e && Y(e) <= E.x3,
    j = (e) => {
        let t = E.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    K = (e) => e?.type === i.R.BUNDLE,
    $ = (e) => {
        if (null != e) return e.type === i.R.BUNDLE ? i.R.BUNDLE : e.items?.[0]?.type;
    },
    z = (e) => {
        let {
                selectedSkuPricePreview: t,
                paymentSourceId: n,
                selectedSkuId: r,
                skuPricePreviewsById: i,
                skusById: a,
            } = e,
            o = t ?? (null != n && null != r ? i[r]?.[s.B] : null),
            l = o?.invoice_items?.[0]?.unit_price,
            u = null != l ? { amount: l.amount, currency: l.currency } : void 0;
        if (null == u && null != r) {
            let e = a[r];
            e?.price != null && (u = { amount: e.price.amount, currency: e.price.currency });
        }
        return u;
    };
p.Yr.KZT, p.Yr.NGN, p.Yr.EGP;
let q = (e, t, n) => {
        if (K(e)) return S(e);
        let r = y(e, t ? (n ? h.lid.MOBILE : h.lid.DEFAULT) : n ? h.lid.MOBILE_PREMIUM_TIER_2 : h.lid.PREMIUM_TIER_2);
        return r?.amount;
    },
    X = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(E.Dp.ORB_PROFILE_BADGE === t?.skuId && r);
    },
    Q = (e, t) => {
        switch (e) {
            case i.R.AVATAR_DECORATION:
                return "avatar decoration";
            case i.R.PROFILE_EFFECT:
                return "profile effect";
            case i.R.NAMEPLATE:
                return "nameplate";
            case i.R.BUNDLE:
                return "bundle";
            case i.R.EXTERNAL_SKU:
                if (t === E.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === E.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case i.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    J = (e, t, n) =>
        e.sort((e, r) => {
            let i = n ? (0, f.CW)({ product: e, isPremiumUser: t }) : A(e, t, !1),
                s = n ? (0, f.CW)({ product: r, isPremiumUser: t }) : A(r, t, !1);
            return (i?.amount ?? 0) - (s?.amount ?? 0);
        }),
    Z = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let r = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - r;
        });
    },
    ee = (e) => e.filter((e) => !e.isCategoryReward);
