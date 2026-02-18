"use strict";
n.d(t, { A: () => eB }), n(801541), n(938796);
var r = n(889137),
    i = n(696292),
    s = n(665260),
    a = n(562465),
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
    E = n(909338),
    g = n(354287),
    A = n(695870),
    I = n(734066),
    T = n(372684),
    S = n(167189),
    y = n(833291),
    v = n(626584),
    N = n(390248),
    C = n(885918),
    b = n(142120),
    R = n(992771),
    O = n(834757),
    D = n(753738),
    L = n(51271),
    w = n(844944),
    x = n(122906),
    M = n(21599),
    P = n(346542),
    k = n(279208),
    U = n(917878),
    G = n(586872),
    F = n(99341),
    V = n(141468),
    B = n(407580),
    H = n(130201),
    j = n(963852),
    Y = n(195880),
    W = n(488004),
    K = n(491001),
    z = n(928830),
    $ = n(3137),
    q = n(969632),
    Z = n(79911),
    X = n(561844),
    Q = n(710969);
n(853145);
var J = n(9842),
    ee = n(679382),
    et = n(677413),
    en = n(867455),
    er = n(614792),
    ei = n(616356),
    es = n(961350),
    ea = n(734057);
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
    eE = n(975571),
    eg = n(927578),
    eA = n(661191),
    eI = n(292348),
    eT = n(157559),
    eS = n(652215),
    ey = n(768349),
    ev = n(401755),
    eN = n(381941),
    eC = n(985018);
let eb = null,
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
            location: s,
            inviteAnalyticsMetadata: a,
            overrideProperties: o = {},
        } = e,
        l = es.default.getId();
    (0, y.Ay)(t).forEach((e) => {
        let { type: t, code: u, url: c } = e;
        if (t === S.I.INVITE)
            ex({
                inviteKey: u,
                channelId: n,
                messageId: r,
                location: s,
                inviteAnalyticsMetadata: a,
                overrideProperties: o,
            });
        else if (t === S.I.TEMPLATE) {
            let e = x.A.getGuildTemplate(u);
            if (null == e || e.state === ev.QB.RESOLVING) return;
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
        else if (t === S.I.APP_DIRECTORY_PROFILE) (0, R.y)(u), (0, g.KL)(u, ey.J.APP_DISCOVERY, l);
        else if (t === S.I.APP_DIRECTORY_STOREFRONT) (0, R.y)(u, "storefront");
        else if (t === S.I.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, m.u)(u);
            null != e && (0, R.y)(e.applicationId, "storefront_sku");
        } else if (t === S.I.ACTIVITY_BOOKMARK) {
            let e = (0, E.N)(c);
            (0, g.KL)(u, ey.J.ACTIVITY, e.referrerId ?? l, e.customId);
        } else if (t === S.I.EMBEDDED_ACTIVITY_INVITE) (0, g.KL)(u, ey.J.ACTIVITY_INVITE, l);
        else if (t === S.I.GUILD_PRODUCT);
        else if (t === S.I.SERVER_SHOP);
        else if (t === S.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === S.I.QUESTS_EMBED) {
            let e = (0, Q.Li)(i.u.QUESTS_EMBED),
                t = (0, Q.L4)(i.u.QUESTS_EMBED);
            (0, X.av)({
                questId: u,
                event: eS.HAw.QUEST_LINK_SHARED,
                properties: { metadata_raw: null != e ? e : null, metadata_sealed: null != t ? t : null },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.u.QUESTS_EMBED,
            });
        } else if (t === S.I.APP_OAUTH2_LINK)
            _.Ay.trackWithMetadata(eS.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: u }),
                (0, g.KL)(u, ey.J.OAUTH, l);
        else if (t === S.I.COLLECTIBLES_SHOP);
        else throw Error(`Unknown coded link type: ${t}`);
    });
}
function ex(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: r,
            location: i,
            inviteAnalyticsMetadata: s,
            overrideProperties: a = {},
        } = e,
        o = es.default.getId(),
        l = eo.A.getInvite(t),
        u = (0, M.y$)(t),
        c = null != l && (0, P.oK)(l),
        d = l?.target_application?.id;
    null != d && c && (0, g.KL)(d, ey.J.ACTIVITY_INVITE, o);
    let f = ea.A.getChannel(n);
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
            let r = ei.A.getLastActiveStream();
            if (null != r && r.channelId === n.id) {
                (e = eS.G2g.STREAM), (t.destination_user_id = r.ownerId);
                let n = (0, O.Ee)(r, ec.A);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s &&
            (null != s.suggestionData &&
                ((t.is_suggested = s.suggestionData.isAffinitySuggestion),
                (t.row_num = s.suggestionData.rowNum),
                (t.num_total = s.suggestionData.numTotal),
                (t.num_affinity_connections = s.suggestionData.numAffinityConnections),
                (t.is_filtered = s.suggestionData.isFiltered)),
            (t.source = s.source)),
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
                ...a,
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
                ...a,
            }),
            _.Ay.trackWithMetadata(eS.HAw.INVITE_SENT, e));
    }
}
function eM(e, t, n, r, i) {
    (0, em.e7)(e).forEach((e) => {
        let s = ea.A.getChannel(t);
        null != s &&
            _.Ay.trackWithMetadata(eS.HAw.GIFT_CODE_SENT, {
                location: r,
                gift_code: e,
                guild_id: s.getGuildId(),
                channel_id: s.id,
                channel_type: s.type,
                message_id: n,
                automatic_send: i,
            });
    });
}
function eP(e, t, n, r) {
    let i = ea.A.getChannel(t);
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
function ek(e) {
    let { referencedMessageId: t, guildId: n, channelId: r, destinationChannelId: i } = e;
    ep.default.track(eS.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}
function eU(e, t) {
    let n = el.A.getMessage(e, t);
    return null != n && n.hasFlag(eS.pr7.CROSSPOSTED);
}
function eG(e, t) {
    let n = el.A.getMessage(e, t);
    if (null == n || n.type !== eS.lAJ.REPLY) return;
    let r = J.A.getMessageByReference(n.messageReference);
    if (r.state === J.a.LOADED && !n.mentions.includes(r.message.author.id))
        return { parse: Object.values(eS.uw8), replied_user: !1 };
}
let eF = {
        [eS.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eC.intl.string(eC.t.k1Cjqr),
        },
        [eS.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eC.intl.string(eC.t.Z5SUuv),
        },
        [eS.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eC.intl.formatToPlainString(eC.t.CTMXwL, {
                    helpUrl: eE.A.getArticleURL(eS.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eS.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eC.intl.string(eC.t.E8nbNb),
        },
        [eS.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eC.intl.string(eC.t.aRUbah),
        },
        [eS.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eC.intl.string(eC.t.aRUbah),
        },
        [eS.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eC.intl.string(eC.t["/meGhR"]),
        },
        [eS.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eC.intl.string(eC.t.Oc1Zjw),
        },
    },
    eV = {
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
                eV.receiveMessage(e, (0, j.pO)({ messageId: r, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, j.Ay)({
                channelId: e,
                nonce: n,
                type: eS.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: eS.pr7.EPHEMERAL,
                author: { id: eS.oIV, username: "Nitro Notification", discriminator: eS.h3J, avatar: "nitro", bot: !0 },
            });
            eV.receiveMessage(e, { ...r, state: eS.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, j.Ay)({
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
            eV.receiveMessage(e, { ...n, state: eS.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, j.Ay)({
                channelId: e,
                type: eS.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: eS.pr7.EPHEMERAL,
                author: {
                    id: eS.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: eS.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            eV.receiveMessage(e, { ...n, state: eS.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ea.A.getChannel(e);
            null != i &&
                (r === eS.t02.SLOWMODE_RATE_LIMITED
                    ? ((t = eC.intl.formatToPlainString(eC.t.IWntYg, { seconds: i.rateLimitPerUser })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === eS.t02.INVALID_MESSAGE_SEND_USER
                      ? ((t = eC.intl.formatToPlainString(eC.t.CTMXwL, {
                            helpUrl: eE.A.getArticleURL(eS.MVz.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === eS.t02.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eC.intl.string(eC.t["/jUd2+"])
                                  : eC.intl.string(eC.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === eS.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eC.intl.string(eC.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === eS.t02.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eC.intl.formatToPlainString(eC.t.zSG3Qy, { helpUrl: eS.X7G.HARMFUL_LINKS })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r === eS.t02.HARMFUL_URL_BLOCKED
                              ? ((t = eC.intl.string(eC.t.WxX2Fd)), (n = "HARMFUL_URL_BLOCKED"))
                              : r in eF
                                ? ((n = eF[r].messageName), (t = eF[r].messageGetter()))
                                : ((t = eC.intl.formatToPlainString(eC.t.CTMXwL, {
                                      helpUrl: eE.A.getArticleURL(eS.MVz.DM_COULD_NOT_BE_DELIVERED),
                                  })),
                                  (n = `SEND_FAILED (${r})`)),
                eV.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ea.A.getChannel(e);
            if (null == i) return;
            let { message: s, messageName: a } = (0, r.YW)({ isDM: i.isDM(), isGDM: i.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eC.intl.string(eC.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eC.intl.string(eC.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eC.intl.string(eC.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                o = (0, Y.m)();
            eV.sendBotMessage(e, s, a, o),
                (0, N.hv)({
                    action: N.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            eV.trackJump(e, null, "Present");
            let n = { present: !0 };
            el.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eV.fetchMessages({ channelId: e, limit: t, jump: n });
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
                context: s,
                extraProperties: a = null,
                isPreload: o,
                returnMessageId: l,
                skipLocalFetch: u,
                jumpType: c,
                avoidInitialScroll: d,
            } = e;
            return (
                "string" == typeof s && eV.trackJump(t, n, s, a),
                eb?.pauseAllMediaPlayers?.(),
                eV.fetchMessages({
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
            eV.fetchMessages({ channelId: t, limit: eS.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await a.Bo.get({
                    url: eS.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (r.body.length > 0) return (0, V.rh)(r.body[0]);
        },
        fetchMessages(e) {
            let {
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: s,
                    focus: o,
                    isPreload: u,
                    skipLocalFetch: d,
                    truncate: _,
                    forICYMI: f,
                    avoidInitialScroll: p,
                    feature: h,
                    fetchKey: m,
                } = e,
                E = ea.A.getChannel(t),
                g = b.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != E && E.type === eS.rbe.GUILD_STORE) return !1;
            if (
                t === A.E ||
                (eR.log(`Fetching messages for ${t} between ${r} and ${n}. jump=${JSON.stringify(s)}`),
                eV._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: s,
                    focus: o,
                    truncate: _,
                }))
            )
                return;
            er.A.fetchMessages.recordStart(), U.A.recordChannelFetchStart(t, m ?? I, n, r, i);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = c.A.getOrCreate(t).loadStart(T);
            c.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let y = T?.messageId,
                v = new eL();
            return (
                d || this.fetchLocalMessages(t, m ?? I, n, r, i, v),
                a.Bo.get({
                    url: eS.Rsh.MESSAGES(t),
                    query: { before: n, after: r, limit: i, around: y, preload: u, feature: h },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        er.A.fetchMessages.recordEnd(),
                        er.A.dispatchMessages.measure(() => {
                            let a = e.body,
                                o = null != n,
                                u = null != r,
                                c = null == n && null == r,
                                d = null != y || (a.length === i && (o || c)),
                                h = null != y || (u && a.length === i);
                            if (null != y) {
                                let e = Math.floor(i / 2),
                                    n = e + (i % 2),
                                    r = [
                                        y,
                                        ...a.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(eA.default.compare)
                                        .indexOf(y);
                                if ((r < n - 1 && (d = !1), a.length - r < e && (h = !1), h && a.length > 0)) {
                                    let e = ed.Ay.lastMessageId(t);
                                    a[0].id === e && (h = !1);
                                }
                            }
                            eR.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${u}`),
                                v.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: a,
                                    isBefore: o,
                                    isAfter: u,
                                    hasMoreBefore: d,
                                    hasMoreAfter: h,
                                    limit: i,
                                    jump: s,
                                    forICYMI: f,
                                    isStale: !g || b.A.lastTimeConnectedChanged() >= I,
                                    truncate: _,
                                    avoidInitialScroll: p,
                                }),
                                U.A.recordChannelFetchedNetwork(t, m ?? I, n, r, i, a);
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
        async fetchLocalMessages(e, t, n, r, i, s) {
            let a = ea.A.getBasicChannel(e),
                o = c.A.getOrCreate(e),
                u = f.A.database();
            if (null == u || null == a || null != n || null != r) return void er.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void er.A.addLocalMessages(e, -2);
            let d = await (0, p.kk)(() => h.Ay.load(u, e, i));
            if (null == d) return void er.A.addLocalMessages(e, -3);
            if (
                (eR.log(
                    `fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                er.A.addLocalMessages(e, d.messages.length),
                !s.completed && d.messages.length > 0)
            ) {
                let s = d.messages.length >= i && d.connectionId === b.A.lastTimeConnectedChanged();
                U.A.recordChannelFetchedLocal(e, t, n, r, i, d.messages),
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: a.guild_id,
                        channelId: e,
                        users: d.users,
                        members: d.members,
                        messages: d.messages,
                        stale: !s,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            let n = ea.A.getBasicChannel(e),
                r = f.A.database();
            if (null == r || null == n) return;
            let i = c.A.getOrCreate(e);
            if (i.hasMoreAfter) return;
            let s = await (0, p.kk)(() => h.Ay.load(r, e, t));
            if (null == s) return;
            i = c.A.getOrCreate(e);
            let a = i.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => eA.default.compare(e.id, a) > 0);
            eR.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: o,
                        stale: !0,
                        shouldForceCommitMessages: (0, K.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: s, focus: a, truncate: o } = e,
                u = el.A.getMessages(t);
            if (u.cached || !u.ready) return !1;
            if (s?.messageId != null || a?.messageId != null) {
                if (s?.messageId != null && u.has(s.messageId, !1))
                    return (
                        l.h.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: s,
                            limit: i,
                            truncate: o,
                        }),
                        !0
                    );
                if (a?.messageId != null)
                    if (u.has(a.messageId, !1))
                        return (
                            l.h.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: a,
                                limit: i,
                                truncate: o,
                            }),
                            !0
                        );
                    else s = { ...a };
                let e = s?.messageId != null ? eA.default.extractTimestamp(s?.messageId) : 0,
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
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: eS.d7Q }), !0
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
            if (null != i) return eV.sendMessage(i, t, n, r);
            let s = r.nonce ?? (0, Y.m)();
            r = { ...r, nonce: s };
            let a = () => eV._sendMessage(e, t, r),
                o = F.Ay.backgroundify(a, void 0);
            return (B.A.recordMessageSendAttempt(e, s, r), el.A.isReady(e))
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
            let t = eV.getSendMessageOptionsForReply(e.pendingReply),
                n = eV.getSendMessageOptionsForStickers({ ...e }),
                r = eV.getSendMessageOptionsForScheduledMessage({ ...e }),
                i = eV.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...r, ...i };
        },
        sendInvite(e, t, n, r, i) {
            let s = (0, k.A)(t);
            return (
                null != i &&
                    (s = `${i}
${s}`),
                eV._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: r },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            eV._sendMessage(
                e,
                { content: t, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { location: n, inviteAnalyticsMetadata: r },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eV._sendMessage(
                e,
                { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: i },
                { ...r, stickerIds: t },
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return a.Bo.post({
                url: eS.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: i, message_reference: r },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eN.Hx.GREET },
            }).then(
                (n) => (
                    H.A.donateSentMessage(n.body.content, e),
                    eV.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eR.log("Failed to send greeting"),
                        429 !== t.status && eV.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eV._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eN.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eg.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eC.intl.string(eC.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eu.A.canWithPartialContext(eS.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eC.intl.string(eC.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eC.intl.string(eC.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
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
                        eO.info("Finished converting channel to a private channel"), eV._sendMessage(e, t, n);
                    })
                );
            let a = t.content,
                { invalidEmojis: o, validNonShortcutEmojis: u, tts: c = !1 } = t,
                {
                    activityAction: _,
                    location: f,
                    inviteAnalyticsMetadata: p,
                    stickerIds: h,
                    messageReference: m,
                    allowedMentions: E,
                    poll: g,
                    sharedCustomTheme: A,
                    contentInventoryEntry: S,
                    attachments: y,
                    attachmentsToUpload: v,
                    onAttachmentUploadError: b,
                    announcementSendOptions: R,
                    withCheckpoint: O,
                } = n,
                x = n.flags ?? 0,
                [M, P] = (0, et.A)(a);
            M && ((a = P), (x = (0, s.UI)(x, eS.pr7.SUPPRESS_NOTIFICATIONS)));
            let k = !1,
                U = n.messageReference?.type === eS.SH7.FORWARD;
            if (
                "" === a &&
                null == _ &&
                null == h &&
                null == g &&
                null == A &&
                null == S &&
                !U &&
                (null == y || 0 === y.length) &&
                !O &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == v || !(v.length > 0)) return Promise.resolve();
                else k = !0;
            let F = null != m ? eS.lAJ.REPLY : eS.lAJ.DEFAULT,
                K = n.nonce ?? (0, Y.m)(),
                X = K,
                Q = (0, j.Ay)({
                    channelId: e,
                    content: a,
                    tts: c,
                    type: F,
                    messageReference: m,
                    allowedMentions: E,
                    flags: 0 !== x ? x : void 0,
                    nonce: K,
                    poll: (0, q.G8)(g),
                    sharedCustomTheme: A,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, z.iq)(e, Q.id),
                    null != h && (Q.sticker_items = h.map((e) => ee.A.getStickerById(e)).filter((e) => null != e)),
                    eV.receiveMessage(e, Q, !0, n)),
                !eD && null != o && o.length > 0)
            ) {
                eD = !0;
                let t = ef.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eV.validateMessage(o, t, e);
                eV.sendBotMessage(e, n, r);
            }
            let J = {
                type: null != R ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: a,
                    nonce: K,
                    tts: c,
                    message_reference: m,
                    allowed_mentions: E,
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
                        _.type === eS.xL.JOIN_REQUEST || _.type === eS.xL.STREAM_REQUEST || null != t
                            ? t
                            : es.default.getSessionId())
                ) {
                    let t = { type: _.type, session_id: e, target_user_id: _.targetUserId },
                        { activity: n } = _;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (J.message.application_id = n.application_id),
                        (J.message.activity = t);
                }
            }
            if (
                (null != g && (J.message.poll = g),
                null != A && (J.message.shared_client_theme = A),
                null != h && (J.message.sticker_ids = h),
                $.A.isEnabled() && (J.message.has_poggermode_enabled = !0),
                O && (J.message.with_checkpoint = !0),
                null != S && (J.message.content_inventory_entry = S),
                null != y && y.length > 0 && (J.message.attachments = y),
                null != v && v.length > 0)
            )
                try {
                    let t = await (0, G.L)({
                        channelId: e,
                        nonce: K,
                        items: v,
                        message: Q,
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
                    (0, W.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), b?.(e, t, n, r);
                    return;
                }
            return new Promise((t, i) => {
                let s = Date.now(),
                    o = d.Ay.length,
                    c = Math.floor(1e4 * Math.random());
                eO.info(`Queueing message to be sent LogId:${c}`),
                    d.Ay.enqueue(
                        J,
                        (_) => {
                            let m = Date.now() - s;
                            if (_.ok) {
                                H.A.donateSentMessage(a, e),
                                    eV.receiveMessage(e, _.body, !0, {
                                        sendAnalytics: { duration: m, queueSize: o },
                                        poll: g,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.A.sendForward((0, V.rh)(_.body), n.alsoForwardToChannelId)
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
                                    s = w.A.getRequest(i);
                                if (null != s) {
                                    let { guildId: t, userId: n, applicationStatus: r } = s;
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
                                        content: a,
                                        channelId: e,
                                        messageId: _.body.id,
                                        location: f ?? "chat_input",
                                        inviteAnalyticsMetadata: p,
                                    }),
                                    eM(a, e, _.body.id, f ?? "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != n.gifMetadata && eP(n.gifMetadata, e, _.body.id, f ?? "chat_input"),
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
                                let s = !1;
                                if (_.hasErr) "ABORTED" === _.err.code && (s = !0);
                                else if (_.status >= 400 && _.status < 500 && _.body)
                                    if (_.body.code === eS.t02.SLOWMODE_RATE_LIMITED) {
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
                                            : _.body.code === eS.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : _.body.code === eS.t02.EXPLICIT_CONTENT
                                                ? (t = eN.ty.EXPLICIT_CONTENT)
                                                : null != g || U || null != S || eV.sendClydeError(e, _.body.code);
                                s
                                    ? eV.deleteMessage(e, X, !0)
                                    : (null != r &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: r._file,
                                              messageId: X,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      _.hasErr ||
                                          t !== eN.ty.EXPLICIT_CONTENT ||
                                          eV.sendExplicitMediaClydeError(
                                              e,
                                              _.body?.attachments,
                                              N.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: X,
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
            if ((0, s.Lt)(t.flags, eS.pr7.IS_COMPONENTS_V2)) {
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
            let s = eG(e, t),
                a = eU(e, t),
                u = { channelId: e, messageId: t, content: r, isCrossposted: a, allowed_mentions: s, components: i };
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
                    ? o.OR.announce(eC.intl.string(eC.t.Atp7FP))
                    : r
                      ? o.OR.announce(eC.intl.string(eC.t.Hym4ix))
                      : o.OR.announce(eC.intl.string(eC.t["0x1HBD"])),
                    eV.endEditMessage(e, n.hasErr ? void 0 : n),
                    eV.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await en.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: eS.Rsh.MESSAGE(e, t),
                    body: { flags: eS.pr7.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await en.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
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
                        o.OR.announce(eC.intl.string(eC.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await en.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: eS.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
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
                return await a.Bo.post({
                    url: eS.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eC.intl.formatToPlainString(eC.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eC.intl.string(eC.t.z2gyNF)),
                    eT.A.show({
                        title: eC.intl.string(eC.t.Vd1hs6),
                        body: e,
                        confirmText: eC.intl.string(eC.t.BddRzS),
                    });
            }
        },
        trackInvite: ex,
    },
    eB = eV;
