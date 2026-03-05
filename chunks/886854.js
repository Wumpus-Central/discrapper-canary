n.d(t, { y: () => E });
var i = n(934551),
    s = n(920603),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(358776),
    d = n(368631),
    c = n(227542),
    u = n(859669),
    _ = n(662802),
    g = n(988208),
    m = n(819070),
    A = n(352694),
    h = n(136451),
    p = n(985018);
let x = (0, l.t_)(r.X.APPEARANCE_PANEL, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        initialize: () => {
            (0, s.v)();
        },
        buildLayout: () => [A.S, _._, h.u, g.U, m.M, u.d],
    }),
    E = (0, l.i4)(r.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        icon: i.PaintPaletteIcon,
        trailing: { type: a.Si.BADGE_NEW, getDismissibleContentTypes: d.p_, stronglyDiscouragedBadgeComponent: d.AW },
        usePredicate: () => !(0, o.bp)("AppearanceSidebarItem"),
        useMenu: c.A,
        buildLayout: () => [x],
    });
