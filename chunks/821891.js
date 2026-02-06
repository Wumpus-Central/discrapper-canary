"use strict";
n.d(t, { A: () => I, W: () => A });
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
};
function A(e) {
    let t,
        n,
        l,
        g,
        {
            subscriptionPlan: A,
            isGift: I,
            isTrial: T,
            isOrbCheckout: y,
            rentalDuration: S,
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
            (g = (0, d.CE)((0, d.$g)(C.subtotal, C.currency), t, n));
    } else null != A && ((t = A.interval), (n = A.intervalCount));
    let V = (0, a.Ro)({
            purchaseType: R || f.VVm.SUBSCRIPTION,
            plan: A,
            premiumSubscription: null == w ? null : w,
            productLine: O,
            isGift: !!I,
            planGroup: G,
            isPrepaidPaymentSource: !1,
        }),
        F = m.intl.format(m.t.Y2Rkqc, { primaryText: V, paidURL: f.X7G.PAID_TERMS }),
        B = m.intl.format(m.t.H2uH5b, { primaryText: V, paidURL: f.X7G.PAID_TERMS }),
        j = "",
        H = "";
    if (y) {
        j =
            null != S && S > 0
                ? m.intl.format(m.t.itoo7A, {
                      days: S,
                      virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                      paidURL: f.X7G.PAID_TERMS,
                  })
                : m.intl.format(m.t.xlJyOM, {
                      virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
                      paidURL: f.X7G.PAID_TERMS,
                  });
        let e = "";
        x === p.Dp.ORB_PROFILE_BADGE
            ? (e = m.intl.string(m.t.APcKRo))
            : x === p.Dp.FRACTIONAL_PREMIUM
              ? (e = m.intl.string(m.t.FhJ74j))
              : null == S && (e = m.intl.string(m.t["Sxed/G"])),
            Array.isArray(j) ? (j = [...j, ` ${e}`]) : (j += ` ${e}`);
    } else if (v)
        if (null != l && C?.subscriptionPeriodEnd != null) j = m.intl.format(m.t["2VPTay"], { subtotalRate: g });
        else
            switch (t) {
                case h.WT.MONTH:
                    j = 1 === n ? m.intl.format(m.t["+ywPmZ"], {}) : m.intl.format(m.t.oBwZfh, { intervalCount: n });
                    break;
                case h.WT.YEAR:
                    j = m.intl.format(m.t.y9gsX5, {});
                    break;
                case void 0:
                    j = m.intl.format(m.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (R === f.VVm.ONE_TIME)
        switch (O) {
            case f.EZt.COLLECTIBLES:
                (H = F),
                    (j = I
                        ? m.intl.format(m.t.Amdf8X, { paidURL: f.X7G.PAID_TERMS })
                        : m.intl.format(m.t["40vM4o"], { paidURL: f.X7G.PAID_TERMS }));
                break;
            case f.EZt.GUILD_PRODUCT:
                (H = F), (j = m.intl.format(m.t["GEAQ+u"], { paidURL: f.X7G.PAID_TERMS }));
                break;
            case f.EZt.SOCIAL_LAYER_GAME_ITEM:
                H = F;
                let Y = U ? m.t.f6Ngwm : m.t.VCR6hI,
                    W = I || !0 === M ? Y : m.t.CVITgq;
                j = m.intl.format(W, { applicationName: P ?? "game's" });
                break;
            default:
                (H = B), (j = m.intl.string(m.t["9/siSQ"]));
        }
    else if (null == A || I)
        switch ((I && (H = F), t)) {
            case h.WT.MONTH:
                (j = I ? m.intl.string(m.t.IjNapk) : m.intl.string(m.t["/sGXPr"])),
                    (j = I
                        ? m.intl.string(m.t.IjNapk)
                        : 1 === n
                          ? m.intl.string(m.t["/sGXPr"])
                          : m.intl.formatToPlainString(m.t.Fqjihk, { intervalCount: n }));
                break;
            case h.WT.YEAR:
                j = I ? m.intl.string(m.t.vAfbG8) : m.intl.string(m.t.IGzFc5);
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
                plan: A,
                premiumSubscription: null == w ? null : w,
                isGift: !1,
                planGroup: G,
                isPrepaidPaymentSource: !1,
            });
        T || (e = E(L, t, n, A.id)),
            (j = w?.isPausedAllowsResumeButNotUpdates
                ? m.intl.format(m.t.B6oNwB, {
                      primaryText: r,
                      rate: e,
                      paidURL: f.X7G.PAID_TERMS,
                      contactLink: f.X7G.CONTACT,
                      helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                  })
                : null != w && (0, _.vT)(w, A.id, G)
                  ? m.intl.format(m.t.LyBQUW, {
                        primaryText: r,
                        rate: e,
                        paidURL: f.X7G.PAID_TERMS,
                        contactLink: f.X7G.CONTACT,
                        helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                    })
                  : k && O === f.EZt.BOOST && null != L
                    ? m.intl.format(m.t["2nKy/0"], {
                          price: (0, d.$g)(L.amount, L.currency),
                          paidServiceTermsArticle: f.X7G.PAID_TERMS,
                          contactUsArticle: f.X7G.CONTACT,
                          subscriptionFAQArticle: u.A.getArticleURL(f.MVz.BILLING),
                      })
                    : T
                      ? m.intl.format(m.t["Hvo/Z5"], {
                            buttonText: r,
                            interval: c.Ay.formatInterval(A?.interval),
                            cancelSubscriptionArticle: u.A.getArticleURL(f.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: u.A.getArticleURL(f.MVz.PAID_TERMS),
                        })
                      : null != D && null != L
                        ? m.intl.format(m.t.Kcieh4, {
                              primaryText: r,
                              proratedAmount: (0, d.$g)(D, L.currency),
                              renewalAmount: (0, d.$g)(L.amount, L.currency),
                              rateInterval: c.Ay.formatInterval(A?.interval),
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            "" !== H && (0, r.jsx)("div", { children: H }),
            "" !== j && (0, r.jsx)("div", { children: j }),
            b === f.hes.PAYSAFE_CARD && (0, r.jsx)("div", { children: m.intl.string(m.t.kj9VLI) }),
            b === f.hes.SOFORT && (0, r.jsx)("div", { children: m.intl.string(m.t["UYy1/h"]) }),
        ],
    });
}
let I = function (e) {
    return (0, r.jsx)("div", { className: g.F, children: (0, r.jsx)(A, { ...e }) });
};
