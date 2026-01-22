i.d(e, { J: () => _ });
var n = i(934551),
    l = i(824552),
    s = i(419954),
    r = i(780964),
    u = i(358776),
    a = i(891912),
    o = i(993470),
    T = i(531525),
    A = i(985018);
let S = (0, s.zZ)(r.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [o.C],
        initialize: () => (
            l.A.fetch(),
            () => {
                a.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    E = (0, s.t_)(r.X.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => !(0, u.dk)("LegacyAuthorizedAppsPanel"),
        useTitle: () => A.intl.string(A.t["f6kk+r"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: a.Ay,
        buildLayout: () => [],
    }),
    d = (0, s.t_)(r.X.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => (0, u.dk)("AuthorizedAppsPanel"),
        useTitle: () => A.intl.string(A.t["f6kk+r"]),
        hideInStreamerMode: !0,
        buildLayout: () => [S],
    }),
    _ = (0, s.i4)(r.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["f6kk+r"]),
        getLegacySearchKey: () => ((0, u.WJ)("AuthorizedAppsPanel") ? void 0 : T.H.AUTHORIZED_APPS),
        icon: n.AppsIcon,
        buildLayout: () => ((0, u.WJ)("AuthorizedAppsPanel") ? [d] : [E]),
    });
