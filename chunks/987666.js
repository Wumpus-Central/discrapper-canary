var l = n(477900);
n(582128);
var i = n(888751),
    r = n(563020),
    a = n(860841),
    s = n(818824),
    o = n(677959),
    u = n(516106);
n.d(
    t,
    {},
    {
        $: function (e) {
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
                { checkoutReviewButtonLabel: g, isExpressCheckoutVisibleInFooter: I } = (0, u.t4)((e) => ({
                    checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
                    isExpressCheckoutVisibleInFooter:
                        e.getExpressCheckoutVisibilityState().isExpressCheckoutVisibleInFooter,
                }));
            if (d.type === a.u$.LOADING) return null;
            let { invoicePreview: y } = d,
                A = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? y,
                P = (0, r.de)({
                    overrideRenewalDate: m,
                    currentInvoice: h ? y : void 0,
                    renewalInvoice: A,
                    isSubscriptionUpdate: null != c,
                    fractionalPremiumInfo: p,
                }),
                { renewalPrice: v, multiPeriodDiscountAttributes: x } = (0, i.QM)(A, t, {
                    discountOffer: f,
                    subscriptionTrial: E,
                }),
                _ = {
                    purchaseButtonText: g,
                    totalDue: h ? y.total : 0,
                    renewalPrice: v,
                    multiPeriodDiscountAttributes: x,
                    currency: y.currency,
                    interval: t.interval,
                    intervalCount: t.intervalCount,
                    startDate: P,
                };
            return (0, l.jsx)(o._P, {
                variant: { type: C, ..._ },
                paymentSourceType: n,
                immediateDelivery: S,
                isExpressCheckout: I,
            });
        },
    },
);
