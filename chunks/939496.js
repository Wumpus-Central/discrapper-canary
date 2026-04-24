n.d(t, { E: () => c, U: () => s });
var i = n(627968),
    r = n(64700),
    a = n(677313),
    l = n(363195);
let o = r.createContext({
    theme: l.A.themePreferenceForSystemTheme((0, a.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function s(e) {
    let { theme: t, themeType: n, primaryColor: a, secondaryColor: l, userId: s, children: c } = e,
        d = r.useMemo(
            () => ({ theme: t, themeType: n, primaryColor: a, secondaryColor: l, userId: s }),
            [t, n, a, l, s],
        );
    return (0, i.jsx)(o.Provider, { value: d, children: c });
}
let c = () => r.useContext(o);
