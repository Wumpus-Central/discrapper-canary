var i = r(411104);
var a = r(627341);
var s = r(47120);
var o = r(789020);
var l = r(278074),
    u = r(544891),
    c = r(780384),
    d = r(570140),
    f = r(89892),
    _ = r(673750),
    h = r(367907),
    p = r(287328),
    m = r(86670),
    g = r(685736),
    E = r(849521),
    v = r(421474),
    I = r(970606),
    T = r(960904),
    b = r(830121),
    y = r(710845),
    S = r(247206),
    A = r(38618),
    N = r(687516),
    C = r(539573),
    R = r(826581),
    O = r(409059),
    D = r(264229),
    L = r(366980),
    x = r(779832),
    w = r(786761),
    P = r(459618),
    M = r(541288),
    k = r(3148),
    U = r(48854),
    B = r(785359),
    G = r(646504),
    Z = r(64078),
    F = r(351780),
    V = r(79390),
    j = r(643266),
    H = r(617136),
    Y = r(807092),
    W = r(869765),
    K = r(926491),
    z = r(467798),
    q = r(346479),
    Q = r(218543),
    X = r(199902),
    J = r(314897),
    $ = r(592125),
    ee = r(323873),
    et = r(701190),
    en = r(375954),
    er = r(496675),
    ei = r(158776),
    ea = r(306680),
    es = r(300429),
    eo = r(594174),
    el = r(626135),
    eu = r(70956),
    ec = r(630388),
    ed = r(669079),
    ef = r(63063),
    e_ = r(74538),
    eh = r(709054),
    ep = r(668781),
    em = r(981631),
    eg = r(176505),
    eE = r(58346),
    ev = r(388032);
function eI(e, n, r) {
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
let eT = new y.Z('MessageActionCreators'),
    eb = new y.Z('MessageQueue'),
    ey = !1;
class eS {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eI(this, 'completed', !1);
    }
}
function eA(e) {
    let { content: n, channelId: r, messageId: i, location: a, suggested: s = null, overrideProperties: o = {} } = e;
    (0, b.ZP)(n).forEach((e) => {
        let { type: n, code: l } = e;
        if (n === T.g.INVITE)
            eN({
                inviteKey: l,
                channelId: r,
                messageId: i,
                location: a,
                suggested: s,
                overrideProperties: o
            });
        else if (n === T.g.TEMPLATE) {
            let e = O.Z.getGuildTemplate(l);
            if (null == e || e.state === eE.Rj.RESOLVING) return;
            h.ZP.trackWithMetadata(em.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: l,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (n === T.g.BUILD_OVERRIDE);
        else if (n === T.g.MANUAL_BUILD_OVERRIDE);
        else if (n === T.g.EVENT);
        else if (n === T.g.CHANNEL_LINK);
        else if (n === T.g.APP_DIRECTORY_PROFILE) (0, E.y)(l);
        else if (n === T.g.APP_DIRECTORY_STOREFRONT) (0, E.y)(l, 'storefront');
        else if (n === T.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, v.Q)(l);
            null != e && (0, E.y)(e.applicationId, 'storefront_sku');
        } else if (n === T.g.ACTIVITY_BOOKMARK);
        else if (n === T.g.EMBEDDED_ACTIVITY_INVITE);
        else if (n === T.g.GUILD_PRODUCT);
        else if (n === T.g.SERVER_SHOP);
        else if (n === T.g.QUESTS_EMBED)
            (0, H.dA)({
                questId: l,
                event: em.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (n === T.g.APP_OAUTH2_LINK) h.ZP.trackWithMetadata(em.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: l });
        else if (n === T.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(n));
    });
}
function eN(e) {
    let { inviteKey: n, channelId: r, messageId: i, location: a, suggested: s = null, overrideProperties: o = {} } = e,
        l = (0, D.fU)(n),
        u = $.Z.getChannel(r);
    if (null != u) {
        let e = null;
        u.isMultiUserDM() ? (e = em.dAT.GDM_INVITE) : !u.isPrivate() && (e = em.dAT.SERVER_INVITE);
        let r = {},
            d = et.Z.getInvite(n);
        if (null != d && d.state === em.r2o.RESOLVED && null != d.channel) {
            var c;
            let n = d.channel;
            (r.invite_channel_id = n.id), (r.invite_guild_id = null === (c = d.guild) || void 0 === c ? void 0 : c.id), (r.invite_channel_type = n.type), null != d.inviter && (r.invite_inviter_id = d.inviter.id), null != d.target_application && (r.application_id = d.target_application.id);
            let i = X.Z.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = em.dAT.STREAM), (r.destination_user_id = i.ownerId);
                let n = (0, N.L2)(i, ei.Z);
                r.application_id = null != n ? n.id : null;
            }
        }
        null != s && ((r.is_suggested = s.isAffinitySuggestion), (r.row_num = s.rowNum), (r.num_total = s.numTotal), (r.num_affinity_connections = s.numAffinityConnections), (r.is_filtered = s.isFiltered)),
            (r = {
                ...r,
                location: a,
                invite_type: e,
                invite_code: l.baseCode,
                guild_id: u.getGuildId(),
                channel_id: u.id,
                message_id: i,
                send_type: em.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: l.guildScheduledEventId,
                ...o
            }),
            h.ZP.trackWithMetadata(em.rMx.INVITE_SENT, r);
    } else {
        let e = {},
            r = et.Z.getInvite(n);
        null != r &&
            r.state === em.r2o.RESOLVED &&
            null != r.inviter &&
            ((e.invite_inviter_id = r.inviter.id),
            null != r.target_application && (e.application_id = r.target_application.id),
            (e = {
                ...e,
                location: a,
                invite_type: em.dAT.FRIEND_INVITE,
                invite_code: l.baseCode,
                message_id: i,
                send_type: em.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: l.guildScheduledEventId,
                ...o
            }),
            h.ZP.trackWithMetadata(em.rMx.INVITE_SENT, e));
    }
}
function eC(e, n, r, i, a) {
    (0, ed.Q_)(e).forEach((e) => {
        let s = $.Z.getChannel(n);
        null != s &&
            h.ZP.trackWithMetadata(em.rMx.GIFT_CODE_SENT, {
                location: i,
                gift_code: e,
                guild_id: s.getGuildId(),
                channel_id: s.id,
                channel_type: s.type,
                message_id: r,
                automatic_send: a
            });
    });
}
function eR(e, n) {
    let r = en.Z.getMessage(e, n);
    if (null == r || r.type !== em.uaV.REPLY) return;
    let i = W.Z.getMessageByReference(r.messageReference);
    if (!(i.state !== W.Y.LOADED || r.mentions.includes(i.message.author.id)))
        return {
            parse: Object.values(em.hCA),
            replied_user: !1
        };
}
let eO = {
        [em.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => ev.intl.string(ev.t.k1Cjqq)
        },
        [em.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => ev.intl.formatToPlainString(ev.t.CTMXwM, { helpUrl: ef.Z.getArticleURL(em.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [em.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => ev.intl.string(ev.t.E8nbNT)
        },
        [em.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => ev.intl.string(ev.t.aRUbam)
        },
        [em.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => ev.intl.string(ev.t.aRUbam)
        }
    },
    eD = {
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
                h.ZP.trackWithMetadata(em.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: r
                }),
                eD.receiveMessage(
                    e,
                    (0, k.cs)({
                        messageId: i,
                        channelId: e,
                        content: n,
                        loggingName: r
                    })
                );
        },
        sendNitroSystemMessage(e, n, r) {
            let i = (0, k.ZP)({
                channelId: e,
                nonce: r,
                type: em.uaV.NITRO_NOTIFICATION,
                content: n,
                flags: em.iLy.EPHEMERAL,
                author: {
                    id: em.LAt,
                    username: 'Nitro Notification',
                    discriminator: em.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            eD.receiveMessage(
                e,
                {
                    ...i,
                    state: em.yb.SENT,
                    channel_id: e
                },
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, n) {
            let r = (0, k.ZP)({
                channelId: e,
                type: em.uaV.GIFTING_PROMPT,
                content: '',
                flags: em.iLy.EPHEMERAL,
                author: {
                    id: em.LAt,
                    username: 'Gifting Prompt',
                    discriminator: em.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: n
            });
            eD.receiveMessage(
                e,
                {
                    ...r,
                    state: em.yb.SENT
                },
                !0
            );
        },
        sendClydeError(e) {
            let n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = $.Z.getChannel(e);
            if (null != a) i === em.evJ.SLOWMODE_RATE_LIMITED ? ((n = ev.intl.formatToPlainString(ev.t.IWntYm, { seconds: a.rateLimitPerUser })), (r = 'SLOWMODE_RATE_LIMITED')) : i === em.evJ.INVALID_MESSAGE_SEND_USER ? ((n = ev.intl.formatToPlainString(ev.t.CTMXwM, { helpUrl: ef.Z.getArticleURL(em.BhN.DM_COULD_NOT_BE_DELIVERED) })), (r = 'INVALID_MESSAGE_SEND_USER')) : i === em.evJ.TOO_MANY_THREADS ? ((n = a.isForumLikeChannel() || a.isForumPost() ? ev.intl.string(ev.t['/jUd29']) : ev.intl.string(ev.t['5EMPAw'])), (r = 'TOO_MANY_THREADS')) : i === em.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((n = ev.intl.string(ev.t['aY+lLC'])), (r = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : i === em.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((n = ev.intl.formatToPlainString(ev.t.zSG3Q0, { helpUrl: em.EYA.HARMFUL_LINKS })), (r = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : i in eO ? ((r = eO[i].messageName), (n = eO[i].messageGetter())) : ((n = ev.intl.formatToPlainString(ev.t.CTMXwM, { helpUrl: ef.Z.getArticleURL(em.BhN.DM_COULD_NOT_BE_DELIVERED) })), (r = 'SEND_FAILED ('.concat(i, ')'))), eD.sendBotMessage(e, n, r);
        },
        sendExplicitMediaClydeError(e, n, r) {
            let i = $.Z.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: s } = (0, l.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: ev.intl.string(ev.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: ev.intl.string(ev.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: ev.intl.string(ev.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                o = (0, U.r)();
            eD.sendBotMessage(e, a, s, o),
                (0, S.aP)({
                    action: S.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: o,
                    channelId: e,
                    context: r
                }),
                null != n &&
                    n.length > 0 &&
                    d.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: o,
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
            eD.trackJump(e, null, 'Present');
            let r = { present: !0 };
            en.Z.hasPresent(e)
                ? d.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: r,
                      channelId: e,
                      limit: n
                  })
                : eD.fetchMessages({
                      channelId: e,
                      limit: n,
                      jump: r
                  });
        },
        trackJump(e, n, r, i) {
            h.ZP.trackWithMetadata(em.rMx.JUMP, {
                context: r,
                channel_id: e,
                message_id: n,
                ...i
            });
        },
        jumpToMessage(e) {
            let { channelId: n, messageId: r, flash: i = !1, offset: a, context: s, extraProperties: o = null, isPreload: l, returnMessageId: u, skipLocalFetch: c, jumpType: d } = e;
            return (
                'string' == typeof s && eD.trackJump(n, r, s, o),
                eD.fetchMessages({
                    channelId: n,
                    limit: em.Z8P,
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
            eD.fetchMessages({
                channelId: n,
                limit: em.Z8P,
                focus: { messageId: r }
            });
        },
        fetchMessage(e) {
            let { channelId: n, messageId: r } = e;
            return u.tn
                .get({
                    url: em.ANM.MESSAGES(n),
                    query: {
                        limit: 1,
                        around: r
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, w.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: n, before: r, after: i, limit: a, jump: s, focus: o, isPreload: l, skipLocalFetch: c, truncate: _, forICYMI: h } = e,
                p = $.Z.getChannel(n),
                m = A.Z.isConnectedOrOverlay(),
                g = Date.now();
            if (null != p && p.type === em.d4z.GUILD_STORE) return !1;
            if (n === eg.V) return;
            if (
                (eT.log('Fetching messages for '.concat(n, ' between ').concat(r, ' and ').concat(i, '. jump=').concat(JSON.stringify(s))),
                eD._tryFetchMessagesCached({
                    channelId: n,
                    before: r,
                    after: i,
                    limit: a,
                    jump: s,
                    focus: o,
                    truncate: _
                }))
            )
                return;
            Q.Z.fetchMessages.recordStart();
            let E = null != s ? s : void 0;
            null == E && null != o && (E = { ...o });
            let v = f.Z.getOrCreate(n).loadStart(E);
            f.Z.commit(v), d.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let I = null == E ? void 0 : E.messageId,
                T = new eS();
            return (
                !c && this.fetchLocalMessages(n, r, i, a, T),
                u.tn
                    .get({
                        url: em.ANM.MESSAGES(n),
                        query: {
                            before: r,
                            after: i,
                            limit: a,
                            around: I,
                            preload: l
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            Q.Z.fetchMessages.recordEnd(),
                            Q.Z.dispatchMessages.measure(() => {
                                let o = e.body,
                                    l = null != r,
                                    u = null != i,
                                    c = null == r && null == i,
                                    f = null != I || (o.length === a && (l || c)),
                                    p = null != I || (u && o.length === a);
                                if (null != I) {
                                    let e = Math.floor(a / 2),
                                        r = [
                                            I,
                                            ...o.map((e) => {
                                                let { id: n } = e;
                                                return n;
                                            })
                                        ]
                                            .filter((e, n, r) => r.indexOf(e) === n)
                                            .sort(eh.default.compare)
                                            .indexOf(I);
                                    if ((r < e && (f = !1), o.length - r < e && (p = !1), p && o.length > 0)) {
                                        let e = ea.ZP.lastMessageId(n);
                                        o[0].id === e && (p = !1);
                                    }
                                }
                                eT.log('Fetched '.concat(o.length, ' messages for ').concat(n, ' isBefore:').concat(l, ' isAfter:').concat(u)),
                                    T.markComplete(),
                                    d.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: n,
                                        messages: o,
                                        isBefore: l,
                                        isAfter: u,
                                        hasMoreBefore: f,
                                        hasMoreAfter: p,
                                        limit: a,
                                        jump: s,
                                        forICYMI: h,
                                        isStale: !m || A.Z.lastTimeConnectedChanged() >= g,
                                        truncate: _
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eT.log('Failed to fetch messages for '.concat(n)),
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
            let s = $.Z.getBasicChannel(e),
                o = f.Z.getOrCreate(e),
                l = p.Z.database();
            if (null == l || null == s || null != n || null != r) {
                Q.Z.addLocalMessages(e, -1);
                return;
            }
            if (o.ready && !o.cached) {
                Q.Z.addLocalMessages(e, -2);
                return;
            }
            let u = await (0, m.dI)(() => g.ZP.load(l, e, i));
            if (null == u) {
                Q.Z.addLocalMessages(e, -3);
                return;
            }
            if ((eT.log('fetched '.concat(u.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(a.completed, ')')), Q.Z.addLocalMessages(e, u.messages.length), !a.completed && u.messages.length > 0)) {
                let n = u.messages.length >= i && u.connectionId === A.Z.lastTimeConnectedChanged();
                d.Z.dispatch({
                    type: 'LOCAL_MESSAGES_LOADED',
                    guildId: s.guild_id,
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
            let i = $.Z.getBasicChannel(e),
                a = p.Z.database();
            if (null == a || null == i) return;
            let s = f.Z.getOrCreate(e);
            if (s.hasMoreAfter) return;
            let o = await (0, m.dI)(() => g.ZP.load(a, e, n));
            if (null == o) return;
            let l = null === (r = (s = f.Z.getOrCreate(e)).last()) || void 0 === r ? void 0 : r.id,
                u = null == l ? o.messages : o.messages.filter((e) => eh.default.compare(e.id, l) > 0);
            eT.log('Fetched '.concat(o.messages.length, ' messages from the cache after foregrounding. ').concat(u.length, ' are new')),
                0 !== u.length &&
                    d.Z.dispatch({
                        type: 'LOCAL_MESSAGES_LOADED',
                        guildId: i.guild_id,
                        channelId: e,
                        users: o.users,
                        members: o.members,
                        messages: u,
                        stale: !0
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: n, before: r, after: i, limit: a, jump: s, focus: o, truncate: l } = e,
                u = en.Z.getMessages(n);
            if (u.cached || !u.ready) return !1;
            if ((null == s ? void 0 : s.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
                if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1))
                    return (
                        d.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: n,
                            jump: s,
                            limit: a,
                            truncate: l
                        }),
                        !0
                    );
                if ((null == o ? void 0 : o.messageId) != null) {
                    if (u.has(o.messageId, !1))
                        return (
                            d.Z.dispatch({
                                type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                                channelId: n,
                                focus: o,
                                limit: a,
                                truncate: l
                            }),
                            !0
                        );
                    s = { ...o };
                }
                let e = (null == s ? void 0 : s.messageId) != null ? eh.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
                    r = u.first(),
                    i = u.last();
                if ((!u.hasMoreBefore && null != r && eh.default.extractTimestamp(r.id) >= e) || (!u.hasMoreAfter && null != i && eh.default.extractTimestamp(i.id) <= e) || (null != r && null != i && eh.default.extractTimestamp(r.id) < e && eh.default.extractTimestamp(i.id) > e))
                    return (
                        d.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: n,
                            jump: s,
                            limit: em.Z8P
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
            let s = await (0, j.Z)(e);
            if (null != s) return eD.sendMessage(s, n, i, a);
            let o = () => eD._sendMessage(e, n, a),
                l = x.ZP.backgroundify(o, void 0),
                u = null !== (r = a.nonce) && void 0 !== r ? r : (0, U.r)();
            return ((a = {
                ...a,
                nonce: u
            }),
            P.Z.recordMessageSendAttempt(e, u),
            en.Z.isReady(e))
                ? l()
                : i && e !== eg.V
                  ? (eb.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((n, r) => {
                        en.Z.whenReady(e, () => {
                            eb.info('Channel '.concat(e, ' is ready for sending now.')), l().then(n, r);
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
                          parse: Object.values(em.hCA),
                          replied_user: !1
                      }
            };
        },
        sendInvite: (e, n, r, i) =>
            eD._sendMessage(
                e,
                {
                    content: (0, L.Z)(n),
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
            eD._sendMessage(
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
            return eD._sendMessage(
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
                    url: em.ANM.MESSAGES_GREET(e),
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
                        M.Z.donateSentMessage(r.body.content, e),
                        eD.receiveMessage(e, r.body),
                        d.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [n]
                        }),
                        r
                    ),
                    (n) => {
                        throw (
                            (eT.log('Failed to send greeting'),
                            429 !== n.status && eD.sendClydeError(e, n.body.code),
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
            return eD._sendMessage(
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
            var i, a, s;
            let o = (0, j.Z)(e);
            if (null != o)
                return (
                    eb.info('Converting channel to a private channel'),
                    o.then((e) => {
                        eb.info('Finished converting channel to a private channel'), eD._sendMessage(e, n, r);
                    })
                );
            let l = n.content,
                { invalidEmojis: u, validNonShortcutEmojis: c, tts: f = !1 } = n,
                { activityAction: h, location: p, suggestedInvite: m, stickerIds: g, messageReference: E, allowedMentions: v, poll: T, contentInventoryEntry: b } = r,
                y = null !== (a = r.flags) && void 0 !== a ? a : 0,
                [S, A] = (0, z.Z)(l);
            S && ((l = A), (y = (0, ec.pj)(y, em.iLy.SUPPRESS_NOTIFICATIONS)));
            let N = (null === (i = r.messageReference) || void 0 === i ? void 0 : i.type) === em.Uvt.FORWARD;
            if ('' === l && null == h && null == g && null == T && null == b && !N) return Promise.resolve();
            let O = null != E ? em.uaV.REPLY : em.uaV.DEFAULT,
                D = null !== (s = r.nonce) && void 0 !== s ? s : (0, U.r)(),
                L = D;
            if (!1 !== r.eagerDispatch) {
                let n = (0, k.ZP)({
                    channelId: e,
                    content: l,
                    tts: f,
                    type: O,
                    messageReference: E,
                    allowedMentions: v,
                    flags: 0 !== y ? y : void 0,
                    nonce: D,
                    poll: (0, V.x9)(T)
                });
                (0, Z.EL)(e, n.id), null != g && (n.sticker_items = g.map((e) => K.Z.getStickerById(e)).filter((e) => null != e)), eD.receiveMessage(e, n, !0, r);
            }
            if (!ey && null != u && u.length > 0) {
                let n, r;
                ey = !0;
                let i = eo.default.getCurrentUser();
                u.some((e) => e.animated) && !e_.ZP.canUseAnimatedEmojis(i) ? ((n = ev.intl.string(ev.t.msFJy8)), (r = 'INVALID_ANIMATED_EMOJI_BODY')) : er.Z.canWithPartialContext(em.Plq.USE_EXTERNAL_EMOJIS, { channelId: e }) ? ((n = ev.intl.string(ev.t.FzugNj)), (r = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((n = ev.intl.string(ev.t.Q87rIy)), (r = 'INVALID_EXTERNAL_EMOJI_BODY')), eD.sendBotMessage(e, n, r);
            }
            let x = {
                type: _.$V.SEND,
                message: {
                    channelId: e,
                    content: l,
                    nonce: D,
                    tts: f,
                    message_reference: E,
                    allowed_mentions: v,
                    flags: y
                }
            };
            if (null != h) {
                let e;
                let n = null == h ? void 0 : h.activity.session_id;
                if (null != (e = h.type === em.mFx.JOIN_REQUEST || null != n ? n : J.default.getSessionId())) {
                    let n = {
                            type: h.type,
                            session_id: e
                        },
                        { activity: r } = h;
                    null != r.party && null != r.party.id && (n.party_id = r.party.id), (x.message.application_id = r.application_id), (x.message.activity = n);
                }
            }
            return (
                null != T && (x.message.poll = T),
                null != g && (x.message.sticker_ids = g),
                F.Z.isEnabled() && (x.message.has_poggermode_enabled = !0),
                null != b && (x.message.content_inventory_entry = b),
                new Promise((n, i) => {
                    let a = Date.now(),
                        s = _.ZP.length,
                        o = Math.floor(10000 * Math.random());
                    eb.info('Queueing message to be sent LogId:'.concat(o)),
                        _.ZP.enqueue(
                            x,
                            (o) => {
                                let u = Date.now() - a;
                                if (o.ok) {
                                    M.Z.donateSentMessage(l, e),
                                        eD.receiveMessage(e, o.body, !0, {
                                            sendAnalytics: {
                                                duration: u,
                                                queueSize: s
                                            },
                                            poll: T
                                        });
                                    let i = eh.default.cast(e),
                                        a = R.Z.getRequest(i);
                                    if (null != a) {
                                        let { guildId: n, userId: r, applicationStatus: i } = a;
                                        (0, I.aC)({
                                            guildId: n,
                                            channelId: e,
                                            messageId: o.body.id,
                                            joinRequestStatus: i,
                                            joinRequestUserId: r
                                        });
                                    }
                                    P.Z.recordMessageSendApiResponse(D);
                                    d.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: es.S.SendMessage,
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
                                                author: eo.default.getCurrentUser()
                                            }
                                        }),
                                        eA({
                                            content: l,
                                            channelId: e,
                                            messageId: o.body.id,
                                            location: null != p ? p : 'chat_input',
                                            suggested: m
                                        }),
                                        eC(l, e, o.body.id, null != p ? p : 'chat_input', !!r.isGiftLinkSentOnBehalfOfUser),
                                        n(o);
                                } else {
                                    var f;
                                    eT.log('Failed to send message', {
                                        hasErr: o.hasErr,
                                        status: o.status,
                                        code: null === (f = o.body) || void 0 === f ? void 0 : f.code,
                                        error: o.err
                                    });
                                    let n = !1;
                                    if (o.hasErr) 'ABORTED' === o.err.code && (n = !0);
                                    else if (o.status >= 400 && o.status < 500 && o.body) {
                                        if (o.body.code === em.evJ.SLOWMODE_RATE_LIMITED) {
                                            let n = o.body.retry_after;
                                            null != n &&
                                                n > 0 &&
                                                d.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: e,
                                                    slowmodeType: es.S.SendMessage,
                                                    cooldownMs: n * eu.Z.Millis.SECOND
                                                });
                                        } else
                                            C.U8.has(o.body.code)
                                                ? d.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                      messageData: x,
                                                      errorResponseBody: {
                                                          code: o.body.code,
                                                          message: o.body.message
                                                      }
                                                  })
                                                : o.body.code === em.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                                  ? d.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                                  : null != T || N || null != b || eD.sendClydeError(e, o.body.code);
                                    }
                                    n
                                        ? eD.deleteMessage(e, L, !0)
                                        : (d.Z.dispatch({
                                              type: 'MESSAGE_SEND_FAILED',
                                              messageId: L,
                                              channelId: e,
                                              shouldNotify: !r.doNotNotifyOnError
                                          }),
                                          (0, B.x)({
                                              failureCode: o.hasErr ? void 0 : o.status,
                                              errorMessage: o.hasErr ? o.err.message : void 0
                                          }),
                                          _.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                              eT.log('Cancelling pending message', e.nonce),
                                                  d.Z.dispatch({
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
            await q.Z.unarchiveThreadIfNecessary(e);
            let a = eR(e, n),
                s = {
                    channelId: e,
                    messageId: n,
                    content: i,
                    allowed_mentions: a
                };
            _.ZP.enqueue(
                {
                    type: _.$V.EDIT,
                    message: s
                },
                (r) => {
                    let i = !r.hasErr && C.U8.has(r.body.code);
                    if (i) {
                        let e = {
                            type: _.$V.EDIT,
                            message: s
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
                    r.hasErr ? c.uv.announce(ev.intl.string(ev.t.Atp7FB)) : i ? c.uv.announce(ev.intl.string(ev.t.Hym4i4)) : c.uv.announce(ev.intl.string(ev.t['0x1HBA'])),
                        eD.endEditMessage(e, r.hasErr ? void 0 : r),
                        eD.focusMessage({
                            channelId: e,
                            messageId: n
                        });
                }
            );
        },
        async suppressEmbeds(e, n) {
            await q.Z.unarchiveThreadIfNecessary(e),
                u.tn.patch({
                    url: em.ANM.MESSAGE(e, n),
                    body: { flags: em.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, n, r) {
            await q.Z.unarchiveThreadIfNecessary(e),
                u.tn.patch({
                    url: em.ANM.MESSAGE(e, n),
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
                        c.uv.announce(ev.intl.string(ev.t.RYMs7u));
                    });
                };
            r
                ? i()
                : (await q.Z.unarchiveThreadIfNecessary(e),
                  u.tn
                      .del({
                          url: em.ANM.MESSAGE(e, n),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          i();
                      }));
            let a = en.Z.getMessage(e, n);
            (null == a ? void 0 : a.type) === em.uaV.GUILD_INVITE_REMINDER && (0, G.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                h.ZP.trackWithMetadata(em.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: em.ANM.MESSAGE_CROSSPOST(e, n),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let n;
                    (n = 429 === e.status ? ev.intl.formatToPlainString(ev.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : ev.intl.string(ev.t.z2gyND)),
                        ep.Z.show({
                            title: ev.intl.string(ev.t.Vd1hs7),
                            body: n,
                            confirmText: ev.intl.string(ev.t.BddRzc)
                        });
                }),
        trackInvite: eN
    };
n.Z = eD;
