n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(765053),
    l = n(512969),
    u = n(873546),
    c = n(442837),
    d = n(316792),
    f = n(481060),
    _ = n(168551),
    p = n(540059),
    h = n(19759),
    m = n(823961),
    g = n(706454),
    E = n(451478),
    v = n(597952),
    y = n(252618),
    I = n(80006),
    T = n(587061),
    b = n(392358),
    S = n(981631);
n(507104);
let A = new Set([S.Z5c.LOGIN, S.Z5c.REGISTER]);
function N(e) {
    let t = (0, c.e7)([g.default], () => g.default.locale),
        n = (0, c.e7)([E.Z], () => E.Z.isFocused(), []),
        { theme: a, density: o } = (0, f.TCT)(),
        { reducedMotion: d } = r.useContext(f.Sfi),
        { accessibilitySettings: _, appWrapperClassName: y } = (0, I.I)(),
        { fontScale: S, fontScaleClass: N, saturation: C, desaturateUserColors: R, useForcedColors: O, systemForcedColors: D } = _,
        L = (0, c.e7)([m.Z], () => m.Z.confettiMode),
        x = (0, l.TH)(),
        P = r.useMemo(() => A.has(x.pathname), [x.pathname]);
    (0, T.Z)(window, P);
    let w = (0, b.Z)(window, __OVERLAY__ || n),
        M = (0, c.e7)([h.Z], () => h.Z.sidebarWidth),
        k = (0, f.bWb)().enabled,
        U = (0, p.Q3)('AppHelmet'),
        G = (0, p.R6)('AppHelmet');
    return (0, i.jsx)('html', {
        lang: t,
        style: 'font-size: '.concat(S, '%; --saturation-factor: ').concat(C, '; --devtools-sidebar-width: ').concat(M, 'px;'),
        className: s()(
            e,
            y,
            {
                overlay: __OVERLAY__,
                'mouse-mode': w,
                'reduce-motion': d.enabled,
                'full-motion': !d.enabled,
                'is-mobile': u.tq,
                'app-focused': n,
                'desaturate-user-colors': R,
                'disable-forced-colors': !O && 'active' === D,
                'enable-forced-colors': O,
                'show-redesigned-icons': k,
                'visual-refresh': U,
                'visual-refresh-chat-input': G,
                'confetti-mode': L
            },
            (0, f.QeD)(a),
            'density-'.concat(o),
            (0, v.Z)(),
            N
        )
    });
}
function C() {
    let [e, t] = r.useState([]);
    return (
        r.useEffect(() => {
            Promise.all(
                d.L.map((e) =>
                    n(959598)('./'.concat(e, '.woff2')).then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                )
            ).then((e) => t(e));
        }, []),
        (0, i.jsx)(i.Fragment, {
            children: e.map((e, t) =>
                (0, i.jsx)(
                    'link',
                    {
                        rel: 'preload',
                        href: e,
                        as: 'font',
                        type: 'font/woff2',
                        crossOrigin: 'anonymous'
                    },
                    t
                )
            )
        })
    );
}
function R(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e;
    (0, y.ZD)({ skipsSettingDefaultPageTitle: n });
    let { clientThemesClassName: a, clientThemesCSS: s } = (0, _.ZP)(),
        l = r.createElement('style', { [_.PQ]: !0 }, s);
    return (0, i.jsxs)(o.ql, {
        children: [N(a), C(), l, t]
    });
}
let O = r.memo(R);
