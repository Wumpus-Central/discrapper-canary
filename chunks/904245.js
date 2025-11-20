n.d(t, { Z: () => eY }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
var r = n(278074),
    i = n(636977),
    a = n(95015),
    o = n(544891),
    s = n(780384),
    l = n(570140),
    c = n(911969),
    u = n(89892),
    d = n(673750),
    f = n(367907),
    _ = n(287328),
    p = n(86670),
    h = n(685736),
    m = n(421474),
    g = n(234431),
    E = n(914498),
    b = n(333023),
    y = n(924557),
    O = n(894694),
    v = n(960904),
    I = n(830121),
    T = n(710845),
    S = n(247206),
    A = n(38618),
    C = n(859487),
    N = n(687516),
    R = n(539573),
    P = n(926526),
    D = n(826581),
    w = n(409059),
    L = n(264229),
    x = n(413605),
    M = n(366980),
    k = n(467512),
    j = n(779832),
    U = n(786761),
    G = n(459618),
    B = n(541288),
    Z = n(3148),
    F = n(48854),
    V = n(785359),
    H = n(64078),
    Y = n(351780),
    W = n(79390),
    K = n(980463),
    z = n(328908),
    q = n(992970),
    X = n(576645),
    Q = n(317951),
    J = n(287941),
    $ = n(643266),
    ee = n(617136),
    et = n(509212);
n(807092);
var en = n(869765),
    er = n(926491),
    ei = n(467798),
    ea = n(346479),
    eo = n(218543),
    es = n(199902),
    el = n(314897),
    ec = n(592125);
n(323873);
var eu = n(701190),
    ed = n(375954),
    ef = n(496675),
    e_ = n(158776),
    ep = n(306680),
    eh = n(300429),
    em = n(594174);
n(626135);
var eg = n(70956),
    eE = n(669079),
    eb = n(63063),
    ey = n(74538),
    eO = n(709054),
    ev = n(861990),
    eI = n(668781),
    eT = n(981631),
    eS = n(967249),
    eA = n(260539),
    eC = n(959517),
    eN = n(388032);
function eR(e, t, n) {
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
function eP(e) {
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
                eR(e, t, n[t]);
            });
    }
    return e;
}
function eD(e, t) {
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
function ew(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eD(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eL = null,
    ex = new T.Z("MessageActionCreators"),
    eM = new T.Z("MessageQueue"),
    ek = !1;
class ej {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eR(this, "completed", !1);
    }
}
function eU(e) {
    let {
            content: t,
            channelId: n,
            messageId: r,
            location: a,
            inviteAnalyticsMetadata: o,
            overrideProperties: s = {},
        } = e,
        l = el.default.getId();
    (0, I.ZP)(t).forEach((e) => {
        let { type: t, code: c, url: u } = e;
        if (t === v.g.INVITE)
            eG({
                inviteKey: c,
                channelId: n,
                messageId: r,
                location: a,
                inviteAnalyticsMetadata: o,
                overrideProperties: s,
            });
        else if (t === v.g.TEMPLATE) {
            let e = w.Z.getGuildTemplate(c);
            if (null == e || e.state === eA.Rj.RESOLVING) return;
            f.ZP.trackWithMetadata(eT.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: c,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
            });
        } else if (t === v.g.BUILD_OVERRIDE);
        else if (t === v.g.EXPERIMENT);
        else if (t === v.g.MANUAL_BUILD_OVERRIDE);
        else if (t === v.g.EVENT);
        else if (t === v.g.CHANNEL_LINK);
        else if (t === v.g.APP_DIRECTORY_PROFILE) (0, C.y)(c), (0, E.z$)(c, eS.U.APP_DISCOVERY, l);
        else if (t === v.g.APP_DIRECTORY_STOREFRONT) (0, C.y)(c, "storefront");
        else if (t === v.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, m.Q)(c);
            null != e && (0, C.y)(e.applicationId, "storefront_sku");
        } else if (t === v.g.ACTIVITY_BOOKMARK) {
            var d;
            let e = (0, g.U)(u);
            (0, E.z$)(c, eS.U.ACTIVITY, null != (d = e.referrerId) ? d : l, e.customId);
        } else if (t === v.g.EMBEDDED_ACTIVITY_INVITE) (0, E.z$)(c, eS.U.ACTIVITY_INVITE, l);
        else if (t === v.g.GUILD_PRODUCT);
        else if (t === v.g.SERVER_SHOP);
        else if (t === v.g.SOCIAL_LAYER_STOREFRONT);
        else if (t === v.g.QUESTS_EMBED) {
            let e = (0, et.jY)(i.j.QUESTS_EMBED);
            (0, ee.dA)({
                questId: c,
                event: eT.rMx.QUEST_LINK_SHARED,
                properties: { metadata_raw: null != e ? e : null },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.j.QUESTS_EMBED,
            });
        } else if (t === v.g.APP_OAUTH2_LINK)
            f.ZP.trackWithMetadata(eT.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: c }),
                (0, E.z$)(c, eS.U.OAUTH, l);
        else if (t === v.g.COLLECTIBLES_SHOP);
        else throw Error("Unknown coded link type: ".concat(t));
    });
}
function eG(e) {
    var t, n;
    let {
            inviteKey: r,
            channelId: i,
            messageId: a,
            location: o,
            inviteAnalyticsMetadata: s,
            overrideProperties: l = {},
        } = e,
        c = el.default.getId(),
        u = eu.Z.getInvite(r),
        d = (0, L.fU)(r),
        _ = null != u && (0, x.P1)(u),
        p = null == u || null == (t = u.target_application) ? void 0 : t.id;
    null != p && _ && (0, E.z$)(p, eS.U.ACTIVITY_INVITE, c);
    let h = ec.Z.getChannel(i);
    if (null != h) {
        let e = null;
        h.isMultiUserDM() ? (e = eT.dAT.GDM_INVITE) : h.isPrivate() || (e = eT.dAT.SERVER_INVITE);
        let t = {};
        if (null != u && u.state === eT.r2o.RESOLVED && null != u.channel) {
            let r = u.channel;
            (t.invite_channel_id = r.id),
                (t.invite_guild_id = null == (n = u.guild) ? void 0 : n.id),
                (t.invite_channel_type = r.type),
                null != u.inviter && (t.invite_inviter_id = u.inviter.id),
                null != u.target_application && (t.application_id = u.target_application.id);
            let i = es.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = eT.dAT.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, N.L2)(i, e_.Z);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s &&
            (null != s.suggestionData &&
                ((t.is_suggested = s.suggestionData.isAffinitySuggestion),
                (t.row_num = s.suggestionData.rowNum),
                (t.num_total = s.suggestionData.numTotal),
                (t.num_affinity_connections = s.suggestionData.numAffinityConnections),
                (t.is_filtered = s.suggestionData.isFiltered)),
            (t.source = s.source)),
            (t = eP(
                ew(eP({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: d.baseCode,
                    guild_id: h.getGuildId(),
                    channel_id: h.id,
                    message_id: a,
                    send_type: eT.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.ZP.trackWithMetadata(eT.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != u &&
            u.state === eT.r2o.RESOLVED &&
            null != u.inviter &&
            ((e.invite_inviter_id = u.inviter.id),
            null != u.target_application && (e.application_id = u.target_application.id),
            (e = eP(
                ew(eP({}, e), {
                    location: o,
                    invite_type: eT.dAT.FRIEND_INVITE,
                    invite_code: d.baseCode,
                    message_id: a,
                    send_type: eT.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.ZP.trackWithMetadata(eT.rMx.INVITE_SENT, e));
    }
}
function eB(e, t, n, r, i) {
    (0, eE.Q_)(e).forEach((e) => {
        let a = ec.Z.getChannel(t);
        null != a &&
            f.ZP.trackWithMetadata(eT.rMx.GIFT_CODE_SENT, {
                location: r,
                gift_code: e,
                guild_id: a.getGuildId(),
                channel_id: a.id,
                channel_type: a.type,
                message_id: n,
                automatic_send: i,
            });
    });
}
function eZ(e, t) {
    let n = ed.Z.getMessage(e, t);
    return null != n && n.hasFlag(eT.iLy.CROSSPOSTED);
}
function eF(e, t) {
    let n = ed.Z.getMessage(e, t);
    if (null == n || n.type !== eT.uaV.REPLY) return;
    let r = en.Z.getMessageByReference(n.messageReference);
    if (r.state === en.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eT.hCA),
            replied_user: !1,
        };
}
let eV = {
        [eT.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eN.intl.string(eN.t.k1Cjqr),
        },
        [eT.evJ.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eN.intl.string(eN.t.Z5SUuv),
        },
        [eT.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eN.intl.formatToPlainString(eN.t.CTMXwL, {
                    helpUrl: eb.Z.getArticleURL(eT.BhN.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eT.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eN.intl.string(eN.t.E8nbNb),
        },
        [eT.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eN.intl.string(eN.t.aRUbah),
        },
        [eT.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eN.intl.string(eN.t.aRUbah),
        },
        [eT.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eN.intl.string(eN.t["/meGhR"]),
        },
        [eT.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eN.intl.string(eN.t.Oc1Zjw),
        },
    },
    eH = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            l.Z.dispatch({
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
                f.ZP.trackWithMetadata(eT.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n,
                }),
                eH.receiveMessage(
                    e,
                    (0, Z.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n,
                    }),
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, Z.ZP)({
                channelId: e,
                nonce: n,
                type: eT.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eT.iLy.EPHEMERAL,
                author: {
                    id: eT.LAt,
                    username: "Nitro Notification",
                    discriminator: eT.fo$,
                    avatar: "nitro",
                    bot: !0,
                },
            });
            eH.receiveMessage(
                e,
                ew(eP({}, r), {
                    state: eT.yb.SENT,
                    channel_id: e,
                }),
                !0,
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, Z.ZP)({
                channelId: e,
                type: eT.uaV.GIFTING_PROMPT,
                content: "",
                flags: eT.iLy.EPHEMERAL,
                author: {
                    id: eT.LAt,
                    username: "Gifting Prompt",
                    discriminator: eT.fo$,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eH.receiveMessage(e, ew(eP({}, n), { state: eT.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ec.Z.getChannel(e);
            null != i &&
                (r === eT.evJ.SLOWMODE_RATE_LIMITED
                    ? ((t = eN.intl.formatToPlainString(eN.t.IWntYg, { seconds: i.rateLimitPerUser })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === eT.evJ.INVALID_MESSAGE_SEND_USER
                      ? ((t = eN.intl.formatToPlainString(eN.t.CTMXwL, {
                            helpUrl: eb.Z.getArticleURL(eT.BhN.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === eT.evJ.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eN.intl.string(eN.t["/jUd2+"])
                                  : eN.intl.string(eN.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === eT.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eN.intl.string(eN.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === eT.evJ.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eN.intl.formatToPlainString(eN.t.zSG3Qy, { helpUrl: eT.EYA.HARMFUL_LINKS })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r in eV
                              ? ((n = eV[r].messageName), (t = eV[r].messageGetter()))
                              : ((t = eN.intl.formatToPlainString(eN.t.CTMXwL, {
                                    helpUrl: eb.Z.getArticleURL(eT.BhN.DM_COULD_NOT_BE_DELIVERED),
                                })),
                                (n = "SEND_FAILED (".concat(r, ")"))),
                eH.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ec.Z.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: o } = (0, r.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM(),
                })
                    .with({ isDM: !0 }, () => ({
                        message: eN.intl.string(eN.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0,
                        },
                        () => ({
                            message: eN.intl.string(eN.t["mktny/"]),
                            messageName: "BOT_GDM_EXPLICIT_CONTENT",
                        }),
                    )
                    .otherwise(() => ({
                        message: eN.intl.string(eN.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                s = (0, F.r)();
            eH.sendBotMessage(e, a, o, s),
                (0, S.aP)({
                    action: S.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: s,
                    channelId: e,
                    context: n,
                }),
                null != t &&
                    t.length > 0 &&
                    l.Z.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: s,
                        channelId: e,
                        attachments: t,
                    });
        },
        truncateMessages(e, t, n) {
            l.Z.dispatch({
                type: "TRUNCATE_MESSAGES",
                channelId: e,
                truncateBottom: t,
                truncateTop: n,
            });
        },
        clearChannel(e) {
            l.Z.dispatch({
                type: "CLEAR_MESSAGES",
                channelId: e,
            });
        },
        jumpToPresent(e, t) {
            eH.trackJump(e, null, "Present");
            let n = { present: !0 };
            ed.Z.hasPresent(e)
                ? l.Z.dispatch({
                      type: "LOAD_MESSAGES_SUCCESS_CACHED",
                      jump: n,
                      channelId: e,
                      limit: t,
                  })
                : eH.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n,
                  });
        },
        trackJump(e, t, n, r) {
            f.ZP.trackWithMetadata(
                eT.rMx.JUMP,
                eP(
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
                offset: a,
                context: o,
                extraProperties: s = null,
                isPreload: l,
                returnMessageId: c,
                skipLocalFetch: u,
                jumpType: d,
                avoidInitialScroll: f,
            } = e;
            return (
                "string" == typeof o && eH.trackJump(n, r, o, s),
                null == eL || null == (t = eL.pauseAllMediaPlayers) || t.call(eL),
                eH.fetchMessages({
                    channelId: n,
                    limit: eT.Z8P,
                    jump: {
                        messageId: r,
                        flash: i,
                        offset: a,
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
            eH.fetchMessages({
                channelId: t,
                limit: eT.Z8P,
                focus: { messageId: n },
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return o.tn
                .get({
                    url: eT.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n,
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((e) => {
                    if (e.body.length > 0) return (0, U.e5)(e.body[0]);
                });
        },
        fetchMessages(e) {
            let {
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: s,
                    isPreload: c,
                    skipLocalFetch: d,
                    truncate: f,
                    forICYMI: _,
                    avoidInitialScroll: p,
                    feature: h,
                } = e,
                m = ec.Z.getChannel(t),
                g = A.Z.isConnectedOrOverlay(),
                E = Date.now();
            if (null != m && m.type === eT.d4z.GUILD_STORE) return !1;
            if (
                t === b.V ||
                (ex.log(
                    "Fetching messages for "
                        .concat(t, " between ")
                        .concat(r, " and ")
                        .concat(n, ". jump=")
                        .concat(JSON.stringify(a)),
                ),
                eH._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: s,
                    truncate: f,
                }))
            )
                return;
            eo.Z.fetchMessages.recordStart();
            let y = null != a ? a : void 0;
            null == y && null != s && (y = eP({}, s));
            let O = u.Z.getOrCreate(t).loadStart(y);
            u.Z.commit(O), l.Z.dispatch({ type: "LOAD_MESSAGES" });
            let v = null == y ? void 0 : y.messageId,
                I = new ej();
            return (
                d || this.fetchLocalMessages(t, n, r, i, I),
                o.tn
                    .get({
                        url: eT.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: i,
                            around: v,
                            preload: c,
                            feature: h,
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    })
                    .then(
                        (e) => (
                            eo.Z.fetchMessages.recordEnd(),
                            eo.Z.dispatchMessages.measure(() => {
                                let o = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != v || (o.length === i && (s || u)),
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
                                            .sort(eO.default.compare)
                                            .indexOf(v);
                                    if ((r < n - 1 && (d = !1), o.length - r < e && (h = !1), h && o.length > 0)) {
                                        let e = ep.ZP.lastMessageId(t);
                                        o[0].id === e && (h = !1);
                                    }
                                }
                                ex.log(
                                    "Fetched "
                                        .concat(o.length, " messages for ")
                                        .concat(t, " isBefore:")
                                        .concat(s, " isAfter:")
                                        .concat(c),
                                ),
                                    I.markComplete(),
                                    l.Z.dispatch({
                                        type: "LOAD_MESSAGES_SUCCESS",
                                        channelId: t,
                                        messages: o,
                                        isBefore: s,
                                        isAfter: c,
                                        hasMoreBefore: d,
                                        hasMoreAfter: h,
                                        limit: i,
                                        jump: a,
                                        forICYMI: _,
                                        isStale: !g || A.Z.lastTimeConnectedChanged() >= E,
                                        truncate: f,
                                        avoidInitialScroll: p,
                                    });
                            }),
                            !0
                        ),
                        () => (
                            ex.log("Failed to fetch messages for ".concat(t)),
                            l.Z.dispatch({
                                type: "LOAD_MESSAGES_FAILURE",
                                channelId: t,
                            }),
                            !1
                        ),
                    )
            );
        },
        async fetchLocalMessages(e, t, n, r, i) {
            let a = ec.Z.getBasicChannel(e),
                o = u.Z.getOrCreate(e),
                s = _.Z.database();
            if (null == s || null == a || null != t || null != n) return void eo.Z.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void eo.Z.addLocalMessages(e, -2);
            let c = await (0, p.dI)(() => h.ZP.load(s, e, r));
            if (null == c) return void eo.Z.addLocalMessages(e, -3);
            if (
                (ex.log(
                    "fetched "
                        .concat(c.messages.length, " messages from local database (channel_id: ")
                        .concat(e, ", remote_fetch_completed: ")
                        .concat(i.completed, ")"),
                ),
                eo.Z.addLocalMessages(e, c.messages.length),
                !i.completed && c.messages.length > 0)
            ) {
                let t = c.messages.length >= r && c.connectionId === A.Z.lastTimeConnectedChanged();
                l.Z.dispatch({
                    type: "LOCAL_MESSAGES_LOADED",
                    guildId: a.guild_id,
                    channelId: e,
                    users: c.users,
                    members: c.members,
                    messages: c.messages,
                    stale: !t,
                });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let r = ec.Z.getBasicChannel(e),
                i = _.Z.database();
            if (null == i || null == r) return;
            let a = u.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let o = await (0, p.dI)(() => h.ZP.load(i, e, t));
            if (null == o) return;
            let s = null == (n = (a = u.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                c = null == s ? o.messages : o.messages.filter((e) => eO.default.compare(e.id, s) > 0);
            ex.log(
                "Fetched "
                    .concat(o.messages.length, " messages from the cache after foregrounding. ")
                    .concat(c.length, " are new"),
            ),
                0 !== c.length &&
                    l.Z.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: r.guild_id,
                        channelId: e,
                        users: o.users,
                        members: o.members,
                        messages: c,
                        stale: !0,
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: o, truncate: s } = e,
                c = ed.Z.getMessages(t);
            if (c.cached || !c.ready) return !1;
            if ((null == a ? void 0 : a.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
                if ((null == a ? void 0 : a.messageId) != null && c.has(a.messageId, !1))
                    return (
                        l.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: i,
                            truncate: s,
                        }),
                        !0
                    );
                if ((null == o ? void 0 : o.messageId) != null)
                    if (c.has(o.messageId, !1))
                        return (
                            l.Z.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: o,
                                limit: i,
                                truncate: s,
                            }),
                            !0
                        );
                    else a = eP({}, o);
                let e =
                        (null == a ? void 0 : a.messageId) != null
                            ? eO.default.extractTimestamp(null == a ? void 0 : a.messageId)
                            : 0,
                    n = c.first(),
                    r = c.last();
                if (
                    (!c.hasMoreBefore && null != n && eO.default.extractTimestamp(n.id) >= e) ||
                    (!c.hasMoreAfter && null != r && eO.default.extractTimestamp(r.id) <= e) ||
                    (null != n &&
                        null != r &&
                        eO.default.extractTimestamp(n.id) < e &&
                        eO.default.extractTimestamp(r.id) > e)
                )
                    return (
                        l.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: eT.Z8P,
                        }),
                        !0
                    );
            } else if (null != n && c.hasBeforeCached(n))
                return (
                    l.Z.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        before: n,
                        limit: i,
                        truncate: s,
                    }),
                    !0
                );
            else if (null != r && c.hasAfterCached(r))
                return (
                    l.Z.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        after: r,
                        limit: i,
                        truncate: s,
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
            let a = await (0, $.Z)(e);
            if (null != a) return eH.sendMessage(a, t, r, i);
            let o = null != (n = i.nonce) ? n : (0, F.r)();
            i = ew(eP({}, i), { nonce: o });
            let s = () => eH._sendMessage(e, t, i),
                l = j.ZP.backgroundify(s, void 0);
            return (G.Z.recordMessageSendAttempt(e, o, i), ed.Z.isReady(e))
                ? l()
                : r && e !== b.V
                  ? (eM.info("Waiting for channel ".concat(e, " to be ready before sending.")),
                    new Promise((t, n) => {
                        ed.Z.whenReady(e, () => {
                            eM.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n);
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
                                parse: Object.values(eT.hCA),
                                replied_user: !1,
                            },
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: a, confettiPotionEmoji: o } = e;
            return null != o && (0, X.tv)(n, r, i, a)
                ? {
                      confettiPotionData: {
                          emoji: o,
                          callback: () => (0, z.Hb)(t),
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
            let t = eH.getSendMessageOptionsForReply(e.pendingReply),
                n = eH.getSendMessageOptionsForConfettiPotion(eP({}, e)),
                r = eH.getSendMessageOptionsForStickers(eP({}, e)),
                i = eH.getSendMessageOptionsForScheduledMessage(eP({}, e));
            return eP({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, M.Z)(t);
            return (
                null != i && (a = "".concat(i, "\n").concat(a)),
                eH._sendMessage(
                    e,
                    {
                        content: a,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: [],
                    },
                    {
                        location: n,
                        inviteAnalyticsMetadata: r,
                    },
                )
            );
        },
        sendActivityBookmark: (e, t, n, r) =>
            eH._sendMessage(
                e,
                {
                    content: t,
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: [],
                },
                {
                    location: n,
                    inviteAnalyticsMetadata: r,
                },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eH._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i,
                },
                ew(eP({}, r), { stickerIds: t }),
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return o.tn
                .post({
                    url: eT.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: i,
                        message_reference: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                    context: { location: eC.dy.GREET },
                })
                .then(
                    (n) => (
                        B.Z.donateSentMessage(n.body.content, e),
                        eH.receiveMessage(e, n.body),
                        l.Z.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t],
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (ex.log("Failed to send greeting"),
                            429 !== t.status && eH.sendClydeError(e, t.body.code),
                            l.Z.dispatch({
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
            return eH._sendMessage(
                e,
                {
                    content: "",
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: [],
                },
                ew(eP({}, n), {
                    poll: t,
                    location: eC.dy.POLL_CREATION,
                }),
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !ey.ZP.canUseAnimatedEmojis(t)
                    ? ((r = eN.intl.string(eN.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : ef.Z.canWithPartialContext(eT.Plq.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = eN.intl.string(eN.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eN.intl.string(eN.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                {
                    errorMessage: r,
                    errorMessageName: i,
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, o, s, c, u, f, _, p, h;
            let m,
                g = (0, $.Z)(e);
            if (null != g)
                return (
                    eM.info("Converting channel to a private channel"),
                    g.then((e) => {
                        eM.info("Finished converting channel to a private channel"), eH._sendMessage(e, t, n);
                    })
                );
            let E = t.content,
                { invalidEmojis: b, validNonShortcutEmojis: v, tts: I = !1 } = t,
                {
                    activityAction: T,
                    location: A,
                    inviteAnalyticsMetadata: C,
                    stickerIds: N,
                    confettiPotionData: w,
                    messageReference: L,
                    allowedMentions: x,
                    poll: M,
                    sharedCustomTheme: j,
                    contentInventoryEntry: U,
                    attachments: z,
                    attachmentsToUpload: ee,
                    onAttachmentUploadError: et,
                    announcementSendOptions: en,
                    withCheckpoint: ea,
                } = n,
                eo = null != (i = n.flags) ? i : 0,
                [es, ec] = (0, ei.Z)(E);
            es && ((E = ec), (eo = (0, a.pj)(eo, eT.iLy.SUPPRESS_NOTIFICATIONS)));
            let eu = !1,
                ed = (null == (r = n.messageReference) ? void 0 : r.type) === eT.Uvt.FORWARD;
            if (
                "" === E &&
                null == T &&
                null == N &&
                null == M &&
                null == j &&
                null == U &&
                !ed &&
                (null == z || 0 === z.length) &&
                !ea &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == ee || !(ee.length > 0)) return Promise.resolve();
                else eu = !0;
            let ef = null != L ? eT.uaV.REPLY : eT.uaV.DEFAULT,
                e_ = null != (o = n.nonce) ? o : (0, F.r)(),
                ep = e_,
                eE = (0, Z.ZP)({
                    channelId: e,
                    content: E,
                    tts: I,
                    type: ef,
                    messageReference: L,
                    allowedMentions: x,
                    flags: 0 !== eo ? eo : void 0,
                    nonce: e_,
                    poll: (0, W.x9)(M),
                    sharedCustomTheme: j,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, H.EL)(e, eE.id),
                    null != N && (eE.sticker_items = N.map((e) => er.Z.getStickerById(e)).filter((e) => null != e)),
                    eH.receiveMessage(e, eE, !0, n)),
                !ek && null != b && b.length > 0)
            ) {
                ek = !0;
                let t = em.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eH.validateMessage(b, t, e);
                eH.sendBotMessage(e, n, r);
            }
            let eb = {
                type: null != en ? d.$V.SEND_ANNOUNCEMENT : d.$V.SEND,
                message: {
                    channelId: e,
                    content: E,
                    nonce: e_,
                    tts: I,
                    message_reference: L,
                    allowed_mentions: x,
                    flags: eo,
                    analyticsLocation: A,
                },
            };
            if (
                (null != t.components && (eb.message.components = t.components),
                null != en &&
                    ((eb.message.create_thread = en.createThread),
                    (eb.message.title = en.threadName),
                    (eb.message.publish = null != (s = en.publish) && s)),
                null != T)
            ) {
                let e,
                    t = null == T ? void 0 : T.activity.session_id;
                if (
                    null !=
                    (e =
                        T.type === eT.mFx.JOIN_REQUEST || T.type === eT.mFx.STREAM_REQUEST || null != t
                            ? t
                            : el.default.getSessionId())
                ) {
                    let t = {
                            type: T.type,
                            session_id: e,
                            target_user_id: T.targetUserId,
                        },
                        { activity: n } = T;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (eb.message.application_id = n.application_id),
                        (eb.message.activity = t);
                }
            }
            if (
                (null != M && (eb.message.poll = M),
                null != j && (eb.message.shared_client_theme = j),
                null != N && (eb.message.sticker_ids = N),
                Y.Z.isEnabled() && (eb.message.has_poggermode_enabled = !0),
                ea && (eb.message.with_checkpoint = !0),
                null != U && (eb.message.content_inventory_entry = U),
                null != w && ((eb.message.confetti_potion = (0, X.vY)(w)), w.callback()),
                null != z && z.length > 0 && (eb.message.attachments = z),
                null != ee && ee.length > 0)
            )
                try {
                    let t = await (0, k.c)({
                        channelId: e,
                        nonce: e_,
                        items: ee,
                        message: eE,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((m = t.uploader), eu && (null == r || 0 === r.length))) return;
                    if (null != r && ((eb.message.attachments = r.map((e, t) => (0, ev.B)(e, t))), (0, y.NS)())) {
                        for (let e of r)
                            if (
                                (null == (_ = e.item) ||
                                null == (f = _.clip) ||
                                null == (u = f.decision) ||
                                null == (c = u.signal)
                                    ? void 0
                                    : c.type) === O.Bs.DISTRIBUTED
                            ) {
                                let t = {
                                        id: e.item.clip.id,
                                        remoteTriggerClipId:
                                            null == (h = e.item.clip.decision) || null == (p = h.signal)
                                                ? void 0
                                                : p.remoteTriggerClipId,
                                    },
                                    n = "__CLIP_METADATA__",
                                    r = "".concat(n).concat(JSON.stringify(t));
                                eb.message.content = "".concat(eb.message.content).concat(r);
                                break;
                            }
                    }
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, V.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg,
                    }),
                        null == et || et(e, t, n, r);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = d.ZP.length,
                    o = Math.floor(10000 * Math.random());
                eM.info("Queueing message to be sent LogId:".concat(o)),
                    d.ZP.enqueue(
                        eb,
                        (o) => {
                            let s = Date.now() - i;
                            if (o.ok) {
                                B.Z.donateSentMessage(E, e),
                                    eH.receiveMessage(e, o.body, !0, {
                                        sendAnalytics: {
                                            duration: s,
                                            queueSize: a,
                                        },
                                        poll: M,
                                    });
                                let r = (0, X.ZC)(o.body);
                                null != r &&
                                    ((0, K.gA)(Q.D1),
                                    (0, J.I)(
                                        {
                                            name: r.name,
                                            id: r.id,
                                        },
                                        void 0,
                                        !0,
                                        q.LL.MessageSent,
                                    ));
                                let i = eO.default.cast(e),
                                    c = D.Z.getRequest(i);
                                if (null != c) {
                                    let { guildId: t, userId: n, applicationStatus: r } = c;
                                    (0, P.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: o.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                G.Z.recordMessageSendApiResponse(e_),
                                    l.Z.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eh.S.SendMessage,
                                        channelId: e,
                                    }),
                                    l.Z.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: v,
                                    }),
                                    l.Z.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: N,
                                    }),
                                    l.Z.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: {
                                            channel_id: e,
                                            author: em.default.getCurrentUser(),
                                        },
                                    }),
                                    eU({
                                        content: E,
                                        channelId: e,
                                        messageId: o.body.id,
                                        location: null != A ? A : "chat_input",
                                        inviteAnalyticsMetadata: C,
                                    }),
                                    eB(E, e, o.body.id, null != A ? A : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != m &&
                                        l.Z.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: m._file,
                                            aborted: !1,
                                        }),
                                    t(o);
                            } else {
                                var c, u;
                                let t;
                                ex.log("Failed to send message", {
                                    hasErr: o.hasErr,
                                    status: o.status,
                                    code: null == (c = o.body) ? void 0 : c.code,
                                    error: o.err,
                                });
                                let i = !1;
                                if (o.hasErr) "ABORTED" === o.err.code && (i = !0);
                                else if (o.status >= 400 && o.status < 500 && o.body)
                                    if (o.body.code === eT.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = o.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eh.S.SendMessage,
                                                cooldownMs: t * eg.Z.Millis.SECOND,
                                            });
                                    } else
                                        R.U8.has(o.body.code)
                                            ? l.Z.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eb,
                                                  errorResponseBody: {
                                                      code: o.body.code,
                                                      message: o.body.message,
                                                  },
                                              })
                                            : o.body.code === eT.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.Z.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : o.body.code === eT.evJ.EXPLICIT_CONTENT
                                                ? (t = eC.xi.EXPLICIT_CONTENT)
                                                : null != M || ed || null != U || eH.sendClydeError(e, o.body.code);
                                i
                                    ? eH.deleteMessage(e, ep, !0)
                                    : (null != m &&
                                          l.Z.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: m._file,
                                              messageId: ep,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      o.hasErr ||
                                          t !== eC.xi.EXPLICIT_CONTENT ||
                                          eH.sendExplicitMediaClydeError(
                                              e,
                                              null == (u = o.body) ? void 0 : u.attachments,
                                              S.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.Z.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ep,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, V.x)({
                                          failureCode: o.hasErr ? void 0 : o.status,
                                          errorMessage: o.hasErr ? o.err.message : void 0,
                                      }),
                                      d.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          ex.log("Cancelling pending message", e.nonce),
                                              l.Z.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    r(o);
                            }
                        },
                        o,
                    );
            });
        },
        startEditMessage(e, t, n, r) {
            l.Z.dispatch({
                type: "MESSAGE_START_EDIT",
                channelId: e,
                messageId: t,
                content: n,
                source: r,
            });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, a.yE)(t.flags, eT.iLy.IS_COMPONENTS_V2)) {
                let r = t.components.filter((e) => e.type === c.re.TEXT_DISPLAY);
                if (r.length > 0) {
                    let i = r.map((e) => e.content).join("\n");
                    l.Z.dispatch({
                        type: "MESSAGE_START_EDIT",
                        channelId: e,
                        messageId: t.id,
                        content: i,
                        source: n,
                    });
                    return;
                }
            }
            l.Z.dispatch({
                type: "MESSAGE_START_EDIT",
                channelId: e,
                messageId: t.id,
                content: t.content,
                source: n,
            });
        },
        updateEditMessage(e, t, n) {
            l.Z.dispatch({
                type: "MESSAGE_UPDATE_EDIT",
                channelId: e,
                textValue: t,
                richValue: n,
            });
        },
        endEditMessage(e, t) {
            l.Z.dispatch({
                type: "MESSAGE_END_EDIT",
                channelId: e,
                response: t,
            });
        },
        async editMessage(e, t, n) {
            let { content: r, components: i } = n;
            await ea.Z.unarchiveThreadIfNecessary(e);
            let a = eF(e, t),
                o = eZ(e, t),
                c = {
                    channelId: e,
                    messageId: t,
                    content: r,
                    isCrossposted: o,
                    allowed_mentions: a,
                    components: i,
                };
            d.ZP.enqueue(
                {
                    type: d.$V.EDIT,
                    message: c,
                },
                (n) => {
                    let r = !n.hasErr && R.U8.has(n.body.code);
                    if (r) {
                        let e = {
                            type: d.$V.EDIT,
                            message: c,
                        };
                        l.Z.dispatch({
                            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message,
                            },
                        });
                    }
                    n.hasErr
                        ? s.uv.announce(eN.intl.string(eN.t.Atp7FP))
                        : r
                          ? s.uv.announce(eN.intl.string(eN.t.Hym4ix))
                          : s.uv.announce(eN.intl.string(eN.t["0x1HBD"])),
                        eH.endEditMessage(e, n.hasErr ? void 0 : n),
                        eH.focusMessage({
                            channelId: e,
                            messageId: t,
                        });
                },
            );
        },
        async suppressEmbeds(e, t) {
            await ea.Z.unarchiveThreadIfNecessary(e),
                o.tn.patch({
                    url: eT.ANM.MESSAGE(e, t),
                    body: { flags: eT.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await ea.Z.unarchiveThreadIfNecessary(e),
                o.tn.patch({
                    url: eT.ANM.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    l.Z.dispatch({
                        type: "MESSAGE_DELETE",
                        id: t,
                        channelId: e,
                    }).then(() => {
                        s.uv.announce(eN.intl.string(eN.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await ea.Z.unarchiveThreadIfNecessary(e),
                  o.tn
                      .del({
                          url: eT.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1,
                      })
                      .then(() => {
                          r();
                      }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                f.ZP.trackWithMetadata(eT.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            l.Z.dispatch({
                type: "MESSAGE_REVEAL",
                channelId: e,
                messageId: t,
            });
        },
        crosspostMessage: (e, t) =>
            o.tn
                .post({
                    url: eT.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                })
                .catch((e) => {
                    let t;
                    (t =
                        429 === e.status
                            ? eN.intl.formatToPlainString(eN.t["77cuqz"], {
                                  retryAfter: Math.floor(e.body.retry_after / 60),
                              })
                            : eN.intl.string(eN.t.z2gyNF)),
                        eI.Z.show({
                            title: eN.intl.string(eN.t.Vd1hs6),
                            body: t,
                            confirmText: eN.intl.string(eN.t.BddRzS),
                        });
                }),
        trackInvite: eG,
    },
    eY = eH;
