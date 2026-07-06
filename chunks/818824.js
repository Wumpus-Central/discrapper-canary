n.d(t, { U: () => o });
var l = n(64700),
    i = n(997101),
    r = n(17928),
    a = n(615405),
    s = n(650170);
function o() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, s.t4)((e) => ({
            hasAcceptedTerms: e.hasAcceptedTerms,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        n = (0, r.bG)([a.A], () => i.M.EEA_COUNTRIES.has(a.A.ipCountryCodeWithFallback));
    return (
        l.useLayoutEffect(() => {
            t(!n);
        }, [n, t]),
        { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
}
