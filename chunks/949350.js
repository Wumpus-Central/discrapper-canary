i.d(e, { Q: () => N });
var n = i(934551),
    l = i(35587),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(358776),
    o = i(586685),
    T = i(525707),
    A = i(9653),
    S = i(473146),
    E = i(709747),
    d = i(531525),
    _ = i(985018);
let I = (0, s.zZ)(u.X.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [T.V, S.E, A.R, E.Y],
    }),
    g = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyGiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => [],
    }),
    c = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => (0, a.dk)("GiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        buildLayout: () => [I],
    }),
    N = (0, s.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        getLegacySearchKey: () => ((0, a.WJ)("GiftPanel") ? void 0 : d.H.GIFT_INVENTORY),
        icon: n.GiftIcon,
        trailing: {
            type: r.S.BADGE_COUNT,
            useCount: () => (0, l.IO)().length,
        },
        buildLayout: () => ((0, a.WJ)("GiftPanel") ? [c] : [g]),
    });
