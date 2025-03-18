n.d(t, {
    cE: () => f,
    vP: () => d
}),
    n(411104);
var r = n(200651),
    i = n(192379),
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
    let { isRefreshEnabled: t, isRefreshChatInputEnabled: n, rootClassName: o, lang: d, theme: f, density: _, focused: p, fontScale: h, fontScaleClass: m, mouseMode: g, keyboardModeEnabled: E, saturation: b, desaturateUserColors: v, useForcedColors: y, systemForcedColors: O, useReducedMotion: I, alwaysShowLinkDecorations: S, children: T } = e,
        N = window.CSS.supports('selector(::-webkit-scrollbar)'),
        A = 'font-size: '.concat(h, '%; --saturation-factor: ').concat(b, ';'),
        C = a()(
            (0, c.Z)(),
            (0, l.QeD)(f),
            'density-'.concat(_),
            m,
            {
                'low-saturation': b <= l.AEw,
                'keyboard-mode': E,
                'decorate-links': S,
                'no-webkit-scrollbar': !N,
                'has-webkit-scrollbar': N,
                'mouse-mode': g,
                'reduce-motion': I,
                'full-motion': !I,
                'is-mobile': s.tq,
                'app-focused': p,
                'desaturate-user-colors': v,
                'disable-forced-colors': !y && 'active' === O,
                'enable-forced-colors': y,
                'visual-refresh': t,
                'visual-refresh-chat-input': n,
                'show-redesigned-icons': !0
            },
            o
        ),
        R = i.useMemo(
            () => ({
                lang: d,
                style: A,
                className: C
            }),
            [d, A, C]
        );
    return (0, r.jsx)(u.Provider, {
        value: R,
        children: T
    });
}
