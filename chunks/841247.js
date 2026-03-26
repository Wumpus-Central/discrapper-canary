"use strict";
n.d(t, { TD: () => H, vi: () => V });
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
    E = n(888751),
    g = n(216641),
    A = n(927578),
    I = n(615396),
    T = n(543767),
    S = n(735164),
    y = n(787455),
    v = n(692440),
    N = n(299301),
    C = n(788868),
    R = n(652215),
    O = n(985018),
    b = n(207091),
    D = n(110448);
function L(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : o.createPortal(t, n);
}
let w = (e, t) => (null == e || t ? null : (0, r.jsx)(l.wx6, { type: "critical", children: e.message })),
    M = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, r.jsx)("div", { className: b.l, children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS }) })
            : (0, r.jsx)(l.y$y, {});
    },
    x = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: r } = t;
        i.useEffect(() => {
            n && (null != r ? e(r) : e(null));
        }, [e, n, r]);
    },
    P = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: r } = t;
        i.useEffect(() => {
            n && e(r);
        }, [e, n, r]);
    },
    k = (e) => {
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
            [o, l] = (0, T.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, T.Kq)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function U(e) {
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
        { setInvoicePreview: d } = (0, p.P5)(),
        [_, f] = (0, T.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        d(_);
    }, [d, _]),
        i.useEffect(() => {
            c(_);
        }, [c, _]),
        i.useEffect(() => {
            n(f);
        }, [n, f]);
    let h = (0, A.J$)(s.paymentSourceId);
    if (null != _) {
        let e = (0, r.jsx)(v.m0, {
                premiumSubscription: t,
                renewalInvoice: _,
                isUpdate: !0,
                isPrepaidPaymentSource: h,
                fractionalPremiumInfo: o,
                shouldUseUnifiedCheckoutUI: l,
            }),
            n = (0, r.jsx)(v._J, { invoice: _, isPrepaidPaymentSource: h, shouldUseUnifiedCheckoutUI: l });
        return l
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(L, { containerNode: u.current, children: e })] })
            : (0, r.jsxs)(S.Yx, { className: b.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: l });
}
function G(e) {
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
            setOverrideRenewalDate: g,
            shouldUseUnifiedCheckoutUI: I,
            onRenewalInvoicePreview: T,
        } = e,
        {
            selectedSkuId: y,
            startedPaymentFlowWithPaymentSourcesRef: C,
            setInvoicePreview: R,
            premiumBrandRefreshBackgroundClassName: b,
        } = (0, p.P5)(),
        { isGift: U } = (0, f.Pv)(),
        { analyticsLocations: G } = (0, _.Ay)(),
        F = (0, A.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: V,
            proratedInvoiceError: B,
            renewalInvoicePreview: H,
            renewalInvoiceError: j,
        } = k({ premiumSubscription: t, newItems: F, priceOptions: l, preventFetch: c, analyticsLocations: G });
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
        return (null !== u && null !== V && (e = (0, A._e)(V.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null != V && null != H)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, v.DK)({ proratedInvoice: V, renewalInvoice: H, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [V, H, u]);
    if (
        (P(g, { shouldUseUnifiedCheckoutUI: I, overrideRenewalDate: K }),
        x(E, { shouldUseUnifiedCheckoutUI: I, noticeCopy: W }),
        null != Y)
    )
        return w(Y, I);
    let $ = (0, h.vT)({ isTrial: !1, isGift: U, selectedSkuId: y, startedPaymentFlowWithPaymentSources: C.current }),
        z = (0, h.UB)($, V, n);
    if (null == V || null == H || z) return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: I });
    let q = (0, A.J$)(l.paymentSourceId),
        Z = (0, r.jsx)(v.m0, {
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
                  (0, r.jsx)(m.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: N.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: V,
                          renewalInvoicePreview: H,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: q,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(L, { containerNode: d.current, children: Z }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(v.wP, { proratedInvoice: V, renewalInvoice: H, overrideRenewalDate: K }),
                  (0, r.jsxs)(S.Yx, {
                      className: a()(D.SU, b),
                      children: [
                          (0, r.jsx)(S.Xd, { children: O.intl.string(O.t["2eh+Co"]) }),
                          (0, r.jsx)(v.mT, { invoice: V, newPlan: n, isPrepaidPaymentSource: q }),
                          Z,
                      ],
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
            setOverrideRenewalDate: g,
            onRenewalInvoicePreview: I,
            unifiedSubscriptionDetailsNode: N,
        } = e,
        { setInvoicePreview: k, premiumBrandRefreshBackgroundClassName: U } = (0, p.P5)(),
        { analyticsLocations: G } = (0, _.Ay)(),
        [F, V] = (0, T.Kq)({
            subscriptionId: n.id,
            items: (0, A.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: G,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    i.useEffect(() => {
        k(F);
    }, [k, F]),
        i.useEffect(() => {
            I(F);
        }, [I, F]),
        i.useEffect(() => {
            d(V);
        }, [d, V]);
    let { renewalDate: B, planSwitchNoticeCopy: H } = i.useMemo(() => {
        if (null == F) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = F.subscriptionPeriodStart;
        return (
            l.fractionalState === C.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: O.intl.format(O.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [F, l.fractionalState, l.endsAt]);
    if (
        (P(g, { shouldUseUnifiedCheckoutUI: f, overrideRenewalDate: B }),
        x(h, { shouldUseUnifiedCheckoutUI: f, noticeCopy: H }),
        null != V)
    )
        return w(V, f);
    if (null == F) return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: f });
    t = n.type === R.rzx.PREMIUM ? (0, A.Mn)(s.id) : s.name;
    let j = (0, A.J$)(u.paymentSourceId),
        Y = (0, r.jsx)("div", { className: b.o, children: H }),
        W = (0, r.jsx)(v.m0, {
            premiumSubscription: n,
            renewalInvoice: F,
            isUpdate: !0,
            isPrepaidPaymentSource: j,
            fractionalPremiumInfo: l,
            overrideRenewalDate: B,
            shouldUseUnifiedCheckoutUI: f,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (f) {
        let { lineItems: e } = (0, E.Ig)(F, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: j,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m.ID, { lineItems: e, currency: F.currency }),
                (0, r.jsx)(L, { containerNode: N.current, children: W }),
            ],
        });
    }
    return (0, r.jsxs)("div", {
        className: D.G3,
        children: [
            Y,
            (0, r.jsxs)(S.Yx, {
                className: a()(D.SU, U),
                children: [
                    (0, r.jsx)(S.Xd, { children: O.intl.string(O.t.iqhIp4) }),
                    (0, r.jsx)(S.oR, { label: t, value: (0, A.jh)(s, u, !0) }),
                    (0, r.jsx)(y.A, { invoice: F }),
                    (0, r.jsx)(S.pK, {}),
                    W,
                ],
            }),
        ],
    });
}
function V(e) {
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
        { analyticsLocations: I } = (0, _.Ay)(),
        T = (0, A.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: S,
            proratedInvoiceError: y,
            renewalInvoicePreview: v,
            renewalInvoiceError: N,
        } = k({ premiumSubscription: n, newItems: T, priceOptions: l, preventFetch: d, analyticsLocations: I });
    i.useEffect(() => {
        E(v);
    }, [E, v]);
    let C = (0, g.g)(h, l.paymentSourceId),
        O = N ?? y;
    return (i.useEffect(() => {
        a(O);
    }, [a, O]),
    null != O ||
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
              showPricingLink: s.currency !== R.Yri.USD,
              showWithdrawalWaiver: p,
              disabled: f,
              subscriptionPlan: s,
              currentSubscription: n,
              planGroup: o,
          });
}
function B(e) {
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
        { setInvoicePreview: m, premiumBrandRefreshBackgroundClassName: E } = (0, p.P5)(),
        { analyticsLocations: g } = (0, _.Ay)(),
        [I, y] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [N, C] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: g,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        m(I);
    }, [m, I]),
        i.useEffect(() => {
            h(N);
        }, [h, N]);
    let R = y ?? C;
    i.useEffect(() => {
        l(R);
    }, [l, R]);
    let P = i.useMemo(() => O.intl.string(O.t.spIYou), []);
    if ((x(f, { shouldUseUnifiedCheckoutUI: u, noticeCopy: P }), null != R)) return w(R, u);
    if (null == I || null == N) return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: u });
    let k = (0, A.J$)(n.paymentSourceId),
        U = (0, r.jsx)(v.m0, {
            premiumSubscription: t,
            renewalInvoice: N,
            isUpdate: !0,
            isPrepaidPaymentSource: k,
            fractionalPremiumInfo: o,
            shouldUseUnifiedCheckoutUI: u,
        }),
        G = (0, r.jsx)("div", { className: b.o, children: P }),
        F = (0, r.jsx)(v._J, { invoice: I, isPrepaidPaymentSource: k, shouldUseUnifiedCheckoutUI: u });
    return u
        ? (0, r.jsxs)(r.Fragment, { children: [F, (0, r.jsx)(L, { containerNode: c.current, children: U })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  G,
                  (0, r.jsxs)(S.Yx, {
                      className: a()(D.SU, E),
                      children: [(0, r.jsx)(S.Xd, { children: O.intl.string(O.t["2eh+Co"]) }), F, U],
                  }),
              ],
          });
}
function H(e, t, n) {
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
              content: (0, r.jsx)(U, {
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
                content: (0, r.jsx)(B, {
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
          : (0, I.Ge)(l, a, c)
            ? {
                  content: (0, r.jsx)(G, {
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
                  content: (0, r.jsx)(F, {
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
