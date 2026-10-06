t.d(r, { Nx: () => a, Qq: () => h, Wd: () => o, Zt: () => d });
var n = t(196765),
    l = t(462887),
    i = t(736653),
    u = t(543699),
    s = t(652215);
let d = (0, n.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (r) => e({ themeOverride: r }),
    setSavedClientTheme: (r) => e({ savedClientTheme: r }),
}));
function o() {
    let e,
        r = d((e) => e.themeOverride),
        t = (0, i.Ay)();
    if (null == r) return null;
    let n = null,
        o = null;
    return (
        "nitro" === r.mode
            ? ((n = r.themeColors?.[0] ?? null),
              (o = r.themeColors?.[1] ?? null),
              (e = null != n && null != o ? ((0, u.tM)(n) ?? t) : t))
            : (e = r.themeType ?? t),
        e === s.NJ8.ASH && (0, l.M)(t) ? (e = t) : e === s.NJ8.ASH && (0, l.q)(t) && (e = s.NJ8.DARK),
        { theme: e, primaryColor: n, secondaryColor: o }
    );
}
function a() {
    let e = d((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function h() {
    let e = d((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
