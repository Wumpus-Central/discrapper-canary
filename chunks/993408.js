n(321073);
var i,
    r = n(435558),
    a = n(575593),
    s = n(931093),
    l = n(76573),
    o = n(948325),
    d = n(723702),
    c = n(448645),
    u = n(580630),
    _ = n(898461),
    E = n(837015),
    A = n(203632),
    f = n(892118),
    h = n(719986);
n(623373);
var I = n(758836),
    p = n(652215),
    m = n(818348),
    T = n(792996),
    g = (((i = {}).NITRO = "nitro"), (i.THIRDPARTY = "thirdparty"), i);
let S = { nitro: "nitro", thirdparty: "xbox" };
function N(e, t, n) {
    return R(e, n ? (t ? p.lid.MOBILE_PREMIUM_TIER_2 : p.lid.MOBILE) : t ? p.lid.PREMIUM_TIER_2 : p.lid.DEFAULT);
}
function C(e, t) {
    return ((0, d.m0)() || (0, d.un)()) && t !== m.Yr.DISCORD_ORB
        ? e
            ? p.lid.MOBILE_PREMIUM_TIER_2
            : p.lid.MOBILE
        : e
          ? p.lid.PREMIUM_TIER_2
          : p.lid.DEFAULT;
}
function O(e, t) {
    let n = e.bundledProducts;
    if (null == n) return 0;
    let i = C(!1, t);
    return n.reduce((e, n) => {
        let r = R(n, i, t);
        return e + (r?.amount ?? 0);
    }, 0);
}
function R(e, t, n) {
    let i = e.prices[t]?.countryPrices?.prices;
    return null == i ? null : ((null == n ? i[0] : i.find((e) => e.currency === n)) ?? null);
}
let L = { original: -1, discountPercentage: -1 };
function y(e) {
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
function D(e, t) {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? y(n) : n, "storeListingId");
}
function b(e, t) {
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
        let t = (0, r.flatMap)([...e.values()], "items").filter(f.s);
        return (0, r.uniqBy)(t, "skuId");
    }
    return [];
}
function v(e, t) {
    let n = D(e, !0);
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
        let e = (0, r.flatMap)(n, "items").filter(f.s);
        return (0, r.uniqBy)(e, "skuId");
    }
    return [];
}
function P(e) {
    return b(e, a.R.AVATAR_DECORATION);
}
function M(e) {
    return b(e, a.R.NAMEPLATE);
}
function U(e) {
    return b(e, a.R.PROFILE_EFFECT);
}
function w(e) {
    return v(e, a.R.PROFILE_EFFECT);
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
        n = new Date(t),
        i = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - i) / 864e5);
}
function x(e) {
    return e?.type === a.R.BUNDLE;
}
(m.Yr.KZT,
    m.Yr.NGN,
    m.Yr.EGP,
    n.d(
        t,
        {},
        {
            $W: M,
            $b: function (e) {
                return 3.8 * e;
            },
            Br: N,
            D0: g,
            Dm: function (e) {
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
            },
            G0: function (e) {
                return e?.premiumType != null;
            },
            HF: function (e) {
                return null != e && 60 >= G(e);
            },
            MG: function (e, t) {
                return (0, r.uniqBy)([...b(e, a.R.PROFILE_FRAME), ...v(t, a.R.PROFILE_FRAME)], "skuId");
            },
            P_: D,
            R8: function (e, t, n) {
                let i = N(e, t, n);
                return null == i ? "" : (0, u.$g)(i?.amount, i?.currency);
            },
            V6: function (e, t) {
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
                        if (t === I.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
                        if (t === I.Dp.FRACTIONAL_PREMIUM_1_DAY) return "1-day nitro credit";
                        if (t === I.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
                        return "unknown";
                    case a.R.VARIANTS_GROUP:
                        return "variants group";
                    default:
                        return "unknown";
                }
            },
            WD: function (e, t) {
                let { hasShopDiscount: n, discount: i } = t,
                    r = R(e, p.lid.DEFAULT);
                if (null == r) return null;
                if (r.amount <= 0) return { defaultPrice: r, showDefaultPriceOnly: !0 };
                let a = R(e, p.lid.PREMIUM_TIER_2),
                    s = x(e) && n ? { ...r, amount: i.original } : r,
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
            },
            WU: G,
            Wj: w,
            XS: y,
            Zu: function (e) {
                let { product: t, isPartiallyOwnedBundle: n, isPurchased: i } = e;
                return !n && !(I.Dp.ORB_PROFILE_BADGE === t?.skuId && i);
            },
            aT: function (e) {
                let t = I.Tq[e];
                return null != t && new Date().getTime() < t;
            },
            aw: x,
            b_: function (e) {
                return null != e ? S[e] : null;
            },
            c7: function (e, t, n) {
                if (x(e)) return O(e);
                let i = R(
                    e,
                    t ? (n ? p.lid.MOBILE : p.lid.DEFAULT) : n ? p.lid.MOBILE_PREMIUM_TIER_2 : p.lid.PREMIUM_TIER_2,
                );
                return i?.amount;
            },
            f6: function (e) {
                return null != e ? h.M.fromServer(e) : void 0;
            },
            fT: function (e, t, n) {
                if (null == e) return L;
                let i = O(e, n);
                if (i <= 0) return L;
                let r = R(e, C(t, n), n);
                return null == r ? L : { original: i, discountPercentage: Math.round(((i - r.amount) / i) * 100) };
            },
            gA: function (e) {
                return e?.purchaseType === s.z.PREMIUM_PURCHASE;
            },
            hU: function (e) {
                return e.applicationId === p.FYj;
            },
            l8: C,
            oj: function (e) {
                if (null != e) return e.type === a.R.BUNDLE ? a.R.BUNDLE : e.items?.[0]?.type;
            },
            pA: function (e) {
                let { invoicePreview: t, selectedSkuId: n, skusById: i } = e,
                    r = t?.invoiceItems?.[0]?.unitPrice,
                    a = null != r ? { amount: r.amount, currency: r.currency } : void 0;
                if (null == a && null != n) {
                    let e = i[n];
                    e?.price != null && (a = { amount: e.price.amount, currency: e.price.currency });
                }
                return a;
            },
            ps: function (e, t) {
                return (0, r.uniqBy)([...P(e), ...v(t, a.R.AVATAR_DECORATION)], "skuId");
            },
            rr: L,
            sz: function (e, t) {
                let n = U(t),
                    i = w(e).filter((e) => {
                        let { skuId: t } = e;
                        return !n.some((e) => e.skuId === t);
                    });
                return { purchased: n, shopPreviews: i };
            },
            tt: function (e) {
                return R(e, p.lid.DEFAULT)?.amount === 0;
            },
            wo: function (e, t) {
                return (0, r.uniqBy)([...U(e), ...w(t)], "skuId");
            },
            x9: P,
            xM: function (e) {
                if (!c.Ay.canUseShopDiscounts(e)) return null;
                if (c.Ay.canUseCollectibles(e)) return "nitro";
                let t = (0, o.kQ)(e?.perks, l.bb.SHOP_DISCOUNTS);
                return t?.includes(l.g$.SOURCE_NITRO)
                    ? "nitro"
                    : t?.includes(l.g$.SOURCE_THIRDPARTY_CROISSANT)
                      ? "thirdparty"
                      : null;
            },
            yt: R,
            zd: function (e, t) {
                return (0, r.uniqBy)([...M(e), ...v(t, a.R.NAMEPLATE)], "skuId");
            },
        },
    ));
