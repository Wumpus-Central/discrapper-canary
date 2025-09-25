n.d(t, {
    Nd: () => a,
    ni: () => s,
});
var r = n(951288),
    l = n(647438);
let i = l.createContext(null);
function a() {
    return l.useContext(i);
}
function s(e) {
    let { tab: t, children: n } = e,
        a = l.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(i.Provider, {
        value: a,
        children: n,
    });
}
