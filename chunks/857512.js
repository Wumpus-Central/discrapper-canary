u.d(t, { R9: () => a, uM: () => o });
var n = u(477900),
    r = u(582128),
    s = u(52133),
    c = u(125822);
let i = r.createContext(null);
function o() {
    return r.useContext(i);
}
function a(e) {
    let { newValue: t, children: u } = e,
        a = o(),
        d = (0, c.A)(() => t, t, s.A),
        p = r.useMemo(() => ({ ...a, ...d }), [a, d]);
    return (0, n.jsx)(i.Provider, { value: p, children: u });
}
