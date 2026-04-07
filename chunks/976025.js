n.d(t, { z: () => A });
var i = n(934551),
    s = n(554146),
    l = n(974544),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(869802),
    c = n(543919),
    u = n(985018);
let m = [{ badgeType: r.Xi.NEW, dismissibleContent: s.M.NEW_CRUNCHYROLL_CONNECTION }],
    g = (0, a.zZ)(o.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [d.l] }),
    _ = (0, a.zZ)(o.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [c.W] }),
    x = (0, a.t_)(o.X.CONNECTIONS_PANEL, {
        useTitle: () => u.intl.string(u.t["3fe7U5"]),
        useObscuredNotice: l.L,
        buildLayout: () => [g, _],
    }),
    A = (0, a.i4)(o.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => u.intl.string(u.t["3fe7U5"]),
        icon: i.LinkIcon,
        getDismissibleBadges: () => m,
        buildLayout: () => [x],
    });
