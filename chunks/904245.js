var i = r(411104);
var a = r(627341);
var o = r(47120);
var s = r(789020);
var l = r(278074),
    u = r(544891),
    c = r(780384),
    d = r(570140),
    f = r(89892),
    p = r(673750),
    h = r(367907),
    _ = r(287328),
    m = r(86670),
    g = r(685736),
    E = r(849521),
    v = r(421474),
    y = r(333023),
    b = r(970606),
    I = r(960904),
    T = r(830121),
    S = r(710845),
    A = r(247206),
    C = r(38618),
    N = r(687516),
    R = r(539573),
    O = r(826581),
    D = r(409059),
    L = r(264229),
    x = r(366980),
    w = r(779832),
    P = r(786761),
    M = r(459618),
    k = r(541288),
    U = r(3148),
    B = r(48854),
    G = r(785359),
    Z = r(646504),
    F = r(64078),
    V = r(351780),
    j = r(79390),
    H = r(980463),
    Y = r(328908),
    W = r(576645),
    K = r(643266),
    z = r(617136),
    q = r(807092),
    Q = r(869765),
    X = r(926491),
    J = r(467798),
    $ = r(346479),
    ee = r(218543),
    et = r(199902),
    en = r(314897),
    er = r(592125),
    ei = r(323873),
    ea = r(701190),
    eo = r(375954),
    es = r(496675),
    el = r(158776),
    eu = r(306680),
    ec = r(300429),
    ed = r(594174),
    ef = r(626135),
    ep = r(70956),
    eh = r(630388),
    e_ = r(669079),
    em = r(63063),
    eg = r(74538),
    eE = r(709054),
    ev = r(668781),
    ey = r(981631),
    eb = r(58346),
    eI = r(388032);
function eT(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let eS = new S.Z('MessageActionCreators'),
    eA = new S.Z('MessageQueue'),
    eC = !1;
class eN {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eT(this, 'completed', !1);
    }
}
function eR(e) {
    let { content: n, channelId: r, messageId: i, location: a, suggested: o = null, overrideProperties: s = {} } = e;
    (0, T.ZP)(n).forEach((e) => {
        let { type: n, code: l } = e;
        if (n === I.g.INVITE)
            eO({
                inviteKey: l,
                channelId: r,
                messageId: i,
                location: a,
                suggested: o,
                overrideProperties: s
            });
        else if (n === I.g.TEMPLATE) {
            let e = D.Z.getGuildTemplate(l);
            if (null == e || e.state === eb.Rj.RESOLVING) return;
            h.ZP.trackWithMetadata(ey.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: l,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (n === I.g.BUILD_OVERRIDE);
        else if (n === I.g.MANUAL_BUILD_OVERRIDE);
        else if (n === I.g.EVENT);
        else if (n === I.g.CHANNEL_LINK);
        else if (n === I.g.APP_DIRECTORY_PROFILE) (0, E.y)(l);
        else if (n === I.g.APP_DIRECTORY_STOREFRONT) (0, E.y)(l, 'storefront');
        else if (n === I.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, v.Q)(l);
            null != e && (0, E.y)(e.applicationId, 'storefront_sku');
        } else if (n === I.g.ACTIVITY_BOOKMARK);
        else if (n === I.g.EMBEDDED_ACTIVITY_INVITE);
        else if (n === I.g.GUILD_PRODUCT);
        else if (n === I.g.SERVER_SHOP);
        else if (n === I.g.QUESTS_EMBED)
            (0, z.dA)({
                questId: l,
                event: ey.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (n === I.g.APP_OAUTH2_LINK) h.ZP.trackWithMetadata(ey.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: l });
        else if (n === I.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(n));
    });
}
function eO(e) {
    let { inviteKey: n, channelId: r, messageId: i, location: a, suggested: o = null, overrideProperties: s = {} } = e,
        l = (0, L.fU)(n),
        u = er.Z.getChannel(r);
    if (null != u) {
        let e = null;
        u.isMultiUserDM() ? (e = ey.dAT.GDM_INVITE) : !u.isPrivate() && (e = ey.dAT.SERVER_INVITE);
        let r = {},
            d = ea.Z.getInvite(n);
        if (null != d && d.state === ey.r2o.RESOLVED && null != d.channel) {
            var c;
            let n = d.channel;
            (r.invite_channel_id = n.id), (r.invite_guild_id = null === (c = d.guild) || void 0 === c ? void 0 : c.id), (r.invite_channel_type = n.type), null != d.inviter && (r.invite_inviter_id = d.inviter.id), null != d.target_application && (r.application_id = d.target_application.id);
            let i = et.Z.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = ey.dAT.STREAM), (r.destination_user_id = i.ownerId);
                let n = (0, N.L2)(i, el.Z);
                r.application_id = null != n ? n.id : null;
            }
        }
        null != o && ((r.is_suggested = o.isAffinitySuggestion), (r.row_num = o.rowNum), (r.num_total = o.numTotal), (r.num_affinity_connections = o.numAffinityConnections), (r.is_filtered = o.isFiltered)),
            (r = {
                ...r,
                location: a,
                invite_type: e,
                invite_code: l.baseCode,
                guild_id: u.getGuildId(),
                channel_id: u.id,
                message_id: i,
                send_type: ey.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: l.guildScheduledEventId,
                ...s
            }),
            h.ZP.trackWithMetadata(ey.rMx.INVITE_SENT, r);
    } else {
        let e = {},
            r = ea.Z.getInvite(n);
        null != r &&
            r.state === ey.r2o.RESOLVED &&
            null != r.inviter &&
            ((e.invite_inviter_id = r.inviter.id),
            null != r.target_application && (e.application_id = r.target_application.id),
            (e = {
                ...e,
                location: a,
                invite_type: ey.dAT.FRIEND_INVITE,
                invite_code: l.baseCode,
                message_id: i,
                send_type: ey.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: l.guildScheduledEventId,
                ...s
            }),
            h.ZP.trackWithMetadata(ey.rMx.INVITE_SENT, e));
    }
}
function eD(e, n, r, i, a) {
    (0, e_.Q_)(e).forEach((e) => {
        let o = er.Z.getChannel(n);
        null != o &&
            h.ZP.trackWithMetadata(ey.rMx.GIFT_CODE_SENT, {
                location: i,
                gift_code: e,
                guild_id: o.getGuildId(),
                channel_id: o.id,
                channel_type: o.type,
                message_id: r,
                automatic_send: a
            });
    });
}
function eL(e, n) {
    let r = eo.Z.getMessage(e, n);
    if (null == r || r.type !== ey.uaV.REPLY) return;
    let i = Q.Z.getMessageByReference(r.messageReference);
    if (!(i.state !== Q.Y.LOADED || r.mentions.includes(i.message.author.id)))
        return {
            parse: Object.values(ey.hCA),
            replied_user: !1
        };
}
let ex = {
        [ey.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eI.intl.string(eI.t.k1Cjqq)
        },
        [ey.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eI.intl.formatToPlainString(eI.t.CTMXwM, { helpUrl: em.Z.getArticleURL(ey.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [ey.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => eI.intl.string(eI.t.E8nbNT)
        },
        [ey.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eI.intl.string(eI.t.aRUbam)
        },
        [ey.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eI.intl.string(eI.t.aRUbam)
        },
        [ey.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => eI.intl.string(eI.t['/meGhY'])
        },
        [ey.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => eI.intl.string(eI.t.Oc1Zj4)
        }
    },
    ew = {
        receiveMessage(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            d.Z.dispatch({
                type: 'MESSAGE_CREATE',
                channelId: e,
                message: n,
                optimistic: r,
                sendMessageOptions: i,
                isPushNotification: !1
            });
        },
        sendBotMessage(e, n, r, i) {
            null != r &&
                h.ZP.trackWithMetadata(ey.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: r
                }),
                ew.receiveMessage(
                    e,
                    (0, U.cs)({
                        messageId: i,
                        channelId: e,
                        content: n,
                        loggingName: r
                    })
                );
        },
        sendNitroSystemMessage(e, n, r) {
            let i = (0, U.ZP)({
                channelId: e,
                nonce: r,
                type: ey.uaV.NITRO_NOTIFICATION,
                content: n,
                flags: ey.iLy.EPHEMERAL,
                author: {
                    id: ey.LAt,
                    username: 'Nitro Notification',
                    discriminator: ey.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            ew.receiveMessage(
                e,
                {
                    ...i,
                    state: ey.yb.SENT,
                    channel_id: e
                },
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, n) {
            let r = (0, U.ZP)({
                channelId: e,
                type: ey.uaV.GIFTING_PROMPT,
                content: '',
                flags: ey.iLy.EPHEMERAL,
                author: {
                    id: ey.LAt,
                    username: 'Gifting Prompt',
                    discriminator: ey.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: n
            });
            ew.receiveMessage(
                e,
                {
                    ...r,
                    state: ey.yb.SENT
                },
                !0
            );
        },
        sendClydeError(e) {
            let n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = er.Z.getChannel(e);
            if (null != a) i === ey.evJ.SLOWMODE_RATE_LIMITED ? ((n = eI.intl.formatToPlainString(eI.t.IWntYm, { seconds: a.rateLimitPerUser })), (r = 'SLOWMODE_RATE_LIMITED')) : i === ey.evJ.INVALID_MESSAGE_SEND_USER ? ((n = eI.intl.formatToPlainString(eI.t.CTMXwM, { helpUrl: em.Z.getArticleURL(ey.BhN.DM_COULD_NOT_BE_DELIVERED) })), (r = 'INVALID_MESSAGE_SEND_USER')) : i === ey.evJ.TOO_MANY_THREADS ? ((n = a.isForumLikeChannel() || a.isForumPost() ? eI.intl.string(eI.t['/jUd29']) : eI.intl.string(eI.t['5EMPAw'])), (r = 'TOO_MANY_THREADS')) : i === ey.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((n = eI.intl.string(eI.t['aY+lLC'])), (r = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : i === ey.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((n = eI.intl.formatToPlainString(eI.t.zSG3Q0, { helpUrl: ey.EYA.HARMFUL_LINKS })), (r = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : i in ex ? ((r = ex[i].messageName), (n = ex[i].messageGetter())) : ((n = eI.intl.formatToPlainString(eI.t.CTMXwM, { helpUrl: em.Z.getArticleURL(ey.BhN.DM_COULD_NOT_BE_DELIVERED) })), (r = 'SEND_FAILED ('.concat(i, ')'))), ew.sendBotMessage(e, n, r);
        },
        sendExplicitMediaClydeError(e, n, r) {
            let i = er.Z.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: o } = (0, l.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: eI.intl.string(eI.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: eI.intl.string(eI.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: eI.intl.string(eI.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                s = (0, B.r)();
            ew.sendBotMessage(e, a, o, s),
                (0, A.aP)({
                    action: A.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: s,
                    channelId: e,
                    context: r
                }),
                null != n &&
                    n.length > 0 &&
                    d.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: s,
                        channelId: e,
                        attachments: n
                    });
        },
        truncateMessages(e, n, r) {
            d.Z.dispatch({
                type: 'TRUNCATE_MESSAGES',
                channelId: e,
                truncateBottom: n,
                truncateTop: r
            });
        },
        clearChannel(e) {
            d.Z.dispatch({
                type: 'CLEAR_MESSAGES',
                channelId: e
            });
        },
        jumpToPresent(e, n) {
            ew.trackJump(e, null, 'Present');
            let r = { present: !0 };
            eo.Z.hasPresent(e)
                ? d.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: r,
                      channelId: e,
                      limit: n
                  })
                : ew.fetchMessages({
                      channelId: e,
                      limit: n,
                      jump: r
                  });
        },
        trackJump(e, n, r, i) {
            h.ZP.trackWithMetadata(ey.rMx.JUMP, {
                context: r,
                channel_id: e,
                message_id: n,
                ...i
            });
        },
        jumpToMessage(e) {
            let { channelId: n, messageId: r, flash: i = !1, offset: a, context: o, extraProperties: s = null, isPreload: l, returnMessageId: u, skipLocalFetch: c, jumpType: d } = e;
            return (
                'string' == typeof o && ew.trackJump(n, r, o, s),
                ew.fetchMessages({
                    channelId: n,
                    limit: ey.Z8P,
                    jump: {
                        messageId: r,
                        flash: i,
                        offset: a,
                        returnMessageId: u,
                        jumpType: d
                    },
                    isPreload: l,
                    skipLocalFetch: c
                })
            );
        },
        focusMessage(e) {
            let { channelId: n, messageId: r } = e;
            ew.fetchMessages({
                channelId: n,
                limit: ey.Z8P,
                focus: { messageId: r }
            });
        },
        fetchMessage(e) {
            let { channelId: n, messageId: r } = e;
            return u.tn
                .get({
                    url: ey.ANM.MESSAGES(n),
                    query: {
                        limit: 1,
                        around: r
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, P.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: n, before: r, after: i, limit: a, jump: o, focus: s, isPreload: l, skipLocalFetch: c, truncate: p, forICYMI: h } = e,
                _ = er.Z.getChannel(n),
                m = C.Z.isConnectedOrOverlay(),
                g = Date.now();
            if (null != _ && _.type === ey.d4z.GUILD_STORE) return !1;
            if (n === y.V) return;
            if (
                (eS.log('Fetching messages for '.concat(n, ' between ').concat(r, ' and ').concat(i, '. jump=').concat(JSON.stringify(o))),
                ew._tryFetchMessagesCached({
                    channelId: n,
                    before: r,
                    after: i,
                    limit: a,
                    jump: o,
                    focus: s,
                    truncate: p
                }))
            )
                return;
            ee.Z.fetchMessages.recordStart();
            let E = null != o ? o : void 0;
            null == E && null != s && (E = { ...s });
            let v = f.Z.getOrCreate(n).loadStart(E);
            f.Z.commit(v), d.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let b = null == E ? void 0 : E.messageId,
                I = new eN();
            return (
                !c && this.fetchLocalMessages(n, r, i, a, I),
                u.tn
                    .get({
                        url: ey.ANM.MESSAGES(n),
                        query: {
                            before: r,
                            after: i,
                            limit: a,
                            around: b,
                            preload: l
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            ee.Z.fetchMessages.recordEnd(),
                            ee.Z.dispatchMessages.measure(() => {
                                let s = e.body,
                                    l = null != r,
                                    u = null != i,
                                    c = null == r && null == i,
                                    f = null != b || (s.length === a && (l || c)),
                                    _ = null != b || (u && s.length === a);
                                if (null != b) {
                                    let e = Math.floor(a / 2),
                                        r = [
                                            b,
                                            ...s.map((e) => {
                                                let { id: n } = e;
                                                return n;
                                            })
                                        ]
                                            .filter((e, n, r) => r.indexOf(e) === n)
                                            .sort(eE.default.compare)
                                            .indexOf(b);
                                    if ((r < e && (f = !1), s.length - r < e && (_ = !1), _ && s.length > 0)) {
                                        let e = eu.ZP.lastMessageId(n);
                                        s[0].id === e && (_ = !1);
                                    }
                                }
                                eS.log('Fetched '.concat(s.length, ' messages for ').concat(n, ' isBefore:').concat(l, ' isAfter:').concat(u)),
                                    I.markComplete(),
                                    d.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: n,
                                        messages: s,
                                        isBefore: l,
                                        isAfter: u,
                                        hasMoreBefore: f,
                                        hasMoreAfter: _,
                                        limit: a,
                                        jump: o,
                                        forICYMI: h,
                                        isStale: !m || C.Z.lastTimeConnectedChanged() >= g,
                                        truncate: p
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eS.log('Failed to fetch messages for '.concat(n)),
                            d.Z.dispatch({
                                type: 'LOAD_MESSAGES_FAILURE',
                                channelId: n
                            }),
                            !1
                        )
                    )
            );
        },
        async fetchLocalMessages(e, n, r, i, a) {
            let o = er.Z.getBasicChannel(e),
                s = f.Z.getOrCreate(e),
                l = _.Z.database();
            if (null == l || null == o || null != n || null != r) {
                ee.Z.addLocalMessages(e, -1);
                return;
            }
            if (s.ready && !s.cached) {
                ee.Z.addLocalMessages(e, -2);
                return;
            }
            let u = await (0, m.dI)(() => g.ZP.load(l, e, i));
            if (null == u) {
                ee.Z.addLocalMessages(e, -3);
                return;
            }
            if ((eS.log('fetched '.concat(u.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(a.completed, ')')), ee.Z.addLocalMessages(e, u.messages.length), !a.completed && u.messages.length > 0)) {
                let n = u.messages.length >= i && u.connectionId === C.Z.lastTimeConnectedChanged();
                d.Z.dispatch({
                    type: 'LOCAL_MESSAGES_LOADED',
                    guildId: o.guild_id,
                    channelId: e,
                    users: u.users,
                    members: u.members,
                    messages: u.messages,
                    stale: !n
                });
            }
        },
        async fetchNewLocalMessages(e, n) {
            var r;
            let i = er.Z.getBasicChannel(e),
                a = _.Z.database();
            if (null == a || null == i) return;
            let o = f.Z.getOrCreate(e);
            if (o.hasMoreAfter) return;
            let s = await (0, m.dI)(() => g.ZP.load(a, e, n));
            if (null == s) return;
            let l = null === (r = (o = f.Z.getOrCreate(e)).last()) || void 0 === r ? void 0 : r.id,
                u = null == l ? s.messages : s.messages.filter((e) => eE.default.compare(e.id, l) > 0);
            eS.log('Fetched '.concat(s.messages.length, ' messages from the cache after foregrounding. ').concat(u.length, ' are new')),
                0 !== u.length &&
                    d.Z.dispatch({
                        type: 'LOCAL_MESSAGES_LOADED',
                        guildId: i.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: u,
                        stale: !0
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: n, before: r, after: i, limit: a, jump: o, focus: s, truncate: l } = e,
                u = eo.Z.getMessages(n);
            if (u.cached || !u.ready) return !1;
            if ((null == o ? void 0 : o.messageId) != null || (null == s ? void 0 : s.messageId) != null) {
                if ((null == o ? void 0 : o.messageId) != null && u.has(o.messageId, !1))
                    return (
                        d.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: n,
                            jump: o,
                            limit: a,
                            truncate: l
                        }),
                        !0
                    );
                if ((null == s ? void 0 : s.messageId) != null) {
                    if (u.has(s.messageId, !1))
                        return (
                            d.Z.dispatch({
                                type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                                channelId: n,
                                focus: s,
                                limit: a,
                                truncate: l
                            }),
                            !0
                        );
                    o = { ...s };
                }
                let e = (null == o ? void 0 : o.messageId) != null ? eE.default.extractTimestamp(null == o ? void 0 : o.messageId) : 0,
                    r = u.first(),
                    i = u.last();
                if ((!u.hasMoreBefore && null != r && eE.default.extractTimestamp(r.id) >= e) || (!u.hasMoreAfter && null != i && eE.default.extractTimestamp(i.id) <= e) || (null != r && null != i && eE.default.extractTimestamp(r.id) < e && eE.default.extractTimestamp(i.id) > e))
                    return (
                        d.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: n,
                            jump: o,
                            limit: ey.Z8P
                        }),
                        !0
                    );
            } else if (null != r && u.hasBeforeCached(r))
                return (
                    d.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: n,
                        before: r,
                        limit: a,
                        truncate: l
                    }),
                    !0
                );
            else if (null != i && u.hasAfterCached(i))
                return (
                    d.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: n,
                        after: i,
                        limit: a,
                        truncate: l
                    }),
                    !0
                );
            return !1;
        },
        async sendMessage(e, n) {
            var r;
            let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (n.reaction) return Promise.resolve();
            let o = await (0, K.Z)(e);
            if (null != o) return ew.sendMessage(o, n, i, a);
            let s = () => ew._sendMessage(e, n, a),
                l = w.ZP.backgroundify(s, void 0),
                u = null !== (r = a.nonce) && void 0 !== r ? r : (0, B.r)();
            return ((a = {
                ...a,
                nonce: u
            }),
            M.Z.recordMessageSendAttempt(e, u),
            eo.Z.isReady(e))
                ? l()
                : i && e !== y.V
                  ? (eA.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((n, r) => {
                        eo.Z.whenReady(e, () => {
                            eA.info('Channel '.concat(e, ' is ready for sending now.')), l().then(n, r);
                        });
                    }))
                  : l();
        },
        getSendMessageOptionsForReply(e) {
            var n;
            if (null == e) return {};
            let r = {
                guild_id: null !== (n = e.channel.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: e.channel.id,
                message_id: e.message.id
            };
            return {
                messageReference: r,
                allowedMentions: e.shouldMention
                    ? void 0
                    : {
                          parse: Object.values(ey.hCA),
                          replied_user: !1
                      }
            };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: n, content: r, uploads: i, command: a, isGif: o, confettiPotionEmoji: s } = e;
            return null != s && (0, W.tv)(r, o, a, i)
                ? {
                      confettiPotionData: {
                          emoji: s,
                          callback: () => (0, Y.Hb)(n)
                      }
                  }
                : {};
        },
        getSendMessageOptionsForStickers(e) {
            let { isGif: n, stickers: r } = e;
            return null == r || 0 === r.length || n ? {} : { stickerIds: r };
        },
        getSendMessageOptions(e) {
            let n = ew.getSendMessageOptionsForReply(e.pendingReply),
                r = ew.getSendMessageOptionsForConfettiPotion({ ...e }),
                i = ew.getSendMessageOptionsForStickers({ ...e });
            return {
                ...n,
                ...r,
                ...i
            };
        },
        sendInvite: (e, n, r, i) =>
            ew._sendMessage(
                e,
                {
                    content: (0, x.Z)(n),
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    location: r,
                    suggestedInvite: null != i ? i : void 0
                }
            ),
        sendActivityBookmark: (e, n, r, i) =>
            ew._sendMessage(
                e,
                {
                    content: n,
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    location: r,
                    suggestedInvite: null != i ? i : void 0
                }
            ),
        sendStickers(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return ew._sendMessage(
                e,
                {
                    content: r,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: a
                },
                {
                    ...i,
                    stickerIds: n
                }
            );
        },
        sendGreetMessage(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: a } = r;
            return u.tn
                .post({
                    url: ey.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [n],
                        allowed_mentions: a,
                        message_reference: i
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (r) => (
                        k.Z.donateSentMessage(r.body.content, e),
                        ew.receiveMessage(e, r.body),
                        d.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [n]
                        }),
                        r
                    ),
                    (n) => {
                        throw (
                            (eS.log('Failed to send greeting'),
                            429 !== n.status && ew.sendClydeError(e, n.body.code),
                            d.Z.dispatch({
                                type: 'MESSAGE_SEND_FAILED',
                                messageId: n.body.id,
                                channelId: e
                            }),
                            n)
                        );
                    }
                );
        },
        sendPollMessage(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ew._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    ...r,
                    poll: n
                }
            );
        },
        _sendMessage(e, n, r) {
            var i, a, o;
            let s = (0, K.Z)(e);
            if (null != s)
                return (
                    eA.info('Converting channel to a private channel'),
                    s.then((e) => {
                        eA.info('Finished converting channel to a private channel'), ew._sendMessage(e, n, r);
                    })
                );
            let l = n.content,
                { invalidEmojis: u, validNonShortcutEmojis: c, tts: f = !1 } = n,
                { activityAction: h, location: _, suggestedInvite: m, stickerIds: g, confettiPotionData: E, messageReference: v, allowedMentions: y, poll: I, contentInventoryEntry: T } = r,
                S = null !== (a = r.flags) && void 0 !== a ? a : 0,
                [A, C] = (0, J.Z)(l);
            A && ((l = C), (S = (0, eh.pj)(S, ey.iLy.SUPPRESS_NOTIFICATIONS)));
            let N = (null === (i = r.messageReference) || void 0 === i ? void 0 : i.type) === ey.Uvt.FORWARD;
            if ('' === l && null == h && null == g && null == I && null == T && !N) return Promise.resolve();
            let D = null != v ? ey.uaV.REPLY : ey.uaV.DEFAULT,
                L = null !== (o = r.nonce) && void 0 !== o ? o : (0, B.r)(),
                x = L;
            if (!1 !== r.eagerDispatch) {
                let n = (0, U.ZP)({
                    channelId: e,
                    content: l,
                    tts: f,
                    type: D,
                    messageReference: v,
                    allowedMentions: y,
                    flags: 0 !== S ? S : void 0,
                    nonce: L,
                    poll: (0, j.x9)(I)
                });
                (0, F.EL)(e, n.id), null != g && (n.sticker_items = g.map((e) => X.Z.getStickerById(e)).filter((e) => null != e)), ew.receiveMessage(e, n, !0, r);
            }
            if (!eC && null != u && u.length > 0) {
                let n, r;
                eC = !0;
                let i = ed.default.getCurrentUser();
                u.some((e) => e.animated) && !eg.ZP.canUseAnimatedEmojis(i) ? ((n = eI.intl.string(eI.t.msFJy8)), (r = 'INVALID_ANIMATED_EMOJI_BODY')) : es.Z.canWithPartialContext(ey.Plq.USE_EXTERNAL_EMOJIS, { channelId: e }) ? ((n = eI.intl.string(eI.t.FzugNj)), (r = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((n = eI.intl.string(eI.t.Q87rIy)), (r = 'INVALID_EXTERNAL_EMOJI_BODY')), ew.sendBotMessage(e, n, r);
            }
            let w = {
                type: p.$V.SEND,
                message: {
                    channelId: e,
                    content: l,
                    nonce: L,
                    tts: f,
                    message_reference: v,
                    allowed_mentions: y,
                    flags: S
                }
            };
            if (null != h) {
                let e;
                let n = null == h ? void 0 : h.activity.session_id;
                if (null != (e = h.type === ey.mFx.JOIN_REQUEST || null != n ? n : en.default.getSessionId())) {
                    let n = {
                            type: h.type,
                            session_id: e
                        },
                        { activity: r } = h;
                    null != r.party && null != r.party.id && (n.party_id = r.party.id), (w.message.application_id = r.application_id), (w.message.activity = n);
                }
            }
            return (
                null != I && (w.message.poll = I),
                null != g && (w.message.sticker_ids = g),
                V.Z.isEnabled() && (w.message.has_poggermode_enabled = !0),
                null != T && (w.message.content_inventory_entry = T),
                null != E &&
                    ((w.message.confetti_potion = {
                        message_emoji: {
                            id: E.emoji.id,
                            name: (0, H.zI)(E.emoji)
                        }
                    }),
                    E.callback()),
                new Promise((n, i) => {
                    let a = Date.now(),
                        o = p.ZP.length,
                        s = Math.floor(10000 * Math.random());
                    eA.info('Queueing message to be sent LogId:'.concat(s)),
                        p.ZP.enqueue(
                            w,
                            (s) => {
                                let u = Date.now() - a;
                                if (s.ok) {
                                    k.Z.donateSentMessage(l, e),
                                        ew.receiveMessage(e, s.body, !0, {
                                            sendAnalytics: {
                                                duration: u,
                                                queueSize: o
                                            },
                                            poll: I
                                        });
                                    let i = eE.default.cast(e),
                                        a = O.Z.getRequest(i);
                                    if (null != a) {
                                        let { guildId: n, userId: r, applicationStatus: i } = a;
                                        (0, b.aC)({
                                            guildId: n,
                                            channelId: e,
                                            messageId: s.body.id,
                                            joinRequestStatus: i,
                                            joinRequestUserId: r
                                        });
                                    }
                                    M.Z.recordMessageSendApiResponse(L);
                                    d.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: ec.S.SendMessage,
                                        channelId: e
                                    }),
                                        d.Z.dispatch({
                                            type: 'EMOJI_TRACK_USAGE',
                                            emojiUsed: c
                                        }),
                                        d.Z.dispatch({
                                            type: 'STICKER_TRACK_USAGE',
                                            stickerIds: g
                                        }),
                                        d.Z.dispatch({
                                            type: 'LOCAL_MESSAGE_CREATE',
                                            message: {
                                                channel_id: e,
                                                author: ed.default.getCurrentUser()
                                            }
                                        }),
                                        eR({
                                            content: l,
                                            channelId: e,
                                            messageId: s.body.id,
                                            location: null != _ ? _ : 'chat_input',
                                            suggested: m
                                        }),
                                        eD(l, e, s.body.id, null != _ ? _ : 'chat_input', !!r.isGiftLinkSentOnBehalfOfUser),
                                        n(s);
                                } else {
                                    var f;
                                    eS.log('Failed to send message', {
                                        hasErr: s.hasErr,
                                        status: s.status,
                                        code: null === (f = s.body) || void 0 === f ? void 0 : f.code,
                                        error: s.err
                                    });
                                    let n = !1;
                                    if (s.hasErr) 'ABORTED' === s.err.code && (n = !0);
                                    else if (s.status >= 400 && s.status < 500 && s.body) {
                                        if (s.body.code === ey.evJ.SLOWMODE_RATE_LIMITED) {
                                            let n = s.body.retry_after;
                                            null != n &&
                                                n > 0 &&
                                                d.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: e,
                                                    slowmodeType: ec.S.SendMessage,
                                                    cooldownMs: n * ep.Z.Millis.SECOND
                                                });
                                        } else
                                            R.U8.has(s.body.code)
                                                ? d.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                      messageData: w,
                                                      errorResponseBody: {
                                                          code: s.body.code,
                                                          message: s.body.message
                                                      }
                                                  })
                                                : s.body.code === ey.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                                  ? d.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                                  : null != I || N || null != T || ew.sendClydeError(e, s.body.code);
                                    }
                                    n
                                        ? ew.deleteMessage(e, x, !0)
                                        : (d.Z.dispatch({
                                              type: 'MESSAGE_SEND_FAILED',
                                              messageId: x,
                                              channelId: e,
                                              shouldNotify: !r.doNotNotifyOnError
                                          }),
                                          (0, G.x)({
                                              failureCode: s.hasErr ? void 0 : s.status,
                                              errorMessage: s.hasErr ? s.err.message : void 0
                                          }),
                                          p.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                              eS.log('Cancelling pending message', e.nonce),
                                                  d.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED',
                                                      messageId: e.nonce,
                                                      channelId: e.channelId
                                                  });
                                          })),
                                        i(s);
                                }
                            },
                            s
                        );
                })
            );
        },
        startEditMessage(e, n, r, i) {
            d.Z.dispatch({
                type: 'MESSAGE_START_EDIT',
                channelId: e,
                messageId: n,
                content: r,
                source: i
            });
        },
        updateEditMessage(e, n, r) {
            d.Z.dispatch({
                type: 'MESSAGE_UPDATE_EDIT',
                channelId: e,
                textValue: n,
                richValue: r
            });
        },
        endEditMessage(e, n) {
            d.Z.dispatch({
                type: 'MESSAGE_END_EDIT',
                channelId: e,
                response: n
            });
        },
        async editMessage(e, n, r) {
            let { content: i } = r;
            await $.Z.unarchiveThreadIfNecessary(e);
            let a = eL(e, n),
                o = {
                    channelId: e,
                    messageId: n,
                    content: i,
                    allowed_mentions: a
                };
            p.ZP.enqueue(
                {
                    type: p.$V.EDIT,
                    message: o
                },
                (r) => {
                    let i = !r.hasErr && R.U8.has(r.body.code);
                    if (i) {
                        let e = {
                            type: p.$V.EDIT,
                            message: o
                        };
                        d.Z.dispatch({
                            type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
                            messageData: e,
                            errorResponseBody: {
                                code: r.body.code,
                                message: r.body.message
                            }
                        });
                    }
                    r.hasErr ? c.uv.announce(eI.intl.string(eI.t.Atp7FB)) : i ? c.uv.announce(eI.intl.string(eI.t.Hym4i4)) : c.uv.announce(eI.intl.string(eI.t['0x1HBA'])),
                        ew.endEditMessage(e, r.hasErr ? void 0 : r),
                        ew.focusMessage({
                            channelId: e,
                            messageId: n
                        });
                }
            );
        },
        async suppressEmbeds(e, n) {
            await $.Z.unarchiveThreadIfNecessary(e),
                u.tn.patch({
                    url: ey.ANM.MESSAGE(e, n),
                    body: { flags: ey.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, n, r) {
            await $.Z.unarchiveThreadIfNecessary(e),
                u.tn.patch({
                    url: ey.ANM.MESSAGE(e, n),
                    body: { attachments: r },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async deleteMessage(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = () => {
                    d.Z.dispatch({
                        type: 'MESSAGE_DELETE',
                        id: n,
                        channelId: e
                    }).then(() => {
                        c.uv.announce(eI.intl.string(eI.t.RYMs7u));
                    });
                };
            r
                ? i()
                : (await $.Z.unarchiveThreadIfNecessary(e),
                  u.tn
                      .del({
                          url: ey.ANM.MESSAGE(e, n),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          i();
                      }));
            let a = eo.Z.getMessage(e, n);
            (null == a ? void 0 : a.type) === ey.uaV.GUILD_INVITE_REMINDER && (0, Z.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                h.ZP.trackWithMetadata(ey.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, n) {
            d.Z.dispatch({
                type: 'MESSAGE_REVEAL',
                channelId: e,
                messageId: n
            });
        },
        crosspostMessage: (e, n) =>
            u.tn
                .post({
                    url: ey.ANM.MESSAGE_CROSSPOST(e, n),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let n;
                    (n = 429 === e.status ? eI.intl.formatToPlainString(eI.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : eI.intl.string(eI.t.z2gyND)),
                        ev.Z.show({
                            title: eI.intl.string(eI.t.Vd1hs7),
                            body: n,
                            confirmText: eI.intl.string(eI.t.BddRzc)
                        });
                }),
        trackInvite: eO
    };
n.Z = ew;
