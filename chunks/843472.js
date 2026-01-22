n.d(t, {
    A: () => eH,
}),
    n(228524),
    n(65821),
    n(801541),
    n(457529),
    n(896048),
    n(638769),
    n(938796);
var r = n(889137),
    i = n(696292),
    a = n(665260),
    s = n(562465),
    o = n(582754),
    l = n(73153),
    c = n(155718),
    u = n(128265),
    d = n(884384),
    f = n(58149),
    p = n(723176),
    _ = n(154049),
    h = n(348802),
    m = n(121401),
    g = n(909338),
    E = n(354287),
    b = n(695870),
    y = n(734066),
    O = n(372684),
    A = n(167189),
    v = n(833291),
    S = n(626584),
    I = n(390248),
    T = n(885918),
    C = n(142120),
    N = n(992771),
    R = n(834757),
    w = n(753738),
    P = n(51271),
    D = n(844944),
    x = n(122906),
    L = n(21599),
    j = n(346542),
    M = n(279208),
    k = n(917878),
    U = n(586872),
    G = n(99341),
    V = n(141468),
    F = n(407580),
    B = n(130201),
    H = n(963852),
    Y = n(195880),
    W = n(488004),
    K = n(928830),
    z = n(3137),
    q = n(969632),
    X = n(79911),
    Z = n(216456),
    Q = n(710969);
n(853145);
var $ = n(9842),
    J = n(679382),
    ee = n(677413),
    et = n(867455),
    en = n(614792),
    er = n(616356),
    ei = n(961350),
    ea = n(734057);
n(580745);
var es = n(299091),
    eo = n(320501),
    el = n(576705),
    ec = n(290863),
    eu = n(222823),
    ed = n(101392),
    ef = n(287809),
    ep = n(954571),
    e_ = n(927813),
    eh = n(45938),
    em = n(975571),
    eg = n(927578),
    eE = n(661191),
    eb = n(292348),
    ey = n(157559),
    eO = n(652215),
    eA = n(768349),
    ev = n(401755),
    eS = n(381941),
    eI = n(985018);

function eT(e, t, n) {
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

function eC(e) {
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
                eT(e, t, n[t]);
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

function eR(e, t) {
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
let ew = null,
    eP = new S.A("MessageActionCreators"),
    eD = new S.A("MessageQueue"),
    ex = !1;
class eL {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eT(this, "completed", !1);
    }
}

function ej(e) {
    let {
            content: t,
            channelId: n,
            messageId: r,
            location: a,
            inviteAnalyticsMetadata: s,
            overrideProperties: o = {},
        } = e,
        l = ei.default.getId();
    (0, v.Ay)(t).forEach((e) => {
        let { type: t, code: c, url: u } = e;
        if (t === A.I.INVITE)
            eM({
                inviteKey: c,
                channelId: n,
                messageId: r,
                location: a,
                inviteAnalyticsMetadata: s,
                overrideProperties: o,
            });
        else if (t === A.I.TEMPLATE) {
            let e = x.A.getGuildTemplate(c);
            if (null == e || e.state === ev.QB.RESOLVING) return;
            f.Ay.trackWithMetadata(eO.HAw.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: c,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
            });
        } else if (t === A.I.BUILD_OVERRIDE);
        else if (t === A.I.EXPERIMENT);
        else if (t === A.I.MANUAL_BUILD_OVERRIDE);
        else if (t === A.I.EVENT);
        else if (t === A.I.CHANNEL_LINK);
        else if (t === A.I.APP_DIRECTORY_PROFILE) (0, N.y)(c), (0, E.KL)(c, eA.J.APP_DISCOVERY, l);
        else if (t === A.I.APP_DIRECTORY_STOREFRONT) (0, N.y)(c, "storefront");
        else if (t === A.I.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, m.u)(c);
            null != e && (0, N.y)(e.applicationId, "storefront_sku");
        } else if (t === A.I.ACTIVITY_BOOKMARK) {
            var d;
            let e = (0, g.N)(u);
            (0, E.KL)(c, eA.J.ACTIVITY, null != (d = e.referrerId) ? d : l, e.customId);
        } else if (t === A.I.EMBEDDED_ACTIVITY_INVITE) (0, E.KL)(c, eA.J.ACTIVITY_INVITE, l);
        else if (t === A.I.GUILD_PRODUCT);
        else if (t === A.I.SERVER_SHOP);
        else if (t === A.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === A.I.QUESTS_EMBED) {
            let e = (0, Q.Li)(i.u.QUESTS_EMBED),
                t = (0, Q.L4)(i.u.QUESTS_EMBED);
            (0, Z.av)({
                questId: c,
                event: eO.HAw.QUEST_LINK_SHARED,
                properties: {
                    metadata_raw: null != e ? e : null,
                    metadata_sealed: null != t ? t : null,
                },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.u.QUESTS_EMBED,
            });
        } else if (t === A.I.APP_OAUTH2_LINK)
            f.Ay.trackWithMetadata(eO.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
                application_id: c,
            }),
                (0, E.KL)(c, eA.J.OAUTH, l);
        else if (t === A.I.COLLECTIBLES_SHOP);
        else throw Error("Unknown coded link type: ".concat(t));
    });
}

function eM(e) {
    var t, n;
    let {
            inviteKey: r,
            channelId: i,
            messageId: a,
            location: s,
            inviteAnalyticsMetadata: o,
            overrideProperties: l = {},
        } = e,
        c = ei.default.getId(),
        u = es.A.getInvite(r),
        d = (0, L.y$)(r),
        p = null != u && (0, j.oK)(u),
        _ = null == u || null == (t = u.target_application) ? void 0 : t.id;
    null != _ && p && (0, E.KL)(_, eA.J.ACTIVITY_INVITE, c);
    let h = ea.A.getChannel(i);
    if (null != h) {
        let e = null;
        h.isMultiUserDM() ? (e = eO.G2g.GDM_INVITE) : h.isPrivate() || (e = eO.G2g.SERVER_INVITE);
        let t = {};
        if (null != u && u.state === eO.elq.RESOLVED && null != u.channel) {
            let r = u.channel;
            (t.invite_channel_id = r.id),
                (t.invite_guild_id = null == (n = u.guild) ? void 0 : n.id),
                (t.invite_channel_type = r.type),
                null != u.inviter && (t.invite_inviter_id = u.inviter.id),
                null != u.target_application && (t.application_id = u.target_application.id);
            let i = er.A.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = eO.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, R.Ee)(i, ec.A);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != o &&
            (null != o.suggestionData &&
                ((t.is_suggested = o.suggestionData.isAffinitySuggestion),
                (t.row_num = o.suggestionData.rowNum),
                (t.num_total = o.suggestionData.numTotal),
                (t.num_affinity_connections = o.suggestionData.numAffinityConnections),
                (t.is_filtered = o.suggestionData.isFiltered)),
            (t.source = o.source)),
            (t = eC(
                eR(eC({}, t), {
                    location: s,
                    invite_type: e,
                    invite_code: d.baseCode,
                    guild_id: h.getGuildId(),
                    channel_id: h.id,
                    message_id: a,
                    send_type: eO.gfq.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.Ay.trackWithMetadata(eO.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != u &&
            u.state === eO.elq.RESOLVED &&
            null != u.inviter &&
            ((e.invite_inviter_id = u.inviter.id),
            null != u.target_application && (e.application_id = u.target_application.id),
            (e = eC(
                eR(eC({}, e), {
                    location: s,
                    invite_type: eO.G2g.FRIEND_INVITE,
                    invite_code: d.baseCode,
                    message_id: a,
                    send_type: eO.gfq.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.Ay.trackWithMetadata(eO.HAw.INVITE_SENT, e));
    }
}

function ek(e, t, n, r, i) {
    (0, eh.e7)(e).forEach((e) => {
        let a = ea.A.getChannel(t);
        null != a &&
            f.Ay.trackWithMetadata(eO.HAw.GIFT_CODE_SENT, {
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
    ep.default.track(eO.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}

function eG(e, t) {
    let n = eo.A.getMessage(e, t);
    return null != n && n.hasFlag(eO.pr7.CROSSPOSTED);
}

function eV(e, t) {
    let n = eo.A.getMessage(e, t);
    if (null == n || n.type !== eO.lAJ.REPLY) return;
    let r = $.A.getMessageByReference(n.messageReference);
    if (r.state === $.a.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eO.uw8),
            replied_user: !1,
        };
}
let eF = {
        [eO.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eI.intl.string(eI.t.k1Cjqr),
        },
        [eO.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eI.intl.string(eI.t.Z5SUuv),
        },
        [eO.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eI.intl.formatToPlainString(eI.t.CTMXwL, {
                    helpUrl: em.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eO.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eI.intl.string(eI.t.E8nbNb),
        },
        [eO.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eI.intl.string(eI.t.aRUbah),
        },
        [eO.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eI.intl.string(eI.t.aRUbah),
        },
        [eO.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eI.intl.string(eI.t["/meGhR"]),
        },
        [eO.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eI.intl.string(eI.t.Oc1Zjw),
        },
    },
    eB = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            l.h.dispatch({
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
                f.Ay.trackWithMetadata(eO.HAw.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n,
                }),
                eB.receiveMessage(
                    e,
                    (0, H.pO)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n,
                    }),
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, H.Ay)({
                channelId: e,
                nonce: n,
                type: eO.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: eO.pr7.EPHEMERAL,
                author: {
                    id: eO.oIV,
                    username: "Nitro Notification",
                    discriminator: eO.h3J,
                    avatar: "nitro",
                    bot: !0,
                },
            });
            eB.receiveMessage(
                e,
                eR(eC({}, r), {
                    state: eO.cmJ.SENT,
                    channel_id: e,
                }),
                !0,
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, H.Ay)({
                channelId: e,
                type: eO.lAJ.GIFTING_PROMPT,
                content: "",
                flags: eO.pr7.EPHEMERAL,
                author: {
                    id: eO.oIV,
                    username: "Gifting Prompt",
                    discriminator: eO.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eB.receiveMessage(
                e,
                eR(eC({}, n), {
                    state: eO.cmJ.SENT,
                }),
                !0,
            );
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ea.A.getChannel(e);
            null != i &&
                (r === eO.t02.SLOWMODE_RATE_LIMITED
                    ? ((t = eI.intl.formatToPlainString(eI.t.IWntYg, {
                          seconds: i.rateLimitPerUser,
                      })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === eO.t02.INVALID_MESSAGE_SEND_USER
                      ? ((t = eI.intl.formatToPlainString(eI.t.CTMXwL, {
                            helpUrl: em.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === eO.t02.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eI.intl.string(eI.t["/jUd2+"])
                                  : eI.intl.string(eI.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === eO.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eI.intl.string(eI.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === eO.t02.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eI.intl.formatToPlainString(eI.t.zSG3Qy, {
                                  helpUrl: eO.X7G.HARMFUL_LINKS,
                              })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r === eO.t02.HARMFUL_URL_BLOCKED
                              ? ((t = eI.intl.string(eI.t.WxX2Fd)), (n = "HARMFUL_URL_BLOCKED"))
                              : r in eF
                                ? ((n = eF[r].messageName), (t = eF[r].messageGetter()))
                                : ((t = eI.intl.formatToPlainString(eI.t.CTMXwL, {
                                      helpUrl: em.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED),
                                  })),
                                  (n = "SEND_FAILED (".concat(r, ")"))),
                eB.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ea.A.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: s } = (0, r.YW)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM(),
                })
                    .with(
                        {
                            isDM: !0,
                        },
                        () => ({
                            message: eI.intl.string(eI.t["mktny/"]),
                            messageName: "BOT_DM_EXPLICIT_CONTENT",
                        }),
                    )
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0,
                        },
                        () => ({
                            message: eI.intl.string(eI.t["mktny/"]),
                            messageName: "BOT_GDM_EXPLICIT_CONTENT",
                        }),
                    )
                    .otherwise(() => ({
                        message: eI.intl.string(eI.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                o = (0, Y.m)();
            eB.sendBotMessage(e, a, s, o),
                (0, I.hv)({
                    action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: o,
                    channelId: e,
                    context: n,
                }),
                null != t &&
                    t.length > 0 &&
                    l.h.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: o,
                        channelId: e,
                        attachments: t,
                    });
        },
        truncateMessages(e, t, n) {
            l.h.dispatch({
                type: "TRUNCATE_MESSAGES",
                channelId: e,
                truncateBottom: t,
                truncateTop: n,
            });
        },
        clearChannel(e) {
            l.h.dispatch({
                type: "CLEAR_MESSAGES",
                channelId: e,
            });
        },
        jumpToPresent(e, t) {
            eB.trackJump(e, null, "Present");
            let n = {
                present: !0,
            };
            eo.A.hasPresent(e)
                ? l.h.dispatch({
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
            f.Ay.trackWithMetadata(
                eO.HAw.JUMP,
                eC(
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
                context: s,
                extraProperties: o = null,
                isPreload: l,
                returnMessageId: c,
                skipLocalFetch: u,
                jumpType: d,
                avoidInitialScroll: f,
            } = e;
            return (
                "string" == typeof s && eB.trackJump(n, r, s, o),
                null == ew || null == (t = ew.pauseAllMediaPlayers) || t.call(ew),
                eB.fetchMessages({
                    channelId: n,
                    limit: eO.d7Q,
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
                limit: eO.d7Q,
                focus: {
                    messageId: n,
                },
            });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await s.Bo.get({
                    url: eO.Rsh.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n,
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (r.body.length > 0) return (0, V.rh)(r.body[0]);
        },
        fetchMessages(e) {
            let {
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: o,
                    isPreload: c,
                    skipLocalFetch: d,
                    truncate: f,
                    forICYMI: p,
                    avoidInitialScroll: _,
                    feature: h,
                    fetchKey: m,
                } = e,
                g = ea.A.getChannel(t),
                E = C.A.isConnectedOrOverlay(),
                y = Date.now();
            if (null != g && g.type === eO.rbe.GUILD_STORE) return !1;
            if (
                t === b.E ||
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
                    focus: o,
                    truncate: f,
                }))
            )
                return;
            en.A.fetchMessages.recordStart(), k.A.recordChannelFetchStart(t, null != m ? m : y, n, r, i);
            let O = null != a ? a : void 0;
            null == O && null != o && (O = eC({}, o));
            let A = u.A.getOrCreate(t).loadStart(O);
            u.A.commit(A),
                l.h.dispatch({
                    type: "LOAD_MESSAGES",
                });
            let v = null == O ? void 0 : O.messageId,
                S = new eL();
            return (
                d || this.fetchLocalMessages(t, null != m ? m : y, n, r, i, S),
                s.Bo.get({
                    url: eO.Rsh.MESSAGES(t),
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
                }).then(
                    (e) => (
                        en.A.fetchMessages.recordEnd(),
                        en.A.dispatchMessages.measure(() => {
                            let s = e.body,
                                o = null != n,
                                c = null != r,
                                u = null == n && null == r,
                                d = null != v || (s.length === i && (o || u)),
                                h = null != v || (c && s.length === i);
                            if (null != v) {
                                let e = Math.floor(i / 2),
                                    n = e + (i % 2),
                                    r = [
                                        v,
                                        ...s.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(eE.default.compare)
                                        .indexOf(v);
                                if ((r < n - 1 && (d = !1), s.length - r < e && (h = !1), h && s.length > 0)) {
                                    let e = eu.Ay.lastMessageId(t);
                                    s[0].id === e && (h = !1);
                                }
                            }
                            eP.log(
                                "Fetched "
                                    .concat(s.length, " messages for ")
                                    .concat(t, " isBefore:")
                                    .concat(o, " isAfter:")
                                    .concat(c),
                            ),
                                S.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: s,
                                    isBefore: o,
                                    isAfter: c,
                                    hasMoreBefore: d,
                                    hasMoreAfter: h,
                                    limit: i,
                                    jump: a,
                                    forICYMI: p,
                                    isStale: !E || C.A.lastTimeConnectedChanged() >= y,
                                    truncate: f,
                                    avoidInitialScroll: _,
                                }),
                                k.A.recordChannelFetchedNetwork(t, null != m ? m : y, n, r, i, s);
                        }),
                        !0
                    ),
                    () => (
                        eP.log("Failed to fetch messages for ".concat(t)),
                        l.h.dispatch({
                            type: "LOAD_MESSAGES_FAILURE",
                            channelId: t,
                        }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, r, i, a) {
            let s = ea.A.getBasicChannel(e),
                o = u.A.getOrCreate(e),
                c = p.A.database();
            if (null == c || null == s || null != n || null != r) return void en.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void en.A.addLocalMessages(e, -2);
            let d = await (0, _.kk)(() => h.Ay.load(c, e, i));
            if (null == d) return void en.A.addLocalMessages(e, -3);
            if (
                (eP.log(
                    "fetched "
                        .concat(d.messages.length, " messages from local database (channel_id: ")
                        .concat(e, ", remote_fetch_completed: ")
                        .concat(a.completed, ")"),
                ),
                en.A.addLocalMessages(e, d.messages.length),
                !a.completed && d.messages.length > 0)
            ) {
                let a = d.messages.length >= i && d.connectionId === C.A.lastTimeConnectedChanged();
                k.A.recordChannelFetchedLocal(e, t, n, r, i, d.messages),
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: s.guild_id,
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
            let r = ea.A.getBasicChannel(e),
                i = p.A.database();
            if (null == i || null == r) return;
            let a = u.A.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let s = await (0, _.kk)(() => h.Ay.load(i, e, t));
            if (null == s) return;
            let o = null == (n = (a = u.A.getOrCreate(e)).last()) ? void 0 : n.id,
                c = null == o ? s.messages : s.messages.filter((e) => eE.default.compare(e.id, o) > 0);
            eP.log(
                "Fetched "
                    .concat(s.messages.length, " messages from the cache after foregrounding. ")
                    .concat(c.length, " are new"),
            ),
                0 !== c.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: r.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: c,
                        stale: !0,
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: s, truncate: o } = e,
                c = eo.A.getMessages(t);
            if (c.cached || !c.ready) return !1;
            if ((null == a ? void 0 : a.messageId) != null || (null == s ? void 0 : s.messageId) != null) {
                if ((null == a ? void 0 : a.messageId) != null && c.has(a.messageId, !1))
                    return (
                        l.h.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: i,
                            truncate: o,
                        }),
                        !0
                    );
                if ((null == s ? void 0 : s.messageId) != null)
                    if (c.has(s.messageId, !1))
                        return (
                            l.h.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: s,
                                limit: i,
                                truncate: o,
                            }),
                            !0
                        );
                    else a = eC({}, s);
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
                        l.h.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: eO.d7Q,
                        }),
                        !0
                    );
            } else if (null != n && c.hasBeforeCached(n))
                return (
                    l.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        before: n,
                        limit: i,
                        truncate: o,
                    }),
                    !0
                );
            else if (null != r && c.hasAfterCached(r))
                return (
                    l.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        after: r,
                        limit: i,
                        truncate: o,
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
            let a = await (0, X.A)(e);
            if (null != a) return eB.sendMessage(a, t, r, i);
            let s = null != (n = i.nonce) ? n : (0, Y.m)();
            i = eR(eC({}, i), {
                nonce: s,
            });
            let o = () => eB._sendMessage(e, t, i),
                l = G.Ay.backgroundify(o, void 0);
            return (F.A.recordMessageSendAttempt(e, s, i), eo.A.isReady(e))
                ? l()
                : r && e !== b.E
                  ? (eD.info("Waiting for channel ".concat(e, " to be ready before sending.")),
                    new Promise((t, n) => {
                        eo.A.whenReady(e, () => {
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
                                parse: Object.values(eO.uw8),
                                replied_user: !1,
                            },
                  };
        },
        getSendMessageOptionsForStickers(e) {
            let { isGif: t, stickers: n } = e;
            return null == n || 0 === n.length || t
                ? {}
                : {
                      stickerIds: n,
                  };
        },
        getSendMessageOptionsForScheduledMessage(e) {
            let { scheduledTimestamp: t } = e;
            return null == t
                ? {}
                : {
                      scheduledTimestamp: t,
                  };
        },
        getSendMessageOptionsForAlsoForwardToChannel: (e) => ({
            alsoForwardToChannelId: e.alsoForwardToChannelId,
        }),
        getSendMessageOptions(e) {
            let t = eB.getSendMessageOptionsForReply(e.pendingReply),
                n = eB.getSendMessageOptionsForStickers(eC({}, e)),
                r = eB.getSendMessageOptionsForScheduledMessage(eC({}, e)),
                i = eB.getSendMessageOptionsForAlsoForwardToChannel(eC({}, e));
            return eC({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, M.A)(t);
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
                eR(eC({}, r), {
                    stickerIds: t,
                }),
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return s.Bo.post({
                url: eO.Rsh.MESSAGES_GREET(e),
                body: {
                    sticker_ids: [t],
                    allowed_mentions: i,
                    message_reference: r,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: {
                    location: eS.Hx.GREET,
                },
            }).then(
                (n) => (
                    B.A.donateSentMessage(n.body.content, e),
                    eB.receiveMessage(e, n.body),
                    l.h.dispatch({
                        type: "STICKER_TRACK_USAGE",
                        stickerIds: [t],
                    }),
                    n
                ),
                (t) => {
                    throw (
                        (eP.log("Failed to send greeting"),
                        429 !== t.status && eB.sendClydeError(e, t.body.code),
                        l.h.dispatch({
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
                eR(eC({}, n), {
                    poll: t,
                    location: eS.Hx.POLL_CREATION,
                }),
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eg.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eI.intl.string(eI.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : el.A.canWithPartialContext(eO.xBc.USE_EXTERNAL_EMOJIS, {
                            channelId: n,
                        })
                      ? ((r = eI.intl.string(eI.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eI.intl.string(eI.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                {
                    errorMessage: r,
                    errorMessageName: i,
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, s, o, c, u, f, p, _, h;
            let m,
                g = (0, X.A)(e);
            if (null != g)
                return (
                    eD.info("Converting channel to a private channel"),
                    g.then((e) => {
                        eD.info("Finished converting channel to a private channel"), eB._sendMessage(e, t, n);
                    })
                );
            let E = t.content,
                { invalidEmojis: b, validNonShortcutEmojis: A, tts: v = !1 } = t,
                {
                    activityAction: S,
                    location: C,
                    inviteAnalyticsMetadata: N,
                    stickerIds: R,
                    messageReference: x,
                    allowedMentions: L,
                    poll: j,
                    sharedCustomTheme: M,
                    contentInventoryEntry: k,
                    attachments: G,
                    attachmentsToUpload: Z,
                    onAttachmentUploadError: Q,
                    announcementSendOptions: $,
                    withCheckpoint: et,
                    messageIdFromNotificationExperiment: en,
                } = n,
                er = null != (r = n.flags) ? r : 0,
                [ea, es] = (0, ee.A)(E);
            ea && ((E = es), (er = (0, a.UI)(er, eO.pr7.SUPPRESS_NOTIFICATIONS)));
            let eo = !1,
                el = (null == (s = n.messageReference) ? void 0 : s.type) === eO.SH7.FORWARD;
            if (
                "" === E &&
                null == S &&
                null == R &&
                null == j &&
                null == M &&
                null == k &&
                !el &&
                (null == G || 0 === G.length) &&
                !et &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == Z || !(Z.length > 0)) return Promise.resolve();
                else eo = !0;
            let ec = null != x ? eO.lAJ.REPLY : eO.lAJ.DEFAULT,
                eu = null != (i = n.nonce) ? i : (0, Y.m)(),
                ep = eu,
                eh = (0, H.Ay)({
                    channelId: e,
                    content: E,
                    tts: v,
                    type: ec,
                    messageReference: x,
                    allowedMentions: L,
                    flags: 0 !== er ? er : void 0,
                    nonce: eu,
                    poll: (0, q.G8)(j),
                    sharedCustomTheme: M,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, K.iq)(e, eh.id),
                    null != R && (eh.sticker_items = R.map((e) => J.A.getStickerById(e)).filter((e) => null != e)),
                    eB.receiveMessage(e, eh, !0, n)),
                !ex && null != b && b.length > 0)
            ) {
                ex = !0;
                let t = ef.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eB.validateMessage(b, t, e);
                eB.sendBotMessage(e, n, r);
            }
            let em = {
                type: null != $ ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: E,
                    nonce: eu,
                    tts: v,
                    message_reference: x,
                    allowed_mentions: L,
                    flags: er,
                    analyticsLocation: C,
                },
            };
            if (
                (null != t.components && (em.message.components = t.components),
                null != $ &&
                    ((em.message.create_thread = $.createThread),
                    (em.message.title = $.threadName),
                    (em.message.publish = null != (o = $.publish) && o)),
                null != S)
            ) {
                let e,
                    t = null == S ? void 0 : S.activity.session_id;
                if (
                    null !=
                    (e =
                        S.type === eO.xL.JOIN_REQUEST || S.type === eO.xL.STREAM_REQUEST || null != t
                            ? t
                            : ei.default.getSessionId())
                ) {
                    let t = {
                            type: S.type,
                            session_id: e,
                            target_user_id: S.targetUserId,
                        },
                        { activity: n } = S;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (em.message.application_id = n.application_id),
                        (em.message.activity = t);
                }
            }
            if (
                (null != j && (em.message.poll = j),
                null != M && (em.message.shared_client_theme = M),
                null != R && (em.message.sticker_ids = R),
                z.A.isEnabled() && (em.message.has_poggermode_enabled = !0),
                et && (em.message.with_checkpoint = !0),
                null != k && (em.message.content_inventory_entry = k),
                null != G && G.length > 0 && (em.message.attachments = G),
                null != en && (em.message.message_id_from_notification_experiment = en),
                null != Z && Z.length > 0)
            )
                try {
                    let t = await (0, U.L)({
                        channelId: e,
                        nonce: eu,
                        items: Z,
                        message: eh,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((m = t.uploader), eo && (null == r || 0 === r.length))) return;
                    if (null != r && ((em.message.attachments = r.map((e, t) => (0, eb.OW)(e, t))), (0, y.J)())) {
                        for (let e of r)
                            if (
                                (null == (p = e.item) ||
                                null == (f = p.clip) ||
                                null == (u = f.decision) ||
                                null == (c = u.signal)
                                    ? void 0
                                    : c.type) === O.Gy.DISTRIBUTED
                            ) {
                                let t = {
                                        id: e.item.clip.id,
                                        remoteTriggerClipId:
                                            null == (h = e.item.clip.decision) || null == (_ = h.signal)
                                                ? void 0
                                                : _.remoteTriggerClipId,
                                    },
                                    n = "__CLIP_METADATA__",
                                    r = "".concat(n).concat(JSON.stringify(t));
                                em.message.content = "".concat(em.message.content).concat(r);
                                break;
                            }
                    }
                } catch (i) {
                    let { file: e, code: t, reason: n, responseBody: r } = i;
                    (0, W.O)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == n ? void 0 : n.msg,
                    }),
                        null == Q || Q(e, t, n, r);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = d.Ay.length,
                    s = Math.floor(1e4 * Math.random());
                eD.info("Queueing message to be sent LogId:".concat(s)),
                    d.Ay.enqueue(
                        em,
                        (o) => {
                            let c = Date.now() - i;
                            if (o.ok) {
                                B.A.donateSentMessage(E, e),
                                    eB.receiveMessage(e, o.body, !0, {
                                        sendAnalytics: {
                                            duration: c,
                                            queueSize: a,
                                        },
                                        poll: j,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        T.A.sendForward((0, V.rh)(o.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                var e, t, r;
                                                eU({
                                                    referencedMessageId: null == (e = o.body) ? void 0 : e.id,
                                                    guildId: null == (t = o.body) ? void 0 : t.guild_id,
                                                    channelId: null == (r = o.body) ? void 0 : r.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                var r;
                                                eP.log(
                                                    "Failed to forward thread message to parent channel LogId:".concat(
                                                        s,
                                                    ),
                                                    {
                                                        referencedMessageId: null == (r = o.body) ? void 0 : r.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let r = eE.default.cast(e),
                                    i = D.A.getRequest(r);
                                if (null != i) {
                                    let { guildId: t, userId: n, applicationStatus: r } = i;
                                    (0, P.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: o.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                F.A.recordMessageSendApiResponse(eu),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ed.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: A,
                                    }),
                                    l.h.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: R,
                                    }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: {
                                            channel_id: e,
                                            author: ef.default.getCurrentUser(),
                                        },
                                    }),
                                    ej({
                                        content: E,
                                        channelId: e,
                                        messageId: o.body.id,
                                        location: null != C ? C : "chat_input",
                                        inviteAnalyticsMetadata: N,
                                    }),
                                    ek(E, e, o.body.id, null != C ? C : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != m &&
                                        l.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: m._file,
                                            aborted: !1,
                                        }),
                                    t(o);
                            } else {
                                var u, f;
                                let t;
                                eP.log("Failed to send message", {
                                    hasErr: o.hasErr,
                                    status: o.status,
                                    code: null == (u = o.body) ? void 0 : u.code,
                                    error: o.err,
                                });
                                let i = !1;
                                if (o.hasErr) "ABORTED" === o.err.code && (i = !0);
                                else if (o.status >= 400 && o.status < 500 && o.body)
                                    if (o.body.code === eO.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = o.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ed.R.SendMessage,
                                                cooldownMs: t * e_.A.Millis.SECOND,
                                            });
                                    } else
                                        w.yf.has(o.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: em,
                                                  errorResponseBody: {
                                                      code: o.body.code,
                                                      message: o.body.message,
                                                  },
                                              })
                                            : o.body.code === eO.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({
                                                    type: "POGGERMODE_TEMPORARILY_DISABLED",
                                                })
                                              : o.body.code === eO.t02.EXPLICIT_CONTENT
                                                ? (t = eS.ty.EXPLICIT_CONTENT)
                                                : null != j || el || null != k || eB.sendClydeError(e, o.body.code);
                                i
                                    ? eB.deleteMessage(e, ep, !0)
                                    : (null != m &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: m._file,
                                              messageId: ep,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      o.hasErr ||
                                          t !== eS.ty.EXPLICIT_CONTENT ||
                                          eB.sendExplicitMediaClydeError(
                                              e,
                                              null == (f = o.body) ? void 0 : f.attachments,
                                              I.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ep,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, W.O)({
                                          failureCode: o.hasErr ? void 0 : o.status,
                                          errorMessage: o.hasErr ? o.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eP.log("Cancelling pending message", e.nonce),
                                              l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    r(o);
                            }
                        },
                        s,
                    );
            });
        },
        startEditMessage(e, t, n, r) {
            l.h.dispatch({
                type: "MESSAGE_START_EDIT",
                channelId: e,
                messageId: t,
                content: n,
                source: r,
            });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, a.Lt)(t.flags, eO.pr7.IS_COMPONENTS_V2)) {
                let r = t.components.filter((e) => e.type === c.I5.TEXT_DISPLAY);
                if (r.length > 0) {
                    let i = r.map((e) => e.content).join("\n");
                    l.h.dispatch({
                        type: "MESSAGE_START_EDIT",
                        channelId: e,
                        messageId: t.id,
                        content: i,
                        source: n,
                    });
                    return;
                }
            }
            l.h.dispatch({
                type: "MESSAGE_START_EDIT",
                channelId: e,
                messageId: t.id,
                content: t.content,
                source: n,
            });
        },
        updateEditMessage(e, t, n) {
            l.h.dispatch({
                type: "MESSAGE_UPDATE_EDIT",
                channelId: e,
                textValue: t,
                richValue: n,
            });
        },
        endEditMessage(e, t) {
            l.h.dispatch({
                type: "MESSAGE_END_EDIT",
                channelId: e,
                response: t,
            });
        },
        async editMessage(e, t, n) {
            let { content: r, components: i } = n;
            await et.A.unarchiveThreadIfNecessary(e);
            let a = eV(e, t),
                s = eG(e, t),
                c = {
                    channelId: e,
                    messageId: t,
                    content: r,
                    isCrossposted: s,
                    allowed_mentions: a,
                    components: i,
                };
            d.Ay.enqueue(
                {
                    type: d.AZ.EDIT,
                    message: c,
                },
                (n) => {
                    let r = !n.hasErr && w.yf.has(n.body.code);
                    if (r) {
                        let e = {
                            type: d.AZ.EDIT,
                            message: c,
                        };
                        l.h.dispatch({
                            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message,
                            },
                        });
                    }
                    n.hasErr
                        ? o.OR.announce(eI.intl.string(eI.t.Atp7FP))
                        : r
                          ? o.OR.announce(eI.intl.string(eI.t.Hym4ix))
                          : o.OR.announce(eI.intl.string(eI.t["0x1HBD"])),
                        eB.endEditMessage(e, n.hasErr ? void 0 : n),
                        eB.focusMessage({
                            channelId: e,
                            messageId: t,
                        });
                },
            );
        },
        async suppressEmbeds(e, t) {
            await et.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: eO.Rsh.MESSAGE(e, t),
                    body: {
                        flags: eO.pr7.SUPPRESS_EMBEDS,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await et.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: eO.Rsh.MESSAGE(e, t),
                    body: {
                        attachments: n,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    l.h
                        .dispatch({
                            type: "MESSAGE_DELETE",
                            id: t,
                            channelId: e,
                        })
                        .then(() => {
                            o.OR.announce(eI.intl.string(eI.t.RYMs7s));
                        });
                };
            n
                ? r()
                : (await et.A.unarchiveThreadIfNecessary(e),
                  s.Bo.del({
                      url: eO.Rsh.MESSAGE(e, t),
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(() => {
                      r();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                f.Ay.trackWithMetadata(eO.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            l.h.dispatch({
                type: "MESSAGE_REVEAL",
                channelId: e,
                messageId: t,
            });
        },
        async crosspostMessage(e, t) {
            try {
                return await s.Bo.post({
                    url: eO.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eI.intl.formatToPlainString(eI.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eI.intl.string(eI.t.z2gyNF)),
                    ey.A.show({
                        title: eI.intl.string(eI.t.Vd1hs6),
                        body: e,
                        confirmText: eI.intl.string(eI.t.BddRzS),
                    });
            }
        },
        trackInvite: eM,
    },
    eH = eB;
