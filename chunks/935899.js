"use strict";
n.d(t, { D: () => a });
var r = n(64700),
    i = n(826469),
    s = n(94420);
let a = () => {
    let e = (0, s.t4)((e) => e.checkoutInvoicePreview);
    return r.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(i.A.createFromCheckoutContext);
    }, [e]);
};
