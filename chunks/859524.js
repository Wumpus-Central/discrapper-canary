n.d(t, {
    $r: () => L,
    GM: () => b,
    Lg: () => O,
    P0: () => j,
    Rh: () => y,
    Vq: () => C,
    Wu: () => S,
    YM: () => R,
    _x: () => v,
    be: () => M,
    kx: () => x,
    n$: () => N,
    px: () => w,
    tI: () => P,
    xj: () => T,
    yx: () => D,
}),
    n(321073);
var i,
    r = n(6161),
    a = n(681154);
n(311907), n(256265);
var l = n(698441),
    s = n(141468),
    o = n(95701),
    d = n(383233),
    c = n(734057),
    u = n(71393);
n(320501);
var A = n(222823),
    h = n(661191),
    _ = n(4106),
    m = n(335934),
    p = n(800319),
    g = n(883344),
    E = n(596720),
    f = n(449e3),
    I = n(652215);
function C(e, t) {
    return `hydration-${e}-${t}`;
}
n(985018);
var N =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.MORE = 2)] = "MORE"),
    (i[(i.LESS = 3)] = "LESS"),
    (i[(i.MUTED = 4)] = "MUTED"),
    i);
function T(e) {
    return e.type === E.Mm.MESSAGE || e.type === E.Mm.GENERATED_CANDIDATE || e.type === E.Mm.GUILD_EVENT;
}
function S(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function x(e, t, n) {
    let i = g.A.getHydratedItems(),
        r = e.slice(t, n);
    if (0 === r.length) return;
    _.A.loadHydratedAttempt(C(t, n));
    let a = r.filter((e) => null == i[e.id]),
        l = a
            .filter((e) => e.type === E.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        s = a
            .map((e) => {
                if (e.type === E.Mm.MESSAGE) {
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
            .filter((e) => e.type === E.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id })),
        d = a
            .filter((e) => e.type === E.Mm.GENERATED_CANDIDATE)
            .map((e) => ({ content_id: e.data.content_id, guild_id: e.data.guild_id, channel_id: e.data.channel_id }));
    await _.A.fetchHydrated(t, n, { messageItems: [...l, ...s], activityItems: o, generatedCandidateItems: d });
}
async function v() {
    let e = g.A.getUnreadDisplayItems(),
        t = g.A.getReadDisplayItems(),
        n = g.A.getNextIndexToHydrate();
    await x([...e, ...t], n, n + E.w5);
}
function b(e) {
    let t = [];
    null != e.messages && (t = e.messages);
    let n = (function (e, t, n) {
        let i = [];
        for (let t of e) {
            if (null == t.author) continue;
            let e = t instanceof d.Ay ? t : (0, s.rh)(t);
            i.push(e), t.author.id;
        }
        return i;
    })(t);
    return {
        guild_id: e.guild_id,
        content_id: e.content_id,
        channel_id: e.channel_id,
        type: e.type,
        primary_text: e.primary_text,
        secondary_text: e.secondary_text,
        message_ids: e.message_ids,
        message_scores: e.message_scores,
        user_ids: e.user_ids,
        image_urls: e.image_urls,
        created_at: e.created_at,
        messages: n,
    };
}
function y(e, t) {
    return {
        ...t,
        message: (0, s.rh)(e.message),
        threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function L(e, t) {
    let n = A.Ay.getTrackedAckMessageId(e);
    return null == n || h.default.extractTimestamp(t) > h.default.extractTimestamp(n);
}
function O(e) {
    return (0, m.HF)(e);
}
function R(e) {
    return {
        id: e.id,
        type: E.Mm.CUSTOM_STATUS,
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
function P(e, t, n) {
    let i = f.A.getReadTimestamp(e);
    null == i && (i = n?.[e]);
    let r = f.A.getReadTimestamp(t);
    return (null == r && (r = n?.[t]), null == i && null == r) ? 0 : null == i ? -1 : null == r ? 1 : r - i;
}
function j(e) {
    let t = [...g.A.getUnreadDisplayItems(), ...g.A.getReadDisplayItems()],
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
function D(e) {
    let t, n;
    switch (e.data.kind) {
        case "message":
            t = e.data.message.channel_id;
            break;
        case "generatedCandidate":
            t = e.data.item.channel_id;
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
    let i = c.A.getChannel(t);
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
        case "generatedCandidate":
            return "generated_candidate";
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
        n.type === E.Mm.MESSAGE &&
            n.data.channel_type === I.rbe.GUILD_ANNOUNCEMENT &&
            h.default.compare(A.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                h.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await _.A.clearReadStates(),
        await _.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await _.A.reloadICYMITab(),
        await _.A.getGuildChannelScores(),
        _.A.getRecommendedGuilds();
}
