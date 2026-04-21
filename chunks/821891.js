"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(881489),
    s = n(367921),
    a = n(739508),
    o = n(975571),
    l = n(927578),
    u = n(580630),
    c = n(615396),
    d = n(652215),
    _ = n(758836),
    f = n(788868),
    p = n(985018),
    h = n(516442);
let m = (e, t, n, r) => {
    if (null == e || null == t || null == n) {
        let e = Error("Missing base rate for legal fine print"),
            t = r ?? "none";
        return (0, a.pM)(e, { tags: { planId: t } }), null;
    }
    return (0, u.CE)((0, u.$g)(e.amount, e.currency), t, n);
};
function E(e) {
    let t,
        n,
        a,
        h,
        {
            subscriptionPlan: E,
            isGift: g,
            isTrial: A,
            isOrbCheckout: I,
            isEmbeddedIAP: T,
            renewalInvoice: S,
            paymentSourceType: y,
            hide: v,
            purchaseType: N,
            productLine: C,
            proratedAmount: R,
            basePrice: O,
            currentSubscription: b,
            skuId: D,
            applicationName: L,
            hasAlreadyLinked: w,
        } = e,
        M = (0, i.ds)();
    if (v) return null;
    let P = null == e.planGroup ? [] : e.planGroup;
    if (null != S) {
        let e = l.Ay.getIntervalForInvoice(S);
        (t = e.intervalType),
            (n = e.intervalCount),
            (a = (0, u.CE)((0, u.$g)(S.total, S.currency), t, n)),
            (h = (0, u.CE)((0, u.$g)(S.subtotal, S.currency), t, n));
    } else null != E && ((t = E.interval), (n = E.intervalCount));
    let x = (0, s.Ro)({
            purchaseType: N ?? d.VVm.SUBSCRIPTION,
            plan: E,
            premiumSubscription: null == b ? null : b,
            productLine: C,
            isGift: !!g,
            planGroup: P,
            isPrepaidPaymentSource: !1,
        }),
        k = p.intl.format(p.t.Y2Rkqc, { primaryText: x, paidURL: d.X7G.PAID_TERMS }),
        U = p.intl.format(p.t.H2uH5b, { primaryText: x, paidURL: d.X7G.PAID_TERMS }),
        G = "",
        F = "";
    if (I) {
        G = p.intl.format(p.t.xlJyOM, { virtualGoodsURL: d.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: d.X7G.PAID_TERMS });
        let e = "";
        (e =
            D === _.Dp.ORB_PROFILE_BADGE
                ? p.intl.string(p.t.APcKRo)
                : D === _.Dp.FRACTIONAL_PREMIUM
                  ? p.intl.string(p.t.FhJ74j)
                  : p.intl.string(p.t["Sxed/G"])),
            Array.isArray(G) ? (G = [...G, ` ${e}`]) : (G += ` ${e}`);
    } else if (T)
        if (null != a && S?.subscriptionPeriodEnd != null) G = p.intl.format(p.t["2VPTay"], { subtotalRate: h });
        else
            switch (t) {
                case f.WT.MONTH:
                    G = 1 === n ? p.intl.format(p.t["+ywPmZ"], {}) : p.intl.format(p.t.oBwZfh, { intervalCount: n });
                    break;
                case f.WT.YEAR:
                    G = p.intl.format(p.t.y9gsX5, {});
                    break;
                case void 0:
                    G = p.intl.format(p.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (N === d.VVm.ONE_TIME)
        switch (C) {
            case d.EZt.COLLECTIBLES:
                (F = k),
                    (G = g
                        ? p.intl.format(p.t.Amdf8X, { paidURL: d.X7G.PAID_TERMS })
                        : p.intl.format(p.t["40vM4o"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.GUILD_PRODUCT:
                (F = k), (G = p.intl.format(p.t["GEAQ+u"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.SOCIAL_LAYER_GAME_ITEM:
                F = k;
                let V = g || !0 === w ? p.t.f6Ngwm : p.t.CVITgq;
                G = p.intl.format(V, { applicationName: L ?? "game's" });
                break;
            default:
                (F = U), (G = "");
        }
    else if (null == E || g)
        switch ((g && (F = k), t)) {
            case f.WT.MONTH:
                (G = g ? p.intl.string(p.t.IjNapk) : p.intl.string(p.t["/sGXPr"])),
                    (G = g
                        ? p.intl.string(p.t.IjNapk)
                        : 1 === n
                          ? p.intl.string(p.t["/sGXPr"])
                          : p.intl.formatToPlainString(p.t.Fqjihk, { intervalCount: n }));
                break;
            case f.WT.YEAR:
                G = g ? p.intl.string(p.t.vAfbG8) : p.intl.string(p.t.IGzFc5);
                break;
            case void 0:
                G = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let e,
            r = (0, s.Ro)({
                productLine: C,
                purchaseType: d.VVm.SUBSCRIPTION,
                plan: E,
                premiumSubscription: null == b ? null : b,
                isGift: !1,
                planGroup: P,
                isPrepaidPaymentSource: !1,
            });
        A || (e = m(O, t, n, E.id)),
            (G = b?.isPausedAllowsResumeButNotUpdates
                ? p.intl.format(p.t.B6oNwB, {
                      primaryText: r,
                      rate: e,
                      paidURL: d.X7G.PAID_TERMS,
                      contactLink: d.X7G.CONTACT,
                      helpdeskArticle: o.A.getArticleURL(d.MVz.BILLING),
                  })
                : null != b && (0, c.vT)(b, E.id, P)
                  ? p.intl.format(p.t.LyBQUW, {
                        primaryText: r,
                        rate: e,
                        paidURL: d.X7G.PAID_TERMS,
                        contactLink: d.X7G.CONTACT,
                        helpdeskArticle: o.A.getArticleURL(d.MVz.BILLING),
                    })
                  : M && C === d.EZt.BOOST && null != O
                    ? p.intl.format(p.t["2nKy/0"], {
                          price: (0, u.$g)(O.amount, O.currency),
                          paidServiceTermsArticle: d.X7G.PAID_TERMS,
                          contactUsArticle: d.X7G.CONTACT,
                          subscriptionFAQArticle: o.A.getArticleURL(d.MVz.BILLING),
                      })
                    : M
                      ? p.intl.format(p.t.Oo2FeS, {
                            buttonText: r,
                            interval: l.Ay.formatInterval(E?.interval),
                            cancelSubscriptionArticle: o.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: o.A.getArticleURL(d.MVz.PAID_TERMS),
                        })
                      : A
                        ? p.intl.format(p.t["Hvo/Z5"], {
                              buttonText: r,
                              interval: l.Ay.formatInterval(E?.interval),
                              cancelSubscriptionArticle: o.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: o.A.getArticleURL(d.MVz.PAID_TERMS),
                          })
                        : null != R && null != O
                          ? p.intl.format(p.t.Kcieh4, {
                                primaryText: r,
                                proratedAmount: (0, u.$g)(R, O.currency),
                                renewalAmount: (0, u.$g)(O.amount, O.currency),
                                rateInterval: l.Ay.formatInterval(E?.interval),
                                paidURL: d.X7G.PAID_TERMS,
                                contactLink: d.X7G.CONTACT,
                                helpdeskArticle: o.A.getArticleURL(d.MVz.BILLING),
                            })
                          : p.intl.format(p.t.anJ7OX, {
                                primaryText: r,
                                rate: e,
                                paidURL: d.X7G.PAID_TERMS,
                                contactLink: d.X7G.CONTACT,
                                helpdeskArticle: o.A.getArticleURL(d.MVz.BILLING),
                            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            "" !== F && (0, r.jsx)("div", { children: F }),
            "" !== G && (0, r.jsx)("div", { children: G }),
            y === d.hes.PAYSAFE_CARD && (0, r.jsx)("div", { children: p.intl.string(p.t.kj9VLI) }),
            y === d.hes.SOFORT && (0, r.jsx)("div", { children: p.intl.string(p.t["UYy1/h"]) }),
        ],
    });
}
let g = function (e) {
    return (0, r.jsx)("div", { className: h.F, children: (0, r.jsx)(E, { ...e }) });
};
