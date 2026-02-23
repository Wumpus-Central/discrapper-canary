"use strict";
n.d(t, { U: () => l });
var r = n(64700),
    i = n(997101),
    s = n(311907),
    a = n(615405),
    o = n(156312);
function l() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, o.P5)(),
        n = (0, s.bG)([a.A], () => i.M.EEA_COUNTRIES.has(a.A.ipCountryCodeWithFallback));
    return (
        r.useLayoutEffect(() => {
            t(!n);
        }, [n, t]),
        { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
}
