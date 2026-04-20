"use strict";
n.d(t, { F0: () => f, PM: () => d, Tr: () => p, sw: () => _, t4: () => u });
var r = n(627968),
    i = n(64700),
    s = n(942381),
    a = n(265690);
let [o, l] = (0, n(786300).A)();
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x;
    return l()(e, t);
}
function c() {
    return (0, a.h)(
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
        }),
        s.x,
    );
}
function d(e) {
    let { children: t } = e,
        [n] = i.useState(c);
    return (0, r.jsx)(o, { value: n, children: t });
}
let _ = () =>
        u((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
    f = (e) => {
        let t = u((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        });
        i.useEffect(() => {
            t(e);
        }, [e, t]);
    },
    p = (e) => {
        let t = u((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
        i.useEffect(() => {
            t(e);
        }, [e, t]);
    };
