n.d(t, { $: () => c });
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(692440),
    a = n(400612),
    s = n(818824),
    o = n(936477),
    u = n(87725);
function c(e) {
    let {
            plan: t,
            paymentSourceType: n,
            activeSubscription: c,
            discriminatedInvoicePreview: d,
            overrideRenewalDate: m,
            fractionalPremiumInfo: p,
            isInvoiceBilledImmediately: C = !0,
            unifiedLegalType: h,
            discountOffer: f,
            subscriptionTrial: E,
        } = e,
        { immediateDelivery: S } = (0, s.U)(),
        { checkoutReviewButtonLabel: y } = (0, u.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === a.u$.LOADING) return null;
    let { invoicePreview: I } = d,
        A = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? I,
        g = (0, r.de)({
            overrideRenewalDate: m,
            currentInvoice: C ? I : void 0,
            renewalInvoice: A,
            isSubscriptionUpdate: null != c,
            fractionalPremiumInfo: p,
        }),
        { renewalPrice: P, multiPeriodDiscountAttributes: v } = (0, i.QM)(A, t, {
            discountOffer: f,
            subscriptionTrial: E,
        }),
        x = {
            purchaseButtonText: y,
            totalDue: C ? I.total : 0,
            renewalPrice: P,
            multiPeriodDiscountAttributes: v,
            currency: I.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: g,
        };
    return (0, l.jsx)(o._P, { variant: { type: h, ...x }, paymentSourceType: n, immediateDelivery: S });
}
