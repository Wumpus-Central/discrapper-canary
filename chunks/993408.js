"use strict";
n.d(t, {
    $W: () => V,
    $b: () => $,
    Br: () => C,
    Bs: () => es,
    CE: () => ea,
    D0: () => T,
    G0: () => N,
    HF: () => Z,
    MG: () => K,
    P_: () => P,
    R8: () => v,
    V6: () => ei,
    WD: () => w,
    WU: () => q,
    Wj: () => j,
    Zu: () => en,
    aT: () => X,
    aw: () => Q,
    bf: () => er,
    c7: () => et,
    f6: () => k,
    fT: () => L,
    gA: () => y,
    hU: () => z,
    l8: () => O,
    oj: () => J,
    pA: () => ee,
    ps: () => F,
    rr: () => D,
    sz: () => W,
    tt: () => M,
    wo: () => Y,
    x9: () => G,
    xM: () => S,
    yt: () => b,
    zd: () => B,
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
function S(e) {
    if (!c.Ay.canUseShopDiscounts(e)) return null;
    if (c.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, l.kQ)(e?.perks, a.bb.SHOP_DISCOUNTS);
    return t?.includes(a.g$.SOURCE_NITRO)
        ? "nitro"
        : (0, o.getIsCrepeEnabled)("getShopDiscountSource") && t?.includes(a.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "thirdparty"
          : null;
}
let N = (e) => e?.premiumType != null,
    y = (e) => e?.purchaseType === A.zF_.PREMIUM_PURCHASE,
    C = (e, t, n) =>
        b(e, n ? (t ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.MOBILE) : t ? A.lid.PREMIUM_TIER_2 : A.lid.DEFAULT),
    v = (e, t, n) => {
        let i = C(e, t, n);
        return null == i ? "" : (0, d.$g)(i?.amount, i?.currency);
    },
    O = (e) =>
        (0, u.isAndroid)() || (0, u.isIOS)()
            ? e
                ? A.lid.MOBILE_PREMIUM_TIER_2
                : A.lid.MOBILE
            : e
              ? A.lid.PREMIUM_TIER_2
              : A.lid.DEFAULT,
    R = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = O(!1);
        return t.reduce((e, t) => {
            let i = b(t, n);
            return e + (i?.amount ?? 0);
        }, 0);
    },
    b = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    D = { original: -1, discountPercentage: -1 },
    L = (e, t) => {
        if (null == e) return D;
        let n = R(e);
        if (n <= 0) return D;
        let i = b(e, O(t));
        return null == i ? D : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    w = (e, t) => {
        let { hasShopDiscount: n, discount: i } = t,
            r = b(e, A.lid.DEFAULT);
        if (null == r) return null;
        if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
        let s = b(e, A.lid.PREMIUM_TIER_2),
            a = Q(e) && n ? { ...r, amount: i.original } : r,
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
    M = (e) => b(e, A.lid.DEFAULT)?.amount === 0,
    P = (e, t) => {
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
    x = (e, t) => {
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
    U = (e, t) => {
        let n = P(e, !0);
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
    k = (e) => (null != e ? E.M.fromServer(e) : void 0),
    G = (e) => x(e, s.R.AVATAR_DECORATION),
    F = (e, t) => (0, r.uniqBy)([...G(e), ...U(t, s.R.AVATAR_DECORATION)], "skuId"),
    V = (e) => x(e, s.R.NAMEPLATE),
    B = (e, t) => (0, r.uniqBy)([...V(e), ...U(t, s.R.NAMEPLATE)], "skuId"),
    H = (e) => x(e, s.R.PROFILE_EFFECT),
    j = (e) => U(e, s.R.PROFILE_EFFECT),
    Y = (e, t) => (0, r.uniqBy)([...H(e), ...j(t)], "skuId"),
    W = (e, t) => {
        let n = H(t),
            i = j(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    K = (e, t) => (0, r.uniqBy)([...x(e, s.R.PROFILE_FRAME), ...U(t, s.R.PROFILE_FRAME)], "skuId"),
    z = (e) => e.applicationId === A.FYj,
    $ = (e) => 3.8 * e,
    q = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    Z = (e) => null != e && q(e) <= g.x3,
    X = (e) => {
        let t = g.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    Q = (e) => e?.type === s.R.BUNDLE,
    J = (e) => {
        if (null != e) return e.type === s.R.BUNDLE ? s.R.BUNDLE : e.items?.[0]?.type;
    },
    ee = (e) => {
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
let et = (e, t, n) => {
        if (Q(e)) return R(e);
        let i = b(e, t ? (n ? A.lid.MOBILE : A.lid.DEFAULT) : n ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    en = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(g.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
    },
    ei = (e, t) => {
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
    er = (e, t, n) =>
        e.sort((e, i) => {
            let r = n ? (0, m.CW)({ product: e, hasShopDiscount: t }) : C(e, t, !1),
                s = n ? (0, m.CW)({ product: i, hasShopDiscount: t }) : C(i, t, !1);
            return (r?.amount ?? 0) - (s?.amount ?? 0);
        }),
    es = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
        });
    },
    ea = (e) => e.filter((e) => !e.isCategoryReward);
