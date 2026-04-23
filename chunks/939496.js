n.d(t, { E: () => s, U: () => u });
var r = n(627968),
    i = n(64700),
    l = n(677313),
    a = n(544028);
let o = i.createContext({
    theme: a.A.themePreferenceForSystemTheme((0, l.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function u(e) {
    let { theme: t, themeType: n, primaryColor: l, secondaryColor: a, userId: u, children: s } = e,
        c = i.useMemo(
            () => ({ theme: t, themeType: n, primaryColor: l, secondaryColor: a, userId: u }),
            [t, n, l, a, u],
        );
    return (0, r.jsx)(o.Provider, { value: c, children: s });
}
let s = () => i.useContext(o);
