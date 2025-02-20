n.d(t, { Z: () => eZ }), n(411104);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(239091),
    s = n(904245),
    c = n(287734),
    d = n(872810),
    u = n(911969),
    p = n(376484),
    m = n(362604),
    f = n(981772),
    h = n(710845),
    g = n(825829),
    _ = n(623624),
    b = n(533694),
    v = n(182180),
    y = n(924301),
    x = n(225890),
    O = n(434404),
    E = n(507435),
    j = n(504733),
    N = n(563959),
    C = n(703656),
    I = n(471253),
    S = n(565799),
    P = n(590415),
    T = n(911560),
    A = n(488131),
    w = n(814820),
    Z = n(314897),
    k = n(523746),
    R = n(592125),
    L = n(430824),
    D = n(496675),
    M = n(158776),
    W = n(944486),
    F = n(594174),
    U = n(979651),
    B = n(585483),
    G = n(5192),
    H = n(960048),
    V = n(709054),
    z = n(937889),
    K = n(15642),
    Y = n(260736),
    X = n(930282),
    q = n(818570),
    Q = n(942951),
    J = n(9423),
    $ = n(789267),
    ee = n(262),
    et = n(303135),
    en = n(673052),
    er = n(385063),
    ei = n(253118),
    ea = n(54817),
    eo = n(502115),
    el = n(27103),
    es = n(396252),
    ec = n(522860),
    ed = n(600397),
    eu = n(582298),
    ep = n(73352),
    em = n(507962),
    ef = n(857640),
    eh = n(614972),
    eg = n(701181),
    e_ = n(29338),
    eb = n(461135),
    ev = n(296571),
    ey = n(587737),
    ex = n(482239),
    eO = n(328749),
    eE = n(4305),
    ej = n(910548),
    eN = n(981631),
    eC = n(70722),
    eI = n(388032),
    eS = n(931505);
function eP(e) {
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
function eT(e) {
    let { message: t, channel: n, compact: o } = e,
        { author: l } = t,
        { guild_id: s } = n,
        c = t.getChannelId(),
        d = (0, a.e7)([L.Z], () => L.Z.getGuild(s), [s]),
        u = i.useCallback(() => {
            null != d &&
                (0, _.f)({
                    guildId: d.id,
                    location: {
                        section: eN.jXE.CHANNEL_TEXT_AREA,
                        object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [d]),
        p = (0, Q.l)({
            user: l,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, r.jsx)(ej.ZP, {
        message: t,
        compact: o,
        guild: d,
        usernameHook: p,
        onClickMessage: u
    });
}
function eA(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(ea.Z, {
        message: t,
        compact: n,
        usernameHook: a
    });
}
let ew = Object.freeze({
        [eN.uaV.DEFAULT]: void 0,
        [eN.uaV.REPLY]: void 0,
        [eN.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eN.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eN.uaV.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: o } = t,
                l = t.getChannelId(),
                s = (0, a.e7)([F.default], () => F.default.getUser(t.mentions[0]), [t]),
                c = G.ZP.getName(null, l, s),
                d = (0, Q.l)({
                    user: o,
                    channelId: l,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                u = (0, Q.l)({
                    user: s,
                    channelId: l,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, r.jsx)(ey.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: d,
                      targetUsernameHook: u
                  })
                : (0, r.jsx)(ep.Z, {
                      message: t,
                      compact: i,
                      otherUsername: c,
                      usernameHook: d,
                      otherUsernameHook: u
                  });
        },
        [eN.uaV.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: o } = t,
                l = t.getChannelId(),
                s = (0, a.e7)([F.default], () => F.default.getUser(t.mentions[0]), [t]),
                c = (0, Q.l)({
                    user: o,
                    channelId: l,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                d = (0, Q.l)({
                    user: s,
                    channelId: l,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, r.jsx)(ex.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: c,
                      targetUsernameHook: d
                  })
                : null != s && s.id !== o.id
                  ? (0, r.jsx)(em.Z, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: c,
                        otherUser: s,
                        otherUsernameHook: d
                    })
                  : (0, r.jsx)(em.Z, {
                        message: t,
                        channel: n,
                        usernameHook: c
                    });
        },
        [eN.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: o } = e,
                { id: l, author: s } = t,
                d = Z.default.getId(),
                u = t.getChannelId(),
                p = (0, a.e7)([k.Z], () => k.Z.isCallActive(u, l), [u, l]),
                m = (0, a.e7)([U.Z], () => U.Z.getVoiceState(eN.ME, d)),
                f = !p && null != t.call && !t.call.participants.includes(d),
                h = p && (null == m || m.channelId !== u),
                g = i.useCallback(() => c.default.selectVoiceChannel(u), [u]),
                _ = (0, Q.l)({
                    user: s,
                    channelId: u,
                    guildId: o.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)($.Z, {
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
                { author: a } = t,
                o = t.getChannelId(),
                l = (0, Q.l)({
                    user: a,
                    channelId: o,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(er.Z, {
                compact: n,
                message: t,
                usernameHook: l,
                isForumPost: i.isForumPost()
            });
        },
        [eN.uaV.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                l = (0, Q.l)({
                    user: a,
                    channelId: o,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(et.Z, {
                compact: n,
                message: t,
                usernameHook: l
            });
        },
        [eN.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: o } = t,
                l = t.getChannelId(),
                s = i.useCallback(() => {
                    if (W.Z.getChannelId() !== l) {
                        let e = R.Z.getChannel(l);
                        null != e && (0, C.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => B.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0);
                }, [l]),
                c = (0, Q.l)({
                    user: o,
                    channelId: l,
                    guildId: a.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ei.Z, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : s
            });
        },
        [eN.uaV.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                l = (0, Q.l)({
                    user: a,
                    channelId: o,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eE.Z, {
                        message: t,
                        guildId: i.guild_id,
                        compact: n,
                        usernameHook: l
                    }),
                    (0, r.jsx)(w.f, {
                        channel: i,
                        message: t
                    })
                ]
            });
        },
        [eN.uaV.GUILD_BOOST]: eT,
        [eN.uaV.GUILD_BOOST_TIER_1]: eT,
        [eN.uaV.GUILD_BOOST_TIER_2]: eT,
        [eN.uaV.GUILD_BOOST_TIER_3]: eT,
        [eN.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: a } = t,
                o = t.getChannelId(),
                l = (0, Q.l)({
                    user: a,
                    channelId: o,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ee.Z, {
                message: t,
                compact: n,
                usernameHook: l
            });
        },
        [eN.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: o } = e,
                {
                    author: l,
                    author: { id: s },
                    messageReference: c
                } = t,
                u = t.getChannelId(),
                p = (0, a.e7)([M.Z], () => M.Z.findActivity(s, (e) => e.type === eN.IIU.PLAYING), [s]),
                m = (0, a.e7)([R.Z], () => (null != c ? R.Z.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                h = (0, Q.l)({
                    user: l,
                    channelId: u,
                    guildId: o.guild_id,
                    messageId: t.id
                }),
                g = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, d.iV)({
                            streamType: eC.lo.GUILD,
                            ownerId: s,
                            channelId: m.id,
                            guildId: f
                        });
                }, [s, m, f]);
            return null != c && null != m && null != c.guild_id
                ? (0, r.jsx)(ec.Z, {
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
                o = (0, a.e7)([R.Z], () => R.Z.getChannel(i), [i]),
                l = null != o ? o.getGuildId() : null;
            return (0, r.jsx)(eo.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != l && O.Z.open(l, eN.pNK.DISCOVERY);
                }
            });
        },
        [eN.uaV.GUILD_DISCOVERY_REQUALIFIED]: eo.xe,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eo.HL,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eo.Yc,
        [eN.uaV.THREAD_CREATED]: function (e) {
            let { message: t, channel: a, compact: s } = e,
                c = (0, Q.l)({
                    user: t.author,
                    channelId: t.channel_id,
                    guildId: a.guild_id,
                    messageId: t.id
                }),
                d = i.useCallback(
                    async (e) => {
                        var n;
                        let r = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                        if (null != r) {
                            await T.Z.loadThread(r);
                            let t = R.Z.getChannel(r);
                            null != t && (0, A.ok)(t, e.shiftKey);
                        }
                    },
                    [t]
                ),
                u = i.useCallback(() => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('91315'), n.e('86551')]).then(n.bind(n, 223901));
                        return (t) => (0, r.jsx)(e, eP({ channel: a }, t));
                    });
                }, [a]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let a = R.Z.getChannel(null === (i = t.messageReference) || void 0 === i ? void 0 : i.channel_id);
                        null != a &&
                            (0, l.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('38902'), n.e('22356'), n.e('74067')]).then(n.bind(n, 422200));
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = eP({}, t)),
                                        (i = i = { channel: a }),
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
                onClickThread: d,
                onClickViewThreads: u,
                onContextMenuThread: p
            });
        },
        [eN.uaV.THREAD_STARTER_MESSAGE]: eO.Z,
        [eN.uaV.GUILD_INVITE_REMINDER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                o = (0, a.e7)([F.default], () => F.default.getCurrentUser()),
                l = (0, a.e7)([L.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = L.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(o)) && void 0 !== t && t;
                });
            return (0, r.jsx)(eu.Z, {
                message: t,
                compact: i,
                isOwner: l,
                channel: n
            });
        },
        [eN.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, g.nY)(t)
                ? (0, r.jsx)(J.Z, {
                      message: t,
                      compact: n,
                      channel: i
                  })
                : null;
        },
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eA,
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eA,
        [eN.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(es.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: a
            });
        },
        [eN.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(el.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: a
            });
        },
        [eN.uaV.ROLE_SUBSCRIPTION_PURCHASE]: v.Z,
        [eN.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: a } = e;
            return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === u.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(b.Z, {
                      message: n,
                      channel: i,
                      compact: a
                  })
                : null;
        },
        [eN.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eN.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                o = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                l = (0, a.e7)([y.ZP], () => y.ZP.getActiveEventByChannel(n.id), [n.id]);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(e_.Z, {
                        message: t,
                        compact: i,
                        usernameHook: o
                    }),
                    null != l && l.name === t.content ? (0, r.jsx)(x.Z, { code: ''.concat(n.guild_id, '-').concat(l.id) }) : null
                ]
            });
        },
        [eN.uaV.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ef.Z, {
                message: t,
                compact: i,
                usernameHook: a
            });
        },
        [eN.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eg.Z, {
                message: t,
                compact: i,
                usernameHook: a
            });
        },
        [eN.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: l, compact: c } = e,
                d = (0, Q.l)({
                    user: i.author,
                    channelId: l.id,
                    guildId: l.guild_id,
                    messageId: i.id
                }),
                u = (0, a.e7)([D.Z], () => D.Z.can(eN.Plq.MUTE_MEMBERS, l)),
                p = (0, a.e7)([S.Z], () => S.Z.getParticipant(l.id, i.author.id)),
                m = new Date(V.default.extractTimestamp(i.id)).toISOString() === new Date(null !== (n = null == p ? void 0 : null === (t = p.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
                f = u && (null == p ? void 0 : p.rtsState) === P.xO.REQUESTED_TO_SPEAK && m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eh.Z, {
                        message: i,
                        compact: c,
                        usernameHook: d
                    }),
                    f
                        ? (0, r.jsxs)(o.zxk, {
                              wrapperClassName: eS.inviteToSpeakButtonWrapper,
                              innerClassName: eS.inviteToSpeakButtonInner,
                              look: o.zxk.Looks.FILLED,
                              color: o.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  (0, I.DT)(l, i.author.id, !1), s.Z.deleteMessage(l.id, i.id, !0);
                              },
                              children: [
                                  (0, r.jsx)(o.Lrb, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      height: 20,
                                      width: 20
                                  }),
                                  eI.NW.string(eI.t.f0T7hI)
                              ]
                          })
                        : null
                ]
            });
        },
        [eN.uaV.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eb.Z, {
                message: t,
                compact: i,
                usernameHook: a
            });
        },
        [eN.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: j.Z,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: N.P,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: N.e,
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
        [eN.uaV.POLL_RESULT]: E.Z,
        [eN.uaV.CHANGELOG]: void 0,
        [eN.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)(q.Z, {
                message: t,
                channel: n
            });
        },
        [eN.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(en.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                o = (0, a.e7)([F.default], () => F.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == o
                ? null
                : (0, r.jsx)(K.Z, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: o,
                      channel: n,
                      giftIntentSecondaryAction: i.giftIntentSecondaryAction
                  });
        },
        [eN.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ed.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: i
            });
        },
        [eN.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: f.Cn,
        [eN.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: f.Ue,
        [eN.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: f.R6,
        [eN.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(Y.Z, {
                message: t,
                channel: n,
                compact: i
            });
        }
    }),
    eZ = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: a } = e,
            { type: o } = t,
            l = ew[o];
        if (null == l) {
            var s;
            return (s = Error('unknown message type '.concat(t.type))), H.Z.captureException(s), new h.Z('SystemMessage').error('', s), null;
        }
        return (0, r.jsx)(X.ZP, {
            message: t,
            content: (0, z.ZP)(t).content,
            children: (0, r.jsx)(l, {
                message: t,
                channel: n,
                compact: i,
                disableInteraction: a
            })
        });
    });
