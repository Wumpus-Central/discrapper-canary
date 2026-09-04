n.d(t, { A: () => Z });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(377058),
    u = n(202475),
    c = n(400612),
    d = n(558620),
    m = n(721836),
    p = n(566980),
    C = n(222707),
    h = n(340034),
    f = n(216641),
    E = n(615396),
    S = n(375708);
n(562889);
var y =
        (((l = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (l.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        l),
    I = n(333007),
    A = n(289873),
    g = n(793574),
    P = n(688810),
    v = n(482419),
    _ = n(666646),
    x = n(473617),
    T = n(270537),
    N = n(800471),
    b = n(888751),
    j = n(158045),
    R = n(692440),
    M = n(202541),
    O = n(583741);
function L(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : I.createPortal(t, n);
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
    (0, x.E)(u);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: d } = (0, m.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, _.T)(c, d);
    let p = (0, j.J$)(n.paymentSourceId);
    if (null != c) {
        let e = t.items.length > 1;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R._J, { invoice: c, isPrepaidPaymentSource: p }),
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
        { analyticsLocations: C } = (0, P.Ay)(),
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
                        analyticsLocation: g.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
            (0, x.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
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
    let A = (0, N.U)(f, n);
    if (null == f || null == E || A) return (0, i.jsx)(k, {});
    let _ = (0, j.J$)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.k, {
                discriminatedInvoicePreview: {
                    type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: E,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: _,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(L, {
                containerNode: u.current,
                children: (0, i.jsx)(R.Hc, {
                    currentInvoice: f,
                    renewalInvoice: E,
                    overrideRenewalDate: I,
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
            unifiedSubscriptionDetailsNode: d,
        } = e,
        { analyticsLocations: p } = (0, P.Ay)(),
        { renewalInvoicePreview: C, renewalInvoiceError: h } = (0, m.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        f = r.useMemo(
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
                        analyticsLocations: p,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, l, s.paymentSourceId, s.currency, o, p],
        );
    (0, x.E)(f), (0, _.F)(C, h);
    let { renewalDate: E, planSwitchNoticeCopy: y } = r.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            a.fractionalState === M.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: S.intl.format(S.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, a.fractionalState, a.endsAt]);
    if ((w(u, { noticeCopy: y }), null != h)) return null;
    if (null == C) return (0, i.jsx)(k, {});
    let I = (0, j.J$)(s.paymentSourceId),
        { lineItems: A } = (0, b.Ig)(C, {
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: I,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.Vm, { label: S.intl.string(O.default.eoXh7B), lineItems: A, currency: C.currency }),
            (0, i.jsx)(L, {
                containerNode: d.current,
                children: (0, i.jsx)(R.Hc, {
                    renewalInvoice: C,
                    isUpdate: !0,
                    fractionalPremiumInfo: a,
                    overrideRenewalDate: E,
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
        { analyticsLocations: u } = (0, P.Ay)(),
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
                        analyticsLocation: g.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: g.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, l, u],
        );
    (0, x.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: p,
        primaryInvoiceError: C,
    } = (0, m.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((w(o, { noticeCopy: r.useMemo(() => S.intl.string(S.t.spIYou), []) }), null != C)) return null;
    if (null == d || null == p) return (0, i.jsx)(k, {});
    let h = (0, j.J$)(n.paymentSourceId);
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
            shouldShowPlanSelectAndPromoBanner: f,
            newPlan: E,
            planId: y,
            priceOptions: I,
            premiumPlanOptions: A,
            subscriptionDetailsContent: g,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: v,
            legalContent: _,
            isInPastDueCheckout: x,
        } = e,
        T = r.useMemo(() => {
            let e = [];
            return (
                x &&
                    e.push({
                        type: "warning",
                        message: S.intl.string(O.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                l &&
                    e.push({
                        directContent: (0, i.jsx)(h.l, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, C.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({
                        type: "warning",
                        message: (function (e) {
                            switch (e) {
                                case "SELECT_PAYMENT_METHOD":
                                    return S.intl.string(S.t.Tdb5qb);
                                case "ADD_NEW_PAYMENT_METHOD":
                                    return S.intl.string(S.t["6d44F5"]);
                            }
                        })(o),
                        key: "payment-restriction-banner-notice",
                    }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [x, s, o, u, l, a]),
        { priceOptions: N, planPricesLoading: b } = (0, j.Pr)(I, m, u),
        M = (0, H.i)({ planSkuId: E.skuId, invoice: m }),
        L = r.useMemo(() => (f && null != M ? M : null), [f, M]),
        k = r.useMemo(() => (null != L ? L : null), [L]),
        w = (0, j.J$)(I.paymentSourceId),
        U = null,
        D = null,
        G = x ? null : d;
    return (
        f
            ? (D = (0, i.jsx)(W.X, {
                  disabled: n,
                  headingSubText: G,
                  planOptions: A,
                  selectedPlanId: y,
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
            showUpperNoticesAboveGlobalNotices: x,
            upperInlineNoticeProps: T,
            paymentMethodContent: v,
            subscriptionDetailsContent: g,
            purchaseItemContent: U,
            planSelectContent: D,
            invoiceSummaryContent: p,
            legalContent: _,
            invoiceTotalDueLabel: P ? S.intl.string(O.default.R0cZsM) : S.intl.string(O.default["11g67A"]),
            invoiceTotalDueValue: null != m ? (0, R.U5)(m) : void 0,
            promotionalNoticeContent: k,
        })
    );
}
var K = n(510552);
function Z(e) {
    let { handlePaymentSourceAdd: t, planGroup: n, hasOpenInvoice: l, isInPastDueCheckout: a } = e,
        { invoiceError: I } = (0, m.t4)((e) => ({ invoiceError: e.get("primaryInvoicesError") })),
        { paymentSources: A, hasPaymentSources: g } = (0, u.j)(),
        { selectedPlanFromFluxStore: P, selectedPlanId: v } = (0, d.D)(),
        {
            purchaseState: _,
            paymentSourceId: x,
            priceOptions: T,
            renewalInvoicePreview: N,
            checkoutInvoicePreview: b,
            isCheckoutInvoicePreviewLoading: j,
            checkoutInvoiceError: R,
            activeSubscription: M,
            premiumPlanOptions: L,
            isInOneStepSubscriptionCheckout: k,
            shouldDisallowPlanSelection: w,
        } = (0, m.t4)((e) => ({
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
        { isPremiumPurchase: B, isPremiumGroupPurchase: H } = (0, m.t4)((e) => e.get("selectedPlanAttributes")),
        W = (0, f.g)(A, x),
        { showFractionalPremiumBanner: Y, fractionalPremiumInfo: Z } = (0, C._V)({
            premiumSubscription: M,
            selectedPlanId: v,
            planGroup: n,
            isGift: !1,
        }),
        q = _ === p.h.PURCHASING || _ === p.h.COMPLETED,
        z = M?.isPausedAllowsResumeButNotUpdates,
        Q = r.useRef(null),
        [$, J] = r.useState(null),
        [X, ee] = r.useState(void 0),
        et = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: Q, setUnifiedPlainNoticeText: J, setOverrideRenewalDate: ee }),
            [],
        ),
        { content: en, isInvoiceBilledImmediately: el } =
            null != M
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
                            : (0, E.Ge)(o, a, c)
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
                      { hasOpenInvoice: l, showResumeSubscriptionView: z, planId: v },
                      {
                          disabled: q,
                          premiumSubscription: M,
                          newPlan: P,
                          planGroup: n,
                          fractionalPremiumInfo: Z,
                          priceOptions: T,
                      },
                      et,
                  )
                : { content: null, isInvoiceBilledImmediately: !0 },
        ei = M?.eligiblePaymentGateways,
        er = null != ei && ei.length > 0 && (null == x || null === W) && g ? y.SELECT_PAYMENT_METHOD : void 0,
        ea = null != M ? M.paymentSourceId : null,
        es = r.useMemo(
            () => ({
                paymentGatewayRestrictions: M?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: a
                    ? (e) => e.map((e) => (e.id === ea ? { ...e, tooltipText: S.intl.string(O.default["hjsn+s"]) } : e))
                    : void 0,
                className: s()({ [K.E]: B }),
            }),
            [M?.eligiblePaymentGateways, B, a, ea],
        ),
        eo = null != b || null != R,
        eu = r.useMemo(
            () =>
                eo
                    ? (0, i.jsx)(o.N, {
                          label: S.intl.string(S.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: q,
                          additionalPaymentSourceDropdownProps: es,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: T.paymentSourceId,
                      })
                    : null,
            [eo, T.paymentSourceId, es, t, q],
        ),
        ec = null != M && (0, E.Ge)(M, v, n),
        ed = !z && k && !H && !a && !w,
        em = ec && null != I,
        ep = r.useMemo(
            () =>
                null == b || null == N || em
                    ? null
                    : (0, i.jsx)(h.P, {
                          fractionalPremiumInfo: Z,
                          overrideRenewalDate: X,
                          activeSubscription: M,
                          isTrial: !1,
                          plan: P,
                          isGift: !1,
                          paymentSourceType: W,
                          isInvoiceBilledImmediately: el,
                          discriminatedInvoicePreview: {
                              type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                              invoicePreview: b,
                              renewalInvoicePreview: N,
                          },
                      }),
            [Z, b, N, em, X, M, P, W, el],
        );
    return (0, i.jsx)(V, {
        loading: j,
        disabled: q,
        isInPastDueCheckout: a,
        showFractionalPremiumBanner: Y,
        fractionalPremiumInfo: Z,
        isPremiumGroupPurchase: H,
        paymentRestrictionBannerType: er,
        invoiceError: I,
        unifiedPlainNoticeText: $,
        invoicePreview: b,
        invoicePreviewComponent: en,
        shouldShowPlanSelectAndPromoBanner: ed,
        newPlan: P,
        planId: v,
        priceOptions: T,
        premiumPlanOptions: L,
        subscriptionDetailsContent: (0, i.jsx)("div", { ref: Q }),
        isInvoiceBilledImmediately: el,
        paymentMethodContent: eu,
        legalContent: ep,
    });
}
