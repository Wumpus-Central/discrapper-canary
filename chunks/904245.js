n.d(t, { Z: () => eM }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
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
    _ = n(421474),
    p = n(914498),
    h = n(333023),
    m = n(960904),
    g = n(830121),
    E = n(710845),
    b = n(247206),
    y = n(38618),
    O = n(859487),
    v = n(687516),
    I = n(539573),
    S = n(926526),
    T = n(826581),
    A = n(409059),
    N = n(264229),
    C = n(413605),
    P = n(366980),
    R = n(467512),
    w = n(779832),
    D = n(786761),
    L = n(459618),
    x = n(541288),
    k = n(3148),
    M = n(48854),
    j = n(785359),
    U = n(646504),
    G = n(64078),
    B = n(351780),
    F = n(79390),
    V = n(980463),
    Z = n(328908),
    H = n(992970),
    Y = n(576645),
    W = n(317951),
    K = n(287941),
    z = n(643266),
    q = n(617136);
n(807092);
var Q = n(869765),
    X = n(926491),
    J = n(467798),
    $ = n(346479),
    ee = n(218543),
    et = n(199902),
    en = n(314897),
    er = n(592125);
n(323873);
var ei = n(701190),
    eo = n(375954),
    ea = n(496675),
    es = n(158776),
    el = n(306680),
    ec = n(300429),
    eu = n(594174);
n(626135);
var ed = n(70956),
    ef = n(630388),
    e_ = n(669079),
    ep = n(63063),
    eh = n(74538),
    em = n(709054),
    eg = n(861990),
    eE = n(668781),
    eb = n(981631),
    ey = n(260539),
    eO = n(388032);
function ev(e, t, n) {
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
function eI(e) {
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
                ev(e, t, n[t]);
            });
    }
    return e;
}
function eS(e, t) {
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
function eT(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eS(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eA = new E.Z('MessageActionCreators'),
    eN = new E.Z('MessageQueue'),
    eC = !1;
class eP {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        ev(this, 'completed', !1);
    }
}
function eR(e) {
    let { content: t, channelId: n, messageId: r, location: i, suggested: o = null, overrideProperties: a = {} } = e,
        s = en.default.getId();
    (0, g.ZP)(t).forEach((e) => {
        let { type: t, code: l } = e;
        if (t === m.g.INVITE)
            ew({
                inviteKey: l,
                channelId: n,
                messageId: r,
                location: i,
                suggested: o,
                overrideProperties: a
            });
        else if (t === m.g.TEMPLATE) {
            let e = A.Z.getGuildTemplate(l);
            if (null == e || e.state === ey.Rj.RESOLVING) return;
            c.ZP.trackWithMetadata(eb.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: l,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === m.g.BUILD_OVERRIDE);
        else if (t === m.g.MANUAL_BUILD_OVERRIDE);
        else if (t === m.g.EVENT);
        else if (t === m.g.CHANNEL_LINK);
        else if (t === m.g.APP_DIRECTORY_PROFILE) (0, O.y)(l), (0, p.z$)(l, p.Un.APP_DISCOVERY, s);
        else if (t === m.g.APP_DIRECTORY_STOREFRONT) (0, O.y)(l, 'storefront');
        else if (t === m.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, _.Q)(l);
            null != e && (0, O.y)(e.applicationId, 'storefront_sku');
        } else if (t === m.g.ACTIVITY_BOOKMARK) (0, p.z$)(l, p.Un.ACTIVITY, s);
        else if (t === m.g.EMBEDDED_ACTIVITY_INVITE) (0, p.z$)(l, p.Un.ACTIVITY_INVITE, s);
        else if (t === m.g.GUILD_PRODUCT);
        else if (t === m.g.SERVER_SHOP);
        else if (t === m.g.QUESTS_EMBED)
            (0, q.dA)({
                questId: l,
                event: eb.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (t === m.g.APP_OAUTH2_LINK) c.ZP.trackWithMetadata(eb.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: l }), (0, p.z$)(l, p.Un.OAUTH, s);
        else if (t === m.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function ew(e) {
    var t, n;
    let { inviteKey: r, channelId: i, messageId: o, location: a, suggested: s = null, overrideProperties: l = {} } = e,
        u = en.default.getId(),
        d = ei.Z.getInvite(r),
        f = (0, N.fU)(r),
        _ = null != d && (0, C.P1)(d),
        h = null == d || null == (t = d.target_application) ? void 0 : t.id;
    null != h && _ && (0, p.z$)(h, p.Un.ACTIVITY_INVITE, u);
    let m = er.Z.getChannel(i);
    if (null != m) {
        let e = null;
        m.isMultiUserDM() ? (e = eb.dAT.GDM_INVITE) : m.isPrivate() || (e = eb.dAT.SERVER_INVITE);
        let t = {};
        if (null != d && d.state === eb.r2o.RESOLVED && null != d.channel) {
            let r = d.channel;
            (t.invite_channel_id = r.id), (t.invite_guild_id = null == (n = d.guild) ? void 0 : n.id), (t.invite_channel_type = r.type), null != d.inviter && (t.invite_inviter_id = d.inviter.id), null != d.target_application && (t.application_id = d.target_application.id);
            let i = et.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = eb.dAT.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, v.L2)(i, es.Z);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s && ((t.is_suggested = s.isAffinitySuggestion), (t.row_num = s.rowNum), (t.num_total = s.numTotal), (t.num_affinity_connections = s.numAffinityConnections), (t.is_filtered = s.isFiltered)),
            (t = eI(
                eT(eI({}, t), {
                    location: a,
                    invite_type: e,
                    invite_code: f.baseCode,
                    guild_id: m.getGuildId(),
                    channel_id: m.id,
                    message_id: o,
                    send_type: eb.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(eb.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != d &&
            d.state === eb.r2o.RESOLVED &&
            null != d.inviter &&
            ((e.invite_inviter_id = d.inviter.id),
            null != d.target_application && (e.application_id = d.target_application.id),
            (e = eI(
                eT(eI({}, e), {
                    location: a,
                    invite_type: eb.dAT.FRIEND_INVITE,
                    invite_code: f.baseCode,
                    message_id: o,
                    send_type: eb.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(eb.rMx.INVITE_SENT, e));
    }
}
function eD(e, t, n, r, i) {
    (0, e_.Q_)(e).forEach((e) => {
        let o = er.Z.getChannel(t);
        null != o &&
            c.ZP.trackWithMetadata(eb.rMx.GIFT_CODE_SENT, {
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
function eL(e, t) {
    let n = eo.Z.getMessage(e, t);
    if (null == n || n.type !== eb.uaV.REPLY) return;
    let r = Q.Z.getMessageByReference(n.messageReference);
    if (r.state === Q.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eb.hCA),
            replied_user: !1
        };
}
let ex = {
        [eb.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eO.intl.string(eO.t.k1Cjqq)
        },
        [eb.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eO.intl.formatToPlainString(eO.t.CTMXwM, { helpUrl: ep.Z.getArticleURL(eb.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [eb.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => eO.intl.string(eO.t.E8nbNT)
        },
        [eb.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eO.intl.string(eO.t.aRUbam)
        },
        [eb.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eO.intl.string(eO.t.aRUbam)
        },
        [eb.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => eO.intl.string(eO.t['/meGhY'])
        },
        [eb.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => eO.intl.string(eO.t.Oc1Zj4)
        }
    },
    ek = {
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
                c.ZP.trackWithMetadata(eb.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                ek.receiveMessage(
                    e,
                    (0, k.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, k.ZP)({
                channelId: e,
                nonce: n,
                type: eb.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eb.iLy.EPHEMERAL,
                author: {
                    id: eb.LAt,
                    username: 'Nitro Notification',
                    discriminator: eb.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            ek.receiveMessage(
                e,
                eT(eI({}, r), {
                    state: eb.yb.SENT,
                    channel_id: e
                }),
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, k.ZP)({
                channelId: e,
                type: eb.uaV.GIFTING_PROMPT,
                content: '',
                flags: eb.iLy.EPHEMERAL,
                author: {
                    id: eb.LAt,
                    username: 'Gifting Prompt',
                    discriminator: eb.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: t
            });
            ek.receiveMessage(e, eT(eI({}, n), { state: eb.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = er.Z.getChannel(e);
            null != i && (r === eb.evJ.SLOWMODE_RATE_LIMITED ? ((t = eO.intl.formatToPlainString(eO.t.IWntYm, { seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === eb.evJ.INVALID_MESSAGE_SEND_USER ? ((t = eO.intl.formatToPlainString(eO.t.CTMXwM, { helpUrl: ep.Z.getArticleURL(eb.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === eb.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? eO.intl.string(eO.t['/jUd29']) : eO.intl.string(eO.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : r === eb.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = eO.intl.string(eO.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === eb.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = eO.intl.formatToPlainString(eO.t.zSG3Q0, { helpUrl: eb.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in ex ? ((n = ex[r].messageName), (t = ex[r].messageGetter())) : ((t = eO.intl.formatToPlainString(eO.t.CTMXwM, { helpUrl: ep.Z.getArticleURL(eb.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), ek.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = er.Z.getChannel(e);
            if (null == i) return;
            let { message: o, messageName: s } = (0, r.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: eO.intl.string(eO.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: eO.intl.string(eO.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: eO.intl.string(eO.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                l = (0, M.r)();
            ek.sendBotMessage(e, o, s, l),
                (0, b.aP)({
                    action: b.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            ek.trackJump(e, null, 'Present');
            let n = { present: !0 };
            eo.Z.hasPresent(e)
                ? a.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : ek.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            c.ZP.trackWithMetadata(
                eb.rMx.JUMP,
                eI(
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
                'string' == typeof o && ek.trackJump(t, n, o, a),
                ek.fetchMessages({
                    channelId: t,
                    limit: eb.Z8P,
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
            ek.fetchMessages({
                channelId: t,
                limit: eb.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return i.tn
                .get({
                    url: eb.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, D.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: t, before: n, after: r, limit: o, jump: l, focus: c, isPreload: u, skipLocalFetch: d, truncate: f, forICYMI: _ } = e,
                p = er.Z.getChannel(t),
                m = y.Z.isConnectedOrOverlay(),
                g = Date.now();
            if (null != p && p.type === eb.d4z.GUILD_STORE) return !1;
            if (
                t === h.V ||
                (eA.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))),
                ek._tryFetchMessagesCached({
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
            ee.Z.fetchMessages.recordStart();
            let E = null != l ? l : void 0;
            null == E && null != c && (E = eI({}, c));
            let b = s.Z.getOrCreate(t).loadStart(E);
            s.Z.commit(b), a.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let O = null == E ? void 0 : E.messageId,
                v = new eP();
            return (
                d || this.fetchLocalMessages(t, n, r, o, v),
                i.tn
                    .get({
                        url: eb.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: o,
                            around: O,
                            preload: u
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            ee.Z.fetchMessages.recordEnd(),
                            ee.Z.dispatchMessages.measure(() => {
                                let i = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != O || (i.length === o && (s || u)),
                                    p = null != O || (c && i.length === o);
                                if (null != O) {
                                    let e = Math.floor(o / 2),
                                        n = e + (o % 2),
                                        r = [
                                            O,
                                            ...i.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(em.default.compare)
                                            .indexOf(O);
                                    if ((r < n - 1 && (d = !1), i.length - r < e && (p = !1), p && i.length > 0)) {
                                        let e = el.ZP.lastMessageId(t);
                                        i[0].id === e && (p = !1);
                                    }
                                }
                                eA.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(c)),
                                    v.markComplete(),
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
                                        isStale: !m || y.Z.lastTimeConnectedChanged() >= g,
                                        truncate: f
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eA.log('Failed to fetch messages for '.concat(t)),
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
            let o = er.Z.getBasicChannel(e),
                l = s.Z.getOrCreate(e),
                c = u.Z.database();
            if (null == c || null == o || null != t || null != n) return void ee.Z.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void ee.Z.addLocalMessages(e, -2);
            let _ = await (0, d.dI)(() => f.ZP.load(c, e, r));
            if (null == _) return void ee.Z.addLocalMessages(e, -3);
            if ((eA.log('fetched '.concat(_.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), ee.Z.addLocalMessages(e, _.messages.length), !i.completed && _.messages.length > 0)) {
                let t = _.messages.length >= r && _.connectionId === y.Z.lastTimeConnectedChanged();
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
            let r = er.Z.getBasicChannel(e),
                i = u.Z.database();
            if (null == i || null == r) return;
            let o = s.Z.getOrCreate(e);
            if (o.hasMoreAfter) return;
            let l = await (0, d.dI)(() => f.ZP.load(i, e, t));
            if (null == l) return;
            let c = null == (n = (o = s.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                _ = null == c ? l.messages : l.messages.filter((e) => em.default.compare(e.id, c) > 0);
            eA.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(_.length, ' are new')),
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
                c = eo.Z.getMessages(t);
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
                if ((null == s ? void 0 : s.messageId) != null)
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
                    else o = eI({}, s);
                let e = (null == o ? void 0 : o.messageId) != null ? em.default.extractTimestamp(null == o ? void 0 : o.messageId) : 0,
                    n = c.first(),
                    r = c.last();
                if ((!c.hasMoreBefore && null != n && em.default.extractTimestamp(n.id) >= e) || (!c.hasMoreAfter && null != r && em.default.extractTimestamp(r.id) <= e) || (null != n && null != r && em.default.extractTimestamp(n.id) < e && em.default.extractTimestamp(r.id) > e))
                    return (
                        a.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: o,
                            limit: eb.Z8P
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
            let o = await (0, z.Z)(e);
            if (null != o) return ek.sendMessage(o, t, r, i);
            let a = () => ek._sendMessage(e, t, i),
                s = w.ZP.backgroundify(a, void 0),
                l = null != (n = i.nonce) ? n : (0, M.r)();
            return ((i = eT(eI({}, i), { nonce: l })), L.Z.recordMessageSendAttempt(e, l), eo.Z.isReady(e))
                ? s()
                : r && e !== h.V
                  ? (eN.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        eo.Z.whenReady(e, () => {
                            eN.info('Channel '.concat(e, ' is ready for sending now.')), s().then(t, n);
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
                          guild_id: null != (t = e.channel.getGuildId()) ? t : void 0,
                          channel_id: e.channel.id,
                          message_id: e.message.id
                      },
                      allowedMentions: e.shouldMention
                          ? void 0
                          : {
                                parse: Object.values(eb.hCA),
                                replied_user: !1
                            }
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: o, confettiPotionEmoji: a } = e;
            return null != a && (0, Y.tv)(n, r, i, o)
                ? {
                      confettiPotionData: {
                          emoji: a,
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
            let t = ek.getSendMessageOptionsForReply(e.pendingReply),
                n = ek.getSendMessageOptionsForConfettiPotion(eI({}, e)),
                r = ek.getSendMessageOptionsForStickers(eI({}, e)),
                i = ek.getSendMessageOptionsForScheduledMessage(eI({}, e));
            return eI({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let o = (0, P.Z)(t);
            return (
                null != i && (o = ''.concat(i, '\n').concat(o)),
                ek._sendMessage(
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
            ek._sendMessage(
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
            return ek._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                eT(eI({}, r), { stickerIds: t })
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: o } = n;
            return i.tn
                .post({
                    url: eb.ANM.MESSAGES_GREET(e),
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
                        x.Z.donateSentMessage(n.body.content, e),
                        ek.receiveMessage(e, n.body),
                        a.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eA.log('Failed to send greeting'),
                            429 !== t.status && ek.sendClydeError(e, t.body.code),
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
            return ek._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                eT(eI({}, n), { poll: t })
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eh.ZP.canUseAnimatedEmojis(t) ? ((r = eO.intl.string(eO.t.msFJy8)), (i = 'INVALID_ANIMATED_EMOJI_BODY')) : ea.Z.canWithPartialContext(eb.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((r = eO.intl.string(eO.t.FzugNj)), (i = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((r = eO.intl.string(eO.t.Q87rIy)), (i = 'INVALID_EXTERNAL_EMOJI_BODY')),
                {
                    errorMessage: r,
                    errorMessageName: i
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, o;
            let s,
                c = (0, z.Z)(e);
            if (null != c)
                return (
                    eN.info('Converting channel to a private channel'),
                    c.then((e) => {
                        eN.info('Finished converting channel to a private channel'), ek._sendMessage(e, t, n);
                    })
                );
            let u = t.content,
                { invalidEmojis: d, validNonShortcutEmojis: f, tts: _ = !1 } = t,
                { activityAction: p, location: h, suggestedInvite: m, stickerIds: g, confettiPotionData: E, messageReference: b, allowedMentions: y, poll: O, contentInventoryEntry: v, attachments: A, attachmentsToUpload: N, onAttachmentUploadError: C } = n,
                P = null != (i = n.flags) ? i : 0,
                [w, D] = (0, J.Z)(u);
            w && ((u = D), (P = (0, ef.pj)(P, eb.iLy.SUPPRESS_NOTIFICATIONS)));
            let U = !1,
                Z = (null == (r = n.messageReference) ? void 0 : r.type) === eb.Uvt.FORWARD;
            if ('' === u && null == p && null == g && null == O && null == v && !Z && (null == A || 0 === A.length))
                if (null == N || !(N.length > 0)) return Promise.resolve();
                else U = !0;
            let q = null != b ? eb.uaV.REPLY : eb.uaV.DEFAULT,
                Q = null != (o = n.nonce) ? o : (0, M.r)(),
                $ = Q;
            if (
                (!1 !== n.eagerDispatch &&
                    ((s = (0, k.ZP)({
                        channelId: e,
                        content: u,
                        tts: _,
                        type: q,
                        messageReference: b,
                        allowedMentions: y,
                        flags: 0 !== P ? P : void 0,
                        nonce: Q,
                        poll: (0, F.x9)(O)
                    })),
                    (0, G.EL)(e, s.id),
                    null != g && (s.sticker_items = g.map((e) => X.Z.getStickerById(e)).filter((e) => null != e)),
                    ek.receiveMessage(e, s, !0, n)),
                !eC && null != d && d.length > 0)
            ) {
                eC = !0;
                let t = eu.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = ek.validateMessage(d, t, e);
                ek.sendBotMessage(e, n, r);
            }
            let ee = {
                type: l.$V.SEND,
                message: {
                    channelId: e,
                    content: u,
                    nonce: Q,
                    tts: _,
                    message_reference: b,
                    allowed_mentions: y,
                    flags: P
                }
            };
            if (null != p) {
                let e,
                    t = null == p ? void 0 : p.activity.session_id;
                if (null != (e = p.type === eb.mFx.JOIN_REQUEST || null != t ? t : en.default.getSessionId())) {
                    let t = {
                            type: p.type,
                            session_id: e
                        },
                        { activity: n } = p;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (ee.message.application_id = n.application_id), (ee.message.activity = t);
                }
            }
            if ((null != O && (ee.message.poll = O), null != g && (ee.message.sticker_ids = g), B.Z.isEnabled() && (ee.message.has_poggermode_enabled = !0), null != v && (ee.message.content_inventory_entry = v), null != E && ((ee.message.confetti_potion = (0, Y.vY)(E)), E.callback()), null != A && A.length > 0 && (ee.message.attachments = A), null != N && N.length > 0))
                try {
                    let t = await (0, R.c)({
                        channelId: e,
                        nonce: Q,
                        items: N,
                        message: s
                    });
                    if (U && (null == t || 0 === t.length)) return;
                    null != t && (ee.message.attachments = t.map((e, t) => (0, eg.B)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n } = r;
                    (0, j.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg
                    }),
                        null == C || C(e, t, n);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    o = l.ZP.length,
                    s = Math.floor(10000 * Math.random());
                eN.info('Queueing message to be sent LogId:'.concat(s)),
                    l.ZP.enqueue(
                        ee,
                        (s) => {
                            let c = Date.now() - i;
                            if (s.ok) {
                                x.Z.donateSentMessage(u, e),
                                    ek.receiveMessage(e, s.body, !0, {
                                        sendAnalytics: {
                                            duration: c,
                                            queueSize: o
                                        },
                                        poll: O
                                    });
                                let r = (0, Y.ZC)(s.body);
                                null != r &&
                                    ((0, V.gA)(W.D1),
                                    (0, K.I)(
                                        {
                                            name: r.name,
                                            id: r.id
                                        },
                                        void 0,
                                        !0,
                                        H.LL.MessageSent
                                    ));
                                let i = em.default.cast(e),
                                    l = T.Z.getRequest(i);
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
                                L.Z.recordMessageSendApiResponse(Q),
                                    a.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: ec.S.SendMessage,
                                        channelId: e
                                    }),
                                    a.Z.dispatch({
                                        type: 'EMOJI_TRACK_USAGE',
                                        emojiUsed: f
                                    }),
                                    a.Z.dispatch({
                                        type: 'STICKER_TRACK_USAGE',
                                        stickerIds: g
                                    }),
                                    a.Z.dispatch({
                                        type: 'LOCAL_MESSAGE_CREATE',
                                        message: {
                                            channel_id: e,
                                            author: eu.default.getCurrentUser()
                                        }
                                    }),
                                    eR({
                                        content: u,
                                        channelId: e,
                                        messageId: s.body.id,
                                        location: null != h ? h : 'chat_input',
                                        suggested: m
                                    }),
                                    eD(u, e, s.body.id, null != h ? h : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                    t(s);
                            } else {
                                var d;
                                eA.log('Failed to send message', {
                                    hasErr: s.hasErr,
                                    status: s.status,
                                    code: null == (d = s.body) ? void 0 : d.code,
                                    error: s.err
                                });
                                let t = !1;
                                if (s.hasErr) 'ABORTED' === s.err.code && (t = !0);
                                else if (s.status >= 400 && s.status < 500 && s.body)
                                    if (s.body.code === eb.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = s.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            a.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: e,
                                                slowmodeType: ec.S.SendMessage,
                                                cooldownMs: t * ed.Z.Millis.SECOND
                                            });
                                    } else
                                        I.U8.has(s.body.code)
                                            ? a.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                  messageData: ee,
                                                  errorResponseBody: {
                                                      code: s.body.code,
                                                      message: s.body.message
                                                  }
                                              })
                                            : s.body.code === eb.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? a.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                              : null != O || Z || null != v || ek.sendClydeError(e, s.body.code);
                                t
                                    ? ek.deleteMessage(e, $, !0)
                                    : (a.Z.dispatch({
                                          type: 'MESSAGE_SEND_FAILED',
                                          messageId: $,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError
                                      }),
                                      (0, j.x)({
                                          failureCode: s.hasErr ? void 0 : s.status,
                                          errorMessage: s.hasErr ? s.err.message : void 0
                                      }),
                                      l.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          eA.log('Cancelling pending message', e.nonce),
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
            });
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
            await $.Z.unarchiveThreadIfNecessary(e);
            let i = eL(e, t),
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
                    let r = !n.hasErr && I.U8.has(n.body.code);
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
                    n.hasErr ? o.uv.announce(eO.intl.string(eO.t.Atp7FB)) : r ? o.uv.announce(eO.intl.string(eO.t.Hym4i4)) : o.uv.announce(eO.intl.string(eO.t['0x1HBA'])),
                        ek.endEditMessage(e, n.hasErr ? void 0 : n),
                        ek.focusMessage({
                            channelId: e,
                            messageId: t
                        });
                }
            );
        },
        async suppressEmbeds(e, t) {
            await $.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eb.ANM.MESSAGE(e, t),
                    body: { flags: eb.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, t, n) {
            await $.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eb.ANM.MESSAGE(e, t),
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
                        o.uv.announce(eO.intl.string(eO.t.RYMs7u));
                    });
                };
            n
                ? r()
                : (await $.Z.unarchiveThreadIfNecessary(e),
                  i.tn
                      .del({
                          url: eb.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          r();
                      }));
            let s = eo.Z.getMessage(e, t);
            (null == s ? void 0 : s.type) === eb.uaV.GUILD_INVITE_REMINDER && (0, U.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                c.ZP.trackWithMetadata(eb.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: eb.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let t;
                    (t = 429 === e.status ? eO.intl.formatToPlainString(eO.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : eO.intl.string(eO.t.z2gyND)),
                        eE.Z.show({
                            title: eO.intl.string(eO.t.Vd1hs7),
                            body: t,
                            confirmText: eO.intl.string(eO.t.BddRzc)
                        });
                }),
        trackInvite: ew
    },
    eM = ek;
