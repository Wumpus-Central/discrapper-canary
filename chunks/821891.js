n.d(t, { A: () => y });
var l = n(627968);
n(64700);
var i = n(881489),
    a = n(367921),
    r = n(987723),
    s = n(739508),
    o = n(975571),
    u = n(927578),
    c = n(580630),
    d = n(615396),
    p = n(652215),
    m = n(758836),
    h = n(788868),
    A = n(985018),
    C = n(516442);
function E(e) {
    let t,
        n,
        C,
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
            currentSubscription: b,
            skuId: R,
            applicationName: j,
            applicationId: L,
            hasAlreadyLinked: O,
        } = e,
        D = (0, i.ds)();
    if (x) return null;
    let w = null == e.planGroup ? [] : e.planGroup;
    if (null != f) {
        let e = u.Ay.getIntervalForInvoice(f);
        (t = e.intervalType),
            (n = e.intervalCount),
            (C = (0, c.CE)((0, c.$g)(f.total, f.currency), t, n)),
            (E = (0, c.CE)((0, c.$g)(f.subtotal, f.currency), t, n));
    } else null != y && ((t = y.interval), (n = y.intervalCount));
    let U = (0, a.Ro)({
            purchaseType: I ?? p.VVm.SUBSCRIPTION,
            plan: y,
            premiumSubscription: null == b ? null : b,
            productLine: g,
            isGift: !!P,
            planGroup: w,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        k = A.intl.format(A.t.Y2Rkqc, { primaryText: U, paidURL: p.X7G.PAID_TERMS }),
        Y = A.intl.format(A.t.H2uH5b, { primaryText: U, paidURL: p.X7G.PAID_TERMS }),
        G = "",
        F = "";
    if (_) {
        G = A.intl.format(A.t.xlJyOM, { virtualGoodsURL: p.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: p.X7G.PAID_TERMS });
        let e = "";
        (e =
            R === m.Dp.ORB_PROFILE_BADGE
                ? A.intl.string(A.t.APcKRo)
                : R === m.Dp.FRACTIONAL_PREMIUM
                  ? A.intl.string(A.t.FhJ74j)
                  : A.intl.string(A.t["Sxed/G"])),
            Array.isArray(G) ? (G = [...G, ` ${e}`]) : (G += ` ${e}`);
    } else if (T)
        if (null != C && f?.subscriptionPeriodEnd != null) G = A.intl.format(A.t["2VPTay"], { subtotalRate: E });
        else
            switch (t) {
                case h.WT.MONTH:
                    G = 1 === n ? A.intl.format(A.t["+ywPmZ"], {}) : A.intl.format(A.t.oBwZfh, { intervalCount: n });
                    break;
                case h.WT.YEAR:
                    G = A.intl.format(A.t.y9gsX5, {});
                    break;
                case void 0:
                    G = A.intl.format(A.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (I === p.VVm.ONE_TIME)
        switch (g) {
            case p.EZt.COLLECTIBLES:
                (F = k),
                    (G = P
                        ? A.intl.format(A.t.Amdf8X, { paidURL: p.X7G.PAID_TERMS })
                        : A.intl.format(A.t["40vM4o"], { paidURL: p.X7G.PAID_TERMS }));
                break;
            case p.EZt.GUILD_PRODUCT:
                (F = k), (G = A.intl.format(A.t["GEAQ+u"], { paidURL: p.X7G.PAID_TERMS }));
                break;
            case p.EZt.SOCIAL_LAYER_GAME_ITEM:
                (F = k),
                    (G = (0, r._z)(
                        null != L ? { id: L, name: j ?? "game's" } : void 0,
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
                (G = P ? A.intl.string(A.t.IjNapk) : A.intl.string(A.t["/sGXPr"])),
                    (G = P
                        ? A.intl.string(A.t.IjNapk)
                        : 1 === n
                          ? A.intl.string(A.t["/sGXPr"])
                          : A.intl.formatToPlainString(A.t.Fqjihk, { intervalCount: n }));
                break;
            case h.WT.YEAR:
                G = P ? A.intl.string(A.t.vAfbG8) : A.intl.string(A.t.IGzFc5);
                break;
            case void 0:
                G = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let l,
            i = (0, a.Ro)({
                productLine: g,
                purchaseType: p.VVm.SUBSCRIPTION,
                plan: y,
                premiumSubscription: null == b ? null : b,
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
            (G = b?.isPausedAllowsResumeButNotUpdates
                ? A.intl.format(A.t.B6oNwB, {
                      primaryText: i,
                      rate: l,
                      paidURL: p.X7G.PAID_TERMS,
                      contactLink: p.X7G.CONTACT,
                      helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                  })
                : null != b && (0, d.vT)(b, y.id, w)
                  ? A.intl.format(A.t.LyBQUW, {
                        primaryText: i,
                        rate: l,
                        paidURL: p.X7G.PAID_TERMS,
                        contactLink: p.X7G.CONTACT,
                        helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                    })
                  : D && g === p.EZt.BOOST && null != M
                    ? A.intl.format(A.t["2nKy/0"], {
                          price: (0, c.$g)(M.amount, M.currency),
                          paidServiceTermsArticle: p.X7G.PAID_TERMS,
                          contactUsArticle: p.X7G.CONTACT,
                          subscriptionFAQArticle: o.A.getArticleURL(p.MVz.BILLING),
                      })
                    : D
                      ? A.intl.format(A.t.Oo2FeS, {
                            buttonText: i,
                            interval: u.Ay.formatInterval(y?.interval),
                            cancelSubscriptionArticle: o.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: o.A.getArticleURL(p.MVz.PAID_TERMS),
                        })
                      : S
                        ? A.intl.format(A.t["Hvo/Z5"], {
                              buttonText: i,
                              interval: u.Ay.formatInterval(y?.interval),
                              cancelSubscriptionArticle: o.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: o.A.getArticleURL(p.MVz.PAID_TERMS),
                          })
                        : null != v && null != M
                          ? A.intl.format(A.t.Kcieh4, {
                                primaryText: i,
                                proratedAmount: (0, c.$g)(v, M.currency),
                                renewalAmount: (0, c.$g)(M.amount, M.currency),
                                rateInterval: u.Ay.formatInterval(y?.interval),
                                paidURL: p.X7G.PAID_TERMS,
                                contactLink: p.X7G.CONTACT,
                                helpdeskArticle: o.A.getArticleURL(p.MVz.BILLING),
                            })
                          : A.intl.format(A.t.anJ7OX, {
                                primaryText: i,
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
            N === p.hes.PAYSAFE_CARD && (0, l.jsx)("div", { children: A.intl.string(A.t.kj9VLI) }),
            N === p.hes.SOFORT && (0, l.jsx)("div", { children: A.intl.string(A.t["UYy1/h"]) }),
        ],
    });
}
let y = function (e) {
    return (0, l.jsx)("div", { className: C.F, children: (0, l.jsx)(E, { ...e }) });
};
