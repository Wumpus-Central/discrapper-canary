n.d(t, { I: () => u });
var i = n(120356),
    r = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(607070);
function l() {
    return (0, a.cj)([o.Z], () => {
        let { fontScale: e, fontScaleClass: t, keyboardModeEnabled: n, saturation: i, desaturateUserColors: r, useForcedColors: a, systemForcedColors: s, useReducedMotion: l, alwaysShowLinkDecorations: u } = o.Z;
        return {
            fontScale: e,
            fontScaleClass: t,
            keyboardModeEnabled: n,
            saturation: i,
            desaturateUserColors: r,
            useForcedColors: a,
            systemForcedColors: s,
            useReducedMotion: l,
            alwaysShowLinkDecorations: u
        };
    });
}
function u() {
    let e = l(),
        t = window.CSS.supports('selector(::-webkit-scrollbar)'),
        n = r()({
            'low-saturation': e.saturation <= s.AEw,
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
