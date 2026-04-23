"use strict";
n.d(t, { U: () => l });
var i = n(64700),
    r = n(997101),
    s = n(17928),
    a = n(615405),
    o = n(156312);
function l() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, o.P5)(),
        n = (0, s.bG)([a.A], () => r.M.EEA_COUNTRIES.has(a.A.ipCountryCodeWithFallback));
    return (
        i.useLayoutEffect(() => {
            t(!n);
        }, [n, t]),
        { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
}
