n.d(t, { a: () => u });
var i = n(934551),
    s = n(419954),
    l = n(723702),
    a = n(780964),
    r = n(358776),
    o = n(922521),
    d = n(985018);
let c = (0, s.t_)(a.X.LINUX_PANEL, { useTitle: () => d.intl.string(d.t["7pPjTW"]), buildLayout: () => [o.v] }),
    u = (0, s.i4)(a.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["7pPjTW"]),
        icon: i.ScreenIcon,
        usePredicate: () => !(0, r.bp)("LinuxSidebarItem") && l.isPlatformEmbedded && (0, l.isLinux)(),
        buildLayout: () => [c],
    });
