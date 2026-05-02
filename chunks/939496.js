t.d(r, { E: () => h, U: () => c });
var l = t(627968),
    n = t(64700),
    u = t(677313),
    o = t(363195);
let s = n.createContext({
    theme: o.A.themePreferenceForSystemTheme((0, u.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function c(e) {
    let { theme: r, themeType: t, primaryColor: u, secondaryColor: o, userId: c, children: h } = e,
        a = n.useMemo(
            () => ({ theme: r, themeType: t, primaryColor: u, secondaryColor: o, userId: c }),
            [r, t, u, o, c],
        );
    return (0, l.jsx)(s.Provider, { value: a, children: h });
}
let h = () => n.useContext(s);
