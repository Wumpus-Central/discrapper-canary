n.d(t, { A: () => q });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(377058),
    u = n(202475),
    c = n(400612),
    d = n(558620),
    p = n(263532),
    m = n(566980),
    h = n(222707),
    C = n(340034),
    f = n(216641),
    S = n(615396),
    E = n(375708);
n(562889);
var y =
        (((l = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (l.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        l),
    A = n(333007),
    I = n(289873),
    g = n(793574),
    P = n(688810),
    v = n(482419),
    x = n(666646),
    _ = n(473617),
    T = n(270537),
    N = n(800471),
    b = n(888751),
    j = n(158045),
    R = n(692440),
    O = n(202541),
    M = n(649975);
function L(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : A.createPortal(t, n);
}
function k() {
    return (0, i.jsx)(I.y, { type: I.y.Type.PULSING_ELLIPSIS });
}
function w(e, t) {
    let { noticeCopy: n } = t;
    r.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function D(e) {
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
    let { checkoutInvoicePreview: c, checkoutInvoiceError: d } = (0, p.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, x.T)(c, d);
    let m = (0, j.J$)(n.paymentSourceId);
    if (null != c) {
        let e = t.items.length > 1;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R._J, { invoice: c, isPrepaidPaymentSource: m }),
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
function U(e) {
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
        { analyticsLocations: h } = (0, P.Ay)(),
        C = (0, j.Pg)(t, n.id, 1, new Set(l)),
        {
            proratedInvoicePreview: f,
            renewalInvoicePreview: S,
            primaryInvoiceError: E,
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
            (0, _.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: d,
                renewalInvoicePreview: m,
                renewalInvoiceError: h,
            } = (0, p.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? h, [d, h]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: m,
                renewalInvoiceError: h,
            };
        })({ premiumSubscription: t, newItems: C, priceOptions: a, preventFetch: o, analyticsLocations: h }),
        { planSwitchNoticeCopy: y, overrideRenewalDate: A } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, j._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != S)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, R.DK)({
                          proratedInvoice: f,
                          renewalInvoice: S,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, S, s]);
    if ((w(d, { noticeCopy: y }), null != E)) return null;
    let I = (0, N.U)(f, n);
    if (null == f || null == S || I) return (0, i.jsx)(k, {});
    let x = (0, j.J$)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.k, {
                discriminatedInvoicePreview: {
                    type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: S,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: x,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(L, {
                containerNode: u.current,
                children: (0, i.jsx)(R.Hc, {
                    currentInvoice: f,
                    renewalInvoice: S,
                    overrideRenewalDate: A,
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
            unifiedSubscriptionDetailsNode: d,
        } = e,
        { analyticsLocations: m } = (0, P.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: C } = (0, p.t4)((e) => ({
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
                        analyticsLocations: m,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, l, s.paymentSourceId, s.currency, o, m],
        );
    ((0, _.E)(f), (0, x.F)(h, C));
    let { renewalDate: S, planSwitchNoticeCopy: y } = r.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            a.fractionalState === O.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: E.intl.format(E.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, a.fractionalState, a.endsAt]);
    if ((w(u, { noticeCopy: y }), null != C)) return null;
    if (null == h) return (0, i.jsx)(k, {});
    let A = (0, j.J$)(s.paymentSourceId),
        { lineItems: I } = (0, b.Ig)(h, {
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: A,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.Vm, { label: E.intl.string(M.default.eoXh7B), lineItems: I, currency: h.currency }),
            (0, i.jsx)(L, {
                containerNode: d.current,
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
    (0, _.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: m,
        primaryInvoiceError: h,
    } = (0, p.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((w(o, { noticeCopy: r.useMemo(() => E.intl.string(E.t.spIYou), []) }), null != h)) return null;
    if (null == d || null == m) return (0, i.jsx)(k, {});
    let C = (0, j.J$)(n.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(R._J, { invoice: d, isPrepaidPaymentSource: C }),
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
            invoicePreview: p,
            invoicePreviewComponent: m,
            shouldShowPlanSelectAndPromoBanner: f,
            newPlan: S,
            planId: y,
            priceOptions: A,
            premiumPlanOptions: I,
            subscriptionDetailsContent: g,
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
                        message: E.intl.string(M.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                l &&
                    e.push({
                        directContent: (0, i.jsx)(C.l, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, h.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({
                        type: "warning",
                        message: (function (e) {
                            switch (e) {
                                case "SELECT_PAYMENT_METHOD":
                                    return E.intl.string(E.t.Tdb5qb);
                                case "ADD_NEW_PAYMENT_METHOD":
                                    return E.intl.string(E.t["6d44F5"]);
                            }
                        })(o),
                        key: "payment-restriction-banner-notice",
                    }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [_, s, o, u, l, a]),
        { priceOptions: N, planPricesLoading: b } = (0, j.Pr)(A, p, u),
        O = (0, H.i)({ planSkuId: S.skuId, invoice: p }),
        L = r.useMemo(() => (f && null != O ? O : null), [f, O]),
        k = r.useMemo(() => (null != L ? L : null), [L]),
        w = (0, j.J$)(A.paymentSourceId),
        D = null,
        U = null,
        G = _ ? null : d;
    return (
        f
            ? (U = (0, i.jsx)(W.X, {
                  disabled: n,
                  headingSubText: G,
                  planOptions: I,
                  selectedPlanId: y,
                  showPlanStatusSubText: !0,
                  priceOptions: N,
                  planPricesLoading: b,
              }))
            : null != p &&
              (D = (0, i.jsx)(Y._, {
                  type: c.u$.SUBSCRIPTION_SWITCH_PLAN,
                  invoicePreview: p,
                  subscriptionPlan: S,
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
            subscriptionDetailsContent: g,
            purchaseItemContent: D,
            planSelectContent: U,
            invoiceSummaryContent: m,
            legalContent: x,
            invoiceTotalDueLabel: P ? E.intl.string(M.default.R0cZsM) : E.intl.string(M.default["11g67A"]),
            invoiceTotalDueValue: null != p ? (0, R.U5)(p) : void 0,
            promotionalNoticeContent: k,
        })
    );
}
var K = n(510552);
function q(e) {
    let { handlePaymentSourceAdd: t, planGroup: n, hasOpenInvoice: l, isInPastDueCheckout: a } = e,
        { invoiceError: A } = (0, p.t4)((e) => ({ invoiceError: e.get("primaryInvoicesError") })),
        { paymentSources: I, hasPaymentSources: g } = (0, u.j)(),
        { selectedPlanFromFluxStore: P, selectedPlanId: v } = (0, d.D)(),
        {
            purchaseState: x,
            paymentSourceId: _,
            priceOptions: T,
            renewalInvoicePreview: N,
            checkoutInvoicePreview: b,
            isCheckoutInvoicePreviewLoading: j,
            checkoutInvoiceError: R,
            activeSubscription: O,
            premiumPlanOptions: L,
            isInOneStepSubscriptionCheckout: k,
            shouldDisallowPlanSelection: w,
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
        { isPremiumPurchase: B, isPremiumGroupPurchase: H } = (0, p.t4)((e) => e.get("selectedPlanAttributes")),
        W = (0, f.g)(I, _),
        { showFractionalPremiumBanner: Y, fractionalPremiumInfo: q } = (0, h._V)({
            premiumSubscription: O,
            selectedPlanId: v,
            planGroup: n,
            isGift: !1,
        }),
        Z = x === m.h.PURCHASING || x === m.h.COMPLETED,
        z = O?.isPausedAllowsResumeButNotUpdates,
        $ = r.useRef(null),
        [Q, J] = r.useState(null),
        [X, ee] = r.useState(void 0),
        et = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: $, setUnifiedPlainNoticeText: J, setOverrideRenewalDate: ee }),
            [],
        ),
        { content: en, isInvoiceBilledImmediately: el } =
            null != O
                ? (function (e, t, n) {
                      let { hasOpenInvoice: l, showResumeSubscriptionView: r, planId: a } = e,
                          {
                              disabled: s,
                              premiumSubscription: o,
                              newPlan: u,
                              planGroup: c,
                              fractionalPremiumInfo: d,
                              priceOptions: p,
                          } = t;
                      return l
                          ? {
                                content: (0, i.jsx)(D, {
                                    premiumSubscription: o,
                                    priceOptions: p,
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
                                      priceOptions: p,
                                      preventFetch: s,
                                      fractionalPremiumInfo: d,
                                      ...n,
                                  }),
                                  isInvoiceBilledImmediately: !0,
                              }
                            : (0, S.Ge)(o, a, c)
                              ? {
                                    content: (0, i.jsx)(U, {
                                        premiumSubscription: o,
                                        newPlan: u,
                                        planGroup: c,
                                        priceOptions: p,
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
                                        priceOptions: p,
                                        preventFetch: s,
                                        ...n,
                                    }),
                                };
                  })(
                      { hasOpenInvoice: l, showResumeSubscriptionView: z, planId: v },
                      {
                          disabled: Z,
                          premiumSubscription: O,
                          newPlan: P,
                          planGroup: n,
                          fractionalPremiumInfo: q,
                          priceOptions: T,
                      },
                      et,
                  )
                : { content: null, isInvoiceBilledImmediately: !0 },
        ei = O?.eligiblePaymentGateways,
        er = null != ei && ei.length > 0 && (null == _ || null === W) && g ? y.SELECT_PAYMENT_METHOD : void 0,
        ea = null != O ? O.paymentSourceId : null,
        es = r.useMemo(
            () => ({
                paymentGatewayRestrictions: O?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: a
                    ? (e) => e.map((e) => (e.id === ea ? { ...e, tooltipText: E.intl.string(M.default["hjsn+s"]) } : e))
                    : void 0,
                className: s()({ [K.E]: B }),
            }),
            [O?.eligiblePaymentGateways, B, a, ea],
        ),
        eo = null != b || null != R,
        eu = r.useMemo(
            () =>
                eo
                    ? (0, i.jsx)(o.N, {
                          label: E.intl.string(E.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: Z,
                          additionalPaymentSourceDropdownProps: es,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: T.paymentSourceId,
                      })
                    : null,
            [eo, T.paymentSourceId, es, t, Z],
        ),
        ec = null != O && (0, S.Ge)(O, v, n),
        ed = !z && k && !H && !a && !w,
        ep = ec && null != A,
        em = r.useMemo(
            () =>
                null == b || null == N || ep
                    ? null
                    : (0, i.jsx)(C.P, {
                          fractionalPremiumInfo: q,
                          overrideRenewalDate: X,
                          activeSubscription: O,
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
            [q, b, N, ep, X, O, P, W, el],
        );
    return (0, i.jsx)(V, {
        loading: j,
        disabled: Z,
        isInPastDueCheckout: a,
        showFractionalPremiumBanner: Y,
        fractionalPremiumInfo: q,
        isPremiumGroupPurchase: H,
        paymentRestrictionBannerType: er,
        invoiceError: A,
        unifiedPlainNoticeText: Q,
        invoicePreview: b,
        invoicePreviewComponent: en,
        shouldShowPlanSelectAndPromoBanner: ed,
        newPlan: P,
        planId: v,
        priceOptions: T,
        premiumPlanOptions: L,
        subscriptionDetailsContent: (0, i.jsx)("div", { ref: $ }),
        isInvoiceBilledImmediately: el,
        paymentMethodContent: eu,
        legalContent: em,
    });
}
