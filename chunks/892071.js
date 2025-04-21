n.d(t, {
    cE: () => f,
    vP: () => d
}),
    n(415506);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(481060),
    c = n(597952);
let u = i.createContext({
    lang: '',
    style: '',
    className: ''
});
function d() {
    let e = i.useContext(u);
    if (void 0 === e) throw Error('useRootElementContext must be used within a RootElementContextProvider');
    return e;
}
function f(e) {
    let { rootClassName: t, lang: n, theme: a, density: d, focused: f, fontScale: _, fontScaleClass: p, mouseMode: h, keyboardModeEnabled: m, saturation: g, desaturateUserColors: E, useForcedColors: b, systemForcedColors: y, useReducedMotion: v, alwaysShowLinkDecorations: O, hardwareAccelerationEnabled: I, children: S } = e,
        T = window.CSS.supports('selector(::-webkit-scrollbar)'),
        A = 'font-size: '.concat(_, '%; --saturation-factor: ').concat(g, ';'),
        N = o()(
            (0, c.Z)(),
            (0, l.QeD)(a),
            'density-'.concat(d),
            p,
            {
                'low-saturation': g <= l.AEw,
                'keyboard-mode': m,
                'decorate-links': O,
                'no-webkit-scrollbar': !T,
                'has-webkit-scrollbar': T,
                'mouse-mode': h,
                'reduce-motion': v,
                'full-motion': !v,
                'is-mobile': s.tq,
                'app-focused': f,
                'desaturate-user-colors': E,
                'disable-forced-colors': !b && 'active' === y,
                'enable-forced-colors': b,
                'visual-refresh': !0,
                'hardware-acceleration-disabled': !I,
                'visual-refresh-chat-input': !1
            },
            t
        ),
        C = i.useMemo(
            () => ({
                lang: n,
                style: A,
                className: N
            }),
            [n, A, N]
        );
    return (0, r.jsx)(u.Provider, {
        value: C,
        children: S
    });
}
