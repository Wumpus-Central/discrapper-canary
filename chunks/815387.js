n.d(t, { Z: () => eL }), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(904245),
    c = n(287734),
    u = n(872810),
    d = n(911969),
    p = n(376484),
    m = n(362604),
    f = n(479110),
    g = n(413189),
    _ = n(710845),
    h = n(387188),
    b = n(825829),
    E = n(623624),
    C = n(29887),
    v = n(533694),
    O = n(345114),
    y = n(924301),
    x = n(225890),
    j = n(434404),
    I = n(507435),
    S = n(686380),
    T = n(504733),
    P = n(563959),
    N = n(917318),
    A = n(703656),
    w = n(471253),
    Z = n(565799),
    R = n(590415),
    D = n(911560),
    L = n(488131),
    M = n(814820),
    k = n(314897),
    U = n(523746),
    F = n(592125),
    B = n(430824),
    G = n(496675),
    H = n(158776),
    V = n(944486),
    z = n(594174),
    W = n(979651),
    Y = n(585483),
    K = n(5192),
    X = n(960048),
    q = n(709054),
    J = n(937889),
    Q = n(15642),
    $ = n(260736),
    ee = n(930282),
    et = n(818570),
    en = n(942951),
    er = n(9423),
    ei = n(789267),
    el = n(262),
    ea = n(303135),
    eo = n(673052),
    es = n(385063),
    ec = n(253118),
    eu = n(54817),
    ed = n(502115),
    ep = n(27103),
    em = n(396252),
    ef = n(522860),
    eg = n(600397),
    e_ = n(73352),
    eh = n(377499),
    eb = n(857640),
    eE = n(614972),
    eC = n(701181),
    ev = n(29338),
    eO = n(461135),
    ey = n(296571),
    ex = n(587737),
    ej = n(482239),
    eI = n(328749),
    eS = n(4305),
    eT = n(910548),
    eP = n(981631),
    eN = n(70722),
    eA = n(388032);
function ew(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eZ(e) {
    let { message: t, channel: n, compact: a } = e,
        { author: o } = t,
        { guild_id: s } = n,
        c = t.getChannelId(),
        u = (0, l.e7)([B.Z], () => B.Z.getGuild(s), [s]),
        d = i.useCallback(() => {
            null != u &&
                (0, E.f)({
                    guildId: u.id,
                    location: {
                        section: eP.jXE.CHANNEL_TEXT_AREA,
                        object: eP.qAy.BOOST_ANNOUNCEMENT_UPSELL,
                    },
                });
        }, [u]),
        p = (0, en.l)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0,
        });
    return (0, r.jsx)(eT.ZP, {
        message: t,
        compact: a,
        guild: u,
        usernameHook: p,
        onClickMessage: d,
    });
}
function eR(e) {
    let { message: t, compact: n, channel: i } = e,
        l = (0, en.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eu.Z, {
        message: t,
        compact: n,
        usernameHook: l,
    });
}
let eD = Object.freeze({
        [eP.uaV.DEFAULT]: void 0,
        [eP.uaV.REPLY]: void 0,
        [eP.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eP.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eP.uaV.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = (0, l.e7)([z.default], () => z.default.getUser(t.mentions[0]), [t]),
                c = K.ZP.getName(null, o, s),
                u = (0, en.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id,
                }),
                d = (0, en.l)({
                    user: s,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return n.isThread()
                ? (0, r.jsx)(ex.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: u,
                      targetUsernameHook: d,
                  })
                : (0, r.jsx)(e_.Z, {
                      message: t,
                      compact: i,
                      otherUsername: c,
                      usernameHook: u,
                      otherUsernameHook: d,
                  });
        },
        [eP.uaV.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = (0, l.e7)([z.default], () => z.default.getUser(t.mentions[0]), [t]),
                c = (0, en.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id,
                }),
                u = (0, en.l)({
                    user: s,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return n.isThread()
                ? (0, r.jsx)(ej.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: c,
                      targetUsernameHook: u,
                  })
                : null != s && s.id !== a.id
                  ? (0, r.jsx)(eh.Z, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: c,
                        otherUser: s,
                        otherUsernameHook: u,
                    })
                  : (0, r.jsx)(eh.Z, {
                        message: t,
                        channel: n,
                        usernameHook: c,
                    });
        },
        [eP.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { id: o, author: s } = t,
                u = k.default.getId(),
                d = t.getChannelId(),
                p = (0, l.e7)([U.Z], () => U.Z.isCallActive(d, o), [d, o]),
                m = (0, l.e7)([W.Z], () => W.Z.getVoiceState(eP.ME, u)),
                f = !p && null != t.call && !t.call.participants.includes(u),
                g = p && (null == m || m.channelId !== d),
                _ = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
                h = (0, en.l)({
                    user: s,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(ei.Z, {
                compact: n,
                message: t,
                missed: f,
                joinable: g,
                usernameHook: h,
                onClickJoinCall: _,
            });
        },
        [eP.uaV.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(es.Z, {
                compact: n,
                message: t,
                usernameHook: o,
                isForumPost: i.isForumPost(),
            });
        },
        [eP.uaV.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(ea.Z, {
                compact: n,
                message: t,
                usernameHook: o,
            });
        },
        [eP.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = i.useCallback(() => {
                    if (V.Z.getChannelId() !== o) {
                        let e = F.Z.getChannel(o);
                        null != e && (0, A.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => Y.S.dispatch(eP.CkL.TOGGLE_CHANNEL_PINS), 0);
                }, [o]),
                c = (0, en.l)({
                    user: a,
                    channelId: o,
                    guildId: l.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(ec.Z, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : s,
            });
        },
        [eP.uaV.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eS.Z, {
                        message: t,
                        compact: n,
                        usernameHook: o,
                    }),
                    (0, r.jsx)(M.f, {
                        channel: i,
                        message: t,
                    }),
                ],
            });
        },
        [eP.uaV.GUILD_BOOST]: eZ,
        [eP.uaV.GUILD_BOOST_TIER_1]: eZ,
        [eP.uaV.GUILD_BOOST_TIER_2]: eZ,
        [eP.uaV.GUILD_BOOST_TIER_3]: eZ,
        [eP.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(el.Z, {
                message: t,
                compact: n,
                usernameHook: o,
            });
        },
        [eP.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                {
                    author: o,
                    author: { id: s },
                    messageReference: c,
                } = t,
                d = t.getChannelId(),
                p = (0, l.e7)([H.Z], () => H.Z.findActivity(s, (e) => e.type === eP.IIU.PLAYING), [s]),
                m = (0, l.e7)([F.Z], () => (null != c ? F.Z.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                g = (0, en.l)({
                    user: o,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id,
                }),
                _ = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, u.iV)({
                            streamType: eN.lo.GUILD,
                            ownerId: s,
                            channelId: m.id,
                            guildId: f,
                        });
                }, [s, m, f]);
            return null != c && null != m && null != c.guild_id
                ? (0, r.jsx)(ef.Z, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: p,
                      onJoinStream: _,
                      usernameHook: g,
                  })
                : null;
        },
        [eP.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                a = (0, l.e7)([F.Z], () => F.Z.getChannel(i), [i]),
                o = null != a ? a.getGuildId() : null;
            return (0, r.jsx)(ed.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != o && j.Z.open(o, eP.pNK.ACCESS, eP.KsC.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eP.uaV.GUILD_DISCOVERY_REQUALIFIED]: ed.xe,
        [eP.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ed.HL,
        [eP.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ed.Yc,
        [eP.uaV.THREAD_CREATED]: function (e) {
            let { message: t, channel: l, compact: s } = e,
                c = (0, en.l)({
                    user: t.author,
                    channelId: t.channel_id,
                    guildId: l.guild_id,
                    messageId: t.id,
                }),
                u = i.useCallback(
                    async (e) => {
                        var n;
                        let r = null == (n = t.messageReference) ? void 0 : n.channel_id;
                        if (null != r) {
                            await D.Z.loadThread(r);
                            let t = F.Z.getChannel(r);
                            null != t && (0, L.ok)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                d = i.useCallback(() => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("91315"), n.e("219")]).then(n.bind(n, 223901));
                        return (t) => (0, r.jsx)(e, ew({ channel: l }, t));
                    });
                }, [l]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let l = F.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                        null != l &&
                            (0, o.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e("90508"), n.e("11300")]).then(
                                    n.bind(n, 422200),
                                );
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = ew({}, t)),
                                        (i = i = { channel: l }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        n),
                                    );
                                };
                            });
                    },
                    [t],
                );
            return (0, r.jsx)(ey.Z, {
                message: t,
                compact: s,
                usernameHook: c,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: p,
            });
        },
        [eP.uaV.THREAD_STARTER_MESSAGE]: eI.Z,
        [eP.uaV.GUILD_INVITE_REMINDER]: void 0,
        [eP.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, b.nY)(t)
                ? (0, r.jsx)(er.Z, {
                      message: t,
                      compact: n,
                      channel: i,
                  })
                : null;
        },
        [eP.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eR,
        [eP.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eR,
        [eP.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(em.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l,
            });
        },
        [eP.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(ep.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l,
            });
        },
        [eP.uaV.ROLE_SUBSCRIPTION_PURCHASE]: O.Z,
        [eP.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: l } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(v.Z, {
                      message: n,
                      channel: i,
                      compact: l,
                  })
                : null;
        },
        [eP.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eP.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                }),
                o = (0, l.e7)([y.ZP], () => y.ZP.getActiveEventByChannel(n.id), [n.id]);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ev.Z, {
                        message: t,
                        compact: i,
                        usernameHook: a,
                    }),
                    null != o && o.name === t.content
                        ? (0, r.jsx)(x.Z, { code: "".concat(n.guild_id, "-").concat(o.id) })
                        : null,
                ],
            });
        },
        [eP.uaV.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(eb.Z, {
                message: t,
                compact: i,
                usernameHook: l,
            });
        },
        [eP.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(eC.Z, {
                message: t,
                compact: i,
                usernameHook: l,
            });
        },
        [eP.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: o, compact: c } = e,
                u = (0, en.l)({
                    user: i.author,
                    channelId: o.id,
                    guildId: o.guild_id,
                    messageId: i.id,
                }),
                d = (0, l.e7)([G.Z], () => G.Z.can(eP.Plq.MUTE_MEMBERS, o)),
                p = (0, l.e7)([Z.Z], () => Z.Z.getParticipant(o.id, i.author.id)),
                m =
                    new Date(q.default.extractTimestamp(i.id)).toISOString() ===
                    new Date(
                        null != (n = null == p || null == (t = p.voiceState) ? void 0 : t.requestToSpeakTimestamp)
                            ? n
                            : 0,
                    ).toISOString(),
                f = d && (null == p ? void 0 : p.rtsState) === R.xO.REQUESTED_TO_SPEAK && m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eE.Z, {
                        message: i,
                        compact: c,
                        usernameHook: u,
                    }),
                    f
                        ? (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, w.DT)(o, i.author.id, !1), s.Z.deleteMessage(o.id, i.id, !0);
                              },
                              text: eA.intl.string(eA.t.f0T7hI),
                              icon: a.Lrb,
                          })
                        : null,
                ],
            });
        },
        [eP.uaV.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(eO.Z, {
                message: t,
                compact: i,
                usernameHook: l,
            });
        },
        [eP.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: T.Z,
        [eP.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: P.P,
        [eP.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: P.e,
        [eP.uaV.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, r.jsx)(S.Z, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eP.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(m.Z, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eP.uaV.CUSTOM_GIFT]: void 0,
        [eP.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(p.Z, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eP.uaV.VOICE_HANGOUT_INVITE]: void 0,
        [eP.uaV.POLL_RESULT]: I.Z,
        [eP.uaV.CHANGELOG]: void 0,
        [eP.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)(et.Z, {
                message: t,
                channel: n,
            });
        },
        [eP.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(eo.Z, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eP.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                a = (0, l.e7)([z.default], () => z.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == a
                ? null
                : (0, r.jsx)(Q.Z, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: a,
                      channel: n,
                      giftIntentSecondaryAction: i.giftIntentSecondaryAction,
                  });
        },
        [eP.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(eg.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: i,
            });
        },
        [eP.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: C.Cn,
        [eP.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: C.Ue,
        [eP.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: C.R6,
        [eP.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)($.Z, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eP.uaV.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(h.iq, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: l,
            });
        },
        [eP.uaV.CHAT_WALLPAPER_SET]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(g.Z, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eP.uaV.CHAT_WALLPAPER_REMOVED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(f.Z, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eP.uaV.REPORT_TO_MOD_BAN_USER]: N.Z,
        [eP.uaV.REPORT_TO_MOD_KICK_USER]: N.Z,
        [eP.uaV.REPORT_TO_MOD_TIMEOUT_USER]: N.Z,
        [eP.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: N.Z,
        [eP.uaV.REPORT_TO_MOD_CLOSED_REPORT]: N.Z,
    }),
    eL = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: l } = e,
            { type: a } = t,
            o = eD[a];
        if (null == o) {
            var s;
            return (
                (s = Error("unknown message type ".concat(t.type))),
                X.Z.captureException(s),
                new _.Z("SystemMessage").error("", s),
                null
            );
        }
        return (0, r.jsx)(ee.ZP, {
            message: t,
            content: (0, J.ZP)(t).content,
            compact: null != i && i,
            children: (0, r.jsx)(o, {
                message: t,
                channel: n,
                compact: i,
                disableInteraction: l,
            }),
        });
    });
