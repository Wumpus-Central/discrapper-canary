"use strict";
n.d(t, { E: () => u, U: () => l });
var r = n(627968),
    i = n(64700),
    a = n(677313),
    s = n(544028);
let o = i.createContext({
    theme: s.A.themePreferenceForSystemTheme((0, a.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function l(e) {
    let { theme: t, themeType: n, primaryColor: a, secondaryColor: s, userId: l, children: u } = e,
        c = i.useMemo(
            () => ({ theme: t, themeType: n, primaryColor: a, secondaryColor: s, userId: l }),
            [t, n, a, s, l],
        );
    return (0, r.jsx)(o.Provider, { value: c, children: u });
}
let u = () => i.useContext(o);
