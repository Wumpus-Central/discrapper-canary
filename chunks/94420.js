"use strict";
n.d(t, { Ni: () => a, t4: () => l, y$: () => _ });
var i = n(942381),
    r = n(265690),
    s = n(566980);
let [a, o] = (0, n(786300).A)();
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return o()(e, t);
}
function _() {
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
            standaloneInvoiceOrderContext: null,
            standaloneInvoiceOrderCheckoutSessionId: null,
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            purchaseState: s.h.WAITING,
            setPurchaseState: (t) => e({ purchaseState: t }),
        }),
        i.x,
    );
}
