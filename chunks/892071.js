(n.d(t, {
    cE: () => p,
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
    u = n(377089),
    d = n(580747);
let f = i.createContext({
    lang: '',
    style: '',
    className: ''
});
function _() {
    let e = i.useContext(f);
    if (void 0 === e) throw Error('useRootElementContext must be used within a RootElementContextProvider');
    return e;
}
function p(e) {
    let { rootClassName: t, lang: n, theme: a, density: _, focused: p, fontScale: h, fontScaleClass: m, mouseMode: g, keyboardModeEnabled: E, saturation: b, desaturateUserColors: y, useForcedColors: O, systemForcedColors: v, useReducedMotion: I, alwaysShowLinkDecorations: T, hardwareAccelerationEnabled: S, highContrastMode: A, children: N } = e,
        C = window.CSS.supports('selector(::-webkit-scrollbar)'),
        R = 'font-size: '.concat(h, '%; --saturation-factor: ').concat(b, ';'),
        P = (0, d.Z)('highlight_mana_buttons'),
        w = (0, d.Z)('highlight_mana_components'),
        D = (0, d.Z)('highlight_void_buttons'),
        L = o()(
            (0, c.Z)(),
            (0, l.QeD)(a),
            'density-'.concat(_),
            m,
            {
                'low-saturation': b <= l.AEw,
                'keyboard-mode': E,
                'decorate-links': T,
                'no-webkit-scrollbar': !C,
                'has-webkit-scrollbar': C,
                'mouse-mode': g,
                'reduce-motion': I,
                'full-motion': !I,
                'is-mobile': s.tq,
                'app-focused': p,
                'desaturate-user-colors': y,
                'disable-forced-colors': !O && 'active' === v,
                'enable-forced-colors': O,
                'visual-refresh': !0,
                'hardware-acceleration-disabled': !S,
                'visual-refresh-chat-input': !1,
                'mana-text-inputs': (0, u.U)('RootElementContextProvider'),
                'highlight-mana-buttons': P,
                'highlight-mana-components': w,
                'highlight-void-buttons': D,
                'high-contrast-mode': A
            },
            t
        ),
        x = i.useMemo(
            () => ({
                lang: n,
                style: R,
                className: L
            }),
            [n, R, L]
        );
    return (0, r.jsx)(f.Provider, {
        value: x,
        children: N
    });
}
