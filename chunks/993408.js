"use strict";
n.d(t, {
    $W: () => F,
    $b: () => z,
    Br: () => y,
    Bs: () => er,
    CE: () => es,
    D0: () => I,
    G0: () => S,
    HF: () => q,
    MG: () => W,
    P_: () => M,
    R8: () => C,
    V6: () => en,
    WD: () => L,
    WU: () => $,
    Wj: () => H,
    Zu: () => et,
    aT: () => Z,
    aw: () => X,
    bf: () => ei,
    c7: () => ee,
    f6: () => U,
    fT: () => D,
    gA: () => N,
    hU: () => K,
    l8: () => v,
    oj: () => Q,
    pA: () => J,
    ps: () => G,
    rr: () => b,
    sz: () => Y,
    tt: () => w,
    wo: () => j,
    x9: () => k,
    xM: () => T,
    yt: () => R,
    zd: () => V,
}),
    n(321073);
var i,
    r = n(735438),
    s = n(575593),
    a = n(441574),
    o = n(349871),
    l = n(723702),
    u = n(927578),
    c = n(580630),
    d = n(898461),
    _ = n(837015),
    f = n(203632),
    h = n(892118),
    p = n(719986),
    E = n(623373),
    m = n(758836),
    g = n(652215),
    A = n(818348),
    I = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
function T(e) {
    if (!u.Ay.canUseShopDiscounts(e)) return null;
    if (u.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, o.kQ)(e?.perks, a.bb.SHOP_DISCOUNTS);
    return t?.includes(a.g$.SOURCE_NITRO) ? "nitro" : null;
}
let S = (e) => e?.premiumType != null,
    N = (e) => e?.purchaseType === g.zF_.PREMIUM_PURCHASE,
    y = (e, t, n) =>
        R(e, n ? (t ? g.lid.MOBILE_PREMIUM_TIER_2 : g.lid.MOBILE) : t ? g.lid.PREMIUM_TIER_2 : g.lid.DEFAULT),
    C = (e, t, n) => {
        let i = y(e, t, n);
        return null == i ? "" : (0, c.$g)(i?.amount, i?.currency);
    },
    v = (e) =>
        (0, l.isAndroid)() || (0, l.isIOS)()
            ? e
                ? g.lid.MOBILE_PREMIUM_TIER_2
                : g.lid.MOBILE
            : e
              ? g.lid.PREMIUM_TIER_2
              : g.lid.DEFAULT,
    O = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = v(!1);
        return t.reduce((e, t) => {
            let i = R(t, n);
            return e + (i?.amount ?? 0);
        }, 0);
    },
    R = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    b = { original: -1, discountPercentage: -1 },
    D = (e, t) => {
        if (null == e) return b;
        let n = O(e);
        if (n <= 0) return b;
        let i = R(e, v(t));
        return null == i ? b : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    L = (e, t) => {
        let { hasShopDiscount: n, discount: i } = t,
            r = R(e, g.lid.DEFAULT);
        if (null == r) return null;
        if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
        let s = R(e, g.lid.PREMIUM_TIER_2),
            a = X(e) && n ? { ...r, amount: i.original } : r,
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
    w = (e) => R(e, g.lid.DEFAULT)?.amount === 0,
    M = (e, t) => {
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
    P = (e, t) => {
        if (t === s.R.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(d.T);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === s.R.NAMEPLATE) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(_.F);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === s.R.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(f.C3);
            return (0, r.uniqBy)(t, "skuId");
        }
        if (t === s.R.PROFILE_FRAME) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(h.s);
            return (0, r.uniqBy)(t, "skuId");
        }
        return [];
    },
    x = (e, t) => {
        let n = M(e, !0);
        if (t === s.R.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(d.T);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === s.R.NAMEPLATE) {
            let e = (0, r.flatMap)(n, "items").filter(_.F);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === s.R.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(f.C3);
            return (0, r.uniqBy)(e, "skuId");
        }
        if (t === s.R.PROFILE_FRAME) {
            let e = (0, r.flatMap)(n, "items").filter(h.s);
            return (0, r.uniqBy)(e, "skuId");
        }
        return [];
    },
    U = (e) => (null != e ? p.M.fromServer(e) : void 0),
    k = (e) => P(e, s.R.AVATAR_DECORATION),
    G = (e, t) => (0, r.uniqBy)([...k(e), ...x(t, s.R.AVATAR_DECORATION)], "skuId"),
    F = (e) => P(e, s.R.NAMEPLATE),
    V = (e, t) => (0, r.uniqBy)([...F(e), ...x(t, s.R.NAMEPLATE)], "skuId"),
    B = (e) => P(e, s.R.PROFILE_EFFECT),
    H = (e) => x(e, s.R.PROFILE_EFFECT),
    j = (e, t) => (0, r.uniqBy)([...B(e), ...H(t)], "skuId"),
    Y = (e, t) => {
        let n = B(t),
            i = H(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    W = (e, t) => (0, r.uniqBy)([...P(e, s.R.PROFILE_FRAME), ...x(t, s.R.PROFILE_FRAME)], "skuId"),
    K = (e) => e.applicationId === g.FYj,
    z = (e) => 3.8 * e,
    $ = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    q = (e) => null != e && $(e) <= m.x3,
    Z = (e) => {
        let t = m.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    X = (e) => e?.type === s.R.BUNDLE,
    Q = (e) => {
        if (null != e) return e.type === s.R.BUNDLE ? s.R.BUNDLE : e.items?.[0]?.type;
    },
    J = (e) => {
        let { invoicePreview: t, selectedSkuId: n, skusById: i } = e,
            r = t?.invoiceItems?.[0]?.unitPrice,
            s = null != r ? { amount: r.amount, currency: r.currency } : void 0;
        if (null == s && null != n) {
            let e = i[n];
            e?.price != null && (s = { amount: e.price.amount, currency: e.price.currency });
        }
        return s;
    };
A.Yr.KZT, A.Yr.NGN, A.Yr.EGP;
let ee = (e, t, n) => {
        if (X(e)) return O(e);
        let i = R(e, t ? (n ? g.lid.MOBILE : g.lid.DEFAULT) : n ? g.lid.MOBILE_PREMIUM_TIER_2 : g.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    et = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(m.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
    },
    en = (e, t) => {
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
                if (t === m.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === m.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case s.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    ei = (e, t, n) =>
        e.sort((e, i) => {
            let r = n ? (0, E.CW)({ product: e, hasShopDiscount: t }) : y(e, t, !1),
                s = n ? (0, E.CW)({ product: i, hasShopDiscount: t }) : y(i, t, !1);
            return (r?.amount ?? 0) - (s?.amount ?? 0);
        }),
    er = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
        });
    },
    es = (e) => e.filter((e) => !e.isCategoryReward);
