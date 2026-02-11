i.d(t, { yj: () => O });
var n = i(934551),
    l = i(920603),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(368631),
    d = i(614651),
    _ = i(859669),
    T = i(662802),
    A = i(988208),
    S = i(819070),
    E = i(352694),
    c = i(136451),
    g = i(531525),
    I = i(985018);
let C = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)();
        },
        buildLayout: () => [E.S, T._, c.b, A.U, S.M, _.d],
    }),
    N = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: d.Ay,
        buildLayout: () => [],
    }),
    O = (0, s.i4)(a.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        getLegacySearchKey: () => ((0, u.WJ)("AppearanceSidebarItem") ? void 0 : g.H.APPEARANCE),
        icon: n.PaintPaletteIcon,
        trailing: { type: r.S.BADGE_NEW, getDismissibleContentTypes: o.p_, stronglyDiscouragedBadgeComponent: o.AW },
        usePredicate: () => !(0, u.bp)("AppearanceSidebarItem"),
        buildLayout: () => ((0, u.WJ)("AppearanceSidebarItem") ? [C] : [N]),
    });
