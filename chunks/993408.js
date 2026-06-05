"use strict";
n.d(t, {
    $W: () => Y,
    $b: () => Q,
    Br: () => O,
    Bs: () => eu,
    CE: () => ec,
    D0: () => S,
    Dm: () => V,
    G0: () => C,
    HF: () => ee,
    MG: () => X,
    P_: () => U,
    R8: () => b,
    V6: () => eo,
    WD: () => x,
    WU: () => J,
    Wj: () => $,
    Zu: () => ea,
    aT: () => et,
    aw: () => en,
    b_: () => N,
    bf: () => el,
    c7: () => es,
    f6: () => B,
    fT: () => P,
    gA: () => R,
    hU: () => Z,
    l8: () => D,
    oj: () => ei,
    pA: () => er,
    ps: () => j,
    rr: () => M,
    sz: () => q,
    tt: () => k,
    wo: () => z,
    x9: () => H,
    xM: () => v,
    yt: () => w,
    zd: () => W,
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
function N(e) {
    return null != e ? y[e] : null;
}
function v(e) {
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
    R = (e) => e?.purchaseType === A.zF_.PREMIUM_PURCHASE,
    O = (e, t, n) =>
        w(e, n ? (t ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.MOBILE) : t ? A.lid.PREMIUM_TIER_2 : A.lid.DEFAULT),
    b = (e, t, n) => {
        let i = O(e, t, n);
        return null == i ? "" : (0, d.$g)(i?.amount, i?.currency);
    },
    D = (e) =>
        (0, u.isAndroid)() || (0, u.isIOS)()
            ? e
                ? A.lid.MOBILE_PREMIUM_TIER_2
                : A.lid.MOBILE
            : e
              ? A.lid.PREMIUM_TIER_2
              : A.lid.DEFAULT,
    L = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = D(!1);
        return t.reduce((e, t) => {
            let i = w(t, n);
            return e + (i?.amount ?? 0);
        }, 0);
    },
    w = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    M = { original: -1, discountPercentage: -1 },
    P = (e, t) => {
        if (null == e) return M;
        let n = L(e);
        if (n <= 0) return M;
        let i = w(e, D(t));
        return null == i ? M : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    x = (e, t) => {
        let { hasShopDiscount: n, discount: i } = t,
            r = w(e, A.lid.DEFAULT);
        if (null == r) return null;
        if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
        let s = w(e, A.lid.PREMIUM_TIER_2),
            a = en(e) && n ? { ...r, amount: i.original } : r,
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
    k = (e) => w(e, A.lid.DEFAULT)?.amount === 0,
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
    G = (e, t) => {
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
    },
    F = (e, t) => {
        let n = U(e, !0);
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
    },
    V = (e) => {
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
    },
    B = (e) => (null != e ? E.M.fromServer(e) : void 0),
    H = (e) => G(e, s.R.AVATAR_DECORATION),
    j = (e, t) => (0, r.uniqBy)([...H(e), ...F(t, s.R.AVATAR_DECORATION)], "skuId"),
    Y = (e) => G(e, s.R.NAMEPLATE),
    W = (e, t) => (0, r.uniqBy)([...Y(e), ...F(t, s.R.NAMEPLATE)], "skuId"),
    K = (e) => G(e, s.R.PROFILE_EFFECT),
    $ = (e) => F(e, s.R.PROFILE_EFFECT),
    z = (e, t) => (0, r.uniqBy)([...K(e), ...$(t)], "skuId"),
    q = (e, t) => {
        let n = K(t),
            i = $(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    X = (e, t) => (0, r.uniqBy)([...G(e, s.R.PROFILE_FRAME), ...F(t, s.R.PROFILE_FRAME)], "skuId"),
    Z = (e) => e.applicationId === A.FYj,
    Q = (e) => 3.8 * e,
    J = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    ee = (e) => null != e && J(e) <= g.x3,
    et = (e) => {
        let t = g.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    en = (e) => e?.type === s.R.BUNDLE,
    ei = (e) => {
        if (null != e) return e.type === s.R.BUNDLE ? s.R.BUNDLE : e.items?.[0]?.type;
    },
    er = (e) => {
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
let es = (e, t, n) => {
        if (en(e)) return L(e);
        let i = w(e, t ? (n ? A.lid.MOBILE : A.lid.DEFAULT) : n ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    ea = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(g.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
    },
    eo = (e, t) => {
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
    },
    el = (e, t, n) =>
        e.sort((e, i) => {
            let r = n ? (0, m.CW)({ product: e, hasShopDiscount: t }) : O(e, t, !1),
                s = n ? (0, m.CW)({ product: i, hasShopDiscount: t }) : O(i, t, !1);
            return (r?.amount ?? 0) - (s?.amount ?? 0);
        }),
    eu = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
        });
    },
    ec = (e) => e.filter((e) => !e.isCategoryReward);
