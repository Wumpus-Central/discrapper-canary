n.d(t, { Z: () => ex }), n(266796), n(411104), n(627341), n(26686), n(47120), n(230036), n(789020);
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
    v = n(859487),
    O = n(687516),
    I = n(539573),
    S = n(926526),
    T = n(826581),
    N = n(409059),
    A = n(264229),
    C = n(413605),
    R = n(366980),
    P = n(779832),
    w = n(786761),
    D = n(459618),
    L = n(541288),
    x = n(3148),
    M = n(48854),
    k = n(785359),
    j = n(646504),
    U = n(64078),
    G = n(351780),
    B = n(79390),
    F = n(980463),
    V = n(328908),
    Z = n(992970),
    H = n(576645),
    W = n(317951),
    Y = n(287941),
    K = n(643266),
    z = n(617136);
n(807092);
var q = n(869765),
    Q = n(926491),
    X = n(467798),
    J = n(346479),
    $ = n(218543),
    ee = n(199902),
    et = n(314897),
    en = n(592125);
n(323873);
var er = n(701190),
    ei = n(375954),
    eo = n(496675),
    ea = n(158776),
    es = n(306680),
    el = n(300429),
    ec = n(594174);
n(626135);
var eu = n(70956),
    ed = n(630388),
    ef = n(669079),
    e_ = n(63063),
    ep = n(74538),
    eh = n(709054),
    em = n(668781),
    eg = n(981631),
    eE = n(58346),
    eb = n(388032);
function ey(e, t, n) {
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
                ey(e, t, n[t]);
            });
    }
    return e;
}
function eO(e, t) {
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
function eI(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eO(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eS = new E.Z('MessageActionCreators'),
    eT = new E.Z('MessageQueue'),
    eN = !1;
class eA {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        ey(this, 'completed', !1);
    }
}
function eC(e) {
    let { content: t, channelId: n, messageId: r, location: i, suggested: o = null, overrideProperties: a = {} } = e,
        s = et.default.getId();
    (0, g.ZP)(t).forEach((e) => {
        let { type: t, code: l } = e;
        if (t === m.g.INVITE)
            eR({
                inviteKey: l,
                channelId: n,
                messageId: r,
                location: i,
                suggested: o,
                overrideProperties: a
            });
        else if (t === m.g.TEMPLATE) {
            let e = N.Z.getGuildTemplate(l);
            if (null == e || e.state === eE.Rj.RESOLVING) return;
            c.ZP.trackWithMetadata(eg.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: l,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === m.g.BUILD_OVERRIDE);
        else if (t === m.g.MANUAL_BUILD_OVERRIDE);
        else if (t === m.g.EVENT);
        else if (t === m.g.CHANNEL_LINK);
        else if (t === m.g.APP_DIRECTORY_PROFILE) (0, v.y)(l), (0, p.z$)(l, p.Un.APP_DISCOVERY, s);
        else if (t === m.g.APP_DIRECTORY_STOREFRONT) (0, v.y)(l, 'storefront');
        else if (t === m.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, _.Q)(l);
            null != e && (0, v.y)(e.applicationId, 'storefront_sku');
        } else if (t === m.g.ACTIVITY_BOOKMARK) (0, p.z$)(l, p.Un.ACTIVITY, s);
        else if (t === m.g.EMBEDDED_ACTIVITY_INVITE) (0, p.z$)(l, p.Un.ACTIVITY_INVITE, s);
        else if (t === m.g.GUILD_PRODUCT);
        else if (t === m.g.SERVER_SHOP);
        else if (t === m.g.QUESTS_EMBED)
            (0, z.dA)({
                questId: l,
                event: eg.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (t === m.g.APP_OAUTH2_LINK) c.ZP.trackWithMetadata(eg.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: l }), (0, p.z$)(l, p.Un.OAUTH, s);
        else if (t === m.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function eR(e) {
    var t, n;
    let { inviteKey: r, channelId: i, messageId: o, location: a, suggested: s = null, overrideProperties: l = {} } = e,
        u = et.default.getId(),
        d = er.Z.getInvite(r),
        f = (0, A.fU)(r),
        _ = null != d && (0, C.P1)(d),
        h = null == d || null == (t = d.target_application) ? void 0 : t.id;
    null != h && _ && (0, p.z$)(h, p.Un.ACTIVITY_INVITE, u);
    let m = en.Z.getChannel(i);
    if (null != m) {
        let e = null;
        m.isMultiUserDM() ? (e = eg.dAT.GDM_INVITE) : m.isPrivate() || (e = eg.dAT.SERVER_INVITE);
        let t = {};
        if (null != d && d.state === eg.r2o.RESOLVED && null != d.channel) {
            let r = d.channel;
            (t.invite_channel_id = r.id), (t.invite_guild_id = null == (n = d.guild) ? void 0 : n.id), (t.invite_channel_type = r.type), null != d.inviter && (t.invite_inviter_id = d.inviter.id), null != d.target_application && (t.application_id = d.target_application.id);
            let i = ee.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = eg.dAT.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, O.L2)(i, ea.Z);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s && ((t.is_suggested = s.isAffinitySuggestion), (t.row_num = s.rowNum), (t.num_total = s.numTotal), (t.num_affinity_connections = s.numAffinityConnections), (t.is_filtered = s.isFiltered)),
            (t = ev(
                eI(ev({}, t), {
                    location: a,
                    invite_type: e,
                    invite_code: f.baseCode,
                    guild_id: m.getGuildId(),
                    channel_id: m.id,
                    message_id: o,
                    send_type: eg.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(eg.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != d &&
            d.state === eg.r2o.RESOLVED &&
            null != d.inviter &&
            ((e.invite_inviter_id = d.inviter.id),
            null != d.target_application && (e.application_id = d.target_application.id),
            (e = ev(
                eI(ev({}, e), {
                    location: a,
                    invite_type: eg.dAT.FRIEND_INVITE,
                    invite_code: f.baseCode,
                    message_id: o,
                    send_type: eg.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(eg.rMx.INVITE_SENT, e));
    }
}
function eP(e, t, n, r, i) {
    (0, ef.Q_)(e).forEach((e) => {
        let o = en.Z.getChannel(t);
        null != o &&
            c.ZP.trackWithMetadata(eg.rMx.GIFT_CODE_SENT, {
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
function ew(e, t) {
    let n = ei.Z.getMessage(e, t);
    if (null == n || n.type !== eg.uaV.REPLY) return;
    let r = q.Z.getMessageByReference(n.messageReference);
    if (r.state === q.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eg.hCA),
            replied_user: !1
        };
}
let eD = {
        [eg.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eb.NW.string(eb.t.k1Cjqq)
        },
        [eg.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eb.NW.formatToPlainString(eb.t.CTMXwM, { helpUrl: e_.Z.getArticleURL(eg.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [eg.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => eb.NW.string(eb.t.E8nbNT)
        },
        [eg.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eb.NW.string(eb.t.aRUbam)
        },
        [eg.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eb.NW.string(eb.t.aRUbam)
        },
        [eg.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => eb.NW.string(eb.t['/meGhY'])
        },
        [eg.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => eb.NW.string(eb.t.Oc1Zj4)
        }
    },
    eL = {
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
                c.ZP.trackWithMetadata(eg.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                eL.receiveMessage(
                    e,
                    (0, x.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, x.ZP)({
                channelId: e,
                nonce: n,
                type: eg.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eg.iLy.EPHEMERAL,
                author: {
                    id: eg.LAt,
                    username: 'Nitro Notification',
                    discriminator: eg.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            eL.receiveMessage(
                e,
                eI(ev({}, r), {
                    state: eg.yb.SENT,
                    channel_id: e
                }),
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, x.ZP)({
                channelId: e,
                type: eg.uaV.GIFTING_PROMPT,
                content: '',
                flags: eg.iLy.EPHEMERAL,
                author: {
                    id: eg.LAt,
                    username: 'Gifting Prompt',
                    discriminator: eg.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: t
            });
            eL.receiveMessage(e, eI(ev({}, n), { state: eg.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = en.Z.getChannel(e);
            null != i && (r === eg.evJ.SLOWMODE_RATE_LIMITED ? ((t = eb.NW.formatToPlainString(eb.t.IWntYm, { seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === eg.evJ.INVALID_MESSAGE_SEND_USER ? ((t = eb.NW.formatToPlainString(eb.t.CTMXwM, { helpUrl: e_.Z.getArticleURL(eg.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === eg.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? eb.NW.string(eb.t['/jUd29']) : eb.NW.string(eb.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : r === eg.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = eb.NW.string(eb.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === eg.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = eb.NW.formatToPlainString(eb.t.zSG3Q0, { helpUrl: eg.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in eD ? ((n = eD[r].messageName), (t = eD[r].messageGetter())) : ((t = eb.NW.formatToPlainString(eb.t.CTMXwM, { helpUrl: e_.Z.getArticleURL(eg.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), eL.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = en.Z.getChannel(e);
            if (null == i) return;
            let { message: o, messageName: s } = (0, r.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: eb.NW.string(eb.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: eb.NW.string(eb.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: eb.NW.string(eb.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                l = (0, M.r)();
            eL.sendBotMessage(e, o, s, l),
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
            eL.trackJump(e, null, 'Present');
            let n = { present: !0 };
            ei.Z.hasPresent(e)
                ? a.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : eL.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            c.ZP.trackWithMetadata(
                eg.rMx.JUMP,
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
                'string' == typeof o && eL.trackJump(t, n, o, a),
                eL.fetchMessages({
                    channelId: t,
                    limit: eg.Z8P,
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
            eL.fetchMessages({
                channelId: t,
                limit: eg.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return i.tn
                .get({
                    url: eg.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n
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
            let { channelId: t, before: n, after: r, limit: o, jump: l, focus: c, isPreload: u, skipLocalFetch: d, truncate: f, forICYMI: _ } = e,
                p = en.Z.getChannel(t),
                m = y.Z.isConnectedOrOverlay(),
                g = Date.now();
            if (null != p && p.type === eg.d4z.GUILD_STORE) return !1;
            if (
                t === h.V ||
                (eS.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))),
                eL._tryFetchMessagesCached({
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
            $.Z.fetchMessages.recordStart();
            let E = null != l ? l : void 0;
            null == E && null != c && (E = ev({}, c));
            let b = s.Z.getOrCreate(t).loadStart(E);
            s.Z.commit(b), a.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let v = null == E ? void 0 : E.messageId,
                O = new eA();
            return (
                d || this.fetchLocalMessages(t, n, r, o, O),
                i.tn
                    .get({
                        url: eg.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: o,
                            around: v,
                            preload: u
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            $.Z.fetchMessages.recordEnd(),
                            $.Z.dispatchMessages.measure(() => {
                                let i = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != v || (i.length === o && (s || u)),
                                    p = null != v || (c && i.length === o);
                                if (null != v) {
                                    let e = Math.floor(o / 2),
                                        n = e + (o % 2),
                                        r = [
                                            v,
                                            ...i.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(eh.default.compare)
                                            .indexOf(v);
                                    if ((r < n - 1 && (d = !1), i.length - r < e && (p = !1), p && i.length > 0)) {
                                        let e = es.ZP.lastMessageId(t);
                                        i[0].id === e && (p = !1);
                                    }
                                }
                                eS.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(c)),
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
                                        isStale: !m || y.Z.lastTimeConnectedChanged() >= g,
                                        truncate: f
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eS.log('Failed to fetch messages for '.concat(t)),
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
            let o = en.Z.getBasicChannel(e),
                l = s.Z.getOrCreate(e),
                c = u.Z.database();
            if (null == c || null == o || null != t || null != n) return void $.Z.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void $.Z.addLocalMessages(e, -2);
            let _ = await (0, d.dI)(() => f.ZP.load(c, e, r));
            if (null == _) return void $.Z.addLocalMessages(e, -3);
            if ((eS.log('fetched '.concat(_.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), $.Z.addLocalMessages(e, _.messages.length), !i.completed && _.messages.length > 0)) {
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
            let r = en.Z.getBasicChannel(e),
                i = u.Z.database();
            if (null == i || null == r) return;
            let o = s.Z.getOrCreate(e);
            if (o.hasMoreAfter) return;
            let l = await (0, d.dI)(() => f.ZP.load(i, e, t));
            if (null == l) return;
            let c = null == (n = (o = s.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                _ = null == c ? l.messages : l.messages.filter((e) => eh.default.compare(e.id, c) > 0);
            eS.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(_.length, ' are new')),
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
                c = ei.Z.getMessages(t);
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
                    else o = ev({}, s);
                let e = (null == o ? void 0 : o.messageId) != null ? eh.default.extractTimestamp(null == o ? void 0 : o.messageId) : 0,
                    n = c.first(),
                    r = c.last();
                if ((!c.hasMoreBefore && null != n && eh.default.extractTimestamp(n.id) >= e) || (!c.hasMoreAfter && null != r && eh.default.extractTimestamp(r.id) <= e) || (null != n && null != r && eh.default.extractTimestamp(n.id) < e && eh.default.extractTimestamp(r.id) > e))
                    return (
                        a.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: o,
                            limit: eg.Z8P
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
            let o = await (0, K.Z)(e);
            if (null != o) return eL.sendMessage(o, t, r, i);
            let a = () => eL._sendMessage(e, t, i),
                s = P.ZP.backgroundify(a, void 0),
                l = null != (n = i.nonce) ? n : (0, M.r)();
            return ((i = eI(ev({}, i), { nonce: l })), D.Z.recordMessageSendAttempt(e, l), ei.Z.isReady(e))
                ? s()
                : r && e !== h.V
                  ? (eT.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        ei.Z.whenReady(e, () => {
                            eT.info('Channel '.concat(e, ' is ready for sending now.')), s().then(t, n);
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
                                parse: Object.values(eg.hCA),
                                replied_user: !1
                            }
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: o, confettiPotionEmoji: a } = e;
            return null != a && (0, H.tv)(n, r, i, o)
                ? {
                      confettiPotionData: {
                          emoji: a,
                          callback: () => (0, V.Hb)(t)
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
            let t = eL.getSendMessageOptionsForReply(e.pendingReply),
                n = eL.getSendMessageOptionsForConfettiPotion(ev({}, e)),
                r = eL.getSendMessageOptionsForStickers(ev({}, e)),
                i = eL.getSendMessageOptionsForScheduledMessage(ev({}, e));
            return ev({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let o = (0, R.Z)(t);
            return (
                null != i && (o = ''.concat(i, '\n').concat(o)),
                eL._sendMessage(
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
            eL._sendMessage(
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
            return eL._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                eI(ev({}, r), { stickerIds: t })
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: o } = n;
            return i.tn
                .post({
                    url: eg.ANM.MESSAGES_GREET(e),
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
                        L.Z.donateSentMessage(n.body.content, e),
                        eL.receiveMessage(e, n.body),
                        a.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eS.log('Failed to send greeting'),
                            429 !== t.status && eL.sendClydeError(e, t.body.code),
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
            return eL._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                eI(ev({}, n), { poll: t })
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !ep.ZP.canUseAnimatedEmojis(t) ? ((r = eb.NW.string(eb.t.msFJy8)), (i = 'INVALID_ANIMATED_EMOJI_BODY')) : eo.Z.canWithPartialContext(eg.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((r = eb.NW.string(eb.t.FzugNj)), (i = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((r = eb.NW.string(eb.t.Q87rIy)), (i = 'INVALID_EXTERNAL_EMOJI_BODY')),
                {
                    errorMessage: r,
                    errorMessageName: i
                }
            );
        },
        _sendMessage(e, t, n) {
            var r, i, o;
            let s = (0, K.Z)(e);
            if (null != s)
                return (
                    eT.info('Converting channel to a private channel'),
                    s.then((e) => {
                        eT.info('Finished converting channel to a private channel'), eL._sendMessage(e, t, n);
                    })
                );
            let c = t.content,
                { invalidEmojis: u, validNonShortcutEmojis: d, tts: f = !1 } = t,
                { activityAction: _, location: p, suggestedInvite: h, stickerIds: m, confettiPotionData: g, messageReference: E, allowedMentions: b, poll: y, contentInventoryEntry: v } = n,
                O = null != (i = n.flags) ? i : 0,
                [N, A] = (0, X.Z)(c);
            N && ((c = A), (O = (0, ed.pj)(O, eg.iLy.SUPPRESS_NOTIFICATIONS)));
            let C = (null == (r = n.messageReference) ? void 0 : r.type) === eg.Uvt.FORWARD;
            if ('' === c && null == _ && null == m && null == y && null == v && !C) return Promise.resolve();
            let R = null != E ? eg.uaV.REPLY : eg.uaV.DEFAULT,
                P = null != (o = n.nonce) ? o : (0, M.r)(),
                w = P;
            if (!1 !== n.eagerDispatch) {
                let t = (0, x.ZP)({
                    channelId: e,
                    content: c,
                    tts: f,
                    type: R,
                    messageReference: E,
                    allowedMentions: b,
                    flags: 0 !== O ? O : void 0,
                    nonce: P,
                    poll: (0, B.x9)(y)
                });
                (0, U.EL)(e, t.id), null != m && (t.sticker_items = m.map((e) => Q.Z.getStickerById(e)).filter((e) => null != e)), eL.receiveMessage(e, t, !0, n);
            }
            if (!eN && null != u && u.length > 0) {
                eN = !0;
                let t = ec.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eL.validateMessage(u, t, e);
                eL.sendBotMessage(e, n, r);
            }
            let j = {
                type: l.$V.SEND,
                message: {
                    channelId: e,
                    content: c,
                    nonce: P,
                    tts: f,
                    message_reference: E,
                    allowed_mentions: b,
                    flags: O
                }
            };
            if (null != _) {
                let e,
                    t = null == _ ? void 0 : _.activity.session_id;
                if (null != (e = _.type === eg.mFx.JOIN_REQUEST || null != t ? t : et.default.getSessionId())) {
                    let t = {
                            type: _.type,
                            session_id: e
                        },
                        { activity: n } = _;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (j.message.application_id = n.application_id), (j.message.activity = t);
                }
            }
            return (
                null != y && (j.message.poll = y),
                null != m && (j.message.sticker_ids = m),
                G.Z.isEnabled() && (j.message.has_poggermode_enabled = !0),
                null != v && (j.message.content_inventory_entry = v),
                null != g && ((j.message.confetti_potion = (0, H.vY)(g)), g.callback()),
                new Promise((t, r) => {
                    let i = Date.now(),
                        o = l.ZP.length,
                        s = Math.floor(10000 * Math.random());
                    eT.info('Queueing message to be sent LogId:'.concat(s)),
                        l.ZP.enqueue(
                            j,
                            (s) => {
                                let u = Date.now() - i;
                                if (s.ok) {
                                    L.Z.donateSentMessage(c, e),
                                        eL.receiveMessage(e, s.body, !0, {
                                            sendAnalytics: {
                                                duration: u,
                                                queueSize: o
                                            },
                                            poll: y
                                        });
                                    let r = (0, H.ZC)(s.body);
                                    null != r &&
                                        ((0, F.gA)(W.D1),
                                        (0, Y.I)(
                                            {
                                                name: r.name,
                                                id: r.id
                                            },
                                            void 0,
                                            !0,
                                            Z.LL.MessageSent
                                        ));
                                    let i = eh.default.cast(e),
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
                                    D.Z.recordMessageSendApiResponse(P),
                                        a.Z.dispatch({
                                            type: 'SLOWMODE_RESET_COOLDOWN',
                                            slowmodeType: el.S.SendMessage,
                                            channelId: e
                                        }),
                                        a.Z.dispatch({
                                            type: 'EMOJI_TRACK_USAGE',
                                            emojiUsed: d
                                        }),
                                        a.Z.dispatch({
                                            type: 'STICKER_TRACK_USAGE',
                                            stickerIds: m
                                        }),
                                        a.Z.dispatch({
                                            type: 'LOCAL_MESSAGE_CREATE',
                                            message: {
                                                channel_id: e,
                                                author: ec.default.getCurrentUser()
                                            }
                                        }),
                                        eC({
                                            content: c,
                                            channelId: e,
                                            messageId: s.body.id,
                                            location: null != p ? p : 'chat_input',
                                            suggested: h
                                        }),
                                        eP(c, e, s.body.id, null != p ? p : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                        t(s);
                                } else {
                                    var f;
                                    eS.log('Failed to send message', {
                                        hasErr: s.hasErr,
                                        status: s.status,
                                        code: null == (f = s.body) ? void 0 : f.code,
                                        error: s.err
                                    });
                                    let t = !1;
                                    if (s.hasErr) 'ABORTED' === s.err.code && (t = !0);
                                    else if (s.status >= 400 && s.status < 500 && s.body)
                                        if (s.body.code === eg.evJ.SLOWMODE_RATE_LIMITED) {
                                            let t = s.body.retry_after;
                                            null != t &&
                                                t > 0 &&
                                                a.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: e,
                                                    slowmodeType: el.S.SendMessage,
                                                    cooldownMs: t * eu.Z.Millis.SECOND
                                                });
                                        } else
                                            I.U8.has(s.body.code)
                                                ? a.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                      messageData: j,
                                                      errorResponseBody: {
                                                          code: s.body.code,
                                                          message: s.body.message
                                                      }
                                                  })
                                                : s.body.code === eg.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                                  ? a.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                                  : null != y || C || null != v || eL.sendClydeError(e, s.body.code);
                                    t
                                        ? eL.deleteMessage(e, w, !0)
                                        : (a.Z.dispatch({
                                              type: 'MESSAGE_SEND_FAILED',
                                              messageId: w,
                                              channelId: e,
                                              shouldNotify: !n.doNotNotifyOnError
                                          }),
                                          (0, k.x)({
                                              failureCode: s.hasErr ? void 0 : s.status,
                                              errorMessage: s.hasErr ? s.err.message : void 0
                                          }),
                                          l.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                              eS.log('Cancelling pending message', e.nonce),
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
            await J.Z.unarchiveThreadIfNecessary(e);
            let i = ew(e, t),
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
                    n.hasErr ? o.uv.announce(eb.NW.string(eb.t.Atp7FB)) : r ? o.uv.announce(eb.NW.string(eb.t.Hym4i4)) : o.uv.announce(eb.NW.string(eb.t['0x1HBA'])),
                        eL.endEditMessage(e, n.hasErr ? void 0 : n),
                        eL.focusMessage({
                            channelId: e,
                            messageId: t
                        });
                }
            );
        },
        async suppressEmbeds(e, t) {
            await J.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eg.ANM.MESSAGE(e, t),
                    body: { flags: eg.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, t, n) {
            await J.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: eg.ANM.MESSAGE(e, t),
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
                        o.uv.announce(eb.NW.string(eb.t.RYMs7u));
                    });
                };
            n
                ? r()
                : (await J.Z.unarchiveThreadIfNecessary(e),
                  i.tn
                      .del({
                          url: eg.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          r();
                      }));
            let s = ei.Z.getMessage(e, t);
            (null == s ? void 0 : s.type) === eg.uaV.GUILD_INVITE_REMINDER && (0, j.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                c.ZP.trackWithMetadata(eg.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: eg.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let t;
                    (t = 429 === e.status ? eb.NW.formatToPlainString(eb.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : eb.NW.string(eb.t.z2gyND)),
                        em.Z.show({
                            title: eb.NW.string(eb.t.Vd1hs7),
                            body: t,
                            confirmText: eb.NW.string(eb.t.BddRzc)
                        });
                }),
        trackInvite: eR
    },
    ex = eL;
