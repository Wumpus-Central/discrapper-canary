i.d(e, { yj: () => C });
var n = i(934551),
    l = i(920603),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(358776),
    o = i(368631),
    T = i(614651),
    A = i(859669),
    S = i(662802),
    E = i(988208),
    d = i(819070),
    _ = i(352694),
    I = i(136451),
    g = i(531525),
    c = i(985018);
let N = (0, s.t_)(u.X.APPEARANCE_PANEL, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)();
        },
        buildLayout: () => [_.S, S._, I.b, E.U, d.M, A.d],
    }),
    O = (0, s.t_)(u.X.APPEARANCE_PANEL, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: T.Ay,
        buildLayout: () => [],
    }),
    C = (0, s.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        getLegacySearchKey: () => ((0, a.WJ)("AppearanceSidebarItem") ? void 0 : g.H.APPEARANCE),
        icon: n.PaintPaletteIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: o.p_,
            stronglyDiscouragedBadgeComponent: o.AW,
        },
        buildLayout: () => ((0, a.WJ)("AppearanceSidebarItem") ? [N] : [O]),
    });
