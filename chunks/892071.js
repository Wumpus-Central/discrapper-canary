(n.d(t, {
    cE: () => _,
    vP: () => f
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
function f() {
    let e = i.useContext(d);
    if (void 0 === e) throw Error('useRootElementContext must be used within a RootElementContextProvider');
    return e;
}
function _(e) {
    let { rootClassName: t, lang: n, theme: a, density: f, focused: _, fontScale: p, fontScaleClass: h, mouseMode: m, keyboardModeEnabled: g, saturation: E, desaturateUserColors: b, useForcedColors: y, systemForcedColors: O, useReducedMotion: v, alwaysShowLinkDecorations: I, hardwareAccelerationEnabled: T, children: S } = e,
        A = window.CSS.supports('selector(::-webkit-scrollbar)'),
        N = 'font-size: '.concat(p, '%; --saturation-factor: ').concat(E, ';'),
        C = (0, u.Z)('highlight_mana_buttons'),
        R = (0, u.Z)('highlight_void_buttons'),
        P = o()(
            (0, c.Z)(),
            (0, l.QeD)(a),
            'density-'.concat(f),
            h,
            {
                'low-saturation': E <= l.AEw,
                'keyboard-mode': g,
                'decorate-links': I,
                'no-webkit-scrollbar': !A,
                'has-webkit-scrollbar': A,
                'mouse-mode': m,
                'reduce-motion': v,
                'full-motion': !v,
                'is-mobile': s.tq,
                'app-focused': _,
                'desaturate-user-colors': b,
                'disable-forced-colors': !y && 'active' === O,
                'enable-forced-colors': y,
                'visual-refresh': !0,
                'hardware-acceleration-disabled': !T,
                'visual-refresh-chat-input': !1,
                'highlight-mana-buttons': C,
                'highlight-void-buttons': R
            },
            t
        ),
        w = i.useMemo(
            () => ({
                lang: n,
                style: N,
                className: P
            }),
            [n, N, P]
        );
    return (0, r.jsx)(d.Provider, {
        value: w,
        children: S
    });
}
