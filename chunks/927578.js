n.d(t, {
    $Q: () => X,
    $k: () => eP,
    Ay: () => tH,
    CC: () => I.CC,
    D8: () => ee,
    Dd: () => eo,
    EJ: () => e3,
    EL: () => H,
    Em: () => tN,
    FJ: () => et,
    FY: () => eK,
    GX: () => e0,
    Ge: () => eY,
    J$: () => eR,
    JM: () => Y,
    Ke: () => J,
    LE: () => ez,
    Mn: () => er,
    Nc: () => eT,
    OU: () => eu,
    Of: () => eZ,
    Om: () => e1,
    PK: () => eU,
    Pg: () => eJ,
    Q8: () => eC,
    RH: () => ea,
    TW: () => I.ki,
    Tm: () => ef,
    To: () => tF,
    U8: () => Q,
    UC: () => Z,
    Uf: () => eD,
    YE: () => I.YE,
    Zb: () => ey,
    Zw: () => ei,
    _e: () => eS,
    aE: () => eQ,
    aZ: () => e5,
    bx: () => eh,
    e1: () => tx,
    ee: () => e$,
    ff: () => eH,
    iv: () => tG,
    jh: () => eL,
    ji: () => eA,
    k8: () => tV,
    kX: () => eI,
    ki: () => ek,
    m6: () => en,
    mH: () => tC,
    mv: () => te,
    nB: () => ec,
    nK: () => tR,
    pb: () => z,
    qn: () => e2,
    re: () => eq,
    sS: () => ex,
    tS: () => eW,
    tW: () => eX,
    x6: () => tB,
    xq: () => eg,
    y8: () => W,
    ys: () => eb,
    z4: () => eE,
}),
    n(65821),
    n(457529),
    n(896048),
    n(667532),
    n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(975807),
    c = n(366999),
    u = n(626584),
    d = n(367888),
    f = n(493740),
    p = n(832946),
    _ = n(287809),
    h = n(615405),
    m = n(295405),
    g = n(97352),
    E = n(166403),
    b = n(739508),
    y = n(405269),
    O = n(927813),
    A = n(255438),
    v = n(723702),
    S = n(125584),
    I = n(474090),
    T = n(580630),
    C = n(652215),
    N = n(100544),
    R = n(788868),
    w = n(88001),
    P = n(818348),
    D = n(985018),
    x = n(519412);

function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}

function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
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
    V = new u.A("PremiumUtils.tsx"),
    F = 2592e6;
var B = (function (e) {
    return (e.MID = "mid"), (e.HIGH = "high"), e;
})({});

function H(e) {
    return e.items.find((e) => R.JM.has(e.planId));
}

function Y(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = null != (t = m.A.defaultPaymentSourceId) ? t : void 0,
        o = E.A.getPremiumTypeSubscription();
    return (
        null != o && null != o.paymentSourceId && (s = o.paymentSourceId),
        W(
            e,
            n,
            r,
            {
                paymentSourceId: s,
                currency: i,
            },
            a,
        )
    );
}

function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: s } = r;
    if (null != g.A.get(e)) {
        let r = C.lid.DEFAULT;
        n ? (r = C.lid.GIFT) : t && (r = C.lid.PREMIUM_TIER_1);
        let o = q(e, {
            paymentSourceId: a,
            purchaseType: r,
            currency: s,
        });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (i &&
                    (0, b.pM)(t, {
                        extra: {
                            paymentSourceId: a,
                        },
                        tags: {
                            purchaseType: r.toString(),
                            planId: e,
                            currency: null != s ? s : "unknown",
                        },
                    }),
                t)
            );
        }
        return o;
    }
    let o = Error("Plan not found");
    throw (
        (i &&
            (0, b.pM)(o, {
                tags: {
                    planId: e,
                    currency: null != s ? s : "unknown",
                },
                extra: k(j({}, r), {
                    isGift: n,
                }),
            }),
        o)
    );
}

function K(e, t) {
    let n = g.A.get(e);
    if (null == n) {
        let n = Error("Plan not found");
        throw (
            ((0, b.pM)(n, {
                tags: {
                    planId: e,
                    purchaseType: t.toString(),
                },
            }),
            n)
        );
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let r = n.prices[t];
    if (null == r)
        throw (
            (V.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))),
            Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e)))
        );
    return r;
}

function z(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      purchaseType: C.lid.DEFAULT,
                  },
        r = K(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            V.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))),
                V.info("prices: ".concat(i));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, b.pM)(a, {
                extra: {
                    paymentSourceId: t,
                },
                tags: {
                    purchaseType: n.toString(),
                    planId: e,
                },
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        V.info("countryPrices: ".concat(JSON.stringify(r.countryPrices)));
        let t = Error("Missing prices for country");
        throw (
            ((0, b.pM)(t, {
                tags: {
                    countryCode: r.countryPrices.countryCode,
                    planId: e,
                },
            }),
            t)
        );
    }
    return r.countryPrices.prices;
}

function q(e) {
    let {
            paymentSourceId: t,
            purchaseType: n,
            currency: r,
        } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                  purchaseType: C.lid.DEFAULT,
              },
        i = z(e, {
            paymentSourceId: t,
            purchaseType: n,
        });
    return (0 === i.length &&
        V.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)),
    null != r)
        ? i.find((e) => e.currency === r.toLowerCase())
        : i[0];
}

function X(e) {
    return {
        amount: e.amount,
        currency: e.currency,
        exponent: e.exponent,
    };
}

function Z(e, t, n) {
    let r,
        i,
        a = {
            currency: t,
            amount: 0,
            tax: 0,
            taxInclusive: !1,
        },
        s = (0, d._1)(e);
    null != s && (r = R.hd[s.planId].premiumType);
    let o = (0, I.CC)(r, R.PremiumTypes.TIER_0),
        l = (0, I.CC)(r, R.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = R.pW.has(r.planId) ? l : !R.JM.has(r.planId) && o),
            (e =
                void 0 === n
                    ? Y(r.planId, i, !1, t)
                    : W(r.planId, i, !1, {
                          paymentSourceId: n,
                          currency: t,
                      })),
            (a.amount += e.amount * r.quantity);
    }
    return X(a);
}

function Q(e, t, n, r) {
    let a;
    return (
        null === t && (i()(null !== e, "Subscription can't be null"), (t = [])),
        Z((a = null !== e ? eQ(e, t) : e$(t)), n, r)
    );
}

function $(e) {
    let t = R.hd[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount,
        };
    let n = Error("Unsupported plan");
    throw (
        ((0, b.pM)(n, {
            tags: {
                planId: e,
            },
        }),
        n)
    );
}

function J(e) {
    switch (e) {
        case R.Ff.MONTH:
            return D.intl.string(D.t.FPybU7);
        case R.Ff.YEAR:
            return D.intl.string(D.t.tfqrhj);
        case R.Ff.DAY:
        case R.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}

function ee(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : R.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case R.WT.MONTH:
                let s = D.intl.formatToPlainString(a === R.PremiumTypes.TIER_0 ? D.t.NPKsLz : D.t.poEovT, {
                    timeInterval: D.intl.string(D.t.FPybU7),
                });
                return i ? s : D.intl.string(D.t.Mh9bTt);
            case R.WT.YEAR:
                let o = D.intl.formatToPlainString(a === R.PremiumTypes.TIER_0 ? D.t.NPKsLz : D.t.poEovT, {
                    timeInterval: D.intl.string(D.t.tfqrhj),
                });
                return i ? o : D.intl.string(D.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case R.WT.MONTH:
            if (1 !== r)
                return D.intl.formatToPlainString(D.t["0UlZnH"], {
                    intervalCount: r,
                });
            return D.intl.string(D.t.DKzs96);
        case R.WT.YEAR:
            return D.intl.string(D.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}

function et(e) {
    switch (e) {
        case R.WT.MONTH:
            return D.intl.string(D.t.FPybU7);
        case R.WT.YEAR:
            return D.intl.string(D.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}

function en(e) {
    let t = R.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw (
        ((0, b.pM)(n, {
            tags: {
                planId: e,
            },
        }),
        n)
    );
}

function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case R.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? D.intl.format(D.t.TZXHNj, {
                      duration: r,
                  })
                : n
                  ? D.intl.string(D.t["81iAgs"])
                  : D.intl.string(D.t["0efVPy"]);
        case R.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? D.intl.format(D.t.eqRhC7, {
                      duration: r,
                  })
                : n
                  ? D.intl.string(D.t.UvzqY1)
                  : D.intl.string(D.t.eoVuBn);
        case R.gD.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t["g/dH5g"]) : D.intl.string(D.t["7O6qSq"]);
        case R.gD.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.pdZJaq) : D.intl.string(D.t.Md5xbi);
        case R.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? D.intl.format(D.t.aI6QXz, {
                      duration: r,
                  })
                : n
                  ? D.intl.string(D.t.SmVbHc)
                  : D.intl.string(D.t.FKYNC6);
        case R.gD.PREMIUM_GROUP_MONTH:
            return n ? D.intl.string(D.t.SmVbHc) : D.intl.string(D.t.FKYNC6);
        case R.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? D.intl.format(D.t["1wBcPi"], {
                      duration: r,
                  })
                : n
                  ? D.intl.string(D.t.JIq4O1)
                  : D.intl.string(D.t["cfu/5d"]);
        case R.gD.PREMIUM_3_MONTH_TIER_2:
            return D.intl.string(D.t.wCbINr);
        case R.gD.PREMIUM_6_MONTH_TIER_2:
            return D.intl.string(D.t["e3/ArU"]);
        case R.gD.PREMIUM_MONTH_GUILD:
            return n ? D.intl.string(D.t["6ZR3By"]) : D.intl.string(D.t["h80cx/"]);
        case R.gD.PREMIUM_YEAR_GUILD:
            return n ? D.intl.string(D.t.YDpAzZ) : D.intl.string(D.t.ZHkls0);
        case R.gD.PREMIUM_3_MONTH_GUILD:
            return D.intl.string(D.t.EZHHB6);
        case R.gD.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.X2KDO2);
        case R.gD.PREMIUM_MONTH_LEGACY:
            return D.intl.string(D.t.PD6k79);
        case R.gD.PREMIUM_YEAR_LEGACY:
            return D.intl.string(D.t.LtJgTC);
    }
    let i = Error("Unsupported plan");
    throw (
        ((0, b.pM)(i, {
            tags: {
                planId: e,
            },
        }),
        i)
    );
}

function ei(e) {
    switch (e) {
        case R.pe.TIER_0:
            return D.intl.string(D.t["t9uG/o"]);
        case R.pe.TIER_1:
            return D.intl.string(D.t.FSOz78);
        case R.pe.TIER_2:
            return D.intl.string(D.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw (
        ((0, b.pM)(t, {
            tags: {
                skuId: e,
            },
        }),
        t)
    );
}

function ea(e) {
    var t;
    let n = null == (t = R.hd[e]) ? void 0 : t.premiumType,
        r = null != n ? R.Mr[n] : null;
    if (null != r) return D.intl.string(r);
    let i = Error("Unsupported plan");
    throw (
        ((0, b.pM)(i, {
            tags: {
                planId: e,
            },
        }),
        i)
    );
}

function es(e, t) {
    if (e === R.WT.MONTH) return t;
    if (e === R.WT.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"));
}

function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return t ? "Basic" : D.intl.string(D.t["t9uG/o"]);
        case R.PremiumTypes.TIER_1:
            return t ? "Classic" : D.intl.string(D.t.FSOz78);
        case R.PremiumTypes.TIER_2:
            return D.intl.string(D.t.lG6a5x);
    }
}

function el(e) {
    var t, n, r, i, a, o, c, u, d, f;
    let {
            subscription: p,
            planId: h,
            price: m,
            includePremiumGuilds: g,
            hasDiscountApplied: E,
            activeDiscountInfo: b,
            renewalInvoicePreview: O,
            hasFractionalPremiumWithSub: A,
        } = e,
        v = R.hd[h],
        S = tT(Y(v.id), v.interval),
        I =
            ek(p) ||
            (null == p.paymentSourceId &&
                !p.isPurchasedExternally &&
                !(null == (r = _.default.getCurrentUser()) ? void 0 : r.hasFreePremium())),
        T = null != m && null == p.paymentGateway,
        N =
            p.status === C.Dmq.UNPAID &&
            null !== p.latestInvoice &&
            (null == (i = p.latestInvoice) ? void 0 : i.status) === C.lT7.OPEN,
        w = I ? C.Dmq.CANCELED : N ? C.Dmq.UNPAID : p.status,
        P =
            null ==
                (t =
                    null != (n = null == O ? void 0 : O.taxInclusive)
                        ? n
                        : null == (a = p.latestInvoice)
                          ? void 0
                          : a.taxInclusive) || t,
        x = R.M4 + (g ? eh(p.additionalPlans) : 0),
        L = T
            ? P
                ? D.intl.format(D.t["cd+hqB"], {
                      price: m,
                  })
                : D.intl.format(D.t.NUkcpF, {
                      price: m,
                  })
            : D.intl.string(D.t.zYx3Y6),
        j = T
            ? P
                ? D.intl.format(D.t.VsKcFB, {
                      price: m,
                  })
                : D.intl.format(D.t.hJ5xEX, {
                      price: m,
                  })
            : D.intl.string(D.t["8rSipI"]),
        M = T
            ? P
                ? D.intl.format(D.t["jRy6/J"], {
                      price: m,
                      num: x,
                  })
                : D.intl.format(D.t.tTNE8M, {
                      price: m,
                      num: x,
                  })
            : D.intl.format(D.t["U+z/HJ"], {
                  num: x,
              });
    switch (h) {
        case R.gD.PREMIUM_MONTH_TIER_0:
        case R.gD.PREMIUM_YEAR_TIER_0:
            switch (w) {
                case C.Dmq.CANCELED:
                    return T
                        ? P
                            ? D.intl.format(D.t["USi/nc"], {
                                  price: m,
                              })
                            : D.intl.format(D.t["FS//l2"], {
                                  price: m,
                              })
                        : D.intl.string(D.t.JshLzq);
                case C.Dmq.ACCOUNT_HOLD:
                    return T
                        ? P
                            ? D.intl.format(D.t["5mv+2i"], {
                                  price: m,
                              })
                            : D.intl.format(D.t.nkAEfZ, {
                                  price: m,
                              })
                        : D.intl.format(D.t.SsLIXS, {});
                case C.Dmq.UNPAID:
                    return D.intl.format(D.t.cmkbFB, {});
                case C.Dmq.PAUSE_PENDING:
                    let k = null != p.pauseEndsAt ? s()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != k
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: k,
                          })
                        : D.intl.format(D.t.VlWufv, {
                              pauseDate: p.currentPeriodEnd,
                          });
                case C.Dmq.PAUSED:
                    if (A) return L;
                    return D.intl.format(D.t["6RTdZA"], {
                        resumeDate: p.pauseEndsAt,
                    });
                case C.Dmq.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.i$)(eA(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return L;
            }
        case R.gD.PREMIUM_MONTH_TIER_1:
        case R.gD.PREMIUM_YEAR_TIER_1:
            switch (w) {
                case C.Dmq.CANCELED:
                    return T
                        ? P
                            ? D.intl.format(D.t.cXy8Bp, {
                                  price: m,
                              })
                            : D.intl.format(D.t["C/XsHt"], {
                                  price: m,
                              })
                        : D.intl.string(D.t.K6tYFa);
                case C.Dmq.ACCOUNT_HOLD:
                    return T
                        ? P
                            ? D.intl.format(D.t.HBkIBi, {
                                  price: m,
                              })
                            : D.intl.format(D.t.ZsO1Sx, {
                                  price: m,
                              })
                        : D.intl.format(D.t["0+/WH7"], {});
                case C.Dmq.UNPAID:
                    return D.intl.format(D.t.McIzwj, {});
                case C.Dmq.PAUSE_PENDING:
                    let U = null != p.pauseEndsAt ? s()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != U
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: U,
                          })
                        : D.intl.format(D.t.VlWufv, {
                              pauseDate: p.currentPeriodEnd,
                          });
                case C.Dmq.PAUSED:
                    if (A) return j;
                    return D.intl.format(D.t["6RTdZA"], {
                        resumeDate: p.pauseEndsAt,
                    });
                case C.Dmq.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.i$)(eA(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return j;
            }
        case R.gD.PREMIUM_MONTH_TIER_2:
        case R.gD.PREMIUM_YEAR_TIER_2:
        case R.gD.PREMIUM_3_MONTH_TIER_2:
        case R.gD.PREMIUM_6_MONTH_TIER_2:
        case R.gD.PREMIUM_GROUP_MONTH:
            switch (w) {
                case C.Dmq.CANCELED:
                    return T
                        ? P
                            ? D.intl.format(D.t.xoFgRh, {
                                  price: m,
                                  num: x,
                              })
                            : D.intl.format(D.t.nXdbKo, {
                                  price: m,
                                  num: x,
                              })
                        : D.intl.format(D.t.EcSdRH, {
                              num: x,
                          });
                case C.Dmq.ACCOUNT_HOLD:
                    return T
                        ? P
                            ? D.intl.format(D.t["5C/0QG"], {
                                  price: m,
                                  num: x,
                              })
                            : D.intl.format(D.t.xfYkhu, {
                                  price: m,
                                  num: x,
                              })
                        : D.intl.format(D.t.ivjxcn, {
                              num: x,
                          });
                case C.Dmq.UNPAID:
                    return D.intl.format(D.t["0HopYf"], {
                        num: x,
                    });
                case C.Dmq.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? s()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != G
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G,
                          })
                        : D.intl.format(D.t.VlWufv, {
                              pauseDate: p.currentPeriodEnd,
                          });
                case C.Dmq.PAUSED:
                    if (A) return M;
                    return D.intl.format(D.t["6RTdZA"], {
                        resumeDate: p.pauseEndsAt,
                    });
                case C.Dmq.BILLING_RETRY:
                    return D.intl.format(D.t["IlJ/HV"], {
                        endDate: s()(p.currentPeriodStart).add(R.bx, "days").toDate(),
                    });
                case C.Dmq.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.i$)(eA(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return E
                        ? h === R.gD.PREMIUM_YEAR_TIER_2
                            ? D.intl.format(D.t["+qqh6g"], {
                                  percent: null != (o = null == b ? void 0 : b.percentage) ? o : R.Cq,
                                  regularPrice: S,
                              })
                            : P
                              ? D.intl.formatToPlainString(D.t["3ZiutU"], {
                                    percent: null != (c = null == b ? void 0 : b.percentage) ? c : R._$,
                                    regularPrice: S,
                                    numMonths: null != (u = null == b ? void 0 : b.duration) ? u : R.OJ,
                                })
                              : D.intl.formatToPlainString(D.t["G6+XOT"], {
                                    percent: null != (d = null == b ? void 0 : b.percentage) ? d : R._$,
                                    regularPrice: S,
                                    numMonths: null != (f = null == b ? void 0 : b.duration) ? f : R.OJ,
                                })
                        : M;
            }
        default:
            throw Error("Invalid planId ".concat(h));
    }
}

function ec(e) {
    let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: r,
            includePremiumGuilds: a = !1,
            hasDiscountApplied: s = !1,
            activeDiscountInfo: o,
            hasFractionalPremiumWithSub: l = !1,
        } = e,
        c = g.A.get(r);
    return (
        i()(null != c, "Missing plan"),
        el({
            subscription: n,
            planId: c.id,
            price: eG(t, n, c),
            includePremiumGuilds: a,
            hasDiscountApplied: s,
            activeDiscountInfo: o,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l,
        })
    );
}

function eu(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, p.m1)(t) ? null : er(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return R.pW.has(t);
                  }),
        a =
            (null == i ? void 0 : i.planId) === R.gD.PREMIUM_MONTH_GUILD ||
            (null == i ? void 0 : i.planId) === R.gD.PREMIUM_YEAR_GUILD
                ? D.t.Pi5yMJ
                : null,
        s =
            null != a
                ? D.intl.formatToPlainString(a, {
                      num: null == i ? void 0 : i.quantity,
                  })
                : void 0;
    if (null != r && null != s)
        return D.intl.formatToPlainString(D.t.FN5T9r, {
            premiumDescription: r,
            premiumGuildDescription: s,
        });
    if (null != r) return r;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}

function ed(e) {
    return e === R.pe.TIER_0 || e === R.pe.TIER_1 || e === R.pe.TIER_2;
}

function ef(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: a } = e;
    if (null == t || !n) return [];
    let s = void 0 !== a && t === R.hd[a].skuId ? a : void 0,
        o = [];
    switch (t) {
        case R.pe.TIER_0:
            o = [R.gD.PREMIUM_YEAR_TIER_0, R.gD.PREMIUM_MONTH_TIER_0];
            break;
        case R.pe.TIER_1:
            o = [R.gD.PREMIUM_MONTH_TIER_1];
            break;
        case R.pe.TIER_2:
            let l = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (R.Er.has(e)) {
                    let t = R.hd[e];
                    l = [...R.Er].filter((e) => {
                        let n = R.hd[e];
                        return (
                            n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === R.pe.TIER_2
                        );
                    });
                } else l = [];
            }
            o = [R.gD.PREMIUM_YEAR_TIER_2, ...l, R.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error("Unexpected SKU: ".concat(t));
    }
    if (void 0 !== s) {
        let e = o.indexOf(s);
        o.splice(e, 1), o.unshift(s);
    }
    return o;
}

function ep(e) {
    let t = R.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw (
            ((0, b.pM)(t, {
                tags: {
                    planId: e,
                },
            }),
            t)
        );
    }
    return t.skuId;
}

function e_(e) {
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return R.pe.TIER_0;
        case R.PremiumTypes.TIER_1:
            return R.pe.TIER_1;
        case R.PremiumTypes.TIER_2:
            return R.pe.TIER_2;
    }
}

function eh(e) {
    let t = g.A.getPlanIdsForSkus([tC(R.pe.GUILD)]);
    i()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let em = new Set([
    R.gD.NONE_MONTH,
    R.gD.NONE_3_MONTH,
    R.gD.NONE_6_MONTH,
    R.gD.NONE_YEAR,
    R.gD.PREMIUM_MONTH_TIER_0,
    R.gD.PREMIUM_MONTH_TIER_1,
    R.gD.PREMIUM_MONTH_TIER_2,
    R.gD.PREMIUM_YEAR_TIER_0,
    R.gD.PREMIUM_YEAR_TIER_1,
    R.gD.PREMIUM_YEAR_TIER_2,
    R.gD.PREMIUM_3_MONTH_TIER_2,
    R.gD.PREMIUM_6_MONTH_TIER_2,
    R.gD.PREMIUM_GROUP_MONTH,
]);

function eg(e) {
    return em.has(e);
}

function eE(e) {
    return R.pW.has(e);
}

function eb(e) {
    return eg(e) || eE(e);
}

function ey(e) {
    return null != e && e === R.gD.PREMIUM_GROUP_MONTH;
}

function eO(e) {
    return en(e) === R.PremiumTypes.TIER_2 ? R.M4 : 0;
}

function eA(e) {
    var t, n, r, i, a;
    if (e.isPurchasedViaApple && (null == (t = e.metadata) ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = s()(e.metadata.apple_grace_period_expires_date);
        return {
            days: s().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t,
        };
    }
    if (
        e.isPurchasedViaGoogle &&
        (null == (n = e.metadata) ? void 0 : n.google_grace_period_expires_date) != null &&
        (null == (r = e.metadata) ? void 0 : r.google_original_expires_date) != null
    ) {
        let t = s()(e.metadata.google_grace_period_expires_date),
            n = s()(e.metadata.google_original_expires_date);
        return {
            days: s().duration(t.diff(n)).days(),
            expiresDate: t,
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? R.U1 : R.L9;
        return {
            days: t,
            expiresDate: s()(e.currentPeriodStart).add(t, "days"),
        };
    }
    if ((null == (i = e.metadata) ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: s()(null == (a = e.metadata) ? void 0 : a.grace_period_expires_date).diff(
                e.currentPeriodStart,
                "days",
            ),
            expiresDate: s()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? R.a5 : R.EV;
        return {
            days: t,
            expiresDate: s()(e.currentPeriodStart).add(t, "days"),
        };
    }
}

function ev(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i =
            arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: R.xc.NONE,
                      startsAt: s()(0),
                      endsAt: s()(0),
                      currentEntitlementId: "",
                      unactivatedUnits: [],
                  },
        a = null !== n && e.status === C.Dmq.PAST_DUE ? n : t,
        o = r
            ? (0, T.$g)(
                  a.invoiceItems
                      .filter((e) => R.VY.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  a.currency,
              )
            : (0, T.$g)(a.total, a.currency);
    if (null != e.trialId && R.BT.includes(e.trialId) && null == e.paymentSourceId)
        return D.intl.format(D.t["7ZS2m1"], {
            trialEnd: e.currentPeriodEnd,
        });
    if (e.status === C.Dmq.CANCELED)
        return D.intl.format(D.t["Whp/qk"], {
            endDate: t.subscriptionPeriodStart,
        });
    if (e.status === C.Dmq.PAUSE_PENDING)
        return D.intl.format(D.t.uBLUGU, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt,
        });
    if (e.status === C.Dmq.PAUSED)
        return i.fractionalState !== R.xc.NONE
            ? D.intl.format(D.t.Q18lRK, {
                  renewalDate: i.endsAt.toDate(),
                  price: o,
              })
            : null == e.pauseEndsAt
              ? r
                  ? D.intl.format(D.t.KTYQCg, {
                        planName: D.intl.string(D.t.Ipxkog),
                        price: o,
                    })
                  : D.intl.string(D.t.fMz6Lg)
              : r
                ? D.intl.format(D.t.zcgtzf, {
                      planName: D.intl.string(D.t.Ipxkog),
                      resumeDate: e.pauseEndsAt,
                      price: o,
                  })
                : D.intl.format(D.t["V8+l6k"], {
                      resumeDate: e.pauseEndsAt,
                  });
    if (e.status === C.Dmq.PAST_DUE) {
        var l, c;
        let t = eA(e).expiresDate;
        return (e.isPurchasedViaGoogle &&
            (null == (l = e.metadata) ? void 0 : l.google_grace_period_expires_date) != null &&
            (t = s()(e.metadata.google_grace_period_expires_date)),
        e.isPurchasedViaApple &&
            (null == (c = e.metadata) ? void 0 : c.apple_grace_period_expires_date) != null &&
            (t = s()(e.metadata.apple_grace_period_expires_date)),
        e.isPurchasedExternally)
            ? D.intl.format(D.t.U2hb3W, {
                  endDate: t.toDate(),
                  paymentGatewayName: P.qm[e.paymentGateway],
                  paymentSourceLink: eX(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
              })
            : D.intl.format(D.t.qEIzyi, {
                  endDate: t.toDate(),
                  price: o,
              });
    }
    {
        if (e.status === C.Dmq.BILLING_RETRY)
            return D.intl.format(D.t.EMTLOT, {
                endDate: s()(e.currentPeriodStart).add(R.bx, "days").toDate(),
                price: o,
            });
        if (e.status === C.Dmq.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, v.isAndroid)()
                ? D.intl.format(D.t["dtcxw+"], {
                      endDate: s()(e.currentPeriodStart).add(R.ph, "days").toDate(),
                      paymentGatewayName: P.qm[e.paymentGateway],
                      paymentSourceLink: eX(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : D.intl.format(D.t.EMTLOT, {
                      endDate: s()(e.currentPeriodStart).add(R.ph, "days").toDate(),
                      price: o,
                  });
        if (eN(e))
            return D.intl.format(D.t.awpB0C, {
                prepaidEndDate: e.currentPeriodEnd,
            });
        if (e.status === C.Dmq.UNPAID)
            return D.intl.format(D.t.CzTKom, {
                maxProcessingTimeInDays: R.G4,
            });
        if (e.isPurchasedExternally)
            return D.intl.format(D.t.ZlWXgR, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: P.qm[e.paymentGateway],
                subscriptionManagementLink: eX(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            });
        let n = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (n = eS(n, i.unactivatedUnits)),
            r
                ? D.intl.format(D.t.Vl3cED, {
                      planName: D.intl.string(D.t.Ipxkog),
                      renewalDate: n,
                      price: o,
                  })
                : D.intl.format(D.t.Q18lRK, {
                      renewalDate: n,
                      price: o,
                  })
        );
    }
}

function eS(e, t, n, r) {
    let i = s()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tU(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = s()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}

function eI(e) {
    let t = tU(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === R.xc.NONE)) return "";
    let n = {
            days: D.t.fYmirx,
            hours: D.t["C3RO+g"],
            minutes: D.t.r77oHc,
        },
        r = (0, c.Vb)((0, y.Tf)(0, t * O.A.Millis.HOUR));
    return (0, y.uN)(r, n);
}

function eT(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === C.Dmq.PAST_DUE;
}

function eC(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? D.intl.string(D.t["0rzJ4J"]) : D.intl.string(D.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = D.intl.string(D.t.a9Mdb3)),
        t
    );
}

function eN(e) {
    return null != e.paymentSourceId && eR(e.paymentSourceId);
}

function eR(e) {
    if (null == e) return !1;
    let t = m.A.getPaymentSource(e);
    return null != t && P.AD.has(t.type);
}

function ew(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = eh(n);
    return 0 === (null != t ? eh(t.additionalPlans) : null) && 0 !== i ? C.Dmq.CANCELED : r;
}

function eP(e) {
    return e.isPurchasedExternally ? e.status === C.Dmq.CANCELED : ew(e) === C.Dmq.CANCELED;
}

function eD(e) {
    var t, n, r;
    let { subscription: a, user: s, price: o, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = a,
        f = g.A.get(u);
    i()(null != f, "Missing plan");
    let p = eh(d),
        _ = eV(a.planId, a.paymentSourceId, a.currency, s).amount * p;
    if (null != l) {
        let e = l.invoiceItems.find((e) => R.pW.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    o = null != o ? o : (0, T.$g)(_, a.currency);
    let h =
        null ==
            (t =
                null != (n = null == l ? void 0 : l.taxInclusive)
                    ? n
                    : null == (r = a.latestInvoice)
                      ? void 0
                      : r.taxInclusive) || t;
    if (eP(a))
        return a.isPurchasedViaGoogle
            ? D.intl.format(D.t["3/WTrI"], {
                  quantity: p,
              })
            : h
              ? D.intl.format(D.t["0ozBSB"], {
                    quantity: p,
                    rate: (0, T.CE)(o, f.interval, f.intervalCount),
                })
              : D.intl.format(D.t["yjsv/s"], {
                    quantity: p,
                    rate: (0, T.CE)(o, f.interval, f.intervalCount),
                });
    switch (a.status) {
        case C.Dmq.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t.Nlf3nc, {
                      quantity: p,
                      boostQuantity: p,
                  })
                : h
                  ? D.intl.format(D.t.oiRy7v, {
                        quantity: p,
                        boostQuantity: p,
                        rate: (0, T.CE)(o, f.interval, f.intervalCount),
                    })
                  : D.intl.format(D.t["0QxOAi"], {
                        quantity: p,
                        boostQuantity: p,
                        rate: (0, T.CE)(o, f.interval, f.intervalCount),
                    });
        case C.Dmq.PAUSE_PENDING:
        case C.Dmq.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return D.intl.string(D.t.CduWAm);
            return D.intl.format(D.t["5iud9s"], {
                quantity: p,
            });
        default:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t["5iud9s"], {
                      quantity: p,
                  })
                : h
                  ? D.intl.format(D.t.eDwrLA, {
                        quantity: p,
                        rate: (0, T.CE)(o, f.interval, f.intervalCount),
                    })
                  : D.intl.format(D.t.ijSDcI, {
                        quantity: p,
                        rate: (0, T.CE)(o, f.interval, f.intervalCount),
                    });
    }
}

function ex(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? W(e.id, !1, r, t) : Y(e.id, !1, r),
        a = (0, T.$g)(i.amount, i.currency);
    return e.currency !== P.Yr.USD && !0 === n && (a = a.concat("*")), a;
}

function eL(e, t, n) {
    let r = ex(e, t, n);
    return (0, T.CE)(r, e.interval, e.intervalCount);
}

function ej(e, t) {
    let { planId: n } = e;
    if (e.status === C.Dmq.CANCELED || e.status === C.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eg(t);
    });
    return null == r ||
        (0, p.m1)(r.subscriptionPlanId) ||
        (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
        ? e.planId
        : r.subscriptionPlanId;
}

function eM(e, t) {
    let { status: n } = e;
    if (e.status === C.Dmq.CANCELED || e.status === C.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eg(t);
    });
    return (null == r || (0, p.m1)(r.subscriptionPlanId)) && (n = C.Dmq.CANCELED), n;
}

function ek(e) {
    let { status: t, renewalMutations: n } = e;
    return t === C.Dmq.CANCELED || (null != n && (0, p.m1)(n.planId) && !e.isPurchasedExternally);
}

function eU(e) {
    return e === C.Dmq.PAST_DUE || e === C.Dmq.ACCOUNT_HOLD || e === C.Dmq.BILLING_RETRY;
}

function eG(e, t, n) {
    let r = e.findInvoiceItemByPlanId(n.id),
        i =
            null == r
                ? W(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency,
                  }).amount
                : r.amount;
    return (0, T.CE)((0, T.$g)(i, e.currency), n.interval, n.intervalCount);
}

function eV(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n,
                  }
                : {
                      country: h.A.ipCountryCodeWithFallback,
                      currency: n,
                  },
        a = g.A.get(e);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw (
            ((0, b.pM)(t, {
                tags: {
                    planId: e,
                },
            }),
            t)
        );
    }
    let s = g.A.getForSkuAndInterval(tC(R.pe.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw (
            ((0, b.pM)(t, {
                tags: {
                    planId: e,
                },
            }),
            t)
        );
    }
    return W(s.id, (0, I.ki)(r), !1, i);
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

function eB(e, t) {
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

function eH(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case R.gD.PREMIUM_MONTH_TIER_0:
                return D.intl.string(D.t["0ggVqN"]);
            case R.gD.PREMIUM_YEAR_TIER_0:
                return D.intl.string(D.t["jm+ZQw"]);
            case R.gD.PREMIUM_MONTH_TIER_1:
                return D.intl.string(D.t.uph4Jx);
            case R.gD.PREMIUM_YEAR_TIER_1:
                return D.intl.string(D.t["D/l7Yt"]);
            case R.gD.PREMIUM_MONTH_TIER_2:
            case R.gD.PREMIUM_GROUP_MONTH:
                return D.intl.string(D.t["5l1MuV"]);
            case R.gD.PREMIUM_YEAR_TIER_2:
                return D.intl.string(D.t.G0mISV);
        }
    switch (r) {
        case R.gD.PREMIUM_MONTH_TIER_0:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["/G3aKw"]);
        case R.gD.PREMIUM_YEAR_TIER_0:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["2eQpsL"]);
        case R.gD.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t.gueLg5);
        case R.gD.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["MhH/vW"]);
        case R.gD.PREMIUM_MONTH_TIER_2:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t.LQVQIq);
        case R.gD.PREMIUM_GROUP_MONTH:
            return D.intl.formatToPlainString(x.default.LwdrNi, {
                premiumGroupProductName: (0, w.DP)(),
            });
        case R.gD.PREMIUM_YEAR_TIER_2:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["0nfg1x"]);
        case R.gD.PREMIUM_3_MONTH_TIER_2:
        case R.gD.PREMIUM_6_MONTH_TIER_2:
            return D.intl.formatToPlainString(D.t.BCD4fT, {
                intervalCount: t.intervalCount,
            });
        case R.gD.NONE_MONTH:
        case R.gD.NONE_YEAR:
        case R.gD.NONE_3_MONTH:
        case R.gD.NONE_6_MONTH:
        case R.gD.PREMIUM_MONTH_GUILD:
        case R.gD.PREMIUM_YEAR_GUILD:
        case R.gD.PREMIUM_3_MONTH_GUILD:
        case R.gD.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.eUEeCt);
    }
    let i = Error("User is purchasing an unsupported plan");
    throw (
        ((0, b.pM)(i, {
            tags: {
                planId: r,
            },
        }),
        i)
    );
}

function eY(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = g.A.get(t);
    return (
        i()(null != n, "Missing subscriptionPlan"),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount,
        }
    );
}

function eW(e) {
    let { intervalType: t = R.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? D.intl.formatToPlainString(D.t.fRNBRX, {
                          weeks: n / 7,
                      })
                    : D.intl.formatToPlainString(D.t.EIpHEj, {
                          weeks: n / 7,
                      });
            return r
                ? D.intl.formatToPlainString(D.t["6Cdzoy"], {
                      days: n,
                  })
                : D.intl.formatToPlainString(D.t["kbBj/h"], {
                      days: n,
                  });
        case R.WT.MONTH:
            return r
                ? D.intl.formatToPlainString(D.t.x5MgxS, {
                      months: n,
                  })
                : D.intl.formatToPlainString(D.t["4SEnCZ"], {
                      months: n,
                  });
        case R.WT.YEAR:
            return r
                ? D.intl.formatToPlainString(D.t["h+63yl"], {
                      years: n,
                  })
                : D.intl.formatToPlainString(D.t["9DFiHk"], {
                      years: n,
                  });
        default:
            throw Error("Unsupported interval duration.");
    }
}

function eK(e) {
    let { intervalType: t = R.WT.MONTH, intervalCount: n = 1 } = e,
        r = P.Yr.USD;
    try {
        r = Y(R.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch (e) {}
    let i = (0, T.$g)(0, r, {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    switch (t) {
        case R.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return D.intl.formatToPlainString(D.t.C6i5Jt, {
                    weeks: n / 7,
                    price: i,
                });
            return D.intl.formatToPlainString(D.t.cR9ifw, {
                days: n,
                price: i,
            });
        case R.WT.MONTH:
            return D.intl.formatToPlainString(D.t["8FZfNo"], {
                months: n,
                price: i,
            });
        case R.WT.YEAR:
            return D.intl.formatToPlainString(D.t.xzAcST, {
                years: n,
                price: i,
            });
        default:
            throw Error("Unsupported interval duration.");
    }
}

function ez(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eK({
            intervalType: t.interval,
            intervalCount: t.interval_count,
        });
    }
    return null;
}

function eq(e) {
    let { intervalType: t = R.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? D.intl.formatToPlainString(D.t.iVZYyl, {
                          weeks: n / 7,
                      })
                    : D.intl.formatToPlainString(D.t.EmoBD2, {
                          weeks: n / 7,
                      });
            return r
                ? D.intl.formatToPlainString(D.t.jzH70Z, {
                      days: n,
                  })
                : D.intl.formatToPlainString(D.t["k2UNz+"], {
                      days: n,
                  });
        case R.WT.MONTH:
            return r
                ? D.intl.formatToPlainString(D.t.erUSmA, {
                      months: n,
                  })
                : D.intl.formatToPlainString(D.t.kridzK, {
                      months: n,
                  });
        case R.WT.YEAR:
            return r
                ? D.intl.formatToPlainString(D.t.IfYQVC, {
                      years: n,
                  })
                : D.intl.formatToPlainString(D.t.PClsrw, {
                      years: n,
                  });
        default:
            throw Error("Unsupported interval duration.");
    }
}

function eX(e, t) {
    switch (e) {
        case C.kM_.APPLE_PARTNER:
        case C.kM_.APPLE_ADVANCED_COMMERCE:
        case C.kM_.APPLE:
            return U[t];
        case C.kM_.GOOGLE:
            return G[t];
    }
    throw Error("Invalid external payment gateway ".concat(e));
}

function eZ(e, t) {
    return (0, I.ki)(e) || eU(null == t ? void 0 : t.status);
}

function eQ(e, t) {
    var n, r;
    let i = [],
        a = (null != (n = null == (r = e.renewalMutations) ? void 0 : r.items) ? n : e.items).find((e) =>
            R.JM.has(e.planId),
        );
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return j({}, n, t);
            return t;
        })
    );
}

function e$(e) {
    return e.filter((e) => !R.JM.has(e.planId));
}

function eJ(e, t, n, r) {
    var a, s;
    i()(r.has(t), "Expected planId in group");
    let o = !1,
        l = (null != (a = null == (s = e.renewalMutations) ? void 0 : s.items) ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((o = !0),
                  k(j({}, e), {
                      quantity: n,
                      planId: t,
                  }))
                : e,
        );
    if (!o) {
        let r = {
                planId: t,
                quantity: n,
            },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), l.push(r);
    }
    return l.filter((e) => 0 !== e.quantity);
}

function e0(e, t) {
    return eJ(e, t, 1, R.JM);
}

function e1(e, t, n) {
    return eJ(e, n, t, R.pW);
}

function e2(e) {
    var t;
    let n = null != (t = e.find((e) => !("id" in e))) ? t : e.find((e) => R.JM.has(e.planId));
    if (null != n) {
        let t = g.A.get(n.planId);
        i()(null != t, "Missing plan"),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = g.A.get(e.planId);
                if ((i()(null != r, "Missing plan"), t.interval === r.interval && t.intervalCount === r.intervalCount))
                    return e;
                let a = g.A.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return (
                    i()(null != a, "Missing planForInterval"),
                    k(j({}, e), {
                        planId: a.id,
                    })
                );
            }));
    }
    return e;
}

function e3(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      useSpace: !0,
                  },
        n = R.f5[e].fileSize;
    return (0, A.Xq)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace,
    });
}

function e6(e) {
    return null == e ? null : e.items.find((e) => R.pW.has(e.planId));
}

function e4(e) {
    return null != e && null == H(e) && null != e6(e);
}

function e5(e) {
    let t = null != e ? H(e) : null;
    return null != t ? ep(t.planId) : null;
}

function e7(e) {
    if (null != e) {
        let t = H(e);
        if (null != t) return en(t.planId);
    }
}

function e8(e) {
    if (null != e && null != e.renewalMutations) {
        let t = H(e.renewalMutations);
        if (null != t) return en(t.planId);
    }
}

function e9(e) {
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return N.gi.PREMIUM_TIER_0;
        case R.PremiumTypes.TIER_1:
            return N.gi.PREMIUM_TIER_1;
        case R.PremiumTypes.TIER_2:
            return N.gi.PREMIUM_TIER_2;
    }
}
let te = (e) => null != e && Date.now() - e.createdAt.getTime() < F;

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

function ta(e) {
    return (0, f.RM)(f.u6, e);
}

function ts(e) {
    return (0, f.RM)(f.nI, e);
}

function to(e) {
    return (0, f.RM)(f.DG, e);
}

function tl(e) {
    return (0, f.RM)(f.nh, e);
}

function tc(e) {
    return (0, f.RM)(f._V, e);
}

function tu(e) {
    return (0, f.RM)(f.OW, e);
}

function td(e) {
    return (0, f.RM)(f.WQ, e);
}

function tf(e) {
    return (0, f.RM)(f._w, e);
}

function tp(e) {
    return (0, f.RM)(f.Qz, e);
}

function t_(e) {
    return (0, f.RM)(f.Pm, e);
}

function th(e) {
    return (0, f.RM)(f.x, e);
}

function tm(e) {
    return (0, f.RM)(f.cS, e);
}

function tg(e) {
    return (0, f.RM)(f.T7, e);
}

function tE(e) {
    return (0, f.RM)(f.lx, e);
}

function tb(e) {
    return (0, f.RM)(f.zL, e);
}

function ty(e, t) {
    return "high" === e ? (0, f.RM)(f.sj, t) : "mid" === e && (0, f.RM)(f.II, t);
}

function tO(e) {
    return (0, f.RM)(f.aE, e);
}

function tA(e) {
    return (0, f.RM)(f.GS, e);
}

function tv(e) {
    return (0, f.RM)(f.Zc, e);
}

function tS(e) {
    return (0, f.RM)(f.G3, e);
}

function tI(e) {
    return (0, f.RM)(f.z0, e);
}

function tT(e, t) {
    let n = (0, T.$g)(e.amount, e.currency),
        r = et(t);
    return "".concat(n, "/").concat(r);
}

function tC(e) {
    return e;
}

function tN(e) {
    return "isNitroLocked" in e;
}

function tR() {
    let e = (0, o.bG)([_.default], () => _.default.getCurrentUser());
    return (0, I.YE)(e, R.PremiumTypes.TIER_2);
}

function tw(e) {
    return null != e && R.n0.includes(e) ? 1 : 2;
}

function tP(e) {
    return e === R.Tt ? R.h7 : e === R.yo ? R.CA : R.CQ;
}

function tD() {
    return R.CQ;
}

function tx(e) {
    return tL(e) ? tP(e.trial_id) : tj(e) ? tD() : R.CQ;
}

function tL(e) {
    return null != e && "trial_id" in e;
}

function tj(e) {
    return null != e && "discount_id" in e;
}

function tM(e) {
    if (e === R.WT.YEAR) return D.intl.string(D.t.tfqrhj);
    if (e === R.WT.MONTH) return D.intl.string(D.t.FPybU7);
    throw Error("Invalid interval type: ".concat(e));
}

function tk(e) {
    return null != e && !e.isProvisional && !e.bot;
}

function tU(e) {
    return tG(e.map((e) => e.skuId));
}

function tG(e) {
    return e.reduce((e, t) => {
        let [n, r] = R.NL[t],
            i = 1;
        switch (n) {
            case R.T.HOUR:
                i = 1;
                break;
            case R.T.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}

function tV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== R.WT.YEAR) return;
    let r = R.En[e.skuId];
    if (null == r) return;
    let i = W(r, !1, t, n),
        a = W(e.id, !1, t, n);
    if (0 !== i.amount) return Math.floor(100 * (1 - a.amount / (12 * i.amount)));
}

function tF(e) {
    return null == e ? 0 : Math.max((0, y.m_)(new Date(), new Date(e)), 0);
}

function tB(e) {
    return Math.max(1, Math.ceil((0, y.c_)(new Date(e.currentPeriodEnd), new Date())));
}
let tH = Object.freeze({
    isNewUser: te,
    isPremiumAtLeast: I.CC,
    isPremium: I.ki,
    isPremiumExactly: I.YE,
    isPremiumEligible: tk,
    getPrice: W,
    getDefaultPrice: Y,
    getInterval: $,
    getIntervalString: ee,
    getIntervalStringAsNoun: et,
    getPremiumType: en,
    getTierDisplayNameByPlanId: ea,
    getDisplayName: er,
    getPremiumPlanOptions: ef,
    getReverseTrialWeeks: tw,
    formatInterval: tM,
    getPlanDescription: el,
    isPremiumSku: ed,
    getIntervalMonths: es,
    getUserMaxFileSize: S.f,
    getSkuIdForPlan: ep,
    getSkuIdForPremiumType: e_,
    getNumIncludedPremiumGuildSubscriptionSlots: eO,
    getBillingInformationString: ev,
    extendDateWithUnconsumedFractionalPremium: eS,
    getUnactivatedFractionalPremiumDurationString: eI,
    isSwitchingPlansDisabled: eT,
    getSwitchingPlansDisabledMessage: eC,
    isNoneSubscription: p.m1,
    getPlanIdFromInvoice: ej,
    getStatusFromInvoice: eM,
    isBaseSubscriptionCanceled: ek,
    getPremiumGuildIntervalPrice: eV,
    hasAccountCredit: eF,
    hasUnconsumedGiftForSubscriptionPlan: eB,
    getBillingReviewSubheader: eH,
    getIntervalForInvoice: eY,
    getPremiumPlanItem: H,
    getGuildBoostPlanItem: e6,
    isBoostOnlySubscription: e4,
    getPremiumSkuIdForSubscription: e5,
    getPremiumTypeFromSubscription: e7,
    getPremiumTypeFromSubscriptionRenewalMutations: e8,
    getPremiumGradientColor: e9,
    getUnactivatedFractionalPremiumHours: tU,
    castPremiumSubscriptionAsSkuId: tC,
    calculateDiscountPercentageForYearlyPlan: tV,
    getDaysSincePremium: tF,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: tB,
    canUseAnimatedEmojis: tt,
    canUseEmojisEverywhere: tn,
    canUseSoundboardEverywhere: tr,
    canUseCustomCallSounds: ti,
    canUploadLargeFiles: ta,
    canUseBadges: ts,
    canUseHighVideoUploadQuality: to,
    canEditDiscriminator: tl,
    hasBoostDiscount: tc,
    canUseAnimatedAvatar: tu,
    canUseFancyVoiceChannelReactions: td,
    canInstallPremiumApplications: tf,
    canUseIncreasedMessageLength: tp,
    canUseIncreasedGuildCap: t_,
    canRedeemPremiumPerks: th,
    canUsePremiumProfileCustomization: tm,
    canUsePremiumAppIcons: tg,
    canUsePremiumGuildMemberProfile: tE,
    canUseClientThemes: tb,
    canStreamQuality: ty,
    hasFreeBoosts: tO,
    canUseCustomStickersEverywhere: tA,
    canUseCustomBackgrounds: tv,
    canUseCollectibles: tS,
    canUsePremiumVoiceFilters: tI,
    formatPriceString: tT,
    StreamQuality: B,
});
