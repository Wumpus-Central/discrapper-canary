"use strict";
n.d(t, { A: () => ej }), n(801541), n(938796);
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
    h = n(154049),
    p = n(348802),
    g = n(121401),
    E = n(909338),
    A = n(354287),
    I = n(695870),
    T = n(734066),
    y = n(372684),
    S = n(167189),
    v = n(833291),
    C = n(626584),
    b = n(390248),
    N = n(885918),
    R = n(142120),
    O = n(992771),
    D = n(834757),
    L = n(753738),
    w = n(51271),
    x = n(844944),
    P = n(122906),
    M = n(21599),
    k = n(346542),
    U = n(279208),
    G = n(917878),
    F = n(586872),
    V = n(99341),
    B = n(141468),
    j = n(407580),
    H = n(130201),
    Y = n(963852),
    W = n(195880),
    K = n(488004),
    $ = n(491001),
    z = n(928830),
    q = n(3137),
    X = n(969632),
    Z = n(79911),
    Q = n(561844),
    J = n(710969);
n(853145);
var ee = n(9842),
    et = n(679382),
    en = n(677413),
    er = n(867455),
    ei = n(614792),
    ea = n(616356),
    es = n(961350),
    eo = n(734057);
n(580745);
var el = n(299091),
    eu = n(320501),
    ec = n(576705),
    ed = n(290863),
    e_ = n(222823),
    ef = n(101392),
    eh = n(287809),
    ep = n(954571),
    em = n(927813),
    eg = n(45938),
    eE = n(975571),
    eA = n(927578),
    eI = n(661191),
    eT = n(292348),
    ey = n(157559),
    eS = n(652215),
    ev = n(768349),
    eC = n(401755),
    eb = n(381941),
    eN = n(985018);
let eR = null,
    eO = new C.A("MessageActionCreators"),
    eD = new C.A("MessageQueue"),
    eL = !1;
class ew {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function ex(e) {
    let {
            content: t,
            channelId: n,
            messageId: r,
            location: a,
            inviteAnalyticsMetadata: s,
            overrideProperties: o = {},
        } = e,
        l = es.default.getId();
    (0, v.Ay)(t).forEach((e) => {
        let { type: t, code: u, url: c } = e;
        if (t === S.I.INVITE)
            eP({
                inviteKey: u,
                channelId: n,
                messageId: r,
                location: a,
                inviteAnalyticsMetadata: s,
                overrideProperties: o,
            });
        else if (t === S.I.TEMPLATE) {
            let e = P.A.getGuildTemplate(u);
            if (null == e || e.state === eC.QB.RESOLVING) return;
            _.Ay.trackWithMetadata(eS.HAw.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: u,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
            });
        } else if (t === S.I.BUILD_OVERRIDE);
        else if (t === S.I.EXPERIMENT);
        else if (t === S.I.MANUAL_BUILD_OVERRIDE);
        else if (t === S.I.EVENT);
        else if (t === S.I.CHANNEL_LINK);
        else if (t === S.I.APP_DIRECTORY_PROFILE) (0, O.y)(u), (0, A.KL)(u, ev.J.APP_DISCOVERY, l);
        else if (t === S.I.APP_DIRECTORY_STOREFRONT) (0, O.y)(u, "storefront");
        else if (t === S.I.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, g.u)(u);
            null != e && (0, O.y)(e.applicationId, "storefront_sku");
        } else if (t === S.I.ACTIVITY_BOOKMARK) {
            let e = (0, E.N)(c);
            (0, A.KL)(u, ev.J.ACTIVITY, e.referrerId ?? l, e.customId);
        } else if (t === S.I.EMBEDDED_ACTIVITY_INVITE) (0, A.KL)(u, ev.J.ACTIVITY_INVITE, l);
        else if (t === S.I.GUILD_PRODUCT);
        else if (t === S.I.SERVER_SHOP);
        else if (t === S.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === S.I.QUESTS_EMBED) {
            let e = (0, J.Li)(i.u.QUESTS_EMBED),
                t = (0, J.L4)(i.u.QUESTS_EMBED);
            (0, Q.av)({
                questId: u,
                event: eS.HAw.QUEST_LINK_SHARED,
                properties: { metadata_raw: null != e ? e : null, metadata_sealed: null != t ? t : null },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.u.QUESTS_EMBED,
            });
        } else if (t === S.I.APP_OAUTH2_LINK)
            _.Ay.trackWithMetadata(eS.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: u }),
                (0, A.KL)(u, ev.J.OAUTH, l);
        else if (t === S.I.COLLECTIBLES_SHOP);
        else throw Error(`Unknown coded link type: ${t}`);
    });
}
function eP(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: r,
            location: i,
            inviteAnalyticsMetadata: a,
            overrideProperties: s = {},
        } = e,
        o = es.default.getId(),
        l = el.A.getInvite(t),
        u = (0, M.y$)(t),
        c = null != l && (0, k.oK)(l),
        d = l?.target_application?.id;
    null != d && c && (0, A.KL)(d, ev.J.ACTIVITY_INVITE, o);
    let f = eo.A.getChannel(n);
    if (null != f) {
        let e = null;
        f.isMultiUserDM() ? (e = eS.G2g.GDM_INVITE) : f.isPrivate() || (e = eS.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === eS.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let r = ea.A.getLastActiveStream();
            if (null != r && r.channelId === n.id) {
                (e = eS.G2g.STREAM), (t.destination_user_id = r.ownerId);
                let n = (0, D.Ee)(r, ed.A);
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
                send_type: eS.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                ...s,
            }),
            _.Ay.trackWithMetadata(eS.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != l &&
            l.state === eS.elq.RESOLVED &&
            null != l.inviter &&
            ((e.invite_inviter_id = l.inviter.id),
            null != l.target_application && (e.application_id = l.target_application.id),
            (e = {
                ...e,
                location: i,
                invite_type: eS.G2g.FRIEND_INVITE,
                invite_code: u.baseCode,
                message_id: r,
                send_type: eS.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                ...s,
            }),
            _.Ay.trackWithMetadata(eS.HAw.INVITE_SENT, e));
    }
}
function eM(e, t, n, r, i) {
    (0, eg.e7)(e).forEach((e) => {
        let a = eo.A.getChannel(t);
        null != a &&
            _.Ay.trackWithMetadata(eS.HAw.GIFT_CODE_SENT, {
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
function ek(e, t, n, r) {
    let i = eo.A.getChannel(t);
    null != i &&
        ep.default.track(eS.HAw.MESSAGE_SENT_WITH_GIF, {
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
function eU(e) {
    let { referencedMessageId: t, guildId: n, channelId: r, destinationChannelId: i } = e;
    ep.default.track(eS.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}
function eG(e, t) {
    let n = eu.A.getMessage(e, t);
    return null != n && n.hasFlag(eS.pr7.CROSSPOSTED);
}
function eF(e, t) {
    let n = eu.A.getMessage(e, t);
    if (null == n || n.type !== eS.lAJ.REPLY) return;
    let r = ee.A.getMessageByReference(n.messageReference);
    if (r.state === ee.a.LOADED && !n.mentions.includes(r.message.author.id))
        return { parse: Object.values(eS.uw8), replied_user: !1 };
}
let eV = {
        [eS.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eN.intl.string(eN.t.k1Cjqr),
        },
        [eS.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eN.intl.string(eN.t.Z5SUuv),
        },
        [eS.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eN.intl.formatToPlainString(eN.t.CTMXwL, {
                    helpUrl: eE.A.getArticleURL(eS.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eS.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eN.intl.string(eN.t.E8nbNb),
        },
        [eS.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eN.intl.string(eN.t.aRUbah),
        },
        [eS.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eN.intl.string(eN.t.aRUbah),
        },
        [eS.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eN.intl.string(eN.t["/meGhR"]),
        },
        [eS.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eN.intl.string(eN.t.Oc1Zjw),
        },
    },
    eB = {
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
                _.Ay.trackWithMetadata(eS.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                eB.receiveMessage(e, (0, Y.pO)({ messageId: r, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, Y.Ay)({
                channelId: e,
                nonce: n,
                type: eS.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: eS.pr7.EPHEMERAL,
                author: { id: eS.oIV, username: "Nitro Notification", discriminator: eS.h3J, avatar: "nitro", bot: !0 },
            });
            eB.receiveMessage(e, { ...r, state: eS.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, Y.Ay)({
                channelId: e,
                type: eS.lAJ.GIFTING_PROMPT,
                content: "",
                flags: eS.pr7.EPHEMERAL,
                author: {
                    id: eS.oIV,
                    username: "Gifting Prompt",
                    discriminator: eS.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eB.receiveMessage(e, { ...n, state: eS.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = eo.A.getChannel(e);
            null != i &&
                (r === eS.t02.SLOWMODE_RATE_LIMITED
                    ? ((t = eN.intl.formatToPlainString(eN.t.IWntYg, { seconds: i.rateLimitPerUser })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === eS.t02.INVALID_MESSAGE_SEND_USER
                      ? ((t = eN.intl.formatToPlainString(eN.t.CTMXwL, {
                            helpUrl: eE.A.getArticleURL(eS.MVz.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === eS.t02.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eN.intl.string(eN.t["/jUd2+"])
                                  : eN.intl.string(eN.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === eS.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eN.intl.string(eN.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === eS.t02.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eN.intl.formatToPlainString(eN.t.zSG3Qy, { helpUrl: eS.X7G.HARMFUL_LINKS })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r === eS.t02.HARMFUL_URL_BLOCKED
                              ? ((t = eN.intl.string(eN.t.WxX2Fd)), (n = "HARMFUL_URL_BLOCKED"))
                              : r in eV
                                ? ((n = eV[r].messageName), (t = eV[r].messageGetter()))
                                : ((t = eN.intl.formatToPlainString(eN.t.CTMXwL, {
                                      helpUrl: eE.A.getArticleURL(eS.MVz.DM_COULD_NOT_BE_DELIVERED),
                                  })),
                                  (n = `SEND_FAILED (${r})`)),
                eB.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = eo.A.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: s } = (0, r.YW)({ isDM: i.isDM(), isGDM: i.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eN.intl.string(eN.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eN.intl.string(eN.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eN.intl.string(eN.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                o = (0, W.m)();
            eB.sendBotMessage(e, a, s, o),
                (0, b.hv)({
                    action: b.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            eB.trackJump(e, null, "Present");
            let n = { present: !0 };
            eu.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eB.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, r) {
            _.Ay.trackWithMetadata(eS.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...r });
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
                "string" == typeof a && eB.trackJump(t, n, a, s),
                eR?.pauseAllMediaPlayers?.(),
                eB.fetchMessages({
                    channelId: t,
                    limit: eS.d7Q,
                    jump: { messageId: n, flash: r, offset: i, returnMessageId: l, jumpType: c },
                    isPreload: o,
                    skipLocalFetch: u,
                    avoidInitialScroll: d,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eB.fetchMessages({ channelId: t, limit: eS.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await s.Bo.get({
                    url: eS.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (r.body.length > 0) return (0, B.rh)(r.body[0]);
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
                    avoidInitialScroll: h,
                    feature: p,
                    fetchKey: g,
                } = e,
                E = eo.A.getChannel(t),
                A = R.A.isConnectedOrOverlay(),
                T = Date.now();
            if (null != E && E.type === eS.rbe.GUILD_STORE) return !1;
            if (
                t === I.E ||
                (eO.log(`Fetching messages for ${t} between ${r} and ${n}. jump=${JSON.stringify(a)}`),
                eB._tryFetchMessagesCached({
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
            ei.A.fetchMessages.recordStart(), G.A.recordChannelFetchStart(t, g ?? T, n, r, i);
            let y = a ?? void 0;
            null == y && null != o && (y = { ...o });
            let S = c.A.getOrCreate(t).loadStart(y);
            c.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let v = y?.messageId,
                C = new ew();
            return (
                d || this.fetchLocalMessages(t, g ?? T, n, r, i, C),
                s.Bo.get({
                    url: eS.Rsh.MESSAGES(t),
                    query: { before: n, after: r, limit: i, around: v, preload: u, feature: p },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        ei.A.fetchMessages.recordEnd(),
                        ei.A.dispatchMessages.measure(() => {
                            let s = e.body,
                                o = null != n,
                                u = null != r,
                                c = null == n && null == r,
                                d = null != v || (s.length === i && (o || c)),
                                p = null != v || (u && s.length === i);
                            if (null != v) {
                                let e = Math.floor(i / 2),
                                    n = e + (i % 2),
                                    r = [
                                        v,
                                        ...s.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(eI.default.compare)
                                        .indexOf(v);
                                if ((r < n - 1 && (d = !1), s.length - r < e && (p = !1), p && s.length > 0)) {
                                    let e = e_.Ay.lastMessageId(t);
                                    s[0].id === e && (p = !1);
                                }
                            }
                            eO.log(`Fetched ${s.length} messages for ${t} isBefore:${o} isAfter:${u}`),
                                C.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: s,
                                    isBefore: o,
                                    isAfter: u,
                                    hasMoreBefore: d,
                                    hasMoreAfter: p,
                                    limit: i,
                                    jump: a,
                                    forICYMI: f,
                                    isStale: !A || R.A.lastTimeConnectedChanged() >= T,
                                    truncate: _,
                                    avoidInitialScroll: h,
                                }),
                                G.A.recordChannelFetchedNetwork(t, g ?? T, n, r, i, s);
                        }),
                        !0
                    ),
                    () => (
                        eO.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, a) {
            let s = eo.A.getBasicChannel(e),
                o = c.A.getOrCreate(e),
                u = f.A.database();
            if (null == u || null == s || null != n || null != r) return void ei.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void ei.A.addLocalMessages(e, -2);
            let d = await (0, h.kk)(() => p.Ay.load(u, e, i));
            if (null == d) return void ei.A.addLocalMessages(e, -3);
            if (
                (eO.log(
                    `fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${a.completed})`,
                ),
                ei.A.addLocalMessages(e, d.messages.length),
                !a.completed && d.messages.length > 0)
            ) {
                let a = d.messages.length >= i && d.connectionId === R.A.lastTimeConnectedChanged();
                G.A.recordChannelFetchedLocal(e, t, n, r, i, d.messages),
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
            let n = eo.A.getBasicChannel(e),
                r = f.A.database();
            if (null == r || null == n) return;
            let i = c.A.getOrCreate(e);
            if (i.hasMoreAfter) return;
            let a = await (0, h.kk)(() => p.Ay.load(r, e, t));
            if (null == a) return;
            i = c.A.getOrCreate(e);
            let s = i.last()?.id,
                o = null == s ? a.messages : a.messages.filter((e) => eI.default.compare(e.id, s) > 0);
            eO.log(`Fetched ${a.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: a.users,
                        members: a.members,
                        messages: o,
                        stale: !0,
                        shouldForceCommitMessages: (0, $.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: s, truncate: o } = e,
                u = eu.A.getMessages(t);
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
                let e = a?.messageId != null ? eI.default.extractTimestamp(a?.messageId) : 0,
                    n = u.first(),
                    r = u.last();
                if (
                    (!u.hasMoreBefore && null != n && eI.default.extractTimestamp(n.id) >= e) ||
                    (!u.hasMoreAfter && null != r && eI.default.extractTimestamp(r.id) <= e) ||
                    (null != n &&
                        null != r &&
                        eI.default.extractTimestamp(n.id) < e &&
                        eI.default.extractTimestamp(r.id) > e)
                )
                    return (
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: a, limit: eS.d7Q }), !0
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
            if (null != i) return eB.sendMessage(i, t, n, r);
            let a = r.nonce ?? (0, W.m)();
            r = { ...r, nonce: a };
            let s = () => eB._sendMessage(e, t, r),
                o = V.Ay.backgroundify(s, void 0);
            return (j.A.recordMessageSendAttempt(e, a, r), eu.A.isReady(e))
                ? o()
                : n && e !== I.E
                  ? (eD.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        eu.A.whenReady(e, () => {
                            eD.info(`Channel ${e} is ready for sending now.`), o().then(t, n);
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
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(eS.uw8), replied_user: !1 },
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
            let t = eB.getSendMessageOptionsForReply(e.pendingReply),
                n = eB.getSendMessageOptionsForStickers({ ...e }),
                r = eB.getSendMessageOptionsForScheduledMessage({ ...e }),
                i = eB.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...r, ...i };
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, U.A)(t);
            return (
                null != i &&
                    (a = `${i}
${a}`),
                eB._sendMessage(
                    e,
                    { content: a, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: r },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            eB._sendMessage(
                e,
                { content: t, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { location: n, inviteAnalyticsMetadata: r },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eB._sendMessage(
                e,
                { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: i },
                { ...r, stickerIds: t },
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return s.Bo.post({
                url: eS.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: i, message_reference: r },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eb.Hx.GREET },
            }).then(
                (n) => (
                    H.A.donateSentMessage(n.body.content, e),
                    eB.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eO.log("Failed to send greeting"),
                        429 !== t.status && eB.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eB._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eb.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eA.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eN.intl.string(eN.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : ec.A.canWithPartialContext(eS.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eN.intl.string(eN.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eN.intl.string(eN.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: r, errorMessageName: i }
            );
        },
        async _sendMessage(e, t, n) {
            let r,
                i = (0, Z.A)(e);
            if (null != i)
                return (
                    eD.info("Converting channel to a private channel"),
                    i.then((e) => {
                        eD.info("Finished converting channel to a private channel"), eB._sendMessage(e, t, n);
                    })
                );
            let s = t.content,
                { invalidEmojis: o, validNonShortcutEmojis: u, tts: c = !1 } = t,
                {
                    activityAction: _,
                    location: f,
                    inviteAnalyticsMetadata: h,
                    stickerIds: p,
                    messageReference: g,
                    allowedMentions: E,
                    poll: A,
                    sharedCustomTheme: I,
                    contentInventoryEntry: S,
                    attachments: v,
                    attachmentsToUpload: C,
                    onAttachmentUploadError: R,
                    announcementSendOptions: O,
                    withCheckpoint: D,
                } = n,
                P = n.flags ?? 0,
                [M, k] = (0, en.A)(s);
            M && ((s = k), (P = (0, a.UI)(P, eS.pr7.SUPPRESS_NOTIFICATIONS)));
            let U = !1,
                G = n.messageReference?.type === eS.SH7.FORWARD;
            if (
                "" === s &&
                null == _ &&
                null == p &&
                null == A &&
                null == I &&
                null == S &&
                !G &&
                (null == v || 0 === v.length) &&
                !D &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == C || !(C.length > 0)) return Promise.resolve();
                else U = !0;
            let V = null != g ? eS.lAJ.REPLY : eS.lAJ.DEFAULT,
                $ = n.nonce ?? (0, W.m)(),
                Q = $,
                J = (0, Y.Ay)({
                    channelId: e,
                    content: s,
                    tts: c,
                    type: V,
                    messageReference: g,
                    allowedMentions: E,
                    flags: 0 !== P ? P : void 0,
                    nonce: $,
                    poll: (0, X.G8)(A),
                    sharedCustomTheme: I,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, z.iq)(e, J.id),
                    null != p && (J.sticker_items = p.map((e) => et.A.getStickerById(e)).filter((e) => null != e)),
                    eB.receiveMessage(e, J, !0, n)),
                !eL && null != o && o.length > 0)
            ) {
                eL = !0;
                let t = eh.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eB.validateMessage(o, t, e);
                eB.sendBotMessage(e, n, r);
            }
            let ee = {
                type: null != O ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: s,
                    nonce: $,
                    tts: c,
                    message_reference: g,
                    allowed_mentions: E,
                    flags: P,
                    analyticsLocation: f,
                },
            };
            if (
                (null != t.components && (ee.message.components = t.components),
                null != O &&
                    ((ee.message.create_thread = O.createThread),
                    (ee.message.title = O.threadName),
                    (ee.message.publish = O.publish ?? !1)),
                null != _)
            ) {
                let e,
                    t = _?.activity.session_id;
                if (
                    null !=
                    (e =
                        _.type === eS.xL.JOIN_REQUEST || _.type === eS.xL.STREAM_REQUEST || null != t
                            ? t
                            : es.default.getSessionId())
                ) {
                    let t = { type: _.type, session_id: e, target_user_id: _.targetUserId },
                        { activity: n } = _;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (ee.message.application_id = n.application_id),
                        (ee.message.activity = t);
                }
            }
            if (
                (null != A && (ee.message.poll = A),
                null != I && (ee.message.shared_client_theme = I),
                null != p && (ee.message.sticker_ids = p),
                q.A.isEnabled() && (ee.message.has_poggermode_enabled = !0),
                D && (ee.message.with_checkpoint = !0),
                null != S && (ee.message.content_inventory_entry = S),
                null != v && v.length > 0 && (ee.message.attachments = v),
                null != C && C.length > 0)
            )
                try {
                    let t = await (0, F.L)({
                        channelId: e,
                        nonce: $,
                        items: C,
                        message: J,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let i = t.attachments;
                    if (((r = t.uploader), U && (null == i || 0 === i.length))) return;
                    if (null != i && ((ee.message.attachments = i.map((e, t) => (0, eT.OW)(e, t))), (0, T.J)())) {
                        for (let e of i)
                            if (e.item?.clip?.decision?.signal?.type === y.Gy.DISTRIBUTED) {
                                let t = {
                                        id: e.item.clip.id,
                                        remoteTriggerClipId: e.item.clip.decision?.signal?.remoteTriggerClipId,
                                    },
                                    n = "__CLIP_METADATA__",
                                    r = `${n}${JSON.stringify(t)}`;
                                ee.message.content = `${ee.message.content}${r}`;
                                break;
                            }
                    }
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, K.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), R?.(e, t, n, r);
                    return;
                }
            return new Promise((t, i) => {
                let a = Date.now(),
                    o = d.Ay.length,
                    c = Math.floor(1e4 * Math.random());
                eD.info(`Queueing message to be sent LogId:${c}`),
                    d.Ay.enqueue(
                        ee,
                        (_) => {
                            let g = Date.now() - a;
                            if (_.ok) {
                                H.A.donateSentMessage(s, e),
                                    eB.receiveMessage(e, _.body, !0, {
                                        sendAnalytics: { duration: g, queueSize: o },
                                        poll: A,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        N.A.sendForward((0, B.rh)(_.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                eU({
                                                    referencedMessageId: _.body?.id,
                                                    guildId: _.body?.guild_id,
                                                    channelId: _.body?.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                eO.log(
                                                    `Failed to forward thread message to parent channel LogId:${c}`,
                                                    {
                                                        referencedMessageId: _.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let i = eI.default.cast(e),
                                    a = x.A.getRequest(i);
                                if (null != a) {
                                    let { guildId: t, userId: n, applicationStatus: r } = a;
                                    (0, w.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: _.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                j.A.recordMessageSendApiResponse($),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ef.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: u }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: p }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: eh.default.getCurrentUser() },
                                    }),
                                    ex({
                                        content: s,
                                        channelId: e,
                                        messageId: _.body.id,
                                        location: f ?? "chat_input",
                                        inviteAnalyticsMetadata: h,
                                    }),
                                    eM(s, e, _.body.id, f ?? "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != n.gifMetadata && ek(n.gifMetadata, e, _.body.id, f ?? "chat_input"),
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
                                eO.log("Failed to send message", {
                                    hasErr: _.hasErr,
                                    status: _.status,
                                    code: _.body?.code,
                                    error: _.err,
                                });
                                let a = !1;
                                if (_.hasErr) "ABORTED" === _.err.code && (a = !0);
                                else if (_.status >= 400 && _.status < 500 && _.body)
                                    if (_.body.code === eS.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = _.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ef.R.SendMessage,
                                                cooldownMs: t * em.A.Millis.SECOND,
                                            });
                                    } else
                                        L.yf.has(_.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: ee,
                                                  errorResponseBody: { code: _.body.code, message: _.body.message },
                                              })
                                            : _.body.code === eS.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : _.body.code === eS.t02.EXPLICIT_CONTENT
                                                ? (t = eb.ty.EXPLICIT_CONTENT)
                                                : null != A || G || null != S || eB.sendClydeError(e, _.body.code);
                                a
                                    ? eB.deleteMessage(e, Q, !0)
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
                                          t !== eb.ty.EXPLICIT_CONTENT ||
                                          eB.sendExplicitMediaClydeError(
                                              e,
                                              _.body?.attachments,
                                              b.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: Q,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, K.O)({
                                          failureCode: _.hasErr ? void 0 : _.status,
                                          errorMessage: _.hasErr ? _.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eO.log("Cancelling pending message", e.nonce),
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
            if ((0, a.Lt)(t.flags, eS.pr7.IS_COMPONENTS_V2)) {
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
            await er.A.unarchiveThreadIfNecessary(e);
            let a = eF(e, t),
                s = eG(e, t),
                u = { channelId: e, messageId: t, content: r, isCrossposted: s, allowed_mentions: a, components: i };
            d.Ay.enqueue({ type: d.AZ.EDIT, message: u }, (n) => {
                let r = !n.hasErr && L.yf.has(n.body.code);
                if (r) {
                    let e = { type: d.AZ.EDIT, message: u };
                    l.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                n.hasErr
                    ? o.OR.announce(eN.intl.string(eN.t.Atp7FP))
                    : r
                      ? o.OR.announce(eN.intl.string(eN.t.Hym4ix))
                      : o.OR.announce(eN.intl.string(eN.t["0x1HBD"])),
                    eB.endEditMessage(e, n.hasErr ? void 0 : n),
                    eB.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await er.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: eS.Rsh.MESSAGE(e, t),
                    body: { flags: eS.pr7.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await er.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: eS.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    l.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                        o.OR.announce(eN.intl.string(eN.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await er.A.unarchiveThreadIfNecessary(e),
                  s.Bo.del({ url: eS.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      r();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(eS.HAw.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: eS.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eN.intl.formatToPlainString(eN.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eN.intl.string(eN.t.z2gyNF)),
                    ey.A.show({
                        title: eN.intl.string(eN.t.Vd1hs6),
                        body: e,
                        confirmText: eN.intl.string(eN.t.BddRzS),
                    });
            }
        },
        trackInvite: eP,
    },
    ej = eB;
