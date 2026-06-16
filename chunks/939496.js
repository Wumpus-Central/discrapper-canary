n.d(r, { E: () => s, U: () => d });
var l = n(627968),
    t = n(64700),
    i = n(677313),
    o = n(363195);
let u = t.createContext({
    theme: o.A.themePreferenceForSystemTheme((0, i.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function d(e) {
    let { theme: r, themeType: n, primaryColor: i, secondaryColor: o, userId: d, children: s } = e,
        a = t.useMemo(
            () => ({ theme: r, themeType: n, primaryColor: i, secondaryColor: o, userId: d }),
            [r, n, i, o, d],
        );
    return (0, l.jsx)(u.Provider, { value: a, children: s });
}
let s = () => t.useContext(u);
