a.d(n, { B: () => E });
var t = a(627968),
    r = a(64700),
    l = a(308368),
    i = a(308528),
    o = a(442433),
    _ = a(544420),
    c = a(49229),
    d = a(956793),
    s = a(428249),
    u = a(67103),
    I = a(657331),
    f = a(734057),
    p = a(652215),
    h = a(381941),
    C = a(985018);
function E(e) {
    return {
        handlePrimaryAction: r.useCallback(
            (n) => {
                switch (n.type) {
                    case u.c.OPEN_DIRECT_MESSAGE:
                        if (null == n.userId) return;
                        (async () => {
                            try {
                                let e = await i.A.getOrEnsurePrivateChannel(n.userId);
                                d.default.selectPrivateChannel(e);
                            } catch {}
                        })();
                        break;
                    case u.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == n.channelId) return;
                        null != n.guildId
                            ? d.default.selectChannel({ guildId: n.guildId, channelId: n.channelId })
                            : d.default.selectPrivateChannel(n.channelId);
                        break;
                    case u.c.CONNECT_VOICE_CHANNEL:
                        if (null == n.channelId) return;
                        d.default.selectVoiceChannel(n.channelId);
                        break;
                    case u.c.DISCONNECT_VOICE_CHANNEL:
                        d.default.disconnect();
                        break;
                    case u.c.ACCEPT_FRIEND_REQUEST:
                        if (null == n.userId) return;
                        c.A.addRelationship({ userId: n.userId, context: { location: "friends-popout" } });
                        break;
                    case u.c.DECLINE_FRIEND_REQUEST:
                        if (null == n.userId) return;
                        c.A.removeRelationship(n.userId, { location: "friends-popout" });
                        break;
                    case u.c.CANCEL_FRIEND_REQUEST:
                        if (null == n.userId) return;
                        c.A.cancelFriendRequest(n.userId, { location: "friends-popout" });
                        break;
                    case u.c.SEND_FRIEND_REQUEST:
                        if (null == n.userId) return;
                        c.A.addRelationship({ userId: n.userId, context: { location: "friends-popout" } });
                        break;
                    case u.c.OPEN_FRIEND_MODAL:
                        if (null == n.userId) return;
                        (0, I.openUserProfileModal)({
                            userId: n.userId,
                            guildId: n.guildId ?? void 0,
                            channelId: n.channelId,
                            appContext: p.BRT.APP,
                        }),
                            e();
                        break;
                    case u.c.SEND_ACTIVITY_INVITE:
                        if (null == n.userId || null == n.activity) return;
                        l.A.sendActivityInviteUser({
                            type: p.xL.JOIN,
                            userId: n.userId,
                            activity: n.activity,
                            location: p.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case u.c.JOIN:
                        if (null == n.userId || null == n.activity) return;
                        _.Ay.join({
                            userId: n.userId,
                            sessionId: n.activity.session_id,
                            applicationId: n.activity.application_id,
                            channelId: null,
                            messageId: null,
                            source: p.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case u.c.ASK_TO_JOIN:
                        if (null == n.userId || null == n.activity) return;
                        l.A.sendActivityInviteUser({
                            type: p.xL.JOIN_REQUEST,
                            userId: n.userId,
                            activity: n.activity,
                            location: p.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        break;
                    case u.c.SEND_GAME_INVITE_MESSAGE: {
                        if (null == n.userId || null == n.gameEntry) return;
                        let e = n.gameEntry,
                            a = n.userId;
                        (async () => {
                            try {
                                let n = await i.A.getOrEnsurePrivateChannel(a);
                                d.default.selectPrivateChannel(n);
                                let t = f.A.getChannel(n);
                                if (null == t) return;
                                !0 === e.extra.fake_inventory_item
                                    ? await (0, s.J)({
                                          channel: t,
                                          content: C.intl.formatToPlainString(C.t.UVBA9g, {
                                              gameName: e.extra.game_name,
                                          }),
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: h.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                      })
                                    : await (0, s.d)({
                                          channel: t,
                                          content: C.intl.string(C.t.DwAcMz),
                                          entry: e,
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: h.Hx.CONTENT_INVENTORY_MEMBERLIST,
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
                        n.type;
                }
            },
            [e],
        ),
        handleContextMenu: r.useCallback((e) => {
            switch (e.type) {
                case u.K.FRIEND_ROW:
                    if (null == e.user) return;
                    (0, o.L3)(
                        e.event,
                        async () => {
                            let { default: n } = await Promise.all([a.e("97262"), a.e("32418"), a.e("22880")]).then(
                                a.bind(a, 668569),
                            );
                            return (a) => (0, t.jsx)(n, { ...a, user: e.user, appContext: p.BRT.APP });
                        },
                        { context: p.BRT.APP },
                    );
                    break;
                case u.K.FRIEND_GROUP:
                    if (null == e.groupId || null == e.groupName) return;
                    (0, o.L3)(e.event, async () => {
                        let { default: n } = await a.e("97717").then(a.bind(a, 607956));
                        return (a) => (0, t.jsx)(n, { ...a, groupId: e.groupId, groupName: e.groupName });
                    });
                    break;
                case u.K.DM_CHANNEL:
                    if (null == e.channel || null == e.user) return;
                    (0, o.L3)(e.event, async () => {
                        let { default: n } = await Promise.all([
                            a.e("97262"),
                            a.e("42128"),
                            a.e("39778"),
                            a.e("44607"),
                        ]).then(a.bind(a, 385913));
                        return (a) => (0, t.jsx)(n, { ...a, user: e.user, channel: e.channel, showModalItems: !1 });
                    });
                    break;
                case u.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, o.L3)(e.event, async () => {
                        let { default: n } = await Promise.all([a.e("97262"), a.e("60200")]).then(a.bind(a, 4027));
                        return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, selected: !1 });
                    });
                    break;
                case u.K.GUILD_TEXT_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, o.L3)(e.event, async () => {
                        let { default: n } = await Promise.all([a.e("97262"), a.e("2381"), a.e("77666")]).then(
                            a.bind(a, 370372),
                        );
                        return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, guild: e.guild });
                    });
                    break;
                case u.K.VOICE_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, o.L3)(e.event, async () => {
                        let { default: n } = await Promise.all([
                            a.e("97262"),
                            a.e("2381"),
                            a.e("40394"),
                            a.e("53378"),
                        ]).then(a.bind(a, 698193));
                        return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, guild: e.guild });
                    });
                    break;
                case u.K.VOICE_USER: {
                    if (null == e.user || null == e.channelId) return;
                    let n = e.guild?.id ?? null;
                    (0, o.L3)(e.event, async () => {
                        let { default: r } = await Promise.all([a.e("97262"), a.e("32418"), a.e("22880")]).then(
                            a.bind(a, 668569),
                        );
                        return (a) =>
                            (0, t.jsx)(r, {
                                ...a,
                                user: e.user,
                                guildId: n ?? void 0,
                                channelId: e.channelId,
                                appContext: p.BRT.APP,
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
