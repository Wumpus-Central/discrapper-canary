n.d(t, { Z: () => eG }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
var r = n(278074),
    i = n(544891),
    a = n(780384),
    o = n(570140),
    s = n(89892),
    l = n(673750),
    c = n(367907),
    u = n(287328),
    d = n(86670),
    _ = n(685736),
    f = n(421474),
    p = n(234431),
    h = n(914498),
    m = n(333023),
    g = n(960904),
    E = n(830121),
    b = n(710845),
    y = n(247206),
    O = n(470734),
    v = n(38618),
    I = n(859487),
    T = n(687516),
    S = n(539573),
    A = n(926526),
    N = n(826581),
    C = n(409059),
    R = n(264229),
    P = n(413605),
    w = n(366980),
    D = n(467512),
    L = n(779832),
    x = n(786761),
    M = n(459618),
    k = n(541288),
    j = n(3148),
    U = n(48854),
    G = n(785359),
    B = n(646504),
    V = n(64078),
    F = n(351780),
    Z = n(79390),
    H = n(980463),
    Y = n(328908),
    W = n(992970),
    K = n(576645),
    z = n(317951),
    q = n(287941),
    X = n(643266),
    Q = n(617136);
n(807092);
var J = n(869765),
    $ = n(926491),
    ee = n(467798),
    et = n(346479),
    en = n(218543),
    er = n(199902),
    ei = n(314897),
    ea = n(592125);
n(323873);
var eo = n(701190),
    es = n(375954),
    el = n(496675),
    ec = n(158776),
    eu = n(306680),
    ed = n(300429),
    e_ = n(594174);
n(626135);
var ef = n(70956),
    ep = n(630388),
    eh = n(669079),
    em = n(63063),
    eg = n(74538),
    eE = n(709054),
    eb = n(861990),
    ey = n(668781),
    eO = n(981631),
    ev = n(260539),
    eI = n(959517),
    eT = n(388032);
function eS(e, t, n) {
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
function eA(e) {
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
                eS(e, t, n[t]);
            });
    }
    return e;
}
function eN(e, t) {
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
function eC(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eN(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eR = new b.Z('MessageActionCreators'),
    eP = new b.Z('MessageQueue'),
    ew = !1;
class eD {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eS(this, 'completed', !1);
    }
}
function eL(e) {
    let { content: t, channelId: n, messageId: r, location: i, suggested: a = null, overrideProperties: o = {} } = e,
        s = ei.default.getId();
    (0, E.ZP)(t).forEach((e) => {
        let { type: t, code: l, url: u } = e;
        if (t === g.g.INVITE)
            ex({
                inviteKey: l,
                channelId: n,
                messageId: r,
                location: i,
                suggested: a,
                overrideProperties: o
            });
        else if (t === g.g.TEMPLATE) {
            let e = C.Z.getGuildTemplate(l);
            if (null == e || e.state === ev.Rj.RESOLVING) return;
            c.ZP.trackWithMetadata(eO.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: l,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === g.g.BUILD_OVERRIDE);
        else if (t === g.g.MANUAL_BUILD_OVERRIDE);
        else if (t === g.g.EVENT);
        else if (t === g.g.CHANNEL_LINK);
        else if (t === g.g.APP_DIRECTORY_PROFILE) (0, I.y)(l), (0, h.z$)(l, h.Un.APP_DISCOVERY, s);
        else if (t === g.g.APP_DIRECTORY_STOREFRONT) (0, I.y)(l, 'storefront');
        else if (t === g.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, f.Q)(l);
            null != e && (0, I.y)(e.applicationId, 'storefront_sku');
        } else if (t === g.g.ACTIVITY_BOOKMARK) {
            var d;
            let e = (0, p.U)(u);
            (0, h.z$)(l, h.Un.ACTIVITY, null != (d = e.referrerId) ? d : s, e.customId);
        } else if (t === g.g.EMBEDDED_ACTIVITY_INVITE) (0, h.z$)(l, h.Un.ACTIVITY_INVITE, s);
        else if (t === g.g.GUILD_PRODUCT);
        else if (t === g.g.SERVER_SHOP);
        else if (t === g.g.QUESTS_EMBED)
            (0, Q.dA)({
                questId: l,
                event: eO.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (t === g.g.APP_OAUTH2_LINK) c.ZP.trackWithMetadata(eO.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: l }), (0, h.z$)(l, h.Un.OAUTH, s);
        else if (t === g.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function ex(e) {
    var t, n;
    let { inviteKey: r, channelId: i, messageId: a, location: o, suggested: s = null, overrideProperties: l = {} } = e,
        u = ei.default.getId(),
        d = eo.Z.getInvite(r),
        _ = (0, R.fU)(r),
        f = null != d && (0, P.P1)(d),
        p = null == d || null == (t = d.target_application) ? void 0 : t.id;
    null != p && f && (0, h.z$)(p, h.Un.ACTIVITY_INVITE, u);
    let m = ea.Z.getChannel(i);
    if (null != m) {
        let e = null;
        m.isMultiUserDM() ? (e = eO.dAT.GDM_INVITE) : m.isPrivate() || (e = eO.dAT.SERVER_INVITE);
        let t = {};
        if (null != d && d.state === eO.r2o.RESOLVED && null != d.channel) {
            let r = d.channel;
            (t.invite_channel_id = r.id), (t.invite_guild_id = null == (n = d.guild) ? void 0 : n.id), (t.invite_channel_type = r.type), null != d.inviter && (t.invite_inviter_id = d.inviter.id), null != d.target_application && (t.application_id = d.target_application.id);
            let i = er.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = eO.dAT.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, T.L2)(i, ec.Z);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s && ((t.is_suggested = s.isAffinitySuggestion), (t.row_num = s.rowNum), (t.num_total = s.numTotal), (t.num_affinity_connections = s.numAffinityConnections), (t.is_filtered = s.isFiltered)),
            (t = eA(
                eC(eA({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: _.baseCode,
                    guild_id: m.getGuildId(),
                    channel_id: m.id,
                    message_id: a,
                    send_type: eO.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: _.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != d &&
            d.state === eO.r2o.RESOLVED &&
            null != d.inviter &&
            ((e.invite_inviter_id = d.inviter.id),
            null != d.target_application && (e.application_id = d.target_application.id),
            (e = eA(
                eC(eA({}, e), {
                    location: o,
                    invite_type: eO.dAT.FRIEND_INVITE,
                    invite_code: _.baseCode,
                    message_id: a,
                    send_type: eO.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: _.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, e));
    }
}
function eM(e, t, n, r, i) {
    (0, eh.Q_)(e).forEach((e) => {
        let a = ea.Z.getChannel(t);
        null != a &&
            c.ZP.trackWithMetadata(eO.rMx.GIFT_CODE_SENT, {
                location: r,
                gift_code: e,
                guild_id: a.getGuildId(),
                channel_id: a.id,
                channel_type: a.type,
                message_id: n,
                automatic_send: i
            });
    });
}
function ek(e, t) {
    let n = es.Z.getMessage(e, t);
    if (null == n || n.type !== eO.uaV.REPLY) return;
    let r = J.Z.getMessageByReference(n.messageReference);
    if (r.state === J.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eO.hCA),
            replied_user: !1
        };
}
let ej = {
        [eO.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eT.intl.string(eT.t.k1Cjqq)
        },
        [eO.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eT.intl.formatToPlainString(eT.t.CTMXwM, { helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [eO.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => eT.intl.string(eT.t.E8nbNT)
        },
        [eO.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eT.intl.string(eT.t.aRUbam)
        },
        [eO.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eT.intl.string(eT.t.aRUbam)
        },
        [eO.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => eT.intl.string(eT.t['/meGhY'])
        },
        [eO.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => eT.intl.string(eT.t.Oc1Zj4)
        }
    },
    eU = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            o.Z.dispatch({
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
                c.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                eU.receiveMessage(
                    e,
                    (0, j.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, j.ZP)({
                channelId: e,
                nonce: n,
                type: eO.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eO.iLy.EPHEMERAL,
                author: {
                    id: eO.LAt,
                    username: 'Nitro Notification',
                    discriminator: eO.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            eU.receiveMessage(
                e,
                eC(eA({}, r), {
                    state: eO.yb.SENT,
                    channel_id: e
                }),
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, j.ZP)({
                channelId: e,
                type: eO.uaV.GIFTING_PROMPT,
                content: '',
                flags: eO.iLy.EPHEMERAL,
                author: {
                    id: eO.LAt,
                    username: 'Gifting Prompt',
                    discriminator: eO.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: t
            });
            eU.receiveMessage(e, eC(eA({}, n), { state: eO.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ea.Z.getChannel(e);
            null != i && (r === eO.evJ.SLOWMODE_RATE_LIMITED ? ((t = eT.intl.formatToPlainString(eT.t.IWntYm, { seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === eO.evJ.INVALID_MESSAGE_SEND_USER ? ((t = eT.intl.formatToPlainString(eT.t.CTMXwM, { helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === eO.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? eT.intl.string(eT.t['/jUd29']) : eT.intl.string(eT.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : r === eO.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = eT.intl.string(eT.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === eO.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = eT.intl.formatToPlainString(eT.t.zSG3Q0, { helpUrl: eO.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in ej ? ((n = ej[r].messageName), (t = ej[r].messageGetter())) : ((t = eT.intl.formatToPlainString(eT.t.CTMXwM, { helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), eU.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = (0, O.U2)('ExplicitMediaClydeError'),
                a = ea.Z.getChannel(e);
            if (null == a) return;
            let { message: s, messageName: l } = (0, r.EQ)({
                    isDM: a.isDM(),
                    isGDM: a.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: i ? eT.intl.string(eT.t.mktny8) : eT.intl.string(eT.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: i ? eT.intl.string(eT.t.mktny8) : eT.intl.string(eT.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: i ? eT.intl.string(eT.t.i4AbAQ) : eT.intl.string(eT.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                c = (0, U.r)();
            eU.sendBotMessage(e, s, l, c),
                (0, y.aP)({
                    action: y.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: c,
                    channelId: e,
                    context: n
                }),
                null != t &&
                    t.length > 0 &&
                    o.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: c,
                        channelId: e,
                        attachments: t
                    });
        },
        truncateMessages(e, t, n) {
            o.Z.dispatch({
                type: 'TRUNCATE_MESSAGES',
                channelId: e,
                truncateBottom: t,
                truncateTop: n
            });
        },
        clearChannel(e) {
            o.Z.dispatch({
                type: 'CLEAR_MESSAGES',
                channelId: e
            });
        },
        jumpToPresent(e, t) {
            eU.trackJump(e, null, 'Present');
            let n = { present: !0 };
            es.Z.hasPresent(e)
                ? o.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : eU.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            c.ZP.trackWithMetadata(
                eO.rMx.JUMP,
                eA(
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
            let { channelId: t, messageId: n, flash: r = !1, offset: i, context: a, extraProperties: o = null, isPreload: s, returnMessageId: l, skipLocalFetch: c, jumpType: u, avoidInitialScroll: d } = e;
            return (
                'string' == typeof a && eU.trackJump(t, n, a, o),
                eU.fetchMessages({
                    channelId: t,
                    limit: eO.Z8P,
                    jump: {
                        messageId: n,
                        flash: r,
                        offset: i,
                        returnMessageId: l,
                        jumpType: u
                    },
                    isPreload: s,
                    skipLocalFetch: c,
                    avoidInitialScroll: d
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eU.fetchMessages({
                channelId: t,
                limit: eO.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return i.tn
                .get({
                    url: eO.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, x.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: t, before: n, after: r, limit: a, jump: l, focus: c, isPreload: u, skipLocalFetch: d, truncate: _, forICYMI: f, avoidInitialScroll: p } = e,
                h = ea.Z.getChannel(t),
                g = v.Z.isConnectedOrOverlay(),
                E = Date.now();
            if (null != h && h.type === eO.d4z.GUILD_STORE) return !1;
            if (
                t === m.V ||
                (eR.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))),
                eU._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: a,
                    jump: l,
                    focus: c,
                    truncate: _
                }))
            )
                return;
            en.Z.fetchMessages.recordStart();
            let b = null != l ? l : void 0;
            null == b && null != c && (b = eA({}, c));
            let y = s.Z.getOrCreate(t).loadStart(b);
            s.Z.commit(y), o.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let O = null == b ? void 0 : b.messageId,
                I = new eD();
            return (
                d || this.fetchLocalMessages(t, n, r, a, I),
                i.tn
                    .get({
                        url: eO.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: a,
                            around: O,
                            preload: u
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            en.Z.fetchMessages.recordEnd(),
                            en.Z.dispatchMessages.measure(() => {
                                let i = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != O || (i.length === a && (s || u)),
                                    h = null != O || (c && i.length === a);
                                if (null != O) {
                                    let e = Math.floor(a / 2),
                                        n = e + (a % 2),
                                        r = [
                                            O,
                                            ...i.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(eE.default.compare)
                                            .indexOf(O);
                                    if ((r < n - 1 && (d = !1), i.length - r < e && (h = !1), h && i.length > 0)) {
                                        let e = eu.ZP.lastMessageId(t);
                                        i[0].id === e && (h = !1);
                                    }
                                }
                                eR.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(c)),
                                    I.markComplete(),
                                    o.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: t,
                                        messages: i,
                                        isBefore: s,
                                        isAfter: c,
                                        hasMoreBefore: d,
                                        hasMoreAfter: h,
                                        limit: a,
                                        jump: l,
                                        forICYMI: f,
                                        isStale: !g || v.Z.lastTimeConnectedChanged() >= E,
                                        truncate: _,
                                        avoidInitialScroll: p
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eR.log('Failed to fetch messages for '.concat(t)),
                            o.Z.dispatch({
                                type: 'LOAD_MESSAGES_FAILURE',
                                channelId: t
                            }),
                            !1
                        )
                    )
            );
        },
        async fetchLocalMessages(e, t, n, r, i) {
            let a = ea.Z.getBasicChannel(e),
                l = s.Z.getOrCreate(e),
                c = u.Z.database();
            if (null == c || null == a || null != t || null != n) return void en.Z.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void en.Z.addLocalMessages(e, -2);
            let f = await (0, d.dI)(() => _.ZP.load(c, e, r));
            if (null == f) return void en.Z.addLocalMessages(e, -3);
            if ((eR.log('fetched '.concat(f.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), en.Z.addLocalMessages(e, f.messages.length), !i.completed && f.messages.length > 0)) {
                let t = f.messages.length >= r && f.connectionId === v.Z.lastTimeConnectedChanged();
                o.Z.dispatch({
                    type: 'LOCAL_MESSAGES_LOADED',
                    guildId: a.guild_id,
                    channelId: e,
                    users: f.users,
                    members: f.members,
                    messages: f.messages,
                    stale: !t
                });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let r = ea.Z.getBasicChannel(e),
                i = u.Z.database();
            if (null == i || null == r) return;
            let a = s.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let l = await (0, d.dI)(() => _.ZP.load(i, e, t));
            if (null == l) return;
            let c = null == (n = (a = s.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                f = null == c ? l.messages : l.messages.filter((e) => eE.default.compare(e.id, c) > 0);
            eR.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(f.length, ' are new')),
                0 !== f.length &&
                    o.Z.dispatch({
                        type: 'LOCAL_MESSAGES_LOADED',
                        guildId: r.guild_id,
                        channelId: e,
                        users: l.users,
                        members: l.members,
                        messages: f,
                        stale: !0
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: s, truncate: l } = e,
                c = es.Z.getMessages(t);
            if (c.cached || !c.ready) return !1;
            if ((null == a ? void 0 : a.messageId) != null || (null == s ? void 0 : s.messageId) != null) {
                if ((null == a ? void 0 : a.messageId) != null && c.has(a.messageId, !1))
                    return (
                        o.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: i,
                            truncate: l
                        }),
                        !0
                    );
                if ((null == s ? void 0 : s.messageId) != null)
                    if (c.has(s.messageId, !1))
                        return (
                            o.Z.dispatch({
                                type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                                channelId: t,
                                focus: s,
                                limit: i,
                                truncate: l
                            }),
                            !0
                        );
                    else a = eA({}, s);
                let e = (null == a ? void 0 : a.messageId) != null ? eE.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
                    n = c.first(),
                    r = c.last();
                if ((!c.hasMoreBefore && null != n && eE.default.extractTimestamp(n.id) >= e) || (!c.hasMoreAfter && null != r && eE.default.extractTimestamp(r.id) <= e) || (null != n && null != r && eE.default.extractTimestamp(n.id) < e && eE.default.extractTimestamp(r.id) > e))
                    return (
                        o.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: eO.Z8P
                        }),
                        !0
                    );
            } else if (null != n && c.hasBeforeCached(n))
                return (
                    o.Z.dispatch({
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
                    o.Z.dispatch({
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
            let a = await (0, X.Z)(e);
            if (null != a) return eU.sendMessage(a, t, r, i);
            let o = null != (n = i.nonce) ? n : (0, U.r)();
            i = eC(eA({}, i), { nonce: o });
            let s = () => eU._sendMessage(e, t, i),
                l = L.ZP.backgroundify(s, void 0);
            return (M.Z.recordMessageSendAttempt(e, o), es.Z.isReady(e))
                ? l()
                : r && e !== m.V
                  ? (eP.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        es.Z.whenReady(e, () => {
                            eP.info('Channel '.concat(e, ' is ready for sending now.')), l().then(t, n);
                        });
                    }))
                  : l();
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
                                parse: Object.values(eO.hCA),
                                replied_user: !1
                            }
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: a, confettiPotionEmoji: o } = e;
            return null != o && (0, K.tv)(n, r, i, a)
                ? {
                      confettiPotionData: {
                          emoji: o,
                          callback: () => (0, Y.Hb)(t)
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
            let t = eU.getSendMessageOptionsForReply(e.pendingReply),
                n = eU.getSendMessageOptionsForConfettiPotion(eA({}, e)),
                r = eU.getSendMessageOptionsForStickers(eA({}, e)),
                i = eU.getSendMessageOptionsForScheduledMessage(eA({}, e));
            return eA({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, w.Z)(t);
            return (
                null != i && (a = ''.concat(i, '\n').concat(a)),
                eU._sendMessage(
                    e,
                    {
                        content: a,
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
            eU._sendMessage(
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
            return eU._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                eC(eA({}, r), { stickerIds: t })
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: a } = n;
            return i.tn
                .post({
                    url: eO.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: a,
                        message_reference: r
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (n) => (
                        k.Z.donateSentMessage(n.body.content, e),
                        eU.receiveMessage(e, n.body),
                        o.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eR.log('Failed to send greeting'),
                            429 !== t.status && eU.sendClydeError(e, t.body.code),
                            o.Z.dispatch({
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
            return eU._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                eC(eA({}, n), { poll: t })
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eg.ZP.canUseAnimatedEmojis(t) ? ((r = eT.intl.string(eT.t.msFJy8)), (i = 'INVALID_ANIMATED_EMOJI_BODY')) : el.Z.canWithPartialContext(eO.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((r = eT.intl.string(eT.t.FzugNj)), (i = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((r = eT.intl.string(eT.t.Q87rIy)), (i = 'INVALID_EXTERNAL_EMOJI_BODY')),
                {
                    errorMessage: r,
                    errorMessageName: i
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, a;
            let s,
                c = (0, X.Z)(e);
            if (null != c)
                return (
                    eP.info('Converting channel to a private channel'),
                    c.then((e) => {
                        eP.info('Finished converting channel to a private channel'), eU._sendMessage(e, t, n);
                    })
                );
            let u = t.content,
                { invalidEmojis: d, validNonShortcutEmojis: _, tts: f = !1 } = t,
                { activityAction: p, location: h, suggestedInvite: m, stickerIds: g, confettiPotionData: E, messageReference: b, allowedMentions: O, poll: v, contentInventoryEntry: I, attachments: T, attachmentsToUpload: C, onAttachmentUploadError: R } = n,
                P = null != (i = n.flags) ? i : 0,
                [w, L] = (0, ee.Z)(u);
            w && ((u = L), (P = (0, ep.pj)(P, eO.iLy.SUPPRESS_NOTIFICATIONS)));
            let x = !1,
                B = (null == (r = n.messageReference) ? void 0 : r.type) === eO.Uvt.FORWARD;
            if ('' === u && null == p && null == g && null == v && null == I && !B && (null == T || 0 === T.length))
                if (null == C || !(C.length > 0)) return Promise.resolve();
                else x = !0;
            let Y = null != b ? eO.uaV.REPLY : eO.uaV.DEFAULT,
                Q = null != (a = n.nonce) ? a : (0, U.r)(),
                J = Q,
                et = (0, j.ZP)({
                    channelId: e,
                    content: u,
                    tts: f,
                    type: Y,
                    messageReference: b,
                    allowedMentions: O,
                    flags: 0 !== P ? P : void 0,
                    nonce: Q,
                    poll: (0, Z.x9)(v)
                });
            if ((!1 !== n.eagerDispatch && ((0, V.EL)(e, et.id), null != g && (et.sticker_items = g.map((e) => $.Z.getStickerById(e)).filter((e) => null != e)), eU.receiveMessage(e, et, !0, n)), !ew && null != d && d.length > 0)) {
                ew = !0;
                let t = e_.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eU.validateMessage(d, t, e);
                eU.sendBotMessage(e, n, r);
            }
            let en = {
                type: l.$V.SEND,
                message: {
                    channelId: e,
                    content: u,
                    nonce: Q,
                    tts: f,
                    message_reference: b,
                    allowed_mentions: O,
                    flags: P,
                    analyticsLocation: h
                }
            };
            if (null != p) {
                let e,
                    t = null == p ? void 0 : p.activity.session_id;
                if (null != (e = p.type === eO.mFx.JOIN_REQUEST || null != t ? t : ei.default.getSessionId())) {
                    let t = {
                            type: p.type,
                            session_id: e
                        },
                        { activity: n } = p;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (en.message.application_id = n.application_id), (en.message.activity = t);
                }
            }
            if ((null != v && (en.message.poll = v), null != g && (en.message.sticker_ids = g), F.Z.isEnabled() && (en.message.has_poggermode_enabled = !0), null != I && (en.message.content_inventory_entry = I), null != E && ((en.message.confetti_potion = (0, K.vY)(E)), E.callback()), null != T && T.length > 0 && (en.message.attachments = T), null != C && C.length > 0))
                try {
                    let t = await (0, D.c)({
                        channelId: e,
                        nonce: Q,
                        items: C,
                        message: et,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((s = t.uploader), x && (null == r || 0 === r.length))) return;
                    null != r && (en.message.attachments = r.map((e, t) => (0, eb.B)(e, t)));
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, G.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg
                    }),
                        null == R || R(e, t, n, r);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = l.ZP.length,
                    c = Math.floor(10000 * Math.random());
                eP.info('Queueing message to be sent LogId:'.concat(c)),
                    l.ZP.enqueue(
                        en,
                        (c) => {
                            let d = Date.now() - i;
                            if (c.ok) {
                                k.Z.donateSentMessage(u, e),
                                    eU.receiveMessage(e, c.body, !0, {
                                        sendAnalytics: {
                                            duration: d,
                                            queueSize: a
                                        },
                                        poll: v
                                    });
                                let r = (0, K.ZC)(c.body);
                                null != r &&
                                    ((0, H.gA)(z.D1),
                                    (0, q.I)(
                                        {
                                            name: r.name,
                                            id: r.id
                                        },
                                        void 0,
                                        !0,
                                        W.LL.MessageSent
                                    ));
                                let i = eE.default.cast(e),
                                    l = N.Z.getRequest(i);
                                if (null != l) {
                                    let { guildId: t, userId: n, applicationStatus: r } = l;
                                    (0, A.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: c.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n
                                    });
                                }
                                M.Z.recordMessageSendApiResponse(Q),
                                    o.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: ed.S.SendMessage,
                                        channelId: e
                                    }),
                                    o.Z.dispatch({
                                        type: 'EMOJI_TRACK_USAGE',
                                        emojiUsed: _
                                    }),
                                    o.Z.dispatch({
                                        type: 'STICKER_TRACK_USAGE',
                                        stickerIds: g
                                    }),
                                    o.Z.dispatch({
                                        type: 'LOCAL_MESSAGE_CREATE',
                                        message: {
                                            channel_id: e,
                                            author: e_.default.getCurrentUser()
                                        }
                                    }),
                                    eL({
                                        content: u,
                                        channelId: e,
                                        messageId: c.body.id,
                                        location: null != h ? h : 'chat_input',
                                        suggested: m
                                    }),
                                    eM(u, e, c.body.id, null != h ? h : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != s &&
                                        o.Z.dispatch({
                                            type: 'UPLOAD_COMPLETE',
                                            channelId: e,
                                            file: s._file,
                                            aborted: !1
                                        }),
                                    t(c);
                            } else {
                                var f, p;
                                let t;
                                eR.log('Failed to send message', {
                                    hasErr: c.hasErr,
                                    status: c.status,
                                    code: null == (f = c.body) ? void 0 : f.code,
                                    error: c.err
                                });
                                let i = !1;
                                if (c.hasErr) 'ABORTED' === c.err.code && (i = !0);
                                else if (c.status >= 400 && c.status < 500 && c.body)
                                    if (c.body.code === eO.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = c.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            o.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: e,
                                                slowmodeType: ed.S.SendMessage,
                                                cooldownMs: t * ef.Z.Millis.SECOND
                                            });
                                    } else
                                        S.U8.has(c.body.code)
                                            ? o.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                  messageData: en,
                                                  errorResponseBody: {
                                                      code: c.body.code,
                                                      message: c.body.message
                                                  }
                                              })
                                            : c.body.code === eO.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                              : c.body.code === eO.evJ.EXPLICIT_CONTENT
                                                ? (t = eI.xi.EXPLICIT_CONTENT)
                                                : null != v || B || null != I || eU.sendClydeError(e, c.body.code);
                                i
                                    ? eU.deleteMessage(e, J, !0)
                                    : (null != s &&
                                          o.Z.dispatch({
                                              type: 'UPLOAD_FAIL',
                                              channelId: e,
                                              file: s._file,
                                              messageId: J,
                                              reason: t,
                                              noSendFailed: !0
                                          }),
                                      c.hasErr || t !== eI.xi.EXPLICIT_CONTENT || eU.sendExplicitMediaClydeError(e, null == (p = c.body) ? void 0 : p.attachments, y.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED),
                                      o.Z.dispatch({
                                          type: 'MESSAGE_SEND_FAILED',
                                          messageId: J,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t
                                      }),
                                      (0, G.x)({
                                          failureCode: c.hasErr ? void 0 : c.status,
                                          errorMessage: c.hasErr ? c.err.message : void 0
                                      }),
                                      l.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          eR.log('Cancelling pending message', e.nonce),
                                              o.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED',
                                                  messageId: e.nonce,
                                                  channelId: e.channelId
                                              });
                                      })),
                                    r(c);
                            }
                        },
                        c
                    );
            });
        },
        startEditMessage(e, t, n, r) {
            o.Z.dispatch({
                type: 'MESSAGE_START_EDIT',
                channelId: e,
                messageId: t,
                content: n,
                source: r
            });
        },
        updateEditMessage(e, t, n) {
            o.Z.dispatch({
                type: 'MESSAGE_UPDATE_EDIT',
                channelId: e,
                textValue: t,
                richValue: n
            });
        },
        endEditMessage(e, t) {
            o.Z.dispatch({
                type: 'MESSAGE_END_EDIT',
                channelId: e,
                response: t
            });
        },
        async editMessage(e, t, n) {
            let { content: r } = n;
            await et.Z.unarchiveThreadIfNecessary(e);
            let i = ek(e, t),
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
                    let r = !n.hasErr && S.U8.has(n.body.code);
                    if (r) {
                        let e = {
                            type: l.$V.EDIT,
                            message: s
                        };
                        o.Z.dispatch({
                            type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message
                            }
                        });
                    }
                    n.hasErr ? a.uv.announce(eT.intl.string(eT.t.Atp7FB)) : r ? a.uv.announce(eT.intl.string(eT.t.Hym4i4)) : a.uv.announce(eT.intl.string(eT.t['0x1HBA'])),
                        eU.endEditMessage(e, n.hasErr ? void 0 : n),
                        eU.focusMessage({
                            channelId: e,
                            messageId: t
                        });
                }
            );
        },
        async suppressEmbeds(e, t) {
            await et.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eO.ANM.MESSAGE(e, t),
                    body: { flags: eO.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, t, n) {
            await et.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eO.ANM.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    o.Z.dispatch({
                        type: 'MESSAGE_DELETE',
                        id: t,
                        channelId: e
                    }).then(() => {
                        a.uv.announce(eT.intl.string(eT.t.RYMs7u));
                    });
                };
            n
                ? r()
                : (await et.Z.unarchiveThreadIfNecessary(e),
                  i.tn
                      .del({
                          url: eO.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          r();
                      }));
            let s = es.Z.getMessage(e, t);
            (null == s ? void 0 : s.type) === eO.uaV.GUILD_INVITE_REMINDER && (0, B.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                c.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            o.Z.dispatch({
                type: 'MESSAGE_REVEAL',
                channelId: e,
                messageId: t
            });
        },
        crosspostMessage: (e, t) =>
            i.tn
                .post({
                    url: eO.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let t;
                    (t = 429 === e.status ? eT.intl.formatToPlainString(eT.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : eT.intl.string(eT.t.z2gyND)),
                        ey.Z.show({
                            title: eT.intl.string(eT.t.Vd1hs7),
                            body: t,
                            confirmText: eT.intl.string(eT.t.BddRzc)
                        });
                }),
        trackInvite: ex
    },
    eG = eU;
