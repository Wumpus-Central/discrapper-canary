n.d(t, {
    $r: () => y,
    Lg: () => v,
    P0: () => R,
    Rh: () => L,
    Vq: () => C,
    Wu: () => S,
    YM: () => b,
    _x: () => O,
    be: () => M,
    kx: () => N,
    n$: () => f,
    px: () => w,
    tI: () => D,
    xj: () => T,
    yx: () => P,
}),
    n(321073);
var i,
    r = n(6161),
    a = n(681154);
n(311907), n(256265);
var l = n(698441),
    s = n(141468),
    o = n(95701),
    d = n(734057),
    u = n(71393);
n(320501);
var c = n(222823),
    A = n(661191),
    h = n(4106),
    _ = n(335934),
    E = n(800319),
    p = n(883344),
    m = n(596720),
    g = n(449e3),
    I = n(652215);
function C(e, t) {
    return `hydration-${e}-${t}`;
}
n(985018);
var f =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.MORE = 2)] = "MORE"),
    (i[(i.LESS = 3)] = "LESS"),
    (i[(i.MUTED = 4)] = "MUTED"),
    i);
function T(e) {
    return e.type === m.Mm.MESSAGE || e.type === m.Mm.GUILD_EVENT;
}
function S(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function N(e, t, n) {
    let i = p.A.getHydratedItems(),
        r = e.slice(t, n);
    if (0 === r.length) return;
    h.A.loadHydratedAttempt(C(t, n));
    let a = r.filter((e) => null == i[e.id]),
        l = a
            .filter((e) => e.type === m.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        s = a
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
        o = a
            .filter((e) => e.type === m.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await h.A.fetchHydrated(t, n, { messageItems: [...l, ...s], activityItems: o });
}
async function O() {
    let e = p.A.getUnreadDisplayItems(),
        t = p.A.getReadDisplayItems(),
        n = p.A.getNextIndexToHydrate();
    await N([...e, ...t], n, n + m.w5);
}
function L(e, t) {
    return {
        ...t,
        message: (0, s.rh)(e.message),
        threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function y(e, t) {
    let n = c.Ay.getTrackedAckMessageId(e);
    return null == n || A.default.extractTimestamp(t) > A.default.extractTimestamp(n);
}
function v(e) {
    return (0, _.HF)(e);
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
function D(e, t, n) {
    let i = g.A.getReadTimestamp(e);
    null == i && (i = n?.[e]);
    let r = g.A.getReadTimestamp(t);
    return (null == r && (r = n?.[t]), null == i && null == r) ? 0 : null == i ? -1 : null == r ? 1 : r - i;
}
function R(e) {
    let t = [...p.A.getUnreadDisplayItems(), ...p.A.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !E.P.has(i.item.data.kind)) {
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
            n = l.Ay.getGuildScheduledEvent(e.data.eventId)?.guild_id;
            break;
        default:
            return !1;
    }
    let i = d.A.getChannel(t);
    if (i?.nsfw) return !0;
    let r = null != (n = i?.guild_id ?? n) ? u.A.getGuild(n) : null;
    return r?.nsfwLevel === I.ftr.EXPLICIT || r?.nsfwLevel === I.ftr.AGE_RESTRICTED;
}
function w(e) {
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
async function M(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    p.A.getDehydratedItems().forEach((n) => {
        n.type === m.Mm.MESSAGE &&
            n.data.channel_type === I.rbe.GUILD_ANNOUNCEMENT &&
            A.default.compare(c.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
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
