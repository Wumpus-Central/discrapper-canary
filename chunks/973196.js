r.d(t, { A: () => s, p: () => i });
var n = r(477900),
    u = r(582128);
let c = u.createContext(!1);
function i(e) {
    let { disabled: t, children: r } = e;
    return (0, n.jsx)(c.Provider, { value: t, children: r });
}
function s() {
    return u.useContext(c);
}
