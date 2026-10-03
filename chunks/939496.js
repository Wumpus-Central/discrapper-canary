t.d(r, { E: () => d, U: () => s });
var n = t(477900),
    l = t(582128),
    i = t(677313),
    u = t(363195);
let o = l.createContext({
    theme: u.A.themePreferenceForSystemTheme((0, i.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function s(e) {
    let { theme: r, themeType: t, primaryColor: i, secondaryColor: u, userId: s, children: d } = e,
        a = l.useMemo(
            () => ({ theme: r, themeType: t, primaryColor: i, secondaryColor: u, userId: s }),
            [r, t, i, u, s],
        );
    return (0, n.jsx)(o.Provider, { value: a, children: d });
}
function d() {
    return l.useContext(o);
}
