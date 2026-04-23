n.d(t, {
    $W: () => G,
    $b: () => x,
    Br: () => O,
    Bs: () => Z,
    CE: () => ee,
    G0: () => S,
    HF: () => Y,
    MG: () => H,
    P_: () => g,
    R8: () => R,
    V6: () => z,
    WD: () => D,
    WU: () => W,
    Wj: () => w,
    Zu: () => X,
    aT: () => j,
    aw: () => K,
    bf: () => J,
    c7: () => q,
    f6: () => P,
    fT: () => L,
    gA: () => N,
    hU: () => k,
    l8: () => f,
    oj: () => $,
    pA: () => Q,
    ps: () => y,
    rr: () => m,
    sz: () => V,
    tt: () => h,
    wo: () => F,
    x9: () => M,
    yt: () => p,
    zd: () => v,
}),
    n(321073);
var i = n(735438),
    r = n(575593),
    a = n(79387),
    s = n(723702),
    _ = n(580630),
    l = n(898461),
    o = n(837015),
    E = n(203632),
    d = n(892118),
    c = n(719986),
    u = n(623373),
    I = n(758836),
    A = n(652215),
    T = n(818348);
let S = (e) => e?.premiumType != null,
    N = (e) => e?.purchaseType === A.zF_.PREMIUM_PURCHASE,
    O = (e, t, n) =>
        p(e, n ? (t ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.MOBILE) : t ? A.lid.PREMIUM_TIER_2 : A.lid.DEFAULT),
    R = (e, t, n) => {
        let i = O(e, t, n);
        return null == i ? "" : (0, _.$g)(i?.amount, i?.currency);
    },
    f = (e) =>
        (0, s.isAndroid)() || (0, s.isIOS)()
            ? e
                ? A.lid.MOBILE_PREMIUM_TIER_2
                : A.lid.MOBILE
            : e
              ? A.lid.PREMIUM_TIER_2
              : A.lid.DEFAULT,
    C = (e) => {
        let t = e.bundledProducts;
        if (null == t) return 0;
        let n = f(!1);
        return t.reduce((e, t) => {
            let i = p(t, n);
            return e + (i?.amount ?? 0);
        }, 0);
    },
    p = (e, t) => {
        let n = e.prices[t] ?? null;
        return null != n ? n.countryPrices?.prices?.[0] : null;
    },
    m = { original: -1, discountPercentage: -1 },
    L = (e, t) => {
        if (null == e) return m;
        let n = C(e);
        if (n <= 0) return m;
        let i = p(e, f(t));
        return null == i ? m : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    D = (e, t) => {
        let { isPremiumUser: n, discount: i } = t,
            r = p(e, A.lid.DEFAULT);
        if (null == r) return null;
        if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
        let a = p(e, A.lid.PREMIUM_TIER_2),
            s = K(e) && n ? { ...r, amount: i.original } : r,
            _ = n && null != a,
            l = _ ? a : s;
        return {
            defaultPrice: r,
            originalPrice: s,
            premiumPrice: a,
            finalPrice: l,
            showNitroPrice: _,
            finalPriceIsDifferent: l.amount !== s.amount,
            showDefaultPriceOnly: !1,
        };
    },
    h = (e) => p(e, A.lid.DEFAULT)?.amount === 0,
    g = (e, t) => {
        let n = (0, i.flatMap)([...e.values()], "products");
        return (0, i.uniqBy)(
            t
                ? n.reduce(
                      (e, t) =>
                          null != t && t.type === r.R.VARIANTS_GROUP && null != t.variants
                              ? (0, i.concat)(
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
    b = (e, t) => {
        if (t === r.R.AVATAR_DECORATION) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(l.T);
            return (0, i.uniqBy)(t, "skuId");
        }
        if (t === r.R.NAMEPLATE) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(o.F);
            return (0, i.uniqBy)(t, "skuId");
        }
        if (t === r.R.PROFILE_EFFECT) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(E.C3);
            return (0, i.uniqBy)(t, "skuId");
        }
        if (t === r.R.PROFILE_FRAME) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(d.s);
            return (0, i.uniqBy)(t, "skuId");
        }
        return [];
    },
    U = (e, t) => {
        let n = g(e, !0);
        if (t === r.R.AVATAR_DECORATION) {
            let e = (0, i.flatMap)(n, "items").filter(l.T);
            return (0, i.uniqBy)(e, "skuId");
        }
        if (t === r.R.NAMEPLATE) {
            let e = (0, i.flatMap)(n, "items").filter(o.F);
            return (0, i.uniqBy)(e, "skuId");
        }
        if (t === r.R.PROFILE_EFFECT) {
            let e = (0, i.flatMap)(n, "items").filter(E.C3);
            return (0, i.uniqBy)(e, "skuId");
        }
        if (t === r.R.PROFILE_FRAME) {
            let e = (0, i.flatMap)(n, "items").filter(d.s);
            return (0, i.uniqBy)(e, "skuId");
        }
        return [];
    },
    P = (e) => (null != e ? c.M.fromServer(e) : void 0),
    M = (e) => b(e, r.R.AVATAR_DECORATION),
    y = (e, t) => (0, i.uniqBy)([...M(e), ...U(t, r.R.AVATAR_DECORATION)], "skuId"),
    G = (e) => b(e, r.R.NAMEPLATE),
    v = (e, t) => (0, i.uniqBy)([...G(e), ...U(t, r.R.NAMEPLATE)], "skuId"),
    B = (e) => b(e, r.R.PROFILE_EFFECT),
    w = (e) => U(e, r.R.PROFILE_EFFECT),
    F = (e, t) => (0, i.uniqBy)([...B(e), ...w(t)], "skuId"),
    V = (e, t) => {
        let n = B(t),
            i = w(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    H = (e, t) => (0, i.uniqBy)([...b(e, r.R.PROFILE_FRAME), ...U(t, r.R.PROFILE_FRAME)], "skuId"),
    k = (e) => e.applicationId === A.FYj,
    x = (e) => 3.8 * e,
    W = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    Y = (e) => null != e && W(e) <= I.x3,
    j = (e) => {
        let t = I.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    K = (e) => e?.type === r.R.BUNDLE,
    $ = (e) => {
        if (null != e) return e.type === r.R.BUNDLE ? r.R.BUNDLE : e.items?.[0]?.type;
    },
    Q = (e) => {
        let {
                selectedSkuPricePreview: t,
                paymentSourceId: n,
                selectedSkuId: i,
                skuPricePreviewsById: r,
                skusById: s,
            } = e,
            _ = t ?? (null != n && null != i ? r[i]?.[a.B] : null),
            l = _?.invoice_items?.[0]?.unit_price,
            o = null != l ? { amount: l.amount, currency: l.currency } : void 0;
        if (null == o && null != i) {
            let e = s[i];
            e?.price != null && (o = { amount: e.price.amount, currency: e.price.currency });
        }
        return o;
    };
T.Yr.KZT, T.Yr.NGN, T.Yr.EGP;
let q = (e, t, n) => {
        if (K(e)) return C(e);
        let i = p(e, t ? (n ? A.lid.MOBILE : A.lid.DEFAULT) : n ? A.lid.MOBILE_PREMIUM_TIER_2 : A.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    X = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(I.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
    },
    z = (e, t) => {
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
                if (t === I.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === I.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case r.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    J = (e, t, n) =>
        e.sort((e, i) => {
            let r = n ? (0, u.CW)({ product: e, isPremiumUser: t }) : O(e, t, !1),
                a = n ? (0, u.CW)({ product: i, isPremiumUser: t }) : O(i, t, !1);
            return (r?.amount ?? 0) - (a?.amount ?? 0);
        }),
    Z = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
        });
    },
    ee = (e) => e.filter((e) => !e.isCategoryReward);
