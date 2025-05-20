n.d(t, { Z: () => eD }), n(415506);
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
    h = n(413189),
    g = n(710845),
    _ = n(825829),
    b = n(623624),
    E = n(29887),
    x = n(533694),
    y = n(345114),
    v = n(924301),
    O = n(225890),
    j = n(434404),
    C = n(507435),
    S = n(504733),
    I = n(563959),
    N = n(917318),
    T = n(703656),
    P = n(471253),
    A = n(565799),
    w = n(590415),
    Z = n(911560),
    R = n(488131),
    k = n(814820),
    D = n(314897),
    L = n(523746),
    M = n(592125),
    U = n(430824),
    F = n(496675),
    B = n(158776),
    G = n(944486),
    H = n(594174),
    V = n(979651),
    z = n(585483),
    W = n(5192),
    K = n(960048),
    Y = n(709054),
    X = n(937889),
    q = n(15642),
    Q = n(260736),
    J = n(930282),
    $ = n(818570),
    ee = n(942951),
    et = n(9423),
    en = n(789267),
    er = n(262),
    ei = n(303135),
    el = n(673052),
    ea = n(385063),
    eo = n(253118),
    es = n(54817),
    ec = n(502115),
    eu = n(27103),
    ed = n(396252),
    ep = n(522860),
    em = n(600397),
    ef = n(582298),
    eh = n(73352),
    eg = n(507962),
    e_ = n(857640),
    eb = n(614972),
    eE = n(701181),
    ex = n(29338),
    ey = n(461135),
    ev = n(296571),
    eO = n(587737),
    ej = n(482239),
    eC = n(328749),
    eS = n(4305),
    eI = n(910548),
    eN = n(981631),
    eT = n(70722),
    eP = n(388032),
    eA = n(40450);
function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
        u = (0, l.e7)([U.Z], () => U.Z.getGuild(s), [s]),
        d = i.useCallback(() => {
            null != u &&
                (0, b.f)({
                    guildId: u.id,
                    location: {
                        section: eN.jXE.CHANNEL_TEXT_AREA,
                        object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        p = (0, ee.l)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, r.jsx)(eI.ZP, {
        message: t,
        compact: a,
        guild: u,
        usernameHook: p,
        onClickMessage: d
    });
}
function eR(e) {
    let { message: t, compact: n, channel: i } = e,
        l = (0, ee.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(es.Z, {
        message: t,
        compact: n,
        usernameHook: l
    });
}
let ek = Object.freeze({
        [eN.uaV.DEFAULT]: void 0,
        [eN.uaV.REPLY]: void 0,
        [eN.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eN.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eN.uaV.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = (0, l.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
                c = W.ZP.getName(null, o, s),
                u = (0, ee.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                d = (0, ee.l)({
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
                : (0, r.jsx)(eh.Z, {
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
                s = (0, l.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
                c = (0, ee.l)({
                    user: a,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                u = (0, ee.l)({
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
                  ? (0, r.jsx)(eg.Z, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: c,
                        otherUser: s,
                        otherUsernameHook: u
                    })
                  : (0, r.jsx)(eg.Z, {
                        message: t,
                        channel: n,
                        usernameHook: c
                    });
        },
        [eN.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { id: o, author: s } = t,
                u = D.default.getId(),
                d = t.getChannelId(),
                p = (0, l.e7)([L.Z], () => L.Z.isCallActive(d, o), [d, o]),
                m = (0, l.e7)([V.Z], () => V.Z.getVoiceState(eN.ME, u)),
                f = !p && null != t.call && !t.call.participants.includes(u),
                h = p && (null == m || m.channelId !== d),
                g = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
                _ = (0, ee.l)({
                    user: s,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(en.Z, {
                compact: n,
                message: t,
                missed: f,
                joinable: h,
                usernameHook: _,
                onClickJoinCall: g
            });
        },
        [eN.uaV.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, ee.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ea.Z, {
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
                o = (0, ee.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ei.Z, {
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
                    if (G.Z.getChannelId() !== o) {
                        let e = M.Z.getChannel(o);
                        null != e && (0, T.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => z.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0);
                }, [o]),
                c = (0, ee.l)({
                    user: a,
                    channelId: o,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eo.Z, {
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
                o = (0, ee.l)({
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
                    (0, r.jsx)(k.f, {
                        channel: i,
                        message: t
                    })
                ]
            });
        },
        [eN.uaV.GUILD_BOOST]: eZ,
        [eN.uaV.GUILD_BOOST_TIER_1]: eZ,
        [eN.uaV.GUILD_BOOST_TIER_2]: eZ,
        [eN.uaV.GUILD_BOOST_TIER_3]: eZ,
        [eN.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                o = (0, ee.l)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(er.Z, {
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
                d = t.getChannelId(),
                p = (0, l.e7)([B.Z], () => B.Z.findActivity(s, (e) => e.type === eN.IIU.PLAYING), [s]),
                m = (0, l.e7)([M.Z], () => (null != c ? M.Z.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                h = (0, ee.l)({
                    user: o,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id
                }),
                g = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, u.iV)({
                            streamType: eT.lo.GUILD,
                            ownerId: s,
                            channelId: m.id,
                            guildId: f
                        });
                }, [s, m, f]);
            return null != c && null != m && null != c.guild_id
                ? (0, r.jsx)(ep.Z, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: p,
                      onJoinStream: g,
                      usernameHook: h
                  })
                : null;
        },
        [eN.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                a = (0, l.e7)([M.Z], () => M.Z.getChannel(i), [i]),
                o = null != a ? a.getGuildId() : null;
            return (0, r.jsx)(ec.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != o && j.Z.open(o, eN.pNK.ACCESS, eN.KsC.ACCESS_DISCOVERABLE);
                }
            });
        },
        [eN.uaV.GUILD_DISCOVERY_REQUALIFIED]: ec.xe,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ec.HL,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ec.Yc,
        [eN.uaV.THREAD_CREATED]: function (e) {
            let { message: t, channel: l, compact: s } = e,
                c = (0, ee.l)({
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
                            await Z.Z.loadThread(r);
                            let t = M.Z.getChannel(r);
                            null != t && (0, R.ok)(t, e.shiftKey);
                        }
                    },
                    [t]
                ),
                d = i.useCallback(() => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('91315'), n.e('59505')]).then(n.bind(n, 223901));
                        return (t) => (0, r.jsx)(e, ew({ channel: l }, t));
                    });
                }, [l]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let l = M.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                        null != l &&
                            (0, o.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('22356'), n.e('48334')]).then(n.bind(n, 422200));
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
        [eN.uaV.THREAD_STARTER_MESSAGE]: eC.Z,
        [eN.uaV.GUILD_INVITE_REMINDER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, l.e7)([H.default], () => H.default.getCurrentUser()),
                o = (0, l.e7)([U.Z], () => {
                    var e, t;
                    return null != (t = null == (e = U.Z.getGuild(n.getGuildId())) ? void 0 : e.isOwner(a)) && t;
                });
            return (0, r.jsx)(ef.Z, {
                message: t,
                compact: i,
                isOwner: o,
                channel: n
            });
        },
        [eN.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, _.nY)(t)
                ? (0, r.jsx)(et.Z, {
                      message: t,
                      compact: n,
                      channel: i
                  })
                : null;
        },
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eR,
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eR,
        [eN.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, ee.l)({
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
        [eN.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, ee.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eu.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l
            });
        },
        [eN.uaV.ROLE_SUBSCRIPTION_PURCHASE]: y.Z,
        [eN.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: l } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(x.Z, {
                      message: n,
                      channel: i,
                      compact: l
                  })
                : null;
        },
        [eN.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eN.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, ee.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                o = (0, l.e7)([v.ZP], () => v.ZP.getActiveEventByChannel(n.id), [n.id]);
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
        [eN.uaV.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, ee.l)({
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
        [eN.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, ee.l)({
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
        [eN.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: o, compact: c } = e,
                u = (0, ee.l)({
                    user: i.author,
                    channelId: o.id,
                    guildId: o.guild_id,
                    messageId: i.id
                }),
                d = (0, l.e7)([F.Z], () => F.Z.can(eN.Plq.MUTE_MEMBERS, o)),
                p = (0, l.e7)([A.Z], () => A.Z.getParticipant(o.id, i.author.id)),
                m = new Date(Y.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == p || null == (t = p.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0).toISOString(),
                f = d && (null == p ? void 0 : p.rtsState) === w.xO.REQUESTED_TO_SPEAK && m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eb.Z, {
                        message: i,
                        compact: c,
                        usernameHook: u
                    }),
                    f
                        ? (0, r.jsxs)(a.zxk, {
                              wrapperClassName: eA.inviteToSpeakButtonWrapper,
                              innerClassName: eA.inviteToSpeakButtonInner,
                              look: a.zxk.Looks.FILLED,
                              color: a.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  (0, P.DT)(o, i.author.id, !1), s.Z.deleteMessage(o.id, i.id, !0);
                              },
                              children: [
                                  (0, r.jsx)(a.Lrb, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      height: 20,
                                      width: 20
                                  }),
                                  eP.intl.string(eP.t.f0T7hI)
                              ]
                          })
                        : null
                ]
            });
        },
        [eN.uaV.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, ee.l)({
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
        [eN.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: I.P,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: I.e,
        [eN.uaV.PREMIUM_REFERRAL]: void 0,
        [eN.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(m.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.CUSTOM_GIFT]: void 0,
        [eN.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(p.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.VOICE_HANGOUT_INVITE]: void 0,
        [eN.uaV.POLL_RESULT]: C.Z,
        [eN.uaV.CHANGELOG]: void 0,
        [eN.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)($.Z, {
                message: t,
                channel: n
            });
        },
        [eN.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(el.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                a = (0, l.e7)([H.default], () => H.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == a
                ? null
                : (0, r.jsx)(q.Z, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: a,
                      channel: n,
                      giftIntentSecondaryAction: i.giftIntentSecondaryAction
                  });
        },
        [eN.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(em.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: i
            });
        },
        [eN.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: E.Cn,
        [eN.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: E.Ue,
        [eN.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: E.R6,
        [eN.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(Q.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.CHAT_WALLPAPER_SET]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(h.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.CHAT_WALLPAPER_REMOVED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(f.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.REPORT_TO_MOD_BAN_USER]: N.Z,
        [eN.uaV.REPORT_TO_MOD_KICK_USER]: N.Z,
        [eN.uaV.REPORT_TO_MOD_TIMEOUT_USER]: N.Z,
        [eN.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: N.Z,
        [eN.uaV.REPORT_TO_MOD_CLOSED_REPORT]: N.Z
    }),
    eD = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: l } = e,
            { type: a } = t,
            o = ek[a];
        if (null == o) {
            var s;
            return (s = Error('unknown message type '.concat(t.type))), K.Z.captureException(s), new g.Z('SystemMessage').error('', s), null;
        }
        return (0, r.jsx)(J.ZP, {
            message: t,
            content: (0, X.ZP)(t).content,
            compact: null != i && i,
            children: (0, r.jsx)(o, {
                message: t,
                channel: n,
                compact: i,
                disableInteraction: l
            })
        });
    });
