"use strict";
n.d(t, {
    $W: () => F,
    $b: () => Y,
    Br: () => g,
    Bs: () => en,
    CE: () => er,
    G0: () => m,
    HF: () => z,
    P_: () => R,
    R8: () => A,
    V6: () => ee,
    WD: () => N,
    WU: () => K,
    Zu: () => J,
    aT: () => $,
    aw: () => q,
    bf: () => et,
    c7: () => Q,
    f6: () => L,
    fT: () => v,
    gA: () => E,
    hU: () => H,
    l8: () => I,
    oj: () => Z,
    pA: () => X,
    ps: () => M,
    rr: () => y,
    sz: () => G,
    tt: () => C,
    wo: () => U,
    x9: () => w,
    yt: () => S,
    zd: () => B,
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
    N = (e, t) => {
        let { isPremiumUser: n, discount: r } = t,
            i = S(e, p.lid.DEFAULT);
        if (null == i) return null;
        if (i.amount <= 0) return { defaultPrice: i, showDefaultPriceOnly: !0 };
        let s = S(e, p.lid.PREMIUM_TIER_2),
            a = q(e) && n ? { ...i, amount: r.original } : i,
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
    C = (e) => S(e, p.lid.DEFAULT)?.amount === 0,
    b = (e) =>
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
    R = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(t ? b(n) : n, "storeListingId");
    },
    O = (e, t) => {
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
    D = (e, t) => {
        let n = R(e, !0);
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
    L = (e) => (null != e ? d.M.fromServer(e) : void 0),
    w = (e) => O(e, i.R.AVATAR_DECORATION),
    x = (e) => D(e, i.R.AVATAR_DECORATION),
    M = (e, t) => (0, r.uniqBy)([...w(e), ...x(t)], "skuId"),
    P = (e) => O(e, i.R.PROFILE_EFFECT),
    k = (e) => D(e, i.R.PROFILE_EFFECT),
    U = (e, t) => (0, r.uniqBy)([...P(e), ...k(t)], "skuId"),
    G = (e, t) => {
        let n = P(t),
            r = k(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: r };
    },
    F = (e) => O(e, i.R.NAMEPLATE),
    V = (e) => D(e, i.R.NAMEPLATE),
    B = (e, t) => (0, r.uniqBy)([...F(e), ...V(t)], "skuId"),
    H = (e) => e.applicationId === p.FYj,
    j = 3.8,
    Y = (e) => j * e,
    W = 864e5,
    K = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / W);
    },
    z = (e) => null != e && K(e) <= f.x3,
    $ = (e) => {
        let t = f.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    q = (e) => e?.type === i.R.BUNDLE,
    Z = (e) => {
        if (null != e) return e.type === i.R.BUNDLE ? i.R.BUNDLE : e.items?.[0]?.type;
    },
    X = (e) => {
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
    Q =
        (h.Yr.KZT,
        h.Yr.NGN,
        h.Yr.EGP,
        (e, t, n) => {
            if (q(e)) return T(e);
            let r = S(
                e,
                t ? (n ? p.lid.MOBILE : p.lid.DEFAULT) : n ? p.lid.MOBILE_PREMIUM_TIER_2 : p.lid.PREMIUM_TIER_2,
            );
            return r?.amount;
        }),
    J = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: r } = e;
        return !n && !(f.Dp.ORB_PROFILE_BADGE === t?.skuId && r);
    },
    ee = (e, t) => {
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
    et = (e, t, n) =>
        e.sort((e, r) => {
            let i = n ? (0, _.CW)({ product: e, isPremiumUser: t }) : g(e, t, !1),
                s = n ? (0, _.CW)({ product: r, isPremiumUser: t }) : g(r, t, !1);
            return (i?.amount ?? 0) - (s?.amount ?? 0);
        }),
    en = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let r = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - r;
        });
    },
    er = (e) => e.filter((e) => !e.isCategoryReward);
