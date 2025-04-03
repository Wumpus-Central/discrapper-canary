n.d(t, { Z: () => eR }), n(411104);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(239091),
    s = n(904245),
    c = n(287734),
    u = n(872810),
    d = n(911969),
    p = n(376484),
    m = n(362604),
    f = n(479110),
    h = n(413189),
    g = n(981772),
    _ = n(710845),
    b = n(825829),
    x = n(623624),
    y = n(533694),
    E = n(345114),
    v = n(924301),
    O = n(225890),
    N = n(434404),
    j = n(507435),
    C = n(504733),
    I = n(563959),
    S = n(703656),
    T = n(471253),
    P = n(565799),
    A = n(590415),
    w = n(911560),
    Z = n(488131),
    k = n(814820),
    R = n(314897),
    D = n(523746),
    L = n(592125),
    M = n(430824),
    W = n(496675),
    U = n(158776),
    F = n(944486),
    B = n(594174),
    G = n(979651),
    H = n(585483),
    V = n(5192),
    z = n(960048),
    K = n(709054),
    Y = n(937889),
    X = n(15642),
    q = n(260736),
    Q = n(930282),
    J = n(818570),
    $ = n(942951),
    ee = n(9423),
    et = n(789267),
    en = n(262),
    er = n(303135),
    ei = n(673052),
    ea = n(385063),
    el = n(253118),
    eo = n(54817),
    es = n(502115),
    ec = n(27103),
    eu = n(396252),
    ed = n(522860),
    ep = n(600397),
    em = n(582298),
    ef = n(73352),
    eh = n(507962),
    eg = n(857640),
    e_ = n(614972),
    eb = n(701181),
    ex = n(29338),
    ey = n(461135),
    eE = n(296571),
    ev = n(587737),
    eO = n(482239),
    eN = n(328749),
    ej = n(4305),
    eC = n(910548),
    eI = n(981631),
    eS = n(70722),
    eT = n(388032),
    eP = n(40450);
function eA(e) {
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
function ew(e) {
    let { message: t, channel: n, compact: l } = e,
        { author: o } = t,
        { guild_id: s } = n,
        c = t.getChannelId(),
        u = (0, a.e7)([M.Z], () => M.Z.getGuild(s), [s]),
        d = i.useCallback(() => {
            null != u &&
                (0, x.f)({
                    guildId: u.id,
                    location: {
                        section: eI.jXE.CHANNEL_TEXT_AREA,
                        object: eI.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        p = (0, $.l)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, r.jsx)(eC.ZP, {
        message: t,
        compact: l,
        guild: u,
        usernameHook: p,
        onClickMessage: d
    });
}
function eZ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, $.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(eo.Z, {
        message: t,
        compact: n,
        usernameHook: a
    });
}
let ek = Object.freeze({
        [eI.uaV.DEFAULT]: void 0,
        [eI.uaV.REPLY]: void 0,
        [eI.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eI.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eI.uaV.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: l } = t,
                o = t.getChannelId(),
                s = (0, a.e7)([B.default], () => B.default.getUser(t.mentions[0]), [t]),
                c = V.ZP.getName(null, o, s),
                u = (0, $.l)({
                    user: l,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                d = (0, $.l)({
                    user: s,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, r.jsx)(ev.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: u,
                      targetUsernameHook: d
                  })
                : (0, r.jsx)(ef.Z, {
                      message: t,
                      compact: i,
                      otherUsername: c,
                      usernameHook: u,
                      otherUsernameHook: d
                  });
        },
        [eI.uaV.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: l } = t,
                o = t.getChannelId(),
                s = (0, a.e7)([B.default], () => B.default.getUser(t.mentions[0]), [t]),
                c = (0, $.l)({
                    user: l,
                    channelId: o,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                u = (0, $.l)({
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
                : null != s && s.id !== l.id
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
        [eI.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { id: o, author: s } = t,
                u = R.default.getId(),
                d = t.getChannelId(),
                p = (0, a.e7)([D.Z], () => D.Z.isCallActive(d, o), [d, o]),
                m = (0, a.e7)([G.Z], () => G.Z.getVoiceState(eI.ME, u)),
                f = !p && null != t.call && !t.call.participants.includes(u),
                h = p && (null == m || m.channelId !== d),
                g = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
                _ = (0, $.l)({
                    user: s,
                    channelId: d,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(et.Z, {
                compact: n,
                message: t,
                missed: f,
                joinable: h,
                usernameHook: _,
                onClickJoinCall: g
            });
        },
        [eI.uaV.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: a } = t,
                l = t.getChannelId(),
                o = (0, $.l)({
                    user: a,
                    channelId: l,
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
        [eI.uaV.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: a } = t,
                l = t.getChannelId(),
                o = (0, $.l)({
                    user: a,
                    channelId: l,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(er.Z, {
                compact: n,
                message: t,
                usernameHook: o
            });
        },
        [eI.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: l } = t,
                o = t.getChannelId(),
                s = i.useCallback(() => {
                    if (F.Z.getChannelId() !== o) {
                        let e = L.Z.getChannel(o);
                        null != e && (0, S.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => H.S.dispatch(eI.CkL.TOGGLE_CHANNEL_PINS), 0);
                }, [o]),
                c = (0, $.l)({
                    user: l,
                    channelId: o,
                    guildId: a.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(el.Z, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : s
            });
        },
        [eI.uaV.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: a } = t,
                l = t.getChannelId(),
                o = (0, $.l)({
                    user: a,
                    channelId: l,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ej.Z, {
                        message: t,
                        guildId: i.guild_id,
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
        [eI.uaV.GUILD_BOOST]: ew,
        [eI.uaV.GUILD_BOOST_TIER_1]: ew,
        [eI.uaV.GUILD_BOOST_TIER_2]: ew,
        [eI.uaV.GUILD_BOOST_TIER_3]: ew,
        [eI.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: a } = t,
                l = t.getChannelId(),
                o = (0, $.l)({
                    user: a,
                    channelId: l,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(en.Z, {
                message: t,
                compact: n,
                usernameHook: o
            });
        },
        [eI.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                {
                    author: o,
                    author: { id: s },
                    messageReference: c
                } = t,
                d = t.getChannelId(),
                p = (0, a.e7)([U.Z], () => U.Z.findActivity(s, (e) => e.type === eI.IIU.PLAYING), [s]),
                m = (0, a.e7)([L.Z], () => (null != c ? L.Z.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                h = (0, $.l)({
                    user: o,
                    channelId: d,
                    guildId: l.guild_id,
                    messageId: t.id
                }),
                g = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, u.iV)({
                            streamType: eS.lo.GUILD,
                            ownerId: s,
                            channelId: m.id,
                            guildId: f
                        });
                }, [s, m, f]);
            return null != c && null != m && null != c.guild_id
                ? (0, r.jsx)(ed.Z, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: p,
                      onJoinStream: g,
                      usernameHook: h
                  })
                : null;
        },
        [eI.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                l = (0, a.e7)([L.Z], () => L.Z.getChannel(i), [i]),
                o = null != l ? l.getGuildId() : null;
            return (0, r.jsx)(es.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != o && N.Z.open(o, eI.pNK.DISCOVERY);
                }
            });
        },
        [eI.uaV.GUILD_DISCOVERY_REQUALIFIED]: es.xe,
        [eI.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: es.HL,
        [eI.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: es.Yc,
        [eI.uaV.THREAD_CREATED]: function (e) {
            let { message: t, channel: a, compact: s } = e,
                c = (0, $.l)({
                    user: t.author,
                    channelId: t.channel_id,
                    guildId: a.guild_id,
                    messageId: t.id
                }),
                u = i.useCallback(
                    async (e) => {
                        var n;
                        let r = null == (n = t.messageReference) ? void 0 : n.channel_id;
                        if (null != r) {
                            await w.Z.loadThread(r);
                            let t = L.Z.getChannel(r);
                            null != t && (0, Z.ok)(t, e.shiftKey);
                        }
                    },
                    [t]
                ),
                d = i.useCallback(() => {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('91315'), n.e('59505')]).then(n.bind(n, 223901));
                        return (t) => (0, r.jsx)(e, eA({ channel: a }, t));
                    });
                }, [a]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let a = L.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                        null != a &&
                            (0, o.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('22356'), n.e('48334')]).then(n.bind(n, 422200));
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = eA({}, t)),
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
            return (0, r.jsx)(eE.Z, {
                message: t,
                compact: s,
                usernameHook: c,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: p
            });
        },
        [eI.uaV.THREAD_STARTER_MESSAGE]: eN.Z,
        [eI.uaV.GUILD_INVITE_REMINDER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, a.e7)([B.default], () => B.default.getCurrentUser()),
                o = (0, a.e7)([M.Z], () => {
                    var e, t;
                    return null != (t = null == (e = M.Z.getGuild(n.getGuildId())) ? void 0 : e.isOwner(l)) && t;
                });
            return (0, r.jsx)(em.Z, {
                message: t,
                compact: i,
                isOwner: o,
                channel: n
            });
        },
        [eI.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, b.nY)(t)
                ? (0, r.jsx)(ee.Z, {
                      message: t,
                      compact: n,
                      channel: i
                  })
                : null;
        },
        [eI.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eZ,
        [eI.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eZ,
        [eI.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                a = (0, $.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(eu.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: a
            });
        },
        [eI.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                a = (0, $.l)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ec.Z, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: a
            });
        },
        [eI.uaV.ROLE_SUBSCRIPTION_PURCHASE]: E.Z,
        [eI.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: a } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(y.Z, {
                      message: n,
                      channel: i,
                      compact: a
                  })
                : null;
        },
        [eI.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eI.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, $.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                o = (0, a.e7)([v.ZP], () => v.ZP.getActiveEventByChannel(n.id), [n.id]);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ex.Z, {
                        message: t,
                        compact: i,
                        usernameHook: l
                    }),
                    null != o && o.name === t.content ? (0, r.jsx)(O.Z, { code: ''.concat(n.guild_id, '-').concat(o.id) }) : null
                ]
            });
        },
        [eI.uaV.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, $.l)({
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
        [eI.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, $.l)({
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
        [eI.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: o, compact: c } = e,
                u = (0, $.l)({
                    user: i.author,
                    channelId: o.id,
                    guildId: o.guild_id,
                    messageId: i.id
                }),
                d = (0, a.e7)([W.Z], () => W.Z.can(eI.Plq.MUTE_MEMBERS, o)),
                p = (0, a.e7)([P.Z], () => P.Z.getParticipant(o.id, i.author.id)),
                m = new Date(K.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == p || null == (t = p.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0).toISOString(),
                f = d && (null == p ? void 0 : p.rtsState) === A.xO.REQUESTED_TO_SPEAK && m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(e_.Z, {
                        message: i,
                        compact: c,
                        usernameHook: u
                    }),
                    f
                        ? (0, r.jsxs)(l.zxk, {
                              wrapperClassName: eP.inviteToSpeakButtonWrapper,
                              innerClassName: eP.inviteToSpeakButtonInner,
                              look: l.zxk.Looks.FILLED,
                              color: l.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  (0, T.DT)(o, i.author.id, !1), s.Z.deleteMessage(o.id, i.id, !0);
                              },
                              children: [
                                  (0, r.jsx)(l.Lrb, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      height: 20,
                                      width: 20
                                  }),
                                  eT.NW.string(eT.t.f0T7hI)
                              ]
                          })
                        : null
                ]
            });
        },
        [eI.uaV.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, $.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ey.Z, {
                message: t,
                compact: i,
                usernameHook: a
            });
        },
        [eI.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: C.Z,
        [eI.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: I.P,
        [eI.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: I.e,
        [eI.uaV.PREMIUM_REFERRAL]: void 0,
        [eI.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(m.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eI.uaV.CUSTOM_GIFT]: void 0,
        [eI.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(p.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eI.uaV.VOICE_HANGOUT_INVITE]: void 0,
        [eI.uaV.POLL_RESULT]: j.Z,
        [eI.uaV.CHANGELOG]: void 0,
        [eI.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)(J.Z, {
                message: t,
                channel: n
            });
        },
        [eI.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ei.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eI.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                l = (0, a.e7)([B.default], () => B.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == l
                ? null
                : (0, r.jsx)(X.Z, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: l,
                      channel: n,
                      giftIntentSecondaryAction: i.giftIntentSecondaryAction
                  });
        },
        [eI.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ep.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: i
            });
        },
        [eI.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: g.Cn,
        [eI.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: g.Ue,
        [eI.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: g.R6,
        [eI.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(q.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eI.uaV.CHAT_WALLPAPER_SET]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(h.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eI.uaV.CHAT_WALLPAPER_REMOVED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(f.Z, {
                message: t,
                channel: n,
                compact: i
            });
        }
    }),
    eR = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: a } = e,
            { type: l } = t,
            o = ek[l];
        if (null == o) {
            var s;
            return (s = Error('unknown message type '.concat(t.type))), z.Z.captureException(s), new _.Z('SystemMessage').error('', s), null;
        }
        return (0, r.jsx)(Q.ZP, {
            message: t,
            content: (0, Y.ZP)(t).content,
            children: (0, r.jsx)(o, {
                message: t,
                channel: n,
                compact: i,
                disableInteraction: a
            })
        });
    });
