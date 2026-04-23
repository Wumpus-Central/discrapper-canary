"use strict";
n.d(t, {
    $W: () => P,
    $b: () => H,
    Br: () => A,
    Bs: () => J,
    CE: () => ee,
    G0: () => m,
    HF: () => Y,
    MG: () => V,
    P_: () => R,
    R8: () => I,
    V6: () => Q,
    WD: () => C,
    WU: () => j,
    Wj: () => U,
    Zu: () => X,
    aT: () => W,
    aw: () => K,
    bf: () => Z,
    c7: () => q,
    f6: () => L,
    fT: () => v,
    gA: () => g,
    hU: () => B,
    l8: () => T,
    oj: () => $,
    pA: () => z,
    ps: () => M,
    rr: () => N,
    sz: () => F,
    tt: () => O,
    wo: () => G,
    x9: () => w,
    yt: () => y,
    zd: () => x,
}),
    n(321073);
var r = n(735438),
    i = n(575593),
    s = n(79387),
    a = n(723702),
    o = n(580630),
    l = n(898461),
    u = n(837015),
    c = n(203632),
    d = n(892118),
    _ = n(719986),
    f = n(623373),
    p = n(758836),
    h = n(652215),
    E = n(818348);
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
    v = (e, t) => {
        if (null == e) return N;
        let n = S(e);
        if (n <= 0) return N;
        let r = y(e, T(t));
        return null == r ? N : { original: n, discountPercentage: Math.round(((n - r.amount) / n) * 100) };
    },
    C = (e, t) => {
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
    O = (e) => y(e, h.lid.DEFAULT)?.amount === 0,
    R = (e, t) => {
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
            let t = (0, r.flatMap)([...e.values()], "items").filter(c.C3);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.R.PROFILE_FRAME) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(d.s);
            return (0, r.uniqBy)(t, "skuId");
        }
        return [];
    },
    D = (e, t) => {
        let n = R(e, !0);
        if (t === i.R.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(l.T);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(u.F);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(c.C3);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.PROFILE_FRAME) {
            let e = (0, r.flatMap)(n, "items").filter(d.s);
            return (0, r.uniqBy)(e, "skuId");
        }
        return [];
    },
    L = (e) => (null != e ? _.M.fromServer(e) : void 0),
    w = (e) => b(e, i.R.AVATAR_DECORATION),
    M = (e, t) => (0, r.uniqBy)([...w(e), ...D(t, i.R.AVATAR_DECORATION)], "skuId"),
    P = (e) => b(e, i.R.NAMEPLATE),
    x = (e, t) => (0, r.uniqBy)([...P(e), ...D(t, i.R.NAMEPLATE)], "skuId"),
    k = (e) => b(e, i.R.PROFILE_EFFECT),
    U = (e) => D(e, i.R.PROFILE_EFFECT),
    G = (e, t) => (0, r.uniqBy)([...k(e), ...U(t)], "skuId"),
    F = (e, t) => {
        let n = k(t),
            r = U(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: r };
    },
    V = (e, t) => (0, r.uniqBy)([...b(e, i.R.PROFILE_FRAME), ...D(t, i.R.PROFILE_FRAME)], "skuId"),
    B = (e) => e.applicationId === h.FYj,
    H = (e) => 3.8 * e,
    j = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    Y = (e) => null != e && j(e) <= p.x3,
    W = (e) => {
        let t = p.Tq[e];
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
E.Yr.KZT, E.Yr.NGN, E.Yr.EGP;
let q = (e, t, n) => {
        if (K(e)) return S(e);
        let r = y(e, t ? (n ? h.lid.MOBILE : h.lid.DEFAULT) : n ? h.lid.MOBILE_PREMIUM_TIER_2 : h.lid.PREMIUM_TIER_2);
        return r?.amount;
    },
    X = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(p.Dp.ORB_PROFILE_BADGE === t?.skuId && r);
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
                if (t === p.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === p.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case i.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    Z = (e, t, n) =>
        e.sort((e, r) => {
            let i = n ? (0, f.CW)({ product: e, isPremiumUser: t }) : A(e, t, !1),
                s = n ? (0, f.CW)({ product: r, isPremiumUser: t }) : A(r, t, !1);
            return (i?.amount ?? 0) - (s?.amount ?? 0);
        }),
    J = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let r = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - r;
        });
    },
    ee = (e) => e.filter((e) => !e.isCategoryReward);
