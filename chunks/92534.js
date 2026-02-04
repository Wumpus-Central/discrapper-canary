n.d(t, {
    B: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(308528),
    a = n(442433),
    s = n(49229),
    o = n(956793),
    c = n(67103),
    u = n(657331),
    d = n(652215);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e) {
    return {
        handlePrimaryAction: i.useCallback(
            (t) => {
                switch (t.type) {
                    case c.c.OPEN_DIRECT_MESSAGE:
                        if (null == t.userId) return;
                        (async () => {
                            try {
                                let e = await l.A.getOrEnsurePrivateChannel(t.userId);
                                o.default.selectPrivateChannel(e);
                            } catch (e) {}
                        })();
                        break;
                    case c.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == t.channelId) return;
                        null != t.guildId
                            ? o.default.selectChannel({
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                              })
                            : o.default.selectPrivateChannel(t.channelId);
                        break;
                    case c.c.CONNECT_VOICE_CHANNEL:
                        if (null == t.channelId) return;
                        o.default.selectVoiceChannel(t.channelId);
                        break;
                    case c.c.DISCONNECT_VOICE_CHANNEL:
                        o.default.disconnect();
                        break;
                    case c.c.ACCEPT_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.addRelationship({
                            userId: t.userId,
                            context: {
                                location: "friends-popout",
                            },
                        });
                        break;
                    case c.c.DECLINE_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.removeRelationship(t.userId, {
                            location: "friends-popout",
                        });
                        break;
                    case c.c.CANCEL_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.cancelFriendRequest(t.userId, {
                            location: "friends-popout",
                        });
                        break;
                    case c.c.SEND_FRIEND_REQUEST:
                        if (null == t.userId) return;
                        s.A.addRelationship({
                            userId: t.userId,
                            context: {
                                location: "friends-popout",
                            },
                        });
                        break;
                    case c.c.OPEN_FRIEND_MODAL:
                        var n;
                        if (null == t.userId) return;
                        (0, u.openUserProfileModal)({
                            userId: t.userId,
                            guildId: null != (n = t.guildId) ? n : void 0,
                            channelId: t.channelId,
                            appContext: d.BRT.APP,
                        }),
                            e();
                        break;
                    case c.c.SEARCH_FRIENDS:
                    case c.c.SEND_ACTIVITY_INVITE:
                    case c.c.ASK_TO_JOIN:
                    case c.c.USER_CONTEXT_MENU:
                    case c.c.OPEN_SETTINGS_MODAL:
                    case c.c.TAB_CHANGE:
                        break;
                    default:
                        t.type;
                }
            },
            [e],
        ),
        handleContextMenu: i.useCallback((e) => {
            switch (e.type) {
                case c.K.FRIEND_ROW:
                    if (null == e.user) return;
                    (0, a.L3)(
                        e.event,
                        async () => {
                            let { default: t } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    h(p({}, n), {
                                        user: e.user,
                                        appContext: d.BRT.APP,
                                    }),
                                );
                        },
                        {
                            context: d.BRT.APP,
                        },
                    );
                    break;
                case c.K.FRIEND_GROUP:
                    if (null == e.groupId || null == e.groupName) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: t } = await n.e("97717").then(n.bind(n, 607956));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                h(p({}, n), {
                                    groupId: e.groupId,
                                    groupName: e.groupName,
                                }),
                            );
                    });
                    break;
                case c.K.DM_CHANNEL:
                    if (null == e.channel || null == e.user) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([
                            n.e("97262"),
                            n.e("29534"),
                            n.e("93169"),
                            n.e("39778"),
                            n.e("54266"),
                        ]).then(n.bind(n, 385913));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                h(p({}, n), {
                                    user: e.user,
                                    channel: e.channel,
                                    showModalItems: !1,
                                }),
                            );
                    });
                    break;
                case c.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                h(p({}, n), {
                                    channel: e.channel,
                                    selected: !1,
                                }),
                            );
                    });
                    break;
                case c.K.GUILD_TEXT_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                            n.bind(n, 370372),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                h(p({}, n), {
                                    channel: e.channel,
                                    guild: e.guild,
                                }),
                            );
                    });
                    break;
                case c.K.VOICE_CHANNEL:
                    if (null == e.channel || null == e.guild) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([
                            n.e("97262"),
                            n.e("57287"),
                            n.e("40394"),
                            n.e("30997"),
                        ]).then(n.bind(n, 698193));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                h(p({}, n), {
                                    channel: e.channel,
                                    guild: e.guild,
                                }),
                            );
                    });
                    break;
                case c.K.VOICE_USER: {
                    var t, i;
                    if (null == e.user || null == e.channelId) return;
                    let l = null != (t = null == (i = e.guild) ? void 0 : i.id) ? t : null;
                    (0, a.L3)(e.event, async () => {
                        let { default: t } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                h(p({}, n), {
                                    user: e.user,
                                    guildId: null != l ? l : void 0,
                                    channelId: e.channelId,
                                    appContext: d.BRT.APP,
                                }),
                            );
                    });
                    break;
                }
                default:
                    e.type;
            }
        }, []),
    };
}
