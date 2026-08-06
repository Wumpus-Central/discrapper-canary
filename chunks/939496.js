n.d(r, { E: () => u, U: () => o });
var t = n(477900),
    l = n(582128),
    i = n(677313),
    a = n(363195);
let s = l.createContext({
    theme: a.A.themePreferenceForSystemTheme((0, i.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function o(e) {
    let { theme: r, themeType: n, primaryColor: i, secondaryColor: a, userId: o, children: u } = e,
        d = l.useMemo(
            () => ({ theme: r, themeType: n, primaryColor: i, secondaryColor: a, userId: o }),
            [r, n, i, a, o],
        );
    return (0, t.jsx)(s.Provider, { value: d, children: u });
}
function u() {
    return l.useContext(s);
}
