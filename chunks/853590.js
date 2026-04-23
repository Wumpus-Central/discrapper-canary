"use strict";
n.d(t, { C: () => u, Y: () => c });
var r = n(909144),
    i = n(314739),
    s = n(64700);
let a = s.createContext(null);
function o(e) {
    let { locale: t, children: n } = e,
        i = s.useMemo(() => ({ locale: t, direction: (0, r.V)(t) ? "rtl" : "ltr" }), [t]);
    return s.createElement(a.Provider, { value: i }, n);
}
function l(e) {
    let { children: t } = e,
        n = (0, i.D)();
    return s.createElement(a.Provider, { value: n }, t);
}
function u(e) {
    let { locale: t, children: n } = e;
    return t ? s.createElement(o, { locale: t, children: n }) : s.createElement(l, { children: n });
}
function c() {
    let e = (0, i.D)();
    return (0, s.useContext)(a) || e;
}
