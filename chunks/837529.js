"use strict";
n.d(t, { Nx: () => c, Qq: () => d, Wd: () => u, Zt: () => l });
var r = n(353640),
    i = n(582754),
    a = n(736653),
    s = n(543699),
    o = n(652215);
let l = (0, r.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (t) => e({ themeOverride: t }),
    setSavedClientTheme: (t) => e({ savedClientTheme: t }),
}));
function u() {
    let e,
        t = l((e) => e.themeOverride),
        n = (0, a.Ay)();
    if (null == t) return null;
    let r = null,
        u = null;
    return (
        "nitro" === t.mode
            ? ((r = t.themeColors?.[0] ?? null),
              (u = t.themeColors?.[1] ?? null),
              (e = null != r && null != u ? ((0, s.tM)(r) ?? n) : n))
            : (e = t.themeType ?? n),
        e === o.NJ8.DARK && (0, i.Mw)(n) ? (e = n) : e === o.NJ8.DARK && (0, i.qB)(n) && (e = o.NJ8.DARKER),
        { theme: e, primaryColor: r, secondaryColor: u }
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
