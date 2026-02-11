"use strict";
n.d(t, {
    $Q: () => $,
    $k: () => eO,
    Ay: () => tB,
    CC: () => N.CC,
    D8: () => Q,
    Dd: () => ea,
    EJ: () => e1,
    EL: () => B,
    Em: () => tC,
    FJ: () => J,
    FY: () => eY,
    GX: () => eQ,
    Ge: () => ej,
    J$: () => eN,
    JM: () => j,
    Ke: () => Z,
    LE: () => eW,
    Mn: () => et,
    Nc: () => ev,
    OU: () => el,
    Of: () => ez,
    Om: () => eJ,
    PK: () => ek,
    Pg: () => eZ,
    Q8: () => eC,
    RH: () => er,
    TW: () => N.ki,
    Tm: () => ec,
    To: () => tF,
    U8: () => q,
    UC: () => z,
    Uf: () => eD,
    YE: () => N.YE,
    Zb: () => eE,
    Zw: () => en,
    _e: () => ey,
    aE: () => eq,
    aZ: () => e6,
    bx: () => ef,
    e1: () => tD,
    ee: () => eX,
    ff: () => eB,
    iv: () => tk,
    jh: () => ew,
    ji: () => eI,
    k8: () => tG,
    kX: () => eS,
    ki: () => eM,
    m6: () => ee,
    mH: () => tv,
    mv: () => e7,
    nB: () => eo,
    nK: () => tb,
    pb: () => W,
    qn: () => e0,
    re: () => eK,
    sS: () => eL,
    tS: () => eH,
    tW: () => e$,
    xq: () => ep,
    y8: () => H,
    ys: () => eg,
    z4: () => em,
}),
    n(667532),
    n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(975807),
    u = n(366999),
    c = n(626584),
    d = n(367888),
    _ = n(493740),
    f = n(832343),
    h = n(832946),
    p = n(287809),
    g = n(615405),
    E = n(295405),
    A = n(97352),
    I = n(166403),
    T = n(739508),
    y = n(405269),
    S = n(927813),
    v = n(255438),
    C = n(723702),
    b = n(125584),
    N = n(474090),
    R = n(580630),
    O = n(652215),
    D = n(100544),
    L = n(788868),
    w = n(88001),
    x = n(818348),
    P = n(985018),
    M = n(519412);
let k = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    U = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    G = new c.A("PremiumUtils.tsx"),
    F = 2592e6;
var V = (function (e) {
    return (e.MID = "mid"), (e.HIGH = "high"), e;
})({});
function B(e) {
    return e.items.find((e) => L.JM.has(e.planId));
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = E.A.defaultPaymentSourceId ?? void 0,
        s = I.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        H(e, t, n, { paymentSourceId: a, currency: r }, i)
    );
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: s } = r;
    if (null != A.A.get(e)) {
        let r = O.lid.DEFAULT;
        n ? (r = O.lid.GIFT) : t && (r = O.lid.PREMIUM_TIER_1);
        let o = K(e, { paymentSourceId: a, purchaseType: r, currency: s });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (i &&
                    (0, T.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: r.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let o = Error("Plan not found");
    throw (i && (0, T.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...r, isGift: n } }), o);
}
function Y(e, t) {
    let n = A.A.get(e);
    if (null == n) {
        let n = Error("Plan not found");
        throw ((0, T.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
    }
    if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
    let r = n.prices[t];
    if (null == r)
        throw (
            (G.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
            Error(`No prices returned for purchase type ${t} for plan ${e}`))
        );
    return r;
}
function W(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: O.lid.DEFAULT },
        r = Y(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            G.info(`Payment sources IDs: ${JSON.stringify(Object.keys(r.paymentSourcePrices))}`),
                G.info(`prices: ${i}`);
            let a = Error("Missing prices for payment source on subscription plan");
            (0, T.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        G.info(`countryPrices: ${JSON.stringify(r.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, T.pM)(t, { tags: { countryCode: r.countryPrices.countryCode, planId: e } }), t);
    }
    return r.countryPrices.prices;
}
function K(e) {
    let {
            paymentSourceId: t,
            purchaseType: n,
            currency: r,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: O.lid.DEFAULT },
        i = W(e, { paymentSourceId: t, purchaseType: n });
    return (0 === i.length && G.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
    null != r)
        ? i.find((e) => e.currency === r.toLowerCase())
        : i[0];
}
function $(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function z(e, t, n) {
    let r,
        i,
        a = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        s = (0, d._1)(e);
    null != s && (r = L.hd[s.planId].premiumType);
    let o = (0, N.CC)(r, L.PremiumTypes.TIER_0),
        l = (0, N.CC)(r, L.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = L.pW.has(r.planId) ? l : !L.JM.has(r.planId) && o),
            (e = void 0 === n ? j(r.planId, i, !1, t) : H(r.planId, i, !1, { paymentSourceId: n, currency: t })),
            (a.amount += e.amount * r.quantity);
    }
    return $(a);
}
function q(e, t, n, r) {
    let a;
    return (
        null === t && (i()(null !== e, "Subscription can't be null"), (t = [])),
        z((a = null !== e ? eq(e, t) : eX(t)), n, r)
    );
}
function X(e) {
    let t = L.hd[e];
    if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
    let n = Error("Unsupported plan");
    throw ((0, T.pM)(n, { tags: { planId: e } }), n);
}
function Z(e) {
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
function Q(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : L.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case L.WT.MONTH:
                let s = P.intl.formatToPlainString(a === L.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.FPybU7),
                });
                return i ? s : P.intl.string(P.t.Mh9bTt);
            case L.WT.YEAR:
                let o = P.intl.formatToPlainString(a === L.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.tfqrhj),
                });
                return i ? o : P.intl.string(P.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case L.WT.MONTH:
            if (1 !== r) return P.intl.formatToPlainString(P.t["0UlZnH"], { intervalCount: r });
            return P.intl.string(P.t.DKzs96);
        case L.WT.YEAR:
            return P.intl.string(P.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function J(e) {
    switch (e) {
        case L.WT.MONTH:
            return P.intl.string(P.t.FPybU7);
        case L.WT.YEAR:
            return P.intl.string(P.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function ee(e) {
    let t = L.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, T.pM)(n, { tags: { planId: e } }), n);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case L.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? P.intl.format(P.t.TZXHNj, { duration: r })
                : n
                  ? P.intl.string(P.t["81iAgs"])
                  : P.intl.string(P.t["0efVPy"]);
        case L.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? P.intl.format(P.t.eqRhC7, { duration: r })
                : n
                  ? P.intl.string(P.t.UvzqY1)
                  : P.intl.string(P.t.eoVuBn);
        case L.gD.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t["g/dH5g"]) : P.intl.string(P.t["7O6qSq"]);
        case L.gD.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.pdZJaq) : P.intl.string(P.t.Md5xbi);
        case L.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? P.intl.format(P.t.aI6QXz, { duration: r })
                : n
                  ? P.intl.string(P.t.SmVbHc)
                  : P.intl.string(P.t.FKYNC6);
        case L.gD.PREMIUM_GROUP_MONTH:
            return n ? P.intl.string(P.t.SmVbHc) : P.intl.string(P.t.FKYNC6);
        case L.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? P.intl.format(P.t["1wBcPi"], { duration: r })
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
    let i = Error("Unsupported plan");
    throw ((0, T.pM)(i, { tags: { planId: e } }), i);
}
function en(e) {
    switch (e) {
        case L.pe.TIER_0:
            return P.intl.string(P.t["t9uG/o"]);
        case L.pe.TIER_1:
            return P.intl.string(P.t.FSOz78);
        case L.pe.TIER_2:
            return P.intl.string(P.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, T.pM)(t, { tags: { skuId: e } }), t);
}
function er(e) {
    let t = L.hd[e]?.premiumType,
        n = null != t ? L.Mr[t] : null;
    if (null != n) return P.intl.string(n);
    let r = Error("Unsupported plan");
    throw ((0, T.pM)(r, { tags: { planId: e } }), r);
}
function ei(e, t) {
    if (e === L.WT.MONTH) return t;
    if (e === L.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function ea(e) {
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
function es(e) {
    let {
            subscription: t,
            planId: n,
            price: r,
            includePremiumGuilds: i,
            hasDiscountApplied: a,
            activeDiscountInfo: o,
            renewalInvoicePreview: u,
            hasFractionalPremiumWithSub: c,
        } = e,
        d = L.hd[n],
        _ = tS(j(d.id), d.interval),
        f =
            eM(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !p.default.getCurrentUser()?.hasFreePremium()),
        h = null != r && null == t.paymentGateway,
        g = t.status === O.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === O.lT7.OPEN,
        E = f ? O.Dmq.CANCELED : g ? O.Dmq.UNPAID : t.status,
        A = u?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        I = L.M4 + (i ? ef(t.additionalPlans) : 0),
        T = h
            ? A
                ? P.intl.format(P.t["cd+hqB"], { price: r })
                : P.intl.format(P.t.NUkcpF, { price: r })
            : P.intl.string(P.t.zYx3Y6),
        S = h
            ? A
                ? P.intl.format(P.t.VsKcFB, { price: r })
                : P.intl.format(P.t.hJ5xEX, { price: r })
            : P.intl.string(P.t["8rSipI"]),
        v = h
            ? A
                ? P.intl.format(P.t["jRy6/J"], { price: r, num: I })
                : P.intl.format(P.t.tTNE8M, { price: r, num: I })
            : P.intl.format(P.t["U+z/HJ"], { num: I });
    switch (n) {
        case L.gD.PREMIUM_MONTH_TIER_0:
        case L.gD.PREMIUM_YEAR_TIER_0:
            switch (E) {
                case O.Dmq.CANCELED:
                    return h
                        ? A
                            ? P.intl.format(P.t["USi/nc"], { price: r })
                            : P.intl.format(P.t["FS//l2"], { price: r })
                        : P.intl.string(P.t.JshLzq);
                case O.Dmq.ACCOUNT_HOLD:
                    return h
                        ? A
                            ? P.intl.format(P.t["5mv+2i"], { price: r })
                            : P.intl.format(P.t.nkAEfZ, { price: r })
                        : P.intl.format(P.t.SsLIXS, {});
                case O.Dmq.UNPAID:
                    return P.intl.format(P.t.cmkbFB, {});
                case O.Dmq.PAUSE_PENDING:
                    let C = null != t.pauseEndsAt ? s()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != C
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: C })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case O.Dmq.PAUSED:
                    if (c) return T;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case O.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, y.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return T;
            }
        case L.gD.PREMIUM_MONTH_TIER_1:
        case L.gD.PREMIUM_YEAR_TIER_1:
            switch (E) {
                case O.Dmq.CANCELED:
                    return h
                        ? A
                            ? P.intl.format(P.t.cXy8Bp, { price: r })
                            : P.intl.format(P.t["C/XsHt"], { price: r })
                        : P.intl.string(P.t.K6tYFa);
                case O.Dmq.ACCOUNT_HOLD:
                    return h
                        ? A
                            ? P.intl.format(P.t.HBkIBi, { price: r })
                            : P.intl.format(P.t.ZsO1Sx, { price: r })
                        : P.intl.format(P.t["0+/WH7"], {});
                case O.Dmq.UNPAID:
                    return P.intl.format(P.t.McIzwj, {});
                case O.Dmq.PAUSE_PENDING:
                    let b = null != t.pauseEndsAt ? s()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != b
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: b })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case O.Dmq.PAUSED:
                    if (c) return S;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case O.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, y.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return S;
            }
        case L.gD.PREMIUM_MONTH_TIER_2:
        case L.gD.PREMIUM_YEAR_TIER_2:
        case L.gD.PREMIUM_3_MONTH_TIER_2:
        case L.gD.PREMIUM_6_MONTH_TIER_2:
        case L.gD.PREMIUM_GROUP_MONTH:
            switch (E) {
                case O.Dmq.CANCELED:
                    return h
                        ? A
                            ? P.intl.format(P.t.xoFgRh, { price: r, num: I })
                            : P.intl.format(P.t.nXdbKo, { price: r, num: I })
                        : P.intl.format(P.t.EcSdRH, { num: I });
                case O.Dmq.ACCOUNT_HOLD:
                    return h
                        ? A
                            ? P.intl.format(P.t["5C/0QG"], { price: r, num: I })
                            : P.intl.format(P.t.xfYkhu, { price: r, num: I })
                        : P.intl.format(P.t.ivjxcn, { num: I });
                case O.Dmq.UNPAID:
                    return P.intl.format(P.t["0HopYf"], { num: I });
                case O.Dmq.PAUSE_PENDING:
                    let N = null != t.pauseEndsAt ? s()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != N
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: N })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case O.Dmq.PAUSED:
                    if (c) return v;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case O.Dmq.BILLING_RETRY:
                    return P.intl.format(P.t["IlJ/HV"], {
                        endDate: s()(t.currentPeriodStart).add(L.bx, "days").toDate(),
                    });
                case O.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, y.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === L.gD.PREMIUM_YEAR_TIER_2
                            ? P.intl.format(P.t["+qqh6g"], { percent: o?.percentage ?? L.Cq, regularPrice: _ })
                            : A
                              ? P.intl.formatToPlainString(P.t["3ZiutU"], {
                                    percent: o?.percentage ?? L._$,
                                    regularPrice: _,
                                    numMonths: o?.duration ?? L.OJ,
                                })
                              : P.intl.formatToPlainString(P.t["G6+XOT"], {
                                    percent: o?.percentage ?? L._$,
                                    regularPrice: _,
                                    numMonths: o?.duration ?? L.OJ,
                                })
                        : v;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function eo(e) {
    let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: r,
            includePremiumGuilds: a = !1,
            hasDiscountApplied: s = !1,
            activeDiscountInfo: o,
            hasFractionalPremiumWithSub: l = !1,
        } = e,
        u = A.A.get(r);
    return (
        i()(null != u, "Missing plan"),
        es({
            subscription: n,
            planId: u.id,
            price: eU(t, n, u),
            includePremiumGuilds: a,
            hasDiscountApplied: s,
            activeDiscountInfo: o,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l,
        })
    );
}
function el(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, h.m1)(t) ? null : et(t),
        i = n?.find((e) => {
            let { planId: t } = e;
            return L.pW.has(t);
        }),
        a = i?.planId === L.gD.PREMIUM_MONTH_GUILD || i?.planId === L.gD.PREMIUM_YEAR_GUILD ? P.t.Pi5yMJ : null,
        s = null != a ? P.intl.formatToPlainString(a, { num: i?.quantity }) : void 0;
    if (null != r && null != s)
        return P.intl.formatToPlainString(P.t.FN5T9r, { premiumDescription: r, premiumGuildDescription: s });
    if (null != r) return r;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function eu(e) {
    return e === L.pe.TIER_0 || e === L.pe.TIER_1 || e === L.pe.TIER_2;
}
function ec(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: a } = e;
    if (null == t || !n) return [];
    let s = void 0 !== a && t === L.hd[a].skuId ? a : void 0,
        o = [];
    switch (t) {
        case L.pe.TIER_0:
            o = [L.gD.PREMIUM_YEAR_TIER_0, L.gD.PREMIUM_MONTH_TIER_0];
            break;
        case L.pe.TIER_1:
            o = [L.gD.PREMIUM_MONTH_TIER_1];
            break;
        case L.pe.TIER_2:
            let l = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (L.Er.has(e)) {
                    let t = L.hd[e];
                    l = [...L.Er].filter((e) => {
                        let n = L.hd[e];
                        return (
                            n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === L.pe.TIER_2
                        );
                    });
                } else l = [];
            }
            o = [L.gD.PREMIUM_YEAR_TIER_2, ...l, L.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== s) {
        let e = o.indexOf(s);
        o.splice(e, 1), o.unshift(s);
    }
    return o;
}
function ed(e) {
    let t = L.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, T.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e_(e) {
    switch (e) {
        case L.PremiumTypes.TIER_0:
            return L.pe.TIER_0;
        case L.PremiumTypes.TIER_1:
            return L.pe.TIER_1;
        case L.PremiumTypes.TIER_2:
            return L.pe.TIER_2;
    }
}
function ef(e) {
    let t = A.A.getPlanIdsForSkus([tv(L.pe.GUILD)]);
    i()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eh = new Set([
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
function ep(e) {
    return eh.has(e);
}
function em(e) {
    return L.pW.has(e);
}
function eg(e) {
    return ep(e) || em(e);
}
function eE(e) {
    return null != e && e === L.gD.PREMIUM_GROUP_MONTH;
}
function eA(e) {
    return ee(e) === L.PremiumTypes.TIER_2 ? L.M4 : 0;
}
function eI(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = s()(e.metadata.apple_grace_period_expires_date);
        return { days: s().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = s()(e.metadata.google_grace_period_expires_date),
            n = s()(e.metadata.google_original_expires_date);
        return { days: s().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? L.U1 : L.L9;
        return { days: t, expiresDate: s()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: s()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: s()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? L.a5 : L.EV;
        return { days: t, expiresDate: s()(e.currentPeriodStart).add(t, "days") };
    }
}
function eT(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i =
            arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: L.xc.NONE,
                      startsAt: s()(0),
                      endsAt: s()(0),
                      currentEntitlementId: "",
                      unactivatedUnits: [],
                  },
        a = null !== n && e.status === O.Dmq.PAST_DUE ? n : t,
        o = r
            ? (0, R.$g)(
                  a.invoiceItems
                      .filter((e) => L.VY.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  a.currency,
              )
            : (0, R.$g)(a.total, a.currency);
    if (null != e.trialId && L.BT.includes(e.trialId) && null == e.paymentSourceId)
        return P.intl.format(P.t["7ZS2m1"], { trialEnd: e.currentPeriodEnd });
    if (e.status === O.Dmq.CANCELED) return P.intl.format(P.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
    if (e.status === O.Dmq.PAUSE_PENDING)
        return P.intl.format(P.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
    if (e.status === O.Dmq.PAUSED)
        return i.fractionalState !== L.xc.NONE
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
    if (e.status === O.Dmq.PAST_DUE) {
        let t = eI(e).expiresDate;
        return (e.isPurchasedViaGoogle &&
            e.metadata?.google_grace_period_expires_date != null &&
            (t = s()(e.metadata.google_grace_period_expires_date)),
        e.isPurchasedViaApple &&
            e.metadata?.apple_grace_period_expires_date != null &&
            (t = s()(e.metadata.apple_grace_period_expires_date)),
        e.isPurchasedExternally)
            ? P.intl.format(P.t.U2hb3W, {
                  endDate: t.toDate(),
                  paymentGatewayName: x.qm[e.paymentGateway],
                  paymentSourceLink: e$(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
              })
            : P.intl.format(P.t.qEIzyi, { endDate: t.toDate(), price: o });
    }
    {
        if (e.status === O.Dmq.BILLING_RETRY)
            return P.intl.format(P.t.EMTLOT, {
                endDate: s()(e.currentPeriodStart).add(L.bx, "days").toDate(),
                price: o,
            });
        if (e.status === O.Dmq.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, C.isAndroid)()
                ? P.intl.format(P.t["dtcxw+"], {
                      endDate: s()(e.currentPeriodStart).add(L.ph, "days").toDate(),
                      paymentGatewayName: x.qm[e.paymentGateway],
                      paymentSourceLink: e$(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : P.intl.format(P.t.EMTLOT, {
                      endDate: s()(e.currentPeriodStart).add(L.ph, "days").toDate(),
                      price: o,
                  });
        if (eb(e)) return P.intl.format(P.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === O.Dmq.UNPAID) return P.intl.format(P.t.CzTKom, { maxProcessingTimeInDays: L.G4 });
        if (e.isPurchasedExternally)
            return P.intl.format(P.t.ZlWXgR, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: x.qm[e.paymentGateway],
                subscriptionManagementLink: e$(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            });
        let n = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || e.hasAnyPremiumGroup || (n = ey(n, i.unactivatedUnits)),
            r
                ? P.intl.format(P.t.Vl3cED, { planName: P.intl.string(P.t.Ipxkog), renewalDate: n, price: o })
                : P.intl.format(P.t.Q18lRK, { renewalDate: n, price: o })
        );
    }
}
function ey(e, t, n, r) {
    let i = s()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tM(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = s()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}
function eS(e) {
    let t = tM(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === L.xc.NONE)) return "";
    let n = { days: P.t.fYmirx, hours: P.t["C3RO+g"], minutes: P.t.r77oHc },
        r = (0, u.Vb)((0, y.Tf)(0, t * S.A.Millis.HOUR));
    return (0, y.uN)(r, n);
}
function ev(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === O.Dmq.PAST_DUE;
}
function eC(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? P.intl.string(P.t["0rzJ4J"]) : P.intl.string(P.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = P.intl.string(P.t.a9Mdb3)),
        t
    );
}
function eb(e) {
    return null != e.paymentSourceId && eN(e.paymentSourceId);
}
function eN(e) {
    if (null == e) return !1;
    let t = E.A.getPaymentSource(e);
    return null != t && x.AD.has(t.type);
}
function eR(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = ef(n);
    return 0 === (null != t ? ef(t.additionalPlans) : null) && 0 !== i ? O.Dmq.CANCELED : r;
}
function eO(e) {
    return e.isPurchasedExternally ? e.status === O.Dmq.CANCELED : eR(e) === O.Dmq.CANCELED;
}
function eD(e) {
    let { subscription: t, user: n, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: o, additionalPlans: l } = t,
        u = A.A.get(o);
    i()(null != u, "Missing plan");
    let c = ef(l),
        d = eG(t.planId, t.paymentSourceId, t.currency, n).amount * c;
    if (null != a) {
        let e = a.invoiceItems.find((e) => L.pW.has(e.subscriptionPlanId));
        null != e && (d = e.amount);
    }
    r = r ?? (0, R.$g)(d, t.currency);
    let _ = a?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (eO(t))
        return t.isPurchasedViaGoogle
            ? P.intl.format(P.t["3/WTrI"], { quantity: c })
            : _
              ? P.intl.format(P.t["0ozBSB"], { quantity: c, rate: (0, R.CE)(r, u.interval, u.intervalCount) })
              : P.intl.format(P.t["yjsv/s"], { quantity: c, rate: (0, R.CE)(r, u.interval, u.intervalCount) });
    switch (t.status) {
        case O.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? P.intl.format(P.t.Nlf3nc, { quantity: c, boostQuantity: c })
                : _
                  ? P.intl.format(P.t.oiRy7v, {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, R.CE)(r, u.interval, u.intervalCount),
                    })
                  : P.intl.format(P.t["0QxOAi"], {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, R.CE)(r, u.interval, u.intervalCount),
                    });
        case O.Dmq.PAUSE_PENDING:
        case O.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return P.intl.string(P.t.CduWAm);
            return P.intl.format(P.t["5iud9s"], { quantity: c });
        default:
            return t.isPurchasedViaGoogle
                ? P.intl.format(P.t["5iud9s"], { quantity: c })
                : _
                  ? P.intl.format(P.t.eDwrLA, { quantity: c, rate: (0, R.CE)(r, u.interval, u.intervalCount) })
                  : P.intl.format(P.t.ijSDcI, { quantity: c, rate: (0, R.CE)(r, u.interval, u.intervalCount) });
    }
}
function eL(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? H(e.id, !1, r, t) : j(e.id, !1, r),
        a = (0, R.$g)(i.amount, i.currency);
    return e.currency !== x.Yr.USD && !0 === n && (a = a.concat("*")), a;
}
function ew(e, t, n) {
    let r = eL(e, t, n);
    return (0, R.CE)(r, e.interval, e.intervalCount);
}
function ex(e, t) {
    let { planId: n } = e;
    if (e.status === O.Dmq.CANCELED || e.status === O.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ep(t);
    });
    return null == r ||
        (0, h.m1)(r.subscriptionPlanId) ||
        (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
        ? e.planId
        : r.subscriptionPlanId;
}
function eP(e, t) {
    let { status: n } = e;
    if (e.status === O.Dmq.CANCELED || e.status === O.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ep(t);
    });
    return (null == r || (0, h.m1)(r.subscriptionPlanId)) && (n = O.Dmq.CANCELED), n;
}
function eM(e) {
    let { status: t, renewalMutations: n } = e;
    return t === O.Dmq.CANCELED || (null != n && (0, h.m1)(n.planId) && !e.isPurchasedExternally);
}
function ek(e) {
    return e === O.Dmq.PAST_DUE || e === O.Dmq.ACCOUNT_HOLD || e === O.Dmq.BILLING_RETRY;
}
function eU(e, t, n) {
    let r = e.findInvoiceItemByPlanId(n.id),
        i = null == r ? H(n.id, !1, !1, { paymentSourceId: t.paymentSourceId, currency: t.currency }).amount : r.amount;
    return (0, R.CE)((0, R.$g)(i, e.currency), n.interval, n.intervalCount);
}
function eG(e, t, n, r) {
    let i = null != t ? { paymentSourceId: t, currency: n } : { country: g.A.ipCountryCodeWithFallback, currency: n },
        a = A.A.get(e);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, T.pM)(t, { tags: { planId: e } }), t);
    }
    let s = A.A.getForSkuAndInterval(tv(L.pe.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, T.pM)(t, { tags: { planId: e } }), t);
    }
    return H(s.id, (0, N.ki)(r), !1, i);
}
function eF(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eV(e, t) {
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
function eB(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
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
    switch (r) {
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
            return P.intl.formatToPlainString(M.default.LwdrNi, { premiumGroupProductName: (0, w.DP)() });
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
    let i = Error("User is purchasing an unsupported plan");
    throw ((0, T.pM)(i, { tags: { planId: r } }), i);
}
function ej(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = A.A.get(t);
    return i()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eH(e) {
    let { intervalType: t = L.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case L.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? P.intl.formatToPlainString(P.t.fRNBRX, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EIpHEj, { weeks: n / 7 });
            return r
                ? P.intl.formatToPlainString(P.t["6Cdzoy"], { days: n })
                : P.intl.formatToPlainString(P.t["kbBj/h"], { days: n });
        case L.WT.MONTH:
            return r
                ? P.intl.formatToPlainString(P.t.x5MgxS, { months: n })
                : P.intl.formatToPlainString(P.t["4SEnCZ"], { months: n });
        case L.WT.YEAR:
            return r
                ? P.intl.formatToPlainString(P.t["h+63yl"], { years: n })
                : P.intl.formatToPlainString(P.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eY(e) {
    let { intervalType: t = L.WT.MONTH, intervalCount: n = 1 } = e,
        r = x.Yr.USD;
    try {
        r = j(L.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    let i = (0, R.$g)(0, r, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case L.WT.DAY:
            if (n >= 7 && n % 7 == 0) return P.intl.formatToPlainString(P.t.C6i5Jt, { weeks: n / 7, price: i });
            return P.intl.formatToPlainString(P.t.cR9ifw, { days: n, price: i });
        case L.WT.MONTH:
            return P.intl.formatToPlainString(P.t["8FZfNo"], { months: n, price: i });
        case L.WT.YEAR:
            return P.intl.formatToPlainString(P.t.xzAcST, { years: n, price: i });
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
    let { intervalType: t = L.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case L.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? P.intl.formatToPlainString(P.t.iVZYyl, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EmoBD2, { weeks: n / 7 });
            return r
                ? P.intl.formatToPlainString(P.t.jzH70Z, { days: n })
                : P.intl.formatToPlainString(P.t["k2UNz+"], { days: n });
        case L.WT.MONTH:
            return r
                ? P.intl.formatToPlainString(P.t.erUSmA, { months: n })
                : P.intl.formatToPlainString(P.t.kridzK, { months: n });
        case L.WT.YEAR:
            return r
                ? P.intl.formatToPlainString(P.t.IfYQVC, { years: n })
                : P.intl.formatToPlainString(P.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function e$(e, t) {
    switch (e) {
        case O.kM_.APPLE_PARTNER:
        case O.kM_.APPLE_ADVANCED_COMMERCE:
        case O.kM_.APPLE:
            return k[t];
        case O.kM_.GOOGLE:
            return U[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function ez(e, t) {
    return (0, N.ki)(e) || ek(t?.status);
}
function eq(e, t) {
    let n = [],
        r = (e.renewalMutations?.items ?? e.items).find((e) => L.JM.has(e.planId));
    return (
        null != r && n.push(r),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function eX(e) {
    return e.filter((e) => !L.JM.has(e.planId));
}
function eZ(e, t, n, r) {
    i()(r.has(t), "Expected planId in group");
    let a = !1,
        s = (e.renewalMutations?.items ?? e.items).map((e) =>
            r.has(e.planId) ? ((a = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!a) {
        let r = { planId: t, quantity: n },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), s.push(r);
    }
    return s.filter((e) => 0 !== e.quantity);
}
function eQ(e, t) {
    return eZ(e, t, 1, L.JM);
}
function eJ(e, t, n) {
    return eZ(e, n, t, L.pW);
}
function e0(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => L.JM.has(e.planId));
    if (null != t) {
        let n = A.A.get(t.planId);
        i()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let r = A.A.get(e.planId);
                if ((i()(null != r, "Missing plan"), n.interval === r.interval && n.intervalCount === r.intervalCount))
                    return e;
                let a = A.A.getForSkuAndInterval(r.skuId, n.interval, n.intervalCount);
                return i()(null != a, "Missing planForInterval"), { ...e, planId: a.id };
            }));
    }
    return e;
}
function e1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = L.f5[e].fileSize;
    return (0, v.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function e2(e) {
    return null == e ? null : e.items.find((e) => L.pW.has(e.planId));
}
function e3(e) {
    return null != e && null == B(e) && null != e2(e);
}
function e6(e) {
    let t = null != e ? B(e) : null;
    return null != t ? ed(t.planId) : null;
}
function e4(e) {
    if (null != e) {
        let t = B(e);
        if (null != t) return ee(t.planId);
    }
}
function e5(e) {
    switch (e) {
        case L.PremiumTypes.TIER_0:
            return D.gi.PREMIUM_TIER_0;
        case L.PremiumTypes.TIER_1:
            return D.gi.PREMIUM_TIER_1;
        case L.PremiumTypes.TIER_2:
            return D.gi.PREMIUM_TIER_2;
    }
}
let e7 = (e) => null != e && Date.now() - e.createdAt.getTime() < F;
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
function ta(e) {
    return (0, _.RM)(_.nh, e);
}
function ts(e) {
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
function th(e) {
    return (0, _.RM)(_.T7, e);
}
function tp(e) {
    return (0, _.RM)(_.lx, e);
}
function tm(e) {
    return (0, _.RM)(_.zL, e);
}
function tg(e, t) {
    return "high" === e ? (0, _.RM)(_.sj, t) : "mid" === e && (0, _.RM)(_.II, t);
}
function tE(e) {
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
function ty(e) {
    return (0, _.RM)(_.z0, e);
}
function tS(e, t) {
    let n = (0, R.$g)(e.amount, e.currency),
        r = J(t);
    return `${n}/${r}`;
}
function tv(e) {
    return e;
}
function tC(e) {
    return "isNitroLocked" in e;
}
function tb() {
    let e = (0, o.bG)([p.default], () => p.default.getCurrentUser());
    return (0, N.YE)(e, L.PremiumTypes.TIER_2);
}
function tN(e) {
    return null != e && L.n0.includes(e) ? 1 : 2;
}
function tR(e) {
    return e === L.Tt ? L.h7 : e === L.yo ? L.CA : L.CQ;
}
function tO() {
    return L.CQ;
}
function tD(e) {
    let t = (0, f.N)("getOfferNoticeThreshold");
    return 0 !== t ? t : tL(e) ? tR(e.trial_id) : tw(e) ? tO() : L.CQ;
}
function tL(e) {
    return null != e && "trial_id" in e;
}
function tw(e) {
    return null != e && "discount_id" in e;
}
function tx(e) {
    if (e === L.WT.YEAR) return P.intl.string(P.t.tfqrhj);
    if (e === L.WT.MONTH) return P.intl.string(P.t.FPybU7);
    throw Error(`Invalid interval type: ${e}`);
}
function tP(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tM(e) {
    return tk(e.map((e) => e.skuId));
}
function tk(e) {
    return e.reduce((e, t) => {
        let [n, r] = L.NL[t],
            i = 1;
        switch (n) {
            case L.T.HOUR:
                i = 1;
                break;
            case L.T.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
let tU = (e) => {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: r = {} } = e,
        i = L.En[t.skuId];
    return null == i ? null : H(i, !1, n, r);
};
function tG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== L.WT.YEAR) return;
    let r = tU({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == r) return;
    let i = H(e.id, !1, t, n);
    if (0 !== r.amount) return Math.floor(100 * (1 - i.amount / (12 * r.amount)));
}
function tF(e) {
    return null == e ? 0 : Math.max((0, y.m_)(new Date(), new Date(e)), 0);
}
function tV(e) {
    return Math.max(1, Math.ceil((0, y.c_)(new Date(e.currentPeriodEnd), new Date())));
}
let tB = Object.freeze({
    isNewUser: e7,
    isPremiumAtLeast: N.CC,
    isPremium: N.ki,
    isPremiumExactly: N.YE,
    isPremiumEligible: tP,
    getPrice: H,
    getDefaultPrice: j,
    getInterval: X,
    getIntervalString: Q,
    getIntervalStringAsNoun: J,
    getPremiumType: ee,
    getTierDisplayNameByPlanId: er,
    getDisplayName: et,
    getPremiumPlanOptions: ec,
    getReverseTrialWeeks: tN,
    formatInterval: tx,
    getPlanDescription: es,
    isPremiumSku: eu,
    getIntervalMonths: ei,
    getUserMaxFileSize: b.f,
    getSkuIdForPlan: ed,
    getSkuIdForPremiumType: e_,
    getNumIncludedPremiumGuildSubscriptionSlots: eA,
    getBillingInformationString: eT,
    extendDateWithUnconsumedFractionalPremium: ey,
    getUnactivatedFractionalPremiumDurationString: eS,
    isSwitchingPlansDisabled: ev,
    getSwitchingPlansDisabledMessage: eC,
    isNoneSubscription: h.m1,
    getPlanIdFromInvoice: ex,
    getStatusFromInvoice: eP,
    isBaseSubscriptionCanceled: eM,
    getPremiumGuildIntervalPrice: eG,
    hasAccountCredit: eF,
    hasUnconsumedGiftForSubscriptionPlan: eV,
    getBillingReviewSubheader: eB,
    getIntervalForInvoice: ej,
    getPremiumPlanItem: B,
    getGuildBoostPlanItem: e2,
    isBoostOnlySubscription: e3,
    getPremiumSkuIdForSubscription: e6,
    getPremiumTypeFromSubscription: e4,
    getPremiumGradientColor: e5,
    getUnactivatedFractionalPremiumHours: tM,
    castPremiumSubscriptionAsSkuId: tv,
    calculateDiscountPercentageForYearlyPlan: tG,
    getDaysSincePremium: tF,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: tV,
    canUseAnimatedEmojis: e8,
    canUseEmojisEverywhere: e9,
    canUseSoundboardEverywhere: te,
    canUseCustomCallSounds: tt,
    canUploadLargeFiles: tn,
    canUseBadges: tr,
    canUseHighVideoUploadQuality: ti,
    canEditDiscriminator: ta,
    hasBoostDiscount: ts,
    canUseAnimatedAvatar: to,
    canUseFancyVoiceChannelReactions: tl,
    canInstallPremiumApplications: tu,
    canUseIncreasedMessageLength: tc,
    canUseIncreasedGuildCap: td,
    canRedeemPremiumPerks: t_,
    canUsePremiumProfileCustomization: tf,
    canUsePremiumAppIcons: th,
    canUsePremiumGuildMemberProfile: tp,
    canUseClientThemes: tm,
    canStreamQuality: tg,
    hasFreeBoosts: tE,
    canUseCustomStickersEverywhere: tA,
    canUseCustomBackgrounds: tI,
    canUseCollectibles: tT,
    canUsePremiumVoiceFilters: ty,
    formatPriceString: tS,
    StreamQuality: V,
});
