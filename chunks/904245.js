n.d(t, { Z: () => eO }), n(411104), n(627341), n(47120), n(789020);
var i = n(278074),
    r = n(544891),
    a = n(780384),
    s = n(570140),
    o = n(89892),
    l = n(673750),
    u = n(367907),
    c = n(287328),
    d = n(86670),
    f = n(685736),
    _ = n(849521),
    p = n(421474),
    h = n(333023),
    m = n(960904),
    g = n(830121),
    E = n(710845),
    v = n(247206),
    y = n(38618),
    I = n(687516),
    b = n(539573),
    T = n(926526),
    S = n(826581),
    A = n(409059),
    N = n(264229),
    C = n(366980),
    R = n(779832),
    O = n(786761),
    D = n(459618),
    x = n(541288),
    L = n(3148),
    P = n(48854),
    w = n(785359),
    M = n(646504),
    k = n(64078),
    U = n(351780),
    G = n(79390),
    B = n(980463),
    Z = n(328908),
    F = n(992970),
    V = n(576645),
    j = n(317951),
    H = n(287941),
    Y = n(643266),
    W = n(617136);
n(807092);
var K = n(869765),
    z = n(926491),
    q = n(467798),
    Q = n(346479),
    X = n(218543),
    J = n(199902),
    $ = n(314897),
    ee = n(592125);
n(323873);
var et = n(701190),
    en = n(375954),
    ei = n(496675),
    er = n(158776),
    ea = n(306680),
    es = n(300429),
    eo = n(594174);
n(626135);
var el = n(70956),
    eu = n(630388),
    ec = n(669079),
    ed = n(63063),
    ef = n(74538),
    e_ = n(709054),
    ep = n(668781),
    eh = n(981631),
    em = n(58346),
    eg = n(388032);
function eE(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let ev = new E.Z('MessageActionCreators'),
    ey = new E.Z('MessageQueue'),
    eI = !1;
class eb {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eE(this, 'completed', !1);
    }
}
function eT(e) {
    let { content: t, channelId: n, messageId: i, location: r, suggested: a = null, overrideProperties: s = {} } = e;
    (0, g.ZP)(t).forEach((e) => {
        let { type: t, code: o } = e;
        if (t === m.g.INVITE)
            eS({
                inviteKey: o,
                channelId: n,
                messageId: i,
                location: r,
                suggested: a,
                overrideProperties: s
            });
        else if (t === m.g.TEMPLATE) {
            let e = A.Z.getGuildTemplate(o);
            if (null == e || e.state === em.Rj.RESOLVING) return;
            u.ZP.trackWithMetadata(eh.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: o,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === m.g.BUILD_OVERRIDE);
        else if (t === m.g.MANUAL_BUILD_OVERRIDE);
        else if (t === m.g.EVENT);
        else if (t === m.g.CHANNEL_LINK);
        else if (t === m.g.APP_DIRECTORY_PROFILE) (0, _.y)(o);
        else if (t === m.g.APP_DIRECTORY_STOREFRONT) (0, _.y)(o, 'storefront');
        else if (t === m.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, p.Q)(o);
            null != e && (0, _.y)(e.applicationId, 'storefront_sku');
        } else if (t === m.g.ACTIVITY_BOOKMARK);
        else if (t === m.g.EMBEDDED_ACTIVITY_INVITE);
        else if (t === m.g.GUILD_PRODUCT);
        else if (t === m.g.SERVER_SHOP);
        else if (t === m.g.QUESTS_EMBED)
            (0, W.dA)({
                questId: o,
                event: eh.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (t === m.g.APP_OAUTH2_LINK) u.ZP.trackWithMetadata(eh.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: o });
        else if (t === m.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function eS(e) {
    let { inviteKey: t, channelId: n, messageId: i, location: r, suggested: a = null, overrideProperties: s = {} } = e,
        o = (0, N.fU)(t),
        l = ee.Z.getChannel(n);
    if (null != l) {
        let e = null;
        l.isMultiUserDM() ? (e = eh.dAT.GDM_INVITE) : l.isPrivate() || (e = eh.dAT.SERVER_INVITE);
        let n = {},
            d = et.Z.getInvite(t);
        if (null != d && d.state === eh.r2o.RESOLVED && null != d.channel) {
            var c;
            let t = d.channel;
            (n.invite_channel_id = t.id), (n.invite_guild_id = null === (c = d.guild) || void 0 === c ? void 0 : c.id), (n.invite_channel_type = t.type), null != d.inviter && (n.invite_inviter_id = d.inviter.id), null != d.target_application && (n.application_id = d.target_application.id);
            let i = J.Z.getLastActiveStream();
            if (null != i && i.channelId === t.id) {
                (e = eh.dAT.STREAM), (n.destination_user_id = i.ownerId);
                let t = (0, I.L2)(i, er.Z);
                n.application_id = null != t ? t.id : null;
            }
        }
        null != a && ((n.is_suggested = a.isAffinitySuggestion), (n.row_num = a.rowNum), (n.num_total = a.numTotal), (n.num_affinity_connections = a.numAffinityConnections), (n.is_filtered = a.isFiltered)),
            (n = {
                ...n,
                location: r,
                invite_type: e,
                invite_code: o.baseCode,
                guild_id: l.getGuildId(),
                channel_id: l.id,
                message_id: i,
                send_type: eh.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: o.guildScheduledEventId,
                ...s
            }),
            u.ZP.trackWithMetadata(eh.rMx.INVITE_SENT, n);
    } else {
        let e = {},
            n = et.Z.getInvite(t);
        null != n &&
            n.state === eh.r2o.RESOLVED &&
            null != n.inviter &&
            ((e.invite_inviter_id = n.inviter.id),
            null != n.target_application && (e.application_id = n.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: eh.dAT.FRIEND_INVITE,
                invite_code: o.baseCode,
                message_id: i,
                send_type: eh.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: o.guildScheduledEventId,
                ...s
            }),
            u.ZP.trackWithMetadata(eh.rMx.INVITE_SENT, e));
    }
}
function eA(e, t, n, i, r) {
    (0, ec.Q_)(e).forEach((e) => {
        let a = ee.Z.getChannel(t);
        null != a &&
            u.ZP.trackWithMetadata(eh.rMx.GIFT_CODE_SENT, {
                location: i,
                gift_code: e,
                guild_id: a.getGuildId(),
                channel_id: a.id,
                channel_type: a.type,
                message_id: n,
                automatic_send: r
            });
    });
}
function eN(e, t) {
    let n = en.Z.getMessage(e, t);
    if (null == n || n.type !== eh.uaV.REPLY) return;
    let i = K.Z.getMessageByReference(n.messageReference);
    if (!(i.state !== K.Y.LOADED || n.mentions.includes(i.message.author.id)))
        return {
            parse: Object.values(eh.hCA),
            replied_user: !1
        };
}
let eC = {
        [eh.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eg.intl.string(eg.t.k1Cjqq)
        },
        [eh.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eg.intl.formatToPlainString(eg.t.CTMXwM, { helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [eh.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => eg.intl.string(eg.t.E8nbNT)
        },
        [eh.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eg.intl.string(eg.t.aRUbam)
        },
        [eh.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eg.intl.string(eg.t.aRUbam)
        },
        [eh.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => eg.intl.string(eg.t['/meGhY'])
        },
        [eh.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => eg.intl.string(eg.t.Oc1Zj4)
        }
    },
    eR = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            s.Z.dispatch({
                type: 'MESSAGE_CREATE',
                channelId: e,
                message: t,
                optimistic: n,
                sendMessageOptions: i,
                isPushNotification: !1
            });
        },
        sendBotMessage(e, t, n, i) {
            null != n &&
                u.ZP.trackWithMetadata(eh.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                eR.receiveMessage(
                    e,
                    (0, L.cs)({
                        messageId: i,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, L.ZP)({
                channelId: e,
                nonce: n,
                type: eh.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eh.iLy.EPHEMERAL,
                author: {
                    id: eh.LAt,
                    username: 'Nitro Notification',
                    discriminator: eh.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            eR.receiveMessage(
                e,
                {
                    ...i,
                    state: eh.yb.SENT,
                    channel_id: e
                },
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, L.ZP)({
                channelId: e,
                type: eh.uaV.GIFTING_PROMPT,
                content: '',
                flags: eh.iLy.EPHEMERAL,
                author: {
                    id: eh.LAt,
                    username: 'Gifting Prompt',
                    discriminator: eh.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: t
            });
            eR.receiveMessage(
                e,
                {
                    ...n,
                    state: eh.yb.SENT
                },
                !0
            );
        },
        sendClydeError(e) {
            let t,
                n,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = ee.Z.getChannel(e);
            null != r && (i === eh.evJ.SLOWMODE_RATE_LIMITED ? ((t = eg.intl.formatToPlainString(eg.t.IWntYm, { seconds: r.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : i === eh.evJ.INVALID_MESSAGE_SEND_USER ? ((t = eg.intl.formatToPlainString(eg.t.CTMXwM, { helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : i === eh.evJ.TOO_MANY_THREADS ? ((t = r.isForumLikeChannel() || r.isForumPost() ? eg.intl.string(eg.t['/jUd29']) : eg.intl.string(eg.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : i === eh.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = eg.intl.string(eg.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : i === eh.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = eg.intl.formatToPlainString(eg.t.zSG3Q0, { helpUrl: eh.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : i in eC ? ((n = eC[i].messageName), (t = eC[i].messageGetter())) : ((t = eg.intl.formatToPlainString(eg.t.CTMXwM, { helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(i, ')'))), eR.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = ee.Z.getChannel(e);
            if (null == r) return;
            let { message: a, messageName: o } = (0, i.EQ)({
                    isDM: r.isDM(),
                    isGDM: r.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: eg.intl.string(eg.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: eg.intl.string(eg.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: eg.intl.string(eg.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                l = (0, P.r)();
            eR.sendBotMessage(e, a, o, l),
                (0, v.aP)({
                    action: v.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: l,
                    channelId: e,
                    context: n
                }),
                null != t &&
                    t.length > 0 &&
                    s.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: l,
                        channelId: e,
                        attachments: t
                    });
        },
        truncateMessages(e, t, n) {
            s.Z.dispatch({
                type: 'TRUNCATE_MESSAGES',
                channelId: e,
                truncateBottom: t,
                truncateTop: n
            });
        },
        clearChannel(e) {
            s.Z.dispatch({
                type: 'CLEAR_MESSAGES',
                channelId: e
            });
        },
        jumpToPresent(e, t) {
            eR.trackJump(e, null, 'Present');
            let n = { present: !0 };
            en.Z.hasPresent(e)
                ? s.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : eR.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, i) {
            u.ZP.trackWithMetadata(eh.rMx.JUMP, {
                context: n,
                channel_id: e,
                message_id: t,
                ...i
            });
        },
        jumpToMessage(e) {
            let { channelId: t, messageId: n, flash: i = !1, offset: r, context: a, extraProperties: s = null, isPreload: o, returnMessageId: l, skipLocalFetch: u, jumpType: c } = e;
            return (
                'string' == typeof a && eR.trackJump(t, n, a, s),
                eR.fetchMessages({
                    channelId: t,
                    limit: eh.Z8P,
                    jump: {
                        messageId: n,
                        flash: i,
                        offset: r,
                        returnMessageId: l,
                        jumpType: c
                    },
                    isPreload: o,
                    skipLocalFetch: u
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eR.fetchMessages({
                channelId: t,
                limit: eh.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return r.tn
                .get({
                    url: eh.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, O.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: t, before: n, after: i, limit: a, jump: l, focus: u, isPreload: c, skipLocalFetch: d, truncate: f, forICYMI: _ } = e,
                p = ee.Z.getChannel(t),
                m = y.Z.isConnectedOrOverlay(),
                g = Date.now();
            if (null != p && p.type === eh.d4z.GUILD_STORE) return !1;
            if (
                t === h.V ||
                (ev.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(i, '. jump=').concat(JSON.stringify(l))),
                eR._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: i,
                    limit: a,
                    jump: l,
                    focus: u,
                    truncate: f
                }))
            )
                return;
            X.Z.fetchMessages.recordStart();
            let E = null != l ? l : void 0;
            null == E && null != u && (E = { ...u });
            let v = o.Z.getOrCreate(t).loadStart(E);
            o.Z.commit(v), s.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let I = null == E ? void 0 : E.messageId,
                b = new eb();
            return (
                d || this.fetchLocalMessages(t, n, i, a, b),
                r.tn
                    .get({
                        url: eh.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: i,
                            limit: a,
                            around: I,
                            preload: c
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            X.Z.fetchMessages.recordEnd(),
                            X.Z.dispatchMessages.measure(() => {
                                let r = e.body,
                                    o = null != n,
                                    u = null != i,
                                    c = null == n && null == i,
                                    d = null != I || (r.length === a && (o || c)),
                                    p = null != I || (u && r.length === a);
                                if (null != I) {
                                    let e = Math.floor(a / 2),
                                        n = [
                                            I,
                                            ...r.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(e_.default.compare)
                                            .indexOf(I);
                                    if ((n < e && (d = !1), r.length - n < e && (p = !1), p && r.length > 0)) {
                                        let e = ea.ZP.lastMessageId(t);
                                        r[0].id === e && (p = !1);
                                    }
                                }
                                ev.log('Fetched '.concat(r.length, ' messages for ').concat(t, ' isBefore:').concat(o, ' isAfter:').concat(u)),
                                    b.markComplete(),
                                    s.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: t,
                                        messages: r,
                                        isBefore: o,
                                        isAfter: u,
                                        hasMoreBefore: d,
                                        hasMoreAfter: p,
                                        limit: a,
                                        jump: l,
                                        forICYMI: _,
                                        isStale: !m || y.Z.lastTimeConnectedChanged() >= g,
                                        truncate: f
                                    });
                            }),
                            !0
                        ),
                        () => (
                            ev.log('Failed to fetch messages for '.concat(t)),
                            s.Z.dispatch({
                                type: 'LOAD_MESSAGES_FAILURE',
                                channelId: t
                            }),
                            !1
                        )
                    )
            );
        },
        async fetchLocalMessages(e, t, n, i, r) {
            let a = ee.Z.getBasicChannel(e),
                l = o.Z.getOrCreate(e),
                u = c.Z.database();
            if (null == u || null == a || null != t || null != n) {
                X.Z.addLocalMessages(e, -1);
                return;
            }
            if (l.ready && !l.cached) {
                X.Z.addLocalMessages(e, -2);
                return;
            }
            let _ = await (0, d.dI)(() => f.ZP.load(u, e, i));
            if (null == _) {
                X.Z.addLocalMessages(e, -3);
                return;
            }
            if ((ev.log('fetched '.concat(_.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(r.completed, ')')), X.Z.addLocalMessages(e, _.messages.length), !r.completed && _.messages.length > 0)) {
                let t = _.messages.length >= i && _.connectionId === y.Z.lastTimeConnectedChanged();
                s.Z.dispatch({
                    type: 'LOCAL_MESSAGES_LOADED',
                    guildId: a.guild_id,
                    channelId: e,
                    users: _.users,
                    members: _.members,
                    messages: _.messages,
                    stale: !t
                });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let i = ee.Z.getBasicChannel(e),
                r = c.Z.database();
            if (null == r || null == i) return;
            let a = o.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let l = await (0, d.dI)(() => f.ZP.load(r, e, t));
            if (null == l) return;
            let u = null === (n = (a = o.Z.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
                _ = null == u ? l.messages : l.messages.filter((e) => e_.default.compare(e.id, u) > 0);
            ev.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(_.length, ' are new')),
                0 !== _.length &&
                    s.Z.dispatch({
                        type: 'LOCAL_MESSAGES_LOADED',
                        guildId: i.guild_id,
                        channelId: e,
                        users: l.users,
                        members: l.members,
                        messages: _,
                        stale: !0
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: i, limit: r, jump: a, focus: o, truncate: l } = e,
                u = en.Z.getMessages(t);
            if (u.cached || !u.ready) return !1;
            if ((null == a ? void 0 : a.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
                if ((null == a ? void 0 : a.messageId) != null && u.has(a.messageId, !1))
                    return (
                        s.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: r,
                            truncate: l
                        }),
                        !0
                    );
                if ((null == o ? void 0 : o.messageId) != null) {
                    if (u.has(o.messageId, !1))
                        return (
                            s.Z.dispatch({
                                type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                                channelId: t,
                                focus: o,
                                limit: r,
                                truncate: l
                            }),
                            !0
                        );
                    a = { ...o };
                }
                let e = (null == a ? void 0 : a.messageId) != null ? e_.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
                    n = u.first(),
                    i = u.last();
                if ((!u.hasMoreBefore && null != n && e_.default.extractTimestamp(n.id) >= e) || (!u.hasMoreAfter && null != i && e_.default.extractTimestamp(i.id) <= e) || (null != n && null != i && e_.default.extractTimestamp(n.id) < e && e_.default.extractTimestamp(i.id) > e))
                    return (
                        s.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: eh.Z8P
                        }),
                        !0
                    );
            } else if (null != n && u.hasBeforeCached(n))
                return (
                    s.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: t,
                        before: n,
                        limit: r,
                        truncate: l
                    }),
                    !0
                );
            else if (null != i && u.hasAfterCached(i))
                return (
                    s.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: t,
                        after: i,
                        limit: r,
                        truncate: l
                    }),
                    !0
                );
            return !1;
        },
        async sendMessage(e, t) {
            var n;
            let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (t.reaction) return Promise.resolve();
            let a = await (0, Y.Z)(e);
            if (null != a) return eR.sendMessage(a, t, i, r);
            let s = () => eR._sendMessage(e, t, r),
                o = R.ZP.backgroundify(s, void 0),
                l = null !== (n = r.nonce) && void 0 !== n ? n : (0, P.r)();
            return ((r = {
                ...r,
                nonce: l
            }),
            D.Z.recordMessageSendAttempt(e, l),
            en.Z.isReady(e))
                ? o()
                : i && e !== h.V
                  ? (ey.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        en.Z.whenReady(e, () => {
                            ey.info('Channel '.concat(e, ' is ready for sending now.')), o().then(t, n);
                        });
                    }))
                  : o();
        },
        getSendMessageOptionsForReply(e) {
            var t;
            return null == e
                ? {}
                : {
                      messageReference: {
                          guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                          channel_id: e.channel.id,
                          message_id: e.message.id
                      },
                      allowedMentions: e.shouldMention
                          ? void 0
                          : {
                                parse: Object.values(eh.hCA),
                                replied_user: !1
                            }
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: i, command: r, uploads: a, confettiPotionEmoji: s } = e;
            return null != s && (0, V.tv)(n, i, r, a)
                ? {
                      confettiPotionData: {
                          emoji: s,
                          callback: () => (0, Z.Hb)(t)
                      }
                  }
                : {};
        },
        getSendMessageOptionsForStickers(e) {
            let { isGif: t, stickers: n } = e;
            return null == n || 0 === n.length || t ? {} : { stickerIds: n };
        },
        getSendMessageOptionsForScheduledMessage(e) {
            let { scheduledTimestamp: t } = e;
            return null == t ? {} : { scheduledTimestamp: t };
        },
        getSendMessageOptions(e) {
            let t = eR.getSendMessageOptionsForReply(e.pendingReply),
                n = eR.getSendMessageOptionsForConfettiPotion({ ...e }),
                i = eR.getSendMessageOptionsForStickers({ ...e }),
                r = eR.getSendMessageOptionsForScheduledMessage({ ...e });
            return {
                ...t,
                ...n,
                ...i,
                ...r
            };
        },
        sendInvite: (e, t, n, i) =>
            eR._sendMessage(
                e,
                {
                    content: (0, C.Z)(t),
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    location: n,
                    suggestedInvite: null != i ? i : void 0
                }
            ),
        sendActivityBookmark: (e, t, n, i) =>
            eR._sendMessage(
                e,
                {
                    content: t,
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    location: n,
                    suggestedInvite: null != i ? i : void 0
                }
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eR._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: r
                },
                {
                    ...i,
                    stickerIds: t
                }
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: a } = n;
            return r.tn
                .post({
                    url: eh.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: a,
                        message_reference: i
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (n) => (
                        x.Z.donateSentMessage(n.body.content, e),
                        eR.receiveMessage(e, n.body),
                        s.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (ev.log('Failed to send greeting'),
                            429 !== t.status && eR.sendClydeError(e, t.body.code),
                            s.Z.dispatch({
                                type: 'MESSAGE_SEND_FAILED',
                                messageId: t.body.id,
                                channelId: e
                            }),
                            t)
                        );
                    }
                );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eR._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    ...n,
                    poll: t
                }
            );
        },
        validateMessage(e, t, n) {
            let i, r;
            return (
                e.some((e) => e.animated) && !ef.ZP.canUseAnimatedEmojis(t) ? ((i = eg.intl.string(eg.t.msFJy8)), (r = 'INVALID_ANIMATED_EMOJI_BODY')) : ei.Z.canWithPartialContext(eh.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((i = eg.intl.string(eg.t.FzugNj)), (r = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((i = eg.intl.string(eg.t.Q87rIy)), (r = 'INVALID_EXTERNAL_EMOJI_BODY')),
                {
                    errorMessage: i,
                    errorMessageName: r
                }
            );
        },
        _sendMessage(e, t, n) {
            var i, r, a;
            let o = (0, Y.Z)(e);
            if (null != o)
                return (
                    ey.info('Converting channel to a private channel'),
                    o.then((e) => {
                        ey.info('Finished converting channel to a private channel'), eR._sendMessage(e, t, n);
                    })
                );
            let u = t.content,
                { invalidEmojis: c, validNonShortcutEmojis: d, tts: f = !1 } = t,
                { activityAction: _, location: p, suggestedInvite: h, stickerIds: m, confettiPotionData: g, messageReference: E, allowedMentions: v, poll: y, contentInventoryEntry: I } = n,
                A = null !== (r = n.flags) && void 0 !== r ? r : 0,
                [N, C] = (0, q.Z)(u);
            N && ((u = C), (A = (0, eu.pj)(A, eh.iLy.SUPPRESS_NOTIFICATIONS)));
            let R = (null === (i = n.messageReference) || void 0 === i ? void 0 : i.type) === eh.Uvt.FORWARD;
            if ('' === u && null == _ && null == m && null == y && null == I && !R) return Promise.resolve();
            let O = null != E ? eh.uaV.REPLY : eh.uaV.DEFAULT,
                M = null !== (a = n.nonce) && void 0 !== a ? a : (0, P.r)(),
                Z = M;
            if (!1 !== n.eagerDispatch) {
                let t = (0, L.ZP)({
                    channelId: e,
                    content: u,
                    tts: f,
                    type: O,
                    messageReference: E,
                    allowedMentions: v,
                    flags: 0 !== A ? A : void 0,
                    nonce: M,
                    poll: (0, G.x9)(y)
                });
                (0, k.EL)(e, t.id), null != m && (t.sticker_items = m.map((e) => z.Z.getStickerById(e)).filter((e) => null != e)), eR.receiveMessage(e, t, !0, n);
            }
            if (!eI && null != c && c.length > 0) {
                eI = !0;
                let t = eo.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = eR.validateMessage(c, t, e);
                eR.sendBotMessage(e, n, i);
            }
            let W = {
                type: l.$V.SEND,
                message: {
                    channelId: e,
                    content: u,
                    nonce: M,
                    tts: f,
                    message_reference: E,
                    allowed_mentions: v,
                    flags: A
                }
            };
            if (null != _) {
                let e;
                let t = null == _ ? void 0 : _.activity.session_id;
                if (null != (e = _.type === eh.mFx.JOIN_REQUEST || null != t ? t : $.default.getSessionId())) {
                    let t = {
                            type: _.type,
                            session_id: e
                        },
                        { activity: n } = _;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (W.message.application_id = n.application_id), (W.message.activity = t);
                }
            }
            return (
                null != y && (W.message.poll = y),
                null != m && (W.message.sticker_ids = m),
                U.Z.isEnabled() && (W.message.has_poggermode_enabled = !0),
                null != I && (W.message.content_inventory_entry = I),
                null != g && ((W.message.confetti_potion = (0, V.vY)(g)), g.callback()),
                new Promise((t, i) => {
                    let r = Date.now(),
                        a = l.ZP.length,
                        o = Math.floor(10000 * Math.random());
                    ey.info('Queueing message to be sent LogId:'.concat(o)),
                        l.ZP.enqueue(
                            W,
                            (o) => {
                                let c = Date.now() - r;
                                if (o.ok) {
                                    x.Z.donateSentMessage(u, e),
                                        eR.receiveMessage(e, o.body, !0, {
                                            sendAnalytics: {
                                                duration: c,
                                                queueSize: a
                                            },
                                            poll: y
                                        });
                                    let i = (0, V.ZC)(o.body);
                                    null != i &&
                                        ((0, B.gA)(j.D1),
                                        (0, H.I)(
                                            {
                                                name: i.name,
                                                id: i.id
                                            },
                                            void 0,
                                            !0,
                                            F.LL.MessageSent
                                        ));
                                    let r = e_.default.cast(e),
                                        l = S.Z.getRequest(r);
                                    if (null != l) {
                                        let { guildId: t, userId: n, applicationStatus: i } = l;
                                        (0, T.pL)({
                                            guildId: t,
                                            channelId: e,
                                            messageId: o.body.id,
                                            joinRequestStatus: i,
                                            joinRequestUserId: n
                                        });
                                    }
                                    D.Z.recordMessageSendApiResponse(M),
                                        s.Z.dispatch({
                                            type: 'SLOWMODE_RESET_COOLDOWN',
                                            slowmodeType: es.S.SendMessage,
                                            channelId: e
                                        }),
                                        s.Z.dispatch({
                                            type: 'EMOJI_TRACK_USAGE',
                                            emojiUsed: d
                                        }),
                                        s.Z.dispatch({
                                            type: 'STICKER_TRACK_USAGE',
                                            stickerIds: m
                                        }),
                                        s.Z.dispatch({
                                            type: 'LOCAL_MESSAGE_CREATE',
                                            message: {
                                                channel_id: e,
                                                author: eo.default.getCurrentUser()
                                            }
                                        }),
                                        eT({
                                            content: u,
                                            channelId: e,
                                            messageId: o.body.id,
                                            location: null != p ? p : 'chat_input',
                                            suggested: h
                                        }),
                                        eA(u, e, o.body.id, null != p ? p : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                        t(o);
                                } else {
                                    var f;
                                    ev.log('Failed to send message', {
                                        hasErr: o.hasErr,
                                        status: o.status,
                                        code: null === (f = o.body) || void 0 === f ? void 0 : f.code,
                                        error: o.err
                                    });
                                    let t = !1;
                                    if (o.hasErr) 'ABORTED' === o.err.code && (t = !0);
                                    else if (o.status >= 400 && o.status < 500 && o.body) {
                                        if (o.body.code === eh.evJ.SLOWMODE_RATE_LIMITED) {
                                            let t = o.body.retry_after;
                                            null != t &&
                                                t > 0 &&
                                                s.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: e,
                                                    slowmodeType: es.S.SendMessage,
                                                    cooldownMs: t * el.Z.Millis.SECOND
                                                });
                                        } else
                                            b.U8.has(o.body.code)
                                                ? s.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                      messageData: W,
                                                      errorResponseBody: {
                                                          code: o.body.code,
                                                          message: o.body.message
                                                      }
                                                  })
                                                : o.body.code === eh.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                                  ? s.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                                  : null != y || R || null != I || eR.sendClydeError(e, o.body.code);
                                    }
                                    t
                                        ? eR.deleteMessage(e, Z, !0)
                                        : (s.Z.dispatch({
                                              type: 'MESSAGE_SEND_FAILED',
                                              messageId: Z,
                                              channelId: e,
                                              shouldNotify: !n.doNotNotifyOnError
                                          }),
                                          (0, w.x)({
                                              failureCode: o.hasErr ? void 0 : o.status,
                                              errorMessage: o.hasErr ? o.err.message : void 0
                                          }),
                                          l.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                              ev.log('Cancelling pending message', e.nonce),
                                                  s.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED',
                                                      messageId: e.nonce,
                                                      channelId: e.channelId
                                                  });
                                          })),
                                        i(o);
                                }
                            },
                            o
                        );
                })
            );
        },
        startEditMessage(e, t, n, i) {
            s.Z.dispatch({
                type: 'MESSAGE_START_EDIT',
                channelId: e,
                messageId: t,
                content: n,
                source: i
            });
        },
        updateEditMessage(e, t, n) {
            s.Z.dispatch({
                type: 'MESSAGE_UPDATE_EDIT',
                channelId: e,
                textValue: t,
                richValue: n
            });
        },
        endEditMessage(e, t) {
            s.Z.dispatch({
                type: 'MESSAGE_END_EDIT',
                channelId: e,
                response: t
            });
        },
        async editMessage(e, t, n) {
            let { content: i } = n;
            await Q.Z.unarchiveThreadIfNecessary(e);
            let r = eN(e, t),
                o = {
                    channelId: e,
                    messageId: t,
                    content: i,
                    allowed_mentions: r
                };
            l.ZP.enqueue(
                {
                    type: l.$V.EDIT,
                    message: o
                },
                (n) => {
                    let i = !n.hasErr && b.U8.has(n.body.code);
                    if (i) {
                        let e = {
                            type: l.$V.EDIT,
                            message: o
                        };
                        s.Z.dispatch({
                            type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message
                            }
                        });
                    }
                    n.hasErr ? a.uv.announce(eg.intl.string(eg.t.Atp7FB)) : i ? a.uv.announce(eg.intl.string(eg.t.Hym4i4)) : a.uv.announce(eg.intl.string(eg.t['0x1HBA'])),
                        eR.endEditMessage(e, n.hasErr ? void 0 : n),
                        eR.focusMessage({
                            channelId: e,
                            messageId: t
                        });
                }
            );
        },
        async suppressEmbeds(e, t) {
            await Q.Z.unarchiveThreadIfNecessary(e),
                r.tn.patch({
                    url: eh.ANM.MESSAGE(e, t),
                    body: { flags: eh.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, t, n) {
            await Q.Z.unarchiveThreadIfNecessary(e),
                r.tn.patch({
                    url: eh.ANM.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = () => {
                    s.Z.dispatch({
                        type: 'MESSAGE_DELETE',
                        id: t,
                        channelId: e
                    }).then(() => {
                        a.uv.announce(eg.intl.string(eg.t.RYMs7u));
                    });
                };
            n
                ? i()
                : (await Q.Z.unarchiveThreadIfNecessary(e),
                  r.tn
                      .del({
                          url: eh.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          i();
                      }));
            let o = en.Z.getMessage(e, t);
            (null == o ? void 0 : o.type) === eh.uaV.GUILD_INVITE_REMINDER && (0, M.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                u.ZP.trackWithMetadata(eh.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            s.Z.dispatch({
                type: 'MESSAGE_REVEAL',
                channelId: e,
                messageId: t
            });
        },
        crosspostMessage: (e, t) =>
            r.tn
                .post({
                    url: eh.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let t;
                    (t = 429 === e.status ? eg.intl.formatToPlainString(eg.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : eg.intl.string(eg.t.z2gyND)),
                        ep.Z.show({
                            title: eg.intl.string(eg.t.Vd1hs7),
                            body: t,
                            confirmText: eg.intl.string(eg.t.BddRzc)
                        });
                }),
        trackInvite: eS
    },
    eO = eR;
