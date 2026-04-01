"use strict";
n.d(t, { A: () => eH }), n(801541), n(938796);
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
    C = n(390248),
    N = n(885918),
    R = n(142120),
    O = n(992771),
    b = n(834757),
    D = n(753738),
    L = n(51271),
    w = n(844944),
    M = n(122906),
    x = n(21599),
    P = n(346542),
    k = n(279208),
    U = n(917878),
    G = n(586872),
    F = n(99341),
    V = n(925518),
    B = n(141468),
    H = n(407580),
    j = n(130201),
    Y = n(963852),
    W = n(195880),
    K = n(488004),
    $ = n(491001),
    z = n(928830),
    q = n(3137),
    Z = n(969632),
    X = n(79911),
    Q = n(561844),
    J = n(710969);
n(853145);
var ee = n(9842),
    et = n(679382),
    en = n(677413),
    er = n(867455),
    ei = n(614792),
    es = n(616356),
    ea = n(961350),
    eo = n(734057);
n(580745);
var el = n(299091),
    eu = n(320501),
    ec = n(576705),
    ed = n(290863),
    e_ = n(222823),
    ef = n(101392),
    ep = n(287809),
    eh = n(954571),
    em = n(927813),
    eE = n(45938),
    eg = n(975571),
    eA = n(927578),
    eI = n(661191),
    eT = n(292348),
    eS = n(157559),
    ey = n(652215),
    ev = n(768349),
    eC = n(401755),
    eN = n(381941),
    eR = n(985018);
let eO = null,
    eb = new v.A("MessageActionCreators"),
    eD = new v.A("MessageQueue"),
    eL = !1;
class ew {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function eM(e) {
    let {
            content: t,
            channelId: n,
            messageId: r,
            location: s,
            inviteAnalyticsMetadata: a,
            overrideProperties: o = {},
        } = e,
        l = ea.default.getId();
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
            let e = M.A.getGuildTemplate(u);
            if (null == e || e.state === eC.QB.RESOLVING) return;
            _.Ay.trackWithMetadata(ey.HAw.GUILD_TEMPLATE_LINK_SENT, {
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
        else if (t === S.I.APP_DIRECTORY_PROFILE) (0, O.y)(u), (0, g.KL)(u, ev.J.APP_DISCOVERY, l);
        else if (t === S.I.APP_DIRECTORY_STOREFRONT) (0, O.y)(u, "storefront");
        else if (t === S.I.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, m.u)(u);
            null != e && (0, O.y)(e.applicationId, "storefront_sku");
        } else if (t === S.I.ACTIVITY_BOOKMARK) {
            let e = (0, E.N)(c);
            (0, g.KL)(u, ev.J.ACTIVITY, e.referrerId ?? l, e.customId);
        } else if (t === S.I.EMBEDDED_ACTIVITY_INVITE) (0, g.KL)(u, ev.J.ACTIVITY_INVITE, l);
        else if (t === S.I.GUILD_PRODUCT);
        else if (t === S.I.SERVER_SHOP);
        else if (t === S.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === S.I.QUESTS_EMBED) {
            let e = (0, J.Li)(i.u.QUESTS_EMBED),
                t = (0, J.L4)(i.u.QUESTS_EMBED);
            (0, Q.av)({
                questId: u,
                event: ey.HAw.QUEST_LINK_SHARED,
                properties: { metadata_raw: null != e ? e : null, metadata_sealed: null != t ? t : null },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.u.QUESTS_EMBED,
            });
        } else if (t === S.I.APP_OAUTH2_LINK)
            _.Ay.trackWithMetadata(ey.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: u }),
                (0, g.KL)(u, ev.J.OAUTH, l);
        else if (t === S.I.COLLECTIBLES_SHOP);
        else if (t === S.I.GORILLA_DEEP_LINK);
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
        o = ea.default.getId(),
        l = el.A.getInvite(t),
        u = (0, x.y$)(t),
        c = null != l && (0, P.oK)(l),
        d = l?.target_application?.id;
    null != d && c && (0, g.KL)(d, ev.J.ACTIVITY_INVITE, o);
    let f = eo.A.getChannel(n);
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
            let r = es.A.getLastActiveStream();
            if (null != r && r.channelId === n.id) {
                (e = ey.G2g.STREAM), (t.destination_user_id = r.ownerId);
                let n = (0, b.Ee)(r, ed.A);
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
                send_type: ey.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, x._U)(u.baseCode, r) ?? null,
                ...a,
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
                invite_instance_id: (0, x._U)(u.baseCode, r) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(ey.HAw.INVITE_SENT, e));
    }
}
function eP(e, t, n, r, i) {
    (0, eE.e7)(e).forEach((e) => {
        let s = eo.A.getChannel(t);
        null != s &&
            _.Ay.trackWithMetadata(ey.HAw.GIFT_CODE_SENT, {
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
function ek(e, t, n, r) {
    let i = eo.A.getChannel(t);
    null != i &&
        eh.default.track(ey.HAw.MESSAGE_SENT_WITH_GIF, {
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
    eh.default.track(ey.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}
function eG(e, t) {
    let n = eu.A.getMessage(e, t);
    return null != n && n.hasFlag(ey.pr7.CROSSPOSTED);
}
function eF(e, t) {
    let n = eu.A.getMessage(e, t);
    if (null == n || n.type !== ey.lAJ.REPLY) return;
    let r = ee.A.getMessageByReference(n.messageReference);
    if (r.state === ee.a.LOADED && !n.mentions.includes(r.message.author.id))
        return { parse: Object.values(ey.uw8), replied_user: !1 };
}
let eV = {
        [ey.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eR.intl.formatToPlainString(eR.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [ey.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: () => {
                let e = eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                    { enabled: t } = V.A.getConfig({ location: "sendClydeError" });
                return t
                    ? eR.intl.formatToPlainString(eR.t.llTkqr, { helpUrl: e })
                    : eR.intl.formatToPlainString(eR.t.SkGL7l, { helpUrl: e });
            },
        },
        [ey.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eR.intl.formatToPlainString(eR.t.SkGL7l, {
                    helpUrl: eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [ey.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eR.intl.string(eR.t["/jUd2+"])
                    : eR.intl.string(eR.t["5EMPA7"]),
        },
        [ey.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eR.intl.string(eR.t["aY+lLC"]),
        },
        [ey.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eR.intl.formatToPlainString(eR.t.zSG3Qy, { helpUrl: ey.X7G.HARMFUL_LINKS }),
        },
        [ey.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eR.intl.string(eR.t.WxX2Fd),
        },
        [ey.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eR.intl.string(eR.t.k1Cjqr),
        },
        [ey.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eR.intl.string(eR.t.Z5SUuv),
        },
        [ey.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eR.intl.string(eR.t.E8nbNb),
        },
        [ey.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eR.intl.string(eR.t.aRUbah),
        },
        [ey.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eR.intl.string(eR.t["/meGhR"]),
        },
        [ey.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eR.intl.string(eR.t.Oc1Zjw),
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
                _.Ay.trackWithMetadata(ey.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                eB.receiveMessage(e, (0, Y.pO)({ messageId: r, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, Y.Ay)({
                channelId: e,
                nonce: n,
                type: ey.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: ey.pr7.EPHEMERAL,
                author: { id: ey.oIV, username: "Nitro Notification", discriminator: ey.h3J, avatar: "nitro", bot: !0 },
            });
            eB.receiveMessage(e, { ...r, state: ey.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, Y.Ay)({
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
            eB.receiveMessage(e, { ...n, state: ey.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, Y.Ay)({
                channelId: e,
                type: ey.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: ey.pr7.EPHEMERAL,
                author: {
                    id: ey.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: ey.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            eB.receiveMessage(e, { ...n, state: ey.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = eo.A.getChannel(e);
            if (null == n) return;
            let r = eV[t];
            null == r
                ? eB.sendBotMessage(
                      e,
                      eR.intl.formatToPlainString(eR.t.SkGL7l, {
                          helpUrl: eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : eB.sendBotMessage(e, r.messageGetter(n), r.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = eo.A.getChannel(e);
            if (null == i) return;
            let { message: s, messageName: a } = (0, r.YW)({ isDM: i.isDM(), isGDM: i.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eR.intl.string(eR.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eR.intl.string(eR.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eR.intl.string(eR.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                o = (0, W.m)();
            eB.sendBotMessage(e, s, a, o),
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
            eB.trackJump(e, null, "Present");
            let n = { present: !0 };
            eu.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eB.fetchMessages({ channelId: e, limit: t, jump: n });
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
                context: s,
                extraProperties: a = null,
                isPreload: o,
                returnMessageId: l,
                skipLocalFetch: u,
                jumpType: c,
                avoidInitialScroll: d,
            } = e;
            return (
                "string" == typeof s && eB.trackJump(t, n, s, a),
                eO?.pauseAllMediaPlayers?.(),
                eB.fetchMessages({
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
            eB.fetchMessages({ channelId: t, limit: ey.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await a.Bo.get({
                    url: ey.Rsh.MESSAGES(t),
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
                E = eo.A.getChannel(t),
                g = R.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != E && E.type === ey.rbe.GUILD_STORE) return !1;
            if (
                t === A.E ||
                (eb.log(`Fetching messages for ${t} between ${r} and ${n}. jump=${JSON.stringify(s)}`),
                eB._tryFetchMessagesCached({
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
            ei.A.fetchMessages.recordStart(), U.A.recordChannelFetchStart(t, m ?? I, n, r, i);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = c.A.getOrCreate(t).loadStart(T);
            c.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let y = T?.messageId,
                v = new ew();
            return (
                d || this.fetchLocalMessages(t, m ?? I, n, r, i, v),
                a.Bo.get({
                    url: ey.Rsh.MESSAGES(t),
                    query: { before: n, after: r, limit: i, around: y, preload: u, feature: h },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        ei.A.fetchMessages.recordEnd(),
                        ei.A.dispatchMessages.measure(() => {
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
                                        .sort(eI.default.compare)
                                        .indexOf(y);
                                if ((r < n - 1 && (d = !1), a.length - r < e && (h = !1), h && a.length > 0)) {
                                    let e = e_.Ay.lastMessageId(t);
                                    a[0].id === e && (h = !1);
                                }
                            }
                            eb.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${u}`),
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
                                    isStale: !g || R.A.lastTimeConnectedChanged() >= I,
                                    truncate: _,
                                    avoidInitialScroll: p,
                                }),
                                U.A.recordChannelFetchedNetwork(t, m ?? I, n, r, i, a);
                        }),
                        !0
                    ),
                    () => (
                        eb.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, s) {
            let a = eo.A.getBasicChannel(e),
                o = c.A.getOrCreate(e),
                u = f.A.database();
            if (null == u || null == a || null != n || null != r) return void ei.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void ei.A.addLocalMessages(e, -2);
            let d = await (0, p.kk)(() => h.Ay.load(u, e, i));
            if (null == d) return void ei.A.addLocalMessages(e, -3);
            if (
                (eb.log(
                    `fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                ei.A.addLocalMessages(e, d.messages.length),
                !s.completed && d.messages.length > 0)
            ) {
                let s = d.messages.length >= i && d.connectionId === R.A.lastTimeConnectedChanged();
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
            let n = eo.A.getBasicChannel(e),
                r = f.A.database();
            if (null == r || null == n) return;
            let i = c.A.getOrCreate(e);
            if (i.hasMoreAfter) return;
            let s = await (0, p.kk)(() => h.Ay.load(r, e, t));
            if (null == s) return;
            i = c.A.getOrCreate(e);
            let a = i.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => eI.default.compare(e.id, a) > 0);
            eb.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: o,
                        stale: !0,
                        isForegroundCacheLoad: (0, $.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: s, focus: a, truncate: o } = e,
                u = eu.A.getMessages(t);
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
                let e = s?.messageId != null ? eI.default.extractTimestamp(s?.messageId) : 0,
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
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: ey.d7Q }), !0
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
            let i = await (0, X.A)(e);
            if (null != i) return eB.sendMessage(i, t, n, r);
            let s = r.nonce ?? (0, W.m)();
            r = { ...r, nonce: s };
            let a = () => eB._sendMessage(e, t, r),
                o = F.Ay.backgroundify(a, void 0);
            return (H.A.recordMessageSendAttempt(e, s, r), eu.A.isReady(e))
                ? o()
                : n && e !== A.E
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
            let t = eB.getSendMessageOptionsForReply(e.pendingReply),
                n = eB.getSendMessageOptionsForStickers({ ...e }),
                r = eB.getSendMessageOptionsForScheduledMessage({ ...e }),
                i = eB.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...r, ...i };
        },
        sendInvite(e, t, n, r, i) {
            let s = (0, k.A)(t);
            return (
                null != i &&
                    (s = `${i}
${s}`),
                eB._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
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
            return a.Bo.post({
                url: ey.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: i, message_reference: r },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eN.Hx.GREET },
            }).then(
                (n) => (
                    j.A.donateSentMessage(n.body.content, e),
                    eB.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eb.log("Failed to send greeting"),
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
                { ...n, poll: t, location: eN.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eA.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eR.intl.string(eR.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : ec.A.canWithPartialContext(ey.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eR.intl.string(eR.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eR.intl.string(eR.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: r, errorMessageName: i }
            );
        },
        async _sendMessage(e, t, n) {
            let r,
                i = (0, X.A)(e);
            if (null != i)
                return (
                    eD.info("Converting channel to a private channel"),
                    i.then((e) => {
                        eD.info("Finished converting channel to a private channel"), eB._sendMessage(e, t, n);
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
                    onAttachmentUploadError: R,
                    announcementSendOptions: O,
                    withCheckpoint: b,
                } = n,
                M = n.flags ?? 0,
                [x, P] = (0, en.A)(a);
            x && ((a = P), (M = (0, s.UI)(M, ey.pr7.SUPPRESS_NOTIFICATIONS)));
            let k = !1,
                U = n.messageReference?.type === ey.SH7.FORWARD;
            if (
                "" === a &&
                null == _ &&
                null == h &&
                null == g &&
                null == A &&
                null == S &&
                !U &&
                (null == y || 0 === y.length) &&
                !b &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == v || !(v.length > 0)) return Promise.resolve();
                else k = !0;
            let F = null != m ? ey.lAJ.REPLY : ey.lAJ.DEFAULT,
                V = n.nonce ?? (0, W.m)(),
                $ = V,
                Q = (0, Y.Ay)({
                    channelId: e,
                    content: a,
                    tts: c,
                    type: F,
                    messageReference: m,
                    allowedMentions: E,
                    flags: 0 !== M ? M : void 0,
                    nonce: V,
                    poll: (0, Z.G8)(g),
                    sharedCustomTheme: A,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, z.iq)(e, Q.id),
                    null != h && (Q.sticker_items = h.map((e) => et.A.getStickerById(e)).filter((e) => null != e)),
                    eB.receiveMessage(e, Q, !0, n)),
                !eL && null != o && o.length > 0)
            ) {
                eL = !0;
                let t = ep.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eB.validateMessage(o, t, e);
                eB.sendBotMessage(e, n, r);
            }
            let J = {
                type: null != O ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: a,
                    nonce: V,
                    tts: c,
                    message_reference: m,
                    allowed_mentions: E,
                    flags: M,
                    analyticsLocation: f,
                },
            };
            if (
                (null != t.components && (J.message.components = t.components),
                null != O &&
                    ((J.message.create_thread = O.createThread),
                    (J.message.title = O.threadName),
                    (J.message.publish = O.publish ?? !1)),
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
                (null != g && (J.message.poll = g),
                null != A && (J.message.shared_client_theme = A),
                null != h && (J.message.sticker_ids = h),
                q.A.isEnabled() && (J.message.has_poggermode_enabled = !0),
                b && (J.message.with_checkpoint = !0),
                null != S && (J.message.content_inventory_entry = S),
                null != y && y.length > 0 && (J.message.attachments = y),
                null != v && v.length > 0)
            )
                try {
                    let t = await (0, G.L)({
                        channelId: e,
                        nonce: V,
                        items: v,
                        message: Q,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let i = t.attachments;
                    if (((r = t.uploader), k && (null == i || 0 === i.length))) return;
                    if (null != i && ((J.message.attachments = i.map((e, t) => (0, eT.OW)(e, t))), (0, I.J)())) {
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
                    (0, K.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), R?.(e, t, n, r);
                    return;
                }
            return new Promise((t, i) => {
                let s = Date.now(),
                    o = d.Ay.length,
                    c = Math.floor(1e4 * Math.random());
                eD.info(`Queueing message to be sent LogId:${c}`),
                    d.Ay.enqueue(
                        J,
                        (_) => {
                            let m = Date.now() - s;
                            if (_.ok) {
                                j.A.donateSentMessage(a, e),
                                    eB.receiveMessage(e, _.body, !0, {
                                        sendAnalytics: { duration: m, queueSize: o },
                                        poll: g,
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
                                                eb.log(
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
                                H.A.recordMessageSendApiResponse(V),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ef.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: u }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: h }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: ep.default.getCurrentUser() },
                                    }),
                                    eM({
                                        content: a,
                                        channelId: e,
                                        messageId: _.body.id,
                                        location: f ?? "chat_input",
                                        inviteAnalyticsMetadata: p,
                                    }),
                                    eP(a, e, _.body.id, f ?? "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
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
                                eb.log("Failed to send message", {
                                    hasErr: _.hasErr,
                                    status: _.status,
                                    code: _.body?.code,
                                    error: _.err,
                                });
                                let s = !1;
                                if (_.hasErr) "ABORTED" === _.err.code && (s = !0);
                                else if (_.status >= 400 && _.status < 500 && _.body)
                                    if (_.body.code === ey.t02.SLOWMODE_RATE_LIMITED) {
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
                                        D.yf.has(_.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: J,
                                                  errorResponseBody: { code: _.body.code, message: _.body.message },
                                              })
                                            : _.body.code === ey.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : _.body.code === ey.t02.EXPLICIT_CONTENT
                                                ? (t = eN.ty.EXPLICIT_CONTENT)
                                                : null != g || U || null != S || eB.sendClydeError(e, _.body.code);
                                s
                                    ? eB.deleteMessage(e, $, !0)
                                    : (null != r &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: r._file,
                                              messageId: $,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      _.hasErr ||
                                          t !== eN.ty.EXPLICIT_CONTENT ||
                                          eB.sendExplicitMediaClydeError(
                                              e,
                                              _.body?.attachments,
                                              C.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: $,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, K.O)({
                                          failureCode: _.hasErr ? void 0 : _.status,
                                          errorMessage: _.hasErr ? _.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eb.log("Cancelling pending message", e.nonce),
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
            if ((0, s.Lt)(t.flags, ey.pr7.IS_COMPONENTS_V2)) {
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
            let s = eF(e, t),
                a = eG(e, t),
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
                    ? o.OR.announce(eR.intl.string(eR.t.Atp7FP))
                    : r
                      ? o.OR.announce(eR.intl.string(eR.t.Hym4ix))
                      : o.OR.announce(eR.intl.string(eR.t["0x1HBD"])),
                    eB.endEditMessage(e, n.hasErr ? void 0 : n),
                    eB.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await er.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: ey.Rsh.MESSAGE(e, t),
                    body: { flags: ey.pr7.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await er.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
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
                        o.OR.announce(eR.intl.string(eR.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await er.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: ey.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
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
                return await a.Bo.post({
                    url: ey.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eR.intl.formatToPlainString(eR.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eR.intl.string(eR.t.z2gyNF)),
                    eS.A.show({
                        title: eR.intl.string(eR.t.Vd1hs6),
                        body: e,
                        confirmText: eR.intl.string(eR.t.BddRzS),
                    });
            }
        },
        trackInvite: ex,
    },
    eH = eB;
