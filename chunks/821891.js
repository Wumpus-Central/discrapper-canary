"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(367921),
    a = n(938289),
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
    E = n(186119);
let g = (e, t, n, r) => {
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
        E,
        {
            subscriptionPlan: A,
            isGift: I,
            isTrial: T,
            isOrbCheckout: S,
            isEmbeddedIAP: y,
            renewalInvoice: v,
            paymentSourceType: N,
            hide: C,
            purchaseType: b,
            productLine: R,
            proratedAmount: O,
            basePrice: D,
            currentSubscription: L,
            skuId: w,
            applicationName: x,
            hasAlreadyLinked: M,
        } = e,
        P = (0, i.bG)([o.A], () => o.A.inReverseTrial()),
        k = (0, a.n)({ location: "LegalFinePrint" });
    if (C) return null;
    let U = null == e.planGroup ? [] : e.planGroup;
    if (null != v) {
        let e = c.Ay.getIntervalForInvoice(v);
        (t = e.intervalType),
            (n = e.intervalCount),
            (l = (0, d.CE)((0, d.$g)(v.total, v.currency), t, n)),
            (E = (0, d.CE)((0, d.$g)(v.subtotal, v.currency), t, n));
    } else null != A && ((t = A.interval), (n = A.intervalCount));
    let G = (0, s.Ro)({
            purchaseType: b || f.VVm.SUBSCRIPTION,
            plan: A,
            premiumSubscription: null == L ? null : L,
            productLine: R,
            isGift: !!I,
            planGroup: U,
            isPrepaidPaymentSource: !1,
        }),
        F = m.intl.format(m.t.Y2Rkqc, { primaryText: G, paidURL: f.X7G.PAID_TERMS }),
        V = m.intl.format(m.t.H2uH5b, { primaryText: G, paidURL: f.X7G.PAID_TERMS }),
        B = "",
        H = "";
    if (S) {
        B = m.intl.format(m.t.xlJyOM, { virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: f.X7G.PAID_TERMS });
        let e = "";
        (e =
            w === p.Dp.ORB_PROFILE_BADGE
                ? m.intl.string(m.t.APcKRo)
                : w === p.Dp.FRACTIONAL_PREMIUM
                  ? m.intl.string(m.t.FhJ74j)
                  : m.intl.string(m.t["Sxed/G"])),
            Array.isArray(B) ? (B = [...B, ` ${e}`]) : (B += ` ${e}`);
    } else if (y)
        if (null != l && v?.subscriptionPeriodEnd != null) B = m.intl.format(m.t["2VPTay"], { subtotalRate: E });
        else
            switch (t) {
                case h.WT.MONTH:
                    B = 1 === n ? m.intl.format(m.t["+ywPmZ"], {}) : m.intl.format(m.t.oBwZfh, { intervalCount: n });
                    break;
                case h.WT.YEAR:
                    B = m.intl.format(m.t.y9gsX5, {});
                    break;
                case void 0:
                    B = m.intl.format(m.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (b === f.VVm.ONE_TIME)
        switch (R) {
            case f.EZt.COLLECTIBLES:
                (H = F),
                    (B = I
                        ? m.intl.format(m.t.Amdf8X, { paidURL: f.X7G.PAID_TERMS })
                        : m.intl.format(m.t["40vM4o"], { paidURL: f.X7G.PAID_TERMS }));
                break;
            case f.EZt.GUILD_PRODUCT:
                (H = F), (B = m.intl.format(m.t["GEAQ+u"], { paidURL: f.X7G.PAID_TERMS }));
                break;
            case f.EZt.SOCIAL_LAYER_GAME_ITEM:
                H = F;
                let j = k ? m.t.f6Ngwm : m.t.VCR6hI,
                    Y = I || !0 === M ? j : m.t.CVITgq;
                B = m.intl.format(Y, { applicationName: x ?? "game's" });
                break;
            default:
                (H = V), (B = m.intl.string(m.t["9/siSQ"]));
        }
    else if (null == A || I)
        switch ((I && (H = F), t)) {
            case h.WT.MONTH:
                (B = I ? m.intl.string(m.t.IjNapk) : m.intl.string(m.t["/sGXPr"])),
                    (B = I
                        ? m.intl.string(m.t.IjNapk)
                        : 1 === n
                          ? m.intl.string(m.t["/sGXPr"])
                          : m.intl.formatToPlainString(m.t.Fqjihk, { intervalCount: n }));
                break;
            case h.WT.YEAR:
                B = I ? m.intl.string(m.t.vAfbG8) : m.intl.string(m.t.IGzFc5);
                break;
            case void 0:
                B = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let e,
            r = (0, s.Ro)({
                productLine: R,
                purchaseType: f.VVm.SUBSCRIPTION,
                plan: A,
                premiumSubscription: null == L ? null : L,
                isGift: !1,
                planGroup: U,
                isPrepaidPaymentSource: !1,
            });
        T || (e = g(D, t, n, A.id)),
            (B = L?.isPausedAllowsResumeButNotUpdates
                ? m.intl.format(m.t.B6oNwB, {
                      primaryText: r,
                      rate: e,
                      paidURL: f.X7G.PAID_TERMS,
                      contactLink: f.X7G.CONTACT,
                      helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                  })
                : null != L && (0, _.vT)(L, A.id, U)
                  ? m.intl.format(m.t.LyBQUW, {
                        primaryText: r,
                        rate: e,
                        paidURL: f.X7G.PAID_TERMS,
                        contactLink: f.X7G.CONTACT,
                        helpdeskArticle: u.A.getArticleURL(f.MVz.BILLING),
                    })
                  : P && R === f.EZt.BOOST && null != D
                    ? m.intl.format(m.t["2nKy/0"], {
                          price: (0, d.$g)(D.amount, D.currency),
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
                      : null != O && null != D
                        ? m.intl.format(m.t.Kcieh4, {
                              primaryText: r,
                              proratedAmount: (0, d.$g)(O, D.currency),
                              renewalAmount: (0, d.$g)(D.amount, D.currency),
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
            "" !== B && (0, r.jsx)("div", { children: B }),
            N === f.hes.PAYSAFE_CARD && (0, r.jsx)("div", { children: m.intl.string(m.t.kj9VLI) }),
            N === f.hes.SOFORT && (0, r.jsx)("div", { children: m.intl.string(m.t["UYy1/h"]) }),
        ],
    });
}
let I = function (e) {
    return (0, r.jsx)("div", { className: E.F, children: (0, r.jsx)(A, { ...e }) });
};
