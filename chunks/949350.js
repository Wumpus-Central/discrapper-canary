n.d(t, { Q: () => A });
var i = n(934551),
    s = n(35587),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(525707),
    d = n(9653),
    c = n(473146),
    u = n(709747),
    _ = n(985018);
let g = (0, l.zZ)(r.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [o.V, c.E, d.R, u.Y] }),
    m = (0, l.t_)(r.X.GIFT_PANEL, { useTitle: () => _.intl.string(_.t["jcSP+g"]), buildLayout: () => [g] }),
    A = (0, l.i4)(r.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        icon: i.GiftIcon,
        trailing: { type: a.Si.BADGE_COUNT, useCount: () => (0, s.IO)().length },
        buildLayout: () => [m],
    });
