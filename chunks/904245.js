(n.d(t, { Z: () => eF }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841));
var r = n(278074),
    i = n(636977),
    a = n(544891),
    o = n(780384),
    s = n(570140),
    l = n(911969),
    c = n(89892),
    u = n(673750),
    d = n(367907),
    _ = n(287328),
    f = n(86670),
    p = n(685736),
    h = n(421474),
    m = n(234431),
    g = n(914498),
    E = n(333023),
    b = n(960904),
    y = n(830121),
    O = n(710845),
    v = n(247206),
    I = n(470734),
    T = n(38618),
    S = n(859487),
    A = n(687516),
    N = n(539573),
    C = n(926526),
    R = n(826581),
    P = n(409059),
    w = n(264229),
    D = n(413605),
    L = n(366980),
    x = n(467512),
    M = n(779832),
    k = n(786761),
    j = n(459618),
    U = n(541288),
    G = n(3148),
    B = n(48854),
    V = n(785359),
    F = n(64078),
    Z = n(351780),
    H = n(79390),
    Y = n(980463),
    W = n(328908),
    K = n(992970),
    z = n(576645),
    q = n(317951),
    X = n(287941),
    Q = n(643266),
    J = n(617136);
n(807092);
var $ = n(869765),
    ee = n(926491),
    et = n(467798),
    en = n(346479),
    er = n(218543),
    ei = n(199902),
    ea = n(314897),
    eo = n(592125);
n(323873);
var es = n(701190),
    el = n(375954),
    ec = n(496675),
    eu = n(158776),
    ed = n(306680),
    e_ = n(300429),
    ef = n(594174);
n(626135);
var ep = n(70956),
    eh = n(630388),
    em = n(669079),
    eg = n(63063),
    eE = n(74538),
    eb = n(709054),
    ey = n(861990),
    eO = n(668781),
    ev = n(981631),
    eI = n(260539),
    eT = n(959517),
    eS = n(388032);
function eA(e, t, n) {
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
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eA(e, t, n[t]);
            }));
    }
    return e;
}
function eC(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eR(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eC(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eP = null,
    ew = new O.Z('MessageActionCreators'),
    eD = new O.Z('MessageQueue'),
    eL = !1;
class ex {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eA(this, 'completed', !1);
    }
}
function eM(e) {
    let { content: t, channelId: n, messageId: r, location: a, suggested: o = null, overrideProperties: s = {} } = e,
        l = ea.default.getId();
    (0, y.ZP)(t).forEach((e) => {
        let { type: t, code: c, url: u } = e;
        if (t === b.g.INVITE)
            ek({
                inviteKey: c,
                channelId: n,
                messageId: r,
                location: a,
                suggested: o,
                overrideProperties: s
            });
        else if (t === b.g.TEMPLATE) {
            let e = P.Z.getGuildTemplate(c);
            if (null == e || e.state === eI.Rj.RESOLVING) return;
            d.ZP.trackWithMetadata(ev.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: c,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === b.g.BUILD_OVERRIDE);
        else if (t === b.g.MANUAL_BUILD_OVERRIDE);
        else if (t === b.g.EVENT);
        else if (t === b.g.CHANNEL_LINK);
        else if (t === b.g.APP_DIRECTORY_PROFILE) ((0, S.y)(c), (0, g.z$)(c, g.Un.APP_DISCOVERY, l));
        else if (t === b.g.APP_DIRECTORY_STOREFRONT) (0, S.y)(c, 'storefront');
        else if (t === b.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, h.Q)(c);
            null != e && (0, S.y)(e.applicationId, 'storefront_sku');
        } else if (t === b.g.ACTIVITY_BOOKMARK) {
            var _;
            let e = (0, m.U)(u);
            (0, g.z$)(c, g.Un.ACTIVITY, null != (_ = e.referrerId) ? _ : l, e.customId);
        } else if (t === b.g.EMBEDDED_ACTIVITY_INVITE) (0, g.z$)(c, g.Un.ACTIVITY_INVITE, l);
        else if (t === b.g.GUILD_PRODUCT);
        else if (t === b.g.SERVER_SHOP);
        else if (t === b.g.QUESTS_EMBED)
            (0, J.dA)({
                questId: c,
                event: ev.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.j.QUESTS_EMBED
            });
        else if (t === b.g.APP_OAUTH2_LINK) (d.ZP.trackWithMetadata(ev.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: c }), (0, g.z$)(c, g.Un.OAUTH, l));
        else if (t === b.g.COLLECTIBLES_SHOP);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function ek(e) {
    var t, n;
    let { inviteKey: r, channelId: i, messageId: a, location: o, suggested: s = null, overrideProperties: l = {} } = e,
        c = ea.default.getId(),
        u = es.Z.getInvite(r),
        _ = (0, w.fU)(r),
        f = null != u && (0, D.P1)(u),
        p = null == u || null == (t = u.target_application) ? void 0 : t.id;
    null != p && f && (0, g.z$)(p, g.Un.ACTIVITY_INVITE, c);
    let h = eo.Z.getChannel(i);
    if (null != h) {
        let e = null;
        h.isMultiUserDM() ? (e = ev.dAT.GDM_INVITE) : h.isPrivate() || (e = ev.dAT.SERVER_INVITE);
        let t = {};
        if (null != u && u.state === ev.r2o.RESOLVED && null != u.channel) {
            let r = u.channel;
            ((t.invite_channel_id = r.id), (t.invite_guild_id = null == (n = u.guild) ? void 0 : n.id), (t.invite_channel_type = r.type), null != u.inviter && (t.invite_inviter_id = u.inviter.id), null != u.target_application && (t.application_id = u.target_application.id));
            let i = ei.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                ((e = ev.dAT.STREAM), (t.destination_user_id = i.ownerId));
                let n = (0, A.L2)(i, eu.Z);
                t.application_id = null != n ? n.id : null;
            }
        }
        (null != s && ((t.is_suggested = s.isAffinitySuggestion), (t.row_num = s.rowNum), (t.num_total = s.numTotal), (t.num_affinity_connections = s.numAffinityConnections), (t.is_filtered = s.isFiltered)),
            (t = eN(
                eR(eN({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: _.baseCode,
                    guild_id: h.getGuildId(),
                    channel_id: h.id,
                    message_id: a,
                    send_type: ev.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: _.guildScheduledEventId
                }),
                l
            )),
            d.ZP.trackWithMetadata(ev.rMx.INVITE_SENT, t));
    } else {
        let e = {};
        null != u &&
            u.state === ev.r2o.RESOLVED &&
            null != u.inviter &&
            ((e.invite_inviter_id = u.inviter.id),
            null != u.target_application && (e.application_id = u.target_application.id),
            (e = eN(
                eR(eN({}, e), {
                    location: o,
                    invite_type: ev.dAT.FRIEND_INVITE,
                    invite_code: _.baseCode,
                    message_id: a,
                    send_type: ev.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: _.guildScheduledEventId
                }),
                l
            )),
            d.ZP.trackWithMetadata(ev.rMx.INVITE_SENT, e));
    }
}
function ej(e, t, n, r, i) {
    (0, em.Q_)(e).forEach((e) => {
        let a = eo.Z.getChannel(t);
        null != a &&
            d.ZP.trackWithMetadata(ev.rMx.GIFT_CODE_SENT, {
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
function eU(e, t) {
    let n = el.Z.getMessage(e, t);
    return null != n && n.hasFlag(ev.iLy.CROSSPOSTED);
}
function eG(e, t) {
    let n = el.Z.getMessage(e, t);
    if (null == n || n.type !== ev.uaV.REPLY) return;
    let r = $.Z.getMessageByReference(n.messageReference);
    if (r.state === $.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(ev.hCA),
            replied_user: !1
        };
}
let eB = {
        [ev.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eS.intl.string(eS.t.k1Cjqq)
        },
        [ev.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eS.intl.formatToPlainString(eS.t.CTMXwM, { helpUrl: eg.Z.getArticleURL(ev.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [ev.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => eS.intl.string(eS.t.E8nbNT)
        },
        [ev.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eS.intl.string(eS.t.aRUbam)
        },
        [ev.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eS.intl.string(eS.t.aRUbam)
        },
        [ev.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND',
            messageGetter: () => eS.intl.string(eS.t['/meGhY'])
        },
        [ev.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT',
            messageGetter: () => eS.intl.string(eS.t.Oc1Zj4)
        }
    },
    eV = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            s.Z.dispatch({
                type: 'MESSAGE_CREATE',
                channelId: e,
                message: t,
                optimistic: n,
                sendMessageOptions: r,
                isPushNotification: !1
            });
        },
        sendBotMessage(e, t, n, r) {
            (null != n &&
                d.ZP.trackWithMetadata(ev.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                eV.receiveMessage(
                    e,
                    (0, G.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                ));
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, G.ZP)({
                channelId: e,
                nonce: n,
                type: ev.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: ev.iLy.EPHEMERAL,
                author: {
                    id: ev.LAt,
                    username: 'Nitro Notification',
                    discriminator: ev.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            eV.receiveMessage(
                e,
                eR(eN({}, r), {
                    state: ev.yb.SENT,
                    channel_id: e
                }),
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, G.ZP)({
                channelId: e,
                type: ev.uaV.GIFTING_PROMPT,
                content: '',
                flags: ev.iLy.EPHEMERAL,
                author: {
                    id: ev.LAt,
                    username: 'Gifting Prompt',
                    discriminator: ev.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: t
            });
            eV.receiveMessage(e, eR(eN({}, n), { state: ev.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = eo.Z.getChannel(e);
            null != i && (r === ev.evJ.SLOWMODE_RATE_LIMITED ? ((t = eS.intl.formatToPlainString(eS.t.IWntYm, { seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === ev.evJ.INVALID_MESSAGE_SEND_USER ? ((t = eS.intl.formatToPlainString(eS.t.CTMXwM, { helpUrl: eg.Z.getArticleURL(ev.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === ev.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? eS.intl.string(eS.t['/jUd29']) : eS.intl.string(eS.t['5EMPAw'])), (n = 'TOO_MANY_THREADS')) : r === ev.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = eS.intl.string(eS.t['aY+lLC'])), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === ev.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = eS.intl.formatToPlainString(eS.t.zSG3Q0, { helpUrl: ev.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in eB ? ((n = eB[r].messageName), (t = eB[r].messageGetter())) : ((t = eS.intl.formatToPlainString(eS.t.CTMXwM, { helpUrl: eg.Z.getArticleURL(ev.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), eV.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = (0, I.U2)('ExplicitMediaClydeError'),
                a = eo.Z.getChannel(e);
            if (null == a) return;
            let { message: o, messageName: l } = (0, r.EQ)({
                    isDM: a.isDM(),
                    isGDM: a.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: i ? eS.intl.string(eS.t.mktny8) : eS.intl.string(eS.t.PoyOY2),
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: i ? eS.intl.string(eS.t.mktny8) : eS.intl.string(eS.t.PoyOY2),
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: i ? eS.intl.string(eS.t.i4AbAQ) : eS.intl.string(eS.t.bNMQVF),
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                c = (0, B.r)();
            (eV.sendBotMessage(e, o, l, c),
                (0, v.aP)({
                    action: v.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: c,
                    channelId: e,
                    context: n
                }),
                null != t &&
                    t.length > 0 &&
                    s.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: c,
                        channelId: e,
                        attachments: t
                    }));
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
            eV.trackJump(e, null, 'Present');
            let n = { present: !0 };
            el.Z.hasPresent(e)
                ? s.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : eV.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            d.ZP.trackWithMetadata(
                ev.rMx.JUMP,
                eN(
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
            var t;
            let { channelId: n, messageId: r, flash: i = !1, offset: a, context: o, extraProperties: s = null, isPreload: l, returnMessageId: c, skipLocalFetch: u, jumpType: d, avoidInitialScroll: _ } = e;
            return (
                'string' == typeof o && eV.trackJump(n, r, o, s),
                null == eP || null == (t = eP.pauseAllMediaPlayers) || t.call(eP),
                eV.fetchMessages({
                    channelId: n,
                    limit: ev.Z8P,
                    jump: {
                        messageId: r,
                        flash: i,
                        offset: a,
                        returnMessageId: c,
                        jumpType: d
                    },
                    isPreload: l,
                    skipLocalFetch: u,
                    avoidInitialScroll: _
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eV.fetchMessages({
                channelId: t,
                limit: ev.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return a.tn
                .get({
                    url: ev.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, k.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: o, focus: l, isPreload: u, skipLocalFetch: d, truncate: _, forICYMI: f, avoidInitialScroll: p, feature: h } = e,
                m = eo.Z.getChannel(t),
                g = T.Z.isConnectedOrOverlay(),
                b = Date.now();
            if (null != m && m.type === ev.d4z.GUILD_STORE) return !1;
            if (
                t === E.V ||
                (ew.log('Fetching messages for '.concat(t, ' between ').concat(r, ' and ').concat(n, '. jump=').concat(JSON.stringify(o))),
                eV._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: o,
                    focus: l,
                    truncate: _
                }))
            )
                return;
            er.Z.fetchMessages.recordStart();
            let y = null != o ? o : void 0;
            null == y && null != l && (y = eN({}, l));
            let O = c.Z.getOrCreate(t).loadStart(y);
            (c.Z.commit(O), s.Z.dispatch({ type: 'LOAD_MESSAGES' }));
            let v = null == y ? void 0 : y.messageId,
                I = new ex();
            return (
                d || this.fetchLocalMessages(t, n, r, i, I),
                a.tn
                    .get({
                        url: ev.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: i,
                            around: v,
                            preload: u,
                            feature: h
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (e) => (
                            er.Z.fetchMessages.recordEnd(),
                            er.Z.dispatchMessages.measure(() => {
                                let a = e.body,
                                    l = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != v || (a.length === i && (l || u)),
                                    h = null != v || (c && a.length === i);
                                if (null != v) {
                                    let e = Math.floor(i / 2),
                                        n = e + (i % 2),
                                        r = [
                                            v,
                                            ...a.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(eb.default.compare)
                                            .indexOf(v);
                                    if ((r < n - 1 && (d = !1), a.length - r < e && (h = !1), h && a.length > 0)) {
                                        let e = ed.ZP.lastMessageId(t);
                                        a[0].id === e && (h = !1);
                                    }
                                }
                                (ew.log('Fetched '.concat(a.length, ' messages for ').concat(t, ' isBefore:').concat(l, ' isAfter:').concat(c)),
                                    I.markComplete(),
                                    s.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: t,
                                        messages: a,
                                        isBefore: l,
                                        isAfter: c,
                                        hasMoreBefore: d,
                                        hasMoreAfter: h,
                                        limit: i,
                                        jump: o,
                                        forICYMI: f,
                                        isStale: !g || T.Z.lastTimeConnectedChanged() >= b,
                                        truncate: _,
                                        avoidInitialScroll: p
                                    }));
                            }),
                            !0
                        ),
                        () => (
                            ew.log('Failed to fetch messages for '.concat(t)),
                            s.Z.dispatch({
                                type: 'LOAD_MESSAGES_FAILURE',
                                channelId: t
                            }),
                            !1
                        )
                    )
            );
        },
        async fetchLocalMessages(e, t, n, r, i) {
            let a = eo.Z.getBasicChannel(e),
                o = c.Z.getOrCreate(e),
                l = _.Z.database();
            if (null == l || null == a || null != t || null != n) return void er.Z.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void er.Z.addLocalMessages(e, -2);
            let u = await (0, f.dI)(() => p.ZP.load(l, e, r));
            if (null == u) return void er.Z.addLocalMessages(e, -3);
            if ((ew.log('fetched '.concat(u.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), er.Z.addLocalMessages(e, u.messages.length), !i.completed && u.messages.length > 0)) {
                let t = u.messages.length >= r && u.connectionId === T.Z.lastTimeConnectedChanged();
                s.Z.dispatch({
                    type: 'LOCAL_MESSAGES_LOADED',
                    guildId: a.guild_id,
                    channelId: e,
                    users: u.users,
                    members: u.members,
                    messages: u.messages,
                    stale: !t
                });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let r = eo.Z.getBasicChannel(e),
                i = _.Z.database();
            if (null == i || null == r) return;
            let a = c.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let o = await (0, f.dI)(() => p.ZP.load(i, e, t));
            if (null == o) return;
            let l = null == (n = (a = c.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                u = null == l ? o.messages : o.messages.filter((e) => eb.default.compare(e.id, l) > 0);
            (ew.log('Fetched '.concat(o.messages.length, ' messages from the cache after foregrounding. ').concat(u.length, ' are new')),
                0 !== u.length &&
                    s.Z.dispatch({
                        type: 'LOCAL_MESSAGES_LOADED',
                        guildId: r.guild_id,
                        channelId: e,
                        users: o.users,
                        members: o.members,
                        messages: u,
                        stale: !0
                    }));
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: o, truncate: l } = e,
                c = el.Z.getMessages(t);
            if (c.cached || !c.ready) return !1;
            if ((null == a ? void 0 : a.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
                if ((null == a ? void 0 : a.messageId) != null && c.has(a.messageId, !1))
                    return (
                        s.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: i,
                            truncate: l
                        }),
                        !0
                    );
                if ((null == o ? void 0 : o.messageId) != null)
                    if (c.has(o.messageId, !1))
                        return (
                            s.Z.dispatch({
                                type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                                channelId: t,
                                focus: o,
                                limit: i,
                                truncate: l
                            }),
                            !0
                        );
                    else a = eN({}, o);
                let e = (null == a ? void 0 : a.messageId) != null ? eb.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
                    n = c.first(),
                    r = c.last();
                if ((!c.hasMoreBefore && null != n && eb.default.extractTimestamp(n.id) >= e) || (!c.hasMoreAfter && null != r && eb.default.extractTimestamp(r.id) <= e) || (null != n && null != r && eb.default.extractTimestamp(n.id) < e && eb.default.extractTimestamp(r.id) > e))
                    return (
                        s.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: ev.Z8P
                        }),
                        !0
                    );
            } else if (null != n && c.hasBeforeCached(n))
                return (
                    s.Z.dispatch({
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
                    s.Z.dispatch({
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
            let a = await (0, Q.Z)(e);
            if (null != a) return eV.sendMessage(a, t, r, i);
            let o = null != (n = i.nonce) ? n : (0, B.r)();
            i = eR(eN({}, i), { nonce: o });
            let s = () => eV._sendMessage(e, t, i),
                l = M.ZP.backgroundify(s, void 0);
            return (j.Z.recordMessageSendAttempt(e, o), el.Z.isReady(e))
                ? l()
                : r && e !== E.V
                  ? (eD.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        el.Z.whenReady(e, () => {
                            (eD.info('Channel '.concat(e, ' is ready for sending now.')), l().then(t, n));
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
                                parse: Object.values(ev.hCA),
                                replied_user: !1
                            }
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: a, confettiPotionEmoji: o } = e;
            return null != o && (0, z.tv)(n, r, i, a)
                ? {
                      confettiPotionData: {
                          emoji: o,
                          callback: () => (0, W.Hb)(t)
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
            let t = eV.getSendMessageOptionsForReply(e.pendingReply),
                n = eV.getSendMessageOptionsForConfettiPotion(eN({}, e)),
                r = eV.getSendMessageOptionsForStickers(eN({}, e)),
                i = eV.getSendMessageOptionsForScheduledMessage(eN({}, e));
            return eN({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, L.Z)(t);
            return (
                null != i && (a = ''.concat(i, '\n').concat(a)),
                eV._sendMessage(
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
            eV._sendMessage(
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
            return eV._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                eR(eN({}, r), { stickerIds: t })
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return a.tn
                .post({
                    url: ev.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: i,
                        message_reference: r
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (n) => (
                        U.Z.donateSentMessage(n.body.content, e),
                        eV.receiveMessage(e, n.body),
                        s.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            ew.log('Failed to send greeting'),
                            429 !== t.status && eV.sendClydeError(e, t.body.code),
                            s.Z.dispatch({
                                type: 'MESSAGE_SEND_FAILED',
                                messageId: t.body.id,
                                channelId: e
                            }),
                            t
                        );
                    }
                );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eV._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                eR(eN({}, n), { poll: t })
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eE.ZP.canUseAnimatedEmojis(t) ? ((r = eS.intl.string(eS.t.msFJy8)), (i = 'INVALID_ANIMATED_EMOJI_BODY')) : ec.Z.canWithPartialContext(ev.Plq.USE_EXTERNAL_EMOJIS, { channelId: n }) ? ((r = eS.intl.string(eS.t.FzugNj)), (i = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((r = eS.intl.string(eS.t.Q87rIy)), (i = 'INVALID_EXTERNAL_EMOJI_BODY')),
                {
                    errorMessage: r,
                    errorMessageName: i
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, a, o;
            let l,
                c = (0, Q.Z)(e);
            if (null != c)
                return (
                    eD.info('Converting channel to a private channel'),
                    c.then((e) => {
                        (eD.info('Finished converting channel to a private channel'), eV._sendMessage(e, t, n));
                    })
                );
            let d = t.content,
                { invalidEmojis: _, validNonShortcutEmojis: f, tts: p = !1 } = t,
                { activityAction: h, location: m, suggestedInvite: g, stickerIds: E, confettiPotionData: b, messageReference: y, allowedMentions: O, poll: I, contentInventoryEntry: T, attachments: S, attachmentsToUpload: A, onAttachmentUploadError: P, announcementSendOptions: w } = n,
                D = null != (i = n.flags) ? i : 0,
                [L, M] = (0, et.Z)(d);
            L && ((d = M), (D = (0, eh.pj)(D, ev.iLy.SUPPRESS_NOTIFICATIONS)));
            let k = !1,
                W = (null == (r = n.messageReference) ? void 0 : r.type) === ev.Uvt.FORWARD;
            if ('' === d && null == h && null == E && null == I && null == T && !W && (null == S || 0 === S.length) && (null == t.components || 0 === t.components.length))
                if (null == A || !(A.length > 0)) return Promise.resolve();
                else k = !0;
            let J = null != y ? ev.uaV.REPLY : ev.uaV.DEFAULT,
                $ = null != (a = n.nonce) ? a : (0, B.r)(),
                en = $,
                er = (0, G.ZP)({
                    channelId: e,
                    content: d,
                    tts: p,
                    type: J,
                    messageReference: y,
                    allowedMentions: O,
                    flags: 0 !== D ? D : void 0,
                    nonce: $,
                    poll: (0, H.x9)(I)
                });
            if ((!1 !== n.eagerDispatch && ((0, F.EL)(e, er.id), null != E && (er.sticker_items = E.map((e) => ee.Z.getStickerById(e)).filter((e) => null != e)), eV.receiveMessage(e, er, !0, n)), !eL && null != _ && _.length > 0)) {
                eL = !0;
                let t = ef.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eV.validateMessage(_, t, e);
                eV.sendBotMessage(e, n, r);
            }
            let ei = {
                type: null != w ? u.$V.SEND_ANNOUNCEMENT : u.$V.SEND,
                message: {
                    channelId: e,
                    content: d,
                    nonce: $,
                    tts: p,
                    message_reference: y,
                    allowed_mentions: O,
                    flags: D,
                    analyticsLocation: m
                }
            };
            if ((null != t.components && (ei.message.components = t.components), null != w && ((ei.message.create_thread = w.createThread), (ei.message.title = w.threadName), (ei.message.publish = null != (o = w.publish) && o)), null != h)) {
                let e,
                    t = null == h ? void 0 : h.activity.session_id;
                if (null != (e = h.type === ev.mFx.JOIN_REQUEST || null != t ? t : ea.default.getSessionId())) {
                    let t = {
                            type: h.type,
                            session_id: e
                        },
                        { activity: n } = h;
                    (null != n.party && null != n.party.id && (t.party_id = n.party.id), (ei.message.application_id = n.application_id), (ei.message.activity = t));
                }
            }
            if ((null != I && (ei.message.poll = I), null != E && (ei.message.sticker_ids = E), Z.Z.isEnabled() && (ei.message.has_poggermode_enabled = !0), null != T && (ei.message.content_inventory_entry = T), null != b && ((ei.message.confetti_potion = (0, z.vY)(b)), b.callback()), null != S && S.length > 0 && (ei.message.attachments = S), null != A && A.length > 0))
                try {
                    let t = await (0, x.c)({
                        channelId: e,
                        nonce: $,
                        items: A,
                        message: er,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((l = t.uploader), k && (null == r || 0 === r.length))) return;
                    null != r && (ei.message.attachments = r.map((e, t) => (0, ey.B)(e, t)));
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    ((0, V.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg
                    }),
                        null == P || P(e, t, n, r));
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = u.ZP.length,
                    o = Math.floor(10000 * Math.random());
                (eD.info('Queueing message to be sent LogId:'.concat(o)),
                    u.ZP.enqueue(
                        ei,
                        (o) => {
                            let c = Date.now() - i;
                            if (o.ok) {
                                (U.Z.donateSentMessage(d, e),
                                    eV.receiveMessage(e, o.body, !0, {
                                        sendAnalytics: {
                                            duration: c,
                                            queueSize: a
                                        },
                                        poll: I
                                    }));
                                let r = (0, z.ZC)(o.body);
                                null != r &&
                                    ((0, Y.gA)(q.D1),
                                    (0, X.I)(
                                        {
                                            name: r.name,
                                            id: r.id
                                        },
                                        void 0,
                                        !0,
                                        K.LL.MessageSent
                                    ));
                                let i = eb.default.cast(e),
                                    u = R.Z.getRequest(i);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: r } = u;
                                    (0, C.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: o.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n
                                    });
                                }
                                (j.Z.recordMessageSendApiResponse($),
                                    s.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: e_.S.SendMessage,
                                        channelId: e
                                    }),
                                    s.Z.dispatch({
                                        type: 'EMOJI_TRACK_USAGE',
                                        emojiUsed: f
                                    }),
                                    s.Z.dispatch({
                                        type: 'STICKER_TRACK_USAGE',
                                        stickerIds: E
                                    }),
                                    s.Z.dispatch({
                                        type: 'LOCAL_MESSAGE_CREATE',
                                        message: {
                                            channel_id: e,
                                            author: ef.default.getCurrentUser()
                                        }
                                    }),
                                    eM({
                                        content: d,
                                        channelId: e,
                                        messageId: o.body.id,
                                        location: null != m ? m : 'chat_input',
                                        suggested: g
                                    }),
                                    ej(d, e, o.body.id, null != m ? m : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != l &&
                                        s.Z.dispatch({
                                            type: 'UPLOAD_COMPLETE',
                                            channelId: e,
                                            file: l._file,
                                            aborted: !1
                                        }),
                                    t(o));
                            } else {
                                var _, p;
                                let t;
                                ew.log('Failed to send message', {
                                    hasErr: o.hasErr,
                                    status: o.status,
                                    code: null == (_ = o.body) ? void 0 : _.code,
                                    error: o.err
                                });
                                let i = !1;
                                if (o.hasErr) 'ABORTED' === o.err.code && (i = !0);
                                else if (o.status >= 400 && o.status < 500 && o.body)
                                    if (o.body.code === ev.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = o.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            s.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: e,
                                                slowmodeType: e_.S.SendMessage,
                                                cooldownMs: t * ep.Z.Millis.SECOND
                                            });
                                    } else
                                        N.U8.has(o.body.code)
                                            ? s.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                  messageData: ei,
                                                  errorResponseBody: {
                                                      code: o.body.code,
                                                      message: o.body.message
                                                  }
                                              })
                                            : o.body.code === ev.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? s.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                              : o.body.code === ev.evJ.EXPLICIT_CONTENT
                                                ? (t = eT.xi.EXPLICIT_CONTENT)
                                                : null != I || W || null != T || eV.sendClydeError(e, o.body.code);
                                (i
                                    ? eV.deleteMessage(e, en, !0)
                                    : (null != l &&
                                          s.Z.dispatch({
                                              type: 'UPLOAD_FAIL',
                                              channelId: e,
                                              file: l._file,
                                              messageId: en,
                                              reason: t,
                                              noSendFailed: !0
                                          }),
                                      o.hasErr || t !== eT.xi.EXPLICIT_CONTENT || eV.sendExplicitMediaClydeError(e, null == (p = o.body) ? void 0 : p.attachments, v.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED),
                                      s.Z.dispatch({
                                          type: 'MESSAGE_SEND_FAILED',
                                          messageId: en,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t
                                      }),
                                      (0, V.x)({
                                          failureCode: o.hasErr ? void 0 : o.status,
                                          errorMessage: o.hasErr ? o.err.message : void 0
                                      }),
                                      u.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          (ew.log('Cancelling pending message', e.nonce),
                                              s.Z.dispatch({
                                                  type: 'MESSAGE_SEND_FAILED',
                                                  messageId: e.nonce,
                                                  channelId: e.channelId
                                              }));
                                      })),
                                    r(o));
                            }
                        },
                        o
                    ));
            });
        },
        startEditMessage(e, t, n, r) {
            s.Z.dispatch({
                type: 'MESSAGE_START_EDIT',
                channelId: e,
                messageId: t,
                content: n,
                source: r
            });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, eh.yE)(t.flags, ev.iLy.IS_COMPONENTS_V2)) {
                let r = t.components.filter((e) => e.type === l.re.TEXT_DISPLAY);
                if (r.length > 0) {
                    let i = r.map((e) => e.content).join('\n');
                    s.Z.dispatch({
                        type: 'MESSAGE_START_EDIT',
                        channelId: e,
                        messageId: t.id,
                        content: i,
                        source: n
                    });
                    return;
                }
            }
            s.Z.dispatch({
                type: 'MESSAGE_START_EDIT',
                channelId: e,
                messageId: t.id,
                content: t.content,
                source: n
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
            let { content: r, components: i } = n;
            await en.Z.unarchiveThreadIfNecessary(e);
            let a = eG(e, t),
                l = eU(e, t),
                c = {
                    channelId: e,
                    messageId: t,
                    content: r,
                    isCrossposted: l,
                    allowed_mentions: a,
                    components: i
                };
            u.ZP.enqueue(
                {
                    type: u.$V.EDIT,
                    message: c
                },
                (n) => {
                    let r = !n.hasErr && N.U8.has(n.body.code);
                    if (r) {
                        let e = {
                            type: u.$V.EDIT,
                            message: c
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
                    (n.hasErr ? o.uv.announce(eS.intl.string(eS.t.Atp7FB)) : r ? o.uv.announce(eS.intl.string(eS.t.Hym4i4)) : o.uv.announce(eS.intl.string(eS.t['0x1HBA'])),
                        eV.endEditMessage(e, n.hasErr ? void 0 : n),
                        eV.focusMessage({
                            channelId: e,
                            messageId: t
                        }));
                }
            );
        },
        async suppressEmbeds(e, t) {
            (await en.Z.unarchiveThreadIfNecessary(e),
                a.tn.patch({
                    url: ev.ANM.MESSAGE(e, t),
                    body: { flags: ev.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1
                }));
        },
        async patchMessageAttachments(e, t, n) {
            (await en.Z.unarchiveThreadIfNecessary(e),
                a.tn.patch({
                    url: ev.ANM.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                }));
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    s.Z.dispatch({
                        type: 'MESSAGE_DELETE',
                        id: t,
                        channelId: e
                    }).then(() => {
                        o.uv.announce(eS.intl.string(eS.t.RYMs7u));
                    });
                };
            n
                ? r()
                : (await en.Z.unarchiveThreadIfNecessary(e),
                  a.tn
                      .del({
                          url: ev.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1
                      })
                      .then(() => {
                          r();
                      }));
        },
        dismissAutomatedMessage(e) {
            (null != e.loggingName &&
                d.ZP.trackWithMetadata(ev.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }),
                this.deleteMessage(e.channel_id, e.id, !0));
        },
        revealMessage(e, t) {
            s.Z.dispatch({
                type: 'MESSAGE_REVEAL',
                channelId: e,
                messageId: t
            });
        },
        crosspostMessage: (e, t) =>
            a.tn
                .post({
                    url: ev.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    let t;
                    ((t = 429 === e.status ? eS.intl.formatToPlainString(eS.t['77cuq6'], { retryAfter: Math.floor(e.body.retry_after / 60) }) : eS.intl.string(eS.t.z2gyND)),
                        eO.Z.show({
                            title: eS.intl.string(eS.t.Vd1hs7),
                            body: t,
                            confirmText: eS.intl.string(eS.t.BddRzc)
                        }));
                }),
        trackInvite: ek
    },
    eF = eV;
