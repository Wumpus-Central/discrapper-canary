n.d(r, { Nx: () => a, Qq: () => h, Wd: () => s, Zt: () => d });
var l = n(353640),
    t = n(462887),
    i = n(736653),
    o = n(543699),
    u = n(652215);
let d = (0, l.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (r) => e({ themeOverride: r }),
    setSavedClientTheme: (r) => e({ savedClientTheme: r }),
}));
function s() {
    let e,
        r = d((e) => e.themeOverride),
        n = (0, i.Ay)();
    if (null == r) return null;
    let l = null,
        s = null;
    return (
        "nitro" === r.mode
            ? ((l = r.themeColors?.[0] ?? null),
              (s = r.themeColors?.[1] ?? null),
              (e = null != l && null != s ? ((0, o.tM)(l) ?? n) : n))
            : (e = r.themeType ?? n),
        e === u.NJ8.DARK && (0, t.M)(n) ? (e = n) : e === u.NJ8.DARK && (0, t.q)(n) && (e = u.NJ8.DARKER),
        { theme: e, primaryColor: l, secondaryColor: s }
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
