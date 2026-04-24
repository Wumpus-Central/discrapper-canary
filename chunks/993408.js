n.d(t, {
    $W: () => y,
    $b: () => W,
    Br: () => O,
    Bs: () => J,
    CE: () => ee,
    G0: () => S,
    HF: () => x,
    MG: () => H,
    P_: () => g,
    R8: () => R,
    V6: () => Z,
    WD: () => m,
    WU: () => Y,
    Wj: () => w,
    Zu: () => X,
    aT: () => K,
    aw: () => j,
    bf: () => z,
    c7: () => q,
    f6: () => P,
    fT: () => L,
    gA: () => N,
    hU: () => k,
    l8: () => f,
    oj: () => $,
    pA: () => Q,
    ps: () => G,
    rr: () => D,
    sz: () => V,
    tt: () => h,
    wo: () => F,
    x9: () => M,
    yt: () => p,
    zd: () => v,
}),
    n(321073);
var i = n(735438),
    a = n(575593),
    r = n(79387),
    _ = n(723702),
    s = n(580630),
    l = n(898461),
    o = n(837015),
    E = n(203632),
    d = n(892118),
    c = n(719986),
    u = n(623373),
    I = n(758836),
    T = n(652215),
    A = n(818348);
let S = (e) => e?.premiumType != null,
    N = (e) => e?.purchaseType === T.zF_.PREMIUM_PURCHASE,
    O = (e, t, n) =>
        p(e, n ? (t ? T.lid.MOBILE_PREMIUM_TIER_2 : T.lid.MOBILE) : t ? T.lid.PREMIUM_TIER_2 : T.lid.DEFAULT),
    R = (e, t, n) => {
        let i = O(e, t, n);
        return null == i ? "" : (0, s.$g)(i?.amount, i?.currency);
    },
    f = (e) =>
        (0, _.isAndroid)() || (0, _.isIOS)()
            ? e
                ? T.lid.MOBILE_PREMIUM_TIER_2
                : T.lid.MOBILE
            : e
              ? T.lid.PREMIUM_TIER_2
              : T.lid.DEFAULT,
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
    D = { original: -1, discountPercentage: -1 },
    L = (e, t) => {
        if (null == e) return D;
        let n = C(e);
        if (n <= 0) return D;
        let i = p(e, f(t));
        return null == i ? D : { original: n, discountPercentage: Math.round(((n - i.amount) / n) * 100) };
    },
    m = (e, t) => {
        let { isPremiumUser: n, discount: i } = t,
            a = p(e, T.lid.DEFAULT);
        if (null == a) return null;
        if (a.amount <= 0) return { defaultPrice: a, showDefaultPriceOnly: !0 };
        let r = p(e, T.lid.PREMIUM_TIER_2),
            _ = j(e) && n ? { ...a, amount: i.original } : a,
            s = n && null != r,
            l = s ? r : _;
        return {
            defaultPrice: a,
            originalPrice: _,
            premiumPrice: r,
            finalPrice: l,
            showNitroPrice: s,
            finalPriceIsDifferent: l.amount !== _.amount,
            showDefaultPriceOnly: !1,
        };
    },
    h = (e) => p(e, T.lid.DEFAULT)?.amount === 0,
    g = (e, t) => {
        let n = (0, i.flatMap)([...e.values()], "products");
        return (0, i.uniqBy)(
            t
                ? n.reduce(
                      (e, t) =>
                          null != t && t.type === a.R.VARIANTS_GROUP && null != t.variants
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
    U = (e, t) => {
        if (t === a.R.AVATAR_DECORATION) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(l.T);
            return (0, i.uniqBy)(t, "skuId");
        }
        if (t === a.R.NAMEPLATE) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(o.F);
            return (0, i.uniqBy)(t, "skuId");
        }
        if (t === a.R.PROFILE_EFFECT) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(E.C3);
            return (0, i.uniqBy)(t, "skuId");
        }
        if (t === a.R.PROFILE_FRAME) {
            let t = (0, i.flatMap)([...e.values()], "items").filter(d.s);
            return (0, i.uniqBy)(t, "skuId");
        }
        return [];
    },
    b = (e, t) => {
        let n = g(e, !0);
        if (t === a.R.AVATAR_DECORATION) {
            let e = (0, i.flatMap)(n, "items").filter(l.T);
            return (0, i.uniqBy)(e, "skuId");
        }
        if (t === a.R.NAMEPLATE) {
            let e = (0, i.flatMap)(n, "items").filter(o.F);
            return (0, i.uniqBy)(e, "skuId");
        }
        if (t === a.R.PROFILE_EFFECT) {
            let e = (0, i.flatMap)(n, "items").filter(E.C3);
            return (0, i.uniqBy)(e, "skuId");
        }
        if (t === a.R.PROFILE_FRAME) {
            let e = (0, i.flatMap)(n, "items").filter(d.s);
            return (0, i.uniqBy)(e, "skuId");
        }
        return [];
    },
    P = (e) => (null != e ? c.M.fromServer(e) : void 0),
    M = (e) => U(e, a.R.AVATAR_DECORATION),
    G = (e, t) => (0, i.uniqBy)([...M(e), ...b(t, a.R.AVATAR_DECORATION)], "skuId"),
    y = (e) => U(e, a.R.NAMEPLATE),
    v = (e, t) => (0, i.uniqBy)([...y(e), ...b(t, a.R.NAMEPLATE)], "skuId"),
    B = (e) => U(e, a.R.PROFILE_EFFECT),
    w = (e) => b(e, a.R.PROFILE_EFFECT),
    F = (e, t) => (0, i.uniqBy)([...B(e), ...w(t)], "skuId"),
    V = (e, t) => {
        let n = B(t),
            i = w(e).filter((e) => {
                let { skuId: t } = e;
                return !n.some((e) => e.skuId === t);
            });
        return { purchased: n, shopPreviews: i };
    },
    H = (e, t) => (0, i.uniqBy)([...U(e, a.R.PROFILE_FRAME), ...b(t, a.R.PROFILE_FRAME)], "skuId"),
    k = (e) => e.applicationId === T.FYj,
    W = (e) => 3.8 * e,
    Y = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5);
    },
    x = (e) => null != e && Y(e) <= I.x3,
    K = (e) => {
        let t = I.Tq[e];
        return null != t && new Date().getTime() < t;
    },
    j = (e) => e?.type === a.R.BUNDLE,
    $ = (e) => {
        if (null != e) return e.type === a.R.BUNDLE ? a.R.BUNDLE : e.items?.[0]?.type;
    },
    Q = (e) => {
        let {
                selectedSkuPricePreview: t,
                paymentSourceId: n,
                selectedSkuId: i,
                skuPricePreviewsById: a,
                skusById: _,
            } = e,
            s = t ?? (null != n && null != i ? a[i]?.[r.B] : null),
            l = s?.invoice_items?.[0]?.unit_price,
            o = null != l ? { amount: l.amount, currency: l.currency } : void 0;
        if (null == o && null != i) {
            let e = _[i];
            e?.price != null && (o = { amount: e.price.amount, currency: e.price.currency });
        }
        return o;
    };
A.Yr.KZT, A.Yr.NGN, A.Yr.EGP;
let q = (e, t, n) => {
        if (j(e)) return C(e);
        let i = p(e, t ? (n ? T.lid.MOBILE : T.lid.DEFAULT) : n ? T.lid.MOBILE_PREMIUM_TIER_2 : T.lid.PREMIUM_TIER_2);
        return i?.amount;
    },
    X = (e) => {
        let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
        return !n && !(I.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
    },
    Z = (e, t) => {
        switch (e) {
            case a.R.AVATAR_DECORATION:
                return "avatar decoration";
            case a.R.PROFILE_EFFECT:
                return "profile effect";
            case a.R.NAMEPLATE:
                return "nameplate";
            case a.R.BUNDLE:
                return "bundle";
            case a.R.EXTERNAL_SKU:
                if (t === I.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                if (t === I.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                return "unknown";
            case a.R.VARIANTS_GROUP:
                return "variants group";
            default:
                return "unknown";
        }
    },
    z = (e, t, n) =>
        e.sort((e, i) => {
            let a = n ? (0, u.CW)({ product: e, isPremiumUser: t }) : O(e, t, !1),
                r = n ? (0, u.CW)({ product: i, isPremiumUser: t }) : O(i, t, !1);
            return (a?.amount ?? 0) - (r?.amount ?? 0);
        }),
    J = (e, t) => {
        if (0 === t.length || 0 === e.length) return e;
        let n = t.map((e) => e.discountId);
        return e.sort((e, t) => {
            let i = e.eligibleOffers?.some((e) => n.includes(e)) ?? !1;
            return (t.eligibleOffers?.some((e) => n.includes(e)) ?? !1) - i;
        });
    },
    ee = (e) => e.filter((e) => !e.isCategoryReward);
