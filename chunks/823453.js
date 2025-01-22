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
    E = r(706454),
    v = r(451478),
    y = r(597952),
    b = r(252618),
    I = r(80006),
    T = r(587061),
    S = r(392358),
    A = r(981631);
r(702955);
let C = new Set([A.Z5c.LOGIN, A.Z5c.REGISTER]);
function N(e) {
    let n = (0, f.e7)([E.default], () => E.default.locale),
        r = (0, f.e7)([v.Z], () => v.Z.isFocused(), []),
        { theme: i, density: s } = (0, h.useThemeContext)(),
        { reducedMotion: u } = o.useContext(h.AccessibilityPreferencesContext),
        { accessibilitySettings: p, appWrapperClassName: _ } = (0, I.I)(),
        { fontScale: b, fontScaleClass: A, saturation: N, desaturateUserColors: R, useForcedColors: O, systemForcedColors: D } = p,
        L = (0, c.TH)(),
        x = o.useMemo(() => C.has(L.pathname), [L.pathname]);
    (0, T.Z)(window, x);
    let w = (0, S.Z)(window, __OVERLAY__ || r),
        P = (0, f.e7)([g.Z], () => g.Z.sidebarWidth),
        M = (0, h.useRedesignIconContext)().enabled,
        k = (0, m.Q3)('AppHelmet'),
        U = (0, m.R6)('AppHelmet');
    return (0, a.jsx)('html', {
        lang: n,
        style: 'font-size: '.concat(b, '%; --saturation-factor: ').concat(N, '; --devtools-sidebar-width: ').concat(P, 'px;'),
        className: l()(
            e,
            _,
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
            'density-'.concat(s),
            (0, y.Z)(),
            A
        )
    });
}
function R() {
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
function O(e) {
    let { children: n, skipsSettingDefaultPageTitle: r } = e;
    (0, b.ZD)({ skipsSettingDefaultPageTitle: r });
    let { clientThemesClassName: i, clientThemesCSS: s } = (0, _.ZP)(),
        l = o.createElement('style', { [_.PQ]: !0 }, s);
    return (0, a.jsxs)(u.ql, {
        children: [N(i), R(), l, n]
    });
}
n.Z = o.memo(O);
