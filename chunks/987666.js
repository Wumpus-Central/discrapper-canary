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
            overrideRenewalDate: p,
            fractionalPremiumInfo: m,
            isInvoiceBilledImmediately: C = !0,
            unifiedLegalType: h,
            discountOffer: f,
            subscriptionTrial: E,
        } = e,
        { immediateDelivery: S } = (0, s.U)(),
        { checkoutReviewButtonLabel: A } = (0, u.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === a.u$.LOADING) return null;
    let { invoicePreview: y } = d,
        P = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? y,
        I = (0, r.de)({
            overrideRenewalDate: p,
            currentInvoice: C ? y : void 0,
            renewalInvoice: P,
            isSubscriptionUpdate: null != c,
            fractionalPremiumInfo: m,
        }),
        { renewalPrice: g, multiPeriodDiscountAttributes: v } = (0, i.QM)(P, t, {
            discountOffer: f,
            subscriptionTrial: E,
        }),
        T = {
            purchaseButtonText: A,
            totalDue: C ? y.total : 0,
            renewalPrice: g,
            multiPeriodDiscountAttributes: v,
            currency: y.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: I,
        };
    return (0, l.jsx)(o._P, { variant: { type: h, ...T }, paymentSourceType: n, immediateDelivery: S });
}
