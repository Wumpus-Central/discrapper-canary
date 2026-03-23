"use strict";
n.d(t, { TD: () => B, vi: () => G });
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
    b = n(314654),
    D = n(982571);
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
    P = (e) => {
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
function k(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: s,
            preventFetch: a,
            shouldUseUnifiedCheckoutUI: o,
            unifiedSubscriptionDetailsNode: l,
            onRenewalInvoicePreview: u,
        } = e,
        { setInvoicePreview: c } = (0, p.P5)(),
        [d, _] = (0, T.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        c(d);
    }, [c, d]),
        i.useEffect(() => {
            u(d);
        }, [u, d]),
        i.useEffect(() => {
            n(_);
        }, [n, _]);
    let f = (0, A.J$)(s.paymentSourceId);
    if (null != d) {
        let e = (0, r.jsx)(v.m0, {
                premiumSubscription: t,
                renewalInvoice: d,
                isUpdate: !0,
                isPrepaidPaymentSource: f,
                shouldUseUnifiedCheckoutUI: o,
            }),
            n = (0, r.jsx)(v._J, { invoice: d, isPrepaidPaymentSource: f, shouldUseUnifiedCheckoutUI: o });
        return o
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(L, { containerNode: l.current, children: e })] })
            : (0, r.jsxs)(S.Yx, { className: b.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: o });
}
function U(e) {
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
            shouldUseUnifiedCheckoutUI: g,
            onRenewalInvoicePreview: I,
        } = e,
        {
            selectedSkuId: T,
            startedPaymentFlowWithPaymentSourcesRef: y,
            setInvoicePreview: C,
            premiumBrandRefreshBackgroundClassName: R,
        } = (0, p.P5)(),
        { isGift: b } = (0, f.Pv)(),
        { analyticsLocations: k } = (0, _.Ay)(),
        U = (0, A.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: G,
            proratedInvoiceError: F,
            renewalInvoicePreview: V,
            renewalInvoiceError: B,
        } = P({ premiumSubscription: t, newItems: U, priceOptions: l, preventFetch: c, analyticsLocations: k });
    i.useEffect(() => {
        I(V);
    }, [I, V]),
        i.useEffect(() => {
            C(G);
        }, [C, G]);
    let H = F ?? B;
    i.useEffect(() => {
        s(H);
    }, [s, H]);
    let { planSwitchNoticeCopy: j, overrideRenewalDate: Y } = i.useMemo(() => {
        let e;
        return (null !== u && null !== G && (e = (0, A._e)(G.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null != G && null != V)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, v.DK)({ proratedInvoice: G, renewalInvoice: V, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [G, V, u]);
    if ((x(E, { shouldUseUnifiedCheckoutUI: g, noticeCopy: j }), null != H)) return w(H, g);
    let W = (0, h.vT)({ isTrial: !1, isGift: b, selectedSkuId: T, startedPaymentFlowWithPaymentSources: y.current }),
        K = (0, h.UB)(W, G, n);
    if (null == G || null == V || K) return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: g });
    let $ = (0, A.J$)(l.paymentSourceId),
        z = (0, r.jsx)(v.m0, {
            premiumSubscription: t,
            proratedInvoice: G,
            renewalInvoice: V,
            overrideRenewalDate: Y,
            isUpdate: !0,
            isPrepaidPaymentSource: $,
            shouldUseUnifiedCheckoutUI: g,
        });
    return g
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: N.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: G,
                          renewalInvoicePreview: V,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: $,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(L, { containerNode: d.current, children: z }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(v.wP, { proratedInvoice: G, renewalInvoice: V, overrideRenewalDate: Y }),
                  (0, r.jsxs)(S.Yx, {
                      className: a()(D.SU, R),
                      children: [
                          (0, r.jsx)(S.Xd, { children: O.intl.string(O.t["2eh+Co"]) }),
                          (0, r.jsx)(v.mT, { invoice: G, newPlan: n, isPrepaidPaymentSource: $ }),
                          z,
                      ],
                  }),
              ],
          });
}
function G(e) {
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
        } = P({ premiumSubscription: n, newItems: T, priceOptions: l, preventFetch: d, analyticsLocations: I });
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
function F(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            onInvoiceError: o,
            shouldUseUnifiedCheckoutUI: l,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            onRenewalInvoicePreview: f,
        } = e,
        { setInvoicePreview: h, premiumBrandRefreshBackgroundClassName: m } = (0, p.P5)(),
        { analyticsLocations: E } = (0, _.Ay)(),
        [g, I] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: E,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [y, N] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: E,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        h(g);
    }, [h, g]),
        i.useEffect(() => {
            f(y);
        }, [f, y]);
    let C = I ?? N;
    i.useEffect(() => {
        o(C);
    }, [o, C]);
    let R = i.useMemo(() => O.intl.string(O.t.spIYou), []);
    if ((x(c, { shouldUseUnifiedCheckoutUI: l, noticeCopy: R }), null != C)) return w(C, l);
    if (null == g || null == y) return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: l });
    let P = (0, A.J$)(n.paymentSourceId),
        k = (0, r.jsx)(v.m0, {
            premiumSubscription: t,
            renewalInvoice: y,
            isUpdate: !0,
            isPrepaidPaymentSource: P,
            shouldUseUnifiedCheckoutUI: l,
        }),
        U = (0, r.jsx)("div", { className: b.o, children: R }),
        G = (0, r.jsx)(v._J, { invoice: g, isPrepaidPaymentSource: P, shouldUseUnifiedCheckoutUI: l });
    return l
        ? (0, r.jsxs)(r.Fragment, { children: [G, (0, r.jsx)(L, { containerNode: u.current, children: k })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  U,
                  (0, r.jsxs)(S.Yx, {
                      className: a()(D.SU, m),
                      children: [(0, r.jsx)(S.Xd, { children: O.intl.string(O.t["2eh+Co"]) }), G, k],
                  }),
              ],
          });
}
function V(e) {
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
            onRenewalInvoicePreview: g,
            unifiedSubscriptionDetailsNode: I,
        } = e,
        { setInvoicePreview: N, premiumBrandRefreshBackgroundClassName: P } = (0, p.P5)(),
        { analyticsLocations: k } = (0, _.Ay)(),
        [U, G] = (0, T.Kq)({
            subscriptionId: n.id,
            items: (0, A.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: k,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    i.useEffect(() => {
        N(U);
    }, [N, U]),
        i.useEffect(() => {
            g(U);
        }, [g, U]),
        i.useEffect(() => {
            d(G);
        }, [d, G]);
    let { renewalDate: F, planSwitchNoticeCopy: V } = i.useMemo(() => {
        if (null == U) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = U.subscriptionPeriodStart;
        return (
            l.fractionalState === C.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: O.intl.format(O.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [U, l.fractionalState, l.endsAt]);
    if ((x(h, { shouldUseUnifiedCheckoutUI: f, noticeCopy: V }), null != G)) return w(G, f);
    if (null == U) return (0, r.jsx)(M, { shouldUseUnifiedCheckoutUI: f });
    t = n.type === R.rzx.PREMIUM ? (0, A.Mn)(s.id) : s.name;
    let B = (0, A.J$)(u.paymentSourceId),
        H = (0, r.jsx)("div", { className: b.o, children: V }),
        j = (0, r.jsx)(v.m0, {
            premiumSubscription: n,
            renewalInvoice: U,
            isUpdate: !0,
            isPrepaidPaymentSource: B,
            shouldUseUnifiedCheckoutUI: f,
            unifiedCheckoutDefaultExpanded: !0,
            overrideRenewalDate: F,
        });
    if (f) {
        let { lineItems: e } = (0, E.Ig)(U, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: B,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m.ID, { lineItems: e, currency: U.currency }),
                (0, r.jsx)(L, { containerNode: I.current, children: j }),
            ],
        });
    }
    return (0, r.jsxs)("div", {
        className: D.G3,
        children: [
            H,
            (0, r.jsxs)(S.Yx, {
                className: a()(D.SU, P),
                children: [
                    (0, r.jsx)(S.Xd, { children: O.intl.string(O.t.iqhIp4) }),
                    (0, r.jsx)(S.oR, { label: t, value: (0, A.jh)(s, u, !0) }),
                    (0, r.jsx)(y.A, { invoice: U }),
                    (0, r.jsx)(S.pK, {}),
                    j,
                ],
            }),
        ],
    });
}
function B(e, t, n) {
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
              content: (0, r.jsx)(k, {
                  premiumSubscription: l,
                  onInvoiceError: f,
                  priceOptions: _,
                  preventFetch: !1,
                  onRenewalInvoicePreview: p,
                  ...n,
              }),
              isInvoiceBilledImmediately: !0,
              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
          }
        : s
          ? {
                content: (0, r.jsx)(F, {
                    premiumSubscription: l,
                    onInvoiceError: f,
                    priceOptions: _,
                    preventFetch: o,
                    onRenewalInvoicePreview: p,
                    ...n,
                }),
                isInvoiceBilledImmediately: !0,
                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
            }
          : (0, I.Ge)(l, a, c)
            ? {
                  content: (0, r.jsx)(U, {
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
                  content: (0, r.jsx)(V, {
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
