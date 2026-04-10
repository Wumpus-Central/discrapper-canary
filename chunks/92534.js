n.d(t, { B: () => E });
var i = n(627968),
    l = n(64700),
    r = n(308368),
    a = n(308528),
    s = n(442433),
    o = n(544420),
    d = n(49229),
    c = n(956793),
    u = n(428249),
    A = n(67103),
    h = n(657331),
    _ = n(734057),
    m = n(652215),
    g = n(381941),
    p = n(985018);
function E(e) {
    return {
        handlePrimaryAction: l.useCallback(
            (t) => {
                switch (t.type) {
                    case A.c.OPEN_DIRECT_MESSAGE:
                        if (null == t.userId) return;
                        (async () => {
                            try {
                                let e = await a.A.getOrEnsurePrivateChannel(t.userId);
                                c.default.selectPrivateChannel(e);
                            } catch {}
                        })();
                        break;
                    case A.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == t.channelId) return;
                        null != t.guildId
                            ? c.default.selectChannel({ guildId: t.guildId, channelId: t.channelId })
                            : c.default.selectPrivateChannel(t.channelId);
                        break;
                    case A.c.CONNECT_VOICE_CHANNEL:
                        if (null == t.channelId) return;
                        c.default.selectVoiceChannel(t.channelId);
                        break;
                    case A.c.DISCONNECT_VOICE_CHANNEL:
                        c.default.disconnect();
                        break;
                    case A.c.ACCEPT_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        d.A.addRelationship({ userId: t.userId, context: { location: "friends-popout" } });
                        break;
                    case A.c.DECLINE_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        d.A.removeRelationship(t.userId, { location: "friends-popout" });
                        break;
                    case A.c.CANCEL_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        d.A.cancelFriendRequest(t.userId, { location: "friends-popout" });
                        break;
                    case A.c.SEND_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        d.A.addRelationship({ userId: t.userId, context: { location: "friends-popout" } });
                        break;
                    case A.c.OPEN_FRIEND_MODAL:
                        if (null == t.userId) return;
                        (0, h.openUserProfileModal)({
                            userId: t.userId,
                            guildId: t.guildId ?? void 0,
                            channelId: t.channelId,
                            appContext: m.BRT.APP,
                        }),
                            e();
                        break;
                    case A.c.SEND_ACTIVITY_INVITE:
                        if (null == t.userId || null == t.activity) return;
                        r.A.sendActivityInviteUser({
                            type: m.xL.JOIN,
                            userId: t.userId,
                            activity: t.activity,
                            location: m.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case A.c.JOIN:
                        if (null == t.userId || null == t.activity) return;
                        o.Ay.join({
                            userId: t.userId,
                            sessionId: t.activity.session_id,
                            applicationId: t.activity.application_id,
                            channelId: null,
                            messageId: null,
                            source: m.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case A.c.ASK_TO_JOIN:
                        if (null == t.userId || null == t.activity) return;
                        r.A.sendActivityInviteUser({
                            type: m.xL.JOIN_REQUEST,
                            userId: t.userId,
                            activity: t.activity,
                            location: m.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case A.c.SEND_GAME_INVITE_MESSAGE: {
                        if (null == t.userId || null == t.gameEntry) return;
                        let e = t.gameEntry,
                            n = t.userId;
                        (async () => {
                            try {
                                let t = await a.A.getOrEnsurePrivateChannel(n);
                                c.default.selectPrivateChannel(t);
                                let i = _.A.getChannel(t);
                                if (null == i) return;
                                !0 === e.extra.fake_inventory_item
                                    ? await (0, u.J)({
                                          channel: i,
                                          content: p.intl.formatToPlainString(p.t.UVBA9g, {
                                              gameName: e.extra.game_name,
                                          }),
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: g.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                      })
                                    : await (0, u.d)({
                                          channel: i,
                                          content: p.intl.string(p.t.DwAcMz),
                                          entry: e,
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: g.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                      });
                            } catch {}
                        })();
                        break;
                    }
                    case A.c.SEARCH_FRIENDS:
                    case A.c.USER_CONTEXT_MENU:
                    case A.c.OPEN_SETTINGS_MODAL:
                    case A.c.TAB_CHANGE:
                        break;
                    default:
                        t.type;
                }
            },
            [e],
        ),
        handleContextMenu: l.useCallback((e) => {
            switch (e.type) {
                case A.K.FRIEND_ROW:
                    if (null == e.user) return;
                    (0, s.L3)(
                        e.event,
                        async () => {
                            let { default: t } = await Promise.all([n.e("97262"), n.e("32418"), n.e("77012")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) => (0, i.jsx)(t, { ...n, user: e.user, appContext: m.BRT.APP });
                        },
                        { context: m.BRT.APP },
                    );
                    break;
                case A.K.FRIEND_GROUP:
                    if (null == e.groupId || null == e.groupName) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await n.e("97717").then(n.bind(n, 607956));
                        return (n) => (0, i.jsx)(t, { ...n, groupId: e.groupId, groupName: e.groupName });
                    });
                    break;
                case A.K.DM_CHANNEL:
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
                case A.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, selected: !1 });
                    });
                    break;
                case A.K.GUILD_TEXT_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("2381"), n.e("77666")]).then(
                            n.bind(n, 370372),
                        );
                        return (n) => (0, i.jsx)(t, { ...n, channel: e.channel, guild: e.guild });
                    });
                    break;
                case A.K.VOICE_CHANNEL:
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
                case A.K.VOICE_USER: {
                    if (null == e.user || null == e.channelId) return;
                    let t = e.guild?.id ?? null;
                    (0, s.L3)(e.event, async () => {
                        let { default: l } = await Promise.all([n.e("97262"), n.e("32418"), n.e("77012")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                user: e.user,
                                guildId: t ?? void 0,
                                channelId: e.channelId,
                                appContext: m.BRT.APP,
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
