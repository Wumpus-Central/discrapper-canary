i.d(t, { Nx: () => c, Qq: () => u, Wd: () => d, Zt: () => o });
var r = i(353640),
    l = i(462887),
    a = i(736653),
    n = i(543699),
    s = i(652215);
let o = (0, r.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (t) => e({ themeOverride: t }),
    setSavedClientTheme: (t) => e({ savedClientTheme: t }),
}));
function d() {
    let e,
        t = o((e) => e.themeOverride),
        i = (0, a.Ay)();
    if (null == t) return null;
    let r = null,
        d = null;
    return (
        "nitro" === t.mode
            ? ((r = t.themeColors?.[0] ?? null),
              (d = t.themeColors?.[1] ?? null),
              (e = null != r && null != d ? ((0, n.tM)(r) ?? i) : i))
            : (e = t.themeType ?? i),
        e === s.NJ8.DARK && (0, l.M)(i) ? (e = i) : e === s.NJ8.DARK && (0, l.q)(i) && (e = s.NJ8.DARKER),
        { theme: e, primaryColor: r, secondaryColor: d }
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
