(n.d(t, {
    $Q: () => X,
    $k: () => eC,
    Ay: () => tn,
    CC: () => r.CC,
    D8: () => J,
    Dd: () => ea,
    EJ: () => eY,
    EL: () => j,
    Em: () => e0,
    FJ: () => ee,
    FY: () => eU,
    GX: () => eH,
    Ge: () => eb,
    J$: () => eN,
    JM: () => W,
    Ke: () => Q,
    LE: () => ew,
    L_: () => e4,
    Mn: () => en,
    Nc: () => eg,
    OU: () => eo,
    Of: () => ek,
    Om: () => ej,
    PK: () => ey,
    Pg: () => eV,
    Pr: () => K,
    Q8: () => eS,
    RH: () => er,
    Rr: () => eM,
    TW: () => r.ki,
    Tm: () => ed,
    To: () => tt,
    U8: () => q,
    UC: () => Z,
    Uf: () => eO,
    VA: () => e7,
    XN: () => te,
    YE: () => r.YE,
    Zb: () => ef,
    Zw: () => ei,
    _J: () => eQ,
    _e: () => eT,
    aE: () => eF,
    aZ: () => e$,
    bx: () => eu,
    e1: () => e2,
    ee: () => eB,
    ff: () => ev,
    iv: () => e5,
    ji: () => eI,
    kX: () => em,
    ki: () => eL,
    l6: () => Y,
    m6: () => et,
    mH: () => eJ,
    mv: () => ez,
    nB: () => el,
    nK: () => e1,
    pb: () => z,
    qn: () => eW,
    re: () => eG,
    sS: () => eR,
    tS: () => eP,
    tW: () => ex,
    xq: () => eE,
    y8: () => $,
    ys: () => eh,
    z4: () => eA,
    z_: () => e9,
}),
    n(667532),
    n(321073));
var i,
    r = n(474090),
    a = n(582128),
    s = n(284009),
    l = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(17928),
    u = n(441574),
    _ = n(975807),
    E = n(366999),
    A = n(930767),
    h = n(626584),
    f = n(981088),
    I = n(367888),
    p = n(836714),
    T = n(219882),
    m = n(349871),
    g = n(832946),
    S = n(287809),
    N = n(615405),
    C = n(295405),
    O = n(97352),
    R = n(166403),
    L = n(739508),
    y = n(58703),
    D = n(927813),
    v = n(255438),
    b = n(125584),
    M = n(580630),
    P = n(652215),
    U = n(202541),
    w = n(88001),
    G = n(818348),
    x = n(375708),
    k = n(148155);
let F = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    B = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    V = new h.A("PremiumUtils.tsx");
var H = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function j(e) {
    return e.items.find((e) => U.JM.has(e.planId));
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = C.A.defaultPaymentSourceId ?? void 0,
        s = R.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        $(e, t, n, { paymentSourceId: a, currency: i }, r)
    );
}
function Y(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function K(e, t, n) {
    let i = a.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return a.useMemo(
        () => ({
            priceOptions: Y(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: s, contextPlanPrices: l } = i;
    if (null != l) {
        let t = l[e],
            n = null != s && null != t && t.currency !== s;
        if (null != t && !n)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != O.A.get(e)) {
        let i = P.lid.DEFAULT;
        n ? (i = P.lid.GIFT) : t && (i = P.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.lid.DEFAULT },
                r = z(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    V.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let a = r.find((e) => e.currency === i.toLowerCase());
                return null != a
                    ? a
                    : null != t
                      ? z(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: a, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                r &&
                    (0, L.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, L.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function z(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.lid.DEFAULT },
        i = (function (e, t) {
            let n = O.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, L.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    V.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`)
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            (V.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                V.info(`prices: ${r}`));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, L.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        V.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, L.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function X(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function Z(e, t, n) {
    let i,
        a,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        l = (0, I._1)(e);
    null != l && (i = U.hd[l.planId].premiumType);
    let o = (0, r.CC)(i, U.PremiumTypes.TIER_0),
        d = (0, r.CC)(i, U.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        ((a = U.pW.has(i.planId) ? d : !U.JM.has(i.planId) && o),
            (e = void 0 === n ? W(i.planId, a, !1, t) : $(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity));
    }
    return X(s);
}
function q(e, t, n, i) {
    return (
        null === t && (l()(null !== e, "Subscription can't be null"), (t = [])), Z(null !== e ? eF(e, t) : eB(t), n, i)
    );
}
function Q(e) {
    switch (e) {
        case U.Ff.MONTH:
            return x.intl.string(x.t.FPybU7);
        case U.Ff.YEAR:
            return x.intl.string(x.t.tfqrhj);
        case U.Ff.DAY:
        case U.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function J(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : U.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case U.WT.MONTH:
                let s = x.intl.formatToPlainString(a === U.PremiumTypes.TIER_0 ? x.t.NPKsLz : x.t.poEovT, {
                    timeInterval: x.intl.string(x.t.FPybU7),
                });
                return r ? s : x.intl.string(x.t.Mh9bTt);
            case U.WT.YEAR:
                let l = x.intl.formatToPlainString(a === U.PremiumTypes.TIER_0 ? x.t.NPKsLz : x.t.poEovT, {
                    timeInterval: x.intl.string(x.t.tfqrhj),
                });
                return r ? l : x.intl.string(x.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case U.WT.MONTH:
            if (1 !== i) return x.intl.formatToPlainString(x.t["0UlZnH"], { intervalCount: i });
            return x.intl.string(x.t.DKzs96);
        case U.WT.YEAR:
            return x.intl.string(x.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function ee(e) {
    switch (e) {
        case U.WT.MONTH:
            return x.intl.string(x.t.FPybU7);
        case U.WT.YEAR:
            return x.intl.string(x.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function et(e) {
    let t = U.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, L.pM)(n, { tags: { planId: e } }), n);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case U.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? x.intl.format(x.t.TZXHNj, { duration: i })
                : n
                  ? x.intl.string(x.t["81iAgs"])
                  : x.intl.string(x.t["0efVPy"]);
        case U.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? x.intl.format(x.t.eqRhC7, { duration: i })
                : n
                  ? x.intl.string(x.t.UvzqY1)
                  : x.intl.string(x.t.eoVuBn);
        case U.gD.PREMIUM_MONTH_TIER_1:
            return n ? x.intl.string(x.t["g/dH5g"]) : x.intl.string(x.t["7O6qSq"]);
        case U.gD.PREMIUM_YEAR_TIER_1:
            return n ? x.intl.string(x.t.pdZJaq) : x.intl.string(x.t.Md5xbi);
        case U.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? x.intl.format(x.t.aI6QXz, { duration: i })
                : n
                  ? x.intl.string(x.t.SmVbHc)
                  : x.intl.string(x.t.FKYNC6);
        case U.gD.PREMIUM_GROUP_MONTH:
            return n
                ? x.intl.string(x.t.SmVbHc)
                : x.intl.formatToPlainString(k.default["8bPDtb"], { premiumGroupProductName: (0, w.DP)() });
        case U.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? x.intl.format(x.t["1wBcPi"], { duration: i })
                : n
                  ? x.intl.string(x.t.JIq4O1)
                  : x.intl.string(x.t["cfu/5d"]);
        case U.gD.PREMIUM_3_MONTH_TIER_2:
            return x.intl.string(x.t.wCbINr);
        case U.gD.PREMIUM_6_MONTH_TIER_2:
            return x.intl.string(x.t["e3/ArU"]);
        case U.gD.PREMIUM_MONTH_GUILD:
            return n ? x.intl.string(x.t["6ZR3By"]) : x.intl.string(x.t["h80cx/"]);
        case U.gD.PREMIUM_YEAR_GUILD:
            return n ? x.intl.string(x.t.YDpAzZ) : x.intl.string(x.t.ZHkls0);
        case U.gD.PREMIUM_3_MONTH_GUILD:
            return x.intl.string(x.t.EZHHB6);
        case U.gD.PREMIUM_6_MONTH_GUILD:
            return x.intl.string(x.t.X2KDO2);
        case U.gD.PREMIUM_MONTH_LEGACY:
            return x.intl.string(x.t.PD6k79);
        case U.gD.PREMIUM_YEAR_LEGACY:
            return x.intl.string(x.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, L.pM)(r, { tags: { planId: e } }), r);
}
function ei(e) {
    switch (e) {
        case U.pe.TIER_0:
            return x.intl.string(x.t["t9uG/o"]);
        case U.pe.TIER_1:
            return x.intl.string(x.t.FSOz78);
        case U.pe.TIER_2:
            return x.intl.string(x.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, L.pM)(t, { tags: { skuId: e } }), t);
}
function er(e) {
    let t = U.hd[e]?.premiumType,
        n = null != t ? U.Mr[t] : null;
    if (null != n) return x.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, L.pM)(i, { tags: { planId: e } }), i);
}
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case U.PremiumTypes.TIER_0:
            return t ? "Basic" : x.intl.string(x.t["t9uG/o"]);
        case U.PremiumTypes.TIER_1:
            return t ? "Classic" : x.intl.string(x.t.FSOz78);
        case U.PremiumTypes.TIER_2:
            return x.intl.string(x.t.lG6a5x);
    }
}
function es(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoiceWithoutEntitlementsPreview: l,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: c,
            fractionalPremiumInfo: u,
        } = e,
        E = U.hd[n],
        A = eq(W(E.id), E.interval),
        h = null != o && 0 === o.subtotal,
        f =
            eL(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !S.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        I = null != i && null == t.paymentGateway,
        p = t.status === P.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === P.lT7.OPEN,
        T = f ? P.Dmq.CANCELED : p ? P.Dmq.UNPAID : t.status,
        m = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        g = U.M4 + (r ? eu(t.additionalPlans) : 0),
        N = I
            ? m
                ? x.intl.format(x.t["cd+hqB"], { price: i })
                : x.intl.format(x.t.NUkcpF, { price: i })
            : x.intl.string(x.t.zYx3Y6),
        C = I
            ? m
                ? x.intl.format(x.t.VsKcFB, { price: i })
                : x.intl.format(x.t.hJ5xEX, { price: i })
            : x.intl.string(x.t["8rSipI"]),
        O = I
            ? m
                ? x.intl.format(x.t["jRy6/J"], { price: i, num: g })
                : x.intl.format(x.t.tTNE8M, { price: i, num: g })
            : x.intl.format(x.t["U+z/HJ"], { num: g });
    switch (n) {
        case U.gD.PREMIUM_MONTH_TIER_0:
        case U.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case P.Dmq.CANCELED:
                    return I
                        ? m
                            ? x.intl.format(x.t["USi/nc"], { price: i })
                            : x.intl.format(x.t["FS//l2"], { price: i })
                        : x.intl.string(x.t.JshLzq);
                case P.Dmq.ACCOUNT_HOLD:
                    return I
                        ? m
                            ? x.intl.format(x.t["5mv+2i"], { price: i })
                            : x.intl.format(x.t.nkAEfZ, { price: i })
                        : x.intl.format(x.t.SsLIXS, {});
                case P.Dmq.UNPAID:
                    return x.intl.format(x.t.cmkbFB, {});
                case P.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? x.intl.format(x.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : x.intl.format(x.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (c) return N;
                    return x.intl.format(x.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.PAST_DUE:
                    return x.intl.format(x.t["d+0vwo"], {
                        endDate: (0, y.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return N;
            }
        case U.gD.PREMIUM_MONTH_TIER_1:
        case U.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case P.Dmq.CANCELED:
                    return I
                        ? m
                            ? x.intl.format(x.t.cXy8Bp, { price: i })
                            : x.intl.format(x.t["C/XsHt"], { price: i })
                        : x.intl.string(x.t.K6tYFa);
                case P.Dmq.ACCOUNT_HOLD:
                    return I
                        ? m
                            ? x.intl.format(x.t.HBkIBi, { price: i })
                            : x.intl.format(x.t.ZsO1Sx, { price: i })
                        : x.intl.format(x.t["0+/WH7"], {});
                case P.Dmq.UNPAID:
                    return x.intl.format(x.t.McIzwj, {});
                case P.Dmq.PAUSE_PENDING:
                    let L = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != L
                        ? x.intl.format(x.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: L })
                        : x.intl.format(x.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (c) return C;
                    return x.intl.format(x.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.PAST_DUE:
                    return x.intl.format(x.t["d+0vwo"], {
                        endDate: (0, y.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return C;
            }
        case U.gD.PREMIUM_MONTH_TIER_2:
        case U.gD.PREMIUM_YEAR_TIER_2:
        case U.gD.PREMIUM_3_MONTH_TIER_2:
        case U.gD.PREMIUM_6_MONTH_TIER_2:
        case U.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case P.Dmq.CANCELED:
                    return I
                        ? m
                            ? x.intl.format(x.t.xoFgRh, { price: i, num: g })
                            : x.intl.format(x.t.nXdbKo, { price: i, num: g })
                        : x.intl.format(x.t.EcSdRH, { num: g });
                case P.Dmq.ACCOUNT_HOLD:
                    return I
                        ? m
                            ? x.intl.format(x.t["5C/0QG"], { price: i, num: g })
                            : x.intl.format(x.t.xfYkhu, { price: i, num: g })
                        : x.intl.format(x.t.ivjxcn, { num: g });
                case P.Dmq.UNPAID:
                    return x.intl.format(x.t["0HopYf"], { num: g });
                case P.Dmq.PAUSE_PENDING:
                    let D = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != D
                        ? x.intl.format(x.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: D })
                        : x.intl.format(x.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case P.Dmq.PAUSED:
                    if (c) return O;
                    return x.intl.format(x.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case P.Dmq.BILLING_RETRY:
                    return x.intl.format(x.t["IlJ/HV"], {
                        endDate: d()(t.currentPeriodStart).add(U.bx, "days").toDate(),
                    });
                case P.Dmq.PAST_DUE:
                    return x.intl.format(x.t["d+0vwo"], {
                        endDate: (0, y.i$)(eI(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === U.gD.PREMIUM_YEAR_TIER_2
                            ? x.intl.format(x.t.z2oQtA, {
                                  percent: s?.percentage ?? U.Cq,
                                  regularPrice: A,
                                  renewalDate: ep(t, u),
                              })
                            : m
                              ? x.intl.formatToPlainString(x.t["3ZiutU"], {
                                    percent: s?.percentage ?? U._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? U.OJ,
                                })
                              : x.intl.formatToPlainString(x.t["G6+XOT"], {
                                    percent: s?.percentage ?? U._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? U.OJ,
                                })
                        : O;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function el(e) {
    var t, n, i;
    let r,
        a,
        {
            renewalInvoicePreview: s,
            renewalInvoiceWithEntitlementsPreview: o,
            subscription: d,
            planId: c,
            includePremiumGuilds: u = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: E,
            hasFractionalPremiumWithSub: A = !1,
            fractionalPremiumInfo: h,
        } = e,
        f = O.A.get(c);
    return (
        l()(null != f, "Missing plan"),
        es({
            subscription: d,
            planId: f.id,
            price:
                ((t = s),
                (n = d),
                (i = f),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? $(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, M.CE)((0, M.$g)(a, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: u,
            hasDiscountApplied: _,
            activeDiscountInfo: E,
            renewalInvoiceWithoutEntitlementsPreview: s,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: A,
            fractionalPremiumInfo: h,
        })
    );
}
function eo(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, g.m1)(t) ? null : en(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return U.pW.has(t);
        }),
        a =
            r?.planId === U.gD.PREMIUM_MONTH_GUILD
                ? x.t.Pi5yMJ
                : r?.planId === U.gD.PREMIUM_YEAR_GUILD
                  ? x.t.H4KPuV
                  : null,
        s = null != a ? x.intl.formatToPlainString(a, { num: r?.quantity }) : void 0;
    if (null != i && null != s)
        return x.intl.formatToPlainString(x.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function ed(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === U.hd[i].skuId ? i : void 0,
        a = [];
    switch (t) {
        case U.pe.TIER_0:
            a = [U.gD.PREMIUM_YEAR_TIER_0, U.gD.PREMIUM_MONTH_TIER_0];
            break;
        case U.pe.TIER_1:
            a = [U.gD.PREMIUM_MONTH_TIER_1];
            break;
        case U.pe.TIER_2:
            a = [U.gD.PREMIUM_YEAR_TIER_2, U.gD.PREMIUM_MONTH_TIER_2];
            break;
        case U.pe.GUILD:
            return [];
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== r) {
        let e = a.indexOf(r);
        (a.splice(e, 1), a.unshift(r));
    }
    return a;
}
function ec(e) {
    let t = U.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, L.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eu(e) {
    let t = O.A.getPlanIdsForSkus([eJ(U.pe.GUILD)]);
    l()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e_ = new Set([
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
function eE(e) {
    return e_.has(e);
}
function eA(e) {
    return U.pW.has(e);
}
function eh(e) {
    return eE(e) || eA(e);
}
function ef(e) {
    return null != e && e === U.gD.PREMIUM_GROUP_MONTH;
}
function eI(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = d()(e.metadata.apple_grace_period_expires_date);
        return { days: d().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = d()(e.metadata.google_grace_period_expires_date),
            n = d()(e.metadata.google_original_expires_date);
        return { days: d().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? U.U1 : U.L9;
        return { days: t, expiresDate: d()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: d()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: d()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? U.a5 : U.EV;
        return { days: t, expiresDate: d()(e.currentPeriodStart).add(t, "days") };
    }
}
function ep(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return (null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = eT(n, t.unactivatedUnits)), n);
}
function eT(e, t, n, i) {
    let r = d()(i ? void 0 : e);
    if (t.length > 0) {
        let e = e3(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = d()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function em(e) {
    let t = e3(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === U.xc.NONE)) return "";
    let n = { days: x.t.fYmirx, hours: x.t["C3RO+g"], minutes: x.t.r77oHc },
        i = (0, E.Vb)((0, y.Tf)(0, t * D.A.Millis.HOUR));
    return (0, y.uN)(i, n);
}
function eg(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === P.Dmq.PAST_DUE;
}
function eS(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? x.intl.string(x.t["0rzJ4J"]) : x.intl.string(x.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = x.intl.string(x.t.a9Mdb3)),
        t
    );
}
function eN(e) {
    if (null == e) return !1;
    let t = C.A.getPaymentSource(e);
    return null != t && G.AD.has(t.type);
}
function eC(e) {
    return e.isPurchasedExternally
        ? e.status === P.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eu(n);
              return 0 === (null != t ? eu(t.additionalPlans) : null) && 0 !== r ? P.Dmq.CANCELED : i;
          })(e) === P.Dmq.CANCELED;
}
function eO(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: o, additionalPlans: d, renewalMutations: c } = n,
        u = O.A.get(o);
    l()(null != u, "Missing plan");
    let E = eu(d),
        A = c?.additionalPlans != null ? eu(c.additionalPlans) : E,
        h = Math.max(0, E - A),
        f = A > 0 && h > 0,
        I = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => U.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = f ? A : E;
            try {
                e = eD(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                I = !0;
            }
        }
        t = null != e ? (0, M.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || I,
        T = null != t ? (0, M.CE)(t, u.interval, u.intervalCount) : "",
        m = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (eC(n))
        return p
            ? x.intl.format(x.t["3/WTrI"], { quantity: E })
            : m
              ? x.intl.format(x.t["0ozBSB"], { quantity: E, rate: T })
              : x.intl.format(x.t["yjsv/s"], { quantity: E, rate: T });
    switch (n.status) {
        case P.Dmq.ACCOUNT_HOLD:
            return p
                ? x.intl.format(x.t.Nlf3nc, { quantity: E, boostQuantity: E })
                : m
                  ? x.intl.format(x.t.oiRy7v, { quantity: E, boostQuantity: E, rate: T })
                  : x.intl.format(x.t["0QxOAi"], { quantity: E, boostQuantity: E, rate: T });
        case P.Dmq.PAUSE_PENDING:
        case P.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return x.intl.string(x.t.CduWAm);
            return x.intl.format(x.t["5iud9s"], { quantity: E });
        case P.Dmq.PAST_DUE:
            if (n.isBoostOnly)
                return x.intl.format(x.t["d+0vwo"], {
                    endDate: (0, y.i$)(eI(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (f) {
                if (p) return x.intl.format(x.t["krRy+d"], { activeQuantity: A, pendingQuantity: h });
                let e = m ? x.t["4nc7+E"] : x.t.BmaudS;
                return x.intl.format(e, { activeQuantity: A, pendingQuantity: h, rate: T });
            }
            return p
                ? x.intl.format(x.t["5iud9s"], { quantity: E })
                : m
                  ? x.intl.format(x.t.eDwrLA, { quantity: E, rate: T })
                  : x.intl.format(x.t.ijSDcI, { quantity: E, rate: T });
    }
}
function eR(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    if (null != t)
        try {
            i = $(e.id, !1, r, t, a);
        } catch {
            i = W(e.id, !1, r, void 0, a);
        }
    else i = W(e.id, !1, r, void 0, a);
    let s = (0, M.$g)(i.amount, i.currency);
    return (e.currency !== G.Yr.USD && !0 === n && (s = s.concat("*")), s);
}
function eL(e) {
    let { status: t, renewalMutations: n } = e;
    return t === P.Dmq.CANCELED || (null != n && (0, g.m1)(n.planId) && !e.isPurchasedExternally);
}
function ey(e) {
    return e === P.Dmq.PAST_DUE || e === P.Dmq.ACCOUNT_HOLD || e === P.Dmq.BILLING_RETRY;
}
function eD(e, t, n, i) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: N.A.ipCountryCodeWithFallback, currency: n },
        s = O.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, L.pM)(t, { tags: { planId: e } }), t);
    }
    let l = O.A.getForSkuAndInterval(eJ(U.pe.GUILD), s.interval, s.intervalCount);
    if (null == l) {
        let t = Error("Unsupported plan");
        throw ((0, L.pM)(t, { tags: { planId: e } }), t);
    }
    return $(l.id, (0, r.ki)(i), !1, a);
}
function ev(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case U.gD.PREMIUM_MONTH_TIER_0:
                return x.intl.string(x.t["0ggVqN"]);
            case U.gD.PREMIUM_YEAR_TIER_0:
                return x.intl.string(x.t["jm+ZQw"]);
            case U.gD.PREMIUM_MONTH_TIER_1:
                return x.intl.string(x.t.uph4Jx);
            case U.gD.PREMIUM_YEAR_TIER_1:
                return x.intl.string(x.t["D/l7Yt"]);
            case U.gD.PREMIUM_MONTH_TIER_2:
            case U.gD.PREMIUM_GROUP_MONTH:
                return x.intl.string(x.t["5l1MuV"]);
            case U.gD.PREMIUM_YEAR_TIER_2:
                return x.intl.string(x.t.G0mISV);
        }
    switch (i) {
        case U.gD.PREMIUM_MONTH_TIER_0:
            return n ? x.intl.string(x.t.cRCCJ3) : x.intl.string(x.t["/G3aKw"]);
        case U.gD.PREMIUM_YEAR_TIER_0:
            return n ? x.intl.string(x.t.cRCCJ3) : x.intl.string(x.t["2eQpsL"]);
        case U.gD.PREMIUM_MONTH_TIER_1:
            return n ? x.intl.string(x.t.cRCCJ3) : x.intl.string(x.t.gueLg5);
        case U.gD.PREMIUM_YEAR_TIER_1:
            return n ? x.intl.string(x.t.cRCCJ3) : x.intl.string(x.t["MhH/vW"]);
        case U.gD.PREMIUM_MONTH_TIER_2:
            return n ? x.intl.string(x.t.cRCCJ3) : x.intl.string(x.t.LQVQIq);
        case U.gD.PREMIUM_GROUP_MONTH:
            return x.intl.formatToPlainString(k.default.LwdrNi, { premiumGroupProductName: (0, w.DP)() });
        case U.gD.PREMIUM_YEAR_TIER_2:
            return n ? x.intl.string(x.t.cRCCJ3) : x.intl.string(x.t["0nfg1x"]);
        case U.gD.PREMIUM_3_MONTH_TIER_2:
        case U.gD.PREMIUM_6_MONTH_TIER_2:
            return x.intl.formatToPlainString(x.t.BCD4fT, { intervalCount: t.intervalCount });
        case U.gD.NONE_MONTH:
        case U.gD.NONE_YEAR:
        case U.gD.NONE_3_MONTH:
        case U.gD.NONE_6_MONTH:
        case U.gD.PREMIUM_MONTH_GUILD:
        case U.gD.PREMIUM_YEAR_GUILD:
        case U.gD.PREMIUM_3_MONTH_GUILD:
        case U.gD.PREMIUM_6_MONTH_GUILD:
            return x.intl.string(x.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, L.pM)(r, { tags: { planId: i } }), r);
}
function eb(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = O.A.get(t);
    return (l()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount });
}
function eM() {
    let e = G.Yr.USD;
    try {
        e = W(U.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eP(e) {
    let { intervalType: t = U.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case U.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? x.intl.formatToPlainString(x.t.fRNBRX, { weeks: n / 7 })
                    : x.intl.formatToPlainString(x.t.EIpHEj, { weeks: n / 7 });
            return i
                ? x.intl.formatToPlainString(x.t["6Cdzoy"], { days: n })
                : x.intl.formatToPlainString(x.t["kbBj/h"], { days: n });
        case U.WT.MONTH:
            return i
                ? x.intl.formatToPlainString(x.t.x5MgxS, { months: n })
                : x.intl.formatToPlainString(x.t["4SEnCZ"], { months: n });
        case U.WT.YEAR:
            return i
                ? x.intl.formatToPlainString(x.t["h+63yl"], { years: n })
                : x.intl.formatToPlainString(x.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eU(e) {
    let { intervalType: t = U.WT.MONTH, intervalCount: n = 1 } = e,
        i = eM(),
        r = (0, M.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case U.WT.DAY:
            if (n >= 7 && n % 7 == 0) return x.intl.formatToPlainString(x.t.C6i5Jt, { weeks: n / 7, price: r });
            return x.intl.formatToPlainString(x.t.cR9ifw, { days: n, price: r });
        case U.WT.MONTH:
            return x.intl.formatToPlainString(x.t["8FZfNo"], { months: n, price: r });
        case U.WT.YEAR:
            return x.intl.formatToPlainString(x.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ew(e, t) {
    if (null != e && null != e.subscriptionTrial && e.subscriptionTrial.skuId === t) {
        let t = e.subscriptionTrial;
        return eU({ intervalType: t.interval, intervalCount: t.intervalCount });
    }
    return null;
}
function eG(e) {
    let { intervalType: t = U.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case U.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? x.intl.formatToPlainString(x.t.iVZYyl, { weeks: n / 7 })
                    : x.intl.formatToPlainString(x.t.EmoBD2, { weeks: n / 7 });
            return i
                ? x.intl.formatToPlainString(x.t.jzH70Z, { days: n })
                : x.intl.formatToPlainString(x.t["k2UNz+"], { days: n });
        case U.WT.MONTH:
            return i
                ? x.intl.formatToPlainString(x.t.erUSmA, { months: n })
                : x.intl.formatToPlainString(x.t.kridzK, { months: n });
        case U.WT.YEAR:
            return i
                ? x.intl.formatToPlainString(x.t.IfYQVC, { years: n })
                : x.intl.formatToPlainString(x.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ex(e, t) {
    switch (e) {
        case P.kM_.APPLE_PARTNER:
        case P.kM_.APPLE_ADVANCED_COMMERCE:
        case P.kM_.APPLE:
            return F[t];
        case P.kM_.GOOGLE:
            return B[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function ek(e, t) {
    return (0, r.ki)(e) || ey(t?.status);
}
function eF(e, t) {
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
function eB(e) {
    return e.filter((e) => !U.JM.has(e.planId));
}
function eV(e, t, n, i) {
    if (!i.has(t))
        throw new A.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
    let r = !1,
        a = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((r = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!r) {
        let i = { planId: t, quantity: n },
            r = e.items.find((e) => e.planId === t);
        (null != r && (i.id = r.id), a.push(i));
    }
    return a.filter((e) => 0 !== e.quantity);
}
function eH(e, t) {
    return eV(e, t, 1, U.JM);
}
function ej(e, t, n) {
    return eV(e, n, t, U.pW);
}
function eW(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => U.JM.has(e.planId));
    if (null != t) {
        let n = O.A.get(t.planId);
        (l()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = O.A.get(e.planId);
                if ((l()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = O.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return (l()(null != r, "Missing planForInterval"), { ...e, planId: r.id });
            })));
    }
    return e;
}
function eY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = e === U.PremiumTypes.TIER_2 ? (0, T.ew)({ location: "getMaxFileSizeForPremiumType" }) : U.f5[e].fileSize;
    return (0, v.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function eK(e) {
    return null == e ? null : e.items.find((e) => U.pW.has(e.planId));
}
function e$(e) {
    let t = null != e ? j(e) : null;
    return null != t ? ec(t.planId) : null;
}
function ez(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function eX(e) {
    return (0, p.RM)(p.G5, e);
}
function eZ(e) {
    return (0, p.RM)(p.G3, e);
}
function eq(e, t) {
    let n = (0, M.$g)(e.amount, e.currency),
        i = ee(t);
    return `${n}/${i}`;
}
function eQ(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = $(e.id);
    return (0, M.CE)((0, M.$g)(n.amount, n.currency), e.interval, t);
}
function eJ(e) {
    return e;
}
function e0(e) {
    return "isNitroLocked" in e;
}
function e1() {
    let e = (0, c.bG)([S.default], () => S.default.getCurrentUser());
    return (0, r.YE)(e, U.PremiumTypes.TIER_2);
}
function e2(e) {
    var t;
    let n = U.Eg;
    if (null != (t = e) && "trialId" in t)
        switch (e.trialId) {
            case U.Tt:
                return U.h7;
            case U.yo:
                return U.CA;
        }
    else;
    return n;
}
function e3(e) {
    return e5(e.map((e) => e.skuId));
}
function e5(e) {
    return e.reduce((e, t) => {
        let [n, i] = U.NL[t],
            r = 1;
        switch (n) {
            case U.T.HOUR:
                r = 1;
                break;
            case U.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
function e6(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = U.En[t.skuId];
    return null == r ? null : $(r, !1, n, i);
}
function e4(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = U.XE[t];
    return (null != r && (a = e8(r, n, i)), a);
}
function e7(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === U.WT.DAY || (t.interval === U.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = e6({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === U.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function e8(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === U.WT.YEAR) {
        try {
            if (((t = e6({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = $(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function e9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = e7({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = $(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function te(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== U.WT.YEAR) return null;
    let i = $(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function tt(e) {
    return null == e ? 0 : Math.max((0, y.m_)(new Date(), new Date(e)), 0);
}
let tn = Object.freeze({
    isNewUser: ez,
    isPremiumAtLeast: r.CC,
    isPremium: r.ki,
    isPremiumExactly: r.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: $,
    getDefaultPrice: W,
    getInterval: function (e) {
        let t = U.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, L.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: J,
    getIntervalStringAsNoun: ee,
    getPremiumType: et,
    getTierDisplayNameByPlanId: er,
    getDisplayName: en,
    getPremiumPlanOptions: ed,
    formatInterval: function (e) {
        if (e === U.WT.YEAR) return x.intl.string(x.t.tfqrhj);
        if (e === U.WT.MONTH) return x.intl.string(x.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: es,
    isPremiumSku: function (e) {
        return e === U.pe.TIER_0 || e === U.pe.TIER_1 || e === U.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === U.WT.MONTH) return t;
        if (e === U.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: b.f,
    getSkuIdForPlan: ec,
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
        return et(e) === U.PremiumTypes.TIER_2 ? U.M4 : 0;
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
                          fractionalState: U.xc.NONE,
                          startsAt: d()(0),
                          endsAt: d()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: d()(0),
                          unactivatedUnits: [],
                      },
            a = null !== n && e.status === P.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, M.$g)(
                      a.invoiceItems
                          .filter((e) => U.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      a.currency,
                  )
                : (0, M.$g)(a.total, a.currency);
        if (S.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return x.intl.format(x.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === P.Dmq.CANCELED) return x.intl.format(x.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === P.Dmq.PAUSE_PENDING)
            return x.intl.format(x.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === P.Dmq.PAUSED)
            return r.fractionalState !== U.xc.NONE
                ? x.intl.format(x.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? x.intl.format(x.t.KTYQCg, { planName: x.intl.string(x.t.Ipxkog), price: s })
                      : x.intl.string(x.t.fMz6Lg)
                  : i
                    ? x.intl.format(x.t.zcgtzf, {
                          planName: x.intl.string(x.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : x.intl.format(x.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === P.Dmq.PAST_DUE) {
            let t = eI(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = d()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = d()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? x.intl.format(x.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: G.qm[e.paymentGateway],
                      paymentSourceLink: ex(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : x.intl.format(x.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        {
            var l;
            if (e.status === P.Dmq.BILLING_RETRY)
                return x.intl.format(x.t.EMTLOT, {
                    endDate: d()(e.currentPeriodStart).add(U.bx, "days").toDate(),
                    price: s,
                });
            if (e.status === P.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, f.xv)()
                    ? x.intl.format(x.t["dtcxw+"], {
                          endDate: d()(e.currentPeriodStart).add(U.ph, "days").toDate(),
                          paymentGatewayName: G.qm[e.paymentGateway],
                          paymentSourceLink: ex(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : x.intl.format(x.t.EMTLOT, {
                          endDate: d()(e.currentPeriodStart).add(U.ph, "days").toDate(),
                          price: s,
                      });
            if (null != (l = e).paymentSourceId && eN(l.paymentSourceId))
                return x.intl.format(x.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === P.Dmq.UNPAID) return x.intl.format(x.t.CzTKom, { maxProcessingTimeInDays: U.G4 });
            if (e.isPurchasedExternally)
                return x.intl.format(x.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: G.qm[e.paymentGateway],
                    subscriptionManagementLink: ex(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eT(n, r.unactivatedUnits)),
                i
                    ? x.intl.format(x.t.Vl3cED, { planName: x.intl.string(x.t.Ipxkog), renewalDate: n, price: s })
                    : x.intl.format(x.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: ep,
    extendDateWithUnconsumedFractionalPremium: eT,
    getUnactivatedFractionalPremiumDurationString: em,
    isSwitchingPlansDisabled: eg,
    getSwitchingPlansDisabledMessage: eS,
    isNoneSubscription: g.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === P.Dmq.CANCELED || e.status === P.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eE(t);
        });
        return null == i ||
            (0, g.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === P.Dmq.CANCELED || e.status === P.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eE(t);
        });
        return ((null == i || (0, g.m1)(i.subscriptionPlanId)) && (n = P.Dmq.CANCELED), n);
    },
    isBaseSubscriptionCanceled: eL,
    getPremiumGuildIntervalPrice: eD,
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
    getIntervalForInvoice: eb,
    getPremiumPlanItem: j,
    getGuildBoostPlanItem: eK,
    isBoostOnlySubscription: function (e) {
        return null != e && null == j(e) && null != eK(e);
    },
    getPremiumSkuIdForSubscription: e$,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = j(e);
            if (null != t) return et(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: e3,
    castPremiumSubscriptionAsSkuId: eJ,
    calculateDiscountPercentageForYearlyPlan: e8,
    calculateYearlyPlanDollarSavingsAmount: e9,
    calculateYearlyPlanMonthlyRateAmount: te,
    getDaysSincePremium: tt,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, y.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return (0, p.RM)(p.gQ, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, p.RM)(p.JK, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, p.RM)(p.He, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, p.RM)(p.ii, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, p.RM)(p.u6, e);
    },
    canUseBadges: function (e) {
        return (0, p.RM)(p.nI, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, p.RM)(p.DG, e);
    },
    canEditDiscriminator: function (e) {
        return (0, p.RM)(p.nh, e);
    },
    hasBoostDiscount: function (e) {
        return (0, p.RM)(p._V, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, p.RM)(p.OW, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, p.RM)(p._w, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, p.RM)(p.Qz, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, p.RM)(p.Pm, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, p.RM)(p.x, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, p.RM)(p.cS, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, p.RM)(p.T7, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, p.RM)(p.lx, e);
    },
    canUseClientThemes: function (e) {
        return (0, p.RM)(p.zL, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? (0, p.RM)(p.sj, t) : (0, p.RM)(p.II, t);
    },
    canUseQuestOrbMultiplier: eX,
    hasFreeBoosts: function (e) {
        return (0, p.RM)(p.aE, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, p.RM)(p.GS, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, p.RM)(p.Zc, e);
    },
    canUseCollectibles: eZ,
    canUseMonthlyOrbs: function (e) {
        return (0, m.Nh)(e?.perks, u.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return (0, m.Nh)(e?.perks, u.bb.SHOP_DISCOUNTS) || eZ(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return (0, m.Nh)(e?.perks, u.bb.MORE_QUEST_ORBS) || eX(e);
    },
    formatPriceString: eq,
    StreamQuality: H,
});
