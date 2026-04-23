"use strict";
n.d(t, { A: () => eU }), n(801541), n(938796);
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
    I = n(167189),
    T = n(833291),
    S = n(626584),
    y = n(390248),
    N = n(885918),
    O = n(142120),
    R = n(992771),
    v = n(834757),
    C = n(753738),
    b = n(51271),
    D = n(844944),
    L = n(122906),
    w = n(21599),
    M = n(346542),
    P = n(279208),
    U = n(917878),
    k = n(586872),
    x = n(99341),
    G = n(925518),
    V = n(521427),
    F = n(141468),
    B = n(407580),
    H = n(130201),
    Y = n(963852),
    W = n(195880),
    j = n(488004),
    K = n(491001),
    $ = n(928830),
    z = n(3137),
    q = n(969632),
    X = n(79911),
    Q = n(561844),
    J = n(710969);
n(853145);
var Z = n(9842),
    ee = n(679382),
    et = n(677413),
    en = n(867455),
    er = n(614792),
    ei = n(616356),
    es = n(961350),
    ea = n(734057);
n(580745);
var eo = n(71393),
    el = n(299091),
    eu = n(320501),
    ed = n(576705),
    ec = n(290863),
    e_ = n(222823),
    ef = n(101392),
    eE = n(287809),
    eh = n(954571),
    ep = n(927813),
    em = n(45938),
    eg = n(975571),
    eA = n(927578),
    eI = n(661191),
    eT = n(292348),
    eS = n(157559),
    ey = n(652215),
    eN = n(768349),
    eO = n(401755),
    eR = n(381941),
    ev = n(985018);
let eC = new S.A("MessageActionCreators"),
    eb = new S.A("MessageQueue"),
    eD = !1;
class eL {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function ew(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: r,
            location: i,
            inviteAnalyticsMetadata: s,
            overrideProperties: a = {},
        } = e,
        o = es.default.getId(),
        l = el.A.getInvite(t),
        u = (0, w.y$)(t),
        d = null != l && (0, M.oK)(l),
        c = l?.target_application?.id;
    null != c && d && (0, g.KL)(c, eN.J.ACTIVITY_INVITE, o);
    let f = ea.A.getChannel(n);
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
                let n = (0, v.Ee)(r, ec.A);
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
                invite_instance_id: (0, w._U)(u.baseCode, r) ?? null,
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
                invite_instance_id: (0, w._U)(u.baseCode, r) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(ey.HAw.INVITE_SENT, e));
    }
}
let eM = {
        [ey.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => ev.intl.formatToPlainString(ev.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [ey.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: () => {
                let e = eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                    { enabled: t } = G.A.getConfig({ location: "sendClydeError" });
                return t
                    ? ev.intl.formatToPlainString(ev.t.llTkqr, { helpUrl: e })
                    : ev.intl.formatToPlainString(ev.t.SkGL7l, { helpUrl: e });
            },
        },
        [ey.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                ev.intl.formatToPlainString(ev.t.SkGL7l, {
                    helpUrl: eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [ey.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? ev.intl.string(ev.t["/jUd2+"])
                    : ev.intl.string(ev.t["5EMPA7"]),
        },
        [ey.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => ev.intl.string(ev.t["aY+lLC"]),
        },
        [ey.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => ev.intl.formatToPlainString(ev.t.zSG3Qy, { helpUrl: ey.X7G.HARMFUL_LINKS }),
        },
        [ey.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => ev.intl.string(ev.t.WxX2Fd),
        },
        [ey.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => ev.intl.string(ev.t.k1Cjqr),
        },
        [ey.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => ev.intl.string(ev.t.Z5SUuv),
        },
        [ey.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => ev.intl.string(ev.t.E8nbNb),
        },
        [ey.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => ev.intl.string(ev.t.aRUbah),
        },
        [ey.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => ev.intl.string(ev.t["/meGhR"]),
        },
        [ey.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => ev.intl.string(ev.t.Oc1Zjw),
        },
        [ey.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => ev.intl.formatToPlainString(ev.t.DYFPg2, { maxSizeMb: eT.YK }),
        },
        [ey.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => ev.intl.string(ev.t.bQldfH),
        },
        [ey.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => ev.intl.string(ev.t.zl4Weq),
        },
    },
    eP = {
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
                eP.receiveMessage(e, (0, Y.pO)({ messageId: r, channelId: e, content: t, loggingName: n }));
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
            eP.receiveMessage(e, { ...r, state: ey.cmJ.SENT, channel_id: e }, !0);
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
            eP.receiveMessage(e, { ...n, state: ey.cmJ.SENT }, !0);
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
            eP.receiveMessage(e, { ...n, state: ey.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = ea.A.getChannel(e);
            if (null == n) return;
            let r = eM[t];
            null == r
                ? eP.sendBotMessage(
                      e,
                      ev.intl.formatToPlainString(ev.t.SkGL7l, {
                          helpUrl: eg.A.getArticleURL(ey.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : eP.sendBotMessage(e, r.messageGetter(n), r.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ea.A.getChannel(e);
            if (null == i) return;
            let { message: s, messageName: a } = (0, r.YW)({ isDM: i.isDM(), isGDM: i.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: ev.intl.string(ev.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: ev.intl.string(ev.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: ev.intl.string(ev.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                o = (0, W.m)();
            eP.sendBotMessage(e, s, a, o),
                (0, y.hv)({
                    action: y.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            eP.trackJump(e, null, "Present");
            let n = { present: !0 };
            eu.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eP.fetchMessages({ channelId: e, limit: t, jump: n });
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
                jumpType: d,
                avoidInitialScroll: c,
            } = e;
            return (
                "string" == typeof s && eP.trackJump(t, n, s, a),
                eP.fetchMessages({
                    channelId: t,
                    limit: ey.d7Q,
                    jump: { messageId: n, flash: r, offset: i, returnMessageId: l, jumpType: d },
                    isPreload: o,
                    skipLocalFetch: u,
                    avoidInitialScroll: c,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eP.fetchMessages({ channelId: t, limit: ey.d7Q, focus: { messageId: n } });
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
            if (r.body.length > 0) return (0, F.rh)(r.body[0]);
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
                m = ea.A.getChannel(t),
                g = O.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != m && m.type === ey.rbe.GUILD_STORE) return !1;
            if (
                t === A.E ||
                (eC.log(`Fetching messages for ${t} between ${r} and ${n}. jump=${JSON.stringify(s)}`),
                eP._tryFetchMessagesCached({
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
            er.A.fetchMessages.recordStart(), U.A.recordChannelFetchStart(t, p ?? I, n, r, i);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = d.A.getOrCreate(t).loadStart(T);
            d.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let y = T?.messageId,
                N = new eL();
            return (
                c || this.fetchLocalMessages(t, p ?? I, n, r, i, N),
                a.Bo.get({
                    url: ey.Rsh.MESSAGES(t),
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
                                        .sort(eI.default.compare)
                                        .indexOf(y);
                                if ((r < n - 1 && (c = !1), a.length - r < e && (h = !1), h && a.length > 0)) {
                                    let e = e_.Ay.lastMessageId(t);
                                    a[0].id === e && (h = !1);
                                }
                            }
                            eC.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${u}`),
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
                                    isStale: !g || O.A.lastTimeConnectedChanged() >= I,
                                    truncate: _,
                                    avoidInitialScroll: E,
                                }),
                                U.A.recordChannelFetchedNetwork(t, p ?? I, n, r, i, a);
                        }),
                        !0
                    ),
                    () => (
                        eC.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, s) {
            let a = ea.A.getBasicChannel(e),
                o = d.A.getOrCreate(e),
                u = f.A.database();
            if (null == u || null == a || null != n || null != r) return void er.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void er.A.addLocalMessages(e, -2);
            let c = await (0, E.kk)(() => h.Ay.load(u, e, i));
            if (null == c) return void er.A.addLocalMessages(e, -3);
            if (
                (eC.log(
                    `fetched ${c.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                er.A.addLocalMessages(e, c.messages.length),
                !s.completed && c.messages.length > 0)
            ) {
                let s = c.messages.length >= i && c.connectionId === O.A.lastTimeConnectedChanged();
                U.A.recordChannelFetchedLocal(e, t, n, r, i, c.messages),
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
            let n = ea.A.getBasicChannel(e),
                r = f.A.database();
            if (null == r || null == n) return;
            let i = d.A.getOrCreate(e);
            if (i.hasMoreAfter) return;
            let s = await (0, E.kk)(() => h.Ay.load(r, e, t));
            if (null == s) return;
            i = d.A.getOrCreate(e);
            let a = i.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => eI.default.compare(e.id, a) > 0);
            eC.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: o,
                        stale: !0,
                        isForegroundCacheLoad: (0, K.K)(),
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
            if (null != i) return eP.sendMessage(i, t, n, r);
            let s = r.nonce ?? (0, W.m)();
            r = { ...r, nonce: s };
            let a = x.Ay.backgroundify(() => eP._sendMessage(e, t, r), void 0);
            return (B.A.recordMessageSendAttempt(e, s, r), eu.A.isReady(e))
                ? a()
                : n && e !== A.E
                  ? (eb.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        eu.A.whenReady(e, () => {
                            eb.info(`Channel ${e} is ready for sending now.`), a().then(t, n);
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
            let t = eP.getSendMessageOptionsForReply(e.pendingReply),
                n = eP.getSendMessageOptionsForStickers({ ...e }),
                r = eP.getSendMessageOptionsForScheduledMessage({ ...e }),
                i = eP.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...r, ...i };
        },
        sendInvite(e, t, n, r, i) {
            let s = (0, P.A)(t);
            return (
                null != i &&
                    (s = `${i}
${s}`),
                eP._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: r },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            eP._sendMessage(
                e,
                { content: t, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { location: n, inviteAnalyticsMetadata: r },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eP._sendMessage(
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
                context: { location: eR.Hx.GREET },
            }).then(
                (n) => (
                    H.A.donateSentMessage(n.body.content, e),
                    eP.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eC.log("Failed to send greeting"),
                        429 !== t.status && eP.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eP._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eR.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eA.Ay.canUseAnimatedEmojis(t)
                    ? ((r = ev.intl.string(ev.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : ed.A.canWithPartialContext(ey.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = ev.intl.string(ev.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = ev.intl.string(ev.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: r, errorMessageName: i }
            );
        },
        async _sendMessage(e, t, n) {
            let r,
                a = (0, X.A)(e);
            if (null != a)
                return (
                    eb.info("Converting channel to a private channel"),
                    a.then((e) => {
                        eb.info("Finished converting channel to a private channel"), eP._sendMessage(e, t, n);
                    })
                );
            let o = t.content,
                { invalidEmojis: u, validNonShortcutEmojis: d, tts: f = !1 } = t,
                {
                    activityAction: E,
                    location: h,
                    inviteAnalyticsMetadata: A,
                    stickerIds: S,
                    messageReference: O,
                    allowedMentions: v,
                    poll: w,
                    sharedCustomTheme: M,
                    contentInventoryEntry: P,
                    attachments: U,
                    attachmentsToUpload: x,
                    onAttachmentUploadError: G,
                    announcementSendOptions: K,
                    withCheckpoint: Z,
                } = n,
                en = n.flags ?? 0,
                [er, ei] = (0, et.A)(o);
            er && ((o = ei), (en = (0, s.UI)(en, ey.pr7.SUPPRESS_NOTIFICATIONS)));
            let el = ea.A.getChannel(e),
                eu = eo.A.getGuild(el?.guild_id);
            (0, V.Qz)(eu, el, "_sendMessage") && (en = (0, s.UI)(en, ey.pr7.IS_GUILD_OFFICIAL));
            let ed = !1,
                ec = n.messageReference?.type === ey.SH7.FORWARD;
            if (
                "" === o &&
                null == E &&
                null == S &&
                null == w &&
                null == M &&
                null == P &&
                !ec &&
                (null == U || 0 === U.length) &&
                !Z &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == x || !(x.length > 0)) return Promise.resolve();
                else ed = !0;
            let e_ = null != O ? ey.lAJ.REPLY : ey.lAJ.DEFAULT,
                eg = n.nonce ?? (0, W.m)(),
                eA = (0, Y.Ay)({
                    channelId: e,
                    content: o,
                    tts: f,
                    type: e_,
                    messageReference: O,
                    allowedMentions: v,
                    flags: 0 !== en ? en : void 0,
                    nonce: eg,
                    poll: (0, q.G8)(w),
                    sharedCustomTheme: M,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, $.iq)(e, eA.id),
                    null != S && (eA.sticker_items = S.map((e) => ee.A.getStickerById(e)).filter((e) => null != e)),
                    eP.receiveMessage(e, eA, !0, n)),
                !eD && null != u && u.length > 0)
            ) {
                eD = !0;
                let t = eE.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eP.validateMessage(u, t, e);
                eP.sendBotMessage(e, n, r);
            }
            let eS = {
                type: null != K ? c.AZ.SEND_ANNOUNCEMENT : c.AZ.SEND,
                message: {
                    channelId: e,
                    content: o,
                    nonce: eg,
                    tts: f,
                    message_reference: O,
                    allowed_mentions: v,
                    flags: en,
                    analyticsLocation: h,
                },
            };
            if (
                (null != t.components && (eS.message.components = t.components),
                null != K &&
                    ((eS.message.create_thread = K.createThread),
                    (eS.message.title = K.threadName),
                    (eS.message.publish = K.publish ?? !1)),
                null != E)
            ) {
                let e,
                    t = E?.activity.session_id;
                if (
                    null !=
                    (e =
                        E.type === ey.xL.JOIN_REQUEST || E.type === ey.xL.STREAM_REQUEST || null != t
                            ? t
                            : es.default.getSessionId())
                ) {
                    let t = { type: E.type, session_id: e, target_user_id: E.targetUserId },
                        { activity: n } = E;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (eS.message.application_id = n.application_id),
                        (eS.message.activity = t);
                }
            }
            if (
                (null != w && (eS.message.poll = w),
                null != M && (eS.message.shared_client_theme = M),
                null != S && (eS.message.sticker_ids = S),
                z.A.isEnabled() && (eS.message.has_poggermode_enabled = !0),
                Z && (eS.message.with_checkpoint = !0),
                null != P && (eS.message.content_inventory_entry = P),
                null != U && U.length > 0 && (eS.message.attachments = U),
                null != x && x.length > 0)
            )
                try {
                    let t = await (0, k.L)({
                        channelId: e,
                        nonce: eg,
                        items: x,
                        message: eA,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let i = t.attachments;
                    if (((r = t.uploader), ed && (null == i || 0 === i.length))) return;
                    null != i && (eS.message.attachments = i.map((e, t) => (0, eT.OW)(e, t)));
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, j.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), G?.(e, t, n, r);
                    return;
                }
            return new Promise((t, s) => {
                let a = Date.now(),
                    u = c.Ay.length,
                    f = Math.floor(1e4 * Math.random());
                eb.info(`Queueing message to be sent LogId:${f}`),
                    c.Ay.enqueue(
                        eS,
                        (E) => {
                            let O = Date.now() - a;
                            if (E.ok) {
                                var v, M, U, k, x, G, V;
                                let s;
                                H.A.donateSentMessage(o, e),
                                    eP.receiveMessage(e, E.body, !0, {
                                        sendAnalytics: { duration: O, queueSize: u },
                                        poll: w,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        N.A.sendForward((0, F.rh)(E.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                !(function (e) {
                                                    let {
                                                        referencedMessageId: t,
                                                        guildId: n,
                                                        channelId: r,
                                                        destinationChannelId: i,
                                                    } = e;
                                                    eh.default.track(ey.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
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
                                                eC.log(
                                                    `Failed to forward thread message to parent channel LogId:${f}`,
                                                    {
                                                        referencedMessageId: E.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let a = eI.default.cast(e),
                                    c = D.A.getRequest(a);
                                if (null != c) {
                                    let { guildId: t, userId: n, applicationStatus: r } = c;
                                    (0, b.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: E.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                B.A.recordMessageSendApiResponse(eg),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ef.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: d }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: S }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: eE.default.getCurrentUser() },
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
                                            l = es.default.getId();
                                        (0, T.Ay)(t).forEach((e) => {
                                            let { type: t, code: u, url: d } = e;
                                            if (t === I.I.INVITE)
                                                ew({
                                                    inviteKey: u,
                                                    channelId: n,
                                                    messageId: r,
                                                    location: s,
                                                    inviteAnalyticsMetadata: a,
                                                    overrideProperties: o,
                                                });
                                            else if (t === I.I.TEMPLATE) {
                                                let e = L.A.getGuildTemplate(u);
                                                if (null == e || e.state === eO.QB.RESOLVING) return;
                                                _.Ay.trackWithMetadata(ey.HAw.GUILD_TEMPLATE_LINK_SENT, {
                                                    guild_template_code: u,
                                                    guild_template_name: e.name,
                                                    guild_template_description: e.description,
                                                    guild_template_guild_id: e.sourceGuildId,
                                                });
                                            } else if (t === I.I.BUILD_OVERRIDE);
                                            else if (t === I.I.EXPERIMENT);
                                            else if (t === I.I.MANUAL_BUILD_OVERRIDE);
                                            else if (t === I.I.EVENT);
                                            else if (t === I.I.CHANNEL_LINK);
                                            else if (t === I.I.APP_DIRECTORY_PROFILE)
                                                (0, R.y)(u), (0, g.KL)(u, eN.J.APP_DISCOVERY, l);
                                            else if (t === I.I.APP_DIRECTORY_STOREFRONT) (0, R.y)(u, "storefront");
                                            else if (t === I.I.APP_DIRECTORY_STOREFRONT_SKU) {
                                                let e = (0, p.u)(u);
                                                null != e && (0, R.y)(e.applicationId, "storefront_sku");
                                            } else if (t === I.I.ACTIVITY_BOOKMARK) {
                                                let e = (0, m.N)(d);
                                                (0, g.KL)(u, eN.J.ACTIVITY, e.referrerId ?? l, e.customId);
                                            } else if (t === I.I.EMBEDDED_ACTIVITY_INVITE)
                                                (0, g.KL)(u, eN.J.ACTIVITY_INVITE, l);
                                            else if (t === I.I.GUILD_PRODUCT);
                                            else if (t === I.I.SERVER_SHOP);
                                            else if (t === I.I.SOCIAL_LAYER_STOREFRONT);
                                            else if (t === I.I.QUESTS_EMBED) {
                                                let e = (0, J.L4)(i.u.QUESTS_EMBED);
                                                (0, Q.av)({
                                                    questId: u,
                                                    event: ey.HAw.QUEST_LINK_SHARED,
                                                    properties: { metadata_sealed: null != e ? e : null },
                                                    trackGuildAndChannelMetadata: !0,
                                                    sourceQuestContent: i.u.QUESTS_EMBED,
                                                });
                                            } else if (t === I.I.APP_OAUTH2_LINK)
                                                _.Ay.trackWithMetadata(ey.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
                                                    application_id: u,
                                                }),
                                                    (0, g.KL)(u, eN.J.OAUTH, l);
                                            else if (t === I.I.COLLECTIBLES_SHOP);
                                            else throw Error(`Unknown coded link type: ${t}`);
                                        });
                                    })({
                                        content: o,
                                        channelId: e,
                                        messageId: E.body.id,
                                        location: h ?? "chat_input",
                                        inviteAnalyticsMetadata: A,
                                    }),
                                    (v = o),
                                    (M = E.body.id),
                                    (U = h ?? "chat_input"),
                                    (k = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, em.e7)(v).forEach((t) => {
                                        let n = ea.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(ey.HAw.GIFT_CODE_SENT, {
                                                location: U,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: M,
                                                automatic_send: k,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((x = n.gifMetadata),
                                        (G = E.body.id),
                                        (V = h ?? "chat_input"),
                                        null != (s = ea.A.getChannel(e)) &&
                                            eh.default.track(ey.HAw.MESSAGE_SENT_WITH_GIF, {
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
                                eC.log("Failed to send message", {
                                    hasErr: E.hasErr,
                                    status: E.status,
                                    code: E.body?.code,
                                    error: E.err,
                                });
                                let i = !1;
                                if (E.hasErr) "ABORTED" === E.err.code && (i = !0);
                                else if (E.status >= 400 && E.status < 500 && E.body)
                                    if (E.body.code === ey.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = E.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ef.R.SendMessage,
                                                cooldownMs: t * ep.A.Millis.SECOND,
                                            });
                                    } else
                                        C.yf.has(E.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eS,
                                                  errorResponseBody: { code: E.body.code, message: E.body.message },
                                              })
                                            : E.body.code === ey.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : E.body.code === ey.t02.EXPLICIT_CONTENT
                                                ? (t = eR.ty.EXPLICIT_CONTENT)
                                                : null != w || ec || null != P || eP.sendClydeError(e, E.body.code);
                                i
                                    ? eP.deleteMessage(e, eg, !0)
                                    : (null != r &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: r._file,
                                              messageId: eg,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      E.hasErr ||
                                          t !== eR.ty.EXPLICIT_CONTENT ||
                                          eP.sendExplicitMediaClydeError(
                                              e,
                                              E.body?.attachments,
                                              y.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: eg,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, j.O)({
                                          failureCode: E.hasErr ? void 0 : E.status,
                                          errorMessage: E.hasErr ? E.err.message : void 0,
                                      }),
                                      c.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eC.log("Cancelling pending message", e.nonce),
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
            let r,
                { content: i, components: s } = n;
            await en.A.unarchiveThreadIfNecessary(e);
            let a = (function (e, t) {
                    let n = eu.A.getMessage(e, t);
                    if (null == n || n.type !== ey.lAJ.REPLY) return;
                    let r = Z.A.getMessageByReference(n.messageReference);
                    if (r.state === Z.a.LOADED && !n.mentions.includes(r.message.author.id))
                        return { parse: Object.values(ey.uw8), replied_user: !1 };
                })(e, t),
                u = null != (r = eu.A.getMessage(e, t)) && r.hasFlag(ey.pr7.CROSSPOSTED),
                d = { channelId: e, messageId: t, content: i, isCrossposted: u, allowed_mentions: a, components: s };
            c.Ay.enqueue({ type: c.AZ.EDIT, message: d }, (n) => {
                let r = !n.hasErr && C.yf.has(n.body.code);
                if (r) {
                    let e = { type: c.AZ.EDIT, message: d };
                    l.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                n.hasErr
                    ? o.O.announce(ev.intl.string(ev.t.Atp7FP))
                    : r
                      ? o.O.announce(ev.intl.string(ev.t.Hym4ix))
                      : o.O.announce(ev.intl.string(ev.t["0x1HBD"])),
                    eP.endEditMessage(e, n.hasErr ? void 0 : n),
                    eP.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await en.A.unarchiveThreadIfNecessary(e);
            let n = eu.A.getMessage(e, t);
            null != n &&
                a.Bo.patch({
                    url: ey.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(n.flags, ey.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await en.A.unarchiveThreadIfNecessary(e);
            let r = eu.A.getMessage(e, t);
            null != r &&
                a.Bo.patch({
                    url: ey.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(r.flags, ey.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await en.A.unarchiveThreadIfNecessary(e),
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
                        o.O.announce(ev.intl.string(ev.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await en.A.unarchiveThreadIfNecessary(e),
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
                        ? ev.intl.formatToPlainString(ev.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : ev.intl.string(ev.t.z2gyNF)),
                    eS.A.show({
                        title: ev.intl.string(ev.t.Vd1hs6),
                        body: e,
                        confirmText: ev.intl.string(ev.t.BddRzS),
                    });
            }
        },
        trackInvite: ew,
    },
    eU = eP;
