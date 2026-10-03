t.d(r, { Nx: () => a, Qq: () => m, Wd: () => d, Zt: () => s });
var n = t(196765),
    l = t(462887),
    i = t(736653),
    u = t(543699),
    o = t(652215);
let s = (0, n.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (r) => e({ themeOverride: r }),
    setSavedClientTheme: (r) => e({ savedClientTheme: r }),
}));
function d() {
    let e,
        r = s((e) => e.themeOverride),
        t = (0, i.Ay)();
    if (null == r) return null;
    let n = null,
        d = null;
    return (
        "nitro" === r.mode
            ? ((n = r.themeColors?.[0] ?? null),
              (d = r.themeColors?.[1] ?? null),
              (e = null != n && null != d ? ((0, u.tM)(n) ?? t) : t))
            : (e = r.themeType ?? t),
        e === o.NJ8.ASH && (0, l.M)(t) ? (e = t) : e === o.NJ8.ASH && (0, l.q)(t) && (e = o.NJ8.DARK),
        { theme: e, primaryColor: n, secondaryColor: d }
    );
}
function a() {
    let e = s((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function m() {
    let e = s((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
