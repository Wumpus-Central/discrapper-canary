"use strict";
n.d(t, {
    $Q: () => W,
    $k: () => eA,
    Ay: () => e3,
    CC: () => R.CC,
    D8: () => q,
    Dd: () => et,
    EJ: () => eB,
    EL: () => V,
    Em: () => eq,
    FJ: () => Z,
    FY: () => eD,
    GX: () => eG,
    Ge: () => eO,
    J$: () => eg,
    JM: () => B,
    Ke: () => $,
    LE: () => eL,
    L_: () => e0,
    Mn: () => Q,
    Nc: () => eE,
    OU: () => er,
    Of: () => eP,
    Om: () => eF,
    PK: () => ey,
    Pg: () => ek,
    Q8: () => em,
    RH: () => ee,
    Rr: () => eR,
    TW: () => R.ki,
    Tm: () => es,
    To: () => e2,
    U8: () => z,
    UC: () => K,
    Uf: () => eI,
    YE: () => R.YE,
    Zb: () => e_,
    Zw: () => J,
    _e: () => eh,
    aE: () => ex,
    aZ: () => ej,
    bx: () => eo,
    e1: () => eX,
    ee: () => eU,
    ff: () => ev,
    iv: () => eJ,
    jh: () => eS,
    ji: () => ef,
    kX: () => ep,
    ki: () => eN,
    l6: () => H,
    m6: () => X,
    mH: () => e$,
    mv: () => eY,
    nB: () => ei,
    nK: () => eZ,
    pb: () => Y,
    qn: () => eV,
    re: () => ew,
    sS: () => eT,
    tS: () => eb,
    tW: () => eM,
    xq: () => eu,
    y8: () => j,
    ys: () => ed,
    z4: () => ec,
}),
    n(667532),
    n(321073);
var i,
    r = n(284009),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(441574),
    c = n(975807),
    d = n(366999),
    _ = n(626584),
    f = n(367888),
    h = n(541690),
    p = n(349871),
    E = n(832946),
    m = n(287809),
    g = n(615405),
    A = n(295405),
    I = n(97352),
    T = n(166403),
    S = n(739508),
    N = n(58703),
    y = n(927813),
    C = n(255438),
    v = n(723702),
    O = n(125584),
    R = n(474090),
    b = n(580630),
    D = n(652215),
    L = n(788868),
    w = n(88001),
    M = n(818348),
    P = n(375708),
    x = n(466919);
let U = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    k = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    G = new _.A("PremiumUtils.tsx");
var F = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function V(e) {
    return e.items.find((e) => L.JM.has(e.planId));
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = A.A.defaultPaymentSourceId ?? void 0,
        a = T.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        j(e, t, n, { paymentSourceId: s, currency: i }, r)
    );
}
function H(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: s, currency: a, contextPlanPrices: o } = i;
    if (null != o) {
        let t = o[e];
        if (null != t)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != I.A.get(e)) {
        let i = D.lid.DEFAULT;
        n ? (i = D.lid.GIFT) : t && (i = D.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.lid.DEFAULT },
                r = Y(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    G.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let s = r.find((e) => e.currency === i.toLowerCase());
                return null != s
                    ? s
                    : null != t
                      ? Y(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: s, purchaseType: i, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, S.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: i.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (r && (0, S.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function Y(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.lid.DEFAULT },
        i = (function (e, t) {
            let n = I.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, S.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (G.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            G.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                G.info(`prices: ${r}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, S.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        G.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, S.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function W(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function K(e, t, n) {
    let i,
        r,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, f._1)(e);
    null != a && (i = L.hd[a.planId].premiumType);
    let o = (0, R.CC)(i, L.PremiumTypes.TIER_0),
        l = (0, R.CC)(i, L.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = L.pW.has(i.planId) ? l : !L.JM.has(i.planId) && o),
            (e = void 0 === n ? B(i.planId, r, !1, t) : j(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity);
    }
    return W(s);
}
function z(e, t, n, i) {
    return (
        null === t && (s()(null !== e, "Subscription can't be null"), (t = [])), K(null !== e ? ex(e, t) : eU(t), n, i)
    );
}
function $(e) {
    switch (e) {
        case L.Ff.MONTH:
            return P.intl.string(P.t.FPybU7);
        case L.Ff.YEAR:
            return P.intl.string(P.t.tfqrhj);
        case L.Ff.DAY:
        case L.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function q(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : L.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case L.WT.MONTH:
                let a = P.intl.formatToPlainString(s === L.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.FPybU7),
                });
                return r ? a : P.intl.string(P.t.Mh9bTt);
            case L.WT.YEAR:
                let o = P.intl.formatToPlainString(s === L.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.tfqrhj),
                });
                return r ? o : P.intl.string(P.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case L.WT.MONTH:
            if (1 !== i) return P.intl.formatToPlainString(P.t["0UlZnH"], { intervalCount: i });
            return P.intl.string(P.t.DKzs96);
        case L.WT.YEAR:
            return P.intl.string(P.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function Z(e) {
    switch (e) {
        case L.WT.MONTH:
            return P.intl.string(P.t.FPybU7);
        case L.WT.YEAR:
            return P.intl.string(P.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function X(e) {
    let t = L.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, S.pM)(n, { tags: { planId: e } }), n);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case L.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? P.intl.format(P.t.TZXHNj, { duration: i })
                : n
                  ? P.intl.string(P.t["81iAgs"])
                  : P.intl.string(P.t["0efVPy"]);
        case L.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? P.intl.format(P.t.eqRhC7, { duration: i })
                : n
                  ? P.intl.string(P.t.UvzqY1)
                  : P.intl.string(P.t.eoVuBn);
        case L.gD.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t["g/dH5g"]) : P.intl.string(P.t["7O6qSq"]);
        case L.gD.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.pdZJaq) : P.intl.string(P.t.Md5xbi);
        case L.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? P.intl.format(P.t.aI6QXz, { duration: i })
                : n
                  ? P.intl.string(P.t.SmVbHc)
                  : P.intl.string(P.t.FKYNC6);
        case L.gD.PREMIUM_GROUP_MONTH:
            return n ? P.intl.string(P.t.SmVbHc) : P.intl.string(P.t.FKYNC6);
        case L.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? P.intl.format(P.t["1wBcPi"], { duration: i })
                : n
                  ? P.intl.string(P.t.JIq4O1)
                  : P.intl.string(P.t["cfu/5d"]);
        case L.gD.PREMIUM_3_MONTH_TIER_2:
            return P.intl.string(P.t.wCbINr);
        case L.gD.PREMIUM_6_MONTH_TIER_2:
            return P.intl.string(P.t["e3/ArU"]);
        case L.gD.PREMIUM_MONTH_GUILD:
            return n ? P.intl.string(P.t["6ZR3By"]) : P.intl.string(P.t["h80cx/"]);
        case L.gD.PREMIUM_YEAR_GUILD:
            return n ? P.intl.string(P.t.YDpAzZ) : P.intl.string(P.t.ZHkls0);
        case L.gD.PREMIUM_3_MONTH_GUILD:
            return P.intl.string(P.t.EZHHB6);
        case L.gD.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.X2KDO2);
        case L.gD.PREMIUM_MONTH_LEGACY:
            return P.intl.string(P.t.PD6k79);
        case L.gD.PREMIUM_YEAR_LEGACY:
            return P.intl.string(P.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, S.pM)(r, { tags: { planId: e } }), r);
}
function J(e) {
    switch (e) {
        case L.pe.TIER_0:
            return P.intl.string(P.t["t9uG/o"]);
        case L.pe.TIER_1:
            return P.intl.string(P.t.FSOz78);
        case L.pe.TIER_2:
            return P.intl.string(P.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, S.pM)(t, { tags: { skuId: e } }), t);
}
function ee(e) {
    let t = L.hd[e]?.premiumType,
        n = null != t ? L.Mr[t] : null;
    if (null != n) return P.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, S.pM)(i, { tags: { planId: e } }), i);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case L.PremiumTypes.TIER_0:
            return t ? "Basic" : P.intl.string(P.t["t9uG/o"]);
        case L.PremiumTypes.TIER_1:
            return t ? "Classic" : P.intl.string(P.t.FSOz78);
        case L.PremiumTypes.TIER_2:
            return P.intl.string(P.t.lG6a5x);
    }
}
function en(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: s,
            activeDiscountInfo: a,
            renewalInvoicePreview: l,
            hasFractionalPremiumWithSub: u,
        } = e,
        d = L.hd[n],
        _ = ez(B(d.id), d.interval),
        f =
            eN(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !m.default.getCurrentUser()?.hasFreePremium()),
        h = null != i && null == t.paymentGateway,
        p = t.status === D.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === D.lT7.OPEN,
        E = f ? D.Dmq.CANCELED : p ? D.Dmq.UNPAID : t.status,
        g = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        A = L.M4 + (r ? eo(t.additionalPlans) : 0),
        I = h
            ? g
                ? P.intl.format(P.t["cd+hqB"], { price: i })
                : P.intl.format(P.t.NUkcpF, { price: i })
            : P.intl.string(P.t.zYx3Y6),
        T = h
            ? g
                ? P.intl.format(P.t.VsKcFB, { price: i })
                : P.intl.format(P.t.hJ5xEX, { price: i })
            : P.intl.string(P.t["8rSipI"]),
        S = h
            ? g
                ? P.intl.format(P.t["jRy6/J"], { price: i, num: A })
                : P.intl.format(P.t.tTNE8M, { price: i, num: A })
            : P.intl.format(P.t["U+z/HJ"], { num: A });
    switch (n) {
        case L.gD.PREMIUM_MONTH_TIER_0:
        case L.gD.PREMIUM_YEAR_TIER_0:
            switch (E) {
                case D.Dmq.CANCELED:
                    return h
                        ? g
                            ? P.intl.format(P.t["USi/nc"], { price: i })
                            : P.intl.format(P.t["FS//l2"], { price: i })
                        : P.intl.string(P.t.JshLzq);
                case D.Dmq.ACCOUNT_HOLD:
                    return h
                        ? g
                            ? P.intl.format(P.t["5mv+2i"], { price: i })
                            : P.intl.format(P.t.nkAEfZ, { price: i })
                        : P.intl.format(P.t.SsLIXS, {});
                case D.Dmq.UNPAID:
                    return P.intl.format(P.t.cmkbFB, {});
                case D.Dmq.PAUSE_PENDING:
                    let y = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != y
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: y })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case D.Dmq.PAUSED:
                    if (u) return I;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case D.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, N.i$)(ef(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return I;
            }
        case L.gD.PREMIUM_MONTH_TIER_1:
        case L.gD.PREMIUM_YEAR_TIER_1:
            switch (E) {
                case D.Dmq.CANCELED:
                    return h
                        ? g
                            ? P.intl.format(P.t.cXy8Bp, { price: i })
                            : P.intl.format(P.t["C/XsHt"], { price: i })
                        : P.intl.string(P.t.K6tYFa);
                case D.Dmq.ACCOUNT_HOLD:
                    return h
                        ? g
                            ? P.intl.format(P.t.HBkIBi, { price: i })
                            : P.intl.format(P.t.ZsO1Sx, { price: i })
                        : P.intl.format(P.t["0+/WH7"], {});
                case D.Dmq.UNPAID:
                    return P.intl.format(P.t.McIzwj, {});
                case D.Dmq.PAUSE_PENDING:
                    let C = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != C
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: C })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case D.Dmq.PAUSED:
                    if (u) return T;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case D.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, N.i$)(ef(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return T;
            }
        case L.gD.PREMIUM_MONTH_TIER_2:
        case L.gD.PREMIUM_YEAR_TIER_2:
        case L.gD.PREMIUM_3_MONTH_TIER_2:
        case L.gD.PREMIUM_6_MONTH_TIER_2:
        case L.gD.PREMIUM_GROUP_MONTH:
            switch (E) {
                case D.Dmq.CANCELED:
                    return h
                        ? g
                            ? P.intl.format(P.t.xoFgRh, { price: i, num: A })
                            : P.intl.format(P.t.nXdbKo, { price: i, num: A })
                        : P.intl.format(P.t.EcSdRH, { num: A });
                case D.Dmq.ACCOUNT_HOLD:
                    return h
                        ? g
                            ? P.intl.format(P.t["5C/0QG"], { price: i, num: A })
                            : P.intl.format(P.t.xfYkhu, { price: i, num: A })
                        : P.intl.format(P.t.ivjxcn, { num: A });
                case D.Dmq.UNPAID:
                    return P.intl.format(P.t["0HopYf"], { num: A });
                case D.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case D.Dmq.PAUSED:
                    if (u) return S;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case D.Dmq.BILLING_RETRY:
                    return P.intl.format(P.t["IlJ/HV"], {
                        endDate: o()(t.currentPeriodStart).add(L.bx, "days").toDate(),
                    });
                case D.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, N.i$)(ef(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === L.gD.PREMIUM_YEAR_TIER_2
                            ? P.intl.format(P.t["+qqh6g"], { percent: a?.percentage ?? L.Cq, regularPrice: _ })
                            : g
                              ? P.intl.formatToPlainString(P.t["3ZiutU"], {
                                    percent: a?.percentage ?? L._$,
                                    regularPrice: _,
                                    numMonths: a?.duration ?? L.OJ,
                                })
                              : P.intl.formatToPlainString(P.t["G6+XOT"], {
                                    percent: a?.percentage ?? L._$,
                                    regularPrice: _,
                                    numMonths: a?.duration ?? L.OJ,
                                })
                        : S;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ei(e) {
    var t, n, i;
    let r,
        a,
        {
            renewalInvoicePreview: o,
            subscription: l,
            planId: u,
            includePremiumGuilds: c = !1,
            hasDiscountApplied: d = !1,
            activeDiscountInfo: _,
            hasFractionalPremiumWithSub: f = !1,
        } = e,
        h = I.A.get(u);
    return (
        s()(null != h, "Missing plan"),
        en({
            subscription: l,
            planId: h.id,
            price:
                ((t = o),
                (n = l),
                (i = h),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? j(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, b.CE)((0, b.$g)(a, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: c,
            hasDiscountApplied: d,
            activeDiscountInfo: _,
            renewalInvoicePreview: o,
            hasFractionalPremiumWithSub: f,
        })
    );
}
function er(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, E.m1)(t) ? null : Q(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return L.pW.has(t);
        }),
        s = r?.planId === L.gD.PREMIUM_MONTH_GUILD || r?.planId === L.gD.PREMIUM_YEAR_GUILD ? P.t.Pi5yMJ : null,
        a = null != s ? P.intl.formatToPlainString(s, { num: r?.quantity }) : void 0;
    if (null != i && null != a)
        return P.intl.formatToPlainString(P.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: a });
    if (null != i) return i;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function es(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === L.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case L.pe.TIER_0:
            s = [L.gD.PREMIUM_YEAR_TIER_0, L.gD.PREMIUM_MONTH_TIER_0];
            break;
        case L.pe.TIER_1:
            s = [L.gD.PREMIUM_MONTH_TIER_1];
            break;
        case L.pe.TIER_2:
            s = [L.gD.PREMIUM_YEAR_TIER_2, L.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== r) {
        let e = s.indexOf(r);
        s.splice(e, 1), s.unshift(r);
    }
    return s;
}
function ea(e) {
    let t = L.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eo(e) {
    let t = I.A.getPlanIdsForSkus([e$(L.pe.GUILD)]);
    s()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let el = new Set([
    L.gD.NONE_MONTH,
    L.gD.NONE_3_MONTH,
    L.gD.NONE_6_MONTH,
    L.gD.NONE_YEAR,
    L.gD.PREMIUM_MONTH_TIER_0,
    L.gD.PREMIUM_MONTH_TIER_1,
    L.gD.PREMIUM_MONTH_TIER_2,
    L.gD.PREMIUM_YEAR_TIER_0,
    L.gD.PREMIUM_YEAR_TIER_1,
    L.gD.PREMIUM_YEAR_TIER_2,
    L.gD.PREMIUM_3_MONTH_TIER_2,
    L.gD.PREMIUM_6_MONTH_TIER_2,
    L.gD.PREMIUM_GROUP_MONTH,
]);
function eu(e) {
    return el.has(e);
}
function ec(e) {
    return L.pW.has(e);
}
function ed(e) {
    return eu(e) || ec(e);
}
function e_(e) {
    return null != e && e === L.gD.PREMIUM_GROUP_MONTH;
}
function ef(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = o()(e.metadata.apple_grace_period_expires_date);
        return { days: o().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = o()(e.metadata.google_grace_period_expires_date),
            n = o()(e.metadata.google_original_expires_date);
        return { days: o().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? L.U1 : L.L9;
        return { days: t, expiresDate: o()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: o()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: o()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? L.a5 : L.EV;
        return { days: t, expiresDate: o()(e.currentPeriodStart).add(t, "days") };
    }
}
function eh(e, t, n, i) {
    let r = o()(i ? void 0 : e);
    if (t.length > 0) {
        let e = eQ(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function ep(e) {
    let t = eQ(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === L.xc.NONE)) return "";
    let n = { days: P.t.fYmirx, hours: P.t["C3RO+g"], minutes: P.t.r77oHc },
        i = (0, d.Vb)((0, N.Tf)(0, t * y.A.Millis.HOUR));
    return (0, N.uN)(i, n);
}
function eE(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === D.Dmq.PAST_DUE;
}
function em(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? P.intl.string(P.t["0rzJ4J"]) : P.intl.string(P.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = P.intl.string(P.t.a9Mdb3)),
        t
    );
}
function eg(e) {
    if (null == e) return !1;
    let t = A.A.getPaymentSource(e);
    return null != t && M.AD.has(t.type);
}
function eA(e) {
    return e.isPurchasedExternally
        ? e.status === D.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eo(n);
              return 0 === (null != t ? eo(t.additionalPlans) : null) && 0 !== r ? D.Dmq.CANCELED : i;
          })(e) === D.Dmq.CANCELED;
}
function eI(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: r, fractionalPremiumInfo: a } = e,
        { planId: o, additionalPlans: l } = t,
        u = I.A.get(o);
    s()(null != u, "Missing plan");
    let d = eo(l),
        _ = eC(t.planId, t.paymentSourceId, t.currency, n).amount * d;
    if (null != r) {
        let e = r.invoiceItems.find((e) => L.pW.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    i = i ?? (0, b.$g)(_, t.currency);
    let f = r?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (eA(t))
        return t.isPurchasedViaGoogle
            ? P.intl.format(P.t["3/WTrI"], { quantity: d })
            : f
              ? P.intl.format(P.t["0ozBSB"], { quantity: d, rate: (0, b.CE)(i, u.interval, u.intervalCount) })
              : P.intl.format(P.t["yjsv/s"], { quantity: d, rate: (0, b.CE)(i, u.interval, u.intervalCount) });
    switch (t.status) {
        case D.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? P.intl.format(P.t.Nlf3nc, { quantity: d, boostQuantity: d })
                : f
                  ? P.intl.format(P.t.oiRy7v, {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, b.CE)(i, u.interval, u.intervalCount),
                    })
                  : P.intl.format(P.t["0QxOAi"], {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, b.CE)(i, u.interval, u.intervalCount),
                    });
        case D.Dmq.PAUSE_PENDING:
        case D.Dmq.PAUSED:
            if (null != a && !a.isFractionalPremiumActive) return P.intl.string(P.t.CduWAm);
            return P.intl.format(P.t["5iud9s"], { quantity: d });
        case D.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return P.intl.format(P.t["d+0vwo"], {
                    endDate: (0, N.i$)(ef(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? P.intl.format(P.t["5iud9s"], { quantity: d })
                : f
                  ? P.intl.format(P.t.eDwrLA, { quantity: d, rate: (0, b.CE)(i, u.interval, u.intervalCount) })
                  : P.intl.format(P.t.ijSDcI, { quantity: d, rate: (0, b.CE)(i, u.interval, u.intervalCount) });
    }
}
function eT(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = j(e.id, !1, r, t);
        } catch {
            i = B(e.id, !1, r);
        }
    else i = B(e.id, !1, r);
    let s = (0, b.$g)(i.amount, i.currency);
    return e.currency !== M.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function eS(e, t, n) {
    let i = eT(e, t, n);
    return (0, b.CE)(i, e.interval, e.intervalCount);
}
function eN(e) {
    let { status: t, renewalMutations: n } = e;
    return t === D.Dmq.CANCELED || (null != n && (0, E.m1)(n.planId) && !e.isPurchasedExternally);
}
function ey(e) {
    return e === D.Dmq.PAST_DUE || e === D.Dmq.ACCOUNT_HOLD || e === D.Dmq.BILLING_RETRY;
}
function eC(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: g.A.ipCountryCodeWithFallback, currency: n },
        s = I.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    let a = I.A.getForSkuAndInterval(e$(L.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    return j(a.id, (0, R.ki)(i), !1, r);
}
function ev(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case L.gD.PREMIUM_MONTH_TIER_0:
                return P.intl.string(P.t["0ggVqN"]);
            case L.gD.PREMIUM_YEAR_TIER_0:
                return P.intl.string(P.t["jm+ZQw"]);
            case L.gD.PREMIUM_MONTH_TIER_1:
                return P.intl.string(P.t.uph4Jx);
            case L.gD.PREMIUM_YEAR_TIER_1:
                return P.intl.string(P.t["D/l7Yt"]);
            case L.gD.PREMIUM_MONTH_TIER_2:
            case L.gD.PREMIUM_GROUP_MONTH:
                return P.intl.string(P.t["5l1MuV"]);
            case L.gD.PREMIUM_YEAR_TIER_2:
                return P.intl.string(P.t.G0mISV);
        }
    switch (i) {
        case L.gD.PREMIUM_MONTH_TIER_0:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["/G3aKw"]);
        case L.gD.PREMIUM_YEAR_TIER_0:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["2eQpsL"]);
        case L.gD.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t.gueLg5);
        case L.gD.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["MhH/vW"]);
        case L.gD.PREMIUM_MONTH_TIER_2:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t.LQVQIq);
        case L.gD.PREMIUM_GROUP_MONTH:
            return P.intl.formatToPlainString(x.default.LwdrNi, { premiumGroupProductName: (0, w.DP)() });
        case L.gD.PREMIUM_YEAR_TIER_2:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["0nfg1x"]);
        case L.gD.PREMIUM_3_MONTH_TIER_2:
        case L.gD.PREMIUM_6_MONTH_TIER_2:
            return P.intl.formatToPlainString(P.t.BCD4fT, { intervalCount: t.intervalCount });
        case L.gD.NONE_MONTH:
        case L.gD.NONE_YEAR:
        case L.gD.NONE_3_MONTH:
        case L.gD.NONE_6_MONTH:
        case L.gD.PREMIUM_MONTH_GUILD:
        case L.gD.PREMIUM_YEAR_GUILD:
        case L.gD.PREMIUM_3_MONTH_GUILD:
        case L.gD.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, S.pM)(r, { tags: { planId: i } }), r);
}
function eO(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = I.A.get(t);
    return s()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eR() {
    let e = M.Yr.USD;
    try {
        e = B(L.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eb(e) {
    let { intervalType: t = L.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case L.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? P.intl.formatToPlainString(P.t.fRNBRX, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EIpHEj, { weeks: n / 7 });
            return i
                ? P.intl.formatToPlainString(P.t["6Cdzoy"], { days: n })
                : P.intl.formatToPlainString(P.t["kbBj/h"], { days: n });
        case L.WT.MONTH:
            return i
                ? P.intl.formatToPlainString(P.t.x5MgxS, { months: n })
                : P.intl.formatToPlainString(P.t["4SEnCZ"], { months: n });
        case L.WT.YEAR:
            return i
                ? P.intl.formatToPlainString(P.t["h+63yl"], { years: n })
                : P.intl.formatToPlainString(P.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eD(e) {
    let { intervalType: t = L.WT.MONTH, intervalCount: n = 1 } = e,
        i = eR(),
        r = (0, b.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case L.WT.DAY:
            if (n >= 7 && n % 7 == 0) return P.intl.formatToPlainString(P.t.C6i5Jt, { weeks: n / 7, price: r });
            return P.intl.formatToPlainString(P.t.cR9ifw, { days: n, price: r });
        case L.WT.MONTH:
            return P.intl.formatToPlainString(P.t["8FZfNo"], { months: n, price: r });
        case L.WT.YEAR:
            return P.intl.formatToPlainString(P.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eL(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eD({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function ew(e) {
    let { intervalType: t = L.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case L.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? P.intl.formatToPlainString(P.t.iVZYyl, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EmoBD2, { weeks: n / 7 });
            return i
                ? P.intl.formatToPlainString(P.t.jzH70Z, { days: n })
                : P.intl.formatToPlainString(P.t["k2UNz+"], { days: n });
        case L.WT.MONTH:
            return i
                ? P.intl.formatToPlainString(P.t.erUSmA, { months: n })
                : P.intl.formatToPlainString(P.t.kridzK, { months: n });
        case L.WT.YEAR:
            return i
                ? P.intl.formatToPlainString(P.t.IfYQVC, { years: n })
                : P.intl.formatToPlainString(P.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eM(e, t) {
    switch (e) {
        case D.kM_.APPLE_PARTNER:
        case D.kM_.APPLE_ADVANCED_COMMERCE:
        case D.kM_.APPLE:
            return U[t];
        case D.kM_.GOOGLE:
            return k[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function eP(e, t) {
    return (0, R.ki)(e) || ey(t?.status);
}
function ex(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => L.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function eU(e) {
    return e.filter((e) => !L.JM.has(e.planId));
}
function ek(e, t, n, i) {
    s()(i.has(t), "Expected planId in group");
    let r = !1,
        a = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((r = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!r) {
        let i = { planId: t, quantity: n },
            r = e.items.find((e) => e.planId === t);
        null != r && (i.id = r.id), a.push(i);
    }
    return a.filter((e) => 0 !== e.quantity);
}
function eG(e, t) {
    return ek(e, t, 1, L.JM);
}
function eF(e, t, n) {
    return ek(e, n, t, L.pW);
}
function eV(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => L.JM.has(e.planId));
    if (null != t) {
        let n = I.A.get(t.planId);
        s()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = I.A.get(e.planId);
                if ((s()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = I.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return s()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function eB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = L.f5[e].fileSize;
    return (0, C.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function eH(e) {
    return null == e ? null : e.items.find((e) => L.pW.has(e.planId));
}
function ej(e) {
    let t = null != e ? V(e) : null;
    return null != t ? ea(t.planId) : null;
}
let eY = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function eW(e) {
    return (0, h.RM)(h.G5, e);
}
function eK(e) {
    return (0, h.RM)(h.G3, e);
}
function ez(e, t) {
    let n = (0, b.$g)(e.amount, e.currency),
        i = Z(t);
    return `${n}/${i}`;
}
function e$(e) {
    return e;
}
function eq(e) {
    return "isNitroLocked" in e;
}
function eZ() {
    let e = (0, l.bG)([m.default], () => m.default.getCurrentUser());
    return (0, R.YE)(e, L.PremiumTypes.TIER_2);
}
function eX(e) {
    var t;
    let n = L.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case L.Tt:
                return L.h7;
            case L.yo:
                return L.CA;
        }
    else;
    return n;
}
function eQ(e) {
    return eJ(e.map((e) => e.skuId));
}
function eJ(e) {
    return e.reduce((e, t) => {
        let [n, i] = L.NL[t],
            r = 1;
        switch (n) {
            case L.T.HOUR:
                r = 1;
                break;
            case L.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let e0 = (e) => {
    let { planId: t, shouldUseCalculatedDiscount: n, isGift: i, priceOptions: r, subscriptionPlan: s } = e,
        a = L.XE[t];
    return n && (a = e1(s, i, r)), a;
};
function e1(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === L.WT.YEAR) {
        try {
            if (
                ((t = ((e) => {
                    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
                        r = L.En[t.skuId];
                    return null == r ? null : j(r, !1, n, i);
                })({ subscriptionPlan: e, isGift: i, priceOptions: r })),
                null == t)
            )
                return;
            n = j(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function e2(e) {
    return null == e ? 0 : Math.max((0, N.m_)(new Date(), new Date(e)), 0);
}
let e3 = Object.freeze({
    isNewUser: eY,
    isPremiumAtLeast: R.CC,
    isPremium: R.ki,
    isPremiumExactly: R.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: j,
    getDefaultPrice: B,
    getInterval: function (e) {
        let t = L.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, S.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: q,
    getIntervalStringAsNoun: Z,
    getPremiumType: X,
    getTierDisplayNameByPlanId: ee,
    getDisplayName: Q,
    getPremiumPlanOptions: es,
    formatInterval: function (e) {
        if (e === L.WT.YEAR) return P.intl.string(P.t.tfqrhj);
        if (e === L.WT.MONTH) return P.intl.string(P.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: en,
    isPremiumSku: function (e) {
        return e === L.pe.TIER_0 || e === L.pe.TIER_1 || e === L.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === L.WT.MONTH) return t;
        if (e === L.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: O.f,
    getSkuIdForPlan: ea,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case L.PremiumTypes.TIER_0:
                return L.pe.TIER_0;
            case L.PremiumTypes.TIER_1:
                return L.pe.TIER_1;
            case L.PremiumTypes.TIER_2:
                return L.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return X(e) === L.PremiumTypes.TIER_2 ? L.M4 : 0;
    },
    getBillingInformationString: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {
                          isFractionalPremiumActive: !1,
                          fetched: !0,
                          fractionalState: L.xc.NONE,
                          startsAt: o()(0),
                          endsAt: o()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: o()(0),
                          unactivatedUnits: [],
                      },
            s = null !== n && e.status === D.Dmq.PAST_DUE ? n : t,
            a = i
                ? (0, b.$g)(
                      s.invoiceItems
                          .filter((e) => L.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, b.$g)(s.total, s.currency);
        if (m.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return P.intl.format(P.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === D.Dmq.CANCELED) return P.intl.format(P.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === D.Dmq.PAUSE_PENDING)
            return P.intl.format(P.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === D.Dmq.PAUSED)
            return r.fractionalState !== L.xc.NONE
                ? P.intl.format(P.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: a })
                : null == e.pauseEndsAt
                  ? i
                      ? P.intl.format(P.t.KTYQCg, { planName: P.intl.string(P.t.Ipxkog), price: a })
                      : P.intl.string(P.t.fMz6Lg)
                  : i
                    ? P.intl.format(P.t.zcgtzf, {
                          planName: P.intl.string(P.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: a,
                      })
                    : P.intl.format(P.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === D.Dmq.PAST_DUE) {
            let t = ef(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = o()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = o()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? P.intl.format(P.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: M.qm[e.paymentGateway],
                      paymentSourceLink: eM(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : P.intl.format(P.t.qEIzyi, { endDate: t.toDate(), price: a });
        }
        {
            var l;
            if (e.status === D.Dmq.BILLING_RETRY)
                return P.intl.format(P.t.EMTLOT, {
                    endDate: o()(e.currentPeriodStart).add(L.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === D.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, v.isAndroid)()
                    ? P.intl.format(P.t["dtcxw+"], {
                          endDate: o()(e.currentPeriodStart).add(L.ph, "days").toDate(),
                          paymentGatewayName: M.qm[e.paymentGateway],
                          paymentSourceLink: eM(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : P.intl.format(P.t.EMTLOT, {
                          endDate: o()(e.currentPeriodStart).add(L.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (l = e).paymentSourceId && eg(l.paymentSourceId))
                return P.intl.format(P.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === D.Dmq.UNPAID) return P.intl.format(P.t.CzTKom, { maxProcessingTimeInDays: L.G4 });
            if (e.isPurchasedExternally)
                return P.intl.format(P.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: M.qm[e.paymentGateway],
                    subscriptionManagementLink: eM(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eh(n, r.unactivatedUnits)),
                i
                    ? P.intl.format(P.t.Vl3cED, { planName: P.intl.string(P.t.Ipxkog), renewalDate: n, price: a })
                    : P.intl.format(P.t.Q18lRK, { renewalDate: n, price: a })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: eh,
    getUnactivatedFractionalPremiumDurationString: ep,
    isSwitchingPlansDisabled: eE,
    getSwitchingPlansDisabledMessage: em,
    isNoneSubscription: E.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === D.Dmq.CANCELED || e.status === D.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eu(t);
        });
        return null == i ||
            (0, E.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === D.Dmq.CANCELED || e.status === D.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eu(t);
        });
        return (null == i || (0, E.m1)(i.subscriptionPlanId)) && (n = D.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: eN,
    getPremiumGuildIntervalPrice: eC,
    hasAccountCredit: function (e) {
        return (
            null != e &&
            0 !== e.size &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
        );
    },
    hasUnconsumedGiftForSubscriptionPlan: function (e, t) {
        return (
            null != e &&
            0 !== e.size &&
            null != t &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: n, parentId: i, consumed: r } = e;
                return null != n && null != i && !r && n === t;
            })
        );
    },
    getBillingReviewSubheader: ev,
    getIntervalForInvoice: eO,
    getPremiumPlanItem: V,
    getGuildBoostPlanItem: eH,
    isBoostOnlySubscription: function (e) {
        return null != e && null == V(e) && null != eH(e);
    },
    getPremiumSkuIdForSubscription: ej,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = V(e);
            if (null != t) return X(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: eQ,
    castPremiumSubscriptionAsSkuId: e$,
    calculateDiscountPercentageForYearlyPlan: e1,
    getDaysSincePremium: e2,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, N.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return (0, h.RM)(h.gQ, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, h.RM)(h.JK, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, h.RM)(h.He, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, h.RM)(h.ii, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, h.RM)(h.u6, e);
    },
    canUseBadges: function (e) {
        return (0, h.RM)(h.nI, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, h.RM)(h.DG, e);
    },
    canEditDiscriminator: function (e) {
        return (0, h.RM)(h.nh, e);
    },
    hasBoostDiscount: function (e) {
        return (0, h.RM)(h._V, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, h.RM)(h.OW, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, h.RM)(h._w, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, h.RM)(h.Qz, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, h.RM)(h.Pm, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, h.RM)(h.x, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, h.RM)(h.cS, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, h.RM)(h.T7, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, h.RM)(h.lx, e);
    },
    canUseClientThemes: function (e) {
        return (0, h.RM)(h.zL, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? (0, h.RM)(h.sj, t) : "mid" === e && (0, h.RM)(h.II, t);
    },
    canUseQuestOrbMultiplier: eW,
    hasFreeBoosts: function (e) {
        return (0, h.RM)(h.aE, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, h.RM)(h.GS, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, h.RM)(h.Zc, e);
    },
    canUseCollectibles: eK,
    canUseMonthlyOrbs: function (e) {
        return (0, p.Nh)(e?.perks, u.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return eK(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return eW(e);
    },
    formatPriceString: ez,
    StreamQuality: F,
});
