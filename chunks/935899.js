n.d(t, { D: () => r });
var l = n(64700),
    i = n(826469),
    a = n(94420);
let r = () => {
    let e = (0, a.t4)((e) => e.checkoutInvoicePreview);
    return l.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(i.A.createFromCheckoutContext);
    }, [e]);
};
