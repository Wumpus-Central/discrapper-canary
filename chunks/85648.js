n.d(t, { S: () => v }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(554146),
    r = n(397927),
    o = n(419954),
    d = n(933297),
    c = n(780964),
    u = n(358776),
    _ = n(227542),
    g = n(264124),
    A = n(850060),
    m = n(886854),
    h = n(729770),
    p = n(274835),
    x = n(505112),
    E = n(163944),
    T = n(41197),
    S = n(28161),
    C = n(114074),
    I = n(413336),
    f = n(985018);
let b = (0, o.t_)(c.X.DISPLAY_PANEL, {
        useTitle: () => f.intl.string(f.t.DVatCa),
        buildLayout: () => [C.K, E.S, T.X, x.S, S.f, (0, I.$)(!0), p.J],
    }),
    N = [
        ...m.j0,
        {
            badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: a.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: h.L,
        },
    ],
    v = (0, o.i4)(c.X.DISPLAY_SIDEBAR_ITEM, {
        useTitle: () => f.intl.string(f.t.DVatCa),
        icon: l.PaintPaletteIcon,
        usePredicate: () => (0, u.bp)("DisplaySidebarItem"),
        useMenu: function () {
            let e = (0, _.A)(),
                t = (0, A.A)(),
                n = (0, g.A)();
            return s.useMemo(() => {
                let s = [...e];
                return (
                    null != t &&
                        s.push((0, i.jsx)(r.rXV, { label: f.intl.string(f.t.Ob7VMB), children: t }, "text-and-images")),
                    null != n && s.push((0, i.jsx)(r.rXV, { children: n }, "streamer-mode")),
                    s
                );
            }, [e, t, n]);
        },
        getDismissibleBadges: () => N,
        buildLayout: () => [b],
    });
