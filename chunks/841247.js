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
            onRenewalInvoicePreview: u,
        } = e,
        { setInvoicePreview: c } = (0, p.P5)(),
        [d, _] = (0, I.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        c(d);
    }, [c, d]),
        i.useEffect(() => {
            u(d);
        }, [u, d]),
        i.useEffect(() => {
            n(_);
        }, [n, _]);
    let f = (0, g.J$)(s.paymentSourceId);
    if (null != d) {
        let e = (0, r.jsx)(y.m0, {
                premiumSubscription: t,
                renewalInvoice: d,
                isUpdate: !0,
                isPrepaidPaymentSource: f,
                shouldUseUnifiedCheckoutUI: o,
            }),
            n = (0, r.jsx)(y._J, { invoice: d, isPrepaidPaymentSource: f, shouldUseUnifiedCheckoutUI: o });
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
            onRenewalInvoicePreview: I,
        } = e,
        {
            selectedSkuId: S,
            startedPaymentFlowWithPaymentSourcesRef: N,
            setInvoicePreview: C,
            premiumBrandRefreshBackgroundClassName: O,
        } = (0, p.P5)(),
        { isGift: P } = (0, f.Pv)(),
        { analyticsLocations: k } = (0, _.Ay)(),
        U = (0, g.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: G,
            proratedInvoiceError: F,
            renewalInvoicePreview: V,
            renewalInvoiceError: B,
        } = x({ premiumSubscription: t, newItems: U, priceOptions: l, preventFetch: c, analyticsLocations: k });
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
        return (null !== u && null !== G && (e = (0, g._e)(G.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null != G && null != V)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, y.DK)({ proratedInvoice: G, renewalInvoice: V, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [G, V, u]);
    if ((M(E, { shouldUseUnifiedCheckoutUI: A, noticeCopy: j }), null != H)) return L(H, A);
    let W = (0, h.vT)({ isTrial: !1, isGift: P, selectedSkuId: S, startedPaymentFlowWithPaymentSources: N.current }),
        K = (0, h.UB)(W, G, n);
    if (null == G || null == V || K) return (0, r.jsx)(w, { shouldUseUnifiedCheckoutUI: A });
    let $ = (0, g.J$)(l.paymentSourceId),
        z = (0, r.jsx)(y.m0, {
            premiumSubscription: t,
            proratedInvoice: G,
            renewalInvoice: V,
            overrideRenewalDate: Y,
            isUpdate: !0,
            isPrepaidPaymentSource: $,
            shouldUseUnifiedCheckoutUI: A,
        });
    return A
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: v.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: G,
                          renewalInvoicePreview: V,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: $,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(D, { containerNode: d.current, children: z }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(y.wP, { proratedInvoice: G, renewalInvoice: V, overrideRenewalDate: Y }),
                  (0, r.jsxs)(T.Yx, {
                      className: a()(b.SU, O),
                      children: [
                          (0, r.jsx)(T.Xd, { children: R.intl.string(R.t["2eh+Co"]) }),
                          (0, r.jsx)(y.mT, { invoice: G, newPlan: n, isPrepaidPaymentSource: $ }),
                          z,
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
            onRenewalInvoicePreview: I,
        } = e,
        { analyticsLocations: T } = (0, _.Ay)(),
        S = (0, g.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: v,
            renewalInvoicePreview: N,
            renewalInvoiceError: R,
        } = x({ premiumSubscription: n, newItems: S, priceOptions: l, preventFetch: d, analyticsLocations: T });
    i.useEffect(() => {
        I(N);
    }, [I, N]);
    let O = (0, E.g)(h, l.paymentSourceId),
        b = R ?? v;
    return (i.useEffect(() => {
        a(b);
    }, [a, b]),
    null != b)
        ? L(b, A)
        : (null != N && (t = { amount: N.subtotal, currency: N.currency, tax: N.tax, taxInclusive: N.taxInclusive }),
            null == t)
          ? null
          : (0, r.jsx)(c.A, {
                onChange: m,
                finePrint: (0, r.jsx)(u.A, {
                    subscriptionPlan: s,
                    paymentSourceType: O,
                    basePrice: t,
                    proratedAmount: null != y ? y.total : void 0,
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
            onRenewalInvoicePreview: f,
        } = e,
        { setInvoicePreview: h, premiumBrandRefreshBackgroundClassName: m } = (0, p.P5)(),
        { analyticsLocations: E } = (0, _.Ay)(),
        [A, S] = (0, I.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: E,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [v, N] = (0, I.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: E,
            analyticsLocation: d.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        h(A);
    }, [h, A]),
        i.useEffect(() => {
            f(v);
        }, [f, v]);
    let C = S ?? N;
    i.useEffect(() => {
        o(C);
    }, [o, C]);
    let x = i.useMemo(() => R.intl.string(R.t.spIYou), []);
    if ((M(c, { shouldUseUnifiedCheckoutUI: l, noticeCopy: x }), null != C)) return L(C, l);
    if (null == A || null == v) return (0, r.jsx)(w, { shouldUseUnifiedCheckoutUI: l });
    let P = (0, g.J$)(n.paymentSourceId),
        k = (0, r.jsx)(y.m0, {
            premiumSubscription: t,
            renewalInvoice: v,
            isUpdate: !0,
            isPrepaidPaymentSource: P,
            shouldUseUnifiedCheckoutUI: l,
        }),
        U = (0, r.jsx)("div", { className: O.o, children: x }),
        G = (0, r.jsx)(y._J, { invoice: A, isPrepaidPaymentSource: P, shouldUseUnifiedCheckoutUI: l });
    return l
        ? (0, r.jsxs)(r.Fragment, { children: [G, (0, r.jsx)(D, { containerNode: u.current, children: k })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  U,
                  (0, r.jsxs)(T.Yx, {
                      className: a()(b.SU, m),
                      children: [(0, r.jsx)(T.Xd, { children: R.intl.string(R.t["2eh+Co"]) }), G, k],
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
            onRenewalInvoicePreview: m,
        } = e,
        { setInvoicePreview: E, premiumBrandRefreshBackgroundClassName: A } = (0, p.P5)(),
        { analyticsLocations: v } = (0, _.Ay)(),
        [D, x] = (0, I.Kq)({
            subscriptionId: n.id,
            items: (0, g.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: v,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    i.useEffect(() => {
        E(D);
    }, [E, D]),
        i.useEffect(() => {
            m(D);
        }, [m, D]),
        i.useEffect(() => {
            d(x);
        }, [d, x]);
    let { renewalDate: P, planSwitchNoticeCopy: k } = i.useMemo(() => {
        if (null == D) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = D.subscriptionPeriodStart;
        return (
            l.fractionalState === N.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: R.intl.format(R.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [D, l.fractionalState, l.endsAt]);
    if ((M(h, { shouldUseUnifiedCheckoutUI: f, noticeCopy: k }), null != x)) return L(x, f);
    if (null == D) return (0, r.jsx)(w, { shouldUseUnifiedCheckoutUI: f });
    t = n.type === C.rzx.PREMIUM ? (0, g.Mn)(s.id) : s.name;
    let U = (0, g.J$)(u.paymentSourceId),
        G = (0, r.jsx)("div", { className: O.o, children: k }),
        F = (0, r.jsx)(y.m0, {
            premiumSubscription: n,
            renewalInvoice: D,
            isUpdate: !0,
            isPrepaidPaymentSource: U,
            shouldUseUnifiedCheckoutUI: f,
            unifiedCheckoutDefaultExpanded: !0,
            overrideRenewalDate: P,
        });
    return f
        ? F
        : (0, r.jsxs)("div", {
              className: b.G3,
              children: [
                  G,
                  (0, r.jsxs)(T.Yx, {
                      className: a()(b.SU, A),
                      children: [
                          (0, r.jsx)(T.Xd, { children: R.intl.string(R.t.iqhIp4) }),
                          (0, r.jsx)(T.oR, { label: t, value: (0, g.jh)(s, u, !0) }),
                          (0, r.jsx)(S.A, { invoice: D }),
                          (0, r.jsx)(T.pK, {}),
                          F,
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
            onRenewalInvoicePreview: p,
        } = t;
    return i
        ? {
              content: (0, r.jsx)(P, {
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
                content: (0, r.jsx)(G, {
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
                      onRenewalInvoicePreview: p,
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
                      onRenewalInvoicePreview: p,
                      ...n,
                  }),
              };
}
