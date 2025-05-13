n.d(t, { Z: () => ej }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
var r = n(278074),
    i = n(544891),
    a = n(780384),
    o = n(570140),
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
    ea = n(375954),
    eo = n(496675),
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
    eO = n(959517),
    ev = n(388032);
function eI(e, t, n) {
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
function eS(e) {
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
                eI(e, t, n[t]);
            });
    }
    return e;
}
function eT(e, t) {
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
function eA(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eT(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eN = new E.Z('MessageActionCreators'),
    eC = new E.Z('MessageQueue'),
    eP = !1;
class eR {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eI(this, 'completed', !1);
    }
}
function ew(e) {
    let { content: t, channelId: n, messageId: r, location: i, suggested: a = null, overrideProperties: o = {} } = e,
        s = en.default.getId();
    (0, g.ZP)(t).forEach((e) => {
        let { type: t, code: l } = e;
        if (t === m.g.INVITE)
            eD({
                inviteKey: l,
                channelId: n,
                messageId: r,
                location: i,
                suggested: a,
                overrideProperties: o
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
function eD(e) {
    var t, n;
    let { inviteKey: r, channelId: i, messageId: a, location: o, suggested: s = null, overrideProperties: l = {} } = e,
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
            (t = eS(
                eA(eS({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: f.baseCode,
                    guild_id: m.getGuildId(),
                    channel_id: m.id,
                    message_id: a,
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
            (e = eS(
                eA(eS({}, e), {
                    location: o,
                    invite_type: eb.dAT.FRIEND_INVITE,
                    invite_code: f.baseCode,
                    message_id: a,
                    send_type: eb.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(eb.rMx.INVITE_SENT, e));
    }
}
function eL(e, t, n, r, i) {
    (0, e_.Q_)(e).forEach((e) => {
        let a = er.Z.getChannel(t);
        null != a &&
            c.ZP.trackWithMetadata(eb.rMx.GIFT_CODE_SENT, {
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
function ex(e, t) {
    let n = ea.Z.getMessage(e, t);
    if (null == n || n.type !== eb.uaV.REPLY) return;
    let r = Q.Z.getMessageByReference(n.messageReference);
    if (r.state === Q.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eb.hCA),
            replied_user: !1
        };
}
let ek = {
        [eb.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => ev.intl.string(ev.t.k1Cjqq)
        },
        [eb.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => ev.intl.formatToPlainString(ev.t.CTMXwM, { helpUrl: ep.Z.getArticleURL(eb.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [eb.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => ev.intl.string(ev.t.E8nbNT)
        },
        [eb.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => ev.intl.string(ev.t.aRUbam)
        },
        [eb.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => ev.intl.string(ev.t.aRUbam)
        },
        [eb.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => ev.intl.string(ev.t['/meGhY'])
        },
        [eb.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => ev.intl.string(ev.t.Oc1Zj4)
        }
    },
    eM = {
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
                c.ZP.trackWithMetadata(eb.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                eM.receiveMessage(
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
            eM.receiveMessage(
                e,
                eA(eS({}, r), {
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
            eM.receiveMessage(e, eA(eS({}, n), { state: eb.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = er.Z.getChannel(e);
            null != i && (r === eb.evJ.SLOWMODE_RATE_LIMITED ? ((t = ev.intl.formatToPlainString(ev.t.IWntYm, { seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === eb.evJ.INVALID_MESSAGE_SEND_USER ? ((t = ev.intl.formatToPlainString(ev.t.CTMXwM, { helpUrl: ep.Z.getArticleURL(eb.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === eb.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? ev.intl.string(ev.t['/jUd29']) : ev.intl.string(ev.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : r === eb.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = ev.intl.string(ev.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === eb.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = ev.intl.formatToPlainString(ev.t.zSG3Q0, { helpUrl: eb.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in ek ? ((n = ek[r].messageName), (t = ek[r].messageGetter())) : ((t = ev.intl.formatToPlainString(ev.t.CTMXwM, { helpUrl: ep.Z.getArticleURL(eb.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), eM.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = er.Z.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: s } = (0, r.EQ)({
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
                l = (0, M.r)();
            eM.sendBotMessage(e, a, s, l),
                (0, b.aP)({
                    action: b.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: l,
                    channelId: e,
                    context: n
                }),
                null != t &&
                    t.length > 0 &&
                    o.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: l,
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
            eM.trackJump(e, null, 'Present');
            let n = { present: !0 };
            ea.Z.hasPresent(e)
                ? o.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : eM.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            c.ZP.trackWithMetadata(
                eb.rMx.JUMP,
                eS(
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
            let { channelId: t, messageId: n, flash: r = !1, offset: i, context: a, extraProperties: o = null, isPreload: s, returnMessageId: l, skipLocalFetch: c, jumpType: u } = e;
            return (
                'string' == typeof a && eM.trackJump(t, n, a, o),
                eM.fetchMessages({
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
            eM.fetchMessages({
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
            let { channelId: t, before: n, after: r, limit: a, jump: l, focus: c, isPreload: u, skipLocalFetch: d, truncate: f, forICYMI: _ } = e,
                p = er.Z.getChannel(t),
                m = y.Z.isConnectedOrOverlay(),
                g = Date.now();
            if (null != p && p.type === eb.d4z.GUILD_STORE) return !1;
            if (
                t === h.V ||
                (eN.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))),
                eM._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: a,
                    jump: l,
                    focus: c,
                    truncate: f
                }))
            )
                return;
            ee.Z.fetchMessages.recordStart();
            let E = null != l ? l : void 0;
            null == E && null != c && (E = eS({}, c));
            let b = s.Z.getOrCreate(t).loadStart(E);
            s.Z.commit(b), o.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let O = null == E ? void 0 : E.messageId,
                v = new eR();
            return (
                d || this.fetchLocalMessages(t, n, r, a, v),
                i.tn
                    .get({
                        url: eb.ANM.MESSAGES(t),
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
                            ee.Z.fetchMessages.recordEnd(),
                            ee.Z.dispatchMessages.measure(() => {
                                let i = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != O || (i.length === a && (s || u)),
                                    p = null != O || (c && i.length === a);
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
                                            .sort(em.default.compare)
                                            .indexOf(O);
                                    if ((r < n - 1 && (d = !1), i.length - r < e && (p = !1), p && i.length > 0)) {
                                        let e = el.ZP.lastMessageId(t);
                                        i[0].id === e && (p = !1);
                                    }
                                }
                                eN.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(c)),
                                    v.markComplete(),
                                    o.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: t,
                                        messages: i,
                                        isBefore: s,
                                        isAfter: c,
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
                            eN.log('Failed to fetch messages for '.concat(t)),
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
            let a = er.Z.getBasicChannel(e),
                l = s.Z.getOrCreate(e),
                c = u.Z.database();
            if (null == c || null == a || null != t || null != n) return void ee.Z.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void ee.Z.addLocalMessages(e, -2);
            let _ = await (0, d.dI)(() => f.ZP.load(c, e, r));
            if (null == _) return void ee.Z.addLocalMessages(e, -3);
            if ((eN.log('fetched '.concat(_.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), ee.Z.addLocalMessages(e, _.messages.length), !i.completed && _.messages.length > 0)) {
                let t = _.messages.length >= r && _.connectionId === y.Z.lastTimeConnectedChanged();
                o.Z.dispatch({
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
            let r = er.Z.getBasicChannel(e),
                i = u.Z.database();
            if (null == i || null == r) return;
            let a = s.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let l = await (0, d.dI)(() => f.ZP.load(i, e, t));
            if (null == l) return;
            let c = null == (n = (a = s.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                _ = null == c ? l.messages : l.messages.filter((e) => em.default.compare(e.id, c) > 0);
            eN.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(_.length, ' are new')),
                0 !== _.length &&
                    o.Z.dispatch({
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
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: s, truncate: l } = e,
                c = ea.Z.getMessages(t);
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
                    else a = eS({}, s);
                let e = (null == a ? void 0 : a.messageId) != null ? em.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
                    n = c.first(),
                    r = c.last();
                if ((!c.hasMoreBefore && null != n && em.default.extractTimestamp(n.id) >= e) || (!c.hasMoreAfter && null != r && em.default.extractTimestamp(r.id) <= e) || (null != n && null != r && em.default.extractTimestamp(n.id) < e && em.default.extractTimestamp(r.id) > e))
                    return (
                        o.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: eb.Z8P
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
            let a = await (0, z.Z)(e);
            if (null != a) return eM.sendMessage(a, t, r, i);
            let o = () => eM._sendMessage(e, t, i),
                s = w.ZP.backgroundify(o, void 0),
                l = null != (n = i.nonce) ? n : (0, M.r)();
            return ((i = eA(eS({}, i), { nonce: l })), L.Z.recordMessageSendAttempt(e, l), ea.Z.isReady(e))
                ? s()
                : r && e !== h.V
                  ? (eC.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        ea.Z.whenReady(e, () => {
                            eC.info('Channel '.concat(e, ' is ready for sending now.')), s().then(t, n);
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
            let { channelId: t, content: n, isGif: r, command: i, uploads: a, confettiPotionEmoji: o } = e;
            return null != o && (0, Y.tv)(n, r, i, a)
                ? {
                      confettiPotionData: {
                          emoji: o,
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
            let t = eM.getSendMessageOptionsForReply(e.pendingReply),
                n = eM.getSendMessageOptionsForConfettiPotion(eS({}, e)),
                r = eM.getSendMessageOptionsForStickers(eS({}, e)),
                i = eM.getSendMessageOptionsForScheduledMessage(eS({}, e));
            return eS({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, P.Z)(t);
            return (
                null != i && (a = ''.concat(i, '\n').concat(a)),
                eM._sendMessage(
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
            eM._sendMessage(
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
            return eM._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                eA(eS({}, r), { stickerIds: t })
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: a } = n;
            return i.tn
                .post({
                    url: eb.ANM.MESSAGES_GREET(e),
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
                        x.Z.donateSentMessage(n.body.content, e),
                        eM.receiveMessage(e, n.body),
                        o.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eN.log('Failed to send greeting'),
                            429 !== t.status && eM.sendClydeError(e, t.body.code),
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
            return eM._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                eA(eS({}, n), { poll: t })
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eh.ZP.canUseAnimatedEmojis(t) ? ((r = ev.intl.string(ev.t.msFJy8)), (i = 'INVALID_ANIMATED_EMOJI_BODY')) : eo.Z.canWithPartialContext(eb.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((r = ev.intl.string(ev.t.FzugNj)), (i = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((r = ev.intl.string(ev.t.Q87rIy)), (i = 'INVALID_EXTERNAL_EMOJI_BODY')),
                {
                    errorMessage: r,
                    errorMessageName: i
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, a;
            let s,
                c,
                u = (0, z.Z)(e);
            if (null != u)
                return (
                    eC.info('Converting channel to a private channel'),
                    u.then((e) => {
                        eC.info('Finished converting channel to a private channel'), eM._sendMessage(e, t, n);
                    })
                );
            let d = t.content,
                { invalidEmojis: f, validNonShortcutEmojis: _, tts: p = !1 } = t,
                { activityAction: h, location: m, suggestedInvite: g, stickerIds: E, confettiPotionData: y, messageReference: O, allowedMentions: v, poll: A, contentInventoryEntry: N, attachments: C, attachmentsToUpload: P, onAttachmentUploadError: w } = n,
                U = null != (i = n.flags) ? i : 0,
                [Z, q] = (0, J.Z)(d);
            Z && ((d = q), (U = (0, ef.pj)(U, eb.iLy.SUPPRESS_NOTIFICATIONS)));
            let Q = !1,
                $ = (null == (r = n.messageReference) ? void 0 : r.type) === eb.Uvt.FORWARD;
            if ('' === d && null == h && null == E && null == A && null == N && !$ && (null == C || 0 === C.length))
                if (null == P || !(P.length > 0)) return Promise.resolve();
                else Q = !0;
            let ee = null != O ? eb.uaV.REPLY : eb.uaV.DEFAULT,
                et = null != (a = n.nonce) ? a : (0, M.r)(),
                er = et;
            if (
                (!1 !== n.eagerDispatch &&
                    ((s = (0, k.ZP)({
                        channelId: e,
                        content: d,
                        tts: p,
                        type: ee,
                        messageReference: O,
                        allowedMentions: v,
                        flags: 0 !== U ? U : void 0,
                        nonce: et,
                        poll: (0, F.x9)(A)
                    })),
                    (0, G.EL)(e, s.id),
                    null != E && (s.sticker_items = E.map((e) => X.Z.getStickerById(e)).filter((e) => null != e)),
                    eM.receiveMessage(e, s, !0, n)),
                !eP && null != f && f.length > 0)
            ) {
                eP = !0;
                let t = eu.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eM.validateMessage(f, t, e);
                eM.sendBotMessage(e, n, r);
            }
            let ei = {
                type: l.$V.SEND,
                message: {
                    channelId: e,
                    content: d,
                    nonce: et,
                    tts: p,
                    message_reference: O,
                    allowed_mentions: v,
                    flags: U
                }
            };
            if (null != h) {
                let e,
                    t = null == h ? void 0 : h.activity.session_id;
                if (null != (e = h.type === eb.mFx.JOIN_REQUEST || null != t ? t : en.default.getSessionId())) {
                    let t = {
                            type: h.type,
                            session_id: e
                        },
                        { activity: n } = h;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (ei.message.application_id = n.application_id), (ei.message.activity = t);
                }
            }
            if ((null != A && (ei.message.poll = A), null != E && (ei.message.sticker_ids = E), B.Z.isEnabled() && (ei.message.has_poggermode_enabled = !0), null != N && (ei.message.content_inventory_entry = N), null != y && ((ei.message.confetti_potion = (0, Y.vY)(y)), y.callback()), null != C && C.length > 0 && (ei.message.attachments = C), null != P && P.length > 0))
                try {
                    let t = await (0, R.c)({
                        channelId: e,
                        nonce: et,
                        items: P,
                        message: s
                    });
                    if (null == t) return;
                    let n = t.attachments;
                    if (((c = t.uploader), Q && (null == n || 0 === n.length))) return;
                    null != n && (ei.message.attachments = n.map((e, t) => (0, eg.B)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n } = r;
                    (0, j.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg
                    }),
                        null == w || w(e, t, n);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = l.ZP.length,
                    u = Math.floor(10000 * Math.random());
                eC.info('Queueing message to be sent LogId:'.concat(u)),
                    l.ZP.enqueue(
                        ei,
                        (u) => {
                            let f = Date.now() - i;
                            if (u.ok) {
                                x.Z.donateSentMessage(d, e),
                                    eM.receiveMessage(e, u.body, !0, {
                                        sendAnalytics: {
                                            duration: f,
                                            queueSize: a
                                        },
                                        poll: A
                                    });
                                let r = (0, Y.ZC)(u.body);
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
                                    s = T.Z.getRequest(i);
                                if (null != s) {
                                    let { guildId: t, userId: n, applicationStatus: r } = s;
                                    (0, S.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: u.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n
                                    });
                                }
                                L.Z.recordMessageSendApiResponse(et),
                                    o.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: ec.S.SendMessage,
                                        channelId: e
                                    }),
                                    o.Z.dispatch({
                                        type: 'EMOJI_TRACK_USAGE',
                                        emojiUsed: _
                                    }),
                                    o.Z.dispatch({
                                        type: 'STICKER_TRACK_USAGE',
                                        stickerIds: E
                                    }),
                                    o.Z.dispatch({
                                        type: 'LOCAL_MESSAGE_CREATE',
                                        message: {
                                            channel_id: e,
                                            author: eu.default.getCurrentUser()
                                        }
                                    }),
                                    ew({
                                        content: d,
                                        channelId: e,
                                        messageId: u.body.id,
                                        location: null != m ? m : 'chat_input',
                                        suggested: g
                                    }),
                                    eL(d, e, u.body.id, null != m ? m : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                    t(u);
                            } else {
                                var p;
                                let t;
                                eN.log('Failed to send message', {
                                    hasErr: u.hasErr,
                                    status: u.status,
                                    code: null == (p = u.body) ? void 0 : p.code,
                                    error: u.err
                                });
                                let i = !1;
                                if (u.hasErr) 'ABORTED' === u.err.code && (i = !0);
                                else if (u.status >= 400 && u.status < 500 && u.body)
                                    if (u.body.code === eb.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = u.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            o.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: e,
                                                slowmodeType: ec.S.SendMessage,
                                                cooldownMs: t * ed.Z.Millis.SECOND
                                            });
                                    } else
                                        I.U8.has(u.body.code)
                                            ? o.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                  messageData: ei,
                                                  errorResponseBody: {
                                                      code: u.body.code,
                                                      message: u.body.message
                                                  }
                                              })
                                            : u.body.code === eb.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                              : u.body.code === eb.evJ.EXPLICIT_CONTENT
                                                ? ((t = eO.xi.EXPLICIT_CONTENT),
                                                  null != c &&
                                                      o.Z.dispatch({
                                                          type: 'UPLOAD_FAIL',
                                                          channelId: e,
                                                          file: c._file,
                                                          messageRecord: (0, D.e5)(eA(eS({}, s), { key: 'pending-upload-'.concat(c._file.id) })),
                                                          reason: eO.xi.EXPLICIT_CONTENT,
                                                          noSendFailed: !0
                                                      }),
                                                  eM.sendExplicitMediaClydeError(e, u.body.attachments, b.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED))
                                                : null != A || $ || null != N || eM.sendClydeError(e, u.body.code);
                                i
                                    ? eM.deleteMessage(e, er, !0)
                                    : (o.Z.dispatch({
                                          type: 'MESSAGE_SEND_FAILED',
                                          messageId: er,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t
                                      }),
                                      (0, j.x)({
                                          failureCode: u.hasErr ? void 0 : u.status,
                                          errorMessage: u.hasErr ? u.err.message : void 0
                                      }),
                                      l.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          eN.log('Cancelling pending message', e.nonce),
                                              o.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED',
                                                  messageId: e.nonce,
                                                  channelId: e.channelId
                                              });
                                      })),
                                    r(u);
                            }
                        },
                        u
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
            await $.Z.unarchiveThreadIfNecessary(e);
            let i = ex(e, t),
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
                        o.Z.dispatch({
                            type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message
                            }
                        });
                    }
                    n.hasErr ? a.uv.announce(ev.intl.string(ev.t.Atp7FB)) : r ? a.uv.announce(ev.intl.string(ev.t.Hym4i4)) : a.uv.announce(ev.intl.string(ev.t['0x1HBA'])),
                        eM.endEditMessage(e, n.hasErr ? void 0 : n),
                        eM.focusMessage({
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
                    o.Z.dispatch({
                        type: 'MESSAGE_DELETE',
                        id: t,
                        channelId: e
                    }).then(() => {
                        a.uv.announce(ev.intl.string(ev.t.RYMs7u));
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
            let s = ea.Z.getMessage(e, t);
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
            o.Z.dispatch({
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
                    (t = 429 === e.status ? ev.intl.formatToPlainString(ev.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : ev.intl.string(ev.t.z2gyND)),
                        eE.Z.show({
                            title: ev.intl.string(ev.t.Vd1hs7),
                            body: t,
                            confirmText: ev.intl.string(ev.t.BddRzc)
                        });
                }),
        trackInvite: eD
    },
    ej = eM;
