i.d(e, {
    _: () => S,
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(69435),
    a = i(945353),
    o = i(531525),
    T = i(985018);
let A = (0, l.t_)(s.X.ADVANCED_PANEL, {
        useTitle: () => T.intl.string(T.t["8/udY0"]),
        usePredicate: () => !(0, r.dk)("LegacyAdvancedPanel"),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => [],
    }),
    d = (0, l.t_)(s.X.ADVANCED_PANEL, {
        useTitle: () => T.intl.string(T.t["8/udY0"]),
        usePredicate: () => (0, r.dk)("AdvancedPanel"),
        buildLayout: () => [a.J],
    }),
    S = (0, l.i4)(s.X.ADVANCED_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["8/udY0"]),
        getLegacySearchKey: () => ((0, r.WJ)("AdvancedPanel") ? void 0 : o.H.SETTINGS_ADVANCED),
        icon: n.MoreHorizontalIcon,
        buildLayout: () => ((0, r.WJ)("AdvancedPanel") ? [d] : [A]),
    });
