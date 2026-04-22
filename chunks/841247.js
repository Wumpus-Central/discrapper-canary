n.d(t, { TD: () => K, vi: () => V });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(340287),
    o = n(683071),
    u = n(289873),
    c = n(821891),
    d = n(953689),
    p = n(793574),
    m = n(688810),
    h = n(270537),
    A = n(94420),
    _ = n(937008),
    C = n(156312),
    E = n(800471),
    y = n(340034),
    f = n(888751),
    P = n(216641),
    S = n(927578),
    x = n(615396),
    T = n(543767),
    N = n(735164),
    g = n(787455),
    I = n(692440),
    v = n(299301),
    b = n(788868),
    R = n(652215),
    M = n(985018),
    j = n(327105),
    L = n(207715),
    O = n(814304);
function D(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : s.createPortal(t, n);
}
let U = (e, t) => (null == e || t ? null : (0, l.jsx)(o.w, { type: "critical", children: e.message })),
    w = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: L.l, children: (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(u.y, {});
    },
    k = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        i.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    F = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        i.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    G = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
            r = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: l.paymentSourceId,
                currency: l.currency,
                preventFetch: i,
                analyticsLocations: a,
                analyticsLocation: p.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, T.Kq)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, T.Kq)({ ...r, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function B(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: a,
            preventFetch: r,
            fractionalPremiumInfo: s,
            shouldUseUnifiedCheckoutUI: o,
            unifiedSubscriptionDetailsNode: u,
            onRenewalInvoicePreview: c,
        } = e,
        [d, p] = (0, T.C8)({ subscriptionId: t.id, preventFetch: r });
    (0, A.F0)(d),
        i.useEffect(() => {
            c(d);
        }, [c, d]),
        i.useEffect(() => {
            n(p);
        }, [n, p]);
    let m = (0, S.J$)(a.paymentSourceId);
    if (null != d) {
        let e = (0, l.jsx)(I.m0, {
                premiumSubscription: t,
                renewalInvoice: d,
                isUpdate: !0,
                isPrepaidPaymentSource: m,
                fractionalPremiumInfo: s,
                shouldUseUnifiedCheckoutUI: o,
            }),
            n = (0, l.jsx)(I._J, { invoice: d, isPrepaidPaymentSource: m, shouldUseUnifiedCheckoutUI: o });
        return o
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(D, { containerNode: u.current, children: e })] })
            : (0, l.jsxs)(N.Yx, { className: L.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(w, { shouldUseUnifiedCheckoutUI: o });
}
function Y(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: a,
            planGroup: s,
            priceOptions: o,
            fractionalPremiumInfo: u,
            preventFetch: c,
            unifiedSubscriptionDetailsNode: d,
            setUnifiedPlainNoticeText: p,
            setOverrideRenewalDate: h,
            shouldUseUnifiedCheckoutUI: f,
            onRenewalInvoicePreview: P,
        } = e,
        x = (0, A.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: T, premiumBrandRefreshBackgroundClassName: g } = (0, C.P5)(),
        { isGift: b } = (0, _.Pv)(),
        { analyticsLocations: R } = (0, m.Ay)(),
        j = (0, S.Pg)(t, n.id, 1, new Set(s)),
        {
            proratedInvoicePreview: L,
            proratedInvoiceError: B,
            renewalInvoicePreview: Y,
            renewalInvoiceError: W,
        } = G({ premiumSubscription: t, newItems: j, priceOptions: o, preventFetch: c, analyticsLocations: R });
    i.useEffect(() => {
        P(Y);
    }, [P, Y]),
        (0, A.F0)(L);
    let V = B ?? W;
    i.useEffect(() => {
        a(V);
    }, [a, V]);
    let { planSwitchNoticeCopy: H, overrideRenewalDate: K } = i.useMemo(() => {
        let e;
        return (null !== u &&
            null !== L &&
            (e = (0, S._e)(L.subscriptionPeriodEnd, u.unactivatedUnits, u.currentEntitlementEndsAt)),
        null != L && null != Y)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, I.DK)({ proratedInvoice: L, renewalInvoice: Y, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [L, Y, u]);
    if (
        (F(h, { shouldUseUnifiedCheckoutUI: f, overrideRenewalDate: K }),
        k(p, { shouldUseUnifiedCheckoutUI: f, noticeCopy: H }),
        null != V)
    )
        return U(V, f);
    let Z = (0, E.vT)({ isTrial: !1, isGift: b, selectedSkuId: x, startedPaymentFlowWithPaymentSources: T.current }),
        q = (0, E.UB)(Z, L, n);
    if (null == L || null == Y || q) return (0, l.jsx)(w, { shouldUseUnifiedCheckoutUI: f });
    let z = (0, S.J$)(o.paymentSourceId),
        $ = (0, l.jsx)(I.m0, {
            premiumSubscription: t,
            proratedInvoice: L,
            renewalInvoice: Y,
            overrideRenewalDate: K,
            isPrepaidPaymentSource: z,
            fractionalPremiumInfo: u,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: f,
        });
    return f
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(y.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: v.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: L,
                          renewalInvoicePreview: Y,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: z,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(D, { containerNode: d.current, children: $ }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(I.wP, { proratedInvoice: L, renewalInvoice: Y, overrideRenewalDate: K }),
                  (0, l.jsxs)(N.Yx, {
                      className: r()(O.SU, g),
                      children: [
                          (0, l.jsx)(N.Xd, { children: M.intl.string(M.t["2eh+Co"]) }),
                          (0, l.jsx)(I.mT, { invoice: L, newPlan: n, isPrepaidPaymentSource: z }),
                          $,
                      ],
                  }),
              ],
          });
}
function W(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            planGroup: s,
            fractionalPremiumInfo: o,
            priceOptions: u,
            preventFetch: c,
            onInvoiceError: d,
            shouldUseUnifiedCheckoutUI: p,
            setUnifiedPlainNoticeText: _,
            setOverrideRenewalDate: E,
            onRenewalInvoicePreview: y,
            unifiedSubscriptionDetailsNode: P,
        } = e,
        { premiumBrandRefreshBackgroundClassName: x } = (0, C.P5)(),
        { analyticsLocations: v } = (0, m.Ay)(),
        [G, B] = (0, T.Kq)({
            subscriptionId: n.id,
            items: (0, S.Pg)(n, a.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: v,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, A.F0)(G),
        i.useEffect(() => {
            y(G);
        }, [y, G]),
        i.useEffect(() => {
            d(B);
        }, [d, B]);
    let { renewalDate: Y, planSwitchNoticeCopy: W } = i.useMemo(() => {
        if (null == G) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = G.subscriptionPeriodStart;
        return (
            o.fractionalState === b.xc.FP_SUB_PAUSED && (e = o.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: M.intl.format(M.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [G, o.fractionalState, o.endsAt]);
    if (
        (F(E, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: Y }),
        k(_, { shouldUseUnifiedCheckoutUI: p, noticeCopy: W }),
        null != B)
    )
        return U(B, p);
    if (null == G) return (0, l.jsx)(w, { shouldUseUnifiedCheckoutUI: p });
    t = n.type === R.rzx.PREMIUM ? (0, S.Mn)(a.id) : a.name;
    let V = (0, S.J$)(u.paymentSourceId),
        H = (0, l.jsx)("div", { className: L.o, children: W }),
        K = (0, l.jsx)(I.m0, {
            premiumSubscription: n,
            renewalInvoice: G,
            isUpdate: !0,
            isPrepaidPaymentSource: V,
            fractionalPremiumInfo: o,
            overrideRenewalDate: Y,
            shouldUseUnifiedCheckoutUI: p,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (p) {
        let { lineItems: e } = (0, f.Ig)(G, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: V,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.Vm, { label: M.intl.string(j.default.eoXh7B), lineItems: e, currency: G.currency }),
                (0, l.jsx)(D, { containerNode: P.current, children: K }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: O.G3,
        children: [
            H,
            (0, l.jsxs)(N.Yx, {
                className: r()(O.SU, x),
                children: [
                    (0, l.jsx)(N.Xd, { children: M.intl.string(M.t.iqhIp4) }),
                    (0, l.jsx)(N.oR, { label: t, value: (0, S.jh)(a, u, !0) }),
                    (0, l.jsx)(g.A, { invoice: G }),
                    (0, l.jsx)(N.pK, {}),
                    K,
                ],
            }),
        ],
    });
}
function V(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: r,
            planGroup: s,
            priceOptions: o,
            preventFetch: u,
            disabled: p,
            isEEA: h,
            paymentSources: A,
            setHasAcceptedTerms: _,
            onRenewalInvoicePreview: C,
        } = e,
        { analyticsLocations: E } = (0, m.Ay)(),
        y = (0, S.Pg)(n, a.id, 1, new Set(s)),
        {
            proratedInvoicePreview: f,
            proratedInvoiceError: x,
            renewalInvoicePreview: T,
            renewalInvoiceError: N,
        } = G({ premiumSubscription: n, newItems: y, priceOptions: o, preventFetch: u, analyticsLocations: E });
    i.useEffect(() => {
        C(T);
    }, [C, T]);
    let g = (0, P.g)(A, o.paymentSourceId),
        I = N ?? x;
    return (i.useEffect(() => {
        r(I);
    }, [r, I]),
    null != I ||
        (null != T && (t = { amount: T.subtotal, currency: T.currency, tax: T.tax, taxInclusive: T.taxInclusive }),
        null == t))
        ? null
        : (0, l.jsx)(d.A, {
              onChange: _,
              finePrint: (0, l.jsx)(c.A, {
                  subscriptionPlan: a,
                  paymentSourceType: g,
                  basePrice: t,
                  proratedAmount: null != f ? f.total : void 0,
                  currentSubscription: n,
                  planGroup: s,
              }),
              forceShow: !0,
              showPricingLink: a.currency !== R.Yri.USD,
              showWithdrawalWaiver: h,
              disabled: p,
              subscriptionPlan: a,
              currentSubscription: n,
              planGroup: s,
          });
}
function H(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: s,
            onInvoiceError: o,
            shouldUseUnifiedCheckoutUI: u,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: d,
            onRenewalInvoicePreview: h,
        } = e,
        { premiumBrandRefreshBackgroundClassName: _ } = (0, C.P5)(),
        { analyticsLocations: E } = (0, m.Ay)(),
        [y, f] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: E,
            analyticsLocation: p.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [P, x] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: E,
            analyticsLocation: p.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    (0, A.F0)(y),
        i.useEffect(() => {
            h(P);
        }, [h, P]);
    let g = f ?? x;
    i.useEffect(() => {
        o(g);
    }, [o, g]);
    let v = i.useMemo(() => M.intl.string(M.t.spIYou), []);
    if ((k(d, { shouldUseUnifiedCheckoutUI: u, noticeCopy: v }), null != g)) return U(g, u);
    if (null == y || null == P) return (0, l.jsx)(w, { shouldUseUnifiedCheckoutUI: u });
    let b = (0, S.J$)(n.paymentSourceId),
        R = (0, l.jsx)(I.m0, {
            premiumSubscription: t,
            renewalInvoice: P,
            isUpdate: !0,
            isPrepaidPaymentSource: b,
            fractionalPremiumInfo: s,
            shouldUseUnifiedCheckoutUI: u,
        }),
        j = (0, l.jsx)("div", { className: L.o, children: v }),
        F = (0, l.jsx)(I._J, { invoice: y, isPrepaidPaymentSource: b, shouldUseUnifiedCheckoutUI: u });
    return u
        ? (0, l.jsxs)(l.Fragment, { children: [F, (0, l.jsx)(D, { containerNode: c.current, children: R })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  j,
                  (0, l.jsxs)(N.Yx, {
                      className: r()(O.SU, _),
                      children: [(0, l.jsx)(N.Xd, { children: M.intl.string(M.t["2eh+Co"]) }), F, R],
                  }),
              ],
          });
}
function K(e, t, n) {
    let { hasOpenInvoice: i, showResumeSubscriptionView: a, planId: r } = e,
        {
            disabled: s,
            premiumSubscription: o,
            newPlan: u,
            planGroup: c,
            fractionalPremiumInfo: d,
            priceOptions: p,
            onInvoiceError: m,
            onRenewalInvoicePreview: h,
        } = t;
    return i
        ? {
              content: (0, l.jsx)(B, {
                  premiumSubscription: o,
                  onInvoiceError: m,
                  priceOptions: p,
                  preventFetch: !1,
                  onRenewalInvoicePreview: h,
                  fractionalPremiumInfo: d,
                  ...n,
              }),
              isInvoiceBilledImmediately: !0,
              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
          }
        : a
          ? {
                content: (0, l.jsx)(H, {
                    premiumSubscription: o,
                    onInvoiceError: m,
                    priceOptions: p,
                    preventFetch: s,
                    onRenewalInvoicePreview: h,
                    fractionalPremiumInfo: d,
                    ...n,
                }),
                isInvoiceBilledImmediately: !0,
                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
            }
          : (0, x.Ge)(o, r, c)
            ? {
                  content: (0, l.jsx)(Y, {
                      premiumSubscription: o,
                      newPlan: u,
                      onInvoiceError: m,
                      planGroup: c,
                      priceOptions: p,
                      fractionalPremiumInfo: d,
                      preventFetch: s,
                      onRenewalInvoicePreview: h,
                      ...n,
                  }),
                  isInvoiceBilledImmediately: !0,
                  shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
              }
            : {
                  isInvoiceBilledImmediately: !1,
                  shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                  content: (0, l.jsx)(W, {
                      premiumSubscription: o,
                      newPlan: u,
                      planGroup: c,
                      fractionalPremiumInfo: d,
                      priceOptions: p,
                      preventFetch: s,
                      onInvoiceError: m,
                      onRenewalInvoicePreview: h,
                      ...n,
                  }),
              };
}
