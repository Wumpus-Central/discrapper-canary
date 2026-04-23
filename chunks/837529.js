"use strict";
n.d(t, { Nx: () => u, Qq: () => d, Wd: () => c, Zt: () => o });
var i = n(353640),
    r = n(462887),
    l = n(736653),
    a = n(543699),
    s = n(652215);
let o = (0, i.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (t) => e({ themeOverride: t }),
    setSavedClientTheme: (t) => e({ savedClientTheme: t }),
}));
function c() {
    let e,
        t = o((e) => e.themeOverride),
        n = (0, l.Ay)();
    if (null == t) return null;
    let i = null,
        c = null;
    return (
        "nitro" === t.mode
            ? ((i = t.themeColors?.[0] ?? null),
              (c = t.themeColors?.[1] ?? null),
              (e = null != i && null != c ? ((0, a.tM)(i) ?? n) : n))
            : (e = t.themeType ?? n),
        e === s.NJ8.DARK && (0, r.M)(n) ? (e = n) : e === s.NJ8.DARK && (0, r.q)(n) && (e = s.NJ8.DARKER),
        { theme: e, primaryColor: i, secondaryColor: c }
    );
}
function u() {
    let e = o((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function d() {
    let e = o((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
