n.d(t, {
    Bv: () => g,
    SK: () => O,
    YZ: () => v,
    _m: () => h,
    ft: () => b,
    jJ: () => E,
    lT: () => y,
    zu: () => p,
}),
    n(49124);
var r = n(647438),
    i = n(780384),
    o = n(781391),
    a = n(210887),
    s = n(695346);
n(581883);
var l = n(233398),
    c = n(238302),
    u = n(803038),
    d = n(893712),
    f = n(469115),
    _ = n(231338);
function p() {
    return !1;
}
var h = (function (e) {
    return (e.RESET_BUTTON = "reset_button"), (e.EDITOR_CLOSE = "editor_close"), e;
})({});
function m(e) {
    return (0, i.wj)(e) ? _.BR.DARK : _.BR.LIGHT;
}
function g(e) {
    let t = s.L1.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in f.qt &&
            f.qt[t.backgroundGradientPresetId].theme !== e;
    (0, o.y)(e), n && (0, c.kj)();
}
function E() {
    let e = r.useRef(null);
    return (
        r.useEffect(() => {
            e.current = a.Z.theme;
        }, []),
        r.useCallback((t) => {
            var n, r, i, u;
            let d = s.L1.getSetting().customUserThemeSettings;
            l.Ig.getState().setAll({
                colors: null != (n = null == d ? void 0 : d.colors) ? n : "reset_button" === t ? [l.Dp] : [],
                gradientAngle: null != (r = null == d ? void 0 : d.gradientAngle) ? r : 0,
                chassisMixAmount: null != (i = null == d ? void 0 : d.baseMix) ? i : l.BH,
            }),
                "reset_button" === t ? g(m(null != (u = e.current) ? u : a.Z.theme)) : (0, o.UD)();
            let f = s.L1.getSetting().backgroundGradientPresetId;
            null != f && (0, c.zO)(f);
        }, [])
    );
}
function b() {
    let e = m(a.Z.theme);
    e !== a.Z.theme && g(e);
}
function y(e, t, n) {
    0 === e.length && n([t]), b();
}
function O() {
    var e, t, n;
    let { colors: r, chassisMixAmount: i, gradientAngle: o } = (0, l.Ig)(),
        a = s.L1.getSetting().customUserThemeSettings,
        c = null != (e = null == a ? void 0 : a.colors) ? e : [l.Dp],
        u = null != (t = null == a ? void 0 : a.gradientAngle) ? t : 0,
        d = null != (n = null == a ? void 0 : a.baseMix) ? n : l.BH;
    return JSON.stringify(r) === JSON.stringify(c) && i === d && o === u;
}
function v(e) {
    let t = d.L.useExperiment({ location: e }).enabled,
        n = u.Mc.useExperiment({ location: e }).v2EditorEnabled;
    return t && n;
}
