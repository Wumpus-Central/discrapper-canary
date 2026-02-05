i.d(e, { yj: () => O });
var n = i(934551),
    l = i(920603),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(368631),
    d = i(614651),
    T = i(859669),
    A = i(662802),
    S = i(988208),
    E = i(819070),
    g = i(352694),
    _ = i(136451),
    c = i(531525),
    I = i(985018);
let N = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)();
        },
        buildLayout: () => [g.S, A._, _.b, S.U, E.M, T.d],
    }),
    C = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: d.Ay,
        buildLayout: () => [],
    }),
    O = (0, s.i4)(a.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        getLegacySearchKey: () => ((0, u.WJ)("AppearanceSidebarItem") ? void 0 : c.H.APPEARANCE),
        icon: n.PaintPaletteIcon,
        trailing: { type: r.S.BADGE_NEW, getDismissibleContentTypes: o.p_, stronglyDiscouragedBadgeComponent: o.AW },
        buildLayout: () => ((0, u.WJ)("AppearanceSidebarItem") ? [N] : [C]),
    });
