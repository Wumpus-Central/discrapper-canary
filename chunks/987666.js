n.d(t, { $: () => c });
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(563020),
    a = n(400612),
    s = n(818824),
    o = n(25149),
    u = n(123816);
function c(e) {
    let {
            plan: t,
            paymentSourceType: n,
            activeSubscription: c,
            discriminatedInvoicePreview: d,
            overrideRenewalDate: m,
            fractionalPremiumInfo: p,
            isInvoiceBilledImmediately: h = !0,
            unifiedLegalType: C,
            discountOffer: f,
            subscriptionTrial: E,
        } = e,
        { immediateDelivery: S } = (0, s.U)(),
        { checkoutReviewButtonLabel: g } = (0, u.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === a.u$.LOADING) return null;
    let { invoicePreview: I } = d,
        y = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? I,
        A = (0, r.de)({
            overrideRenewalDate: m,
            currentInvoice: h ? I : void 0,
            renewalInvoice: y,
            isSubscriptionUpdate: null != c,
            fractionalPremiumInfo: p,
        }),
        { renewalPrice: P, multiPeriodDiscountAttributes: x } = (0, i.QM)(y, t, {
            discountOffer: f,
            subscriptionTrial: E,
        }),
        v = {
            purchaseButtonText: g,
            totalDue: h ? I.total : 0,
            renewalPrice: P,
            multiPeriodDiscountAttributes: x,
            currency: I.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: A,
        };
    return (0, l.jsx)(o._P, { variant: { type: C, ...v }, paymentSourceType: n, immediateDelivery: S });
}
