i.d(t, { Q: () => C });
var n = i(934551),
    l = i(35587),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(586685),
    d = i(525707),
    _ = i(9653),
    T = i(473146),
    A = i(932128),
    S = i(531525),
    E = i(985018);
let c = (0, s.zZ)(a.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [d.V, T.E, _.R, A.Y] }),
    g = (0, s.t_)(a.X.GIFT_PANEL, {
        usePredicate: () => !(0, u.dk)("LegacyGiftPanel"),
        useTitle: () => E.intl.string(E.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => [],
    }),
    I = (0, s.t_)(a.X.GIFT_PANEL, {
        usePredicate: () => (0, u.dk)("GiftPanel"),
        useTitle: () => E.intl.string(E.t["jcSP+g"]),
        buildLayout: () => [c],
    }),
    C = (0, s.i4)(a.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["jcSP+g"]),
        getLegacySearchKey: () => ((0, u.WJ)("GiftPanel") ? void 0 : S.H.GIFT_INVENTORY),
        icon: n.GiftIcon,
        trailing: { type: r.Si.BADGE_COUNT, useCount: () => (0, l.IO)().length },
        buildLayout: () => ((0, u.WJ)("GiftPanel") ? [I] : [g]),
    });
