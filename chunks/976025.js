n.d(t, { z: () => A });
var i = n(934551),
    s = n(554146),
    l = n(974544),
    r = n(419954),
    a = n(933297),
    o = n(780964),
    d = n(869802),
    c = n(543919),
    u = n(107997),
    m = n(985018);
let g = [{ badgeType: a.Xi.NEW, dismissibleContent: s.M.NEW_CRUNCHYROLL_CONNECTION }],
    _ = (0, r.zZ)(o.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [d.l], useInlineNotice: u.L }),
    x = (0, r.zZ)(o.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [c.W] }),
    h = (0, r.t_)(o.X.CONNECTIONS_PANEL, {
        useTitle: () => m.intl.string(m.t["3fe7U5"]),
        useObscuredNotice: l.L,
        buildLayout: () => [_, x],
    }),
    A = (0, r.i4)(o.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["3fe7U5"]),
        icon: i.LinkIcon,
        getDismissibleBadges: () => g,
        buildLayout: () => [h],
    });
