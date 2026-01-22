i.d(e, { $: () => d });
var n = i(934551),
    l = i(419954),
    s = i(723702),
    r = i(780964),
    u = i(358776),
    a = i(62218),
    o = i(477908),
    T = i(531525),
    A = i(985018);
let S = (0, l.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => A.intl.string(A.t.ZkDZov),
        buildLayout: () => [o.w],
    }),
    E = (0, l.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => A.intl.string(A.t.ZkDZov),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    d = (0, l.i4)(r.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t.ZkDZov),
        getLegacySearchKey: () => ((0, u.WJ)("WindowsPanel") ? void 0 : T.H.WINDOW_SETTINGS),
        icon: n.ScreenIcon,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [(0, u.WJ)("WindowsPanel") ? S : E],
    });
