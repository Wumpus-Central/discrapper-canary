"use strict";
n.d(t, { E: () => u, U: () => l });
var i = n(627968),
    r = n(64700),
    s = n(677313),
    a = n(363195);
let o = r.createContext({
    theme: a.A.themePreferenceForSystemTheme((0, s.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function l(e) {
    let { theme: t, themeType: n, primaryColor: s, secondaryColor: a, userId: l, children: u } = e,
        c = r.useMemo(
            () => ({ theme: t, themeType: n, primaryColor: s, secondaryColor: a, userId: l }),
            [t, n, s, a, l],
        );
    return (0, i.jsx)(o.Provider, { value: c, children: u });
}
let u = () => r.useContext(o);
