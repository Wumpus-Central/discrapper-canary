"use strict";
n.d(t, { Nx: () => c, Qq: () => d, Wd: () => u, Zt: () => l });
var i = n(353640),
    r = n(462887),
    s = n(736653),
    a = n(543699),
    o = n(652215);
let l = (0, i.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (t) => e({ themeOverride: t }),
    setSavedClientTheme: (t) => e({ savedClientTheme: t }),
}));
function u() {
    let e,
        t = l((e) => e.themeOverride),
        n = (0, s.Ay)();
    if (null == t) return null;
    let i = null,
        u = null;
    return (
        "nitro" === t.mode
            ? ((i = t.themeColors?.[0] ?? null),
              (u = t.themeColors?.[1] ?? null),
              (e = null != i && null != u ? ((0, a.tM)(i) ?? n) : n))
            : (e = t.themeType ?? n),
        e === o.NJ8.DARK && (0, r.M)(n) ? (e = n) : e === o.NJ8.DARK && (0, r.q)(n) && (e = o.NJ8.DARKER),
        { theme: e, primaryColor: i, secondaryColor: u }
    );
}
function c() {
    let e = l((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function d() {
    let e = l((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
