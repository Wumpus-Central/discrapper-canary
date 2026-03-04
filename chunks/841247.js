"use strict";
n.d(t, { TD: () => V, vi: () => U });
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
    f = n(937008),
    p = n(156312),
    h = n(800471),
    m = n(340034),
    E = n(216641),
    g = n(927578),
    A = n(615396),
    I = n(543767),
    T = n(735164),
    S = n(787455),
    y = n(692440),
    v = n(299301),
    N = n(788868),
    C = n(652215),
    R = n(985018),
    O = n(314654),
    b = n(982571);
function D(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : o.createPortal(t, n);
}
let L = (e, t) => (null == e || t ? null : (0, r.jsx)(l.wx6, { type: "critical", children: e.message })),
    w = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, r.jsx)("div", { className: O.l, children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS }) })
            : (0, r.jsx)(l.y$y, {});
    },
    M = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: r } = t;
        i.useEffect(() => {
            n && (null != r ? e(r) : e(null));
        }, [e, n, r]);
    },
    x = (e) => {
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
            [o, l] = (0, I.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, I.Kq)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function P(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: s,
            preventFetch: a,
            shouldUseUnifiedCheckoutUI: o,
            unifiedSubscriptionDetailsNode: l,
        } = e,
        { setInvoicePreview: u } = (0, p.P5)(),
        [c, d] = (0, I.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        u(c);
    }, [u, c]),
        i.useEffect(() => {
            n(d);
        }, [n, d]);
    let _ = (0, g.J$)(s.paymentSourceId);
    if (null != c) {
        let e = (0, r.jsx)(y.m0, {
                premiumSubscription: t,
                renewalInvoice: c,
                isUpdate: !0,
                isPrepaidPaymentSource: _,
                shouldUseUnifiedCheckoutUI: o,
            }),
            n = (0, r.jsx)(y._J, { invoice: c, isPrepaidPaymentSource: _, shouldUseUnifiedCheckoutUI: o });
        return o
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(D, { containerNode: l.current, children: e })] })
            : (0, r.jsxs)(T.Yx, { className: O.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(w, { shouldUseUnifiedCheckoutUI: o });
}
function k(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            fractionalPremiumInfo: u,
            preventFetch: c,
            unifiedSubscriptionDetailsNode: d,
            setUnifiedPlainNoticeText: E,
            shouldUseUnifiedCheckoutUI: A,
        } = e,
        {
            selectedSkuId: I,
            startedPaymentFlowWithPaymentSourcesRef: S,
            setInvoicePreview: N,
            premiumBrandRefreshBackgroundClassName: C,
        } = (0, p.P5)(),
        { isGift: O } = (0, f.Pv)(),
        { analyticsLocations: P } = (0, _.Ay)(),
        k = (0, g.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: U,
            proratedInvoiceError: G,
            renewalInvoicePreview: F,
            renewalInvoiceError: V,
        } = x({ premiumSubscription: t, newItems: k, priceOptions: l, preventFetch: c, analyticsLocations: P });
    i.useEffect(() => {
        N(U);
    }, [N, U]);
    let B = G ?? V;
    i.useEffect(() => {
        s(B);
    }, [s, B]);
    let { planSwitchNoticeCopy: H, overrideRenewalDate: j } = i.useMemo(() => {
        let e;
        return (null !== u && null !== U && (e = (0, g._e)(U.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null != U && null != F)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, y.DK)({ proratedInvoice: U, renewalInvoice: F, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [U, F, u]);
    if ((M(E, { shouldUseUnifiedCheckoutUI: A, noticeCopy: H }), null != B)) return L(B, A);
    let Y = (0, h.vT)({ isTrial: !1, isGift: O, selectedSkuId: I, startedPaymentFlowWithPaymentSources: S.current }),
        W = (0, h.UB)(Y, U, n);
    if (null == U || null == F || W) return (0, r.jsx)(w, { shouldUseUnifiedCheckoutUI: A });
    let K = (0, g.J$)(l.paymentSourceId),
        $ = (0, r.jsx)(y.m0, {
            premiumSubscription: t,
            proratedInvoice: U,
            renewalInvoice: F,
            overrideRenewalDate: j,
            isUpdate: !0,
            isPrepaidPaymentSource: K,
            shouldUseUnifiedCheckoutUI: A,
        });
    return A
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: v.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: U,
                          renewalInvoicePreview: F,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: K,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(D, { containerNode: d.current, children: $ }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(y.wP, { proratedInvoice: U, renewalInvoice: F, overrideRenewalDate: j }),
                  (0, r.jsxs)(T.Yx, {
                      className: a()(b.SU, C),
                      children: [
                          (0, r.jsx)(T.Xd, { children: R.intl.string(R.t["2eh+Co"]) }),
                          (0, r.jsx)(y.mT, { invoice: U, newPlan: n, isPrepaidPaymentSource: K }),
                          $,
                      ],
                  }),
              ],
          });
}
function U(e) {
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
            shouldUseUnifiedCheckoutUI: A,
        } = e,
        { analyticsLocations: I } = (0, _.Ay)(),
        T = (0, g.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: S,
            proratedInvoiceError: y,
            renewalInvoicePreview: v,
            renewalInvoiceError: N,
        } = x({ premiumSubscription: n, newItems: T, priceOptions: l, preventFetch: d, analyticsLocations: I }),
        R = (0, E.g)(h, l.paymentSourceId),
        O = N ?? y;
    return (i.useEffect(() => {
        a(O);
    }, [a, O]),
    null != O)
        ? L(O, A)
        : (null != v && (t = { amount: v.subtotal, currency: v.currency, tax: v.tax, taxInclusive: v.taxInclusive }),
            null == t)
          ? null
          : (0, r.jsx)(c.A, {
                onChange: m,
                finePrint: (0, r.jsx)(u.A, {
                    subscriptionPlan: s,
                    paymentSourceType: R,
                    basePrice: t,
                    proratedAmount: null != S ? S.total : void 0,
                    currentSubscription: n,
                    planGroup: o,
                }),
                forceShow: !0,
                showPricingLink: s.currency !== C.Yri.USD,
                showWithdrawalWaiver: p,
                disabled: f,
                subscriptionPlan: s,
                currentSubscription: n,
                planGroup: o,
            });
}
function G(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            onInvoiceError: o,
            shouldUseUnifiedCheckoutUI: l,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
        } = e,
        { setInvoicePreview: f, premiumBrandRefreshBackgroundClassName: h } = (0, p.P5)(),
        { analyticsLocations: m } = (0, _.Ay)(),
        [E, A] = (0, I.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: m,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [S, v] = (0, I.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: m,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        f(E);
    }, [f, E]);
    let N = A ?? v;
    i.useEffect(() => {
        o(N);
    }, [o, N]);
    let C = i.useMemo(() => R.intl.string(R.t.spIYou), []);
    if ((M(c, { shouldUseUnifiedCheckoutUI: l, noticeCopy: C }), null != N)) return L(N, l);
    if (null == E || null == S) return (0, r.jsx)(w, { shouldUseUnifiedCheckoutUI: l });
    let x = (0, g.J$)(n.paymentSourceId),
        P = (0, r.jsx)(y.m0, {
            premiumSubscription: t,
            renewalInvoice: S,
            isUpdate: !0,
            isPrepaidPaymentSource: x,
            shouldUseUnifiedCheckoutUI: l,
        }),
        k = (0, r.jsx)("div", { className: O.o, children: C }),
        U = (0, r.jsx)(y._J, { invoice: E, isPrepaidPaymentSource: x, shouldUseUnifiedCheckoutUI: l });
    return l
        ? (0, r.jsxs)(r.Fragment, { children: [U, (0, r.jsx)(D, { containerNode: u.current, children: P })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  k,
                  (0, r.jsxs)(T.Yx, {
                      className: a()(b.SU, h),
                      children: [(0, r.jsx)(T.Xd, { children: R.intl.string(R.t["2eh+Co"]) }), U, P],
                  }),
              ],
          });
}
function F(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
            onInvoiceError: d,
            shouldUseUnifiedCheckoutUI: f,
            setUnifiedPlainNoticeText: h,
        } = e,
        { setInvoicePreview: m, premiumBrandRefreshBackgroundClassName: E } = (0, p.P5)(),
        { analyticsLocations: A } = (0, _.Ay)(),
        [v, D] = (0, I.Kq)({
            subscriptionId: n.id,
            items: (0, g.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: A,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    i.useEffect(() => {
        m(v);
    }, [m, v]),
        i.useEffect(() => {
            d(D);
        }, [d, D]);
    let { renewalDate: x, planSwitchNoticeCopy: P } = i.useMemo(() => {
        if (null == v) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = v.subscriptionPeriodStart;
        return (
            l.fractionalState === N.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: R.intl.format(R.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [v, l.fractionalState, l.endsAt]);
    if ((M(h, { shouldUseUnifiedCheckoutUI: f, noticeCopy: P }), null != D)) return L(D, f);
    if (null == v) return (0, r.jsx)(w, { shouldUseUnifiedCheckoutUI: f });
    t = n.type === C.rzx.PREMIUM ? (0, g.Mn)(s.id) : s.name;
    let k = (0, g.J$)(u.paymentSourceId),
        U = (0, r.jsx)("div", { className: O.o, children: P }),
        G = (0, r.jsx)(y.m0, {
            premiumSubscription: n,
            renewalInvoice: v,
            isUpdate: !0,
            isPrepaidPaymentSource: k,
            shouldUseUnifiedCheckoutUI: f,
            unifiedCheckoutDefaultExpanded: !0,
            overrideRenewalDate: x,
        });
    return f
        ? G
        : (0, r.jsxs)("div", {
              className: b.G3,
              children: [
                  U,
                  (0, r.jsxs)(T.Yx, {
                      className: a()(b.SU, E),
                      children: [
                          (0, r.jsx)(T.Xd, { children: R.intl.string(R.t.iqhIp4) }),
                          (0, r.jsx)(T.oR, { label: t, value: (0, g.jh)(s, u, !0) }),
                          (0, r.jsx)(S.A, { invoice: v }),
                          (0, r.jsx)(T.pK, {}),
                          G,
                      ],
                  }),
              ],
          });
}
function V(e, t, n) {
    let { hasOpenInvoice: i, showResumeSubscriptionView: s, planId: a } = e,
        {
            disabled: o,
            premiumSubscription: l,
            newPlan: u,
            planGroup: c,
            fractionalPremiumInfo: d,
            priceOptions: _,
            onInvoiceError: f,
        } = t;
    return i
        ? {
              content: (0, r.jsx)(P, {
                  premiumSubscription: l,
                  onInvoiceError: f,
                  priceOptions: _,
                  preventFetch: !1,
                  ...n,
              }),
              isInvoiceBilledImmediately: !0,
              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
          }
        : s
          ? {
                content: (0, r.jsx)(G, {
                    premiumSubscription: l,
                    onInvoiceError: f,
                    priceOptions: _,
                    preventFetch: o,
                    ...n,
                }),
                isInvoiceBilledImmediately: !0,
                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
            }
          : (0, A.Ge)(l, a, c)
            ? {
                  content: (0, r.jsx)(k, {
                      premiumSubscription: l,
                      newPlan: u,
                      onInvoiceError: f,
                      planGroup: c,
                      priceOptions: _,
                      fractionalPremiumInfo: d,
                      preventFetch: o,
                      ...n,
                  }),
                  isInvoiceBilledImmediately: !0,
                  shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
              }
            : {
                  isInvoiceBilledImmediately: !1,
                  shouldRenderToUnifiedSubscriptionDetailsDirectly: !0,
                  content: (0, r.jsx)(F, {
                      premiumSubscription: l,
                      newPlan: u,
                      planGroup: c,
                      fractionalPremiumInfo: d,
                      priceOptions: _,
                      preventFetch: o,
                      onInvoiceError: f,
                      ...n,
                  }),
              };
}
