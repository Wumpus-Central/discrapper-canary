n.d(t, { $: () => c });
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(563020),
    a = n(400612),
    s = n(818824),
    o = n(25149),
    u = n(281044);
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
        { checkoutReviewButtonLabel: g, isExpressCheckoutVisibleInFooter: I } = (0, u.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
            isExpressCheckoutVisibleInFooter: e.getExpressCheckoutVisibilityState().isExpressCheckoutVisibleInFooter,
        }));
    if (d.type === a.u$.LOADING) return null;
    let { invoicePreview: A } = d,
        y = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? A,
        x = (0, r.de)({
            overrideRenewalDate: m,
            currentInvoice: C ? A : void 0,
            renewalInvoice: y,
            isSubscriptionUpdate: null != c,
            fractionalPremiumInfo: p,
        }),
        { renewalPrice: P, multiPeriodDiscountAttributes: v } = (0, i.QM)(y, t, {
            discountOffer: f,
            subscriptionTrial: E,
        }),
        _ = {
            purchaseButtonText: g,
            totalDue: C ? A.total : 0,
            renewalPrice: P,
            multiPeriodDiscountAttributes: v,
            currency: A.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: x,
        };
    return (0, l.jsx)(o._P, {
        variant: { type: h, ..._ },
        paymentSourceType: n,
        immediateDelivery: S,
        isExpressCheckout: I,
    });
}
