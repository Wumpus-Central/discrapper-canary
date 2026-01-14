n.d(t, { Z: () => eV }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
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
    p = n(287328),
    _ = n(86670),
    m = n(685736),
    h = n(421474),
    g = n(234431),
    E = n(914498),
    b = n(333023),
    y = n(924557),
    O = n(894694),
    v = n(960904),
    S = n(830121),
    I = n(710845),
    T = n(247206),
    C = n(859155),
    A = n(38618),
    N = n(859487),
    P = n(687516),
    R = n(539573),
    w = n(926526),
    D = n(826581),
    x = n(409059),
    L = n(264229),
    j = n(413605),
    M = n(366980),
    k = n(880175),
    U = n(467512),
    G = n(779832),
    Z = n(786761),
    F = n(459618),
    B = n(541288),
    V = n(3148),
    H = n(48854),
    Y = n(785359),
    W = n(64078),
    K = n(351780),
    z = n(79390),
    q = n(643266),
    Q = n(617136),
    X = n(862657);
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
    ef = n(594174),
    ep = n(626135),
    e_ = n(70956),
    em = n(669079),
    eh = n(63063),
    eg = n(74538),
    eE = n(709054),
    eb = n(861990),
    ey = n(668781),
    eO = n(981631),
    ev = n(967249),
    eS = n(260539),
    eI = n(959517),
    eT = n(388032);
function eC(e, t, n) {
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
                eC(e, t, n[t]);
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
function eP(e, t) {
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
let eR = null,
    ew = new I.Z("MessageActionCreators"),
    eD = new I.Z("MessageQueue"),
    ex = !1;
class eL {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eC(this, "completed", !1);
    }
}
function ej(e) {
    let {
            content: t,
            channelId: n,
            messageId: r,
            location: a,
            inviteAnalyticsMetadata: o,
            overrideProperties: s = {},
        } = e,
        l = ei.default.getId();
    (0, S.ZP)(t).forEach((e) => {
        let { type: t, code: c, url: u } = e;
        if (t === v.g.INVITE)
            eM({
                inviteKey: c,
                channelId: n,
                messageId: r,
                location: a,
                inviteAnalyticsMetadata: o,
                overrideProperties: s,
            });
        else if (t === v.g.TEMPLATE) {
            let e = x.Z.getGuildTemplate(c);
            if (null == e || e.state === eS.Rj.RESOLVING) return;
            f.ZP.trackWithMetadata(eO.rMx.GUILD_TEMPLATE_LINK_SENT, {
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
        else if (t === v.g.APP_DIRECTORY_PROFILE) (0, N.y)(c), (0, E.z$)(c, ev.U.APP_DISCOVERY, l);
        else if (t === v.g.APP_DIRECTORY_STOREFRONT) (0, N.y)(c, "storefront");
        else if (t === v.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, h.Q)(c);
            null != e && (0, N.y)(e.applicationId, "storefront_sku");
        } else if (t === v.g.ACTIVITY_BOOKMARK) {
            var d;
            let e = (0, g.U)(u);
            (0, E.z$)(c, ev.U.ACTIVITY, null != (d = e.referrerId) ? d : l, e.customId);
        } else if (t === v.g.EMBEDDED_ACTIVITY_INVITE) (0, E.z$)(c, ev.U.ACTIVITY_INVITE, l);
        else if (t === v.g.GUILD_PRODUCT);
        else if (t === v.g.SERVER_SHOP);
        else if (t === v.g.SOCIAL_LAYER_STOREFRONT);
        else if (t === v.g.QUESTS_EMBED) {
            let e = (0, X.jY)(i.j.QUESTS_EMBED),
                t = (0, X.R_)(i.j.QUESTS_EMBED);
            (0, Q.dA)({
                questId: c,
                event: eO.rMx.QUEST_LINK_SHARED,
                properties: {
                    metadata_raw: null != e ? e : null,
                    metadata_sealed: null != t ? t : null,
                },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.j.QUESTS_EMBED,
            });
        } else if (t === v.g.APP_OAUTH2_LINK)
            f.ZP.trackWithMetadata(eO.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: c }),
                (0, E.z$)(c, ev.U.OAUTH, l);
        else if (t === v.g.COLLECTIBLES_SHOP);
        else throw Error("Unknown coded link type: ".concat(t));
    });
}
function eM(e) {
    var t, n;
    let {
            inviteKey: r,
            channelId: i,
            messageId: a,
            location: o,
            inviteAnalyticsMetadata: s,
            overrideProperties: l = {},
        } = e,
        c = ei.default.getId(),
        u = eo.Z.getInvite(r),
        d = (0, L.fU)(r),
        p = null != u && (0, j.P1)(u),
        _ = null == u || null == (t = u.target_application) ? void 0 : t.id;
    null != _ && p && (0, E.z$)(_, ev.U.ACTIVITY_INVITE, c);
    let m = ea.Z.getChannel(i);
    if (null != m) {
        let e = null;
        m.isMultiUserDM() ? (e = eO.dAT.GDM_INVITE) : m.isPrivate() || (e = eO.dAT.SERVER_INVITE);
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
                let n = (0, P.L2)(i, ec.Z);
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
            (t = eA(
                eP(eA({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: d.baseCode,
                    guild_id: m.getGuildId(),
                    channel_id: m.id,
                    message_id: a,
                    send_type: eO.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != u &&
            u.state === eO.r2o.RESOLVED &&
            null != u.inviter &&
            ((e.invite_inviter_id = u.inviter.id),
            null != u.target_application && (e.application_id = u.target_application.id),
            (e = eA(
                eP(eA({}, e), {
                    location: o,
                    invite_type: eO.dAT.FRIEND_INVITE,
                    invite_code: d.baseCode,
                    message_id: a,
                    send_type: eO.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, e));
    }
}
function ek(e, t, n, r, i) {
    (0, em.Q_)(e).forEach((e) => {
        let a = ea.Z.getChannel(t);
        null != a &&
            f.ZP.trackWithMetadata(eO.rMx.GIFT_CODE_SENT, {
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
function eU(e) {
    let { referencedMessageId: t, guildId: n, channelId: r, destinationChannelId: i } = e;
    ep.default.track(eO.rMx.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}
function eG(e, t) {
    let n = es.Z.getMessage(e, t);
    return null != n && n.hasFlag(eO.iLy.CROSSPOSTED);
}
function eZ(e, t) {
    let n = es.Z.getMessage(e, t);
    if (null == n || n.type !== eO.uaV.REPLY) return;
    let r = J.Z.getMessageByReference(n.messageReference);
    if (r.state === J.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eO.hCA),
            replied_user: !1,
        };
}
let eF = {
        [eO.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eT.intl.string(eT.t.k1Cjqr),
        },
        [eO.evJ.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eT.intl.string(eT.t.Z5SUuv),
        },
        [eO.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eT.intl.formatToPlainString(eT.t.CTMXwL, {
                    helpUrl: eh.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eO.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eT.intl.string(eT.t.E8nbNb),
        },
        [eO.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eT.intl.string(eT.t.aRUbah),
        },
        [eO.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eT.intl.string(eT.t.aRUbah),
        },
        [eO.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eT.intl.string(eT.t["/meGhR"]),
        },
        [eO.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eT.intl.string(eT.t.Oc1Zjw),
        },
    },
    eB = {
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
                f.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n,
                }),
                eB.receiveMessage(
                    e,
                    (0, V.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n,
                    }),
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, V.ZP)({
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
                eP(eA({}, r), {
                    state: eO.yb.SENT,
                    channel_id: e,
                }),
                !0,
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, V.ZP)({
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
            eB.receiveMessage(e, eP(eA({}, n), { state: eO.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ea.Z.getChannel(e);
            null != i &&
                (r === eO.evJ.SLOWMODE_RATE_LIMITED
                    ? ((t = eT.intl.formatToPlainString(eT.t.IWntYg, { seconds: i.rateLimitPerUser })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === eO.evJ.INVALID_MESSAGE_SEND_USER
                      ? ((t = eT.intl.formatToPlainString(eT.t.CTMXwL, {
                            helpUrl: eh.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === eO.evJ.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eT.intl.string(eT.t["/jUd2+"])
                                  : eT.intl.string(eT.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === eO.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eT.intl.string(eT.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === eO.evJ.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eT.intl.formatToPlainString(eT.t.zSG3Qy, { helpUrl: eO.EYA.HARMFUL_LINKS })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r === eO.evJ.HARMFUL_URL_BLOCKED
                              ? ((t = eT.intl.string(eT.t.WxX2Fd)), (n = "HARMFUL_URL_BLOCKED"))
                              : r in eF
                                ? ((n = eF[r].messageName), (t = eF[r].messageGetter()))
                                : ((t = eT.intl.formatToPlainString(eT.t.CTMXwL, {
                                      helpUrl: eh.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED),
                                  })),
                                  (n = "SEND_FAILED (".concat(r, ")"))),
                eB.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ea.Z.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: o } = (0, r.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM(),
                })
                    .with({ isDM: !0 }, () => ({
                        message: eT.intl.string(eT.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0,
                        },
                        () => ({
                            message: eT.intl.string(eT.t["mktny/"]),
                            messageName: "BOT_GDM_EXPLICIT_CONTENT",
                        }),
                    )
                    .otherwise(() => ({
                        message: eT.intl.string(eT.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                s = (0, H.r)();
            eB.sendBotMessage(e, a, o, s),
                (0, T.aP)({
                    action: T.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            eB.trackJump(e, null, "Present");
            let n = { present: !0 };
            es.Z.hasPresent(e)
                ? l.Z.dispatch({
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
            f.ZP.trackWithMetadata(
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
                "string" == typeof o && eB.trackJump(n, r, o, s),
                null == eR || null == (t = eR.pauseAllMediaPlayers) || t.call(eR),
                eB.fetchMessages({
                    channelId: n,
                    limit: eO.Z8P,
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
            eB.fetchMessages({
                channelId: t,
                limit: eO.Z8P,
                focus: { messageId: n },
            });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await o.tn.get({
                    url: eO.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n,
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (r.body.length > 0) return (0, Z.e5)(r.body[0]);
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
                    forICYMI: p,
                    avoidInitialScroll: _,
                    feature: m,
                    fetchKey: h,
                } = e,
                g = ea.Z.getChannel(t),
                E = A.Z.isConnectedOrOverlay(),
                y = Date.now();
            if (null != g && g.type === eO.d4z.GUILD_STORE) return !1;
            if (
                t === b.V ||
                (ew.log(
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
                    focus: s,
                    truncate: f,
                }))
            )
                return;
            en.Z.fetchMessages.recordStart(), k.Z.recordChannelFetchStart(t, null != h ? h : y, n, r, i);
            let O = null != a ? a : void 0;
            null == O && null != s && (O = eA({}, s));
            let v = u.Z.getOrCreate(t).loadStart(O);
            u.Z.commit(v), l.Z.dispatch({ type: "LOAD_MESSAGES" });
            let S = null == O ? void 0 : O.messageId,
                I = new eL();
            return (
                d || this.fetchLocalMessages(t, null != h ? h : y, n, r, i, I),
                o.tn
                    .get({
                        url: eO.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: i,
                            around: S,
                            preload: c,
                            feature: m,
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
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != S || (o.length === i && (s || u)),
                                    m = null != S || (c && o.length === i);
                                if (null != S) {
                                    let e = Math.floor(i / 2),
                                        n = e + (i % 2),
                                        r = [
                                            S,
                                            ...o.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            }),
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(eE.default.compare)
                                            .indexOf(S);
                                    if ((r < n - 1 && (d = !1), o.length - r < e && (m = !1), m && o.length > 0)) {
                                        let e = eu.ZP.lastMessageId(t);
                                        o[0].id === e && (m = !1);
                                    }
                                }
                                ew.log(
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
                                        hasMoreAfter: m,
                                        limit: i,
                                        jump: a,
                                        forICYMI: p,
                                        isStale: !E || A.Z.lastTimeConnectedChanged() >= y,
                                        truncate: f,
                                        avoidInitialScroll: _,
                                    }),
                                    k.Z.recordChannelFetchedNetwork(t, null != h ? h : y, n, r, i, o);
                            }),
                            !0
                        ),
                        () => (
                            ew.log("Failed to fetch messages for ".concat(t)),
                            l.Z.dispatch({
                                type: "LOAD_MESSAGES_FAILURE",
                                channelId: t,
                            }),
                            !1
                        ),
                    )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, a) {
            let o = ea.Z.getBasicChannel(e),
                s = u.Z.getOrCreate(e),
                c = p.Z.database();
            if (null == c || null == o || null != n || null != r) return void en.Z.addLocalMessages(e, -1);
            if (s.ready && !s.cached) return void en.Z.addLocalMessages(e, -2);
            let d = await (0, _.dI)(() => m.ZP.load(c, e, i));
            if (null == d) return void en.Z.addLocalMessages(e, -3);
            if (
                (ew.log(
                    "fetched "
                        .concat(d.messages.length, " messages from local database (channel_id: ")
                        .concat(e, ", remote_fetch_completed: ")
                        .concat(a.completed, ")"),
                ),
                en.Z.addLocalMessages(e, d.messages.length),
                !a.completed && d.messages.length > 0)
            ) {
                let a = d.messages.length >= i && d.connectionId === A.Z.lastTimeConnectedChanged();
                k.Z.recordChannelFetchedLocal(e, t, n, r, i, d.messages),
                    l.Z.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: o.guild_id,
                        channelId: e,
                        users: d.users,
                        members: d.members,
                        messages: d.messages,
                        stale: !a,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let r = ea.Z.getBasicChannel(e),
                i = p.Z.database();
            if (null == i || null == r) return;
            let a = u.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let o = await (0, _.dI)(() => m.ZP.load(i, e, t));
            if (null == o) return;
            let s = null == (n = (a = u.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                c = null == s ? o.messages : o.messages.filter((e) => eE.default.compare(e.id, s) > 0);
            ew.log(
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
                c = es.Z.getMessages(t);
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
                    else a = eA({}, o);
                let e =
                        (null == a ? void 0 : a.messageId) != null
                            ? eE.default.extractTimestamp(null == a ? void 0 : a.messageId)
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
                        l.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: eO.Z8P,
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
            let a = await (0, q.Z)(e);
            if (null != a) return eB.sendMessage(a, t, r, i);
            let o = null != (n = i.nonce) ? n : (0, H.r)();
            i = eP(eA({}, i), { nonce: o });
            let s = () => eB._sendMessage(e, t, i),
                l = G.ZP.backgroundify(s, void 0);
            return (F.Z.recordMessageSendAttempt(e, o, i), es.Z.isReady(e))
                ? l()
                : r && e !== b.V
                  ? (eD.info("Waiting for channel ".concat(e, " to be ready before sending.")),
                    new Promise((t, n) => {
                        es.Z.whenReady(e, () => {
                            eD.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n);
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
        getSendMessageOptionsForStickers(e) {
            let { isGif: t, stickers: n } = e;
            return null == n || 0 === n.length || t ? {} : { stickerIds: n };
        },
        getSendMessageOptionsForScheduledMessage(e) {
            let { scheduledTimestamp: t } = e;
            return null == t ? {} : { scheduledTimestamp: t };
        },
        getSendMessageOptionsForAlsoForwardToChannel: (e) => ({ alsoForwardToChannelId: e.alsoForwardToChannelId }),
        getSendMessageOptions(e) {
            let t = eB.getSendMessageOptionsForReply(e.pendingReply),
                n = eB.getSendMessageOptionsForStickers(eA({}, e)),
                r = eB.getSendMessageOptionsForScheduledMessage(eA({}, e)),
                i = eB.getSendMessageOptionsForAlsoForwardToChannel(eA({}, e));
            return eA({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, M.Z)(t);
            return (
                null != i && (a = "".concat(i, "\n").concat(a)),
                eB._sendMessage(
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
                    inviteAnalyticsMetadata: r,
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
                eP(eA({}, r), { stickerIds: t }),
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
                        B.Z.donateSentMessage(n.body.content, e),
                        eB.receiveMessage(e, n.body),
                        l.Z.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t],
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (ew.log("Failed to send greeting"),
                            429 !== t.status && eB.sendClydeError(e, t.body.code),
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
            return eB._sendMessage(
                e,
                {
                    content: "",
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: [],
                },
                eP(eA({}, n), {
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
                      ? ((r = eT.intl.string(eT.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eT.intl.string(eT.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                {
                    errorMessage: r,
                    errorMessageName: i,
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, o, s, c, u, f, p, _, m;
            let h,
                g = (0, q.Z)(e);
            if (null != g)
                return (
                    eD.info("Converting channel to a private channel"),
                    g.then((e) => {
                        eD.info("Finished converting channel to a private channel"), eB._sendMessage(e, t, n);
                    })
                );
            let E = t.content,
                { invalidEmojis: b, validNonShortcutEmojis: v, tts: S = !1 } = t,
                {
                    activityAction: I,
                    location: A,
                    inviteAnalyticsMetadata: N,
                    stickerIds: P,
                    messageReference: x,
                    allowedMentions: L,
                    poll: j,
                    sharedCustomTheme: M,
                    contentInventoryEntry: k,
                    attachments: G,
                    attachmentsToUpload: Q,
                    onAttachmentUploadError: X,
                    announcementSendOptions: J,
                    withCheckpoint: et,
                    messageIdFromNotificationExperiment: en,
                } = n,
                er = null != (i = n.flags) ? i : 0,
                [ea, eo] = (0, ee.Z)(E);
            ea && ((E = eo), (er = (0, a.pj)(er, eO.iLy.SUPPRESS_NOTIFICATIONS)));
            let es = !1,
                el = (null == (r = n.messageReference) ? void 0 : r.type) === eO.Uvt.FORWARD;
            if (
                "" === E &&
                null == I &&
                null == P &&
                null == j &&
                null == M &&
                null == k &&
                !el &&
                (null == G || 0 === G.length) &&
                !et &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == Q || !(Q.length > 0)) return Promise.resolve();
                else es = !0;
            let ec = null != x ? eO.uaV.REPLY : eO.uaV.DEFAULT,
                eu = null != (o = n.nonce) ? o : (0, H.r)(),
                ep = eu,
                em = (0, V.ZP)({
                    channelId: e,
                    content: E,
                    tts: S,
                    type: ec,
                    messageReference: x,
                    allowedMentions: L,
                    flags: 0 !== er ? er : void 0,
                    nonce: eu,
                    poll: (0, z.x9)(j),
                    sharedCustomTheme: M,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, W.EL)(e, em.id),
                    null != P && (em.sticker_items = P.map((e) => $.Z.getStickerById(e)).filter((e) => null != e)),
                    eB.receiveMessage(e, em, !0, n)),
                !ex && null != b && b.length > 0)
            ) {
                ex = !0;
                let t = ef.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eB.validateMessage(b, t, e);
                eB.sendBotMessage(e, n, r);
            }
            let eh = {
                type: null != J ? d.$V.SEND_ANNOUNCEMENT : d.$V.SEND,
                message: {
                    channelId: e,
                    content: E,
                    nonce: eu,
                    tts: S,
                    message_reference: x,
                    allowed_mentions: L,
                    flags: er,
                    analyticsLocation: A,
                },
            };
            if (
                (null != t.components && (eh.message.components = t.components),
                null != J &&
                    ((eh.message.create_thread = J.createThread),
                    (eh.message.title = J.threadName),
                    (eh.message.publish = null != (s = J.publish) && s)),
                null != I)
            ) {
                let e,
                    t = null == I ? void 0 : I.activity.session_id;
                if (
                    null !=
                    (e =
                        I.type === eO.mFx.JOIN_REQUEST || I.type === eO.mFx.STREAM_REQUEST || null != t
                            ? t
                            : ei.default.getSessionId())
                ) {
                    let t = {
                            type: I.type,
                            session_id: e,
                            target_user_id: I.targetUserId,
                        },
                        { activity: n } = I;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (eh.message.application_id = n.application_id),
                        (eh.message.activity = t);
                }
            }
            if (
                (null != j && (eh.message.poll = j),
                null != M && (eh.message.shared_client_theme = M),
                null != P && (eh.message.sticker_ids = P),
                K.Z.isEnabled() && (eh.message.has_poggermode_enabled = !0),
                et && (eh.message.with_checkpoint = !0),
                null != k && (eh.message.content_inventory_entry = k),
                null != G && G.length > 0 && (eh.message.attachments = G),
                null != en && (eh.message.message_id_from_notification_experiment = en),
                null != Q && Q.length > 0)
            )
                try {
                    let t = await (0, U.c)({
                        channelId: e,
                        nonce: eu,
                        items: Q,
                        message: em,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((h = t.uploader), es && (null == r || 0 === r.length))) return;
                    if (null != r && ((eh.message.attachments = r.map((e, t) => (0, eb.B)(e, t))), (0, y.NS)())) {
                        for (let e of r)
                            if (
                                (null == (p = e.item) ||
                                null == (f = p.clip) ||
                                null == (u = f.decision) ||
                                null == (c = u.signal)
                                    ? void 0
                                    : c.type) === O.Bs.DISTRIBUTED
                            ) {
                                let t = {
                                        id: e.item.clip.id,
                                        remoteTriggerClipId:
                                            null == (m = e.item.clip.decision) || null == (_ = m.signal)
                                                ? void 0
                                                : _.remoteTriggerClipId,
                                    },
                                    n = "__CLIP_METADATA__",
                                    r = "".concat(n).concat(JSON.stringify(t));
                                eh.message.content = "".concat(eh.message.content).concat(r);
                                break;
                            }
                    }
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, Y.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg,
                    }),
                        null == X || X(e, t, n, r);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = d.ZP.length,
                    o = Math.floor(10000 * Math.random());
                eD.info("Queueing message to be sent LogId:".concat(o)),
                    d.ZP.enqueue(
                        eh,
                        (s) => {
                            let c = Date.now() - i;
                            if (s.ok) {
                                B.Z.donateSentMessage(E, e),
                                    eB.receiveMessage(e, s.body, !0, {
                                        sendAnalytics: {
                                            duration: c,
                                            queueSize: a,
                                        },
                                        poll: j,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.Z.sendForward((0, Z.e5)(s.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                var e, t, r;
                                                eU({
                                                    referencedMessageId: null == (e = s.body) ? void 0 : e.id,
                                                    guildId: null == (t = s.body) ? void 0 : t.guild_id,
                                                    channelId: null == (r = s.body) ? void 0 : r.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                var r;
                                                ew.log(
                                                    "Failed to forward thread message to parent channel LogId:".concat(
                                                        o,
                                                    ),
                                                    {
                                                        referencedMessageId: null == (r = s.body) ? void 0 : r.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let r = eE.default.cast(e),
                                    i = D.Z.getRequest(r);
                                if (null != i) {
                                    let { guildId: t, userId: n, applicationStatus: r } = i;
                                    (0, w.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: s.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                F.Z.recordMessageSendApiResponse(eu),
                                    l.Z.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ed.S.SendMessage,
                                        channelId: e,
                                    }),
                                    l.Z.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: v,
                                    }),
                                    l.Z.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: P,
                                    }),
                                    l.Z.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: {
                                            channel_id: e,
                                            author: ef.default.getCurrentUser(),
                                        },
                                    }),
                                    ej({
                                        content: E,
                                        channelId: e,
                                        messageId: s.body.id,
                                        location: null != A ? A : "chat_input",
                                        inviteAnalyticsMetadata: N,
                                    }),
                                    ek(E, e, s.body.id, null != A ? A : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != h &&
                                        l.Z.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: h._file,
                                            aborted: !1,
                                        }),
                                    t(s);
                            } else {
                                var u, f;
                                let t;
                                ew.log("Failed to send message", {
                                    hasErr: s.hasErr,
                                    status: s.status,
                                    code: null == (u = s.body) ? void 0 : u.code,
                                    error: s.err,
                                });
                                let i = !1;
                                if (s.hasErr) "ABORTED" === s.err.code && (i = !0);
                                else if (s.status >= 400 && s.status < 500 && s.body)
                                    if (s.body.code === eO.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = s.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ed.S.SendMessage,
                                                cooldownMs: t * e_.Z.Millis.SECOND,
                                            });
                                    } else
                                        R.U8.has(s.body.code)
                                            ? l.Z.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eh,
                                                  errorResponseBody: {
                                                      code: s.body.code,
                                                      message: s.body.message,
                                                  },
                                              })
                                            : s.body.code === eO.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.Z.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : s.body.code === eO.evJ.EXPLICIT_CONTENT
                                                ? (t = eI.xi.EXPLICIT_CONTENT)
                                                : null != j || el || null != k || eB.sendClydeError(e, s.body.code);
                                i
                                    ? eB.deleteMessage(e, ep, !0)
                                    : (null != h &&
                                          l.Z.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: h._file,
                                              messageId: ep,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      s.hasErr ||
                                          t !== eI.xi.EXPLICIT_CONTENT ||
                                          eB.sendExplicitMediaClydeError(
                                              e,
                                              null == (f = s.body) ? void 0 : f.attachments,
                                              T.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.Z.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ep,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, Y.x)({
                                          failureCode: s.hasErr ? void 0 : s.status,
                                          errorMessage: s.hasErr ? s.err.message : void 0,
                                      }),
                                      d.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          ew.log("Cancelling pending message", e.nonce),
                                              l.Z.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    r(s);
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
            if ((0, a.yE)(t.flags, eO.iLy.IS_COMPONENTS_V2)) {
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
            await et.Z.unarchiveThreadIfNecessary(e);
            let a = eZ(e, t),
                o = eG(e, t),
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
                        ? s.uv.announce(eT.intl.string(eT.t.Atp7FP))
                        : r
                          ? s.uv.announce(eT.intl.string(eT.t.Hym4ix))
                          : s.uv.announce(eT.intl.string(eT.t["0x1HBD"])),
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
                    l.Z.dispatch({
                        type: "MESSAGE_DELETE",
                        id: t,
                        channelId: e,
                    }).then(() => {
                        s.uv.announce(eT.intl.string(eT.t.RYMs7s));
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
                f.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
        async crosspostMessage(e, t) {
            try {
                return await o.tn.post({
                    url: eO.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eT.intl.formatToPlainString(eT.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eT.intl.string(eT.t.z2gyNF)),
                    ey.Z.show({
                        title: eT.intl.string(eT.t.Vd1hs6),
                        body: e,
                        confirmText: eT.intl.string(eT.t.BddRzS),
                    });
            }
        },
        trackInvite: eM,
    },
    eV = eB;
