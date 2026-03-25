n.d(t, { du: () => f, j0: () => T, yj: () => E });
var i = n(934551),
    s = n(554146),
    l = n(920603),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(358776),
    c = n(227542),
    u = n(729770),
    m = n(859669),
    _ = n(662802),
    g = n(988208),
    x = n(819070),
    A = n(352694),
    h = n(136451),
    p = n(985018);
function f() {
    (0, l.v)();
}
let T = [
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
    S = (0, a.t_)(o.X.APPEARANCE_PANEL, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        initialize: f,
        buildLayout: () => [A.S, _._, h.u, g.U, x.M, m.d],
    }),
    E = (0, a.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        icon: i.PaintPaletteIcon,
        usePredicate: () => !(0, d.bp)("AppearanceSidebarItem"),
        useMenu: c.A,
        getDismissibleBadges: () => T,
        buildLayout: () => [S],
    });
