"use strict";
n.d(t, {
    $r: () => O,
    Lg: () => R,
    P0: () => L,
    Rh: () => v,
    Vq: () => I,
    Wu: () => N,
    YM: () => b,
    _x: () => C,
    be: () => P,
    kx: () => y,
    n$: () => T,
    px: () => M,
    tI: () => D,
    xj: () => S,
    yx: () => w,
}),
    n(321073);
var i,
    r = n(6161),
    s = n(681154);
n(17928), n(256265);
var a = n(698441),
    o = n(320095),
    l = n(95701),
    u = n(734057),
    c = n(71393);
n(232835);
var d = n(222823),
    _ = n(935208),
    f = n(4106),
    h = n(519059),
    p = n(800319),
    E = n(557740),
    m = n(596720),
    g = n(449e3),
    A = n(652215);
function I(e, t) {
    return `hydration-${e}-${t}`;
}
n(375708);
var T =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.MORE = 2)] = "MORE"),
    (i[(i.LESS = 3)] = "LESS"),
    (i[(i.MUTED = 4)] = "MUTED"),
    i);
function S(e) {
    return e.type === m.Mm.MESSAGE || e.type === m.Mm.GUILD_EVENT;
}
function N(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function y(e, t, n) {
    let i = E.A.getHydratedItems(),
        r = e.slice(t, n);
    if (0 === r.length) return;
    f.A.loadHydratedAttempt(I(t, n));
    let s = r.filter((e) => null == i[e.id]),
        a = s
            .filter((e) => e.type === m.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        o = s
            .map((e) => {
                if (e.type === m.Mm.MESSAGE) {
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
        l = s
            .filter((e) => e.type === m.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await f.A.fetchHydrated(t, n, { messageItems: [...a, ...o], activityItems: l });
}
async function C() {
    let e = E.A.getUnreadDisplayItems(),
        t = E.A.getReadDisplayItems(),
        n = E.A.getNextIndexToHydrate();
    await y([...e, ...t], n, n + m.w5);
}
function v(e, t) {
    return {
        ...t,
        message: (0, o.rh)(e.message),
        threadChannel: null != e.thread_channel ? l.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function O(e, t) {
    let n = d.Ay.getTrackedAckMessageId(e);
    return null == n || _.default.extractTimestamp(t) > _.default.extractTimestamp(n);
}
function R(e) {
    return (0, h.HF)(e);
}
function b(e) {
    return {
        id: e.id,
        type: m.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: r.ContentInventoryAuthorType.USER,
            traits: [],
            participants: [],
            content_type: s.ContentInventoryEntryType.CUSTOM_STATUS,
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
function D(e, t, n) {
    let i = g.A.getReadTimestamp(e);
    null == i && (i = n?.[e]);
    let r = g.A.getReadTimestamp(t);
    return (null == r && (r = n?.[t]), null == i && null == r) ? 0 : null == i ? -1 : null == r ? 1 : r - i;
}
function L(e) {
    let t = [...E.A.getUnreadDisplayItems(), ...E.A.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !p.P.has(i.item.data.kind)) {
            n = i.item.id;
            break;
        }
    }
    if (null == n) return [];
    let i = t.findIndex((e) => e.id === n);
    return i < 0 ? [] : t.slice(0, i + 1);
}
function w(e) {
    let t, n;
    switch (e.data.kind) {
        case "message":
            t = e.data.message.channel_id;
            break;
        case "forumThread":
            t = e.data.threadChannel.id;
            break;
        case "guildEvent":
            n = a.Ay.getGuildScheduledEvent(e.data.eventId)?.guild_id;
            break;
        default:
            return !1;
    }
    let i = u.A.getChannel(t);
    if (i?.nsfw) return !0;
    let r = null != (n = i?.guild_id ?? n) ? c.A.getGuild(n) : null;
    return r?.nsfwLevel === A.ftr.EXPLICIT || r?.nsfwLevel === A.ftr.AGE_RESTRICTED;
}
function M(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === A.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            if (e.data.messageContext?.external_content_application_id != null) return "game_message";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === s.ContentInventoryEntryType.CUSTOM_STATUS)
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
async function P(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    E.A.getDehydratedItems().forEach((n) => {
        n.type === m.Mm.MESSAGE &&
            n.data.channel_type === A.rbe.GUILD_ANNOUNCEMENT &&
            _.default.compare(d.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                _.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await f.A.clearReadStates(),
        await f.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await f.A.reloadICYMITab(),
        await f.A.getGuildChannelScores(),
        f.A.getRecommendedGuilds();
}
