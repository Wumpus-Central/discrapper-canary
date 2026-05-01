n.d(t, {
    $r: () => L,
    Lg: () => D,
    P0: () => P,
    Rh: () => g,
    Vq: () => f,
    Wu: () => O,
    YM: () => b,
    _x: () => R,
    be: () => y,
    kx: () => C,
    n$: () => p,
    px: () => v,
    tI: () => M,
    xj: () => m,
    yx: () => U,
}),
    n(321073);
var i,
    a = n(6161),
    r = n(681154);
n(17928), n(256265);
var s = n(698441),
    l = n(320095),
    o = n(95701),
    d = n(734057),
    c = n(71393);
n(232835);
var _ = n(222823),
    E = n(935208),
    u = n(4106),
    A = n(875448),
    I = n(800319),
    T = n(557740),
    h = n(596720),
    S = n(449e3),
    N = n(652215);
function f(e, t) {
    return `hydration-${e}-${t}`;
}
n(985018);
var p =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.MORE = 2)] = "MORE"),
    (i[(i.LESS = 3)] = "LESS"),
    (i[(i.MUTED = 4)] = "MUTED"),
    i);
function m(e) {
    return e.type === h.Mm.MESSAGE || e.type === h.Mm.GUILD_EVENT;
}
function O(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function C(e, t, n) {
    let i = T.A.getHydratedItems(),
        a = e.slice(t, n);
    if (0 === a.length) return;
    u.A.loadHydratedAttempt(f(t, n));
    let r = a.filter((e) => null == i[e.id]),
        s = r
            .filter((e) => e.type === h.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        l = r
            .map((e) => {
                if (e.type === h.Mm.MESSAGE) {
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
        o = r
            .filter((e) => e.type === h.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await u.A.fetchHydrated(t, n, { messageItems: [...s, ...l], activityItems: o });
}
async function R() {
    let e = T.A.getUnreadDisplayItems(),
        t = T.A.getReadDisplayItems(),
        n = T.A.getNextIndexToHydrate();
    await C([...e, ...t], n, n + h.w5);
}
function g(e, t) {
    return {
        ...t,
        message: (0, l.rh)(e.message),
        threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function L(e, t) {
    let n = _.Ay.getTrackedAckMessageId(e);
    return null == n || E.default.extractTimestamp(t) > E.default.extractTimestamp(n);
}
function D(e) {
    return (0, A.HF)(e);
}
function b(e) {
    return {
        id: e.id,
        type: h.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: a.ContentInventoryAuthorType.USER,
            traits: [],
            participants: [],
            content_type: r.ContentInventoryEntryType.CUSTOM_STATUS,
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
function M(e, t, n) {
    let i = S.A.getReadTimestamp(e);
    null == i && (i = n?.[e]);
    let a = S.A.getReadTimestamp(t);
    return (null == a && (a = n?.[t]), null == i && null == a) ? 0 : null == i ? -1 : null == a ? 1 : a - i;
}
function P(e) {
    let t = [...T.A.getUnreadDisplayItems(), ...T.A.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !I.P.has(i.item.data.kind)) {
            n = i.item.id;
            break;
        }
    }
    if (null == n) return [];
    let i = t.findIndex((e) => e.id === n);
    return i < 0 ? [] : t.slice(0, i + 1);
}
function U(e) {
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
    let a = null != (n = i?.guild_id ?? n) ? c.A.getGuild(n) : null;
    return a?.nsfwLevel === N.ftr.EXPLICIT || a?.nsfwLevel === N.ftr.AGE_RESTRICTED;
}
function v(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === N.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            if (e.data.messageContext?.external_content_application_id != null) return "game_message";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === r.ContentInventoryEntryType.CUSTOM_STATUS)
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
async function y(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    T.A.getDehydratedItems().forEach((n) => {
        n.type === h.Mm.MESSAGE &&
            n.data.channel_type === N.rbe.GUILD_ANNOUNCEMENT &&
            E.default.compare(_.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                E.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await u.A.clearReadStates(),
        await u.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await u.A.reloadICYMITab(),
        await u.A.getGuildChannelScores(),
        u.A.getRecommendedGuilds();
}
