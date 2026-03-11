n.d(t, { j0: () => E, yj: () => S });
var i = n(934551),
    s = n(554146),
    l = n(920603),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(358776),
    c = n(227542),
    u = n(729770),
    _ = n(859669),
    g = n(662802),
    A = n(988208),
    m = n(819070),
    h = n(352694),
    p = n(136451),
    x = n(985018);
let E = [
        {
            badgeType: r.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: s.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: u.L,
        },
        {
            badgeType: r.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: s.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: u.L,
        },
        { badgeType: r.Xi.NEW, dismissibleContent: s.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    T = (0, a.t_)(o.X.APPEARANCE_PANEL, {
        useTitle: () => x.intl.string(x.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)();
        },
        buildLayout: () => [h.S, g._, p.u, A.U, m.M, _.d],
    }),
    S = (0, a.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => x.intl.string(x.t["iHH+ky"]),
        icon: i.PaintPaletteIcon,
        usePredicate: () => !(0, d.bp)("AppearanceSidebarItem"),
        useMenu: c.A,
        getDismissibleBadges: () => E,
        buildLayout: () => [T],
    });
