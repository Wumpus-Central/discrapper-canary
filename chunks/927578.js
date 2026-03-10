"use strict";
n.d(t, {
    $Q: () => K,
    $k: () => eO,
    Ay: () => tH,
    CC: () => C.CC,
    D8: () => X,
    Dd: () => ei,
    EJ: () => e1,
    EL: () => V,
    Em: () => tN,
    FJ: () => Q,
    FY: () => eY,
    GX: () => eQ,
    Ge: () => eB,
    J$: () => eC,
    JM: () => B,
    Ke: () => Z,
    LE: () => eW,
    L_: () => tG,
    Mn: () => ee,
    Nc: () => ey,
    OU: () => eo,
    Of: () => ez,
    Om: () => eJ,
    PK: () => eP,
    Pg: () => eX,
    Q8: () => ev,
    RH: () => en,
    Rr: () => eH,
    TW: () => C.ki,
    Tm: () => eu,
    To: () => tV,
    U8: () => z,
    UC: () => $,
    Uf: () => eb,
    YE: () => C.YE,
    Zb: () => eE,
    Zw: () => et,
    _e: () => eT,
    aE: () => eq,
    aZ: () => e6,
    bx: () => e_,
    e1: () => tD,
    ee: () => eZ,
    ff: () => eV,
    iv: () => tk,
    jh: () => eL,
    ji: () => eA,
    kX: () => eS,
    ki: () => ex,
    m6: () => J,
    mH: () => tv,
    mv: () => e7,
    nB: () => ea,
    nK: () => tC,
    pb: () => Y,
    qn: () => e0,
    re: () => eK,
    sS: () => eD,
    tS: () => ej,
    tW: () => e$,
    xq: () => ep,
    y8: () => H,
    ys: () => em,
    z4: () => eh,
}),
    n(667532),
    n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(989349),
    a = n.n(s),
    o = n(311907),
    l = n(975807),
    u = n(366999),
    c = n(626584),
    d = n(367888),
    _ = n(493740),
    f = n(832343),
    p = n(832946),
    h = n(287809),
    m = n(615405),
    E = n(295405),
    g = n(97352),
    A = n(166403),
    I = n(739508),
    T = n(405269),
    S = n(927813),
    y = n(255438),
    v = n(723702),
    N = n(125584),
    C = n(474090),
    R = n(580630),
    O = n(652215),
    b = n(100544),
    D = n(788868),
    L = n(88001),
    w = n(818348),
    M = n(985018),
    x = n(519412);
let P = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    k = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    U = new c.A("PremiumUtils.tsx"),
    G = 2592e6;
var F = (function (e) {
    return (e.MID = "mid"), (e.HIGH = "high"), e;
})({});
function V(e) {
    return e.items.find((e) => D.JM.has(e.planId));
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = E.A.defaultPaymentSourceId ?? void 0,
        a = A.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        H(e, t, n, { paymentSourceId: s, currency: r }, i)
    );
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: s, currency: a } = r;
    if (null != g.A.get(e)) {
        let r = O.lid.DEFAULT;
        n ? (r = O.lid.GIFT) : t && (r = O.lid.PREMIUM_TIER_1);
        let o = W(e, { paymentSourceId: s, purchaseType: r, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (i &&
                    (0, I.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: r.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let o = Error("Plan not found");
    throw (i && (0, I.pM)(o, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...r, isGift: n } }), o);
}
function j(e, t) {
    let n = g.A.get(e);
    if (null == n) {
        let n = Error("Plan not found");
        throw ((0, I.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
    }
    if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
    let r = n.prices[t];
    if (null == r)
        throw (
            (U.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
            Error(`No prices returned for purchase type ${t} for plan ${e}`))
        );
    return r;
}
function Y(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: O.lid.DEFAULT },
        r = j(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            U.info(`Payment sources IDs: ${JSON.stringify(Object.keys(r.paymentSourcePrices))}`),
                U.info(`prices: ${i}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, I.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        U.info(`countryPrices: ${JSON.stringify(r.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, I.pM)(t, { tags: { countryCode: r.countryPrices.countryCode, planId: e } }), t);
    }
    return r.countryPrices.prices;
}
function W(e) {
    let {
            paymentSourceId: t,
            purchaseType: n,
            currency: r,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: O.lid.DEFAULT },
        i = Y(e, { paymentSourceId: t, purchaseType: n });
    return (0 === i.length && U.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
    null != r)
        ? i.find((e) => e.currency === r.toLowerCase())
        : i[0];
}
function K(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function $(e, t, n) {
    let r,
        i,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, d._1)(e);
    null != a && (r = D.hd[a.planId].premiumType);
    let o = (0, C.CC)(r, D.PremiumTypes.TIER_0),
        l = (0, C.CC)(r, D.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = D.pW.has(r.planId) ? l : !D.JM.has(r.planId) && o),
            (e = void 0 === n ? B(r.planId, i, !1, t) : H(r.planId, i, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * r.quantity);
    }
    return K(s);
}
function z(e, t, n, r) {
    let s;
    return (
        null === t && (i()(null !== e, "Subscription can't be null"), (t = [])),
        $((s = null !== e ? eq(e, t) : eZ(t)), n, r)
    );
}
function q(e) {
    let t = D.hd[e];
    if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
    let n = Error("Unsupported plan");
    throw ((0, I.pM)(n, { tags: { planId: e } }), n);
}
function Z(e) {
    switch (e) {
        case D.Ff.MONTH:
            return M.intl.string(M.t.FPybU7);
        case D.Ff.YEAR:
            return M.intl.string(M.t.tfqrhj);
        case D.Ff.DAY:
        case D.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function X(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : D.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case D.WT.MONTH:
                let a = M.intl.formatToPlainString(s === D.PremiumTypes.TIER_0 ? M.t.NPKsLz : M.t.poEovT, {
                    timeInterval: M.intl.string(M.t.FPybU7),
                });
                return i ? a : M.intl.string(M.t.Mh9bTt);
            case D.WT.YEAR:
                let o = M.intl.formatToPlainString(s === D.PremiumTypes.TIER_0 ? M.t.NPKsLz : M.t.poEovT, {
                    timeInterval: M.intl.string(M.t.tfqrhj),
                });
                return i ? o : M.intl.string(M.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case D.WT.MONTH:
            if (1 !== r) return M.intl.formatToPlainString(M.t["0UlZnH"], { intervalCount: r });
            return M.intl.string(M.t.DKzs96);
        case D.WT.YEAR:
            return M.intl.string(M.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function Q(e) {
    switch (e) {
        case D.WT.MONTH:
            return M.intl.string(M.t.FPybU7);
        case D.WT.YEAR:
            return M.intl.string(M.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function J(e) {
    let t = D.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, I.pM)(n, { tags: { planId: e } }), n);
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case D.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? M.intl.format(M.t.TZXHNj, { duration: r })
                : n
                  ? M.intl.string(M.t["81iAgs"])
                  : M.intl.string(M.t["0efVPy"]);
        case D.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? M.intl.format(M.t.eqRhC7, { duration: r })
                : n
                  ? M.intl.string(M.t.UvzqY1)
                  : M.intl.string(M.t.eoVuBn);
        case D.gD.PREMIUM_MONTH_TIER_1:
            return n ? M.intl.string(M.t["g/dH5g"]) : M.intl.string(M.t["7O6qSq"]);
        case D.gD.PREMIUM_YEAR_TIER_1:
            return n ? M.intl.string(M.t.pdZJaq) : M.intl.string(M.t.Md5xbi);
        case D.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? M.intl.format(M.t.aI6QXz, { duration: r })
                : n
                  ? M.intl.string(M.t.SmVbHc)
                  : M.intl.string(M.t.FKYNC6);
        case D.gD.PREMIUM_GROUP_MONTH:
            return n ? M.intl.string(M.t.SmVbHc) : M.intl.string(M.t.FKYNC6);
        case D.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? M.intl.format(M.t["1wBcPi"], { duration: r })
                : n
                  ? M.intl.string(M.t.JIq4O1)
                  : M.intl.string(M.t["cfu/5d"]);
        case D.gD.PREMIUM_3_MONTH_TIER_2:
            return M.intl.string(M.t.wCbINr);
        case D.gD.PREMIUM_6_MONTH_TIER_2:
            return M.intl.string(M.t["e3/ArU"]);
        case D.gD.PREMIUM_MONTH_GUILD:
            return n ? M.intl.string(M.t["6ZR3By"]) : M.intl.string(M.t["h80cx/"]);
        case D.gD.PREMIUM_YEAR_GUILD:
            return n ? M.intl.string(M.t.YDpAzZ) : M.intl.string(M.t.ZHkls0);
        case D.gD.PREMIUM_3_MONTH_GUILD:
            return M.intl.string(M.t.EZHHB6);
        case D.gD.PREMIUM_6_MONTH_GUILD:
            return M.intl.string(M.t.X2KDO2);
        case D.gD.PREMIUM_MONTH_LEGACY:
            return M.intl.string(M.t.PD6k79);
        case D.gD.PREMIUM_YEAR_LEGACY:
            return M.intl.string(M.t.LtJgTC);
    }
    let i = Error("Unsupported plan");
    throw ((0, I.pM)(i, { tags: { planId: e } }), i);
}
function et(e) {
    switch (e) {
        case D.pe.TIER_0:
            return M.intl.string(M.t["t9uG/o"]);
        case D.pe.TIER_1:
            return M.intl.string(M.t.FSOz78);
        case D.pe.TIER_2:
            return M.intl.string(M.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, I.pM)(t, { tags: { skuId: e } }), t);
}
function en(e) {
    let t = D.hd[e]?.premiumType,
        n = null != t ? D.Mr[t] : null;
    if (null != n) return M.intl.string(n);
    let r = Error("Unsupported plan");
    throw ((0, I.pM)(r, { tags: { planId: e } }), r);
}
function er(e, t) {
    if (e === D.WT.MONTH) return t;
    if (e === D.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case D.PremiumTypes.TIER_0:
            return t ? "Basic" : M.intl.string(M.t["t9uG/o"]);
        case D.PremiumTypes.TIER_1:
            return t ? "Classic" : M.intl.string(M.t.FSOz78);
        case D.PremiumTypes.TIER_2:
            return M.intl.string(M.t.lG6a5x);
    }
}
function es(e) {
    let {
            subscription: t,
            planId: n,
            price: r,
            includePremiumGuilds: i,
            hasDiscountApplied: s,
            activeDiscountInfo: o,
            renewalInvoicePreview: u,
            hasFractionalPremiumWithSub: c,
        } = e,
        d = D.hd[n],
        _ = ty(B(d.id), d.interval),
        f =
            ex(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !h.default.getCurrentUser()?.hasFreePremium()),
        p = null != r && null == t.paymentGateway,
        m = t.status === O.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === O.lT7.OPEN,
        E = f ? O.Dmq.CANCELED : m ? O.Dmq.UNPAID : t.status,
        g = u?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        A = D.M4 + (i ? e_(t.additionalPlans) : 0),
        I = p
            ? g
                ? M.intl.format(M.t["cd+hqB"], { price: r })
                : M.intl.format(M.t.NUkcpF, { price: r })
            : M.intl.string(M.t.zYx3Y6),
        S = p
            ? g
                ? M.intl.format(M.t.VsKcFB, { price: r })
                : M.intl.format(M.t.hJ5xEX, { price: r })
            : M.intl.string(M.t["8rSipI"]),
        y = p
            ? g
                ? M.intl.format(M.t["jRy6/J"], { price: r, num: A })
                : M.intl.format(M.t.tTNE8M, { price: r, num: A })
            : M.intl.format(M.t["U+z/HJ"], { num: A });
    switch (n) {
        case D.gD.PREMIUM_MONTH_TIER_0:
        case D.gD.PREMIUM_YEAR_TIER_0:
            switch (E) {
                case O.Dmq.CANCELED:
                    return p
                        ? g
                            ? M.intl.format(M.t["USi/nc"], { price: r })
                            : M.intl.format(M.t["FS//l2"], { price: r })
                        : M.intl.string(M.t.JshLzq);
                case O.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? M.intl.format(M.t["5mv+2i"], { price: r })
                            : M.intl.format(M.t.nkAEfZ, { price: r })
                        : M.intl.format(M.t.SsLIXS, {});
                case O.Dmq.UNPAID:
                    return M.intl.format(M.t.cmkbFB, {});
                case O.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? a()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? M.intl.format(M.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : M.intl.format(M.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case O.Dmq.PAUSED:
                    if (c) return I;
                    return M.intl.format(M.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case O.Dmq.PAST_DUE:
                    return M.intl.format(M.t["d+0vwo"], {
                        endDate: (0, T.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return I;
            }
        case D.gD.PREMIUM_MONTH_TIER_1:
        case D.gD.PREMIUM_YEAR_TIER_1:
            switch (E) {
                case O.Dmq.CANCELED:
                    return p
                        ? g
                            ? M.intl.format(M.t.cXy8Bp, { price: r })
                            : M.intl.format(M.t["C/XsHt"], { price: r })
                        : M.intl.string(M.t.K6tYFa);
                case O.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? M.intl.format(M.t.HBkIBi, { price: r })
                            : M.intl.format(M.t.ZsO1Sx, { price: r })
                        : M.intl.format(M.t["0+/WH7"], {});
                case O.Dmq.UNPAID:
                    return M.intl.format(M.t.McIzwj, {});
                case O.Dmq.PAUSE_PENDING:
                    let N = null != t.pauseEndsAt ? a()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != N
                        ? M.intl.format(M.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: N })
                        : M.intl.format(M.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case O.Dmq.PAUSED:
                    if (c) return S;
                    return M.intl.format(M.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case O.Dmq.PAST_DUE:
                    return M.intl.format(M.t["d+0vwo"], {
                        endDate: (0, T.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return S;
            }
        case D.gD.PREMIUM_MONTH_TIER_2:
        case D.gD.PREMIUM_YEAR_TIER_2:
        case D.gD.PREMIUM_3_MONTH_TIER_2:
        case D.gD.PREMIUM_6_MONTH_TIER_2:
        case D.gD.PREMIUM_GROUP_MONTH:
            switch (E) {
                case O.Dmq.CANCELED:
                    return p
                        ? g
                            ? M.intl.format(M.t.xoFgRh, { price: r, num: A })
                            : M.intl.format(M.t.nXdbKo, { price: r, num: A })
                        : M.intl.format(M.t.EcSdRH, { num: A });
                case O.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? M.intl.format(M.t["5C/0QG"], { price: r, num: A })
                            : M.intl.format(M.t.xfYkhu, { price: r, num: A })
                        : M.intl.format(M.t.ivjxcn, { num: A });
                case O.Dmq.UNPAID:
                    return M.intl.format(M.t["0HopYf"], { num: A });
                case O.Dmq.PAUSE_PENDING:
                    let C = null != t.pauseEndsAt ? a()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != C
                        ? M.intl.format(M.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: C })
                        : M.intl.format(M.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case O.Dmq.PAUSED:
                    if (c) return y;
                    return M.intl.format(M.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case O.Dmq.BILLING_RETRY:
                    return M.intl.format(M.t["IlJ/HV"], {
                        endDate: a()(t.currentPeriodStart).add(D.bx, "days").toDate(),
                    });
                case O.Dmq.PAST_DUE:
                    return M.intl.format(M.t["d+0vwo"], {
                        endDate: (0, T.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === D.gD.PREMIUM_YEAR_TIER_2
                            ? M.intl.format(M.t["+qqh6g"], { percent: o?.percentage ?? D.Cq, regularPrice: _ })
                            : g
                              ? M.intl.formatToPlainString(M.t["3ZiutU"], {
                                    percent: o?.percentage ?? D._$,
                                    regularPrice: _,
                                    numMonths: o?.duration ?? D.OJ,
                                })
                              : M.intl.formatToPlainString(M.t["G6+XOT"], {
                                    percent: o?.percentage ?? D._$,
                                    regularPrice: _,
                                    numMonths: o?.duration ?? D.OJ,
                                })
                        : y;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ea(e) {
    let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: r,
            includePremiumGuilds: s = !1,
            hasDiscountApplied: a = !1,
            activeDiscountInfo: o,
            hasFractionalPremiumWithSub: l = !1,
        } = e,
        u = g.A.get(r);
    return (
        i()(null != u, "Missing plan"),
        es({
            subscription: n,
            planId: u.id,
            price: ek(t, n, u),
            includePremiumGuilds: s,
            hasDiscountApplied: a,
            activeDiscountInfo: o,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l,
        })
    );
}
function eo(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, p.m1)(t) ? null : ee(t),
        i = n?.find((e) => {
            let { planId: t } = e;
            return D.pW.has(t);
        }),
        s = i?.planId === D.gD.PREMIUM_MONTH_GUILD || i?.planId === D.gD.PREMIUM_YEAR_GUILD ? M.t.Pi5yMJ : null,
        a = null != s ? M.intl.formatToPlainString(s, { num: i?.quantity }) : void 0;
    if (null != r && null != a)
        return M.intl.formatToPlainString(M.t.FN5T9r, { premiumDescription: r, premiumGuildDescription: a });
    if (null != r) return r;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function el(e) {
    return e === D.pe.TIER_0 || e === D.pe.TIER_1 || e === D.pe.TIER_2;
}
function eu(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: s } = e;
    if (null == t || !n) return [];
    let a = void 0 !== s && t === D.hd[s].skuId ? s : void 0,
        o = [];
    switch (t) {
        case D.pe.TIER_0:
            o = [D.gD.PREMIUM_YEAR_TIER_0, D.gD.PREMIUM_MONTH_TIER_0];
            break;
        case D.pe.TIER_1:
            o = [D.gD.PREMIUM_MONTH_TIER_1];
            break;
        case D.pe.TIER_2:
            let l = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (D.Er.has(e)) {
                    let t = D.hd[e];
                    l = [...D.Er].filter((e) => {
                        let n = D.hd[e];
                        return (
                            n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === D.pe.TIER_2
                        );
                    });
                } else l = [];
            }
            o = [D.gD.PREMIUM_YEAR_TIER_2, ...l, D.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== a) {
        let e = o.indexOf(a);
        o.splice(e, 1), o.unshift(a);
    }
    return o;
}
function ec(e) {
    let t = D.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, I.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ed(e) {
    switch (e) {
        case D.PremiumTypes.TIER_0:
            return D.pe.TIER_0;
        case D.PremiumTypes.TIER_1:
            return D.pe.TIER_1;
        case D.PremiumTypes.TIER_2:
            return D.pe.TIER_2;
    }
}
function e_(e) {
    let t = g.A.getPlanIdsForSkus([tv(D.pe.GUILD)]);
    i()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ef = new Set([
    D.gD.NONE_MONTH,
    D.gD.NONE_3_MONTH,
    D.gD.NONE_6_MONTH,
    D.gD.NONE_YEAR,
    D.gD.PREMIUM_MONTH_TIER_0,
    D.gD.PREMIUM_MONTH_TIER_1,
    D.gD.PREMIUM_MONTH_TIER_2,
    D.gD.PREMIUM_YEAR_TIER_0,
    D.gD.PREMIUM_YEAR_TIER_1,
    D.gD.PREMIUM_YEAR_TIER_2,
    D.gD.PREMIUM_3_MONTH_TIER_2,
    D.gD.PREMIUM_6_MONTH_TIER_2,
    D.gD.PREMIUM_GROUP_MONTH,
]);
function ep(e) {
    return ef.has(e);
}
function eh(e) {
    return D.pW.has(e);
}
function em(e) {
    return ep(e) || eh(e);
}
function eE(e) {
    return null != e && e === D.gD.PREMIUM_GROUP_MONTH;
}
function eg(e) {
    return J(e) === D.PremiumTypes.TIER_2 ? D.M4 : 0;
}
function eA(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = a()(e.metadata.apple_grace_period_expires_date);
        return { days: a().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = a()(e.metadata.google_grace_period_expires_date),
            n = a()(e.metadata.google_original_expires_date);
        return { days: a().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? D.U1 : D.L9;
        return { days: t, expiresDate: a()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: a()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: a()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? D.a5 : D.EV;
        return { days: t, expiresDate: a()(e.currentPeriodStart).add(t, "days") };
    }
}
function eI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i =
            arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: D.xc.NONE,
                      startsAt: a()(0),
                      endsAt: a()(0),
                      currentEntitlementId: "",
                      unactivatedUnits: [],
                  },
        s = null !== n && e.status === O.Dmq.PAST_DUE ? n : t,
        o = r
            ? (0, R.$g)(
                  s.invoiceItems
                      .filter((e) => D.VY.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  s.currency,
              )
            : (0, R.$g)(s.total, s.currency);
    if (null != e.trialId && D.BT.includes(e.trialId) && null == e.paymentSourceId)
        return M.intl.format(M.t["7ZS2m1"], { trialEnd: e.currentPeriodEnd });
    if (e.status === O.Dmq.CANCELED) return M.intl.format(M.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
    if (e.status === O.Dmq.PAUSE_PENDING)
        return M.intl.format(M.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
    if (e.status === O.Dmq.PAUSED)
        return i.fractionalState !== D.xc.NONE
            ? M.intl.format(M.t.Q18lRK, { renewalDate: i.endsAt.toDate(), price: o })
            : null == e.pauseEndsAt
              ? r
                  ? M.intl.format(M.t.KTYQCg, { planName: M.intl.string(M.t.Ipxkog), price: o })
                  : M.intl.string(M.t.fMz6Lg)
              : r
                ? M.intl.format(M.t.zcgtzf, {
                      planName: M.intl.string(M.t.Ipxkog),
                      resumeDate: e.pauseEndsAt,
                      price: o,
                  })
                : M.intl.format(M.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
    if (e.status === O.Dmq.PAST_DUE) {
        let t = eA(e).expiresDate;
        return (e.isPurchasedViaGoogle &&
            e.metadata?.google_grace_period_expires_date != null &&
            (t = a()(e.metadata.google_grace_period_expires_date)),
        e.isPurchasedViaApple &&
            e.metadata?.apple_grace_period_expires_date != null &&
            (t = a()(e.metadata.apple_grace_period_expires_date)),
        e.isPurchasedExternally)
            ? M.intl.format(M.t.U2hb3W, {
                  endDate: t.toDate(),
                  paymentGatewayName: w.qm[e.paymentGateway],
                  paymentSourceLink: e$(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
              })
            : M.intl.format(M.t.qEIzyi, { endDate: t.toDate(), price: o });
    }
    {
        if (e.status === O.Dmq.BILLING_RETRY)
            return M.intl.format(M.t.EMTLOT, {
                endDate: a()(e.currentPeriodStart).add(D.bx, "days").toDate(),
                price: o,
            });
        if (e.status === O.Dmq.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, v.isAndroid)()
                ? M.intl.format(M.t["dtcxw+"], {
                      endDate: a()(e.currentPeriodStart).add(D.ph, "days").toDate(),
                      paymentGatewayName: w.qm[e.paymentGateway],
                      paymentSourceLink: e$(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : M.intl.format(M.t.EMTLOT, {
                      endDate: a()(e.currentPeriodStart).add(D.ph, "days").toDate(),
                      price: o,
                  });
        if (eN(e)) return M.intl.format(M.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === O.Dmq.UNPAID) return M.intl.format(M.t.CzTKom, { maxProcessingTimeInDays: D.G4 });
        if (e.isPurchasedExternally)
            return M.intl.format(M.t.ZlWXgR, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: w.qm[e.paymentGateway],
                subscriptionManagementLink: e$(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            });
        let n = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || e.hasAnyPremiumGroup || (n = eT(n, i.unactivatedUnits)),
            r
                ? M.intl.format(M.t.Vl3cED, { planName: M.intl.string(M.t.Ipxkog), renewalDate: n, price: o })
                : M.intl.format(M.t.Q18lRK, { renewalDate: n, price: o })
        );
    }
}
function eT(e, t, n, r) {
    let i = a()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tP(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = a()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}
function eS(e) {
    let t = tP(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === D.xc.NONE)) return "";
    let n = { days: M.t.fYmirx, hours: M.t["C3RO+g"], minutes: M.t.r77oHc },
        r = (0, u.Vb)((0, T.Tf)(0, t * S.A.Millis.HOUR));
    return (0, T.uN)(r, n);
}
function ey(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === O.Dmq.PAST_DUE;
}
function ev(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? M.intl.string(M.t["0rzJ4J"]) : M.intl.string(M.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = M.intl.string(M.t.a9Mdb3)),
        t
    );
}
function eN(e) {
    return null != e.paymentSourceId && eC(e.paymentSourceId);
}
function eC(e) {
    if (null == e) return !1;
    let t = E.A.getPaymentSource(e);
    return null != t && w.AD.has(t.type);
}
function eR(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = e_(n);
    return 0 === (null != t ? e_(t.additionalPlans) : null) && 0 !== i ? O.Dmq.CANCELED : r;
}
function eO(e) {
    return e.isPurchasedExternally ? e.status === O.Dmq.CANCELED : eR(e) === O.Dmq.CANCELED;
}
function eb(e) {
    let { subscription: t, user: n, price: r, renewalInvoicePreview: s, fractionalPremiumInfo: a } = e,
        { planId: o, additionalPlans: u } = t,
        c = g.A.get(o);
    i()(null != c, "Missing plan");
    let d = e_(u),
        _ = eU(t.planId, t.paymentSourceId, t.currency, n).amount * d;
    if (null != s) {
        let e = s.invoiceItems.find((e) => D.pW.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    r = r ?? (0, R.$g)(_, t.currency);
    let f = s?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (eO(t))
        return t.isPurchasedViaGoogle
            ? M.intl.format(M.t["3/WTrI"], { quantity: d })
            : f
              ? M.intl.format(M.t["0ozBSB"], { quantity: d, rate: (0, R.CE)(r, c.interval, c.intervalCount) })
              : M.intl.format(M.t["yjsv/s"], { quantity: d, rate: (0, R.CE)(r, c.interval, c.intervalCount) });
    switch (t.status) {
        case O.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? M.intl.format(M.t.Nlf3nc, { quantity: d, boostQuantity: d })
                : f
                  ? M.intl.format(M.t.oiRy7v, {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, R.CE)(r, c.interval, c.intervalCount),
                    })
                  : M.intl.format(M.t["0QxOAi"], {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, R.CE)(r, c.interval, c.intervalCount),
                    });
        case O.Dmq.PAUSE_PENDING:
        case O.Dmq.PAUSED:
            if (null != a && !a.isFractionalPremiumActive) return M.intl.string(M.t.CduWAm);
            return M.intl.format(M.t["5iud9s"], { quantity: d });
        case O.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return M.intl.format(M.t["d+0vwo"], {
                    endDate: (0, T.i$)(eA(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? M.intl.format(M.t["5iud9s"], { quantity: d })
                : f
                  ? M.intl.format(M.t.eDwrLA, { quantity: d, rate: (0, R.CE)(r, c.interval, c.intervalCount) })
                  : M.intl.format(M.t.ijSDcI, { quantity: d, rate: (0, R.CE)(r, c.interval, c.intervalCount) });
    }
}
function eD(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? H(e.id, !1, r, t) : B(e.id, !1, r),
        s = (0, R.$g)(i.amount, i.currency);
    return e.currency !== w.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function eL(e, t, n) {
    let r = eD(e, t, n);
    return (0, R.CE)(r, e.interval, e.intervalCount);
}
function ew(e, t) {
    let { planId: n } = e;
    if (e.status === O.Dmq.CANCELED || e.status === O.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ep(t);
    });
    return null == r ||
        (0, p.m1)(r.subscriptionPlanId) ||
        (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
        ? e.planId
        : r.subscriptionPlanId;
}
function eM(e, t) {
    let { status: n } = e;
    if (e.status === O.Dmq.CANCELED || e.status === O.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ep(t);
    });
    return (null == r || (0, p.m1)(r.subscriptionPlanId)) && (n = O.Dmq.CANCELED), n;
}
function ex(e) {
    let { status: t, renewalMutations: n } = e;
    return t === O.Dmq.CANCELED || (null != n && (0, p.m1)(n.planId) && !e.isPurchasedExternally);
}
function eP(e) {
    return e === O.Dmq.PAST_DUE || e === O.Dmq.ACCOUNT_HOLD || e === O.Dmq.BILLING_RETRY;
}
function ek(e, t, n) {
    let r = e.findInvoiceItemByPlanId(n.id),
        i = null == r ? H(n.id, !1, !1, { paymentSourceId: t.paymentSourceId, currency: t.currency }).amount : r.amount;
    return (0, R.CE)((0, R.$g)(i, e.currency), n.interval, n.intervalCount);
}
function eU(e, t, n, r) {
    let i = null != t ? { paymentSourceId: t, currency: n } : { country: m.A.ipCountryCodeWithFallback, currency: n },
        s = g.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, I.pM)(t, { tags: { planId: e } }), t);
    }
    let a = g.A.getForSkuAndInterval(tv(D.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, I.pM)(t, { tags: { planId: e } }), t);
    }
    return H(a.id, (0, C.ki)(r), !1, i);
}
function eG(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eF(e, t) {
    return (
        null != e &&
        0 !== e.size &&
        null != t &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: n, parentId: r, consumed: i } = e;
            return null != n && null != r && !i && n === t;
        })
    );
}
function eV(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case D.gD.PREMIUM_MONTH_TIER_0:
                return M.intl.string(M.t["0ggVqN"]);
            case D.gD.PREMIUM_YEAR_TIER_0:
                return M.intl.string(M.t["jm+ZQw"]);
            case D.gD.PREMIUM_MONTH_TIER_1:
                return M.intl.string(M.t.uph4Jx);
            case D.gD.PREMIUM_YEAR_TIER_1:
                return M.intl.string(M.t["D/l7Yt"]);
            case D.gD.PREMIUM_MONTH_TIER_2:
            case D.gD.PREMIUM_GROUP_MONTH:
                return M.intl.string(M.t["5l1MuV"]);
            case D.gD.PREMIUM_YEAR_TIER_2:
                return M.intl.string(M.t.G0mISV);
        }
    switch (r) {
        case D.gD.PREMIUM_MONTH_TIER_0:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["/G3aKw"]);
        case D.gD.PREMIUM_YEAR_TIER_0:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["2eQpsL"]);
        case D.gD.PREMIUM_MONTH_TIER_1:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t.gueLg5);
        case D.gD.PREMIUM_YEAR_TIER_1:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["MhH/vW"]);
        case D.gD.PREMIUM_MONTH_TIER_2:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t.LQVQIq);
        case D.gD.PREMIUM_GROUP_MONTH:
            return M.intl.formatToPlainString(x.default.LwdrNi, { premiumGroupProductName: (0, L.DP)() });
        case D.gD.PREMIUM_YEAR_TIER_2:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["0nfg1x"]);
        case D.gD.PREMIUM_3_MONTH_TIER_2:
        case D.gD.PREMIUM_6_MONTH_TIER_2:
            return M.intl.formatToPlainString(M.t.BCD4fT, { intervalCount: t.intervalCount });
        case D.gD.NONE_MONTH:
        case D.gD.NONE_YEAR:
        case D.gD.NONE_3_MONTH:
        case D.gD.NONE_6_MONTH:
        case D.gD.PREMIUM_MONTH_GUILD:
        case D.gD.PREMIUM_YEAR_GUILD:
        case D.gD.PREMIUM_3_MONTH_GUILD:
        case D.gD.PREMIUM_6_MONTH_GUILD:
            return M.intl.string(M.t.eUEeCt);
    }
    let i = Error("User is purchasing an unsupported plan");
    throw ((0, I.pM)(i, { tags: { planId: r } }), i);
}
function eB(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = g.A.get(t);
    return i()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eH() {
    let e = w.Yr.USD;
    try {
        e = B(D.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function ej(e) {
    let { intervalType: t = D.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case D.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? M.intl.formatToPlainString(M.t.fRNBRX, { weeks: n / 7 })
                    : M.intl.formatToPlainString(M.t.EIpHEj, { weeks: n / 7 });
            return r
                ? M.intl.formatToPlainString(M.t["6Cdzoy"], { days: n })
                : M.intl.formatToPlainString(M.t["kbBj/h"], { days: n });
        case D.WT.MONTH:
            return r
                ? M.intl.formatToPlainString(M.t.x5MgxS, { months: n })
                : M.intl.formatToPlainString(M.t["4SEnCZ"], { months: n });
        case D.WT.YEAR:
            return r
                ? M.intl.formatToPlainString(M.t["h+63yl"], { years: n })
                : M.intl.formatToPlainString(M.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eY(e) {
    let { intervalType: t = D.WT.MONTH, intervalCount: n = 1 } = e,
        r = eH(),
        i = (0, R.$g)(0, r, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case D.WT.DAY:
            if (n >= 7 && n % 7 == 0) return M.intl.formatToPlainString(M.t.C6i5Jt, { weeks: n / 7, price: i });
            return M.intl.formatToPlainString(M.t.cR9ifw, { days: n, price: i });
        case D.WT.MONTH:
            return M.intl.formatToPlainString(M.t["8FZfNo"], { months: n, price: i });
        case D.WT.YEAR:
            return M.intl.formatToPlainString(M.t.xzAcST, { years: n, price: i });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eW(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eY({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function eK(e) {
    let { intervalType: t = D.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case D.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? M.intl.formatToPlainString(M.t.iVZYyl, { weeks: n / 7 })
                    : M.intl.formatToPlainString(M.t.EmoBD2, { weeks: n / 7 });
            return r
                ? M.intl.formatToPlainString(M.t.jzH70Z, { days: n })
                : M.intl.formatToPlainString(M.t["k2UNz+"], { days: n });
        case D.WT.MONTH:
            return r
                ? M.intl.formatToPlainString(M.t.erUSmA, { months: n })
                : M.intl.formatToPlainString(M.t.kridzK, { months: n });
        case D.WT.YEAR:
            return r
                ? M.intl.formatToPlainString(M.t.IfYQVC, { years: n })
                : M.intl.formatToPlainString(M.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function e$(e, t) {
    switch (e) {
        case O.kM_.APPLE_PARTNER:
        case O.kM_.APPLE_ADVANCED_COMMERCE:
        case O.kM_.APPLE:
            return P[t];
        case O.kM_.GOOGLE:
            return k[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function ez(e, t) {
    return (0, C.ki)(e) || eP(t?.status);
}
function eq(e, t) {
    let n = [],
        r = (e.renewalMutations?.items ?? e.items).find((e) => D.JM.has(e.planId));
    return (
        null != r && n.push(r),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function eZ(e) {
    return e.filter((e) => !D.JM.has(e.planId));
}
function eX(e, t, n, r) {
    i()(r.has(t), "Expected planId in group");
    let s = !1,
        a = (e.renewalMutations?.items ?? e.items).map((e) =>
            r.has(e.planId) ? ((s = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!s) {
        let r = { planId: t, quantity: n },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), a.push(r);
    }
    return a.filter((e) => 0 !== e.quantity);
}
function eQ(e, t) {
    return eX(e, t, 1, D.JM);
}
function eJ(e, t, n) {
    return eX(e, n, t, D.pW);
}
function e0(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => D.JM.has(e.planId));
    if (null != t) {
        let n = g.A.get(t.planId);
        i()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let r = g.A.get(e.planId);
                if ((i()(null != r, "Missing plan"), n.interval === r.interval && n.intervalCount === r.intervalCount))
                    return e;
                let s = g.A.getForSkuAndInterval(r.skuId, n.interval, n.intervalCount);
                return i()(null != s, "Missing planForInterval"), { ...e, planId: s.id };
            }));
    }
    return e;
}
function e1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = D.f5[e].fileSize;
    return (0, y.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function e2(e) {
    return null == e ? null : e.items.find((e) => D.pW.has(e.planId));
}
function e3(e) {
    return null != e && null == V(e) && null != e2(e);
}
function e6(e) {
    let t = null != e ? V(e) : null;
    return null != t ? ec(t.planId) : null;
}
function e4(e) {
    if (null != e) {
        let t = V(e);
        if (null != t) return J(t.planId);
    }
}
function e5(e) {
    switch (e) {
        case D.PremiumTypes.TIER_0:
            return b.gi.PREMIUM_TIER_0;
        case D.PremiumTypes.TIER_1:
            return b.gi.PREMIUM_TIER_1;
        case D.PremiumTypes.TIER_2:
            return b.gi.PREMIUM_TIER_2;
    }
}
let e7 = (e) => null != e && Date.now() - e.createdAt.getTime() < G;
function e8(e) {
    return (0, _.RM)(_.gQ, e);
}
function e9(e) {
    return (0, _.RM)(_.JK, e);
}
function te(e) {
    return (0, _.RM)(_.He, e);
}
function tt(e) {
    return (0, _.RM)(_.ii, e);
}
function tn(e) {
    return (0, _.RM)(_.u6, e);
}
function tr(e) {
    return (0, _.RM)(_.nI, e);
}
function ti(e) {
    return (0, _.RM)(_.DG, e);
}
function ts(e) {
    return (0, _.RM)(_.nh, e);
}
function ta(e) {
    return (0, _.RM)(_._V, e);
}
function to(e) {
    return (0, _.RM)(_.OW, e);
}
function tl(e) {
    return (0, _.RM)(_.WQ, e);
}
function tu(e) {
    return (0, _.RM)(_._w, e);
}
function tc(e) {
    return (0, _.RM)(_.Qz, e);
}
function td(e) {
    return (0, _.RM)(_.Pm, e);
}
function t_(e) {
    return (0, _.RM)(_.x, e);
}
function tf(e) {
    return (0, _.RM)(_.cS, e);
}
function tp(e) {
    return (0, _.RM)(_.T7, e);
}
function th(e) {
    return (0, _.RM)(_.lx, e);
}
function tm(e) {
    return (0, _.RM)(_.zL, e);
}
function tE(e, t) {
    return "high" === e ? (0, _.RM)(_.sj, t) : "mid" === e && (0, _.RM)(_.II, t);
}
function tg(e) {
    return (0, _.RM)(_.aE, e);
}
function tA(e) {
    return (0, _.RM)(_.GS, e);
}
function tI(e) {
    return (0, _.RM)(_.Zc, e);
}
function tT(e) {
    return (0, _.RM)(_.G3, e);
}
function tS(e) {
    return (0, _.RM)(_.z0, e);
}
function ty(e, t) {
    let n = (0, R.$g)(e.amount, e.currency),
        r = Q(t);
    return `${n}/${r}`;
}
function tv(e) {
    return e;
}
function tN(e) {
    return "isNitroLocked" in e;
}
function tC() {
    let e = (0, o.bG)([h.default], () => h.default.getCurrentUser());
    return (0, C.YE)(e, D.PremiumTypes.TIER_2);
}
function tR(e) {
    return null != e && D.n0.includes(e) ? 1 : 2;
}
function tO(e) {
    return e === D.Tt ? D.h7 : e === D.yo ? D.CA : D.CQ;
}
function tb() {
    return D.CQ;
}
function tD(e) {
    let t = (0, f.N)("getOfferNoticeThreshold");
    return 0 !== t ? t : tL(e) ? tO(e.trial_id) : tw(e) ? tb() : D.CQ;
}
function tL(e) {
    return null != e && "trial_id" in e;
}
function tw(e) {
    return null != e && "discount_id" in e;
}
function tM(e) {
    if (e === D.WT.YEAR) return M.intl.string(M.t.tfqrhj);
    if (e === D.WT.MONTH) return M.intl.string(M.t.FPybU7);
    throw Error(`Invalid interval type: ${e}`);
}
function tx(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tP(e) {
    return tk(e.map((e) => e.skuId));
}
function tk(e) {
    return e.reduce((e, t) => {
        let [n, r] = D.NL[t],
            i = 1;
        switch (n) {
            case D.T.HOUR:
                i = 1;
                break;
            case D.T.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
let tU = (e) => {
        let { subscriptionPlan: t, isGift: n = !1, priceOptions: r = {} } = e,
            i = D.En[t.skuId];
        return null == i ? null : H(i, !1, n, r);
    },
    tG = (e) => {
        let { planId: t, shouldUseCalculatedDiscount: n, isGift: r, priceOptions: i, subscriptionPlan: s } = e,
            a = D.XE[t];
        return n && (a = tF(s, r, i)), a;
    };
function tF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== D.WT.YEAR) return;
    let r = tU({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == r) return;
    let i = H(e.id, !1, t, n);
    if (0 !== r.amount) return Math.floor(100 * (1 - i.amount / (12 * r.amount)));
}
function tV(e) {
    return null == e ? 0 : Math.max((0, T.m_)(new Date(), new Date(e)), 0);
}
function tB(e) {
    return Math.max(1, Math.ceil((0, T.c_)(new Date(e.currentPeriodEnd), new Date())));
}
let tH = Object.freeze({
    isNewUser: e7,
    isPremiumAtLeast: C.CC,
    isPremium: C.ki,
    isPremiumExactly: C.YE,
    isPremiumEligible: tx,
    getPrice: H,
    getDefaultPrice: B,
    getInterval: q,
    getIntervalString: X,
    getIntervalStringAsNoun: Q,
    getPremiumType: J,
    getTierDisplayNameByPlanId: en,
    getDisplayName: ee,
    getPremiumPlanOptions: eu,
    getReverseTrialWeeks: tR,
    formatInterval: tM,
    getPlanDescription: es,
    isPremiumSku: el,
    getIntervalMonths: er,
    getUserMaxFileSize: N.f,
    getSkuIdForPlan: ec,
    getSkuIdForPremiumType: ed,
    getNumIncludedPremiumGuildSubscriptionSlots: eg,
    getBillingInformationString: eI,
    extendDateWithUnconsumedFractionalPremium: eT,
    getUnactivatedFractionalPremiumDurationString: eS,
    isSwitchingPlansDisabled: ey,
    getSwitchingPlansDisabledMessage: ev,
    isNoneSubscription: p.m1,
    getPlanIdFromInvoice: ew,
    getStatusFromInvoice: eM,
    isBaseSubscriptionCanceled: ex,
    getPremiumGuildIntervalPrice: eU,
    hasAccountCredit: eG,
    hasUnconsumedGiftForSubscriptionPlan: eF,
    getBillingReviewSubheader: eV,
    getIntervalForInvoice: eB,
    getPremiumPlanItem: V,
    getGuildBoostPlanItem: e2,
    isBoostOnlySubscription: e3,
    getPremiumSkuIdForSubscription: e6,
    getPremiumTypeFromSubscription: e4,
    getPremiumGradientColor: e5,
    getUnactivatedFractionalPremiumHours: tP,
    castPremiumSubscriptionAsSkuId: tv,
    calculateDiscountPercentageForYearlyPlan: tF,
    getDaysSincePremium: tV,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: tB,
    canUseAnimatedEmojis: e8,
    canUseEmojisEverywhere: e9,
    canUseSoundboardEverywhere: te,
    canUseCustomCallSounds: tt,
    canUploadLargeFiles: tn,
    canUseBadges: tr,
    canUseHighVideoUploadQuality: ti,
    canEditDiscriminator: ts,
    hasBoostDiscount: ta,
    canUseAnimatedAvatar: to,
    canUseFancyVoiceChannelReactions: tl,
    canInstallPremiumApplications: tu,
    canUseIncreasedMessageLength: tc,
    canUseIncreasedGuildCap: td,
    canRedeemPremiumPerks: t_,
    canUsePremiumProfileCustomization: tf,
    canUsePremiumAppIcons: tp,
    canUsePremiumGuildMemberProfile: th,
    canUseClientThemes: tm,
    canStreamQuality: tE,
    hasFreeBoosts: tg,
    canUseCustomStickersEverywhere: tA,
    canUseCustomBackgrounds: tI,
    canUseCollectibles: tT,
    canUsePremiumVoiceFilters: tS,
    formatPriceString: ty,
    StreamQuality: F,
});
