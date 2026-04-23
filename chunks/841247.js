"use strict";
n.d(t, { TD: () => K, vi: () => Y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(340287),
    l = n(683071),
    u = n(289873),
    c = n(821891),
    d = n(953689),
    _ = n(793574),
    f = n(688810),
    p = n(270537),
    h = n(94420),
    E = n(937008),
    m = n(156312),
    g = n(800471),
    A = n(340034),
    I = n(888751),
    T = n(216641),
    S = n(927578),
    y = n(615396),
    N = n(543767),
    v = n(735164),
    C = n(787455),
    O = n(692440),
    R = n(299301),
    b = n(788868),
    D = n(652215),
    L = n(985018),
    w = n(327105),
    M = n(207715),
    P = n(814304);
function x(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : o.createPortal(t, n);
}
let k = (e, t) => (null == e || t ? null : (0, r.jsx)(l.w, { type: "critical", children: e.message })),
    U = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, r.jsx)("div", { className: M.l, children: (0, r.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }) })
            : (0, r.jsx)(u.y, {});
    },
    G = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: r } = t;
        i.useEffect(() => {
            n && (null != r ? e(r) : e(null));
        }, [e, n, r]);
    },
    F = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: r } = t;
        i.useEffect(() => {
            n && e(r);
        }, [e, n, r]);
    },
    V = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: s } = e,
            a = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: r.paymentSourceId,
                currency: r.currency,
                preventFetch: i,
                analyticsLocations: s,
                analyticsLocation: _.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [o, l] = (0, N.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, N.Kq)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function B(e) {
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
        [d, _] = (0, N.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, h.F0)(d),
        i.useEffect(() => {
            c(d);
        }, [c, d]),
        i.useEffect(() => {
            n(_);
        }, [n, _]);
    let f = (0, S.J$)(s.paymentSourceId);
    if (null != d) {
        let e = (0, r.jsx)(O.m0, {
                premiumSubscription: t,
                renewalInvoice: d,
                isUpdate: !0,
                isPrepaidPaymentSource: f,
                fractionalPremiumInfo: o,
                shouldUseUnifiedCheckoutUI: l,
            }),
            n = (0, r.jsx)(O._J, { invoice: d, isPrepaidPaymentSource: f, shouldUseUnifiedCheckoutUI: l });
        return l
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(x, { containerNode: u.current, children: e })] })
            : (0, r.jsxs)(v.Yx, { className: M.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(U, { shouldUseUnifiedCheckoutUI: l });
}
function H(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            fractionalPremiumInfo: u,
            preventFetch: c,
            unifiedSubscriptionDetailsNode: d,
            setUnifiedPlainNoticeText: _,
            setOverrideRenewalDate: p,
            shouldUseUnifiedCheckoutUI: I,
            onRenewalInvoicePreview: T,
        } = e,
        y = (0, h.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: N, premiumBrandRefreshBackgroundClassName: C } = (0, m.P5)(),
        { isGift: b } = (0, E.Pv)(),
        { analyticsLocations: D } = (0, f.Ay)(),
        w = (0, S.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: M,
            proratedInvoiceError: B,
            renewalInvoicePreview: H,
            renewalInvoiceError: j,
        } = V({ premiumSubscription: t, newItems: w, priceOptions: l, preventFetch: c, analyticsLocations: D });
    i.useEffect(() => {
        T(H);
    }, [T, H]),
        (0, h.F0)(M);
    let Y = B ?? j;
    i.useEffect(() => {
        s(Y);
    }, [s, Y]);
    let { planSwitchNoticeCopy: W, overrideRenewalDate: K } = i.useMemo(() => {
        let e;
        return (null !== u &&
            null !== M &&
            (e = (0, S._e)(M.subscriptionPeriodEnd, u.unactivatedUnits, u.currentEntitlementEndsAt)),
        null != M && null != H)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, O.DK)({ proratedInvoice: M, renewalInvoice: H, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [M, H, u]);
    if (
        (F(p, { shouldUseUnifiedCheckoutUI: I, overrideRenewalDate: K }),
        G(_, { shouldUseUnifiedCheckoutUI: I, noticeCopy: W }),
        null != Y)
    )
        return k(Y, I);
    let $ = (0, g.vT)({ isTrial: !1, isGift: b, selectedSkuId: y, startedPaymentFlowWithPaymentSources: N.current }),
        z = (0, g.UB)($, M, n);
    if (null == M || null == H || z) return (0, r.jsx)(U, { shouldUseUnifiedCheckoutUI: I });
    let q = (0, S.J$)(l.paymentSourceId),
        X = (0, r.jsx)(O.m0, {
            premiumSubscription: t,
            proratedInvoice: M,
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
                  (0, r.jsx)(A.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: R.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: M,
                          renewalInvoicePreview: H,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: q,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(x, { containerNode: d.current, children: X }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(O.wP, { proratedInvoice: M, renewalInvoice: H, overrideRenewalDate: K }),
                  (0, r.jsxs)(v.Yx, {
                      className: a()(P.SU, C),
                      children: [
                          (0, r.jsx)(v.Xd, { children: L.intl.string(L.t["2eh+Co"]) }),
                          (0, r.jsx)(O.mT, { invoice: M, newPlan: n, isPrepaidPaymentSource: q }),
                          X,
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
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
            onInvoiceError: d,
            shouldUseUnifiedCheckoutUI: _,
            setUnifiedPlainNoticeText: E,
            setOverrideRenewalDate: g,
            onRenewalInvoicePreview: A,
            unifiedSubscriptionDetailsNode: T,
        } = e,
        { premiumBrandRefreshBackgroundClassName: y } = (0, m.P5)(),
        { analyticsLocations: R } = (0, f.Ay)(),
        [V, B] = (0, N.Kq)({
            subscriptionId: n.id,
            items: (0, S.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: R,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, h.F0)(V),
        i.useEffect(() => {
            A(V);
        }, [A, V]),
        i.useEffect(() => {
            d(B);
        }, [d, B]);
    let { renewalDate: H, planSwitchNoticeCopy: j } = i.useMemo(() => {
        if (null == V) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = V.subscriptionPeriodStart;
        return (
            l.fractionalState === b.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: L.intl.format(L.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [V, l.fractionalState, l.endsAt]);
    if (
        (F(g, { shouldUseUnifiedCheckoutUI: _, overrideRenewalDate: H }),
        G(E, { shouldUseUnifiedCheckoutUI: _, noticeCopy: j }),
        null != B)
    )
        return k(B, _);
    if (null == V) return (0, r.jsx)(U, { shouldUseUnifiedCheckoutUI: _ });
    t = n.type === D.rzx.PREMIUM ? (0, S.Mn)(s.id) : s.name;
    let Y = (0, S.J$)(u.paymentSourceId),
        W = (0, r.jsx)("div", { className: M.o, children: j }),
        K = (0, r.jsx)(O.m0, {
            premiumSubscription: n,
            renewalInvoice: V,
            isUpdate: !0,
            isPrepaidPaymentSource: Y,
            fractionalPremiumInfo: l,
            overrideRenewalDate: H,
            shouldUseUnifiedCheckoutUI: _,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (_) {
        let { lineItems: e } = (0, I.Ig)(V, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: Y,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.Vm, { label: L.intl.string(w.default.eoXh7B), lineItems: e, currency: V.currency }),
                (0, r.jsx)(x, { containerNode: T.current, children: K }),
            ],
        });
    }
    return (0, r.jsxs)("div", {
        className: P.G3,
        children: [
            W,
            (0, r.jsxs)(v.Yx, {
                className: a()(P.SU, y),
                children: [
                    (0, r.jsx)(v.Xd, { children: L.intl.string(L.t.iqhIp4) }),
                    (0, r.jsx)(v.oR, { label: t, value: (0, S.jh)(s, u, !0) }),
                    (0, r.jsx)(C.A, { invoice: V }),
                    (0, r.jsx)(v.pK, {}),
                    K,
                ],
            }),
        ],
    });
}
function Y(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            onInvoiceError: a,
            planGroup: o,
            priceOptions: l,
            preventFetch: u,
            disabled: _,
            isEEA: p,
            paymentSources: h,
            setHasAcceptedTerms: E,
            onRenewalInvoicePreview: m,
        } = e,
        { analyticsLocations: g } = (0, f.Ay)(),
        A = (0, S.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: y,
            renewalInvoicePreview: N,
            renewalInvoiceError: v,
        } = V({ premiumSubscription: n, newItems: A, priceOptions: l, preventFetch: u, analyticsLocations: g });
    i.useEffect(() => {
        m(N);
    }, [m, N]);
    let C = (0, T.g)(h, l.paymentSourceId),
        O = v ?? y;
    return (i.useEffect(() => {
        a(O);
    }, [a, O]),
    null != O ||
        (null != N && (t = { amount: N.subtotal, currency: N.currency, tax: N.tax, taxInclusive: N.taxInclusive }),
        null == t))
        ? null
        : (0, r.jsx)(d.A, {
              onChange: E,
              finePrint: (0, r.jsx)(c.A, {
                  subscriptionPlan: s,
                  paymentSourceType: C,
                  basePrice: t,
                  proratedAmount: null != I ? I.total : void 0,
                  currentSubscription: n,
                  planGroup: o,
              }),
              forceShow: !0,
              showPricingLink: s.currency !== D.Yri.USD,
              showWithdrawalWaiver: p,
              disabled: _,
              subscriptionPlan: s,
              currentSubscription: n,
              planGroup: o,
          });
}
function W(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: o,
            onInvoiceError: l,
            shouldUseUnifiedCheckoutUI: u,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: d,
            onRenewalInvoicePreview: p,
        } = e,
        { premiumBrandRefreshBackgroundClassName: E } = (0, m.P5)(),
        { analyticsLocations: g } = (0, f.Ay)(),
        [A, I] = (0, N.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: _.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [T, y] = (0, N.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: _.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    (0, h.F0)(A),
        i.useEffect(() => {
            p(T);
        }, [p, T]);
    let C = I ?? y;
    i.useEffect(() => {
        l(C);
    }, [l, C]);
    let R = i.useMemo(() => L.intl.string(L.t.spIYou), []);
    if ((G(d, { shouldUseUnifiedCheckoutUI: u, noticeCopy: R }), null != C)) return k(C, u);
    if (null == A || null == T) return (0, r.jsx)(U, { shouldUseUnifiedCheckoutUI: u });
    let b = (0, S.J$)(n.paymentSourceId),
        D = (0, r.jsx)(O.m0, {
            premiumSubscription: t,
            renewalInvoice: T,
            isUpdate: !0,
            isPrepaidPaymentSource: b,
            fractionalPremiumInfo: o,
            shouldUseUnifiedCheckoutUI: u,
        }),
        w = (0, r.jsx)("div", { className: M.o, children: R }),
        F = (0, r.jsx)(O._J, { invoice: A, isPrepaidPaymentSource: b, shouldUseUnifiedCheckoutUI: u });
    return u
        ? (0, r.jsxs)(r.Fragment, { children: [F, (0, r.jsx)(x, { containerNode: c.current, children: D })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  w,
                  (0, r.jsxs)(v.Yx, {
                      className: a()(P.SU, E),
                      children: [(0, r.jsx)(v.Xd, { children: L.intl.string(L.t["2eh+Co"]) }), F, D],
                  }),
              ],
          });
}
function K(e, t, n) {
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
              content: (0, r.jsx)(B, {
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
                content: (0, r.jsx)(W, {
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
          : (0, y.Ge)(l, a, c)
            ? {
                  content: (0, r.jsx)(H, {
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
                  content: (0, r.jsx)(j, {
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
