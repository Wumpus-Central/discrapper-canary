n.d(t, { $: () => c });
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(692440),
    a = n(400612),
    s = n(818824),
    o = n(936477),
    u = n(316915);
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
            discountOffer: E,
        } = e,
        { immediateDelivery: f } = (0, s.U)(),
        { checkoutReviewButtonLabel: A } = (0, u.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === a.u$.LOADING) return null;
    let { invoicePreview: S } = d,
        y = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? S,
        { renewalPrice: P, multiPeriodDiscountAttributes: I } = (0, i.QM)(y, t, E),
        _ = {
            purchaseButtonText: A,
            totalDue: C ? S.total : 0,
            renewalPrice: P,
            multiPeriodDiscountAttributes: I,
            currency: S.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: (0, r.de)({
                overrideRenewalDate: p,
                currentInvoice: C ? S : void 0,
                renewalInvoice: y,
                isSubscriptionUpdate: null != c,
                fractionalPremiumInfo: m,
            }),
        };
    return (0, l.jsx)(o._P, { variant: { type: h, ..._ }, paymentSourceType: n, immediateDelivery: f });
}
