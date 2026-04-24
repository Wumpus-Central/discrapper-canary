n.d(t, { D: () => r });
var l = n(64700),
    a = n(826469),
    i = n(94420);
let r = () => {
    let e = (0, i.t4)((e) => e.checkoutInvoicePreview);
    return l.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(a.A.createFromCheckoutContext);
    }, [e]);
};
