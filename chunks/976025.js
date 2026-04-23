n.d(t, { z: () => p });
var i = n(173936),
    s = n(554146),
    l = n(974544),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(869802),
    u = n(543919),
    c = n(107997),
    g = n(985018);
let m = [{ badgeType: r.Xi.NEW, dismissibleContent: s.M.NEW_CRUNCHYROLL_CONNECTION }],
    _ = (0, a.zZ)(o.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [d.l], useInlineNotice: c.L }),
    A = (0, a.zZ)(o.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [u.W] }),
    h = (0, a.t_)(o.X.CONNECTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useObscuredNotice: l.L,
        buildLayout: () => [_, A],
    }),
    p = (0, a.i4)(o.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        icon: i.q,
        getDismissibleBadges: () => m,
        buildLayout: () => [h],
    });
