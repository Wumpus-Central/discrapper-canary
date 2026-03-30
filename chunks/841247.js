"use strict";
n.d(t, { TD: () => Y, vi: () => H });
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
    p = n(937008),
    h = n(156312),
    m = n(800471),
    E = n(340034),
    g = n(888751),
    A = n(216641),
    I = n(927578),
    T = n(615396),
    S = n(543767),
    y = n(735164),
    v = n(787455),
    N = n(692440),
    C = n(299301),
    R = n(788868),
    O = n(652215),
    b = n(985018),
    D = n(756366),
    L = n(207091),
    w = n(110448);
function M(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : o.createPortal(t, n);
}
let P = (e, t) => (null == e || t ? null : (0, r.jsx)(l.wx6, { type: "critical", children: e.message })),
    x = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, r.jsx)("div", { className: L.l, children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS }) })
            : (0, r.jsx)(l.y$y, {});
    },
    k = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: r } = t;
        i.useEffect(() => {
            n && (null != r ? e(r) : e(null));
        }, [e, n, r]);
    },
    U = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: r } = t;
        i.useEffect(() => {
            n && e(r);
        }, [e, n, r]);
    },
    G = (e) => {
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
            [o, l] = (0, S.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, S.Kq)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function F(e) {
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
        { setInvoicePreview: d } = (0, h.P5)(),
        [_, f] = (0, S.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        d(_);
    }, [d, _]),
        i.useEffect(() => {
            c(_);
        }, [c, _]),
        i.useEffect(() => {
            n(f);
        }, [n, f]);
    let p = (0, I.J$)(s.paymentSourceId);
    if (null != _) {
        let e = (0, r.jsx)(N.m0, {
                premiumSubscription: t,
                renewalInvoice: _,
                isUpdate: !0,
                isPrepaidPaymentSource: p,
                fractionalPremiumInfo: o,
                shouldUseUnifiedCheckoutUI: l,
            }),
            n = (0, r.jsx)(N._J, { invoice: _, isPrepaidPaymentSource: p, shouldUseUnifiedCheckoutUI: l });
        return l
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(M, { containerNode: u.current, children: e })] })
            : (0, r.jsxs)(y.Yx, { className: L.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(x, { shouldUseUnifiedCheckoutUI: l });
}
function V(e) {
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
            setOverrideRenewalDate: g,
            shouldUseUnifiedCheckoutUI: A,
            onRenewalInvoicePreview: T,
        } = e,
        {
            selectedSkuId: S,
            startedPaymentFlowWithPaymentSourcesRef: v,
            setInvoicePreview: R,
            premiumBrandRefreshBackgroundClassName: O,
        } = (0, h.P5)(),
        { isGift: D } = (0, p.Pv)(),
        { analyticsLocations: L } = (0, _.Ay)(),
        F = (0, I.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: V,
            proratedInvoiceError: B,
            renewalInvoicePreview: H,
            renewalInvoiceError: j,
        } = G({ premiumSubscription: t, newItems: F, priceOptions: l, preventFetch: c, analyticsLocations: L });
    i.useEffect(() => {
        T(H);
    }, [T, H]),
        i.useEffect(() => {
            R(V);
        }, [R, V]);
    let Y = B ?? j;
    i.useEffect(() => {
        s(Y);
    }, [s, Y]);
    let { planSwitchNoticeCopy: W, overrideRenewalDate: K } = i.useMemo(() => {
        let e;
        return (null !== u &&
            null !== V &&
            (e = (0, I._e)(V.subscriptionPeriodEnd, u.unactivatedUnits, u.currentEntitlementEndsAt)),
        null != V && null != H)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, N.DK)({ proratedInvoice: V, renewalInvoice: H, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [V, H, u]);
    if (
        (U(g, { shouldUseUnifiedCheckoutUI: A, overrideRenewalDate: K }),
        k(f, { shouldUseUnifiedCheckoutUI: A, noticeCopy: W }),
        null != Y)
    )
        return P(Y, A);
    let $ = (0, m.vT)({ isTrial: !1, isGift: D, selectedSkuId: S, startedPaymentFlowWithPaymentSources: v.current }),
        z = (0, m.UB)($, V, n);
    if (null == V || null == H || z) return (0, r.jsx)(x, { shouldUseUnifiedCheckoutUI: A });
    let q = (0, I.J$)(l.paymentSourceId),
        Z = (0, r.jsx)(N.m0, {
            premiumSubscription: t,
            proratedInvoice: V,
            renewalInvoice: H,
            overrideRenewalDate: K,
            isPrepaidPaymentSource: q,
            fractionalPremiumInfo: u,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: A,
        });
    return A
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(E.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: C.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: V,
                          renewalInvoicePreview: H,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: q,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(M, { containerNode: d.current, children: Z }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(N.wP, { proratedInvoice: V, renewalInvoice: H, overrideRenewalDate: K }),
                  (0, r.jsxs)(y.Yx, {
                      className: a()(w.SU, O),
                      children: [
                          (0, r.jsx)(y.Xd, { children: b.intl.string(b.t["2eh+Co"]) }),
                          (0, r.jsx)(N.mT, { invoice: V, newPlan: n, isPrepaidPaymentSource: q }),
                          Z,
                      ],
                  }),
              ],
          });
}
function B(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
            onInvoiceError: d,
            shouldUseUnifiedCheckoutUI: p,
            setUnifiedPlainNoticeText: m,
            setOverrideRenewalDate: E,
            onRenewalInvoicePreview: A,
            unifiedSubscriptionDetailsNode: T,
        } = e,
        { setInvoicePreview: C, premiumBrandRefreshBackgroundClassName: G } = (0, h.P5)(),
        { analyticsLocations: F } = (0, _.Ay)(),
        [V, B] = (0, S.Kq)({
            subscriptionId: n.id,
            items: (0, I.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: F,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    i.useEffect(() => {
        C(V);
    }, [C, V]),
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
            l.fractionalState === R.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: b.intl.format(b.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [V, l.fractionalState, l.endsAt]);
    if (
        (U(E, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: H }),
        k(m, { shouldUseUnifiedCheckoutUI: p, noticeCopy: j }),
        null != B)
    )
        return P(B, p);
    if (null == V) return (0, r.jsx)(x, { shouldUseUnifiedCheckoutUI: p });
    t = n.type === O.rzx.PREMIUM ? (0, I.Mn)(s.id) : s.name;
    let Y = (0, I.J$)(u.paymentSourceId),
        W = (0, r.jsx)("div", { className: L.o, children: j }),
        K = (0, r.jsx)(N.m0, {
            premiumSubscription: n,
            renewalInvoice: V,
            isUpdate: !0,
            isPrepaidPaymentSource: Y,
            fractionalPremiumInfo: l,
            overrideRenewalDate: H,
            shouldUseUnifiedCheckoutUI: p,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (p) {
        let { lineItems: e } = (0, g.Ig)(V, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: Y,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Vm, { label: b.intl.string(D.default.eoXh7B), lineItems: e, currency: V.currency }),
                (0, r.jsx)(M, { containerNode: T.current, children: K }),
            ],
        });
    }
    return (0, r.jsxs)("div", {
        className: w.G3,
        children: [
            W,
            (0, r.jsxs)(y.Yx, {
                className: a()(w.SU, G),
                children: [
                    (0, r.jsx)(y.Xd, { children: b.intl.string(b.t.iqhIp4) }),
                    (0, r.jsx)(y.oR, { label: t, value: (0, I.jh)(s, u, !0) }),
                    (0, r.jsx)(v.A, { invoice: V }),
                    (0, r.jsx)(y.pK, {}),
                    K,
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
        T = (0, I.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: S,
            proratedInvoiceError: y,
            renewalInvoicePreview: v,
            renewalInvoiceError: N,
        } = G({ premiumSubscription: n, newItems: T, priceOptions: l, preventFetch: d, analyticsLocations: g });
    i.useEffect(() => {
        E(v);
    }, [E, v]);
    let C = (0, A.g)(h, l.paymentSourceId),
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
              showPricingLink: s.currency !== O.Yri.USD,
              showWithdrawalWaiver: p,
              disabled: f,
              subscriptionPlan: s,
              currentSubscription: n,
              planGroup: o,
          });
}
function j(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: o,
            onInvoiceError: l,
            shouldUseUnifiedCheckoutUI: u,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: f,
            onRenewalInvoicePreview: p,
        } = e,
        { setInvoicePreview: m, premiumBrandRefreshBackgroundClassName: E } = (0, h.P5)(),
        { analyticsLocations: g } = (0, _.Ay)(),
        [A, T] = (0, S.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [v, C] = (0, S.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        m(A);
    }, [m, A]),
        i.useEffect(() => {
            p(v);
        }, [p, v]);
    let R = T ?? C;
    i.useEffect(() => {
        l(R);
    }, [l, R]);
    let O = i.useMemo(() => b.intl.string(b.t.spIYou), []);
    if ((k(f, { shouldUseUnifiedCheckoutUI: u, noticeCopy: O }), null != R)) return P(R, u);
    if (null == A || null == v) return (0, r.jsx)(x, { shouldUseUnifiedCheckoutUI: u });
    let D = (0, I.J$)(n.paymentSourceId),
        U = (0, r.jsx)(N.m0, {
            premiumSubscription: t,
            renewalInvoice: v,
            isUpdate: !0,
            isPrepaidPaymentSource: D,
            fractionalPremiumInfo: o,
            shouldUseUnifiedCheckoutUI: u,
        }),
        G = (0, r.jsx)("div", { className: L.o, children: O }),
        F = (0, r.jsx)(N._J, { invoice: A, isPrepaidPaymentSource: D, shouldUseUnifiedCheckoutUI: u });
    return u
        ? (0, r.jsxs)(r.Fragment, { children: [F, (0, r.jsx)(M, { containerNode: c.current, children: U })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  G,
                  (0, r.jsxs)(y.Yx, {
                      className: a()(w.SU, E),
                      children: [(0, r.jsx)(y.Xd, { children: b.intl.string(b.t["2eh+Co"]) }), F, U],
                  }),
              ],
          });
}
function Y(e, t, n) {
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
              content: (0, r.jsx)(F, {
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
                content: (0, r.jsx)(j, {
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
          : (0, T.Ge)(l, a, c)
            ? {
                  content: (0, r.jsx)(V, {
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
                  content: (0, r.jsx)(B, {
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
