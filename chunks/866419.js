n.d(t, {
    Bv: () => b,
    SK: () => I,
    YZ: () => T,
    _m: () => g,
    ft: () => O,
    jJ: () => y,
    lT: () => v,
    zu: () => h,
}),
    n(388685),
    n(49124);
var r = n(473749),
    i = n(442837),
    a = n(780384),
    o = n(781391),
    s = n(210887),
    l = n(695346);
n(581883);
var c = n(233398),
    u = n(238302),
    d = n(36982),
    f = n(803038),
    p = n(893712),
    _ = n(469115),
    m = n(231338);
function h() {
    return !1;
}
var g = (function (e) {
    return (e.RESET_BUTTON = "reset_button"), (e.EDITOR_CLOSE = "editor_close"), e;
})({});
function E(e) {
    return (0, a.wj)(e) ? m.BR.DARK : m.BR.LIGHT;
}
function b(e) {
    let t = l.L1.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in _.qt &&
            _.qt[t.backgroundGradientPresetId].theme !== e;
    (0, o.y)(e), n && (0, u.kj)();
}
function y() {
    let [e] = r.useState(() => s.Z.theme);
    return r.useCallback(
        (t) => {
            let { resetColors: n, resetGradientAngle: r, resetChassisMixAmount: i, resetBaseTheme: a } = S(t, e);
            c.Ig.getState().setAll({
                colors: n,
                gradientAngle: r,
                chassisMixAmount: i,
            }),
                "reset_button" === t ? b(E(null != a ? a : s.Z.theme)) : (0, o.UD)();
            let d = l.L1.getSetting().backgroundGradientPresetId;
            null != d && (0, u.zO)(d);
        },
        [e],
    );
}
function O() {
    let e = E(s.Z.theme);
    e !== s.Z.theme && b(e);
}
function v(e, t, n) {
    0 === e.length && n([t]), O();
}
function S(e, t) {
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
function I() {
    let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, c.Ig)(),
        a = (0, i.e7)([s.Z], () => s.Z.theme),
        [o] = r.useState(() => s.Z.theme),
        { resetColors: l, resetGradientAngle: u, resetChassisMixAmount: d, resetBaseTheme: f } = S("reset_button", o);
    return JSON.stringify(e) === JSON.stringify(l) && t === d && n === u && a === f;
}
function T(e) {
    let t = p.L.useExperiment({ location: e }).enabled,
        n = f.Mc.useExperiment({ location: e }).v2EditorEnabled;
    return t && n;
}
