n.d(t, { B: () => A });
var i = n(627968),
    r = n(64700),
    a = n(308528),
    l = n(442433),
    s = n(49229),
    o = n(956793),
    d = n(67103),
    c = n(657331),
    u = n(652215);
function A(e) {
    return {
        handlePrimaryAction: r.useCallback(
            (t) => {
                switch (t.type) {
                    case d.c.OPEN_DIRECT_MESSAGE:
                        if (null == t.userId) return;
                        (async () => {
                            try {
                                let e = await a.A.getOrEnsurePrivateChannel(t.userId);
                                o.default.selectPrivateChannel(e);
                            } catch {}
                        })();
                        break;
                    case d.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == t.channelId) return;
                        null != t.guildId
                            ? o.default.selectChannel({ guildId: t.guildId, channelId: t.channelId })
                            : o.default.selectPrivateChannel(t.channelId);
                        break;
                    case d.c.CONNECT_VOICE_CHANNEL:
                        if (null == t.channelId) return;
                        o.default.selectVoiceChannel(t.channelId);
                        break;
                    case d.c.DISCONNECT_VOICE_CHANNEL:
                        o.default.disconnect();
                        break;
                    case d.c.ACCEPT_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.addRelationship({ userId: t.userId, context: { location: "friends-popout" } });
                        break;
                    case d.c.DECLINE_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.removeRelationship(t.userId, { location: "friends-popout" });
                        break;
                    case d.c.CANCEL_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.cancelFriendRequest(t.userId, { location: "friends-popout" });
                        break;
                    case d.c.SEND_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.addRelationship({ userId: t.userId, context: { location: "friends-popout" } });
                        break;
                    case d.c.OPEN_FRIEND_MODAL:
                        if (null == t.userId) return;
                        (0, c.openUserProfileModal)({
                            userId: t.userId,
                            guildId: t.guildId ?? void 0,
                            channelId: t.channelId,
                            appContext: u.BRT.APP,
                        }),
                            e();
                        break;
                    case d.c.SEARCH_FRIENDS:
                    case d.c.SEND_ACTIVITY_INVITE:
                    case d.c.ASK_TO_JOIN:
                    case d.c.USER_CONTEXT_MENU:
                    case d.c.OPEN_SETTINGS_MODAL:
                    case d.c.TAB_CHANGE:
                        break;
                    default:
                        t.type;
                }
            },
            [e],
        ),
        handleContextMenu: r.useCallback((e) => {
            switch (e.type) {
                case d.K.FRIEND_ROW:
                    if (null == e.user) return;
                    (0, l.L3)(
                        e.event,
                        async () => {
                            let { default: t } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) => (0, i.jsx)(t, { ...n, user: e.user, appContext: u.BRT.APP });
                        },
                        { context: u.BRT.APP },
                    );
                    break;
                case d.K.FRIEND_GROUP:
                    if (null == e.groupId || null == e.groupName) return;
                    (0, l.L3)(e.event, async () => {
                        let { default: t } = await n.e("97717").then(n.bind(n, 607956));
                        return (n) => (0, i.jsx)(t, { ...n, groupId: e.groupId, groupName: e.groupName });
                    });
                    break;
                case d.K.DM_CHANNEL:
                    if (null == e.channel || null == e.user) return;
                    (0, l.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([
                            n.e("97262"),
                            n.e("42128"),
                            n.e("39778"),
                            n.e("54266"),
                        ]).then(n.bind(n, 385913));
                        return (n) => (0, i.jsx)(t, { ...n, user: e.user, channel: e.channel, showModalItems: !1 });
                    });
                    break;
                case d.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, l.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, selected: !1 });
                    });
                    break;
                case d.K.GUILD_TEXT_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, l.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                            n.bind(n, 370372),
                        );
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, guild: e.guild });
                    });
                    break;
                case d.K.VOICE_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, l.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([
                            n.e("97262"),
                            n.e("57287"),
                            n.e("40394"),
                            n.e("30997"),
                        ]).then(n.bind(n, 698193));
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, guild: e.guild });
                    });
                    break;
                case d.K.VOICE_USER: {
                    if (null == e.user || null == e.channelId) return;
                    let t = e.guild?.id ?? null;
                    (0, l.L3)(e.event, async () => {
                        let { default: r } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) =>
                            (0, i.jsx)(r, {
                                ...n,
                                user: e.user,
                                guildId: t ?? void 0,
                                channelId: e.channelId,
                                appContext: u.BRT.APP,
                            });
                    });
                    break;
                }
                default:
                    e.type;
            }
        }, []),
    };
}
