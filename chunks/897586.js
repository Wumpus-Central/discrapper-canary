n.d(t, { y: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(650809),
    a = n(554146),
    r = n(477782),
    o = n(920603),
    d = n(419954),
    u = n(933297),
    c = n(780964),
    g = n(227542),
    m = n(264124),
    _ = n(850060),
    A = n(19462),
    h = n(981371),
    p = n(559362),
    x = n(669358),
    E = n(681367),
    T = n(680423),
    S = n(439219),
    f = n(288048),
    b = n(985018);
let C = [
        {
            badgeType: u.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: a.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: A.L,
        },
        {
            badgeType: u.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: a.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: A.L,
        },
        { badgeType: u.Xi.NEW, dismissibleContent: a.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    v = (0, d.t_)(c.X.APPEARANCE_PANEL, {
        initialize: function () {
            (0, o.v)();
        },
        useTitle: () => b.intl.string(b.t["iHH+ky"]),
        buildLayout: () => [f.K, x.S, E.X, p.S, T.f, S.X, h.V],
    }),
    N = [
        ...C,
        {
            badgeType: u.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: a.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: A.L,
        },
    ],
    I = (0, d.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => b.intl.string(b.t["iHH+ky"]),
        icon: l.B,
        useMenu: function () {
            let e = (0, g.A)(),
                t = (0, _.A)(),
                n = (0, m.A)();
            return s.useMemo(() => {
                let s = [...e];
                return (
                    null != t &&
                        s.push((0, i.jsx)(r.rX, { label: b.intl.string(b.t.Ob7VMB), children: t }, "text-and-images")),
                    null != n && s.push((0, i.jsx)(r.rX, { children: n }, "streamer-mode")),
                    s
                );
            }, [e, t, n]);
        },
        getDismissibleBadges: () => N,
        buildLayout: () => [v],
    });
