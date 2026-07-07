n.d(t, { K: () => f });
var l = n(627968),
    i = n(64700),
    r = n(683071),
    a = n(289873),
    s = n(262427),
    o = n(38785),
    u = n(944355),
    c = n(531506),
    d = n(299301),
    p = n(580630),
    m = n(134638),
    C = n(888751),
    h = n(826161),
    E = n(375708),
    A = n(327105);
function f(e) {
    let {
            plan: t,
            renewalInvoicePreview: n,
            subscriptionTrial: r,
            shouldShowFractionalPremiumBanner: a,
            fractionalPremiumInfo: u,
            paymentMethodContent: c,
            legalContent: d,
        } = e,
        [m, C] = i.useMemo(
            () =>
                null == n
                    ? [E.intl.string(A.default.R0cZsM), void 0]
                    : [E.intl.string(A.default.R0cZsM), (0, p.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, l.jsx)(o.Ed, {});
    let f = a
            ? [{ key: "fractional-premium-notice", directContent: (0, l.jsx)(S, { fractionalPremiumInfo: u }) }]
            : null,
        T = (0, l.jsx)(y, { plan: t, renewalInvoicePreview: n }),
        I = (0, l.jsx)(P, { renewalInvoicePreview: n, subscriptionTrial: r });
    return (0, l.jsx)(o.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: f,
        purchaseItemContent: T,
        subscriptionDetailsContent: I,
        invoiceSummaryContent: null,
        paymentMethodContent: c,
        legalContent: d,
        invoiceTotalDueLabel: m,
        invoiceTotalDueValue: C,
        promotionalNoticeContent: null != r && (0, l.jsx)(s.J, { text: (0, h.i)(r, t) }),
    });
}
function S(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, c.NQ)({ fractionalPremiumInfo: t, variant: c.uA.TRIAL });
    return null != n && "" !== n ? (0, l.jsx)(r.w, { type: "info", children: n }) : null;
}
function y(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, l.jsx)(m._, {
        type: d.N$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function P(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, l.jsx)(a.y, {});
    let i = (0, C.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, l.jsx)(u._D, { ...i, defaultExpanded: !0 });
}
