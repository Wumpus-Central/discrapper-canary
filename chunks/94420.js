n.d(t, { F0: () => c, Ni: () => o, Tr: () => _, sw: () => u, t4: () => s, y$: () => d });
var r = n(64700),
    a = n(942381),
    i = n(265690);
let [o, l] = (0, n(786300).A)();
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.x;
    return l()(e, t);
}
function d() {
    return (0, i.h)(
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
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
        }),
        a.x,
    );
}
let u = () =>
        s((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
    c = (e) => {
        let t = s((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        });
        r.useEffect(() => {
            t(e);
        }, [e, t]);
    },
    _ = (e) => {
        let t = s((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
        r.useEffect(() => {
            t(e);
        }, [e, t]);
    };
