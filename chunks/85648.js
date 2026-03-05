n.d(t, { S: () => f }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(397927),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(358776),
    u = n(368631),
    _ = n(227542),
    g = n(264124),
    m = n(850060),
    A = n(274835),
    h = n(505112),
    p = n(163944),
    x = n(41197),
    E = n(28161),
    T = n(114074),
    S = n(413336),
    C = n(985018);
let I = (0, r.t_)(d.X.DISPLAY_PANEL, {
        useTitle: () => C.intl.string(C.t.DVatCa),
        buildLayout: () => [T.K, p.S, x.X, h.S, E.f, (0, S.$)(!0), A.J],
    }),
    f = (0, r.i4)(d.X.DISPLAY_SIDEBAR_ITEM, {
        useTitle: () => C.intl.string(C.t.DVatCa),
        icon: l.PaintPaletteIcon,
        trailing: { type: o.Si.BADGE_NEW, getDismissibleContentTypes: u.p_, stronglyDiscouragedBadgeComponent: u.AW },
        usePredicate: () => (0, c.bp)("DisplaySidebarItem"),
        useMenu: function () {
            let e = (0, _.A)(),
                t = (0, m.A)(),
                n = (0, g.A)();
            return s.useMemo(() => {
                let s = [...e];
                return (
                    null != t &&
                        s.push((0, i.jsx)(a.rXV, { label: C.intl.string(C.t.Ob7VMB), children: t }, "text-and-images")),
                    null != n && s.push((0, i.jsx)(a.rXV, { children: n }, "streamer-mode")),
                    s
                );
            }, [e, t, n]);
        },
        buildLayout: () => [I],
    });
