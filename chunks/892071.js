(n.d(t, {
    cE: () => f,
    vP: () => _
}),
    n(415506));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(481060),
    c = n(597952),
    u = n(580747);
let d = i.createContext({
    lang: '',
    style: '',
    className: ''
});
function _() {
    let e = i.useContext(d);
    if (void 0 === e) throw Error('useRootElementContext must be used within a RootElementContextProvider');
    return e;
}
function f(e) {
    let { rootClassName: t, lang: n, theme: a, density: _, focused: f, fontScale: p, fontScaleClass: h, mouseMode: m, keyboardModeEnabled: g, saturation: E, desaturateUserColors: b, useForcedColors: y, systemForcedColors: O, useReducedMotion: v, alwaysShowLinkDecorations: I, hardwareAccelerationEnabled: T, highContrastMode: S, children: A } = e,
        N = window.CSS.supports('selector(::-webkit-scrollbar)'),
        C = 'font-size: '.concat(p, '%; --saturation-factor: ').concat(E, ';'),
        R = (0, u.Z)('highlight_mana_buttons'),
        P = (0, u.Z)('highlight_mana_components'),
        w = (0, u.Z)('highlight_void_buttons'),
        D = o()(
            (0, c.Z)(),
            (0, l.QeD)(a),
            'density-'.concat(_),
            h,
            {
                'low-saturation': E <= l.AEw,
                'keyboard-mode': g,
                'decorate-links': I,
                'no-webkit-scrollbar': !N,
                'has-webkit-scrollbar': N,
                'mouse-mode': m,
                'reduce-motion': v,
                'full-motion': !v,
                'is-mobile': s.tq,
                'app-focused': f,
                'desaturate-user-colors': b,
                'disable-forced-colors': !y && 'active' === O,
                'enable-forced-colors': y,
                'visual-refresh': !0,
                'hardware-acceleration-disabled': !T,
                'visual-refresh-chat-input': !1,
                'highlight-mana-buttons': R,
                'highlight-mana-components': P,
                'highlight-void-buttons': w,
                'high-contrast-mode': S
            },
            t
        ),
        L = i.useMemo(
            () => ({
                lang: n,
                style: C,
                className: D
            }),
            [n, C, D]
        );
    return (0, r.jsx)(d.Provider, {
        value: L,
        children: A
    });
}
