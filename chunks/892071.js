n.d(t, {
    cE: () => f,
    vP: () => d
}),
    n(415506);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    let { rootClassName: t, lang: n, theme: o, density: d, focused: f, fontScale: _, fontScaleClass: p, mouseMode: h, keyboardModeEnabled: m, saturation: g, desaturateUserColors: E, useForcedColors: b, systemForcedColors: y, useReducedMotion: O, alwaysShowLinkDecorations: v, hardwareAccelerationEnabled: I, children: S } = e,
        T = window.CSS.supports('selector(::-webkit-scrollbar)'),
        A = 'font-size: '.concat(_, '%; --saturation-factor: ').concat(g, ';'),
        N = a()(
            (0, c.Z)(),
            (0, l.QeD)(o),
            'density-'.concat(d),
            p,
            {
                'low-saturation': g <= l.AEw,
                'keyboard-mode': m,
                'decorate-links': v,
                'no-webkit-scrollbar': !T,
                'has-webkit-scrollbar': T,
                'mouse-mode': h,
                'reduce-motion': O,
                'full-motion': !O,
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
