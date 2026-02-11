"use strict";
n.d(t, { A: () => T, W: () => I });
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
    h = n(758836),
    p = n(788868),
    g = n(985018),
    E = n(186119);
let A = (e, t, n, r) => {
    if (null == e || null == t || null == n) {
        let e = Error("Missing base rate for legal fine print"),
            t = r || "none";
        return (0, l.pM)(e, { tags: { planId: t } }), null;
    }
    return (0, d.CE)((0, d.$g)(e.amount, e.currency), t, n);
};
function I(e) {
    let t,
        n,
        l,
        E,
        {
            subscriptionPlan: I,
            isGift: T,
            isTrial: y,
            isOrbCheckout: S,
            isEmbeddedIAP: v,
            renewalInvoice: C,
            paymentSourceType: b,
            hide: N,
            purchaseType: R,
            productLine: O,
            proratedAmount: D,
            basePrice: L,
            currentSubscription: w,
            skuId: x,
            applicationName: P,
            hasAlreadyLinked: M,
        } = e,
        k = (0, i.bG)([o.A], () => o.A.inReverseTrial()),
        U = (0, s.n)({ location: "LegalFinePrint" });
    if (N) return null;
    let G = null == e.planGroup ? [] : e.planGroup;
    if (null != C) {
        let e = c.Ay.getIntervalForInvoice(C);
        (t = e.intervalType),
            (n = e.intervalCount),
            (l = (0, d.CE)((0, d.$g)(C.total, C.currency), t, n)),
            (E = (0, d.CE)((0, d.$g)(C.subtotal, C.currency), t, n));
    } else null != I && ((t = I.interval), (n = I.intervalCount));
    let F = (0, a.Ro)({
            purchaseType: R || f.VVm.SUBSCRIPTION,
            plan: I,
            premiumSubscription: null == w ? null : w,
            productLine: O,
            isGift: !!T,
            planGroup: G,
            isPrepaidPaymentSource: !1,
        }),
        V = g.intl.format(g.t.Y2Rkqc, { primaryText: F, paidURL: f.X7G.PAID_TERMS }),
        B = g.intl.format(g.t.H2uH5b, { primaryText: F, paidURL: f.X7G.PAID_TERMS }),
        j = "",
        H = "";
    if (S) {
        j = g.intl.format(g.t.xlJyOM, { virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: f.X7G.PAID_TERMS });
        let e = "";
        (e =
            x === h.Dp.ORB_PROFILE_BADGE
                ? g.intl.string(g.t.APcKRo)
                : x === h.Dp.FRACTIONAL_PREMIUM
                  ? g.intl.string(g.t.FhJ74j)
                  : g.intl.string(g.t["Sxed/G"])),
            Array.isArray(j) ? (j = [...j, ` ${e}`]) : (j += ` ${e}`);
    } else if (v)
        if (null != l && C?.subscriptionPeriodEnd != null) j = g.intl.format(g.t["2VPTay"], { subtotalRate: E });
        else
            switch (t) {
                case p.WT.MONTH:
                    j = 1 === n ? g.intl.format(g.t["+ywPmZ"], {}) : g.intl.format(g.t.oBwZfh, { intervalCount: n });
                    break;
                case p.WT.YEAR:
                    j = g.intl.format(g.t.y9gsX5, {});
                    break;
                case void 0:
                    j = g.intl.format(g.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (R === f.VVm.ONE_TIME)
        switch (O) {
            case f.EZt.COLLECTIBLES:
                (H = V),
                    (j = T
                        ? g.intl.format(g.t.Amdf8X, { paidURL: f.X7G.PAID_TERMS })
                        : g.intl.format(g.t["40vM4o"], { paidURL: f.X7G.PAID_TERMS }));
                break;
            case f.EZt.GUILD_PRODUCT:
                (H = V), (j = g.intl.format(g.t["GEAQ+u"], { paidURL: f.X7G.PAID_TERMS }));
                break;
            case f.EZt.SOCIAL_LAYER_GAME_ITEM:
                H = V;
                let Y = U ? g.t.f6Ngwm : g.t.VCR6hI,
                    W = T || !0 === M ? Y : g.t.CVITgq;
                j = g.intl.format(W, { applicationName: P ?? "game's" });
                break;
            default:
                (H = B), (j = g.intl.string(g.t["9/siSQ"]));
        }
    else if (null == I || T)
        switch ((T && (H = V), t)) {
            case p.WT.MONTH:
                (j = T ? g.intl.string(g.t.IjNapk) : g.intl.string(g.t["/sGXPr"])),
                    (j = T
                        ? g.intl.string(g.t.IjNapk)
                        : 1 === n
                          ? g.intl.string(g.t["/sGXPr"])
                          : g.intl.formatToPlainString(g.t.Fqjihk, { intervalCount: n }));
                break;
            case p.WT.YEAR:
                j = T ? g.intl.string(g.t.vAfbG8) : g.intl.string(g.t.IGzFc5);
                break;
            case void 0:
                j = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let e,
            r = (0, a.Ro)({
                productLine: O,
                purchaseType: f.VVm.SUBSCRIPTION,
                plan: I,
                premiumSubscription: null == w ? null : w,
                isGift: !1,
                planGroup: G,
                isPrepaidPaymentSource: !1,
            });
        y || (e = A(L, t, n, I.id)),
            (j = w?.isPausedAllowsResumeButNotUpdates
                ? g.intl.format(g.t.B6oNwB, {
                      primaryText: r,
                      rate: e,
                      paidURL: f.X7G.PAID_TERMS,
                      contactLink: f.X7G.CONTACT,
                      helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                  })
                : null != w && (0, _.vT)(w, I.id, G)
                  ? g.intl.format(g.t.LyBQUW, {
                        primaryText: r,
                        rate: e,
                        paidURL: f.X7G.PAID_TERMS,
                        contactLink: f.X7G.CONTACT,
                        helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                    })
                  : k && O === f.EZt.BOOST && null != L
                    ? g.intl.format(g.t["2nKy/0"], {
                          price: (0, d.$g)(L.amount, L.currency),
                          paidServiceTermsArticle: f.X7G.PAID_TERMS,
                          contactUsArticle: f.X7G.CONTACT,
                          subscriptionFAQArticle: u.A.getArticleURL(f.MVz.BILLING),
                      })
                    : y
                      ? g.intl.format(g.t["Hvo/Z5"], {
                            buttonText: r,
                            interval: c.Ay.formatInterval(I?.interval),
                            cancelSubscriptionArticle: u.A.getArticleURL(f.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: u.A.getArticleURL(f.MVz.PAID_TERMS),
                        })
                      : null != D && null != L
                        ? g.intl.format(g.t.Kcieh4, {
                              primaryText: r,
                              proratedAmount: (0, d.$g)(D, L.currency),
                              renewalAmount: (0, d.$g)(L.amount, L.currency),
                              rateInterval: c.Ay.formatInterval(I?.interval),
                              paidURL: f.X7G.PAID_TERMS,
                              contactLink: f.X7G.CONTACT,
                              helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                          })
                        : g.intl.format(g.t.anJ7OX, {
                              primaryText: r,
                              rate: e,
                              paidURL: f.X7G.PAID_TERMS,
                              contactLink: f.X7G.CONTACT,
                              helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                          }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            "" !== H && (0, r.jsx)("div", { children: H }),
            "" !== j && (0, r.jsx)("div", { children: j }),
            b === f.hes.PAYSAFE_CARD && (0, r.jsx)("div", { children: g.intl.string(g.t.kj9VLI) }),
            b === f.hes.SOFORT && (0, r.jsx)("div", { children: g.intl.string(g.t["UYy1/h"]) }),
        ],
    });
}
let T = function (e) {
    return (0, r.jsx)("div", { className: E.F, children: (0, r.jsx)(I, { ...e }) });
};
