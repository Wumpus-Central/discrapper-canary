n.d(t, {
    $Q: () => K,
    $k: () => ef,
    Ay: () => e4,
    CC: () => b.CC,
    D8: () => Q,
    Dd: () => en,
    EJ: () => eH,
    EL: () => k,
    Em: () => eQ,
    FJ: () => z,
    FY: () => eP,
    GX: () => eB,
    Ge: () => eD,
    J$: () => eN,
    JM: () => H,
    Ke: () => q,
    LE: () => eU,
    L_: () => e1,
    Mn: () => J,
    Nc: () => eh,
    OU: () => er,
    Of: () => eG,
    Om: () => eF,
    PK: () => eR,
    Pg: () => eV,
    Q8: () => eS,
    RH: () => et,
    Rr: () => eb,
    TW: () => b.ki,
    Tm: () => es,
    To: () => e3,
    U8: () => Z,
    UC: () => $,
    Uf: () => ep,
    YE: () => b.YE,
    Zb: () => eu,
    Zw: () => ee,
    _e: () => eI,
    aE: () => ew,
    aZ: () => eY,
    bx: () => eo,
    e1: () => eX,
    ee: () => ex,
    ff: () => eL,
    iv: () => e0,
    jh: () => eO,
    ji: () => eA,
    kX: () => eT,
    ki: () => eC,
    l6: () => j,
    m6: () => X,
    mH: () => eq,
    mv: () => eW,
    nB: () => ea,
    nK: () => ez,
    pb: () => W,
    qn: () => ek,
    re: () => ev,
    sS: () => em,
    tS: () => eM,
    tW: () => ey,
    xq: () => ec,
    y8: () => Y,
    ys: () => eE,
    z4: () => e_,
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
    I = n(965387),
    T = n(349871),
    h = n(832946),
    S = n(287809),
    N = n(615405),
    f = n(295405),
    p = n(97352),
    m = n(166403),
    O = n(739508),
    C = n(58703),
    R = n(927813),
    g = n(255438),
    L = n(723702),
    D = n(125584),
    b = n(474090),
    M = n(580630),
    P = n(652215),
    U = n(788868),
    v = n(88001),
    y = n(818348),
    G = n(985018),
    w = n(466919);
let x = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    V = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    B = new E.A("PremiumUtils.tsx");
var F = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function k(e) {
    return e.items.find((e) => U.JM.has(e.planId));
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        r = f.A.defaultPaymentSourceId ?? void 0,
        s = m.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (r = s.paymentSourceId),
        Y(e, t, n, { paymentSourceId: r, currency: i }, a)
    );
}
function j(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function Y(e) {
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
    if (null != p.A.get(e)) {
        let i = P.lid.DEFAULT;
        n ? (i = P.lid.GIFT) : t && (i = P.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.lid.DEFAULT },
                a = W(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === a.length &&
                    B.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let r = a.find((e) => e.currency === i.toLowerCase());
                return null != r
                    ? r
                    : null != t
                      ? W(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return a[0];
        })(e, { paymentSourceId: r, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                (a &&
                    (0, O.pM)(t, {
                        extra: { paymentSourceId: r },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t)
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (a && (0, O.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function W(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.lid.DEFAULT },
        i = (function (e, t) {
            let n = p.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, O.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (B.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let a = i.paymentSourcePrices[t];
        if (null == a) {
            B.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                B.info(`prices: ${a}`);
            let r = Error("Missing prices for payment source on subscription plan");
            (0, O.pM)(r, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== a.length) return a;
    }
    if (null == i.countryPrices.prices) {
        B.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, O.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function K(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function $(e, t, n) {
    let i,
        a,
        r = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        s = (0, u._1)(e);
    null != s && (i = U.hd[s.planId].premiumType);
    let l = (0, b.CC)(i, U.PremiumTypes.TIER_0),
        o = (0, b.CC)(i, U.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (a = U.pW.has(i.planId) ? o : !U.JM.has(i.planId) && l),
            (e = void 0 === n ? H(i.planId, a, !1, t) : Y(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (r.amount += e.amount * i.quantity);
    }
    return K(r);
}
function Z(e, t, n, i) {
    return (
        null === t && (r()(null !== e, "Subscription can't be null"), (t = [])), $(null !== e ? ew(e, t) : ex(t), n, i)
    );
}
function q(e) {
    switch (e) {
        case U.Ff.MONTH:
            return G.intl.string(G.t.FPybU7);
        case U.Ff.YEAR:
            return G.intl.string(G.t.tfqrhj);
        case U.Ff.DAY:
        case U.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function Q(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : U.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case U.WT.MONTH:
                let s = G.intl.formatToPlainString(r === U.PremiumTypes.TIER_0 ? G.t.NPKsLz : G.t.poEovT, {
                    timeInterval: G.intl.string(G.t.FPybU7),
                });
                return a ? s : G.intl.string(G.t.Mh9bTt);
            case U.WT.YEAR:
                let l = G.intl.formatToPlainString(r === U.PremiumTypes.TIER_0 ? G.t.NPKsLz : G.t.poEovT, {
                    timeInterval: G.intl.string(G.t.tfqrhj),
                });
                return a ? l : G.intl.string(G.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case U.WT.MONTH:
            if (1 !== i) return G.intl.formatToPlainString(G.t["0UlZnH"], { intervalCount: i });
            return G.intl.string(G.t.DKzs96);
        case U.WT.YEAR:
            return G.intl.string(G.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function z(e) {
    switch (e) {
        case U.WT.MONTH:
            return G.intl.string(G.t.FPybU7);
        case U.WT.YEAR:
            return G.intl.string(G.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function X(e) {
    let t = U.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, O.pM)(n, { tags: { planId: e } }), n);
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case U.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? G.intl.format(G.t.TZXHNj, { duration: i })
                : n
                  ? G.intl.string(G.t["81iAgs"])
                  : G.intl.string(G.t["0efVPy"]);
        case U.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? G.intl.format(G.t.eqRhC7, { duration: i })
                : n
                  ? G.intl.string(G.t.UvzqY1)
                  : G.intl.string(G.t.eoVuBn);
        case U.gD.PREMIUM_MONTH_TIER_1:
            return n ? G.intl.string(G.t["g/dH5g"]) : G.intl.string(G.t["7O6qSq"]);
        case U.gD.PREMIUM_YEAR_TIER_1:
            return n ? G.intl.string(G.t.pdZJaq) : G.intl.string(G.t.Md5xbi);
        case U.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? G.intl.format(G.t.aI6QXz, { duration: i })
                : n
                  ? G.intl.string(G.t.SmVbHc)
                  : G.intl.string(G.t.FKYNC6);
        case U.gD.PREMIUM_GROUP_MONTH:
            return n ? G.intl.string(G.t.SmVbHc) : G.intl.string(G.t.FKYNC6);
        case U.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? G.intl.format(G.t["1wBcPi"], { duration: i })
                : n
                  ? G.intl.string(G.t.JIq4O1)
                  : G.intl.string(G.t["cfu/5d"]);
        case U.gD.PREMIUM_3_MONTH_TIER_2:
            return G.intl.string(G.t.wCbINr);
        case U.gD.PREMIUM_6_MONTH_TIER_2:
            return G.intl.string(G.t["e3/ArU"]);
        case U.gD.PREMIUM_MONTH_GUILD:
            return n ? G.intl.string(G.t["6ZR3By"]) : G.intl.string(G.t["h80cx/"]);
        case U.gD.PREMIUM_YEAR_GUILD:
            return n ? G.intl.string(G.t.YDpAzZ) : G.intl.string(G.t.ZHkls0);
        case U.gD.PREMIUM_3_MONTH_GUILD:
            return G.intl.string(G.t.EZHHB6);
        case U.gD.PREMIUM_6_MONTH_GUILD:
            return G.intl.string(G.t.X2KDO2);
        case U.gD.PREMIUM_MONTH_LEGACY:
            return G.intl.string(G.t.PD6k79);
        case U.gD.PREMIUM_YEAR_LEGACY:
            return G.intl.string(G.t.LtJgTC);
    }
    let a = Error("Unsupported plan");
    throw ((0, O.pM)(a, { tags: { planId: e } }), a);
}
function ee(e) {
    switch (e) {
        case U.pe.TIER_0:
            return G.intl.string(G.t["t9uG/o"]);
        case U.pe.TIER_1:
            return G.intl.string(G.t.FSOz78);
        case U.pe.TIER_2:
            return G.intl.string(G.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, O.pM)(t, { tags: { skuId: e } }), t);
}
function et(e) {
    let t = U.hd[e]?.premiumType,
        n = null != t ? U.Mr[t] : null;
    if (null != n) return G.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, O.pM)(i, { tags: { planId: e } }), i);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case U.PremiumTypes.TIER_0:
            return t ? "Basic" : G.intl.string(G.t["t9uG/o"]);
        case U.PremiumTypes.TIER_1:
            return t ? "Classic" : G.intl.string(G.t.FSOz78);
        case U.PremiumTypes.TIER_2:
            return G.intl.string(G.t.lG6a5x);
    }
}
function ei(e) {
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
        _ = U.hd[n],
        E = eZ(H(_.id), _.interval),
        u =
            eC(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !S.default.getCurrentUser()?.hasFreePremium()),
        A = null != i && null == t.paymentGateway,
        I = t.status === P.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === P.lT7.OPEN,
        T = u ? P.Dmq.CANCELED : I ? P.Dmq.UNPAID : t.status,
        h = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        N = U.M4 + (a ? eo(t.additionalPlans) : 0),
        f = A
            ? h
                ? G.intl.format(G.t["cd+hqB"], { price: i })
                : G.intl.format(G.t.NUkcpF, { price: i })
            : G.intl.string(G.t.zYx3Y6),
        p = A
            ? h
                ? G.intl.format(G.t.VsKcFB, { price: i })
                : G.intl.format(G.t.hJ5xEX, { price: i })
            : G.intl.string(G.t["8rSipI"]),
        m = A
            ? h
                ? G.intl.format(G.t["jRy6/J"], { price: i, num: N })
                : G.intl.format(G.t.tTNE8M, { price: i, num: N })
            : G.intl.format(G.t["U+z/HJ"], { num: N });
    switch (n) {
        case U.gD.PREMIUM_MONTH_TIER_0:
        case U.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case P.Dmq.CANCELED:
                    return A
                        ? h
                            ? G.intl.format(G.t["USi/nc"], { price: i })
                            : G.intl.format(G.t["FS//l2"], { price: i })
                        : G.intl.string(G.t.JshLzq);
                case P.Dmq.ACCOUNT_HOLD:
                    return A
                        ? h
                            ? G.intl.format(G.t["5mv+2i"], { price: i })
                            : G.intl.format(G.t.nkAEfZ, { price: i })
                        : G.intl.format(G.t.SsLIXS, {});
                case P.Dmq.UNPAID:
                    return G.intl.format(G.t.cmkbFB, {});
                case P.Dmq.PAUSE_PENDING:
                    let O = null != t.pauseEndsAt ? l()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != O
                        ? G.intl.format(G.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: O })
                        : G.intl.format(G.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (d) return f;
                    return G.intl.format(G.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.PAST_DUE:
                    return G.intl.format(G.t["d+0vwo"], {
                        endDate: (0, C.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return f;
            }
        case U.gD.PREMIUM_MONTH_TIER_1:
        case U.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case P.Dmq.CANCELED:
                    return A
                        ? h
                            ? G.intl.format(G.t.cXy8Bp, { price: i })
                            : G.intl.format(G.t["C/XsHt"], { price: i })
                        : G.intl.string(G.t.K6tYFa);
                case P.Dmq.ACCOUNT_HOLD:
                    return A
                        ? h
                            ? G.intl.format(G.t.HBkIBi, { price: i })
                            : G.intl.format(G.t.ZsO1Sx, { price: i })
                        : G.intl.format(G.t["0+/WH7"], {});
                case P.Dmq.UNPAID:
                    return G.intl.format(G.t.McIzwj, {});
                case P.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? l()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? G.intl.format(G.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : G.intl.format(G.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (d) return p;
                    return G.intl.format(G.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.PAST_DUE:
                    return G.intl.format(G.t["d+0vwo"], {
                        endDate: (0, C.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return p;
            }
        case U.gD.PREMIUM_MONTH_TIER_2:
        case U.gD.PREMIUM_YEAR_TIER_2:
        case U.gD.PREMIUM_3_MONTH_TIER_2:
        case U.gD.PREMIUM_6_MONTH_TIER_2:
        case U.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case P.Dmq.CANCELED:
                    return A
                        ? h
                            ? G.intl.format(G.t.xoFgRh, { price: i, num: N })
                            : G.intl.format(G.t.nXdbKo, { price: i, num: N })
                        : G.intl.format(G.t.EcSdRH, { num: N });
                case P.Dmq.ACCOUNT_HOLD:
                    return A
                        ? h
                            ? G.intl.format(G.t["5C/0QG"], { price: i, num: N })
                            : G.intl.format(G.t.xfYkhu, { price: i, num: N })
                        : G.intl.format(G.t.ivjxcn, { num: N });
                case P.Dmq.UNPAID:
                    return G.intl.format(G.t["0HopYf"], { num: N });
                case P.Dmq.PAUSE_PENDING:
                    let g = null != t.pauseEndsAt ? l()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != g
                        ? G.intl.format(G.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: g })
                        : G.intl.format(G.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (d) return m;
                    return G.intl.format(G.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.BILLING_RETRY:
                    return G.intl.format(G.t["IlJ/HV"], {
                        endDate: l()(t.currentPeriodStart).add(U.bx, "days").toDate(),
                    });
                case P.Dmq.PAST_DUE:
                    return G.intl.format(G.t["d+0vwo"], {
                        endDate: (0, C.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return r
                        ? n === U.gD.PREMIUM_YEAR_TIER_2
                            ? G.intl.format(G.t["+qqh6g"], { percent: s?.percentage ?? U.Cq, regularPrice: E })
                            : h
                              ? G.intl.formatToPlainString(G.t["3ZiutU"], {
                                    percent: s?.percentage ?? U._$,
                                    regularPrice: E,
                                    numMonths: s?.duration ?? U.OJ,
                                })
                              : G.intl.formatToPlainString(G.t["G6+XOT"], {
                                    percent: s?.percentage ?? U._$,
                                    regularPrice: E,
                                    numMonths: s?.duration ?? U.OJ,
                                })
                        : m;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ea(e) {
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
        A = p.A.get(d);
    return (
        r()(null != A, "Missing plan"),
        ei({
            subscription: o,
            planId: A.id,
            price:
                ((t = l),
                (n = o),
                (i = A),
                (s =
                    null == (a = t.findInvoiceItemByPlanId(i.id))
                        ? Y(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : a.amount),
                (0, M.CE)((0, M.$g)(s, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: c,
            hasDiscountApplied: _,
            activeDiscountInfo: E,
            renewalInvoicePreview: l,
            hasFractionalPremiumWithSub: u,
        })
    );
}
function er(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, h.m1)(t) ? null : J(t),
        a = n?.find((e) => {
            let { planId: t } = e;
            return U.pW.has(t);
        }),
        r = a?.planId === U.gD.PREMIUM_MONTH_GUILD || a?.planId === U.gD.PREMIUM_YEAR_GUILD ? G.t.Pi5yMJ : null,
        s = null != r ? G.intl.formatToPlainString(r, { num: a?.quantity }) : void 0;
    if (null != i && null != s)
        return G.intl.formatToPlainString(G.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function es(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === U.hd[i].skuId ? i : void 0,
        r = [];
    switch (t) {
        case U.pe.TIER_0:
            r = [U.gD.PREMIUM_YEAR_TIER_0, U.gD.PREMIUM_MONTH_TIER_0];
            break;
        case U.pe.TIER_1:
            r = [U.gD.PREMIUM_MONTH_TIER_1];
            break;
        case U.pe.TIER_2:
            r = [U.gD.PREMIUM_YEAR_TIER_2, U.gD.PREMIUM_MONTH_TIER_2];
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
function el(e) {
    let t = U.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, O.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eo(e) {
    let t = p.A.getPlanIdsForSkus([eq(U.pe.GUILD)]);
    r()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ed = new Set([
    U.gD.NONE_MONTH,
    U.gD.NONE_3_MONTH,
    U.gD.NONE_6_MONTH,
    U.gD.NONE_YEAR,
    U.gD.PREMIUM_MONTH_TIER_0,
    U.gD.PREMIUM_MONTH_TIER_1,
    U.gD.PREMIUM_MONTH_TIER_2,
    U.gD.PREMIUM_YEAR_TIER_0,
    U.gD.PREMIUM_YEAR_TIER_1,
    U.gD.PREMIUM_YEAR_TIER_2,
    U.gD.PREMIUM_3_MONTH_TIER_2,
    U.gD.PREMIUM_6_MONTH_TIER_2,
    U.gD.PREMIUM_GROUP_MONTH,
]);
function ec(e) {
    return ed.has(e);
}
function e_(e) {
    return U.pW.has(e);
}
function eE(e) {
    return ec(e) || e_(e);
}
function eu(e) {
    return null != e && e === U.gD.PREMIUM_GROUP_MONTH;
}
function eA(e) {
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
        let t = e.isPurchasedViaApple ? U.U1 : U.L9;
        return { days: t, expiresDate: l()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: l()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: l()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? U.a5 : U.EV;
        return { days: t, expiresDate: l()(e.currentPeriodStart).add(t, "days") };
    }
}
function eI(e, t, n, i) {
    let a = l()(i ? void 0 : e);
    if (t.length > 0) {
        let e = eJ(t);
        a = a.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = l()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (a = a.add(t, "hours"));
    }
    return a.toDate();
}
function eT(e) {
    let t = eJ(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === U.xc.NONE)) return "";
    let n = { days: G.t.fYmirx, hours: G.t["C3RO+g"], minutes: G.t.r77oHc },
        i = (0, _.Vb)((0, C.Tf)(0, t * R.A.Millis.HOUR));
    return (0, C.uN)(i, n);
}
function eh(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === P.Dmq.PAST_DUE;
}
function eS(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? G.intl.string(G.t["0rzJ4J"]) : G.intl.string(G.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = G.intl.string(G.t.a9Mdb3)),
        t
    );
}
function eN(e) {
    if (null == e) return !1;
    let t = f.A.getPaymentSource(e);
    return null != t && y.AD.has(t.type);
}
function ef(e) {
    return e.isPurchasedExternally
        ? e.status === P.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  a = eo(n);
              return 0 === (null != t ? eo(t.additionalPlans) : null) && 0 !== a ? P.Dmq.CANCELED : i;
          })(e) === P.Dmq.CANCELED;
}
function ep(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: l, additionalPlans: o } = t,
        d = p.A.get(l);
    r()(null != d, "Missing plan");
    let _ = eo(o),
        E = eg(t.planId, t.paymentSourceId, t.currency, n).amount * _;
    if (null != a) {
        let e = a.invoiceItems.find((e) => U.pW.has(e.subscriptionPlanId));
        null != e && (E = e.amount);
    }
    i = i ?? (0, M.$g)(E, t.currency);
    let u = a?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (ef(t))
        return t.isPurchasedViaGoogle
            ? G.intl.format(G.t["3/WTrI"], { quantity: _ })
            : u
              ? G.intl.format(G.t["0ozBSB"], { quantity: _, rate: (0, M.CE)(i, d.interval, d.intervalCount) })
              : G.intl.format(G.t["yjsv/s"], { quantity: _, rate: (0, M.CE)(i, d.interval, d.intervalCount) });
    switch (t.status) {
        case P.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? G.intl.format(G.t.Nlf3nc, { quantity: _, boostQuantity: _ })
                : u
                  ? G.intl.format(G.t.oiRy7v, {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, M.CE)(i, d.interval, d.intervalCount),
                    })
                  : G.intl.format(G.t["0QxOAi"], {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, M.CE)(i, d.interval, d.intervalCount),
                    });
        case P.Dmq.PAUSE_PENDING:
        case P.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return G.intl.string(G.t.CduWAm);
            return G.intl.format(G.t["5iud9s"], { quantity: _ });
        case P.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return G.intl.format(G.t["d+0vwo"], {
                    endDate: (0, C.i$)(eA(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? G.intl.format(G.t["5iud9s"], { quantity: _ })
                : u
                  ? G.intl.format(G.t.eDwrLA, { quantity: _, rate: (0, M.CE)(i, d.interval, d.intervalCount) })
                  : G.intl.format(G.t.ijSDcI, { quantity: _, rate: (0, M.CE)(i, d.interval, d.intervalCount) });
    }
}
function em(e, t, n) {
    let i,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = Y(e.id, !1, a, t);
        } catch {
            i = H(e.id, !1, a);
        }
    else i = H(e.id, !1, a);
    let r = (0, M.$g)(i.amount, i.currency);
    return e.currency !== y.Yr.USD && !0 === n && (r = r.concat("*")), r;
}
function eO(e, t, n) {
    let i = em(e, t, n);
    return (0, M.CE)(i, e.interval, e.intervalCount);
}
function eC(e) {
    let { status: t, renewalMutations: n } = e;
    return t === P.Dmq.CANCELED || (null != n && (0, h.m1)(n.planId) && !e.isPurchasedExternally);
}
function eR(e) {
    return e === P.Dmq.PAST_DUE || e === P.Dmq.ACCOUNT_HOLD || e === P.Dmq.BILLING_RETRY;
}
function eg(e, t, n, i) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: N.A.ipCountryCodeWithFallback, currency: n },
        r = p.A.get(e);
    if (null == r) {
        let t = Error("Unsupported plan");
        throw ((0, O.pM)(t, { tags: { planId: e } }), t);
    }
    let s = p.A.getForSkuAndInterval(eq(U.pe.GUILD), r.interval, r.intervalCount);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, O.pM)(t, { tags: { planId: e } }), t);
    }
    return Y(s.id, (0, b.ki)(i), !1, a);
}
function eL(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case U.gD.PREMIUM_MONTH_TIER_0:
                return G.intl.string(G.t["0ggVqN"]);
            case U.gD.PREMIUM_YEAR_TIER_0:
                return G.intl.string(G.t["jm+ZQw"]);
            case U.gD.PREMIUM_MONTH_TIER_1:
                return G.intl.string(G.t.uph4Jx);
            case U.gD.PREMIUM_YEAR_TIER_1:
                return G.intl.string(G.t["D/l7Yt"]);
            case U.gD.PREMIUM_MONTH_TIER_2:
            case U.gD.PREMIUM_GROUP_MONTH:
                return G.intl.string(G.t["5l1MuV"]);
            case U.gD.PREMIUM_YEAR_TIER_2:
                return G.intl.string(G.t.G0mISV);
        }
    switch (i) {
        case U.gD.PREMIUM_MONTH_TIER_0:
            return n ? G.intl.string(G.t.cRCCJ3) : G.intl.string(G.t["/G3aKw"]);
        case U.gD.PREMIUM_YEAR_TIER_0:
            return n ? G.intl.string(G.t.cRCCJ3) : G.intl.string(G.t["2eQpsL"]);
        case U.gD.PREMIUM_MONTH_TIER_1:
            return n ? G.intl.string(G.t.cRCCJ3) : G.intl.string(G.t.gueLg5);
        case U.gD.PREMIUM_YEAR_TIER_1:
            return n ? G.intl.string(G.t.cRCCJ3) : G.intl.string(G.t["MhH/vW"]);
        case U.gD.PREMIUM_MONTH_TIER_2:
            return n ? G.intl.string(G.t.cRCCJ3) : G.intl.string(G.t.LQVQIq);
        case U.gD.PREMIUM_GROUP_MONTH:
            return G.intl.formatToPlainString(w.default.LwdrNi, { premiumGroupProductName: (0, v.DP)() });
        case U.gD.PREMIUM_YEAR_TIER_2:
            return n ? G.intl.string(G.t.cRCCJ3) : G.intl.string(G.t["0nfg1x"]);
        case U.gD.PREMIUM_3_MONTH_TIER_2:
        case U.gD.PREMIUM_6_MONTH_TIER_2:
            return G.intl.formatToPlainString(G.t.BCD4fT, { intervalCount: t.intervalCount });
        case U.gD.NONE_MONTH:
        case U.gD.NONE_YEAR:
        case U.gD.NONE_3_MONTH:
        case U.gD.NONE_6_MONTH:
        case U.gD.PREMIUM_MONTH_GUILD:
        case U.gD.PREMIUM_YEAR_GUILD:
        case U.gD.PREMIUM_3_MONTH_GUILD:
        case U.gD.PREMIUM_6_MONTH_GUILD:
            return G.intl.string(G.t.eUEeCt);
    }
    let a = Error("User is purchasing an unsupported plan");
    throw ((0, O.pM)(a, { tags: { planId: i } }), a);
}
function eD(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = p.A.get(t);
    return r()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eb() {
    let e = y.Yr.USD;
    try {
        e = H(U.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eM(e) {
    let { intervalType: t = U.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case U.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? G.intl.formatToPlainString(G.t.fRNBRX, { weeks: n / 7 })
                    : G.intl.formatToPlainString(G.t.EIpHEj, { weeks: n / 7 });
            return i
                ? G.intl.formatToPlainString(G.t["6Cdzoy"], { days: n })
                : G.intl.formatToPlainString(G.t["kbBj/h"], { days: n });
        case U.WT.MONTH:
            return i
                ? G.intl.formatToPlainString(G.t.x5MgxS, { months: n })
                : G.intl.formatToPlainString(G.t["4SEnCZ"], { months: n });
        case U.WT.YEAR:
            return i
                ? G.intl.formatToPlainString(G.t["h+63yl"], { years: n })
                : G.intl.formatToPlainString(G.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eP(e) {
    let { intervalType: t = U.WT.MONTH, intervalCount: n = 1 } = e,
        i = eb(),
        a = (0, M.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case U.WT.DAY:
            if (n >= 7 && n % 7 == 0) return G.intl.formatToPlainString(G.t.C6i5Jt, { weeks: n / 7, price: a });
            return G.intl.formatToPlainString(G.t.cR9ifw, { days: n, price: a });
        case U.WT.MONTH:
            return G.intl.formatToPlainString(G.t["8FZfNo"], { months: n, price: a });
        case U.WT.YEAR:
            return G.intl.formatToPlainString(G.t.xzAcST, { years: n, price: a });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eU(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eP({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function ev(e) {
    let { intervalType: t = U.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case U.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? G.intl.formatToPlainString(G.t.iVZYyl, { weeks: n / 7 })
                    : G.intl.formatToPlainString(G.t.EmoBD2, { weeks: n / 7 });
            return i
                ? G.intl.formatToPlainString(G.t.jzH70Z, { days: n })
                : G.intl.formatToPlainString(G.t["k2UNz+"], { days: n });
        case U.WT.MONTH:
            return i
                ? G.intl.formatToPlainString(G.t.erUSmA, { months: n })
                : G.intl.formatToPlainString(G.t.kridzK, { months: n });
        case U.WT.YEAR:
            return i
                ? G.intl.formatToPlainString(G.t.IfYQVC, { years: n })
                : G.intl.formatToPlainString(G.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ey(e, t) {
    switch (e) {
        case P.kM_.APPLE_PARTNER:
        case P.kM_.APPLE_ADVANCED_COMMERCE:
        case P.kM_.APPLE:
            return x[t];
        case P.kM_.GOOGLE:
            return V[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function eG(e, t) {
    return (0, b.ki)(e) || eR(t?.status);
}
function ew(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => U.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function ex(e) {
    return e.filter((e) => !U.JM.has(e.planId));
}
function eV(e, t, n, i) {
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
function eB(e, t) {
    return eV(e, t, 1, U.JM);
}
function eF(e, t, n) {
    return eV(e, n, t, U.pW);
}
function ek(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => U.JM.has(e.planId));
    if (null != t) {
        let n = p.A.get(t.planId);
        r()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = p.A.get(e.planId);
                if ((r()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let a = p.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return r()(null != a, "Missing planForInterval"), { ...e, planId: a.id };
            }));
    }
    return e;
}
function eH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = U.f5[e].fileSize;
    return (0, g.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function ej(e) {
    return null == e ? null : e.items.find((e) => U.pW.has(e.planId));
}
function eY(e) {
    let t = null != e ? k(e) : null;
    return null != t ? el(t.planId) : null;
}
let eW = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function eK(e) {
    return (0, A.RM)(A.G5, e);
}
function e$(e) {
    return (0, A.RM)(A.G3, e);
}
function eZ(e, t) {
    let n = (0, M.$g)(e.amount, e.currency),
        i = z(t);
    return `${n}/${i}`;
}
function eq(e) {
    return e;
}
function eQ(e) {
    return "isNitroLocked" in e;
}
function ez() {
    let e = (0, o.bG)([S.default], () => S.default.getCurrentUser());
    return (0, b.YE)(e, U.PremiumTypes.TIER_2);
}
function eX(e) {
    var t;
    let n = (0, I.N)("getOfferNoticeThreshold"),
        i = 0 !== n ? n : U.CQ;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case U.Tt:
                return U.h7;
            case U.yo:
                return U.CA;
        }
    else;
    return i;
}
function eJ(e) {
    return e0(e.map((e) => e.skuId));
}
function e0(e) {
    return e.reduce((e, t) => {
        let [n, i] = U.NL[t],
            a = 1;
        switch (n) {
            case U.T.HOUR:
                a = 1;
                break;
            case U.T.DAY:
                a = 24;
        }
        return e + a * i;
    }, 0);
}
let e1 = (e) => {
    let { planId: t, shouldUseCalculatedDiscount: n, isGift: i, priceOptions: a, subscriptionPlan: r } = e,
        s = U.XE[t];
    return n && (s = e2(r, i, a)), s;
};
function e2(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === U.WT.YEAR) {
        try {
            if (
                ((t = ((e) => {
                    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
                        a = U.En[t.skuId];
                    return null == a ? null : Y(a, !1, n, i);
                })({ subscriptionPlan: e, isGift: i, priceOptions: a })),
                null == t)
            )
                return;
            n = Y(e.id, !1, i, a);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function e3(e) {
    return null == e ? 0 : Math.max((0, C.m_)(new Date(), new Date(e)), 0);
}
let e4 = Object.freeze({
    isNewUser: eW,
    isPremiumAtLeast: b.CC,
    isPremium: b.ki,
    isPremiumExactly: b.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: Y,
    getDefaultPrice: H,
    getInterval: function (e) {
        let t = U.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, O.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: Q,
    getIntervalStringAsNoun: z,
    getPremiumType: X,
    getTierDisplayNameByPlanId: et,
    getDisplayName: J,
    getPremiumPlanOptions: es,
    formatInterval: function (e) {
        if (e === U.WT.YEAR) return G.intl.string(G.t.tfqrhj);
        if (e === U.WT.MONTH) return G.intl.string(G.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: ei,
    isPremiumSku: function (e) {
        return e === U.pe.TIER_0 || e === U.pe.TIER_1 || e === U.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === U.WT.MONTH) return t;
        if (e === U.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: D.f,
    getSkuIdForPlan: el,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case U.PremiumTypes.TIER_0:
                return U.pe.TIER_0;
            case U.PremiumTypes.TIER_1:
                return U.pe.TIER_1;
            case U.PremiumTypes.TIER_2:
                return U.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return X(e) === U.PremiumTypes.TIER_2 ? U.M4 : 0;
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
                          fractionalState: U.xc.NONE,
                          startsAt: l()(0),
                          endsAt: l()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: l()(0),
                          unactivatedUnits: [],
                      },
            r = null !== n && e.status === P.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, M.$g)(
                      r.invoiceItems
                          .filter((e) => U.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      r.currency,
                  )
                : (0, M.$g)(r.total, r.currency);
        if (S.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != a.currentEntitlementEndsAt ? a.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return G.intl.format(G.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === P.Dmq.CANCELED) return G.intl.format(G.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === P.Dmq.PAUSE_PENDING)
            return G.intl.format(G.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === P.Dmq.PAUSED)
            return a.fractionalState !== U.xc.NONE
                ? G.intl.format(G.t.Q18lRK, { renewalDate: a.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? G.intl.format(G.t.KTYQCg, { planName: G.intl.string(G.t.Ipxkog), price: s })
                      : G.intl.string(G.t.fMz6Lg)
                  : i
                    ? G.intl.format(G.t.zcgtzf, {
                          planName: G.intl.string(G.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : G.intl.format(G.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === P.Dmq.PAST_DUE) {
            let t = eA(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = l()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = l()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? G.intl.format(G.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: y.qm[e.paymentGateway],
                      paymentSourceLink: ey(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : G.intl.format(G.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        {
            var o;
            if (e.status === P.Dmq.BILLING_RETRY)
                return G.intl.format(G.t.EMTLOT, {
                    endDate: l()(e.currentPeriodStart).add(U.bx, "days").toDate(),
                    price: s,
                });
            if (e.status === P.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, L.isAndroid)()
                    ? G.intl.format(G.t["dtcxw+"], {
                          endDate: l()(e.currentPeriodStart).add(U.ph, "days").toDate(),
                          paymentGatewayName: y.qm[e.paymentGateway],
                          paymentSourceLink: ey(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : G.intl.format(G.t.EMTLOT, {
                          endDate: l()(e.currentPeriodStart).add(U.ph, "days").toDate(),
                          price: s,
                      });
            if (null != (o = e).paymentSourceId && eN(o.paymentSourceId))
                return G.intl.format(G.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === P.Dmq.UNPAID) return G.intl.format(G.t.CzTKom, { maxProcessingTimeInDays: U.G4 });
            if (e.isPurchasedExternally)
                return G.intl.format(G.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: y.qm[e.paymentGateway],
                    subscriptionManagementLink: ey(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eI(n, a.unactivatedUnits)),
                i
                    ? G.intl.format(G.t.Vl3cED, { planName: G.intl.string(G.t.Ipxkog), renewalDate: n, price: s })
                    : G.intl.format(G.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: eI,
    getUnactivatedFractionalPremiumDurationString: eT,
    isSwitchingPlansDisabled: eh,
    getSwitchingPlansDisabledMessage: eS,
    isNoneSubscription: h.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === P.Dmq.CANCELED || e.status === P.Dmq.PAUSE_PENDING) return n;
        r()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ec(t);
        });
        return null == i ||
            (0, h.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === P.Dmq.CANCELED || e.status === P.Dmq.PAUSE_PENDING) return n;
        r()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ec(t);
        });
        return (null == i || (0, h.m1)(i.subscriptionPlanId)) && (n = P.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: eC,
    getPremiumGuildIntervalPrice: eg,
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
    getBillingReviewSubheader: eL,
    getIntervalForInvoice: eD,
    getPremiumPlanItem: k,
    getGuildBoostPlanItem: ej,
    isBoostOnlySubscription: function (e) {
        return null != e && null == k(e) && null != ej(e);
    },
    getPremiumSkuIdForSubscription: eY,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = k(e);
            if (null != t) return X(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: eJ,
    castPremiumSubscriptionAsSkuId: eq,
    calculateDiscountPercentageForYearlyPlan: e2,
    getDaysSincePremium: e3,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, C.c_)(new Date(e.currentPeriodEnd), new Date())));
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
    canUseQuestOrbMultiplier: eK,
    hasFreeBoosts: function (e) {
        return (0, A.RM)(A.aE, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, A.RM)(A.GS, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, A.RM)(A.Zc, e);
    },
    canUseCollectibles: e$,
    canUseMonthlyOrbs: function (e) {
        return (0, T.Nh)(e?.perks, d.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return e$(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return eK(e);
    },
    formatPriceString: eZ,
    StreamQuality: F,
});
