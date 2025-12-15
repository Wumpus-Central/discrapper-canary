n.d(t, {
    Bv: () => h,
    SK: () => O,
    _m: () => _,
    ft: () => E,
    jJ: () => g,
    lT: () => b,
}),
    n(388685),
    n(49124);
var r = n(473749),
    i = n(442837),
    a = n(780384),
    o = n(781391),
    s = n(210887),
    l = n(695346),
    c = n(233398),
    u = n(238302),
    d = n(36982),
    f = n(469115),
    p = n(231338),
    _ = (function (e) {
        return (e.RESET_BUTTON = "reset_button"), (e.EDITOR_CLOSE = "editor_close"), e;
    })({});
function m(e) {
    return (0, a.wj)(e) ? p.BR.DARK : p.BR.LIGHT;
}
function h(e) {
    let t = l.L1.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in f.qt &&
            f.qt[t.backgroundGradientPresetId].theme !== e;
    (0, o.y)(e), n && (0, u.kj)();
}
function g() {
    let [e] = r.useState(() => s.Z.theme);
    return r.useCallback(
        (t) => {
            let { resetColors: n, resetGradientAngle: r, resetChassisMixAmount: i, resetBaseTheme: a } = y(t, e);
            c.Ig.getState().setAll({
                colors: n,
                gradientAngle: r,
                chassisMixAmount: i,
            }),
                "reset_button" === t ? h(m(null != a ? a : s.Z.theme)) : (0, o.UD)();
            let d = l.L1.getSetting().backgroundGradientPresetId;
            null != d && (0, u.zO)(d);
        },
        [e],
    );
}
function E() {
    let e = m(s.Z.theme);
    e !== s.Z.theme && h(e);
}
function b(e, t, n) {
    0 === e.length && n([t]), E();
}
function y(e, t) {
    var n, r, i, a;
    let o = l.L1.getSetting().customUserThemeSettings,
        s = d.Z.getSavedCustomTheme(),
        u = "reset_button" === e ? [c.Dp] : [],
        f = 0,
        p = c.BH,
        _ = t;
    return (
        (null == o ? void 0 : o.colors) != null
            ? ((u = o.colors), (f = null != (n = o.gradientAngle) ? n : 0), (p = null != (r = o.baseMix) ? r : c.BH))
            : "reset_button" === e &&
              null != s &&
              ((u = s.colors),
              (f = null != (i = s.gradient_angle) ? i : 0),
              (p = null != (a = s.base_mix) ? a : c.BH),
              (_ = s.base_theme)),
        {
            resetColors: u,
            resetGradientAngle: f,
            resetChassisMixAmount: p,
            resetBaseTheme: _,
        }
    );
}
function O() {
    let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, c.Ig)(),
        a = (0, i.e7)([s.Z], () => s.Z.theme),
        [o] = r.useState(() => s.Z.theme),
        { resetColors: l, resetGradientAngle: u, resetChassisMixAmount: d, resetBaseTheme: f } = y("reset_button", o);
    return JSON.stringify(e) === JSON.stringify(l) && t === d && n === u && a === f;
}
