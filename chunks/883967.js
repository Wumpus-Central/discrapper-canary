n.d(t, { J: () => _ });
var i = n(934551),
    s = n(824552),
    l = n(419954),
    a = n(780964),
    r = n(891912),
    o = n(993470),
    d = n(985018);
let c = (0, l.zZ)(a.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [o.C],
        initialize: () => (
            s.A.fetch(),
            () => {
                r.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    u = (0, l.t_)(a.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => d.intl.string(d.t["f6kk+r"]),
        hideInStreamerMode: !0,
        buildLayout: () => [c],
    }),
    _ = (0, l.i4)(a.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["f6kk+r"]),
        icon: i.AppsIcon,
        buildLayout: () => [u],
    });
