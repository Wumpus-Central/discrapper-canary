n.d(t, {
    A: () => eW,
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
    o = n(562465),
    s = n(582754),
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
    y = n(695870),
    b = n(734066),
    O = n(372684),
    v = n(167189),
    A = n(833291),
    I = n(626584),
    S = n(390248),
    T = n(885918),
    C = n(142120),
    N = n(992771),
    w = n(834757),
    R = n(753738),
    P = n(51271),
    D = n(844944),
    L = n(122906),
    x = n(21599),
    M = n(346542),
    j = n(279208),
    k = n(917878),
    U = n(586872),
    G = n(99341),
    F = n(141468),
    V = n(407580),
    B = n(130201),
    H = n(963852),
    Y = n(195880),
    W = n(488004),
    K = n(491001),
    z = n(928830),
    q = n(3137),
    Z = n(969632),
    Q = n(79911),
    X = n(561844),
    J = n(710969);
n(853145);
var $ = n(9842),
    ee = n(679382),
    et = n(677413),
    en = n(867455),
    er = n(614792),
    ei = n(616356),
    ea = n(961350),
    eo = n(734057);
n(580745);
var es = n(299091),
    el = n(320501),
    ec = n(576705),
    eu = n(290863),
    ed = n(222823),
    ef = n(101392),
    ep = n(287809),
    e_ = n(954571),
    eh = n(927813),
    em = n(45938),
    eg = n(975571),
    eE = n(927578),
    ey = n(661191),
    eb = n(292348),
    eO = n(157559),
    ev = n(652215),
    eA = n(768349),
    eI = n(401755),
    eS = n(381941),
    eT = n(985018);

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

function eN(e) {
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

function ew(e, t) {
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
            : ew(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eP = null,
    eD = new I.A("MessageActionCreators"),
    eL = new I.A("MessageQueue"),
    ex = !1;
class eM {
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
        l = ea.default.getId();
    (0, A.Ay)(t).forEach((e) => {
        let { type: t, code: c, url: u } = e;
        if (t === v.I.INVITE)
            ek({
                inviteKey: c,
                channelId: n,
                messageId: r,
                location: a,
                inviteAnalyticsMetadata: o,
                overrideProperties: s,
            });
        else if (t === v.I.TEMPLATE) {
            let e = L.A.getGuildTemplate(c);
            if (null == e || e.state === eI.QB.RESOLVING) return;
            f.Ay.trackWithMetadata(ev.HAw.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: c,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
            });
        } else if (t === v.I.BUILD_OVERRIDE);
        else if (t === v.I.EXPERIMENT);
        else if (t === v.I.MANUAL_BUILD_OVERRIDE);
        else if (t === v.I.EVENT);
        else if (t === v.I.CHANNEL_LINK);
        else if (t === v.I.APP_DIRECTORY_PROFILE) (0, N.y)(c), (0, E.KL)(c, eA.J.APP_DISCOVERY, l);
        else if (t === v.I.APP_DIRECTORY_STOREFRONT) (0, N.y)(c, "storefront");
        else if (t === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, m.u)(c);
            null != e && (0, N.y)(e.applicationId, "storefront_sku");
        } else if (t === v.I.ACTIVITY_BOOKMARK) {
            var d;
            let e = (0, g.N)(u);
            (0, E.KL)(c, eA.J.ACTIVITY, null != (d = e.referrerId) ? d : l, e.customId);
        } else if (t === v.I.EMBEDDED_ACTIVITY_INVITE) (0, E.KL)(c, eA.J.ACTIVITY_INVITE, l);
        else if (t === v.I.GUILD_PRODUCT);
        else if (t === v.I.SERVER_SHOP);
        else if (t === v.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === v.I.QUESTS_EMBED) {
            let e = (0, J.Li)(i.u.QUESTS_EMBED),
                t = (0, J.L4)(i.u.QUESTS_EMBED);
            (0, X.av)({
                questId: c,
                event: ev.HAw.QUEST_LINK_SHARED,
                properties: {
                    metadata_raw: null != e ? e : null,
                    metadata_sealed: null != t ? t : null,
                },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.u.QUESTS_EMBED,
            });
        } else if (t === v.I.APP_OAUTH2_LINK)
            f.Ay.trackWithMetadata(ev.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
                application_id: c,
            }),
                (0, E.KL)(c, eA.J.OAUTH, l);
        else if (t === v.I.COLLECTIBLES_SHOP);
        else throw Error("Unknown coded link type: ".concat(t));
    });
}

function ek(e) {
    var t, n;
    let {
            inviteKey: r,
            channelId: i,
            messageId: a,
            location: o,
            inviteAnalyticsMetadata: s,
            overrideProperties: l = {},
        } = e,
        c = ea.default.getId(),
        u = es.A.getInvite(r),
        d = (0, x.y$)(r),
        p = null != u && (0, M.oK)(u),
        _ = null == u || null == (t = u.target_application) ? void 0 : t.id;
    null != _ && p && (0, E.KL)(_, eA.J.ACTIVITY_INVITE, c);
    let h = eo.A.getChannel(i);
    if (null != h) {
        let e = null;
        h.isMultiUserDM() ? (e = ev.G2g.GDM_INVITE) : h.isPrivate() || (e = ev.G2g.SERVER_INVITE);
        let t = {};
        if (null != u && u.state === ev.elq.RESOLVED && null != u.channel) {
            let r = u.channel;
            (t.invite_channel_id = r.id),
                (t.invite_guild_id = null == (n = u.guild) ? void 0 : n.id),
                (t.invite_channel_type = r.type),
                null != u.inviter && (t.invite_inviter_id = u.inviter.id),
                null != u.target_application && (t.application_id = u.target_application.id);
            let i = ei.A.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = ev.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, w.Ee)(i, eu.A);
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
            (t = eN(
                eR(eN({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: d.baseCode,
                    guild_id: h.getGuildId(),
                    channel_id: h.id,
                    message_id: a,
                    send_type: ev.gfq.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.Ay.trackWithMetadata(ev.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != u &&
            u.state === ev.elq.RESOLVED &&
            null != u.inviter &&
            ((e.invite_inviter_id = u.inviter.id),
            null != u.target_application && (e.application_id = u.target_application.id),
            (e = eN(
                eR(eN({}, e), {
                    location: o,
                    invite_type: ev.G2g.FRIEND_INVITE,
                    invite_code: d.baseCode,
                    message_id: a,
                    send_type: ev.gfq.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.Ay.trackWithMetadata(ev.HAw.INVITE_SENT, e));
    }
}

function eU(e, t, n, r, i) {
    (0, em.e7)(e).forEach((e) => {
        let a = eo.A.getChannel(t);
        null != a &&
            f.Ay.trackWithMetadata(ev.HAw.GIFT_CODE_SENT, {
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

function eG(e, t, n, r) {
    let i = eo.A.getChannel(t);
    null != i &&
        e_.default.track(
            ev.HAw.MESSAGE_SENT_WITH_GIF,
            eN(
                {
                    location: r,
                    message_id: n,
                    gif_provider: e.gif_provider,
                    load_id: e.load_id,
                    source_object: e.source_object,
                    gif_url: e.gif_url,
                    gif_id: e.gif_id,
                },
                (0, f.H$)(i.getGuildId()),
                (0, f.dI)(i),
            ),
        );
}

function eF(e) {
    let { referencedMessageId: t, guildId: n, channelId: r, destinationChannelId: i } = e;
    e_.default.track(ev.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}

function eV(e, t) {
    let n = el.A.getMessage(e, t);
    return null != n && n.hasFlag(ev.pr7.CROSSPOSTED);
}

function eB(e, t) {
    let n = el.A.getMessage(e, t);
    if (null == n || n.type !== ev.lAJ.REPLY) return;
    let r = $.A.getMessageByReference(n.messageReference);
    if (r.state === $.a.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(ev.uw8),
            replied_user: !1,
        };
}
let eH = {
        [ev.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eT.intl.string(eT.t.k1Cjqr),
        },
        [ev.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eT.intl.string(eT.t.Z5SUuv),
        },
        [ev.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                eT.intl.formatToPlainString(eT.t.CTMXwL, {
                    helpUrl: eg.A.getArticleURL(ev.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [ev.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eT.intl.string(eT.t.E8nbNb),
        },
        [ev.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eT.intl.string(eT.t.aRUbah),
        },
        [ev.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eT.intl.string(eT.t.aRUbah),
        },
        [ev.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eT.intl.string(eT.t["/meGhR"]),
        },
        [ev.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eT.intl.string(eT.t.Oc1Zjw),
        },
    },
    eY = {
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
                f.Ay.trackWithMetadata(ev.HAw.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n,
                }),
                eY.receiveMessage(
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
                type: ev.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: ev.pr7.EPHEMERAL,
                author: {
                    id: ev.oIV,
                    username: "Nitro Notification",
                    discriminator: ev.h3J,
                    avatar: "nitro",
                    bot: !0,
                },
            });
            eY.receiveMessage(
                e,
                eR(eN({}, r), {
                    state: ev.cmJ.SENT,
                    channel_id: e,
                }),
                !0,
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, H.Ay)({
                channelId: e,
                type: ev.lAJ.GIFTING_PROMPT,
                content: "",
                flags: ev.pr7.EPHEMERAL,
                author: {
                    id: ev.oIV,
                    username: "Gifting Prompt",
                    discriminator: ev.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eY.receiveMessage(
                e,
                eR(eN({}, n), {
                    state: ev.cmJ.SENT,
                }),
                !0,
            );
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = eo.A.getChannel(e);
            null != i &&
                (r === ev.t02.SLOWMODE_RATE_LIMITED
                    ? ((t = eT.intl.formatToPlainString(eT.t.IWntYg, {
                          seconds: i.rateLimitPerUser,
                      })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === ev.t02.INVALID_MESSAGE_SEND_USER
                      ? ((t = eT.intl.formatToPlainString(eT.t.CTMXwL, {
                            helpUrl: eg.A.getArticleURL(ev.MVz.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === ev.t02.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? eT.intl.string(eT.t["/jUd2+"])
                                  : eT.intl.string(eT.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === ev.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = eT.intl.string(eT.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === ev.t02.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = eT.intl.formatToPlainString(eT.t.zSG3Qy, {
                                  helpUrl: ev.X7G.HARMFUL_LINKS,
                              })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r === ev.t02.HARMFUL_URL_BLOCKED
                              ? ((t = eT.intl.string(eT.t.WxX2Fd)), (n = "HARMFUL_URL_BLOCKED"))
                              : r in eH
                                ? ((n = eH[r].messageName), (t = eH[r].messageGetter()))
                                : ((t = eT.intl.formatToPlainString(eT.t.CTMXwL, {
                                      helpUrl: eg.A.getArticleURL(ev.MVz.DM_COULD_NOT_BE_DELIVERED),
                                  })),
                                  (n = "SEND_FAILED (".concat(r, ")"))),
                eY.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = eo.A.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: o } = (0, r.YW)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM(),
                })
                    .with(
                        {
                            isDM: !0,
                        },
                        () => ({
                            message: eT.intl.string(eT.t["mktny/"]),
                            messageName: "BOT_DM_EXPLICIT_CONTENT",
                        }),
                    )
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
                s = (0, Y.m)();
            eY.sendBotMessage(e, a, o, s),
                (0, S.hv)({
                    action: S.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: s,
                    channelId: e,
                    context: n,
                }),
                null != t &&
                    t.length > 0 &&
                    l.h.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: s,
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
            eY.trackJump(e, null, "Present");
            let n = {
                present: !0,
            };
            el.A.hasPresent(e)
                ? l.h.dispatch({
                      type: "LOAD_MESSAGES_SUCCESS_CACHED",
                      jump: n,
                      channelId: e,
                      limit: t,
                  })
                : eY.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n,
                  });
        },
        trackJump(e, t, n, r) {
            f.Ay.trackWithMetadata(
                ev.HAw.JUMP,
                eN(
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
                "string" == typeof o && eY.trackJump(n, r, o, s),
                null == eP || null == (t = eP.pauseAllMediaPlayers) || t.call(eP),
                eY.fetchMessages({
                    channelId: n,
                    limit: ev.d7Q,
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
            eY.fetchMessages({
                channelId: t,
                limit: ev.d7Q,
                focus: {
                    messageId: n,
                },
            });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await o.Bo.get({
                    url: ev.Rsh.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n,
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (r.body.length > 0) return (0, F.rh)(r.body[0]);
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
                    feature: h,
                    fetchKey: m,
                } = e,
                g = eo.A.getChannel(t),
                E = C.A.isConnectedOrOverlay(),
                b = Date.now();
            if (null != g && g.type === ev.rbe.GUILD_STORE) return !1;
            if (
                t === y.E ||
                (eD.log(
                    "Fetching messages for "
                        .concat(t, " between ")
                        .concat(r, " and ")
                        .concat(n, ". jump=")
                        .concat(JSON.stringify(a)),
                ),
                eY._tryFetchMessagesCached({
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
            er.A.fetchMessages.recordStart(), k.A.recordChannelFetchStart(t, null != m ? m : b, n, r, i);
            let O = null != a ? a : void 0;
            null == O && null != s && (O = eN({}, s));
            let v = u.A.getOrCreate(t).loadStart(O);
            u.A.commit(v),
                l.h.dispatch({
                    type: "LOAD_MESSAGES",
                });
            let A = null == O ? void 0 : O.messageId,
                I = new eM();
            return (
                d || this.fetchLocalMessages(t, null != m ? m : b, n, r, i, I),
                o.Bo.get({
                    url: ev.Rsh.MESSAGES(t),
                    query: {
                        before: n,
                        after: r,
                        limit: i,
                        around: A,
                        preload: c,
                        feature: h,
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        er.A.fetchMessages.recordEnd(),
                        er.A.dispatchMessages.measure(() => {
                            let o = e.body,
                                s = null != n,
                                c = null != r,
                                u = null == n && null == r,
                                d = null != A || (o.length === i && (s || u)),
                                h = null != A || (c && o.length === i);
                            if (null != A) {
                                let e = Math.floor(i / 2),
                                    n = e + (i % 2),
                                    r = [
                                        A,
                                        ...o.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(ey.default.compare)
                                        .indexOf(A);
                                if ((r < n - 1 && (d = !1), o.length - r < e && (h = !1), h && o.length > 0)) {
                                    let e = ed.Ay.lastMessageId(t);
                                    o[0].id === e && (h = !1);
                                }
                            }
                            eD.log(
                                "Fetched "
                                    .concat(o.length, " messages for ")
                                    .concat(t, " isBefore:")
                                    .concat(s, " isAfter:")
                                    .concat(c),
                            ),
                                I.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: o,
                                    isBefore: s,
                                    isAfter: c,
                                    hasMoreBefore: d,
                                    hasMoreAfter: h,
                                    limit: i,
                                    jump: a,
                                    forICYMI: p,
                                    isStale: !E || C.A.lastTimeConnectedChanged() >= b,
                                    truncate: f,
                                    avoidInitialScroll: _,
                                }),
                                k.A.recordChannelFetchedNetwork(t, null != m ? m : b, n, r, i, o);
                        }),
                        !0
                    ),
                    () => (
                        eD.log("Failed to fetch messages for ".concat(t)),
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
            let o = eo.A.getBasicChannel(e),
                s = u.A.getOrCreate(e),
                c = p.A.database();
            if (null == c || null == o || null != n || null != r) return void er.A.addLocalMessages(e, -1);
            if (s.ready && !s.cached) return void er.A.addLocalMessages(e, -2);
            let d = await (0, _.kk)(() => h.Ay.load(c, e, i));
            if (null == d) return void er.A.addLocalMessages(e, -3);
            if (
                (eD.log(
                    "fetched "
                        .concat(d.messages.length, " messages from local database (channel_id: ")
                        .concat(e, ", remote_fetch_completed: ")
                        .concat(a.completed, ")"),
                ),
                er.A.addLocalMessages(e, d.messages.length),
                !a.completed && d.messages.length > 0)
            ) {
                let a = d.messages.length >= i && d.connectionId === C.A.lastTimeConnectedChanged();
                k.A.recordChannelFetchedLocal(e, t, n, r, i, d.messages),
                    l.h.dispatch({
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
            let r = eo.A.getBasicChannel(e),
                i = p.A.database();
            if (null == i || null == r) return;
            let a = u.A.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let o = await (0, _.kk)(() => h.Ay.load(i, e, t));
            if (null == o) return;
            let s = null == (n = (a = u.A.getOrCreate(e)).last()) ? void 0 : n.id,
                c = null == s ? o.messages : o.messages.filter((e) => ey.default.compare(e.id, s) > 0);
            eD.log(
                "Fetched "
                    .concat(o.messages.length, " messages from the cache after foregrounding. ")
                    .concat(c.length, " are new"),
            ),
                0 !== c.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: r.guild_id,
                        channelId: e,
                        users: o.users,
                        members: o.members,
                        messages: c,
                        stale: !0,
                        shouldForceCommitMessages: (0, K.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: o, truncate: s } = e,
                c = el.A.getMessages(t);
            if (c.cached || !c.ready) return !1;
            if ((null == a ? void 0 : a.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
                if ((null == a ? void 0 : a.messageId) != null && c.has(a.messageId, !1))
                    return (
                        l.h.dispatch({
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
                            l.h.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: o,
                                limit: i,
                                truncate: s,
                            }),
                            !0
                        );
                    else a = eN({}, o);
                let e =
                        (null == a ? void 0 : a.messageId) != null
                            ? ey.default.extractTimestamp(null == a ? void 0 : a.messageId)
                            : 0,
                    n = c.first(),
                    r = c.last();
                if (
                    (!c.hasMoreBefore && null != n && ey.default.extractTimestamp(n.id) >= e) ||
                    (!c.hasMoreAfter && null != r && ey.default.extractTimestamp(r.id) <= e) ||
                    (null != n &&
                        null != r &&
                        ey.default.extractTimestamp(n.id) < e &&
                        ey.default.extractTimestamp(r.id) > e)
                )
                    return (
                        l.h.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: ev.d7Q,
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
                        truncate: s,
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
            let a = await (0, Q.A)(e);
            if (null != a) return eY.sendMessage(a, t, r, i);
            let o = null != (n = i.nonce) ? n : (0, Y.m)();
            i = eR(eN({}, i), {
                nonce: o,
            });
            let s = () => eY._sendMessage(e, t, i),
                l = G.Ay.backgroundify(s, void 0);
            return (V.A.recordMessageSendAttempt(e, o, i), el.A.isReady(e))
                ? l()
                : r && e !== y.E
                  ? (eL.info("Waiting for channel ".concat(e, " to be ready before sending.")),
                    new Promise((t, n) => {
                        el.A.whenReady(e, () => {
                            eL.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n);
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
                                parse: Object.values(ev.uw8),
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
            let t = eY.getSendMessageOptionsForReply(e.pendingReply),
                n = eY.getSendMessageOptionsForStickers(eN({}, e)),
                r = eY.getSendMessageOptionsForScheduledMessage(eN({}, e)),
                i = eY.getSendMessageOptionsForAlsoForwardToChannel(eN({}, e));
            return eN({}, t, n, r, i);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, j.A)(t);
            return (
                null != i && (a = "".concat(i, "\n").concat(a)),
                eY._sendMessage(
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
            eY._sendMessage(
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
            return eY._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i,
                },
                eR(eN({}, r), {
                    stickerIds: t,
                }),
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return o.Bo.post({
                url: ev.Rsh.MESSAGES_GREET(e),
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
                    eY.receiveMessage(e, n.body),
                    l.h.dispatch({
                        type: "STICKER_TRACK_USAGE",
                        stickerIds: [t],
                    }),
                    n
                ),
                (t) => {
                    throw (
                        (eD.log("Failed to send greeting"),
                        429 !== t.status && eY.sendClydeError(e, t.body.code),
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
            return eY._sendMessage(
                e,
                {
                    content: "",
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: [],
                },
                eR(eN({}, n), {
                    poll: t,
                    location: eS.Hx.POLL_CREATION,
                }),
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eE.Ay.canUseAnimatedEmojis(t)
                    ? ((r = eT.intl.string(eT.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : ec.A.canWithPartialContext(ev.xBc.USE_EXTERNAL_EMOJIS, {
                            channelId: n,
                        })
                      ? ((r = eT.intl.string(eT.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = eT.intl.string(eT.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                {
                    errorMessage: r,
                    errorMessageName: i,
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, o, s, c, u, f, p, _, h;
            let m,
                g = (0, Q.A)(e);
            if (null != g)
                return (
                    eL.info("Converting channel to a private channel"),
                    g.then((e) => {
                        eL.info("Finished converting channel to a private channel"), eY._sendMessage(e, t, n);
                    })
                );
            let E = t.content,
                { invalidEmojis: y, validNonShortcutEmojis: v, tts: A = !1 } = t,
                {
                    activityAction: I,
                    location: C,
                    inviteAnalyticsMetadata: N,
                    stickerIds: w,
                    messageReference: L,
                    allowedMentions: x,
                    poll: M,
                    sharedCustomTheme: j,
                    contentInventoryEntry: k,
                    attachments: G,
                    attachmentsToUpload: K,
                    onAttachmentUploadError: X,
                    announcementSendOptions: J,
                    withCheckpoint: $,
                } = n,
                en = null != (r = n.flags) ? r : 0,
                [er, ei] = (0, et.A)(E);
            er && ((E = ei), (en = (0, a.UI)(en, ev.pr7.SUPPRESS_NOTIFICATIONS)));
            let eo = !1,
                es = (null == (o = n.messageReference) ? void 0 : o.type) === ev.SH7.FORWARD;
            if (
                "" === E &&
                null == I &&
                null == w &&
                null == M &&
                null == j &&
                null == k &&
                !es &&
                (null == G || 0 === G.length) &&
                !$ &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == K || !(K.length > 0)) return Promise.resolve();
                else eo = !0;
            let el = null != L ? ev.lAJ.REPLY : ev.lAJ.DEFAULT,
                ec = null != (i = n.nonce) ? i : (0, Y.m)(),
                eu = ec,
                ed = (0, H.Ay)({
                    channelId: e,
                    content: E,
                    tts: A,
                    type: el,
                    messageReference: L,
                    allowedMentions: x,
                    flags: 0 !== en ? en : void 0,
                    nonce: ec,
                    poll: (0, Z.G8)(M),
                    sharedCustomTheme: j,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, z.iq)(e, ed.id),
                    null != w && (ed.sticker_items = w.map((e) => ee.A.getStickerById(e)).filter((e) => null != e)),
                    eY.receiveMessage(e, ed, !0, n)),
                !ex && null != y && y.length > 0)
            ) {
                ex = !0;
                let t = ep.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = eY.validateMessage(y, t, e);
                eY.sendBotMessage(e, n, r);
            }
            let e_ = {
                type: null != J ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: E,
                    nonce: ec,
                    tts: A,
                    message_reference: L,
                    allowed_mentions: x,
                    flags: en,
                    analyticsLocation: C,
                },
            };
            if (
                (null != t.components && (e_.message.components = t.components),
                null != J &&
                    ((e_.message.create_thread = J.createThread),
                    (e_.message.title = J.threadName),
                    (e_.message.publish = null != (s = J.publish) && s)),
                null != I)
            ) {
                let e,
                    t = null == I ? void 0 : I.activity.session_id;
                if (
                    null !=
                    (e =
                        I.type === ev.xL.JOIN_REQUEST || I.type === ev.xL.STREAM_REQUEST || null != t
                            ? t
                            : ea.default.getSessionId())
                ) {
                    let t = {
                            type: I.type,
                            session_id: e,
                            target_user_id: I.targetUserId,
                        },
                        { activity: n } = I;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (e_.message.application_id = n.application_id),
                        (e_.message.activity = t);
                }
            }
            if (
                (null != M && (e_.message.poll = M),
                null != j && (e_.message.shared_client_theme = j),
                null != w && (e_.message.sticker_ids = w),
                q.A.isEnabled() && (e_.message.has_poggermode_enabled = !0),
                $ && (e_.message.with_checkpoint = !0),
                null != k && (e_.message.content_inventory_entry = k),
                null != G && G.length > 0 && (e_.message.attachments = G),
                null != K && K.length > 0)
            )
                try {
                    let t = await (0, U.L)({
                        channelId: e,
                        nonce: ec,
                        items: K,
                        message: ed,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((m = t.uploader), eo && (null == r || 0 === r.length))) return;
                    if (null != r && ((e_.message.attachments = r.map((e, t) => (0, eb.OW)(e, t))), (0, b.J)())) {
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
                                e_.message.content = "".concat(e_.message.content).concat(r);
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
                        null == X || X(e, t, n, r);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = d.Ay.length,
                    o = Math.floor(1e4 * Math.random());
                eL.info("Queueing message to be sent LogId:".concat(o)),
                    d.Ay.enqueue(
                        e_,
                        (s) => {
                            let c = Date.now() - i;
                            if (s.ok) {
                                B.A.donateSentMessage(E, e),
                                    eY.receiveMessage(e, s.body, !0, {
                                        sendAnalytics: {
                                            duration: c,
                                            queueSize: a,
                                        },
                                        poll: M,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        T.A.sendForward((0, F.rh)(s.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                var e, t, r;
                                                eF({
                                                    referencedMessageId: null == (e = s.body) ? void 0 : e.id,
                                                    guildId: null == (t = s.body) ? void 0 : t.guild_id,
                                                    channelId: null == (r = s.body) ? void 0 : r.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                var r;
                                                eD.log(
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
                                let r = ey.default.cast(e),
                                    i = D.A.getRequest(r);
                                if (null != i) {
                                    let { guildId: t, userId: n, applicationStatus: r } = i;
                                    (0, P.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: s.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                V.A.recordMessageSendApiResponse(ec),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ef.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: v,
                                    }),
                                    l.h.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: w,
                                    }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: {
                                            channel_id: e,
                                            author: ep.default.getCurrentUser(),
                                        },
                                    }),
                                    ej({
                                        content: E,
                                        channelId: e,
                                        messageId: s.body.id,
                                        location: null != C ? C : "chat_input",
                                        inviteAnalyticsMetadata: N,
                                    }),
                                    eU(E, e, s.body.id, null != C ? C : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
                                    null != n.gifMetadata &&
                                        eG(n.gifMetadata, e, s.body.id, null != C ? C : "chat_input"),
                                    null != m &&
                                        l.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: m._file,
                                            aborted: !1,
                                        }),
                                    t(s);
                            } else {
                                var u, f;
                                let t;
                                eD.log("Failed to send message", {
                                    hasErr: s.hasErr,
                                    status: s.status,
                                    code: null == (u = s.body) ? void 0 : u.code,
                                    error: s.err,
                                });
                                let i = !1;
                                if (s.hasErr) "ABORTED" === s.err.code && (i = !0);
                                else if (s.status >= 400 && s.status < 500 && s.body)
                                    if (s.body.code === ev.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = s.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ef.R.SendMessage,
                                                cooldownMs: t * eh.A.Millis.SECOND,
                                            });
                                    } else
                                        R.yf.has(s.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: e_,
                                                  errorResponseBody: {
                                                      code: s.body.code,
                                                      message: s.body.message,
                                                  },
                                              })
                                            : s.body.code === ev.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({
                                                    type: "POGGERMODE_TEMPORARILY_DISABLED",
                                                })
                                              : s.body.code === ev.t02.EXPLICIT_CONTENT
                                                ? (t = eS.ty.EXPLICIT_CONTENT)
                                                : null != M || es || null != k || eY.sendClydeError(e, s.body.code);
                                i
                                    ? eY.deleteMessage(e, eu, !0)
                                    : (null != m &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: m._file,
                                              messageId: eu,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      s.hasErr ||
                                          t !== eS.ty.EXPLICIT_CONTENT ||
                                          eY.sendExplicitMediaClydeError(
                                              e,
                                              null == (f = s.body) ? void 0 : f.attachments,
                                              S.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: eu,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, W.O)({
                                          failureCode: s.hasErr ? void 0 : s.status,
                                          errorMessage: s.hasErr ? s.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eD.log("Cancelling pending message", e.nonce),
                                              l.h.dispatch({
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
            l.h.dispatch({
                type: "MESSAGE_START_EDIT",
                channelId: e,
                messageId: t,
                content: n,
                source: r,
            });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, a.Lt)(t.flags, ev.pr7.IS_COMPONENTS_V2)) {
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
            await en.A.unarchiveThreadIfNecessary(e);
            let a = eB(e, t),
                o = eV(e, t),
                c = {
                    channelId: e,
                    messageId: t,
                    content: r,
                    isCrossposted: o,
                    allowed_mentions: a,
                    components: i,
                };
            d.Ay.enqueue(
                {
                    type: d.AZ.EDIT,
                    message: c,
                },
                (n) => {
                    let r = !n.hasErr && R.yf.has(n.body.code);
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
                        ? s.OR.announce(eT.intl.string(eT.t.Atp7FP))
                        : r
                          ? s.OR.announce(eT.intl.string(eT.t.Hym4ix))
                          : s.OR.announce(eT.intl.string(eT.t["0x1HBD"])),
                        eY.endEditMessage(e, n.hasErr ? void 0 : n),
                        eY.focusMessage({
                            channelId: e,
                            messageId: t,
                        });
                },
            );
        },
        async suppressEmbeds(e, t) {
            await en.A.unarchiveThreadIfNecessary(e),
                o.Bo.patch({
                    url: ev.Rsh.MESSAGE(e, t),
                    body: {
                        flags: ev.pr7.SUPPRESS_EMBEDS,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await en.A.unarchiveThreadIfNecessary(e),
                o.Bo.patch({
                    url: ev.Rsh.MESSAGE(e, t),
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
                            s.OR.announce(eT.intl.string(eT.t.RYMs7s));
                        });
                };
            n
                ? r()
                : (await en.A.unarchiveThreadIfNecessary(e),
                  o.Bo.del({
                      url: ev.Rsh.MESSAGE(e, t),
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(() => {
                      r();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                f.Ay.trackWithMetadata(ev.HAw.AUTOMATED_MESSAGE_DISMISSED, {
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
                return await o.Bo.post({
                    url: ev.Rsh.MESSAGE_CROSSPOST(e, t),
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
                    eO.A.show({
                        title: eT.intl.string(eT.t.Vd1hs6),
                        body: e,
                        confirmText: eT.intl.string(eT.t.BddRzS),
                    });
            }
        },
        trackInvite: ek,
    },
    eW = eY;
