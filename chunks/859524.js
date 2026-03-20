n.d(t, {
    $r: () => y,
    Lg: () => b,
    P0: () => R,
    Rh: () => v,
    Vq: () => f,
    Wu: () => N,
    YM: () => O,
    _x: () => x,
    be: () => M,
    kx: () => S,
    n$: () => C,
    px: () => D,
    tI: () => L,
    xj: () => T,
    yx: () => P,
}),
    n(321073);
var i,
    a = n(6161),
    l = n(681154);
n(311907), n(256265);
var r = n(698441),
    s = n(141468),
    o = n(95701),
    d = n(734057),
    c = n(71393);
n(320501);
var u = n(222823),
    A = n(661191),
    h = n(4106),
    _ = n(335934),
    m = n(800319),
    g = n(883344),
    p = n(596720),
    E = n(449e3),
    I = n(652215);
function f(e, t) {
    return `hydration-${e}-${t}`;
}
n(985018);
var C =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.MORE = 2)] = "MORE"),
    (i[(i.LESS = 3)] = "LESS"),
    (i[(i.MUTED = 4)] = "MUTED"),
    i);
function T(e) {
    return e.type === p.Mm.MESSAGE || e.type === p.Mm.GUILD_EVENT;
}
function N(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function S(e, t, n) {
    let i = g.A.getHydratedItems(),
        a = e.slice(t, n);
    if (0 === a.length) return;
    h.A.loadHydratedAttempt(f(t, n));
    let l = a.filter((e) => null == i[e.id]),
        r = l
            .filter((e) => e.type === p.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        s = l
            .map((e) => {
                if (e.type === p.Mm.MESSAGE) {
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
        o = l
            .filter((e) => e.type === p.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await h.A.fetchHydrated(t, n, { messageItems: [...r, ...s], activityItems: o });
}
async function x() {
    let e = g.A.getUnreadDisplayItems(),
        t = g.A.getReadDisplayItems(),
        n = g.A.getNextIndexToHydrate();
    await S([...e, ...t], n, n + p.w5);
}
function v(e, t) {
    return {
        ...t,
        message: (0, s.rh)(e.message),
        threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function y(e, t) {
    let n = u.Ay.getTrackedAckMessageId(e);
    return null == n || A.default.extractTimestamp(t) > A.default.extractTimestamp(n);
}
function b(e) {
    return (0, _.HF)(e);
}
function O(e) {
    return {
        id: e.id,
        type: p.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: a.ContentInventoryAuthorType.USER,
            traits: [],
            participants: [],
            content_type: l.ContentInventoryEntryType.CUSTOM_STATUS,
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
}
function L(e, t, n) {
    let i = E.A.getReadTimestamp(e);
    null == i && (i = n?.[e]);
    let a = E.A.getReadTimestamp(t);
    return (null == a && (a = n?.[t]), null == i && null == a) ? 0 : null == i ? -1 : null == a ? 1 : a - i;
}
function R(e) {
    let t = [...g.A.getUnreadDisplayItems(), ...g.A.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !m.P.has(i.item.data.kind)) {
            n = i.item.id;
            break;
        }
    }
    if (null == n) return [];
    let i = t.findIndex((e) => e.id === n);
    return i < 0 ? [] : t.slice(0, i + 1);
}
function P(e) {
    let t, n;
    switch (e.data.kind) {
        case "message":
            t = e.data.message.channel_id;
            break;
        case "forumThread":
            t = e.data.threadChannel.id;
            break;
        case "guildEvent":
            n = r.Ay.getGuildScheduledEvent(e.data.eventId)?.guild_id;
            break;
        default:
            return !1;
    }
    let i = d.A.getChannel(t);
    if (i?.nsfw) return !0;
    let a = null != (n = i?.guild_id ?? n) ? c.A.getGuild(n) : null;
    return a?.nsfwLevel === I.ftr.EXPLICIT || a?.nsfwLevel === I.ftr.AGE_RESTRICTED;
}
function D(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === I.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            if (e.data.messageContext?.external_content_application_id != null) return "game_message";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === l.ContentInventoryEntryType.CUSTOM_STATUS)
                return "hotwheels_custom_status";
            return "hotwheels_gaming_activity";
        case "recommendedGuilds":
            return "recommended_guilds";
        case "forumThread":
            return "forum_thread";
        case "icymiHeader":
            return "icymi_header";
        default:
            return "unknown";
    }
}
async function M(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    g.A.getDehydratedItems().forEach((n) => {
        n.type === p.Mm.MESSAGE &&
            n.data.channel_type === I.rbe.GUILD_ANNOUNCEMENT &&
            A.default.compare(u.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                A.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await h.A.clearReadStates(),
        await h.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await h.A.reloadICYMITab(),
        await h.A.getGuildChannelScores(),
        h.A.getRecommendedGuilds();
}
