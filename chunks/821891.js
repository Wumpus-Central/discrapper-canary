n.d(t, { A: () => y });
var l = n(627968);
n(64700);
var a = n(881489),
    i = n(367921),
    r = n(987723),
    s = n(739508),
    o = n(975571),
    u = n(927578),
    c = n(580630),
    d = n(615396),
    p = n(652215),
    m = n(758836),
    h = n(788868),
    C = n(375708),
    A = n(516442);
function E(e) {
    let t,
        n,
        A,
        E,
        {
            subscriptionPlan: y,
            isGift: P,
            isTrial: S,
            isOrbCheckout: _,
            isEmbeddedIAP: T,
            renewalInvoice: f,
            paymentSourceType: N,
            hide: x,
            purchaseType: I,
            productLine: g,
            proratedAmount: v,
            basePrice: M,
            currentSubscription: j,
            skuId: b,
            applicationName: R,
            applicationId: L,
            hasAlreadyLinked: O,
        } = e,
        D = (0, a.ds)();
    if (x) return null;
    let w = null == e.planGroup ? [] : e.planGroup;
    if (null != f) {
        let e = u.Ay.getIntervalForInvoice(f);
        (t = e.intervalType),
            (n = e.intervalCount),
            (A = (0, c.CE)((0, c.$g)(f.total, f.currency), t, n)),
            (E = (0, c.CE)((0, c.$g)(f.subtotal, f.currency), t, n));
    } else null != y && ((t = y.interval), (n = y.intervalCount));
    let U = (0, i.Ro)({
            purchaseType: I ?? p.VVm.SUBSCRIPTION,
            plan: y,
            premiumSubscription: null == j ? null : j,
            productLine: g,
            isGift: !!P,
            planGroup: w,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        k = C.intl.format(C.t.Y2Rkqc, { primaryText: U, paidURL: p.X7G.PAID_TERMS }),
        Y = C.intl.format(C.t.H2uH5b, { primaryText: U, paidURL: p.X7G.PAID_TERMS }),
        G = "",
        F = "";
    if (_) {
        G = C.intl.format(C.t.xlJyOM, { virtualGoodsURL: p.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: p.X7G.PAID_TERMS });
        let e = "";
        (e =
            b === m.Dp.ORB_PROFILE_BADGE
                ? C.intl.string(C.t.APcKRo)
                : b === m.Dp.FRACTIONAL_PREMIUM
                  ? C.intl.string(C.t.FhJ74j)
                  : C.intl.string(C.t["Sxed/G"])),
            Array.isArray(G) ? (G = [...G, ` ${e}`]) : (G += ` ${e}`);
    } else if (T)
        if (null != A && f?.subscriptionPeriodEnd != null) G = C.intl.format(C.t["2VPTay"], { subtotalRate: E });
        else
            switch (t) {
                case h.WT.MONTH:
                    G = 1 === n ? C.intl.format(C.t["+ywPmZ"], {}) : C.intl.format(C.t.oBwZfh, { intervalCount: n });
                    break;
                case h.WT.YEAR:
                    G = C.intl.format(C.t.y9gsX5, {});
                    break;
                case void 0:
                    G = C.intl.format(C.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (I === p.VVm.ONE_TIME)
        switch (g) {
            case p.EZt.COLLECTIBLES:
                (F = k),
                    (G = P
                        ? C.intl.format(C.t.Amdf8X, { paidURL: p.X7G.PAID_TERMS })
                        : C.intl.format(C.t["40vM4o"], { paidURL: p.X7G.PAID_TERMS }));
                break;
            case p.EZt.GUILD_PRODUCT:
                (F = k), (G = C.intl.format(C.t["GEAQ+u"], { paidURL: p.X7G.PAID_TERMS }));
                break;
            case p.EZt.SOCIAL_LAYER_GAME_ITEM:
                (F = k),
                    (G = (0, r._z)(
                        null != L ? { id: L, name: R ?? "game's" } : void 0,
                        { shouldAppendDisclaimer: !0 === P || !0 === O },
                        { location: "LegalFinePrint" },
                    ));
                break;
            default:
                (F = Y), (G = "");
        }
    else if (null == y || P)
        switch ((P && (F = k), t)) {
            case h.WT.MONTH:
                (G = P ? C.intl.string(C.t.IjNapk) : C.intl.string(C.t["/sGXPr"])),
                    (G = P
                        ? C.intl.string(C.t.IjNapk)
                        : 1 === n
                          ? C.intl.string(C.t["/sGXPr"])
                          : C.intl.formatToPlainString(C.t.Fqjihk, { intervalCount: n }));
                break;
            case h.WT.YEAR:
                G = P ? C.intl.string(C.t.vAfbG8) : C.intl.string(C.t.IGzFc5);
                break;
            case void 0:
                G = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let l,
            a = (0, i.Ro)({
                productLine: g,
                purchaseType: p.VVm.SUBSCRIPTION,
                plan: y,
                premiumSubscription: null == j ? null : j,
                isGift: !1,
                planGroup: w,
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
            })(M, t, n, y.id)),
            (G = j?.isPausedAllowsResumeButNotUpdates
                ? C.intl.format(C.t.B6oNwB, {
                      primaryText: a,
                      rate: l,
                      paidURL: p.X7G.PAID_TERMS,
                      contactLink: p.X7G.CONTACT,
                      helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                  })
                : null != j && (0, d.vT)(j, y.id, w)
                  ? C.intl.format(C.t.LyBQUW, {
                        primaryText: a,
                        rate: l,
                        paidURL: p.X7G.PAID_TERMS,
                        contactLink: p.X7G.CONTACT,
                        helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                    })
                  : D && g === p.EZt.BOOST && null != M
                    ? C.intl.format(C.t["2nKy/0"], {
                          price: (0, c.$g)(M.amount, M.currency),
                          paidServiceTermsArticle: p.X7G.PAID_TERMS,
                          contactUsArticle: p.X7G.CONTACT,
                          subscriptionFAQArticle: o.A.getArticleURL(p.MVz.BILLING),
                      })
                    : D
                      ? C.intl.format(C.t.Oo2FeS, {
                            buttonText: a,
                            interval: u.Ay.formatInterval(y?.interval),
                            cancelSubscriptionArticle: o.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: o.A.getArticleURL(p.MVz.PAID_TERMS),
                        })
                      : S
                        ? C.intl.format(C.t["Hvo/Z5"], {
                              buttonText: a,
                              interval: u.Ay.formatInterval(y?.interval),
                              cancelSubscriptionArticle: o.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: o.A.getArticleURL(p.MVz.PAID_TERMS),
                          })
                        : null != v && null != M
                          ? C.intl.format(C.t.Kcieh4, {
                                primaryText: a,
                                proratedAmount: (0, c.$g)(v, M.currency),
                                renewalAmount: (0, c.$g)(M.amount, M.currency),
                                rateInterval: u.Ay.formatInterval(y?.interval),
                                paidURL: p.X7G.PAID_TERMS,
                                contactLink: p.X7G.CONTACT,
                                helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                            })
                          : C.intl.format(C.t.anJ7OX, {
                                primaryText: a,
                                rate: l,
                                paidURL: p.X7G.PAID_TERMS,
                                contactLink: p.X7G.CONTACT,
                                helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                            }));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            "" !== F && (0, l.jsx)("div", { children: F }),
            "" !== G && (0, l.jsx)("div", { children: G }),
            N === p.hes.PAYSAFE_CARD && (0, l.jsx)("div", { children: C.intl.string(C.t.kj9VLI) }),
            N === p.hes.SOFORT && (0, l.jsx)("div", { children: C.intl.string(C.t["UYy1/h"]) }),
        ],
    });
}
let y = function (e) {
    return (0, l.jsx)("div", { className: A.F, children: (0, l.jsx)(E, { ...e }) });
};
