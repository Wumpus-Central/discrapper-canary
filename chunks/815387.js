(n.d(t, { Z: () => eM }), n(415506));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(239091),
    c = n(904245),
    u = n(287734),
    d = n(872810),
    p = n(911969),
    m = n(376484),
    f = n(362604),
    _ = n(479110),
    g = n(413189),
    h = n(710845),
    b = n(387188),
    E = n(825829),
    y = n(623624),
    x = n(29887),
    C = n(533694),
    v = n(345114),
    O = n(924301),
    j = n(225890),
    I = n(434404),
    S = n(507435),
    T = n(504733),
    N = n(563959),
    P = n(917318),
    A = n(703656),
    w = n(471253),
    Z = n(565799),
    R = n(590415),
    L = n(911560),
    D = n(488131),
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
    K = n(585483),
    Y = n(5192),
    X = n(960048),
    q = n(709054),
    Q = n(937889),
    J = n(15642),
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
    e_ = n(600397),
    eg = n(73352),
    eh = n(377499),
    eb = n(857640),
    eE = n(614972),
    ey = n(701181),
    ex = n(29338),
    eC = n(461135),
    ev = n(296571),
    eO = n(587737),
    ej = n(482239),
    eI = n(328749),
    eS = n(4305),
    eT = n(910548),
    eN = n(981631),
    eP = n(70722),
    eA = n(388032),
    ew = n(40450);
function eZ(e) {
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
function eR(e) {
    let { message: t, channel: n, compact: a } = e,
        { author: o } = t,
        { guild_id: s } = n,
        c = t.getChannelId(),
        u = (0, l.e7)([B.Z], () => B.Z.getGuild(s), [s]),
        d = i.useCallback(() => {
            null != u &&
                (0, y.f)({
                    guildId: u.id,
                    location: {
                        section: eN.jXE.CHANNEL_TEXT_AREA,
                        object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        p = (0, en.l)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, r.jsx)(eT.ZP, {
        message: t,
        compact: a,
        guild: u,
        usernameHook: p,
        onClickMessage: d
    });
}
function eL(e) {
    let { message: t, compact: n, channel: i } = e,
        l = (0, en.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(eu.Z, {
        message: t,
        compact: n,
        usernameHook: l
    });
}
let eD = Object.freeze({
        [eN.uaV.DEFAULT]: void 0,
        [eN.uaV.REPLY]: void 0,
        [eN.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eN.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eN.uaV.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = (0, l.e7)([z.default], () => z.default.getUser(t.mentions[0]), [t]),
                c = Y.ZP.getName(null, o, s),
                u = (0, en.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                d = (0, en.l)({
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
        [eN.uaV.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = (0, l.e7)([z.default], () => z.default.getUser(t.mentions[0]), [t]),
                c = (0, en.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                u = (0, en.l)({
                    user: s,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, r.jsx)(ej.Z, {
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
        [eN.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { id: o, author: s } = t,
                c = k.default.getId(),
                d = t.getChannelId(),
                p = (0, l.e7)([U.Z], () => U.Z.isCallActive(d, o), [d, o]),
                m = (0, l.e7)([W.Z], () => W.Z.getVoiceState(eN.ME, c)),
                f = !p && null != t.call && !t.call.participants.includes(c),
                _ = p && (null == m || m.channelId !== d),
                g = i.useCallback(() => u.default.selectVoiceChannel(d), [d]),
                h = (0, en.l)({
                    user: s,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ei.Z, {
                compact: n,
                message: t,
                missed: f,
                joinable: _,
                usernameHook: h,
                onClickJoinCall: g
            });
        },
        [eN.uaV.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(es.Z, {
                compact: n,
                message: t,
                usernameHook: o,
                isForumPost: i.isForumPost()
            });
        },
        [eN.uaV.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ea.Z, {
                compact: n,
                message: t,
                usernameHook: o
            });
        },
        [eN.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = i.useCallback(() => {
                    if (V.Z.getChannelId() !== o) {
                        let e = F.Z.getChannel(o);
                        null != e && (0, A.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => K.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0);
                }, [o]),
                c = (0, en.l)({
                    user: a,
                    channelId: o,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ec.Z, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : s
            });
        },
        [eN.uaV.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eS.Z, {
                        message: t,
                        compact: n,
                        usernameHook: o
                    }),
                    (0, r.jsx)(M.f, {
                        channel: i,
                        message: t
                    })
                ]
            });
        },
        [eN.uaV.GUILD_BOOST]: eR,
        [eN.uaV.GUILD_BOOST_TIER_1]: eR,
        [eN.uaV.GUILD_BOOST_TIER_2]: eR,
        [eN.uaV.GUILD_BOOST_TIER_3]: eR,
        [eN.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, en.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(el.Z, {
                message: t,
                compact: n,
                usernameHook: o
            });
        },
        [eN.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                {
                    author: o,
                    author: { id: s },
                    messageReference: c
                } = t,
                u = t.getChannelId(),
                p = (0, l.e7)([H.Z], () => H.Z.findActivity(s, (e) => e.type === eN.IIU.PLAYING), [s]),
                m = (0, l.e7)([F.Z], () => (null != c ? F.Z.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                _ = (0, en.l)({
                    user: o,
                    channelId: u,
                    guildId: a.guild_id,
                    messageId: t.id
                }),
                g = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, d.iV)({
                            streamType: eP.lo.GUILD,
                            ownerId: s,
                            channelId: m.id,
                            guildId: f
                        });
                }, [s, m, f]);
            return null != c && null != m && null != c.guild_id
                ? (0, r.jsx)(ef.Z, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: p,
                      onJoinStream: g,
                      usernameHook: _
                  })
                : null;
        },
        [eN.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                a = (0, l.e7)([F.Z], () => F.Z.getChannel(i), [i]),
                o = null != a ? a.getGuildId() : null;
            return (0, r.jsx)(ed.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != o && I.Z.open(o, eN.pNK.ACCESS, eN.KsC.ACCESS_DISCOVERABLE);
                }
            });
        },
        [eN.uaV.GUILD_DISCOVERY_REQUALIFIED]: ed.xe,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ed.HL,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ed.Yc,
        [eN.uaV.THREAD_CREATED]: function (e) {
            let { message: t, channel: l, compact: a } = e,
                c = (0, en.l)({
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
                            await L.Z.loadThread(r);
                            let t = F.Z.getChannel(r);
                            null != t && (0, D.ok)(t, e.shiftKey);
                        }
                    },
                    [t]
                ),
                d = i.useCallback(() => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('91315'), n.e('59505')]).then(n.bind(n, 223901));
                        return (t) => (0, r.jsx)(e, eZ({ channel: l }, t));
                    });
                }, [l]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let l = F.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                        null != l &&
                            (0, s.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('90508'), n.e('11300')]).then(n.bind(n, 422200));
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = eZ({}, t)),
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
                compact: a,
                usernameHook: c,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: p
            });
        },
        [eN.uaV.THREAD_STARTER_MESSAGE]: eI.Z,
        [eN.uaV.GUILD_INVITE_REMINDER]: void 0,
        [eN.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, E.nY)(t)
                ? (0, r.jsx)(er.Z, {
                      message: t,
                      compact: n,
                      channel: i
                  })
                : null;
        },
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eL,
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eL,
        [eN.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(em.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l
            });
        },
        [eN.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, en.l)({
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
        [eN.uaV.ROLE_SUBSCRIPTION_PURCHASE]: v.Z,
        [eN.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: l } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === p.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(C.Z, {
                      message: n,
                      channel: i,
                      compact: l
                  })
                : null;
        },
        [eN.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eN.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                o = (0, l.e7)([O.ZP], () => O.ZP.getActiveEventByChannel(n.id), [n.id]);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ex.Z, {
                        message: t,
                        compact: i,
                        usernameHook: a
                    }),
                    null != o && o.name === t.content ? (0, r.jsx)(j.Z, { code: ''.concat(n.guild_id, '-').concat(o.id) }) : null
                ]
            });
        },
        [eN.uaV.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eb.Z, {
                message: t,
                compact: i,
                usernameHook: l
            });
        },
        [eN.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ey.Z, {
                message: t,
                compact: i,
                usernameHook: l
            });
        },
        [eN.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: s, compact: u } = e,
                d = (0, en.l)({
                    user: i.author,
                    channelId: s.id,
                    guildId: s.guild_id,
                    messageId: i.id
                }),
                p = (0, l.e7)([G.Z], () => G.Z.can(eN.Plq.MUTE_MEMBERS, s)),
                m = (0, l.e7)([Z.Z], () => Z.Z.getParticipant(s.id, i.author.id)),
                f = new Date(q.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == m || null == (t = m.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0).toISOString(),
                _ = p && (null == m ? void 0 : m.rtsState) === R.xO.REQUESTED_TO_SPEAK && f;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eE.Z, {
                        message: i,
                        compact: u,
                        usernameHook: d
                    }),
                    _
                        ? (0, r.jsxs)(a.zx, {
                              wrapperClassName: ew.inviteToSpeakButtonWrapper,
                              innerClassName: ew.inviteToSpeakButtonInner,
                              look: a.zx.Looks.FILLED,
                              color: a.zx.Colors.PRIMARY,
                              onClick: () => {
                                  ((0, w.DT)(s, i.author.id, !1), c.Z.deleteMessage(s.id, i.id, !0));
                              },
                              children: [
                                  (0, r.jsx)(o.Lrb, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      height: 20,
                                      width: 20
                                  }),
                                  eA.intl.string(eA.t.f0T7hI)
                              ]
                          })
                        : null
                ]
            });
        },
        [eN.uaV.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
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
        [eN.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: T.Z,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: N.P,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: N.e,
        [eN.uaV.PREMIUM_REFERRAL]: void 0,
        [eN.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(f.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.CUSTOM_GIFT]: void 0,
        [eN.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(m.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.VOICE_HANGOUT_INVITE]: void 0,
        [eN.uaV.POLL_RESULT]: S.Z,
        [eN.uaV.CHANGELOG]: void 0,
        [eN.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)(et.Z, {
                message: t,
                channel: n
            });
        },
        [eN.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(eo.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                a = (0, l.e7)([z.default], () => z.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == a
                ? null
                : (0, r.jsx)(J.Z, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: a,
                      channel: n,
                      giftIntentSecondaryAction: i.giftIntentSecondaryAction
                  });
        },
        [eN.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(e_.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: i
            });
        },
        [eN.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: x.Cn,
        [eN.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: x.Ue,
        [eN.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: x.R6,
        [eN.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)($.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, en.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(b.i, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: l
            });
        },
        [eN.uaV.CHAT_WALLPAPER_SET]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(g.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.CHAT_WALLPAPER_REMOVED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(_.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.REPORT_TO_MOD_BAN_USER]: P.Z,
        [eN.uaV.REPORT_TO_MOD_KICK_USER]: P.Z,
        [eN.uaV.REPORT_TO_MOD_TIMEOUT_USER]: P.Z,
        [eN.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: P.Z,
        [eN.uaV.REPORT_TO_MOD_CLOSED_REPORT]: P.Z
    }),
    eM = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: l } = e,
            { type: a } = t,
            o = eD[a];
        if (null == o) {
            var s;
            return ((s = Error('unknown message type '.concat(t.type))), X.Z.captureException(s), new h.Z('SystemMessage').error('', s), null);
        }
        return (0, r.jsx)(ee.ZP, {
            message: t,
            content: (0, Q.ZP)(t).content,
            compact: null != i && i,
            children: (0, r.jsx)(o, {
                message: t,
                channel: n,
                compact: i,
                disableInteraction: l
            })
        });
    });
