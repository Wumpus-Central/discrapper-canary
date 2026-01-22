n.d(t, {
    cA: () => p,
    cJ: () => f,
    hV: () => d,
});
var r = n(554146),
    i = n(174768),
    l = n(692125),
    a = n(701626),
    s = n(731667),
    o = n(255161),
    c = n(403362),
    u = n(652215);
let d = "lastHiddenChannelNotice",
    p = [
        {
            type: u.n5X.CLAN_ADMIN_UPSELL,
            dismissibleContentType: r.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL,
        },
        {
            type: u.n5X.GUILD_BOOSTING,
            store: a.A,
            dismissibleContentType: r.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        {
            type: u.n5X.GUILD_BANNER,
            store: l.A,
            dismissibleContentType: r.M.CHANNEL_NOTICE_GUILD_BANNER,
        },
        {
            type: u.n5X.INVITE,
            store: o.A,
            dismissibleContentType: r.M.CHANNEL_NOTICE_INVITE,
        },
        {
            type: u.n5X.HUB_LINK,
            store: s.A,
            dismissibleContentType: r.M.CHANNEL_NOTICE_HUBLINK,
        },
        {
            type: u.n5X.QUICKSWITCHER,
            store: i.A,
            dismissibleContentType: r.M.CHANNEL_NOTICE_QUICKSWITCHER,
        },
        {
            type: u.n5X.LINKED_ROLES_ADMIN,
            dismissibleContentType: r.M.LINKED_ROLE_ADMIN_GUILD,
        },
    ],
    f = p.map((e) => e.store).filter(c.Vq);
