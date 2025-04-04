n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(765053),
    l = n(512969),
    c = n(442837),
    u = n(316792),
    d = n(168551),
    f = n(19759),
    _ = n(892071),
    p = n(252618),
    h = n(587061),
    m = n(981631);
n(294346);
let g = new Set([m.Z5c.LOGIN, m.Z5c.REGISTER]);
function E(e) {
    let { lang: t, style: n, className: o } = (0, _.vP)(),
        s = (0, l.TH)(),
        u = i.useMemo(() => g.has(s.pathname), [s.pathname]);
    (0, h.Z)(window, u);
    let d = (0, c.e7)([f.Z], () => f.Z.sidebarWidth);
    return (0, r.jsx)('html', {
        lang: t,
        style: ''.concat(n, ' --devtools-sidebar-width: ').concat(d, 'px;'),
        className: a()(o, e, { overlay: __OVERLAY__ })
    });
}
function b() {
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
function y(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e;
    (0, p.ZD)({ skipsSettingDefaultPageTitle: n });
    let { clientThemesClassName: o, clientThemesCSS: a } = (0, d.ZP)(),
        l = i.createElement('style', { [d.PQ]: !0 }, a);
    return (0, r.jsxs)(s.ql, {
        children: [E(o), b(), l, t]
    });
}
let v = i.memo(y);
