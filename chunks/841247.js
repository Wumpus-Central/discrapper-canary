"use strict";
n.d(t, { TD: () => W, vi: () => j });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(340287),
    l = n(397927),
    u = n(821891),
    c = n(953689),
    d = n(793574),
    _ = n(688810),
    f = n(270537),
    p = n(94420),
    h = n(937008),
    m = n(156312),
    E = n(800471),
    g = n(340034),
    A = n(888751),
    I = n(216641),
    T = n(927578),
    S = n(615396),
    y = n(543767),
    v = n(735164),
    N = n(787455),
    C = n(692440),
    R = n(299301),
    O = n(788868),
    b = n(652215),
    D = n(985018),
    L = n(327105),
    w = n(207715),
    M = n(814304);
function P(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : o.createPortal(t, n);
}
let x = (e, t) => (null == e || t ? null : (0, r.jsx)(l.wx6, { type: "critical", children: e.message })),
    k = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, r.jsx)("div", { className: w.l, children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS }) })
            : (0, r.jsx)(l.y$y, {});
    },
    U = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: r } = t;
        i.useEffect(() => {
            n && (null != r ? e(r) : e(null));
        }, [e, n, r]);
    },
    G = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: r } = t;
        i.useEffect(() => {
            n && e(r);
        }, [e, n, r]);
    },
    F = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: s } = e,
            a = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: r.paymentSourceId,
                currency: r.currency,
                preventFetch: i,
                analyticsLocations: s,
                analyticsLocation: d.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [o, l] = (0, y.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, y.Kq)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function V(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: s,
            preventFetch: a,
            fractionalPremiumInfo: o,
            shouldUseUnifiedCheckoutUI: l,
            unifiedSubscriptionDetailsNode: u,
            onRenewalInvoicePreview: c,
        } = e,
        [d, _] = (0, y.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, p.F0)(d),
        i.useEffect(() => {
            c(d);
        }, [c, d]),
        i.useEffect(() => {
            n(_);
        }, [n, _]);
    let f = (0, T.J$)(s.paymentSourceId);
    if (null != d) {
        let e = (0, r.jsx)(C.m0, {
                premiumSubscription: t,
                renewalInvoice: d,
                isUpdate: !0,
                isPrepaidPaymentSource: f,
                fractionalPremiumInfo: o,
                shouldUseUnifiedCheckoutUI: l,
            }),
            n = (0, r.jsx)(C._J, { invoice: d, isPrepaidPaymentSource: f, shouldUseUnifiedCheckoutUI: l });
        return l
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(P, { containerNode: u.current, children: e })] })
            : (0, r.jsxs)(v.Yx, { className: w.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(k, { shouldUseUnifiedCheckoutUI: l });
}
function B(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            fractionalPremiumInfo: u,
            preventFetch: c,
            unifiedSubscriptionDetailsNode: d,
            setUnifiedPlainNoticeText: f,
            setOverrideRenewalDate: A,
            shouldUseUnifiedCheckoutUI: I,
            onRenewalInvoicePreview: S,
        } = e,
        y = (0, p.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: N, premiumBrandRefreshBackgroundClassName: O } = (0, m.P5)(),
        { isGift: b } = (0, h.Pv)(),
        { analyticsLocations: L } = (0, _.Ay)(),
        w = (0, T.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: V,
            proratedInvoiceError: B,
            renewalInvoicePreview: H,
            renewalInvoiceError: j,
        } = F({ premiumSubscription: t, newItems: w, priceOptions: l, preventFetch: c, analyticsLocations: L });
    i.useEffect(() => {
        S(H);
    }, [S, H]),
        (0, p.F0)(V);
    let Y = B ?? j;
    i.useEffect(() => {
        s(Y);
    }, [s, Y]);
    let { planSwitchNoticeCopy: W, overrideRenewalDate: K } = i.useMemo(() => {
        let e;
        return (null !== u &&
            null !== V &&
            (e = (0, T._e)(V.subscriptionPeriodEnd, u.unactivatedUnits, u.currentEntitlementEndsAt)),
        null != V && null != H)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, C.DK)({ proratedInvoice: V, renewalInvoice: H, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [V, H, u]);
    if (
        (G(A, { shouldUseUnifiedCheckoutUI: I, overrideRenewalDate: K }),
        U(f, { shouldUseUnifiedCheckoutUI: I, noticeCopy: W }),
        null != Y)
    )
        return x(Y, I);
    let $ = (0, E.vT)({ isTrial: !1, isGift: b, selectedSkuId: y, startedPaymentFlowWithPaymentSources: N.current }),
        z = (0, E.UB)($, V, n);
    if (null == V || null == H || z) return (0, r.jsx)(k, { shouldUseUnifiedCheckoutUI: I });
    let q = (0, T.J$)(l.paymentSourceId),
        Z = (0, r.jsx)(C.m0, {
            premiumSubscription: t,
            proratedInvoice: V,
            renewalInvoice: H,
            overrideRenewalDate: K,
            isPrepaidPaymentSource: q,
            fractionalPremiumInfo: u,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: I,
        });
    return I
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(g.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: R.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: V,
                          renewalInvoicePreview: H,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: q,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(P, { containerNode: d.current, children: Z }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(C.wP, { proratedInvoice: V, renewalInvoice: H, overrideRenewalDate: K }),
                  (0, r.jsxs)(v.Yx, {
                      className: a()(M.SU, O),
                      children: [
                          (0, r.jsx)(v.Xd, { children: D.intl.string(D.t["2eh+Co"]) }),
                          (0, r.jsx)(C.mT, { invoice: V, newPlan: n, isPrepaidPaymentSource: q }),
                          Z,
                      ],
                  }),
              ],
          });
}
function H(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
            onInvoiceError: d,
            shouldUseUnifiedCheckoutUI: h,
            setUnifiedPlainNoticeText: E,
            setOverrideRenewalDate: g,
            onRenewalInvoicePreview: I,
            unifiedSubscriptionDetailsNode: S,
        } = e,
        { premiumBrandRefreshBackgroundClassName: R } = (0, m.P5)(),
        { analyticsLocations: F } = (0, _.Ay)(),
        [V, B] = (0, y.Kq)({
            subscriptionId: n.id,
            items: (0, T.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: F,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, p.F0)(V),
        i.useEffect(() => {
            I(V);
        }, [I, V]),
        i.useEffect(() => {
            d(B);
        }, [d, B]);
    let { renewalDate: H, planSwitchNoticeCopy: j } = i.useMemo(() => {
        if (null == V) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = V.subscriptionPeriodStart;
        return (
            l.fractionalState === O.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: D.intl.format(D.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [V, l.fractionalState, l.endsAt]);
    if (
        (G(g, { shouldUseUnifiedCheckoutUI: h, overrideRenewalDate: H }),
        U(E, { shouldUseUnifiedCheckoutUI: h, noticeCopy: j }),
        null != B)
    )
        return x(B, h);
    if (null == V) return (0, r.jsx)(k, { shouldUseUnifiedCheckoutUI: h });
    t = n.type === b.rzx.PREMIUM ? (0, T.Mn)(s.id) : s.name;
    let Y = (0, T.J$)(u.paymentSourceId),
        W = (0, r.jsx)("div", { className: w.o, children: j }),
        K = (0, r.jsx)(C.m0, {
            premiumSubscription: n,
            renewalInvoice: V,
            isUpdate: !0,
            isPrepaidPaymentSource: Y,
            fractionalPremiumInfo: l,
            overrideRenewalDate: H,
            shouldUseUnifiedCheckoutUI: h,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (h) {
        let { lineItems: e } = (0, A.Ig)(V, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: Y,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Vm, { label: D.intl.string(L.default.eoXh7B), lineItems: e, currency: V.currency }),
                (0, r.jsx)(P, { containerNode: S.current, children: K }),
            ],
        });
    }
    return (0, r.jsxs)("div", {
        className: M.G3,
        children: [
            W,
            (0, r.jsxs)(v.Yx, {
                className: a()(M.SU, R),
                children: [
                    (0, r.jsx)(v.Xd, { children: D.intl.string(D.t.iqhIp4) }),
                    (0, r.jsx)(v.oR, { label: t, value: (0, T.jh)(s, u, !0) }),
                    (0, r.jsx)(N.A, { invoice: V }),
                    (0, r.jsx)(v.pK, {}),
                    K,
                ],
            }),
        ],
    });
}
function j(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            onInvoiceError: a,
            planGroup: o,
            priceOptions: l,
            preventFetch: d,
            disabled: f,
            isEEA: p,
            paymentSources: h,
            setHasAcceptedTerms: m,
            onRenewalInvoicePreview: E,
        } = e,
        { analyticsLocations: g } = (0, _.Ay)(),
        A = (0, T.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: S,
            proratedInvoiceError: y,
            renewalInvoicePreview: v,
            renewalInvoiceError: N,
        } = F({ premiumSubscription: n, newItems: A, priceOptions: l, preventFetch: d, analyticsLocations: g });
    i.useEffect(() => {
        E(v);
    }, [E, v]);
    let C = (0, I.g)(h, l.paymentSourceId),
        R = N ?? y;
    return (i.useEffect(() => {
        a(R);
    }, [a, R]),
    null != R ||
        (null != v && (t = { amount: v.subtotal, currency: v.currency, tax: v.tax, taxInclusive: v.taxInclusive }),
        null == t))
        ? null
        : (0, r.jsx)(c.A, {
              onChange: m,
              finePrint: (0, r.jsx)(u.A, {
                  subscriptionPlan: s,
                  paymentSourceType: C,
                  basePrice: t,
                  proratedAmount: null != S ? S.total : void 0,
                  currentSubscription: n,
                  planGroup: o,
              }),
              forceShow: !0,
              showPricingLink: s.currency !== b.Yri.USD,
              showWithdrawalWaiver: p,
              disabled: f,
              subscriptionPlan: s,
              currentSubscription: n,
              planGroup: o,
          });
}
function Y(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: o,
            onInvoiceError: l,
            shouldUseUnifiedCheckoutUI: u,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: f,
            onRenewalInvoicePreview: h,
        } = e,
        { premiumBrandRefreshBackgroundClassName: E } = (0, m.P5)(),
        { analyticsLocations: g } = (0, _.Ay)(),
        [A, I] = (0, y.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [S, N] = (0, y.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    (0, p.F0)(A),
        i.useEffect(() => {
            h(S);
        }, [h, S]);
    let R = I ?? N;
    i.useEffect(() => {
        l(R);
    }, [l, R]);
    let O = i.useMemo(() => D.intl.string(D.t.spIYou), []);
    if ((U(f, { shouldUseUnifiedCheckoutUI: u, noticeCopy: O }), null != R)) return x(R, u);
    if (null == A || null == S) return (0, r.jsx)(k, { shouldUseUnifiedCheckoutUI: u });
    let b = (0, T.J$)(n.paymentSourceId),
        L = (0, r.jsx)(C.m0, {
            premiumSubscription: t,
            renewalInvoice: S,
            isUpdate: !0,
            isPrepaidPaymentSource: b,
            fractionalPremiumInfo: o,
            shouldUseUnifiedCheckoutUI: u,
        }),
        G = (0, r.jsx)("div", { className: w.o, children: O }),
        F = (0, r.jsx)(C._J, { invoice: A, isPrepaidPaymentSource: b, shouldUseUnifiedCheckoutUI: u });
    return u
        ? (0, r.jsxs)(r.Fragment, { children: [F, (0, r.jsx)(P, { containerNode: c.current, children: L })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  G,
                  (0, r.jsxs)(v.Yx, {
                      className: a()(M.SU, E),
                      children: [(0, r.jsx)(v.Xd, { children: D.intl.string(D.t["2eh+Co"]) }), F, L],
                  }),
              ],
          });
}
function W(e, t, n) {
    let { hasOpenInvoice: i, showResumeSubscriptionView: s, planId: a } = e,
        {
            disabled: o,
            premiumSubscription: l,
            newPlan: u,
            planGroup: c,
            fractionalPremiumInfo: d,
            priceOptions: _,
            onInvoiceError: f,
            onRenewalInvoicePreview: p,
        } = t;
    return i
        ? {
              content: (0, r.jsx)(V, {
                  premiumSubscription: l,
                  onInvoiceError: f,
                  priceOptions: _,
                  preventFetch: !1,
                  onRenewalInvoicePreview: p,
                  fractionalPremiumInfo: d,
                  ...n,
              }),
              isInvoiceBilledImmediately: !0,
              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
          }
        : s
          ? {
                content: (0, r.jsx)(Y, {
                    premiumSubscription: l,
                    onInvoiceError: f,
                    priceOptions: _,
                    preventFetch: o,
                    onRenewalInvoicePreview: p,
                    fractionalPremiumInfo: d,
                    ...n,
                }),
                isInvoiceBilledImmediately: !0,
                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
            }
          : (0, S.Ge)(l, a, c)
            ? {
                  content: (0, r.jsx)(B, {
                      premiumSubscription: l,
                      newPlan: u,
                      onInvoiceError: f,
                      planGroup: c,
                      priceOptions: _,
                      fractionalPremiumInfo: d,
                      preventFetch: o,
                      onRenewalInvoicePreview: p,
                      ...n,
                  }),
                  isInvoiceBilledImmediately: !0,
                  shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
              }
            : {
                  isInvoiceBilledImmediately: !1,
                  shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                  content: (0, r.jsx)(H, {
                      premiumSubscription: l,
                      newPlan: u,
                      planGroup: c,
                      fractionalPremiumInfo: d,
                      priceOptions: _,
                      preventFetch: o,
                      onInvoiceError: f,
                      onRenewalInvoicePreview: p,
                      ...n,
                  }),
              };
}
