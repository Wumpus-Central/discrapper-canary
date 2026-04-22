"use strict";
n.d(t, {
    $Q: () => K,
    $k: () => eI,
    Ay: () => e2,
    CC: () => b.CC,
    D8: () => X,
    Dd: () => en,
    EJ: () => eH,
    EL: () => B,
    Em: () => ez,
    FJ: () => Q,
    FY: () => eL,
    GX: () => eV,
    Ge: () => eC,
    J$: () => eA,
    JM: () => H,
    Ke: () => q,
    LE: () => ew,
    L_: () => eZ,
    Mn: () => Z,
    Nc: () => em,
    OU: () => es,
    Of: () => eU,
    Om: () => eF,
    PK: () => eO,
    Pg: () => eG,
    Q8: () => eg,
    RH: () => et,
    Rr: () => eb,
    TW: () => b.ki,
    Tm: () => ea,
    To: () => e1,
    U8: () => z,
    UC: () => $,
    Uf: () => eT,
    YE: () => b.YE,
    Zb: () => ef,
    Zw: () => ee,
    _e: () => eh,
    aE: () => ek,
    aZ: () => eW,
    bx: () => el,
    e1: () => eX,
    ee: () => ex,
    ff: () => ev,
    iv: () => eJ,
    jh: () => ey,
    ji: () => eE,
    kX: () => ep,
    ki: () => eN,
    l6: () => Y,
    m6: () => J,
    mH: () => e$,
    mv: () => ej,
    nB: () => ei,
    nK: () => eq,
    pb: () => j,
    qn: () => eB,
    re: () => eM,
    sS: () => eS,
    tS: () => eD,
    tW: () => eP,
    xq: () => ed,
    y8: () => W,
    ys: () => e_,
    z4: () => ec,
}),
    n(667532),
    n(321073);
var r,
    i = n(284009),
    s = n.n(i),
    a = n(989349),
    o = n.n(a),
    l = n(311907),
    u = n(988506),
    d = n(975807),
    c = n(366999),
    _ = n(626584),
    f = n(367888),
    E = n(493740),
    h = n(965387),
    p = n(817857),
    m = n(832946),
    g = n(287809),
    A = n(615405),
    I = n(295405),
    T = n(97352),
    S = n(166403),
    y = n(739508),
    N = n(405269),
    O = n(927813),
    R = n(255438),
    v = n(723702),
    C = n(125584),
    b = n(474090),
    D = n(580630),
    L = n(652215),
    w = n(788868),
    M = n(88001),
    P = n(818348),
    U = n(985018),
    k = n(466919);
let x = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    G = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    V = new _.A("PremiumUtils.tsx");
var F = (((r = {}).MID = "mid"), (r.HIGH = "high"), r);
function B(e) {
    return e.items.find((e) => w.JM.has(e.planId));
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = I.A.defaultPaymentSourceId ?? void 0,
        a = S.A.getPremiumTypeSubscription();
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
    if (null != T.A.get(e)) {
        let r = L.lid.DEFAULT;
        n ? (r = L.lid.GIFT) : t && (r = L.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: r,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: L.lid.DEFAULT },
                i = j(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === i.length &&
                    V.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != r)
            ) {
                let s = i.find((e) => e.currency === r.toLowerCase());
                return null != s
                    ? s
                    : null != t
                      ? j(e, { purchaseType: n }).find((e) => e.currency === r.toLowerCase())
                      : void 0;
            }
            return i[0];
        })(e, { paymentSourceId: s, purchaseType: r, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (i &&
                    (0, y.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: r.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (i && (0, y.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...r, isGift: n } }), l);
}
function j(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: L.lid.DEFAULT },
        r = (function (e, t) {
            let n = T.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, y.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let r = n.prices[t];
            if (null == r)
                throw (
                    (V.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return r;
        })(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            V.info(`Payment sources IDs: ${JSON.stringify(Object.keys(r.paymentSourcePrices))}`),
                V.info(`prices: ${i}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, y.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        V.info(`countryPrices: ${JSON.stringify(r.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, y.pM)(t, { tags: { countryCode: r.countryPrices.countryCode, planId: e } }), t);
    }
    return r.countryPrices.prices;
}
function K(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function $(e, t, n) {
    let r,
        i,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, f._1)(e);
    null != a && (r = w.hd[a.planId].premiumType);
    let o = (0, b.CC)(r, w.PremiumTypes.TIER_0),
        l = (0, b.CC)(r, w.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = w.pW.has(r.planId) ? l : !w.JM.has(r.planId) && o),
            (e = void 0 === n ? H(r.planId, i, !1, t) : W(r.planId, i, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * r.quantity);
    }
    return K(s);
}
function z(e, t, n, r) {
    return (
        null === t && (s()(null !== e, "Subscription can't be null"), (t = [])), $(null !== e ? ek(e, t) : ex(t), n, r)
    );
}
function q(e) {
    switch (e) {
        case w.Ff.MONTH:
            return U.intl.string(U.t.FPybU7);
        case w.Ff.YEAR:
            return U.intl.string(U.t.tfqrhj);
        case w.Ff.DAY:
        case w.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function X(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : w.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case w.WT.MONTH:
                let a = U.intl.formatToPlainString(s === w.PremiumTypes.TIER_0 ? U.t.NPKsLz : U.t.poEovT, {
                    timeInterval: U.intl.string(U.t.FPybU7),
                });
                return i ? a : U.intl.string(U.t.Mh9bTt);
            case w.WT.YEAR:
                let o = U.intl.formatToPlainString(s === w.PremiumTypes.TIER_0 ? U.t.NPKsLz : U.t.poEovT, {
                    timeInterval: U.intl.string(U.t.tfqrhj),
                });
                return i ? o : U.intl.string(U.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case w.WT.MONTH:
            if (1 !== r) return U.intl.formatToPlainString(U.t["0UlZnH"], { intervalCount: r });
            return U.intl.string(U.t.DKzs96);
        case w.WT.YEAR:
            return U.intl.string(U.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function Q(e) {
    switch (e) {
        case w.WT.MONTH:
            return U.intl.string(U.t.FPybU7);
        case w.WT.YEAR:
            return U.intl.string(U.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function J(e) {
    let t = w.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, y.pM)(n, { tags: { planId: e } }), n);
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case w.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? U.intl.format(U.t.TZXHNj, { duration: r })
                : n
                  ? U.intl.string(U.t["81iAgs"])
                  : U.intl.string(U.t["0efVPy"]);
        case w.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? U.intl.format(U.t.eqRhC7, { duration: r })
                : n
                  ? U.intl.string(U.t.UvzqY1)
                  : U.intl.string(U.t.eoVuBn);
        case w.gD.PREMIUM_MONTH_TIER_1:
            return n ? U.intl.string(U.t["g/dH5g"]) : U.intl.string(U.t["7O6qSq"]);
        case w.gD.PREMIUM_YEAR_TIER_1:
            return n ? U.intl.string(U.t.pdZJaq) : U.intl.string(U.t.Md5xbi);
        case w.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? U.intl.format(U.t.aI6QXz, { duration: r })
                : n
                  ? U.intl.string(U.t.SmVbHc)
                  : U.intl.string(U.t.FKYNC6);
        case w.gD.PREMIUM_GROUP_MONTH:
            return n ? U.intl.string(U.t.SmVbHc) : U.intl.string(U.t.FKYNC6);
        case w.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? U.intl.format(U.t["1wBcPi"], { duration: r })
                : n
                  ? U.intl.string(U.t.JIq4O1)
                  : U.intl.string(U.t["cfu/5d"]);
        case w.gD.PREMIUM_3_MONTH_TIER_2:
            return U.intl.string(U.t.wCbINr);
        case w.gD.PREMIUM_6_MONTH_TIER_2:
            return U.intl.string(U.t["e3/ArU"]);
        case w.gD.PREMIUM_MONTH_GUILD:
            return n ? U.intl.string(U.t["6ZR3By"]) : U.intl.string(U.t["h80cx/"]);
        case w.gD.PREMIUM_YEAR_GUILD:
            return n ? U.intl.string(U.t.YDpAzZ) : U.intl.string(U.t.ZHkls0);
        case w.gD.PREMIUM_3_MONTH_GUILD:
            return U.intl.string(U.t.EZHHB6);
        case w.gD.PREMIUM_6_MONTH_GUILD:
            return U.intl.string(U.t.X2KDO2);
        case w.gD.PREMIUM_MONTH_LEGACY:
            return U.intl.string(U.t.PD6k79);
        case w.gD.PREMIUM_YEAR_LEGACY:
            return U.intl.string(U.t.LtJgTC);
    }
    let i = Error("Unsupported plan");
    throw ((0, y.pM)(i, { tags: { planId: e } }), i);
}
function ee(e) {
    switch (e) {
        case w.pe.TIER_0:
            return U.intl.string(U.t["t9uG/o"]);
        case w.pe.TIER_1:
            return U.intl.string(U.t.FSOz78);
        case w.pe.TIER_2:
            return U.intl.string(U.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, y.pM)(t, { tags: { skuId: e } }), t);
}
function et(e) {
    let t = w.hd[e]?.premiumType,
        n = null != t ? w.Mr[t] : null;
    if (null != n) return U.intl.string(n);
    let r = Error("Unsupported plan");
    throw ((0, y.pM)(r, { tags: { planId: e } }), r);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case w.PremiumTypes.TIER_0:
            return t ? "Basic" : U.intl.string(U.t["t9uG/o"]);
        case w.PremiumTypes.TIER_1:
            return t ? "Classic" : U.intl.string(U.t.FSOz78);
        case w.PremiumTypes.TIER_2:
            return U.intl.string(U.t.lG6a5x);
    }
}
function er(e) {
    let {
            subscription: t,
            planId: n,
            price: r,
            includePremiumGuilds: i,
            hasDiscountApplied: s,
            activeDiscountInfo: a,
            renewalInvoicePreview: l,
            hasFractionalPremiumWithSub: u,
        } = e,
        c = w.hd[n],
        _ = eK(H(c.id), c.interval),
        f =
            eN(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !g.default.getCurrentUser()?.hasFreePremium()),
        E = null != r && null == t.paymentGateway,
        h = t.status === L.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === L.lT7.OPEN,
        p = f ? L.Dmq.CANCELED : h ? L.Dmq.UNPAID : t.status,
        m = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        A = w.M4 + (i ? el(t.additionalPlans) : 0),
        I = E
            ? m
                ? U.intl.format(U.t["cd+hqB"], { price: r })
                : U.intl.format(U.t.NUkcpF, { price: r })
            : U.intl.string(U.t.zYx3Y6),
        T = E
            ? m
                ? U.intl.format(U.t.VsKcFB, { price: r })
                : U.intl.format(U.t.hJ5xEX, { price: r })
            : U.intl.string(U.t["8rSipI"]),
        S = E
            ? m
                ? U.intl.format(U.t["jRy6/J"], { price: r, num: A })
                : U.intl.format(U.t.tTNE8M, { price: r, num: A })
            : U.intl.format(U.t["U+z/HJ"], { num: A });
    switch (n) {
        case w.gD.PREMIUM_MONTH_TIER_0:
        case w.gD.PREMIUM_YEAR_TIER_0:
            switch (p) {
                case L.Dmq.CANCELED:
                    return E
                        ? m
                            ? U.intl.format(U.t["USi/nc"], { price: r })
                            : U.intl.format(U.t["FS//l2"], { price: r })
                        : U.intl.string(U.t.JshLzq);
                case L.Dmq.ACCOUNT_HOLD:
                    return E
                        ? m
                            ? U.intl.format(U.t["5mv+2i"], { price: r })
                            : U.intl.format(U.t.nkAEfZ, { price: r })
                        : U.intl.format(U.t.SsLIXS, {});
                case L.Dmq.UNPAID:
                    return U.intl.format(U.t.cmkbFB, {});
                case L.Dmq.PAUSE_PENDING:
                    let y = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != y
                        ? U.intl.format(U.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: y })
                        : U.intl.format(U.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case L.Dmq.PAUSED:
                    if (u) return I;
                    return U.intl.format(U.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case L.Dmq.PAST_DUE:
                    return U.intl.format(U.t["d+0vwo"], {
                        endDate: (0, N.i$)(eE(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return I;
            }
        case w.gD.PREMIUM_MONTH_TIER_1:
        case w.gD.PREMIUM_YEAR_TIER_1:
            switch (p) {
                case L.Dmq.CANCELED:
                    return E
                        ? m
                            ? U.intl.format(U.t.cXy8Bp, { price: r })
                            : U.intl.format(U.t["C/XsHt"], { price: r })
                        : U.intl.string(U.t.K6tYFa);
                case L.Dmq.ACCOUNT_HOLD:
                    return E
                        ? m
                            ? U.intl.format(U.t.HBkIBi, { price: r })
                            : U.intl.format(U.t.ZsO1Sx, { price: r })
                        : U.intl.format(U.t["0+/WH7"], {});
                case L.Dmq.UNPAID:
                    return U.intl.format(U.t.McIzwj, {});
                case L.Dmq.PAUSE_PENDING:
                    let O = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != O
                        ? U.intl.format(U.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: O })
                        : U.intl.format(U.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case L.Dmq.PAUSED:
                    if (u) return T;
                    return U.intl.format(U.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case L.Dmq.PAST_DUE:
                    return U.intl.format(U.t["d+0vwo"], {
                        endDate: (0, N.i$)(eE(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
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
            switch (p) {
                case L.Dmq.CANCELED:
                    return E
                        ? m
                            ? U.intl.format(U.t.xoFgRh, { price: r, num: A })
                            : U.intl.format(U.t.nXdbKo, { price: r, num: A })
                        : U.intl.format(U.t.EcSdRH, { num: A });
                case L.Dmq.ACCOUNT_HOLD:
                    return E
                        ? m
                            ? U.intl.format(U.t["5C/0QG"], { price: r, num: A })
                            : U.intl.format(U.t.xfYkhu, { price: r, num: A })
                        : U.intl.format(U.t.ivjxcn, { num: A });
                case L.Dmq.UNPAID:
                    return U.intl.format(U.t["0HopYf"], { num: A });
                case L.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? U.intl.format(U.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : U.intl.format(U.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case L.Dmq.PAUSED:
                    if (u) return S;
                    return U.intl.format(U.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case L.Dmq.BILLING_RETRY:
                    return U.intl.format(U.t["IlJ/HV"], {
                        endDate: o()(t.currentPeriodStart).add(w.bx, "days").toDate(),
                    });
                case L.Dmq.PAST_DUE:
                    return U.intl.format(U.t["d+0vwo"], {
                        endDate: (0, N.i$)(eE(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === w.gD.PREMIUM_YEAR_TIER_2
                            ? U.intl.format(U.t["+qqh6g"], { percent: a?.percentage ?? w.Cq, regularPrice: _ })
                            : m
                              ? U.intl.formatToPlainString(U.t["3ZiutU"], {
                                    percent: a?.percentage ?? w._$,
                                    regularPrice: _,
                                    numMonths: a?.duration ?? w.OJ,
                                })
                              : U.intl.formatToPlainString(U.t["G6+XOT"], {
                                    percent: a?.percentage ?? w._$,
                                    regularPrice: _,
                                    numMonths: a?.duration ?? w.OJ,
                                })
                        : S;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ei(e) {
    var t, n, r;
    let i,
        a,
        {
            renewalInvoicePreview: o,
            subscription: l,
            planId: u,
            includePremiumGuilds: d = !1,
            hasDiscountApplied: c = !1,
            activeDiscountInfo: _,
            hasFractionalPremiumWithSub: f = !1,
        } = e,
        E = T.A.get(u);
    return (
        s()(null != E, "Missing plan"),
        er({
            subscription: l,
            planId: E.id,
            price:
                ((t = o),
                (n = l),
                (r = E),
                (a =
                    null == (i = t.findInvoiceItemByPlanId(r.id))
                        ? W(r.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : i.amount),
                (0, D.CE)((0, D.$g)(a, t.currency), r.interval, r.intervalCount)),
            includePremiumGuilds: d,
            hasDiscountApplied: c,
            activeDiscountInfo: _,
            renewalInvoicePreview: o,
            hasFractionalPremiumWithSub: f,
        })
    );
}
function es(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, m.m1)(t) ? null : Z(t),
        i = n?.find((e) => {
            let { planId: t } = e;
            return w.pW.has(t);
        }),
        s = i?.planId === w.gD.PREMIUM_MONTH_GUILD || i?.planId === w.gD.PREMIUM_YEAR_GUILD ? U.t.Pi5yMJ : null,
        a = null != s ? U.intl.formatToPlainString(s, { num: i?.quantity }) : void 0;
    if (null != r && null != a)
        return U.intl.formatToPlainString(U.t.FN5T9r, { premiumDescription: r, premiumGuildDescription: a });
    if (null != r) return r;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function ea(e) {
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
function eo(e) {
    let t = w.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, y.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function el(e) {
    let t = T.A.getPlanIdsForSkus([e$(w.pe.GUILD)]);
    s()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eu = new Set([
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
function ed(e) {
    return eu.has(e);
}
function ec(e) {
    return w.pW.has(e);
}
function e_(e) {
    return ed(e) || ec(e);
}
function ef(e) {
    return null != e && e === w.gD.PREMIUM_GROUP_MONTH;
}
function eE(e) {
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
        let t = e.isPurchasedViaApple ? w.U1 : w.L9;
        return { days: t, expiresDate: o()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: o()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: o()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? w.a5 : w.EV;
        return { days: t, expiresDate: o()(e.currentPeriodStart).add(t, "days") };
    }
}
function eh(e, t, n, r) {
    let i = o()(r ? void 0 : e);
    if (t.length > 0) {
        let e = eQ(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}
function ep(e) {
    let t = eQ(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === w.xc.NONE)) return "";
    let n = { days: U.t.fYmirx, hours: U.t["C3RO+g"], minutes: U.t.r77oHc },
        r = (0, c.Vb)((0, N.Tf)(0, t * O.A.Millis.HOUR));
    return (0, N.uN)(r, n);
}
function em(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === L.Dmq.PAST_DUE;
}
function eg(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? U.intl.string(U.t["0rzJ4J"]) : U.intl.string(U.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = U.intl.string(U.t.a9Mdb3)),
        t
    );
}
function eA(e) {
    if (null == e) return !1;
    let t = I.A.getPaymentSource(e);
    return null != t && P.AD.has(t.type);
}
function eI(e) {
    return e.isPurchasedExternally
        ? e.status === L.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: r } = e,
                  i = el(n);
              return 0 === (null != t ? el(t.additionalPlans) : null) && 0 !== i ? L.Dmq.CANCELED : r;
          })(e) === L.Dmq.CANCELED;
}
function eT(e) {
    let { subscription: t, user: n, price: r, renewalInvoicePreview: i, fractionalPremiumInfo: a } = e,
        { planId: o, additionalPlans: l } = t,
        u = T.A.get(o);
    s()(null != u, "Missing plan");
    let c = el(l),
        _ = eR(t.planId, t.paymentSourceId, t.currency, n).amount * c;
    if (null != i) {
        let e = i.invoiceItems.find((e) => w.pW.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    r = r ?? (0, D.$g)(_, t.currency);
    let f = i?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (eI(t))
        return t.isPurchasedViaGoogle
            ? U.intl.format(U.t["3/WTrI"], { quantity: c })
            : f
              ? U.intl.format(U.t["0ozBSB"], { quantity: c, rate: (0, D.CE)(r, u.interval, u.intervalCount) })
              : U.intl.format(U.t["yjsv/s"], { quantity: c, rate: (0, D.CE)(r, u.interval, u.intervalCount) });
    switch (t.status) {
        case L.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? U.intl.format(U.t.Nlf3nc, { quantity: c, boostQuantity: c })
                : f
                  ? U.intl.format(U.t.oiRy7v, {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, D.CE)(r, u.interval, u.intervalCount),
                    })
                  : U.intl.format(U.t["0QxOAi"], {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, D.CE)(r, u.interval, u.intervalCount),
                    });
        case L.Dmq.PAUSE_PENDING:
        case L.Dmq.PAUSED:
            if (null != a && !a.isFractionalPremiumActive) return U.intl.string(U.t.CduWAm);
            return U.intl.format(U.t["5iud9s"], { quantity: c });
        case L.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return U.intl.format(U.t["d+0vwo"], {
                    endDate: (0, N.i$)(eE(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? U.intl.format(U.t["5iud9s"], { quantity: c })
                : f
                  ? U.intl.format(U.t.eDwrLA, { quantity: c, rate: (0, D.CE)(r, u.interval, u.intervalCount) })
                  : U.intl.format(U.t.ijSDcI, { quantity: c, rate: (0, D.CE)(r, u.interval, u.intervalCount) });
    }
}
function eS(e, t, n) {
    let r,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            r = W(e.id, !1, i, t);
        } catch {
            r = H(e.id, !1, i);
        }
    else r = H(e.id, !1, i);
    let s = (0, D.$g)(r.amount, r.currency);
    return e.currency !== P.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function ey(e, t, n) {
    let r = eS(e, t, n);
    return (0, D.CE)(r, e.interval, e.intervalCount);
}
function eN(e) {
    let { status: t, renewalMutations: n } = e;
    return t === L.Dmq.CANCELED || (null != n && (0, m.m1)(n.planId) && !e.isPurchasedExternally);
}
function eO(e) {
    return e === L.Dmq.PAST_DUE || e === L.Dmq.ACCOUNT_HOLD || e === L.Dmq.BILLING_RETRY;
}
function eR(e, t, n, r) {
    let i = null != t ? { paymentSourceId: t, currency: n } : { country: A.A.ipCountryCodeWithFallback, currency: n },
        s = T.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, y.pM)(t, { tags: { planId: e } }), t);
    }
    let a = T.A.getForSkuAndInterval(e$(w.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, y.pM)(t, { tags: { planId: e } }), t);
    }
    return W(a.id, (0, b.ki)(r), !1, i);
}
function ev(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case w.gD.PREMIUM_MONTH_TIER_0:
                return U.intl.string(U.t["0ggVqN"]);
            case w.gD.PREMIUM_YEAR_TIER_0:
                return U.intl.string(U.t["jm+ZQw"]);
            case w.gD.PREMIUM_MONTH_TIER_1:
                return U.intl.string(U.t.uph4Jx);
            case w.gD.PREMIUM_YEAR_TIER_1:
                return U.intl.string(U.t["D/l7Yt"]);
            case w.gD.PREMIUM_MONTH_TIER_2:
            case w.gD.PREMIUM_GROUP_MONTH:
                return U.intl.string(U.t["5l1MuV"]);
            case w.gD.PREMIUM_YEAR_TIER_2:
                return U.intl.string(U.t.G0mISV);
        }
    switch (r) {
        case w.gD.PREMIUM_MONTH_TIER_0:
            return n ? U.intl.string(U.t.cRCCJ3) : U.intl.string(U.t["/G3aKw"]);
        case w.gD.PREMIUM_YEAR_TIER_0:
            return n ? U.intl.string(U.t.cRCCJ3) : U.intl.string(U.t["2eQpsL"]);
        case w.gD.PREMIUM_MONTH_TIER_1:
            return n ? U.intl.string(U.t.cRCCJ3) : U.intl.string(U.t.gueLg5);
        case w.gD.PREMIUM_YEAR_TIER_1:
            return n ? U.intl.string(U.t.cRCCJ3) : U.intl.string(U.t["MhH/vW"]);
        case w.gD.PREMIUM_MONTH_TIER_2:
            return n ? U.intl.string(U.t.cRCCJ3) : U.intl.string(U.t.LQVQIq);
        case w.gD.PREMIUM_GROUP_MONTH:
            return U.intl.formatToPlainString(k.default.LwdrNi, { premiumGroupProductName: (0, M.DP)() });
        case w.gD.PREMIUM_YEAR_TIER_2:
            return n ? U.intl.string(U.t.cRCCJ3) : U.intl.string(U.t["0nfg1x"]);
        case w.gD.PREMIUM_3_MONTH_TIER_2:
        case w.gD.PREMIUM_6_MONTH_TIER_2:
            return U.intl.formatToPlainString(U.t.BCD4fT, { intervalCount: t.intervalCount });
        case w.gD.NONE_MONTH:
        case w.gD.NONE_YEAR:
        case w.gD.NONE_3_MONTH:
        case w.gD.NONE_6_MONTH:
        case w.gD.PREMIUM_MONTH_GUILD:
        case w.gD.PREMIUM_YEAR_GUILD:
        case w.gD.PREMIUM_3_MONTH_GUILD:
        case w.gD.PREMIUM_6_MONTH_GUILD:
            return U.intl.string(U.t.eUEeCt);
    }
    let i = Error("User is purchasing an unsupported plan");
    throw ((0, y.pM)(i, { tags: { planId: r } }), i);
}
function eC(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = T.A.get(t);
    return s()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function eb() {
    let e = P.Yr.USD;
    try {
        e = H(w.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eD(e) {
    let { intervalType: t = w.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? U.intl.formatToPlainString(U.t.fRNBRX, { weeks: n / 7 })
                    : U.intl.formatToPlainString(U.t.EIpHEj, { weeks: n / 7 });
            return r
                ? U.intl.formatToPlainString(U.t["6Cdzoy"], { days: n })
                : U.intl.formatToPlainString(U.t["kbBj/h"], { days: n });
        case w.WT.MONTH:
            return r
                ? U.intl.formatToPlainString(U.t.x5MgxS, { months: n })
                : U.intl.formatToPlainString(U.t["4SEnCZ"], { months: n });
        case w.WT.YEAR:
            return r
                ? U.intl.formatToPlainString(U.t["h+63yl"], { years: n })
                : U.intl.formatToPlainString(U.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eL(e) {
    let { intervalType: t = w.WT.MONTH, intervalCount: n = 1 } = e,
        r = eb(),
        i = (0, D.$g)(0, r, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case w.WT.DAY:
            if (n >= 7 && n % 7 == 0) return U.intl.formatToPlainString(U.t.C6i5Jt, { weeks: n / 7, price: i });
            return U.intl.formatToPlainString(U.t.cR9ifw, { days: n, price: i });
        case w.WT.MONTH:
            return U.intl.formatToPlainString(U.t["8FZfNo"], { months: n, price: i });
        case w.WT.YEAR:
            return U.intl.formatToPlainString(U.t.xzAcST, { years: n, price: i });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ew(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eL({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function eM(e) {
    let { intervalType: t = w.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? U.intl.formatToPlainString(U.t.iVZYyl, { weeks: n / 7 })
                    : U.intl.formatToPlainString(U.t.EmoBD2, { weeks: n / 7 });
            return r
                ? U.intl.formatToPlainString(U.t.jzH70Z, { days: n })
                : U.intl.formatToPlainString(U.t["k2UNz+"], { days: n });
        case w.WT.MONTH:
            return r
                ? U.intl.formatToPlainString(U.t.erUSmA, { months: n })
                : U.intl.formatToPlainString(U.t.kridzK, { months: n });
        case w.WT.YEAR:
            return r
                ? U.intl.formatToPlainString(U.t.IfYQVC, { years: n })
                : U.intl.formatToPlainString(U.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eP(e, t) {
    switch (e) {
        case L.kM_.APPLE_PARTNER:
        case L.kM_.APPLE_ADVANCED_COMMERCE:
        case L.kM_.APPLE:
            return x[t];
        case L.kM_.GOOGLE:
            return G[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function eU(e, t) {
    return (0, b.ki)(e) || eO(t?.status);
}
function ek(e, t) {
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
function ex(e) {
    return e.filter((e) => !w.JM.has(e.planId));
}
function eG(e, t, n, r) {
    s()(r.has(t), "Expected planId in group");
    let i = !1,
        a = (e.renewalMutations?.items ?? e.items).map((e) =>
            r.has(e.planId) ? ((i = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!i) {
        let r = { planId: t, quantity: n },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), a.push(r);
    }
    return a.filter((e) => 0 !== e.quantity);
}
function eV(e, t) {
    return eG(e, t, 1, w.JM);
}
function eF(e, t, n) {
    return eG(e, n, t, w.pW);
}
function eB(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => w.JM.has(e.planId));
    if (null != t) {
        let n = T.A.get(t.planId);
        s()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let r = T.A.get(e.planId);
                if ((s()(null != r, "Missing plan"), n.interval === r.interval && n.intervalCount === r.intervalCount))
                    return e;
                let i = T.A.getForSkuAndInterval(r.skuId, n.interval, n.intervalCount);
                return s()(null != i, "Missing planForInterval"), { ...e, planId: i.id };
            }));
    }
    return e;
}
function eH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = w.f5[e].fileSize;
    return (0, R.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function eY(e) {
    return null == e ? null : e.items.find((e) => w.pW.has(e.planId));
}
function eW(e) {
    let t = null != e ? B(e) : null;
    return null != t ? eo(t.planId) : null;
}
let ej = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function eK(e, t) {
    let n = (0, D.$g)(e.amount, e.currency),
        r = Q(t);
    return `${n}/${r}`;
}
function e$(e) {
    return e;
}
function ez(e) {
    return "isNitroLocked" in e;
}
function eq() {
    let e = (0, l.bG)([g.default], () => g.default.getCurrentUser());
    return (0, b.YE)(e, w.PremiumTypes.TIER_2);
}
function eX(e) {
    var t, n, r;
    let i = (0, h.N)("getOfferNoticeThreshold");
    if (0 !== i) return i;
    if (null != (t = e) && "trial_id" in t) {
        return (n = e.trial_id) === w.Tt ? w.h7 : n === w.yo ? w.CA : w.CQ;
    }
    return null != (r = e) && "discount_id" in r, w.CQ;
}
function eQ(e) {
    return eJ(e.map((e) => e.skuId));
}
function eJ(e) {
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
let eZ = (e) => {
    let { planId: t, shouldUseCalculatedDiscount: n, isGift: r, priceOptions: i, subscriptionPlan: s } = e,
        a = w.XE[t];
    return n && (a = e0(s, r, i)), a;
};
function e0(e) {
    let t,
        n,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === w.WT.YEAR) {
        try {
            if (
                ((t = ((e) => {
                    let { subscriptionPlan: t, isGift: n = !1, priceOptions: r = {} } = e,
                        i = w.En[t.skuId];
                    return null == i ? null : W(i, !1, n, r);
                })({ subscriptionPlan: e, isGift: r, priceOptions: i })),
                null == t)
            )
                return;
            n = W(e.id, !1, r, i);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function e1(e) {
    return null == e ? 0 : Math.max((0, N.m_)(new Date(), new Date(e)), 0);
}
let e2 = Object.freeze({
    isNewUser: ej,
    isPremiumAtLeast: b.CC,
    isPremium: b.ki,
    isPremiumExactly: b.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: W,
    getDefaultPrice: H,
    getInterval: function (e) {
        let t = w.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, y.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: X,
    getIntervalStringAsNoun: Q,
    getPremiumType: J,
    getTierDisplayNameByPlanId: et,
    getDisplayName: Z,
    getPremiumPlanOptions: ea,
    formatInterval: function (e) {
        if (e === w.WT.YEAR) return U.intl.string(U.t.tfqrhj);
        if (e === w.WT.MONTH) return U.intl.string(U.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: er,
    isPremiumSku: function (e) {
        return e === w.pe.TIER_0 || e === w.pe.TIER_1 || e === w.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === w.WT.MONTH) return t;
        if (e === w.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: C.f,
    getSkuIdForPlan: eo,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case w.PremiumTypes.TIER_0:
                return w.pe.TIER_0;
            case w.PremiumTypes.TIER_1:
                return w.pe.TIER_1;
            case w.PremiumTypes.TIER_2:
                return w.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return J(e) === w.PremiumTypes.TIER_2 ? w.M4 : 0;
    },
    getBillingInformationString: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {
                          isFractionalPremiumActive: !1,
                          fetched: !0,
                          fractionalState: w.xc.NONE,
                          startsAt: o()(0),
                          endsAt: o()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: o()(0),
                          unactivatedUnits: [],
                      },
            s = null !== n && e.status === L.Dmq.PAST_DUE ? n : t,
            a = r
                ? (0, D.$g)(
                      s.invoiceItems
                          .filter((e) => w.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, D.$g)(s.total, s.currency);
        if (g.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != i.currentEntitlementEndsAt ? i.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return U.intl.format(U.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === L.Dmq.CANCELED) return U.intl.format(U.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === L.Dmq.PAUSE_PENDING)
            return U.intl.format(U.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === L.Dmq.PAUSED)
            return i.fractionalState !== w.xc.NONE
                ? U.intl.format(U.t.Q18lRK, { renewalDate: i.endsAt.toDate(), price: a })
                : null == e.pauseEndsAt
                  ? r
                      ? U.intl.format(U.t.KTYQCg, { planName: U.intl.string(U.t.Ipxkog), price: a })
                      : U.intl.string(U.t.fMz6Lg)
                  : r
                    ? U.intl.format(U.t.zcgtzf, {
                          planName: U.intl.string(U.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: a,
                      })
                    : U.intl.format(U.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === L.Dmq.PAST_DUE) {
            let t = eE(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = o()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = o()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? U.intl.format(U.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: P.qm[e.paymentGateway],
                      paymentSourceLink: eP(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : U.intl.format(U.t.qEIzyi, { endDate: t.toDate(), price: a });
        }
        {
            var l;
            if (e.status === L.Dmq.BILLING_RETRY)
                return U.intl.format(U.t.EMTLOT, {
                    endDate: o()(e.currentPeriodStart).add(w.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === L.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, v.isAndroid)()
                    ? U.intl.format(U.t["dtcxw+"], {
                          endDate: o()(e.currentPeriodStart).add(w.ph, "days").toDate(),
                          paymentGatewayName: P.qm[e.paymentGateway],
                          paymentSourceLink: eP(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : U.intl.format(U.t.EMTLOT, {
                          endDate: o()(e.currentPeriodStart).add(w.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (l = e).paymentSourceId && eA(l.paymentSourceId))
                return U.intl.format(U.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === L.Dmq.UNPAID) return U.intl.format(U.t.CzTKom, { maxProcessingTimeInDays: w.G4 });
            if (e.isPurchasedExternally)
                return U.intl.format(U.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: P.qm[e.paymentGateway],
                    subscriptionManagementLink: eP(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eh(n, i.unactivatedUnits)),
                r
                    ? U.intl.format(U.t.Vl3cED, { planName: U.intl.string(U.t.Ipxkog), renewalDate: n, price: a })
                    : U.intl.format(U.t.Q18lRK, { renewalDate: n, price: a })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: eh,
    getUnactivatedFractionalPremiumDurationString: ep,
    isSwitchingPlansDisabled: em,
    getSwitchingPlansDisabledMessage: eg,
    isNoneSubscription: m.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === L.Dmq.CANCELED || e.status === L.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ed(t);
        });
        return null == r ||
            (0, m.m1)(r.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : r.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === L.Dmq.CANCELED || e.status === L.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ed(t);
        });
        return (null == r || (0, m.m1)(r.subscriptionPlanId)) && (n = L.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: eN,
    getPremiumGuildIntervalPrice: eR,
    hasAccountCredit: function (e) {
        return (
            null != e &&
            0 !== e.size &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
                return null != t && null != n && !r;
            })
        );
    },
    hasUnconsumedGiftForSubscriptionPlan: function (e, t) {
        return (
            null != e &&
            0 !== e.size &&
            null != t &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: n, parentId: r, consumed: i } = e;
                return null != n && null != r && !i && n === t;
            })
        );
    },
    getBillingReviewSubheader: ev,
    getIntervalForInvoice: eC,
    getPremiumPlanItem: B,
    getGuildBoostPlanItem: eY,
    isBoostOnlySubscription: function (e) {
        return null != e && null == B(e) && null != eY(e);
    },
    getPremiumSkuIdForSubscription: eW,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = B(e);
            if (null != t) return J(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: eQ,
    castPremiumSubscriptionAsSkuId: e$,
    calculateDiscountPercentageForYearlyPlan: e0,
    getDaysSincePremium: e1,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, N.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return (0, E.RM)(E.gQ, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, E.RM)(E.JK, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, E.RM)(E.He, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, E.RM)(E.ii, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, E.RM)(E.u6, e);
    },
    canUseBadges: function (e) {
        return (0, E.RM)(E.nI, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, E.RM)(E.DG, e);
    },
    canEditDiscriminator: function (e) {
        return (0, E.RM)(E.nh, e);
    },
    hasBoostDiscount: function (e) {
        return (0, E.RM)(E._V, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, E.RM)(E.OW, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, E.RM)(E._w, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, E.RM)(E.Qz, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, E.RM)(E.Pm, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, E.RM)(E.x, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, E.RM)(E.cS, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, E.RM)(E.T7, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, E.RM)(E.lx, e);
    },
    canUseClientThemes: function (e) {
        return (0, E.RM)(E.zL, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? (0, E.RM)(E.sj, t) : "mid" === e && (0, E.RM)(E.II, t);
    },
    canUseQuestOrbMultiplier: function (e) {
        return (0, E.RM)(E.G5, e);
    },
    hasFreeBoosts: function (e) {
        return (0, E.RM)(E.aE, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, E.RM)(E.GS, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, E.RM)(E.Zc, e);
    },
    canUseCollectibles: function (e) {
        return (0, E.RM)(E.G3, e);
    },
    canUseMonthlyOrbs: function (e) {
        return (0, p.Nh)(e?.perks, u.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return (0, p.Nh)(e?.perks, u.bb.SHOP_DISCOUNTS);
    },
    canUseMoreQuestOrbs: function (e) {
        return (0, p.Nh)(e?.perks, u.bb.MORE_QUEST_ORBS);
    },
    formatPriceString: eK,
    StreamQuality: F,
});
