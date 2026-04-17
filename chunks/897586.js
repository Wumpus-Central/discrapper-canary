n.d(t, { y: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(934551),
    r = n(554146),
    a = n(397927),
    o = n(920603),
    d = n(419954),
    c = n(933297),
    u = n(780964),
    m = n(227542),
    g = n(264124),
    _ = n(850060),
    x = n(19462),
    h = n(981371),
    A = n(559362),
    p = n(669358),
    T = n(681367),
    f = n(680423),
    S = n(439219),
    E = n(288048),
    b = n(985018);
let C = [
        {
            badgeType: c.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: r.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: x.L,
        },
        {
            badgeType: c.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: r.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: x.L,
        },
        { badgeType: c.Xi.NEW, dismissibleContent: r.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    v = (0, d.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            (0, o.v)();
        },
        useTitle: () => b.intl.string(b.t["iHH+ky"]),
        buildLayout: () => [E.K, p.S, T.X, A.S, f.f, S.X, h.V],
    }),
    N = [
        ...C,
        {
            badgeType: c.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: r.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: x.L,
        },
    ],
    I = (0, d.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => b.intl.string(b.t["iHH+ky"]),
        icon: l.PaintPaletteIcon,
        useMenu: function () {
            let e = (0, m.A)(),
                t = (0, _.A)(),
                n = (0, g.A)();
            return s.useMemo(() => {
                let s = [...e];
                return (
                    null != t &&
                        s.push((0, i.jsx)(a.rXV, { label: b.intl.string(b.t.Ob7VMB), children: t }, "text-and-images")),
                    null != n && s.push((0, i.jsx)(a.rXV, { children: n }, "streamer-mode")),
                    s
                );
            }, [e, t, n]);
        },
        getDismissibleBadges: () => N,
        buildLayout: () => [v],
    });
