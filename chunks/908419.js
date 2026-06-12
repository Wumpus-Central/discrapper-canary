n.d(t, { U: () => o });
var l = n(64700),
    r = n(997101),
    i = n(17928),
    a = n(211159),
    s = n(615405);
function o() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, a.t4)((e) => ({
            hasAcceptedTerms: e.hasAcceptedTerms,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        n = (0, i.bG)([s.A], () => r.M.EEA_COUNTRIES.has(s.A.ipCountryCodeWithFallback));
    return (
        l.useLayoutEffect(() => {
            t(!n);
        }, [n, t]),
        { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
}
