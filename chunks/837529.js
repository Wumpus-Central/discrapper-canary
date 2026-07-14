"use strict";
n.d(t, { Nx: () => c, Qq: () => u, Wd: () => d, Zt: () => o });
var i = n(353640),
    r = n(462887),
    a = n(736653),
    s = n(543699),
    l = n(652215);
let o = (0, i.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (t) => e({ themeOverride: t }),
    setSavedClientTheme: (t) => e({ savedClientTheme: t }),
}));
function d() {
    let e,
        t = o((e) => e.themeOverride),
        n = (0, a.Ay)();
    if (null == t) return null;
    let i = null,
        d = null;
    return (
        "nitro" === t.mode
            ? ((i = t.themeColors?.[0] ?? null),
              (d = t.themeColors?.[1] ?? null),
              (e = null != i && null != d ? ((0, s.tM)(i) ?? n) : n))
            : (e = t.themeType ?? n),
        e === l.NJ8.DARK && (0, r.M)(n) ? (e = n) : e === l.NJ8.DARK && (0, r.q)(n) && (e = l.NJ8.DARKER),
        { theme: e, primaryColor: i, secondaryColor: d }
    );
}
function c() {
    let e = o((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function u() {
    let e = o((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
