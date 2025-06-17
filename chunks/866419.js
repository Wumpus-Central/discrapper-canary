n.d(t, {
    _m: () => c,
    jJ: () => u,
    zu: () => l
});
var r = n(73800),
    i = n(153867),
    a = n(210887),
    o = n(695346);
n(581883);
var s = n(233398);
function l() {
    return !1;
}
var c = (function (e) {
    return (e.RESET_BUTTON = 'reset_button'), (e.EDITOR_CLOSE = 'editor_close'), e;
})({});
function u() {
    let e = r.useRef(null),
        t = r.useRef(void 0);
    return (
        r.useEffect(() => {
            (e.current = a.Z.theme), (t.current = o.L1.getSetting().backgroundGradientPresetId);
        }, []),
        r.useCallback((n) => {
            var r, l, c, u;
            let d = o.L1.getSetting().customUserThemeSettings;
            s.Ig.getState().setAll({
                colors: null != (r = null == d ? void 0 : d.colors) ? r : 'reset_button' === n ? [s.Dp] : [],
                gradientAngle: null != (l = null == d ? void 0 : d.gradientAngle) ? l : 0,
                chassisMixAmount: null != (c = null == d ? void 0 : d.baseMix) ? c : s.BH
            }),
                (e.current !== a.Z.theme || t.current !== o.L1.getSetting().backgroundGradientPresetId) &&
                    (0, i.ZI)({
                        theme: null != (u = e.current) ? u : a.Z.theme,
                        backgroundGradientPresetId: t.current,
                        customUserThemeSettings: d
                    });
        }, [])
    );
}
