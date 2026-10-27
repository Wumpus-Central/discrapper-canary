n.d(t, { A: () => K });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(377058),
    u = n(202475),
    c = n(400612),
    d = n(558620),
    m = n(123816),
    p = n(566980),
    h = n(105292);
n(625079);
var C =
        (((l = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (l.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        l),
    f = n(222707),
    E = n(340034),
    S = n(216641),
    g = n(615396),
    I = n(333007),
    A = n(289873),
    y = n(793574),
    x = n(688810),
    P = n(482419),
    v = n(666646),
    _ = n(473617),
    T = n(270537),
    N = n(888751),
    b = n(927578),
    j = n(264725),
    R = n(202541),
    O = n(583741);
function M(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : I.createPortal(t, n);
}
function L() {
    return (0, i.jsx)(A.y, { type: A.y.Type.PULSING_ELLIPSIS });
}
function k(e, t) {
    let { noticeCopy: n } = t;
    r.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function w(e) {
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
    let { checkoutInvoicePreview: c, checkoutInvoiceError: d } = (0, m.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, v.T)(c, d);
    let p = (0, b.J$)(n.paymentSourceId);
    if (null != c) {
        let e = t.items.length > 1;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j._J, { invoice: c, isPrepaidPaymentSource: p }),
                (0, i.jsx)(M, {
                    containerNode: s.current,
                    children: (0, i.jsx)(j.Hc, {
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
    return (0, i.jsx)(L, {});
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
        { analyticsLocations: h } = (0, x.Ay)(),
        C = (0, b.Pg)(t, n.id, 1, new Set(l)),
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
                        analyticsLocation: y.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
                renewalInvoicePreview: p,
                renewalInvoiceError: h,
            } = (0, m.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? h, [d, h]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: p,
                renewalInvoiceError: h,
            };
        })({ premiumSubscription: t, newItems: C, priceOptions: a, preventFetch: o, analyticsLocations: h }),
        g = (0, m.t4)((e) => e.getIsPlanSwitchLoading()),
        { planSwitchNoticeCopy: I, overrideRenewalDate: A } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, b._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != E)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, j.DK)({
                          proratedInvoice: f,
                          renewalInvoice: E,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, E, s]);
    if ((k(d, { noticeCopy: I }), null != S)) return null;
    if (null == f || null == E || g) return (0, i.jsx)(L, {});
    let v = (0, b.J$)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.k, {
                discriminatedInvoicePreview: {
                    type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: E,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: v,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(M, {
                containerNode: u.current,
                children: (0, i.jsx)(j.Hc, {
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
function U(e) {
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
        { analyticsLocations: p } = (0, x.Ay)(),
        { renewalInvoicePreview: C, renewalInvoiceError: f } = (0, m.t4)((e) => ({
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
                        items: (0, b.Pg)(t, n.id, 1, new Set(l)),
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
    ((0, _.E)(E), (0, v.F)(C, f));
    let { renewalDate: S, planSwitchNoticeCopy: g } = r.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            a.fractionalState === R.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: h.intl.format(h.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, a.fractionalState, a.endsAt]);
    if ((k(u, { noticeCopy: g }), null != f)) return null;
    if (null == C) return (0, i.jsx)(L, {});
    let I = (0, b.J$)(s.paymentSourceId),
        { lineItems: A } = (0, N.Ig)(C, {
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: I,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.Vm, { label: h.intl.string(O.default.eoXh7B), lineItems: A, currency: C.currency }),
            (0, i.jsx)(M, {
                containerNode: d.current,
                children: (0, i.jsx)(j.Hc, {
                    renewalInvoice: C,
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
function G(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: l,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setUnifiedPlainNoticeText: o,
        } = e,
        { analyticsLocations: u } = (0, x.Ay)(),
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
                        analyticsLocation: y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, l, u],
        );
    (0, _.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: p,
        primaryInvoiceError: C,
    } = (0, m.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((k(o, { noticeCopy: r.useMemo(() => h.intl.string(h.t.spIYou), []) }), null != C)) return null;
    if (null == d || null == p) return (0, i.jsx)(L, {});
    let f = (0, b.J$)(n.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j._J, { invoice: d, isPrepaidPaymentSource: f }),
            (0, i.jsx)(M, {
                containerNode: s.current,
                children: (0, i.jsx)(j.Hc, { renewalInvoice: p, isUpdate: !0, fractionalPremiumInfo: a }),
            }),
        ],
    });
}
n(321073);
var F = n(38785),
    B = n(577381),
    H = n(845012),
    W = n(134638);
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
            newPlan: S,
            planId: g,
            priceOptions: I,
            premiumPlanOptions: A,
            subscriptionDetailsContent: y,
            isInvoiceBilledImmediately: x,
            paymentMethodContent: P,
            legalContent: v,
            isInPastDueCheckout: _,
        } = e,
        T = r.useMemo(() => {
            let e = [];
            return (
                _ &&
                    e.push({
                        type: "warning",
                        message: h.intl.string(O.default["yrk+N6"]),
                        role: "none",
                        key: "past-due-restore-notice",
                    }),
                l &&
                    e.push({
                        directContent: (0, i.jsx)(E.l, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, f.Nn)(), role: "none", key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({
                        type: "warning",
                        message: (function (e) {
                            switch (e) {
                                case "SELECT_PAYMENT_METHOD":
                                    return h.intl.string(h.t.Tdb5qb);
                                case "ADD_NEW_PAYMENT_METHOD":
                                    return h.intl.string(h.t["6d44F5"]);
                            }
                        })(o),
                        role: "status",
                        key: "payment-restriction-banner-notice",
                    }),
                null != u &&
                    e.push({ type: "critical", message: u.message, role: "alert", key: "invoice-error-notice" }),
                e
            );
        }, [_, s, o, u, l, a]),
        { priceOptions: N, planPricesLoading: R } = (0, b.Pr)(I, m, u),
        M = (0, B.i)({ planSkuId: S.skuId, invoice: m }),
        L = r.useMemo(() => (C && null != M ? M : null), [C, M]),
        k = r.useMemo(() => (null != L ? L : null), [L]),
        w = (0, b.J$)(I.paymentSourceId),
        D = null,
        U = null,
        G = _ ? null : d;
    return (
        C
            ? (U = (0, i.jsx)(H.X, {
                  disabled: n,
                  headingSubText: G,
                  planOptions: A,
                  selectedPlanId: g,
                  showPlanStatusSubText: !0,
                  priceOptions: N,
                  planPricesLoading: R,
              }))
            : null != m &&
              (D = (0, i.jsx)(W._, {
                  type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                  invoicePreview: m,
                  subscriptionPlan: S,
                  isPrepaidPaymentSource: w,
                  isPremiumGroupPurchase: s,
                  bottomSubText: G,
              })),
        (0, i.jsx)(F.T_, {
            isStepLoading: t,
            shouldShowGlobalNotices: !0,
            showUpperNoticesAboveGlobalNotices: _,
            upperInlineNoticeProps: T,
            paymentMethodContent: P,
            subscriptionDetailsContent: y,
            purchaseItemContent: D,
            planSelectContent: U,
            invoiceSummaryContent: p,
            legalContent: v,
            invoiceTotalDueLabel: x ? h.intl.string(O.default.R0cZsM) : h.intl.string(O.default["11g67A"]),
            invoiceTotalDueValue: null != m ? (0, j.U5)(m) : void 0,
            promotionalNoticeContent: k,
        })
    );
}
var Y = n(942537);
function K(e) {
    let { handlePaymentSourceAdd: t, planGroup: n, hasOpenInvoice: l, isInPastDueCheckout: a } = e,
        { invoiceError: I } = (0, m.t4)((e) => ({ invoiceError: e.get("primaryInvoicesError") })),
        { paymentSources: A, hasPaymentSources: y } = (0, u.j)(),
        { selectedPlanFromFluxStore: x, selectedPlanId: P } = (0, d.D)(),
        {
            purchaseState: v,
            paymentSourceId: _,
            priceOptions: T,
            renewalInvoicePreview: N,
            checkoutInvoicePreview: b,
            isCheckoutInvoicePreviewLoading: j,
            checkoutInvoiceError: R,
            activeSubscription: M,
            premiumPlanOptions: L,
            isInOneStepSubscriptionCheckout: k,
            shouldDisallowPlanSelection: F,
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
        W = (0, S.g)(A, _),
        { showFractionalPremiumBanner: K, fractionalPremiumInfo: Z } = (0, f._V)({
            premiumSubscription: M,
            selectedPlanId: P,
            planGroup: n,
            isGift: !1,
        }),
        q = v === p.h.PURCHASING || v === p.h.COMPLETED,
        z = M?.isPausedAllowsResumeButNotUpdates,
        $ = r.useRef(null),
        [Q, J] = r.useState(null),
        [X, ee] = r.useState(void 0),
        et = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: $, setUnifiedPlainNoticeText: J, setOverrideRenewalDate: ee }),
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
                                content: (0, i.jsx)(w, {
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
                                  content: (0, i.jsx)(G, {
                                      premiumSubscription: o,
                                      priceOptions: m,
                                      preventFetch: s,
                                      fractionalPremiumInfo: d,
                                      ...n,
                                  }),
                                  isInvoiceBilledImmediately: !0,
                              }
                            : (0, g.Ge)(o, a, c)
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
                                    content: (0, i.jsx)(U, {
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
                      { hasOpenInvoice: l, showResumeSubscriptionView: z, planId: P },
                      {
                          disabled: q,
                          premiumSubscription: M,
                          newPlan: x,
                          planGroup: n,
                          fractionalPremiumInfo: Z,
                          priceOptions: T,
                      },
                      et,
                  )
                : { content: null, isInvoiceBilledImmediately: !0 },
        ei = M?.eligiblePaymentGateways,
        er = null != ei && ei.length > 0 && (null == _ || null === W) && y ? C.SELECT_PAYMENT_METHOD : void 0,
        ea = null != M ? M.paymentSourceId : null,
        es = r.useMemo(
            () => ({
                paymentGatewayRestrictions: M?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: a
                    ? (e) => e.map((e) => (e.id === ea ? { ...e, tooltipText: h.intl.string(O.default["hjsn+s"]) } : e))
                    : void 0,
                className: s()({ [Y.E]: B }),
            }),
            [M?.eligiblePaymentGateways, B, a, ea],
        ),
        eo = null != b || null != R,
        eu = r.useMemo(
            () =>
                eo
                    ? (0, i.jsx)(o.N, {
                          label: h.intl.string(h.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: q,
                          additionalPaymentSourceDropdownProps: es,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: T.paymentSourceId,
                      })
                    : null,
            [eo, T.paymentSourceId, es, t, q],
        ),
        ec = null != M && (0, g.Ge)(M, P, n),
        ed = !z && k && !H && !a && !F,
        em = ec && null != I,
        ep = r.useMemo(
            () =>
                null == b || null == N || em
                    ? null
                    : (0, i.jsx)(E.P, {
                          fractionalPremiumInfo: Z,
                          overrideRenewalDate: X,
                          activeSubscription: M,
                          isTrial: !1,
                          plan: x,
                          isGift: !1,
                          paymentSourceType: W,
                          isInvoiceBilledImmediately: el,
                          discriminatedInvoicePreview: {
                              type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                              invoicePreview: b,
                              renewalInvoicePreview: N,
                          },
                      }),
            [Z, b, N, em, X, M, x, W, el],
        );
    return (0, i.jsx)(V, {
        loading: j,
        disabled: q,
        isInPastDueCheckout: a,
        showFractionalPremiumBanner: K,
        fractionalPremiumInfo: Z,
        isPremiumGroupPurchase: H,
        paymentRestrictionBannerType: er,
        invoiceError: I,
        unifiedPlainNoticeText: Q,
        invoicePreview: b,
        invoicePreviewComponent: en,
        shouldShowPlanSelectAndPromoBanner: ed,
        newPlan: x,
        planId: P,
        priceOptions: T,
        premiumPlanOptions: L,
        subscriptionDetailsContent: (0, i.jsx)("div", { ref: $ }),
        isInvoiceBilledImmediately: el,
        paymentMethodContent: eu,
        legalContent: ep,
    });
}
