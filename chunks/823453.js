var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(765053),
    c = r(512969),
    d = r(873546),
    f = r(442837),
    p = r(316792),
    h = r(481060),
    _ = r(168551),
    m = r(540059),
    g = r(19759),
    E = r(823961),
    v = r(706454),
    y = r(451478),
    b = r(597952),
    I = r(252618),
    T = r(80006),
    S = r(587061),
    A = r(392358),
    C = r(981631);
r(702955);
let N = new Set([C.Z5c.LOGIN, C.Z5c.REGISTER]);
function R(e) {
    let n = (0, f.e7)([v.default], () => v.default.locale),
        r = (0, f.e7)([y.Z], () => y.Z.isFocused(), []),
        { theme: i, density: s } = (0, h.useThemeContext)(),
        { reducedMotion: u } = o.useContext(h.AccessibilityPreferencesContext),
        { accessibilitySettings: p, appWrapperClassName: _ } = (0, T.I)(),
        { fontScale: I, fontScaleClass: C, saturation: R, desaturateUserColors: O, useForcedColors: D, systemForcedColors: L } = p,
        x = (0, f.e7)([E.Z], () => E.Z.confettiMode),
        w = (0, c.TH)(),
        P = o.useMemo(() => N.has(w.pathname), [w.pathname]);
    (0, S.Z)(window, P);
    let M = (0, A.Z)(window, __OVERLAY__ || r),
        k = (0, f.e7)([g.Z], () => g.Z.sidebarWidth),
        U = (0, h.useRedesignIconContext)().enabled,
        B = (0, m.Q3)('AppHelmet'),
        G = (0, m.R6)('AppHelmet');
    return (0, a.jsx)('html', {
        lang: n,
        style: 'font-size: '.concat(I, '%; --saturation-factor: ').concat(R, '; --devtools-sidebar-width: ').concat(k, 'px;'),
        className: l()(
            e,
            _,
            {
                overlay: __OVERLAY__,
                'mouse-mode': M,
                'reduce-motion': u.enabled,
                'full-motion': !u.enabled,
                'is-mobile': d.tq,
                'app-focused': r,
                'desaturate-user-colors': O,
                'disable-forced-colors': !D && 'active' === L,
                'enable-forced-colors': D,
                'show-redesigned-icons': U,
                'visual-refresh': B,
                'visual-refresh-chat-input': G,
                'confetti-mode': x
            },
            (0, h.getThemeClass)(i),
            'density-'.concat(s),
            (0, b.Z)(),
            C
        )
    });
}
function O() {
    let [e, n] = o.useState([]);
    return (
        o.useEffect(() => {
            Promise.all(
                p.L.map((e) =>
                    r(959598)('./'.concat(e, '.woff2')).then((e) => {
                        let { default: n } = e;
                        return n;
                    })
                )
            ).then((e) => n(e));
        }, []),
        (0, a.jsx)(a.Fragment, {
            children: e.map((e, n) =>
                (0, a.jsx)(
                    'link',
                    {
                        rel: 'preload',
                        href: e,
                        as: 'font',
                        type: 'font/woff2',
                        crossOrigin: 'anonymous'
                    },
                    n
                )
            )
        })
    );
}
function D(e) {
    let { children: n, skipsSettingDefaultPageTitle: r } = e;
    (0, I.ZD)({ skipsSettingDefaultPageTitle: r });
    let { clientThemesClassName: i, clientThemesCSS: s } = (0, _.ZP)(),
        l = o.createElement('style', { [_.PQ]: !0 }, s);
    return (0, a.jsxs)(u.ql, {
        children: [R(i), O(), l, n]
    });
}
n.Z = o.memo(D);
