n.d(t, {
    $r: () => j,
    GM: () => N,
    Lg: () => x,
    P0: () => L,
    Rh: () => T,
    Vq: () => O,
    Wu: () => v,
    YM: () => P,
    _x: () => C,
    be: () => M,
    kx: () => S,
    n$: () => y,
    px: () => D,
    tI: () => w,
    xj: () => I,
    yx: () => R,
}),
    n(321073),
    n(864466),
    n(443073),
    n(896048);
var r,
    i = n(6161),
    l = n(681154);
n(311907), n(256265);
var a = n(698441),
    s = n(141468),
    o = n(95701),
    c = n(383233),
    u = n(734057),
    d = n(71393);
n(320501);
var p = n(222823),
    f = n(661191),
    h = n(4106),
    A = n(335934),
    g = n(800319),
    m = n(883344),
    b = n(596720),
    _ = n(449000),
    E = n(652215);
function O(e, t) {
    return "hydration-".concat(e, "-").concat(t);
}
n(985018);
var y =
    (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
    (r[(r.DEFAULT = 1)] = "DEFAULT"),
    (r[(r.MORE = 2)] = "MORE"),
    (r[(r.LESS = 3)] = "LESS"),
    (r[(r.MUTED = 4)] = "MUTED"),
    r);
function I(e) {
    return e.type === b.Mm.MESSAGE || e.type === b.Mm.GENERATED_CANDIDATE || e.type === b.Mm.GUILD_EVENT;
}
function v(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function S(e, t, n) {
    let r = m.A.getHydratedItems(),
        i = e.slice(t, n);
    if (0 === i.length) return;
    h.A.loadHydratedAttempt(O(t, n));
    let l = i.filter((e) => null == r[e.id]),
        a = l
            .filter((e) => e.type === b.Mm.MESSAGE)
            .map((e) => ({
                channel_id: e.data.channel_id,
                message_id: e.data.message_id,
            })),
        s = l
            .map((e) => {
                if (e.type === b.Mm.MESSAGE) {
                    var t, n, r;
                    let i = [];
                    return (
                        (null == (t = e.data.message_context) ? void 0 : t.reply_message_id) != null &&
                            i.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.reply_message_id,
                            }),
                        (null == (n = e.data.message_context) ? void 0 : n.before_message_id) != null &&
                            i.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.before_message_id,
                            }),
                        (null == (r = e.data.message_context) ? void 0 : r.after_message_id) != null &&
                            i.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.after_message_id,
                            }),
                        i
                    );
                }
                return [];
            })
            .flat()
            .filter(Boolean),
        o = l
            .filter((e) => e.type === b.Mm.ACTIVITY)
            .map((e) => ({
                user_id: e.data.user_id,
                content_id: e.data.content_id,
            })),
        c = l
            .filter((e) => e.type === b.Mm.GENERATED_CANDIDATE)
            .map((e) => ({
                content_id: e.data.content_id,
                guild_id: e.data.guild_id,
                channel_id: e.data.channel_id,
            }));
    await h.A.fetchHydrated(t, n, {
        messageItems: [...a, ...s],
        activityItems: o,
        generatedCandidateItems: c,
    });
}
async function C() {
    let e = m.A.getUnreadDisplayItems(),
        t = m.A.getReadDisplayItems(),
        n = m.A.getNextIndexToHydrate();
    await S([...e, ...t], n, n + b.w5);
}
function N(e) {
    let t = [];
    null != e.messages && (t = e.messages);
    let n = (function (e, t, n) {
        let r = [];
        for (let t of e) {
            if (null == t.author) continue;
            let e = t instanceof c.Ay ? t : (0, s.rh)(t);
            r.push(e), t.author.id;
        }
        return r;
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
function T(e, t) {
    var n, r;
    return (
        (n = (function (e) {
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
        })({}, t)),
        (r = r =
            {
                message: (0, s.rh)(e.message),
                threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        n
    );
}
function j(e, t) {
    let n = p.Ay.getTrackedAckMessageId(e);
    return null == n || f.default.extractTimestamp(t) > f.default.extractTimestamp(n);
}
function x(e) {
    return (0, A.HF)(e);
}
function P(e) {
    var t;
    return {
        id: e.id,
        type: b.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: i.t.USER,
            traits: [],
            participants: [],
            content_type: l.I.CUSTOM_STATUS,
            extra: {
                type: "custom_status_extra",
                status: null != (t = e.data.text) ? t : "",
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
function w(e, t, n) {
    let r = _.A.getReadTimestamp(e);
    null == r && (r = null == n ? void 0 : n[e]);
    let i = _.A.getReadTimestamp(t);
    return (null == i && (i = null == n ? void 0 : n[t]), null == r && null == i)
        ? 0
        : null == r
          ? -1
          : null == i
            ? 1
            : i - r;
}
function L(e) {
    let t = [...m.A.getUnreadDisplayItems(), ...m.A.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        if (null != r && !g.P.has(r.item.data.kind)) {
            n = r.item.id;
            break;
        }
    }
    if (null == n) return [];
    let r = t.findIndex((e) => e.id === n);
    return r < 0 ? [] : t.slice(0, r + 1);
}
function R(e) {
    var t, n;
    let r, i;
    switch (e.data.kind) {
        case "message":
            r = e.data.message.channel_id;
            break;
        case "generatedCandidate":
            r = e.data.item.channel_id;
            break;
        case "forumThread":
            r = e.data.threadChannel.id;
            break;
        case "guildEvent":
            i = null == (n = a.Ay.getGuildScheduledEvent(e.data.eventId)) ? void 0 : n.guild_id;
            break;
        default:
            return !1;
    }
    let l = u.A.getChannel(r);
    if (null == l ? void 0 : l.nsfw) return !0;
    let s = null != (i = null != (t = null == l ? void 0 : l.guild_id) ? t : i) ? d.A.getGuild(i) : null;
    return (
        (null == s ? void 0 : s.nsfwLevel) === E.ftr.EXPLICIT ||
        (null == s ? void 0 : s.nsfwLevel) === E.ftr.AGE_RESTRICTED
    );
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
            var t;
            if (e.channelType === E.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            if ((null == (t = e.data.messageContext) ? void 0 : t.external_content_application_id) != null)
                return "game_message";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === l.I.CUSTOM_STATUS) return "hotwheels_custom_status";
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
        { AnalyticsObjectTypes: r } = await Promise.resolve().then(n.bind(n, 652215));
    m.A.getDehydratedItems().forEach((n) => {
        n.type === b.Mm.MESSAGE &&
            n.data.channel_type === E.rbe.GUILD_ANNOUNCEMENT &&
            f.default.compare(p.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                {
                    object: e,
                    objectType: r.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
                f.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await h.A.clearReadStates(),
        await h.A.fetchDehydrated({
            isReloading: !0,
            forceRefresh: !0,
        }),
        await h.A.reloadICYMITab(),
        await h.A.getGuildChannelScores(),
        h.A.getRecommendedGuilds();
}
