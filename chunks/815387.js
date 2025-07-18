(n.d(t, { Z: () => ek }), n(415506));
var r = n(255367),
    i = n(73800),
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
    h = n(710845),
    _ = n(387188),
    b = n(825829),
    E = n(623624),
    x = n(29887),
    C = n(533694),
    v = n(345114),
    y = n(924301),
    O = n(225890),
    j = n(434404),
    I = n(507435),
    S = n(504733),
    T = n(563959),
    N = n(917318),
    P = n(703656),
    A = n(471253),
    w = n(565799),
    Z = n(590415),
    R = n(911560),
    k = n(488131),
    L = n(814820),
    D = n(314897),
    M = n(523746),
    U = n(592125),
    F = n(430824),
    B = n(496675),
    G = n(158776),
    H = n(944486),
    V = n(594174),
    z = n(979651),
    W = n(585483),
    K = n(5192),
    Y = n(960048),
    X = n(709054),
    q = n(937889),
    Q = n(15642),
    J = n(260736),
    $ = n(930282),
    ee = n(818570),
    et = n(942951),
    en = n(9423),
    er = n(789267),
    ei = n(262),
    el = n(303135),
    ea = n(673052),
    eo = n(385063),
    es = n(253118),
    ec = n(54817),
    eu = n(502115),
    ed = n(27103),
    ep = n(396252),
    em = n(522860),
    ef = n(600397),
    eg = n(73352),
    eh = n(377499),
    e_ = n(857640),
    eb = n(614972),
    eE = n(701181),
    ex = n(29338),
    eC = n(461135),
    ev = n(296571),
    ey = n(587737),
    eO = n(482239),
    ej = n(328749),
    eI = n(4305),
    eS = n(910548),
    eT = n(981631),
    eN = n(70722),
    eP = n(388032);
function eA(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function ew(e) {
    let { message: t, channel: n, compact: a } = e,
        { author: o } = t,
        { guild_id: s } = n,
        c = t.getChannelId(),
        u = (0, l.e7)([F.Z], () => F.Z.getGuild(s), [s]),
        d = i.useCallback(() => {
            null != u &&
                (0, E.f)({
                    guildId: u.id,
                    location: {
                        section: eT.jXE.CHANNEL_TEXT_AREA,
                        object: eT.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        p = (0, et.l)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, r.jsx)(eS.ZP, {
        message: t,
        compact: a,
        guild: u,
        usernameHook: p,
        onClickMessage: d
    });
}
function eZ(e) {
    let { message: t, compact: n, channel: i } = e,
        l = (0, et.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(ec.Z, {
        message: t,
        compact: n,
        usernameHook: l
    });
}
let eR = Object.freeze({
        [eT.uaV.DEFAULT]: void 0,
        [eT.uaV.REPLY]: void 0,
        [eT.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eT.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eT.uaV.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = (0, l.e7)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                c = K.ZP.getName(null, o, s),
                u = (0, et.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                d = (0, et.l)({
                    user: s,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, r.jsx)(ey.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: u,
                      targetUsernameHook: d
                  })
                : (0, r.jsx)(eg.Z, {
                      message: t,
                      compact: i,
                      otherUsername: c,
                      usernameHook: u,
                      otherUsernameHook: d
                  });
        },
        [eT.uaV.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = (0, l.e7)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                c = (0, et.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                u = (0, et.l)({
                    user: s,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, r.jsx)(eO.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: c,
                      targetUsernameHook: u
                  })
                : null != s && s.id !== a.id
                  ? (0, r.jsx)(eh.Z, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: c,
                        otherUser: s,
                        otherUsernameHook: u
                    })
                  : (0, r.jsx)(eh.Z, {
                        message: t,
                        channel: n,
                        usernameHook: c
                    });
        },
        [eT.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { id: o, author: s } = t,
                u = D.default.getId(),
                d = t.getChannelId(),
                p = (0, l.e7)([M.Z], () => M.Z.isCallActive(d, o), [d, o]),
                m = (0, l.e7)([z.Z], () => z.Z.getVoiceState(eT.ME, u)),
                f = !p && null != t.call && !t.call.participants.includes(u),
                g = p && (null == m || m.channelId !== d),
                h = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
                _ = (0, et.l)({
                    user: s,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(er.Z, {
                compact: n,
                message: t,
                missed: f,
                joinable: g,
                usernameHook: _,
                onClickJoinCall: h
            });
        },
        [eT.uaV.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, et.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eo.Z, {
                compact: n,
                message: t,
                usernameHook: o,
                isForumPost: i.isForumPost()
            });
        },
        [eT.uaV.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, et.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(el.Z, {
                compact: n,
                message: t,
                usernameHook: o
            });
        },
        [eT.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = i.useCallback(() => {
                    if (H.Z.getChannelId() !== o) {
                        let e = U.Z.getChannel(o);
                        null != e && (0, P.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => W.S.dispatch(eT.CkL.TOGGLE_CHANNEL_PINS), 0);
                }, [o]),
                c = (0, et.l)({
                    user: a,
                    channelId: o,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(es.Z, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : s
            });
        },
        [eT.uaV.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, et.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eI.Z, {
                        message: t,
                        compact: n,
                        usernameHook: o
                    }),
                    (0, r.jsx)(L.f, {
                        channel: i,
                        message: t
                    })
                ]
            });
        },
        [eT.uaV.GUILD_BOOST]: ew,
        [eT.uaV.GUILD_BOOST_TIER_1]: ew,
        [eT.uaV.GUILD_BOOST_TIER_2]: ew,
        [eT.uaV.GUILD_BOOST_TIER_3]: ew,
        [eT.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, et.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ei.Z, {
                message: t,
                compact: n,
                usernameHook: o
            });
        },
        [eT.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                {
                    author: o,
                    author: { id: s },
                    messageReference: c
                } = t,
                d = t.getChannelId(),
                p = (0, l.e7)([G.Z], () => G.Z.findActivity(s, (e) => e.type === eT.IIU.PLAYING), [s]),
                m = (0, l.e7)([U.Z], () => (null != c ? U.Z.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                g = (0, et.l)({
                    user: o,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id
                }),
                h = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, u.iV)({
                            streamType: eN.lo.GUILD,
                            ownerId: s,
                            channelId: m.id,
                            guildId: f
                        });
                }, [s, m, f]);
            return null != c && null != m && null != c.guild_id
                ? (0, r.jsx)(em.Z, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: p,
                      onJoinStream: h,
                      usernameHook: g
                  })
                : null;
        },
        [eT.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                a = (0, l.e7)([U.Z], () => U.Z.getChannel(i), [i]),
                o = null != a ? a.getGuildId() : null;
            return (0, r.jsx)(eu.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != o && j.Z.open(o, eT.pNK.ACCESS, eT.KsC.ACCESS_DISCOVERABLE);
                }
            });
        },
        [eT.uaV.GUILD_DISCOVERY_REQUALIFIED]: eu.xe,
        [eT.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eu.HL,
        [eT.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eu.Yc,
        [eT.uaV.THREAD_CREATED]: function (e) {
            let { message: t, channel: l, compact: s } = e,
                c = (0, et.l)({
                    user: t.author,
                    channelId: t.channel_id,
                    guildId: l.guild_id,
                    messageId: t.id
                }),
                u = i.useCallback(
                    async (e) => {
                        var n;
                        let r = null == (n = t.messageReference) ? void 0 : n.channel_id;
                        if (null != r) {
                            await R.Z.loadThread(r);
                            let t = U.Z.getChannel(r);
                            null != t && (0, k.ok)(t, e.shiftKey);
                        }
                    },
                    [t]
                ),
                d = i.useCallback(() => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('91315'), n.e('59505')]).then(n.bind(n, 223901));
                        return (t) => (0, r.jsx)(e, eA({ channel: l }, t));
                    });
                }, [l]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let l = U.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                        null != l &&
                            (0, o.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('90508'), n.e('78650')]).then(n.bind(n, 422200));
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = eA({}, t)),
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
                                        n)
                                    );
                                };
                            });
                    },
                    [t]
                );
            return (0, r.jsx)(ev.Z, {
                message: t,
                compact: s,
                usernameHook: c,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: p
            });
        },
        [eT.uaV.THREAD_STARTER_MESSAGE]: ej.Z,
        [eT.uaV.GUILD_INVITE_REMINDER]: void 0,
        [eT.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, b.nY)(t)
                ? (0, r.jsx)(en.Z, {
                      message: t,
                      compact: n,
                      channel: i
                  })
                : null;
        },
        [eT.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eZ,
        [eT.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eZ,
        [eT.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, et.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ep.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l
            });
        },
        [eT.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, et.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ed.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l
            });
        },
        [eT.uaV.ROLE_SUBSCRIPTION_PURCHASE]: v.Z,
        [eT.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: l } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(C.Z, {
                      message: n,
                      channel: i,
                      compact: l
                  })
                : null;
        },
        [eT.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eT.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                o = (0, l.e7)([y.ZP], () => y.ZP.getActiveEventByChannel(n.id), [n.id]);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ex.Z, {
                        message: t,
                        compact: i,
                        usernameHook: a
                    }),
                    null != o && o.name === t.content ? (0, r.jsx)(O.Z, { code: ''.concat(n.guild_id, '-').concat(o.id) }) : null
                ]
            });
        },
        [eT.uaV.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(e_.Z, {
                message: t,
                compact: i,
                usernameHook: l
            });
        },
        [eT.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eE.Z, {
                message: t,
                compact: i,
                usernameHook: l
            });
        },
        [eT.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: o, compact: c } = e,
                u = (0, et.l)({
                    user: i.author,
                    channelId: o.id,
                    guildId: o.guild_id,
                    messageId: i.id
                }),
                d = (0, l.e7)([B.Z], () => B.Z.can(eT.Plq.MUTE_MEMBERS, o)),
                p = (0, l.e7)([w.Z], () => w.Z.getParticipant(o.id, i.author.id)),
                m = new Date(X.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == p || null == (t = p.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0).toISOString(),
                f = d && (null == p ? void 0 : p.rtsState) === Z.xO.REQUESTED_TO_SPEAK && m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eb.Z, {
                        message: i,
                        compact: c,
                        usernameHook: u
                    }),
                    f
                        ? (0, r.jsx)(a.zxk, {
                              variant: 'secondary',
                              onClick: () => {
                                  ((0, A.DT)(o, i.author.id, !1), s.Z.deleteMessage(o.id, i.id, !0));
                              },
                              text: eP.intl.string(eP.t.f0T7hI),
                              icon: a.Lrb
                          })
                        : null
                ]
            });
        },
        [eT.uaV.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eC.Z, {
                message: t,
                compact: i,
                usernameHook: l
            });
        },
        [eT.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
        [eT.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: T.P,
        [eT.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: T.e,
        [eT.uaV.PREMIUM_REFERRAL]: void 0,
        [eT.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(m.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.CUSTOM_GIFT]: void 0,
        [eT.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(p.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.VOICE_HANGOUT_INVITE]: void 0,
        [eT.uaV.POLL_RESULT]: I.Z,
        [eT.uaV.CHANGELOG]: void 0,
        [eT.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)(ee.Z, {
                message: t,
                channel: n
            });
        },
        [eT.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ea.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                a = (0, l.e7)([V.default], () => V.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == a
                ? null
                : (0, r.jsx)(Q.Z, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: a,
                      channel: n,
                      giftIntentSecondaryAction: i.giftIntentSecondaryAction
                  });
        },
        [eT.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ef.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: i
            });
        },
        [eT.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: x.Cn,
        [eT.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: x.Ue,
        [eT.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: x.R6,
        [eT.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(J.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(_.iq, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: l
            });
        },
        [eT.uaV.CHAT_WALLPAPER_SET]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(g.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.CHAT_WALLPAPER_REMOVED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(f.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.REPORT_TO_MOD_BAN_USER]: N.Z,
        [eT.uaV.REPORT_TO_MOD_KICK_USER]: N.Z,
        [eT.uaV.REPORT_TO_MOD_TIMEOUT_USER]: N.Z,
        [eT.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: N.Z,
        [eT.uaV.REPORT_TO_MOD_CLOSED_REPORT]: N.Z
    }),
    ek = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: l } = e,
            { type: a } = t,
            o = eR[a];
        if (null == o) {
            var s;
            return ((s = Error('unknown message type '.concat(t.type))), Y.Z.captureException(s), new h.Z('SystemMessage').error('', s), null);
        }
        return (0, r.jsx)($.ZP, {
            message: t,
            content: (0, q.ZP)(t).content,
            compact: null != i && i,
            children: (0, r.jsx)(o, {
                message: t,
                channel: n,
                compact: i,
                disableInteraction: l
            })
        });
    });
