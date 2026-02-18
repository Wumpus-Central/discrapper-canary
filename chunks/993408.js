"use strict";
n.d(t, {
    $W: () => G,
    $b: () => j,
    Br: () => g,
    Bs: () => et,
    CE: () => en,
    G0: () => m,
    HF: () => K,
    P_: () => b,
    R8: () => A,
    V6: () => J,
    WU: () => W,
    Zu: () => Q,
    aT: () => z,
    aw: () => $,
    bf: () => ee,
    c7: () => X,
    f6: () => D,
    fT: () => v,
    gA: () => E,
    hU: () => B,
    l8: () => I,
    oj: () => q,
    pA: () => Z,
    ps: () => x,
    rr: () => y,
    sz: () => U,
    tt: () => N,
    wo: () => k,
    x9: () => L,
    yt: () => S,
    zd: () => V,
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
    d = n(719986),
    _ = n(623373),
    f = n(758836),
    p = n(652215),
    h = n(818348);
let m = (e) => e?.premiumType != null,
    E = (e) => e?.purchaseType === p.zF_.PREMIUM_PURCHASE,
    g = (e, t, n) => {
        let r;
        return S(
            e,
            (r = n ? (t ? p.lid.MOBILE_PREMIUM_TIER_2 : p.lid.MOBILE) : t ? p.lid.PREMIUM_TIER_2 : p.lid.DEFAULT),
        );
    },
    A = (e, t, n) => {
        let r = g(e, t, n);
        return null == r ? "" : (0, o.$g)(r?.amount, r?.currency);
    },
    I = (e) =>
        (0, a.isAndroid)() || (0, a.isIOS)()
            ? e
                ? p.lid.MOBILE_PREMIUM_TIER_2
                : p.lid.MOBILE
            : e
              ? p.lid.PREMIUM_TIER_2
              : p.lid.DEFAULT,
    T = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = I(!1);
        return t.reduce((e, t) => {
            let r = S(t, n);
            return e + (r?.amount ?? 0);
        }, 0);
    },
    S = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    y = { original: -1, discountPercentage: -1 },
    v = (e, t) => {
        if (null == e) return y;
        let n = T(e);
        if (n <= 0) return y;
        let r = S(e, I(t));
        return null == r ? y : { original: n, discountPercentage: Math.round(((n - r.amount) / n) * 100) };
    },
    N = (e) => S(e, p.lid.DEFAULT)?.amount === 0,
    C = (e) =>
        e.reduce(
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
        ),
    b = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(t ? C(n) : n, "storeListingId");
    },
    R = (e, t) => {
        if (t === i.R.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(l.T);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.R.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(c.C);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === i.R.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(u.F);
            return (0, r.uniqBy)(t, "skuId");
        }
        return [];
    },
    O = (e, t) => {
        let n = b(e, !0);
        if (t === i.R.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(l.T);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(c.C);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === i.R.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(u.F);
            return (0, r.uniqBy)(e, "skuId");
        }
        return [];
    },
    D = (e) => (null != e ? d.M.fromServer(e) : void 0),
    L = (e) => R(e, i.R.AVATAR_DECORATION),
    w = (e) => O(e, i.R.AVATAR_DECORATION),
    x = (e, t) => (0, r.uniqBy)([...L(e), ...w(t)], "skuId"),
    M = (e) => R(e, i.R.PROFILE_EFFECT),
    P = (e) => O(e, i.R.PROFILE_EFFECT),
    k = (e, t) => (0, r.uniqBy)([...M(e), ...P(t)], "skuId"),
    U = (e, t) => {
        let n = M(t),
            r = P(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: r };
    },
    G = (e) => R(e, i.R.NAMEPLATE),
    F = (e) => O(e, i.R.NAMEPLATE),
    V = (e, t) => (0, r.uniqBy)([...G(e), ...F(t)], "skuId"),
    B = (e) => e.applicationId === p.FYj,
    H = 3.8,
    j = (e) => H * e,
    Y = 864e5,
    W = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / Y);
    },
    K = (e) => null != e && W(e) <= f.x3,
    z = (e) => {
        let t = f.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    $ = (e) => e?.type === i.R.BUNDLE,
    q = (e) => {
        if (null != e) return e.type === i.R.BUNDLE ? i.R.BUNDLE : e.items?.[0]?.type;
    },
    Z = (e) => {
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
    },
    X =
        (h.Yr.KZT,
        h.Yr.NGN,
        h.Yr.EGP,
        (e, t, n) => {
            if ($(e)) return T(e);
            let r = S(
                e,
                t ? (n ? p.lid.MOBILE : p.lid.DEFAULT) : n ? p.lid.MOBILE_PREMIUM_TIER_2 : p.lid.PREMIUM_TIER_2,
            );
            return r?.amount;
        }),
    Q = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(f.Dp.ORB_PROFILE_BADGE === t?.skuId && r);
    },
    J = (e, t) => {
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
                if (t === f.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === f.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case i.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    ee = (e, t, n) =>
        e.sort((e, r) => {
            let i = n ? (0, _.CW)({ product: e, isPremiumUser: t }) : g(e, t, !1),
                s = n ? (0, _.CW)({ product: r, isPremiumUser: t }) : g(r, t, !1);
            return (i?.amount ?? 0) - (s?.amount ?? 0);
        }),
    et = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let r = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - r;
        });
    },
    en = (e) => e.filter((e) => !e.isCategoryReward);
