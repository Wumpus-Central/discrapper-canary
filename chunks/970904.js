n.d(t, { A: () => z });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(377058),
    u = n(202475),
    c = n(400612),
    d = n(666646),
    m = n(87725),
    p = n(951305),
    C = n(566980),
    h = n(222707),
    f = n(340034),
    E = n(216641),
    S = n(158045),
    y = n(615396),
    I = n(375708);
n(562889);
var A =
        (((l = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (l.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        l),
    P = n(333007),
    g = n(289873),
    v = n(793574),
    _ = n(688810),
    x = n(482419),
    T = n(473617),
    N = n(848584),
    b = n(800471),
    j = n(888751),
    R = n(692440),
    M = n(202541),
    O = n(477729);
function L(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : P.createPortal(t, n);
}
function k() {
    return (0, i.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS });
}
function w(e, t) {
    let { noticeCopy: n } = t;
    r.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function U(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: l,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setOverrideRenewalDate: o,
        } = e,
        u = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "subscription_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: l },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, l],
        );
    (0, T.E)(u);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: p } = (0, m.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, d.Tr)(c, p);
    let C = (0, S.J$)(n.paymentSourceId);
    if (null != c) {
        let e = t.items.length > 1;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R._J, { invoice: c, isPrepaidPaymentSource: C }),
                (0, i.jsx)(L, {
                    containerNode: s.current,
                    children: (0, i.jsx)(R.Hc, {
                        currentInvoice: c,
                        renewalInvoice: c,
                        fractionalPremiumInfo: a,
                        isUpdate: !0,
                        defaultExpanded: e,
                        onComputeRenewalDate: o,
                    }),
                }),
            ],
        });
    }
    return (0, i.jsx)(k, {});
}
function D(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: l,
            priceOptions: a,
            fractionalPremiumInfo: s,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
        } = e,
        { analyticsLocations: C } = (0, _.Ay)(),
        h = (0, S.Pg)(t, n.id, 1, new Set(l)),
        {
            proratedInvoicePreview: f,
            renewalInvoicePreview: E,
            primaryInvoiceError: y,
        } = (function (e) {
            let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
                s = r.useMemo(
                    () => ({
                        subscriptionId: t.id,
                        items: n,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: i,
                        analyticsLocations: a,
                        analyticsLocation: v.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                    }),
                    [t.id, n, l.paymentSourceId, l.currency, i, a],
                ),
                { checkoutInvoicePreviewRequest: o, renewalInvoicePreviewRequest: u } = r.useMemo(
                    () => ({
                        checkoutInvoicePreviewRequest: {
                            type: "subscription_checkout_invoice",
                            params: { ...s, renewal: !1, applyEntitlements: !0 },
                        },
                        renewalInvoicePreviewRequest: {
                            type: "subscription_renewal_invoice",
                            params: { ...s, renewal: !0 },
                        },
                    }),
                    [s],
                );
            (0, T.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: d,
                renewalInvoicePreview: p,
                renewalInvoiceError: C,
            } = (0, m.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? C, [d, C]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: p,
                renewalInvoiceError: C,
            };
        })({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: C }),
        { planSwitchNoticeCopy: I, overrideRenewalDate: A } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, S._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != E)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, R.DK)({
                          proratedInvoice: f,
                          renewalInvoice: E,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, E, s]);
    if ((w(d, { noticeCopy: I }), null != y)) return null;
    let P = (0, b.U)(f, n);
    if (null == f || null == E || P) return (0, i.jsx)(k, {});
    let g = (0, S.J$)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.k, {
                discriminatedInvoicePreview: {
                    type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: E,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: g,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(L, {
                containerNode: u.current,
                children: (0, i.jsx)(R.Hc, {
                    currentInvoice: f,
                    renewalInvoice: E,
                    overrideRenewalDate: A,
                    fractionalPremiumInfo: s,
                    onComputeRenewalDate: p,
                    isUpdate: !0,
                }),
            }),
        ],
    });
}
function G(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: l,
            fractionalPremiumInfo: a,
            priceOptions: s,
            preventFetch: o,
            setUnifiedPlainNoticeText: u,
            setOverrideRenewalDate: c,
            unifiedSubscriptionDetailsNode: p,
        } = e,
        { analyticsLocations: C } = (0, _.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: f } = (0, m.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        E = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "subscription_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        items: (0, S.Pg)(t, n.id, 1, new Set(l)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: o,
                        analyticsLocations: C,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, l, s.paymentSourceId, s.currency, o, C],
        );
    (0, T.E)(E), (0, d.F0)(h, f);
    let { renewalDate: y, planSwitchNoticeCopy: A } = r.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            a.fractionalState === M.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: I.intl.format(I.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, a.fractionalState, a.endsAt]);
    if ((w(u, { noticeCopy: A }), null != f)) return null;
    if (null == h) return (0, i.jsx)(k, {});
    let P = (0, S.J$)(s.paymentSourceId),
        { lineItems: g } = (0, j.Ig)(h, {
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.Vm, { label: I.intl.string(O.default.eoXh7B), lineItems: g, currency: h.currency }),
            (0, i.jsx)(L, {
                containerNode: p.current,
                children: (0, i.jsx)(R.Hc, {
                    renewalInvoice: h,
                    isUpdate: !0,
                    fractionalPremiumInfo: a,
                    overrideRenewalDate: y,
                    onComputeRenewalDate: c,
                    defaultExpanded: !0,
                }),
            }),
        ],
    });
}
function F(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: l,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setUnifiedPlainNoticeText: o,
        } = e,
        { analyticsLocations: u } = (0, _.Ay)(),
        c = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "subscription_checkout_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: l,
                        analyticsLocations: u,
                        analyticsLocation: v.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
                    },
                },
                fetchRenewalInvoicePreviewRequest: {
                    type: "subscription_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: l,
                        analyticsLocations: u,
                        analyticsLocation: v.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, l, u],
        );
    (0, T.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: p,
        primaryInvoiceError: C,
    } = (0, m.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((w(o, { noticeCopy: r.useMemo(() => I.intl.string(I.t.spIYou), []) }), null != C)) return null;
    if (null == d || null == p) return (0, i.jsx)(k, {});
    let h = (0, S.J$)(n.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(R._J, { invoice: d, isPrepaidPaymentSource: h }),
            (0, i.jsx)(L, {
                containerNode: s.current,
                children: (0, i.jsx)(R.Hc, { renewalInvoice: p, isUpdate: !0, fractionalPremiumInfo: a }),
            }),
        ],
    });
}
n(321073);
var B = n(38785),
    H = n(577381),
    W = n(845012),
    Y = n(755880),
    V = n(134638),
    K = n(906234);
function Z(e) {
    let {
            loading: t,
            disabled: n,
            showFractionalPremiumBanner: l,
            fractionalPremiumInfo: a,
            isPremiumGroupPurchase: s,
            paymentRestrictionBannerType: o,
            invoiceError: u,
            unifiedPlainNoticeText: d,
            invoicePreview: m,
            invoicePreviewComponent: p,
            shouldShowPlanSelectAndPromoBanner: C,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: E,
            newPlan: y,
            planId: A,
            priceOptions: P,
            premiumPlanOptions: g,
            unifiedSubscriptionDetailsNode: v,
            isInvoiceBilledImmediately: _,
            paymentMethodContent: x,
            legalContent: T,
            isInPastDueCheckout: N,
        } = e,
        b = r.useMemo(() => {
            let e = [];
            return (
                N &&
                    e.push({
                        type: "warning",
                        message: I.intl.string(O.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                l &&
                    e.push({
                        directContent: (0, i.jsx)(f.l, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, h.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({
                        type: "warning",
                        message: (function (e) {
                            switch (e) {
                                case "SELECT_PAYMENT_METHOD":
                                    return I.intl.string(I.t.Tdb5qb);
                                case "ADD_NEW_PAYMENT_METHOD":
                                    return I.intl.string(I.t["6d44F5"]);
                            }
                        })(o),
                        key: "payment-restriction-banner-notice",
                    }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [N, s, o, u, l, a]),
        { priceOptions: j, planPricesLoading: M } = (0, S.Pr)(P, m, u),
        L = (0, H.i)({ planSkuId: y.skuId, invoice: m }),
        k = r.useMemo(() => (C && null != L ? L : null), [C, L]),
        w = (0, K.G)(A),
        U = r.useMemo(() => (w ? (0, i.jsx)(Y.a, {}) : null), [w]),
        D = r.useMemo(() => (null != k ? k : null != U ? U : null), [k, U]),
        G = (0, S.J$)(P.paymentSourceId),
        F = null,
        Z = null,
        q = N ? null : d;
    C
        ? (Z = (0, i.jsx)(W.X, {
              disabled: n,
              headingSubText: q,
              planOptions: g,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: j,
              planPricesLoading: M,
          }))
        : null != m &&
          (F = (0, i.jsx)(V._, {
              type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
              invoicePreview: m,
              subscriptionPlan: y,
              isPrepaidPaymentSource: G,
              isPremiumGroupPurchase: s,
              bottomSubText: q,
          }));
    let z = E ? p : (0, i.jsx)("div", { ref: v }),
        $ = E ? null : p;
    return (0, i.jsx)(B.T_, {
        isStepLoading: t,
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: N,
        upperInlineNoticeProps: b,
        paymentMethodContent: x,
        subscriptionDetailsContent: z,
        purchaseItemContent: F,
        planSelectContent: Z,
        invoiceSummaryContent: $,
        legalContent: T,
        invoiceTotalDueLabel: _ ? I.intl.string(O.default.R0cZsM) : I.intl.string(O.default["11g67A"]),
        invoiceTotalDueValue: null != m ? (0, R.U5)(m) : void 0,
        promotionalNoticeContent: D,
    });
}
var q = n(510552);
function z(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: l,
            planGroup: a,
            hasOpenInvoice: P,
            purchaseState: g,
            isInPastDueCheckout: v,
        } = e,
        _ = (0, d.mx)(),
        { paymentSources: x, hasPaymentSources: T } = (0, u.j)(),
        {
            selectedSkuId: N,
            paymentSourceId: b,
            priceOptions: j,
            renewalInvoicePreview: R,
            checkoutInvoicePreview: M,
            isCheckoutInvoicePreviewLoading: L,
            checkoutInvoiceError: k,
            activeSubscription: w,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            isCheckoutInvoicePreviewLoading: e.get("isCheckoutInvoicePreviewLoading"),
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPremiumPurchase: B, isPremiumGroupPurchase: H } = (0, m.t4)((e) => e.get("selectedPlanAttributes")),
        {
            defaultPlanId: W,
            isInOneStepSubscriptionCheckout: Y,
            shouldDisallowPlanSelection: V,
        } = (0, m.t4)((e) => ({
            defaultPlanId: e.defaultPlanId,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { isGift: K } = (0, p.Pv)(),
        z = (0, E.g)(x, b),
        { showFractionalPremiumBanner: $, fractionalPremiumInfo: Q } = (0, h._V)({
            premiumSubscription: w,
            selectedPlanId: n,
            planGroup: a,
            isGift: K,
        }),
        J = g === C.h.PURCHASING || g === C.h.COMPLETED,
        X = w?.isPausedAllowsResumeButNotUpdates,
        ee = r.useMemo(() => (0, S.Tm)({ skuId: N, isPremium: B, defaultPlanId: W }), [N, W, B]),
        et = r.useRef(null),
        [en, el] = r.useState(null),
        [ei, er] = r.useState(void 0),
        ea = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: et, setUnifiedPlainNoticeText: el, setOverrideRenewalDate: er }),
            [],
        ),
        {
            content: es,
            isInvoiceBilledImmediately: eo,
            ...eu
        } = null != w
            ? (function (e, t, n) {
                  let { hasOpenInvoice: l, showResumeSubscriptionView: r, planId: a } = e,
                      {
                          disabled: s,
                          premiumSubscription: o,
                          newPlan: u,
                          planGroup: c,
                          fractionalPremiumInfo: d,
                          priceOptions: m,
                      } = t;
                  return l
                      ? {
                            content: (0, i.jsx)(U, {
                                premiumSubscription: o,
                                priceOptions: m,
                                preventFetch: !1,
                                fractionalPremiumInfo: d,
                                ...n,
                            }),
                            isInvoiceBilledImmediately: !0,
                            shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                        }
                      : r
                        ? {
                              content: (0, i.jsx)(F, {
                                  premiumSubscription: o,
                                  priceOptions: m,
                                  preventFetch: s,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, y.Ge)(o, a, c)
                          ? {
                                content: (0, i.jsx)(D, {
                                    premiumSubscription: o,
                                    newPlan: u,
                                    planGroup: c,
                                    priceOptions: m,
                                    fractionalPremiumInfo: d,
                                    preventFetch: s,
                                    ...n,
                                }),
                                isInvoiceBilledImmediately: !0,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                            }
                          : {
                                isInvoiceBilledImmediately: !1,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                                content: (0, i.jsx)(G, {
                                    premiumSubscription: o,
                                    newPlan: u,
                                    planGroup: c,
                                    fractionalPremiumInfo: d,
                                    priceOptions: m,
                                    preventFetch: s,
                                    ...n,
                                }),
                            };
              })(
                  { hasOpenInvoice: P, showResumeSubscriptionView: X, planId: n },
                  {
                      disabled: J,
                      premiumSubscription: w,
                      newPlan: l,
                      planGroup: a,
                      fractionalPremiumInfo: Q,
                      priceOptions: j,
                  },
                  ea,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ec = w?.eligiblePaymentGateways,
        ed = null != ec && ec.length > 0 && (null == b || null === z) && T ? A.SELECT_PAYMENT_METHOD : void 0,
        em = null != w ? w.paymentSourceId : null,
        ep = r.useMemo(
            () => ({
                paymentGatewayRestrictions: w?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: v
                    ? (e) => e.map((e) => (e.id === em ? { ...e, tooltipText: I.intl.string(O.default["hjsn+s"]) } : e))
                    : void 0,
                className: s()({ [q.E]: B }),
            }),
            [w?.eligiblePaymentGateways, B, v, em],
        ),
        eC = null != M || null != k,
        eh = r.useMemo(
            () =>
                eC
                    ? (0, i.jsx)(o.N, {
                          label: I.intl.string(I.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: J,
                          additionalPaymentSourceDropdownProps: ep,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: j.paymentSourceId,
                      })
                    : null,
            [eC, j.paymentSourceId, ep, t, J],
        ),
        ef = null != w && (0, y.Ge)(w, n, a),
        eE = !X && Y && !H && !v && !V,
        eS = ef && null != _,
        ey = r.useMemo(
            () =>
                null == M || null == R || eS
                    ? null
                    : (0, i.jsx)(f.P, {
                          fractionalPremiumInfo: Q,
                          overrideRenewalDate: ei,
                          activeSubscription: w,
                          isTrial: !1,
                          plan: l,
                          isGift: K,
                          paymentSourceType: z,
                          isInvoiceBilledImmediately: eo,
                          discriminatedInvoicePreview: {
                              type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                              invoicePreview: M,
                              renewalInvoicePreview: R,
                          },
                      }),
            [Q, M, R, eS, ei, w, l, K, z, eo],
        );
    return (0, i.jsx)(Z, {
        loading: L,
        disabled: J,
        isInPastDueCheckout: v,
        showFractionalPremiumBanner: $,
        fractionalPremiumInfo: Q,
        isPremiumGroupPurchase: H,
        paymentRestrictionBannerType: ed,
        invoiceError: _,
        unifiedPlainNoticeText: en,
        invoicePreview: M,
        invoicePreviewComponent: es,
        shouldShowPlanSelectAndPromoBanner: eE,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: eu.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: l,
        planId: n,
        priceOptions: j,
        premiumPlanOptions: ee,
        unifiedSubscriptionDetailsNode: et,
        isInvoiceBilledImmediately: eo,
        paymentMethodContent: eh,
        legalContent: ey,
    });
}
