n.d(t, { Z: () => eU }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
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
    p = n(234431),
    h = n(914498),
    m = n(333023),
    g = n(960904),
    E = n(830121),
    b = n(710845),
    y = n(247206),
    O = n(38618),
    v = n(859487),
    I = n(687516),
    S = n(539573),
    T = n(926526),
    A = n(826581),
    N = n(409059),
    C = n(264229),
    P = n(413605),
    R = n(366980),
    w = n(467512),
    D = n(779832),
    L = n(786761),
    x = n(459618),
    k = n(541288),
    M = n(3148),
    j = n(48854),
    U = n(785359),
    G = n(646504),
    B = n(64078),
    F = n(351780),
    V = n(79390),
    Z = n(980463),
    H = n(328908),
    Y = n(992970),
    W = n(576645),
    K = n(317951),
    z = n(287941),
    q = n(643266),
    Q = n(617136);
n(807092);
var X = n(869765),
    J = n(926491),
    $ = n(467798),
    ee = n(346479),
    et = n(218543),
    en = n(199902),
    er = n(314897),
    ei = n(592125);
n(323873);
var ea = n(701190),
    eo = n(375954),
    es = n(496675),
    el = n(158776),
    ec = n(306680),
    eu = n(300429),
    ed = n(594174);
n(626135);
var ef = n(70956),
    e_ = n(630388),
    ep = n(669079),
    eh = n(63063),
    em = n(74538),
    eg = n(709054),
    eE = n(861990),
    eb = n(668781),
    ey = n(981631),
    eO = n(260539),
    ev = n(959517),
    eI = n(388032);
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
function eT(e) {
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
function eA(e, t) {
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
function eN(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eA(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eC = new b.Z('MessageActionCreators'),
    eP = new b.Z('MessageQueue'),
    eR = !1;
class ew {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eS(this, 'completed', !1);
    }
}
function eD(e) {
    let { content: t, channelId: n, messageId: r, location: i, suggested: a = null, overrideProperties: o = {} } = e,
        s = er.default.getId();
    (0, E.ZP)(t).forEach((e) => {
        let { type: t, code: l, url: u } = e;
        if (t === g.g.INVITE)
            eL({
                inviteKey: l,
                channelId: n,
                messageId: r,
                location: i,
                suggested: a,
                overrideProperties: o
            });
        else if (t === g.g.TEMPLATE) {
            let e = N.Z.getGuildTemplate(l);
            if (null == e || e.state === eO.Rj.RESOLVING) return;
            c.ZP.trackWithMetadata(ey.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: l,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === g.g.BUILD_OVERRIDE);
        else if (t === g.g.MANUAL_BUILD_OVERRIDE);
        else if (t === g.g.EVENT);
        else if (t === g.g.CHANNEL_LINK);
        else if (t === g.g.APP_DIRECTORY_PROFILE) (0, v.y)(l), (0, h.z$)(l, h.Un.APP_DISCOVERY, s);
        else if (t === g.g.APP_DIRECTORY_STOREFRONT) (0, v.y)(l, 'storefront');
        else if (t === g.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, _.Q)(l);
            null != e && (0, v.y)(e.applicationId, 'storefront_sku');
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
                event: ey.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (t === g.g.APP_OAUTH2_LINK) c.ZP.trackWithMetadata(ey.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: l }), (0, h.z$)(l, h.Un.OAUTH, s);
        else if (t === g.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function eL(e) {
    var t, n;
    let { inviteKey: r, channelId: i, messageId: a, location: o, suggested: s = null, overrideProperties: l = {} } = e,
        u = er.default.getId(),
        d = ea.Z.getInvite(r),
        f = (0, C.fU)(r),
        _ = null != d && (0, P.P1)(d),
        p = null == d || null == (t = d.target_application) ? void 0 : t.id;
    null != p && _ && (0, h.z$)(p, h.Un.ACTIVITY_INVITE, u);
    let m = ei.Z.getChannel(i);
    if (null != m) {
        let e = null;
        m.isMultiUserDM() ? (e = ey.dAT.GDM_INVITE) : m.isPrivate() || (e = ey.dAT.SERVER_INVITE);
        let t = {};
        if (null != d && d.state === ey.r2o.RESOLVED && null != d.channel) {
            let r = d.channel;
            (t.invite_channel_id = r.id), (t.invite_guild_id = null == (n = d.guild) ? void 0 : n.id), (t.invite_channel_type = r.type), null != d.inviter && (t.invite_inviter_id = d.inviter.id), null != d.target_application && (t.application_id = d.target_application.id);
            let i = en.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = ey.dAT.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, I.L2)(i, el.Z);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s && ((t.is_suggested = s.isAffinitySuggestion), (t.row_num = s.rowNum), (t.num_total = s.numTotal), (t.num_affinity_connections = s.numAffinityConnections), (t.is_filtered = s.isFiltered)),
            (t = eT(
                eN(eT({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: f.baseCode,
                    guild_id: m.getGuildId(),
                    channel_id: m.id,
                    message_id: a,
                    send_type: ey.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(ey.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != d &&
            d.state === ey.r2o.RESOLVED &&
            null != d.inviter &&
            ((e.invite_inviter_id = d.inviter.id),
            null != d.target_application && (e.application_id = d.target_application.id),
            (e = eT(
                eN(eT({}, e), {
                    location: o,
                    invite_type: ey.dAT.FRIEND_INVITE,
                    invite_code: f.baseCode,
                    message_id: a,
                    send_type: ey.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId
                }),
                l
            )),
            c.ZP.trackWithMetadata(ey.rMx.INVITE_SENT, e));
    }
}
function ex(e, t, n, r, i) {
    (0, ep.Q_)(e).forEach((e) => {
        let a = ei.Z.getChannel(t);
        null != a &&
            c.ZP.trackWithMetadata(ey.rMx.GIFT_CODE_SENT, {
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
    let n = eo.Z.getMessage(e, t);
    if (null == n || n.type !== ey.uaV.REPLY) return;
    let r = X.Z.getMessageByReference(n.messageReference);
    if (r.state === X.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(ey.hCA),
            replied_user: !1
        };
}
let eM = {
        [ey.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eI.intl.string(eI.t.k1Cjqq)
        },
        [ey.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eI.intl.formatToPlainString(eI.t.CTMXwM, { helpUrl: eh.Z.getArticleURL(ey.BhN.DM_COULD_NOT_BE_DELIVERED) })
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
    ej = {
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
                c.ZP.trackWithMetadata(ey.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                ej.receiveMessage(
                    e,
                    (0, M.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, M.ZP)({
                channelId: e,
                nonce: n,
                type: ey.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: ey.iLy.EPHEMERAL,
                author: {
                    id: ey.LAt,
                    username: 'Nitro Notification',
                    discriminator: ey.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            ej.receiveMessage(
                e,
                eN(eT({}, r), {
                    state: ey.yb.SENT,
                    channel_id: e
                }),
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, M.ZP)({
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
                giftingPrompt: t
            });
            ej.receiveMessage(e, eN(eT({}, n), { state: ey.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ei.Z.getChannel(e);
            null != i && (r === ey.evJ.SLOWMODE_RATE_LIMITED ? ((t = eI.intl.formatToPlainString(eI.t.IWntYm, { seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === ey.evJ.INVALID_MESSAGE_SEND_USER ? ((t = eI.intl.formatToPlainString(eI.t.CTMXwM, { helpUrl: eh.Z.getArticleURL(ey.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === ey.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? eI.intl.string(eI.t['/jUd29']) : eI.intl.string(eI.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : r === ey.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = eI.intl.string(eI.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === ey.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = eI.intl.formatToPlainString(eI.t.zSG3Q0, { helpUrl: ey.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in eM ? ((n = eM[r].messageName), (t = eM[r].messageGetter())) : ((t = eI.intl.formatToPlainString(eI.t.CTMXwM, { helpUrl: eh.Z.getArticleURL(ey.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), ej.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ei.Z.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: s } = (0, r.EQ)({
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
                l = (0, j.r)();
            ej.sendBotMessage(e, a, s, l),
                (0, y.aP)({
                    action: y.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            ej.trackJump(e, null, 'Present');
            let n = { present: !0 };
            eo.Z.hasPresent(e)
                ? o.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : ej.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            c.ZP.trackWithMetadata(
                ey.rMx.JUMP,
                eT(
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
                'string' == typeof a && ej.trackJump(t, n, a, o),
                ej.fetchMessages({
                    channelId: t,
                    limit: ey.Z8P,
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
            ej.fetchMessages({
                channelId: t,
                limit: ey.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return i.tn
                .get({
                    url: ey.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, L.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: t, before: n, after: r, limit: a, jump: l, focus: c, isPreload: u, skipLocalFetch: d, truncate: f, forICYMI: _ } = e,
                p = ei.Z.getChannel(t),
                h = O.Z.isConnectedOrOverlay(),
                g = Date.now();
            if (null != p && p.type === ey.d4z.GUILD_STORE) return !1;
            if (
                t === m.V ||
                (eC.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))),
                ej._tryFetchMessagesCached({
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
            et.Z.fetchMessages.recordStart();
            let E = null != l ? l : void 0;
            null == E && null != c && (E = eT({}, c));
            let b = s.Z.getOrCreate(t).loadStart(E);
            s.Z.commit(b), o.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let y = null == E ? void 0 : E.messageId,
                v = new ew();
            return (
                d || this.fetchLocalMessages(t, n, r, a, v),
                i.tn
                    .get({
                        url: ey.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: a,
                            around: y,
                            preload: u
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            et.Z.fetchMessages.recordEnd(),
                            et.Z.dispatchMessages.measure(() => {
                                let i = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != y || (i.length === a && (s || u)),
                                    p = null != y || (c && i.length === a);
                                if (null != y) {
                                    let e = Math.floor(a / 2),
                                        n = e + (a % 2),
                                        r = [
                                            y,
                                            ...i.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(eg.default.compare)
                                            .indexOf(y);
                                    if ((r < n - 1 && (d = !1), i.length - r < e && (p = !1), p && i.length > 0)) {
                                        let e = ec.ZP.lastMessageId(t);
                                        i[0].id === e && (p = !1);
                                    }
                                }
                                eC.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(c)),
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
                                        isStale: !h || O.Z.lastTimeConnectedChanged() >= g,
                                        truncate: f
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eC.log('Failed to fetch messages for '.concat(t)),
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
            let a = ei.Z.getBasicChannel(e),
                l = s.Z.getOrCreate(e),
                c = u.Z.database();
            if (null == c || null == a || null != t || null != n) return void et.Z.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void et.Z.addLocalMessages(e, -2);
            let _ = await (0, d.dI)(() => f.ZP.load(c, e, r));
            if (null == _) return void et.Z.addLocalMessages(e, -3);
            if ((eC.log('fetched '.concat(_.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), et.Z.addLocalMessages(e, _.messages.length), !i.completed && _.messages.length > 0)) {
                let t = _.messages.length >= r && _.connectionId === O.Z.lastTimeConnectedChanged();
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
            let r = ei.Z.getBasicChannel(e),
                i = u.Z.database();
            if (null == i || null == r) return;
            let a = s.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let l = await (0, d.dI)(() => f.ZP.load(i, e, t));
            if (null == l) return;
            let c = null == (n = (a = s.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                _ = null == c ? l.messages : l.messages.filter((e) => eg.default.compare(e.id, c) > 0);
            eC.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(_.length, ' are new')),
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
                c = eo.Z.getMessages(t);
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
                    else a = eT({}, s);
                let e = (null == a ? void 0 : a.messageId) != null ? eg.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
                    n = c.first(),
                    r = c.last();
                if ((!c.hasMoreBefore && null != n && eg.default.extractTimestamp(n.id) >= e) || (!c.hasMoreAfter && null != r && eg.default.extractTimestamp(r.id) <= e) || (null != n && null != r && eg.default.extractTimestamp(n.id) < e && eg.default.extractTimestamp(r.id) > e))
                    return (
                        o.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: ey.Z8P
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
            let a = await (0, q.Z)(e);
            if (null != a) return ej.sendMessage(a, t, r, i);
            let o = () => ej._sendMessage(e, t, i),
                s = D.ZP.backgroundify(o, void 0),
                l = null != (n = i.nonce) ? n : (0, j.r)();
            return ((i = eN(eT({}, i), { nonce: l })), x.Z.recordMessageSendAttempt(e, l), eo.Z.isReady(e))
                ? s()
                : r && e !== m.V
                  ? (eP.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        eo.Z.whenReady(e, () => {
                            eP.info('Channel '.concat(e, ' is ready for sending now.')), s().then(t, n);
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
                                parse: Object.values(ey.hCA),
                                replied_user: !1
                            }
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: a, confettiPotionEmoji: o } = e;
            return null != o && (0, W.tv)(n, r, i, a)
                ? {
                      confettiPotionData: {
                          emoji: o,
                          callback: () => (0, H.Hb)(t)
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
            let t = ej.getSendMessageOptionsForReply(e.pendingReply),
                n = ej.getSendMessageOptionsForConfettiPotion(eT({}, e)),
                r = ej.getSendMessageOptionsForStickers(eT({}, e)),
                i = ej.getSendMessageOptionsForScheduledMessage(eT({}, e));
            return eT({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, R.Z)(t);
            return (
                null != i && (a = ''.concat(i, '\n').concat(a)),
                ej._sendMessage(
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
            ej._sendMessage(
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
            return ej._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                eN(eT({}, r), { stickerIds: t })
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: a } = n;
            return i.tn
                .post({
                    url: ey.ANM.MESSAGES_GREET(e),
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
                        ej.receiveMessage(e, n.body),
                        o.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eC.log('Failed to send greeting'),
                            429 !== t.status && ej.sendClydeError(e, t.body.code),
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
            return ej._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                eN(eT({}, n), { poll: t })
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !em.ZP.canUseAnimatedEmojis(t) ? ((r = eI.intl.string(eI.t.msFJy8)), (i = 'INVALID_ANIMATED_EMOJI_BODY')) : es.Z.canWithPartialContext(ey.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((r = eI.intl.string(eI.t.FzugNj)), (i = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((r = eI.intl.string(eI.t.Q87rIy)), (i = 'INVALID_EXTERNAL_EMOJI_BODY')),
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
                u = (0, q.Z)(e);
            if (null != u)
                return (
                    eP.info('Converting channel to a private channel'),
                    u.then((e) => {
                        eP.info('Finished converting channel to a private channel'), ej._sendMessage(e, t, n);
                    })
                );
            let d = t.content,
                { invalidEmojis: f, validNonShortcutEmojis: _, tts: p = !1 } = t,
                { activityAction: h, location: m, suggestedInvite: g, stickerIds: E, confettiPotionData: b, messageReference: O, allowedMentions: v, poll: I, contentInventoryEntry: N, attachments: C, attachmentsToUpload: P, onAttachmentUploadError: R } = n,
                D = null != (i = n.flags) ? i : 0,
                [G, H] = (0, $.Z)(d);
            G && ((d = H), (D = (0, e_.pj)(D, ey.iLy.SUPPRESS_NOTIFICATIONS)));
            let Q = !1,
                X = (null == (r = n.messageReference) ? void 0 : r.type) === ey.Uvt.FORWARD;
            if ('' === d && null == h && null == E && null == I && null == N && !X && (null == C || 0 === C.length))
                if (null == P || !(P.length > 0)) return Promise.resolve();
                else Q = !0;
            let ee = null != O ? ey.uaV.REPLY : ey.uaV.DEFAULT,
                et = null != (a = n.nonce) ? a : (0, j.r)(),
                en = et;
            if (
                (!1 !== n.eagerDispatch &&
                    ((s = (0, M.ZP)({
                        channelId: e,
                        content: d,
                        tts: p,
                        type: ee,
                        messageReference: O,
                        allowedMentions: v,
                        flags: 0 !== D ? D : void 0,
                        nonce: et,
                        poll: (0, V.x9)(I)
                    })),
                    (0, B.EL)(e, s.id),
                    null != E && (s.sticker_items = E.map((e) => J.Z.getStickerById(e)).filter((e) => null != e)),
                    ej.receiveMessage(e, s, !0, n)),
                !eR && null != f && f.length > 0)
            ) {
                eR = !0;
                let t = ed.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = ej.validateMessage(f, t, e);
                ej.sendBotMessage(e, n, r);
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
                    flags: D
                }
            };
            if (null != h) {
                let e,
                    t = null == h ? void 0 : h.activity.session_id;
                if (null != (e = h.type === ey.mFx.JOIN_REQUEST || null != t ? t : er.default.getSessionId())) {
                    let t = {
                            type: h.type,
                            session_id: e
                        },
                        { activity: n } = h;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (ei.message.application_id = n.application_id), (ei.message.activity = t);
                }
            }
            if ((null != I && (ei.message.poll = I), null != E && (ei.message.sticker_ids = E), F.Z.isEnabled() && (ei.message.has_poggermode_enabled = !0), null != N && (ei.message.content_inventory_entry = N), null != b && ((ei.message.confetti_potion = (0, W.vY)(b)), b.callback()), null != C && C.length > 0 && (ei.message.attachments = C), null != P && P.length > 0))
                try {
                    let t = await (0, w.c)({
                        channelId: e,
                        nonce: et,
                        items: P,
                        message: s,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((c = t.uploader), Q && (null == r || 0 === r.length))) return;
                    null != r && (ei.message.attachments = r.map((e, t) => (0, eE.B)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n } = r;
                    (0, U.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg
                    }),
                        null == R || R(e, t, n);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = l.ZP.length,
                    u = Math.floor(10000 * Math.random());
                eP.info('Queueing message to be sent LogId:'.concat(u)),
                    l.ZP.enqueue(
                        ei,
                        (u) => {
                            let f = Date.now() - i;
                            if (u.ok) {
                                k.Z.donateSentMessage(d, e),
                                    ej.receiveMessage(e, u.body, !0, {
                                        sendAnalytics: {
                                            duration: f,
                                            queueSize: a
                                        },
                                        poll: I
                                    });
                                let r = (0, W.ZC)(u.body);
                                null != r &&
                                    ((0, Z.gA)(K.D1),
                                    (0, z.I)(
                                        {
                                            name: r.name,
                                            id: r.id
                                        },
                                        void 0,
                                        !0,
                                        Y.LL.MessageSent
                                    ));
                                let i = eg.default.cast(e),
                                    s = A.Z.getRequest(i);
                                if (null != s) {
                                    let { guildId: t, userId: n, applicationStatus: r } = s;
                                    (0, T.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: u.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n
                                    });
                                }
                                x.Z.recordMessageSendApiResponse(et),
                                    o.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: eu.S.SendMessage,
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
                                            author: ed.default.getCurrentUser()
                                        }
                                    }),
                                    eD({
                                        content: d,
                                        channelId: e,
                                        messageId: u.body.id,
                                        location: null != m ? m : 'chat_input',
                                        suggested: g
                                    }),
                                    ex(d, e, u.body.id, null != m ? m : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                    t(u);
                            } else {
                                var p;
                                let t;
                                eC.log('Failed to send message', {
                                    hasErr: u.hasErr,
                                    status: u.status,
                                    code: null == (p = u.body) ? void 0 : p.code,
                                    error: u.err
                                });
                                let i = !1;
                                if (u.hasErr) 'ABORTED' === u.err.code && (i = !0);
                                else if (u.status >= 400 && u.status < 500 && u.body)
                                    if (u.body.code === ey.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = u.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            o.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: e,
                                                slowmodeType: eu.S.SendMessage,
                                                cooldownMs: t * ef.Z.Millis.SECOND
                                            });
                                    } else
                                        S.U8.has(u.body.code)
                                            ? o.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                  messageData: ei,
                                                  errorResponseBody: {
                                                      code: u.body.code,
                                                      message: u.body.message
                                                  }
                                              })
                                            : u.body.code === ey.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                              : u.body.code === ey.evJ.EXPLICIT_CONTENT
                                                ? ((t = ev.xi.EXPLICIT_CONTENT),
                                                  null != c &&
                                                      o.Z.dispatch({
                                                          type: 'UPLOAD_FAIL',
                                                          channelId: e,
                                                          file: c._file,
                                                          messageRecord: (0, L.e5)(eN(eT({}, s), { key: 'pending-upload-'.concat(c._file.id) })),
                                                          reason: ev.xi.EXPLICIT_CONTENT,
                                                          noSendFailed: !0
                                                      }),
                                                  ej.sendExplicitMediaClydeError(e, u.body.attachments, y.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED))
                                                : null != I || X || null != N || ej.sendClydeError(e, u.body.code);
                                i
                                    ? ej.deleteMessage(e, en, !0)
                                    : (o.Z.dispatch({
                                          type: 'MESSAGE_SEND_FAILED',
                                          messageId: en,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t
                                      }),
                                      (0, U.x)({
                                          failureCode: u.hasErr ? void 0 : u.status,
                                          errorMessage: u.hasErr ? u.err.message : void 0
                                      }),
                                      l.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          eC.log('Cancelling pending message', e.nonce),
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
            await ee.Z.unarchiveThreadIfNecessary(e);
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
                    n.hasErr ? a.uv.announce(eI.intl.string(eI.t.Atp7FB)) : r ? a.uv.announce(eI.intl.string(eI.t.Hym4i4)) : a.uv.announce(eI.intl.string(eI.t['0x1HBA'])),
                        ej.endEditMessage(e, n.hasErr ? void 0 : n),
                        ej.focusMessage({
                            channelId: e,
                            messageId: t
                        });
                }
            );
        },
        async suppressEmbeds(e, t) {
            await ee.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: ey.ANM.MESSAGE(e, t),
                    body: { flags: ey.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        },
        async patchMessageAttachments(e, t, n) {
            await ee.Z.unarchiveThreadIfNecessary(e),
                i.tn.patch({
                    url: ey.ANM.MESSAGE(e, t),
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
                        a.uv.announce(eI.intl.string(eI.t.RYMs7u));
                    });
                };
            n
                ? r()
                : (await ee.Z.unarchiveThreadIfNecessary(e),
                  i.tn
                      .del({
                          url: ey.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          r();
                      }));
            let s = eo.Z.getMessage(e, t);
            (null == s ? void 0 : s.type) === ey.uaV.GUILD_INVITE_REMINDER && (0, G.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                c.ZP.trackWithMetadata(ey.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: ey.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let t;
                    (t = 429 === e.status ? eI.intl.formatToPlainString(eI.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : eI.intl.string(eI.t.z2gyND)),
                        eb.Z.show({
                            title: eI.intl.string(eI.t.Vd1hs7),
                            body: t,
                            confirmText: eI.intl.string(eI.t.BddRzc)
                        });
                }),
        trackInvite: eL
    },
    eU = ej;
