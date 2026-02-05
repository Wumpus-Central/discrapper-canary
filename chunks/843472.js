"use strict";
n.d(t, { A: () => eB }), n(801541), n(938796);
var r = n(889137),
    i = n(696292),
    a = n(665260),
    s = n(562465),
    o = n(582754),
    l = n(73153),
    u = n(155718),
    c = n(128265),
    d = n(884384),
    _ = n(58149),
    f = n(723176),
    p = n(154049),
    h = n(348802),
    m = n(121401),
    g = n(909338),
    E = n(354287),
    A = n(695870),
    I = n(734066),
    T = n(372684),
    y = n(167189),
    S = n(833291),
    v = n(626584),
    C = n(390248),
    b = n(885918),
    N = n(142120),
    R = n(992771),
    O = n(834757),
    D = n(753738),
    L = n(51271),
    w = n(844944),
    x = n(122906),
    P = n(21599),
    M = n(346542),
    k = n(279208),
    U = n(917878),
    G = n(586872),
    V = n(99341),
    F = n(141468),
    B = n(407580),
    j = n(130201),
    H = n(963852),
    Y = n(195880),
    W = n(488004),
    K = n(491001),
    z = n(928830),
    $ = n(3137),
    q = n(969632),
    Z = n(79911),
    Q = n(561844),
    X = n(710969);
n(853145);
var J = n(9842),
    ee = n(679382),
    et = n(677413),
    en = n(867455),
    er = n(614792),
    ei = n(616356),
    ea = n(961350),
    es = n(734057);
n(580745);
var eo = n(299091),
    el = n(320501),
    eu = n(576705),
    ec = n(290863),
    ed = n(222823),
    e_ = n(101392),
    ef = n(287809),
    ep = n(954571),
    eh = n(927813),
    em = n(45938),
    eg = n(975571),
    eE = n(927578),
    eA = n(661191),
    eI = n(292348),
    eT = n(157559),
    ey = n(652215),
    eS = n(768349),
    ev = n(401755),
    eC = n(381941),
    eb = n(985018);
let eN = null,
    eR = new v.A("MessageActionCreators"),
    eO = new v.A("MessageQueue"),
    eD = !1;
class eL {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function ew(e) {
    let {
            content: t,
            channelId: n,
            messageId: r,
            location: a,
            inviteAnalyticsMetadata: s,
            overrideProperties: o = {},
        } = e,
        l = ea.default.getId();
    (0, S.Ay)(t).forEach((e) => {
        let { type: t, code: u, url: c } = e;
        if (t === y.I.INVITE)
            ex({
                inviteKey: u,
                channelId: n,
                messageId: r,
                location: a,
                inviteAnalyticsMetadata: s,
                overrideProperties: o,
            });
        else if (t === y.I.TEMPLATE) {
            let e = x.A.getGuildTemplate(u);
            if (null == e || e.state === ev.QB.RESOLVING) return;
            _.Ay.trackWithMetadata(ey.HAw.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: u,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
            });
        } else if (t === y.I.BUILD_OVERRIDE);
        else if (t === y.I.EXPERIMENT);
        else if (t === y.I.MANUAL_BUILD_OVERRIDE);
        else if (t === y.I.EVENT);
        else if (t === y.I.CHANNEL_LINK);
        else if (t === y.I.APP_DIRECTORY_PROFILE) (0, R.y)(u), (0, E.KL)(u, eS.J.APP_DISCOVERY, l);
        else if (t === y.I.APP_DIRECTORY_STOREFRONT) (0, R.y)(u, "storefront");
        else if (t === y.I.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, m.u)(u);
            null != e && (0, R.y)(e.applicationId, "storefront_sku");
        } else if (t === y.I.ACTIVITY_BOOKMARK) {
            let e = (0, g.N)(c);
            (0, E.KL)(u, eS.J.ACTIVITY, e.referrerId ?? l, e.customId);
        } else if (t === y.I.EMBEDDED_ACTIVITY_INVITE) (0, E.KL)(u, eS.J.ACTIVITY_INVITE, l);
        else if (t === y.I.GUILD_PRODUCT);
        else if (t === y.I.SERVER_SHOP);
        else if (t === y.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === y.I.QUESTS_EMBED) {
            let e = (0, X.Li)(i.u.QUESTS_EMBED),
                t = (0, X.L4)(i.u.QUESTS_EMBED);
            (0, Q.av)({
                questId: u,
                event: ey.HAw.QUEST_LINK_SHARED,
                properties: { metadata_raw: null != e ? e : null, metadata_sealed: null != t ? t : null },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.u.QUESTS_EMBED,
            });
        } else if (t === y.I.APP_OAUTH2_LINK)
            _.Ay.trackWithMetadata(ey.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: u }),
                (0, E.KL)(u, eS.J.OAUTH, l);
        else if (t === y.I.COLLECTIBLES_SHOP);
        else throw Error(`Unknown coded link type: ${t}`);
    });
}
function ex(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: r,
            location: i,
            inviteAnalyticsMetadata: a,
            overrideProperties: s = {},
        } = e,
        o = ea.default.getId(),
        l = eo.A.getInvite(t),
        u = (0, P.y$)(t),
        c = null != l && (0, M.oK)(l),
        d = l?.target_application?.id;
    null != d && c && (0, E.KL)(d, eS.J.ACTIVITY_INVITE, o);
    let f = es.A.getChannel(n);
    if (null != f) {
        let e = null;
        f.isMultiUserDM() ? (e = ey.G2g.GDM_INVITE) : f.isPrivate() || (e = ey.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === ey.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let r = ei.A.getLastActiveStream();
            if (null != r && r.channelId === n.id) {
                (e = ey.G2g.STREAM), (t.destination_user_id = r.ownerId);
                let n = (0, O.Ee)(r, ec.A);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != a &&
            (null != a.suggestionData &&
                ((t.is_suggested = a.suggestionData.isAffinitySuggestion),
                (t.row_num = a.suggestionData.rowNum),
                (t.num_total = a.suggestionData.numTotal),
                (t.num_affinity_connections = a.suggestionData.numAffinityConnections),
                (t.is_filtered = a.suggestionData.isFiltered)),
            (t.source = a.source)),
            (t = {
                ...t,
                location: i,
                invite_type: e,
                invite_code: u.baseCode,
                guild_id: f.getGuildId(),
                channel_id: f.id,
                message_id: r,
                send_type: ey.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                ...s,
            }),
            _.Ay.trackWithMetadata(ey.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != l &&
            l.state === ey.elq.RESOLVED &&
            null != l.inviter &&
            ((e.invite_inviter_id = l.inviter.id),
            null != l.target_application && (e.application_id = l.target_application.id),
            (e = {
                ...e,
                location: i,
                invite_type: ey.G2g.FRIEND_INVITE,
                invite_code: u.baseCode,
                message_id: r,
                send_type: ey.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                ...s,
            }),
            _.Ay.trackWithMetadata(ey.HAw.INVITE_SENT, e));
    }
}
function eP(e, t, n, r, i) {
    (0, em.e7)(e).forEach((e) => {
        let a = es.A.getChannel(t);
        null != a &&
            _.Ay.trackWithMetadata(ey.HAw.GIFT_CODE_SENT, {
                location: r,
                gift_code: e,
                guild_id: a.getGuildId(),
                channel_id: a.id,
                channel_type: a.type,
                message_id: n,
                automatic_send: i,
            });
    });
}
function eM(e, t, n, r) {
    let i = es.A.getChannel(t);
    null != i &&
        ep.default.track(ey.HAw.MESSAGE_SENT_WITH_GIF, {
            location: r,
            message_id: n,
            gif_provider: e.gif_provider,
            load_id: e.load_id,
            source_object: e.source_object,
            gif_url: e.gif_url,
            gif_id: e.gif_id,
            ...(0, _.H$)(i.getGuildId()),
            ...(0, _.dI)(i),
        });
}
function ek(e) {
    let { referencedMessageId: t, guildId: n, channelId: r, destinationChannelId: i } = e;
    ep.default.track(ey.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}
function eU(e, t) {
    let n = el.A.getMessage(e, t);
    return null != n && n.hasFlag(ey.pr7.CROSSPOSTED);
}
function eG(e, t) {
    let n = el.A.getMessage(e, t);
    if (null == n || n.type !== ey.lAJ.REPLY) return;
    let r = J.A.getMessageByReference(n.messageReference);
    if (r.state === J.a.LOADED && !n.mentions.includes(r.message.author.id))
        return { parse: Object.values(ey.uw8), replied_user: !1 };
}
let eV = {
        [ey.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eb.intl.string(eb.t.k1Cjqr),
        },
        [ey.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eb.intl.string(eb.t.Z5SUuv),
        },
        [ey.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eb.intl.formatToPlainString(eb.t.CTMXwL, {
                    helpUrl: eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [ey.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eb.intl.string(eb.t.E8nbNb),
        },
        [ey.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eb.intl.string(eb.t.aRUbah),
        },
        [ey.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eb.intl.string(eb.t.aRUbah),
        },
        [ey.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eb.intl.string(eb.t["/meGhR"]),
        },
        [ey.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eb.intl.string(eb.t.Oc1Zjw),
        },
    },
    eF = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            l.h.dispatch({
                type: "MESSAGE_CREATE",
                channelId: e,
                message: t,
                optimistic: n,
                sendMessageOptions: r,
                isPushNotification: !1,
            });
        },
        sendBotMessage(e, t, n, r) {
            null != n &&
                _.Ay.trackWithMetadata(ey.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                eF.receiveMessage(e, (0, H.pO)({ messageId: r, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, H.Ay)({
                channelId: e,
                nonce: n,
                type: ey.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: ey.pr7.EPHEMERAL,
                author: { id: ey.oIV, username: "Nitro Notification", discriminator: ey.h3J, avatar: "nitro", bot: !0 },
            });
            eF.receiveMessage(e, { ...r, state: ey.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, H.Ay)({
                channelId: e,
                type: ey.lAJ.GIFTING_PROMPT,
                content: "",
                flags: ey.pr7.EPHEMERAL,
                author: {
                    id: ey.oIV,
                    username: "Gifting Prompt",
                    discriminator: ey.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eF.receiveMessage(e, { ...n, state: ey.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = es.A.getChannel(e);
            null != i &&
                (r === ey.t02.SLOWMODE_RATE_LIMITED
                    ? ((t = eb.intl.formatToPlainString(eb.t.IWntYg, { seconds: i.rateLimitPerUser })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === ey.t02.INVALID_MESSAGE_SEND_USER
                      ? ((t = eb.intl.formatToPlainString(eb.t.CTMXwL, {
                            helpUrl: eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === ey.t02.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eb.intl.string(eb.t["/jUd2+"])
                                  : eb.intl.string(eb.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === ey.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eb.intl.string(eb.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === ey.t02.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eb.intl.formatToPlainString(eb.t.zSG3Qy, { helpUrl: ey.X7G.HARMFUL_LINKS })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r === ey.t02.HARMFUL_URL_BLOCKED
                              ? ((t = eb.intl.string(eb.t.WxX2Fd)), (n = "HARMFUL_URL_BLOCKED"))
                              : r in eV
                                ? ((n = eV[r].messageName), (t = eV[r].messageGetter()))
                                : ((t = eb.intl.formatToPlainString(eb.t.CTMXwL, {
                                      helpUrl: eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                                  })),
                                  (n = `SEND_FAILED (${r})`)),
                eF.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = es.A.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: s } = (0, r.YW)({ isDM: i.isDM(), isGDM: i.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eb.intl.string(eb.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eb.intl.string(eb.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eb.intl.string(eb.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                o = (0, Y.m)();
            eF.sendBotMessage(e, a, s, o),
                (0, C.hv)({
                    action: C.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: o,
                    channelId: e,
                    context: n,
                }),
                null != t &&
                    t.length > 0 &&
                    l.h.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: o,
                        channelId: e,
                        attachments: t,
                    });
        },
        truncateMessages(e, t, n) {
            l.h.dispatch({ type: "TRUNCATE_MESSAGES", channelId: e, truncateBottom: t, truncateTop: n });
        },
        clearChannel(e) {
            l.h.dispatch({ type: "CLEAR_MESSAGES", channelId: e });
        },
        jumpToPresent(e, t) {
            eF.trackJump(e, null, "Present");
            let n = { present: !0 };
            el.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eF.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, r) {
            _.Ay.trackWithMetadata(ey.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...r });
        },
        jumpToMessage(e) {
            let {
                channelId: t,
                messageId: n,
                flash: r = !1,
                offset: i,
                context: a,
                extraProperties: s = null,
                isPreload: o,
                returnMessageId: l,
                skipLocalFetch: u,
                jumpType: c,
                avoidInitialScroll: d,
            } = e;
            return (
                "string" == typeof a && eF.trackJump(t, n, a, s),
                eN?.pauseAllMediaPlayers?.(),
                eF.fetchMessages({
                    channelId: t,
                    limit: ey.d7Q,
                    jump: { messageId: n, flash: r, offset: i, returnMessageId: l, jumpType: c },
                    isPreload: o,
                    skipLocalFetch: u,
                    avoidInitialScroll: d,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eF.fetchMessages({ channelId: t, limit: ey.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await s.Bo.get({
                    url: ey.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (r.body.length > 0) return (0, F.rh)(r.body[0]);
        },
        fetchMessages(e) {
            let {
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: o,
                    isPreload: u,
                    skipLocalFetch: d,
                    truncate: _,
                    forICYMI: f,
                    avoidInitialScroll: p,
                    feature: h,
                    fetchKey: m,
                } = e,
                g = es.A.getChannel(t),
                E = N.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != g && g.type === ey.rbe.GUILD_STORE) return !1;
            if (
                t === A.E ||
                (eR.log(`Fetching messages for ${t} between ${r} and ${n}. jump=${JSON.stringify(a)}`),
                eF._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: o,
                    truncate: _,
                }))
            )
                return;
            er.A.fetchMessages.recordStart(), U.A.recordChannelFetchStart(t, m ?? I, n, r, i);
            let T = a ?? void 0;
            null == T && null != o && (T = { ...o });
            let y = c.A.getOrCreate(t).loadStart(T);
            c.A.commit(y), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let S = T?.messageId,
                v = new eL();
            return (
                d || this.fetchLocalMessages(t, m ?? I, n, r, i, v),
                s.Bo.get({
                    url: ey.Rsh.MESSAGES(t),
                    query: { before: n, after: r, limit: i, around: S, preload: u, feature: h },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        er.A.fetchMessages.recordEnd(),
                        er.A.dispatchMessages.measure(() => {
                            let s = e.body,
                                o = null != n,
                                u = null != r,
                                c = null == n && null == r,
                                d = null != S || (s.length === i && (o || c)),
                                h = null != S || (u && s.length === i);
                            if (null != S) {
                                let e = Math.floor(i / 2),
                                    n = e + (i % 2),
                                    r = [
                                        S,
                                        ...s.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(eA.default.compare)
                                        .indexOf(S);
                                if ((r < n - 1 && (d = !1), s.length - r < e && (h = !1), h && s.length > 0)) {
                                    let e = ed.Ay.lastMessageId(t);
                                    s[0].id === e && (h = !1);
                                }
                            }
                            eR.log(`Fetched ${s.length} messages for ${t} isBefore:${o} isAfter:${u}`),
                                v.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: s,
                                    isBefore: o,
                                    isAfter: u,
                                    hasMoreBefore: d,
                                    hasMoreAfter: h,
                                    limit: i,
                                    jump: a,
                                    forICYMI: f,
                                    isStale: !E || N.A.lastTimeConnectedChanged() >= I,
                                    truncate: _,
                                    avoidInitialScroll: p,
                                }),
                                U.A.recordChannelFetchedNetwork(t, m ?? I, n, r, i, s);
                        }),
                        !0
                    ),
                    () => (
                        eR.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, a) {
            let s = es.A.getBasicChannel(e),
                o = c.A.getOrCreate(e),
                u = f.A.database();
            if (null == u || null == s || null != n || null != r) return void er.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void er.A.addLocalMessages(e, -2);
            let d = await (0, p.kk)(() => h.Ay.load(u, e, i));
            if (null == d) return void er.A.addLocalMessages(e, -3);
            if (
                (eR.log(
                    `fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${a.completed})`,
                ),
                er.A.addLocalMessages(e, d.messages.length),
                !a.completed && d.messages.length > 0)
            ) {
                let a = d.messages.length >= i && d.connectionId === N.A.lastTimeConnectedChanged();
                U.A.recordChannelFetchedLocal(e, t, n, r, i, d.messages),
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: s.guild_id,
                        channelId: e,
                        users: d.users,
                        members: d.members,
                        messages: d.messages,
                        stale: !a,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            let n = es.A.getBasicChannel(e),
                r = f.A.database();
            if (null == r || null == n) return;
            let i = c.A.getOrCreate(e);
            if (i.hasMoreAfter) return;
            let a = await (0, p.kk)(() => h.Ay.load(r, e, t));
            if (null == a) return;
            i = c.A.getOrCreate(e);
            let s = i.last()?.id,
                o = null == s ? a.messages : a.messages.filter((e) => eA.default.compare(e.id, s) > 0);
            eR.log(`Fetched ${a.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: a.users,
                        members: a.members,
                        messages: o,
                        stale: !0,
                        shouldForceCommitMessages: (0, K.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: s, truncate: o } = e,
                u = el.A.getMessages(t);
            if (u.cached || !u.ready) return !1;
            if (a?.messageId != null || s?.messageId != null) {
                if (a?.messageId != null && u.has(a.messageId, !1))
                    return (
                        l.h.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: i,
                            truncate: o,
                        }),
                        !0
                    );
                if (s?.messageId != null)
                    if (u.has(s.messageId, !1))
                        return (
                            l.h.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: s,
                                limit: i,
                                truncate: o,
                            }),
                            !0
                        );
                    else a = { ...s };
                let e = a?.messageId != null ? eA.default.extractTimestamp(a?.messageId) : 0,
                    n = u.first(),
                    r = u.last();
                if (
                    (!u.hasMoreBefore && null != n && eA.default.extractTimestamp(n.id) >= e) ||
                    (!u.hasMoreAfter && null != r && eA.default.extractTimestamp(r.id) <= e) ||
                    (null != n &&
                        null != r &&
                        eA.default.extractTimestamp(n.id) < e &&
                        eA.default.extractTimestamp(r.id) > e)
                )
                    return (
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: a, limit: ey.d7Q }), !0
                    );
            } else if (null != n && u.hasBeforeCached(n))
                return (
                    l.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        before: n,
                        limit: i,
                        truncate: o,
                    }),
                    !0
                );
            else if (null != r && u.hasAfterCached(r))
                return (
                    l.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        after: r,
                        limit: i,
                        truncate: o,
                    }),
                    !0
                );
            return !1;
        },
        async sendMessage(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 ? arguments[3] : void 0;
            if (t.reaction) return Promise.resolve();
            let i = await (0, Z.A)(e);
            if (null != i) return eF.sendMessage(i, t, n, r);
            let a = r.nonce ?? (0, Y.m)();
            r = { ...r, nonce: a };
            let s = () => eF._sendMessage(e, t, r),
                o = V.Ay.backgroundify(s, void 0);
            return (B.A.recordMessageSendAttempt(e, a, r), el.A.isReady(e))
                ? o()
                : n && e !== A.E
                  ? (eO.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        el.A.whenReady(e, () => {
                            eO.info(`Channel ${e} is ready for sending now.`), o().then(t, n);
                        });
                    }))
                  : o();
        },
        getSendMessageOptionsForReply: (e) =>
            null == e
                ? {}
                : {
                      messageReference: {
                          guild_id: e.channel.getGuildId() ?? void 0,
                          channel_id: e.channel.id,
                          message_id: e.message.id,
                      },
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(ey.uw8), replied_user: !1 },
                  },
        getSendMessageOptionsForStickers(e) {
            let { isGif: t, stickers: n } = e;
            return null == n || 0 === n.length || t ? {} : { stickerIds: n };
        },
        getSendMessageOptionsForScheduledMessage(e) {
            let { scheduledTimestamp: t } = e;
            return null == t ? {} : { scheduledTimestamp: t };
        },
        getSendMessageOptionsForAlsoForwardToChannel: (e) => ({ alsoForwardToChannelId: e.alsoForwardToChannelId }),
        getSendMessageOptions(e) {
            let t = eF.getSendMessageOptionsForReply(e.pendingReply),
                n = eF.getSendMessageOptionsForStickers({ ...e }),
                r = eF.getSendMessageOptionsForScheduledMessage({ ...e }),
                i = eF.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...r, ...i };
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, k.A)(t);
            return (
                null != i &&
                    (a = `${i}
${a}`),
                eF._sendMessage(
                    e,
                    { content: a, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: r },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            eF._sendMessage(
                e,
                { content: t, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { location: n, inviteAnalyticsMetadata: r },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eF._sendMessage(
                e,
                { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: i },
                { ...r, stickerIds: t },
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return s.Bo.post({
                url: ey.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: i, message_reference: r },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eC.Hx.GREET },
            }).then(
                (n) => (
                    j.A.donateSentMessage(n.body.content, e),
                    eF.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eR.log("Failed to send greeting"),
                        429 !== t.status && eF.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eF._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eC.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eE.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eb.intl.string(eb.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eu.A.canWithPartialContext(ey.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eb.intl.string(eb.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eb.intl.string(eb.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: r, errorMessageName: i }
            );
        },
        async _sendMessage(e, t, n) {
            let r,
                i = (0, Z.A)(e);
            if (null != i)
                return (
                    eO.info("Converting channel to a private channel"),
                    i.then((e) => {
                        eO.info("Finished converting channel to a private channel"), eF._sendMessage(e, t, n);
                    })
                );
            let s = t.content,
                { invalidEmojis: o, validNonShortcutEmojis: u, tts: c = !1 } = t,
                {
                    activityAction: _,
                    location: f,
                    inviteAnalyticsMetadata: p,
                    stickerIds: h,
                    messageReference: m,
                    allowedMentions: g,
                    poll: E,
                    sharedCustomTheme: A,
                    contentInventoryEntry: y,
                    attachments: S,
                    attachmentsToUpload: v,
                    onAttachmentUploadError: N,
                    announcementSendOptions: R,
                    withCheckpoint: O,
                } = n,
                x = n.flags ?? 0,
                [P, M] = (0, et.A)(s);
            P && ((s = M), (x = (0, a.UI)(x, ey.pr7.SUPPRESS_NOTIFICATIONS)));
            let k = !1,
                U = n.messageReference?.type === ey.SH7.FORWARD;
            if (
                "" === s &&
                null == _ &&
                null == h &&
                null == E &&
                null == A &&
                null == y &&
                !U &&
                (null == S || 0 === S.length) &&
                !O &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == v || !(v.length > 0)) return Promise.resolve();
                else k = !0;
            let V = null != m ? ey.lAJ.REPLY : ey.lAJ.DEFAULT,
                K = n.nonce ?? (0, Y.m)(),
                Q = K,
                X = (0, H.Ay)({
                    channelId: e,
                    content: s,
                    tts: c,
                    type: V,
                    messageReference: m,
                    allowedMentions: g,
                    flags: 0 !== x ? x : void 0,
                    nonce: K,
                    poll: (0, q.G8)(E),
                    sharedCustomTheme: A,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, z.iq)(e, X.id),
                    null != h && (X.sticker_items = h.map((e) => ee.A.getStickerById(e)).filter((e) => null != e)),
                    eF.receiveMessage(e, X, !0, n)),
                !eD && null != o && o.length > 0)
            ) {
                eD = !0;
                let t = ef.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eF.validateMessage(o, t, e);
                eF.sendBotMessage(e, n, r);
            }
            let J = {
                type: null != R ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: s,
                    nonce: K,
                    tts: c,
                    message_reference: m,
                    allowed_mentions: g,
                    flags: x,
                    analyticsLocation: f,
                },
            };
            if (
                (null != t.components && (J.message.components = t.components),
                null != R &&
                    ((J.message.create_thread = R.createThread),
                    (J.message.title = R.threadName),
                    (J.message.publish = R.publish ?? !1)),
                null != _)
            ) {
                let e,
                    t = _?.activity.session_id;
                if (
                    null !=
                    (e =
                        _.type === ey.xL.JOIN_REQUEST || _.type === ey.xL.STREAM_REQUEST || null != t
                            ? t
                            : ea.default.getSessionId())
                ) {
                    let t = { type: _.type, session_id: e, target_user_id: _.targetUserId },
                        { activity: n } = _;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (J.message.application_id = n.application_id),
                        (J.message.activity = t);
                }
            }
            if (
                (null != E && (J.message.poll = E),
                null != A && (J.message.shared_client_theme = A),
                null != h && (J.message.sticker_ids = h),
                $.A.isEnabled() && (J.message.has_poggermode_enabled = !0),
                O && (J.message.with_checkpoint = !0),
                null != y && (J.message.content_inventory_entry = y),
                null != S && S.length > 0 && (J.message.attachments = S),
                null != v && v.length > 0)
            )
                try {
                    let t = await (0, G.L)({
                        channelId: e,
                        nonce: K,
                        items: v,
                        message: X,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let i = t.attachments;
                    if (((r = t.uploader), k && (null == i || 0 === i.length))) return;
                    if (null != i && ((J.message.attachments = i.map((e, t) => (0, eI.OW)(e, t))), (0, I.J)())) {
                        for (let e of i)
                            if (e.item?.clip?.decision?.signal?.type === T.Gy.DISTRIBUTED) {
                                let t = {
                                        id: e.item.clip.id,
                                        remoteTriggerClipId: e.item.clip.decision?.signal?.remoteTriggerClipId,
                                    },
                                    n = "__CLIP_METADATA__",
                                    r = `${n}${JSON.stringify(t)}`;
                                J.message.content = `${J.message.content}${r}`;
                                break;
                            }
                    }
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, W.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), N?.(e, t, n, r);
                    return;
                }
            return new Promise((t, i) => {
                let a = Date.now(),
                    o = d.Ay.length,
                    c = Math.floor(1e4 * Math.random());
                eO.info(`Queueing message to be sent LogId:${c}`),
                    d.Ay.enqueue(
                        J,
                        (_) => {
                            let m = Date.now() - a;
                            if (_.ok) {
                                j.A.donateSentMessage(s, e),
                                    eF.receiveMessage(e, _.body, !0, {
                                        sendAnalytics: { duration: m, queueSize: o },
                                        poll: E,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        b.A.sendForward((0, F.rh)(_.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                ek({
                                                    referencedMessageId: _.body?.id,
                                                    guildId: _.body?.guild_id,
                                                    channelId: _.body?.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                eR.log(
                                                    `Failed to forward thread message to parent channel LogId:${c}`,
                                                    {
                                                        referencedMessageId: _.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let i = eA.default.cast(e),
                                    a = w.A.getRequest(i);
                                if (null != a) {
                                    let { guildId: t, userId: n, applicationStatus: r } = a;
                                    (0, L.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: _.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                B.A.recordMessageSendApiResponse(K),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: e_.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: u }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: h }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: ef.default.getCurrentUser() },
                                    }),
                                    ew({
                                        content: s,
                                        channelId: e,
                                        messageId: _.body.id,
                                        location: f ?? "chat_input",
                                        inviteAnalyticsMetadata: p,
                                    }),
                                    eP(s, e, _.body.id, f ?? "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != n.gifMetadata && eM(n.gifMetadata, e, _.body.id, f ?? "chat_input"),
                                    null != r &&
                                        l.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: r._file,
                                            aborted: !1,
                                        }),
                                    t(_);
                            } else {
                                let t;
                                eR.log("Failed to send message", {
                                    hasErr: _.hasErr,
                                    status: _.status,
                                    code: _.body?.code,
                                    error: _.err,
                                });
                                let a = !1;
                                if (_.hasErr) "ABORTED" === _.err.code && (a = !0);
                                else if (_.status >= 400 && _.status < 500 && _.body)
                                    if (_.body.code === ey.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = _.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: e_.R.SendMessage,
                                                cooldownMs: t * eh.A.Millis.SECOND,
                                            });
                                    } else
                                        D.yf.has(_.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: J,
                                                  errorResponseBody: { code: _.body.code, message: _.body.message },
                                              })
                                            : _.body.code === ey.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : _.body.code === ey.t02.EXPLICIT_CONTENT
                                                ? (t = eC.ty.EXPLICIT_CONTENT)
                                                : null != E || U || null != y || eF.sendClydeError(e, _.body.code);
                                a
                                    ? eF.deleteMessage(e, Q, !0)
                                    : (null != r &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: r._file,
                                              messageId: Q,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      _.hasErr ||
                                          t !== eC.ty.EXPLICIT_CONTENT ||
                                          eF.sendExplicitMediaClydeError(
                                              e,
                                              _.body?.attachments,
                                              C.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: Q,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, W.O)({
                                          failureCode: _.hasErr ? void 0 : _.status,
                                          errorMessage: _.hasErr ? _.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eR.log("Cancelling pending message", e.nonce),
                                              l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    i(_);
                            }
                        },
                        c,
                    );
            });
        },
        startEditMessage(e, t, n, r) {
            l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t, content: n, source: r });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, a.Lt)(t.flags, ey.pr7.IS_COMPONENTS_V2)) {
                let r = t.components.filter((e) => e.type === u.I5.TEXT_DISPLAY);
                if (r.length > 0) {
                    let i = r.map((e) => e.content).join("\n");
                    l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t.id, content: i, source: n });
                    return;
                }
            }
            l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t.id, content: t.content, source: n });
        },
        updateEditMessage(e, t, n) {
            l.h.dispatch({ type: "MESSAGE_UPDATE_EDIT", channelId: e, textValue: t, richValue: n });
        },
        endEditMessage(e, t) {
            l.h.dispatch({ type: "MESSAGE_END_EDIT", channelId: e, response: t });
        },
        async editMessage(e, t, n) {
            let { content: r, components: i } = n;
            await en.A.unarchiveThreadIfNecessary(e);
            let a = eG(e, t),
                s = eU(e, t),
                u = { channelId: e, messageId: t, content: r, isCrossposted: s, allowed_mentions: a, components: i };
            d.Ay.enqueue({ type: d.AZ.EDIT, message: u }, (n) => {
                let r = !n.hasErr && D.yf.has(n.body.code);
                if (r) {
                    let e = { type: d.AZ.EDIT, message: u };
                    l.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                n.hasErr
                    ? o.OR.announce(eb.intl.string(eb.t.Atp7FP))
                    : r
                      ? o.OR.announce(eb.intl.string(eb.t.Hym4ix))
                      : o.OR.announce(eb.intl.string(eb.t["0x1HBD"])),
                    eF.endEditMessage(e, n.hasErr ? void 0 : n),
                    eF.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await en.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: ey.Rsh.MESSAGE(e, t),
                    body: { flags: ey.pr7.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await en.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: ey.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    l.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                        o.OR.announce(eb.intl.string(eb.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await en.A.unarchiveThreadIfNecessary(e),
                  s.Bo.del({ url: ey.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      r();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(ey.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            l.h.dispatch({ type: "MESSAGE_REVEAL", channelId: e, messageId: t });
        },
        async crosspostMessage(e, t) {
            try {
                return await s.Bo.post({
                    url: ey.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eb.intl.formatToPlainString(eb.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eb.intl.string(eb.t.z2gyNF)),
                    eT.A.show({
                        title: eb.intl.string(eb.t.Vd1hs6),
                        body: e,
                        confirmText: eb.intl.string(eb.t.BddRzS),
                    });
            }
        },
        trackInvite: ex,
    },
    eB = eF;
