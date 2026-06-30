"use strict";
n.d(t, { dL: () => ec, Ay: () => ef, oO: () => e_ }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(575593),
    a = n(403581),
    o = n(278416),
    l = n(262427),
    u = n(126097),
    c = n(38785),
    d = n(214891),
    _ = n(848584),
    h = n(241989),
    f = n(993408),
    p = n(287809),
    E = n(486020),
    m = n(428262),
    g = n(580630),
    A = n(284009),
    I = n.n(A),
    T = n(997101),
    S = n(17928),
    y = n(318254),
    C = n(881489),
    N = n(615396),
    v = n(652215),
    R = n(818348),
    O = n(375708),
    b = n(327105);
function D(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: i,
        productLine: r,
        isGift: s,
        planGroup: a,
        isPrepaidPaymentSource: o,
        paymentSourceId: l,
        hasPaymentSources: u,
        willRelocateStoreCountry: c,
    } = e;
    if (null === l && u) return O.intl.string(O.t.CpOiEO);
    if (c) return O.intl.string(b.default["7r4HPu"]);
    if (t === R.VV.ONE_TIME) return s ? O.intl.string(O.t.ouo4FK) : O.intl.string(O.t.ExD0Ng);
    if ((I()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), r === v.EZt.BOOST))
        return O.intl.string(O.t.eUEeCt);
    if (s) return O.intl.string(O.t.ouo4FK);
    if ((0, m.ys)(n.id))
        return o
            ? O.intl.string(O.t.cRCCJ3)
            : null != i
              ? i.isPausedAllowsResumeButNotUpdates
                  ? O.intl.string(O.t.zpi5pg)
                  : (0, N.Ge)(i, n.id, a)
                    ? O.intl.string(O.t.IJI7yk)
                    : O.intl.string(O.t.VPuTc5)
              : (0, m.ff)(null, n);
    return O.intl.string(O.t.YScQSF);
}
var L = n(331329),
    w = n(739508),
    M = n(975571),
    P = n(758836),
    x = n(788868),
    k = n(516442);
function U(e) {
    let t,
        n,
        r,
        s,
        {
            subscriptionPlan: a,
            isGift: o,
            isTrial: l,
            isOrbCheckout: u,
            isEmbeddedIAP: c,
            renewalInvoice: d,
            paymentSourceType: _,
            hide: h,
            purchaseType: f,
            productLine: p,
            proratedAmount: E,
            basePrice: A,
            currentSubscription: I,
            skuId: T,
            applicationName: S,
            applicationId: y,
            hasAlreadyLinked: R,
        } = e,
        b = (0, C.ds)();
    if (h) return null;
    let k = null == e.planGroup ? [] : e.planGroup;
    if (null != d) {
        let e = m.Ay.getIntervalForInvoice(d);
        (t = e.intervalType),
            (n = e.intervalCount),
            (r = (0, g.CE)((0, g.$g)(d.total, d.currency), t, n)),
            (s = (0, g.CE)((0, g.$g)(d.subtotal, d.currency), t, n));
    } else null != a && ((t = a.interval), (n = a.intervalCount));
    let U = D({
            purchaseType: f ?? v.VVm.SUBSCRIPTION,
            plan: a,
            premiumSubscription: null == I ? null : I,
            productLine: p,
            isGift: !!o,
            planGroup: k,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        G = O.intl.format(O.t.Y2Rkqc, { primaryText: U, paidURL: v.X7G.PAID_TERMS }),
        F = O.intl.format(O.t.H2uH5b, { primaryText: U, paidURL: v.X7G.PAID_TERMS }),
        V = "",
        B = "";
    if (u) {
        V = O.intl.format(O.t.xlJyOM, { virtualGoodsURL: v.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: v.X7G.PAID_TERMS });
        let e = "";
        (e =
            T === P.Dp.ORB_PROFILE_BADGE
                ? O.intl.string(O.t.APcKRo)
                : T === P.Dp.FRACTIONAL_PREMIUM
                  ? O.intl.string(O.t.FhJ74j)
                  : O.intl.string(O.t["Sxed/G"])),
            Array.isArray(V) ? (V = [...V, ` ${e}`]) : (V += ` ${e}`);
    } else if (c)
        if (null != r && d?.subscriptionPeriodEnd != null) V = O.intl.format(O.t["2VPTay"], { subtotalRate: s });
        else
            switch (t) {
                case x.WT.MONTH:
                    V = 1 === n ? O.intl.format(O.t["+ywPmZ"], {}) : O.intl.format(O.t.oBwZfh, { intervalCount: n });
                    break;
                case x.WT.YEAR:
                    V = O.intl.format(O.t.y9gsX5, {});
                    break;
                case void 0:
                    V = O.intl.format(O.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (f === v.VVm.ONE_TIME)
        switch (p) {
            case v.EZt.COLLECTIBLES:
                (B = G),
                    (V = o
                        ? O.intl.format(O.t.Amdf8X, { paidURL: v.X7G.PAID_TERMS })
                        : O.intl.format(O.t["40vM4o"], { paidURL: v.X7G.PAID_TERMS }));
                break;
            case v.EZt.GUILD_PRODUCT:
                (B = G), (V = O.intl.format(O.t["GEAQ+u"], { paidURL: v.X7G.PAID_TERMS }));
                break;
            case v.EZt.SOCIAL_LAYER_GAME_ITEM:
                (B = G),
                    (V = (0, L._z)(null != y ? { id: y, name: S ?? "game's" } : void 0, {
                        shouldAppendDisclaimer: !0 === o || !1 === R,
                    }));
                break;
            default:
                (B = F), (V = "");
        }
    else if (null == a || o)
        switch ((o && (B = G), t)) {
            case x.WT.MONTH:
                (V = o ? O.intl.string(O.t.IjNapk) : O.intl.string(O.t["/sGXPr"])),
                    (V = o
                        ? O.intl.string(O.t.IjNapk)
                        : 1 === n
                          ? O.intl.string(O.t["/sGXPr"])
                          : O.intl.formatToPlainString(O.t.Fqjihk, { intervalCount: n }));
                break;
            case x.WT.YEAR:
                V = o ? O.intl.string(O.t.vAfbG8) : O.intl.string(O.t.IGzFc5);
                break;
            case void 0:
                V = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let i,
            r = D({
                productLine: p,
                purchaseType: v.VVm.SUBSCRIPTION,
                plan: a,
                premiumSubscription: null == I ? null : I,
                isGift: !1,
                planGroup: k,
                isPrepaidPaymentSource: !1,
                willRelocateStoreCountry: e.willRelocateStoreCountry,
            });
        l ||
            (i = (function (e, t, n, i) {
                if (null == e || null == t || null == n) {
                    let e = Error("Missing base rate for legal fine print");
                    return (0, w.pM)(e, { tags: { planId: i ?? "none" } }), null;
                }
                return (0, g.CE)((0, g.$g)(e.amount, e.currency), t, n);
            })(A, t, n, a.id)),
            (V = I?.isPausedAllowsResumeButNotUpdates
                ? O.intl.format(O.t.B6oNwB, {
                      primaryText: r,
                      rate: i,
                      paidURL: v.X7G.PAID_TERMS,
                      contactLink: v.X7G.CONTACT,
                      helpdeskArticle: M.A.getArticleURL(v.MVz.BILLING),
                  })
                : null != I && (0, N.vT)(I, a.id, k)
                  ? O.intl.format(O.t.LyBQUW, {
                        primaryText: r,
                        rate: i,
                        paidURL: v.X7G.PAID_TERMS,
                        contactLink: v.X7G.CONTACT,
                        helpdeskArticle: M.A.getArticleURL(v.MVz.BILLING),
                    })
                  : b && p === v.EZt.BOOST && null != A
                    ? O.intl.format(O.t["2nKy/0"], {
                          price: (0, g.$g)(A.amount, A.currency),
                          paidServiceTermsArticle: v.X7G.PAID_TERMS,
                          contactUsArticle: v.X7G.CONTACT,
                          subscriptionFAQArticle: M.A.getArticleURL(v.MVz.BILLING),
                      })
                    : b
                      ? O.intl.format(O.t.Oo2FeS, {
                            buttonText: r,
                            interval: m.Ay.formatInterval(a?.interval),
                            cancelSubscriptionArticle: M.A.getArticleURL(v.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: M.A.getArticleURL(v.MVz.PAID_TERMS),
                        })
                      : l
                        ? O.intl.format(O.t["Hvo/Z5"], {
                              buttonText: r,
                              interval: m.Ay.formatInterval(a?.interval),
                              cancelSubscriptionArticle: M.A.getArticleURL(v.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: M.A.getArticleURL(v.MVz.PAID_TERMS),
                          })
                        : null != E && null != A
                          ? O.intl.format(O.t.Kcieh4, {
                                primaryText: r,
                                proratedAmount: (0, g.$g)(E, A.currency),
                                renewalAmount: (0, g.$g)(A.amount, A.currency),
                                rateInterval: m.Ay.formatInterval(a?.interval),
                                paidURL: v.X7G.PAID_TERMS,
                                contactLink: v.X7G.CONTACT,
                                helpdeskArticle: M.A.getArticleURL(v.MVz.BILLING),
                            })
                          : O.intl.format(O.t.anJ7OX, {
                                primaryText: r,
                                rate: i,
                                paidURL: v.X7G.PAID_TERMS,
                                contactLink: v.X7G.CONTACT,
                                helpdeskArticle: M.A.getArticleURL(v.MVz.BILLING),
                            }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            "" !== B && (0, i.jsx)("div", { children: B }),
            "" !== V && (0, i.jsx)("div", { children: V }),
            _ === v.hes.PAYSAFE_CARD && (0, i.jsx)("div", { children: O.intl.string(O.t.kj9VLI) }),
            _ === v.hes.SOFORT && (0, i.jsx)("div", { children: O.intl.string(O.t["UYy1/h"]) }),
        ],
    });
}
let G = function (e) {
    return (0, i.jsx)("div", { className: k.F, children: (0, i.jsx)(U, { ...e }) });
};
var F = n(953689),
    V = n(10716),
    B = n(206828),
    j = n(20015),
    H = n(364995),
    Y = n(31823),
    W = n(426398),
    K = n(427675),
    $ = n(46332),
    z = n(977445),
    q = n(503698),
    Z = n.n(q),
    X = n(55428);
let Q = r.forwardRef(function (e, t) {
    let { isActive: n, children: r } = e;
    return (0, i.jsx)("div", { className: Z()(X.i, { [X.a]: n }), ref: t, children: r });
});
var J = n(218075),
    ee = n(615405),
    et = n(45938),
    en = n(937008),
    ei = n(566980),
    er = n(818824),
    es = n(872452);
function ea(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, en.Pv)(),
        { immediateDelivery: r } = (0, er.U)(),
        { checkoutReviewButtonLabel: s } = (0, $.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    return (0, i.jsx)(es._P, {
        variant: n ? { type: es.I0.GiftShop, purchaseButtonText: s } : { type: es.I0.Shop, purchaseButtonText: s },
        paymentSourceType: t,
        immediateDelivery: r,
    });
}
var eo = n(666995),
    el = n(319820),
    eu = n(594387);
function ec(e) {
    return e.name;
}
let ed = {
    [s.R.BUNDLE]: () => O.intl.string(b.default["jM8/71"]),
    [s.R.AVATAR_DECORATION]: () => O.intl.string(b.default.r29Oel),
    [s.R.PROFILE_EFFECT]: () => O.intl.string(b.default.eTYAvF),
    [s.R.NAMEPLATE]: () => O.intl.string(b.default.of9bom),
    [s.R.PROFILE_FRAME]: () => O.intl.string(b.default.HzDn6w),
};
function e_(e) {
    let t = O.intl.string(b.default.iZe9Wy);
    if (null == e);
    else if (e.type in ed) return (0, ed[e.type])();
    return t;
}
function eh(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: s,
            paymentMethodContent: u,
            legalContent: A,
            isGift: I,
            giftRecipient: T,
            upperInlineNoticeProps: S,
            footerInlineNoticeProps: C,
        } = e,
        { product: N, isSocialLayerGameItem: R } = (0, el.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: D, priceText: L } = r.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        i = [];
                    if (null != n) {
                        let { discount: e, basePrice: r, showTaxes: s } = (0, el.yh)({ invoicePreview: n });
                        return (
                            i.push({ id: "sku", label: ec(t), amount: r }),
                            null != e &&
                                i.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            s && i.push({ id: "tax", label: O.intl.string(O.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: i,
                                    label: O.intl.string(b.default.eoXh7B),
                                    currency: n.currency,
                                },
                                priceText: (0, g.$g)(r, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: s }),
            [n, s],
        ),
        w = r.useMemo(() => (null != D ? (0, i.jsx)(_.Vm, { ...D }) : null), [D]),
        M = r.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: r, isSocialLayerGameItem: s, giftRecipient: l } = e,
                        u = O.intl.string(b.default.iZe9Wy);
                    s
                        ? (u = O.intl.string(b.default.qwSlCO))
                        : null != n
                          ? (u = e_(n))
                          : t.productLine === v.EZt.GUILD_PRODUCT && (u = O.intl.string(b.default.hewwdA));
                    let c = s
                            ? {
                                  header: r.name,
                                  headerIconSrc: E.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }),
                              }
                            : {},
                        d = (0, i.jsx)(h.WH, { sku: t, product: n }),
                        _ = {};
                    return (
                        null != n &&
                            (_ = (function (e) {
                                let t = p.default.getCurrentUser(),
                                    n = m.Ay.canUseShopDiscounts(t),
                                    i = (0, f.xM)(t),
                                    r = (0, f.WD)(e, { hasShopDiscount: n, discount: (0, f.fT)(e, n) });
                                if (null != r && !r.showDefaultPriceOnly && r.showDiscountPrice) {
                                    if (i === f.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: O.intl.string(b.default.YUNJJa) };
                                    if (i === f.D0.THIRDPARTY)
                                        return { PriceIcon: o.g, priceTooltip: O.intl.string(eu.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ..._,
                            label: ec(t),
                            description: u,
                            graphic: d,
                            target: null != l ? { type: "gift", user: l } : void 0,
                        }
                    );
                })({ sku: n, product: N, application: t, isSocialLayerGameItem: R, giftRecipient: T }),
            [n, N, t, R, T],
        ),
        [P, x] = r.useMemo(
            () => [O.intl.string(b.default.Zxav97), null != s ? (0, g.$g)(s.total, s.currency) : void 0],
            [s],
        ),
        k = r.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: i } = t;
                if (null == e) return null;
                let r = e.orbsReward;
                if (null != r && r > 0) {
                    let e = i ? O.t["ZV+aS9"] : O.t["0StwHe"];
                    return {
                        Icon: y.C,
                        text: O.intl.format(e, { orbCount: r }),
                        gradientColor: n === v.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(s, { productLine: n.productLine, isGift: I });
            return null != e ? (0, i.jsx)(l.J, { ...e }) : null;
        }, [s, I, n.productLine]),
        { setHeaderBadgeText: U, unsetHeaderBadgeText: G } = (0, d.v)();
    return (
        r.useEffect(
            () => (
                null != k && U(O.intl.string(b.default.Fjpyfj)),
                () => {
                    G();
                }
            ),
            [k, U, G],
        ),
        (0, i.jsx)(c.T, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, i.jsx)(h.f7, { ...M, price: L }),
            invoiceSummaryContent: w,
            paymentMethodContent: u,
            legalContent: A,
            promotionalNoticeContent: k,
            upperInlineNoticeProps: S,
            footerInlineNoticeProps: C,
            invoiceTotalDueLabel: P,
            invoiceTotalDueValue: x,
        })
    );
}
function ef(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
        {
            sku: a,
            application: o,
            invoicePreview: l,
            isGift: d,
            eligiblePaymentGateways: _,
            purchaseTermsAndLegalContent: h,
            isStepLoading: f,
            giftRecipient: p,
            warningAndErrorMessages: E,
            disabled: m,
        } = (function (e) {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: s,
                    setHasAcceptedTerms: a,
                    purchaseState: o,
                    checkoutInvoicePreview: l,
                    paymentSourceId: u,
                    purchasePreviewError: c,
                    purchaseType: d,
                } = (0, $.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { hasPaymentSources: _ } = (0, W.jm)(),
                { application: h, isEmbeddedIAP: f } = (0, Y.V)(),
                p = (0, S.bG)([V.A], () => V.A.getFetchState()),
                { checkoutPaymentSources: E, hasInvoiceOrderContextLoaded: m } = (0, H.t)(),
                g = (0, K.gU)(),
                { isGift: A, giftRecipient: y } = (0, en.Pv)(),
                C = A && (0, et.Ik)(y),
                { fetched: N, hasAlreadyLinked: R } = (0, B.RD)(h);
            I()(null != s, "Expected selectedSkuId");
            let b = g[s],
                D = b?.eligiblePaymentGateways;
            I()(null != b, "SKU must exist and be fetched."), I()(null != h, "Application must exist.");
            let w = (0, z.uS)(h.id),
                M = T.M.EEA_COUNTRIES.has(ee.A.ipCountryCodeWithFallback),
                P = o === ei.h.PURCHASING || o === ei.h.COMPLETED,
                x = E.find((e) => e.id === u) ?? null,
                k = null != x ? x.type : null,
                U = null != D && D.length > 0 && (null == u || null === k) && _ ? J.fU.SELECT_PAYMENT_METHOD : void 0,
                q = b.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
                Z = C && !q,
                X = r.useMemo(
                    () => ({
                        testModeWarning: w ? O.intl.string(O.t.OvMyMd) : null,
                        devShelfError:
                            (0, j.n)(h, v.gfo.EMBEDDED) && p === V.$.ERROR ? O.intl.string(O.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: q && N && !R && !A ? (0, L.k3)(h) : null,
                    }),
                    [w, h, p, q, N, R, A],
                ),
                er = r.useMemo(
                    () =>
                        b.productLine === v.EZt.COLLECTIBLES
                            ? (0, i.jsx)(ea, { paymentSourceType: k })
                            : (0, i.jsx)(Q, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, i.jsx)(F.A, {
                                      onChange: a,
                                      forceShow: !0,
                                      showWithdrawalWaiver: M,
                                      disabled: P,
                                      subscriptionPlan: null,
                                      finePrintClassname: eo.i,
                                      purchaseType: d,
                                      isGift: A,
                                      finePrint: (0, i.jsx)(G, {
                                          paymentSourceType: k,
                                          isEmbeddedIAP: f,
                                          purchaseType: d,
                                          productLine: b.productLine,
                                          isGift: A,
                                          applicationName: h.name,
                                          applicationId: h.id,
                                          hasAlreadyLinked: !N || R,
                                      }),
                                  }),
                              }),
                    [t, n, a, M, P, d, A, k, f, b.productLine, h.name, h.id, N, R],
                );
            return {
                sku: b,
                application: h,
                giftRecipient: y,
                isGift: A,
                invoicePreview: l,
                isEmbeddedIAP: f,
                shouldShowPurchaseReviewImage: Z,
                paymentRestrictionBannerType: U,
                devShelfFetchState: p,
                isStepLoading: !m && null == c,
                purchasePreviewError: c,
                warningAndErrorMessages: X,
                purchaseTermsAndLegalContent: er,
                eligiblePaymentGateways: D,
                disabled: P,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        g = r.useMemo(() => ({ paymentGatewayRestrictions: _, shouldUseUnifiedCheckoutUI: !0 }), [_]),
        A = (0, i.jsx)(u.N, {
            label: O.intl.string(O.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: s,
            additionalPaymentSourceDropdownProps: g,
            disabled: m,
        }),
        y = r.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        C = r.useMemo(() => {
            let e = [];
            return (
                null != E.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: E.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [E.socialLayerGameItemDisclaimer]);
    return f
        ? (0, i.jsx)(c.E, {})
        : (0, i.jsx)(eh, {
              application: o,
              giftRecipient: p,
              isGift: d,
              sku: a,
              invoicePreview: l,
              paymentMethodContent: A,
              legalContent: h,
              upperInlineNoticeProps: y,
              footerInlineNoticeProps: C,
          });
}
