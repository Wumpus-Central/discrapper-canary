n.d(t, { U: () => o });
var l = n(64700),
    a = n(997101),
    i = n(17928),
    r = n(94420),
    s = n(615405);
function o() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, r.t4)((e) => ({
            hasAcceptedTerms: e.hasAcceptedTerms,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        n = (0, i.bG)([s.A], () => a.M.EEA_COUNTRIES.has(s.A.ipCountryCodeWithFallback));
    return (
        l.useLayoutEffect(() => {
            t(!n);
        }, [n, t]),
        { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
}
