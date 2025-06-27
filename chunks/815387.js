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
    _ = n(387188),
    b = n(825829),
    x = n(623624),
    y = n(29887),
    E = n(533694),
    v = n(345114),
    C = n(924301),
    O = n(225890),
    j = n(434404),
    S = n(507435),
    I = n(504733),
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
    eh = n(582298),
    eg = n(73352),
    e_ = n(377499),
    eb = n(857640),
    ex = n(614972),
    ey = n(701181),
    eE = n(29338),
    ev = n(461135),
    eC = n(296571),
    eO = n(587737),
    ej = n(482239),
    eS = n(328749),
    eI = n(4305),
    eT = n(910548),
    eN = n(981631),
    eP = n(70722),
    eA = n(388032),
    ew = n(40450);
function eZ(e) {
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
function eR(e) {
    let { message: t, channel: n, compact: a } = e,
        { author: o } = t,
        { guild_id: s } = n,
        c = t.getChannelId(),
        u = (0, l.e7)([F.Z], () => F.Z.getGuild(s), [s]),
        d = i.useCallback(() => {
            null != u &&
                (0, x.f)({
                    guildId: u.id,
                    location: {
                        section: eN.jXE.CHANNEL_TEXT_AREA,
                        object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL
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
    return (0, r.jsx)(eT.ZP, {
        message: t,
        compact: a,
        guild: u,
        usernameHook: p,
        onClickMessage: d
    });
}
function ek(e) {
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
let eL = Object.freeze({
        [eN.uaV.DEFAULT]: void 0,
        [eN.uaV.REPLY]: void 0,
        [eN.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eN.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eN.uaV.RECIPIENT_ADD]: function (e) {
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
                ? (0, r.jsx)(ej.Z, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: s,
                      actorUsernameHook: c,
                      targetUsernameHook: u
                  })
                : null != s && s.id !== a.id
                  ? (0, r.jsx)(e_.Z, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: c,
                        otherUser: s,
                        otherUsernameHook: u
                    })
                  : (0, r.jsx)(e_.Z, {
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
                p = (0, l.e7)([M.Z], () => M.Z.isCallActive(d, o), [d, o]),
                m = (0, l.e7)([z.Z], () => z.Z.getVoiceState(eN.ME, u)),
                f = !p && null != t.call && !t.call.participants.includes(u),
                h = p && (null == m || m.channelId !== d),
                g = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
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
                joinable: h,
                usernameHook: _,
                onClickJoinCall: g
            });
        },
        [eN.uaV.CHANNEL_NAME_CHANGE]: function (e) {
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
        [eN.uaV.CHANNEL_ICON_CHANGE]: function (e) {
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
        [eN.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                o = t.getChannelId(),
                s = i.useCallback(() => {
                    if (H.Z.getChannelId() !== o) {
                        let e = U.Z.getChannel(o);
                        null != e && (0, P.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => W.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0);
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
        [eN.uaV.USER_JOIN]: function (e) {
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
        [eN.uaV.GUILD_BOOST]: eR,
        [eN.uaV.GUILD_BOOST_TIER_1]: eR,
        [eN.uaV.GUILD_BOOST_TIER_2]: eR,
        [eN.uaV.GUILD_BOOST_TIER_3]: eR,
        [eN.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
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
        [eN.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                {
                    author: o,
                    author: { id: s },
                    messageReference: c
                } = t,
                d = t.getChannelId(),
                p = (0, l.e7)([G.Z], () => G.Z.findActivity(s, (e) => e.type === eN.IIU.PLAYING), [s]),
                m = (0, l.e7)([U.Z], () => (null != c ? U.Z.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                h = (0, et.l)({
                    user: o,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id
                }),
                g = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, u.iV)({
                            streamType: eP.lo.GUILD,
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
                      onJoinStream: g,
                      usernameHook: h
                  })
                : null;
        },
        [eN.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                a = (0, l.e7)([U.Z], () => U.Z.getChannel(i), [i]),
                o = null != a ? a.getGuildId() : null;
            return (0, r.jsx)(eu.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != o && j.Z.open(o, eN.pNK.ACCESS, eN.KsC.ACCESS_DISCOVERABLE);
                }
            });
        },
        [eN.uaV.GUILD_DISCOVERY_REQUALIFIED]: eu.xe,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eu.HL,
        [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eu.Yc,
        [eN.uaV.THREAD_CREATED]: function (e) {
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
                        return (t) => (0, r.jsx)(e, eZ({ channel: l }, t));
                    });
                }, [l]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let l = U.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                        null != l &&
                            (0, o.jW)(e, async () => {
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
            return (0, r.jsx)(eC.Z, {
                message: t,
                compact: s,
                usernameHook: c,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: p
            });
        },
        [eN.uaV.THREAD_STARTER_MESSAGE]: eS.Z,
        [eN.uaV.GUILD_INVITE_REMINDER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, l.e7)([V.default], () => V.default.getCurrentUser()),
                o = (0, l.e7)([F.Z], () => {
                    var e, t;
                    return null != (t = null == (e = F.Z.getGuild(n.getGuildId())) ? void 0 : e.isOwner(a)) && t;
                });
            return (0, r.jsx)(eh.Z, {
                message: t,
                compact: i,
                isOwner: o,
                channel: n
            });
        },
        [eN.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, b.nY)(t)
                ? (0, r.jsx)(en.Z, {
                      message: t,
                      compact: n,
                      channel: i
                  })
                : null;
        },
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ek,
        [eN.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ek,
        [eN.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
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
        [eN.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
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
        [eN.uaV.ROLE_SUBSCRIPTION_PURCHASE]: v.Z,
        [eN.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: l } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
                ? (0, r.jsx)(E.Z, {
                      message: n,
                      channel: i,
                      compact: l
                  })
                : null;
        },
        [eN.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eN.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                o = (0, l.e7)([C.ZP], () => C.ZP.getActiveEventByChannel(n.id), [n.id]);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eE.Z, {
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
                l = (0, et.l)({
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
                l = (0, et.l)({
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
            let { message: i, channel: o, compact: c } = e,
                u = (0, et.l)({
                    user: i.author,
                    channelId: o.id,
                    guildId: o.guild_id,
                    messageId: i.id
                }),
                d = (0, l.e7)([B.Z], () => B.Z.can(eN.Plq.MUTE_MEMBERS, o)),
                p = (0, l.e7)([w.Z], () => w.Z.getParticipant(o.id, i.author.id)),
                m = new Date(X.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == p || null == (t = p.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0).toISOString(),
                f = d && (null == p ? void 0 : p.rtsState) === Z.xO.REQUESTED_TO_SPEAK && m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ex.Z, {
                        message: i,
                        compact: c,
                        usernameHook: u
                    }),
                    f
                        ? (0, r.jsxs)(a.zxk, {
                              wrapperClassName: ew.inviteToSpeakButtonWrapper,
                              innerClassName: ew.inviteToSpeakButtonInner,
                              look: a.zxk.Looks.FILLED,
                              color: a.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  (0, A.DT)(o, i.author.id, !1), s.Z.deleteMessage(o.id, i.id, !0);
                              },
                              children: [
                                  (0, r.jsx)(a.Lrb, {
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
                l = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(ev.Z, {
                message: t,
                compact: i,
                usernameHook: l
            });
        },
        [eN.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: I.Z,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: T.P,
        [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: T.e,
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
        [eN.uaV.POLL_RESULT]: S.Z,
        [eN.uaV.CHANGELOG]: void 0,
        [eN.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)(ee.Z, {
                message: t,
                channel: n
            });
        },
        [eN.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ea.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.GIFTING_PROMPT]: function (e) {
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
        [eN.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ef.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: i
            });
        },
        [eN.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: y.Cn,
        [eN.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: y.Ue,
        [eN.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: y.R6,
        [eN.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(J.Z, {
                message: t,
                channel: n,
                compact: i
            });
        },
        [eN.uaV.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, et.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, r.jsx)(_.i, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: l
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
            o = eL[a];
        if (null == o) {
            var s;
            return (s = Error('unknown message type '.concat(t.type))), Y.Z.captureException(s), new g.Z('SystemMessage').error('', s), null;
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
