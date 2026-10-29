(n.d(t, {
    $W: () => W,
    $b: () => Q,
    Br: () => R,
    D0: () => m,
    Dm: () => B,
    G0: () => C,
    HF: () => ee,
    MG: () => q,
    P_: () => x,
    R8: () => L,
    V6: () => el,
    WD: () => U,
    WU: () => J,
    Wj: () => $,
    XS: () => G,
    Zu: () => es,
    aT: () => et,
    aw: () => en,
    b_: () => S,
    c7: () => ea,
    es: () => P,
    f6: () => V,
    fT: () => M,
    gA: () => O,
    hU: () => Z,
    l8: () => y,
    oj: () => ei,
    pA: () => er,
    ps: () => j,
    rr: () => b,
    sz: () => X,
    tt: () => w,
    wo: () => z,
    x9: () => H,
    xM: () => N,
    yt: () => v,
    zd: () => Y,
}),
    n(321073));
var i,
    r = n(435558),
    a = n(575593),
    s = n(441574),
    l = n(349871),
    o = n(723702),
    d = n(24482),
    c = n(580630),
    u = n(898461),
    _ = n(837015),
    E = n(203632),
    A = n(892118),
    h = n(719986);
n(623373);
var f = n(758836),
    I = n(652215),
    p = n(818348),
    T = n(105292),
    m = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
let g = { nitro: "nitro", thirdparty: "xbox" };
function S(e) {
    return null != e ? g[e] : null;
}
function N(e) {
    if (!d.Ay.canUseShopDiscounts(e)) return null;
    if (d.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, l.kQ)(e?.perks, s.bb.SHOP_DISCOUNTS);
    return t?.includes(s.g$.SOURCE_NITRO)
        ? "nitro"
        : t?.includes(s.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "thirdparty"
          : null;
}
function C(e) {
    return e?.premiumType != null;
}
function O(e) {
    return e?.purchaseType === I.zF_.PREMIUM_PURCHASE;
}
function R(e, t, n) {
    return v(e, n ? (t ? I.lid.MOBILE_PREMIUM_TIER_2 : I.lid.MOBILE) : t ? I.lid.PREMIUM_TIER_2 : I.lid.DEFAULT);
}
function L(e, t, n) {
    let i = R(e, t, n);
    return null == i ? "" : (0, c.$g)(i?.amount, i?.currency);
}
function y(e, t) {
    return ((0, o.isAndroid)() || (0, o.isIOS)()) && t !== p.Yr.DISCORD_ORB
        ? e
            ? I.lid.MOBILE_PREMIUM_TIER_2
            : I.lid.MOBILE
        : e
          ? I.lid.PREMIUM_TIER_2
          : I.lid.DEFAULT;
}
function D(e, t) {
    let n = e.bundledProducts;
    if (null == n) return 0;
    let i = y(!1, t);
    return n.reduce((e, n) => {
        let r = v(n, i, t);
        return e + (r?.amount ?? 0);
    }, 0);
}
function v(e, t, n) {
    let i = e.prices[t]?.countryPrices?.prices;
    return null == i ? null : ((null == n ? i[0] : i.find((e) => e.currency === n)) ?? null);
}
let b = { original: -1, discountPercentage: -1 },
    P = 5;
function M(e, t, n) {
    if (null == e) return b;
    let i = D(e, n);
    if (i <= 0) return b;
    let r = v(e, y(t, n), n);
    return null == r ? b : { original: i, discountPercentage: Math.round(((i - r.amount) / i) * 100) };
}
function U(e, t) {
    let { hasShopDiscount: n, discount: i } = t,
        r = v(e, I.lid.DEFAULT);
    if (null == r) return null;
    if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
    let a = v(e, I.lid.PREMIUM_TIER_2),
        s = en(e) && n ? { ...r, amount: i.original } : r,
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
function w(e) {
    return v(e, I.lid.DEFAULT)?.amount === 0;
}
function G(e) {
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
function x(e, t) {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? G(n) : n, "storeListingId");
}
function k(e, t) {
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
function F(e, t) {
    let n = x(e, !0);
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
function B(e) {
    switch (e) {
        case a.R.AVATAR_DECORATION:
            return T.intl.string(T.t["7v0T9P"]);
        case a.R.PROFILE_EFFECT:
            return T.intl.string(T.t.wR5wOo);
        case a.R.NAMEPLATE:
            return T.intl.string(T.t.x5CoXR);
        case a.R.PROFILE_FRAME:
            return T.intl.string(T.t.GWrZOd);
        default:
            return null;
    }
}
function V(e) {
    return null != e ? h.M.fromServer(e) : void 0;
}
function H(e) {
    return k(e, a.R.AVATAR_DECORATION);
}
function j(e, t) {
    return (0, r.uniqBy)([...H(e), ...F(t, a.R.AVATAR_DECORATION)], "skuId");
}
function W(e) {
    return k(e, a.R.NAMEPLATE);
}
function Y(e, t) {
    return (0, r.uniqBy)([...W(e), ...F(t, a.R.NAMEPLATE)], "skuId");
}
function K(e) {
    return k(e, a.R.PROFILE_EFFECT);
}
function $(e) {
    return F(e, a.R.PROFILE_EFFECT);
}
function z(e, t) {
    return (0, r.uniqBy)([...K(e), ...$(t)], "skuId");
}
function X(e, t) {
    let n = K(t),
        i = $(e).filter((e) => {
            let { skuId: t } = e;
            return !n.some((e) => e.skuId === t);
        });
    return { purchased: n, shopPreviews: i };
}
function q(e, t) {
    return (0, r.uniqBy)([...k(e, a.R.PROFILE_FRAME), ...F(t, a.R.PROFILE_FRAME)], "skuId");
}
function Z(e) {
    return e.applicationId === I.FYj;
}
function Q(e) {
    return 3.8 * e;
}
function J(e) {
    let t = new Date(),
        n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
}
function ee(e) {
    return null != e && J(e) <= f.x3;
}
function et(e) {
    let t = f.Tq[e];
    return null != t && new Date().getTime() < t;
}
function en(e) {
    return e?.type === a.R.BUNDLE;
}
function ei(e) {
    if (null != e) return e.type === a.R.BUNDLE ? a.R.BUNDLE : e.items?.[0]?.type;
}
function er(e) {
    let { invoicePreview: t, selectedSkuId: n, skusById: i } = e,
        r = t?.invoiceItems?.[0]?.unitPrice,
        a = null != r ? { amount: r.amount, currency: r.currency } : void 0;
    if (null == a && null != n) {
        let e = i[n];
        e?.price != null && (a = { amount: e.price.amount, currency: e.price.currency });
    }
    return a;
}
function ea(e, t, n) {
    if (en(e)) return D(e);
    let i = v(e, t ? (n ? I.lid.MOBILE : I.lid.DEFAULT) : n ? I.lid.MOBILE_PREMIUM_TIER_2 : I.lid.PREMIUM_TIER_2);
    return i?.amount;
}
function es(e) {
    let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
    return !n && !(f.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
}
function el(e, t) {
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
(p.Yr.KZT, p.Yr.NGN, p.Yr.EGP);
