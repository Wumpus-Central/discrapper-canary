"use strict";
n.d(t, {
    $W: () => H,
    $b: () => Z,
    Br: () => O,
    Bs: () => eo,
    CE: () => el,
    D0: () => T,
    G0: () => C,
    HF: () => Q,
    MG: () => $,
    P_: () => U,
    R8: () => R,
    V6: () => es,
    WD: () => P,
    WU: () => X,
    Wj: () => W,
    Zu: () => er,
    aT: () => J,
    aw: () => ee,
    b_: () => N,
    bf: () => ea,
    c7: () => ei,
    f6: () => F,
    fT: () => M,
    gA: () => v,
    hU: () => q,
    l8: () => b,
    oj: () => et,
    pA: () => en,
    ps: () => B,
    rr: () => w,
    sz: () => z,
    tt: () => x,
    wo: () => K,
    x9: () => V,
    xM: () => y,
    yt: () => L,
    zd: () => j,
}),
    n(321073);
var i,
    r = n(735438),
    s = n(575593),
    a = n(441574),
    o = n(968671),
    l = n(349871),
    u = n(723702),
    c = n(428262),
    d = n(580630),
    _ = n(898461),
    f = n(837015),
    h = n(203632),
    p = n(892118),
    E = n(719986),
    m = n(623373),
    g = n(758836),
    A = n(652215),
    I = n(818348),
    T = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
let S = { nitro: "nitro", thirdparty: "xbox" };
function N(e) {
    return null != e ? S[e] : null;
}
function y(e) {
    if (!c.Ay.canUseShopDiscounts(e)) return null;
    if (c.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, l.kQ)(e?.perks, a.bb.SHOP_DISCOUNTS);
    return t?.includes(a.g$.SOURCE_NITRO)
        ? "nitro"
        : (0, o.f0)("getShopDiscountSource") && t?.includes(a.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "thirdparty"
          : null;
}
let C = (e) => e?.premiumType != null,
    v = (e) => e?.purchaseType === A.zF_.PREMIUM_PURCHASE,
    O = (e, t, n) =>
        L(e, n ? (t ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.MOBILE) : t ? A.lid.PREMIUM_TIER_2 : A.lid.DEFAULT),
    R = (e, t, n) => {
        let i = O(e, t, n);
        return null == i ? "" : (0, d.$g)(i?.amount, i?.currency);
    },
    b = (e) =>
        (0, u.isAndroid)() || (0, u.isIOS)()
            ? e
                ? A.lid.MOBILE_PREMIUM_TIER_2
                : A.lid.MOBILE
            : e
              ? A.lid.PREMIUM_TIER_2
              : A.lid.DEFAULT,
    D = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = b(!1);
        return t.reduce((e, t) => {
            let i = L(t, n);
            return e + (i?.amount ?? 0);
        }, 0);
    },
    L = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    w = { original: -1, discountPercentage: -1 },
    M = (e, t) => {
        if (null == e) return w;
        let n = D(e);
        if (n <= 0) return w;
        let i = L(e, b(t));
        return null == i ? w : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    P = (e, t) => {
        let { hasShopDiscount: n, discount: i } = t,
            r = L(e, A.lid.DEFAULT);
        if (null == r) return null;
        if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
        let s = L(e, A.lid.PREMIUM_TIER_2),
            a = ee(e) && n ? { ...r, amount: i.original } : r,
            o = n && null != s,
            l = o ? s : a;
        return {
            defaultPrice: r,
            originalPrice: a,
            premiumPrice: s,
            finalPrice: l,
            showDiscountPrice: o,
            finalPriceIsDifferent: l.amount !== a.amount,
            showDefaultPriceOnly: !1,
        };
    },
    x = (e) => L(e, A.lid.DEFAULT)?.amount === 0,
    U = (e, t) => {
        let n = (0, r.flatMap)([...e.values()], "products");
        return (0, r.uniqBy)(
            t
                ? n.reduce(
                      (e, t) =>
                          null != t && t.type === s.R.VARIANTS_GROUP && null != t.variants
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
    k = (e, t) => {
        if (t === s.R.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(_.T);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === s.R.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(f.F);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === s.R.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(h.C3);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === s.R.PROFILE_FRAME) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(p.s);
            return (0, r.uniqBy)(t, "skuId");
        }
        return [];
    },
    G = (e, t) => {
        let n = U(e, !0);
        if (t === s.R.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(_.T);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === s.R.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(f.F);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === s.R.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(h.C3);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === s.R.PROFILE_FRAME) {
            let e = (0, r.flatMap)(n, "items").filter(p.s);
            return (0, r.uniqBy)(e, "skuId");
        }
        return [];
    },
    F = (e) => (null != e ? E.M.fromServer(e) : void 0),
    V = (e) => k(e, s.R.AVATAR_DECORATION),
    B = (e, t) => (0, r.uniqBy)([...V(e), ...G(t, s.R.AVATAR_DECORATION)], "skuId"),
    H = (e) => k(e, s.R.NAMEPLATE),
    j = (e, t) => (0, r.uniqBy)([...H(e), ...G(t, s.R.NAMEPLATE)], "skuId"),
    Y = (e) => k(e, s.R.PROFILE_EFFECT),
    W = (e) => G(e, s.R.PROFILE_EFFECT),
    K = (e, t) => (0, r.uniqBy)([...Y(e), ...W(t)], "skuId"),
    z = (e, t) => {
        let n = Y(t),
            i = W(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    $ = (e, t) => (0, r.uniqBy)([...k(e, s.R.PROFILE_FRAME), ...G(t, s.R.PROFILE_FRAME)], "skuId"),
    q = (e) => e.applicationId === A.FYj,
    Z = (e) => 3.8 * e,
    X = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    Q = (e) => null != e && X(e) <= g.x3,
    J = (e) => {
        let t = g.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    ee = (e) => e?.type === s.R.BUNDLE,
    et = (e) => {
        if (null != e) return e.type === s.R.BUNDLE ? s.R.BUNDLE : e.items?.[0]?.type;
    },
    en = (e) => {
        let { invoicePreview: t, selectedSkuId: n, skusById: i } = e,
            r = t?.invoiceItems?.[0]?.unitPrice,
            s = null != r ? { amount: r.amount, currency: r.currency } : void 0;
        if (null == s && null != n) {
            let e = i[n];
            e?.price != null && (s = { amount: e.price.amount, currency: e.price.currency });
        }
        return s;
    };
I.Yr.KZT, I.Yr.NGN, I.Yr.EGP;
let ei = (e, t, n) => {
        if (ee(e)) return D(e);
        let i = L(e, t ? (n ? A.lid.MOBILE : A.lid.DEFAULT) : n ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    er = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(g.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
    },
    es = (e, t) => {
        switch (e) {
            case s.R.AVATAR_DECORATION:
                return "avatar decoration";
            case s.R.PROFILE_EFFECT:
                return "profile effect";
            case s.R.NAMEPLATE:
                return "nameplate";
            case s.R.PROFILE_FRAME:
                return "profile frame";
            case s.R.BUNDLE:
                return "bundle";
            case s.R.EXTERNAL_SKU:
                if (t === g.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === g.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case s.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    ea = (e, t, n) =>
        e.sort((e, i) => {
            let r = n ? (0, m.CW)({ product: e, hasShopDiscount: t }) : O(e, t, !1),
                s = n ? (0, m.CW)({ product: i, hasShopDiscount: t }) : O(i, t, !1);
            return (r?.amount ?? 0) - (s?.amount ?? 0);
        }),
    eo = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
        });
    },
    el = (e) => e.filter((e) => !e.isCategoryReward);
