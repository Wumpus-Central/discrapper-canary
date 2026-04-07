n.d(t, { B: () => g });
var i = n(627968),
    r = n(64700),
    a = n(308368),
    l = n(308528),
    s = n(442433),
    o = n(49229),
    d = n(956793),
    c = n(428249),
    u = n(67103),
    A = n(657331),
    h = n(734057),
    _ = n(652215),
    m = n(381941),
    p = n(985018);
function g(e) {
    return {
        handlePrimaryAction: r.useCallback(
            (t) => {
                switch (t.type) {
                    case u.c.OPEN_DIRECT_MESSAGE:
                        if (null == t.userId) return;
                        (async () => {
                            try {
                                let e = await l.A.getOrEnsurePrivateChannel(t.userId);
                                d.default.selectPrivateChannel(e);
                            } catch {}
                        })();
                        break;
                    case u.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == t.channelId) return;
                        null != t.guildId
                            ? d.default.selectChannel({ guildId: t.guildId, channelId: t.channelId })
                            : d.default.selectPrivateChannel(t.channelId);
                        break;
                    case u.c.CONNECT_VOICE_CHANNEL:
                        if (null == t.channelId) return;
                        d.default.selectVoiceChannel(t.channelId);
                        break;
                    case u.c.DISCONNECT_VOICE_CHANNEL:
                        d.default.disconnect();
                        break;
                    case u.c.ACCEPT_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        o.A.addRelationship({ userId: t.userId, context: { location: "friends-popout" } });
                        break;
                    case u.c.DECLINE_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        o.A.removeRelationship(t.userId, { location: "friends-popout" });
                        break;
                    case u.c.CANCEL_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        o.A.cancelFriendRequest(t.userId, { location: "friends-popout" });
                        break;
                    case u.c.SEND_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        o.A.addRelationship({ userId: t.userId, context: { location: "friends-popout" } });
                        break;
                    case u.c.OPEN_FRIEND_MODAL:
                        if (null == t.userId) return;
                        (0, A.openUserProfileModal)({
                            userId: t.userId,
                            guildId: t.guildId ?? void 0,
                            channelId: t.channelId,
                            appContext: _.BRT.APP,
                        }),
                            e();
                        break;
                    case u.c.SEND_ACTIVITY_INVITE:
                        if (null == t.userId || null == t.activity) return;
                        a.A.sendActivityInviteUser({
                            type: _.xL.JOIN,
                            userId: t.userId,
                            activity: t.activity,
                            location: _.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case u.c.ASK_TO_JOIN:
                        if (null == t.userId || null == t.activity) return;
                        a.A.sendActivityInviteUser({
                            type: _.xL.JOIN_REQUEST,
                            userId: t.userId,
                            activity: t.activity,
                            location: _.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case u.c.SEND_GAME_INVITE_MESSAGE: {
                        if (null == t.userId || null == t.gameEntry) return;
                        let e = t.gameEntry,
                            n = t.userId;
                        (async () => {
                            try {
                                let t = await l.A.getOrEnsurePrivateChannel(n);
                                d.default.selectPrivateChannel(t);
                                let i = h.A.getChannel(t);
                                if (null == i) return;
                                !0 === e.extra.fake_inventory_item
                                    ? await (0, c.J)({
                                          channel: i,
                                          content: p.intl.formatToPlainString(p.t.UVBA9g, {
                                              gameName: e.extra.game_name,
                                          }),
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: m.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                      })
                                    : await (0, c.d)({
                                          channel: i,
                                          content: p.intl.string(p.t.DwAcMz),
                                          entry: e,
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: m.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                      });
                            } catch {}
                        })();
                        break;
                    }
                    case u.c.SEARCH_FRIENDS:
                    case u.c.USER_CONTEXT_MENU:
                    case u.c.OPEN_SETTINGS_MODAL:
                    case u.c.TAB_CHANGE:
                        break;
                    default:
                        t.type;
                }
            },
            [e],
        ),
        handleContextMenu: r.useCallback((e) => {
            switch (e.type) {
                case u.K.FRIEND_ROW:
                    if (null == e.user) return;
                    (0, s.L3)(
                        e.event,
                        async () => {
                            let { default: t } = await Promise.all([n.e("97262"), n.e("32418"), n.e("54631")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) => (0, i.jsx)(t, { ...n, user: e.user, appContext: _.BRT.APP });
                        },
                        { context: _.BRT.APP },
                    );
                    break;
                case u.K.FRIEND_GROUP:
                    if (null == e.groupId || null == e.groupName) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await n.e("97717").then(n.bind(n, 607956));
                        return (n) => (0, i.jsx)(t, { ...n, groupId: e.groupId, groupName: e.groupName });
                    });
                    break;
                case u.K.DM_CHANNEL:
                    if (null == e.channel || null == e.user) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([
                            n.e("97262"),
                            n.e("42128"),
                            n.e("39778"),
                            n.e("34408"),
                        ]).then(n.bind(n, 385913));
                        return (n) => (0, i.jsx)(t, { ...n, user: e.user, channel: e.channel, showModalItems: !1 });
                    });
                    break;
                case u.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, selected: !1 });
                    });
                    break;
                case u.K.GUILD_TEXT_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("2381"), n.e("77666")]).then(
                            n.bind(n, 370372),
                        );
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, guild: e.guild });
                    });
                    break;
                case u.K.VOICE_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([
                            n.e("97262"),
                            n.e("2381"),
                            n.e("40394"),
                            n.e("30997"),
                        ]).then(n.bind(n, 698193));
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, guild: e.guild });
                    });
                    break;
                case u.K.VOICE_USER: {
                    if (null == e.user || null == e.channelId) return;
                    let t = e.guild?.id ?? null;
                    (0, s.L3)(e.event, async () => {
                        let { default: r } = await Promise.all([n.e("97262"), n.e("32418"), n.e("54631")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) =>
                            (0, i.jsx)(r, {
                                ...n,
                                user: e.user,
                                guildId: t ?? void 0,
                                channelId: e.channelId,
                                appContext: _.BRT.APP,
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
