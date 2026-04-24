n.d(t, {
    $Q: () => j,
    $k: () => eR,
    Ay: () => e3,
    CC: () => U.CC,
    D8: () => X,
    Dd: () => en,
    EJ: () => eW,
    EL: () => k,
    Em: () => eq,
    FJ: () => Z,
    FY: () => eP,
    GX: () => eV,
    Ge: () => eg,
    J$: () => eO,
    JM: () => W,
    Ke: () => q,
    LE: () => eM,
    L_: () => e0,
    Mn: () => J,
    Nc: () => eS,
    OU: () => er,
    Of: () => ev,
    Om: () => eH,
    PK: () => eL,
    Pg: () => eF,
    Q8: () => eN,
    RH: () => et,
    Rr: () => eU,
    TW: () => U.ki,
    Tm: () => e_,
    To: () => e2,
    U8: () => Q,
    UC: () => $,
    Uf: () => ef,
    YE: () => U.YE,
    Zb: () => eu,
    Zw: () => ee,
    _e: () => eT,
    aE: () => eB,
    aZ: () => ex,
    bx: () => el,
    e1: () => eZ,
    ee: () => ew,
    ff: () => eh,
    iv: () => eJ,
    jh: () => ep,
    ji: () => eI,
    kX: () => eA,
    ki: () => eD,
    l6: () => Y,
    m6: () => z,
    mH: () => eQ,
    mv: () => eK,
    nB: () => ea,
    nK: () => eX,
    pb: () => K,
    qn: () => ek,
    re: () => eG,
    sS: () => eC,
    tS: () => eb,
    tW: () => ey,
    xq: () => eE,
    y8: () => x,
    ys: () => ec,
    z4: () => ed,
}),
    n(667532),
    n(321073);
var i,
    a = n(284009),
    r = n.n(a),
    _ = n(989349),
    s = n.n(_),
    l = n(17928),
    o = n(441574),
    E = n(975807),
    d = n(366999),
    c = n(626584),
    u = n(367888),
    I = n(493740),
    T = n(965387),
    A = n(349871),
    S = n(832946),
    N = n(287809),
    O = n(615405),
    R = n(295405),
    f = n(97352),
    C = n(166403),
    p = n(739508),
    D = n(58703),
    L = n(927813),
    m = n(255438),
    h = n(723702),
    g = n(125584),
    U = n(474090),
    b = n(580630),
    P = n(652215),
    M = n(788868),
    G = n(88001),
    y = n(818348),
    v = n(985018),
    B = n(466919);
let w = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    F = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    V = new c.A("PremiumUtils.tsx");
var H = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function k(e) {
    return e.items.find((e) => M.JM.has(e.planId));
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        r = R.A.defaultPaymentSourceId ?? void 0,
        _ = C.A.getPremiumTypeSubscription();
    return (
        null != _ && null != _.paymentSourceId && (r = _.paymentSourceId),
        x(e, t, n, { paymentSourceId: r, currency: i }, a)
    );
}
function Y(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: r, currency: _, contextPlanPrices: s } = i;
    if (null != s) {
        let t = s[e];
        if (null != t)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != f.A.get(e)) {
        let i = P.lid.DEFAULT;
        n ? (i = P.lid.GIFT) : t && (i = P.lid.PREMIUM_TIER_1);
        let s = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.lid.DEFAULT },
                a = K(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === a.length &&
                    V.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let r = a.find((e) => e.currency === i.toLowerCase());
                return null != r
                    ? r
                    : null != t
                      ? K(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return a[0];
        })(e, { paymentSourceId: r, purchaseType: i, currency: _ });
        if (null == s) {
            let t = Error("Couldn't find price");
            throw (
                (a &&
                    (0, p.pM)(t, {
                        extra: { paymentSourceId: r },
                        tags: { purchaseType: i.toString(), planId: e, currency: _ ?? "unknown" },
                    }),
                t)
            );
        }
        return s;
    }
    let l = Error("Plan not found");
    throw (a && (0, p.pM)(l, { tags: { planId: e, currency: _ ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function K(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.lid.DEFAULT },
        i = (function (e, t) {
            let n = f.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, p.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
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
            (0, p.pM)(r, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== a.length) return a;
    }
    if (null == i.countryPrices.prices) {
        V.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, p.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function j(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function $(e, t, n) {
    let i,
        a,
        r = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        _ = (0, u._1)(e);
    null != _ && (i = M.hd[_.planId].premiumType);
    let s = (0, U.CC)(i, M.PremiumTypes.TIER_0),
        l = (0, U.CC)(i, M.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (a = M.pW.has(i.planId) ? l : !M.JM.has(i.planId) && s),
            (e = void 0 === n ? W(i.planId, a, !1, t) : x(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (r.amount += e.amount * i.quantity);
    }
    return j(r);
}
function Q(e, t, n, i) {
    return (
        null === t && (r()(null !== e, "Subscription can't be null"), (t = [])), $(null !== e ? eB(e, t) : ew(t), n, i)
    );
}
function q(e) {
    switch (e) {
        case M.Ff.MONTH:
            return v.intl.string(v.t.FPybU7);
        case M.Ff.YEAR:
            return v.intl.string(v.t.tfqrhj);
        case M.Ff.DAY:
        case M.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function X(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : M.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case M.WT.MONTH:
                let _ = v.intl.formatToPlainString(r === M.PremiumTypes.TIER_0 ? v.t.NPKsLz : v.t.poEovT, {
                    timeInterval: v.intl.string(v.t.FPybU7),
                });
                return a ? _ : v.intl.string(v.t.Mh9bTt);
            case M.WT.YEAR:
                let s = v.intl.formatToPlainString(r === M.PremiumTypes.TIER_0 ? v.t.NPKsLz : v.t.poEovT, {
                    timeInterval: v.intl.string(v.t.tfqrhj),
                });
                return a ? s : v.intl.string(v.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case M.WT.MONTH:
            if (1 !== i) return v.intl.formatToPlainString(v.t["0UlZnH"], { intervalCount: i });
            return v.intl.string(v.t.DKzs96);
        case M.WT.YEAR:
            return v.intl.string(v.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function Z(e) {
    switch (e) {
        case M.WT.MONTH:
            return v.intl.string(v.t.FPybU7);
        case M.WT.YEAR:
            return v.intl.string(v.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function z(e) {
    let t = M.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, p.pM)(n, { tags: { planId: e } }), n);
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case M.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? v.intl.format(v.t.TZXHNj, { duration: i })
                : n
                  ? v.intl.string(v.t["81iAgs"])
                  : v.intl.string(v.t["0efVPy"]);
        case M.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? v.intl.format(v.t.eqRhC7, { duration: i })
                : n
                  ? v.intl.string(v.t.UvzqY1)
                  : v.intl.string(v.t.eoVuBn);
        case M.gD.PREMIUM_MONTH_TIER_1:
            return n ? v.intl.string(v.t["g/dH5g"]) : v.intl.string(v.t["7O6qSq"]);
        case M.gD.PREMIUM_YEAR_TIER_1:
            return n ? v.intl.string(v.t.pdZJaq) : v.intl.string(v.t.Md5xbi);
        case M.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? v.intl.format(v.t.aI6QXz, { duration: i })
                : n
                  ? v.intl.string(v.t.SmVbHc)
                  : v.intl.string(v.t.FKYNC6);
        case M.gD.PREMIUM_GROUP_MONTH:
            return n ? v.intl.string(v.t.SmVbHc) : v.intl.string(v.t.FKYNC6);
        case M.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? v.intl.format(v.t["1wBcPi"], { duration: i })
                : n
                  ? v.intl.string(v.t.JIq4O1)
                  : v.intl.string(v.t["cfu/5d"]);
        case M.gD.PREMIUM_3_MONTH_TIER_2:
            return v.intl.string(v.t.wCbINr);
        case M.gD.PREMIUM_6_MONTH_TIER_2:
            return v.intl.string(v.t["e3/ArU"]);
        case M.gD.PREMIUM_MONTH_GUILD:
            return n ? v.intl.string(v.t["6ZR3By"]) : v.intl.string(v.t["h80cx/"]);
        case M.gD.PREMIUM_YEAR_GUILD:
            return n ? v.intl.string(v.t.YDpAzZ) : v.intl.string(v.t.ZHkls0);
        case M.gD.PREMIUM_3_MONTH_GUILD:
            return v.intl.string(v.t.EZHHB6);
        case M.gD.PREMIUM_6_MONTH_GUILD:
            return v.intl.string(v.t.X2KDO2);
        case M.gD.PREMIUM_MONTH_LEGACY:
            return v.intl.string(v.t.PD6k79);
        case M.gD.PREMIUM_YEAR_LEGACY:
            return v.intl.string(v.t.LtJgTC);
    }
    let a = Error("Unsupported plan");
    throw ((0, p.pM)(a, { tags: { planId: e } }), a);
}
function ee(e) {
    switch (e) {
        case M.pe.TIER_0:
            return v.intl.string(v.t["t9uG/o"]);
        case M.pe.TIER_1:
            return v.intl.string(v.t.FSOz78);
        case M.pe.TIER_2:
            return v.intl.string(v.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, p.pM)(t, { tags: { skuId: e } }), t);
}
function et(e) {
    let t = M.hd[e]?.premiumType,
        n = null != t ? M.Mr[t] : null;
    if (null != n) return v.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, p.pM)(i, { tags: { planId: e } }), i);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case M.PremiumTypes.TIER_0:
            return t ? "Basic" : v.intl.string(v.t["t9uG/o"]);
        case M.PremiumTypes.TIER_1:
            return t ? "Classic" : v.intl.string(v.t.FSOz78);
        case M.PremiumTypes.TIER_2:
            return v.intl.string(v.t.lG6a5x);
    }
}
function ei(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: a,
            hasDiscountApplied: r,
            activeDiscountInfo: _,
            renewalInvoicePreview: l,
            hasFractionalPremiumWithSub: o,
        } = e,
        d = M.hd[n],
        c = e$(W(d.id), d.interval),
        u =
            eD(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !N.default.getCurrentUser()?.hasFreePremium()),
        I = null != i && null == t.paymentGateway,
        T = t.status === P.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === P.lT7.OPEN,
        A = u ? P.Dmq.CANCELED : T ? P.Dmq.UNPAID : t.status,
        S = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        O = M.M4 + (a ? el(t.additionalPlans) : 0),
        R = I
            ? S
                ? v.intl.format(v.t["cd+hqB"], { price: i })
                : v.intl.format(v.t.NUkcpF, { price: i })
            : v.intl.string(v.t.zYx3Y6),
        f = I
            ? S
                ? v.intl.format(v.t.VsKcFB, { price: i })
                : v.intl.format(v.t.hJ5xEX, { price: i })
            : v.intl.string(v.t["8rSipI"]),
        C = I
            ? S
                ? v.intl.format(v.t["jRy6/J"], { price: i, num: O })
                : v.intl.format(v.t.tTNE8M, { price: i, num: O })
            : v.intl.format(v.t["U+z/HJ"], { num: O });
    switch (n) {
        case M.gD.PREMIUM_MONTH_TIER_0:
        case M.gD.PREMIUM_YEAR_TIER_0:
            switch (A) {
                case P.Dmq.CANCELED:
                    return I
                        ? S
                            ? v.intl.format(v.t["USi/nc"], { price: i })
                            : v.intl.format(v.t["FS//l2"], { price: i })
                        : v.intl.string(v.t.JshLzq);
                case P.Dmq.ACCOUNT_HOLD:
                    return I
                        ? S
                            ? v.intl.format(v.t["5mv+2i"], { price: i })
                            : v.intl.format(v.t.nkAEfZ, { price: i })
                        : v.intl.format(v.t.SsLIXS, {});
                case P.Dmq.UNPAID:
                    return v.intl.format(v.t.cmkbFB, {});
                case P.Dmq.PAUSE_PENDING:
                    let p = null != t.pauseEndsAt ? s()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != p
                        ? v.intl.format(v.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: p })
                        : v.intl.format(v.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (o) return R;
                    return v.intl.format(v.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.PAST_DUE:
                    return v.intl.format(v.t["d+0vwo"], {
                        endDate: (0, D.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return R;
            }
        case M.gD.PREMIUM_MONTH_TIER_1:
        case M.gD.PREMIUM_YEAR_TIER_1:
            switch (A) {
                case P.Dmq.CANCELED:
                    return I
                        ? S
                            ? v.intl.format(v.t.cXy8Bp, { price: i })
                            : v.intl.format(v.t["C/XsHt"], { price: i })
                        : v.intl.string(v.t.K6tYFa);
                case P.Dmq.ACCOUNT_HOLD:
                    return I
                        ? S
                            ? v.intl.format(v.t.HBkIBi, { price: i })
                            : v.intl.format(v.t.ZsO1Sx, { price: i })
                        : v.intl.format(v.t["0+/WH7"], {});
                case P.Dmq.UNPAID:
                    return v.intl.format(v.t.McIzwj, {});
                case P.Dmq.PAUSE_PENDING:
                    let L = null != t.pauseEndsAt ? s()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != L
                        ? v.intl.format(v.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: L })
                        : v.intl.format(v.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (o) return f;
                    return v.intl.format(v.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.PAST_DUE:
                    return v.intl.format(v.t["d+0vwo"], {
                        endDate: (0, D.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return f;
            }
        case M.gD.PREMIUM_MONTH_TIER_2:
        case M.gD.PREMIUM_YEAR_TIER_2:
        case M.gD.PREMIUM_3_MONTH_TIER_2:
        case M.gD.PREMIUM_6_MONTH_TIER_2:
        case M.gD.PREMIUM_GROUP_MONTH:
            switch (A) {
                case P.Dmq.CANCELED:
                    return I
                        ? S
                            ? v.intl.format(v.t.xoFgRh, { price: i, num: O })
                            : v.intl.format(v.t.nXdbKo, { price: i, num: O })
                        : v.intl.format(v.t.EcSdRH, { num: O });
                case P.Dmq.ACCOUNT_HOLD:
                    return I
                        ? S
                            ? v.intl.format(v.t["5C/0QG"], { price: i, num: O })
                            : v.intl.format(v.t.xfYkhu, { price: i, num: O })
                        : v.intl.format(v.t.ivjxcn, { num: O });
                case P.Dmq.UNPAID:
                    return v.intl.format(v.t["0HopYf"], { num: O });
                case P.Dmq.PAUSE_PENDING:
                    let m = null != t.pauseEndsAt ? s()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != m
                        ? v.intl.format(v.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: m })
                        : v.intl.format(v.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (o) return C;
                    return v.intl.format(v.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.BILLING_RETRY:
                    return v.intl.format(v.t["IlJ/HV"], {
                        endDate: s()(t.currentPeriodStart).add(M.bx, "days").toDate(),
                    });
                case P.Dmq.PAST_DUE:
                    return v.intl.format(v.t["d+0vwo"], {
                        endDate: (0, D.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return r
                        ? n === M.gD.PREMIUM_YEAR_TIER_2
                            ? v.intl.format(v.t["+qqh6g"], { percent: _?.percentage ?? M.Cq, regularPrice: c })
                            : S
                              ? v.intl.formatToPlainString(v.t["3ZiutU"], {
                                    percent: _?.percentage ?? M._$,
                                    regularPrice: c,
                                    numMonths: _?.duration ?? M.OJ,
                                })
                              : v.intl.formatToPlainString(v.t["G6+XOT"], {
                                    percent: _?.percentage ?? M._$,
                                    regularPrice: c,
                                    numMonths: _?.duration ?? M.OJ,
                                })
                        : C;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ea(e) {
    var t, n, i;
    let a,
        _,
        {
            renewalInvoicePreview: s,
            subscription: l,
            planId: o,
            includePremiumGuilds: E = !1,
            hasDiscountApplied: d = !1,
            activeDiscountInfo: c,
            hasFractionalPremiumWithSub: u = !1,
        } = e,
        I = f.A.get(o);
    return (
        r()(null != I, "Missing plan"),
        ei({
            subscription: l,
            planId: I.id,
            price:
                ((t = s),
                (n = l),
                (i = I),
                (_ =
                    null == (a = t.findInvoiceItemByPlanId(i.id))
                        ? x(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : a.amount),
                (0, b.CE)((0, b.$g)(_, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: E,
            hasDiscountApplied: d,
            activeDiscountInfo: c,
            renewalInvoicePreview: s,
            hasFractionalPremiumWithSub: u,
        })
    );
}
function er(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, S.m1)(t) ? null : J(t),
        a = n?.find((e) => {
            let { planId: t } = e;
            return M.pW.has(t);
        }),
        r = a?.planId === M.gD.PREMIUM_MONTH_GUILD || a?.planId === M.gD.PREMIUM_YEAR_GUILD ? v.t.Pi5yMJ : null,
        _ = null != r ? v.intl.formatToPlainString(r, { num: a?.quantity }) : void 0;
    if (null != i && null != _)
        return v.intl.formatToPlainString(v.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: _ });
    if (null != i) return i;
    if (null != _) return _;
    throw Error("Subscription without premium or premium guild subscription");
}
function e_(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === M.hd[i].skuId ? i : void 0,
        r = [];
    switch (t) {
        case M.pe.TIER_0:
            r = [M.gD.PREMIUM_YEAR_TIER_0, M.gD.PREMIUM_MONTH_TIER_0];
            break;
        case M.pe.TIER_1:
            r = [M.gD.PREMIUM_MONTH_TIER_1];
            break;
        case M.pe.TIER_2:
            r = [M.gD.PREMIUM_YEAR_TIER_2, M.gD.PREMIUM_MONTH_TIER_2];
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
    let t = M.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, p.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function el(e) {
    let t = f.A.getPlanIdsForSkus([eQ(M.pe.GUILD)]);
    r()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eo = new Set([
    M.gD.NONE_MONTH,
    M.gD.NONE_3_MONTH,
    M.gD.NONE_6_MONTH,
    M.gD.NONE_YEAR,
    M.gD.PREMIUM_MONTH_TIER_0,
    M.gD.PREMIUM_MONTH_TIER_1,
    M.gD.PREMIUM_MONTH_TIER_2,
    M.gD.PREMIUM_YEAR_TIER_0,
    M.gD.PREMIUM_YEAR_TIER_1,
    M.gD.PREMIUM_YEAR_TIER_2,
    M.gD.PREMIUM_3_MONTH_TIER_2,
    M.gD.PREMIUM_6_MONTH_TIER_2,
    M.gD.PREMIUM_GROUP_MONTH,
]);
function eE(e) {
    return eo.has(e);
}
function ed(e) {
    return M.pW.has(e);
}
function ec(e) {
    return eE(e) || ed(e);
}
function eu(e) {
    return null != e && e === M.gD.PREMIUM_GROUP_MONTH;
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
        let t = e.isPurchasedViaApple ? M.U1 : M.L9;
        return { days: t, expiresDate: s()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: s()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: s()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? M.a5 : M.EV;
        return { days: t, expiresDate: s()(e.currentPeriodStart).add(t, "days") };
    }
}
function eT(e, t, n, i) {
    let a = s()(i ? void 0 : e);
    if (t.length > 0) {
        let e = ez(t);
        a = a.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = s()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (a = a.add(t, "hours"));
    }
    return a.toDate();
}
function eA(e) {
    let t = ez(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === M.xc.NONE)) return "";
    let n = { days: v.t.fYmirx, hours: v.t["C3RO+g"], minutes: v.t.r77oHc },
        i = (0, d.Vb)((0, D.Tf)(0, t * L.A.Millis.HOUR));
    return (0, D.uN)(i, n);
}
function eS(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === P.Dmq.PAST_DUE;
}
function eN(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? v.intl.string(v.t["0rzJ4J"]) : v.intl.string(v.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = v.intl.string(v.t.a9Mdb3)),
        t
    );
}
function eO(e) {
    if (null == e) return !1;
    let t = R.A.getPaymentSource(e);
    return null != t && y.AD.has(t.type);
}
function eR(e) {
    return e.isPurchasedExternally
        ? e.status === P.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  a = el(n);
              return 0 === (null != t ? el(t.additionalPlans) : null) && 0 !== a ? P.Dmq.CANCELED : i;
          })(e) === P.Dmq.CANCELED;
}
function ef(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: a, fractionalPremiumInfo: _ } = e,
        { planId: s, additionalPlans: l } = t,
        o = f.A.get(s);
    r()(null != o, "Missing plan");
    let d = el(l),
        c = em(t.planId, t.paymentSourceId, t.currency, n).amount * d;
    if (null != a) {
        let e = a.invoiceItems.find((e) => M.pW.has(e.subscriptionPlanId));
        null != e && (c = e.amount);
    }
    i = i ?? (0, b.$g)(c, t.currency);
    let u = a?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (eR(t))
        return t.isPurchasedViaGoogle
            ? v.intl.format(v.t["3/WTrI"], { quantity: d })
            : u
              ? v.intl.format(v.t["0ozBSB"], { quantity: d, rate: (0, b.CE)(i, o.interval, o.intervalCount) })
              : v.intl.format(v.t["yjsv/s"], { quantity: d, rate: (0, b.CE)(i, o.interval, o.intervalCount) });
    switch (t.status) {
        case P.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? v.intl.format(v.t.Nlf3nc, { quantity: d, boostQuantity: d })
                : u
                  ? v.intl.format(v.t.oiRy7v, {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, b.CE)(i, o.interval, o.intervalCount),
                    })
                  : v.intl.format(v.t["0QxOAi"], {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, b.CE)(i, o.interval, o.intervalCount),
                    });
        case P.Dmq.PAUSE_PENDING:
        case P.Dmq.PAUSED:
            if (null != _ && !_.isFractionalPremiumActive) return v.intl.string(v.t.CduWAm);
            return v.intl.format(v.t["5iud9s"], { quantity: d });
        case P.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return v.intl.format(v.t["d+0vwo"], {
                    endDate: (0, D.i$)(eI(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? v.intl.format(v.t["5iud9s"], { quantity: d })
                : u
                  ? v.intl.format(v.t.eDwrLA, { quantity: d, rate: (0, b.CE)(i, o.interval, o.intervalCount) })
                  : v.intl.format(v.t.ijSDcI, { quantity: d, rate: (0, b.CE)(i, o.interval, o.intervalCount) });
    }
}
function eC(e, t, n) {
    let i,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = x(e.id, !1, a, t);
        } catch {
            i = W(e.id, !1, a);
        }
    else i = W(e.id, !1, a);
    let r = (0, b.$g)(i.amount, i.currency);
    return e.currency !== y.Yr.USD && !0 === n && (r = r.concat("*")), r;
}
function ep(e, t, n) {
    let i = eC(e, t, n);
    return (0, b.CE)(i, e.interval, e.intervalCount);
}
function eD(e) {
    let { status: t, renewalMutations: n } = e;
    return t === P.Dmq.CANCELED || (null != n && (0, S.m1)(n.planId) && !e.isPurchasedExternally);
}
function eL(e) {
    return e === P.Dmq.PAST_DUE || e === P.Dmq.ACCOUNT_HOLD || e === P.Dmq.BILLING_RETRY;
}
function em(e, t, n, i) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: O.A.ipCountryCodeWithFallback, currency: n },
        r = f.A.get(e);
    if (null == r) {
        let t = Error("Unsupported plan");
        throw ((0, p.pM)(t, { tags: { planId: e } }), t);
    }
    let _ = f.A.getForSkuAndInterval(eQ(M.pe.GUILD), r.interval, r.intervalCount);
    if (null == _) {
        let t = Error("Unsupported plan");
        throw ((0, p.pM)(t, { tags: { planId: e } }), t);
    }
    return x(_.id, (0, U.ki)(i), !1, a);
}
function eh(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case M.gD.PREMIUM_MONTH_TIER_0:
                return v.intl.string(v.t["0ggVqN"]);
            case M.gD.PREMIUM_YEAR_TIER_0:
                return v.intl.string(v.t["jm+ZQw"]);
            case M.gD.PREMIUM_MONTH_TIER_1:
                return v.intl.string(v.t.uph4Jx);
            case M.gD.PREMIUM_YEAR_TIER_1:
                return v.intl.string(v.t["D/l7Yt"]);
            case M.gD.PREMIUM_MONTH_TIER_2:
            case M.gD.PREMIUM_GROUP_MONTH:
                return v.intl.string(v.t["5l1MuV"]);
            case M.gD.PREMIUM_YEAR_TIER_2:
                return v.intl.string(v.t.G0mISV);
        }
    switch (i) {
        case M.gD.PREMIUM_MONTH_TIER_0:
            return n ? v.intl.string(v.t.cRCCJ3) : v.intl.string(v.t["/G3aKw"]);
        case M.gD.PREMIUM_YEAR_TIER_0:
            return n ? v.intl.string(v.t.cRCCJ3) : v.intl.string(v.t["2eQpsL"]);
        case M.gD.PREMIUM_MONTH_TIER_1:
            return n ? v.intl.string(v.t.cRCCJ3) : v.intl.string(v.t.gueLg5);
        case M.gD.PREMIUM_YEAR_TIER_1:
            return n ? v.intl.string(v.t.cRCCJ3) : v.intl.string(v.t["MhH/vW"]);
        case M.gD.PREMIUM_MONTH_TIER_2:
            return n ? v.intl.string(v.t.cRCCJ3) : v.intl.string(v.t.LQVQIq);
        case M.gD.PREMIUM_GROUP_MONTH:
            return v.intl.formatToPlainString(B.default.LwdrNi, { premiumGroupProductName: (0, G.DP)() });
        case M.gD.PREMIUM_YEAR_TIER_2:
            return n ? v.intl.string(v.t.cRCCJ3) : v.intl.string(v.t["0nfg1x"]);
        case M.gD.PREMIUM_3_MONTH_TIER_2:
        case M.gD.PREMIUM_6_MONTH_TIER_2:
            return v.intl.formatToPlainString(v.t.BCD4fT, { intervalCount: t.intervalCount });
        case M.gD.NONE_MONTH:
        case M.gD.NONE_YEAR:
        case M.gD.NONE_3_MONTH:
        case M.gD.NONE_6_MONTH:
        case M.gD.PREMIUM_MONTH_GUILD:
        case M.gD.PREMIUM_YEAR_GUILD:
        case M.gD.PREMIUM_3_MONTH_GUILD:
        case M.gD.PREMIUM_6_MONTH_GUILD:
            return v.intl.string(v.t.eUEeCt);
    }
    let a = Error("User is purchasing an unsupported plan");
    throw ((0, p.pM)(a, { tags: { planId: i } }), a);
}
function eg(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = f.A.get(t);
    return r()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eU() {
    let e = y.Yr.USD;
    try {
        e = W(M.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eb(e) {
    let { intervalType: t = M.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case M.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? v.intl.formatToPlainString(v.t.fRNBRX, { weeks: n / 7 })
                    : v.intl.formatToPlainString(v.t.EIpHEj, { weeks: n / 7 });
            return i
                ? v.intl.formatToPlainString(v.t["6Cdzoy"], { days: n })
                : v.intl.formatToPlainString(v.t["kbBj/h"], { days: n });
        case M.WT.MONTH:
            return i
                ? v.intl.formatToPlainString(v.t.x5MgxS, { months: n })
                : v.intl.formatToPlainString(v.t["4SEnCZ"], { months: n });
        case M.WT.YEAR:
            return i
                ? v.intl.formatToPlainString(v.t["h+63yl"], { years: n })
                : v.intl.formatToPlainString(v.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eP(e) {
    let { intervalType: t = M.WT.MONTH, intervalCount: n = 1 } = e,
        i = eU(),
        a = (0, b.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case M.WT.DAY:
            if (n >= 7 && n % 7 == 0) return v.intl.formatToPlainString(v.t.C6i5Jt, { weeks: n / 7, price: a });
            return v.intl.formatToPlainString(v.t.cR9ifw, { days: n, price: a });
        case M.WT.MONTH:
            return v.intl.formatToPlainString(v.t["8FZfNo"], { months: n, price: a });
        case M.WT.YEAR:
            return v.intl.formatToPlainString(v.t.xzAcST, { years: n, price: a });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eM(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eP({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function eG(e) {
    let { intervalType: t = M.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case M.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? v.intl.formatToPlainString(v.t.iVZYyl, { weeks: n / 7 })
                    : v.intl.formatToPlainString(v.t.EmoBD2, { weeks: n / 7 });
            return i
                ? v.intl.formatToPlainString(v.t.jzH70Z, { days: n })
                : v.intl.formatToPlainString(v.t["k2UNz+"], { days: n });
        case M.WT.MONTH:
            return i
                ? v.intl.formatToPlainString(v.t.erUSmA, { months: n })
                : v.intl.formatToPlainString(v.t.kridzK, { months: n });
        case M.WT.YEAR:
            return i
                ? v.intl.formatToPlainString(v.t.IfYQVC, { years: n })
                : v.intl.formatToPlainString(v.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ey(e, t) {
    switch (e) {
        case P.kM_.APPLE_PARTNER:
        case P.kM_.APPLE_ADVANCED_COMMERCE:
        case P.kM_.APPLE:
            return w[t];
        case P.kM_.GOOGLE:
            return F[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function ev(e, t) {
    return (0, U.ki)(e) || eL(t?.status);
}
function eB(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => M.JM.has(e.planId));
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
    return e.filter((e) => !M.JM.has(e.planId));
}
function eF(e, t, n, i) {
    r()(i.has(t), "Expected planId in group");
    let a = !1,
        _ = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((a = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!a) {
        let i = { planId: t, quantity: n },
            a = e.items.find((e) => e.planId === t);
        null != a && (i.id = a.id), _.push(i);
    }
    return _.filter((e) => 0 !== e.quantity);
}
function eV(e, t) {
    return eF(e, t, 1, M.JM);
}
function eH(e, t, n) {
    return eF(e, n, t, M.pW);
}
function ek(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => M.JM.has(e.planId));
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
function eW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = M.f5[e].fileSize;
    return (0, m.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function eY(e) {
    return null == e ? null : e.items.find((e) => M.pW.has(e.planId));
}
function ex(e) {
    let t = null != e ? k(e) : null;
    return null != t ? es(t.planId) : null;
}
let eK = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function ej(e) {
    return (0, I.RM)(I.G3, e);
}
function e$(e, t) {
    let n = (0, b.$g)(e.amount, e.currency),
        i = Z(t);
    return `${n}/${i}`;
}
function eQ(e) {
    return e;
}
function eq(e) {
    return "isNitroLocked" in e;
}
function eX() {
    let e = (0, l.bG)([N.default], () => N.default.getCurrentUser());
    return (0, U.YE)(e, M.PremiumTypes.TIER_2);
}
function eZ(e) {
    var t, n, i;
    let a = (0, T.N)("getOfferNoticeThreshold");
    if (0 !== a) return a;
    if (null != (t = e) && "trial_id" in t) {
        return (n = e.trial_id) === M.Tt ? M.h7 : n === M.yo ? M.CA : M.CQ;
    }
    return null != (i = e) && "discount_id" in i, M.CQ;
}
function ez(e) {
    return eJ(e.map((e) => e.skuId));
}
function eJ(e) {
    return e.reduce((e, t) => {
        let [n, i] = M.NL[t],
            a = 1;
        switch (n) {
            case M.T.HOUR:
                a = 1;
                break;
            case M.T.DAY:
                a = 24;
        }
        return e + a * i;
    }, 0);
}
let e0 = (e) => {
    let { planId: t, shouldUseCalculatedDiscount: n, isGift: i, priceOptions: a, subscriptionPlan: r } = e,
        _ = M.XE[t];
    return n && (_ = e1(r, i, a)), _;
};
function e1(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === M.WT.YEAR) {
        try {
            if (
                ((t = ((e) => {
                    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
                        a = M.En[t.skuId];
                    return null == a ? null : x(a, !1, n, i);
                })({ subscriptionPlan: e, isGift: i, priceOptions: a })),
                null == t)
            )
                return;
            n = x(e.id, !1, i, a);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function e2(e) {
    return null == e ? 0 : Math.max((0, D.m_)(new Date(), new Date(e)), 0);
}
let e3 = Object.freeze({
    isNewUser: eK,
    isPremiumAtLeast: U.CC,
    isPremium: U.ki,
    isPremiumExactly: U.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: x,
    getDefaultPrice: W,
    getInterval: function (e) {
        let t = M.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, p.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: X,
    getIntervalStringAsNoun: Z,
    getPremiumType: z,
    getTierDisplayNameByPlanId: et,
    getDisplayName: J,
    getPremiumPlanOptions: e_,
    formatInterval: function (e) {
        if (e === M.WT.YEAR) return v.intl.string(v.t.tfqrhj);
        if (e === M.WT.MONTH) return v.intl.string(v.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: ei,
    isPremiumSku: function (e) {
        return e === M.pe.TIER_0 || e === M.pe.TIER_1 || e === M.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === M.WT.MONTH) return t;
        if (e === M.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: g.f,
    getSkuIdForPlan: es,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case M.PremiumTypes.TIER_0:
                return M.pe.TIER_0;
            case M.PremiumTypes.TIER_1:
                return M.pe.TIER_1;
            case M.PremiumTypes.TIER_2:
                return M.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return z(e) === M.PremiumTypes.TIER_2 ? M.M4 : 0;
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
                          fractionalState: M.xc.NONE,
                          startsAt: s()(0),
                          endsAt: s()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: s()(0),
                          unactivatedUnits: [],
                      },
            r = null !== n && e.status === P.Dmq.PAST_DUE ? n : t,
            _ = i
                ? (0, b.$g)(
                      r.invoiceItems
                          .filter((e) => M.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      r.currency,
                  )
                : (0, b.$g)(r.total, r.currency);
        if (N.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != a.currentEntitlementEndsAt ? a.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return v.intl.format(v.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === P.Dmq.CANCELED) return v.intl.format(v.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === P.Dmq.PAUSE_PENDING)
            return v.intl.format(v.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === P.Dmq.PAUSED)
            return a.fractionalState !== M.xc.NONE
                ? v.intl.format(v.t.Q18lRK, { renewalDate: a.endsAt.toDate(), price: _ })
                : null == e.pauseEndsAt
                  ? i
                      ? v.intl.format(v.t.KTYQCg, { planName: v.intl.string(v.t.Ipxkog), price: _ })
                      : v.intl.string(v.t.fMz6Lg)
                  : i
                    ? v.intl.format(v.t.zcgtzf, {
                          planName: v.intl.string(v.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: _,
                      })
                    : v.intl.format(v.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === P.Dmq.PAST_DUE) {
            let t = eI(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = s()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = s()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? v.intl.format(v.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: y.qm[e.paymentGateway],
                      paymentSourceLink: ey(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : v.intl.format(v.t.qEIzyi, { endDate: t.toDate(), price: _ });
        }
        {
            var l;
            if (e.status === P.Dmq.BILLING_RETRY)
                return v.intl.format(v.t.EMTLOT, {
                    endDate: s()(e.currentPeriodStart).add(M.bx, "days").toDate(),
                    price: _,
                });
            if (e.status === P.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, h.isAndroid)()
                    ? v.intl.format(v.t["dtcxw+"], {
                          endDate: s()(e.currentPeriodStart).add(M.ph, "days").toDate(),
                          paymentGatewayName: y.qm[e.paymentGateway],
                          paymentSourceLink: ey(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : v.intl.format(v.t.EMTLOT, {
                          endDate: s()(e.currentPeriodStart).add(M.ph, "days").toDate(),
                          price: _,
                      });
            if (null != (l = e).paymentSourceId && eO(l.paymentSourceId))
                return v.intl.format(v.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === P.Dmq.UNPAID) return v.intl.format(v.t.CzTKom, { maxProcessingTimeInDays: M.G4 });
            if (e.isPurchasedExternally)
                return v.intl.format(v.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: y.qm[e.paymentGateway],
                    subscriptionManagementLink: ey(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eT(n, a.unactivatedUnits)),
                i
                    ? v.intl.format(v.t.Vl3cED, { planName: v.intl.string(v.t.Ipxkog), renewalDate: n, price: _ })
                    : v.intl.format(v.t.Q18lRK, { renewalDate: n, price: _ })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: eT,
    getUnactivatedFractionalPremiumDurationString: eA,
    isSwitchingPlansDisabled: eS,
    getSwitchingPlansDisabledMessage: eN,
    isNoneSubscription: S.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === P.Dmq.CANCELED || e.status === P.Dmq.PAUSE_PENDING) return n;
        r()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eE(t);
        });
        return null == i ||
            (0, S.m1)(i.subscriptionPlanId) ||
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
            return eE(t);
        });
        return (null == i || (0, S.m1)(i.subscriptionPlanId)) && (n = P.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: eD,
    getPremiumGuildIntervalPrice: em,
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
    getBillingReviewSubheader: eh,
    getIntervalForInvoice: eg,
    getPremiumPlanItem: k,
    getGuildBoostPlanItem: eY,
    isBoostOnlySubscription: function (e) {
        return null != e && null == k(e) && null != eY(e);
    },
    getPremiumSkuIdForSubscription: ex,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = k(e);
            if (null != t) return z(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: ez,
    castPremiumSubscriptionAsSkuId: eQ,
    calculateDiscountPercentageForYearlyPlan: e1,
    getDaysSincePremium: e2,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, D.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return (0, I.RM)(I.gQ, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, I.RM)(I.JK, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, I.RM)(I.He, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, I.RM)(I.ii, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, I.RM)(I.u6, e);
    },
    canUseBadges: function (e) {
        return (0, I.RM)(I.nI, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, I.RM)(I.DG, e);
    },
    canEditDiscriminator: function (e) {
        return (0, I.RM)(I.nh, e);
    },
    hasBoostDiscount: function (e) {
        return (0, I.RM)(I._V, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, I.RM)(I.OW, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, I.RM)(I._w, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, I.RM)(I.Qz, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, I.RM)(I.Pm, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, I.RM)(I.x, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, I.RM)(I.cS, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, I.RM)(I.T7, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, I.RM)(I.lx, e);
    },
    canUseClientThemes: function (e) {
        return (0, I.RM)(I.zL, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? (0, I.RM)(I.sj, t) : "mid" === e && (0, I.RM)(I.II, t);
    },
    canUseQuestOrbMultiplier: function (e) {
        return (0, I.RM)(I.G5, e);
    },
    hasFreeBoosts: function (e) {
        return (0, I.RM)(I.aE, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, I.RM)(I.GS, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, I.RM)(I.Zc, e);
    },
    canUseCollectibles: ej,
    canUseMonthlyOrbs: function (e) {
        return (0, A.Nh)(e?.perks, o.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ej(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return (0, A.Nh)(e?.perks, o.bb.MORE_QUEST_ORBS);
    },
    formatPriceString: e$,
    StreamQuality: H,
});
