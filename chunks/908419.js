n.d(t, { U: () => o });
var l = n(64700),
    i = n(997101),
    a = n(311907),
    r = n(615405),
    s = n(156312);
function o() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, s.P5)(),
        n = (0, a.bG)([r.A], () => i.M.EEA_COUNTRIES.has(r.A.ipCountryCodeWithFallback));
    return (
        l.useLayoutEffect(() => {
            t(!n);
        }, [n, t]),
        { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
}
