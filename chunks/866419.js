n.d(t, {
    Bv: () => h,
    SK: () => b,
    _m: () => _,
    ft: () => g,
    jJ: () => m,
    lT: () => E,
    zu: () => f,
}),
    n(49124);
var r = n(73800),
    i = n(780384),
    o = n(781391),
    a = n(210887),
    s = n(695346);
n(581883);
var l = n(233398),
    c = n(238302);
n(803038);
var u = n(469115),
    d = n(231338);
function f() {
    return !1;
}
var _ = (function (e) {
    return (e.RESET_BUTTON = "reset_button"), (e.EDITOR_CLOSE = "editor_close"), e;
})({});
function p(e) {
    return (0, i.wj)(e) ? d.BR.DARK : d.BR.LIGHT;
}
function h(e) {
    let t = s.L1.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in u.qt &&
            u.qt[t.backgroundGradientPresetId].theme !== e;
    (0, o.y)(e), n && (0, c.kj)();
}
function m() {
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
                "reset_button" === t ? h(p(null != (u = e.current) ? u : a.Z.theme)) : (0, o.UD)();
            let f = s.L1.getSetting().backgroundGradientPresetId;
            null != f && (0, c.zO)(f);
        }, [])
    );
}
function g() {
    let e = p(a.Z.theme);
    e !== a.Z.theme && h(e);
}
function E(e, t, n) {
    0 === e.length && n([t]), g();
}
function b() {
    var e, t, n;
    let { colors: r, chassisMixAmount: i, gradientAngle: o } = (0, l.Ig)(),
        a = s.L1.getSetting().customUserThemeSettings,
        c = null != (e = null == a ? void 0 : a.colors) ? e : [l.Dp],
        u = null != (t = null == a ? void 0 : a.gradientAngle) ? t : 0,
        d = null != (n = null == a ? void 0 : a.baseMix) ? n : l.BH;
    return JSON.stringify(r) === JSON.stringify(c) && i === d && o === u;
}
