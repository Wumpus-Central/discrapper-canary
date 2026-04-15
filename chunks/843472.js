"use strict";
n.d(t, { A: () => eY }), n(801541), n(938796);
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
    R = n(142120),
    O = n(992771),
    b = n(834757),
    D = n(753738),
    L = n(51271),
    w = n(844944),
    M = n(122906),
    P = n(21599),
    x = n(346542),
    k = n(279208),
    U = n(917878),
    G = n(586872),
    F = n(99341),
    V = n(925518),
    B = n(521427),
    H = n(141468),
    j = n(407580),
    Y = n(130201),
    W = n(963852),
    K = n(195880),
    $ = n(488004),
    z = n(491001),
    q = n(928830),
    Z = n(3137),
    X = n(969632),
    Q = n(79911),
    J = n(561844),
    ee = n(710969);
n(853145);
var et = n(9842),
    en = n(679382),
    er = n(677413),
    ei = n(867455),
    es = n(614792),
    ea = n(616356),
    eo = n(961350),
    el = n(734057);
n(580745);
var eu = n(71393),
    ec = n(299091),
    ed = n(320501),
    e_ = n(576705),
    ef = n(290863),
    ep = n(222823),
    eh = n(101392),
    em = n(287809),
    eE = n(954571),
    eg = n(927813),
    eA = n(45938),
    eI = n(975571),
    eT = n(927578),
    eS = n(661191),
    ey = n(292348),
    ev = n(157559),
    eN = n(652215),
    eC = n(768349),
    eR = n(401755),
    eO = n(381941),
    eb = n(985018);
let eD = null,
    eL = new v.A("MessageActionCreators"),
    ew = new v.A("MessageQueue"),
    eM = !1;
class eP {
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
            location: s,
            inviteAnalyticsMetadata: a,
            overrideProperties: o = {},
        } = e,
        l = eo.default.getId();
    (0, y.Ay)(t).forEach((e) => {
        let { type: t, code: u, url: c } = e;
        if (t === S.I.INVITE)
            ek({
                inviteKey: u,
                channelId: n,
                messageId: r,
                location: s,
                inviteAnalyticsMetadata: a,
                overrideProperties: o,
            });
        else if (t === S.I.TEMPLATE) {
            let e = M.A.getGuildTemplate(u);
            if (null == e || e.state === eR.QB.RESOLVING) return;
            _.Ay.trackWithMetadata(eN.HAw.GUILD_TEMPLATE_LINK_SENT, {
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
        else if (t === S.I.APP_DIRECTORY_PROFILE) (0, O.y)(u), (0, g.KL)(u, eC.J.APP_DISCOVERY, l);
        else if (t === S.I.APP_DIRECTORY_STOREFRONT) (0, O.y)(u, "storefront");
        else if (t === S.I.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, m.u)(u);
            null != e && (0, O.y)(e.applicationId, "storefront_sku");
        } else if (t === S.I.ACTIVITY_BOOKMARK) {
            let e = (0, E.N)(c);
            (0, g.KL)(u, eC.J.ACTIVITY, e.referrerId ?? l, e.customId);
        } else if (t === S.I.EMBEDDED_ACTIVITY_INVITE) (0, g.KL)(u, eC.J.ACTIVITY_INVITE, l);
        else if (t === S.I.GUILD_PRODUCT);
        else if (t === S.I.SERVER_SHOP);
        else if (t === S.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === S.I.QUESTS_EMBED) {
            let e = (0, ee.L4)(i.u.QUESTS_EMBED);
            (0, J.av)({
                questId: u,
                event: eN.HAw.QUEST_LINK_SHARED,
                properties: { metadata_sealed: null != e ? e : null },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.u.QUESTS_EMBED,
            });
        } else if (t === S.I.APP_OAUTH2_LINK)
            _.Ay.trackWithMetadata(eN.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: u }),
                (0, g.KL)(u, eC.J.OAUTH, l);
        else if (t === S.I.COLLECTIBLES_SHOP);
        else throw Error(`Unknown coded link type: ${t}`);
    });
}
function ek(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: r,
            location: i,
            inviteAnalyticsMetadata: s,
            overrideProperties: a = {},
        } = e,
        o = eo.default.getId(),
        l = ec.A.getInvite(t),
        u = (0, P.y$)(t),
        c = null != l && (0, x.oK)(l),
        d = l?.target_application?.id;
    null != d && c && (0, g.KL)(d, eC.J.ACTIVITY_INVITE, o);
    let f = el.A.getChannel(n);
    if (null != f) {
        let e = null;
        f.isMultiUserDM() ? (e = eN.G2g.GDM_INVITE) : f.isPrivate() || (e = eN.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === eN.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let r = ea.A.getLastActiveStream();
            if (null != r && r.channelId === n.id) {
                (e = eN.G2g.STREAM), (t.destination_user_id = r.ownerId);
                let n = (0, b.Ee)(r, ef.A);
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
                send_type: eN.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, P._U)(u.baseCode, r) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(eN.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != l &&
            l.state === eN.elq.RESOLVED &&
            null != l.inviter &&
            ((e.invite_inviter_id = l.inviter.id),
            null != l.target_application && (e.application_id = l.target_application.id),
            (e = {
                ...e,
                location: i,
                invite_type: eN.G2g.FRIEND_INVITE,
                invite_code: u.baseCode,
                message_id: r,
                send_type: eN.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, P._U)(u.baseCode, r) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(eN.HAw.INVITE_SENT, e));
    }
}
function eU(e, t, n, r, i) {
    (0, eA.e7)(e).forEach((e) => {
        let s = el.A.getChannel(t);
        null != s &&
            _.Ay.trackWithMetadata(eN.HAw.GIFT_CODE_SENT, {
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
function eG(e, t, n, r) {
    let i = el.A.getChannel(t);
    null != i &&
        eE.default.track(eN.HAw.MESSAGE_SENT_WITH_GIF, {
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
function eF(e) {
    let { referencedMessageId: t, guildId: n, channelId: r, destinationChannelId: i } = e;
    eE.default.track(eN.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}
function eV(e, t) {
    let n = ed.A.getMessage(e, t);
    return null != n && n.hasFlag(eN.pr7.CROSSPOSTED);
}
function eB(e, t) {
    let n = ed.A.getMessage(e, t);
    if (null == n || n.type !== eN.lAJ.REPLY) return;
    let r = et.A.getMessageByReference(n.messageReference);
    if (r.state === et.a.LOADED && !n.mentions.includes(r.message.author.id))
        return { parse: Object.values(eN.uw8), replied_user: !1 };
}
let eH = {
        [eN.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eb.intl.formatToPlainString(eb.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [eN.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: () => {
                let e = eI.A.getArticleURL(eN.MVz.DM_COULD_NOT_BE_DELIVERED),
                    { enabled: t } = V.A.getConfig({ location: "sendClydeError" });
                return t
                    ? eb.intl.formatToPlainString(eb.t.llTkqr, { helpUrl: e })
                    : eb.intl.formatToPlainString(eb.t.SkGL7l, { helpUrl: e });
            },
        },
        [eN.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eb.intl.formatToPlainString(eb.t.SkGL7l, {
                    helpUrl: eI.A.getArticleURL(eN.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eN.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eb.intl.string(eb.t["/jUd2+"])
                    : eb.intl.string(eb.t["5EMPA7"]),
        },
        [eN.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eb.intl.string(eb.t["aY+lLC"]),
        },
        [eN.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eb.intl.formatToPlainString(eb.t.zSG3Qy, { helpUrl: eN.X7G.HARMFUL_LINKS }),
        },
        [eN.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eb.intl.string(eb.t.WxX2Fd),
        },
        [eN.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eb.intl.string(eb.t.k1Cjqr),
        },
        [eN.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eb.intl.string(eb.t.Z5SUuv),
        },
        [eN.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eb.intl.string(eb.t.E8nbNb),
        },
        [eN.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eb.intl.string(eb.t.aRUbah),
        },
        [eN.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eb.intl.string(eb.t["/meGhR"]),
        },
        [eN.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eb.intl.string(eb.t.Oc1Zjw),
        },
        [eN.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eb.intl.formatToPlainString(eb.t.DYFPg2, { maxSizeMb: ey.YK }),
        },
        [eN.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eb.intl.string(eb.t.bQldfH),
        },
        [eN.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eb.intl.string(eb.t.zl4Weq),
        },
    },
    ej = {
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
                _.Ay.trackWithMetadata(eN.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                ej.receiveMessage(e, (0, W.pO)({ messageId: r, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, W.Ay)({
                channelId: e,
                nonce: n,
                type: eN.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: eN.pr7.EPHEMERAL,
                author: { id: eN.oIV, username: "Nitro Notification", discriminator: eN.h3J, avatar: "nitro", bot: !0 },
            });
            ej.receiveMessage(e, { ...r, state: eN.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, W.Ay)({
                channelId: e,
                type: eN.lAJ.GIFTING_PROMPT,
                content: "",
                flags: eN.pr7.EPHEMERAL,
                author: {
                    id: eN.oIV,
                    username: "Gifting Prompt",
                    discriminator: eN.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            ej.receiveMessage(e, { ...n, state: eN.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, W.Ay)({
                channelId: e,
                type: eN.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: eN.pr7.EPHEMERAL,
                author: {
                    id: eN.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: eN.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            ej.receiveMessage(e, { ...n, state: eN.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = el.A.getChannel(e);
            if (null == n) return;
            let r = eH[t];
            null == r
                ? ej.sendBotMessage(
                      e,
                      eb.intl.formatToPlainString(eb.t.SkGL7l, {
                          helpUrl: eI.A.getArticleURL(eN.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : ej.sendBotMessage(e, r.messageGetter(n), r.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = el.A.getChannel(e);
            if (null == i) return;
            let { message: s, messageName: a } = (0, r.YW)({ isDM: i.isDM(), isGDM: i.isGroupDM() })
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
                o = (0, K.m)();
            ej.sendBotMessage(e, s, a, o),
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
            ej.trackJump(e, null, "Present");
            let n = { present: !0 };
            ed.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : ej.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, r) {
            _.Ay.trackWithMetadata(eN.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...r });
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
                "string" == typeof s && ej.trackJump(t, n, s, a),
                eD?.pauseAllMediaPlayers?.(),
                ej.fetchMessages({
                    channelId: t,
                    limit: eN.d7Q,
                    jump: { messageId: n, flash: r, offset: i, returnMessageId: l, jumpType: c },
                    isPreload: o,
                    skipLocalFetch: u,
                    avoidInitialScroll: d,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            ej.fetchMessages({ channelId: t, limit: eN.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await a.Bo.get({
                    url: eN.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (r.body.length > 0) return (0, H.rh)(r.body[0]);
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
                E = el.A.getChannel(t),
                g = R.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != E && E.type === eN.rbe.GUILD_STORE) return !1;
            if (
                t === A.E ||
                (eL.log(`Fetching messages for ${t} between ${r} and ${n}. jump=${JSON.stringify(s)}`),
                ej._tryFetchMessagesCached({
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
            es.A.fetchMessages.recordStart(), U.A.recordChannelFetchStart(t, m ?? I, n, r, i);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = c.A.getOrCreate(t).loadStart(T);
            c.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let y = T?.messageId,
                v = new eP();
            return (
                d || this.fetchLocalMessages(t, m ?? I, n, r, i, v),
                a.Bo.get({
                    url: eN.Rsh.MESSAGES(t),
                    query: { before: n, after: r, limit: i, around: y, preload: u, feature: h },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        es.A.fetchMessages.recordEnd(),
                        es.A.dispatchMessages.measure(() => {
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
                                        .sort(eS.default.compare)
                                        .indexOf(y);
                                if ((r < n - 1 && (d = !1), a.length - r < e && (h = !1), h && a.length > 0)) {
                                    let e = ep.Ay.lastMessageId(t);
                                    a[0].id === e && (h = !1);
                                }
                            }
                            eL.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${u}`),
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
                        eL.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, s) {
            let a = el.A.getBasicChannel(e),
                o = c.A.getOrCreate(e),
                u = f.A.database();
            if (null == u || null == a || null != n || null != r) return void es.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void es.A.addLocalMessages(e, -2);
            let d = await (0, p.kk)(() => h.Ay.load(u, e, i));
            if (null == d) return void es.A.addLocalMessages(e, -3);
            if (
                (eL.log(
                    `fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                es.A.addLocalMessages(e, d.messages.length),
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
            let n = el.A.getBasicChannel(e),
                r = f.A.database();
            if (null == r || null == n) return;
            let i = c.A.getOrCreate(e);
            if (i.hasMoreAfter) return;
            let s = await (0, p.kk)(() => h.Ay.load(r, e, t));
            if (null == s) return;
            i = c.A.getOrCreate(e);
            let a = i.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => eS.default.compare(e.id, a) > 0);
            eL.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: o,
                        stale: !0,
                        isForegroundCacheLoad: (0, z.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: s, focus: a, truncate: o } = e,
                u = ed.A.getMessages(t);
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
                let e = s?.messageId != null ? eS.default.extractTimestamp(s?.messageId) : 0,
                    n = u.first(),
                    r = u.last();
                if (
                    (!u.hasMoreBefore && null != n && eS.default.extractTimestamp(n.id) >= e) ||
                    (!u.hasMoreAfter && null != r && eS.default.extractTimestamp(r.id) <= e) ||
                    (null != n &&
                        null != r &&
                        eS.default.extractTimestamp(n.id) < e &&
                        eS.default.extractTimestamp(r.id) > e)
                )
                    return (
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: eN.d7Q }), !0
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
            let i = await (0, Q.A)(e);
            if (null != i) return ej.sendMessage(i, t, n, r);
            let s = r.nonce ?? (0, K.m)();
            r = { ...r, nonce: s };
            let a = () => ej._sendMessage(e, t, r),
                o = F.Ay.backgroundify(a, void 0);
            return (j.A.recordMessageSendAttempt(e, s, r), ed.A.isReady(e))
                ? o()
                : n && e !== A.E
                  ? (ew.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        ed.A.whenReady(e, () => {
                            ew.info(`Channel ${e} is ready for sending now.`), o().then(t, n);
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
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(eN.uw8), replied_user: !1 },
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
            let t = ej.getSendMessageOptionsForReply(e.pendingReply),
                n = ej.getSendMessageOptionsForStickers({ ...e }),
                r = ej.getSendMessageOptionsForScheduledMessage({ ...e }),
                i = ej.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...r, ...i };
        },
        sendInvite(e, t, n, r, i) {
            let s = (0, k.A)(t);
            return (
                null != i &&
                    (s = `${i}
${s}`),
                ej._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: r },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            ej._sendMessage(
                e,
                { content: t, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { location: n, inviteAnalyticsMetadata: r },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return ej._sendMessage(
                e,
                { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: i },
                { ...r, stickerIds: t },
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return a.Bo.post({
                url: eN.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: i, message_reference: r },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eO.Hx.GREET },
            }).then(
                (n) => (
                    Y.A.donateSentMessage(n.body.content, e),
                    ej.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eL.log("Failed to send greeting"),
                        429 !== t.status && ej.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ej._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eO.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eT.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eb.intl.string(eb.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : e_.A.canWithPartialContext(eN.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eb.intl.string(eb.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eb.intl.string(eb.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: r, errorMessageName: i }
            );
        },
        async _sendMessage(e, t, n) {
            let r,
                i = (0, Q.A)(e);
            if (null != i)
                return (
                    ew.info("Converting channel to a private channel"),
                    i.then((e) => {
                        ew.info("Finished converting channel to a private channel"), ej._sendMessage(e, t, n);
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
                [P, x] = (0, er.A)(a);
            P && ((a = x), (M = (0, s.UI)(M, eN.pr7.SUPPRESS_NOTIFICATIONS)));
            let k = el.A.getChannel(e),
                U = eu.A.getGuild(k?.guild_id);
            (0, B.Qz)(U, k, "_sendMessage") && (M = (0, s.UI)(M, eN.pr7.IS_GUILD_OFFICIAL));
            let F = !1,
                V = n.messageReference?.type === eN.SH7.FORWARD;
            if (
                "" === a &&
                null == _ &&
                null == h &&
                null == g &&
                null == A &&
                null == S &&
                !V &&
                (null == y || 0 === y.length) &&
                !b &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == v || !(v.length > 0)) return Promise.resolve();
                else F = !0;
            let z = null != m ? eN.lAJ.REPLY : eN.lAJ.DEFAULT,
                J = n.nonce ?? (0, K.m)(),
                ee = J,
                et = (0, W.Ay)({
                    channelId: e,
                    content: a,
                    tts: c,
                    type: z,
                    messageReference: m,
                    allowedMentions: E,
                    flags: 0 !== M ? M : void 0,
                    nonce: J,
                    poll: (0, X.G8)(g),
                    sharedCustomTheme: A,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, q.iq)(e, et.id),
                    null != h && (et.sticker_items = h.map((e) => en.A.getStickerById(e)).filter((e) => null != e)),
                    ej.receiveMessage(e, et, !0, n)),
                !eM && null != o && o.length > 0)
            ) {
                eM = !0;
                let t = em.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = ej.validateMessage(o, t, e);
                ej.sendBotMessage(e, n, r);
            }
            let ei = {
                type: null != O ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: a,
                    nonce: J,
                    tts: c,
                    message_reference: m,
                    allowed_mentions: E,
                    flags: M,
                    analyticsLocation: f,
                },
            };
            if (
                (null != t.components && (ei.message.components = t.components),
                null != O &&
                    ((ei.message.create_thread = O.createThread),
                    (ei.message.title = O.threadName),
                    (ei.message.publish = O.publish ?? !1)),
                null != _)
            ) {
                let e,
                    t = _?.activity.session_id;
                if (
                    null !=
                    (e =
                        _.type === eN.xL.JOIN_REQUEST || _.type === eN.xL.STREAM_REQUEST || null != t
                            ? t
                            : eo.default.getSessionId())
                ) {
                    let t = { type: _.type, session_id: e, target_user_id: _.targetUserId },
                        { activity: n } = _;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (ei.message.application_id = n.application_id),
                        (ei.message.activity = t);
                }
            }
            if (
                (null != g && (ei.message.poll = g),
                null != A && (ei.message.shared_client_theme = A),
                null != h && (ei.message.sticker_ids = h),
                Z.A.isEnabled() && (ei.message.has_poggermode_enabled = !0),
                b && (ei.message.with_checkpoint = !0),
                null != S && (ei.message.content_inventory_entry = S),
                null != y && y.length > 0 && (ei.message.attachments = y),
                null != v && v.length > 0)
            )
                try {
                    let t = await (0, G.L)({
                        channelId: e,
                        nonce: J,
                        items: v,
                        message: et,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let i = t.attachments;
                    if (((r = t.uploader), F && (null == i || 0 === i.length))) return;
                    if (null != i && ((ei.message.attachments = i.map((e, t) => (0, ey.OW)(e, t))), (0, I.J)())) {
                        for (let e of i)
                            if (e.item?.clip?.decision?.signal?.type === T.Gy.DISTRIBUTED) {
                                let t = {
                                        id: e.item.clip.id,
                                        remoteTriggerClipId: e.item.clip.decision?.signal?.remoteTriggerClipId,
                                    },
                                    n = "__CLIP_METADATA__",
                                    r = `${n}${JSON.stringify(t)}`;
                                ei.message.content = `${ei.message.content}${r}`;
                                break;
                            }
                    }
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, $.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), R?.(e, t, n, r);
                    return;
                }
            return new Promise((t, i) => {
                let s = Date.now(),
                    o = d.Ay.length,
                    c = Math.floor(1e4 * Math.random());
                ew.info(`Queueing message to be sent LogId:${c}`),
                    d.Ay.enqueue(
                        ei,
                        (_) => {
                            let m = Date.now() - s;
                            if (_.ok) {
                                Y.A.donateSentMessage(a, e),
                                    ej.receiveMessage(e, _.body, !0, {
                                        sendAnalytics: { duration: m, queueSize: o },
                                        poll: g,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.A.sendForward((0, H.rh)(_.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                eF({
                                                    referencedMessageId: _.body?.id,
                                                    guildId: _.body?.guild_id,
                                                    channelId: _.body?.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                eL.log(
                                                    `Failed to forward thread message to parent channel LogId:${c}`,
                                                    {
                                                        referencedMessageId: _.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let i = eS.default.cast(e),
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
                                j.A.recordMessageSendApiResponse(J),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eh.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: u }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: h }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: em.default.getCurrentUser() },
                                    }),
                                    ex({
                                        content: a,
                                        channelId: e,
                                        messageId: _.body.id,
                                        location: f ?? "chat_input",
                                        inviteAnalyticsMetadata: p,
                                    }),
                                    eU(a, e, _.body.id, f ?? "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != n.gifMetadata && eG(n.gifMetadata, e, _.body.id, f ?? "chat_input"),
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
                                eL.log("Failed to send message", {
                                    hasErr: _.hasErr,
                                    status: _.status,
                                    code: _.body?.code,
                                    error: _.err,
                                });
                                let s = !1;
                                if (_.hasErr) "ABORTED" === _.err.code && (s = !0);
                                else if (_.status >= 400 && _.status < 500 && _.body)
                                    if (_.body.code === eN.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = _.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eh.R.SendMessage,
                                                cooldownMs: t * eg.A.Millis.SECOND,
                                            });
                                    } else
                                        D.yf.has(_.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: ei,
                                                  errorResponseBody: { code: _.body.code, message: _.body.message },
                                              })
                                            : _.body.code === eN.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : _.body.code === eN.t02.EXPLICIT_CONTENT
                                                ? (t = eO.ty.EXPLICIT_CONTENT)
                                                : null != g || V || null != S || ej.sendClydeError(e, _.body.code);
                                s
                                    ? ej.deleteMessage(e, ee, !0)
                                    : (null != r &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: r._file,
                                              messageId: ee,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      _.hasErr ||
                                          t !== eO.ty.EXPLICIT_CONTENT ||
                                          ej.sendExplicitMediaClydeError(
                                              e,
                                              _.body?.attachments,
                                              N.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ee,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, $.O)({
                                          failureCode: _.hasErr ? void 0 : _.status,
                                          errorMessage: _.hasErr ? _.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eL.log("Cancelling pending message", e.nonce),
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
            if ((0, s.Lt)(t.flags, eN.pr7.IS_COMPONENTS_V2)) {
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
            await ei.A.unarchiveThreadIfNecessary(e);
            let s = eB(e, t),
                a = eV(e, t),
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
                    ? o.OR.announce(eb.intl.string(eb.t.Atp7FP))
                    : r
                      ? o.OR.announce(eb.intl.string(eb.t.Hym4ix))
                      : o.OR.announce(eb.intl.string(eb.t["0x1HBD"])),
                    ej.endEditMessage(e, n.hasErr ? void 0 : n),
                    ej.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await ei.A.unarchiveThreadIfNecessary(e);
            let n = ed.A.getMessage(e, t);
            null != n &&
                a.Bo.patch({
                    url: eN.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(n.flags, eN.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await ei.A.unarchiveThreadIfNecessary(e);
            let r = ed.A.getMessage(e, t);
            null != r &&
                a.Bo.patch({
                    url: eN.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(r.flags, eN.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await ei.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: eN.Rsh.MESSAGE(e, t),
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
                : (await ei.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: eN.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      r();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(eN.HAw.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: eN.Rsh.MESSAGE_CROSSPOST(e, t),
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
                    ev.A.show({
                        title: eb.intl.string(eb.t.Vd1hs6),
                        body: e,
                        confirmText: eb.intl.string(eb.t.BddRzS),
                    });
            }
        },
        trackInvite: ek,
    },
    eY = ej;
