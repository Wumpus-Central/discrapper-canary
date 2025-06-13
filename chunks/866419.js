n.d(t, {
    j: () => c,
    z: () => l
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
function c() {
    let e = r.useRef(null),
        t = r.useRef(void 0);
    return (
        r.useEffect(() => {
            (e.current = a.Z.theme), (t.current = o.L1.getSetting().backgroundGradientPresetId);
        }, []),
        r.useCallback(() => {
            var n, r, l, c;
            let u = o.L1.getSetting().customUserThemeSettings;
            s.I.getState().setAll({
                colors: null != (n = null == u ? void 0 : u.colors) ? n : [],
                gradientAngle: null != (r = null == u ? void 0 : u.gradientAngle) ? r : 0,
                chassisMixAmount: null != (l = null == u ? void 0 : u.baseMix) ? l : s.B
            }),
                (e.current !== a.Z.theme || t.current !== o.L1.getSetting().backgroundGradientPresetId) &&
                    (0, i.ZI)({
                        theme: null != (c = e.current) ? c : a.Z.theme,
                        backgroundGradientPresetId: t.current,
                        customUserThemeSettings: u
                    });
        }, [])
    );
}
