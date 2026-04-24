n.d(t, {
    $W: () => H,
    $b: () => Q,
    Br: () => L,
    Bs: () => er,
    CE: () => e_,
    D0: () => f,
    G0: () => p,
    HF: () => X,
    MG: () => j,
    P_: () => y,
    R8: () => m,
    V6: () => ei,
    WD: () => M,
    WU: () => q,
    Wj: () => Y,
    Zu: () => en,
    aT: () => Z,
    aw: () => z,
    bf: () => ea,
    c7: () => et,
    f6: () => w,
    fT: () => P,
    gA: () => D,
    hU: () => $,
    l8: () => h,
    oj: () => J,
    pA: () => ee,
    ps: () => V,
    rr: () => U,
    sz: () => K,
    tt: () => G,
    wo: () => x,
    x9: () => F,
    xM: () => C,
    yt: () => b,
    zd: () => k,
}),
    n(321073);
var i,
    a = n(735438),
    r = n(575593),
    _ = n(441574),
    s = n(349871),
    l = n(79387),
    o = n(723702),
    E = n(927578),
    d = n(580630),
    c = n(898461),
    u = n(837015),
    I = n(203632),
    T = n(892118),
    A = n(719986),
    S = n(623373),
    N = n(758836),
    O = n(652215),
    R = n(818348),
    f = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
function C(e) {
    if (!E.Ay.canUseShopDiscounts(e)) return null;
    if (E.Ay.canUseCollectibles(e)) return "nitro";
    let t = (0, s.kQ)(e?.perks, _.bb.SHOP_DISCOUNTS);
    return t?.includes(_.g$.SOURCE_NITRO) ? "nitro" : null;
}
let p = (e) => e?.premiumType != null,
    D = (e) => e?.purchaseType === O.zF_.PREMIUM_PURCHASE,
    L = (e, t, n) =>
        b(e, n ? (t ? O.lid.MOBILE_PREMIUM_TIER_2 : O.lid.MOBILE) : t ? O.lid.PREMIUM_TIER_2 : O.lid.DEFAULT),
    m = (e, t, n) => {
        let i = L(e, t, n);
        return null == i ? "" : (0, d.$g)(i?.amount, i?.currency);
    },
    h = (e) =>
        (0, o.isAndroid)() || (0, o.isIOS)()
            ? e
                ? O.lid.MOBILE_PREMIUM_TIER_2
                : O.lid.MOBILE
            : e
              ? O.lid.PREMIUM_TIER_2
              : O.lid.DEFAULT,
    g = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = h(!1);
        return t.reduce((e, t) => {
            let i = b(t, n);
            return e + (i?.amount ?? 0);
        }, 0);
    },
    b = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    U = { original: -1, discountPercentage: -1 },
    P = (e, t) => {
        if (null == e) return U;
        let n = g(e);
        if (n <= 0) return U;
        let i = b(e, h(t));
        return null == i ? U : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    M = (e, t) => {
        let { hasShopDiscount: n, discount: i } = t,
            a = b(e, O.lid.DEFAULT);
        if (null == a) return null;
        if (a.amount <= 0) return { defaultPrice: a, showDefaultPriceOnly: !0 };
        let r = b(e, O.lid.PREMIUM_TIER_2),
            _ = z(e) && n ? { ...a, amount: i.original } : a,
            s = n && null != r,
            l = s ? r : _;
        return {
            defaultPrice: a,
            originalPrice: _,
            premiumPrice: r,
            finalPrice: l,
            showDiscountPrice: s,
            finalPriceIsDifferent: l.amount !== _.amount,
            showDefaultPriceOnly: !1,
        };
    },
    G = (e) => b(e, O.lid.DEFAULT)?.amount === 0,
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
    v = (e, t) => {
        if (t === r.R.AVATAR_DECORATION) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(c.T);
            return (0, a.uniqBy)(t, "skuId");
        }
        if (t === r.R.NAMEPLATE) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(u.F);
            return (0, a.uniqBy)(t, "skuId");
        }
        if (t === r.R.PROFILE_EFFECT) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(I.C3);
            return (0, a.uniqBy)(t, "skuId");
        }
        if (t === r.R.PROFILE_FRAME) {
            let t = (0, a.flatMap)([...e.values()], "items").filter(T.s);
            return (0, a.uniqBy)(t, "skuId");
        }
        return [];
    },
    B = (e, t) => {
        let n = y(e, !0);
        if (t === r.R.AVATAR_DECORATION) {
            let e = (0, a.flatMap)(n, "items").filter(c.T);
            return (0, a.uniqBy)(e, "skuId");
        }
        if (t === r.R.NAMEPLATE) {
            let e = (0, a.flatMap)(n, "items").filter(u.F);
            return (0, a.uniqBy)(e, "skuId");
        }
        if (t === r.R.PROFILE_EFFECT) {
            let e = (0, a.flatMap)(n, "items").filter(I.C3);
            return (0, a.uniqBy)(e, "skuId");
        }
        if (t === r.R.PROFILE_FRAME) {
            let e = (0, a.flatMap)(n, "items").filter(T.s);
            return (0, a.uniqBy)(e, "skuId");
        }
        return [];
    },
    w = (e) => (null != e ? A.M.fromServer(e) : void 0),
    F = (e) => v(e, r.R.AVATAR_DECORATION),
    V = (e, t) => (0, a.uniqBy)([...F(e), ...B(t, r.R.AVATAR_DECORATION)], "skuId"),
    H = (e) => v(e, r.R.NAMEPLATE),
    k = (e, t) => (0, a.uniqBy)([...H(e), ...B(t, r.R.NAMEPLATE)], "skuId"),
    W = (e) => v(e, r.R.PROFILE_EFFECT),
    Y = (e) => B(e, r.R.PROFILE_EFFECT),
    x = (e, t) => (0, a.uniqBy)([...W(e), ...Y(t)], "skuId"),
    K = (e, t) => {
        let n = W(t),
            i = Y(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    j = (e, t) => (0, a.uniqBy)([...v(e, r.R.PROFILE_FRAME), ...B(t, r.R.PROFILE_FRAME)], "skuId"),
    $ = (e) => e.applicationId === O.FYj,
    Q = (e) => 3.8 * e,
    q = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    X = (e) => null != e && q(e) <= N.x3,
    Z = (e) => {
        let t = N.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    z = (e) => e?.type === r.R.BUNDLE,
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
            _ = t ?? (null != n && null != i ? a[i]?.[l.B] : null),
            s = _?.invoice_items?.[0]?.unit_price,
            o = null != s ? { amount: s.amount, currency: s.currency } : void 0;
        if (null == o && null != i) {
            let e = r[i];
            e?.price != null && (o = { amount: e.price.amount, currency: e.price.currency });
        }
        return o;
    };
R.Yr.KZT, R.Yr.NGN, R.Yr.EGP;
let et = (e, t, n) => {
        if (z(e)) return g(e);
        let i = b(e, t ? (n ? O.lid.MOBILE : O.lid.DEFAULT) : n ? O.lid.MOBILE_PREMIUM_TIER_2 : O.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    en = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(N.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
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
                if (t === N.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === N.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case r.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    ea = (e, t, n) =>
        e.sort((e, i) => {
            let a = n ? (0, S.CW)({ product: e, hasShopDiscount: t }) : L(e, t, !1),
                r = n ? (0, S.CW)({ product: i, hasShopDiscount: t }) : L(i, t, !1);
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
    e_ = (e) => e.filter((e) => !e.isCategoryReward);
