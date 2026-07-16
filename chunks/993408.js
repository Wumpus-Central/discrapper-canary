"use strict";
n.d(t, {
    $W: () => K,
    $b: () => ee,
    Br: () => y,
    Bs: () => eu,
    CE: () => e_,
    D0: () => S,
    Dm: () => H,
    G0: () => O,
    HF: () => en,
    MG: () => Q,
    P_: () => F,
    R8: () => D,
    V6: () => ed,
    WD: () => G,
    WU: () => et,
    Wj: () => q,
    XS: () => k,
    Zu: () => eo,
    aT: () => ei,
    aw: () => er,
    b_: () => C,
    bf: () => ec,
    c7: () => el,
    es: () => U,
    f6: () => j,
    fT: () => w,
    gA: () => L,
    hU: () => J,
    l8: () => v,
    oj: () => ea,
    pA: () => es,
    ps: () => Y,
    rr: () => P,
    sz: () => X,
    tt: () => x,
    wo: () => Z,
    x9: () => W,
    xM: () => R,
    yt: () => M,
    zd: () => $,
}),
    n(321073);
var i,
    r = n(435558),
    a = n(575593),
    s = n(441574),
    l = n(968671),
    o = n(349871),
    d = n(723702),
    c = n(428262),
    u = n(580630),
    _ = n(898461),
    E = n(837015),
    A = n(203632),
    h = n(892118),
    I = n(719986),
    f = n(623373),
    p = n(758836),
    T = n(652215),
    m = n(818348),
    g = n(375708),
    S = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
let N = { nitro: "nitro", thirdparty: "xbox" };
function C(e) {
    return null != e ? N[e] : null;
}
function R(e) {
    if (!c.Ay.canUseShopDiscounts(e)) return null;
    if (c.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, o.kQ)(e?.perks, s.bb.SHOP_DISCOUNTS);
    return t?.includes(s.g$.SOURCE_NITRO)
        ? "nitro"
        : (0, l.f0)("getShopDiscountSource") && t?.includes(s.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "thirdparty"
          : null;
}
function O(e) {
    return e?.premiumType != null;
}
function L(e) {
    return e?.purchaseType === T.zF_.PREMIUM_PURCHASE;
}
function y(e, t, n) {
    return M(e, n ? (t ? T.lid.MOBILE_PREMIUM_TIER_2 : T.lid.MOBILE) : t ? T.lid.PREMIUM_TIER_2 : T.lid.DEFAULT);
}
function D(e, t, n) {
    let i = y(e, t, n);
    return null == i ? "" : (0, u.$g)(i?.amount, i?.currency);
}
function v(e, t) {
    return ((0, d.isAndroid)() || (0, d.isIOS)()) && t !== m.Yr.DISCORD_ORB
        ? e
            ? T.lid.MOBILE_PREMIUM_TIER_2
            : T.lid.MOBILE
        : e
          ? T.lid.PREMIUM_TIER_2
          : T.lid.DEFAULT;
}
function b(e, t) {
    let n = e.bundledProducts;
    if (null == n) return 0;
    let i = v(!1, t);
    return n.reduce((e, n) => {
        let r = M(n, i, t);
        return e + (r?.amount ?? 0);
    }, 0);
}
function M(e, t, n) {
    let i = e.prices[t]?.countryPrices?.prices;
    return null == i ? null : ((null == n ? i[0] : i.find((e) => e.currency === n)) ?? null);
}
let P = { original: -1, discountPercentage: -1 },
    U = 5;
function w(e, t, n) {
    if (null == e) return P;
    let i = b(e, n);
    if (i <= 0) return P;
    let r = M(e, v(t, n), n);
    return null == r ? P : { original: i, discountPercentage: Math.round(((i - r.amount) / i) * 100) };
}
function G(e, t) {
    let { hasShopDiscount: n, discount: i } = t,
        r = M(e, T.lid.DEFAULT);
    if (null == r) return null;
    if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
    let a = M(e, T.lid.PREMIUM_TIER_2),
        s = er(e) && n ? { ...r, amount: i.original } : r,
        l = n && null != a,
        o = l ? a : s;
    return {
        defaultPrice: r,
        originalPrice: s,
        premiumPrice: a,
        finalPrice: o,
        showDiscountPrice: l,
        finalPriceIsDifferent: o.amount !== s.amount,
        showDefaultPriceOnly: !1,
    };
}
function x(e) {
    return M(e, T.lid.DEFAULT)?.amount === 0;
}
function k(e) {
    return e.reduce(
        (e, t) =>
            null != t && t.type === a.R.VARIANTS_GROUP && null != t.variants
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
    );
}
function F(e, t) {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? k(n) : n, "storeListingId");
}
function V(e, t) {
    if (t === a.R.AVATAR_DECORATION) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(_.T);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === a.R.NAMEPLATE) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(E.F);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === a.R.PROFILE_EFFECT) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(A.C3);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === a.R.PROFILE_FRAME) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(h.s);
        return (0, r.uniqBy)(t, "skuId");
    }
    return [];
}
function B(e, t) {
    let n = F(e, !0);
    if (t === a.R.AVATAR_DECORATION) {
        let e = (0, r.flatMap)(n, "items").filter(_.T);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === a.R.NAMEPLATE) {
        let e = (0, r.flatMap)(n, "items").filter(E.F);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === a.R.PROFILE_EFFECT) {
        let e = (0, r.flatMap)(n, "items").filter(A.C3);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === a.R.PROFILE_FRAME) {
        let e = (0, r.flatMap)(n, "items").filter(h.s);
        return (0, r.uniqBy)(e, "skuId");
    }
    return [];
}
function H(e) {
    switch (e) {
        case a.R.AVATAR_DECORATION:
            return g.intl.string(g.t["7v0T9P"]);
        case a.R.PROFILE_EFFECT:
            return g.intl.string(g.t.wR5wOo);
        case a.R.NAMEPLATE:
            return g.intl.string(g.t.x5CoXR);
        case a.R.PROFILE_FRAME:
            return g.intl.string(g.t.GWrZOd);
        default:
            return null;
    }
}
function j(e) {
    return null != e ? I.M.fromServer(e) : void 0;
}
function W(e) {
    return V(e, a.R.AVATAR_DECORATION);
}
function Y(e, t) {
    return (0, r.uniqBy)([...W(e), ...B(t, a.R.AVATAR_DECORATION)], "skuId");
}
function K(e) {
    return V(e, a.R.NAMEPLATE);
}
function $(e, t) {
    return (0, r.uniqBy)([...K(e), ...B(t, a.R.NAMEPLATE)], "skuId");
}
function z(e) {
    return V(e, a.R.PROFILE_EFFECT);
}
function q(e) {
    return B(e, a.R.PROFILE_EFFECT);
}
function Z(e, t) {
    return (0, r.uniqBy)([...z(e), ...q(t)], "skuId");
}
function X(e, t) {
    let n = z(t),
        i = q(e).filter((e) => {
            let { skuId: t } = e;
            return !n.some((e) => e.skuId === t);
        });
    return { purchased: n, shopPreviews: i };
}
function Q(e, t) {
    return (0, r.uniqBy)([...V(e, a.R.PROFILE_FRAME), ...B(t, a.R.PROFILE_FRAME)], "skuId");
}
function J(e) {
    return e.applicationId === T.FYj;
}
function ee(e) {
    return 3.8 * e;
}
function et(e) {
    let t = new Date(),
        n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
}
function en(e) {
    return null != e && et(e) <= p.x3;
}
function ei(e) {
    let t = p.Tq[e];
    return null != t && new Date().getTime() < t;
}
function er(e) {
    return e?.type === a.R.BUNDLE;
}
function ea(e) {
    if (null != e) return e.type === a.R.BUNDLE ? a.R.BUNDLE : e.items?.[0]?.type;
}
function es(e) {
    let { invoicePreview: t, selectedSkuId: n, skusById: i } = e,
        r = t?.invoiceItems?.[0]?.unitPrice,
        a = null != r ? { amount: r.amount, currency: r.currency } : void 0;
    if (null == a && null != n) {
        let e = i[n];
        e?.price != null && (a = { amount: e.price.amount, currency: e.price.currency });
    }
    return a;
}
function el(e, t, n) {
    if (er(e)) return b(e);
    let i = M(e, t ? (n ? T.lid.MOBILE : T.lid.DEFAULT) : n ? T.lid.MOBILE_PREMIUM_TIER_2 : T.lid.PREMIUM_TIER_2);
    return i?.amount;
}
function eo(e) {
    let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
    return !n && !(p.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
}
function ed(e, t) {
    switch (e) {
        case a.R.AVATAR_DECORATION:
            return "avatar decoration";
        case a.R.PROFILE_EFFECT:
            return "profile effect";
        case a.R.NAMEPLATE:
            return "nameplate";
        case a.R.PROFILE_FRAME:
            return "profile frame";
        case a.R.BUNDLE:
            return "bundle";
        case a.R.EXTERNAL_SKU:
            if (t === p.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
            if (t === p.Dp.FRACTIONAL_PREMIUM_1_DAY) return "1-day nitro credit";
            if (t === p.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
            return "unknown";
        case a.R.VARIANTS_GROUP:
            return "variants group";
        default:
            return "unknown";
    }
}
function ec(e, t, n) {
    return e.sort((e, i) => {
        let r = n ? (0, f.CW)({ product: e, hasShopDiscount: t }) : y(e, t, !1),
            a = n ? (0, f.CW)({ product: i, hasShopDiscount: t }) : y(i, t, !1);
        return (r?.amount ?? 0) - (a?.amount ?? 0);
    });
}
function eu(e, t) {
    if (0 === t.length || 0 === e.length) return e;
    let n = t.map((e) => e.discountId);
    return e.sort((e, t) => {
        let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
        return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
    });
}
function e_(e) {
    return e.filter((e) => !e.isCategoryReward);
}
m.Yr.KZT, m.Yr.NGN, m.Yr.EGP;
