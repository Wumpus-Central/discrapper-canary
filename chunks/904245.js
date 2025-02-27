n.d(t, { Z: () => ew }), n(266796), n(411104), n(627341), n(26686), n(47120), n(230036), n(789020);
var r = n(278074),
    i = n(544891),
    o = n(780384),
    a = n(570140),
    s = n(89892),
    l = n(673750),
    c = n(367907),
    u = n(287328),
    d = n(86670),
    f = n(685736),
    _ = n(849521),
    p = n(421474),
    h = n(333023),
    g = n(960904),
    m = n(830121),
    E = n(710845),
    v = n(247206),
    b = n(38618),
    y = n(687516),
    O = n(539573),
    S = n(926526),
    I = n(826581),
    T = n(409059),
    N = n(264229),
    A = n(366980),
    C = n(779832),
    R = n(786761),
    P = n(459618),
    D = n(541288),
    w = n(3148),
    L = n(48854),
    x = n(785359),
    M = n(646504),
    k = n(64078),
    j = n(351780),
    U = n(79390),
    G = n(980463),
    B = n(328908),
    V = n(992970),
    F = n(576645),
    Z = n(317951),
    H = n(287941),
    W = n(643266),
    Y = n(617136);
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
    er = n(496675),
    ei = n(158776),
    eo = n(306680),
    ea = n(300429),
    es = n(594174);
n(626135);
var el = n(70956),
    ec = n(630388),
    eu = n(669079),
    ed = n(63063),
    ef = n(74538),
    e_ = n(709054),
    ep = n(668781),
    eh = n(981631),
    eg = n(58346),
    em = n(388032);
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
function ev(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eE(e, t, n[t]);
            });
    }
    return e;
}
function eb(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ey(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eb(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eO = new E.Z('MessageActionCreators'),
    eS = new E.Z('MessageQueue'),
    eI = !1;
class eT {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eE(this, 'completed', !1);
    }
}
function eN(e) {
    let { content: t, channelId: n, messageId: r, location: i, suggested: o = null, overrideProperties: a = {} } = e;
    (0, m.ZP)(t).forEach((e) => {
        let { type: t, code: s } = e;
        if (t === g.g.INVITE)
            eA({
                inviteKey: s,
                channelId: n,
                messageId: r,
                location: i,
                suggested: o,
                overrideProperties: a
            });
        else if (t === g.g.TEMPLATE) {
            let e = T.Z.getGuildTemplate(s);
            if (null == e || e.state === eg.Rj.RESOLVING) return;
            c.ZP.trackWithMetadata(eh.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: s,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === g.g.BUILD_OVERRIDE);
        else if (t === g.g.MANUAL_BUILD_OVERRIDE);
        else if (t === g.g.EVENT);
        else if (t === g.g.CHANNEL_LINK);
        else if (t === g.g.APP_DIRECTORY_PROFILE) (0, _.y)(s);
        else if (t === g.g.APP_DIRECTORY_STOREFRONT) (0, _.y)(s, 'storefront');
        else if (t === g.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, p.Q)(s);
            null != e && (0, _.y)(e.applicationId, 'storefront_sku');
        } else if (t === g.g.ACTIVITY_BOOKMARK);
        else if (t === g.g.EMBEDDED_ACTIVITY_INVITE);
        else if (t === g.g.GUILD_PRODUCT);
        else if (t === g.g.SERVER_SHOP);
        else if (t === g.g.QUESTS_EMBED)
            (0, Y.dA)({
                questId: s,
                event: eh.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (t === g.g.APP_OAUTH2_LINK) c.ZP.trackWithMetadata(eh.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: s });
        else if (t === g.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function eA(e) {
    let { inviteKey: t, channelId: n, messageId: r, location: i, suggested: o = null, overrideProperties: a = {} } = e,
        s = (0, N.fU)(t),
        l = ee.Z.getChannel(n);
    if (null != l) {
        let e = null;
        l.isMultiUserDM() ? (e = eh.dAT.GDM_INVITE) : l.isPrivate() || (e = eh.dAT.SERVER_INVITE);
        let n = {},
            d = et.Z.getInvite(t);
        if (null != d && d.state === eh.r2o.RESOLVED && null != d.channel) {
            var u;
            let t = d.channel;
            (n.invite_channel_id = t.id), (n.invite_guild_id = null === (u = d.guild) || void 0 === u ? void 0 : u.id), (n.invite_channel_type = t.type), null != d.inviter && (n.invite_inviter_id = d.inviter.id), null != d.target_application && (n.application_id = d.target_application.id);
            let r = J.Z.getLastActiveStream();
            if (null != r && r.channelId === t.id) {
                (e = eh.dAT.STREAM), (n.destination_user_id = r.ownerId);
                let t = (0, y.L2)(r, ei.Z);
                n.application_id = null != t ? t.id : null;
            }
        }
        null != o && ((n.is_suggested = o.isAffinitySuggestion), (n.row_num = o.rowNum), (n.num_total = o.numTotal), (n.num_affinity_connections = o.numAffinityConnections), (n.is_filtered = o.isFiltered)),
            (n = ev(
                ey(ev({}, n), {
                    location: i,
                    invite_type: e,
                    invite_code: s.baseCode,
                    guild_id: l.getGuildId(),
                    channel_id: l.id,
                    message_id: r,
                    send_type: eh.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: s.guildScheduledEventId
                }),
                a
            )),
            c.ZP.trackWithMetadata(eh.rMx.INVITE_SENT, n);
    } else {
        let e = {},
            n = et.Z.getInvite(t);
        null != n &&
            n.state === eh.r2o.RESOLVED &&
            null != n.inviter &&
            ((e.invite_inviter_id = n.inviter.id),
            null != n.target_application && (e.application_id = n.target_application.id),
            (e = ev(
                ey(ev({}, e), {
                    location: i,
                    invite_type: eh.dAT.FRIEND_INVITE,
                    invite_code: s.baseCode,
                    message_id: r,
                    send_type: eh.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: s.guildScheduledEventId
                }),
                a
            )),
            c.ZP.trackWithMetadata(eh.rMx.INVITE_SENT, e));
    }
}
function eC(e, t, n, r, i) {
    (0, eu.Q_)(e).forEach((e) => {
        let o = ee.Z.getChannel(t);
        null != o &&
            c.ZP.trackWithMetadata(eh.rMx.GIFT_CODE_SENT, {
                location: r,
                gift_code: e,
                guild_id: o.getGuildId(),
                channel_id: o.id,
                channel_type: o.type,
                message_id: n,
                automatic_send: i
            });
    });
}
function eR(e, t) {
    let n = en.Z.getMessage(e, t);
    if (null == n || n.type !== eh.uaV.REPLY) return;
    let r = K.Z.getMessageByReference(n.messageReference);
    if (!(r.state !== K.Y.LOADED || n.mentions.includes(r.message.author.id)))
        return {
            parse: Object.values(eh.hCA),
            replied_user: !1
        };
}
let eP = {
        [eh.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => em.NW.string(em.t.k1Cjqq)
        },
        [eh.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => em.NW.formatToPlainString(em.t.CTMXwM, { helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [eh.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => em.NW.string(em.t.E8nbNT)
        },
        [eh.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => em.NW.string(em.t.aRUbam)
        },
        [eh.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => em.NW.string(em.t.aRUbam)
        },
        [eh.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => em.NW.string(em.t['/meGhY'])
        },
        [eh.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => em.NW.string(em.t.Oc1Zj4)
        }
    },
    eD = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            a.Z.dispatch({
                type: 'MESSAGE_CREATE',
                channelId: e,
                message: t,
                optimistic: n,
                sendMessageOptions: r,
                isPushNotification: !1
            });
        },
        sendBotMessage(e, t, n, r) {
            null != n &&
                c.ZP.trackWithMetadata(eh.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                eD.receiveMessage(
                    e,
                    (0, w.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, w.ZP)({
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
            eD.receiveMessage(
                e,
                ey(ev({}, r), {
                    state: eh.yb.SENT,
                    channel_id: e
                }),
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, w.ZP)({
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
            eD.receiveMessage(e, ey(ev({}, n), { state: eh.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ee.Z.getChannel(e);
            null != i && (r === eh.evJ.SLOWMODE_RATE_LIMITED ? ((t = em.NW.formatToPlainString(em.t.IWntYm, { seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === eh.evJ.INVALID_MESSAGE_SEND_USER ? ((t = em.NW.formatToPlainString(em.t.CTMXwM, { helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === eh.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? em.NW.string(em.t['/jUd29']) : em.NW.string(em.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : r === eh.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = em.NW.string(em.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === eh.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = em.NW.formatToPlainString(em.t.zSG3Q0, { helpUrl: eh.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in eP ? ((n = eP[r].messageName), (t = eP[r].messageGetter())) : ((t = em.NW.formatToPlainString(em.t.CTMXwM, { helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), eD.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ee.Z.getChannel(e);
            if (null == i) return;
            let { message: o, messageName: s } = (0, r.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: em.NW.string(em.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: em.NW.string(em.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: em.NW.string(em.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                l = (0, L.r)();
            eD.sendBotMessage(e, o, s, l),
                (0, v.aP)({
                    action: v.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: l,
                    channelId: e,
                    context: n
                }),
                null != t &&
                    t.length > 0 &&
                    a.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: l,
                        channelId: e,
                        attachments: t
                    });
        },
        truncateMessages(e, t, n) {
            a.Z.dispatch({
                type: 'TRUNCATE_MESSAGES',
                channelId: e,
                truncateBottom: t,
                truncateTop: n
            });
        },
        clearChannel(e) {
            a.Z.dispatch({
                type: 'CLEAR_MESSAGES',
                channelId: e
            });
        },
        jumpToPresent(e, t) {
            eD.trackJump(e, null, 'Present');
            let n = { present: !0 };
            en.Z.hasPresent(e)
                ? a.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : eD.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            c.ZP.trackWithMetadata(
                eh.rMx.JUMP,
                ev(
                    {
                        context: n,
                        channel_id: e,
                        message_id: t
                    },
                    r
                )
            );
        },
        jumpToMessage(e) {
            let { channelId: t, messageId: n, flash: r = !1, offset: i, context: o, extraProperties: a = null, isPreload: s, returnMessageId: l, skipLocalFetch: c, jumpType: u } = e;
            return (
                'string' == typeof o && eD.trackJump(t, n, o, a),
                eD.fetchMessages({
                    channelId: t,
                    limit: eh.Z8P,
                    jump: {
                        messageId: n,
                        flash: r,
                        offset: i,
                        returnMessageId: l,
                        jumpType: u
                    },
                    isPreload: s,
                    skipLocalFetch: c
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eD.fetchMessages({
                channelId: t,
                limit: eh.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return i.tn
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
                    if (e.body.length > 0) return (0, R.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: t, before: n, after: r, limit: o, jump: l, focus: c, isPreload: u, skipLocalFetch: d, truncate: f, forICYMI: _ } = e,
                p = ee.Z.getChannel(t),
                g = b.Z.isConnectedOrOverlay(),
                m = Date.now();
            if (null != p && p.type === eh.d4z.GUILD_STORE) return !1;
            if (
                t === h.V ||
                (eO.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))),
                eD._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: o,
                    jump: l,
                    focus: c,
                    truncate: f
                }))
            )
                return;
            X.Z.fetchMessages.recordStart();
            let E = null != l ? l : void 0;
            null == E && null != c && (E = ev({}, c));
            let v = s.Z.getOrCreate(t).loadStart(E);
            s.Z.commit(v), a.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let y = null == E ? void 0 : E.messageId,
                O = new eT();
            return (
                d || this.fetchLocalMessages(t, n, r, o, O),
                i.tn
                    .get({
                        url: eh.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: o,
                            around: y,
                            preload: u
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            X.Z.fetchMessages.recordEnd(),
                            X.Z.dispatchMessages.measure(() => {
                                let i = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != y || (i.length === o && (s || u)),
                                    p = null != y || (c && i.length === o);
                                if (null != y) {
                                    let e = Math.floor(o / 2),
                                        n = e + (o % 2),
                                        r = [
                                            y,
                                            ...i.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(e_.default.compare)
                                            .indexOf(y);
                                    if ((r < n - 1 && (d = !1), i.length - r < e && (p = !1), p && i.length > 0)) {
                                        let e = eo.ZP.lastMessageId(t);
                                        i[0].id === e && (p = !1);
                                    }
                                }
                                eO.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(c)),
                                    O.markComplete(),
                                    a.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: t,
                                        messages: i,
                                        isBefore: s,
                                        isAfter: c,
                                        hasMoreBefore: d,
                                        hasMoreAfter: p,
                                        limit: o,
                                        jump: l,
                                        forICYMI: _,
                                        isStale: !g || b.Z.lastTimeConnectedChanged() >= m,
                                        truncate: f
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eO.log('Failed to fetch messages for '.concat(t)),
                            a.Z.dispatch({
                                type: 'LOAD_MESSAGES_FAILURE',
                                channelId: t
                            }),
                            !1
                        )
                    )
            );
        },
        async fetchLocalMessages(e, t, n, r, i) {
            let o = ee.Z.getBasicChannel(e),
                l = s.Z.getOrCreate(e),
                c = u.Z.database();
            if (null == c || null == o || null != t || null != n) {
                X.Z.addLocalMessages(e, -1);
                return;
            }
            if (l.ready && !l.cached) {
                X.Z.addLocalMessages(e, -2);
                return;
            }
            let _ = await (0, d.dI)(() => f.ZP.load(c, e, r));
            if (null == _) {
                X.Z.addLocalMessages(e, -3);
                return;
            }
            if ((eO.log('fetched '.concat(_.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), X.Z.addLocalMessages(e, _.messages.length), !i.completed && _.messages.length > 0)) {
                let t = _.messages.length >= r && _.connectionId === b.Z.lastTimeConnectedChanged();
                a.Z.dispatch({
                    type: 'LOCAL_MESSAGES_LOADED',
                    guildId: o.guild_id,
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
            let r = ee.Z.getBasicChannel(e),
                i = u.Z.database();
            if (null == i || null == r) return;
            let o = s.Z.getOrCreate(e);
            if (o.hasMoreAfter) return;
            let l = await (0, d.dI)(() => f.ZP.load(i, e, t));
            if (null == l) return;
            let c = null === (n = (o = s.Z.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
                _ = null == c ? l.messages : l.messages.filter((e) => e_.default.compare(e.id, c) > 0);
            eO.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(_.length, ' are new')),
                0 !== _.length &&
                    a.Z.dispatch({
                        type: 'LOCAL_MESSAGES_LOADED',
                        guildId: r.guild_id,
                        channelId: e,
                        users: l.users,
                        members: l.members,
                        messages: _,
                        stale: !0
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: o, focus: s, truncate: l } = e,
                c = en.Z.getMessages(t);
            if (c.cached || !c.ready) return !1;
            if ((null == o ? void 0 : o.messageId) != null || (null == s ? void 0 : s.messageId) != null) {
                if ((null == o ? void 0 : o.messageId) != null && c.has(o.messageId, !1))
                    return (
                        a.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: o,
                            limit: i,
                            truncate: l
                        }),
                        !0
                    );
                if ((null == s ? void 0 : s.messageId) != null) {
                    if (c.has(s.messageId, !1))
                        return (
                            a.Z.dispatch({
                                type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                                channelId: t,
                                focus: s,
                                limit: i,
                                truncate: l
                            }),
                            !0
                        );
                    o = ev({}, s);
                }
                let e = (null == o ? void 0 : o.messageId) != null ? e_.default.extractTimestamp(null == o ? void 0 : o.messageId) : 0,
                    n = c.first(),
                    r = c.last();
                if ((!c.hasMoreBefore && null != n && e_.default.extractTimestamp(n.id) >= e) || (!c.hasMoreAfter && null != r && e_.default.extractTimestamp(r.id) <= e) || (null != n && null != r && e_.default.extractTimestamp(n.id) < e && e_.default.extractTimestamp(r.id) > e))
                    return (
                        a.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: o,
                            limit: eh.Z8P
                        }),
                        !0
                    );
            } else if (null != n && c.hasBeforeCached(n))
                return (
                    a.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: t,
                        before: n,
                        limit: i,
                        truncate: l
                    }),
                    !0
                );
            else if (null != r && c.hasAfterCached(r))
                return (
                    a.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: t,
                        after: r,
                        limit: i,
                        truncate: l
                    }),
                    !0
                );
            return !1;
        },
        async sendMessage(e, t) {
            var n;
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (t.reaction) return Promise.resolve();
            let o = await (0, W.Z)(e);
            if (null != o) return eD.sendMessage(o, t, r, i);
            let a = () => eD._sendMessage(e, t, i),
                s = C.ZP.backgroundify(a, void 0),
                l = null !== (n = i.nonce) && void 0 !== n ? n : (0, L.r)();
            return ((i = ey(ev({}, i), { nonce: l })), P.Z.recordMessageSendAttempt(e, l), en.Z.isReady(e))
                ? s()
                : r && e !== h.V
                  ? (eS.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        en.Z.whenReady(e, () => {
                            eS.info('Channel '.concat(e, ' is ready for sending now.')), s().then(t, n);
                        });
                    }))
                  : s();
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
            let { channelId: t, content: n, isGif: r, command: i, uploads: o, confettiPotionEmoji: a } = e;
            return null != a && (0, F.tv)(n, r, i, o)
                ? {
                      confettiPotionData: {
                          emoji: a,
                          callback: () => (0, B.Hb)(t)
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
            let t = eD.getSendMessageOptionsForReply(e.pendingReply),
                n = eD.getSendMessageOptionsForConfettiPotion(ev({}, e)),
                r = eD.getSendMessageOptionsForStickers(ev({}, e)),
                i = eD.getSendMessageOptionsForScheduledMessage(ev({}, e));
            return ev({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let o = (0, A.Z)(t);
            return (
                null != i && (o = ''.concat(i, '\n').concat(o)),
                eD._sendMessage(
                    e,
                    {
                        content: o,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    },
                    {
                        location: n,
                        suggestedInvite: null != r ? r : void 0
                    }
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            eD._sendMessage(
                e,
                {
                    content: t,
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    location: n,
                    suggestedInvite: null != r ? r : void 0
                }
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eD._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                ey(ev({}, r), { stickerIds: t })
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: o } = n;
            return i.tn
                .post({
                    url: eh.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: o,
                        message_reference: r
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (n) => (
                        D.Z.donateSentMessage(n.body.content, e),
                        eD.receiveMessage(e, n.body),
                        a.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eO.log('Failed to send greeting'),
                            429 !== t.status && eD.sendClydeError(e, t.body.code),
                            a.Z.dispatch({
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
            return eD._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                ey(ev({}, n), { poll: t })
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !ef.ZP.canUseAnimatedEmojis(t) ? ((r = em.NW.string(em.t.msFJy8)), (i = 'INVALID_ANIMATED_EMOJI_BODY')) : er.Z.canWithPartialContext(eh.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((r = em.NW.string(em.t.FzugNj)), (i = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((r = em.NW.string(em.t.Q87rIy)), (i = 'INVALID_EXTERNAL_EMOJI_BODY')),
                {
                    errorMessage: r,
                    errorMessageName: i
                }
            );
        },
        _sendMessage(e, t, n) {
            var r, i, o;
            let s = (0, W.Z)(e);
            if (null != s)
                return (
                    eS.info('Converting channel to a private channel'),
                    s.then((e) => {
                        eS.info('Finished converting channel to a private channel'), eD._sendMessage(e, t, n);
                    })
                );
            let c = t.content,
                { invalidEmojis: u, validNonShortcutEmojis: d, tts: f = !1 } = t,
                { activityAction: _, location: p, suggestedInvite: h, stickerIds: g, confettiPotionData: m, messageReference: E, allowedMentions: v, poll: b, contentInventoryEntry: y } = n,
                T = null !== (i = n.flags) && void 0 !== i ? i : 0,
                [N, A] = (0, q.Z)(c);
            N && ((c = A), (T = (0, ec.pj)(T, eh.iLy.SUPPRESS_NOTIFICATIONS)));
            let C = (null === (r = n.messageReference) || void 0 === r ? void 0 : r.type) === eh.Uvt.FORWARD;
            if ('' === c && null == _ && null == g && null == b && null == y && !C) return Promise.resolve();
            let R = null != E ? eh.uaV.REPLY : eh.uaV.DEFAULT,
                M = null !== (o = n.nonce) && void 0 !== o ? o : (0, L.r)(),
                B = M;
            if (!1 !== n.eagerDispatch) {
                let t = (0, w.ZP)({
                    channelId: e,
                    content: c,
                    tts: f,
                    type: R,
                    messageReference: E,
                    allowedMentions: v,
                    flags: 0 !== T ? T : void 0,
                    nonce: M,
                    poll: (0, U.x9)(b)
                });
                (0, k.EL)(e, t.id), null != g && (t.sticker_items = g.map((e) => z.Z.getStickerById(e)).filter((e) => null != e)), eD.receiveMessage(e, t, !0, n);
            }
            if (!eI && null != u && u.length > 0) {
                eI = !0;
                let t = es.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eD.validateMessage(u, t, e);
                eD.sendBotMessage(e, n, r);
            }
            let Y = {
                type: l.$V.SEND,
                message: {
                    channelId: e,
                    content: c,
                    nonce: M,
                    tts: f,
                    message_reference: E,
                    allowed_mentions: v,
                    flags: T
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
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (Y.message.application_id = n.application_id), (Y.message.activity = t);
                }
            }
            return (
                null != b && (Y.message.poll = b),
                null != g && (Y.message.sticker_ids = g),
                j.Z.isEnabled() && (Y.message.has_poggermode_enabled = !0),
                null != y && (Y.message.content_inventory_entry = y),
                null != m && ((Y.message.confetti_potion = (0, F.vY)(m)), m.callback()),
                new Promise((t, r) => {
                    let i = Date.now(),
                        o = l.ZP.length,
                        s = Math.floor(10000 * Math.random());
                    eS.info('Queueing message to be sent LogId:'.concat(s)),
                        l.ZP.enqueue(
                            Y,
                            (s) => {
                                let u = Date.now() - i;
                                if (s.ok) {
                                    D.Z.donateSentMessage(c, e),
                                        eD.receiveMessage(e, s.body, !0, {
                                            sendAnalytics: {
                                                duration: u,
                                                queueSize: o
                                            },
                                            poll: b
                                        });
                                    let r = (0, F.ZC)(s.body);
                                    null != r &&
                                        ((0, G.gA)(Z.D1),
                                        (0, H.I)(
                                            {
                                                name: r.name,
                                                id: r.id
                                            },
                                            void 0,
                                            !0,
                                            V.LL.MessageSent
                                        ));
                                    let i = e_.default.cast(e),
                                        l = I.Z.getRequest(i);
                                    if (null != l) {
                                        let { guildId: t, userId: n, applicationStatus: r } = l;
                                        (0, S.pL)({
                                            guildId: t,
                                            channelId: e,
                                            messageId: s.body.id,
                                            joinRequestStatus: r,
                                            joinRequestUserId: n
                                        });
                                    }
                                    P.Z.recordMessageSendApiResponse(M),
                                        a.Z.dispatch({
                                            type: 'SLOWMODE_RESET_COOLDOWN',
                                            slowmodeType: ea.S.SendMessage,
                                            channelId: e
                                        }),
                                        a.Z.dispatch({
                                            type: 'EMOJI_TRACK_USAGE',
                                            emojiUsed: d
                                        }),
                                        a.Z.dispatch({
                                            type: 'STICKER_TRACK_USAGE',
                                            stickerIds: g
                                        }),
                                        a.Z.dispatch({
                                            type: 'LOCAL_MESSAGE_CREATE',
                                            message: {
                                                channel_id: e,
                                                author: es.default.getCurrentUser()
                                            }
                                        }),
                                        eN({
                                            content: c,
                                            channelId: e,
                                            messageId: s.body.id,
                                            location: null != p ? p : 'chat_input',
                                            suggested: h
                                        }),
                                        eC(c, e, s.body.id, null != p ? p : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                        t(s);
                                } else {
                                    var f;
                                    eO.log('Failed to send message', {
                                        hasErr: s.hasErr,
                                        status: s.status,
                                        code: null === (f = s.body) || void 0 === f ? void 0 : f.code,
                                        error: s.err
                                    });
                                    let t = !1;
                                    if (s.hasErr) 'ABORTED' === s.err.code && (t = !0);
                                    else if (s.status >= 400 && s.status < 500 && s.body) {
                                        if (s.body.code === eh.evJ.SLOWMODE_RATE_LIMITED) {
                                            let t = s.body.retry_after;
                                            null != t &&
                                                t > 0 &&
                                                a.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: e,
                                                    slowmodeType: ea.S.SendMessage,
                                                    cooldownMs: t * el.Z.Millis.SECOND
                                                });
                                        } else
                                            O.U8.has(s.body.code)
                                                ? a.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                      messageData: Y,
                                                      errorResponseBody: {
                                                          code: s.body.code,
                                                          message: s.body.message
                                                      }
                                                  })
                                                : s.body.code === eh.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                                  ? a.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                                  : null != b || C || null != y || eD.sendClydeError(e, s.body.code);
                                    }
                                    t
                                        ? eD.deleteMessage(e, B, !0)
                                        : (a.Z.dispatch({
                                              type: 'MESSAGE_SEND_FAILED',
                                              messageId: B,
                                              channelId: e,
                                              shouldNotify: !n.doNotNotifyOnError
                                          }),
                                          (0, x.x)({
                                              failureCode: s.hasErr ? void 0 : s.status,
                                              errorMessage: s.hasErr ? s.err.message : void 0
                                          }),
                                          l.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                              eO.log('Cancelling pending message', e.nonce),
                                                  a.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED',
                                                      messageId: e.nonce,
                                                      channelId: e.channelId
                                                  });
                                          })),
                                        r(s);
                                }
                            },
                            s
                        );
                })
            );
        },
        startEditMessage(e, t, n, r) {
            a.Z.dispatch({
                type: 'MESSAGE_START_EDIT',
                channelId: e,
                messageId: t,
                content: n,
                source: r
            });
        },
        updateEditMessage(e, t, n) {
            a.Z.dispatch({
                type: 'MESSAGE_UPDATE_EDIT',
                channelId: e,
                textValue: t,
                richValue: n
            });
        },
        endEditMessage(e, t) {
            a.Z.dispatch({
                type: 'MESSAGE_END_EDIT',
                channelId: e,
                response: t
            });
        },
        async editMessage(e, t, n) {
            let { content: r } = n;
            await Q.Z.unarchiveThreadIfNecessary(e);
            let i = eR(e, t),
                s = {
                    channelId: e,
                    messageId: t,
                    content: r,
                    allowed_mentions: i
                };
            l.ZP.enqueue(
                {
                    type: l.$V.EDIT,
                    message: s
                },
                (n) => {
                    let r = !n.hasErr && O.U8.has(n.body.code);
                    if (r) {
                        let e = {
                            type: l.$V.EDIT,
                            message: s
                        };
                        a.Z.dispatch({
                            type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message
                            }
                        });
                    }
                    n.hasErr ? o.uv.announce(em.NW.string(em.t.Atp7FB)) : r ? o.uv.announce(em.NW.string(em.t.Hym4i4)) : o.uv.announce(em.NW.string(em.t['0x1HBA'])),
                        eD.endEditMessage(e, n.hasErr ? void 0 : n),
                        eD.focusMessage({
                            channelId: e,
                            messageId: t
                        });
                }
            );
        },
        async suppressEmbeds(e, t) {
            await Q.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eh.ANM.MESSAGE(e, t),
                    body: { flags: eh.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, t, n) {
            await Q.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eh.ANM.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    a.Z.dispatch({
                        type: 'MESSAGE_DELETE',
                        id: t,
                        channelId: e
                    }).then(() => {
                        o.uv.announce(em.NW.string(em.t.RYMs7u));
                    });
                };
            n
                ? r()
                : (await Q.Z.unarchiveThreadIfNecessary(e),
                  i.tn
                      .del({
                          url: eh.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          r();
                      }));
            let s = en.Z.getMessage(e, t);
            (null == s ? void 0 : s.type) === eh.uaV.GUILD_INVITE_REMINDER && (0, M.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                c.ZP.trackWithMetadata(eh.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            a.Z.dispatch({
                type: 'MESSAGE_REVEAL',
                channelId: e,
                messageId: t
            });
        },
        crosspostMessage: (e, t) =>
            i.tn
                .post({
                    url: eh.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let t;
                    (t = 429 === e.status ? em.NW.formatToPlainString(em.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : em.NW.string(em.t.z2gyND)),
                        ep.Z.show({
                            title: em.NW.string(em.t.Vd1hs7),
                            body: t,
                            confirmText: em.NW.string(em.t.BddRzc)
                        });
                }),
        trackInvite: eA
    },
    ew = eD;
