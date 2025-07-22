n.d(t, {
    Bv: () => h,
    _m: () => _,
    ft: () => g,
    jJ: () => m,
    lT: () => E,
    zu: () => f
});
var r = n(73800),
    i = n(780384),
    a = n(781391),
    o = n(210887),
    s = n(695346);
n(581883);
var l = n(233398),
    c = n(238302),
    u = n(469115),
    d = n(231338);
function f() {
    return !1;
}
var _ = (function (e) {
    return ((e.RESET_BUTTON = 'reset_button'), (e.EDITOR_CLOSE = 'editor_close'), e);
})({});
function p(e) {
    return (0, i.wj)(e) ? d.BR.DARK : d.BR.LIGHT;
}
function h(e) {
    let t = s.L1.getSetting(),
        n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in u.qt && u.qt[t.backgroundGradientPresetId].theme !== e;
    ((0, a.y)(e), n && (0, c.kj)());
}
function m() {
    let e = r.useRef(null);
    return (
        r.useEffect(() => {
            e.current = o.Z.theme;
        }, []),
        r.useCallback((t) => {
            var n, r, i, u;
            let d = s.L1.getSetting().customUserThemeSettings;
            (l.Ig.getState().setAll({
                colors: null != (n = null == d ? void 0 : d.colors) ? n : 'reset_button' === t ? [l.Dp] : [],
                gradientAngle: null != (r = null == d ? void 0 : d.gradientAngle) ? r : 0,
                chassisMixAmount: null != (i = null == d ? void 0 : d.baseMix) ? i : l.BH
            }),
                'reset_button' === t ? h(p(null != (u = e.current) ? u : o.Z.theme)) : (0, a.UD)());
            let f = s.L1.getSetting().backgroundGradientPresetId;
            null != f && (0, c.zO)(f);
        }, [])
    );
}
function g() {
    let e = p(o.Z.theme);
    e !== o.Z.theme && h(e);
}
function E(e, t, n) {
    (0 === e.length && n([t]), g());
}
