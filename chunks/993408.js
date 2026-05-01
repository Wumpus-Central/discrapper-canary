n.d(t, {
    $W: () => F,
    $b: () => Z,
    Br: () => R,
    Bs: () => er,
    CE: () => es,
    D0: () => p,
    G0: () => O,
    HF: () => Q,
    MG: () => K,
    P_: () => y,
    R8: () => g,
    V6: () => ei,
    WD: () => U,
    WU: () => q,
    Wj: () => j,
    Zu: () => en,
    aT: () => z,
    aw: () => X,
    bf: () => ea,
    c7: () => et,
    f6: () => x,
    fT: () => P,
    gA: () => C,
    hU: () => $,
    l8: () => L,
    oj: () => J,
    pA: () => ee,
    ps: () => B,
    rr: () => M,
    sz: () => W,
    tt: () => v,
    wo: () => Y,
    x9: () => V,
    xM: () => m,
    yt: () => b,
    zd: () => k,
}),
    n(321073);
var i,
    a = n(735438),
    r = n(575593),
    s = n(441574),
    l = n(349871),
    o = n(79387),
    d = n(723702),
    c = n(927578),
    _ = n(580630),
    E = n(898461),
    u = n(837015),
    A = n(203632),
    I = n(892118),
    T = n(719986),
    h = n(623373),
    S = n(758836),
    N = n(652215),
    f = n(818348),
    p = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
function m(e) {
    if (!c.Ay.canUseShopDiscounts(e)) return null;
    if (c.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, l.kQ)(e?.perks, s.bb.SHOP_DISCOUNTS);
    return t?.includes(s.g$.SOURCE_NITRO) ? "nitro" : null;
}
let O = (e) => e?.premiumType != null,
    C = (e) => e?.purchaseType === N.zF_.PREMIUM_PURCHASE,
    R = (e, t, n) =>
        b(e, n ? (t ? N.lid.MOBILE_PREMIUM_TIER_2 : N.lid.MOBILE) : t ? N.lid.PREMIUM_TIER_2 : N.lid.DEFAULT),
    g = (e, t, n) => {
        let i = R(e, t, n);
        return null == i ? "" : (0, _.$g)(i?.amount, i?.currency);
    },
    L = (e) =>
        (0, d.isAndroid)() || (0, d.isIOS)()
            ? e
                ? N.lid.MOBILE_PREMIUM_TIER_2
                : N.lid.MOBILE
            : e
              ? N.lid.PREMIUM_TIER_2
              : N.lid.DEFAULT,
    D = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = L(!1);
        return t.reduce((e, t) => {
            let i = b(t, n);
            return e + (i?.amount ?? 0);
        }, 0);
    },
    b = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    M = { original: -1, discountPercentage: -1 },
    P = (e, t) => {
        if (null == e) return M;
        let n = D(e);
        if (n <= 0) return M;
        let i = b(e, L(t));
        return null == i ? M : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    U = (e, t) => {
        let { hasShopDiscount: n, discount: i } = t,
            a = b(e, N.lid.DEFAULT);
        if (null == a) return null;
        if (a.amount <= 0) return { defaultPrice: a, showDefaultPriceOnly: !0 };
        let r = b(e, N.lid.PREMIUM_TIER_2),
            s = X(e) && n ? { ...a, amount: i.original } : a,
            l = n && null != r,
            o = l ? r : s;
        return {
            defaultPrice: a,
            originalPrice: s,
            premiumPrice: r,
            finalPrice: o,
            showDiscountPrice: l,
            finalPriceIsDifferent: o.amount !== s.amount,
            showDefaultPriceOnly: !1,
        };
    },
    v = (e) => b(e, N.lid.DEFAULT)?.amount === 0,
    y = (e, t) => {
        let n = (0, a.flatMap)([...e.values()], "products");
        return (0, a.uniqBy)(
            t
                ? n.reduce(
                      (e, t) =>
                          null != t && t.type === r.R.VARIANTS_GROUP && null != t.variants
                              ? (0, a.concat)(
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
        if (t === r.R.AVATAR_DECORATION) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(E.T);
            return (0, a.uniqBy)(t, "skuId");
        }
        if (t === r.R.NAMEPLATE) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(u.F);
            return (0, a.uniqBy)(t, "skuId");
        }
        if (t === r.R.PROFILE_EFFECT) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(A.C3);
            return (0, a.uniqBy)(t, "skuId");
        }
        if (t === r.R.PROFILE_FRAME) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(I.s);
            return (0, a.uniqBy)(t, "skuId");
        }
        return [];
    },
    w = (e, t) => {
        let n = y(e, !0);
        if (t === r.R.AVATAR_DECORATION) {
            let e = (0, a.flatMap)(n, "items").filter(E.T);
            return (0, a.uniqBy)(e, "skuId");
        }
        if (t === r.R.NAMEPLATE) {
            let e = (0, a.flatMap)(n, "items").filter(u.F);
            return (0, a.uniqBy)(e, "skuId");
        }
        if (t === r.R.PROFILE_EFFECT) {
            let e = (0, a.flatMap)(n, "items").filter(A.C3);
            return (0, a.uniqBy)(e, "skuId");
        }
        if (t === r.R.PROFILE_FRAME) {
            let e = (0, a.flatMap)(n, "items").filter(I.s);
            return (0, a.uniqBy)(e, "skuId");
        }
        return [];
    },
    x = (e) => (null != e ? T.M.fromServer(e) : void 0),
    V = (e) => G(e, r.R.AVATAR_DECORATION),
    B = (e, t) => (0, a.uniqBy)([...V(e), ...w(t, r.R.AVATAR_DECORATION)], "skuId"),
    F = (e) => G(e, r.R.NAMEPLATE),
    k = (e, t) => (0, a.uniqBy)([...F(e), ...w(t, r.R.NAMEPLATE)], "skuId"),
    H = (e) => G(e, r.R.PROFILE_EFFECT),
    j = (e) => w(e, r.R.PROFILE_EFFECT),
    Y = (e, t) => (0, a.uniqBy)([...H(e), ...j(t)], "skuId"),
    W = (e, t) => {
        let n = H(t),
            i = j(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    K = (e, t) => (0, a.uniqBy)([...G(e, r.R.PROFILE_FRAME), ...w(t, r.R.PROFILE_FRAME)], "skuId"),
    $ = (e) => e.applicationId === N.FYj,
    Z = (e) => 3.8 * e,
    q = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    Q = (e) => null != e && q(e) <= S.x3,
    z = (e) => {
        let t = S.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    X = (e) => e?.type === r.R.BUNDLE,
    J = (e) => {
        if (null != e) return e.type === r.R.BUNDLE ? r.R.BUNDLE : e.items?.[0]?.type;
    },
    ee = (e) => {
        let {
                selectedSkuPricePreview: t,
                paymentSourceId: n,
                selectedSkuId: i,
                skuPricePreviewsById: a,
                skusById: r,
            } = e,
            s = t ?? (null != n && null != i ? a[i]?.[o.B] : null),
            l = s?.invoice_items?.[0]?.unit_price,
            d = null != l ? { amount: l.amount, currency: l.currency } : void 0;
        if (null == d && null != i) {
            let e = r[i];
            e?.price != null && (d = { amount: e.price.amount, currency: e.price.currency });
        }
        return d;
    };
f.Yr.KZT, f.Yr.NGN, f.Yr.EGP;
let et = (e, t, n) => {
        if (X(e)) return D(e);
        let i = b(e, t ? (n ? N.lid.MOBILE : N.lid.DEFAULT) : n ? N.lid.MOBILE_PREMIUM_TIER_2 : N.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    en = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(S.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
    },
    ei = (e, t) => {
        switch (e) {
            case r.R.AVATAR_DECORATION:
                return "avatar decoration";
            case r.R.PROFILE_EFFECT:
                return "profile effect";
            case r.R.NAMEPLATE:
                return "nameplate";
            case r.R.BUNDLE:
                return "bundle";
            case r.R.EXTERNAL_SKU:
                if (t === S.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === S.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case r.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    ea = (e, t, n) =>
        e.sort((e, i) => {
            let a = n ? (0, h.CW)({ product: e, hasShopDiscount: t }) : R(e, t, !1),
                r = n ? (0, h.CW)({ product: i, hasShopDiscount: t }) : R(i, t, !1);
            return (a?.amount ?? 0) - (r?.amount ?? 0);
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
