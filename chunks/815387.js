n(411104);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(904245),
    c = n(287734),
    u = n(872810),
    d = n(911969),
    m = n(376484),
    h = n(362604),
    f = n(981772),
    p = n(710845),
    _ = n(825829),
    g = n(623624),
    E = n(533694),
    C = n(182180),
    I = n(924301),
    x = n(225890),
    N = n(434404),
    v = n(507435),
    T = n(504733),
    S = n(563959),
    A = n(703656),
    b = n(471253),
    j = n(565799),
    R = n(590415),
    Z = n(911560),
    P = n(488131),
    L = n(814820),
    y = n(314897),
    O = n(523746),
    M = n(592125),
    D = n(430824),
    k = n(496675),
    U = n(158776),
    B = n(944486),
    w = n(594174),
    F = n(979651),
    G = n(585483),
    V = n(5192),
    H = n(960048),
    z = n(709054),
    W = n(937889),
    K = n(15642),
    Y = n(260736),
    X = n(930282),
    Q = n(818570),
    q = n(942951),
    J = n(9423),
    $ = n(789267),
    ee = n(262),
    et = n(303135),
    en = n(673052),
    ei = n(385063),
    er = n(253118),
    el = n(54817),
    ea = n(502115),
    eo = n(27103),
    es = n(396252),
    ec = n(522860),
    eu = n(600397),
    ed = n(582298),
    em = n(73352),
    eh = n(507962),
    ef = n(857640),
    ep = n(614972),
    e_ = n(701181),
    eg = n(29338),
    eE = n(461135),
    eC = n(296571),
    eI = n(587737),
    ex = n(482239),
    eN = n(328749),
    ev = n(4305),
    eT = n(910548),
    eS = n(981631),
    eA = n(70722),
    eb = n(388032),
    ej = n(938530);
function eR(e) {
    let { message: t, channel: n, compact: a } = e,
        { author: o } = t,
        { guild_id: s } = n,
        c = t.getChannelId(),
        u = (0, l.e7)([D.Z], () => D.Z.getGuild(s), [s]),
        d = r.useCallback(() => {
            if (null != u)
                (0, g.f)({
                    guildId: u.id,
                    location: {
                        section: eS.jXE.CHANNEL_TEXT_AREA,
                        object: eS.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        m = (0, q.l)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(eT.ZP, {
        message: t,
        compact: a,
        guild: u,
        usernameHook: m,
        onClickMessage: d
    });
}
function eZ(e) {
    let { message: t, compact: n, channel: r } = e,
        l = (0, q.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(el.Z, {
        message: t,
        compact: n,
        usernameHook: l
    });
}
let eP = Object.freeze({
    [eS.uaV.DEFAULT]: void 0,
    [eS.uaV.REPLY]: void 0,
    [eS.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eS.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eS.uaV.RECIPIENT_ADD]: function (e) {
        let { message: t, channel: n, compact: r } = e,
            { author: a } = t,
            o = t.getChannelId(),
            s = (0, l.e7)([w.default], () => w.default.getUser(t.mentions[0]), [t]),
            c = V.ZP.getName(null, o, s),
            u = (0, q.l)({
                user: a,
                channelId: o,
                guildId: n.guild_id,
                messageId: t.id
            }),
            d = (0, q.l)({
                user: s,
                channelId: o,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread()
            ? (0, i.jsx)(eI.Z, {
                  message: t,
                  channel: n,
                  compact: r,
                  targetUser: s,
                  actorUsernameHook: u,
                  targetUsernameHook: d
              })
            : (0, i.jsx)(em.Z, {
                  message: t,
                  compact: r,
                  otherUsername: c,
                  usernameHook: u,
                  otherUsernameHook: d
              });
    },
    [eS.uaV.RECIPIENT_REMOVE]: function (e) {
        let { message: t, channel: n, compact: r } = e,
            { author: a } = t,
            o = t.getChannelId(),
            s = (0, l.e7)([w.default], () => w.default.getUser(t.mentions[0]), [t]),
            c = (0, q.l)({
                user: a,
                channelId: o,
                guildId: n.guild_id,
                messageId: t.id
            }),
            u = (0, q.l)({
                user: s,
                channelId: o,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread()
            ? (0, i.jsx)(ex.Z, {
                  message: t,
                  channel: n,
                  compact: r,
                  targetUser: s,
                  actorUsernameHook: c,
                  targetUsernameHook: u
              })
            : null != s && s.id !== a.id
              ? (0, i.jsx)(eh.Z, {
                    message: t,
                    channel: n,
                    compact: r,
                    usernameHook: c,
                    otherUser: s,
                    otherUsernameHook: u
                })
              : (0, i.jsx)(eh.Z, {
                    message: t,
                    channel: n,
                    usernameHook: c
                });
    },
    [eS.uaV.CALL]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { id: o, author: s } = t,
            u = y.default.getId(),
            d = t.getChannelId(),
            m = (0, l.e7)([O.Z], () => O.Z.isCallActive(d, o), [d, o]),
            h = (0, l.e7)([F.Z], () => F.Z.getVoiceState(eS.ME, u)),
            f = !m && null != t.call && !t.call.participants.includes(u),
            p = m && (null == h || h.channelId !== d),
            _ = r.useCallback(() => c.default.selectVoiceChannel(d), [d]),
            g = (0, q.l)({
                user: s,
                channelId: d,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)($.Z, {
            compact: n,
            message: t,
            missed: f,
            joinable: p,
            usernameHook: g,
            onClickJoinCall: _
        });
    },
    [eS.uaV.CHANNEL_NAME_CHANGE]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            { author: l } = t,
            a = t.getChannelId(),
            o = (0, q.l)({
                user: l,
                channelId: a,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ei.Z, {
            compact: n,
            message: t,
            usernameHook: o,
            isForumPost: r.isForumPost()
        });
    },
    [eS.uaV.CHANNEL_ICON_CHANGE]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            { author: l } = t,
            a = t.getChannelId(),
            o = (0, q.l)({
                user: l,
                channelId: a,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(et.Z, {
            compact: n,
            message: t,
            usernameHook: o
        });
    },
    [eS.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
        let { message: t, compact: n, channel: l } = e,
            { author: a } = t,
            o = t.getChannelId(),
            s = r.useCallback(() => {
                if (B.Z.getChannelId() !== o) {
                    let e = M.Z.getChannel(o);
                    null != e && (0, A.XU)(e.guild_id, e.id);
                }
                setTimeout(() => G.S.dispatch(eS.CkL.TOGGLE_CHANNEL_PINS), 0);
            }, [o]),
            c = (0, q.l)({
                user: a,
                channelId: o,
                guildId: l.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(er.Z, {
            message: t,
            compact: n,
            usernameHook: c,
            onClickPins: __OVERLAY__ ? null : s
        });
    },
    [eS.uaV.USER_JOIN]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            { author: l } = t,
            a = t.getChannelId(),
            o = (0, q.l)({
                user: l,
                channelId: a,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ev.Z, {
                    message: t,
                    guildId: r.guild_id,
                    compact: n,
                    usernameHook: o
                }),
                (0, i.jsx)(L.f, {
                    channel: r,
                    message: t
                })
            ]
        });
    },
    [eS.uaV.GUILD_BOOST]: eR,
    [eS.uaV.GUILD_BOOST_TIER_1]: eR,
    [eS.uaV.GUILD_BOOST_TIER_2]: eR,
    [eS.uaV.GUILD_BOOST_TIER_3]: eR,
    [eS.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            { author: l } = t,
            a = t.getChannelId(),
            o = (0, q.l)({
                user: l,
                channelId: a,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ee.Z, {
            message: t,
            compact: n,
            usernameHook: o
        });
    },
    [eS.uaV.GUILD_STREAM]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            {
                author: o,
                author: { id: s },
                messageReference: c
            } = t,
            d = t.getChannelId(),
            m = (0, l.e7)([U.Z], () => U.Z.findActivity(s, (e) => e.type === eS.IIU.PLAYING), [s]),
            h = (0, l.e7)([M.Z], () => (null != c ? M.Z.getChannel(c.channel_id) : null), [c]),
            f = null == c ? void 0 : c.guild_id,
            p = (0, q.l)({
                user: o,
                channelId: d,
                guildId: a.guild_id,
                messageId: t.id
            }),
            _ = r.useCallback(() => {
                if (null != h && null != f)
                    (0, u.iV)({
                        streamType: eA.lo.GUILD,
                        ownerId: s,
                        channelId: h.id,
                        guildId: f
                    });
            }, [s, h, f]);
        return null != c && null != h && null != c.guild_id
            ? (0, i.jsx)(ec.Z, {
                  message: t,
                  compact: n,
                  channel: h,
                  playingActivity: m,
                  onJoinStream: _,
                  usernameHook: p
              })
            : null;
    },
    [eS.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
        let { message: t, compact: n } = e,
            r = t.getChannelId(),
            a = (0, l.e7)([M.Z], () => M.Z.getChannel(r), [r]),
            o = null != a ? a.getGuildId() : null;
        return (0, i.jsx)(ea.FJ, {
            message: t,
            compact: n,
            onClick: () => {
                null != o && N.Z.open(o, eS.pNK.DISCOVERY);
            }
        });
    },
    [eS.uaV.GUILD_DISCOVERY_REQUALIFIED]: ea.xe,
    [eS.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ea.HL,
    [eS.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ea.Yc,
    [eS.uaV.THREAD_CREATED]: function (e) {
        let { message: t, channel: l, compact: s } = e,
            c = (0, q.l)({
                user: t.author,
                channelId: t.channel_id,
                guildId: l.guild_id,
                messageId: t.id
            }),
            u = r.useCallback(
                async (e) => {
                    var n;
                    let i = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                    if (null != i) {
                        await Z.Z.loadThread(i);
                        let t = M.Z.getChannel(i);
                        null != t && (0, P.ok)(t, e.shiftKey);
                    }
                },
                [t]
            ),
            d = r.useCallback(() => {
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('91315'), n.e('73279')]).then(n.bind(n, 223901));
                    return (t) =>
                        (0, i.jsx)(e, {
                            channel: l,
                            ...t
                        });
                });
            }, [l]),
            m = r.useCallback(
                (e) => {
                    var r;
                    let l = M.Z.getChannel(null === (r = t.messageReference) || void 0 === r ? void 0 : r.channel_id);
                    null != l &&
                        (0, o.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('75206')]).then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: l
                                });
                        });
                },
                [t]
            );
        return (0, i.jsx)(eC.Z, {
            message: t,
            compact: s,
            usernameHook: c,
            onClickThread: u,
            onClickViewThreads: d,
            onContextMenuThread: m
        });
    },
    [eS.uaV.THREAD_STARTER_MESSAGE]: eN.Z,
    [eS.uaV.GUILD_INVITE_REMINDER]: function (e) {
        let { message: t, channel: n, compact: r } = e,
            a = (0, l.e7)([w.default], () => w.default.getCurrentUser()),
            o = (0, l.e7)([D.Z], () => {
                var e, t;
                return null !== (t = null === (e = D.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(a)) && void 0 !== t && t;
            });
        return (0, i.jsx)(ed.Z, {
            message: t,
            compact: r,
            isOwner: o,
            channel: n
        });
    },
    [eS.uaV.AUTO_MODERATION_ACTION]: function (e) {
        let { message: t, compact: n, channel: r } = e;
        return (0, _.nY)(t)
            ? (0, i.jsx)(J.Z, {
                  message: t,
                  compact: n,
                  channel: r
              })
            : null;
    },
    [eS.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eZ,
    [eS.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eZ,
    [eS.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            l = (0, q.l)({
                user: t.author,
                channelId: r.id,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(es.Z, {
            message: t,
            compact: n,
            channel: r,
            usernameHook: l
        });
    },
    [eS.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            l = (0, q.l)({
                user: t.author,
                channelId: r.id,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eo.Z, {
            message: t,
            compact: n,
            channel: r,
            usernameHook: l
        });
    },
    [eS.uaV.ROLE_SUBSCRIPTION_PURCHASE]: C.Z,
    [eS.uaV.PURCHASE_NOTIFICATION]: function (e) {
        var t;
        let { message: n, channel: r, compact: l } = e;
        return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
            ? (0, i.jsx)(E.Z, {
                  message: n,
                  channel: r,
                  compact: l
              })
            : null;
    },
    [eS.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eS.uaV.STAGE_START]: function (e) {
        let { message: t, channel: n, compact: r } = e,
            a = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }),
            o = (0, l.e7)([I.ZP], () => I.ZP.getActiveEventByChannel(n.id), [n.id]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eg.Z, {
                    message: t,
                    compact: r,
                    usernameHook: a
                }),
                null != o && o.name === t.content ? (0, i.jsx)(x.Z, { code: ''.concat(n.guild_id, '-').concat(o.id) }) : null
            ]
        });
    },
    [eS.uaV.STAGE_END]: function (e) {
        let { message: t, channel: n, compact: r } = e,
            l = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ef.Z, {
            message: t,
            compact: r,
            usernameHook: l
        });
    },
    [eS.uaV.STAGE_SPEAKER]: function (e) {
        let { message: t, channel: n, compact: r } = e,
            l = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(e_.Z, {
            message: t,
            compact: r,
            usernameHook: l
        });
    },
    [eS.uaV.STAGE_RAISE_HAND]: function (e) {
        var t, n;
        let { message: r, channel: o, compact: c } = e,
            u = (0, q.l)({
                user: r.author,
                channelId: o.id,
                guildId: o.guild_id,
                messageId: r.id
            }),
            d = (0, l.e7)([k.Z], () => k.Z.can(eS.Plq.MUTE_MEMBERS, o)),
            m = (0, l.e7)([j.Z], () => j.Z.getParticipant(o.id, r.author.id)),
            h = new Date(z.default.extractTimestamp(r.id)).toISOString() === new Date(null !== (n = null == m ? void 0 : null === (t = m.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
            f = d && (null == m ? void 0 : m.rtsState) === R.xO.REQUESTED_TO_SPEAK && h;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ep.Z, {
                    message: r,
                    compact: c,
                    usernameHook: u
                }),
                f
                    ? (0, i.jsxs)(a.Button, {
                          wrapperClassName: ej.inviteToSpeakButtonWrapper,
                          innerClassName: ej.inviteToSpeakButtonInner,
                          look: a.Button.Looks.FILLED,
                          color: a.Button.Colors.PRIMARY,
                          onClick: () => {
                              (0, b.DT)(o, r.author.id, !1), s.Z.deleteMessage(o.id, r.id, !0);
                          },
                          children: [
                              (0, i.jsx)(a.MicrophoneArrowRightIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  height: 20,
                                  width: 20
                              }),
                              eb.intl.string(eb.t.f0T7hI)
                          ]
                      })
                    : null
            ]
        });
    },
    [eS.uaV.STAGE_TOPIC]: function (e) {
        let { message: t, channel: n, compact: r } = e,
            l = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eE.Z, {
            message: t,
            compact: r,
            usernameHook: l
        });
    },
    [eS.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: T.Z,
    [eS.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: S.P,
    [eS.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: S.e,
    [eS.uaV.PREMIUM_REFERRAL]: void 0,
    [eS.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
        let { message: t, channel: n, compact: r } = e;
        return (0, i.jsx)(h.Z, {
            message: t,
            channel: n,
            compact: r
        });
    },
    [eS.uaV.CUSTOM_GIFT]: void 0,
    [eS.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
        let { message: t, channel: n, compact: r } = e;
        return (0, i.jsx)(m.Z, {
            message: t,
            channel: n,
            compact: r
        });
    },
    [eS.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eS.uaV.POLL_RESULT]: v.Z,
    [eS.uaV.CHANGELOG]: void 0,
    [eS.uaV.NITRO_NOTIFICATION]: function (e) {
        let { message: t, channel: n } = e;
        return (0, i.jsx)(Q.Z, {
            message: t,
            channel: n
        });
    },
    [eS.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
        let { message: t, channel: n, compact: r } = e;
        return (0, i.jsx)(en.Z, {
            message: t,
            channel: n,
            compact: r
        });
    },
    [eS.uaV.GIFTING_PROMPT]: function (e) {
        let { message: t, channel: n } = e,
            r = t.giftingPrompt,
            a = (0, l.e7)([w.default], () => w.default.getUser(null == r ? void 0 : r.recipientUserId));
        return null == r || null == a
            ? null
            : (0, i.jsx)(K.Z, {
                  giftIntentType: r.giftIntentType,
                  recipientUser: a,
                  channel: n,
                  giftIntentSecondaryAction: r.giftIntentSecondaryAction
              });
    },
    [eS.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
        let { message: t, channel: n, compact: r } = e;
        return (0, i.jsx)(eu.Z, {
            message: t,
            channel: n,
            author: t.author,
            compact: r
        });
    },
    [eS.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: f.Cn,
    [eS.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: f.Ue,
    [eS.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: f.R6,
    [eS.uaV.HD_STREAMING_UPGRADED]: function (e) {
        let { message: t, channel: n, compact: r } = e;
        return (0, i.jsx)(Y.Z, {
            message: t,
            channel: n,
            compact: r
        });
    }
});
t.Z = r.memo(function (e) {
    let { message: t, channel: n, compact: r, disableInteraction: l } = e,
        { type: a } = t,
        o = eP[a];
    if (null == o) {
        var s;
        return (s = Error('unknown message type '.concat(t.type))), H.Z.captureException(s), new p.Z('SystemMessage').error('', s), null;
    }
    return (0, i.jsx)(X.ZP, {
        message: t,
        content: (0, W.ZP)(t).content,
        children: (0, i.jsx)(o, {
            message: t,
            channel: n,
            compact: r,
            disableInteraction: l
        })
    });
});
