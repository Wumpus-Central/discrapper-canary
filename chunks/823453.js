n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(446431),
    l = n(114858),
    c = n(442837),
    u = n(316792),
    d = n(168551),
    f = n(19759),
    _ = n(522474),
    p = n(892071),
    h = n(252618),
    m = n(587061),
    g = n(981631);
n(294346);
let E = new Set([g.Z5c.LOGIN, g.Z5c.REGISTER]);
function b(e) {
    let { lang: t, style: n, className: a } = (0, p.vP)(),
        s = (0, l.TH)(),
        u = i.useMemo(() => E.has(s.pathname), [s.pathname]);
    (0, m.Z)(window, u);
    let d = (0, c.e7)([f.Z, _.Z], () => (_.Z.getWindowOpen(g.KJ3.DEVTOOLS_POPOUT) ? 0 : f.Z.sidebarWidth));
    return (0, r.jsx)('html', {
        lang: t,
        style: ''.concat(n, ' --devtools-sidebar-width: ').concat(d, 'px;'),
        className: o()(a, e, { overlay: __OVERLAY__ })
    });
}
function y() {
    let [e, t] = i.useState([]);
    return (
        i.useEffect(() => {
            Promise.all(
                u.L.map((e) =>
                    n(959598)('./'.concat(e, '.woff2')).then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                )
            ).then((e) => t(e));
        }, []),
        (0, r.jsx)(r.Fragment, {
            children: e.map((e, t) =>
                (0, r.jsx)(
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
function O(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e;
    (0, h.ZD)({ skipsSettingDefaultPageTitle: n });
    let { clientThemesClassName: a, clientThemesCSS: o } = (0, d.ZP)(),
        l = i.createElement('style', { [d.PQ]: !0 }, o);
    return (0, r.jsxs)(s.ql, {
        children: [b(a), y(), l, t]
    });
}
let v = i.memo(O);
