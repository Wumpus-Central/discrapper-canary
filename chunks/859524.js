"use strict";
n.d(t, {
    $r: () => L,
    Lg: () => y,
    P0: () => b,
    Rh: () => R,
    Vq: () => m,
    Wu: () => N,
    YM: () => D,
    _x: () => O,
    be: () => U,
    kx: () => C,
    n$: () => g,
    px: () => P,
    tI: () => v,
    xj: () => S,
    yx: () => M,
}),
    n(321073);
var i,
    r = n(6161),
    a = n(681154);
n(17928), n(256265);
var s = n(698441),
    l = n(320095),
    o = n(95701),
    d = n(734057),
    c = n(71393);
n(232835);
var u = n(568548),
    _ = n(935208),
    E = n(4106),
    A = n(519059),
    h = n(800319),
    I = n(557740),
    f = n(596720),
    p = n(449e3),
    T = n(652215);
function m(e, t) {
    return `hydration-${e}-${t}`;
}
n(375708);
var g =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.MORE = 2)] = "MORE"),
    (i[(i.LESS = 3)] = "LESS"),
    (i[(i.MUTED = 4)] = "MUTED"),
    i);
function S(e) {
    return e.type === f.Mm.MESSAGE || e.type === f.Mm.GUILD_EVENT;
}
function N(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function C(e, t, n) {
    let i = I.A.getHydratedItems(),
        r = e.slice(t, n);
    if (0 === r.length) return;
    E.A.loadHydratedAttempt(m(t, n));
    let a = r.filter((e) => null == i[e.id]),
        s = a
            .filter((e) => e.type === f.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        l = a
            .map((e) => {
                if (e.type === f.Mm.MESSAGE) {
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
            .filter((e) => e.type === f.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await E.A.fetchHydrated(t, n, { messageItems: [...s, ...l], activityItems: o });
}
async function O() {
    let e = I.A.getUnreadDisplayItems(),
        t = I.A.getReadDisplayItems(),
        n = I.A.getNextIndexToHydrate();
    await C([...e, ...t], n, n + f.w5);
}
function R(e, t) {
    return {
        ...t,
        message: (0, l.rh)(e.message),
        threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function L(e, t) {
    let n = u.Ay.getTrackedAckMessageId(e);
    return null == n || _.default.extractTimestamp(t) > _.default.extractTimestamp(n);
}
function y(e) {
    return (0, A.HF)(e);
}
function D(e) {
    return {
        id: e.id,
        type: f.Mm.CUSTOM_STATUS,
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
}
function v(e, t, n) {
    let i = p.A.getReadTimestamp(e);
    null == i && (i = n?.[e]);
    let r = p.A.getReadTimestamp(t);
    return (null == r && (r = n?.[t]), null == i && null == r) ? 0 : null == i ? -1 : null == r ? 1 : r - i;
}
function b(e) {
    let t = [...I.A.getUnreadDisplayItems(), ...I.A.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !h.P.has(i.item.data.kind)) {
            n = i.item.id;
            break;
        }
    }
    if (null == n) return [];
    let i = t.findIndex((e) => e.id === n);
    return i < 0 ? [] : t.slice(0, i + 1);
}
function M(e) {
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
    return r?.nsfwLevel === T.ftr.EXPLICIT || r?.nsfwLevel === T.ftr.AGE_RESTRICTED;
}
function P(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === T.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
        case "forumThread":
            return "forum_thread";
        case "icymiHeader":
            return "icymi_header";
        default:
            return "unknown";
    }
}
async function U(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    I.A.getDehydratedItems().forEach((n) => {
        n.type === f.Mm.MESSAGE &&
            n.data.channel_type === T.rbe.GUILD_ANNOUNCEMENT &&
            _.default.compare(u.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                _.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await E.A.clearReadStates(),
        await E.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await E.A.reloadICYMITab(),
        await E.A.getGuildChannelScores(),
        E.A.getRecommendedGuilds();
}
