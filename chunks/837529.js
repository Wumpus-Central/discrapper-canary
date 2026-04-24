n.d(t, { Nx: () => d, Qq: () => u, Wd: () => c, Zt: () => s });
var i = n(353640),
    r = n(462887),
    a = n(736653),
    l = n(543699),
    o = n(652215);
let s = (0, i.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (t) => e({ themeOverride: t }),
    setSavedClientTheme: (t) => e({ savedClientTheme: t }),
}));
function c() {
    let e,
        t = s((e) => e.themeOverride),
        n = (0, a.Ay)();
    if (null == t) return null;
    let i = null,
        c = null;
    return (
        "nitro" === t.mode
            ? ((i = t.themeColors?.[0] ?? null),
              (c = t.themeColors?.[1] ?? null),
              (e = null != i && null != c ? ((0, l.tM)(i) ?? n) : n))
            : (e = t.themeType ?? n),
        e === o.NJ8.DARK && (0, r.M)(n) ? (e = n) : e === o.NJ8.DARK && (0, r.q)(n) && (e = o.NJ8.DARKER),
        { theme: e, primaryColor: i, secondaryColor: c }
    );
}
function d() {
    let e = s((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
}
function u() {
    let e = s((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
}
