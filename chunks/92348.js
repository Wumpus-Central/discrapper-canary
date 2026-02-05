i.d(e, { w: () => S });
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(224515),
    u = i(435757),
    o = i(531525),
    d = i(985018);
let T = (0, l.t_)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        usePredicate: () => !(0, r.dk)("LegacyPremiumGuildSubscriptionsPanel"),
        useTitle: () => d.intl.string(d.t["+CbP2v"]),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    A = (0, l.t_)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        usePredicate: () => (0, r.dk)("PremiumGuildSubscriptionsPanel"),
        useTitle: () => d.intl.string(d.t["+CbP2v"]),
        buildLayout: () => [u.t],
    }),
    S = (0, l.i4)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["+CbP2v"]),
        getLegacySearchKey: () => ((0, r.WJ)("PremiumGuildSubscriptionsPanel") ? void 0 : o.H.GUILD_BOOSTING),
        icon: n.BoostGemIcon,
        buildLayout: () => ((0, r.WJ)("PremiumGuildSubscriptionsPanel") ? [A] : [T]),
    });
