n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(881489),
    a = n(367921),
    r = n(739508),
    s = n(975571),
    o = n(927578),
    u = n(580630),
    c = n(615396),
    d = n(652215),
    p = n(758836),
    m = n(788868),
    h = n(985018),
    C = n(516442);
function A(e) {
    let t,
        n,
        C,
        A,
        {
            subscriptionPlan: E,
            isGift: y,
            isTrial: P,
            isOrbCheckout: S,
            isEmbeddedIAP: _,
            renewalInvoice: T,
            paymentSourceType: f,
            hide: N,
            purchaseType: x,
            productLine: I,
            proratedAmount: g,
            basePrice: v,
            currentSubscription: M,
            skuId: b,
            applicationName: R,
            hasAlreadyLinked: j,
        } = e,
        L = (0, i.ds)();
    if (N) return null;
    let O = null == e.planGroup ? [] : e.planGroup;
    if (null != T) {
        let e = o.Ay.getIntervalForInvoice(T);
        (t = e.intervalType),
            (n = e.intervalCount),
            (C = (0, u.CE)((0, u.$g)(T.total, T.currency), t, n)),
            (A = (0, u.CE)((0, u.$g)(T.subtotal, T.currency), t, n));
    } else null != E && ((t = E.interval), (n = E.intervalCount));
    let D = (0, a.Ro)({
            purchaseType: x ?? d.VVm.SUBSCRIPTION,
            plan: E,
            premiumSubscription: null == M ? null : M,
            productLine: I,
            isGift: !!y,
            planGroup: O,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        w = h.intl.format(h.t.Y2Rkqc, { primaryText: D, paidURL: d.X7G.PAID_TERMS }),
        U = h.intl.format(h.t.H2uH5b, { primaryText: D, paidURL: d.X7G.PAID_TERMS }),
        k = "",
        Y = "";
    if (S) {
        k = h.intl.format(h.t.xlJyOM, { virtualGoodsURL: d.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: d.X7G.PAID_TERMS });
        let e = "";
        (e =
            b === p.Dp.ORB_PROFILE_BADGE
                ? h.intl.string(h.t.APcKRo)
                : b === p.Dp.FRACTIONAL_PREMIUM
                  ? h.intl.string(h.t.FhJ74j)
                  : h.intl.string(h.t["Sxed/G"])),
            Array.isArray(k) ? (k = [...k, ` ${e}`]) : (k += ` ${e}`);
    } else if (_)
        if (null != C && T?.subscriptionPeriodEnd != null) k = h.intl.format(h.t["2VPTay"], { subtotalRate: A });
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
    else if (x === d.VVm.ONE_TIME)
        switch (I) {
            case d.EZt.COLLECTIBLES:
                (Y = w),
                    (k = y
                        ? h.intl.format(h.t.Amdf8X, { paidURL: d.X7G.PAID_TERMS })
                        : h.intl.format(h.t["40vM4o"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.GUILD_PRODUCT:
                (Y = w), (k = h.intl.format(h.t["GEAQ+u"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.SOCIAL_LAYER_GAME_ITEM:
                Y = w;
                let G = y || !0 === j ? h.t.f6Ngwm : h.t.CVITgq;
                k = h.intl.format(G, { applicationName: R ?? "game's" });
                break;
            default:
                (Y = U), (k = "");
        }
    else if (null == E || y)
        switch ((y && (Y = w), t)) {
            case m.WT.MONTH:
                (k = y ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"])),
                    (k = y
                        ? h.intl.string(h.t.IjNapk)
                        : 1 === n
                          ? h.intl.string(h.t["/sGXPr"])
                          : h.intl.formatToPlainString(h.t.Fqjihk, { intervalCount: n }));
                break;
            case m.WT.YEAR:
                k = y ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
                break;
            case void 0:
                k = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let l,
            i = (0, a.Ro)({
                productLine: I,
                purchaseType: d.VVm.SUBSCRIPTION,
                plan: E,
                premiumSubscription: null == M ? null : M,
                isGift: !1,
                planGroup: O,
                isPrepaidPaymentSource: !1,
                willRelocateStoreCountry: e.willRelocateStoreCountry,
            });
        P ||
            (l = ((e, t, n, l) => {
                if (null == e || null == t || null == n) {
                    let e = Error("Missing base rate for legal fine print");
                    return (0, r.pM)(e, { tags: { planId: l ?? "none" } }), null;
                }
                return (0, u.CE)((0, u.$g)(e.amount, e.currency), t, n);
            })(v, t, n, E.id)),
            (k = M?.isPausedAllowsResumeButNotUpdates
                ? h.intl.format(h.t.B6oNwB, {
                      primaryText: i,
                      rate: l,
                      paidURL: d.X7G.PAID_TERMS,
                      contactLink: d.X7G.CONTACT,
                      helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                  })
                : null != M && (0, c.vT)(M, E.id, O)
                  ? h.intl.format(h.t.LyBQUW, {
                        primaryText: i,
                        rate: l,
                        paidURL: d.X7G.PAID_TERMS,
                        contactLink: d.X7G.CONTACT,
                        helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                    })
                  : L && I === d.EZt.BOOST && null != v
                    ? h.intl.format(h.t["2nKy/0"], {
                          price: (0, u.$g)(v.amount, v.currency),
                          paidServiceTermsArticle: d.X7G.PAID_TERMS,
                          contactUsArticle: d.X7G.CONTACT,
                          subscriptionFAQArticle: s.A.getArticleURL(d.MVz.BILLING),
                      })
                    : L
                      ? h.intl.format(h.t.Oo2FeS, {
                            buttonText: i,
                            interval: o.Ay.formatInterval(E?.interval),
                            cancelSubscriptionArticle: s.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: s.A.getArticleURL(d.MVz.PAID_TERMS),
                        })
                      : P
                        ? h.intl.format(h.t["Hvo/Z5"], {
                              buttonText: i,
                              interval: o.Ay.formatInterval(E?.interval),
                              cancelSubscriptionArticle: s.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: s.A.getArticleURL(d.MVz.PAID_TERMS),
                          })
                        : null != g && null != v
                          ? h.intl.format(h.t.Kcieh4, {
                                primaryText: i,
                                proratedAmount: (0, u.$g)(g, v.currency),
                                renewalAmount: (0, u.$g)(v.amount, v.currency),
                                rateInterval: o.Ay.formatInterval(E?.interval),
                                paidURL: d.X7G.PAID_TERMS,
                                contactLink: d.X7G.CONTACT,
                                helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                            })
                          : h.intl.format(h.t.anJ7OX, {
                                primaryText: i,
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
            f === d.hes.PAYSAFE_CARD && (0, l.jsx)("div", { children: h.intl.string(h.t.kj9VLI) }),
            f === d.hes.SOFORT && (0, l.jsx)("div", { children: h.intl.string(h.t["UYy1/h"]) }),
        ],
    });
}
let E = function (e) {
    return (0, l.jsx)("div", { className: C.F, children: (0, l.jsx)(A, { ...e }) });
};
