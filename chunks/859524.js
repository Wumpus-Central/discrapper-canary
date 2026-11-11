n(321073);
var i,
    r = n(6161),
    a = n(681154);
n(256265);
var s = n(698441),
    l = n(432005),
    o = n(95701),
    d = n(734057),
    c = n(71393),
    u = n(4106),
    _ = n(596720),
    E = n(449e3),
    A = n(522606),
    f = n(652215);
n(792996);
var h =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.MORE = 2)] = "MORE"),
    (i[(i.LESS = 3)] = "LESS"),
    (i[(i.MUTED = 4)] = "MUTED"),
    i);
n.d(
    t,
    {},
    {
        Rh: function (e, t) {
            return {
                ...t,
                message: (0, l.rh)(e.message),
                threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
            };
        },
        Wu: function (e) {
            return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
        },
        YM: function (e) {
            return {
                id: e.id,
                type: _.Mm.CUSTOM_STATUS,
                activity: {
                    id: e.id,
                    author_id: e.data.user_id,
                    author_type: r.ContentInventoryAuthorType.USER,
                    traits: [],
                    participants: [],
                    content_type: a.ContentInventoryEntryType.CUSTOM_STATUS,
                    extra: {
                        type: "custom_status_extra",
                        status: e.data.text ?? "",
                        emoji_id: e.data.emoji_id,
                        emoji_name: e.data.emoji_name,
                        emoji_animated: e.data.emoji_animated,
                        attachments: e.data.attachments,
                    },
                },
                score: e.score,
                score_components: e.score_components,
            };
        },
        kx: async function (e, t, n, i) {
            let r = e.slice(t, n);
            if (0 === r.length) return;
            u.A.loadHydratedAttempt((0, A.V)(t, n));
            let a = r.filter((e) => null == i[e.id]),
                s = a
                    .filter((e) => e.type === _.Mm.MESSAGE)
                    .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
                l = a
                    .map((e) => {
                        if (e.type === _.Mm.MESSAGE) {
                            let t = [];
                            return (
                                e.data.message_context?.reply_message_id != null &&
                                    t.push({
                                        channel_id: e.data.channel_id,
                                        message_id: e.data.message_context.reply_message_id,
                                    }),
                                e.data.message_context?.before_message_id != null &&
                                    t.push({
                                        channel_id: e.data.channel_id,
                                        message_id: e.data.message_context.before_message_id,
                                    }),
                                e.data.message_context?.after_message_id != null &&
                                    t.push({
                                        channel_id: e.data.channel_id,
                                        message_id: e.data.message_context.after_message_id,
                                    }),
                                t
                            );
                        }
                        return [];
                    })
                    .flat()
                    .filter(Boolean),
                o = a
                    .filter((e) => e.type === _.Mm.ACTIVITY)
                    .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
            await u.A.fetchHydrated(t, n, { messageItems: [...s, ...l], activityItems: o });
        },
        n$: h,
        px: function (e) {
            switch (e.data.kind) {
                case "end":
                    return "end";
                case "loading":
                    return "loading";
                case "bottomLoading":
                    return "bottomLoading";
                case "message":
                    if (e.channelType === f.rbe.GUILD_ANNOUNCEMENT) return "announcement";
                    if (e.data.messageContext?.external_content_application_id != null) return "game_message";
                    return "message";
                case "guildEvent":
                    return "guild_event";
                case "contentInventory":
                    if (e.data.content.content_type === a.ContentInventoryEntryType.CUSTOM_STATUS)
                        return "hotwheels_custom_status";
                    return "hotwheels_gaming_activity";
                case "recommendedGuilds":
                    return "recommended_guilds";
                case "waterwheelsItem":
                    return "discover_item";
                case "forumThread":
                    return "forum_thread";
                case "icymiHeader":
                    return "icymi_header";
                default:
                    return "unknown";
            }
        },
        tI: function (e, t, n) {
            let i = E.A.getReadTimestamp(e);
            null == i && (i = n?.[e]);
            let r = E.A.getReadTimestamp(t);
            return (null == r && (r = n?.[t]), null == i && null == r) ? 0 : null == i ? -1 : null == r ? 1 : r - i;
        },
        xj: function (e) {
            return e.type === _.Mm.MESSAGE || e.type === _.Mm.GUILD_EVENT;
        },
        yx: function (e) {
            let t, n;
            switch (e.data.kind) {
                case "message":
                    t = e.data.message.channel_id;
                    break;
                case "forumThread":
                    t = e.data.threadChannel.id;
                    break;
                case "guildEvent":
                    n = s.Ay.getGuildScheduledEvent(e.data.eventId)?.guild_id;
                    break;
                default:
                    return !1;
            }
            let i = d.A.getChannel(t);
            if (i?.nsfw) return !0;
            let r = null != (n = i?.guild_id ?? n) ? c.A.getGuild(n) : null;
            return r?.nsfwLevel === f.ftr.EXPLICIT || r?.nsfwLevel === f.ftr.AGE_RESTRICTED;
        },
    },
);
