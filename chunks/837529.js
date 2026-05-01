n.d(r, { Nx: () => a, Qq: () => h, Wd: () => o, Zt: () => u });
var l = n(353640),
    t = n(462887),
    i = n(736653),
    d = n(543699),
    s = n(652215);
let u = (0, l.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (r) => e({ themeOverride: r }),
    setSavedClientTheme: (r) => e({ savedClientTheme: r }),
}));
function o() {
    let e,
        r = u((e) => e.themeOverride),
        n = (0, i.Ay)();
    if (null == r) return null;
    let l = null,
        o = null;
    return (
        "nitro" === r.mode
            ? ((l = r.themeColors?.[0] ?? null),
              (o = r.themeColors?.[1] ?? null),
              (e = null != l && null != o ? ((0, d.tM)(l) ?? n) : n))
            : (e = r.themeType ?? n),
        e === s.NJ8.DARK && (0, t.M)(n) ? (e = n) : e === s.NJ8.DARK && (0, t.q)(n) && (e = s.NJ8.DARKER),
        { theme: e, primaryColor: l, secondaryColor: o }
    );
}
function a() {
    let e = u((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function h() {
    let e = u((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
