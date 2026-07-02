"use strict";
n.d(t, { K: () => g });
var i = n(627968),
    r = n(64700),
    s = n(683071),
    a = n(289873),
    o = n(262427),
    l = n(38785),
    u = n(872452),
    d = n(531506),
    c = n(299301),
    _ = n(580630),
    h = n(134638),
    f = n(888751),
    E = n(826161),
    p = n(375708),
    m = n(327105);
function g(e) {
    let {
            plan: t,
            renewalInvoicePreview: n,
            subscriptionTrial: s,
            shouldShowFractionalPremiumBanner: a,
            fractionalPremiumInfo: u,
            paymentMethodContent: d,
            legalContent: c,
        } = e,
        [h, f] = r.useMemo(
            () =>
                null == n
                    ? [p.intl.string(m.default.R0cZsM), void 0]
                    : [p.intl.string(m.default.R0cZsM), (0, _.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, i.jsx)(l.E, {});
    let g = a
            ? [{ key: "fractional-premium-notice", directContent: (0, i.jsx)(A, { fractionalPremiumInfo: u }) }]
            : null,
        S = (0, i.jsx)(I, { plan: t, renewalInvoicePreview: n }),
        N = (0, i.jsx)(T, { renewalInvoicePreview: n, subscriptionTrial: s });
    return (0, i.jsx)(l.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: g,
        purchaseItemContent: S,
        subscriptionDetailsContent: N,
        invoiceSummaryContent: null,
        paymentMethodContent: d,
        legalContent: c,
        invoiceTotalDueLabel: h,
        invoiceTotalDueValue: f,
        promotionalNoticeContent: null != s && (0, i.jsx)(o.J, { text: (0, E.i)(s, t) }),
    });
}
function A(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, d.NQ)({ fractionalPremiumInfo: t, variant: d.uA.TRIAL });
    return null != n && "" !== n ? (0, i.jsx)(s.w, { type: "info", children: n }) : null;
}
function I(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, i.jsx)(h._, {
        type: c.N$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function T(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, i.jsx)(a.y, {});
    let r = (0, f.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, i.jsx)(u._D, { ...r, defaultExpanded: !0 });
}
