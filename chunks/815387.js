n.d(t, { Z: () => eL }), n(411104);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(239091),
    o = n(904245),
    c = n(287734),
    d = n(872810),
    u = n(911969),
    m = n(376484),
    _ = n(362604),
    h = n(981772),
    p = n(710845),
    g = n(825829),
    f = n(623624),
    x = n(533694),
    C = n(182180),
    v = n(924301),
    E = n(225890),
    I = n(434404),
    N = n(507435),
    S = n(504733),
    T = n(563959),
    b = n(703656),
    A = n(471253),
    j = n(565799),
    y = n(590415),
    Z = n(911560),
    R = n(488131),
    L = n(814820),
    P = n(314897),
    k = n(523746),
    M = n(592125),
    O = n(430824),
    D = n(496675),
    w = n(158776),
    F = n(944486),
    U = n(594174),
    B = n(979651),
    G = n(585483),
    H = n(5192),
    V = n(960048),
    z = n(709054),
    W = n(937889),
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
    ei = n(385063),
    el = n(253118),
    ea = n(54817),
    er = n(502115),
    es = n(27103),
    eo = n(396252),
    ec = n(522860),
    ed = n(600397),
    eu = n(582298),
    em = n(73352),
    e_ = n(507962),
    eh = n(857640),
    ep = n(614972),
    eg = n(701181),
    ef = n(29338),
    ex = n(461135),
    eC = n(296571),
    ev = n(587737),
    eE = n(482239),
    eI = n(328749),
    eN = n(4305),
    eS = n(910548),
    eT = n(981631),
    eb = n(70722),
    eA = n(388032),
    ej = n(938530);
function ey(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        d = (0, a.e7)([O.Z], () => O.Z.getGuild(o), [o]),
        u = l.useCallback(() => {
            null != d &&
                (0, f.f)({
                    guildId: d.id,
                    location: {
                        section: eT.jXE.CHANNEL_TEXT_AREA,
                        object: eT.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [d]),
        m = (0, Q.l)({
            user: s,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(eS.ZP, {
        message: t,
        compact: r,
        guild: d,
        usernameHook: m,
        onClickMessage: u
    });
}
function eZ(e) {
    let { message: t, compact: n, channel: l } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ea.Z, {
        message: t,
        compact: n,
        usernameHook: a
    });
}
let eR = Object.freeze({
        [eT.uaV.DEFAULT]: void 0,
        [eT.uaV.REPLY]: void 0,
        [eT.uaV.CHAT_INPUT_COMMAND]: void 0,
        [eT.uaV.CONTEXT_MENU_COMMAND]: void 0,
        [eT.uaV.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.e7)([U.default], () => U.default.getUser(t.mentions[0]), [t]),
                c = H.ZP.getName(null, s, o),
                d = (0, Q.l)({
                    user: r,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                u = (0, Q.l)({
                    user: o,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, i.jsx)(ev.Z, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: d,
                      targetUsernameHook: u
                  })
                : (0, i.jsx)(em.Z, {
                      message: t,
                      compact: l,
                      otherUsername: c,
                      usernameHook: d,
                      otherUsernameHook: u
                  });
        },
        [eT.uaV.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.e7)([U.default], () => U.default.getUser(t.mentions[0]), [t]),
                c = (0, Q.l)({
                    user: r,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                d = (0, Q.l)({
                    user: o,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return n.isThread()
                ? (0, i.jsx)(eE.Z, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: c,
                      targetUsernameHook: d
                  })
                : null != o && o.id !== r.id
                  ? (0, i.jsx)(e_.Z, {
                        message: t,
                        channel: n,
                        compact: l,
                        usernameHook: c,
                        otherUser: o,
                        otherUsernameHook: d
                    })
                  : (0, i.jsx)(e_.Z, {
                        message: t,
                        channel: n,
                        usernameHook: c
                    });
        },
        [eT.uaV.CALL]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { id: s, author: o } = t,
                d = P.default.getId(),
                u = t.getChannelId(),
                m = (0, a.e7)([k.Z], () => k.Z.isCallActive(u, s), [u, s]),
                _ = (0, a.e7)([B.Z], () => B.Z.getVoiceState(eT.ME, d)),
                h = !m && null != t.call && !t.call.participants.includes(d),
                p = m && (null == _ || _.channelId !== u),
                g = l.useCallback(() => c.default.selectVoiceChannel(u), [u]),
                f = (0, Q.l)({
                    user: o,
                    channelId: u,
                    guildId: r.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)($.Z, {
                compact: n,
                message: t,
                missed: h,
                joinable: p,
                usernameHook: f,
                onClickJoinCall: g
            });
        },
        [eT.uaV.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Q.l)({
                    user: a,
                    channelId: r,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(ei.Z, {
                compact: n,
                message: t,
                usernameHook: s,
                isForumPost: l.isForumPost()
            });
        },
        [eT.uaV.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Q.l)({
                    user: a,
                    channelId: r,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(et.Z, {
                compact: n,
                message: t,
                usernameHook: s
            });
        },
        [eT.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = l.useCallback(() => {
                    if (F.Z.getChannelId() !== s) {
                        let e = M.Z.getChannel(s);
                        null != e && (0, b.XU)(e.guild_id, e.id);
                    }
                    setTimeout(() => G.S.dispatch(eT.CkL.TOGGLE_CHANNEL_PINS), 0);
                }, [s]),
                c = (0, Q.l)({
                    user: r,
                    channelId: s,
                    guildId: a.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(el.Z, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : o
            });
        },
        [eT.uaV.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Q.l)({
                    user: a,
                    channelId: r,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eN.Z, {
                        message: t,
                        guildId: l.guild_id,
                        compact: n,
                        usernameHook: s
                    }),
                    (0, i.jsx)(L.f, {
                        channel: l,
                        message: t
                    })
                ]
            });
        },
        [eT.uaV.GUILD_BOOST]: ey,
        [eT.uaV.GUILD_BOOST_TIER_1]: ey,
        [eT.uaV.GUILD_BOOST_TIER_2]: ey,
        [eT.uaV.GUILD_BOOST_TIER_3]: ey,
        [eT.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Q.l)({
                    user: a,
                    channelId: r,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(ee.Z, {
                message: t,
                compact: n,
                usernameHook: s
            });
        },
        [eT.uaV.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                {
                    author: s,
                    author: { id: o },
                    messageReference: c
                } = t,
                u = t.getChannelId(),
                m = (0, a.e7)([w.Z], () => w.Z.findActivity(o, (e) => e.type === eT.IIU.PLAYING), [o]),
                _ = (0, a.e7)([M.Z], () => (null != c ? M.Z.getChannel(c.channel_id) : null), [c]),
                h = null == c ? void 0 : c.guild_id,
                p = (0, Q.l)({
                    user: s,
                    channelId: u,
                    guildId: r.guild_id,
                    messageId: t.id
                }),
                g = l.useCallback(() => {
                    null != _ &&
                        null != h &&
                        (0, d.iV)({
                            streamType: eb.lo.GUILD,
                            ownerId: o,
                            channelId: _.id,
                            guildId: h
                        });
                }, [o, _, h]);
            return null != c && null != _ && null != c.guild_id
                ? (0, i.jsx)(ec.Z, {
                      message: t,
                      compact: n,
                      channel: _,
                      playingActivity: m,
                      onJoinStream: g,
                      usernameHook: p
                  })
                : null;
        },
        [eT.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                l = t.getChannelId(),
                r = (0, a.e7)([M.Z], () => M.Z.getChannel(l), [l]),
                s = null != r ? r.getGuildId() : null;
            return (0, i.jsx)(er.FJ, {
                message: t,
                compact: n,
                onClick: () => {
                    null != s && I.Z.open(s, eT.pNK.DISCOVERY);
                }
            });
        },
        [eT.uaV.GUILD_DISCOVERY_REQUALIFIED]: er.xe,
        [eT.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: er.HL,
        [eT.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: er.Yc,
        [eT.uaV.THREAD_CREATED]: function (e) {
            let { message: t, channel: a, compact: o } = e,
                c = (0, Q.l)({
                    user: t.author,
                    channelId: t.channel_id,
                    guildId: a.guild_id,
                    messageId: t.id
                }),
                d = l.useCallback(
                    async (e) => {
                        var n;
                        let i = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                        if (null != i) {
                            await Z.Z.loadThread(i);
                            let t = M.Z.getChannel(i);
                            null != t && (0, R.ok)(t, e.shiftKey);
                        }
                    },
                    [t]
                ),
                u = l.useCallback(() => {
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('91315'), n.e('73279')]).then(n.bind(n, 223901));
                        return (t) =>
                            (0, i.jsx)(e, {
                                channel: a,
                                ...t
                            });
                    });
                }, [a]),
                m = l.useCallback(
                    (e) => {
                        var l;
                        let a = M.Z.getChannel(null === (l = t.messageReference) || void 0 === l ? void 0 : l.channel_id);
                        null != a &&
                            (0, s.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('75206')]).then(n.bind(n, 422200));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        channel: a
                                    });
                            });
                    },
                    [t]
                );
            return (0, i.jsx)(eC.Z, {
                message: t,
                compact: o,
                usernameHook: c,
                onClickThread: d,
                onClickViewThreads: u,
                onContextMenuThread: m
            });
        },
        [eT.uaV.THREAD_STARTER_MESSAGE]: eI.Z,
        [eT.uaV.GUILD_INVITE_REMINDER]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                r = (0, a.e7)([U.default], () => U.default.getCurrentUser()),
                s = (0, a.e7)([O.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = O.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(r)) && void 0 !== t && t;
                });
            return (0, i.jsx)(eu.Z, {
                message: t,
                compact: l,
                isOwner: s,
                channel: n
            });
        },
        [eT.uaV.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: l } = e;
            return (0, g.nY)(t)
                ? (0, i.jsx)(J.Z, {
                      message: t,
                      compact: n,
                      channel: l
                  })
                : null;
        },
        [eT.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eZ,
        [eT.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eZ,
        [eT.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: l.id,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(eo.Z, {
                message: t,
                compact: n,
                channel: l,
                usernameHook: a
            });
        },
        [eT.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: l.id,
                    guildId: l.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(es.Z, {
                message: t,
                compact: n,
                channel: l,
                usernameHook: a
            });
        },
        [eT.uaV.ROLE_SUBSCRIPTION_PURCHASE]: C.Z,
        [eT.uaV.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: l, compact: a } = e;
            return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === u.Eh.GUILD_PRODUCT
                ? (0, i.jsx)(x.Z, {
                      message: n,
                      channel: l,
                      compact: a
                  })
                : null;
        },
        [eT.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eT.uaV.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                r = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                }),
                s = (0, a.e7)([v.ZP], () => v.ZP.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ef.Z, {
                        message: t,
                        compact: l,
                        usernameHook: r
                    }),
                    null != s && s.name === t.content ? (0, i.jsx)(E.Z, { code: ''.concat(n.guild_id, '-').concat(s.id) }) : null
                ]
            });
        },
        [eT.uaV.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(eh.Z, {
                message: t,
                compact: l,
                usernameHook: a
            });
        },
        [eT.uaV.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(eg.Z, {
                message: t,
                compact: l,
                usernameHook: a
            });
        },
        [eT.uaV.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: l, channel: s, compact: c } = e,
                d = (0, Q.l)({
                    user: l.author,
                    channelId: s.id,
                    guildId: s.guild_id,
                    messageId: l.id
                }),
                u = (0, a.e7)([D.Z], () => D.Z.can(eT.Plq.MUTE_MEMBERS, s)),
                m = (0, a.e7)([j.Z], () => j.Z.getParticipant(s.id, l.author.id)),
                _ = new Date(z.default.extractTimestamp(l.id)).toISOString() === new Date(null !== (n = null == m ? void 0 : null === (t = m.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
                h = u && (null == m ? void 0 : m.rtsState) === y.xO.REQUESTED_TO_SPEAK && _;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ep.Z, {
                        message: l,
                        compact: c,
                        usernameHook: d
                    }),
                    h
                        ? (0, i.jsxs)(r.zxk, {
                              wrapperClassName: ej.inviteToSpeakButtonWrapper,
                              innerClassName: ej.inviteToSpeakButtonInner,
                              look: r.zxk.Looks.FILLED,
                              color: r.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  (0, A.DT)(s, l.author.id, !1), o.Z.deleteMessage(s.id, l.id, !0);
                              },
                              children: [
                                  (0, i.jsx)(r.Lrb, {
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
        [eT.uaV.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, Q.l)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id
                });
            return (0, i.jsx)(ex.Z, {
                message: t,
                compact: l,
                usernameHook: a
            });
        },
        [eT.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
        [eT.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: T.P,
        [eT.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: T.e,
        [eT.uaV.PREMIUM_REFERRAL]: void 0,
        [eT.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(_.Z, {
                message: t,
                channel: n,
                compact: l
            });
        },
        [eT.uaV.CUSTOM_GIFT]: void 0,
        [eT.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(m.Z, {
                message: t,
                channel: n,
                compact: l
            });
        },
        [eT.uaV.VOICE_HANGOUT_INVITE]: void 0,
        [eT.uaV.POLL_RESULT]: N.Z,
        [eT.uaV.CHANGELOG]: void 0,
        [eT.uaV.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)(q.Z, {
                message: t,
                channel: n
            });
        },
        [eT.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(en.Z, {
                message: t,
                channel: n,
                compact: l
            });
        },
        [eT.uaV.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                l = t.giftingPrompt,
                r = (0, a.e7)([U.default], () => U.default.getUser(null == l ? void 0 : l.recipientUserId));
            return null == l || null == r
                ? null
                : (0, i.jsx)(K.Z, {
                      giftIntentType: l.giftIntentType,
                      recipientUser: r,
                      channel: n,
                      giftIntentSecondaryAction: l.giftIntentSecondaryAction
                  });
        },
        [eT.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(ed.Z, {
                message: t,
                channel: n,
                author: t.author,
                compact: l
            });
        },
        [eT.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: h.Cn,
        [eT.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: h.Ue,
        [eT.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: h.R6,
        [eT.uaV.HD_STREAMING_UPGRADED]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(Y.Z, {
                message: t,
                channel: n,
                compact: l
            });
        }
    }),
    eL = l.memo(function (e) {
        let { message: t, channel: n, compact: l, disableInteraction: a } = e,
            { type: r } = t,
            s = eR[r];
        if (null == s) {
            var o;
            return (o = Error('unknown message type '.concat(t.type))), V.Z.captureException(o), new p.Z('SystemMessage').error('', o), null;
        }
        return (0, i.jsx)(X.ZP, {
            message: t,
            content: (0, W.ZP)(t).content,
            children: (0, i.jsx)(s, {
                message: t,
                channel: n,
                compact: l,
                disableInteraction: a
            })
        });
    });
