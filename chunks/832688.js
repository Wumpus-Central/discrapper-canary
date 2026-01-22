i.d(e, { a: () => d });
var n = i(934551),
    l = i(419954),
    s = i(723702),
    r = i(780964),
    u = i(358776),
    a = i(62218),
    o = i(922521),
    T = i(531525),
    A = i(985018);
let S = (0, l.t_)(r.X.LINUX_PANEL, {
        useTitle: () => A.intl.string(A.t["7pPjTW"]),
        buildLayout: () => [o.v],
    }),
    E = (0, l.t_)(r.X.LINUX_PANEL, {
        useTitle: () => A.intl.string(A.t["7pPjTW"]),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    d = (0, l.i4)(r.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["7pPjTW"]),
        getLegacySearchKey: () => ((0, u.WJ)("LinuxPanel") ? void 0 : T.H.LINUX_SETTINGS),
        icon: n.ScreenIcon,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [(0, u.WJ)("LinuxPanel") ? S : E],
    });
