"use strict";
n.d(t, { E: () => c, U: () => o });
var i = n(627968),
    r = n(64700),
    l = n(677313),
    a = n(544028);
let s = r.createContext({
    theme: a.A.themePreferenceForSystemTheme((0, l.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function o(e) {
    let { theme: t, themeType: n, primaryColor: l, secondaryColor: a, userId: o, children: c } = e,
        u = r.useMemo(
            () => ({ theme: t, themeType: n, primaryColor: l, secondaryColor: a, userId: o }),
            [t, n, l, a, o],
        );
    return (0, i.jsx)(s.Provider, { value: u, children: c });
}
let c = () => r.useContext(s);
