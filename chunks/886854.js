i.d(e, { yj: () => L });
var n = i(934551),
    l = i(920603),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(368631),
    d = i(614651),
    A = i(227542),
    T = i(859669),
    S = i(662802),
    E = i(988208),
    g = i(819070),
    c = i(352694),
    _ = i(136451),
    I = i(531525),
    C = i(985018);
let N = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => C.intl.string(C.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)();
        },
        buildLayout: () => [c.S, S._, _.u, E.U, g.M, T.d],
    }),
    O = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => C.intl.string(C.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: d.Ay,
        buildLayout: () => [],
    }),
    L = (0, s.i4)(a.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => C.intl.string(C.t["iHH+ky"]),
        getLegacySearchKey: () => ((0, u.WJ)("AppearanceSidebarItem") ? void 0 : I.H.APPEARANCE),
        icon: n.PaintPaletteIcon,
        trailing: { type: r.Si.BADGE_NEW, getDismissibleContentTypes: o.p_, stronglyDiscouragedBadgeComponent: o.AW },
        usePredicate: () => !(0, u.bp)("AppearanceSidebarItem"),
        useMenu: A.A,
        buildLayout: () => ((0, u.WJ)("AppearanceSidebarItem") ? [N] : [O]),
    });
