n.d(t, {
    Nd: () => o,
    ni: () => s,
});
var r = n(951288),
    i = n(647438);
let a = i.createContext(null);
function o() {
    return i.useContext(a);
}
function s(e) {
    let { tab: t, children: n } = e,
        o = i.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: n,
    });
}
