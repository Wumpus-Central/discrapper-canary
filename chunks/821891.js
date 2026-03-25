"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(367921),
    a = n(166403),
    o = n(739508),
    l = n(975571),
    u = n(927578),
    c = n(580630),
    d = n(615396),
    _ = n(652215),
    f = n(758836),
    p = n(788868),
    h = n(985018),
    m = n(186119);
let E = (e, t, n, r) => {
    if (null == e || null == t || null == n) {
        let e = Error("Missing base rate for legal fine print"),
            t = r || "none";
        return (0, o.pM)(e, { tags: { planId: t } }), null;
    }
    return (0, c.CE)((0, c.$g)(e.amount, e.currency), t, n);
};
function g(e) {
    let t,
        n,
        o,
        m,
        {
            subscriptionPlan: g,
            isGift: A,
            isTrial: I,
            isOrbCheckout: T,
            isEmbeddedIAP: S,
            renewalInvoice: y,
            paymentSourceType: v,
            hide: N,
            purchaseType: C,
            productLine: R,
            proratedAmount: O,
            basePrice: b,
            currentSubscription: D,
            skuId: L,
            applicationName: w,
            hasAlreadyLinked: M,
        } = e,
        x = (0, i.bG)([a.A], () => a.A.inReverseTrial());
    if (N) return null;
    let P = null == e.planGroup ? [] : e.planGroup;
    if (null != y) {
        let e = u.Ay.getIntervalForInvoice(y);
        (t = e.intervalType),
            (n = e.intervalCount),
            (o = (0, c.CE)((0, c.$g)(y.total, y.currency), t, n)),
            (m = (0, c.CE)((0, c.$g)(y.subtotal, y.currency), t, n));
    } else null != g && ((t = g.interval), (n = g.intervalCount));
    let k = (0, s.Ro)({
            purchaseType: C || _.VVm.SUBSCRIPTION,
            plan: g,
            premiumSubscription: null == D ? null : D,
            productLine: R,
            isGift: !!A,
            planGroup: P,
            isPrepaidPaymentSource: !1,
        }),
        U = h.intl.format(h.t.Y2Rkqc, { primaryText: k, paidURL: _.X7G.PAID_TERMS }),
        G = h.intl.format(h.t.H2uH5b, { primaryText: k, paidURL: _.X7G.PAID_TERMS }),
        F = "",
        V = "";
    if (T) {
        F = h.intl.format(h.t.xlJyOM, { virtualGoodsURL: _.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: _.X7G.PAID_TERMS });
        let e = "";
        (e =
            L === f.Dp.ORB_PROFILE_BADGE
                ? h.intl.string(h.t.APcKRo)
                : L === f.Dp.FRACTIONAL_PREMIUM
                  ? h.intl.string(h.t.FhJ74j)
                  : h.intl.string(h.t["Sxed/G"])),
            Array.isArray(F) ? (F = [...F, ` ${e}`]) : (F += ` ${e}`);
    } else if (S)
        if (null != o && y?.subscriptionPeriodEnd != null) F = h.intl.format(h.t["2VPTay"], { subtotalRate: m });
        else
            switch (t) {
                case p.WT.MONTH:
                    F = 1 === n ? h.intl.format(h.t["+ywPmZ"], {}) : h.intl.format(h.t.oBwZfh, { intervalCount: n });
                    break;
                case p.WT.YEAR:
                    F = h.intl.format(h.t.y9gsX5, {});
                    break;
                case void 0:
                    F = h.intl.format(h.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (C === _.VVm.ONE_TIME)
        switch (R) {
            case _.EZt.COLLECTIBLES:
                (V = U),
                    (F = A
                        ? h.intl.format(h.t.Amdf8X, { paidURL: _.X7G.PAID_TERMS })
                        : h.intl.format(h.t["40vM4o"], { paidURL: _.X7G.PAID_TERMS }));
                break;
            case _.EZt.GUILD_PRODUCT:
                (V = U), (F = h.intl.format(h.t["GEAQ+u"], { paidURL: _.X7G.PAID_TERMS }));
                break;
            case _.EZt.SOCIAL_LAYER_GAME_ITEM:
                V = U;
                let B = A || !0 === M ? h.t.f6Ngwm : h.t.CVITgq;
                F = h.intl.format(B, { applicationName: w ?? "game's" });
                break;
            default:
                (V = G), (F = "");
        }
    else if (null == g || A)
        switch ((A && (V = U), t)) {
            case p.WT.MONTH:
                (F = A ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"])),
                    (F = A
                        ? h.intl.string(h.t.IjNapk)
                        : 1 === n
                          ? h.intl.string(h.t["/sGXPr"])
                          : h.intl.formatToPlainString(h.t.Fqjihk, { intervalCount: n }));
                break;
            case p.WT.YEAR:
                F = A ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
                break;
            case void 0:
                F = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let e,
            r = (0, s.Ro)({
                productLine: R,
                purchaseType: _.VVm.SUBSCRIPTION,
                plan: g,
                premiumSubscription: null == D ? null : D,
                isGift: !1,
                planGroup: P,
                isPrepaidPaymentSource: !1,
            });
        I || (e = E(b, t, n, g.id)),
            (F = D?.isPausedAllowsResumeButNotUpdates
                ? h.intl.format(h.t.B6oNwB, {
                      primaryText: r,
                      rate: e,
                      paidURL: _.X7G.PAID_TERMS,
                      contactLink: _.X7G.CONTACT,
                      helpdeskArticle: l.A.getArticleURL(_.MVz.BILLING),
                  })
                : null != D && (0, d.vT)(D, g.id, P)
                  ? h.intl.format(h.t.LyBQUW, {
                        primaryText: r,
                        rate: e,
                        paidURL: _.X7G.PAID_TERMS,
                        contactLink: _.X7G.CONTACT,
                        helpdeskArticle: l.A.getArticleURL(_.MVz.BILLING),
                    })
                  : x && R === _.EZt.BOOST && null != b
                    ? h.intl.format(h.t["2nKy/0"], {
                          price: (0, c.$g)(b.amount, b.currency),
                          paidServiceTermsArticle: _.X7G.PAID_TERMS,
                          contactUsArticle: _.X7G.CONTACT,
                          subscriptionFAQArticle: l.A.getArticleURL(_.MVz.BILLING),
                      })
                    : I
                      ? h.intl.format(h.t["Hvo/Z5"], {
                            buttonText: r,
                            interval: u.Ay.formatInterval(g?.interval),
                            cancelSubscriptionArticle: l.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: l.A.getArticleURL(_.MVz.PAID_TERMS),
                        })
                      : null != O && null != b
                        ? h.intl.format(h.t.Kcieh4, {
                              primaryText: r,
                              proratedAmount: (0, c.$g)(O, b.currency),
                              renewalAmount: (0, c.$g)(b.amount, b.currency),
                              rateInterval: u.Ay.formatInterval(g?.interval),
                              paidURL: _.X7G.PAID_TERMS,
                              contactLink: _.X7G.CONTACT,
                              helpdeskArticle: l.A.getArticleURL(_.MVz.BILLING),
                          })
                        : h.intl.format(h.t.anJ7OX, {
                              primaryText: r,
                              rate: e,
                              paidURL: _.X7G.PAID_TERMS,
                              contactLink: _.X7G.CONTACT,
                              helpdeskArticle: l.A.getArticleURL(_.MVz.BILLING),
                          }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            "" !== V && (0, r.jsx)("div", { children: V }),
            "" !== F && (0, r.jsx)("div", { children: F }),
            v === _.hes.PAYSAFE_CARD && (0, r.jsx)("div", { children: h.intl.string(h.t.kj9VLI) }),
            v === _.hes.SOFORT && (0, r.jsx)("div", { children: h.intl.string(h.t["UYy1/h"]) }),
        ],
    });
}
let A = function (e) {
    return (0, r.jsx)("div", { className: m.F, children: (0, r.jsx)(g, { ...e }) });
};
