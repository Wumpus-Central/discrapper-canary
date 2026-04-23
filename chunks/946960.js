n.d(t, { cA: () => A, cJ: () => h, hV: () => c });
var i = n(554146),
    r = n(174768),
    a = n(692125),
    l = n(701626),
    s = n(731667),
    o = n(255161),
    d = n(403362),
    u = n(652215);
let c = "lastHiddenChannelNotice",
    A = [
        { type: u.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: i.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: u.n5X.GUILD_BOOSTING,
            store: l.A,
            dismissibleContentType: i.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: u.n5X.GUILD_BANNER, store: a.A, dismissibleContentType: i.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: u.n5X.INVITE, store: o.A, dismissibleContentType: i.M.CHANNEL_NOTICE_INVITE },
        { type: u.n5X.HUB_LINK, store: s.A, dismissibleContentType: i.M.CHANNEL_NOTICE_HUBLINK },
        { type: u.n5X.QUICKSWITCHER, store: r.A, dismissibleContentType: i.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: u.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: i.M.LINKED_ROLE_ADMIN_GUILD },
        { type: u.n5X.GAME_CLAIM, dismissibleContentType: i.M.GAME_CLAIM_COACHMARK },
    ],
    h = A.map((e) => e.store).filter(d.Vq);
