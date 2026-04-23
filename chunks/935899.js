"use strict";
n.d(t, { D: () => a });
var i = n(64700),
    r = n(826469),
    s = n(94420);
let a = () => {
    let e = (0, s.t4)((e) => e.checkoutInvoicePreview);
    return i.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(r.A.createFromCheckoutContext);
    }, [e]);
};
