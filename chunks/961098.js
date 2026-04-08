"use strict";
n.d(t, { J: () => l, c: () => u });
var r = n(64700),
    i = n(353640),
    s = n(155718);
let a = (e, t) => {
        if (null == e) return null;
        let n = e.invoiceItems.find((e) => e.subscriptionPlanId === t);
        if (null == n) return null;
        let r = n.discounts.find((e) => e.type === s.iS.SUBSCRIPTION_PLAN);
        return null != r ? r.amount : null;
    },
    o = (function () {
        return (0, i.v)((e) => ({
            discountInvoicePreview: null,
            setDiscountInvoicePreview: (t) => {
                e({ discountInvoicePreview: t ?? null });
            },
            resetStore: () => {
                e({ discountInvoicePreview: null });
            },
        }));
    })(),
    l = (e) => {
        let t = o((e) => e.discountInvoicePreview),
            n = r.useMemo(() => a(t, e), [t, e]);
        return { discountInvoicePreview: t, discountAmountOff: n };
    },
    u = (e, t) => {
        let { setDiscountInvoicePreview: n, resetStore: i } = o.getState();
        r.useEffect(
            () => (
                t ? n(e) : n(null),
                () => {
                    i();
                }
            ),
            [e, n, i, t],
        );
    };
