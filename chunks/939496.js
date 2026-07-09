n.d(r, { E: () => u, U: () => s });
var t = n(627968),
    l = n(64700),
    i = n(677313),
    a = n(363195);
let o = l.createContext({
    theme: a.A.themePreferenceForSystemTheme((0, i.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function s(e) {
    let { theme: r, themeType: n, primaryColor: i, secondaryColor: a, userId: s, children: u } = e,
        d = l.useMemo(
            () => ({ theme: r, themeType: n, primaryColor: i, secondaryColor: a, userId: s }),
            [r, n, i, a, s],
        );
    return (0, t.jsx)(o.Provider, { value: d, children: u });
}
function u() {
    return l.useContext(o);
}
