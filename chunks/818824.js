n.d(t, { U: () => u });
var l = n(582128),
    i = n(997101),
    r = n(17928),
    a = n(566980),
    s = n(615405),
    o = n(123816);
function u() {
    let {
            hasAcceptedTerms: e,
            setHasAcceptedTerms: t,
            isImmediateDeliveryCheckboxDisabled: n,
        } = (0, o.t4)((e) => ({
            hasAcceptedTerms: e.hasAcceptedTerms,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            isImmediateDeliveryCheckboxDisabled: e.getExpressCheckoutSubmitting() || e.purchaseState === a.h.PURCHASING,
        })),
        u = (0, r.bG)([s.A], () => i.M.EEA_COUNTRIES.has(s.A.ipCountryCodeWithFallback));
    return (
        l.useLayoutEffect(() => {
            t(!u);
        }, [u, t]),
        { immediateDelivery: u ? { value: e, onChange: t, disabled: n } : void 0 }
    );
}
