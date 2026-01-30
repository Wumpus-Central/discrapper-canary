n.d(t, {
    $Q: () => Q,
    $k: () => eD,
    Ay: () => tW,
    CC: () => T.CC,
    D8: () => et,
    Dd: () => el,
    EJ: () => e6,
    EL: () => Y,
    Em: () => tw,
    FJ: () => en,
    FY: () => ez,
    GX: () => e1,
    Ge: () => eW,
    J$: () => eR,
    JM: () => W,
    Ke: () => ee,
    LE: () => eq,
    Mn: () => ei,
    Nc: () => eC,
    OU: () => ed,
    Of: () => eX,
    Om: () => e2,
    PK: () => eG,
    Pg: () => e0,
    Q8: () => eN,
    RH: () => eo,
    TW: () => T.ki,
    Tm: () => ep,
    To: () => tH,
    U8: () => J,
    UC: () => X,
    Uf: () => eL,
    YE: () => T.YE,
    Zb: () => eO,
    Zw: () => ea,
    _e: () => eS,
    aE: () => eJ,
    aZ: () => e7,
    bx: () => em,
    e1: () => tx,
    ee: () => e$,
    ff: () => eY,
    iv: () => tF,
    jh: () => eM,
    ji: () => eA,
    k8: () => tB,
    kX: () => eT,
    ki: () => eU,
    m6: () => er,
    mH: () => tN,
    mv: () => tt,
    nB: () => eu,
    nK: () => tR,
    pb: () => q,
    qn: () => e3,
    re: () => eZ,
    sS: () => ex,
    tS: () => eK,
    tW: () => eQ,
    xq: () => eE,
    y8: () => K,
    ys: () => eb,
    z4: () => ey,
}),
    n(65821),
    n(457529),
    n(896048),
    n(667532),
    n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(989349),
    o = n.n(a),
    s = n(311907),
    l = n(975807),
    c = n(366999),
    u = n(626584),
    d = n(367888),
    f = n(493740),
    p = n(832343),
    _ = n(832946),
    h = n(287809),
    m = n(615405),
    g = n(295405),
    E = n(97352),
    y = n(166403),
    b = n(739508),
    O = n(405269),
    v = n(927813),
    A = n(255438),
    I = n(723702),
    S = n(125584),
    T = n(474090),
    C = n(580630),
    N = n(652215),
    w = n(100544),
    R = n(788868),
    P = n(88001),
    D = n(818348),
    L = n(985018),
    x = n(519412);

function M(e, t, n) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}

function k(e, t) {
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

function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    F = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    V = new u.A("PremiumUtils.tsx"),
    B = 2592e6;
var H = (function (e) {
    return (e.MID = "mid"), (e.HIGH = "high"), e;
})({});

function Y(e) {
    return e.items.find((e) => R.JM.has(e.planId));
}

function W(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        o = null != (t = g.A.defaultPaymentSourceId) ? t : void 0,
        s = y.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (o = s.paymentSourceId),
        K(
            e,
            n,
            r,
            {
                paymentSourceId: o,
                currency: i,
            },
            a,
        )
    );
}

function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: o } = r;
    if (null != E.A.get(e)) {
        let r = N.lid.DEFAULT;
        n ? (r = N.lid.GIFT) : t && (r = N.lid.PREMIUM_TIER_1);
        let s = Z(e, {
            paymentSourceId: a,
            purchaseType: r,
            currency: o,
        });
        if (null == s) {
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
                            currency: null != o ? o : "unknown",
                        },
                    }),
                t)
            );
        }
        return s;
    }
    let s = Error("Plan not found");
    throw (
        (i &&
            (0, b.pM)(s, {
                tags: {
                    planId: e,
                    currency: null != o ? o : "unknown",
                },
                extra: U(j({}, r), {
                    isGift: n,
                }),
            }),
        s)
    );
}

function z(e, t) {
    let n = E.A.get(e);
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

function q(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      purchaseType: N.lid.DEFAULT,
                  },
        r = z(e, n);
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

function Z(e) {
    let {
            paymentSourceId: t,
            purchaseType: n,
            currency: r,
        } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                  purchaseType: N.lid.DEFAULT,
              },
        i = q(e, {
            paymentSourceId: t,
            purchaseType: n,
        });
    return (0 === i.length &&
        V.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)),
    null != r)
        ? i.find((e) => e.currency === r.toLowerCase())
        : i[0];
}

function Q(e) {
    return {
        amount: e.amount,
        currency: e.currency,
        exponent: e.exponent,
    };
}

function X(e, t, n) {
    let r,
        i,
        a = {
            currency: t,
            amount: 0,
            tax: 0,
            taxInclusive: !1,
        },
        o = (0, d._1)(e);
    null != o && (r = R.hd[o.planId].premiumType);
    let s = (0, T.CC)(r, R.PremiumTypes.TIER_0),
        l = (0, T.CC)(r, R.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = R.pW.has(r.planId) ? l : !R.JM.has(r.planId) && s),
            (e =
                void 0 === n
                    ? W(r.planId, i, !1, t)
                    : K(r.planId, i, !1, {
                          paymentSourceId: n,
                          currency: t,
                      })),
            (a.amount += e.amount * r.quantity);
    }
    return Q(a);
}

function J(e, t, n, r) {
    let a;
    return (
        null === t && (i()(null !== e, "Subscription can't be null"), (t = [])),
        X((a = null !== e ? eJ(e, t) : e$(t)), n, r)
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

function ee(e) {
    switch (e) {
        case R.Ff.MONTH:
            return L.intl.string(L.t.FPybU7);
        case R.Ff.YEAR:
            return L.intl.string(L.t.tfqrhj);
        case R.Ff.DAY:
        case R.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}

function et(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : R.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case R.WT.MONTH:
                let o = L.intl.formatToPlainString(a === R.PremiumTypes.TIER_0 ? L.t.NPKsLz : L.t.poEovT, {
                    timeInterval: L.intl.string(L.t.FPybU7),
                });
                return i ? o : L.intl.string(L.t.Mh9bTt);
            case R.WT.YEAR:
                let s = L.intl.formatToPlainString(a === R.PremiumTypes.TIER_0 ? L.t.NPKsLz : L.t.poEovT, {
                    timeInterval: L.intl.string(L.t.tfqrhj),
                });
                return i ? s : L.intl.string(L.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case R.WT.MONTH:
            if (1 !== r)
                return L.intl.formatToPlainString(L.t["0UlZnH"], {
                    intervalCount: r,
                });
            return L.intl.string(L.t.DKzs96);
        case R.WT.YEAR:
            return L.intl.string(L.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}

function en(e) {
    switch (e) {
        case R.WT.MONTH:
            return L.intl.string(L.t.FPybU7);
        case R.WT.YEAR:
            return L.intl.string(L.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}

function er(e) {
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

function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case R.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? L.intl.format(L.t.TZXHNj, {
                      duration: r,
                  })
                : n
                  ? L.intl.string(L.t["81iAgs"])
                  : L.intl.string(L.t["0efVPy"]);
        case R.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? L.intl.format(L.t.eqRhC7, {
                      duration: r,
                  })
                : n
                  ? L.intl.string(L.t.UvzqY1)
                  : L.intl.string(L.t.eoVuBn);
        case R.gD.PREMIUM_MONTH_TIER_1:
            return n ? L.intl.string(L.t["g/dH5g"]) : L.intl.string(L.t["7O6qSq"]);
        case R.gD.PREMIUM_YEAR_TIER_1:
            return n ? L.intl.string(L.t.pdZJaq) : L.intl.string(L.t.Md5xbi);
        case R.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? L.intl.format(L.t.aI6QXz, {
                      duration: r,
                  })
                : n
                  ? L.intl.string(L.t.SmVbHc)
                  : L.intl.string(L.t.FKYNC6);
        case R.gD.PREMIUM_GROUP_MONTH:
            return n ? L.intl.string(L.t.SmVbHc) : L.intl.string(L.t.FKYNC6);
        case R.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? L.intl.format(L.t["1wBcPi"], {
                      duration: r,
                  })
                : n
                  ? L.intl.string(L.t.JIq4O1)
                  : L.intl.string(L.t["cfu/5d"]);
        case R.gD.PREMIUM_3_MONTH_TIER_2:
            return L.intl.string(L.t.wCbINr);
        case R.gD.PREMIUM_6_MONTH_TIER_2:
            return L.intl.string(L.t["e3/ArU"]);
        case R.gD.PREMIUM_MONTH_GUILD:
            return n ? L.intl.string(L.t["6ZR3By"]) : L.intl.string(L.t["h80cx/"]);
        case R.gD.PREMIUM_YEAR_GUILD:
            return n ? L.intl.string(L.t.YDpAzZ) : L.intl.string(L.t.ZHkls0);
        case R.gD.PREMIUM_3_MONTH_GUILD:
            return L.intl.string(L.t.EZHHB6);
        case R.gD.PREMIUM_6_MONTH_GUILD:
            return L.intl.string(L.t.X2KDO2);
        case R.gD.PREMIUM_MONTH_LEGACY:
            return L.intl.string(L.t.PD6k79);
        case R.gD.PREMIUM_YEAR_LEGACY:
            return L.intl.string(L.t.LtJgTC);
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

function ea(e) {
    switch (e) {
        case R.pe.TIER_0:
            return L.intl.string(L.t["t9uG/o"]);
        case R.pe.TIER_1:
            return L.intl.string(L.t.FSOz78);
        case R.pe.TIER_2:
            return L.intl.string(L.t.lG6a5x);
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

function eo(e) {
    var t;
    let n = null == (t = R.hd[e]) ? void 0 : t.premiumType,
        r = null != n ? R.Mr[n] : null;
    if (null != r) return L.intl.string(r);
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

function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return t ? "Basic" : L.intl.string(L.t["t9uG/o"]);
        case R.PremiumTypes.TIER_1:
            return t ? "Classic" : L.intl.string(L.t.FSOz78);
        case R.PremiumTypes.TIER_2:
            return L.intl.string(L.t.lG6a5x);
    }
}

function ec(e) {
    var t, n, r, i, a, s, c, u, d, f;
    let {
            subscription: p,
            planId: _,
            price: m,
            includePremiumGuilds: g,
            hasDiscountApplied: E,
            activeDiscountInfo: y,
            renewalInvoicePreview: b,
            hasFractionalPremiumWithSub: v,
        } = e,
        A = R.hd[_],
        I = tC(W(A.id), A.interval),
        S =
            eU(p) ||
            (null == p.paymentSourceId &&
                !p.isPurchasedExternally &&
                !(null == (r = h.default.getCurrentUser()) ? void 0 : r.hasFreePremium())),
        T = null != m && null == p.paymentGateway,
        C =
            p.status === N.Dmq.UNPAID &&
            null !== p.latestInvoice &&
            (null == (i = p.latestInvoice) ? void 0 : i.status) === N.lT7.OPEN,
        w = S ? N.Dmq.CANCELED : C ? N.Dmq.UNPAID : p.status,
        P =
            null ==
                (t =
                    null != (n = null == b ? void 0 : b.taxInclusive)
                        ? n
                        : null == (a = p.latestInvoice)
                          ? void 0
                          : a.taxInclusive) || t,
        D = R.M4 + (g ? em(p.additionalPlans) : 0),
        x = T
            ? P
                ? L.intl.format(L.t["cd+hqB"], {
                      price: m,
                  })
                : L.intl.format(L.t.NUkcpF, {
                      price: m,
                  })
            : L.intl.string(L.t.zYx3Y6),
        M = T
            ? P
                ? L.intl.format(L.t.VsKcFB, {
                      price: m,
                  })
                : L.intl.format(L.t.hJ5xEX, {
                      price: m,
                  })
            : L.intl.string(L.t["8rSipI"]),
        j = T
            ? P
                ? L.intl.format(L.t["jRy6/J"], {
                      price: m,
                      num: D,
                  })
                : L.intl.format(L.t.tTNE8M, {
                      price: m,
                      num: D,
                  })
            : L.intl.format(L.t["U+z/HJ"], {
                  num: D,
              });
    switch (_) {
        case R.gD.PREMIUM_MONTH_TIER_0:
        case R.gD.PREMIUM_YEAR_TIER_0:
            switch (w) {
                case N.Dmq.CANCELED:
                    return T
                        ? P
                            ? L.intl.format(L.t["USi/nc"], {
                                  price: m,
                              })
                            : L.intl.format(L.t["FS//l2"], {
                                  price: m,
                              })
                        : L.intl.string(L.t.JshLzq);
                case N.Dmq.ACCOUNT_HOLD:
                    return T
                        ? P
                            ? L.intl.format(L.t["5mv+2i"], {
                                  price: m,
                              })
                            : L.intl.format(L.t.nkAEfZ, {
                                  price: m,
                              })
                        : L.intl.format(L.t.SsLIXS, {});
                case N.Dmq.UNPAID:
                    return L.intl.format(L.t.cmkbFB, {});
                case N.Dmq.PAUSE_PENDING:
                    let k = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != k
                        ? L.intl.format(L.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: k,
                          })
                        : L.intl.format(L.t.VlWufv, {
                              pauseDate: p.currentPeriodEnd,
                          });
                case N.Dmq.PAUSED:
                    if (v) return x;
                    return L.intl.format(L.t["6RTdZA"], {
                        resumeDate: p.pauseEndsAt,
                    });
                case N.Dmq.PAST_DUE:
                    return L.intl.format(L.t["d+0vwo"], {
                        endDate: (0, O.i$)(eA(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return x;
            }
        case R.gD.PREMIUM_MONTH_TIER_1:
        case R.gD.PREMIUM_YEAR_TIER_1:
            switch (w) {
                case N.Dmq.CANCELED:
                    return T
                        ? P
                            ? L.intl.format(L.t.cXy8Bp, {
                                  price: m,
                              })
                            : L.intl.format(L.t["C/XsHt"], {
                                  price: m,
                              })
                        : L.intl.string(L.t.K6tYFa);
                case N.Dmq.ACCOUNT_HOLD:
                    return T
                        ? P
                            ? L.intl.format(L.t.HBkIBi, {
                                  price: m,
                              })
                            : L.intl.format(L.t.ZsO1Sx, {
                                  price: m,
                              })
                        : L.intl.format(L.t["0+/WH7"], {});
                case N.Dmq.UNPAID:
                    return L.intl.format(L.t.McIzwj, {});
                case N.Dmq.PAUSE_PENDING:
                    let U = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != U
                        ? L.intl.format(L.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: U,
                          })
                        : L.intl.format(L.t.VlWufv, {
                              pauseDate: p.currentPeriodEnd,
                          });
                case N.Dmq.PAUSED:
                    if (v) return M;
                    return L.intl.format(L.t["6RTdZA"], {
                        resumeDate: p.pauseEndsAt,
                    });
                case N.Dmq.PAST_DUE:
                    return L.intl.format(L.t["d+0vwo"], {
                        endDate: (0, O.i$)(eA(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return M;
            }
        case R.gD.PREMIUM_MONTH_TIER_2:
        case R.gD.PREMIUM_YEAR_TIER_2:
        case R.gD.PREMIUM_3_MONTH_TIER_2:
        case R.gD.PREMIUM_6_MONTH_TIER_2:
        case R.gD.PREMIUM_GROUP_MONTH:
            switch (w) {
                case N.Dmq.CANCELED:
                    return T
                        ? P
                            ? L.intl.format(L.t.xoFgRh, {
                                  price: m,
                                  num: D,
                              })
                            : L.intl.format(L.t.nXdbKo, {
                                  price: m,
                                  num: D,
                              })
                        : L.intl.format(L.t.EcSdRH, {
                              num: D,
                          });
                case N.Dmq.ACCOUNT_HOLD:
                    return T
                        ? P
                            ? L.intl.format(L.t["5C/0QG"], {
                                  price: m,
                                  num: D,
                              })
                            : L.intl.format(L.t.xfYkhu, {
                                  price: m,
                                  num: D,
                              })
                        : L.intl.format(L.t.ivjxcn, {
                              num: D,
                          });
                case N.Dmq.UNPAID:
                    return L.intl.format(L.t["0HopYf"], {
                        num: D,
                    });
                case N.Dmq.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != G
                        ? L.intl.format(L.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G,
                          })
                        : L.intl.format(L.t.VlWufv, {
                              pauseDate: p.currentPeriodEnd,
                          });
                case N.Dmq.PAUSED:
                    if (v) return j;
                    return L.intl.format(L.t["6RTdZA"], {
                        resumeDate: p.pauseEndsAt,
                    });
                case N.Dmq.BILLING_RETRY:
                    return L.intl.format(L.t["IlJ/HV"], {
                        endDate: o()(p.currentPeriodStart).add(R.bx, "days").toDate(),
                    });
                case N.Dmq.PAST_DUE:
                    return L.intl.format(L.t["d+0vwo"], {
                        endDate: (0, O.i$)(eA(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return E
                        ? _ === R.gD.PREMIUM_YEAR_TIER_2
                            ? L.intl.format(L.t["+qqh6g"], {
                                  percent: null != (s = null == y ? void 0 : y.percentage) ? s : R.Cq,
                                  regularPrice: I,
                              })
                            : P
                              ? L.intl.formatToPlainString(L.t["3ZiutU"], {
                                    percent: null != (c = null == y ? void 0 : y.percentage) ? c : R._$,
                                    regularPrice: I,
                                    numMonths: null != (u = null == y ? void 0 : y.duration) ? u : R.OJ,
                                })
                              : L.intl.formatToPlainString(L.t["G6+XOT"], {
                                    percent: null != (d = null == y ? void 0 : y.percentage) ? d : R._$,
                                    regularPrice: I,
                                    numMonths: null != (f = null == y ? void 0 : y.duration) ? f : R.OJ,
                                })
                        : j;
            }
        default:
            throw Error("Invalid planId ".concat(_));
    }
}

function eu(e) {
    let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: r,
            includePremiumGuilds: a = !1,
            hasDiscountApplied: o = !1,
            activeDiscountInfo: s,
            hasFractionalPremiumWithSub: l = !1,
        } = e,
        c = E.A.get(r);
    return (
        i()(null != c, "Missing plan"),
        ec({
            subscription: n,
            planId: c.id,
            price: eF(t, n, c),
            includePremiumGuilds: a,
            hasDiscountApplied: o,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l,
        })
    );
}

function ed(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, _.m1)(t) ? null : ei(t),
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
                ? L.t.Pi5yMJ
                : null,
        o =
            null != a
                ? L.intl.formatToPlainString(a, {
                      num: null == i ? void 0 : i.quantity,
                  })
                : void 0;
    if (null != r && null != o)
        return L.intl.formatToPlainString(L.t.FN5T9r, {
            premiumDescription: r,
            premiumGuildDescription: o,
        });
    if (null != r) return r;
    if (null != o) return o;
    throw Error("Subscription without premium or premium guild subscription");
}

function ef(e) {
    return e === R.pe.TIER_0 || e === R.pe.TIER_1 || e === R.pe.TIER_2;
}

function ep(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: a } = e;
    if (null == t || !n) return [];
    let o = void 0 !== a && t === R.hd[a].skuId ? a : void 0,
        s = [];
    switch (t) {
        case R.pe.TIER_0:
            s = [R.gD.PREMIUM_YEAR_TIER_0, R.gD.PREMIUM_MONTH_TIER_0];
            break;
        case R.pe.TIER_1:
            s = [R.gD.PREMIUM_MONTH_TIER_1];
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
            s = [R.gD.PREMIUM_YEAR_TIER_2, ...l, R.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error("Unexpected SKU: ".concat(t));
    }
    if (void 0 !== o) {
        let e = s.indexOf(o);
        s.splice(e, 1), s.unshift(o);
    }
    return s;
}

function e_(e) {
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

function eh(e) {
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return R.pe.TIER_0;
        case R.PremiumTypes.TIER_1:
            return R.pe.TIER_1;
        case R.PremiumTypes.TIER_2:
            return R.pe.TIER_2;
    }
}

function em(e) {
    let t = E.A.getPlanIdsForSkus([tN(R.pe.GUILD)]);
    i()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eg = new Set([
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

function eE(e) {
    return eg.has(e);
}

function ey(e) {
    return R.pW.has(e);
}

function eb(e) {
    return eE(e) || ey(e);
}

function eO(e) {
    return null != e && e === R.gD.PREMIUM_GROUP_MONTH;
}

function ev(e) {
    return er(e) === R.PremiumTypes.TIER_2 ? R.M4 : 0;
}

function eA(e) {
    var t, n, r, i, a;
    if (e.isPurchasedViaApple && (null == (t = e.metadata) ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = o()(e.metadata.apple_grace_period_expires_date);
        return {
            days: o().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t,
        };
    }
    if (
        e.isPurchasedViaGoogle &&
        (null == (n = e.metadata) ? void 0 : n.google_grace_period_expires_date) != null &&
        (null == (r = e.metadata) ? void 0 : r.google_original_expires_date) != null
    ) {
        let t = o()(e.metadata.google_grace_period_expires_date),
            n = o()(e.metadata.google_original_expires_date);
        return {
            days: o().duration(t.diff(n)).days(),
            expiresDate: t,
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? R.U1 : R.L9;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, "days"),
        };
    }
    if ((null == (i = e.metadata) ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: o()(null == (a = e.metadata) ? void 0 : a.grace_period_expires_date).diff(
                e.currentPeriodStart,
                "days",
            ),
            expiresDate: o()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? R.a5 : R.EV;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, "days"),
        };
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
                      fractionalState: R.xc.NONE,
                      startsAt: o()(0),
                      endsAt: o()(0),
                      currentEntitlementId: "",
                      unactivatedUnits: [],
                  },
        a = null !== n && e.status === N.Dmq.PAST_DUE ? n : t,
        s = r
            ? (0, C.$g)(
                  a.invoiceItems
                      .filter((e) => R.VY.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  a.currency,
              )
            : (0, C.$g)(a.total, a.currency);
    if (null != e.trialId && R.BT.includes(e.trialId) && null == e.paymentSourceId)
        return L.intl.format(L.t["7ZS2m1"], {
            trialEnd: e.currentPeriodEnd,
        });
    if (e.status === N.Dmq.CANCELED)
        return L.intl.format(L.t["Whp/qk"], {
            endDate: t.subscriptionPeriodStart,
        });
    if (e.status === N.Dmq.PAUSE_PENDING)
        return L.intl.format(L.t.uBLUGU, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt,
        });
    if (e.status === N.Dmq.PAUSED)
        return i.fractionalState !== R.xc.NONE
            ? L.intl.format(L.t.Q18lRK, {
                  renewalDate: i.endsAt.toDate(),
                  price: s,
              })
            : null == e.pauseEndsAt
              ? r
                  ? L.intl.format(L.t.KTYQCg, {
                        planName: L.intl.string(L.t.Ipxkog),
                        price: s,
                    })
                  : L.intl.string(L.t.fMz6Lg)
              : r
                ? L.intl.format(L.t.zcgtzf, {
                      planName: L.intl.string(L.t.Ipxkog),
                      resumeDate: e.pauseEndsAt,
                      price: s,
                  })
                : L.intl.format(L.t["V8+l6k"], {
                      resumeDate: e.pauseEndsAt,
                  });
    if (e.status === N.Dmq.PAST_DUE) {
        var l, c;
        let t = eA(e).expiresDate;
        return (e.isPurchasedViaGoogle &&
            (null == (l = e.metadata) ? void 0 : l.google_grace_period_expires_date) != null &&
            (t = o()(e.metadata.google_grace_period_expires_date)),
        e.isPurchasedViaApple &&
            (null == (c = e.metadata) ? void 0 : c.apple_grace_period_expires_date) != null &&
            (t = o()(e.metadata.apple_grace_period_expires_date)),
        e.isPurchasedExternally)
            ? L.intl.format(L.t.U2hb3W, {
                  endDate: t.toDate(),
                  paymentGatewayName: D.qm[e.paymentGateway],
                  paymentSourceLink: eQ(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
              })
            : L.intl.format(L.t.qEIzyi, {
                  endDate: t.toDate(),
                  price: s,
              });
    }
    {
        if (e.status === N.Dmq.BILLING_RETRY)
            return L.intl.format(L.t.EMTLOT, {
                endDate: o()(e.currentPeriodStart).add(R.bx, "days").toDate(),
                price: s,
            });
        if (e.status === N.Dmq.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, I.isAndroid)()
                ? L.intl.format(L.t["dtcxw+"], {
                      endDate: o()(e.currentPeriodStart).add(R.ph, "days").toDate(),
                      paymentGatewayName: D.qm[e.paymentGateway],
                      paymentSourceLink: eQ(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : L.intl.format(L.t.EMTLOT, {
                      endDate: o()(e.currentPeriodStart).add(R.ph, "days").toDate(),
                      price: s,
                  });
        if (ew(e))
            return L.intl.format(L.t.awpB0C, {
                prepaidEndDate: e.currentPeriodEnd,
            });
        if (e.status === N.Dmq.UNPAID)
            return L.intl.format(L.t.CzTKom, {
                maxProcessingTimeInDays: R.G4,
            });
        if (e.isPurchasedExternally)
            return L.intl.format(L.t.ZlWXgR, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: D.qm[e.paymentGateway],
                subscriptionManagementLink: eQ(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            });
        let n = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (n = eS(n, i.unactivatedUnits)),
            r
                ? L.intl.format(L.t.Vl3cED, {
                      planName: L.intl.string(L.t.Ipxkog),
                      renewalDate: n,
                      price: s,
                  })
                : L.intl.format(L.t.Q18lRK, {
                      renewalDate: n,
                      price: s,
                  })
        );
    }
}

function eS(e, t, n, r) {
    let i = o()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tG(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}

function eT(e) {
    let t = tG(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === R.xc.NONE)) return "";
    let n = {
            days: L.t.fYmirx,
            hours: L.t["C3RO+g"],
            minutes: L.t.r77oHc,
        },
        r = (0, c.Vb)((0, O.Tf)(0, t * v.A.Millis.HOUR));
    return (0, O.uN)(r, n);
}

function eC(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === N.Dmq.PAST_DUE;
}

function eN(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? L.intl.string(L.t["0rzJ4J"]) : L.intl.string(L.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = L.intl.string(L.t.a9Mdb3)),
        t
    );
}

function ew(e) {
    return null != e.paymentSourceId && eR(e.paymentSourceId);
}

function eR(e) {
    if (null == e) return !1;
    let t = g.A.getPaymentSource(e);
    return null != t && D.AD.has(t.type);
}

function eP(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = em(n);
    return 0 === (null != t ? em(t.additionalPlans) : null) && 0 !== i ? N.Dmq.CANCELED : r;
}

function eD(e) {
    return e.isPurchasedExternally ? e.status === N.Dmq.CANCELED : eP(e) === N.Dmq.CANCELED;
}

function eL(e) {
    var t, n, r;
    let { subscription: a, user: o, price: s, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = a,
        f = E.A.get(u);
    i()(null != f, "Missing plan");
    let p = em(d),
        _ = eV(a.planId, a.paymentSourceId, a.currency, o).amount * p;
    if (null != l) {
        let e = l.invoiceItems.find((e) => R.pW.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    s = null != s ? s : (0, C.$g)(_, a.currency);
    let h =
        null ==
            (t =
                null != (n = null == l ? void 0 : l.taxInclusive)
                    ? n
                    : null == (r = a.latestInvoice)
                      ? void 0
                      : r.taxInclusive) || t;
    if (eD(a))
        return a.isPurchasedViaGoogle
            ? L.intl.format(L.t["3/WTrI"], {
                  quantity: p,
              })
            : h
              ? L.intl.format(L.t["0ozBSB"], {
                    quantity: p,
                    rate: (0, C.CE)(s, f.interval, f.intervalCount),
                })
              : L.intl.format(L.t["yjsv/s"], {
                    quantity: p,
                    rate: (0, C.CE)(s, f.interval, f.intervalCount),
                });
    switch (a.status) {
        case N.Dmq.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? L.intl.format(L.t.Nlf3nc, {
                      quantity: p,
                      boostQuantity: p,
                  })
                : h
                  ? L.intl.format(L.t.oiRy7v, {
                        quantity: p,
                        boostQuantity: p,
                        rate: (0, C.CE)(s, f.interval, f.intervalCount),
                    })
                  : L.intl.format(L.t["0QxOAi"], {
                        quantity: p,
                        boostQuantity: p,
                        rate: (0, C.CE)(s, f.interval, f.intervalCount),
                    });
        case N.Dmq.PAUSE_PENDING:
        case N.Dmq.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return L.intl.string(L.t.CduWAm);
            return L.intl.format(L.t["5iud9s"], {
                quantity: p,
            });
        default:
            return a.isPurchasedViaGoogle
                ? L.intl.format(L.t["5iud9s"], {
                      quantity: p,
                  })
                : h
                  ? L.intl.format(L.t.eDwrLA, {
                        quantity: p,
                        rate: (0, C.CE)(s, f.interval, f.intervalCount),
                    })
                  : L.intl.format(L.t.ijSDcI, {
                        quantity: p,
                        rate: (0, C.CE)(s, f.interval, f.intervalCount),
                    });
    }
}

function ex(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? K(e.id, !1, r, t) : W(e.id, !1, r),
        a = (0, C.$g)(i.amount, i.currency);
    return e.currency !== D.Yr.USD && !0 === n && (a = a.concat("*")), a;
}

function eM(e, t, n) {
    let r = ex(e, t, n);
    return (0, C.CE)(r, e.interval, e.intervalCount);
}

function ej(e, t) {
    let { planId: n } = e;
    if (e.status === N.Dmq.CANCELED || e.status === N.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eE(t);
    });
    return null == r ||
        (0, _.m1)(r.subscriptionPlanId) ||
        (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
        ? e.planId
        : r.subscriptionPlanId;
}

function ek(e, t) {
    let { status: n } = e;
    if (e.status === N.Dmq.CANCELED || e.status === N.Dmq.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eE(t);
    });
    return (null == r || (0, _.m1)(r.subscriptionPlanId)) && (n = N.Dmq.CANCELED), n;
}

function eU(e) {
    let { status: t, renewalMutations: n } = e;
    return t === N.Dmq.CANCELED || (null != n && (0, _.m1)(n.planId) && !e.isPurchasedExternally);
}

function eG(e) {
    return e === N.Dmq.PAST_DUE || e === N.Dmq.ACCOUNT_HOLD || e === N.Dmq.BILLING_RETRY;
}

function eF(e, t, n) {
    let r = e.findInvoiceItemByPlanId(n.id),
        i =
            null == r
                ? K(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency,
                  }).amount
                : r.amount;
    return (0, C.CE)((0, C.$g)(i, e.currency), n.interval, n.intervalCount);
}

function eV(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n,
                  }
                : {
                      country: m.A.ipCountryCodeWithFallback,
                      currency: n,
                  },
        a = E.A.get(e);
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
    let o = E.A.getForSkuAndInterval(tN(R.pe.GUILD), a.interval, a.intervalCount);
    if (null == o) {
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
    return K(o.id, (0, T.ki)(r), !1, i);
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

function eY(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case R.gD.PREMIUM_MONTH_TIER_0:
                return L.intl.string(L.t["0ggVqN"]);
            case R.gD.PREMIUM_YEAR_TIER_0:
                return L.intl.string(L.t["jm+ZQw"]);
            case R.gD.PREMIUM_MONTH_TIER_1:
                return L.intl.string(L.t.uph4Jx);
            case R.gD.PREMIUM_YEAR_TIER_1:
                return L.intl.string(L.t["D/l7Yt"]);
            case R.gD.PREMIUM_MONTH_TIER_2:
            case R.gD.PREMIUM_GROUP_MONTH:
                return L.intl.string(L.t["5l1MuV"]);
            case R.gD.PREMIUM_YEAR_TIER_2:
                return L.intl.string(L.t.G0mISV);
        }
    switch (r) {
        case R.gD.PREMIUM_MONTH_TIER_0:
            return n ? L.intl.string(L.t.cRCCJ3) : L.intl.string(L.t["/G3aKw"]);
        case R.gD.PREMIUM_YEAR_TIER_0:
            return n ? L.intl.string(L.t.cRCCJ3) : L.intl.string(L.t["2eQpsL"]);
        case R.gD.PREMIUM_MONTH_TIER_1:
            return n ? L.intl.string(L.t.cRCCJ3) : L.intl.string(L.t.gueLg5);
        case R.gD.PREMIUM_YEAR_TIER_1:
            return n ? L.intl.string(L.t.cRCCJ3) : L.intl.string(L.t["MhH/vW"]);
        case R.gD.PREMIUM_MONTH_TIER_2:
            return n ? L.intl.string(L.t.cRCCJ3) : L.intl.string(L.t.LQVQIq);
        case R.gD.PREMIUM_GROUP_MONTH:
            return L.intl.formatToPlainString(x.default.LwdrNi, {
                premiumGroupProductName: (0, P.DP)(),
            });
        case R.gD.PREMIUM_YEAR_TIER_2:
            return n ? L.intl.string(L.t.cRCCJ3) : L.intl.string(L.t["0nfg1x"]);
        case R.gD.PREMIUM_3_MONTH_TIER_2:
        case R.gD.PREMIUM_6_MONTH_TIER_2:
            return L.intl.formatToPlainString(L.t.BCD4fT, {
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
            return L.intl.string(L.t.eUEeCt);
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

function eW(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = E.A.get(t);
    return (
        i()(null != n, "Missing subscriptionPlan"),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount,
        }
    );
}

function eK(e) {
    let { intervalType: t = R.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? L.intl.formatToPlainString(L.t.fRNBRX, {
                          weeks: n / 7,
                      })
                    : L.intl.formatToPlainString(L.t.EIpHEj, {
                          weeks: n / 7,
                      });
            return r
                ? L.intl.formatToPlainString(L.t["6Cdzoy"], {
                      days: n,
                  })
                : L.intl.formatToPlainString(L.t["kbBj/h"], {
                      days: n,
                  });
        case R.WT.MONTH:
            return r
                ? L.intl.formatToPlainString(L.t.x5MgxS, {
                      months: n,
                  })
                : L.intl.formatToPlainString(L.t["4SEnCZ"], {
                      months: n,
                  });
        case R.WT.YEAR:
            return r
                ? L.intl.formatToPlainString(L.t["h+63yl"], {
                      years: n,
                  })
                : L.intl.formatToPlainString(L.t["9DFiHk"], {
                      years: n,
                  });
        default:
            throw Error("Unsupported interval duration.");
    }
}

function ez(e) {
    let { intervalType: t = R.WT.MONTH, intervalCount: n = 1 } = e,
        r = D.Yr.USD;
    try {
        r = W(R.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch (e) {}
    let i = (0, C.$g)(0, r, {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    switch (t) {
        case R.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return L.intl.formatToPlainString(L.t.C6i5Jt, {
                    weeks: n / 7,
                    price: i,
                });
            return L.intl.formatToPlainString(L.t.cR9ifw, {
                days: n,
                price: i,
            });
        case R.WT.MONTH:
            return L.intl.formatToPlainString(L.t["8FZfNo"], {
                months: n,
                price: i,
            });
        case R.WT.YEAR:
            return L.intl.formatToPlainString(L.t.xzAcST, {
                years: n,
                price: i,
            });
        default:
            throw Error("Unsupported interval duration.");
    }
}

function eq(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return ez({
            intervalType: t.interval,
            intervalCount: t.interval_count,
        });
    }
    return null;
}

function eZ(e) {
    let { intervalType: t = R.WT.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? L.intl.formatToPlainString(L.t.iVZYyl, {
                          weeks: n / 7,
                      })
                    : L.intl.formatToPlainString(L.t.EmoBD2, {
                          weeks: n / 7,
                      });
            return r
                ? L.intl.formatToPlainString(L.t.jzH70Z, {
                      days: n,
                  })
                : L.intl.formatToPlainString(L.t["k2UNz+"], {
                      days: n,
                  });
        case R.WT.MONTH:
            return r
                ? L.intl.formatToPlainString(L.t.erUSmA, {
                      months: n,
                  })
                : L.intl.formatToPlainString(L.t.kridzK, {
                      months: n,
                  });
        case R.WT.YEAR:
            return r
                ? L.intl.formatToPlainString(L.t.IfYQVC, {
                      years: n,
                  })
                : L.intl.formatToPlainString(L.t.PClsrw, {
                      years: n,
                  });
        default:
            throw Error("Unsupported interval duration.");
    }
}

function eQ(e, t) {
    switch (e) {
        case N.kM_.APPLE_PARTNER:
        case N.kM_.APPLE_ADVANCED_COMMERCE:
        case N.kM_.APPLE:
            return G[t];
        case N.kM_.GOOGLE:
            return F[t];
    }
    throw Error("Invalid external payment gateway ".concat(e));
}

function eX(e, t) {
    return (0, T.ki)(e) || eG(null == t ? void 0 : t.status);
}

function eJ(e, t) {
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

function e0(e, t, n, r) {
    var a, o;
    i()(r.has(t), "Expected planId in group");
    let s = !1,
        l = (null != (a = null == (o = e.renewalMutations) ? void 0 : o.items) ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  U(j({}, e), {
                      quantity: n,
                      planId: t,
                  }))
                : e,
        );
    if (!s) {
        let r = {
                planId: t,
                quantity: n,
            },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), l.push(r);
    }
    return l.filter((e) => 0 !== e.quantity);
}

function e1(e, t) {
    return e0(e, t, 1, R.JM);
}

function e2(e, t, n) {
    return e0(e, n, t, R.pW);
}

function e3(e) {
    var t;
    let n = null != (t = e.find((e) => !("id" in e))) ? t : e.find((e) => R.JM.has(e.planId));
    if (null != n) {
        let t = E.A.get(n.planId);
        i()(null != t, "Missing plan"),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = E.A.get(e.planId);
                if ((i()(null != r, "Missing plan"), t.interval === r.interval && t.intervalCount === r.intervalCount))
                    return e;
                let a = E.A.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return (
                    i()(null != a, "Missing planForInterval"),
                    U(j({}, e), {
                        planId: a.id,
                    })
                );
            }));
    }
    return e;
}

function e6(e) {
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

function e4(e) {
    return null == e ? null : e.items.find((e) => R.pW.has(e.planId));
}

function e5(e) {
    return null != e && null == Y(e) && null != e4(e);
}

function e7(e) {
    let t = null != e ? Y(e) : null;
    return null != t ? e_(t.planId) : null;
}

function e8(e) {
    if (null != e) {
        let t = Y(e);
        if (null != t) return er(t.planId);
    }
}

function e9(e) {
    if (null != e && null != e.renewalMutations) {
        let t = Y(e.renewalMutations);
        if (null != t) return er(t.planId);
    }
}

function te(e) {
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return w.gi.PREMIUM_TIER_0;
        case R.PremiumTypes.TIER_1:
            return w.gi.PREMIUM_TIER_1;
        case R.PremiumTypes.TIER_2:
            return w.gi.PREMIUM_TIER_2;
    }
}
let tt = (e) => null != e && Date.now() - e.createdAt.getTime() < B;

function tn(e) {
    return (0, f.RM)(f.gQ, e);
}

function tr(e) {
    return (0, f.RM)(f.JK, e);
}

function ti(e) {
    return (0, f.RM)(f.He, e);
}

function ta(e) {
    return (0, f.RM)(f.ii, e);
}

function to(e) {
    return (0, f.RM)(f.u6, e);
}

function ts(e) {
    return (0, f.RM)(f.nI, e);
}

function tl(e) {
    return (0, f.RM)(f.DG, e);
}

function tc(e) {
    return (0, f.RM)(f.nh, e);
}

function tu(e) {
    return (0, f.RM)(f._V, e);
}

function td(e) {
    return (0, f.RM)(f.OW, e);
}

function tf(e) {
    return (0, f.RM)(f.WQ, e);
}

function tp(e) {
    return (0, f.RM)(f._w, e);
}

function t_(e) {
    return (0, f.RM)(f.Qz, e);
}

function th(e) {
    return (0, f.RM)(f.Pm, e);
}

function tm(e) {
    return (0, f.RM)(f.x, e);
}

function tg(e) {
    return (0, f.RM)(f.cS, e);
}

function tE(e) {
    return (0, f.RM)(f.T7, e);
}

function ty(e) {
    return (0, f.RM)(f.lx, e);
}

function tb(e) {
    return (0, f.RM)(f.zL, e);
}

function tO(e, t) {
    return "high" === e ? (0, f.RM)(f.sj, t) : "mid" === e && (0, f.RM)(f.II, t);
}

function tv(e) {
    return (0, f.RM)(f.aE, e);
}

function tA(e) {
    return (0, f.RM)(f.GS, e);
}

function tI(e) {
    return (0, f.RM)(f.Zc, e);
}

function tS(e) {
    return (0, f.RM)(f.G3, e);
}

function tT(e) {
    return (0, f.RM)(f.z0, e);
}

function tC(e, t) {
    let n = (0, C.$g)(e.amount, e.currency),
        r = en(t);
    return "".concat(n, "/").concat(r);
}

function tN(e) {
    return e;
}

function tw(e) {
    return "isNitroLocked" in e;
}

function tR() {
    let e = (0, s.bG)([h.default], () => h.default.getCurrentUser());
    return (0, T.YE)(e, R.PremiumTypes.TIER_2);
}

function tP(e) {
    return null != e && R.n0.includes(e) ? 1 : 2;
}

function tD(e) {
    return e === R.Tt ? R.h7 : e === R.yo ? R.CA : R.CQ;
}

function tL() {
    return R.CQ;
}

function tx(e) {
    let t = (0, p.N)("getOfferNoticeThreshold");
    return 0 !== t ? t : tM(e) ? tD(e.trial_id) : tj(e) ? tL() : R.CQ;
}

function tM(e) {
    return null != e && "trial_id" in e;
}

function tj(e) {
    return null != e && "discount_id" in e;
}

function tk(e) {
    if (e === R.WT.YEAR) return L.intl.string(L.t.tfqrhj);
    if (e === R.WT.MONTH) return L.intl.string(L.t.FPybU7);
    throw Error("Invalid interval type: ".concat(e));
}

function tU(e) {
    return null != e && !e.isProvisional && !e.bot;
}

function tG(e) {
    return tF(e.map((e) => e.skuId));
}

function tF(e) {
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
let tV = (e) => {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: r = {} } = e,
        i = R.En[t.skuId];
    return null == i ? null : K(i, !1, n, r);
};

function tB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== R.WT.YEAR) return;
    let r = tV({
        subscriptionPlan: e,
        isGift: t,
        priceOptions: n,
    });
    if (null == r) return;
    let i = K(e.id, !1, t, n);
    if (0 !== r.amount) return Math.floor(100 * (1 - i.amount / (12 * r.amount)));
}

function tH(e) {
    return null == e ? 0 : Math.max((0, O.m_)(new Date(), new Date(e)), 0);
}

function tY(e) {
    return Math.max(1, Math.ceil((0, O.c_)(new Date(e.currentPeriodEnd), new Date())));
}
let tW = Object.freeze({
    isNewUser: tt,
    isPremiumAtLeast: T.CC,
    isPremium: T.ki,
    isPremiumExactly: T.YE,
    isPremiumEligible: tU,
    getPrice: K,
    getDefaultPrice: W,
    getInterval: $,
    getIntervalString: et,
    getIntervalStringAsNoun: en,
    getPremiumType: er,
    getTierDisplayNameByPlanId: eo,
    getDisplayName: ei,
    getPremiumPlanOptions: ep,
    getReverseTrialWeeks: tP,
    formatInterval: tk,
    getPlanDescription: ec,
    isPremiumSku: ef,
    getIntervalMonths: es,
    getUserMaxFileSize: S.f,
    getSkuIdForPlan: e_,
    getSkuIdForPremiumType: eh,
    getNumIncludedPremiumGuildSubscriptionSlots: ev,
    getBillingInformationString: eI,
    extendDateWithUnconsumedFractionalPremium: eS,
    getUnactivatedFractionalPremiumDurationString: eT,
    isSwitchingPlansDisabled: eC,
    getSwitchingPlansDisabledMessage: eN,
    isNoneSubscription: _.m1,
    getPlanIdFromInvoice: ej,
    getStatusFromInvoice: ek,
    isBaseSubscriptionCanceled: eU,
    getPremiumGuildIntervalPrice: eV,
    hasAccountCredit: eB,
    hasUnconsumedGiftForSubscriptionPlan: eH,
    getBillingReviewSubheader: eY,
    getIntervalForInvoice: eW,
    getPremiumPlanItem: Y,
    getGuildBoostPlanItem: e4,
    isBoostOnlySubscription: e5,
    getPremiumSkuIdForSubscription: e7,
    getPremiumTypeFromSubscription: e8,
    getPremiumTypeFromSubscriptionRenewalMutations: e9,
    getPremiumGradientColor: te,
    getUnactivatedFractionalPremiumHours: tG,
    castPremiumSubscriptionAsSkuId: tN,
    calculateDiscountPercentageForYearlyPlan: tB,
    getDaysSincePremium: tH,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: tY,
    canUseAnimatedEmojis: tn,
    canUseEmojisEverywhere: tr,
    canUseSoundboardEverywhere: ti,
    canUseCustomCallSounds: ta,
    canUploadLargeFiles: to,
    canUseBadges: ts,
    canUseHighVideoUploadQuality: tl,
    canEditDiscriminator: tc,
    hasBoostDiscount: tu,
    canUseAnimatedAvatar: td,
    canUseFancyVoiceChannelReactions: tf,
    canInstallPremiumApplications: tp,
    canUseIncreasedMessageLength: t_,
    canUseIncreasedGuildCap: th,
    canRedeemPremiumPerks: tm,
    canUsePremiumProfileCustomization: tg,
    canUsePremiumAppIcons: tE,
    canUsePremiumGuildMemberProfile: ty,
    canUseClientThemes: tb,
    canStreamQuality: tO,
    hasFreeBoosts: tv,
    canUseCustomStickersEverywhere: tA,
    canUseCustomBackgrounds: tI,
    canUseCollectibles: tS,
    canUsePremiumVoiceFilters: tT,
    formatPriceString: tC,
    StreamQuality: H,
});
