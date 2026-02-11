"use strict";
n.d(t, {
    $W: () => F,
    $b: () => Y,
    Br: () => A,
    Bs: () => en,
    CE: () => er,
    G0: () => g,
    HF: () => $,
    P_: () => R,
    R8: () => I,
    V6: () => ee,
    WU: () => K,
    Zu: () => J,
    aT: () => z,
    aw: () => q,
    bf: () => et,
    c7: () => Q,
    f6: () => L,
    fT: () => C,
    gA: () => E,
    hU: () => j,
    l8: () => T,
    oj: () => X,
    pA: () => Z,
    ps: () => P,
    rr: () => v,
    sz: () => G,
    tt: () => b,
    wo: () => U,
    x9: () => w,
    yt: () => S,
    zd: () => B,
}),
    n(321073);
var r = n(735438),
    i = n(575593),
    a = n(79387),
    s = n(723702),
    o = n(580630),
    l = n(898461),
    u = n(837015),
    c = n(203632),
    d = n(719986),
    _ = n(623373),
    f = n(758836),
    h = n(652215),
    p = n(818348);
let g = (e) => e?.premiumType != null,
    E = (e) => e?.purchaseType === h.zF_.PREMIUM_PURCHASE,
    A = (e, t, n) => {
        let r;
        return S(
            e,
            (r = n ? (t ? h.lid.MOBILE_PREMIUM_TIER_2 : h.lid.MOBILE) : t ? h.lid.PREMIUM_TIER_2 : h.lid.DEFAULT),
        );
    },
    I = (e, t, n) => {
        let r = A(e, t, n);
        return null == r ? "" : (0, o.$g)(r?.amount, r?.currency);
    },
    T = (e) =>
        (0, s.isAndroid)() || (0, s.isIOS)()
            ? e
                ? h.lid.MOBILE_PREMIUM_TIER_2
                : h.lid.MOBILE
            : e
              ? h.lid.PREMIUM_TIER_2
              : h.lid.DEFAULT,
    y = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = T(!1);
        return t.reduce((e, t) => {
            let r = S(t, n);
            return e + (r?.amount ?? 0);
        }, 0);
    },
    S = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    v = { original: -1, discountPercentage: -1 },
    C = (e, t) => {
        if (null == e) return v;
        let n = y(e);
        if (n <= 0) return v;
        let r = S(e, T(t));
        return null == r ? v : { original: n, discountPercentage: Math.round(((n - r.amount) / n) * 100) };
    },
    b = (e) => S(e, h.lid.DEFAULT)?.amount === 0,
    N = (e) =>
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
        return (0, r.uniqBy)(t ? N(n) : n, "storeListingId");
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
    P = (e, t) => (0, r.uniqBy)([...w(e), ...x(t)], "skuId"),
    M = (e) => O(e, i.R.PROFILE_EFFECT),
    k = (e) => D(e, i.R.PROFILE_EFFECT),
    U = (e, t) => (0, r.uniqBy)([...M(e), ...k(t)], "skuId"),
    G = (e, t) => {
        let n = M(t),
            r = k(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: r };
    },
    F = (e) => O(e, i.R.NAMEPLATE),
    V = (e) => D(e, i.R.NAMEPLATE),
    B = (e, t) => (0, r.uniqBy)([...F(e), ...V(t)], "skuId"),
    j = (e) => e.applicationId === h.FYj,
    H = 3.8,
    Y = (e) => H * e,
    W = 864e5,
    K = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / W);
    },
    $ = (e) => null != e && K(e) <= f.x3,
    z = (e) => {
        let t = f.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    q = (e) => e?.type === i.R.BUNDLE,
    X = (e) => {
        if (null != e) return e.type === i.R.BUNDLE ? i.R.BUNDLE : e.items?.[0]?.type;
    },
    Z = (e) => {
        let {
                selectedSkuPricePreview: t,
                paymentSourceId: n,
                selectedSkuId: r,
                skuPricePreviewsById: i,
                skusById: s,
            } = e,
            o = t ?? (null != n && null != r ? i[r]?.[a.B] : null),
            l = o?.invoice_items?.[0]?.unit_price,
            u = null != l ? { amount: l.amount, currency: l.currency } : void 0;
        if (null == u && null != r) {
            let e = s[r];
            e?.price != null && (u = { amount: e.price.amount, currency: e.price.currency });
        }
        return u;
    },
    Q =
        (p.Yr.KZT,
        p.Yr.NGN,
        p.Yr.EGP,
        (e, t, n) => {
            if (q(e)) return y(e);
            let r = S(
                e,
                t ? (n ? h.lid.MOBILE : h.lid.DEFAULT) : n ? h.lid.MOBILE_PREMIUM_TIER_2 : h.lid.PREMIUM_TIER_2,
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
            let i = n ? (0, _.CW)({ product: e, isPremiumUser: t }) : A(e, t, !1),
                a = n ? (0, _.CW)({ product: r, isPremiumUser: t }) : A(r, t, !1);
            return (i?.amount ?? 0) - (a?.amount ?? 0);
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
