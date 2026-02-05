i.d(e, { _: () => S });
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(69435),
    u = i(945353),
    o = i(531525),
    d = i(985018);
let T = (0, l.t_)(s.X.ADVANCED_PANEL, {
        useTitle: () => d.intl.string(d.t["8/udY0"]),
        usePredicate: () => !(0, r.dk)("LegacyAdvancedPanel"),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    A = (0, l.t_)(s.X.ADVANCED_PANEL, {
        useTitle: () => d.intl.string(d.t["8/udY0"]),
        usePredicate: () => (0, r.dk)("AdvancedPanel"),
        buildLayout: () => [u.J],
    }),
    S = (0, l.i4)(s.X.ADVANCED_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["8/udY0"]),
        getLegacySearchKey: () => ((0, r.WJ)("AdvancedPanel") ? void 0 : o.H.SETTINGS_ADVANCED),
        icon: n.MoreHorizontalIcon,
        buildLayout: () => ((0, r.WJ)("AdvancedPanel") ? [A] : [T]),
    });
