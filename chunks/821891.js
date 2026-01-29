n.d(t, {
    A: () => E,
}),
    n(65821),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(367921),
    o = n(166403),
    s = n(739508),
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
                (0, s.pM)(e, {
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
            s,
            E,
            {
                subscriptionPlan: y,
                isGift: b,
                isTrial: O,
                isOrbCheckout: v,
                rentalDuration: A,
                isEmbeddedIAP: I,
                renewalInvoice: S,
                paymentSourceType: T,
                hide: C,
                purchaseType: N,
                productLine: w,
                proratedAmount: R,
                basePrice: P,
                currentSubscription: D,
                skuId: L,
                applicationName: x,
                hasAlreadyLinked: M,
            } = e,
            j = (0, i.bG)([o.A], () => o.A.inReverseTrial());
        if (C) return null;
        let k = null == e.planGroup ? [] : e.planGroup;
        if (null != S) {
            let e = c.Ay.getIntervalForInvoice(S);
            (t = e.intervalType),
                (n = e.intervalCount),
                (s = (0, u.CE)((0, u.$g)(S.total, S.currency), t, n)),
                (E = (0, u.CE)((0, u.$g)(S.subtotal, S.currency), t, n));
        } else null != y && ((t = y.interval), (n = y.intervalCount));
        let U = (0, a.Ro)({
                purchaseType: N || f.VVm.SUBSCRIPTION,
                plan: y,
                premiumSubscription: null == D ? null : D,
                productLine: w,
                isGift: !!b,
                planGroup: k,
                isPrepaidPaymentSource: !1,
            }),
            G = h.intl.format(h.t.Y2Rkqc, {
                primaryText: U,
                paidURL: f.X7G.PAID_TERMS,
            }),
            F = h.intl.format(h.t.H2uH5b, {
                primaryText: U,
                paidURL: f.X7G.PAID_TERMS,
            }),
            V = "",
            B = "";
        if (v) {
            V =
                null != A && A > 0
                    ? h.intl.format(h.t.itoo7A, {
                          days: A,
                          virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.X7G.PAID_TERMS,
                      })
                    : h.intl.format(h.t.xlJyOM, {
                          virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.X7G.PAID_TERMS,
                      });
            let e = "";
            L === p.Dp.ORB_PROFILE_BADGE
                ? (e = h.intl.string(h.t.APcKRo))
                : L === p.Dp.FRACTIONAL_PREMIUM
                  ? (e = h.intl.string(h.t.FhJ74j))
                  : null == A && (e = h.intl.string(h.t["Sxed/G"])),
                Array.isArray(V) ? (V = [...V, " ".concat(e)]) : (V += " ".concat(e));
        } else if (I)
            if (null != s && (null == S ? void 0 : S.subscriptionPeriodEnd) != null)
                V = h.intl.format(h.t["2VPTay"], {
                    subtotalRate: E,
                });
            else
                switch (t) {
                    case _.WT.MONTH:
                        V =
                            1 === n
                                ? h.intl.format(h.t["+ywPmZ"], {})
                                : h.intl.format(h.t.oBwZfh, {
                                      intervalCount: n,
                                  });
                        break;
                    case _.WT.YEAR:
                        V = h.intl.format(h.t.y9gsX5, {});
                        break;
                    case void 0:
                        V = h.intl.format(h.t.UxGFH4, {});
                        break;
                    default:
                        throw Error("Unexpected interval: ".concat(t));
                }
        else if (N === f.VVm.ONE_TIME)
            switch (w) {
                case f.EZt.COLLECTIBLES:
                    (B = G),
                        (V = b
                            ? h.intl.format(h.t.Amdf8X, {
                                  paidURL: f.X7G.PAID_TERMS,
                              })
                            : h.intl.format(h.t["40vM4o"], {
                                  paidURL: f.X7G.PAID_TERMS,
                              }));
                    break;
                case f.EZt.GUILD_PRODUCT:
                    (B = G),
                        (V = h.intl.format(h.t["GEAQ+u"], {
                            paidURL: f.X7G.PAID_TERMS,
                        }));
                    break;
                case f.EZt.SOCIAL_LAYER_GAME_ITEM:
                    (B = G),
                        (V =
                            b || !0 === M
                                ? h.intl.format(h.t.VCR6hI, {
                                      applicationName: null != x ? x : "game's",
                                  })
                                : h.intl.format(h.t.CVITgq, {
                                      applicationName: null != x ? x : "game's",
                                  }));
                    break;
                default:
                    (B = F), (V = h.intl.string(h.t["9/siSQ"]));
            }
        else if (null == y || b)
            switch ((b && (B = G), t)) {
                case _.WT.MONTH:
                    (V = b ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"])),
                        (V = b
                            ? h.intl.string(h.t.IjNapk)
                            : 1 === n
                              ? h.intl.string(h.t["/sGXPr"])
                              : h.intl.formatToPlainString(h.t.Fqjihk, {
                                    intervalCount: n,
                                }));
                    break;
                case _.WT.YEAR:
                    V = b ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
                    break;
                case void 0:
                    V = "";
                    break;
                default:
                    throw Error("Unexpected interval: ".concat(t));
            }
        else {
            let e,
                r = (0, a.Ro)({
                    productLine: w,
                    purchaseType: f.VVm.SUBSCRIPTION,
                    plan: y,
                    premiumSubscription: null == D ? null : D,
                    isGift: !1,
                    planGroup: k,
                    isPrepaidPaymentSource: !1,
                });
            O || (e = g(P, t, n, y.id)),
                (V = (null == D ? void 0 : D.isPausedAllowsResumeButNotUpdates)
                    ? h.intl.format(h.t.B6oNwB, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.X7G.PAID_TERMS,
                          contactLink: f.X7G.CONTACT,
                          helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING),
                      })
                    : null != D && (0, d.vT)(D, y.id, k)
                      ? h.intl.format(h.t.LyBQUW, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.X7G.PAID_TERMS,
                            contactLink: f.X7G.CONTACT,
                            helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING),
                        })
                      : j && w === f.EZt.BOOST && null != P
                        ? h.intl.format(h.t["2nKy/0"], {
                              price: (0, u.$g)(P.amount, P.currency),
                              paidServiceTermsArticle: f.X7G.PAID_TERMS,
                              contactUsArticle: f.X7G.CONTACT,
                              subscriptionFAQArticle: l.A.getArticleURL(f.MVz.BILLING),
                          })
                        : O
                          ? h.intl.format(h.t["Hvo/Z5"], {
                                buttonText: r,
                                interval: c.Ay.formatInterval(null == y ? void 0 : y.interval),
                                cancelSubscriptionArticle: l.A.getArticleURL(f.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: l.A.getArticleURL(f.MVz.PAID_TERMS),
                            })
                          : null != R && null != P
                            ? h.intl.format(h.t.Kcieh4, {
                                  primaryText: r,
                                  proratedAmount: (0, u.$g)(R, P.currency),
                                  renewalAmount: (0, u.$g)(P.amount, P.currency),
                                  rateInterval: c.Ay.formatInterval(null == y ? void 0 : y.interval),
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
                "" !== V &&
                    (0, r.jsx)("div", {
                        children: V,
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
