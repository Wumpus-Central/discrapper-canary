n.d(t, { I: () => c });
var r = n(120356),
    i = n.n(r),
    o = n(442837),
    a = n(481060),
    s = n(607070);
function l() {
    return (0, o.cj)([s.Z], () => {
        let { fontScale: e, fontScaleClass: t, keyboardModeEnabled: n, saturation: r, desaturateUserColors: i, useForcedColors: o, systemForcedColors: a, useReducedMotion: l, alwaysShowLinkDecorations: c } = s.Z;
        return {
            fontScale: e,
            fontScaleClass: t,
            keyboardModeEnabled: n,
            saturation: r,
            desaturateUserColors: i,
            useForcedColors: o,
            systemForcedColors: a,
            useReducedMotion: l,
            alwaysShowLinkDecorations: c
        };
    });
}
function c() {
    let e = l(),
        t = window.CSS.supports('selector(::-webkit-scrollbar)'),
        n = i()({
            'low-saturation': e.saturation <= a.AEw,
            'keyboard-mode': e.keyboardModeEnabled,
            'decorate-links': e.alwaysShowLinkDecorations,
            'no-webkit-scrollbar': !t,
            'has-webkit-scrollbar': t
        });
    return {
        accessibilitySettings: e,
        appWrapperClassName: n
    };
}
