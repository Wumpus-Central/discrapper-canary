n.d(t, { U: () => o });
var l = n(64700),
    a = n(997101),
    i = n(17928),
    r = n(615405),
    s = n(156312);
function o() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, s.P5)(),
        n = (0, i.bG)([r.A], () => a.M.EEA_COUNTRIES.has(r.A.ipCountryCodeWithFallback));
    return (
        l.useLayoutEffect(() => {
            t(!n);
        }, [n, t]),
        { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
}
