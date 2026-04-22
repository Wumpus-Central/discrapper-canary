"use strict";
n.d(t, { A: () => ex }), n(801541), n(938796);
var r = n(889137),
    i = n(696292),
    s = n(665260),
    a = n(562465),
    o = n(765178),
    l = n(73153),
    u = n(155718),
    d = n(128265),
    c = n(884384),
    _ = n(58149),
    f = n(723176),
    E = n(154049),
    h = n(348802),
    p = n(121401),
    m = n(909338),
    g = n(354287),
    A = n(695870),
    I = n(734066),
    T = n(372684),
    S = n(167189),
    y = n(833291),
    N = n(626584),
    O = n(390248),
    R = n(885918),
    v = n(142120),
    C = n(992771),
    b = n(834757),
    D = n(753738),
    L = n(51271),
    w = n(844944),
    M = n(122906),
    P = n(21599),
    U = n(346542),
    k = n(279208),
    x = n(917878),
    G = n(586872),
    V = n(99341),
    F = n(925518),
    B = n(521427),
    H = n(141468),
    Y = n(407580),
    W = n(130201),
    j = n(963852),
    K = n(195880),
    $ = n(488004),
    z = n(491001),
    q = n(928830),
    X = n(3137),
    Q = n(969632),
    J = n(79911),
    Z = n(561844),
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
    ed = n(299091),
    ec = n(320501),
    e_ = n(576705),
    ef = n(290863),
    eE = n(222823),
    eh = n(101392),
    ep = n(287809),
    em = n(954571),
    eg = n(927813),
    eA = n(45938),
    eI = n(975571),
    eT = n(927578),
    eS = n(661191),
    ey = n(292348),
    eN = n(157559),
    eO = n(652215),
    eR = n(768349),
    ev = n(401755),
    eC = n(381941),
    eb = n(985018);
let eD = new N.A("MessageActionCreators"),
    eL = new N.A("MessageQueue"),
    ew = !1;
class eM {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function eP(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: r,
            location: i,
            inviteAnalyticsMetadata: s,
            overrideProperties: a = {},
        } = e,
        o = eo.default.getId(),
        l = ed.A.getInvite(t),
        u = (0, P.y$)(t),
        d = null != l && (0, U.oK)(l),
        c = l?.target_application?.id;
    null != c && d && (0, g.KL)(c, eR.J.ACTIVITY_INVITE, o);
    let f = el.A.getChannel(n);
    if (null != f) {
        let e = null;
        f.isMultiUserDM() ? (e = eO.G2g.GDM_INVITE) : f.isPrivate() || (e = eO.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === eO.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let r = ea.A.getLastActiveStream();
            if (null != r && r.channelId === n.id) {
                (e = eO.G2g.STREAM), (t.destination_user_id = r.ownerId);
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
                send_type: eO.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, P._U)(u.baseCode, r) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(eO.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != l &&
            l.state === eO.elq.RESOLVED &&
            null != l.inviter &&
            ((e.invite_inviter_id = l.inviter.id),
            null != l.target_application && (e.application_id = l.target_application.id),
            (e = {
                ...e,
                location: i,
                invite_type: eO.G2g.FRIEND_INVITE,
                invite_code: u.baseCode,
                message_id: r,
                send_type: eO.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, P._U)(u.baseCode, r) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(eO.HAw.INVITE_SENT, e));
    }
}
let eU = {
        [eO.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eb.intl.formatToPlainString(eb.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [eO.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: () => {
                let e = eI.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED),
                    { enabled: t } = F.A.getConfig({ location: "sendClydeError" });
                return t
                    ? eb.intl.formatToPlainString(eb.t.llTkqr, { helpUrl: e })
                    : eb.intl.formatToPlainString(eb.t.SkGL7l, { helpUrl: e });
            },
        },
        [eO.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eb.intl.formatToPlainString(eb.t.SkGL7l, {
                    helpUrl: eI.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eO.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eb.intl.string(eb.t["/jUd2+"])
                    : eb.intl.string(eb.t["5EMPA7"]),
        },
        [eO.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eb.intl.string(eb.t["aY+lLC"]),
        },
        [eO.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eb.intl.formatToPlainString(eb.t.zSG3Qy, { helpUrl: eO.X7G.HARMFUL_LINKS }),
        },
        [eO.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eb.intl.string(eb.t.WxX2Fd),
        },
        [eO.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eb.intl.string(eb.t.k1Cjqr),
        },
        [eO.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eb.intl.string(eb.t.Z5SUuv),
        },
        [eO.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eb.intl.string(eb.t.E8nbNb),
        },
        [eO.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eb.intl.string(eb.t.aRUbah),
        },
        [eO.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eb.intl.string(eb.t["/meGhR"]),
        },
        [eO.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eb.intl.string(eb.t.Oc1Zjw),
        },
        [eO.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eb.intl.formatToPlainString(eb.t.DYFPg2, { maxSizeMb: ey.YK }),
        },
        [eO.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eb.intl.string(eb.t.bQldfH),
        },
        [eO.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eb.intl.string(eb.t.zl4Weq),
        },
    },
    ek = {
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
                _.Ay.trackWithMetadata(eO.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                ek.receiveMessage(e, (0, j.pO)({ messageId: r, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, j.Ay)({
                channelId: e,
                nonce: n,
                type: eO.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: eO.pr7.EPHEMERAL,
                author: { id: eO.oIV, username: "Nitro Notification", discriminator: eO.h3J, avatar: "nitro", bot: !0 },
            });
            ek.receiveMessage(e, { ...r, state: eO.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, j.Ay)({
                channelId: e,
                type: eO.lAJ.GIFTING_PROMPT,
                content: "",
                flags: eO.pr7.EPHEMERAL,
                author: {
                    id: eO.oIV,
                    username: "Gifting Prompt",
                    discriminator: eO.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            ek.receiveMessage(e, { ...n, state: eO.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, j.Ay)({
                channelId: e,
                type: eO.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: eO.pr7.EPHEMERAL,
                author: {
                    id: eO.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: eO.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            ek.receiveMessage(e, { ...n, state: eO.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = el.A.getChannel(e);
            if (null == n) return;
            let r = eU[t];
            null == r
                ? ek.sendBotMessage(
                      e,
                      eb.intl.formatToPlainString(eb.t.SkGL7l, {
                          helpUrl: eI.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : ek.sendBotMessage(e, r.messageGetter(n), r.messageName);
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
            ek.sendBotMessage(e, s, a, o),
                (0, O.hv)({
                    action: O.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            ek.trackJump(e, null, "Present");
            let n = { present: !0 };
            ec.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : ek.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, r) {
            _.Ay.trackWithMetadata(eO.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...r });
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
                jumpType: d,
                avoidInitialScroll: c,
            } = e;
            return (
                "string" == typeof s && ek.trackJump(t, n, s, a),
                ek.fetchMessages({
                    channelId: t,
                    limit: eO.d7Q,
                    jump: { messageId: n, flash: r, offset: i, returnMessageId: l, jumpType: d },
                    isPreload: o,
                    skipLocalFetch: u,
                    avoidInitialScroll: c,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            ek.fetchMessages({ channelId: t, limit: eO.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await a.Bo.get({
                    url: eO.Rsh.MESSAGES(t),
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
                    skipLocalFetch: c,
                    truncate: _,
                    forICYMI: f,
                    avoidInitialScroll: E,
                    feature: h,
                    fetchKey: p,
                } = e,
                m = el.A.getChannel(t),
                g = v.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != m && m.type === eO.rbe.GUILD_STORE) return !1;
            if (
                t === A.E ||
                (eD.log(`Fetching messages for ${t} between ${r} and ${n}. jump=${JSON.stringify(s)}`),
                ek._tryFetchMessagesCached({
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
            es.A.fetchMessages.recordStart(), x.A.recordChannelFetchStart(t, p ?? I, n, r, i);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = d.A.getOrCreate(t).loadStart(T);
            d.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let y = T?.messageId,
                N = new eM();
            return (
                c || this.fetchLocalMessages(t, p ?? I, n, r, i, N),
                a.Bo.get({
                    url: eO.Rsh.MESSAGES(t),
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
                                d = null == n && null == r,
                                c = null != y || (a.length === i && (o || d)),
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
                                if ((r < n - 1 && (c = !1), a.length - r < e && (h = !1), h && a.length > 0)) {
                                    let e = eE.Ay.lastMessageId(t);
                                    a[0].id === e && (h = !1);
                                }
                            }
                            eD.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${u}`),
                                N.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: a,
                                    isBefore: o,
                                    isAfter: u,
                                    hasMoreBefore: c,
                                    hasMoreAfter: h,
                                    limit: i,
                                    jump: s,
                                    forICYMI: f,
                                    isStale: !g || v.A.lastTimeConnectedChanged() >= I,
                                    truncate: _,
                                    avoidInitialScroll: E,
                                }),
                                x.A.recordChannelFetchedNetwork(t, p ?? I, n, r, i, a);
                        }),
                        !0
                    ),
                    () => (
                        eD.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, s) {
            let a = el.A.getBasicChannel(e),
                o = d.A.getOrCreate(e),
                u = f.A.database();
            if (null == u || null == a || null != n || null != r) return void es.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void es.A.addLocalMessages(e, -2);
            let c = await (0, E.kk)(() => h.Ay.load(u, e, i));
            if (null == c) return void es.A.addLocalMessages(e, -3);
            if (
                (eD.log(
                    `fetched ${c.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                es.A.addLocalMessages(e, c.messages.length),
                !s.completed && c.messages.length > 0)
            ) {
                let s = c.messages.length >= i && c.connectionId === v.A.lastTimeConnectedChanged();
                x.A.recordChannelFetchedLocal(e, t, n, r, i, c.messages),
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: a.guild_id,
                        channelId: e,
                        users: c.users,
                        members: c.members,
                        messages: c.messages,
                        stale: !s,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            let n = el.A.getBasicChannel(e),
                r = f.A.database();
            if (null == r || null == n) return;
            let i = d.A.getOrCreate(e);
            if (i.hasMoreAfter) return;
            let s = await (0, E.kk)(() => h.Ay.load(r, e, t));
            if (null == s) return;
            i = d.A.getOrCreate(e);
            let a = i.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => eS.default.compare(e.id, a) > 0);
            eD.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
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
                u = ec.A.getMessages(t);
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
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: eO.d7Q }), !0
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
            let i = await (0, J.A)(e);
            if (null != i) return ek.sendMessage(i, t, n, r);
            let s = r.nonce ?? (0, K.m)();
            r = { ...r, nonce: s };
            let a = V.Ay.backgroundify(() => ek._sendMessage(e, t, r), void 0);
            return (Y.A.recordMessageSendAttempt(e, s, r), ec.A.isReady(e))
                ? a()
                : n && e !== A.E
                  ? (eL.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        ec.A.whenReady(e, () => {
                            eL.info(`Channel ${e} is ready for sending now.`), a().then(t, n);
                        });
                    }))
                  : a();
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
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(eO.uw8), replied_user: !1 },
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
            let t = ek.getSendMessageOptionsForReply(e.pendingReply),
                n = ek.getSendMessageOptionsForStickers({ ...e }),
                r = ek.getSendMessageOptionsForScheduledMessage({ ...e }),
                i = ek.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...r, ...i };
        },
        sendInvite(e, t, n, r, i) {
            let s = (0, k.A)(t);
            return (
                null != i &&
                    (s = `${i}
${s}`),
                ek._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: r },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            ek._sendMessage(
                e,
                { content: t, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { location: n, inviteAnalyticsMetadata: r },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return ek._sendMessage(
                e,
                { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: i },
                { ...r, stickerIds: t },
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return a.Bo.post({
                url: eO.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: i, message_reference: r },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eC.Hx.GREET },
            }).then(
                (n) => (
                    W.A.donateSentMessage(n.body.content, e),
                    ek.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eD.log("Failed to send greeting"),
                        429 !== t.status && ek.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ek._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eC.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eT.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eb.intl.string(eb.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : e_.A.canWithPartialContext(eO.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eb.intl.string(eb.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eb.intl.string(eb.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: r, errorMessageName: i }
            );
        },
        async _sendMessage(e, t, n) {
            let r,
                a = (0, J.A)(e);
            if (null != a)
                return (
                    eL.info("Converting channel to a private channel"),
                    a.then((e) => {
                        eL.info("Finished converting channel to a private channel"), ek._sendMessage(e, t, n);
                    })
                );
            let o = t.content,
                { invalidEmojis: u, validNonShortcutEmojis: d, tts: f = !1 } = t,
                {
                    activityAction: E,
                    location: h,
                    inviteAnalyticsMetadata: A,
                    stickerIds: N,
                    messageReference: v,
                    allowedMentions: b,
                    poll: P,
                    sharedCustomTheme: U,
                    contentInventoryEntry: k,
                    attachments: x,
                    attachmentsToUpload: V,
                    onAttachmentUploadError: F,
                    announcementSendOptions: z,
                    withCheckpoint: et,
                } = n,
                ei = n.flags ?? 0,
                [es, ea] = (0, er.A)(o);
            es && ((o = ea), (ei = (0, s.UI)(ei, eO.pr7.SUPPRESS_NOTIFICATIONS)));
            let ed = el.A.getChannel(e),
                ec = eu.A.getGuild(ed?.guild_id);
            (0, B.Qz)(ec, ed, "_sendMessage") && (ei = (0, s.UI)(ei, eO.pr7.IS_GUILD_OFFICIAL));
            let e_ = !1,
                ef = n.messageReference?.type === eO.SH7.FORWARD;
            if (
                "" === o &&
                null == E &&
                null == N &&
                null == P &&
                null == U &&
                null == k &&
                !ef &&
                (null == x || 0 === x.length) &&
                !et &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == V || !(V.length > 0)) return Promise.resolve();
                else e_ = !0;
            let eE = null != v ? eO.lAJ.REPLY : eO.lAJ.DEFAULT,
                eI = n.nonce ?? (0, K.m)(),
                eT = (0, j.Ay)({
                    channelId: e,
                    content: o,
                    tts: f,
                    type: eE,
                    messageReference: v,
                    allowedMentions: b,
                    flags: 0 !== ei ? ei : void 0,
                    nonce: eI,
                    poll: (0, Q.G8)(P),
                    sharedCustomTheme: U,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, q.iq)(e, eT.id),
                    null != N && (eT.sticker_items = N.map((e) => en.A.getStickerById(e)).filter((e) => null != e)),
                    ek.receiveMessage(e, eT, !0, n)),
                !ew && null != u && u.length > 0)
            ) {
                ew = !0;
                let t = ep.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = ek.validateMessage(u, t, e);
                ek.sendBotMessage(e, n, r);
            }
            let eN = {
                type: null != z ? c.AZ.SEND_ANNOUNCEMENT : c.AZ.SEND,
                message: {
                    channelId: e,
                    content: o,
                    nonce: eI,
                    tts: f,
                    message_reference: v,
                    allowed_mentions: b,
                    flags: ei,
                    analyticsLocation: h,
                },
            };
            if (
                (null != t.components && (eN.message.components = t.components),
                null != z &&
                    ((eN.message.create_thread = z.createThread),
                    (eN.message.title = z.threadName),
                    (eN.message.publish = z.publish ?? !1)),
                null != E)
            ) {
                let e,
                    t = E?.activity.session_id;
                if (
                    null !=
                    (e =
                        E.type === eO.xL.JOIN_REQUEST || E.type === eO.xL.STREAM_REQUEST || null != t
                            ? t
                            : eo.default.getSessionId())
                ) {
                    let t = { type: E.type, session_id: e, target_user_id: E.targetUserId },
                        { activity: n } = E;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (eN.message.application_id = n.application_id),
                        (eN.message.activity = t);
                }
            }
            if (
                (null != P && (eN.message.poll = P),
                null != U && (eN.message.shared_client_theme = U),
                null != N && (eN.message.sticker_ids = N),
                X.A.isEnabled() && (eN.message.has_poggermode_enabled = !0),
                et && (eN.message.with_checkpoint = !0),
                null != k && (eN.message.content_inventory_entry = k),
                null != x && x.length > 0 && (eN.message.attachments = x),
                null != V && V.length > 0)
            )
                try {
                    let t = await (0, G.L)({
                        channelId: e,
                        nonce: eI,
                        items: V,
                        message: eT,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let i = t.attachments;
                    if (((r = t.uploader), e_ && (null == i || 0 === i.length))) return;
                    if (null != i && ((eN.message.attachments = i.map((e, t) => (0, ey.OW)(e, t))), (0, I.J)())) {
                        for (let e of i)
                            if (e.item?.clip?.decision?.signal?.type === T.Gy.DISTRIBUTED) {
                                let t = {
                                        id: e.item.clip.id,
                                        remoteTriggerClipId: e.item.clip.decision?.signal?.remoteTriggerClipId,
                                    },
                                    n = `__CLIP_METADATA__${JSON.stringify(t)}`;
                                eN.message.content = `${eN.message.content}${n}`;
                                break;
                            }
                    }
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, $.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), F?.(e, t, n, r);
                    return;
                }
            return new Promise((t, s) => {
                let a = Date.now(),
                    u = c.Ay.length,
                    f = Math.floor(1e4 * Math.random());
                eL.info(`Queueing message to be sent LogId:${f}`),
                    c.Ay.enqueue(
                        eN,
                        (E) => {
                            let I = Date.now() - a;
                            if (E.ok) {
                                var T, v, b, U, x, G, V;
                                let s;
                                W.A.donateSentMessage(o, e),
                                    ek.receiveMessage(e, E.body, !0, {
                                        sendAnalytics: { duration: I, queueSize: u },
                                        poll: P,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        R.A.sendForward((0, H.rh)(E.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                !(function (e) {
                                                    let {
                                                        referencedMessageId: t,
                                                        guildId: n,
                                                        channelId: r,
                                                        destinationChannelId: i,
                                                    } = e;
                                                    em.default.track(eO.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
                                                        referenced_message_id: t,
                                                        guild_id: n,
                                                        channel_id: r,
                                                        destination_channel_id: i,
                                                    });
                                                })({
                                                    referencedMessageId: E.body?.id,
                                                    guildId: E.body?.guild_id,
                                                    channelId: E.body?.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                eD.log(
                                                    `Failed to forward thread message to parent channel LogId:${f}`,
                                                    {
                                                        referencedMessageId: E.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let a = eS.default.cast(e),
                                    c = w.A.getRequest(a);
                                if (null != c) {
                                    let { guildId: t, userId: n, applicationStatus: r } = c;
                                    (0, L.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: E.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                Y.A.recordMessageSendApiResponse(eI),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eh.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: d }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: N }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: ep.default.getCurrentUser() },
                                    }),
                                    (function (e) {
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
                                            let { type: t, code: u, url: d } = e;
                                            if (t === S.I.INVITE)
                                                eP({
                                                    inviteKey: u,
                                                    channelId: n,
                                                    messageId: r,
                                                    location: s,
                                                    inviteAnalyticsMetadata: a,
                                                    overrideProperties: o,
                                                });
                                            else if (t === S.I.TEMPLATE) {
                                                let e = M.A.getGuildTemplate(u);
                                                if (null == e || e.state === ev.QB.RESOLVING) return;
                                                _.Ay.trackWithMetadata(eO.HAw.GUILD_TEMPLATE_LINK_SENT, {
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
                                            else if (t === S.I.APP_DIRECTORY_PROFILE)
                                                (0, C.y)(u), (0, g.KL)(u, eR.J.APP_DISCOVERY, l);
                                            else if (t === S.I.APP_DIRECTORY_STOREFRONT) (0, C.y)(u, "storefront");
                                            else if (t === S.I.APP_DIRECTORY_STOREFRONT_SKU) {
                                                let e = (0, p.u)(u);
                                                null != e && (0, C.y)(e.applicationId, "storefront_sku");
                                            } else if (t === S.I.ACTIVITY_BOOKMARK) {
                                                let e = (0, m.N)(d);
                                                (0, g.KL)(u, eR.J.ACTIVITY, e.referrerId ?? l, e.customId);
                                            } else if (t === S.I.EMBEDDED_ACTIVITY_INVITE)
                                                (0, g.KL)(u, eR.J.ACTIVITY_INVITE, l);
                                            else if (t === S.I.GUILD_PRODUCT);
                                            else if (t === S.I.SERVER_SHOP);
                                            else if (t === S.I.SOCIAL_LAYER_STOREFRONT);
                                            else if (t === S.I.QUESTS_EMBED) {
                                                let e = (0, ee.L4)(i.u.QUESTS_EMBED);
                                                (0, Z.av)({
                                                    questId: u,
                                                    event: eO.HAw.QUEST_LINK_SHARED,
                                                    properties: { metadata_sealed: null != e ? e : null },
                                                    trackGuildAndChannelMetadata: !0,
                                                    sourceQuestContent: i.u.QUESTS_EMBED,
                                                });
                                            } else if (t === S.I.APP_OAUTH2_LINK)
                                                _.Ay.trackWithMetadata(eO.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
                                                    application_id: u,
                                                }),
                                                    (0, g.KL)(u, eR.J.OAUTH, l);
                                            else if (t === S.I.COLLECTIBLES_SHOP);
                                            else throw Error(`Unknown coded link type: ${t}`);
                                        });
                                    })({
                                        content: o,
                                        channelId: e,
                                        messageId: E.body.id,
                                        location: h ?? "chat_input",
                                        inviteAnalyticsMetadata: A,
                                    }),
                                    (T = o),
                                    (v = E.body.id),
                                    (b = h ?? "chat_input"),
                                    (U = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, eA.e7)(T).forEach((t) => {
                                        let n = el.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(eO.HAw.GIFT_CODE_SENT, {
                                                location: b,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: v,
                                                automatic_send: U,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((x = n.gifMetadata),
                                        (G = E.body.id),
                                        (V = h ?? "chat_input"),
                                        null != (s = el.A.getChannel(e)) &&
                                            em.default.track(eO.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: V,
                                                message_id: G,
                                                gif_provider: x.gif_provider,
                                                load_id: x.load_id,
                                                source_object: x.source_object,
                                                gif_url: x.gif_url,
                                                gif_id: x.gif_id,
                                                ...(0, _.H$)(s.getGuildId()),
                                                ...(0, _.dI)(s),
                                            })),
                                    null != r &&
                                        l.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: r._file,
                                            aborted: !1,
                                        }),
                                    t(E);
                            } else {
                                let t;
                                eD.log("Failed to send message", {
                                    hasErr: E.hasErr,
                                    status: E.status,
                                    code: E.body?.code,
                                    error: E.err,
                                });
                                let i = !1;
                                if (E.hasErr) "ABORTED" === E.err.code && (i = !0);
                                else if (E.status >= 400 && E.status < 500 && E.body)
                                    if (E.body.code === eO.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = E.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eh.R.SendMessage,
                                                cooldownMs: t * eg.A.Millis.SECOND,
                                            });
                                    } else
                                        D.yf.has(E.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eN,
                                                  errorResponseBody: { code: E.body.code, message: E.body.message },
                                              })
                                            : E.body.code === eO.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : E.body.code === eO.t02.EXPLICIT_CONTENT
                                                ? (t = eC.ty.EXPLICIT_CONTENT)
                                                : null != P || ef || null != k || ek.sendClydeError(e, E.body.code);
                                i
                                    ? ek.deleteMessage(e, eI, !0)
                                    : (null != r &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: r._file,
                                              messageId: eI,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      E.hasErr ||
                                          t !== eC.ty.EXPLICIT_CONTENT ||
                                          ek.sendExplicitMediaClydeError(
                                              e,
                                              E.body?.attachments,
                                              O.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: eI,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, $.O)({
                                          failureCode: E.hasErr ? void 0 : E.status,
                                          errorMessage: E.hasErr ? E.err.message : void 0,
                                      }),
                                      c.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eD.log("Cancelling pending message", e.nonce),
                                              l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    s(E);
                            }
                        },
                        f,
                    );
            });
        },
        startEditMessage(e, t, n, r) {
            l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t, content: n, source: r });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, s.Lt)(t.flags, eO.pr7.IS_COMPONENTS_V2)) {
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
            let r,
                { content: i, components: s } = n;
            await ei.A.unarchiveThreadIfNecessary(e);
            let a = (function (e, t) {
                    let n = ec.A.getMessage(e, t);
                    if (null == n || n.type !== eO.lAJ.REPLY) return;
                    let r = et.A.getMessageByReference(n.messageReference);
                    if (r.state === et.a.LOADED && !n.mentions.includes(r.message.author.id))
                        return { parse: Object.values(eO.uw8), replied_user: !1 };
                })(e, t),
                u = null != (r = ec.A.getMessage(e, t)) && r.hasFlag(eO.pr7.CROSSPOSTED),
                d = { channelId: e, messageId: t, content: i, isCrossposted: u, allowed_mentions: a, components: s };
            c.Ay.enqueue({ type: c.AZ.EDIT, message: d }, (n) => {
                let r = !n.hasErr && D.yf.has(n.body.code);
                if (r) {
                    let e = { type: c.AZ.EDIT, message: d };
                    l.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                n.hasErr
                    ? o.O.announce(eb.intl.string(eb.t.Atp7FP))
                    : r
                      ? o.O.announce(eb.intl.string(eb.t.Hym4ix))
                      : o.O.announce(eb.intl.string(eb.t["0x1HBD"])),
                    ek.endEditMessage(e, n.hasErr ? void 0 : n),
                    ek.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await ei.A.unarchiveThreadIfNecessary(e);
            let n = ec.A.getMessage(e, t);
            null != n &&
                a.Bo.patch({
                    url: eO.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(n.flags, eO.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await ei.A.unarchiveThreadIfNecessary(e);
            let r = ec.A.getMessage(e, t);
            null != r &&
                a.Bo.patch({
                    url: eO.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(r.flags, eO.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await ei.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: eO.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    l.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                        o.O.announce(eb.intl.string(eb.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await ei.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: eO.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      r();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(eO.HAw.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: eO.Rsh.MESSAGE_CROSSPOST(e, t),
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
                    eN.A.show({
                        title: eb.intl.string(eb.t.Vd1hs6),
                        body: e,
                        confirmText: eb.intl.string(eb.t.BddRzS),
                    });
            }
        },
        trackInvite: eP,
    },
    ex = ek;
