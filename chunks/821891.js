n.d(t, { A: () => y });
var l = n(627968);
n(64700);
var r = n(881489),
    i = n(367921),
    a = n(578942),
    s = n(739508),
    o = n(975571),
    u = n(428262),
    c = n(580630),
    d = n(615396),
    p = n(652215),
    m = n(758836),
    h = n(788868),
    A = n(375708),
    E = n(516442);
function C(e) {
    let t,
        n,
        E,
        C,
        {
            subscriptionPlan: y,
            isGift: _,
            isTrial: S,
            isOrbCheckout: P,
            isEmbeddedIAP: I,
            renewalInvoice: f,
            paymentSourceType: T,
            hide: N,
            purchaseType: g,
            productLine: v,
            proratedAmount: x,
            basePrice: R,
            currentSubscription: M,
            skuId: b,
            applicationName: L,
            applicationId: O,
            hasAlreadyLinked: j,
        } = e,
        w = (0, r.ds)();
    if (N) return null;
    let D = null == e.planGroup ? [] : e.planGroup;
    if (null != f) {
        let e = u.Ay.getIntervalForInvoice(f);
        (t = e.intervalType),
            (n = e.intervalCount),
            (E = (0, c.CE)((0, c.$g)(f.total, f.currency), t, n)),
            (C = (0, c.CE)((0, c.$g)(f.subtotal, f.currency), t, n));
    } else null != y && ((t = y.interval), (n = y.intervalCount));
    let U = (0, i.Ro)({
            purchaseType: g ?? p.VVm.SUBSCRIPTION,
            plan: y,
            premiumSubscription: null == M ? null : M,
            productLine: v,
            isGift: !!_,
            planGroup: D,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        k = A.intl.format(A.t.Y2Rkqc, { primaryText: U, paidURL: p.X7G.PAID_TERMS }),
        G = A.intl.format(A.t.H2uH5b, { primaryText: U, paidURL: p.X7G.PAID_TERMS }),
        F = "",
        Y = "";
    if (P) {
        F = A.intl.format(A.t.xlJyOM, { virtualGoodsURL: p.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: p.X7G.PAID_TERMS });
        let e = "";
        (e =
            b === m.Dp.ORB_PROFILE_BADGE
                ? A.intl.string(A.t.APcKRo)
                : b === m.Dp.FRACTIONAL_PREMIUM
                  ? A.intl.string(A.t.FhJ74j)
                  : A.intl.string(A.t["Sxed/G"])),
            Array.isArray(F) ? (F = [...F, ` ${e}`]) : (F += ` ${e}`);
    } else if (I)
        if (null != E && f?.subscriptionPeriodEnd != null) F = A.intl.format(A.t["2VPTay"], { subtotalRate: C });
        else
            switch (t) {
                case h.WT.MONTH:
                    F = 1 === n ? A.intl.format(A.t["+ywPmZ"], {}) : A.intl.format(A.t.oBwZfh, { intervalCount: n });
                    break;
                case h.WT.YEAR:
                    F = A.intl.format(A.t.y9gsX5, {});
                    break;
                case void 0:
                    F = A.intl.format(A.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (g === p.VVm.ONE_TIME)
        switch (v) {
            case p.EZt.COLLECTIBLES:
                (Y = k),
                    (F = _
                        ? A.intl.format(A.t.Amdf8X, { paidURL: p.X7G.PAID_TERMS })
                        : A.intl.format(A.t["40vM4o"], { paidURL: p.X7G.PAID_TERMS }));
                break;
            case p.EZt.GUILD_PRODUCT:
                (Y = k), (F = A.intl.format(A.t["GEAQ+u"], { paidURL: p.X7G.PAID_TERMS }));
                break;
            case p.EZt.SOCIAL_LAYER_GAME_ITEM:
                (Y = k),
                    (F = (0, a._z)(null != O ? { id: O, name: L ?? "game's" } : void 0, {
                        shouldAppendDisclaimer: !0 === _ || !1 === j,
                    }));
                break;
            default:
                (Y = G), (F = "");
        }
    else if (null == y || _)
        switch ((_ && (Y = k), t)) {
            case h.WT.MONTH:
                (F = _ ? A.intl.string(A.t.IjNapk) : A.intl.string(A.t["/sGXPr"])),
                    (F = _
                        ? A.intl.string(A.t.IjNapk)
                        : 1 === n
                          ? A.intl.string(A.t["/sGXPr"])
                          : A.intl.formatToPlainString(A.t.Fqjihk, { intervalCount: n }));
                break;
            case h.WT.YEAR:
                F = _ ? A.intl.string(A.t.vAfbG8) : A.intl.string(A.t.IGzFc5);
                break;
            case void 0:
                F = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let l,
            r = (0, i.Ro)({
                productLine: v,
                purchaseType: p.VVm.SUBSCRIPTION,
                plan: y,
                premiumSubscription: null == M ? null : M,
                isGift: !1,
                planGroup: D,
                isPrepaidPaymentSource: !1,
                willRelocateStoreCountry: e.willRelocateStoreCountry,
            });
        S ||
            (l = ((e, t, n, l) => {
                if (null == e || null == t || null == n) {
                    let e = Error("Missing base rate for legal fine print");
                    return (0, s.pM)(e, { tags: { planId: l ?? "none" } }), null;
                }
                return (0, c.CE)((0, c.$g)(e.amount, e.currency), t, n);
            })(R, t, n, y.id)),
            (F = M?.isPausedAllowsResumeButNotUpdates
                ? A.intl.format(A.t.B6oNwB, {
                      primaryText: r,
                      rate: l,
                      paidURL: p.X7G.PAID_TERMS,
                      contactLink: p.X7G.CONTACT,
                      helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                  })
                : null != M && (0, d.vT)(M, y.id, D)
                  ? A.intl.format(A.t.LyBQUW, {
                        primaryText: r,
                        rate: l,
                        paidURL: p.X7G.PAID_TERMS,
                        contactLink: p.X7G.CONTACT,
                        helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                    })
                  : w && v === p.EZt.BOOST && null != R
                    ? A.intl.format(A.t["2nKy/0"], {
                          price: (0, c.$g)(R.amount, R.currency),
                          paidServiceTermsArticle: p.X7G.PAID_TERMS,
                          contactUsArticle: p.X7G.CONTACT,
                          subscriptionFAQArticle: o.A.getArticleURL(p.MVz.BILLING),
                      })
                    : w
                      ? A.intl.format(A.t.Oo2FeS, {
                            buttonText: r,
                            interval: u.Ay.formatInterval(y?.interval),
                            cancelSubscriptionArticle: o.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: o.A.getArticleURL(p.MVz.PAID_TERMS),
                        })
                      : S
                        ? A.intl.format(A.t["Hvo/Z5"], {
                              buttonText: r,
                              interval: u.Ay.formatInterval(y?.interval),
                              cancelSubscriptionArticle: o.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: o.A.getArticleURL(p.MVz.PAID_TERMS),
                          })
                        : null != x && null != R
                          ? A.intl.format(A.t.Kcieh4, {
                                primaryText: r,
                                proratedAmount: (0, c.$g)(x, R.currency),
                                renewalAmount: (0, c.$g)(R.amount, R.currency),
                                rateInterval: u.Ay.formatInterval(y?.interval),
                                paidURL: p.X7G.PAID_TERMS,
                                contactLink: p.X7G.CONTACT,
                                helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                            })
                          : A.intl.format(A.t.anJ7OX, {
                                primaryText: r,
                                rate: l,
                                paidURL: p.X7G.PAID_TERMS,
                                contactLink: p.X7G.CONTACT,
                                helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                            }));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            "" !== Y && (0, l.jsx)("div", { children: Y }),
            "" !== F && (0, l.jsx)("div", { children: F }),
            T === p.hes.PAYSAFE_CARD && (0, l.jsx)("div", { children: A.intl.string(A.t.kj9VLI) }),
            T === p.hes.SOFORT && (0, l.jsx)("div", { children: A.intl.string(A.t["UYy1/h"]) }),
        ],
    });
}
let y = function (e) {
    return (0, l.jsx)("div", { className: E.F, children: (0, l.jsx)(C, { ...e }) });
};
