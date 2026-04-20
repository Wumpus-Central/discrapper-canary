"use strict";
n.d(t, { F0: () => d, Ni: () => a, Tr: () => _, sw: () => c, t4: () => l, y$: () => u });
var r = n(64700),
    i = n(942381),
    s = n(265690);
let [a, o] = (0, n(786300).A)();
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return o()(e, t);
}
function u() {
    return (0, s.h)(
        (e) => ({
            selectedSkuId: void 0,
            selectedPlanId: void 0,
            setSelectedSkuId: (t) => e({ selectedSkuId: t ?? void 0 }),
            setSelectedPlanId: (t) => e({ selectedPlanId: t ?? void 0 }),
            checkoutInvoicePreview: null,
            setCheckoutInvoicePreview: (t) => e({ checkoutInvoicePreview: t ?? null }),
            discountInvoicePreview: null,
            setDiscountInvoicePreview: (t) => {
                e({ discountInvoicePreview: t ?? null });
            },
            renewalInvoicePreview: null,
            setRenewalInvoicePreview: (t) => e({ renewalInvoicePreview: t ?? null }),
            invoiceOrderContext: null,
            invoiceOrderCheckoutSessionId: null,
            invoiceOrderPreviewPaymentSourceId: null,
        }),
        i.x,
    );
}
let c = () =>
        l((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
    d = (e) => {
        let t = l((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        });
        r.useEffect(() => {
            t(e);
        }, [e, t]);
    },
    _ = (e) => {
        let t = l((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
        r.useEffect(() => {
            t(e);
        }, [e, t]);
    };
