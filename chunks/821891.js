"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(367921),
    s = n(938289),
    o = n(166403),
    l = n(739508),
    u = n(975571),
    c = n(927578),
    d = n(580630),
    _ = n(615396),
    f = n(652215),
    p = n(758836),
    h = n(788868),
    m = n(985018),
    g = n(186119);
let E = (e, t, n, r) => {
        if (null == e || null == t || null == n) {
            let e = Error("Missing base rate for legal fine print"),
                t = r || "none";
            return (0, l.pM)(e, { tags: { planId: t } }), null;
        }
        return (0, d.CE)((0, d.$g)(e.amount, e.currency), t, n);
    },
    A = function (e) {
        let t,
            n,
            l,
            A,
            {
                subscriptionPlan: I,
                isGift: T,
                isTrial: y,
                isOrbCheckout: S,
                rentalDuration: v,
                isEmbeddedIAP: C,
                renewalInvoice: b,
                paymentSourceType: N,
                hide: R,
                purchaseType: O,
                productLine: D,
                proratedAmount: L,
                basePrice: w,
                currentSubscription: x,
                skuId: P,
                applicationName: M,
                hasAlreadyLinked: k,
            } = e,
            U = (0, i.bG)([o.A], () => o.A.inReverseTrial()),
            G = (0, s.n)({ location: "LegalFinePrint" });
        if (R) return null;
        let V = null == e.planGroup ? [] : e.planGroup;
        if (null != b) {
            let e = c.Ay.getIntervalForInvoice(b);
            (t = e.intervalType),
                (n = e.intervalCount),
                (l = (0, d.CE)((0, d.$g)(b.total, b.currency), t, n)),
                (A = (0, d.CE)((0, d.$g)(b.subtotal, b.currency), t, n));
        } else null != I && ((t = I.interval), (n = I.intervalCount));
        let F = (0, a.Ro)({
                purchaseType: O || f.VVm.SUBSCRIPTION,
                plan: I,
                premiumSubscription: null == x ? null : x,
                productLine: D,
                isGift: !!T,
                planGroup: V,
                isPrepaidPaymentSource: !1,
            }),
            B = m.intl.format(m.t.Y2Rkqc, { primaryText: F, paidURL: f.X7G.PAID_TERMS }),
            j = m.intl.format(m.t.H2uH5b, { primaryText: F, paidURL: f.X7G.PAID_TERMS }),
            H = "",
            Y = "";
        if (S) {
            H =
                null != v && v > 0
                    ? m.intl.format(m.t.itoo7A, {
                          days: v,
                          virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.X7G.PAID_TERMS,
                      })
                    : m.intl.format(m.t.xlJyOM, {
                          virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.X7G.PAID_TERMS,
                      });
            let e = "";
            P === p.Dp.ORB_PROFILE_BADGE
                ? (e = m.intl.string(m.t.APcKRo))
                : P === p.Dp.FRACTIONAL_PREMIUM
                  ? (e = m.intl.string(m.t.FhJ74j))
                  : null == v && (e = m.intl.string(m.t["Sxed/G"])),
                Array.isArray(H) ? (H = [...H, ` ${e}`]) : (H += ` ${e}`);
        } else if (C)
            if (null != l && b?.subscriptionPeriodEnd != null) H = m.intl.format(m.t["2VPTay"], { subtotalRate: A });
            else
                switch (t) {
                    case h.WT.MONTH:
                        H =
                            1 === n
                                ? m.intl.format(m.t["+ywPmZ"], {})
                                : m.intl.format(m.t.oBwZfh, { intervalCount: n });
                        break;
                    case h.WT.YEAR:
                        H = m.intl.format(m.t.y9gsX5, {});
                        break;
                    case void 0:
                        H = m.intl.format(m.t.UxGFH4, {});
                        break;
                    default:
                        throw Error(`Unexpected interval: ${t}`);
                }
        else if (O === f.VVm.ONE_TIME)
            switch (D) {
                case f.EZt.COLLECTIBLES:
                    (Y = B),
                        (H = T
                            ? m.intl.format(m.t.Amdf8X, { paidURL: f.X7G.PAID_TERMS })
                            : m.intl.format(m.t["40vM4o"], { paidURL: f.X7G.PAID_TERMS }));
                    break;
                case f.EZt.GUILD_PRODUCT:
                    (Y = B), (H = m.intl.format(m.t["GEAQ+u"], { paidURL: f.X7G.PAID_TERMS }));
                    break;
                case f.EZt.SOCIAL_LAYER_GAME_ITEM:
                    Y = B;
                    let W = G ? m.t.f6Ngwm : m.t.VCR6hI,
                        K = T || !0 === k ? W : m.t.CVITgq;
                    H = m.intl.format(K, { applicationName: M ?? "game's" });
                    break;
                default:
                    (Y = j), (H = m.intl.string(m.t["9/siSQ"]));
            }
        else if (null == I || T)
            switch ((T && (Y = B), t)) {
                case h.WT.MONTH:
                    (H = T ? m.intl.string(m.t.IjNapk) : m.intl.string(m.t["/sGXPr"])),
                        (H = T
                            ? m.intl.string(m.t.IjNapk)
                            : 1 === n
                              ? m.intl.string(m.t["/sGXPr"])
                              : m.intl.formatToPlainString(m.t.Fqjihk, { intervalCount: n }));
                    break;
                case h.WT.YEAR:
                    H = T ? m.intl.string(m.t.vAfbG8) : m.intl.string(m.t.IGzFc5);
                    break;
                case void 0:
                    H = "";
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
        else {
            let e,
                r = (0, a.Ro)({
                    productLine: D,
                    purchaseType: f.VVm.SUBSCRIPTION,
                    plan: I,
                    premiumSubscription: null == x ? null : x,
                    isGift: !1,
                    planGroup: V,
                    isPrepaidPaymentSource: !1,
                });
            y || (e = E(w, t, n, I.id)),
                (H = x?.isPausedAllowsResumeButNotUpdates
                    ? m.intl.format(m.t.B6oNwB, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.X7G.PAID_TERMS,
                          contactLink: f.X7G.CONTACT,
                          helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                      })
                    : null != x && (0, _.vT)(x, I.id, V)
                      ? m.intl.format(m.t.LyBQUW, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.X7G.PAID_TERMS,
                            contactLink: f.X7G.CONTACT,
                            helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                        })
                      : U && D === f.EZt.BOOST && null != w
                        ? m.intl.format(m.t["2nKy/0"], {
                              price: (0, d.$g)(w.amount, w.currency),
                              paidServiceTermsArticle: f.X7G.PAID_TERMS,
                              contactUsArticle: f.X7G.CONTACT,
                              subscriptionFAQArticle: u.A.getArticleURL(f.MVz.BILLING),
                          })
                        : y
                          ? m.intl.format(m.t["Hvo/Z5"], {
                                buttonText: r,
                                interval: c.Ay.formatInterval(I?.interval),
                                cancelSubscriptionArticle: u.A.getArticleURL(f.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: u.A.getArticleURL(f.MVz.PAID_TERMS),
                            })
                          : null != L && null != w
                            ? m.intl.format(m.t.Kcieh4, {
                                  primaryText: r,
                                  proratedAmount: (0, d.$g)(L, w.currency),
                                  renewalAmount: (0, d.$g)(w.amount, w.currency),
                                  rateInterval: c.Ay.formatInterval(I?.interval),
                                  paidURL: f.X7G.PAID_TERMS,
                                  contactLink: f.X7G.CONTACT,
                                  helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                              })
                            : m.intl.format(m.t.anJ7OX, {
                                  primaryText: r,
                                  rate: e,
                                  paidURL: f.X7G.PAID_TERMS,
                                  contactLink: f.X7G.CONTACT,
                                  helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                              }));
        }
        return (0, r.jsxs)("div", {
            className: g.F,
            children: [
                "" !== Y && (0, r.jsx)("div", { children: Y }),
                "" !== H && (0, r.jsx)("div", { children: H }),
                N === f.hes.PAYSAFE_CARD && (0, r.jsx)("div", { children: m.intl.string(m.t.kj9VLI) }),
                N === f.hes.SOFORT && (0, r.jsx)("div", { children: m.intl.string(m.t["UYy1/h"]) }),
            ],
        });
    };
