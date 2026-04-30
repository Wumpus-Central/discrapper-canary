n.d(t, {
    $Q: () => W,
    $k: () => eN,
    Ay: () => e3,
    CC: () => D.CC,
    D8: () => q,
    Dd: () => et,
    EJ: () => ek,
    EL: () => F,
    Em: () => eq,
    FJ: () => Q,
    FY: () => eM,
    GX: () => eV,
    Ge: () => eL,
    J$: () => eS,
    JM: () => k,
    Ke: () => Z,
    LE: () => eP,
    L_: () => e0,
    Mn: () => X,
    Nc: () => eT,
    OU: () => ea,
    Of: () => ey,
    Om: () => eB,
    PK: () => eC,
    Pg: () => ex,
    Q8: () => eh,
    RH: () => ee,
    Rr: () => eD,
    TW: () => D.ki,
    Tm: () => er,
    To: () => e2,
    U8: () => $,
    UC: () => K,
    Uf: () => ef,
    YE: () => D.YE,
    Zb: () => eE,
    Zw: () => J,
    _e: () => eA,
    aE: () => eG,
    aZ: () => ej,
    bx: () => el,
    e1: () => ez,
    ee: () => ew,
    ff: () => eg,
    iv: () => eJ,
    jh: () => em,
    ji: () => eu,
    kX: () => eI,
    ki: () => eO,
    l6: () => H,
    m6: () => z,
    mH: () => eZ,
    mv: () => eY,
    nB: () => ei,
    nK: () => eQ,
    pb: () => Y,
    qn: () => eF,
    re: () => eU,
    sS: () => ep,
    tS: () => eb,
    tW: () => ev,
    xq: () => ed,
    y8: () => j,
    ys: () => e_,
    z4: () => ec,
}),
    n(667532),
    n(321073);
var i,
    a = n(284009),
    r = n.n(a),
    s = n(989349),
    l = n.n(s),
    o = n(17928),
    d = n(441574),
    c = n(975807),
    _ = n(366999),
    E = n(626584),
    u = n(367888),
    A = n(493740),
    I = n(349871),
    T = n(832946),
    h = n(287809),
    S = n(615405),
    N = n(295405),
    f = n(97352),
    p = n(166403),
    m = n(739508),
    O = n(58703),
    C = n(927813),
    R = n(255438),
    g = n(723702),
    L = n(125584),
    D = n(474090),
    b = n(580630),
    M = n(652215),
    P = n(788868),
    U = n(88001),
    v = n(818348),
    y = n(985018),
    G = n(466919);
let w = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    x = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    V = new E.A("PremiumUtils.tsx");
var B = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function F(e) {
    return e.items.find((e) => P.JM.has(e.planId));
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        r = N.A.defaultPaymentSourceId ?? void 0,
        s = p.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (r = s.paymentSourceId),
        j(e, t, n, { paymentSourceId: r, currency: i }, a)
    );
}
function H(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: r, currency: s, contextPlanPrices: l } = i;
    if (null != l) {
        let t = l[e];
        if (null != t)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != f.A.get(e)) {
        let i = M.lid.DEFAULT;
        n ? (i = M.lid.GIFT) : t && (i = M.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: M.lid.DEFAULT },
                a = Y(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === a.length &&
                    V.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let r = a.find((e) => e.currency === i.toLowerCase());
                return null != r
                    ? r
                    : null != t
                      ? Y(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return a[0];
        })(e, { paymentSourceId: r, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                (a &&
                    (0, m.pM)(t, {
                        extra: { paymentSourceId: r },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t)
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (a && (0, m.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function Y(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: M.lid.DEFAULT },
        i = (function (e, t) {
            let n = f.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, m.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (V.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let a = i.paymentSourcePrices[t];
        if (null == a) {
            V.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                V.info(`prices: ${a}`);
            let r = Error("Missing prices for payment source on subscription plan");
            (0, m.pM)(r, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== a.length) return a;
    }
    if (null == i.countryPrices.prices) {
        V.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, m.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function W(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function K(e, t, n) {
    let i,
        a,
        r = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        s = (0, u._1)(e);
    null != s && (i = P.hd[s.planId].premiumType);
    let l = (0, D.CC)(i, P.PremiumTypes.TIER_0),
        o = (0, D.CC)(i, P.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (a = P.pW.has(i.planId) ? o : !P.JM.has(i.planId) && l),
            (e = void 0 === n ? k(i.planId, a, !1, t) : j(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (r.amount += e.amount * i.quantity);
    }
    return W(r);
}
function $(e, t, n, i) {
    return (
        null === t && (r()(null !== e, "Subscription can't be null"), (t = [])), K(null !== e ? eG(e, t) : ew(t), n, i)
    );
}
function Z(e) {
    switch (e) {
        case P.Ff.MONTH:
            return y.intl.string(y.t.FPybU7);
        case P.Ff.YEAR:
            return y.intl.string(y.t.tfqrhj);
        case P.Ff.DAY:
        case P.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function q(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : P.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case P.WT.MONTH:
                let s = y.intl.formatToPlainString(r === P.PremiumTypes.TIER_0 ? y.t.NPKsLz : y.t.poEovT, {
                    timeInterval: y.intl.string(y.t.FPybU7),
                });
                return a ? s : y.intl.string(y.t.Mh9bTt);
            case P.WT.YEAR:
                let l = y.intl.formatToPlainString(r === P.PremiumTypes.TIER_0 ? y.t.NPKsLz : y.t.poEovT, {
                    timeInterval: y.intl.string(y.t.tfqrhj),
                });
                return a ? l : y.intl.string(y.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case P.WT.MONTH:
            if (1 !== i) return y.intl.formatToPlainString(y.t["0UlZnH"], { intervalCount: i });
            return y.intl.string(y.t.DKzs96);
        case P.WT.YEAR:
            return y.intl.string(y.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function Q(e) {
    switch (e) {
        case P.WT.MONTH:
            return y.intl.string(y.t.FPybU7);
        case P.WT.YEAR:
            return y.intl.string(y.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function z(e) {
    let t = P.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, m.pM)(n, { tags: { planId: e } }), n);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case P.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? y.intl.format(y.t.TZXHNj, { duration: i })
                : n
                  ? y.intl.string(y.t["81iAgs"])
                  : y.intl.string(y.t["0efVPy"]);
        case P.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? y.intl.format(y.t.eqRhC7, { duration: i })
                : n
                  ? y.intl.string(y.t.UvzqY1)
                  : y.intl.string(y.t.eoVuBn);
        case P.gD.PREMIUM_MONTH_TIER_1:
            return n ? y.intl.string(y.t["g/dH5g"]) : y.intl.string(y.t["7O6qSq"]);
        case P.gD.PREMIUM_YEAR_TIER_1:
            return n ? y.intl.string(y.t.pdZJaq) : y.intl.string(y.t.Md5xbi);
        case P.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? y.intl.format(y.t.aI6QXz, { duration: i })
                : n
                  ? y.intl.string(y.t.SmVbHc)
                  : y.intl.string(y.t.FKYNC6);
        case P.gD.PREMIUM_GROUP_MONTH:
            return n ? y.intl.string(y.t.SmVbHc) : y.intl.string(y.t.FKYNC6);
        case P.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? y.intl.format(y.t["1wBcPi"], { duration: i })
                : n
                  ? y.intl.string(y.t.JIq4O1)
                  : y.intl.string(y.t["cfu/5d"]);
        case P.gD.PREMIUM_3_MONTH_TIER_2:
            return y.intl.string(y.t.wCbINr);
        case P.gD.PREMIUM_6_MONTH_TIER_2:
            return y.intl.string(y.t["e3/ArU"]);
        case P.gD.PREMIUM_MONTH_GUILD:
            return n ? y.intl.string(y.t["6ZR3By"]) : y.intl.string(y.t["h80cx/"]);
        case P.gD.PREMIUM_YEAR_GUILD:
            return n ? y.intl.string(y.t.YDpAzZ) : y.intl.string(y.t.ZHkls0);
        case P.gD.PREMIUM_3_MONTH_GUILD:
            return y.intl.string(y.t.EZHHB6);
        case P.gD.PREMIUM_6_MONTH_GUILD:
            return y.intl.string(y.t.X2KDO2);
        case P.gD.PREMIUM_MONTH_LEGACY:
            return y.intl.string(y.t.PD6k79);
        case P.gD.PREMIUM_YEAR_LEGACY:
            return y.intl.string(y.t.LtJgTC);
    }
    let a = Error("Unsupported plan");
    throw ((0, m.pM)(a, { tags: { planId: e } }), a);
}
function J(e) {
    switch (e) {
        case P.pe.TIER_0:
            return y.intl.string(y.t["t9uG/o"]);
        case P.pe.TIER_1:
            return y.intl.string(y.t.FSOz78);
        case P.pe.TIER_2:
            return y.intl.string(y.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, m.pM)(t, { tags: { skuId: e } }), t);
}
function ee(e) {
    let t = P.hd[e]?.premiumType,
        n = null != t ? P.Mr[t] : null;
    if (null != n) return y.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, m.pM)(i, { tags: { planId: e } }), i);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case P.PremiumTypes.TIER_0:
            return t ? "Basic" : y.intl.string(y.t["t9uG/o"]);
        case P.PremiumTypes.TIER_1:
            return t ? "Classic" : y.intl.string(y.t.FSOz78);
        case P.PremiumTypes.TIER_2:
            return y.intl.string(y.t.lG6a5x);
    }
}
function en(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: a,
            hasDiscountApplied: r,
            activeDiscountInfo: s,
            renewalInvoicePreview: o,
            hasFractionalPremiumWithSub: d,
        } = e,
        _ = P.hd[n],
        E = e$(k(_.id), _.interval),
        u =
            eO(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !h.default.getCurrentUser()?.hasFreePremium()),
        A = null != i && null == t.paymentGateway,
        I = t.status === M.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === M.lT7.OPEN,
        T = u ? M.Dmq.CANCELED : I ? M.Dmq.UNPAID : t.status,
        S = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        N = P.M4 + (a ? el(t.additionalPlans) : 0),
        f = A
            ? S
                ? y.intl.format(y.t["cd+hqB"], { price: i })
                : y.intl.format(y.t.NUkcpF, { price: i })
            : y.intl.string(y.t.zYx3Y6),
        p = A
            ? S
                ? y.intl.format(y.t.VsKcFB, { price: i })
                : y.intl.format(y.t.hJ5xEX, { price: i })
            : y.intl.string(y.t["8rSipI"]),
        m = A
            ? S
                ? y.intl.format(y.t["jRy6/J"], { price: i, num: N })
                : y.intl.format(y.t.tTNE8M, { price: i, num: N })
            : y.intl.format(y.t["U+z/HJ"], { num: N });
    switch (n) {
        case P.gD.PREMIUM_MONTH_TIER_0:
        case P.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case M.Dmq.CANCELED:
                    return A
                        ? S
                            ? y.intl.format(y.t["USi/nc"], { price: i })
                            : y.intl.format(y.t["FS//l2"], { price: i })
                        : y.intl.string(y.t.JshLzq);
                case M.Dmq.ACCOUNT_HOLD:
                    return A
                        ? S
                            ? y.intl.format(y.t["5mv+2i"], { price: i })
                            : y.intl.format(y.t.nkAEfZ, { price: i })
                        : y.intl.format(y.t.SsLIXS, {});
                case M.Dmq.UNPAID:
                    return y.intl.format(y.t.cmkbFB, {});
                case M.Dmq.PAUSE_PENDING:
                    let C = null != t.pauseEndsAt ? l()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != C
                        ? y.intl.format(y.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: C })
                        : y.intl.format(y.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case M.Dmq.PAUSED:
                    if (d) return f;
                    return y.intl.format(y.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case M.Dmq.PAST_DUE:
                    return y.intl.format(y.t["d+0vwo"], {
                        endDate: (0, O.i$)(eu(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return f;
            }
        case P.gD.PREMIUM_MONTH_TIER_1:
        case P.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case M.Dmq.CANCELED:
                    return A
                        ? S
                            ? y.intl.format(y.t.cXy8Bp, { price: i })
                            : y.intl.format(y.t["C/XsHt"], { price: i })
                        : y.intl.string(y.t.K6tYFa);
                case M.Dmq.ACCOUNT_HOLD:
                    return A
                        ? S
                            ? y.intl.format(y.t.HBkIBi, { price: i })
                            : y.intl.format(y.t.ZsO1Sx, { price: i })
                        : y.intl.format(y.t["0+/WH7"], {});
                case M.Dmq.UNPAID:
                    return y.intl.format(y.t.McIzwj, {});
                case M.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? l()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? y.intl.format(y.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : y.intl.format(y.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case M.Dmq.PAUSED:
                    if (d) return p;
                    return y.intl.format(y.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case M.Dmq.PAST_DUE:
                    return y.intl.format(y.t["d+0vwo"], {
                        endDate: (0, O.i$)(eu(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return p;
            }
        case P.gD.PREMIUM_MONTH_TIER_2:
        case P.gD.PREMIUM_YEAR_TIER_2:
        case P.gD.PREMIUM_3_MONTH_TIER_2:
        case P.gD.PREMIUM_6_MONTH_TIER_2:
        case P.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case M.Dmq.CANCELED:
                    return A
                        ? S
                            ? y.intl.format(y.t.xoFgRh, { price: i, num: N })
                            : y.intl.format(y.t.nXdbKo, { price: i, num: N })
                        : y.intl.format(y.t.EcSdRH, { num: N });
                case M.Dmq.ACCOUNT_HOLD:
                    return A
                        ? S
                            ? y.intl.format(y.t["5C/0QG"], { price: i, num: N })
                            : y.intl.format(y.t.xfYkhu, { price: i, num: N })
                        : y.intl.format(y.t.ivjxcn, { num: N });
                case M.Dmq.UNPAID:
                    return y.intl.format(y.t["0HopYf"], { num: N });
                case M.Dmq.PAUSE_PENDING:
                    let g = null != t.pauseEndsAt ? l()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != g
                        ? y.intl.format(y.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: g })
                        : y.intl.format(y.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case M.Dmq.PAUSED:
                    if (d) return m;
                    return y.intl.format(y.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case M.Dmq.BILLING_RETRY:
                    return y.intl.format(y.t["IlJ/HV"], {
                        endDate: l()(t.currentPeriodStart).add(P.bx, "days").toDate(),
                    });
                case M.Dmq.PAST_DUE:
                    return y.intl.format(y.t["d+0vwo"], {
                        endDate: (0, O.i$)(eu(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return r
                        ? n === P.gD.PREMIUM_YEAR_TIER_2
                            ? y.intl.format(y.t["+qqh6g"], { percent: s?.percentage ?? P.Cq, regularPrice: E })
                            : S
                              ? y.intl.formatToPlainString(y.t["3ZiutU"], {
                                    percent: s?.percentage ?? P._$,
                                    regularPrice: E,
                                    numMonths: s?.duration ?? P.OJ,
                                })
                              : y.intl.formatToPlainString(y.t["G6+XOT"], {
                                    percent: s?.percentage ?? P._$,
                                    regularPrice: E,
                                    numMonths: s?.duration ?? P.OJ,
                                })
                        : m;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ei(e) {
    var t, n, i;
    let a,
        s,
        {
            renewalInvoicePreview: l,
            subscription: o,
            planId: d,
            includePremiumGuilds: c = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: E,
            hasFractionalPremiumWithSub: u = !1,
        } = e,
        A = f.A.get(d);
    return (
        r()(null != A, "Missing plan"),
        en({
            subscription: o,
            planId: A.id,
            price:
                ((t = l),
                (n = o),
                (i = A),
                (s =
                    null == (a = t.findInvoiceItemByPlanId(i.id))
                        ? j(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : a.amount),
                (0, b.CE)((0, b.$g)(s, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: c,
            hasDiscountApplied: _,
            activeDiscountInfo: E,
            renewalInvoicePreview: l,
            hasFractionalPremiumWithSub: u,
        })
    );
}
function ea(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, T.m1)(t) ? null : X(t),
        a = n?.find((e) => {
            let { planId: t } = e;
            return P.pW.has(t);
        }),
        r = a?.planId === P.gD.PREMIUM_MONTH_GUILD || a?.planId === P.gD.PREMIUM_YEAR_GUILD ? y.t.Pi5yMJ : null,
        s = null != r ? y.intl.formatToPlainString(r, { num: a?.quantity }) : void 0;
    if (null != i && null != s)
        return y.intl.formatToPlainString(y.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function er(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === P.hd[i].skuId ? i : void 0,
        r = [];
    switch (t) {
        case P.pe.TIER_0:
            r = [P.gD.PREMIUM_YEAR_TIER_0, P.gD.PREMIUM_MONTH_TIER_0];
            break;
        case P.pe.TIER_1:
            r = [P.gD.PREMIUM_MONTH_TIER_1];
            break;
        case P.pe.TIER_2:
            r = [P.gD.PREMIUM_YEAR_TIER_2, P.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== a) {
        let e = r.indexOf(a);
        r.splice(e, 1), r.unshift(a);
    }
    return r;
}
function es(e) {
    let t = P.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, m.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function el(e) {
    let t = f.A.getPlanIdsForSkus([eZ(P.pe.GUILD)]);
    r()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eo = new Set([
    P.gD.NONE_MONTH,
    P.gD.NONE_3_MONTH,
    P.gD.NONE_6_MONTH,
    P.gD.NONE_YEAR,
    P.gD.PREMIUM_MONTH_TIER_0,
    P.gD.PREMIUM_MONTH_TIER_1,
    P.gD.PREMIUM_MONTH_TIER_2,
    P.gD.PREMIUM_YEAR_TIER_0,
    P.gD.PREMIUM_YEAR_TIER_1,
    P.gD.PREMIUM_YEAR_TIER_2,
    P.gD.PREMIUM_3_MONTH_TIER_2,
    P.gD.PREMIUM_6_MONTH_TIER_2,
    P.gD.PREMIUM_GROUP_MONTH,
]);
function ed(e) {
    return eo.has(e);
}
function ec(e) {
    return P.pW.has(e);
}
function e_(e) {
    return ed(e) || ec(e);
}
function eE(e) {
    return null != e && e === P.gD.PREMIUM_GROUP_MONTH;
}
function eu(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = l()(e.metadata.apple_grace_period_expires_date);
        return { days: l().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = l()(e.metadata.google_grace_period_expires_date),
            n = l()(e.metadata.google_original_expires_date);
        return { days: l().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? P.U1 : P.L9;
        return { days: t, expiresDate: l()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: l()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: l()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? P.a5 : P.EV;
        return { days: t, expiresDate: l()(e.currentPeriodStart).add(t, "days") };
    }
}
function eA(e, t, n, i) {
    let a = l()(i ? void 0 : e);
    if (t.length > 0) {
        let e = eX(t);
        a = a.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = l()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (a = a.add(t, "hours"));
    }
    return a.toDate();
}
function eI(e) {
    let t = eX(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === P.xc.NONE)) return "";
    let n = { days: y.t.fYmirx, hours: y.t["C3RO+g"], minutes: y.t.r77oHc },
        i = (0, _.Vb)((0, O.Tf)(0, t * C.A.Millis.HOUR));
    return (0, O.uN)(i, n);
}
function eT(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === M.Dmq.PAST_DUE;
}
function eh(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? y.intl.string(y.t["0rzJ4J"]) : y.intl.string(y.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = y.intl.string(y.t.a9Mdb3)),
        t
    );
}
function eS(e) {
    if (null == e) return !1;
    let t = N.A.getPaymentSource(e);
    return null != t && v.AD.has(t.type);
}
function eN(e) {
    return e.isPurchasedExternally
        ? e.status === M.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  a = el(n);
              return 0 === (null != t ? el(t.additionalPlans) : null) && 0 !== a ? M.Dmq.CANCELED : i;
          })(e) === M.Dmq.CANCELED;
}
function ef(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: l, additionalPlans: o } = t,
        d = f.A.get(l);
    r()(null != d, "Missing plan");
    let _ = el(o),
        E = eR(t.planId, t.paymentSourceId, t.currency, n).amount * _;
    if (null != a) {
        let e = a.invoiceItems.find((e) => P.pW.has(e.subscriptionPlanId));
        null != e && (E = e.amount);
    }
    i = i ?? (0, b.$g)(E, t.currency);
    let u = a?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (eN(t))
        return t.isPurchasedViaGoogle
            ? y.intl.format(y.t["3/WTrI"], { quantity: _ })
            : u
              ? y.intl.format(y.t["0ozBSB"], { quantity: _, rate: (0, b.CE)(i, d.interval, d.intervalCount) })
              : y.intl.format(y.t["yjsv/s"], { quantity: _, rate: (0, b.CE)(i, d.interval, d.intervalCount) });
    switch (t.status) {
        case M.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? y.intl.format(y.t.Nlf3nc, { quantity: _, boostQuantity: _ })
                : u
                  ? y.intl.format(y.t.oiRy7v, {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, b.CE)(i, d.interval, d.intervalCount),
                    })
                  : y.intl.format(y.t["0QxOAi"], {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, b.CE)(i, d.interval, d.intervalCount),
                    });
        case M.Dmq.PAUSE_PENDING:
        case M.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return y.intl.string(y.t.CduWAm);
            return y.intl.format(y.t["5iud9s"], { quantity: _ });
        case M.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return y.intl.format(y.t["d+0vwo"], {
                    endDate: (0, O.i$)(eu(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? y.intl.format(y.t["5iud9s"], { quantity: _ })
                : u
                  ? y.intl.format(y.t.eDwrLA, { quantity: _, rate: (0, b.CE)(i, d.interval, d.intervalCount) })
                  : y.intl.format(y.t.ijSDcI, { quantity: _, rate: (0, b.CE)(i, d.interval, d.intervalCount) });
    }
}
function ep(e, t, n) {
    let i,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = j(e.id, !1, a, t);
        } catch {
            i = k(e.id, !1, a);
        }
    else i = k(e.id, !1, a);
    let r = (0, b.$g)(i.amount, i.currency);
    return e.currency !== v.Yr.USD && !0 === n && (r = r.concat("*")), r;
}
function em(e, t, n) {
    let i = ep(e, t, n);
    return (0, b.CE)(i, e.interval, e.intervalCount);
}
function eO(e) {
    let { status: t, renewalMutations: n } = e;
    return t === M.Dmq.CANCELED || (null != n && (0, T.m1)(n.planId) && !e.isPurchasedExternally);
}
function eC(e) {
    return e === M.Dmq.PAST_DUE || e === M.Dmq.ACCOUNT_HOLD || e === M.Dmq.BILLING_RETRY;
}
function eR(e, t, n, i) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: S.A.ipCountryCodeWithFallback, currency: n },
        r = f.A.get(e);
    if (null == r) {
        let t = Error("Unsupported plan");
        throw ((0, m.pM)(t, { tags: { planId: e } }), t);
    }
    let s = f.A.getForSkuAndInterval(eZ(P.pe.GUILD), r.interval, r.intervalCount);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, m.pM)(t, { tags: { planId: e } }), t);
    }
    return j(s.id, (0, D.ki)(i), !1, a);
}
function eg(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case P.gD.PREMIUM_MONTH_TIER_0:
                return y.intl.string(y.t["0ggVqN"]);
            case P.gD.PREMIUM_YEAR_TIER_0:
                return y.intl.string(y.t["jm+ZQw"]);
            case P.gD.PREMIUM_MONTH_TIER_1:
                return y.intl.string(y.t.uph4Jx);
            case P.gD.PREMIUM_YEAR_TIER_1:
                return y.intl.string(y.t["D/l7Yt"]);
            case P.gD.PREMIUM_MONTH_TIER_2:
            case P.gD.PREMIUM_GROUP_MONTH:
                return y.intl.string(y.t["5l1MuV"]);
            case P.gD.PREMIUM_YEAR_TIER_2:
                return y.intl.string(y.t.G0mISV);
        }
    switch (i) {
        case P.gD.PREMIUM_MONTH_TIER_0:
            return n ? y.intl.string(y.t.cRCCJ3) : y.intl.string(y.t["/G3aKw"]);
        case P.gD.PREMIUM_YEAR_TIER_0:
            return n ? y.intl.string(y.t.cRCCJ3) : y.intl.string(y.t["2eQpsL"]);
        case P.gD.PREMIUM_MONTH_TIER_1:
            return n ? y.intl.string(y.t.cRCCJ3) : y.intl.string(y.t.gueLg5);
        case P.gD.PREMIUM_YEAR_TIER_1:
            return n ? y.intl.string(y.t.cRCCJ3) : y.intl.string(y.t["MhH/vW"]);
        case P.gD.PREMIUM_MONTH_TIER_2:
            return n ? y.intl.string(y.t.cRCCJ3) : y.intl.string(y.t.LQVQIq);
        case P.gD.PREMIUM_GROUP_MONTH:
            return y.intl.formatToPlainString(G.default.LwdrNi, { premiumGroupProductName: (0, U.DP)() });
        case P.gD.PREMIUM_YEAR_TIER_2:
            return n ? y.intl.string(y.t.cRCCJ3) : y.intl.string(y.t["0nfg1x"]);
        case P.gD.PREMIUM_3_MONTH_TIER_2:
        case P.gD.PREMIUM_6_MONTH_TIER_2:
            return y.intl.formatToPlainString(y.t.BCD4fT, { intervalCount: t.intervalCount });
        case P.gD.NONE_MONTH:
        case P.gD.NONE_YEAR:
        case P.gD.NONE_3_MONTH:
        case P.gD.NONE_6_MONTH:
        case P.gD.PREMIUM_MONTH_GUILD:
        case P.gD.PREMIUM_YEAR_GUILD:
        case P.gD.PREMIUM_3_MONTH_GUILD:
        case P.gD.PREMIUM_6_MONTH_GUILD:
            return y.intl.string(y.t.eUEeCt);
    }
    let a = Error("User is purchasing an unsupported plan");
    throw ((0, m.pM)(a, { tags: { planId: i } }), a);
}
function eL(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = f.A.get(t);
    return r()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eD() {
    let e = v.Yr.USD;
    try {
        e = k(P.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eb(e) {
    let { intervalType: t = P.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case P.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? y.intl.formatToPlainString(y.t.fRNBRX, { weeks: n / 7 })
                    : y.intl.formatToPlainString(y.t.EIpHEj, { weeks: n / 7 });
            return i
                ? y.intl.formatToPlainString(y.t["6Cdzoy"], { days: n })
                : y.intl.formatToPlainString(y.t["kbBj/h"], { days: n });
        case P.WT.MONTH:
            return i
                ? y.intl.formatToPlainString(y.t.x5MgxS, { months: n })
                : y.intl.formatToPlainString(y.t["4SEnCZ"], { months: n });
        case P.WT.YEAR:
            return i
                ? y.intl.formatToPlainString(y.t["h+63yl"], { years: n })
                : y.intl.formatToPlainString(y.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eM(e) {
    let { intervalType: t = P.WT.MONTH, intervalCount: n = 1 } = e,
        i = eD(),
        a = (0, b.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case P.WT.DAY:
            if (n >= 7 && n % 7 == 0) return y.intl.formatToPlainString(y.t.C6i5Jt, { weeks: n / 7, price: a });
            return y.intl.formatToPlainString(y.t.cR9ifw, { days: n, price: a });
        case P.WT.MONTH:
            return y.intl.formatToPlainString(y.t["8FZfNo"], { months: n, price: a });
        case P.WT.YEAR:
            return y.intl.formatToPlainString(y.t.xzAcST, { years: n, price: a });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eP(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eM({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function eU(e) {
    let { intervalType: t = P.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case P.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? y.intl.formatToPlainString(y.t.iVZYyl, { weeks: n / 7 })
                    : y.intl.formatToPlainString(y.t.EmoBD2, { weeks: n / 7 });
            return i
                ? y.intl.formatToPlainString(y.t.jzH70Z, { days: n })
                : y.intl.formatToPlainString(y.t["k2UNz+"], { days: n });
        case P.WT.MONTH:
            return i
                ? y.intl.formatToPlainString(y.t.erUSmA, { months: n })
                : y.intl.formatToPlainString(y.t.kridzK, { months: n });
        case P.WT.YEAR:
            return i
                ? y.intl.formatToPlainString(y.t.IfYQVC, { years: n })
                : y.intl.formatToPlainString(y.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ev(e, t) {
    switch (e) {
        case M.kM_.APPLE_PARTNER:
        case M.kM_.APPLE_ADVANCED_COMMERCE:
        case M.kM_.APPLE:
            return w[t];
        case M.kM_.GOOGLE:
            return x[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function ey(e, t) {
    return (0, D.ki)(e) || eC(t?.status);
}
function eG(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => P.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function ew(e) {
    return e.filter((e) => !P.JM.has(e.planId));
}
function ex(e, t, n, i) {
    r()(i.has(t), "Expected planId in group");
    let a = !1,
        s = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((a = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!a) {
        let i = { planId: t, quantity: n },
            a = e.items.find((e) => e.planId === t);
        null != a && (i.id = a.id), s.push(i);
    }
    return s.filter((e) => 0 !== e.quantity);
}
function eV(e, t) {
    return ex(e, t, 1, P.JM);
}
function eB(e, t, n) {
    return ex(e, n, t, P.pW);
}
function eF(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => P.JM.has(e.planId));
    if (null != t) {
        let n = f.A.get(t.planId);
        r()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = f.A.get(e.planId);
                if ((r()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let a = f.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return r()(null != a, "Missing planForInterval"), { ...e, planId: a.id };
            }));
    }
    return e;
}
function ek(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = P.f5[e].fileSize;
    return (0, R.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function eH(e) {
    return null == e ? null : e.items.find((e) => P.pW.has(e.planId));
}
function ej(e) {
    let t = null != e ? F(e) : null;
    return null != t ? es(t.planId) : null;
}
let eY = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function eW(e) {
    return (0, A.RM)(A.G5, e);
}
function eK(e) {
    return (0, A.RM)(A.G3, e);
}
function e$(e, t) {
    let n = (0, b.$g)(e.amount, e.currency),
        i = Q(t);
    return `${n}/${i}`;
}
function eZ(e) {
    return e;
}
function eq(e) {
    return "isNitroLocked" in e;
}
function eQ() {
    let e = (0, o.bG)([h.default], () => h.default.getCurrentUser());
    return (0, D.YE)(e, P.PremiumTypes.TIER_2);
}
function ez(e) {
    var t;
    let n = P.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case P.Tt:
                return P.h7;
            case P.yo:
                return P.CA;
        }
    else;
    return n;
}
function eX(e) {
    return eJ(e.map((e) => e.skuId));
}
function eJ(e) {
    return e.reduce((e, t) => {
        let [n, i] = P.NL[t],
            a = 1;
        switch (n) {
            case P.T.HOUR:
                a = 1;
                break;
            case P.T.DAY:
                a = 24;
        }
        return e + a * i;
    }, 0);
}
let e0 = (e) => {
    let { planId: t, shouldUseCalculatedDiscount: n, isGift: i, priceOptions: a, subscriptionPlan: r } = e,
        s = P.XE[t];
    return n && (s = e1(r, i, a)), s;
};
function e1(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === P.WT.YEAR) {
        try {
            if (
                ((t = ((e) => {
                    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
                        a = P.En[t.skuId];
                    return null == a ? null : j(a, !1, n, i);
                })({ subscriptionPlan: e, isGift: i, priceOptions: a })),
                null == t)
            )
                return;
            n = j(e.id, !1, i, a);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function e2(e) {
    return null == e ? 0 : Math.max((0, O.m_)(new Date(), new Date(e)), 0);
}
let e3 = Object.freeze({
    isNewUser: eY,
    isPremiumAtLeast: D.CC,
    isPremium: D.ki,
    isPremiumExactly: D.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: j,
    getDefaultPrice: k,
    getInterval: function (e) {
        let t = P.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, m.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: q,
    getIntervalStringAsNoun: Q,
    getPremiumType: z,
    getTierDisplayNameByPlanId: ee,
    getDisplayName: X,
    getPremiumPlanOptions: er,
    formatInterval: function (e) {
        if (e === P.WT.YEAR) return y.intl.string(y.t.tfqrhj);
        if (e === P.WT.MONTH) return y.intl.string(y.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: en,
    isPremiumSku: function (e) {
        return e === P.pe.TIER_0 || e === P.pe.TIER_1 || e === P.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === P.WT.MONTH) return t;
        if (e === P.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: L.f,
    getSkuIdForPlan: es,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case P.PremiumTypes.TIER_0:
                return P.pe.TIER_0;
            case P.PremiumTypes.TIER_1:
                return P.pe.TIER_1;
            case P.PremiumTypes.TIER_2:
                return P.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return z(e) === P.PremiumTypes.TIER_2 ? P.M4 : 0;
    },
    getBillingInformationString: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {
                          isFractionalPremiumActive: !1,
                          fetched: !0,
                          fractionalState: P.xc.NONE,
                          startsAt: l()(0),
                          endsAt: l()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: l()(0),
                          unactivatedUnits: [],
                      },
            r = null !== n && e.status === M.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, b.$g)(
                      r.invoiceItems
                          .filter((e) => P.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      r.currency,
                  )
                : (0, b.$g)(r.total, r.currency);
        if (h.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != a.currentEntitlementEndsAt ? a.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return y.intl.format(y.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === M.Dmq.CANCELED) return y.intl.format(y.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === M.Dmq.PAUSE_PENDING)
            return y.intl.format(y.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === M.Dmq.PAUSED)
            return a.fractionalState !== P.xc.NONE
                ? y.intl.format(y.t.Q18lRK, { renewalDate: a.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? y.intl.format(y.t.KTYQCg, { planName: y.intl.string(y.t.Ipxkog), price: s })
                      : y.intl.string(y.t.fMz6Lg)
                  : i
                    ? y.intl.format(y.t.zcgtzf, {
                          planName: y.intl.string(y.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : y.intl.format(y.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === M.Dmq.PAST_DUE) {
            let t = eu(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = l()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = l()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? y.intl.format(y.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: v.qm[e.paymentGateway],
                      paymentSourceLink: ev(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : y.intl.format(y.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        {
            var o;
            if (e.status === M.Dmq.BILLING_RETRY)
                return y.intl.format(y.t.EMTLOT, {
                    endDate: l()(e.currentPeriodStart).add(P.bx, "days").toDate(),
                    price: s,
                });
            if (e.status === M.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, g.isAndroid)()
                    ? y.intl.format(y.t["dtcxw+"], {
                          endDate: l()(e.currentPeriodStart).add(P.ph, "days").toDate(),
                          paymentGatewayName: v.qm[e.paymentGateway],
                          paymentSourceLink: ev(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : y.intl.format(y.t.EMTLOT, {
                          endDate: l()(e.currentPeriodStart).add(P.ph, "days").toDate(),
                          price: s,
                      });
            if (null != (o = e).paymentSourceId && eS(o.paymentSourceId))
                return y.intl.format(y.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === M.Dmq.UNPAID) return y.intl.format(y.t.CzTKom, { maxProcessingTimeInDays: P.G4 });
            if (e.isPurchasedExternally)
                return y.intl.format(y.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: v.qm[e.paymentGateway],
                    subscriptionManagementLink: ev(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eA(n, a.unactivatedUnits)),
                i
                    ? y.intl.format(y.t.Vl3cED, { planName: y.intl.string(y.t.Ipxkog), renewalDate: n, price: s })
                    : y.intl.format(y.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: eA,
    getUnactivatedFractionalPremiumDurationString: eI,
    isSwitchingPlansDisabled: eT,
    getSwitchingPlansDisabledMessage: eh,
    isNoneSubscription: T.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === M.Dmq.CANCELED || e.status === M.Dmq.PAUSE_PENDING) return n;
        r()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ed(t);
        });
        return null == i ||
            (0, T.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === M.Dmq.CANCELED || e.status === M.Dmq.PAUSE_PENDING) return n;
        r()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ed(t);
        });
        return (null == i || (0, T.m1)(i.subscriptionPlanId)) && (n = M.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: eO,
    getPremiumGuildIntervalPrice: eR,
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
                let { subscriptionPlanId: n, parentId: i, consumed: a } = e;
                return null != n && null != i && !a && n === t;
            })
        );
    },
    getBillingReviewSubheader: eg,
    getIntervalForInvoice: eL,
    getPremiumPlanItem: F,
    getGuildBoostPlanItem: eH,
    isBoostOnlySubscription: function (e) {
        return null != e && null == F(e) && null != eH(e);
    },
    getPremiumSkuIdForSubscription: ej,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = F(e);
            if (null != t) return z(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: eX,
    castPremiumSubscriptionAsSkuId: eZ,
    calculateDiscountPercentageForYearlyPlan: e1,
    getDaysSincePremium: e2,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, O.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return (0, A.RM)(A.gQ, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, A.RM)(A.JK, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, A.RM)(A.He, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, A.RM)(A.ii, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, A.RM)(A.u6, e);
    },
    canUseBadges: function (e) {
        return (0, A.RM)(A.nI, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, A.RM)(A.DG, e);
    },
    canEditDiscriminator: function (e) {
        return (0, A.RM)(A.nh, e);
    },
    hasBoostDiscount: function (e) {
        return (0, A.RM)(A._V, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, A.RM)(A.OW, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, A.RM)(A._w, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, A.RM)(A.Qz, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, A.RM)(A.Pm, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, A.RM)(A.x, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, A.RM)(A.cS, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, A.RM)(A.T7, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, A.RM)(A.lx, e);
    },
    canUseClientThemes: function (e) {
        return (0, A.RM)(A.zL, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? (0, A.RM)(A.sj, t) : "mid" === e && (0, A.RM)(A.II, t);
    },
    canUseQuestOrbMultiplier: eW,
    hasFreeBoosts: function (e) {
        return (0, A.RM)(A.aE, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, A.RM)(A.GS, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, A.RM)(A.Zc, e);
    },
    canUseCollectibles: eK,
    canUseMonthlyOrbs: function (e) {
        return (0, I.Nh)(e?.perks, d.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return eK(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return eW(e);
    },
    formatPriceString: e$,
    StreamQuality: B,
});
