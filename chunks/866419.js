n.d(t, {
    IN: () => m,
    _m: () => f,
    fc: () => p,
    jJ: () => h,
    lT: () => g,
    zu: () => d
});
var r = n(73800),
    i = n(780384),
    a = n(153867),
    o = n(210887),
    s = n(695346);
n(581883);
var l = n(233398),
    c = n(469115),
    u = n(231338);
function d() {
    return !1;
}
var f = (function (e) {
    return (e.RESET_BUTTON = 'reset_button'), (e.EDITOR_CLOSE = 'editor_close'), e;
})({});
function _(e) {
    return (0, i.wj)(e) ? u.BR.DARK : u.BR.LIGHT;
}
function p(e) {
    let t = s.L1.getSetting(),
        n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in c.qt && c.qt[t.backgroundGradientPresetId].theme !== e;
    (0, a.ZI)({
        theme: e,
        backgroundGradientPresetId: n ? void 0 : t.backgroundGradientPresetId,
        customUserThemeSettings: t.customUserThemeSettings
    });
}
function h() {
    let e = r.useRef(null),
        t = r.useRef(void 0);
    return (
        r.useEffect(() => {
            (e.current = o.Z.theme), (t.current = s.L1.getSetting().backgroundGradientPresetId);
        }, []),
        r.useCallback((n) => {
            var r, i, c, u, d;
            let f = s.L1.getSetting().customUserThemeSettings;
            l.Ig.getState().setAll({
                colors: null != (r = null == f ? void 0 : f.colors) ? r : 'reset_button' === n ? [l.Dp] : [],
                gradientAngle: null != (i = null == f ? void 0 : f.gradientAngle) ? i : 0,
                chassisMixAmount: null != (c = null == f ? void 0 : f.baseMix) ? c : l.BH
            });
            let p = 'reset_button' === n ? _(null != (u = e.current) ? u : o.Z.theme) : null != (d = e.current) ? d : o.Z.theme;
            (p !== o.Z.theme || t.current !== s.L1.getSetting().backgroundGradientPresetId) &&
                (0, a.ZI)({
                    theme: p,
                    backgroundGradientPresetId: t.current,
                    customUserThemeSettings: f
                });
        }, [])
    );
}
function m() {
    let e = _(o.Z.theme);
    e !== o.Z.theme && p(e);
}
function g(e, t, n) {
    0 === e.length && n([t]), m();
}
