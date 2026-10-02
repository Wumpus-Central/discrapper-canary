n.d(t, { $: () => c });
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(898627),
    a = n(400612),
    s = n(818824),
    o = n(25149),
    u = n(661899);
function c(e) {
    let {
            plan: t,
            paymentSourceType: n,
            activeSubscription: c,
            discriminatedInvoicePreview: d,
            overrideRenewalDate: p,
            fractionalPremiumInfo: m,
            isInvoiceBilledImmediately: h = !0,
            unifiedLegalType: C,
            discountOffer: f,
            subscriptionTrial: S,
        } = e,
        { immediateDelivery: E } = (0, s.U)(),
        { checkoutReviewButtonLabel: y } = (0, u.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === a.u$.LOADING) return null;
    let { invoicePreview: A } = d,
        I = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? A,
        g = (0, r.de)({
            overrideRenewalDate: p,
            currentInvoice: h ? A : void 0,
            renewalInvoice: I,
            isSubscriptionUpdate: null != c,
            fractionalPremiumInfo: m,
        }),
        { renewalPrice: P, multiPeriodDiscountAttributes: v } = (0, i.QM)(I, t, {
            discountOffer: f,
            subscriptionTrial: S,
        }),
        x = {
            purchaseButtonText: y,
            totalDue: h ? A.total : 0,
            renewalPrice: P,
            multiPeriodDiscountAttributes: v,
            currency: A.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: g,
        };
    return (0, l.jsx)(o._P, { variant: { type: C, ...x }, paymentSourceType: n, immediateDelivery: E });
}
