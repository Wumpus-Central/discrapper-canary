n.d(t, { A: () => Z });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(377058),
    u = n(202475),
    c = n(400612),
    d = n(666646),
    m = n(558620),
    p = n(206441),
    C = n(566980),
    h = n(222707),
    f = n(340034),
    E = n(216641),
    S = n(615396),
    y = n(375708);
n(562889);
var I =
        (((l = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (l.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        l),
    g = n(333007),
    A = n(289873),
    P = n(793574),
    v = n(688810),
    x = n(482419),
    _ = n(473617),
    T = n(848584),
    N = n(800471),
    b = n(888751),
    j = n(158045),
    R = n(692440),
    M = n(202541),
    O = n(477729);
function L(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : g.createPortal(t, n);
}
function k() {
    return (0, i.jsx)(A.y, { type: A.y.Type.PULSING_ELLIPSIS });
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
    (0, _.E)(u);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: m } = (0, p.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, d.Tr)(c, m);
    let C = (0, j.J$)(n.paymentSourceId);
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
            setOverrideRenewalDate: m,
        } = e,
        { analyticsLocations: C } = (0, v.Ay)(),
        h = (0, j.Pg)(t, n.id, 1, new Set(l)),
        {
            proratedInvoicePreview: f,
            renewalInvoicePreview: E,
            primaryInvoiceError: S,
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
                        analyticsLocation: P.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
            (0, _.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: d,
                renewalInvoicePreview: m,
                renewalInvoiceError: C,
            } = (0, p.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? C, [d, C]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: m,
                renewalInvoiceError: C,
            };
        })({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: C }),
        { planSwitchNoticeCopy: y, overrideRenewalDate: I } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, j._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
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
    if ((w(d, { noticeCopy: y }), null != S)) return null;
    let g = (0, N.U)(f, n);
    if (null == f || null == E || g) return (0, i.jsx)(k, {});
    let A = (0, j.J$)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.k, {
                discriminatedInvoicePreview: {
                    type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: E,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: A,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(L, {
                containerNode: u.current,
                children: (0, i.jsx)(R.Hc, {
                    currentInvoice: f,
                    renewalInvoice: E,
                    overrideRenewalDate: I,
                    fractionalPremiumInfo: s,
                    onComputeRenewalDate: m,
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
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: C } = (0, v.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: f } = (0, p.t4)((e) => ({
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
                        items: (0, j.Pg)(t, n.id, 1, new Set(l)),
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
    (0, _.E)(E), (0, d.F0)(h, f);
    let { renewalDate: S, planSwitchNoticeCopy: I } = r.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            a.fractionalState === M.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: y.intl.format(y.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, a.fractionalState, a.endsAt]);
    if ((w(u, { noticeCopy: I }), null != f)) return null;
    if (null == h) return (0, i.jsx)(k, {});
    let g = (0, j.J$)(s.paymentSourceId),
        { lineItems: A } = (0, b.Ig)(h, {
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: g,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.Vm, { label: y.intl.string(O.default.eoXh7B), lineItems: A, currency: h.currency }),
            (0, i.jsx)(L, {
                containerNode: m.current,
                children: (0, i.jsx)(R.Hc, {
                    renewalInvoice: h,
                    isUpdate: !0,
                    fractionalPremiumInfo: a,
                    overrideRenewalDate: S,
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
        { analyticsLocations: u } = (0, v.Ay)(),
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
                        analyticsLocation: P.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: P.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, l, u],
        );
    (0, _.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: m,
        primaryInvoiceError: C,
    } = (0, p.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((w(o, { noticeCopy: r.useMemo(() => y.intl.string(y.t.spIYou), []) }), null != C)) return null;
    if (null == d || null == m) return (0, i.jsx)(k, {});
    let h = (0, j.J$)(n.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(R._J, { invoice: d, isPrepaidPaymentSource: h }),
            (0, i.jsx)(L, {
                containerNode: s.current,
                children: (0, i.jsx)(R.Hc, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
            }),
        ],
    });
}
n(321073);
var B = n(38785),
    H = n(577381),
    W = n(845012),
    Y = n(134638);
function V(e) {
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
            newPlan: E,
            planId: S,
            priceOptions: I,
            premiumPlanOptions: g,
            subscriptionDetailsContent: A,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: v,
            legalContent: x,
            isInPastDueCheckout: _,
        } = e,
        T = r.useMemo(() => {
            let e = [];
            return (
                _ &&
                    e.push({
                        type: "warning",
                        message: y.intl.string(O.default["yrk+N6"]),
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
                                    return y.intl.string(y.t.Tdb5qb);
                                case "ADD_NEW_PAYMENT_METHOD":
                                    return y.intl.string(y.t["6d44F5"]);
                            }
                        })(o),
                        key: "payment-restriction-banner-notice",
                    }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [_, s, o, u, l, a]),
        { priceOptions: N, planPricesLoading: b } = (0, j.Pr)(I, m, u),
        M = (0, H.i)({ planSkuId: E.skuId, invoice: m }),
        L = r.useMemo(() => (C && null != M ? M : null), [C, M]),
        k = r.useMemo(() => (null != L ? L : null), [L]),
        w = (0, j.J$)(I.paymentSourceId),
        U = null,
        D = null,
        G = _ ? null : d;
    return (
        C
            ? (D = (0, i.jsx)(W.X, {
                  disabled: n,
                  headingSubText: G,
                  planOptions: g,
                  selectedPlanId: S,
                  showPlanStatusSubText: !0,
                  priceOptions: N,
                  planPricesLoading: b,
              }))
            : null != m &&
              (U = (0, i.jsx)(Y._, {
                  type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                  invoicePreview: m,
                  subscriptionPlan: E,
                  isPrepaidPaymentSource: w,
                  isPremiumGroupPurchase: s,
                  bottomSubText: G,
              })),
        (0, i.jsx)(B.T_, {
            isStepLoading: t,
            shouldShowGlobalNotices: !0,
            showUpperNoticesAboveGlobalNotices: _,
            upperInlineNoticeProps: T,
            paymentMethodContent: v,
            subscriptionDetailsContent: A,
            purchaseItemContent: U,
            planSelectContent: D,
            invoiceSummaryContent: p,
            legalContent: x,
            invoiceTotalDueLabel: P ? y.intl.string(O.default.R0cZsM) : y.intl.string(O.default["11g67A"]),
            invoiceTotalDueValue: null != m ? (0, R.U5)(m) : void 0,
            promotionalNoticeContent: k,
        })
    );
}
var K = n(510552);
function Z(e) {
    let { handlePaymentSourceAdd: t, planGroup: n, hasOpenInvoice: l, isInPastDueCheckout: a } = e,
        g = (0, d.mx)(),
        { paymentSources: A, hasPaymentSources: P } = (0, u.j)(),
        { selectedPlanFromFluxStore: v, selectedPlanId: x } = (0, m.D)(),
        {
            purchaseState: _,
            paymentSourceId: T,
            priceOptions: N,
            renewalInvoicePreview: b,
            checkoutInvoicePreview: j,
            isCheckoutInvoicePreviewLoading: R,
            checkoutInvoiceError: M,
            activeSubscription: L,
            premiumPlanOptions: k,
            isInOneStepSubscriptionCheckout: w,
            shouldDisallowPlanSelection: B,
        } = (0, p.t4)((e) => ({
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            isCheckoutInvoicePreviewLoading: e.get("isCheckoutInvoicePreviewLoading"),
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { isPremiumPurchase: H, isPremiumGroupPurchase: W } = (0, p.t4)((e) => e.get("selectedPlanAttributes")),
        Y = (0, E.g)(A, T),
        { showFractionalPremiumBanner: Z, fractionalPremiumInfo: q } = (0, h._V)({
            premiumSubscription: L,
            selectedPlanId: x,
            planGroup: n,
            isGift: !1,
        }),
        z = _ === C.h.PURCHASING || _ === C.h.COMPLETED,
        Q = L?.isPausedAllowsResumeButNotUpdates,
        $ = r.useRef(null),
        [J, X] = r.useState(null),
        [ee, et] = r.useState(void 0),
        en = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: $, setUnifiedPlainNoticeText: X, setOverrideRenewalDate: et }),
            [],
        ),
        { content: el, isInvoiceBilledImmediately: ei } =
            null != L
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
                              }
                            : (0, S.Ge)(o, a, c)
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
                                }
                              : {
                                    isInvoiceBilledImmediately: !1,
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
                      { hasOpenInvoice: l, showResumeSubscriptionView: Q, planId: x },
                      {
                          disabled: z,
                          premiumSubscription: L,
                          newPlan: v,
                          planGroup: n,
                          fractionalPremiumInfo: q,
                          priceOptions: N,
                      },
                      en,
                  )
                : { content: null, isInvoiceBilledImmediately: !0 },
        er = L?.eligiblePaymentGateways,
        ea = null != er && er.length > 0 && (null == T || null === Y) && P ? I.SELECT_PAYMENT_METHOD : void 0,
        es = null != L ? L.paymentSourceId : null,
        eo = r.useMemo(
            () => ({
                paymentGatewayRestrictions: L?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: a
                    ? (e) => e.map((e) => (e.id === es ? { ...e, tooltipText: y.intl.string(O.default["hjsn+s"]) } : e))
                    : void 0,
                className: s()({ [K.E]: H }),
            }),
            [L?.eligiblePaymentGateways, H, a, es],
        ),
        eu = null != j || null != M,
        ec = r.useMemo(
            () =>
                eu
                    ? (0, i.jsx)(o.N, {
                          label: y.intl.string(y.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: z,
                          additionalPaymentSourceDropdownProps: eo,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: N.paymentSourceId,
                      })
                    : null,
            [eu, N.paymentSourceId, eo, t, z],
        ),
        ed = null != L && (0, S.Ge)(L, x, n),
        em = !Q && w && !W && !a && !B,
        ep = ed && null != g,
        eC = r.useMemo(
            () =>
                null == j || null == b || ep
                    ? null
                    : (0, i.jsx)(f.P, {
                          fractionalPremiumInfo: q,
                          overrideRenewalDate: ee,
                          activeSubscription: L,
                          isTrial: !1,
                          plan: v,
                          isGift: !1,
                          paymentSourceType: Y,
                          isInvoiceBilledImmediately: ei,
                          discriminatedInvoicePreview: {
                              type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                              invoicePreview: j,
                              renewalInvoicePreview: b,
                          },
                      }),
            [q, j, b, ep, ee, L, v, Y, ei],
        );
    return (0, i.jsx)(V, {
        loading: R,
        disabled: z,
        isInPastDueCheckout: a,
        showFractionalPremiumBanner: Z,
        fractionalPremiumInfo: q,
        isPremiumGroupPurchase: W,
        paymentRestrictionBannerType: ea,
        invoiceError: g,
        unifiedPlainNoticeText: J,
        invoicePreview: j,
        invoicePreviewComponent: el,
        shouldShowPlanSelectAndPromoBanner: em,
        newPlan: v,
        planId: x,
        priceOptions: N,
        premiumPlanOptions: k,
        subscriptionDetailsContent: (0, i.jsx)("div", { ref: $ }),
        isInvoiceBilledImmediately: ei,
        paymentMethodContent: ec,
        legalContent: eC,
    });
}
