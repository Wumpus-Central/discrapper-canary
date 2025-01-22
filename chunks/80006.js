r.d(n, {
    I: function () {
        return c;
    }
});
var i = r(120356),
    a = r.n(i),
    o = r(442837),
    s = r(481060),
    l = r(607070);
function u() {
    return (0, o.cj)([l.Z], () => {
        let { fontScale: e, fontScaleClass: n, keyboardModeEnabled: r, saturation: i, desaturateUserColors: a, useForcedColors: o, systemForcedColors: s, useReducedMotion: u, alwaysShowLinkDecorations: c } = l.Z;
        return {
            fontScale: e,
            fontScaleClass: n,
            keyboardModeEnabled: r,
            saturation: i,
            desaturateUserColors: a,
            useForcedColors: o,
            systemForcedColors: s,
            useReducedMotion: u,
            alwaysShowLinkDecorations: c
        };
    });
}
function c() {
    let e = u(),
        n = window.CSS.supports('selector(::-webkit-scrollbar)'),
        r = a()({
            'low-saturation': e.saturation <= s.LOW_SATURATION_THRESHOLD,
            'keyboard-mode': e.keyboardModeEnabled,
            'decorate-links': e.alwaysShowLinkDecorations,
            'no-webkit-scrollbar': !n,
            'has-webkit-scrollbar': n
        });
    return {
        accessibilitySettings: e,
        appWrapperClassName: r
    };
}
