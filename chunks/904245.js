n.d(t, { Z: () => eZ }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
var r = n(278074),
    i = n(636977),
    o = n(544891),
    a = n(780384),
    s = n(570140),
    l = n(911969),
    c = n(89892),
    u = n(673750),
    d = n(367907),
    f = n(287328),
    _ = n(86670),
    p = n(685736),
    h = n(421474),
    m = n(234431),
    g = n(914498),
    E = n(333023),
    b = n(960904),
    y = n(830121),
    O = n(710845),
    v = n(247206),
    I = n(38618),
    T = n(859487),
    S = n(687516),
    A = n(539573),
    C = n(926526),
    N = n(826581),
    R = n(409059),
    P = n(264229),
    w = n(413605),
    D = n(366980),
    x = n(467512),
    L = n(779832),
    j = n(786761),
    M = n(459618),
    k = n(541288),
    U = n(3148),
    G = n(48854),
    B = n(785359),
    Z = n(64078),
    F = n(351780),
    V = n(79390),
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
    eo = n(592125);
n(323873);
var ea = n(701190),
    es = n(375954),
    el = n(496675),
    ec = n(158776),
    eu = n(306680),
    ed = n(300429),
    ef = n(594174);
n(626135);
var e_ = n(70956),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eA(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eS(e, t, n[t]);
            });
    }
    return e;
}
function eC(e, t) {
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
            : eC(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eR = null,
    eP = new O.Z("MessageActionCreators"),
    ew = new O.Z("MessageQueue"),
    eD = !1;
class ex {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eS(this, "completed", !1);
    }
}
function eL(e) {
    let { content: t, channelId: n, messageId: r, location: o, suggested: a = null, overrideProperties: s = {} } = e,
        l = ei.default.getId();
    (0, y.ZP)(t).forEach((e) => {
        let { type: t, code: c, url: u } = e;
        if (t === b.g.INVITE)
            ej({
                inviteKey: c,
                channelId: n,
                messageId: r,
                location: o,
                suggested: a,
                overrideProperties: s,
            });
        else if (t === b.g.TEMPLATE) {
            let e = R.Z.getGuildTemplate(c);
            if (null == e || e.state === ev.Rj.RESOLVING) return;
            d.ZP.trackWithMetadata(eO.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: c,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
            });
        } else if (t === b.g.BUILD_OVERRIDE);
        else if (t === b.g.MANUAL_BUILD_OVERRIDE);
        else if (t === b.g.EVENT);
        else if (t === b.g.CHANNEL_LINK);
        else if (t === b.g.APP_DIRECTORY_PROFILE) (0, T.y)(c), (0, g.z$)(c, g.Un.APP_DISCOVERY, l);
        else if (t === b.g.APP_DIRECTORY_STOREFRONT) (0, T.y)(c, "storefront");
        else if (t === b.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, h.Q)(c);
            null != e && (0, T.y)(e.applicationId, "storefront_sku");
        } else if (t === b.g.ACTIVITY_BOOKMARK) {
            var f;
            let e = (0, m.U)(u);
            (0, g.z$)(c, g.Un.ACTIVITY, null != (f = e.referrerId) ? f : l, e.customId);
        } else if (t === b.g.EMBEDDED_ACTIVITY_INVITE) (0, g.z$)(c, g.Un.ACTIVITY_INVITE, l);
        else if (t === b.g.GUILD_PRODUCT);
        else if (t === b.g.SERVER_SHOP);
        else if (t === b.g.QUESTS_EMBED)
            (0, Q.dA)({
                questId: c,
                event: eO.rMx.QUEST_LINK_SHARED,
                properties: {},
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.j.QUESTS_EMBED,
            });
        else if (t === b.g.APP_OAUTH2_LINK)
            d.ZP.trackWithMetadata(eO.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: c }),
                (0, g.z$)(c, g.Un.OAUTH, l);
        else if (t === b.g.COLLECTIBLES_SHOP);
        else throw Error("Unknown coded link type: ".concat(t));
    });
}
function ej(e) {
    var t, n;
    let { inviteKey: r, channelId: i, messageId: o, location: a, suggested: s = null, overrideProperties: l = {} } = e,
        c = ei.default.getId(),
        u = ea.Z.getInvite(r),
        f = (0, P.fU)(r),
        _ = null != u && (0, w.P1)(u),
        p = null == u || null == (t = u.target_application) ? void 0 : t.id;
    null != p && _ && (0, g.z$)(p, g.Un.ACTIVITY_INVITE, c);
    let h = eo.Z.getChannel(i);
    if (null != h) {
        let e = null;
        h.isMultiUserDM() ? (e = eO.dAT.GDM_INVITE) : h.isPrivate() || (e = eO.dAT.SERVER_INVITE);
        let t = {};
        if (null != u && u.state === eO.r2o.RESOLVED && null != u.channel) {
            let r = u.channel;
            (t.invite_channel_id = r.id),
                (t.invite_guild_id = null == (n = u.guild) ? void 0 : n.id),
                (t.invite_channel_type = r.type),
                null != u.inviter && (t.invite_inviter_id = u.inviter.id),
                null != u.target_application && (t.application_id = u.target_application.id);
            let i = er.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = eO.dAT.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, S.L2)(i, ec.Z);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s &&
            ((t.is_suggested = s.isAffinitySuggestion),
            (t.row_num = s.rowNum),
            (t.num_total = s.numTotal),
            (t.num_affinity_connections = s.numAffinityConnections),
            (t.is_filtered = s.isFiltered)),
            (t = eA(
                eN(eA({}, t), {
                    location: a,
                    invite_type: e,
                    invite_code: f.baseCode,
                    guild_id: h.getGuildId(),
                    channel_id: h.id,
                    message_id: o,
                    send_type: eO.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId,
                }),
                l,
            )),
            d.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != u &&
            u.state === eO.r2o.RESOLVED &&
            null != u.inviter &&
            ((e.invite_inviter_id = u.inviter.id),
            null != u.target_application && (e.application_id = u.target_application.id),
            (e = eA(
                eN(eA({}, e), {
                    location: a,
                    invite_type: eO.dAT.FRIEND_INVITE,
                    invite_code: f.baseCode,
                    message_id: o,
                    send_type: eO.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: f.guildScheduledEventId,
                }),
                l,
            )),
            d.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, e));
    }
}
function eM(e, t, n, r, i) {
    (0, eh.Q_)(e).forEach((e) => {
        let o = eo.Z.getChannel(t);
        null != o &&
            d.ZP.trackWithMetadata(eO.rMx.GIFT_CODE_SENT, {
                location: r,
                gift_code: e,
                guild_id: o.getGuildId(),
                channel_id: o.id,
                channel_type: o.type,
                message_id: n,
                automatic_send: i,
            });
    });
}
function ek(e, t) {
    let n = es.Z.getMessage(e, t);
    return null != n && n.hasFlag(eO.iLy.CROSSPOSTED);
}
function eU(e, t) {
    let n = es.Z.getMessage(e, t);
    if (null == n || n.type !== eO.uaV.REPLY) return;
    let r = J.Z.getMessageByReference(n.messageReference);
    if (r.state === J.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eO.hCA),
            replied_user: !1,
        };
}
let eG = {
        [eO.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eT.intl.string(eT.t.k1Cjqq),
        },
        [eO.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eT.intl.formatToPlainString(eT.t.CTMXwM, {
                    helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eO.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eT.intl.string(eT.t.E8nbNT),
        },
        [eO.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eT.intl.string(eT.t.aRUbam),
        },
        [eO.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eT.intl.string(eT.t.aRUbam),
        },
        [eO.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eT.intl.string(eT.t["/meGhY"]),
        },
        [eO.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eT.intl.string(eT.t.Oc1Zj4),
        },
    },
    eB = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            s.Z.dispatch({
                type: "MESSAGE_CREATE",
                channelId: e,
                message: t,
                optimistic: n,
                sendMessageOptions: r,
                isPushNotification: !1,
            });
        },
        sendBotMessage(e, t, n, r) {
            null != n &&
                d.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n,
                }),
                eB.receiveMessage(
                    e,
                    (0, U.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n,
                    }),
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, U.ZP)({
                channelId: e,
                nonce: n,
                type: eO.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eO.iLy.EPHEMERAL,
                author: {
                    id: eO.LAt,
                    username: "Nitro Notification",
                    discriminator: eO.fo$,
                    avatar: "nitro",
                    bot: !0,
                },
            });
            eB.receiveMessage(
                e,
                eN(eA({}, r), {
                    state: eO.yb.SENT,
                    channel_id: e,
                }),
                !0,
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, U.ZP)({
                channelId: e,
                type: eO.uaV.GIFTING_PROMPT,
                content: "",
                flags: eO.iLy.EPHEMERAL,
                author: {
                    id: eO.LAt,
                    username: "Gifting Prompt",
                    discriminator: eO.fo$,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eB.receiveMessage(e, eN(eA({}, n), { state: eO.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = eo.Z.getChannel(e);
            null != i &&
                (r === eO.evJ.SLOWMODE_RATE_LIMITED
                    ? ((t = eT.intl.formatToPlainString(eT.t.IWntYm, { seconds: i.rateLimitPerUser })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === eO.evJ.INVALID_MESSAGE_SEND_USER
                      ? ((t = eT.intl.formatToPlainString(eT.t.CTMXwM, {
                            helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === eO.evJ.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eT.intl.string(eT.t["/jUd29"])
                                  : eT.intl.string(eT.t["5EMPAw"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === eO.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eT.intl.string(eT.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === eO.evJ.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eT.intl.formatToPlainString(eT.t.zSG3Q0, { helpUrl: eO.EYA.HARMFUL_LINKS })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r in eG
                              ? ((n = eG[r].messageName), (t = eG[r].messageGetter()))
                              : ((t = eT.intl.formatToPlainString(eT.t.CTMXwM, {
                                    helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED),
                                })),
                                (n = "SEND_FAILED (".concat(r, ")"))),
                eB.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = eo.Z.getChannel(e);
            if (null == i) return;
            let { message: o, messageName: a } = (0, r.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM(),
                })
                    .with({ isDM: !0 }, () => ({
                        message: eT.intl.string(eT.t.mktny8),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0,
                        },
                        () => ({
                            message: eT.intl.string(eT.t.mktny8),
                            messageName: "BOT_GDM_EXPLICIT_CONTENT",
                        }),
                    )
                    .otherwise(() => ({
                        message: eT.intl.string(eT.t.i4AbAQ),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                l = (0, G.r)();
            eB.sendBotMessage(e, o, a, l),
                (0, v.aP)({
                    action: v.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: l,
                    channelId: e,
                    context: n,
                }),
                null != t &&
                    t.length > 0 &&
                    s.Z.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: l,
                        channelId: e,
                        attachments: t,
                    });
        },
        truncateMessages(e, t, n) {
            s.Z.dispatch({
                type: "TRUNCATE_MESSAGES",
                channelId: e,
                truncateBottom: t,
                truncateTop: n,
            });
        },
        clearChannel(e) {
            s.Z.dispatch({
                type: "CLEAR_MESSAGES",
                channelId: e,
            });
        },
        jumpToPresent(e, t) {
            eB.trackJump(e, null, "Present");
            let n = { present: !0 };
            es.Z.hasPresent(e)
                ? s.Z.dispatch({
                      type: "LOAD_MESSAGES_SUCCESS_CACHED",
                      jump: n,
                      channelId: e,
                      limit: t,
                  })
                : eB.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n,
                  });
        },
        trackJump(e, t, n, r) {
            d.ZP.trackWithMetadata(
                eO.rMx.JUMP,
                eA(
                    {
                        context: n,
                        channel_id: e,
                        message_id: t,
                    },
                    r,
                ),
            );
        },
        jumpToMessage(e) {
            var t;
            let {
                channelId: n,
                messageId: r,
                flash: i = !1,
                offset: o,
                context: a,
                extraProperties: s = null,
                isPreload: l,
                returnMessageId: c,
                skipLocalFetch: u,
                jumpType: d,
                avoidInitialScroll: f,
            } = e;
            return (
                "string" == typeof a && eB.trackJump(n, r, a, s),
                null == eR || null == (t = eR.pauseAllMediaPlayers) || t.call(eR),
                eB.fetchMessages({
                    channelId: n,
                    limit: eO.Z8P,
                    jump: {
                        messageId: r,
                        flash: i,
                        offset: o,
                        returnMessageId: c,
                        jumpType: d,
                    },
                    isPreload: l,
                    skipLocalFetch: u,
                    avoidInitialScroll: f,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eB.fetchMessages({
                channelId: t,
                limit: eO.Z8P,
                focus: { messageId: n },
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return o.tn
                .get({
                    url: eO.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n,
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, j.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let {
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: l,
                    isPreload: u,
                    skipLocalFetch: d,
                    truncate: f,
                    forICYMI: _,
                    avoidInitialScroll: p,
                    feature: h,
                } = e,
                m = eo.Z.getChannel(t),
                g = I.Z.isConnectedOrOverlay(),
                b = Date.now();
            if (null != m && m.type === eO.d4z.GUILD_STORE) return !1;
            if (
                t === E.V ||
                (eP.log(
                    "Fetching messages for "
                        .concat(t, " between ")
                        .concat(r, " and ")
                        .concat(n, ". jump=")
                        .concat(JSON.stringify(a)),
                ),
                eB._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: l,
                    truncate: f,
                }))
            )
                return;
            en.Z.fetchMessages.recordStart();
            let y = null != a ? a : void 0;
            null == y && null != l && (y = eA({}, l));
            let O = c.Z.getOrCreate(t).loadStart(y);
            c.Z.commit(O), s.Z.dispatch({ type: "LOAD_MESSAGES" });
            let v = null == y ? void 0 : y.messageId,
                T = new ex();
            return (
                d || this.fetchLocalMessages(t, n, r, i, T),
                o.tn
                    .get({
                        url: eO.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: i,
                            around: v,
                            preload: u,
                            feature: h,
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    })
                    .then(
                        (e) => (
                            en.Z.fetchMessages.recordEnd(),
                            en.Z.dispatchMessages.measure(() => {
                                let o = e.body,
                                    l = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != v || (o.length === i && (l || u)),
                                    h = null != v || (c && o.length === i);
                                if (null != v) {
                                    let e = Math.floor(i / 2),
                                        n = e + (i % 2),
                                        r = [
                                            v,
                                            ...o.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            }),
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(eE.default.compare)
                                            .indexOf(v);
                                    if ((r < n - 1 && (d = !1), o.length - r < e && (h = !1), h && o.length > 0)) {
                                        let e = eu.ZP.lastMessageId(t);
                                        o[0].id === e && (h = !1);
                                    }
                                }
                                eP.log(
                                    "Fetched "
                                        .concat(o.length, " messages for ")
                                        .concat(t, " isBefore:")
                                        .concat(l, " isAfter:")
                                        .concat(c),
                                ),
                                    T.markComplete(),
                                    s.Z.dispatch({
                                        type: "LOAD_MESSAGES_SUCCESS",
                                        channelId: t,
                                        messages: o,
                                        isBefore: l,
                                        isAfter: c,
                                        hasMoreBefore: d,
                                        hasMoreAfter: h,
                                        limit: i,
                                        jump: a,
                                        forICYMI: _,
                                        isStale: !g || I.Z.lastTimeConnectedChanged() >= b,
                                        truncate: f,
                                        avoidInitialScroll: p,
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eP.log("Failed to fetch messages for ".concat(t)),
                            s.Z.dispatch({
                                type: "LOAD_MESSAGES_FAILURE",
                                channelId: t,
                            }),
                            !1
                        ),
                    )
            );
        },
        async fetchLocalMessages(e, t, n, r, i) {
            let o = eo.Z.getBasicChannel(e),
                a = c.Z.getOrCreate(e),
                l = f.Z.database();
            if (null == l || null == o || null != t || null != n) return void en.Z.addLocalMessages(e, -1);
            if (a.ready && !a.cached) return void en.Z.addLocalMessages(e, -2);
            let u = await (0, _.dI)(() => p.ZP.load(l, e, r));
            if (null == u) return void en.Z.addLocalMessages(e, -3);
            if (
                (eP.log(
                    "fetched "
                        .concat(u.messages.length, " messages from local database (channel_id: ")
                        .concat(e, ", remote_fetch_completed: ")
                        .concat(i.completed, ")"),
                ),
                en.Z.addLocalMessages(e, u.messages.length),
                !i.completed && u.messages.length > 0)
            ) {
                let t = u.messages.length >= r && u.connectionId === I.Z.lastTimeConnectedChanged();
                s.Z.dispatch({
                    type: "LOCAL_MESSAGES_LOADED",
                    guildId: o.guild_id,
                    channelId: e,
                    users: u.users,
                    members: u.members,
                    messages: u.messages,
                    stale: !t,
                });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let r = eo.Z.getBasicChannel(e),
                i = f.Z.database();
            if (null == i || null == r) return;
            let o = c.Z.getOrCreate(e);
            if (o.hasMoreAfter) return;
            let a = await (0, _.dI)(() => p.ZP.load(i, e, t));
            if (null == a) return;
            let l = null == (n = (o = c.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                u = null == l ? a.messages : a.messages.filter((e) => eE.default.compare(e.id, l) > 0);
            eP.log(
                "Fetched "
                    .concat(a.messages.length, " messages from the cache after foregrounding. ")
                    .concat(u.length, " are new"),
            ),
                0 !== u.length &&
                    s.Z.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: r.guild_id,
                        channelId: e,
                        users: a.users,
                        members: a.members,
                        messages: u,
                        stale: !0,
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: o, focus: a, truncate: l } = e,
                c = es.Z.getMessages(t);
            if (c.cached || !c.ready) return !1;
            if ((null == o ? void 0 : o.messageId) != null || (null == a ? void 0 : a.messageId) != null) {
                if ((null == o ? void 0 : o.messageId) != null && c.has(o.messageId, !1))
                    return (
                        s.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: o,
                            limit: i,
                            truncate: l,
                        }),
                        !0
                    );
                if ((null == a ? void 0 : a.messageId) != null)
                    if (c.has(a.messageId, !1))
                        return (
                            s.Z.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: a,
                                limit: i,
                                truncate: l,
                            }),
                            !0
                        );
                    else o = eA({}, a);
                let e =
                        (null == o ? void 0 : o.messageId) != null
                            ? eE.default.extractTimestamp(null == o ? void 0 : o.messageId)
                            : 0,
                    n = c.first(),
                    r = c.last();
                if (
                    (!c.hasMoreBefore && null != n && eE.default.extractTimestamp(n.id) >= e) ||
                    (!c.hasMoreAfter && null != r && eE.default.extractTimestamp(r.id) <= e) ||
                    (null != n &&
                        null != r &&
                        eE.default.extractTimestamp(n.id) < e &&
                        eE.default.extractTimestamp(r.id) > e)
                )
                    return (
                        s.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: o,
                            limit: eO.Z8P,
                        }),
                        !0
                    );
            } else if (null != n && c.hasBeforeCached(n))
                return (
                    s.Z.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        before: n,
                        limit: i,
                        truncate: l,
                    }),
                    !0
                );
            else if (null != r && c.hasAfterCached(r))
                return (
                    s.Z.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        after: r,
                        limit: i,
                        truncate: l,
                    }),
                    !0
                );
            return !1;
        },
        async sendMessage(e, t) {
            var n;
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0;
            if (t.reaction) return Promise.resolve();
            let o = await (0, X.Z)(e);
            if (null != o) return eB.sendMessage(o, t, r, i);
            let a = null != (n = i.nonce) ? n : (0, G.r)();
            i = eN(eA({}, i), { nonce: a });
            let s = () => eB._sendMessage(e, t, i),
                l = L.ZP.backgroundify(s, void 0);
            return (M.Z.recordMessageSendAttempt(e, a, i), es.Z.isReady(e))
                ? l()
                : r && e !== E.V
                  ? (ew.info("Waiting for channel ".concat(e, " to be ready before sending.")),
                    new Promise((t, n) => {
                        es.Z.whenReady(e, () => {
                            ew.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n);
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
                          message_id: e.message.id,
                      },
                      allowedMentions: e.shouldMention
                          ? void 0
                          : {
                                parse: Object.values(eO.hCA),
                                replied_user: !1,
                            },
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: o, confettiPotionEmoji: a } = e;
            return null != a && (0, K.tv)(n, r, i, o)
                ? {
                      confettiPotionData: {
                          emoji: a,
                          callback: () => (0, Y.Hb)(t),
                      },
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
            let t = eB.getSendMessageOptionsForReply(e.pendingReply),
                n = eB.getSendMessageOptionsForConfettiPotion(eA({}, e)),
                r = eB.getSendMessageOptionsForStickers(eA({}, e)),
                i = eB.getSendMessageOptionsForScheduledMessage(eA({}, e));
            return eA({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let o = (0, D.Z)(t);
            return (
                null != i && (o = "".concat(i, "\n").concat(o)),
                eB._sendMessage(
                    e,
                    {
                        content: o,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: [],
                    },
                    {
                        location: n,
                        suggestedInvite: null != r ? r : void 0,
                    },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            eB._sendMessage(
                e,
                {
                    content: t,
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: [],
                },
                {
                    location: n,
                    suggestedInvite: null != r ? r : void 0,
                },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eB._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i,
                },
                eN(eA({}, r), { stickerIds: t }),
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return o.tn
                .post({
                    url: eO.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: i,
                        message_reference: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                    context: { location: eI.dy.GREET },
                })
                .then(
                    (n) => (
                        k.Z.donateSentMessage(n.body.content, e),
                        eB.receiveMessage(e, n.body),
                        s.Z.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t],
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eP.log("Failed to send greeting"),
                            429 !== t.status && eB.sendClydeError(e, t.body.code),
                            s.Z.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e,
                            }),
                            t)
                        );
                    },
                );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eB._sendMessage(
                e,
                {
                    content: "",
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: [],
                },
                eN(eA({}, n), {
                    poll: t,
                    location: eI.dy.POLL_CREATION,
                }),
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eg.ZP.canUseAnimatedEmojis(t)
                    ? ((r = eT.intl.string(eT.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : el.Z.canWithPartialContext(eO.Plq.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eT.intl.string(eT.t.FzugNj)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eT.intl.string(eT.t.Q87rIy)), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                {
                    errorMessage: r,
                    errorMessageName: i,
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, o, a;
            let l,
                c = (0, X.Z)(e);
            if (null != c)
                return (
                    ew.info("Converting channel to a private channel"),
                    c.then((e) => {
                        ew.info("Finished converting channel to a private channel"), eB._sendMessage(e, t, n);
                    })
                );
            let d = t.content,
                { invalidEmojis: f, validNonShortcutEmojis: _, tts: p = !1 } = t,
                {
                    activityAction: h,
                    location: m,
                    suggestedInvite: g,
                    stickerIds: E,
                    confettiPotionData: b,
                    messageReference: y,
                    allowedMentions: O,
                    poll: I,
                    sharedCustomTheme: T,
                    contentInventoryEntry: S,
                    attachments: R,
                    attachmentsToUpload: P,
                    onAttachmentUploadError: w,
                    announcementSendOptions: D,
                } = n,
                L = null != (i = n.flags) ? i : 0,
                [j, Y] = (0, ee.Z)(d);
            j && ((d = Y), (L = (0, ep.pj)(L, eO.iLy.SUPPRESS_NOTIFICATIONS)));
            let Q = !1,
                J = (null == (r = n.messageReference) ? void 0 : r.type) === eO.Uvt.FORWARD;
            if (
                "" === d &&
                null == h &&
                null == E &&
                null == I &&
                null == T &&
                null == S &&
                !J &&
                (null == R || 0 === R.length) &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == P || !(P.length > 0)) return Promise.resolve();
                else Q = !0;
            let et = null != y ? eO.uaV.REPLY : eO.uaV.DEFAULT,
                en = null != (o = n.nonce) ? o : (0, G.r)(),
                er = en,
                eo = (0, U.ZP)({
                    channelId: e,
                    content: d,
                    tts: p,
                    type: et,
                    messageReference: y,
                    allowedMentions: O,
                    flags: 0 !== L ? L : void 0,
                    nonce: en,
                    poll: (0, V.x9)(I),
                    sharedCustomTheme: T,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, Z.EL)(e, eo.id),
                    null != E && (eo.sticker_items = E.map((e) => $.Z.getStickerById(e)).filter((e) => null != e)),
                    eB.receiveMessage(e, eo, !0, n)),
                !eD && null != f && f.length > 0)
            ) {
                eD = !0;
                let t = ef.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eB.validateMessage(f, t, e);
                eB.sendBotMessage(e, n, r);
            }
            let ea = {
                type: null != D ? u.$V.SEND_ANNOUNCEMENT : u.$V.SEND,
                message: {
                    channelId: e,
                    content: d,
                    nonce: en,
                    tts: p,
                    message_reference: y,
                    allowed_mentions: O,
                    flags: L,
                    analyticsLocation: m,
                },
            };
            if (
                (null != t.components && (ea.message.components = t.components),
                null != D &&
                    ((ea.message.create_thread = D.createThread),
                    (ea.message.title = D.threadName),
                    (ea.message.publish = null != (a = D.publish) && a)),
                null != h)
            ) {
                let e,
                    t = null == h ? void 0 : h.activity.session_id;
                if (
                    null !=
                    (e =
                        h.type === eO.mFx.JOIN_REQUEST || h.type === eO.mFx.STREAM_REQUEST || null != t
                            ? t
                            : ei.default.getSessionId())
                ) {
                    let t = {
                            type: h.type,
                            session_id: e,
                            target_user_id: h.targetUserId,
                        },
                        { activity: n } = h;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (ea.message.application_id = n.application_id),
                        (ea.message.activity = t);
                }
            }
            if (
                (null != I && (ea.message.poll = I),
                null != T && (ea.message.shared_client_theme = T),
                null != E && (ea.message.sticker_ids = E),
                F.Z.isEnabled() && (ea.message.has_poggermode_enabled = !0),
                null != S && (ea.message.content_inventory_entry = S),
                null != b && ((ea.message.confetti_potion = (0, K.vY)(b)), b.callback()),
                null != R && R.length > 0 && (ea.message.attachments = R),
                null != P && P.length > 0)
            )
                try {
                    let t = await (0, x.c)({
                        channelId: e,
                        nonce: en,
                        items: P,
                        message: eo,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((l = t.uploader), Q && (null == r || 0 === r.length))) return;
                    null != r && (ea.message.attachments = r.map((e, t) => (0, eb.B)(e, t)));
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, B.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg,
                    }),
                        null == w || w(e, t, n, r);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    o = u.ZP.length,
                    a = Math.floor(10000 * Math.random());
                ew.info("Queueing message to be sent LogId:".concat(a)),
                    u.ZP.enqueue(
                        ea,
                        (a) => {
                            let c = Date.now() - i;
                            if (a.ok) {
                                k.Z.donateSentMessage(d, e),
                                    eB.receiveMessage(e, a.body, !0, {
                                        sendAnalytics: {
                                            duration: c,
                                            queueSize: o,
                                        },
                                        poll: I,
                                    });
                                let r = (0, K.ZC)(a.body);
                                null != r &&
                                    ((0, H.gA)(z.D1),
                                    (0, q.I)(
                                        {
                                            name: r.name,
                                            id: r.id,
                                        },
                                        void 0,
                                        !0,
                                        W.LL.MessageSent,
                                    ));
                                let i = eE.default.cast(e),
                                    u = N.Z.getRequest(i);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: r } = u;
                                    (0, C.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: a.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                M.Z.recordMessageSendApiResponse(en),
                                    s.Z.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ed.S.SendMessage,
                                        channelId: e,
                                    }),
                                    s.Z.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: _,
                                    }),
                                    s.Z.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: E,
                                    }),
                                    s.Z.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: {
                                            channel_id: e,
                                            author: ef.default.getCurrentUser(),
                                        },
                                    }),
                                    eL({
                                        content: d,
                                        channelId: e,
                                        messageId: a.body.id,
                                        location: null != m ? m : "chat_input",
                                        suggested: g,
                                    }),
                                    eM(d, e, a.body.id, null != m ? m : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != l &&
                                        s.Z.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: l._file,
                                            aborted: !1,
                                        }),
                                    t(a);
                            } else {
                                var f, p;
                                let t;
                                eP.log("Failed to send message", {
                                    hasErr: a.hasErr,
                                    status: a.status,
                                    code: null == (f = a.body) ? void 0 : f.code,
                                    error: a.err,
                                });
                                let i = !1;
                                if (a.hasErr) "ABORTED" === a.err.code && (i = !0);
                                else if (a.status >= 400 && a.status < 500 && a.body)
                                    if (a.body.code === eO.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = a.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            s.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ed.S.SendMessage,
                                                cooldownMs: t * e_.Z.Millis.SECOND,
                                            });
                                    } else
                                        A.U8.has(a.body.code)
                                            ? s.Z.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: ea,
                                                  errorResponseBody: {
                                                      code: a.body.code,
                                                      message: a.body.message,
                                                  },
                                              })
                                            : a.body.code === eO.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? s.Z.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : a.body.code === eO.evJ.EXPLICIT_CONTENT
                                                ? (t = eI.xi.EXPLICIT_CONTENT)
                                                : null != I || J || null != S || eB.sendClydeError(e, a.body.code);
                                i
                                    ? eB.deleteMessage(e, er, !0)
                                    : (null != l &&
                                          s.Z.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: l._file,
                                              messageId: er,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      a.hasErr ||
                                          t !== eI.xi.EXPLICIT_CONTENT ||
                                          eB.sendExplicitMediaClydeError(
                                              e,
                                              null == (p = a.body) ? void 0 : p.attachments,
                                              v.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      s.Z.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: er,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, B.x)({
                                          failureCode: a.hasErr ? void 0 : a.status,
                                          errorMessage: a.hasErr ? a.err.message : void 0,
                                      }),
                                      u.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          eP.log("Cancelling pending message", e.nonce),
                                              s.Z.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    r(a);
                            }
                        },
                        a,
                    );
            });
        },
        startEditMessage(e, t, n, r) {
            s.Z.dispatch({
                type: "MESSAGE_START_EDIT",
                channelId: e,
                messageId: t,
                content: n,
                source: r,
            });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, ep.yE)(t.flags, eO.iLy.IS_COMPONENTS_V2)) {
                let r = t.components.filter((e) => e.type === l.re.TEXT_DISPLAY);
                if (r.length > 0) {
                    let i = r.map((e) => e.content).join("\n");
                    s.Z.dispatch({
                        type: "MESSAGE_START_EDIT",
                        channelId: e,
                        messageId: t.id,
                        content: i,
                        source: n,
                    });
                    return;
                }
            }
            s.Z.dispatch({
                type: "MESSAGE_START_EDIT",
                channelId: e,
                messageId: t.id,
                content: t.content,
                source: n,
            });
        },
        updateEditMessage(e, t, n) {
            s.Z.dispatch({
                type: "MESSAGE_UPDATE_EDIT",
                channelId: e,
                textValue: t,
                richValue: n,
            });
        },
        endEditMessage(e, t) {
            s.Z.dispatch({
                type: "MESSAGE_END_EDIT",
                channelId: e,
                response: t,
            });
        },
        async editMessage(e, t, n) {
            let { content: r, components: i } = n;
            await et.Z.unarchiveThreadIfNecessary(e);
            let o = eU(e, t),
                l = ek(e, t),
                c = {
                    channelId: e,
                    messageId: t,
                    content: r,
                    isCrossposted: l,
                    allowed_mentions: o,
                    components: i,
                };
            u.ZP.enqueue(
                {
                    type: u.$V.EDIT,
                    message: c,
                },
                (n) => {
                    let r = !n.hasErr && A.U8.has(n.body.code);
                    if (r) {
                        let e = {
                            type: u.$V.EDIT,
                            message: c,
                        };
                        s.Z.dispatch({
                            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message,
                            },
                        });
                    }
                    n.hasErr
                        ? a.uv.announce(eT.intl.string(eT.t.Atp7FB))
                        : r
                          ? a.uv.announce(eT.intl.string(eT.t.Hym4i4))
                          : a.uv.announce(eT.intl.string(eT.t["0x1HBA"])),
                        eB.endEditMessage(e, n.hasErr ? void 0 : n),
                        eB.focusMessage({
                            channelId: e,
                            messageId: t,
                        });
                },
            );
        },
        async suppressEmbeds(e, t) {
            await et.Z.unarchiveThreadIfNecessary(e),
                o.tn.patch({
                    url: eO.ANM.MESSAGE(e, t),
                    body: { flags: eO.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await et.Z.unarchiveThreadIfNecessary(e),
                o.tn.patch({
                    url: eO.ANM.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    s.Z.dispatch({
                        type: "MESSAGE_DELETE",
                        id: t,
                        channelId: e,
                    }).then(() => {
                        a.uv.announce(eT.intl.string(eT.t.RYMs7u));
                    });
                };
            n
                ? r()
                : (await et.Z.unarchiveThreadIfNecessary(e),
                  o.tn
                      .del({
                          url: eO.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1,
                      })
                      .then(() => {
                          r();
                      }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                d.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            s.Z.dispatch({
                type: "MESSAGE_REVEAL",
                channelId: e,
                messageId: t,
            });
        },
        crosspostMessage: (e, t) =>
            o.tn
                .post({
                    url: eO.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                })
                .catch((e) => {
                    let t;
                    (t =
                        429 === e.status
                            ? eT.intl.formatToPlainString(eT.t["77cuq6"], {
                                  retryAfter: Math.floor(e.body.retry_after / 60),
                              })
                            : eT.intl.string(eT.t.z2gyND)),
                        ey.Z.show({
                            title: eT.intl.string(eT.t.Vd1hs7),
                            body: t,
                            confirmText: eT.intl.string(eT.t.BddRzc),
                        });
                }),
        trackInvite: ej,
    },
    eZ = eB;
