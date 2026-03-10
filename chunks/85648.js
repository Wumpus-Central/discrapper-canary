n.d(t, { S: () => f }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(397927),
    r = n(419954),
    o = n(780964),
    d = n(358776),
    c = n(227542),
    u = n(264124),
    _ = n(850060),
    g = n(886854),
    m = n(274835),
    A = n(505112),
    h = n(163944),
    p = n(41197),
    x = n(28161),
    E = n(114074),
    T = n(413336),
    S = n(985018);
let C = (0, r.t_)(o.X.DISPLAY_PANEL, {
        useTitle: () => S.intl.string(S.t.DVatCa),
        buildLayout: () => [E.K, h.S, p.X, A.S, x.f, (0, T.$)(!0), m.J],
    }),
    f = (0, r.i4)(o.X.DISPLAY_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.DVatCa),
        icon: l.PaintPaletteIcon,
        usePredicate: () => (0, d.bp)("DisplaySidebarItem"),
        useMenu: function () {
            let e = (0, c.A)(),
                t = (0, _.A)(),
                n = (0, u.A)();
            return s.useMemo(() => {
                let s = [...e];
                return (
                    null != t &&
                        s.push((0, i.jsx)(a.rXV, { label: S.intl.string(S.t.Ob7VMB), children: t }, "text-and-images")),
                    null != n && s.push((0, i.jsx)(a.rXV, { children: n }, "streamer-mode")),
                    s
                );
            }, [e, t, n]);
        },
        getDismissibleBadges: () => g.j0,
        buildLayout: () => [C],
    });
