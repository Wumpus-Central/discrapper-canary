i.d(t, { a: () => S });
var n = i(934551),
    l = i(419954),
    s = i(723702),
    r = i(780964),
    a = i(358776),
    u = i(62218),
    o = i(922521),
    d = i(531525),
    _ = i(985018);
let T = (0, l.t_)(r.X.LINUX_PANEL, { useTitle: () => _.intl.string(_.t["7pPjTW"]), buildLayout: () => [o.v] }),
    A = (0, l.t_)(r.X.LINUX_PANEL, {
        useTitle: () => _.intl.string(_.t["7pPjTW"]),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => [],
    }),
    S = (0, l.i4)(r.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["7pPjTW"]),
        getLegacySearchKey: () => ((0, a.WJ)("LinuxPanel") ? void 0 : d.H.LINUX_SETTINGS),
        icon: n.ScreenIcon,
        usePredicate: () => !(0, a.bp)("LinuxSidebarItem") && s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [(0, a.WJ)("LinuxPanel") ? T : A],
    });
