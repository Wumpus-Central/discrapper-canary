i.d(e, { Q: () => N });
var n = i(934551),
    l = i(35587),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(586685),
    d = i(525707),
    T = i(9653),
    A = i(473146),
    S = i(932128),
    E = i(531525),
    g = i(985018);
let _ = (0, s.zZ)(a.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [d.V, A.E, T.R, S.Y] }),
    c = (0, s.t_)(a.X.GIFT_PANEL, {
        usePredicate: () => !(0, u.dk)("LegacyGiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => [],
    }),
    I = (0, s.t_)(a.X.GIFT_PANEL, {
        usePredicate: () => (0, u.dk)("GiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        buildLayout: () => [_],
    }),
    N = (0, s.i4)(a.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        getLegacySearchKey: () => ((0, u.WJ)("GiftPanel") ? void 0 : E.H.GIFT_INVENTORY),
        icon: n.GiftIcon,
        trailing: { type: r.S.BADGE_COUNT, useCount: () => (0, l.IO)().length },
        buildLayout: () => ((0, u.WJ)("GiftPanel") ? [I] : [c]),
    });
