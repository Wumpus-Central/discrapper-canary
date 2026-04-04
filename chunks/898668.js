n.d(t, { S: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(554146),
    r = n(397927),
    o = n(419954),
    d = n(933297),
    c = n(780964),
    u = n(358776),
    m = n(227542),
    g = n(264124),
    _ = n(850060),
    x = n(897586),
    A = n(19462),
    h = n(983079),
    p = n(949164),
    T = n(910676),
    f = n(570425),
    S = n(860965),
    E = n(546542),
    b = n(560812),
    C = n(985018);
let N = (0, o.t_)(c.X.DISPLAY_PANEL, {
        initialize: x.du,
        useTitle: () => C.intl.string(C.t.DVatCa),
        buildLayout: () => [E.K, T.S, f.X, p.S, S.f, (0, b.$)(!0), h.J],
    }),
    v = [
        ...x.j0,
        {
            badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: a.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: A.L,
        },
    ],
    I = (0, o.i4)(c.X.DISPLAY_SIDEBAR_ITEM, {
        useTitle: () => C.intl.string(C.t.DVatCa),
        icon: l.PaintPaletteIcon,
        usePredicate: () => (0, u.bp)("DisplaySidebarItem"),
        useMenu: function () {
            let e = (0, m.A)(),
                t = (0, _.A)(),
                n = (0, g.A)();
            return s.useMemo(() => {
                let s = [...e];
                return (
                    null != t &&
                        s.push((0, i.jsx)(r.rXV, { label: C.intl.string(C.t.Ob7VMB), children: t }, "text-and-images")),
                    null != n && s.push((0, i.jsx)(r.rXV, { children: n }, "streamer-mode")),
                    s
                );
            }, [e, t, n]);
        },
        getDismissibleBadges: () => v,
        buildLayout: () => [N],
    });
