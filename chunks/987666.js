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
            overrideRenewalDate: p,
            fractionalPremiumInfo: m,
            isInvoiceBilledImmediately: h = !0,
            unifiedLegalType: C,
            discountOffer: f,
            subscriptionTrial: S,
        } = e,
        { immediateDelivery: E } = (0, s.U)(),
        { checkoutReviewButtonLabel: I } = (0, u.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === a.u$.LOADING) return null;
    let { invoicePreview: g } = d,
        y = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? g,
        A = (0, r.de)({
            overrideRenewalDate: p,
            currentInvoice: h ? g : void 0,
            renewalInvoice: y,
            isSubscriptionUpdate: null != c,
            fractionalPremiumInfo: m,
        }),
        { renewalPrice: P, multiPeriodDiscountAttributes: v } = (0, i.QM)(y, t, {
            discountOffer: f,
            subscriptionTrial: S,
        }),
        x = {
            purchaseButtonText: I,
            totalDue: h ? g.total : 0,
            renewalPrice: P,
            multiPeriodDiscountAttributes: v,
            currency: g.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: A,
        };
    return (0, l.jsx)(o._P, { variant: { type: C, ...x }, paymentSourceType: n, immediateDelivery: E });
}
