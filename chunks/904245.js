n.d(t, { Z: () => eq }), n(953529), n(415506), n(314940), n(49124), n(388685), n(642613), n(997841);
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
    q = n(980463),
    Q = n(328908),
    X = n(992970),
    J = n(576645),
    $ = n(317951),
    ee = n(287941),
    et = n(643266),
    en = n(617136),
    er = n(862657);
n(807092);
var ei = n(869765),
    ea = n(926491),
    eo = n(467798),
    es = n(346479),
    el = n(218543),
    ec = n(199902),
    eu = n(314897),
    ed = n(592125);
n(323873);
var ef = n(701190),
    ep = n(375954),
    e_ = n(496675),
    em = n(158776),
    eh = n(306680),
    eg = n(300429),
    eE = n(594174),
    eb = n(626135),
    ey = n(70956),
    eO = n(669079),
    ev = n(63063),
    eS = n(74538),
    eI = n(709054),
    eT = n(861990),
    eC = n(668781),
    eA = n(981631),
    eN = n(967249),
    eP = n(260539),
    eR = n(959517),
    ew = n(388032);
function eD(e, t, n) {
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
function ex(e) {
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
                eD(e, t, n[t]);
            });
    }
    return e;
}
function eL(e, t) {
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
function ej(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eL(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eM = null,
    ek = new I.Z("MessageActionCreators"),
    eU = new I.Z("MessageQueue"),
    eG = !1;
class eZ {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eD(this, "completed", !1);
    }
}
function eF(e) {
    let {
            content: t,
            channelId: n,
            messageId: r,
            location: a,
            inviteAnalyticsMetadata: o,
            overrideProperties: s = {},
        } = e,
        l = eu.default.getId();
    (0, S.ZP)(t).forEach((e) => {
        let { type: t, code: c, url: u } = e;
        if (t === v.g.INVITE)
            eB({
                inviteKey: c,
                channelId: n,
                messageId: r,
                location: a,
                inviteAnalyticsMetadata: o,
                overrideProperties: s,
            });
        else if (t === v.g.TEMPLATE) {
            let e = x.Z.getGuildTemplate(c);
            if (null == e || e.state === eP.Rj.RESOLVING) return;
            f.ZP.trackWithMetadata(eA.rMx.GUILD_TEMPLATE_LINK_SENT, {
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
        else if (t === v.g.APP_DIRECTORY_PROFILE) (0, N.y)(c), (0, E.z$)(c, eN.U.APP_DISCOVERY, l);
        else if (t === v.g.APP_DIRECTORY_STOREFRONT) (0, N.y)(c, "storefront");
        else if (t === v.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, h.Q)(c);
            null != e && (0, N.y)(e.applicationId, "storefront_sku");
        } else if (t === v.g.ACTIVITY_BOOKMARK) {
            var d;
            let e = (0, g.U)(u);
            (0, E.z$)(c, eN.U.ACTIVITY, null != (d = e.referrerId) ? d : l, e.customId);
        } else if (t === v.g.EMBEDDED_ACTIVITY_INVITE) (0, E.z$)(c, eN.U.ACTIVITY_INVITE, l);
        else if (t === v.g.GUILD_PRODUCT);
        else if (t === v.g.SERVER_SHOP);
        else if (t === v.g.SOCIAL_LAYER_STOREFRONT);
        else if (t === v.g.QUESTS_EMBED) {
            let e = (0, er.jY)(i.j.QUESTS_EMBED),
                t = (0, er.R_)(i.j.QUESTS_EMBED);
            (0, en.dA)({
                questId: c,
                event: eA.rMx.QUEST_LINK_SHARED,
                properties: {
                    metadata_raw: null != e ? e : null,
                    metadata_sealed: null != t ? t : null,
                },
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: i.j.QUESTS_EMBED,
            });
        } else if (t === v.g.APP_OAUTH2_LINK)
            f.ZP.trackWithMetadata(eA.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, { application_id: c }),
                (0, E.z$)(c, eN.U.OAUTH, l);
        else if (t === v.g.COLLECTIBLES_SHOP);
        else throw Error("Unknown coded link type: ".concat(t));
    });
}
function eB(e) {
    var t, n;
    let {
            inviteKey: r,
            channelId: i,
            messageId: a,
            location: o,
            inviteAnalyticsMetadata: s,
            overrideProperties: l = {},
        } = e,
        c = eu.default.getId(),
        u = ef.Z.getInvite(r),
        d = (0, L.fU)(r),
        p = null != u && (0, j.P1)(u),
        _ = null == u || null == (t = u.target_application) ? void 0 : t.id;
    null != _ && p && (0, E.z$)(_, eN.U.ACTIVITY_INVITE, c);
    let m = ed.Z.getChannel(i);
    if (null != m) {
        let e = null;
        m.isMultiUserDM() ? (e = eA.dAT.GDM_INVITE) : m.isPrivate() || (e = eA.dAT.SERVER_INVITE);
        let t = {};
        if (null != u && u.state === eA.r2o.RESOLVED && null != u.channel) {
            let r = u.channel;
            (t.invite_channel_id = r.id),
                (t.invite_guild_id = null == (n = u.guild) ? void 0 : n.id),
                (t.invite_channel_type = r.type),
                null != u.inviter && (t.invite_inviter_id = u.inviter.id),
                null != u.target_application && (t.application_id = u.target_application.id);
            let i = ec.Z.getLastActiveStream();
            if (null != i && i.channelId === r.id) {
                (e = eA.dAT.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, P.L2)(i, em.Z);
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
            (t = ex(
                ej(ex({}, t), {
                    location: o,
                    invite_type: e,
                    invite_code: d.baseCode,
                    guild_id: m.getGuildId(),
                    channel_id: m.id,
                    message_id: a,
                    send_type: eA.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.ZP.trackWithMetadata(eA.rMx.INVITE_SENT, t);
    } else {
        let e = {};
        null != u &&
            u.state === eA.r2o.RESOLVED &&
            null != u.inviter &&
            ((e.invite_inviter_id = u.inviter.id),
            null != u.target_application && (e.application_id = u.target_application.id),
            (e = ex(
                ej(ex({}, e), {
                    location: o,
                    invite_type: eA.dAT.FRIEND_INVITE,
                    invite_code: d.baseCode,
                    message_id: a,
                    send_type: eA.a5g.DIRECT_MESSAGE,
                    invite_guild_scheduled_event_id: d.guildScheduledEventId,
                }),
                l,
            )),
            f.ZP.trackWithMetadata(eA.rMx.INVITE_SENT, e));
    }
}
function eV(e, t, n, r, i) {
    (0, eO.Q_)(e).forEach((e) => {
        let a = ed.Z.getChannel(t);
        null != a &&
            f.ZP.trackWithMetadata(eA.rMx.GIFT_CODE_SENT, {
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
function eH(e) {
    let { referencedMessageId: t, guildId: n, channelId: r, destinationChannelId: i } = e;
    eb.default.track(eA.rMx.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
        referenced_message_id: t,
        guild_id: n,
        channel_id: r,
        destination_channel_id: i,
    });
}
function eY(e, t) {
    let n = ep.Z.getMessage(e, t);
    return null != n && n.hasFlag(eA.iLy.CROSSPOSTED);
}
function eW(e, t) {
    let n = ep.Z.getMessage(e, t);
    if (null == n || n.type !== eA.uaV.REPLY) return;
    let r = ei.Z.getMessageByReference(n.messageReference);
    if (r.state === ei.Y.LOADED && !n.mentions.includes(r.message.author.id))
        return {
            parse: Object.values(eA.hCA),
            replied_user: !1,
        };
}
let eK = {
        [eA.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => ew.intl.string(ew.t.k1Cjqr),
        },
        [eA.evJ.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => ew.intl.string(ew.t.Z5SUuv),
        },
        [eA.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
                ew.intl.formatToPlainString(ew.t.CTMXwL, {
                    helpUrl: ev.Z.getArticleURL(eA.BhN.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [eA.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => ew.intl.string(ew.t.E8nbNb),
        },
        [eA.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => ew.intl.string(ew.t.aRUbah),
        },
        [eA.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => ew.intl.string(ew.t.aRUbah),
        },
        [eA.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => ew.intl.string(ew.t["/meGhR"]),
        },
        [eA.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => ew.intl.string(ew.t.Oc1Zjw),
        },
    },
    ez = {
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
                f.ZP.trackWithMetadata(eA.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n,
                }),
                ez.receiveMessage(
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
                type: eA.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eA.iLy.EPHEMERAL,
                author: {
                    id: eA.LAt,
                    username: "Nitro Notification",
                    discriminator: eA.fo$,
                    avatar: "nitro",
                    bot: !0,
                },
            });
            ez.receiveMessage(
                e,
                ej(ex({}, r), {
                    state: eA.yb.SENT,
                    channel_id: e,
                }),
                !0,
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, V.ZP)({
                channelId: e,
                type: eA.uaV.GIFTING_PROMPT,
                content: "",
                flags: eA.iLy.EPHEMERAL,
                author: {
                    id: eA.LAt,
                    username: "Gifting Prompt",
                    discriminator: eA.fo$,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            ez.receiveMessage(e, ej(ex({}, n), { state: eA.yb.SENT }), !0);
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = ed.Z.getChannel(e);
            null != i &&
                (r === eA.evJ.SLOWMODE_RATE_LIMITED
                    ? ((t = ew.intl.formatToPlainString(ew.t.IWntYg, { seconds: i.rateLimitPerUser })),
                      (n = "SLOWMODE_RATE_LIMITED"))
                    : r === eA.evJ.INVALID_MESSAGE_SEND_USER
                      ? ((t = ew.intl.formatToPlainString(ew.t.CTMXwL, {
                            helpUrl: ev.Z.getArticleURL(eA.BhN.DM_COULD_NOT_BE_DELIVERED),
                        })),
                        (n = "INVALID_MESSAGE_SEND_USER"))
                      : r === eA.evJ.TOO_MANY_THREADS
                        ? ((t =
                              i.isForumLikeChannel() || i.isForumPost()
                                  ? ew.intl.string(ew.t["/jUd2+"])
                                  : ew.intl.string(ew.t["5EMPA7"])),
                          (n = "TOO_MANY_THREADS"))
                        : r === eA.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                          ? ((t = ew.intl.string(ew.t["aY+lLC"])), (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                          : r === eA.evJ.HARMFUL_LINK_MESSAGE_BLOCKED
                            ? ((t = ew.intl.formatToPlainString(ew.t.zSG3Qy, { helpUrl: eA.EYA.HARMFUL_LINKS })),
                              (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                            : r === eA.evJ.HARMFUL_URL_BLOCKED
                              ? ((t = ew.intl.string(ew.t.WxX2Fd)), (n = "HARMFUL_URL_BLOCKED"))
                              : r in eK
                                ? ((n = eK[r].messageName), (t = eK[r].messageGetter()))
                                : ((t = ew.intl.formatToPlainString(ew.t.CTMXwL, {
                                      helpUrl: ev.Z.getArticleURL(eA.BhN.DM_COULD_NOT_BE_DELIVERED),
                                  })),
                                  (n = "SEND_FAILED (".concat(r, ")"))),
                ez.sendBotMessage(e, t, n));
        },
        sendExplicitMediaClydeError(e, t, n) {
            let i = ed.Z.getChannel(e);
            if (null == i) return;
            let { message: a, messageName: o } = (0, r.EQ)({
                    isDM: i.isDM(),
                    isGDM: i.isGroupDM(),
                })
                    .with({ isDM: !0 }, () => ({
                        message: ew.intl.string(ew.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0,
                        },
                        () => ({
                            message: ew.intl.string(ew.t["mktny/"]),
                            messageName: "BOT_GDM_EXPLICIT_CONTENT",
                        }),
                    )
                    .otherwise(() => ({
                        message: ew.intl.string(ew.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                s = (0, H.r)();
            ez.sendBotMessage(e, a, o, s),
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
            ez.trackJump(e, null, "Present");
            let n = { present: !0 };
            ep.Z.hasPresent(e)
                ? l.Z.dispatch({
                      type: "LOAD_MESSAGES_SUCCESS_CACHED",
                      jump: n,
                      channelId: e,
                      limit: t,
                  })
                : ez.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n,
                  });
        },
        trackJump(e, t, n, r) {
            f.ZP.trackWithMetadata(
                eA.rMx.JUMP,
                ex(
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
                "string" == typeof o && ez.trackJump(n, r, o, s),
                null == eM || null == (t = eM.pauseAllMediaPlayers) || t.call(eM),
                ez.fetchMessages({
                    channelId: n,
                    limit: eA.Z8P,
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
            ez.fetchMessages({
                channelId: t,
                limit: eA.Z8P,
                focus: { messageId: n },
            });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                r = await o.tn.get({
                    url: eA.ANM.MESSAGES(t),
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
                } = e,
                h = ed.Z.getChannel(t),
                g = A.Z.isConnectedOrOverlay(),
                E = Date.now();
            if (null != h && h.type === eA.d4z.GUILD_STORE) return !1;
            if (
                t === b.V ||
                (ek.log(
                    "Fetching messages for "
                        .concat(t, " between ")
                        .concat(r, " and ")
                        .concat(n, ". jump=")
                        .concat(JSON.stringify(a)),
                ),
                ez._tryFetchMessagesCached({
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
            el.Z.fetchMessages.recordStart(), k.Z.recordChannelFetchStart(t, n, r, i);
            let y = null != a ? a : void 0;
            null == y && null != s && (y = ex({}, s));
            let O = u.Z.getOrCreate(t).loadStart(y);
            u.Z.commit(O), l.Z.dispatch({ type: "LOAD_MESSAGES" });
            let v = null == y ? void 0 : y.messageId,
                S = new eZ();
            return (
                d || this.fetchLocalMessages(t, n, r, i, S),
                o.tn
                    .get({
                        url: eA.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: i,
                            around: v,
                            preload: c,
                            feature: m,
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    })
                    .then(
                        (e) => (
                            el.Z.fetchMessages.recordEnd(),
                            el.Z.dispatchMessages.measure(() => {
                                let o = e.body,
                                    s = null != n,
                                    c = null != r,
                                    u = null == n && null == r,
                                    d = null != v || (o.length === i && (s || u)),
                                    m = null != v || (c && o.length === i);
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
                                            .sort(eI.default.compare)
                                            .indexOf(v);
                                    if ((r < n - 1 && (d = !1), o.length - r < e && (m = !1), m && o.length > 0)) {
                                        let e = eh.ZP.lastMessageId(t);
                                        o[0].id === e && (m = !1);
                                    }
                                }
                                ek.log(
                                    "Fetched "
                                        .concat(o.length, " messages for ")
                                        .concat(t, " isBefore:")
                                        .concat(s, " isAfter:")
                                        .concat(c),
                                ),
                                    S.markComplete(),
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
                                        isStale: !g || A.Z.lastTimeConnectedChanged() >= E,
                                        truncate: f,
                                        avoidInitialScroll: _,
                                    }),
                                    k.Z.recordChannelFetchedNetwork(t, n, r, i);
                            }),
                            !0
                        ),
                        () => (
                            ek.log("Failed to fetch messages for ".concat(t)),
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
            let a = ed.Z.getBasicChannel(e),
                o = u.Z.getOrCreate(e),
                s = p.Z.database();
            if (null == s || null == a || null != t || null != n) return void el.Z.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void el.Z.addLocalMessages(e, -2);
            let c = await (0, _.dI)(() => m.ZP.load(s, e, r));
            if (null == c) return void el.Z.addLocalMessages(e, -3);
            if (
                (ek.log(
                    "fetched "
                        .concat(c.messages.length, " messages from local database (channel_id: ")
                        .concat(e, ", remote_fetch_completed: ")
                        .concat(i.completed, ")"),
                ),
                el.Z.addLocalMessages(e, c.messages.length),
                !i.completed && c.messages.length > 0)
            ) {
                let i = c.messages.length >= r && c.connectionId === A.Z.lastTimeConnectedChanged();
                k.Z.recordChannelFetchedLocal(e, t, n, r),
                    l.Z.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: a.guild_id,
                        channelId: e,
                        users: c.users,
                        members: c.members,
                        messages: c.messages,
                        stale: !i,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let r = ed.Z.getBasicChannel(e),
                i = p.Z.database();
            if (null == i || null == r) return;
            let a = u.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let o = await (0, _.dI)(() => m.ZP.load(i, e, t));
            if (null == o) return;
            let s = null == (n = (a = u.Z.getOrCreate(e)).last()) ? void 0 : n.id,
                c = null == s ? o.messages : o.messages.filter((e) => eI.default.compare(e.id, s) > 0);
            ek.log(
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
                c = ep.Z.getMessages(t);
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
                    else a = ex({}, o);
                let e =
                        (null == a ? void 0 : a.messageId) != null
                            ? eI.default.extractTimestamp(null == a ? void 0 : a.messageId)
                            : 0,
                    n = c.first(),
                    r = c.last();
                if (
                    (!c.hasMoreBefore && null != n && eI.default.extractTimestamp(n.id) >= e) ||
                    (!c.hasMoreAfter && null != r && eI.default.extractTimestamp(r.id) <= e) ||
                    (null != n &&
                        null != r &&
                        eI.default.extractTimestamp(n.id) < e &&
                        eI.default.extractTimestamp(r.id) > e)
                )
                    return (
                        l.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: eA.Z8P,
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
            let a = await (0, et.Z)(e);
            if (null != a) return ez.sendMessage(a, t, r, i);
            let o = null != (n = i.nonce) ? n : (0, H.r)();
            i = ej(ex({}, i), { nonce: o });
            let s = () => ez._sendMessage(e, t, i),
                l = G.ZP.backgroundify(s, void 0);
            return (F.Z.recordMessageSendAttempt(e, o, i), ep.Z.isReady(e))
                ? l()
                : r && e !== b.V
                  ? (eU.info("Waiting for channel ".concat(e, " to be ready before sending.")),
                    new Promise((t, n) => {
                        ep.Z.whenReady(e, () => {
                            eU.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n);
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
                                parse: Object.values(eA.hCA),
                                replied_user: !1,
                            },
                  };
        },
        getSendMessageOptionsForConfettiPotion(e) {
            let { channelId: t, content: n, isGif: r, command: i, uploads: a, confettiPotionEmoji: o } = e;
            return null != o && (0, J.tv)(n, r, i, a)
                ? {
                      confettiPotionData: {
                          emoji: o,
                          callback: () => (0, Q.Hb)(t),
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
        getSendMessageOptionsForAlsoForwardToChannel: (e) => ({ alsoForwardToChannelId: e.alsoForwardToChannelId }),
        getSendMessageOptions(e) {
            let t = ez.getSendMessageOptionsForReply(e.pendingReply),
                n = ez.getSendMessageOptionsForConfettiPotion(ex({}, e)),
                r = ez.getSendMessageOptionsForStickers(ex({}, e)),
                i = ez.getSendMessageOptionsForScheduledMessage(ex({}, e)),
                a = ez.getSendMessageOptionsForAlsoForwardToChannel(ex({}, e));
            return ex({}, t, n, r, i, a);
        },
        sendInvite(e, t, n, r, i) {
            let a = (0, M.Z)(t);
            return (
                null != i && (a = "".concat(i, "\n").concat(a)),
                ez._sendMessage(
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
            ez._sendMessage(
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
            return ez._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i,
                },
                ej(ex({}, r), { stickerIds: t }),
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return o.tn
                .post({
                    url: eA.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: i,
                        message_reference: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                    context: { location: eR.dy.GREET },
                })
                .then(
                    (n) => (
                        B.Z.donateSentMessage(n.body.content, e),
                        ez.receiveMessage(e, n.body),
                        l.Z.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t],
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (ek.log("Failed to send greeting"),
                            429 !== t.status && ez.sendClydeError(e, t.body.code),
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
            return ez._sendMessage(
                e,
                {
                    content: "",
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: [],
                },
                ej(ex({}, n), {
                    poll: t,
                    location: eR.dy.POLL_CREATION,
                }),
            );
        },
        validateMessage(e, t, n) {
            let r, i;
            return (
                e.some((e) => e.animated) && !eS.ZP.canUseAnimatedEmojis(t)
                    ? ((r = ew.intl.string(ew.t.msFJy8)), (i = "INVALID_ANIMATED_EMOJI_BODY"))
                    : e_.Z.canWithPartialContext(eA.Plq.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((r = ew.intl.string(ew.t.FzugNl)), (i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((r = ew.intl.string(ew.t["Q87rI/"])), (i = "INVALID_EXTERNAL_EMOJI_BODY")),
                {
                    errorMessage: r,
                    errorMessageName: i,
                }
            );
        },
        async _sendMessage(e, t, n) {
            var r, i, o, s, c, u, f, p, _, m;
            let h,
                g = (0, et.Z)(e);
            if (null != g)
                return (
                    eU.info("Converting channel to a private channel"),
                    g.then((e) => {
                        eU.info("Finished converting channel to a private channel"), ez._sendMessage(e, t, n);
                    })
                );
            let E = t.content,
                { invalidEmojis: b, validNonShortcutEmojis: v, tts: S = !1 } = t,
                {
                    activityAction: I,
                    location: A,
                    inviteAnalyticsMetadata: N,
                    stickerIds: P,
                    confettiPotionData: x,
                    messageReference: L,
                    allowedMentions: j,
                    poll: M,
                    sharedCustomTheme: k,
                    contentInventoryEntry: G,
                    attachments: Q,
                    attachmentsToUpload: en,
                    onAttachmentUploadError: er,
                    announcementSendOptions: ei,
                    withCheckpoint: es,
                    messageIdFromNotificationExperiment: el,
                } = n,
                ec = null != (i = n.flags) ? i : 0,
                [ed, ef] = (0, eo.Z)(E);
            ed && ((E = ef), (ec = (0, a.pj)(ec, eA.iLy.SUPPRESS_NOTIFICATIONS)));
            let ep = !1,
                e_ = (null == (r = n.messageReference) ? void 0 : r.type) === eA.Uvt.FORWARD;
            if (
                "" === E &&
                null == I &&
                null == P &&
                null == M &&
                null == k &&
                null == G &&
                !e_ &&
                (null == Q || 0 === Q.length) &&
                !es &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == en || !(en.length > 0)) return Promise.resolve();
                else ep = !0;
            let em = null != L ? eA.uaV.REPLY : eA.uaV.DEFAULT,
                eh = null != (o = n.nonce) ? o : (0, H.r)(),
                eb = eh,
                eO = (0, V.ZP)({
                    channelId: e,
                    content: E,
                    tts: S,
                    type: em,
                    messageReference: L,
                    allowedMentions: j,
                    flags: 0 !== ec ? ec : void 0,
                    nonce: eh,
                    poll: (0, z.x9)(M),
                    sharedCustomTheme: k,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, W.EL)(e, eO.id),
                    null != P && (eO.sticker_items = P.map((e) => ea.Z.getStickerById(e)).filter((e) => null != e)),
                    ez.receiveMessage(e, eO, !0, n)),
                !eG && null != b && b.length > 0)
            ) {
                eG = !0;
                let t = eE.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: r } = ez.validateMessage(b, t, e);
                ez.sendBotMessage(e, n, r);
            }
            let ev = {
                type: null != ei ? d.$V.SEND_ANNOUNCEMENT : d.$V.SEND,
                message: {
                    channelId: e,
                    content: E,
                    nonce: eh,
                    tts: S,
                    message_reference: L,
                    allowed_mentions: j,
                    flags: ec,
                    analyticsLocation: A,
                },
            };
            if (
                (null != t.components && (ev.message.components = t.components),
                null != ei &&
                    ((ev.message.create_thread = ei.createThread),
                    (ev.message.title = ei.threadName),
                    (ev.message.publish = null != (s = ei.publish) && s)),
                null != I)
            ) {
                let e,
                    t = null == I ? void 0 : I.activity.session_id;
                if (
                    null !=
                    (e =
                        I.type === eA.mFx.JOIN_REQUEST || I.type === eA.mFx.STREAM_REQUEST || null != t
                            ? t
                            : eu.default.getSessionId())
                ) {
                    let t = {
                            type: I.type,
                            session_id: e,
                            target_user_id: I.targetUserId,
                        },
                        { activity: n } = I;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (ev.message.application_id = n.application_id),
                        (ev.message.activity = t);
                }
            }
            if (
                (null != M && (ev.message.poll = M),
                null != k && (ev.message.shared_client_theme = k),
                null != P && (ev.message.sticker_ids = P),
                K.Z.isEnabled() && (ev.message.has_poggermode_enabled = !0),
                es && (ev.message.with_checkpoint = !0),
                null != G && (ev.message.content_inventory_entry = G),
                null != x && ((ev.message.confetti_potion = (0, J.vY)(x)), x.callback()),
                null != Q && Q.length > 0 && (ev.message.attachments = Q),
                null != el && (ev.message.message_id_from_notification_experiment = el),
                null != en && en.length > 0)
            )
                try {
                    let t = await (0, U.c)({
                        channelId: e,
                        nonce: eh,
                        items: en,
                        message: eO,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((h = t.uploader), ep && (null == r || 0 === r.length))) return;
                    if (null != r && ((ev.message.attachments = r.map((e, t) => (0, eT.B)(e, t))), (0, y.NS)())) {
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
                                ev.message.content = "".concat(ev.message.content).concat(r);
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
                        null == er || er(e, t, n, r);
                    return;
                }
            return new Promise((t, r) => {
                let i = Date.now(),
                    a = d.ZP.length,
                    o = Math.floor(10000 * Math.random());
                eU.info("Queueing message to be sent LogId:".concat(o)),
                    d.ZP.enqueue(
                        ev,
                        (s) => {
                            let c = Date.now() - i;
                            if (s.ok) {
                                B.Z.donateSentMessage(E, e),
                                    ez.receiveMessage(e, s.body, !0, {
                                        sendAnalytics: {
                                            duration: c,
                                            queueSize: a,
                                        },
                                        poll: M,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.Z.sendForward((0, Z.e5)(s.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                var e, t, r;
                                                eH({
                                                    referencedMessageId: null == (e = s.body) ? void 0 : e.id,
                                                    guildId: null == (t = s.body) ? void 0 : t.guild_id,
                                                    channelId: null == (r = s.body) ? void 0 : r.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                var r;
                                                ek.log(
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
                                let r = (0, J.ZC)(s.body);
                                null != r &&
                                    ((0, q.gA)($.D1),
                                    (0, ee.I)(
                                        {
                                            name: r.name,
                                            id: r.id,
                                        },
                                        void 0,
                                        !0,
                                        X.LL.MessageSent,
                                    ));
                                let i = eI.default.cast(e),
                                    u = D.Z.getRequest(i);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: r } = u;
                                    (0, w.pL)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: s.body.id,
                                        joinRequestStatus: r,
                                        joinRequestUserId: n,
                                    });
                                }
                                F.Z.recordMessageSendApiResponse(eh),
                                    l.Z.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eg.S.SendMessage,
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
                                            author: eE.default.getCurrentUser(),
                                        },
                                    }),
                                    eF({
                                        content: E,
                                        channelId: e,
                                        messageId: s.body.id,
                                        location: null != A ? A : "chat_input",
                                        inviteAnalyticsMetadata: N,
                                    }),
                                    eV(E, e, s.body.id, null != A ? A : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser),
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
                                ek.log("Failed to send message", {
                                    hasErr: s.hasErr,
                                    status: s.status,
                                    code: null == (u = s.body) ? void 0 : u.code,
                                    error: s.err,
                                });
                                let i = !1;
                                if (s.hasErr) "ABORTED" === s.err.code && (i = !0);
                                else if (s.status >= 400 && s.status < 500 && s.body)
                                    if (s.body.code === eA.evJ.SLOWMODE_RATE_LIMITED) {
                                        let t = s.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eg.S.SendMessage,
                                                cooldownMs: t * ey.Z.Millis.SECOND,
                                            });
                                    } else
                                        R.U8.has(s.body.code)
                                            ? l.Z.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: ev,
                                                  errorResponseBody: {
                                                      code: s.body.code,
                                                      message: s.body.message,
                                                  },
                                              })
                                            : s.body.code === eA.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.Z.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : s.body.code === eA.evJ.EXPLICIT_CONTENT
                                                ? (t = eR.xi.EXPLICIT_CONTENT)
                                                : null != M || e_ || null != G || ez.sendClydeError(e, s.body.code);
                                i
                                    ? ez.deleteMessage(e, eb, !0)
                                    : (null != h &&
                                          l.Z.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: h._file,
                                              messageId: eb,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      s.hasErr ||
                                          t !== eR.xi.EXPLICIT_CONTENT ||
                                          ez.sendExplicitMediaClydeError(
                                              e,
                                              null == (f = s.body) ? void 0 : f.attachments,
                                              T.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.Z.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: eb,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, Y.x)({
                                          failureCode: s.hasErr ? void 0 : s.status,
                                          errorMessage: s.hasErr ? s.err.message : void 0,
                                      }),
                                      d.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                          ek.log("Cancelling pending message", e.nonce),
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
            if ((0, a.yE)(t.flags, eA.iLy.IS_COMPONENTS_V2)) {
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
            await es.Z.unarchiveThreadIfNecessary(e);
            let a = eW(e, t),
                o = eY(e, t),
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
                        ? s.uv.announce(ew.intl.string(ew.t.Atp7FP))
                        : r
                          ? s.uv.announce(ew.intl.string(ew.t.Hym4ix))
                          : s.uv.announce(ew.intl.string(ew.t["0x1HBD"])),
                        ez.endEditMessage(e, n.hasErr ? void 0 : n),
                        ez.focusMessage({
                            channelId: e,
                            messageId: t,
                        });
                },
            );
        },
        async suppressEmbeds(e, t) {
            await es.Z.unarchiveThreadIfNecessary(e),
                o.tn.patch({
                    url: eA.ANM.MESSAGE(e, t),
                    body: { flags: eA.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await es.Z.unarchiveThreadIfNecessary(e),
                o.tn.patch({
                    url: eA.ANM.MESSAGE(e, t),
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
                        s.uv.announce(ew.intl.string(ew.t.RYMs7s));
                    });
                };
            n
                ? r()
                : (await es.Z.unarchiveThreadIfNecessary(e),
                  o.tn
                      .del({
                          url: eA.ANM.MESSAGE(e, t),
                          oldFormErrors: !0,
                          rejectWithError: !1,
                      })
                      .then(() => {
                          r();
                      }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                f.ZP.trackWithMetadata(eA.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: eA.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? ew.intl.formatToPlainString(ew.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : ew.intl.string(ew.t.z2gyNF)),
                    eC.Z.show({
                        title: ew.intl.string(ew.t.Vd1hs6),
                        body: e,
                        confirmText: ew.intl.string(ew.t.BddRzS),
                    });
            }
        },
        trackInvite: eB,
    },
    eq = ez;
