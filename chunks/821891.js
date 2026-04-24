n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var a = n(881489),
    i = n(367921),
    r = n(739508),
    s = n(975571),
    o = n(927578),
    u = n(580630),
    c = n(615396),
    d = n(652215),
    p = n(758836),
    m = n(788868),
    h = n(985018),
    A = n(516442);
function C(e) {
    let t,
        n,
        A,
        C,
        {
            subscriptionPlan: _,
            isGift: E,
            isTrial: y,
            isOrbCheckout: f,
            isEmbeddedIAP: P,
            renewalInvoice: S,
            paymentSourceType: T,
            hide: x,
            purchaseType: N,
            productLine: g,
            proratedAmount: I,
            basePrice: v,
            currentSubscription: b,
            skuId: M,
            applicationName: L,
            hasAlreadyLinked: R,
        } = e,
        j = (0, a.ds)();
    if (x) return null;
    let O = null == e.planGroup ? [] : e.planGroup;
    if (null != S) {
        let e = o.Ay.getIntervalForInvoice(S);
        (t = e.intervalType),
            (n = e.intervalCount),
            (A = (0, u.CE)((0, u.$g)(S.total, S.currency), t, n)),
            (C = (0, u.CE)((0, u.$g)(S.subtotal, S.currency), t, n));
    } else null != _ && ((t = _.interval), (n = _.intervalCount));
    let D = (0, i.Ro)({
            purchaseType: N ?? d.VVm.SUBSCRIPTION,
            plan: _,
            premiumSubscription: null == b ? null : b,
            productLine: g,
            isGift: !!E,
            planGroup: O,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        w = h.intl.format(h.t.Y2Rkqc, { primaryText: D, paidURL: d.X7G.PAID_TERMS }),
        U = h.intl.format(h.t.H2uH5b, { primaryText: D, paidURL: d.X7G.PAID_TERMS }),
        k = "",
        Y = "";
    if (f) {
        k = h.intl.format(h.t.xlJyOM, { virtualGoodsURL: d.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: d.X7G.PAID_TERMS });
        let e = "";
        (e =
            M === p.Dp.ORB_PROFILE_BADGE
                ? h.intl.string(h.t.APcKRo)
                : M === p.Dp.FRACTIONAL_PREMIUM
                  ? h.intl.string(h.t.FhJ74j)
                  : h.intl.string(h.t["Sxed/G"])),
            Array.isArray(k) ? (k = [...k, ` ${e}`]) : (k += ` ${e}`);
    } else if (P)
        if (null != A && S?.subscriptionPeriodEnd != null) k = h.intl.format(h.t["2VPTay"], { subtotalRate: C });
        else
            switch (t) {
                case m.WT.MONTH:
                    k = 1 === n ? h.intl.format(h.t["+ywPmZ"], {}) : h.intl.format(h.t.oBwZfh, { intervalCount: n });
                    break;
                case m.WT.YEAR:
                    k = h.intl.format(h.t.y9gsX5, {});
                    break;
                case void 0:
                    k = h.intl.format(h.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (N === d.VVm.ONE_TIME)
        switch (g) {
            case d.EZt.COLLECTIBLES:
                (Y = w),
                    (k = E
                        ? h.intl.format(h.t.Amdf8X, { paidURL: d.X7G.PAID_TERMS })
                        : h.intl.format(h.t["40vM4o"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.GUILD_PRODUCT:
                (Y = w), (k = h.intl.format(h.t["GEAQ+u"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.SOCIAL_LAYER_GAME_ITEM:
                Y = w;
                let F = E || !0 === R ? h.t.f6Ngwm : h.t.CVITgq;
                k = h.intl.format(F, { applicationName: L ?? "game's" });
                break;
            default:
                (Y = U), (k = "");
        }
    else if (null == _ || E)
        switch ((E && (Y = w), t)) {
            case m.WT.MONTH:
                (k = E ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"])),
                    (k = E
                        ? h.intl.string(h.t.IjNapk)
                        : 1 === n
                          ? h.intl.string(h.t["/sGXPr"])
                          : h.intl.formatToPlainString(h.t.Fqjihk, { intervalCount: n }));
                break;
            case m.WT.YEAR:
                k = E ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
                break;
            case void 0:
                k = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let l,
            a = (0, i.Ro)({
                productLine: g,
                purchaseType: d.VVm.SUBSCRIPTION,
                plan: _,
                premiumSubscription: null == b ? null : b,
                isGift: !1,
                planGroup: O,
                isPrepaidPaymentSource: !1,
                willRelocateStoreCountry: e.willRelocateStoreCountry,
            });
        y ||
            (l = ((e, t, n, l) => {
                if (null == e || null == t || null == n) {
                    let e = Error("Missing base rate for legal fine print");
                    return (0, r.pM)(e, { tags: { planId: l ?? "none" } }), null;
                }
                return (0, u.CE)((0, u.$g)(e.amount, e.currency), t, n);
            })(v, t, n, _.id)),
            (k = b?.isPausedAllowsResumeButNotUpdates
                ? h.intl.format(h.t.B6oNwB, {
                      primaryText: a,
                      rate: l,
                      paidURL: d.X7G.PAID_TERMS,
                      contactLink: d.X7G.CONTACT,
                      helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                  })
                : null != b && (0, c.vT)(b, _.id, O)
                  ? h.intl.format(h.t.LyBQUW, {
                        primaryText: a,
                        rate: l,
                        paidURL: d.X7G.PAID_TERMS,
                        contactLink: d.X7G.CONTACT,
                        helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                    })
                  : j && g === d.EZt.BOOST && null != v
                    ? h.intl.format(h.t["2nKy/0"], {
                          price: (0, u.$g)(v.amount, v.currency),
                          paidServiceTermsArticle: d.X7G.PAID_TERMS,
                          contactUsArticle: d.X7G.CONTACT,
                          subscriptionFAQArticle: s.A.getArticleURL(d.MVz.BILLING),
                      })
                    : j
                      ? h.intl.format(h.t.Oo2FeS, {
                            buttonText: a,
                            interval: o.Ay.formatInterval(_?.interval),
                            cancelSubscriptionArticle: s.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: s.A.getArticleURL(d.MVz.PAID_TERMS),
                        })
                      : y
                        ? h.intl.format(h.t["Hvo/Z5"], {
                              buttonText: a,
                              interval: o.Ay.formatInterval(_?.interval),
                              cancelSubscriptionArticle: s.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: s.A.getArticleURL(d.MVz.PAID_TERMS),
                          })
                        : null != I && null != v
                          ? h.intl.format(h.t.Kcieh4, {
                                primaryText: a,
                                proratedAmount: (0, u.$g)(I, v.currency),
                                renewalAmount: (0, u.$g)(v.amount, v.currency),
                                rateInterval: o.Ay.formatInterval(_?.interval),
                                paidURL: d.X7G.PAID_TERMS,
                                contactLink: d.X7G.CONTACT,
                                helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                            })
                          : h.intl.format(h.t.anJ7OX, {
                                primaryText: a,
                                rate: l,
                                paidURL: d.X7G.PAID_TERMS,
                                contactLink: d.X7G.CONTACT,
                                helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                            }));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            "" !== Y && (0, l.jsx)("div", { children: Y }),
            "" !== k && (0, l.jsx)("div", { children: k }),
            T === d.hes.PAYSAFE_CARD && (0, l.jsx)("div", { children: h.intl.string(h.t.kj9VLI) }),
            T === d.hes.SOFORT && (0, l.jsx)("div", { children: h.intl.string(h.t["UYy1/h"]) }),
        ],
    });
}
let _ = function (e) {
    return (0, l.jsx)("div", { className: A.F, children: (0, l.jsx)(C, { ...e }) });
};
