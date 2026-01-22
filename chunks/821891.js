n.d(t, {
    A: () => E,
}),
    n(65821),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(658679),
    s = n(166403),
    o = n(739508),
    l = n(975571),
    c = n(927578),
    u = n(580630),
    d = n(615396),
    f = n(652215),
    p = n(758836),
    _ = n(788868),
    h = n(985018),
    m = n(186119);
let g = (e, t, n, r) => {
        if (null == e || null == t || null == n) {
            let e = Error("Missing base rate for legal fine print"),
                t = r || "none";
            return (
                (0, o.pM)(e, {
                    tags: {
                        planId: t,
                    },
                }),
                null
            );
        }
        return (0, u.CE)((0, u.$g)(e.amount, e.currency), t, n);
    },
    E = function (e) {
        let t,
            n,
            o,
            E,
            {
                subscriptionPlan: b,
                isGift: y,
                isTrial: O,
                isOrbCheckout: A,
                rentalDuration: v,
                isEmbeddedIAP: S,
                renewalInvoice: I,
                paymentSourceType: T,
                hide: C,
                purchaseType: N,
                productLine: R,
                proratedAmount: w,
                basePrice: P,
                currentSubscription: D,
                skuId: x,
                applicationName: L,
                hasAlreadyLinked: j,
            } = e,
            M = (0, i.bG)([s.A], () => s.A.inReverseTrial());
        if (C) return null;
        let k = null == e.planGroup ? [] : e.planGroup;
        if (null != I) {
            let e = c.Ay.getIntervalForInvoice(I);
            (t = e.intervalType),
                (n = e.intervalCount),
                (o = (0, u.CE)((0, u.$g)(I.total, I.currency), t, n)),
                (E = (0, u.CE)((0, u.$g)(I.subtotal, I.currency), t, n));
        } else null != b && ((t = b.interval), (n = b.intervalCount));
        let U = (0, a.R)({
                purchaseType: N || f.VVm.SUBSCRIPTION,
                plan: b,
                premiumSubscription: null == D ? null : D,
                productLine: R,
                isGift: !!y,
                planGroup: k,
                isPrepaidPaymentSource: !1,
            }),
            G = h.intl.format(h.t.Y2Rkqc, {
                primaryText: U,
                paidURL: f.X7G.PAID_TERMS,
            }),
            V = h.intl.format(h.t.H2uH5b, {
                primaryText: U,
                paidURL: f.X7G.PAID_TERMS,
            }),
            F = "",
            B = "";
        if (A) {
            F =
                null != v && v > 0
                    ? h.intl.format(h.t.itoo7A, {
                          days: v,
                          virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.X7G.PAID_TERMS,
                      })
                    : h.intl.format(h.t.xlJyOM, {
                          virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.X7G.PAID_TERMS,
                      });
            let e = "";
            x === p.Dp.ORB_PROFILE_BADGE
                ? (e = h.intl.string(h.t.APcKRo))
                : x === p.Dp.FRACTIONAL_PREMIUM
                  ? (e = h.intl.string(h.t.FhJ74j))
                  : null == v && (e = h.intl.string(h.t["Sxed/G"])),
                Array.isArray(F) ? (F = [...F, " ".concat(e)]) : (F += " ".concat(e));
        } else if (S)
            if (null != o && (null == I ? void 0 : I.subscriptionPeriodEnd) != null)
                F = h.intl.format(h.t["2VPTay"], {
                    subtotalRate: E,
                });
            else
                switch (t) {
                    case _.WT.MONTH:
                        F =
                            1 === n
                                ? h.intl.format(h.t["+ywPmZ"], {})
                                : h.intl.format(h.t.oBwZfh, {
                                      intervalCount: n,
                                  });
                        break;
                    case _.WT.YEAR:
                        F = h.intl.format(h.t.y9gsX5, {});
                        break;
                    case void 0:
                        F = h.intl.format(h.t.UxGFH4, {});
                        break;
                    default:
                        throw Error("Unexpected interval: ".concat(t));
                }
        else if (N === f.VVm.ONE_TIME)
            switch (R) {
                case f.EZt.COLLECTIBLES:
                    (B = G),
                        (F = y
                            ? h.intl.format(h.t.Amdf8X, {
                                  paidURL: f.X7G.PAID_TERMS,
                              })
                            : h.intl.format(h.t["40vM4o"], {
                                  paidURL: f.X7G.PAID_TERMS,
                              }));
                    break;
                case f.EZt.GUILD_PRODUCT:
                    (B = G),
                        (F = h.intl.format(h.t["GEAQ+u"], {
                            paidURL: f.X7G.PAID_TERMS,
                        }));
                    break;
                case f.EZt.SOCIAL_LAYER_GAME_ITEM:
                    (B = G),
                        (F =
                            y || !0 === j
                                ? h.intl.format(h.t.VCR6hI, {
                                      applicationName: null != L ? L : "game's",
                                  })
                                : h.intl.format(h.t.CVITgq, {
                                      applicationName: null != L ? L : "game's",
                                  }));
                    break;
                default:
                    (B = V), (F = h.intl.string(h.t["9/siSQ"]));
            }
        else if (null == b || y)
            switch ((y && (B = G), t)) {
                case _.WT.MONTH:
                    (F = y ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"])),
                        (F = y
                            ? h.intl.string(h.t.IjNapk)
                            : 1 === n
                              ? h.intl.string(h.t["/sGXPr"])
                              : h.intl.formatToPlainString(h.t.Fqjihk, {
                                    intervalCount: n,
                                }));
                    break;
                case _.WT.YEAR:
                    F = y ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
                    break;
                case void 0:
                    F = "";
                    break;
                default:
                    throw Error("Unexpected interval: ".concat(t));
            }
        else {
            let e,
                r = (0, a.R)({
                    productLine: R,
                    purchaseType: f.VVm.SUBSCRIPTION,
                    plan: b,
                    premiumSubscription: null == D ? null : D,
                    isGift: !1,
                    planGroup: k,
                    isPrepaidPaymentSource: !1,
                });
            O || (e = g(P, t, n, b.id)),
                (F = (null == D ? void 0 : D.isPausedAllowsResumeButNotUpdates)
                    ? h.intl.format(h.t.B6oNwB, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.X7G.PAID_TERMS,
                          contactLink: f.X7G.CONTACT,
                          helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING),
                      })
                    : null != D && (0, d.vT)(D, b.id, k)
                      ? h.intl.format(h.t.LyBQUW, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.X7G.PAID_TERMS,
                            contactLink: f.X7G.CONTACT,
                            helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING),
                        })
                      : M && R === f.EZt.BOOST && null != P
                        ? h.intl.format(h.t["2nKy/0"], {
                              price: (0, u.$g)(P.amount, P.currency),
                              paidServiceTermsArticle: f.X7G.PAID_TERMS,
                              contactUsArticle: f.X7G.CONTACT,
                              subscriptionFAQArticle: l.A.getArticleURL(f.MVz.BILLING),
                          })
                        : O
                          ? h.intl.format(h.t["Hvo/Z5"], {
                                buttonText: r,
                                interval: c.Ay.formatInterval(null == b ? void 0 : b.interval),
                                cancelSubscriptionArticle: l.A.getArticleURL(f.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: l.A.getArticleURL(f.MVz.PAID_TERMS),
                            })
                          : null != w && null != P
                            ? h.intl.format(h.t.Kcieh4, {
                                  primaryText: r,
                                  proratedAmount: (0, u.$g)(w, P.currency),
                                  renewalAmount: (0, u.$g)(P.amount, P.currency),
                                  rateInterval: c.Ay.formatInterval(null == b ? void 0 : b.interval),
                                  paidURL: f.X7G.PAID_TERMS,
                                  contactLink: f.X7G.CONTACT,
                                  helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING),
                              })
                            : h.intl.format(h.t.anJ7OX, {
                                  primaryText: r,
                                  rate: e,
                                  paidURL: f.X7G.PAID_TERMS,
                                  contactLink: f.X7G.CONTACT,
                                  helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING),
                              }));
        }
        return (0, r.jsxs)("div", {
            className: m.F,
            children: [
                "" !== B &&
                    (0, r.jsx)("div", {
                        children: B,
                    }),
                "" !== F &&
                    (0, r.jsx)("div", {
                        children: F,
                    }),
                T === f.hes.PAYSAFE_CARD &&
                    (0, r.jsx)("div", {
                        children: h.intl.string(h.t.kj9VLI),
                    }),
                T === f.hes.SOFORT &&
                    (0, r.jsx)("div", {
                        children: h.intl.string(h.t["UYy1/h"]),
                    }),
            ],
        });
    };
