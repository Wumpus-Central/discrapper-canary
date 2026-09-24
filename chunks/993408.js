(n.d(t, {
    $W: () => Y,
    $b: () => J,
    Br: () => L,
    CE: () => ec,
    D0: () => g,
    Dm: () => V,
    G0: () => O,
    HF: () => et,
    MG: () => Z,
    P_: () => k,
    R8: () => y,
    V6: () => eo,
    WD: () => w,
    WU: () => ee,
    Wj: () => z,
    XS: () => x,
    Zu: () => el,
    aT: () => en,
    aw: () => ei,
    b_: () => N,
    bf: () => ed,
    c7: () => es,
    es: () => P,
    f6: () => H,
    fT: () => U,
    gA: () => R,
    hU: () => Q,
    l8: () => D,
    oj: () => er,
    pA: () => ea,
    ps: () => W,
    rr: () => M,
    sz: () => q,
    tt: () => G,
    wo: () => X,
    x9: () => j,
    xM: () => C,
    yt: () => b,
    zd: () => K,
}),
    n(321073));
var i,
    r = n(435558),
    a = n(575593),
    s = n(441574),
    l = n(349871),
    o = n(723702),
    d = n(158045),
    c = n(580630),
    u = n(898461),
    _ = n(837015),
    E = n(203632),
    A = n(892118),
    h = n(719986),
    I = n(623373),
    f = n(758836),
    p = n(652215),
    T = n(818348),
    m = n(375708),
    g = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
let S = { nitro: "nitro", thirdparty: "xbox" };
function N(e) {
    return null != e ? S[e] : null;
}
function C(e) {
    if (!d.Ay.canUseShopDiscounts(e)) return null;
    if (d.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, l.kQ)(e?.perks, s.bb.SHOP_DISCOUNTS);
    return t?.includes(s.g$.SOURCE_NITRO)
        ? "nitro"
        : t?.includes(s.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "thirdparty"
          : null;
}
function O(e) {
    return e?.premiumType != null;
}
function R(e) {
    return e?.purchaseType === p.zF_.PREMIUM_PURCHASE;
}
function L(e, t, n) {
    return b(e, n ? (t ? p.lid.MOBILE_PREMIUM_TIER_2 : p.lid.MOBILE) : t ? p.lid.PREMIUM_TIER_2 : p.lid.DEFAULT);
}
function y(e, t, n) {
    let i = L(e, t, n);
    return null == i ? "" : (0, c.$g)(i?.amount, i?.currency);
}
function D(e, t) {
    return ((0, o.isAndroid)() || (0, o.isIOS)()) && t !== T.Yr.DISCORD_ORB
        ? e
            ? p.lid.MOBILE_PREMIUM_TIER_2
            : p.lid.MOBILE
        : e
          ? p.lid.PREMIUM_TIER_2
          : p.lid.DEFAULT;
}
function v(e, t) {
    let n = e.bundledProducts;
    if (null == n) return 0;
    let i = D(!1, t);
    return n.reduce((e, n) => {
        let r = b(n, i, t);
        return e + (r?.amount ?? 0);
    }, 0);
}
function b(e, t, n) {
    let i = e.prices[t]?.countryPrices?.prices;
    return null == i ? null : ((null == n ? i[0] : i.find((e) => e.currency === n)) ?? null);
}
let M = { original: -1, discountPercentage: -1 },
    P = 5;
function U(e, t, n) {
    if (null == e) return M;
    let i = v(e, n);
    if (i <= 0) return M;
    let r = b(e, D(t, n), n);
    return null == r ? M : { original: i, discountPercentage: Math.round(((i - r.amount) / i) * 100) };
}
function w(e, t) {
    let { hasShopDiscount: n, discount: i } = t,
        r = b(e, p.lid.DEFAULT);
    if (null == r) return null;
    if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
    let a = b(e, p.lid.PREMIUM_TIER_2),
        s = ei(e) && n ? { ...r, amount: i.original } : r,
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
function G(e) {
    return b(e, p.lid.DEFAULT)?.amount === 0;
}
function x(e) {
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
function k(e, t) {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? x(n) : n, "storeListingId");
}
function F(e, t) {
    if (t === a.R.AVATAR_DECORATION) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(u.T);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === a.R.NAMEPLATE) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(_.F);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === a.R.PROFILE_EFFECT) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(E.C3);
        return (0, r.uniqBy)(t, "skuId");
    }
    if (t === a.R.PROFILE_FRAME) {
        let t = (0, r.flatMap)([...e.values()], "items").filter(A.s);
        return (0, r.uniqBy)(t, "skuId");
    }
    return [];
}
function B(e, t) {
    let n = k(e, !0);
    if (t === a.R.AVATAR_DECORATION) {
        let e = (0, r.flatMap)(n, "items").filter(u.T);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === a.R.NAMEPLATE) {
        let e = (0, r.flatMap)(n, "items").filter(_.F);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === a.R.PROFILE_EFFECT) {
        let e = (0, r.flatMap)(n, "items").filter(E.C3);
        return (0, r.uniqBy)(e, "skuId");
    }
    if (t === a.R.PROFILE_FRAME) {
        let e = (0, r.flatMap)(n, "items").filter(A.s);
        return (0, r.uniqBy)(e, "skuId");
    }
    return [];
}
function V(e) {
    switch (e) {
        case a.R.AVATAR_DECORATION:
            return m.intl.string(m.t["7v0T9P"]);
        case a.R.PROFILE_EFFECT:
            return m.intl.string(m.t.wR5wOo);
        case a.R.NAMEPLATE:
            return m.intl.string(m.t.x5CoXR);
        case a.R.PROFILE_FRAME:
            return m.intl.string(m.t.GWrZOd);
        default:
            return null;
    }
}
function H(e) {
    return null != e ? h.M.fromServer(e) : void 0;
}
function j(e) {
    return F(e, a.R.AVATAR_DECORATION);
}
function W(e, t) {
    return (0, r.uniqBy)([...j(e), ...B(t, a.R.AVATAR_DECORATION)], "skuId");
}
function Y(e) {
    return F(e, a.R.NAMEPLATE);
}
function K(e, t) {
    return (0, r.uniqBy)([...Y(e), ...B(t, a.R.NAMEPLATE)], "skuId");
}
function $(e) {
    return F(e, a.R.PROFILE_EFFECT);
}
function z(e) {
    return B(e, a.R.PROFILE_EFFECT);
}
function X(e, t) {
    return (0, r.uniqBy)([...$(e), ...z(t)], "skuId");
}
function q(e, t) {
    let n = $(t),
        i = z(e).filter((e) => {
            let { skuId: t } = e;
            return !n.some((e) => e.skuId === t);
        });
    return { purchased: n, shopPreviews: i };
}
function Z(e, t) {
    return (0, r.uniqBy)([...F(e, a.R.PROFILE_FRAME), ...B(t, a.R.PROFILE_FRAME)], "skuId");
}
function Q(e) {
    return e.applicationId === p.FYj;
}
function J(e) {
    return 3.8 * e;
}
function ee(e) {
    let t = new Date(),
        n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
}
function et(e) {
    return null != e && ee(e) <= f.x3;
}
function en(e) {
    let t = f.Tq[e];
    return null != t && new Date().getTime() < t;
}
function ei(e) {
    return e?.type === a.R.BUNDLE;
}
function er(e) {
    if (null != e) return e.type === a.R.BUNDLE ? a.R.BUNDLE : e.items?.[0]?.type;
}
function ea(e) {
    let { invoicePreview: t, selectedSkuId: n, skusById: i } = e,
        r = t?.invoiceItems?.[0]?.unitPrice,
        a = null != r ? { amount: r.amount, currency: r.currency } : void 0;
    if (null == a && null != n) {
        let e = i[n];
        e?.price != null && (a = { amount: e.price.amount, currency: e.price.currency });
    }
    return a;
}
function es(e, t, n) {
    if (ei(e)) return v(e);
    let i = b(e, t ? (n ? p.lid.MOBILE : p.lid.DEFAULT) : n ? p.lid.MOBILE_PREMIUM_TIER_2 : p.lid.PREMIUM_TIER_2);
    return i?.amount;
}
function el(e) {
    let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
    return !n && !(f.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
}
function eo(e, t) {
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
            if (t === f.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
            if (t === f.Dp.FRACTIONAL_PREMIUM_1_DAY) return "1-day nitro credit";
            if (t === f.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
            return "unknown";
        case a.R.VARIANTS_GROUP:
            return "variants group";
        default:
            return "unknown";
    }
}
function ed(e, t, n) {
    return e.sort((e, i) => {
        let r = n ? (0, I.CW)({ product: e, hasShopDiscount: t }) : L(e, t, !1),
            a = n ? (0, I.CW)({ product: i, hasShopDiscount: t }) : L(i, t, !1);
        return (r?.amount ?? 0) - (a?.amount ?? 0);
    });
}
function ec(e) {
    return e.filter((e) => !e.isCategoryReward);
}
(T.Yr.KZT, T.Yr.NGN, T.Yr.EGP);
