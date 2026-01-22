i.d(e, {
    w: () => E,
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(224515),
    a = i(435757),
    o = i(531525),
    T = i(985018);
let A = (0, l.t_)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        usePredicate: () => !(0, r.dk)("LegacyPremiumGuildSubscriptionsPanel"),
        useTitle: () => T.intl.string(T.t["+CbP2v"]),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => [],
    }),
    S = (0, l.t_)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        usePredicate: () => (0, r.dk)("PremiumGuildSubscriptionsPanel"),
        useTitle: () => T.intl.string(T.t["+CbP2v"]),
        buildLayout: () => [a.t],
    }),
    E = (0, l.i4)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["+CbP2v"]),
        getLegacySearchKey: () => ((0, r.WJ)("PremiumGuildSubscriptionsPanel") ? void 0 : o.H.GUILD_BOOSTING),
        icon: n.BoostGemIcon,
        buildLayout: () => ((0, r.WJ)("PremiumGuildSubscriptionsPanel") ? [S] : [A]),
    });
