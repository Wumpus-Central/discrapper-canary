n.d(t, { A: () => C });
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
    A = n(516442);
function _(e) {
    let t,
        n,
        A,
        _,
        {
            subscriptionPlan: C,
            isGift: E,
            isTrial: y,
            isOrbCheckout: f,
            isEmbeddedIAP: P,
            renewalInvoice: S,
            paymentSourceType: x,
            hide: T,
            purchaseType: N,
            productLine: g,
            proratedAmount: I,
            basePrice: v,
            currentSubscription: b,
            skuId: R,
            applicationName: M,
            hasAlreadyLinked: j,
        } = e,
        L = (0, i.ds)();
    if (T) return null;
    let O = null == e.planGroup ? [] : e.planGroup;
    if (null != S) {
        let e = o.Ay.getIntervalForInvoice(S);
        (t = e.intervalType),
            (n = e.intervalCount),
            (A = (0, u.CE)((0, u.$g)(S.total, S.currency), t, n)),
            (_ = (0, u.CE)((0, u.$g)(S.subtotal, S.currency), t, n));
    } else null != C && ((t = C.interval), (n = C.intervalCount));
    let D = (0, a.Ro)({
            purchaseType: N ?? d.VVm.SUBSCRIPTION,
            plan: C,
            premiumSubscription: null == b ? null : b,
            productLine: g,
            isGift: !!E,
            planGroup: O,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        U = h.intl.format(h.t.Y2Rkqc, { primaryText: D, paidURL: d.X7G.PAID_TERMS }),
        w = h.intl.format(h.t.H2uH5b, { primaryText: D, paidURL: d.X7G.PAID_TERMS }),
        k = "",
        F = "";
    if (f) {
        k = h.intl.format(h.t.xlJyOM, { virtualGoodsURL: d.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: d.X7G.PAID_TERMS });
        let e = "";
        (e =
            R === p.Dp.ORB_PROFILE_BADGE
                ? h.intl.string(h.t.APcKRo)
                : R === p.Dp.FRACTIONAL_PREMIUM
                  ? h.intl.string(h.t.FhJ74j)
                  : h.intl.string(h.t["Sxed/G"])),
            Array.isArray(k) ? (k = [...k, ` ${e}`]) : (k += ` ${e}`);
    } else if (P)
        if (null != A && S?.subscriptionPeriodEnd != null) k = h.intl.format(h.t["2VPTay"], { subtotalRate: _ });
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
                (F = U),
                    (k = E
                        ? h.intl.format(h.t.Amdf8X, { paidURL: d.X7G.PAID_TERMS })
                        : h.intl.format(h.t["40vM4o"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.GUILD_PRODUCT:
                (F = U), (k = h.intl.format(h.t["GEAQ+u"], { paidURL: d.X7G.PAID_TERMS }));
                break;
            case d.EZt.SOCIAL_LAYER_GAME_ITEM:
                F = U;
                let G = E || !0 === j ? h.t.f6Ngwm : h.t.CVITgq;
                k = h.intl.format(G, { applicationName: M ?? "game's" });
                break;
            default:
                (F = w), (k = "");
        }
    else if (null == C || E)
        switch ((E && (F = U), t)) {
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
            i = (0, a.Ro)({
                productLine: g,
                purchaseType: d.VVm.SUBSCRIPTION,
                plan: C,
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
            })(v, t, n, C.id)),
            (k = b?.isPausedAllowsResumeButNotUpdates
                ? h.intl.format(h.t.B6oNwB, {
                      primaryText: i,
                      rate: l,
                      paidURL: d.X7G.PAID_TERMS,
                      contactLink: d.X7G.CONTACT,
                      helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                  })
                : null != b && (0, c.vT)(b, C.id, O)
                  ? h.intl.format(h.t.LyBQUW, {
                        primaryText: i,
                        rate: l,
                        paidURL: d.X7G.PAID_TERMS,
                        contactLink: d.X7G.CONTACT,
                        helpdeskArticle: s.A.getArticleURL(d.MVz.BILLING),
                    })
                  : L && g === d.EZt.BOOST && null != v
                    ? h.intl.format(h.t["2nKy/0"], {
                          price: (0, u.$g)(v.amount, v.currency),
                          paidServiceTermsArticle: d.X7G.PAID_TERMS,
                          contactUsArticle: d.X7G.CONTACT,
                          subscriptionFAQArticle: s.A.getArticleURL(d.MVz.BILLING),
                      })
                    : L
                      ? h.intl.format(h.t.Oo2FeS, {
                            buttonText: i,
                            interval: o.Ay.formatInterval(C?.interval),
                            cancelSubscriptionArticle: s.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: s.A.getArticleURL(d.MVz.PAID_TERMS),
                        })
                      : y
                        ? h.intl.format(h.t["Hvo/Z5"], {
                              buttonText: i,
                              interval: o.Ay.formatInterval(C?.interval),
                              cancelSubscriptionArticle: s.A.getArticleURL(d.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: s.A.getArticleURL(d.MVz.PAID_TERMS),
                          })
                        : null != I && null != v
                          ? h.intl.format(h.t.Kcieh4, {
                                primaryText: i,
                                proratedAmount: (0, u.$g)(I, v.currency),
                                renewalAmount: (0, u.$g)(v.amount, v.currency),
                                rateInterval: o.Ay.formatInterval(C?.interval),
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
            "" !== F && (0, l.jsx)("div", { children: F }),
            "" !== k && (0, l.jsx)("div", { children: k }),
            x === d.hes.PAYSAFE_CARD && (0, l.jsx)("div", { children: h.intl.string(h.t.kj9VLI) }),
            x === d.hes.SOFORT && (0, l.jsx)("div", { children: h.intl.string(h.t["UYy1/h"]) }),
        ],
    });
}
let C = function (e) {
    return (0, l.jsx)("div", { className: A.F, children: (0, l.jsx)(_, { ...e }) });
};
