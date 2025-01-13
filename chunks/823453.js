var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(765053),
    c = r(512969),
    d = r(873546),
    f = r(442837),
    _ = r(316792),
    h = r(481060),
    p = r(168551),
    m = r(540059),
    g = r(19759),
    E = r(706454),
    v = r(451478),
    I = r(597952),
    T = r(252618),
    b = r(80006),
    y = r(587061),
    S = r(392358),
    A = r(981631);
r(702955);
let N = new Set([A.Z5c.LOGIN, A.Z5c.REGISTER]);
function C(e) {
    let n = (0, f.e7)([E.default], () => E.default.locale),
        r = (0, f.e7)([v.Z], () => v.Z.isFocused(), []),
        { theme: i, density: o } = (0, h.useThemeContext)(),
        { reducedMotion: u } = s.useContext(h.AccessibilityPreferencesContext),
        { accessibilitySettings: _, appWrapperClassName: p } = (0, b.I)(),
        { fontScale: T, fontScaleClass: A, saturation: C, desaturateUserColors: R, useForcedColors: O, systemForcedColors: D } = _,
        L = (0, c.TH)(),
        x = s.useMemo(() => N.has(L.pathname), [L.pathname]);
    (0, y.Z)(window, x);
    let w = (0, S.Z)(window, __OVERLAY__ || r),
        P = (0, f.e7)([g.Z], () => g.Z.sidebarWidth),
        M = (0, h.useRedesignIconContext)().enabled,
        k = (0, m.Q3)('AppHelmet'),
        U = (0, m.R6)('AppHelmet');
    return (0, a.jsx)('html', {
        lang: n,
        style: 'font-size: '.concat(T, '%; --saturation-factor: ').concat(C, '; --devtools-sidebar-width: ').concat(P, 'px;'),
        className: l()(
            e,
            p,
            {
                overlay: __OVERLAY__,
                'mouse-mode': w,
                'reduce-motion': u.enabled,
                'full-motion': !u.enabled,
                'is-mobile': d.tq,
                'app-focused': r,
                'desaturate-user-colors': R,
                'disable-forced-colors': !O && 'active' === D,
                'enable-forced-colors': O,
                'show-redesigned-icons': M,
                'visual-refresh': k,
                'visual-refresh-chat-input': U
            },
            (0, h.getThemeClass)(i),
            'density-'.concat(o),
            (0, I.Z)(),
            A
        )
    });
}
function R() {
    let [e, n] = s.useState([]);
    return (
        s.useEffect(() => {
            Promise.all(
                _.L.map((e) =>
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
function O(e) {
    let { children: n, skipsSettingDefaultPageTitle: r } = e;
    (0, T.ZD)({ skipsSettingDefaultPageTitle: r });
    let { clientThemesClassName: i, clientThemesCSS: o } = (0, p.ZP)(),
        l = s.createElement('style', { [p.PQ]: !0 }, o);
    return (0, a.jsxs)(u.ql, {
        children: [C(i), R(), l, n]
    });
}
n.Z = s.memo(O);
