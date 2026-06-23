"use strict";
n.d(t, {
    $W: () => W,
    $b: () => J,
    Br: () => O,
    Bs: () => ec,
    CE: () => ed,
    D0: () => S,
    Dm: () => B,
    G0: () => v,
    HF: () => et,
    MG: () => X,
    P_: () => G,
    R8: () => b,
    V6: () => el,
    WD: () => x,
    WU: () => ee,
    Wj: () => z,
    XS: () => U,
    Zu: () => eo,
    aT: () => en,
    aw: () => ei,
    b_: () => C,
    bf: () => eu,
    c7: () => ea,
    f6: () => j,
    fT: () => P,
    gA: () => R,
    hU: () => Q,
    l8: () => D,
    oj: () => er,
    pA: () => es,
    ps: () => Y,
    rr: () => M,
    sz: () => Z,
    tt: () => k,
    wo: () => q,
    x9: () => H,
    xM: () => N,
    yt: () => w,
    zd: () => K,
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
    h = n(837015),
    f = n(203632),
    p = n(892118),
    E = n(719986),
    m = n(623373),
    g = n(758836),
    A = n(652215),
    I = n(818348),
    T = n(375708),
    S = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
let y = { nitro: "nitro", thirdparty: "xbox" };
function C(e) {
    return null != e ? y[e] : null;
}
function N(e) {
    if (!c.Ay.canUseShopDiscounts(e)) return null;
    if (c.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, l.kQ)(e?.perks, a.bb.SHOP_DISCOUNTS);
    return t?.includes(a.g$.SOURCE_NITRO)
        ? "nitro"
        : (0, o.f0)("getShopDiscountSource") && t?.includes(a.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "thirdparty"
          : null;
}
function v(e) {
    return e?.premiumType != null;
}
function R(e) {
    return e?.purchaseType === A.zF_.PREMIUM_PURCHASE;
}
function O(e, t, n) {
    return w(e, n ? (t ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.MOBILE) : t ? A.lid.PREMIUM_TIER_2 : A.lid.DEFAULT);
}
function b(e, t, n) {
    let i = O(e, t, n);
    return null == i ? "" : (0, d.$g)(i?.amount, i?.currency);
}
function D(e) {
    return (0, u.isAndroid)() || (0, u.isIOS)()
        ? e
            ? A.lid.MOBILE_PREMIUM_TIER_2
            : A.lid.MOBILE
        : e
          ? A.lid.PREMIUM_TIER_2
          : A.lid.DEFAULT;
}
function L(e) {
    let t = e.bundledProducts;
    if (null == t) return 0;
    let n = D(!1);
    return t.reduce((e, t) => {
        let i = w(t, n);
        return e + (i?.amount ?? 0);
    }, 0);
}
function w(e, t) {
    let n = e.prices[t] ?? null;
    return null != n ? n.countryPrices?.prices?.[0] : null;
}
let M = { original: -1, discountPercentage: -1 };
function P(e, t) {
    if (null == e) return M;
    let n = L(e);
    if (n <= 0) return M;
    let i = w(e, D(t));
    return null == i ? M : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
}
function x(e, t) {
    let { hasShopDiscount: n, discount: i } = t,
        r = w(e, A.lid.DEFAULT);
    if (null == r) return null;
    if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
    let s = w(e, A.lid.PREMIUM_TIER_2),
        a = ei(e) && n ? { ...r, amount: i.original } : r,
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
}
function k(e) {
    return w(e, A.lid.DEFAULT)?.amount === 0;
}
function U(e) {
    return e.reduce(
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
    );
}
function G(e, t) {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? U(n) : n, "storeListingId");
}
function F(e, t) {
    if (t === s.R.AVATAR_DECORATION) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(_.T);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === s.R.NAMEPLATE) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(h.F);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === s.R.PROFILE_EFFECT) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(f.C3);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === s.R.PROFILE_FRAME) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(p.s);
        return (0, r.uniqBy)(t, "skuId");
    }
    return [];
}
function V(e, t) {
    let n = G(e, !0);
    if (t === s.R.AVATAR_DECORATION) {
        let e = (0, r.flatMap)(n, "items").filter(_.T);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === s.R.NAMEPLATE) {
        let e = (0, r.flatMap)(n, "items").filter(h.F);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === s.R.PROFILE_EFFECT) {
        let e = (0, r.flatMap)(n, "items").filter(f.C3);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === s.R.PROFILE_FRAME) {
        let e = (0, r.flatMap)(n, "items").filter(p.s);
        return (0, r.uniqBy)(e, "skuId");
    }
    return [];
}
function B(e) {
    switch (e) {
        case s.R.AVATAR_DECORATION:
            return T.intl.string(T.t["7v0T9P"]);
        case s.R.PROFILE_EFFECT:
            return T.intl.string(T.t.wR5wOo);
        case s.R.NAMEPLATE:
            return T.intl.string(T.t.x5CoXR);
        case s.R.PROFILE_FRAME:
            return T.intl.string(T.t.GWrZOd);
        default:
            return null;
    }
}
function j(e) {
    return null != e ? E.M.fromServer(e) : void 0;
}
function H(e) {
    return F(e, s.R.AVATAR_DECORATION);
}
function Y(e, t) {
    return (0, r.uniqBy)([...H(e), ...V(t, s.R.AVATAR_DECORATION)], "skuId");
}
function W(e) {
    return F(e, s.R.NAMEPLATE);
}
function K(e, t) {
    return (0, r.uniqBy)([...W(e), ...V(t, s.R.NAMEPLATE)], "skuId");
}
function $(e) {
    return F(e, s.R.PROFILE_EFFECT);
}
function z(e) {
    return V(e, s.R.PROFILE_EFFECT);
}
function q(e, t) {
    return (0, r.uniqBy)([...$(e), ...z(t)], "skuId");
}
function Z(e, t) {
    let n = $(t),
        i = z(e).filter((e) => {
            let { skuId: t } = e;
            return !n.some((e) => e.skuId === t);
        });
    return { purchased: n, shopPreviews: i };
}
function X(e, t) {
    return (0, r.uniqBy)([...F(e, s.R.PROFILE_FRAME), ...V(t, s.R.PROFILE_FRAME)], "skuId");
}
function Q(e) {
    return e.applicationId === A.FYj;
}
let J = (e) => 3.8 * e;
function ee(e) {
    let t = new Date(),
        n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
}
function et(e) {
    return null != e && ee(e) <= g.x3;
}
function en(e) {
    let t = g.Tq[e];
    return null != t && new Date().getTime() < t;
}
function ei(e) {
    return e?.type === s.R.BUNDLE;
}
function er(e) {
    if (null != e) return e.type === s.R.BUNDLE ? s.R.BUNDLE : e.items?.[0]?.type;
}
function es(e) {
    let { invoicePreview: t, selectedSkuId: n, skusById: i } = e,
        r = t?.invoiceItems?.[0]?.unitPrice,
        s = null != r ? { amount: r.amount, currency: r.currency } : void 0;
    if (null == s && null != n) {
        let e = i[n];
        e?.price != null && (s = { amount: e.price.amount, currency: e.price.currency });
    }
    return s;
}
function ea(e, t, n) {
    if (ei(e)) return L(e);
    let i = w(e, t ? (n ? A.lid.MOBILE : A.lid.DEFAULT) : n ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.PREMIUM_TIER_2);
    return i?.amount;
}
function eo(e) {
    let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
    return !n && !(g.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
}
function el(e, t) {
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
            if (t === g.Dp.FRACTIONAL_PREMIUM_1_DAY) return "1-day nitro credit";
            if (t === g.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
            return "unknown";
        case s.R.VARIANTS_GROUP:
            return "variants group";
        default:
            return "unknown";
    }
}
function eu(e, t, n) {
    return e.sort((e, i) => {
        let r = n ? (0, m.CW)({ product: e, hasShopDiscount: t }) : O(e, t, !1),
            s = n ? (0, m.CW)({ product: i, hasShopDiscount: t }) : O(i, t, !1);
        return (r?.amount ?? 0) - (s?.amount ?? 0);
    });
}
function ec(e, t) {
    if (0 === t.length || 0 === e.length) return e;
    let n = t.map((e) => e.discountId);
    return e.sort((e, t) => {
        let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
        return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
    });
}
function ed(e) {
    return e.filter((e) => !e.isCategoryReward);
}
I.Yr.KZT, I.Yr.NGN, I.Yr.EGP;
