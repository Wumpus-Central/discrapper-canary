"use strict";
n.d(t, { E: () => d, U: () => o });
var i = n(627968),
    r = n(64700),
    a = n(677313),
    s = n(363195);
let l = r.createContext({
    theme: s.A.themePreferenceForSystemTheme((0, a.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function o(e) {
    let { theme: t, themeType: n, primaryColor: a, secondaryColor: s, userId: o, children: d } = e,
        c = r.useMemo(
            () => ({ theme: t, themeType: n, primaryColor: a, secondaryColor: s, userId: o }),
            [t, n, a, s, o],
        );
    return (0, i.jsx)(l.Provider, { value: c, children: d });
}
function d() {
    return r.useContext(l);
}
