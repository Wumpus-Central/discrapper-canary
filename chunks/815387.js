n.d(t, { Z: () => eL }), n(415506);
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
    x = n(29887),
    y = n(533694),
    E = n(345114),
    v = n(924301),
    C = n(225890),
    O = n(434404),
    j = n(507435),
    S = n(504733),
    I = n(563959),
    T = n(917318),
    N = n(703656),
    P = n(471253),
    A = n(565799),
    w = n(590415),
    Z = n(911560),
    R = n(488131),
    k = n(814820),
    L = n(314897),
    D = n(523746),
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
    q = n(937889),
    X = n(15642),
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
    eg = n(377499),
    e_ = n(857640),
    eb = n(614972),
    ex = n(701181),
    ey = n(29338),
    eE = n(461135),
    ev = n(296571),
    eC = n(587737),
    eO = n(482239),
    ej = n(328749),
    eS = n(4305),
    eI = n(910548),
    eT = n(981631),
    eN = n(70722),
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
                        section: eT.jXE.CHANNEL_TEXT_AREA,
                        object: eT.qAy.BOOST_ANNOUNCEMENT_UPSELL
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
        [eT.uaV.DEFAULT]: void 0,
        [eT.uaV.REPLY]: void 0,
        [eT.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eT.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eT.uaV.RECIPIENT_ADD]: function (e) {
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
                ? (0, r.jsx)(eC.Z, {
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
        [eT.uaV.RECIPIENT_REMOVE]: function (e) {
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
                ? (0, r.jsx)(eO.Z, {
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
        [eT.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { id: o, author: s } = t,
                u = L.default.getId(),
                d = t.getChannelId(),
                p = (0, l.e7)([D.Z], () => D.Z.isCallActive(d, o), [d, o]),
                m = (0, l.e7)([V.Z], () => V.Z.getVoiceState(eT.ME, u)),
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
        [eT.uaV.CHANNEL_NAME_CHANGE]: function (e) {
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
        [eT.uaV.CHANNEL_ICON_CHANGE]: function (e) {
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
        [eT.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = i.useCallback(() => {
                    if (G.Z.getChannelId() !== o) {
                        let e = M.Z.getChannel(o);
                        null != e && (0, N.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => z.S.dispatch(eT.CkL.TOGGLE_CHANNEL_PINS), 0);
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
        [eT.uaV.USER_JOIN]: function (e) {
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
        [eT.uaV.GUILD_BOOST]: eZ,
        [eT.uaV.GUILD_BOOST_TIER_1]: eZ,
        [eT.uaV.GUILD_BOOST_TIER_2]: eZ,
        [eT.uaV.GUILD_BOOST_TIER_3]: eZ,
        [eT.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
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
        [eT.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                {
                    author: o,
                    author: { id: s },
                    messageReference: c
                } = t,
                d = t.getChannelId(),
                p = (0, l.e7)([B.Z], () => B.Z.findActivity(s, (e) => e.type === eT.IIU.PLAYING), [s]),
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
                            streamType: eN.lo.GUILD,
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
        [eT.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                a = (0, l.e7)([M.Z], () => M.Z.getChannel(i), [i]),
                o = null != a ? a.getGuildId() : null;
            return (0, r.jsx)(ec.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != o && O.Z.open(o, eT.pNK.ACCESS, eT.KsC.ACCESS_DISCOVERABLE);
                }
            });
        },
        [eT.uaV.GUILD_DISCOVERY_REQUALIFIED]: ec.xe,
        [eT.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ec.HL,
        [eT.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ec.Yc,
        [eT.uaV.THREAD_CREATED]: function (e) {
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
                                let { default: e } = await Promise.all([n.e('90508'), n.e('11300')]).then(n.bind(n, 422200));
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
        [eT.uaV.THREAD_STARTER_MESSAGE]: ej.Z,
        [eT.uaV.GUILD_INVITE_REMINDER]: function (e) {
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
        [eT.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, _.nY)(t)
                ? (0, r.jsx)(et.Z, {
                      message: t,
                      compact: n,
                      channel: i
                  })
                : null;
        },
        [eT.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eR,
        [eT.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eR,
        [eT.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
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
        [eT.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
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
        [eT.uaV.ROLE_SUBSCRIPTION_PURCHASE]: E.Z,
        [eT.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: l } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(y.Z, {
                      message: n,
                      channel: i,
                      compact: l
                  })
                : null;
        },
        [eT.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eT.uaV.STAGE_START]: function (e) {
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
                    (0, r.jsx)(ey.Z, {
                        message: t,
                        compact: i,
                        usernameHook: a
                    }),
                    null != o && o.name === t.content ? (0, r.jsx)(C.Z, { code: ''.concat(n.guild_id, '-').concat(o.id) }) : null
                ]
            });
        },
        [eT.uaV.STAGE_END]: function (e) {
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
        [eT.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, ee.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ex.Z, {
                message: t,
                compact: i,
                usernameHook: l
            });
        },
        [eT.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: o, compact: c } = e,
                u = (0, ee.l)({
                    user: i.author,
                    channelId: o.id,
                    guildId: o.guild_id,
                    messageId: i.id
                }),
                d = (0, l.e7)([F.Z], () => F.Z.can(eT.Plq.MUTE_MEMBERS, o)),
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
        [eT.uaV.STAGE_TOPIC]: function (e) {
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
        [eT.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
        [eT.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: I.P,
        [eT.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: I.e,
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
        [eT.uaV.POLL_RESULT]: j.Z,
        [eT.uaV.CHANGELOG]: void 0,
        [eT.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)($.Z, {
                message: t,
                channel: n
            });
        },
        [eT.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(el.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                a = (0, l.e7)([H.default], () => H.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == a
                ? null
                : (0, r.jsx)(X.Z, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: a,
                      channel: n,
                      giftIntentSecondaryAction: i.giftIntentSecondaryAction
                  });
        },
        [eT.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(em.Z, {
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
            return (0, r.jsx)(Q.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eT.uaV.EMOJI_ADDED]: void 0,
        [eT.uaV.CHAT_WALLPAPER_SET]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(h.Z, {
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
        [eT.uaV.REPORT_TO_MOD_BAN_USER]: T.Z,
        [eT.uaV.REPORT_TO_MOD_KICK_USER]: T.Z,
        [eT.uaV.REPORT_TO_MOD_TIMEOUT_USER]: T.Z,
        [eT.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: T.Z,
        [eT.uaV.REPORT_TO_MOD_CLOSED_REPORT]: T.Z
    }),
    eL = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: l } = e,
            { type: a } = t,
            o = ek[a];
        if (null == o) {
            var s;
            return (s = Error('unknown message type '.concat(t.type))), K.Z.captureException(s), new g.Z('SystemMessage').error('', s), null;
        }
        return (0, r.jsx)(J.ZP, {
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
