"use strict";
n.d(t, {
    $Q: () => q,
    $k: () => eL,
    Ay: () => tK,
    CC: () => O.CC,
    D8: () => ee,
    Dd: () => eo,
    EJ: () => e6,
    EL: () => H,
    Em: () => tD,
    FJ: () => et,
    FY: () => e$,
    GX: () => e1,
    Ge: () => eY,
    I8: () => z,
    J$: () => eb,
    JM: () => j,
    Ke: () => J,
    LE: () => ez,
    L_: () => tH,
    Mn: () => er,
    Nc: () => eC,
    OU: () => ec,
    Of: () => eX,
    Om: () => e2,
    PK: () => eG,
    Pg: () => e0,
    Q8: () => eR,
    RH: () => es,
    Rr: () => eW,
    TW: () => O.ki,
    Tm: () => e_,
    To: () => tY,
    U8: () => X,
    UC: () => Z,
    Uf: () => ew,
    YE: () => O.YE,
    Zb: () => eI,
    Zw: () => ei,
    _e: () => ev,
    aE: () => eQ,
    aZ: () => e7,
    bx: () => eh,
    e1: () => tx,
    ee: () => eJ,
    ff: () => ej,
    iv: () => tV,
    jh: () => ex,
    ji: () => eS,
    kX: () => eN,
    ki: () => eU,
    l6: () => Y,
    m6: () => en,
    mH: () => tb,
    mv: () => te,
    nB: () => eu,
    nK: () => tL,
    pb: () => $,
    qn: () => e3,
    re: () => eq,
    sS: () => eM,
    tS: () => eK,
    tW: () => eZ,
    xq: () => eE,
    y8: () => W,
    ys: () => eA,
    z4: () => eg,
}),
    n(667532),
    n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(989349),
    a = n.n(s),
    o = n(311907),
    l = n(988506),
    u = n(975807),
    c = n(366999),
    d = n(626584),
    _ = n(367888),
    f = n(493740),
    p = n(965387),
    h = n(817857),
    m = n(832946),
    E = n(287809),
    g = n(615405),
    A = n(295405),
    I = n(97352),
    T = n(166403),
    S = n(739508),
    y = n(405269),
    v = n(927813),
    N = n(255438),
    C = n(723702),
    R = n(125584),
    O = n(474090),
    b = n(580630),
    D = n(652215),
    L = n(100544),
    w = n(788868),
    M = n(88001),
    x = n(818348),
    P = n(985018),
    k = n(782965);
let U = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    G = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    F = new d.A("PremiumUtils.tsx"),
    V = 2592e6;
var B = (function (e) {
    return (e.MID = "mid"), (e.HIGH = "high"), e;
})({});
function H(e) {
    return e.items.find((e) => w.JM.has(e.planId));
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = A.A.defaultPaymentSourceId ?? void 0,
        a = T.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        W(e, t, n, { paymentSourceId: s, currency: r }, i)
    );
}
function Y(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: s, currency: a, contextPlanPrices: o } = r;
    if (null != o) {
        let t = o[e];
        if (null != t)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != I.A.get(e)) {
        let r = D.lid.DEFAULT;
        n ? (r = D.lid.GIFT) : t && (r = D.lid.PREMIUM_TIER_1);
        let o = z(e, { paymentSourceId: s, purchaseType: r, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (i &&
                    (0, S.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: r.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (i && (0, S.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...r, isGift: n } }), l);
}
function K(e, t) {
    let n = I.A.get(e);
    if (null == n) {
        let n = Error("Plan not found");
        throw ((0, S.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
    }
    if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
    let r = n.prices[t];
    if (null == r)
        throw (
            (F.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
            Error(`No prices returned for purchase type ${t} for plan ${e}`))
        );
    return r;
}
function $(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.lid.DEFAULT },
        r = K(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            F.info(`Payment sources IDs: ${JSON.stringify(Object.keys(r.paymentSourcePrices))}`),
                F.info(`prices: ${i}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, S.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        F.info(`countryPrices: ${JSON.stringify(r.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, S.pM)(t, { tags: { countryCode: r.countryPrices.countryCode, planId: e } }), t);
    }
    return r.countryPrices.prices;
}
function z(e) {
    let {
            paymentSourceId: t,
            purchaseType: n,
            currency: r,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.lid.DEFAULT },
        i = $(e, { paymentSourceId: t, purchaseType: n });
    if (
        (0 === i.length && F.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
        null != r)
    ) {
        let s = i.find((e) => e.currency === r.toLowerCase());
        return null != s
            ? s
            : null != t
              ? $(e, { purchaseType: n }).find((e) => e.currency === r.toLowerCase())
              : void 0;
    }
    return i[0];
}
function q(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function Z(e, t, n) {
    let r,
        i,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, _._1)(e);
    null != a && (r = w.hd[a.planId].premiumType);
    let o = (0, O.CC)(r, w.PremiumTypes.TIER_0),
        l = (0, O.CC)(r, w.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = w.pW.has(r.planId) ? l : !w.JM.has(r.planId) && o),
            (e = void 0 === n ? j(r.planId, i, !1, t) : W(r.planId, i, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * r.quantity);
    }
    return q(s);
}
function X(e, t, n, r) {
    let s;
    return (
        null === t && (i()(null !== e, "Subscription can't be null"), (t = [])),
        Z((s = null !== e ? eQ(e, t) : eJ(t)), n, r)
    );
}
function Q(e) {
    let t = w.hd[e];
    if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
    let n = Error("Unsupported plan");
    throw ((0, S.pM)(n, { tags: { planId: e } }), n);
}
function J(e) {
    switch (e) {
        case w.Ff.MONTH:
            return P.intl.string(P.t.FPybU7);
        case w.Ff.YEAR:
            return P.intl.string(P.t.tfqrhj);
        case w.Ff.DAY:
        case w.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function ee(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : w.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case w.WT.MONTH:
                let a = P.intl.formatToPlainString(s === w.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.FPybU7),
                });
                return i ? a : P.intl.string(P.t.Mh9bTt);
            case w.WT.YEAR:
                let o = P.intl.formatToPlainString(s === w.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.tfqrhj),
                });
                return i ? o : P.intl.string(P.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case w.WT.MONTH:
            if (1 !== r) return P.intl.formatToPlainString(P.t["0UlZnH"], { intervalCount: r });
            return P.intl.string(P.t.DKzs96);
        case w.WT.YEAR:
            return P.intl.string(P.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function et(e) {
    switch (e) {
        case w.WT.MONTH:
            return P.intl.string(P.t.FPybU7);
        case w.WT.YEAR:
            return P.intl.string(P.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function en(e) {
    let t = w.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, S.pM)(n, { tags: { planId: e } }), n);
}
function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case w.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? P.intl.format(P.t.TZXHNj, { duration: r })
                : n
                  ? P.intl.string(P.t["81iAgs"])
                  : P.intl.string(P.t["0efVPy"]);
        case w.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? P.intl.format(P.t.eqRhC7, { duration: r })
                : n
                  ? P.intl.string(P.t.UvzqY1)
                  : P.intl.string(P.t.eoVuBn);
        case w.gD.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t["g/dH5g"]) : P.intl.string(P.t["7O6qSq"]);
        case w.gD.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.pdZJaq) : P.intl.string(P.t.Md5xbi);
        case w.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? P.intl.format(P.t.aI6QXz, { duration: r })
                : n
                  ? P.intl.string(P.t.SmVbHc)
                  : P.intl.string(P.t.FKYNC6);
        case w.gD.PREMIUM_GROUP_MONTH:
            return n ? P.intl.string(P.t.SmVbHc) : P.intl.string(P.t.FKYNC6);
        case w.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? P.intl.format(P.t["1wBcPi"], { duration: r })
                : n
                  ? P.intl.string(P.t.JIq4O1)
                  : P.intl.string(P.t["cfu/5d"]);
        case w.gD.PREMIUM_3_MONTH_TIER_2:
            return P.intl.string(P.t.wCbINr);
        case w.gD.PREMIUM_6_MONTH_TIER_2:
            return P.intl.string(P.t["e3/ArU"]);
        case w.gD.PREMIUM_MONTH_GUILD:
            return n ? P.intl.string(P.t["6ZR3By"]) : P.intl.string(P.t["h80cx/"]);
        case w.gD.PREMIUM_YEAR_GUILD:
            return n ? P.intl.string(P.t.YDpAzZ) : P.intl.string(P.t.ZHkls0);
        case w.gD.PREMIUM_3_MONTH_GUILD:
            return P.intl.string(P.t.EZHHB6);
        case w.gD.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.X2KDO2);
        case w.gD.PREMIUM_MONTH_LEGACY:
            return P.intl.string(P.t.PD6k79);
        case w.gD.PREMIUM_YEAR_LEGACY:
            return P.intl.string(P.t.LtJgTC);
    }
    let i = Error("Unsupported plan");
    throw ((0, S.pM)(i, { tags: { planId: e } }), i);
}
function ei(e) {
    switch (e) {
        case w.pe.TIER_0:
            return P.intl.string(P.t["t9uG/o"]);
        case w.pe.TIER_1:
            return P.intl.string(P.t.FSOz78);
        case w.pe.TIER_2:
            return P.intl.string(P.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, S.pM)(t, { tags: { skuId: e } }), t);
}
function es(e) {
    let t = w.hd[e]?.premiumType,
        n = null != t ? w.Mr[t] : null;
    if (null != n) return P.intl.string(n);
    let r = Error("Unsupported plan");
    throw ((0, S.pM)(r, { tags: { planId: e } }), r);
}
function ea(e, t) {
    if (e === w.WT.MONTH) return t;
    if (e === w.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case w.PremiumTypes.TIER_0:
            return t ? "Basic" : P.intl.string(P.t["t9uG/o"]);
        case w.PremiumTypes.TIER_1:
            return t ? "Classic" : P.intl.string(P.t.FSOz78);
        case w.PremiumTypes.TIER_2:
            return P.intl.string(P.t.lG6a5x);
    }
}
function el(e) {
    let {
            subscription: t,
            planId: n,
            price: r,
            includePremiumGuilds: i,
            hasDiscountApplied: s,
            activeDiscountInfo: o,
            renewalInvoicePreview: l,
            hasFractionalPremiumWithSub: c,
        } = e,
        d = w.hd[n],
        _ = tO(j(d.id), d.interval),
        f =
            eU(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !E.default.getCurrentUser()?.hasFreePremium()),
        p = null != r && null == t.paymentGateway,
        h = t.status === D.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === D.lT7.OPEN,
        m = f ? D.Dmq.CANCELED : h ? D.Dmq.UNPAID : t.status,
        g = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        A = w.M4 + (i ? eh(t.additionalPlans) : 0),
        I = p
            ? g
                ? P.intl.format(P.t["cd+hqB"], { price: r })
                : P.intl.format(P.t.NUkcpF, { price: r })
            : P.intl.string(P.t.zYx3Y6),
        T = p
            ? g
                ? P.intl.format(P.t.VsKcFB, { price: r })
                : P.intl.format(P.t.hJ5xEX, { price: r })
            : P.intl.string(P.t["8rSipI"]),
        S = p
            ? g
                ? P.intl.format(P.t["jRy6/J"], { price: r, num: A })
                : P.intl.format(P.t.tTNE8M, { price: r, num: A })
            : P.intl.format(P.t["U+z/HJ"], { num: A });
    switch (n) {
        case w.gD.PREMIUM_MONTH_TIER_0:
        case w.gD.PREMIUM_YEAR_TIER_0:
            switch (m) {
                case D.Dmq.CANCELED:
                    return p
                        ? g
                            ? P.intl.format(P.t["USi/nc"], { price: r })
                            : P.intl.format(P.t["FS//l2"], { price: r })
                        : P.intl.string(P.t.JshLzq);
                case D.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? P.intl.format(P.t["5mv+2i"], { price: r })
                            : P.intl.format(P.t.nkAEfZ, { price: r })
                        : P.intl.format(P.t.SsLIXS, {});
                case D.Dmq.UNPAID:
                    return P.intl.format(P.t.cmkbFB, {});
                case D.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? a()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case D.Dmq.PAUSED:
                    if (c) return I;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case D.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, y.i$)(eS(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return I;
            }
        case w.gD.PREMIUM_MONTH_TIER_1:
        case w.gD.PREMIUM_YEAR_TIER_1:
            switch (m) {
                case D.Dmq.CANCELED:
                    return p
                        ? g
                            ? P.intl.format(P.t.cXy8Bp, { price: r })
                            : P.intl.format(P.t["C/XsHt"], { price: r })
                        : P.intl.string(P.t.K6tYFa);
                case D.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? P.intl.format(P.t.HBkIBi, { price: r })
                            : P.intl.format(P.t.ZsO1Sx, { price: r })
                        : P.intl.format(P.t["0+/WH7"], {});
                case D.Dmq.UNPAID:
                    return P.intl.format(P.t.McIzwj, {});
                case D.Dmq.PAUSE_PENDING:
                    let N = null != t.pauseEndsAt ? a()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != N
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: N })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case D.Dmq.PAUSED:
                    if (c) return T;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case D.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, y.i$)(eS(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return T;
            }
        case w.gD.PREMIUM_MONTH_TIER_2:
        case w.gD.PREMIUM_YEAR_TIER_2:
        case w.gD.PREMIUM_3_MONTH_TIER_2:
        case w.gD.PREMIUM_6_MONTH_TIER_2:
        case w.gD.PREMIUM_GROUP_MONTH:
            switch (m) {
                case D.Dmq.CANCELED:
                    return p
                        ? g
                            ? P.intl.format(P.t.xoFgRh, { price: r, num: A })
                            : P.intl.format(P.t.nXdbKo, { price: r, num: A })
                        : P.intl.format(P.t.EcSdRH, { num: A });
                case D.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? P.intl.format(P.t["5C/0QG"], { price: r, num: A })
                            : P.intl.format(P.t.xfYkhu, { price: r, num: A })
                        : P.intl.format(P.t.ivjxcn, { num: A });
                case D.Dmq.UNPAID:
                    return P.intl.format(P.t["0HopYf"], { num: A });
                case D.Dmq.PAUSE_PENDING:
                    let C = null != t.pauseEndsAt ? a()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != C
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: C })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case D.Dmq.PAUSED:
                    if (c) return S;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case D.Dmq.BILLING_RETRY:
                    return P.intl.format(P.t["IlJ/HV"], {
                        endDate: a()(t.currentPeriodStart).add(w.bx, "days").toDate(),
                    });
                case D.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, y.i$)(eS(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === w.gD.PREMIUM_YEAR_TIER_2
                            ? P.intl.format(P.t["+qqh6g"], { percent: o?.percentage ?? w.Cq, regularPrice: _ })
                            : g
                              ? P.intl.formatToPlainString(P.t["3ZiutU"], {
                                    percent: o?.percentage ?? w._$,
                                    regularPrice: _,
                                    numMonths: o?.duration ?? w.OJ,
                                })
                              : P.intl.formatToPlainString(P.t["G6+XOT"], {
                                    percent: o?.percentage ?? w._$,
                                    regularPrice: _,
                                    numMonths: o?.duration ?? w.OJ,
                                })
                        : S;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function eu(e) {
    let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: r,
            includePremiumGuilds: s = !1,
            hasDiscountApplied: a = !1,
            activeDiscountInfo: o,
            hasFractionalPremiumWithSub: l = !1,
        } = e,
        u = I.A.get(r);
    return (
        i()(null != u, "Missing plan"),
        el({
            subscription: n,
            planId: u.id,
            price: eF(t, n, u),
            includePremiumGuilds: s,
            hasDiscountApplied: a,
            activeDiscountInfo: o,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l,
        })
    );
}
function ec(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, m.m1)(t) ? null : er(t),
        i = n?.find((e) => {
            let { planId: t } = e;
            return w.pW.has(t);
        }),
        s = i?.planId === w.gD.PREMIUM_MONTH_GUILD || i?.planId === w.gD.PREMIUM_YEAR_GUILD ? P.t.Pi5yMJ : null,
        a = null != s ? P.intl.formatToPlainString(s, { num: i?.quantity }) : void 0;
    if (null != r && null != a)
        return P.intl.formatToPlainString(P.t.FN5T9r, { premiumDescription: r, premiumGuildDescription: a });
    if (null != r) return r;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function ed(e) {
    return e === w.pe.TIER_0 || e === w.pe.TIER_1 || e === w.pe.TIER_2;
}
function e_(e) {
    let { skuId: t, isPremium: n, defaultPlanId: r } = e;
    if (null == t || !n) return [];
    let i = void 0 !== r && t === w.hd[r].skuId ? r : void 0,
        s = [];
    switch (t) {
        case w.pe.TIER_0:
            s = [w.gD.PREMIUM_YEAR_TIER_0, w.gD.PREMIUM_MONTH_TIER_0];
            break;
        case w.pe.TIER_1:
            s = [w.gD.PREMIUM_MONTH_TIER_1];
            break;
        case w.pe.TIER_2:
            s = [w.gD.PREMIUM_YEAR_TIER_2, w.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== i) {
        let e = s.indexOf(i);
        s.splice(e, 1), s.unshift(i);
    }
    return s;
}
function ef(e) {
    let t = w.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ep(e) {
    switch (e) {
        case w.PremiumTypes.TIER_0:
            return w.pe.TIER_0;
        case w.PremiumTypes.TIER_1:
            return w.pe.TIER_1;
        case w.PremiumTypes.TIER_2:
            return w.pe.TIER_2;
    }
}
function eh(e) {
    let t = I.A.getPlanIdsForSkus([tb(w.pe.GUILD)]);
    i()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let em = new Set([
    w.gD.NONE_MONTH,
    w.gD.NONE_3_MONTH,
    w.gD.NONE_6_MONTH,
    w.gD.NONE_YEAR,
    w.gD.PREMIUM_MONTH_TIER_0,
    w.gD.PREMIUM_MONTH_TIER_1,
    w.gD.PREMIUM_MONTH_TIER_2,
    w.gD.PREMIUM_YEAR_TIER_0,
    w.gD.PREMIUM_YEAR_TIER_1,
    w.gD.PREMIUM_YEAR_TIER_2,
    w.gD.PREMIUM_3_MONTH_TIER_2,
    w.gD.PREMIUM_6_MONTH_TIER_2,
    w.gD.PREMIUM_GROUP_MONTH,
]);
function eE(e) {
    return em.has(e);
}
function eg(e) {
    return w.pW.has(e);
}
function eA(e) {
    return eE(e) || eg(e);
}
function eI(e) {
    return null != e && e === w.gD.PREMIUM_GROUP_MONTH;
}
function eT(e) {
    return en(e) === w.PremiumTypes.TIER_2 ? w.M4 : 0;
}
function eS(e) {
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
        let t = e.isPurchasedViaApple ? w.U1 : w.L9;
        return { days: t, expiresDate: a()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: a()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: a()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? w.a5 : w.EV;
        return { days: t, expiresDate: a()(e.currentPeriodStart).add(t, "days") };
    }
}
function ey(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i =
            arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: w.xc.NONE,
                      startsAt: a()(0),
                      endsAt: a()(0),
                      currentEntitlementId: "",
                      currentEntitlementEndsAt: a()(0),
                      unactivatedUnits: [],
                  },
        s = null !== n && e.status === D.Dmq.PAST_DUE ? n : t,
        o = r
            ? (0, b.$g)(
                  s.invoiceItems
                      .filter((e) => w.VY.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  s.currency,
              )
            : (0, b.$g)(s.total, s.currency);
    if (E.default.getCurrentUser()?.isOnReverseTrial()) {
        let t = null != i.currentEntitlementEndsAt ? i.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
        return P.intl.format(P.t["7ZS2m1"], { trialEnd: t });
    }
    if (e.status === D.Dmq.CANCELED) return P.intl.format(P.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
    if (e.status === D.Dmq.PAUSE_PENDING)
        return P.intl.format(P.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
    if (e.status === D.Dmq.PAUSED)
        return i.fractionalState !== w.xc.NONE
            ? P.intl.format(P.t.Q18lRK, { renewalDate: i.endsAt.toDate(), price: o })
            : null == e.pauseEndsAt
              ? r
                  ? P.intl.format(P.t.KTYQCg, { planName: P.intl.string(P.t.Ipxkog), price: o })
                  : P.intl.string(P.t.fMz6Lg)
              : r
                ? P.intl.format(P.t.zcgtzf, {
                      planName: P.intl.string(P.t.Ipxkog),
                      resumeDate: e.pauseEndsAt,
                      price: o,
                  })
                : P.intl.format(P.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
    if (e.status === D.Dmq.PAST_DUE) {
        let t = eS(e).expiresDate;
        return (e.isPurchasedViaGoogle &&
            e.metadata?.google_grace_period_expires_date != null &&
            (t = a()(e.metadata.google_grace_period_expires_date)),
        e.isPurchasedViaApple &&
            e.metadata?.apple_grace_period_expires_date != null &&
            (t = a()(e.metadata.apple_grace_period_expires_date)),
        e.isPurchasedExternally)
            ? P.intl.format(P.t.U2hb3W, {
                  endDate: t.toDate(),
                  paymentGatewayName: x.qm[e.paymentGateway],
                  paymentSourceLink: eZ(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
              })
            : P.intl.format(P.t.qEIzyi, { endDate: t.toDate(), price: o });
    }
    {
        if (e.status === D.Dmq.BILLING_RETRY)
            return P.intl.format(P.t.EMTLOT, {
                endDate: a()(e.currentPeriodStart).add(w.bx, "days").toDate(),
                price: o,
            });
        if (e.status === D.Dmq.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, C.isAndroid)()
                ? P.intl.format(P.t["dtcxw+"], {
                      endDate: a()(e.currentPeriodStart).add(w.ph, "days").toDate(),
                      paymentGatewayName: x.qm[e.paymentGateway],
                      paymentSourceLink: eZ(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : P.intl.format(P.t.EMTLOT, {
                      endDate: a()(e.currentPeriodStart).add(w.ph, "days").toDate(),
                      price: o,
                  });
        if (eO(e)) return P.intl.format(P.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === D.Dmq.UNPAID) return P.intl.format(P.t.CzTKom, { maxProcessingTimeInDays: w.G4 });
        if (e.isPurchasedExternally)
            return P.intl.format(P.t.ZlWXgR, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: x.qm[e.paymentGateway],
                subscriptionManagementLink: eZ(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            });
        let n = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || e.hasAnyPremiumGroup || (n = ev(n, i.unactivatedUnits)),
            r
                ? P.intl.format(P.t.Vl3cED, { planName: P.intl.string(P.t.Ipxkog), renewalDate: n, price: o })
                : P.intl.format(P.t.Q18lRK, { renewalDate: n, price: o })
        );
    }
}
function ev(e, t, n, r) {
    let i = a()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tF(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = a()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}
function eN(e) {
    let t = tF(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === w.xc.NONE)) return "";
    let n = { days: P.t.fYmirx, hours: P.t["C3RO+g"], minutes: P.t.r77oHc },
        r = (0, c.Vb)((0, y.Tf)(0, t * v.A.Millis.HOUR));
    return (0, y.uN)(r, n);
}
function eC(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === D.Dmq.PAST_DUE;
}
function eR(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? P.intl.string(P.t["0rzJ4J"]) : P.intl.string(P.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = P.intl.string(P.t.a9Mdb3)),
        t
    );
}
function eO(e) {
    return null != e.paymentSourceId && eb(e.paymentSourceId);
}
function eb(e) {
    if (null == e) return !1;
    let t = A.A.getPaymentSource(e);
    return null != t && x.AD.has(t.type);
}
function eD(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = eh(n);
    return 0 === (null != t ? eh(t.additionalPlans) : null) && 0 !== i ? D.Dmq.CANCELED : r;
}
function eL(e) {
    return e.isPurchasedExternally ? e.status === D.Dmq.CANCELED : eD(e) === D.Dmq.CANCELED;
}
function ew(e) {
    let { subscription: t, user: n, price: r, renewalInvoicePreview: s, fractionalPremiumInfo: a } = e,
        { planId: o, additionalPlans: l } = t,
        c = I.A.get(o);
    i()(null != c, "Missing plan");
    let d = eh(l),
        _ = eV(t.planId, t.paymentSourceId, t.currency, n).amount * d;
    if (null != s) {
        let e = s.invoiceItems.find((e) => w.pW.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    r = r ?? (0, b.$g)(_, t.currency);
    let f = s?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (eL(t))
        return t.isPurchasedViaGoogle
            ? P.intl.format(P.t["3/WTrI"], { quantity: d })
            : f
              ? P.intl.format(P.t["0ozBSB"], { quantity: d, rate: (0, b.CE)(r, c.interval, c.intervalCount) })
              : P.intl.format(P.t["yjsv/s"], { quantity: d, rate: (0, b.CE)(r, c.interval, c.intervalCount) });
    switch (t.status) {
        case D.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? P.intl.format(P.t.Nlf3nc, { quantity: d, boostQuantity: d })
                : f
                  ? P.intl.format(P.t.oiRy7v, {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, b.CE)(r, c.interval, c.intervalCount),
                    })
                  : P.intl.format(P.t["0QxOAi"], {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, b.CE)(r, c.interval, c.intervalCount),
                    });
        case D.Dmq.PAUSE_PENDING:
        case D.Dmq.PAUSED:
            if (null != a && !a.isFractionalPremiumActive) return P.intl.string(P.t.CduWAm);
            return P.intl.format(P.t["5iud9s"], { quantity: d });
        case D.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return P.intl.format(P.t["d+0vwo"], {
                    endDate: (0, y.i$)(eS(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? P.intl.format(P.t["5iud9s"], { quantity: d })
                : f
                  ? P.intl.format(P.t.eDwrLA, { quantity: d, rate: (0, b.CE)(r, c.interval, c.intervalCount) })
                  : P.intl.format(P.t.ijSDcI, { quantity: d, rate: (0, b.CE)(r, c.interval, c.intervalCount) });
    }
}
function eM(e, t, n) {
    let r,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            r = W(e.id, !1, i, t);
        } catch {
            r = j(e.id, !1, i);
        }
    else r = j(e.id, !1, i);
    let s = (0, b.$g)(r.amount, r.currency);
    return e.currency !== x.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function ex(e, t, n) {
    let r = eM(e, t, n);
    return (0, b.CE)(r, e.interval, e.intervalCount);
}
function eP(e, t) {
    let { planId: n } = e;
    if (e.status === D.Dmq.CANCELED || e.status === D.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eE(t);
    });
    return null == r ||
        (0, m.m1)(r.subscriptionPlanId) ||
        (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
        ? e.planId
        : r.subscriptionPlanId;
}
function ek(e, t) {
    let { status: n } = e;
    if (e.status === D.Dmq.CANCELED || e.status === D.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eE(t);
    });
    return (null == r || (0, m.m1)(r.subscriptionPlanId)) && (n = D.Dmq.CANCELED), n;
}
function eU(e) {
    let { status: t, renewalMutations: n } = e;
    return t === D.Dmq.CANCELED || (null != n && (0, m.m1)(n.planId) && !e.isPurchasedExternally);
}
function eG(e) {
    return e === D.Dmq.PAST_DUE || e === D.Dmq.ACCOUNT_HOLD || e === D.Dmq.BILLING_RETRY;
}
function eF(e, t, n) {
    let r = e.findInvoiceItemByPlanId(n.id),
        i = null == r ? W(n.id, !1, !1, { paymentSourceId: t.paymentSourceId, currency: t.currency }).amount : r.amount;
    return (0, b.CE)((0, b.$g)(i, e.currency), n.interval, n.intervalCount);
}
function eV(e, t, n, r) {
    let i = null != t ? { paymentSourceId: t, currency: n } : { country: g.A.ipCountryCodeWithFallback, currency: n },
        s = I.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    let a = I.A.getForSkuAndInterval(tb(w.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    return W(a.id, (0, O.ki)(r), !1, i);
}
function eB(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eH(e, t) {
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
function ej(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case w.gD.PREMIUM_MONTH_TIER_0:
                return P.intl.string(P.t["0ggVqN"]);
            case w.gD.PREMIUM_YEAR_TIER_0:
                return P.intl.string(P.t["jm+ZQw"]);
            case w.gD.PREMIUM_MONTH_TIER_1:
                return P.intl.string(P.t.uph4Jx);
            case w.gD.PREMIUM_YEAR_TIER_1:
                return P.intl.string(P.t["D/l7Yt"]);
            case w.gD.PREMIUM_MONTH_TIER_2:
            case w.gD.PREMIUM_GROUP_MONTH:
                return P.intl.string(P.t["5l1MuV"]);
            case w.gD.PREMIUM_YEAR_TIER_2:
                return P.intl.string(P.t.G0mISV);
        }
    switch (r) {
        case w.gD.PREMIUM_MONTH_TIER_0:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["/G3aKw"]);
        case w.gD.PREMIUM_YEAR_TIER_0:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["2eQpsL"]);
        case w.gD.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t.gueLg5);
        case w.gD.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["MhH/vW"]);
        case w.gD.PREMIUM_MONTH_TIER_2:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t.LQVQIq);
        case w.gD.PREMIUM_GROUP_MONTH:
            return P.intl.formatToPlainString(k.default.LwdrNi, { premiumGroupProductName: (0, M.DP)() });
        case w.gD.PREMIUM_YEAR_TIER_2:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["0nfg1x"]);
        case w.gD.PREMIUM_3_MONTH_TIER_2:
        case w.gD.PREMIUM_6_MONTH_TIER_2:
            return P.intl.formatToPlainString(P.t.BCD4fT, { intervalCount: t.intervalCount });
        case w.gD.NONE_MONTH:
        case w.gD.NONE_YEAR:
        case w.gD.NONE_3_MONTH:
        case w.gD.NONE_6_MONTH:
        case w.gD.PREMIUM_MONTH_GUILD:
        case w.gD.PREMIUM_YEAR_GUILD:
        case w.gD.PREMIUM_3_MONTH_GUILD:
        case w.gD.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.eUEeCt);
    }
    let i = Error("User is purchasing an unsupported plan");
    throw ((0, S.pM)(i, { tags: { planId: r } }), i);
}
function eY(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = I.A.get(t);
    return i()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eW() {
    let e = x.Yr.USD;
    try {
        e = j(w.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eK(e) {
    let { intervalType: t = w.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? P.intl.formatToPlainString(P.t.fRNBRX, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EIpHEj, { weeks: n / 7 });
            return r
                ? P.intl.formatToPlainString(P.t["6Cdzoy"], { days: n })
                : P.intl.formatToPlainString(P.t["kbBj/h"], { days: n });
        case w.WT.MONTH:
            return r
                ? P.intl.formatToPlainString(P.t.x5MgxS, { months: n })
                : P.intl.formatToPlainString(P.t["4SEnCZ"], { months: n });
        case w.WT.YEAR:
            return r
                ? P.intl.formatToPlainString(P.t["h+63yl"], { years: n })
                : P.intl.formatToPlainString(P.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function e$(e) {
    let { intervalType: t = w.WT.MONTH, intervalCount: n = 1 } = e,
        r = eW(),
        i = (0, b.$g)(0, r, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case w.WT.DAY:
            if (n >= 7 && n % 7 == 0) return P.intl.formatToPlainString(P.t.C6i5Jt, { weeks: n / 7, price: i });
            return P.intl.formatToPlainString(P.t.cR9ifw, { days: n, price: i });
        case w.WT.MONTH:
            return P.intl.formatToPlainString(P.t["8FZfNo"], { months: n, price: i });
        case w.WT.YEAR:
            return P.intl.formatToPlainString(P.t.xzAcST, { years: n, price: i });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ez(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return e$({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function eq(e) {
    let { intervalType: t = w.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? P.intl.formatToPlainString(P.t.iVZYyl, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EmoBD2, { weeks: n / 7 });
            return r
                ? P.intl.formatToPlainString(P.t.jzH70Z, { days: n })
                : P.intl.formatToPlainString(P.t["k2UNz+"], { days: n });
        case w.WT.MONTH:
            return r
                ? P.intl.formatToPlainString(P.t.erUSmA, { months: n })
                : P.intl.formatToPlainString(P.t.kridzK, { months: n });
        case w.WT.YEAR:
            return r
                ? P.intl.formatToPlainString(P.t.IfYQVC, { years: n })
                : P.intl.formatToPlainString(P.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eZ(e, t) {
    switch (e) {
        case D.kM_.APPLE_PARTNER:
        case D.kM_.APPLE_ADVANCED_COMMERCE:
        case D.kM_.APPLE:
            return U[t];
        case D.kM_.GOOGLE:
            return G[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function eX(e, t) {
    return (0, O.ki)(e) || eG(t?.status);
}
function eQ(e, t) {
    let n = [],
        r = (e.renewalMutations?.items ?? e.items).find((e) => w.JM.has(e.planId));
    return (
        null != r && n.push(r),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function eJ(e) {
    return e.filter((e) => !w.JM.has(e.planId));
}
function e0(e, t, n, r) {
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
function e1(e, t) {
    return e0(e, t, 1, w.JM);
}
function e2(e, t, n) {
    return e0(e, n, t, w.pW);
}
function e3(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => w.JM.has(e.planId));
    if (null != t) {
        let n = I.A.get(t.planId);
        i()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let r = I.A.get(e.planId);
                if ((i()(null != r, "Missing plan"), n.interval === r.interval && n.intervalCount === r.intervalCount))
                    return e;
                let s = I.A.getForSkuAndInterval(r.skuId, n.interval, n.intervalCount);
                return i()(null != s, "Missing planForInterval"), { ...e, planId: s.id };
            }));
    }
    return e;
}
function e6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = w.f5[e].fileSize;
    return (0, N.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function e4(e) {
    return null == e ? null : e.items.find((e) => w.pW.has(e.planId));
}
function e5(e) {
    return null != e && null == H(e) && null != e4(e);
}
function e7(e) {
    let t = null != e ? H(e) : null;
    return null != t ? ef(t.planId) : null;
}
function e8(e) {
    if (null != e) {
        let t = H(e);
        if (null != t) return en(t.planId);
    }
}
function e9(e) {
    switch (e) {
        case w.PremiumTypes.TIER_0:
            return L.gi.PREMIUM_TIER_0;
        case w.PremiumTypes.TIER_1:
            return L.gi.PREMIUM_TIER_1;
        case w.PremiumTypes.TIER_2:
            return L.gi.PREMIUM_TIER_2;
    }
}
let te = (e) => null != e && Date.now() - e.createdAt.getTime() < V;
function tt(e) {
    return (0, f.RM)(f.gQ, e);
}
function tn(e) {
    return (0, f.RM)(f.JK, e);
}
function tr(e) {
    return (0, f.RM)(f.He, e);
}
function ti(e) {
    return (0, f.RM)(f.ii, e);
}
function ts(e) {
    return (0, f.RM)(f.u6, e);
}
function ta(e) {
    return (0, f.RM)(f.nI, e);
}
function to(e) {
    return (0, f.RM)(f.DG, e);
}
function tl(e) {
    return (0, f.RM)(f.nh, e);
}
function tu(e) {
    return (0, f.RM)(f._V, e);
}
function tc(e) {
    return (0, f.RM)(f.OW, e);
}
function td(e) {
    return (0, f.RM)(f._w, e);
}
function t_(e) {
    return (0, f.RM)(f.Qz, e);
}
function tf(e) {
    return (0, f.RM)(f.Pm, e);
}
function tp(e) {
    return (0, f.RM)(f.x, e);
}
function th(e) {
    return (0, f.RM)(f.cS, e);
}
function tm(e) {
    return (0, f.RM)(f.T7, e);
}
function tE(e) {
    return (0, f.RM)(f.lx, e);
}
function tg(e) {
    return (0, f.RM)(f.zL, e);
}
function tA(e, t) {
    return "high" === e ? (0, f.RM)(f.sj, t) : "mid" === e && (0, f.RM)(f.II, t);
}
function tI(e) {
    return (0, f.RM)(f.G5, e);
}
function tT(e) {
    return (0, f.RM)(f.aE, e);
}
function tS(e) {
    return (0, f.RM)(f.GS, e);
}
function ty(e) {
    return (0, f.RM)(f.Zc, e);
}
function tv(e) {
    return (0, f.RM)(f.G3, e);
}
function tN(e) {
    return (0, h.Nh)(e?.perks, l.bb.MONTHLY_ORBS);
}
function tC(e) {
    return (0, h.Nh)(e?.perks, l.bb.SHOP_DISCOUNTS);
}
function tR(e) {
    return (0, h.Nh)(e?.perks, l.bb.MORE_QUEST_ORBS);
}
function tO(e, t) {
    let n = (0, b.$g)(e.amount, e.currency),
        r = et(t);
    return `${n}/${r}`;
}
function tb(e) {
    return e;
}
function tD(e) {
    return "isNitroLocked" in e;
}
function tL() {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser());
    return (0, O.YE)(e, w.PremiumTypes.TIER_2);
}
function tw(e) {
    return e === w.Tt ? w.h7 : e === w.yo ? w.CA : w.CQ;
}
function tM() {
    return w.CQ;
}
function tx(e) {
    let t = (0, p.N)("getOfferNoticeThreshold");
    return 0 !== t ? t : tP(e) ? tw(e.trial_id) : tk(e) ? tM() : w.CQ;
}
function tP(e) {
    return null != e && "trial_id" in e;
}
function tk(e) {
    return null != e && "discount_id" in e;
}
function tU(e) {
    if (e === w.WT.YEAR) return P.intl.string(P.t.tfqrhj);
    if (e === w.WT.MONTH) return P.intl.string(P.t.FPybU7);
    throw Error(`Invalid interval type: ${e}`);
}
function tG(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tF(e) {
    return tV(e.map((e) => e.skuId));
}
function tV(e) {
    return e.reduce((e, t) => {
        let [n, r] = w.NL[t],
            i = 1;
        switch (n) {
            case w.T.HOUR:
                i = 1;
                break;
            case w.T.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
let tB = (e) => {
        let { subscriptionPlan: t, isGift: n = !1, priceOptions: r = {} } = e,
            i = w.En[t.skuId];
        return null == i ? null : W(i, !1, n, r);
    },
    tH = (e) => {
        let { planId: t, shouldUseCalculatedDiscount: n, isGift: r, priceOptions: i, subscriptionPlan: s } = e,
            a = w.XE[t];
        return n && (a = tj(s, r, i)), a;
    };
function tj(e) {
    let t,
        n,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === w.WT.YEAR) {
        try {
            if (((t = tB({ subscriptionPlan: e, isGift: r, priceOptions: i })), null == t)) return;
            n = W(e.id, !1, r, i);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tY(e) {
    return null == e ? 0 : Math.max((0, y.m_)(new Date(), new Date(e)), 0);
}
function tW(e) {
    return Math.max(1, Math.ceil((0, y.c_)(new Date(e.currentPeriodEnd), new Date())));
}
let tK = Object.freeze({
    isNewUser: te,
    isPremiumAtLeast: O.CC,
    isPremium: O.ki,
    isPremiumExactly: O.YE,
    isPremiumEligible: tG,
    getPrice: W,
    getDefaultPrice: j,
    getInterval: Q,
    getIntervalString: ee,
    getIntervalStringAsNoun: et,
    getPremiumType: en,
    getTierDisplayNameByPlanId: es,
    getDisplayName: er,
    getPremiumPlanOptions: e_,
    formatInterval: tU,
    getPlanDescription: el,
    isPremiumSku: ed,
    getIntervalMonths: ea,
    getUserMaxFileSize: R.f,
    getSkuIdForPlan: ef,
    getSkuIdForPremiumType: ep,
    getNumIncludedPremiumGuildSubscriptionSlots: eT,
    getBillingInformationString: ey,
    extendDateWithUnconsumedFractionalPremium: ev,
    getUnactivatedFractionalPremiumDurationString: eN,
    isSwitchingPlansDisabled: eC,
    getSwitchingPlansDisabledMessage: eR,
    isNoneSubscription: m.m1,
    getPlanIdFromInvoice: eP,
    getStatusFromInvoice: ek,
    isBaseSubscriptionCanceled: eU,
    getPremiumGuildIntervalPrice: eV,
    hasAccountCredit: eB,
    hasUnconsumedGiftForSubscriptionPlan: eH,
    getBillingReviewSubheader: ej,
    getIntervalForInvoice: eY,
    getPremiumPlanItem: H,
    getGuildBoostPlanItem: e4,
    isBoostOnlySubscription: e5,
    getPremiumSkuIdForSubscription: e7,
    getPremiumTypeFromSubscription: e8,
    getPremiumGradientColor: e9,
    getUnactivatedFractionalPremiumHours: tF,
    castPremiumSubscriptionAsSkuId: tb,
    calculateDiscountPercentageForYearlyPlan: tj,
    getDaysSincePremium: tY,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: tW,
    canUseAnimatedEmojis: tt,
    canUseEmojisEverywhere: tn,
    canUseSoundboardEverywhere: tr,
    canUseCustomCallSounds: ti,
    canUploadLargeFiles: ts,
    canUseBadges: ta,
    canUseHighVideoUploadQuality: to,
    canEditDiscriminator: tl,
    hasBoostDiscount: tu,
    canUseAnimatedAvatar: tc,
    canInstallPremiumApplications: td,
    canUseIncreasedMessageLength: t_,
    canUseIncreasedGuildCap: tf,
    canRedeemPremiumPerks: tp,
    canUsePremiumProfileCustomization: th,
    canUsePremiumAppIcons: tm,
    canUsePremiumGuildMemberProfile: tE,
    canUseClientThemes: tg,
    canStreamQuality: tA,
    canUseQuestOrbMultiplier: tI,
    hasFreeBoosts: tT,
    canUseCustomStickersEverywhere: tS,
    canUseCustomBackgrounds: ty,
    canUseCollectibles: tv,
    canUseMonthlyOrbs: tN,
    canUseShopDiscounts: tC,
    canUseMoreQuestOrbs: tR,
    formatPriceString: tO,
    StreamQuality: B,
});
