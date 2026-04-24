n.d(t, { Ni: () => i, t4: () => l, y$: () => u });
var o = n(942381),
    r = n(265690);
let [i, a] = (0, n(786300).A)();
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.x;
    return a()(e, t);
}
function u() {
    return (0, r.h)(
        (e) => ({
            selectedSkuId: void 0,
            selectedPlanId: void 0,
            setSelectedSkuId: (t) => e({ selectedSkuId: t ?? void 0 }),
            setSelectedPlanId: (t) => e({ selectedPlanId: t ?? void 0 }),
            checkoutInvoicePreview: null,
            setCheckoutInvoicePreview: (t, n) =>
                e({ checkoutInvoicePreview: t ?? null, checkoutInvoiceError: n ?? null }),
            discountInvoicePreview: null,
            setDiscountInvoicePreview: (t) => {
                e({ discountInvoicePreview: t ?? null });
            },
            renewalInvoicePreview: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            checkoutInvoiceError: null,
            renewalInvoiceError: null,
            invoiceOrderContext: null,
            invoiceOrderCheckoutSessionId: null,
            invoiceOrderPreviewPaymentSourceId: null,
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
        }),
        o.x,
    );
}
