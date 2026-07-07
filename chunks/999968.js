n.d(t, { dL: () => ec, Ay: () => eC, oO: () => ep }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(319668),
    c = n(38785),
    d = n(214891),
    p = n(270537),
    m = n(241989),
    C = n(993408),
    h = n(287809),
    E = n(486020),
    A = n(428262),
    f = n(580630),
    S = n(284009),
    y = n.n(S),
    P = n(997101),
    T = n(17928),
    I = n(318254),
    _ = n(881489),
    g = n(615396),
    v = n(652215),
    x = n(818348),
    N = n(375708),
    R = n(327105);
function b(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: l,
        productLine: i,
        isGift: r,
        planGroup: a,
        isPrepaidPaymentSource: s,
        paymentSourceId: o,
        hasPaymentSources: u,
        willRelocateStoreCountry: c,
    } = e;
    if (null === o && u) return N.intl.string(N.t.CpOiEO);
    if (c) return N.intl.string(R.default["7r4HPu"]);
    if (t === x.VV.ONE_TIME) return r ? N.intl.string(N.t.ouo4FK) : N.intl.string(N.t.ExD0Ng);
    if ((y()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), i === v.EZt.BOOST))
        return N.intl.string(N.t.eUEeCt);
    if (r) return N.intl.string(N.t.ouo4FK);
    if ((0, A.ys)(n.id))
        return s
            ? N.intl.string(N.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? N.intl.string(N.t.zpi5pg)
                  : (0, g.Ge)(l, n.id, a)
                    ? N.intl.string(N.t.IJI7yk)
                    : N.intl.string(N.t.VPuTc5)
              : (0, A.ff)(null, n);
    return N.intl.string(N.t.YScQSF);
}
var M = n(331329),
    O = n(739508),
    j = n(975571),
    L = n(758836),
    D = n(202541),
    U = n(516442);
function w(e) {
    let t,
        n,
        i,
        r,
        {
            subscriptionPlan: a,
            isGift: s,
            isTrial: o,
            isOrbCheckout: u,
            isEmbeddedIAP: c,
            renewalInvoice: d,
            paymentSourceType: p,
            hide: m,
            purchaseType: C,
            productLine: h,
            proratedAmount: E,
            basePrice: S,
            currentSubscription: y,
            skuId: P,
            applicationName: T,
            applicationId: I,
            hasAlreadyLinked: x,
        } = e,
        R = (0, _.ds)();
    if (m) return null;
    let U = null == e.planGroup ? [] : e.planGroup;
    if (null != d) {
        let e = A.Ay.getIntervalForInvoice(d);
        (t = e.intervalType),
            (n = e.intervalCount),
            (i = (0, f.CE)((0, f.$g)(d.total, d.currency), t, n)),
            (r = (0, f.CE)((0, f.$g)(d.subtotal, d.currency), t, n));
    } else null != a && ((t = a.interval), (n = a.intervalCount));
    let w = b({
            purchaseType: C ?? v.VVm.SUBSCRIPTION,
            plan: a,
            premiumSubscription: null == y ? null : y,
            productLine: h,
            isGift: !!s,
            planGroup: U,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        k = N.intl.format(N.t.Y2Rkqc, { primaryText: w, paidURL: v.X7G.PAID_TERMS }),
        G = N.intl.format(N.t.H2uH5b, { primaryText: w, paidURL: v.X7G.PAID_TERMS }),
        F = "",
        B = "";
    if (u) {
        F = N.intl.format(N.t.xlJyOM, { virtualGoodsURL: v.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: v.X7G.PAID_TERMS });
        let e = "";
        (e =
            P === L.Dp.ORB_PROFILE_BADGE
                ? N.intl.string(N.t.APcKRo)
                : P === L.Dp.FRACTIONAL_PREMIUM
                  ? N.intl.string(N.t.FhJ74j)
                  : N.intl.string(N.t["Sxed/G"])),
            Array.isArray(F) ? (F = [...F, ` ${e}`]) : (F += ` ${e}`);
    } else if (c)
        if (null != i && d?.subscriptionPeriodEnd != null) F = N.intl.format(N.t["2VPTay"], { subtotalRate: r });
        else
            switch (t) {
                case D.WT.MONTH:
                    F = 1 === n ? N.intl.format(N.t["+ywPmZ"], {}) : N.intl.format(N.t.oBwZfh, { intervalCount: n });
                    break;
                case D.WT.YEAR:
                    F = N.intl.format(N.t.y9gsX5, {});
                    break;
                case void 0:
                    F = N.intl.format(N.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (C === v.VVm.ONE_TIME)
        switch (h) {
            case v.EZt.COLLECTIBLES:
                (B = k),
                    (F = s
                        ? N.intl.format(N.t.Amdf8X, { paidURL: v.X7G.PAID_TERMS })
                        : N.intl.format(N.t["40vM4o"], { paidURL: v.X7G.PAID_TERMS }));
                break;
            case v.EZt.GUILD_PRODUCT:
                (B = k), (F = N.intl.format(N.t["GEAQ+u"], { paidURL: v.X7G.PAID_TERMS }));
                break;
            case v.EZt.SOCIAL_LAYER_GAME_ITEM:
                (B = k),
                    (F = (0, M._z)(null != I ? { id: I, name: T ?? "game's" } : void 0, {
                        shouldAppendDisclaimer: !0 === s || !1 === x,
                    }));
                break;
            default:
                (B = G), (F = "");
        }
    else if (null == a || s)
        switch ((s && (B = k), t)) {
            case D.WT.MONTH:
                (F = s ? N.intl.string(N.t.IjNapk) : N.intl.string(N.t["/sGXPr"])),
                    (F = s
                        ? N.intl.string(N.t.IjNapk)
                        : 1 === n
                          ? N.intl.string(N.t["/sGXPr"])
                          : N.intl.formatToPlainString(N.t.Fqjihk, { intervalCount: n }));
                break;
            case D.WT.YEAR:
                F = s ? N.intl.string(N.t.vAfbG8) : N.intl.string(N.t.IGzFc5);
                break;
            case void 0:
                F = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let l,
            i = b({
                productLine: h,
                purchaseType: v.VVm.SUBSCRIPTION,
                plan: a,
                premiumSubscription: null == y ? null : y,
                isGift: !1,
                planGroup: U,
                isPrepaidPaymentSource: !1,
                willRelocateStoreCountry: e.willRelocateStoreCountry,
            });
        o ||
            (l = (function (e, t, n, l) {
                if (null == e || null == t || null == n) {
                    let e = Error("Missing base rate for legal fine print");
                    return (0, O.pM)(e, { tags: { planId: l ?? "none" } }), null;
                }
                return (0, f.CE)((0, f.$g)(e.amount, e.currency), t, n);
            })(S, t, n, a.id)),
            (F = y?.isPausedAllowsResumeButNotUpdates
                ? N.intl.format(N.t.B6oNwB, {
                      primaryText: i,
                      rate: l,
                      paidURL: v.X7G.PAID_TERMS,
                      contactLink: v.X7G.CONTACT,
                      helpdeskArticle: j.A.getArticleURL(v.MVz.BILLING),
                  })
                : null != y && (0, g.vT)(y, a.id, U)
                  ? N.intl.format(N.t.LyBQUW, {
                        primaryText: i,
                        rate: l,
                        paidURL: v.X7G.PAID_TERMS,
                        contactLink: v.X7G.CONTACT,
                        helpdeskArticle: j.A.getArticleURL(v.MVz.BILLING),
                    })
                  : R && h === v.EZt.BOOST && null != S
                    ? N.intl.format(N.t["2nKy/0"], {
                          price: (0, f.$g)(S.amount, S.currency),
                          paidServiceTermsArticle: v.X7G.PAID_TERMS,
                          contactUsArticle: v.X7G.CONTACT,
                          subscriptionFAQArticle: j.A.getArticleURL(v.MVz.BILLING),
                      })
                    : R
                      ? N.intl.format(N.t.Oo2FeS, {
                            buttonText: i,
                            interval: A.Ay.formatInterval(a?.interval),
                            cancelSubscriptionArticle: j.A.getArticleURL(v.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: j.A.getArticleURL(v.MVz.PAID_TERMS),
                        })
                      : o
                        ? N.intl.format(N.t["Hvo/Z5"], {
                              buttonText: i,
                              interval: A.Ay.formatInterval(a?.interval),
                              cancelSubscriptionArticle: j.A.getArticleURL(v.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: j.A.getArticleURL(v.MVz.PAID_TERMS),
                          })
                        : null != E && null != S
                          ? N.intl.format(N.t.Kcieh4, {
                                primaryText: i,
                                proratedAmount: (0, f.$g)(E, S.currency),
                                renewalAmount: (0, f.$g)(S.amount, S.currency),
                                rateInterval: A.Ay.formatInterval(a?.interval),
                                paidURL: v.X7G.PAID_TERMS,
                                contactLink: v.X7G.CONTACT,
                                helpdeskArticle: j.A.getArticleURL(v.MVz.BILLING),
                            })
                          : N.intl.format(N.t.anJ7OX, {
                                primaryText: i,
                                rate: l,
                                paidURL: v.X7G.PAID_TERMS,
                                contactLink: v.X7G.CONTACT,
                                helpdeskArticle: j.A.getArticleURL(v.MVz.BILLING),
                            }));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            "" !== B && (0, l.jsx)("div", { children: B }),
            "" !== F && (0, l.jsx)("div", { children: F }),
            p === v.hes.PAYSAFE_CARD && (0, l.jsx)("div", { children: N.intl.string(N.t.kj9VLI) }),
            p === v.hes.SOFORT && (0, l.jsx)("div", { children: N.intl.string(N.t["UYy1/h"]) }),
        ],
    });
}
let k = function (e) {
    return (0, l.jsx)("div", { className: U.F, children: (0, l.jsx)(w, { ...e }) });
};
var G = n(953689),
    F = n(10716),
    B = n(206828),
    Y = n(20015),
    H = n(364995),
    W = n(31823),
    V = n(426398),
    K = n(427675),
    Z = n(6938),
    q = n(977445),
    z = n(503698),
    $ = n.n(z),
    X = n(55428);
let Q = i.forwardRef(function (e, t) {
    let { isActive: n, children: i } = e;
    return (0, l.jsx)("div", { className: $()(X.i, { [X.a]: n }), ref: t, children: i });
});
var J = n(218075),
    ee = n(615405),
    et = n(45938),
    en = n(937008),
    el = n(566980),
    ei = n(818824),
    er = n(944355);
function ea(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, en.Pv)(),
        { immediateDelivery: i } = (0, ei.U)(),
        { checkoutReviewButtonLabel: r } = (0, Z.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    return (0, l.jsx)(er._P, {
        variant: n ? { type: er.I0.GiftShop, purchaseButtonText: r } : { type: er.I0.Shop, purchaseButtonText: r },
        paymentSourceType: t,
        immediateDelivery: i,
    });
}
var es = n(666995),
    eo = n(319820),
    eu = n(594387);
function ec(e) {
    return e.name;
}
let ed = {
    [r.R.BUNDLE]: () => N.intl.string(R.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => N.intl.string(R.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => N.intl.string(R.default.eTYAvF),
    [r.R.NAMEPLATE]: () => N.intl.string(R.default.of9bom),
    [r.R.PROFILE_FRAME]: () => N.intl.string(R.default.HzDn6w),
};
function ep(e) {
    let t = N.intl.string(R.default.iZe9Wy);
    if (null == e);
    else if (e.type in ed) return (0, ed[e.type])();
    return t;
}
function em(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: r,
            paymentMethodContent: u,
            legalContent: S,
            isGift: y,
            giftRecipient: P,
            upperInlineNoticeProps: T,
            footerInlineNoticeProps: _,
        } = e,
        { product: g, isSocialLayerGameItem: x } = (0, eo.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: b, priceText: M } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, eo.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: ec(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: N.intl.string(N.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: N.intl.string(R.default.eoXh7B),
                                    currency: n.currency,
                                },
                                priceText: (0, f.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: r }),
            [n, r],
        ),
        O = i.useMemo(() => (null != b ? (0, l.jsx)(p.Vm, { ...b }) : null), [b]),
        j = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: i, isSocialLayerGameItem: r, giftRecipient: o } = e,
                        u = N.intl.string(R.default.iZe9Wy);
                    r
                        ? (u = N.intl.string(R.default.qwSlCO))
                        : null != n
                          ? (u = ep(n))
                          : t.productLine === v.EZt.GUILD_PRODUCT && (u = N.intl.string(R.default.hewwdA));
                    let c = r
                            ? {
                                  header: i.name,
                                  headerIconSrc: E.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                        p = {};
                    return (
                        null != n &&
                            (p = (function (e) {
                                let t = h.default.getCurrentUser(),
                                    n = A.Ay.canUseShopDiscounts(t),
                                    l = (0, C.xM)(t),
                                    i = (0, C.WD)(e, { hasShopDiscount: n, discount: (0, C.fT)(e, n) });
                                if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                    if (l === C.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: N.intl.string(R.default.YUNJJa) };
                                    if (l === C.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: N.intl.string(eu.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...p,
                            label: ec(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: g, application: t, isSocialLayerGameItem: x, giftRecipient: P }),
            [n, g, t, x, P],
        ),
        [L, D] = i.useMemo(
            () => [N.intl.string(R.default.Zxav97), null != r ? (0, f.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        U = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l } = t;
                if (null == e) return null;
                let i = e.orbsReward;
                if (null != i && i > 0) {
                    let e = l ? N.t["ZV+aS9"] : N.t["0StwHe"];
                    return {
                        Icon: I.C,
                        text: N.intl.format(e, { orbCount: i }),
                        gradientColor: n === v.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: y });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, y, n.productLine]),
        { setHeaderBadgeText: w, unsetHeaderBadgeText: k } = (0, d.v)();
    return (
        i.useEffect(
            () => (
                null != U && w(N.intl.string(R.default.Fjpyfj)),
                () => {
                    k();
                }
            ),
            [U, w, k],
        ),
        (0, l.jsx)(c.T_, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, l.jsx)(m.f7, { ...j, price: M }),
            invoiceSummaryContent: O,
            paymentMethodContent: u,
            legalContent: S,
            promotionalNoticeContent: U,
            upperInlineNoticeProps: T,
            footerInlineNoticeProps: _,
            invoiceTotalDueLabel: L,
            invoiceTotalDueValue: D,
        })
    );
}
function eC(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: r } = e,
        {
            sku: a,
            application: s,
            invoicePreview: o,
            isGift: d,
            eligiblePaymentGateways: p,
            purchaseTermsAndLegalContent: m,
            isStepLoading: C,
            giftRecipient: h,
            warningAndErrorMessages: E,
            disabled: A,
        } = (function (e) {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: r,
                    setHasAcceptedTerms: a,
                    purchaseState: s,
                    checkoutInvoicePreview: o,
                    paymentSourceId: u,
                    purchasePreviewError: c,
                    purchaseType: d,
                } = (0, Z.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { hasPaymentSources: p } = (0, V.jm)(),
                { application: m, isEmbeddedIAP: C } = (0, W.V)(),
                h = (0, T.bG)([F.A], () => F.A.getFetchState()),
                { checkoutPaymentSources: E, hasInvoiceOrderContextLoaded: A } = (0, H.t)(),
                f = (0, K.gU)(),
                { isGift: S, giftRecipient: I } = (0, en.Pv)(),
                _ = S && (0, et.Ik)(I),
                { fetched: g, hasAlreadyLinked: x } = (0, B.RD)(m);
            y()(null != r, "Expected selectedSkuId");
            let R = f[r],
                b = R?.eligiblePaymentGateways;
            y()(null != R, "SKU must exist and be fetched."), y()(null != m, "Application must exist.");
            let O = (0, q.uS)(m.id),
                j = P.M.EEA_COUNTRIES.has(ee.A.ipCountryCodeWithFallback),
                L = s === el.h.PURCHASING || s === el.h.COMPLETED,
                D = E.find((e) => e.id === u) ?? null,
                U = null != D ? D.type : null,
                w = null != b && b.length > 0 && (null == u || null === U) && p ? J.fU.SELECT_PAYMENT_METHOD : void 0,
                z = R.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
                $ = _ && !z,
                X = i.useMemo(
                    () => ({
                        testModeWarning: O ? N.intl.string(N.t.OvMyMd) : null,
                        devShelfError:
                            (0, Y.n)(m, v.gfo.EMBEDDED) && h === F.$.ERROR ? N.intl.string(N.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: z && g && !x && !S ? (0, M.k3)(m) : null,
                    }),
                    [O, m, h, z, g, x, S],
                ),
                ei = i.useMemo(
                    () =>
                        R.productLine === v.EZt.COLLECTIBLES
                            ? (0, l.jsx)(ea, { paymentSourceType: U })
                            : (0, l.jsx)(Q, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(G.A, {
                                      onChange: a,
                                      forceShow: !0,
                                      showWithdrawalWaiver: j,
                                      disabled: L,
                                      subscriptionPlan: null,
                                      finePrintClassname: es.i,
                                      purchaseType: d,
                                      isGift: S,
                                      finePrint: (0, l.jsx)(k, {
                                          paymentSourceType: U,
                                          isEmbeddedIAP: C,
                                          purchaseType: d,
                                          productLine: R.productLine,
                                          isGift: S,
                                          applicationName: m.name,
                                          applicationId: m.id,
                                          hasAlreadyLinked: !g || x,
                                      }),
                                  }),
                              }),
                    [t, n, a, j, L, d, S, U, C, R.productLine, m.name, m.id, g, x],
                );
            return {
                sku: R,
                application: m,
                giftRecipient: I,
                isGift: S,
                invoicePreview: o,
                isEmbeddedIAP: C,
                shouldShowPurchaseReviewImage: $,
                paymentRestrictionBannerType: w,
                devShelfFetchState: h,
                isStepLoading: !A && null == c,
                purchasePreviewError: c,
                warningAndErrorMessages: X,
                purchaseTermsAndLegalContent: ei,
                eligiblePaymentGateways: b,
                disabled: L,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        f = i.useMemo(() => ({ paymentGatewayRestrictions: p, shouldUseUnifiedCheckoutUI: !0 }), [p]),
        S = (0, l.jsx)(u.N, {
            label: N.intl.string(N.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: r,
            additionalPaymentSourceDropdownProps: f,
            disabled: A,
        }),
        I = i.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        _ = i.useMemo(() => {
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
    return C
        ? (0, l.jsx)(c.Ed, {})
        : (0, l.jsx)(em, {
              application: s,
              giftRecipient: h,
              isGift: d,
              sku: a,
              invoicePreview: o,
              paymentMethodContent: S,
              legalContent: m,
              upperInlineNoticeProps: I,
              footerInlineNoticeProps: _,
          });
}
