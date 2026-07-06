n.d(r, { Nx: () => d, Qq: () => c, Wd: () => u, Zt: () => s });
var t = n(353640),
    l = n(462887),
    i = n(736653),
    a = n(543699),
    o = n(652215);
let s = (0, t.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (r) => e({ themeOverride: r }),
    setSavedClientTheme: (r) => e({ savedClientTheme: r }),
}));
function u() {
    let e,
        r = s((e) => e.themeOverride),
        n = (0, i.Ay)();
    if (null == r) return null;
    let t = null,
        u = null;
    return (
        "nitro" === r.mode
            ? ((t = r.themeColors?.[0] ?? null),
              (u = r.themeColors?.[1] ?? null),
              (e = null != t && null != u ? ((0, a.tM)(t) ?? n) : n))
            : (e = r.themeType ?? n),
        e === o.NJ8.DARK && (0, l.M)(n) ? (e = n) : e === o.NJ8.DARK && (0, l.q)(n) && (e = o.NJ8.DARKER),
        { theme: e, primaryColor: t, secondaryColor: u }
    );
}
function d() {
    let e = s((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function c() {
    let e = s((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
