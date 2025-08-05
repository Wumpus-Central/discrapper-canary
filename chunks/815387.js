(n.d(t, { Z: () => to }), n(415506));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(904245),
    c = n(287734),
    u = n(872810),
    d = n(911969),
    f = n(376484),
    _ = n(362604),
    p = n(479110),
    h = n(413189),
    m = n(710845),
    g = n(387188),
    E = n(825829),
    b = n(623624),
    y = n(29887),
    O = n(533694),
    v = n(345114),
    I = n(924301),
    T = n(225890),
    S = n(434404),
    A = n(507435),
    N = n(504733),
    C = n(563959),
    w = n(917318),
    R = n(703656),
    P = n(471253),
    D = n(565799),
    L = n(590415),
    x = n(911560),
    k = n(488131),
    j = n(814820),
    M = n(314897),
    U = n(523746),
    G = n(592125),
    B = n(430824),
    Z = n(496675),
    F = n(158776),
    V = n(944486),
    H = n(594174),
    Y = n(979651),
    W = n(585483),
    K = n(5192),
    z = n(960048),
    q = n(709054),
    $ = n(937889),
    X = n(15642),
    Q = n(260736),
    J = n(930282),
    ee = n(818570),
    et = n(942951),
    en = n(9423),
    er = n(789267),
    ei = n(262),
    ea = n(303135),
    eo = n(673052),
    es = n(385063),
    el = n(253118),
    ec = n(54817),
    eu = n(502115),
    ed = n(27103),
    ef = n(396252),
    e_ = n(522860),
    ep = n(600397),
    eh = n(73352),
    em = n(507962),
    eg = n(857640),
    eE = n(614972),
    eb = n(701181),
    ey = n(29338),
    eO = n(461135),
    ev = n(296571),
    eI = n(587737),
    eT = n(482239),
    eS = n(328749),
    eA = n(4305),
    eN = n(910548),
    eC = n(981631),
    ew = n(70722),
    eR = n(388032);
function eP(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eD(e) {
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
                eP(e, t, n[t]);
            }));
    }
    return e;
}
function eL(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function ex(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eL(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ek(e) {
    (z.Z.captureException(e), new m.Z('SystemMessage').error('', e));
}
function ej(e) {
    let { message: t, compact: n, channel: o } = e,
        { id: s, author: l } = t,
        u = M.default.getId(),
        d = t.getChannelId(),
        f = (0, a.e7)([U.Z], () => U.Z.isCallActive(d, s), [d, s]),
        _ = (0, a.e7)([Y.Z], () => Y.Z.getVoiceState(eC.ME, u)),
        p = !f && null != t.call && !t.call.participants.includes(u),
        h = f && (null == _ || _.channelId !== d),
        m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        g = (0, et.l)({
            user: l,
            channelId: d,
            guildId: o.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(er.Z, {
        compact: n,
        message: t,
        missed: p,
        joinable: h,
        usernameHook: g,
        onClickJoinCall: m
    });
}
function eM(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, et.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(es.Z, {
        compact: n,
        message: t,
        usernameHook: s,
        isForumPost: i.isForumPost()
    });
}
function eU(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, et.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(ea.Z, {
        compact: n,
        message: t,
        usernameHook: s
    });
}
function eG(e) {
    let { message: t, compact: n, channel: a } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = i.useCallback(() => {
            if (V.Z.getChannelId() !== s) {
                let e = G.Z.getChannel(s);
                null != e && (0, R.XU)(e.guild_id, e.id);
            }
            setTimeout(() => W.S.dispatch(eC.CkL.TOGGLE_CHANNEL_PINS), 0);
        }, [s]),
        c = (0, et.l)({
            user: o,
            channelId: s,
            guildId: a.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(el.Z, {
        message: t,
        compact: n,
        usernameHook: c,
        onClickPins: __OVERLAY__ ? null : l
    });
}
function eB(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = (0, a.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
        c = K.ZP.getName(null, s, l),
        u = (0, et.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        d = (0, et.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        });
    return n.isThread()
        ? (0, r.jsx)(eI.Z, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
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
}
function eZ(e) {
    let { message: t, channel: a, compact: l } = e,
        c = (0, et.l)({
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
                    await x.Z.loadThread(r);
                    let t = G.Z.getChannel(r);
                    null != t && (0, k.ok)(t, e.shiftKey);
                }
            },
            [t]
        ),
        d = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('91315'), n.e('59505')]).then(n.bind(n, 223901));
                return (t) => (0, r.jsx)(e, eD({ channel: a }, t));
            });
        }, [a]),
        f = i.useCallback(
            (e) => {
                var i;
                let a = G.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                null != a &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('46154'), n.e('48334')]).then(n.bind(n, 422200));
                        return (t) => (0, r.jsx)(e, ex(eD({}, t), { channel: a }));
                    });
            },
            [t]
        );
    return (0, r.jsx)(ev.Z, {
        message: t,
        compact: l,
        usernameHook: c,
        onClickThread: u,
        onClickViewThreads: d,
        onContextMenuThread: f
    });
}
function eF(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = (0, a.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
        c = (0, et.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        u = (0, et.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        });
    return n.isThread()
        ? (0, r.jsx)(eT.Z, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
              actorUsernameHook: c,
              targetUsernameHook: u
          })
        : null != l && l.id !== o.id
          ? (0, r.jsx)(em.Z, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: c,
                otherUser: l,
                otherUsernameHook: u
            })
          : (0, r.jsx)(em.Z, {
                message: t,
                channel: n,
                usernameHook: c
            });
}
function eV(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, et.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eA.Z, {
                message: t,
                compact: n,
                usernameHook: s
            }),
            (0, r.jsx)(j.f, {
                channel: i,
                message: t
            })
        ]
    });
}
function eH(e) {
    let { message: t, channel: n, compact: o } = e,
        { author: s } = t,
        { guild_id: l } = n,
        c = t.getChannelId(),
        u = (0, a.e7)([B.Z], () => B.Z.getGuild(l), [l]),
        d = i.useCallback(() => {
            null != u &&
                (0, b.f)({
                    guildId: u.id,
                    location: {
                        section: eC.jXE.CHANNEL_TEXT_AREA,
                        object: eC.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        f = (0, et.l)({
            user: s,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, r.jsx)(eN.ZP, {
        message: t,
        compact: o,
        guild: u,
        usernameHook: f,
        onClickMessage: d
    });
}
function eY(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, et.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(ei.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
function eW(e) {
    let { message: t, compact: n, channel: o } = e,
        {
            author: s,
            author: { id: l },
            messageReference: c
        } = t,
        d = t.getChannelId(),
        f = (0, a.e7)([F.Z], () => F.Z.findActivity(l, (e) => e.type === eC.IIU.PLAYING), [l]),
        _ = (0, a.e7)([G.Z], () => (null != c ? G.Z.getChannel(c.channel_id) : null), [c]),
        p = null == c ? void 0 : c.guild_id,
        h = (0, et.l)({
            user: s,
            channelId: d,
            guildId: o.guild_id,
            messageId: t.id
        }),
        m = i.useCallback(() => {
            null != _ &&
                null != p &&
                (0, u.iV)({
                    streamType: ew.lo.GUILD,
                    ownerId: l,
                    channelId: _.id,
                    guildId: p
                });
        }, [l, _, p]);
    return null != c && null != _ && null != c.guild_id
        ? (0, r.jsx)(e_.Z, {
              message: t,
              compact: n,
              channel: _,
              playingActivity: f,
              onJoinStream: m,
              usernameHook: h
          })
        : null;
}
function eK(e) {
    let { message: t, compact: n } = e,
        i = t.getChannelId(),
        o = (0, a.e7)([G.Z], () => G.Z.getChannel(i), [i]),
        s = null != o ? o.getGuildId() : null,
        l = () => {
            null != s && S.Z.open(s, eC.pNK.ACCESS, eC.KsC.ACCESS_DISCOVERABLE);
        };
    return (0, r.jsx)(eu.FJ, {
        message: t,
        compact: n,
        onClick: l
    });
}
function ez(e) {
    let { message: t, compact: n, channel: i } = e;
    return (0, E.nY)(t)
        ? (0, r.jsx)(en.Z, {
              message: t,
              compact: n,
              channel: i
          })
        : null;
}
function eq(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(ec.Z, {
        message: t,
        compact: n,
        usernameHook: a
    });
}
function e$(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(ef.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a
    });
}
function eX(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(ed.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a
    });
}
function eQ(e) {
    let { message: t, channel: n, compact: i } = e,
        o = (0, et.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        }),
        s = (0, a.e7)([I.ZP], () => I.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ey.Z, {
                message: t,
                compact: i,
                usernameHook: o
            }),
            null != s && s.name === t.content ? (0, r.jsx)(T.Z, { code: ''.concat(n.guild_id, '-').concat(s.id) }) : null
        ]
    });
}
function eJ(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
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
}
function e0(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(eO.Z, {
        message: t,
        compact: i,
        usernameHook: a
    });
}
function e1(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
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
}
function e2(e) {
    var t, n;
    let { message: i, channel: s, compact: c } = e,
        u = (0, et.l)({
            user: i.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: i.id
        }),
        d = (0, a.e7)([Z.Z], () => Z.Z.can(eC.Plq.MUTE_MEMBERS, s)),
        f = () => {
            ((0, P.DT)(s, i.author.id, !1), l.Z.deleteMessage(s.id, i.id, !0));
        },
        _ = (0, a.e7)([D.Z], () => D.Z.getParticipant(s.id, i.author.id)),
        p = new Date(q.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == _ || null == (t = _.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0).toISOString(),
        h = d && (null == _ ? void 0 : _.rtsState) === L.xO.REQUESTED_TO_SPEAK && p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eE.Z, {
                message: i,
                compact: c,
                usernameHook: u
            }),
            h
                ? (0, r.jsx)(o.zxk, {
                      variant: 'secondary',
                      onClick: f,
                      text: eR.intl.string(eR.t.f0T7hI),
                      icon: o.Lrb
                  })
                : null
        ]
    });
}
function e3(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(_.Z, {
        message: t,
        channel: n,
        compact: i
    });
}
function e5(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: i
    });
}
function e4(e) {
    var t;
    let { message: n, channel: i, compact: a } = e;
    return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
        ? (0, r.jsx)(O.Z, {
              message: n,
              channel: i,
              compact: a
          })
        : null;
}
function e6(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(Q.Z, {
        message: t,
        channel: n,
        compact: i
    });
}
function e8(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(ee.Z, {
        message: t,
        channel: n
    });
}
function e7(e) {
    let { message: t, channel: n } = e,
        i = t.giftingPrompt,
        o = (0, a.e7)([H.default], () => H.default.getUser(null == i ? void 0 : i.recipientUserId));
    return null == i || null == o
        ? null
        : (0, r.jsx)(X.Z, {
              giftIntentType: i.giftIntentType,
              recipientUser: o,
              channel: n,
              giftIntentSecondaryAction: i.giftIntentSecondaryAction
          });
}
function e9(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(eo.Z, {
        message: t,
        channel: n,
        compact: i
    });
}
function te(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ep.Z, {
        message: t,
        channel: n,
        author: t.author,
        compact: i
    });
}
function tt(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(h.Z, {
        message: t,
        channel: n,
        compact: i
    });
}
function tn(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(p.Z, {
        message: t,
        channel: n,
        compact: i
    });
}
function tr(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(g.iq, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: a
    });
}
let ti = Object.freeze({
    [eC.uaV.DEFAULT]: void 0,
    [eC.uaV.REPLY]: void 0,
    [eC.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eC.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eC.uaV.RECIPIENT_ADD]: eB,
    [eC.uaV.RECIPIENT_REMOVE]: eF,
    [eC.uaV.CALL]: ej,
    [eC.uaV.CHANNEL_NAME_CHANGE]: eM,
    [eC.uaV.CHANNEL_ICON_CHANGE]: eU,
    [eC.uaV.CHANNEL_PINNED_MESSAGE]: eG,
    [eC.uaV.USER_JOIN]: eV,
    [eC.uaV.GUILD_BOOST]: eH,
    [eC.uaV.GUILD_BOOST_TIER_1]: eH,
    [eC.uaV.GUILD_BOOST_TIER_2]: eH,
    [eC.uaV.GUILD_BOOST_TIER_3]: eH,
    [eC.uaV.CHANNEL_FOLLOW_ADD]: eY,
    [eC.uaV.GUILD_STREAM]: eW,
    [eC.uaV.GUILD_DISCOVERY_DISQUALIFIED]: eK,
    [eC.uaV.GUILD_DISCOVERY_REQUALIFIED]: eu.xe,
    [eC.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eu.HL,
    [eC.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eu.Yc,
    [eC.uaV.THREAD_CREATED]: eZ,
    [eC.uaV.THREAD_STARTER_MESSAGE]: eS.Z,
    [eC.uaV.GUILD_INVITE_REMINDER]: void 0,
    [eC.uaV.AUTO_MODERATION_ACTION]: ez,
    [eC.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eq,
    [eC.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eq,
    [eC.uaV.GUILD_INCIDENT_REPORT_RAID]: e$,
    [eC.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eX,
    [eC.uaV.ROLE_SUBSCRIPTION_PURCHASE]: v.Z,
    [eC.uaV.PURCHASE_NOTIFICATION]: e4,
    [eC.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eC.uaV.STAGE_START]: eQ,
    [eC.uaV.STAGE_END]: eJ,
    [eC.uaV.STAGE_SPEAKER]: e1,
    [eC.uaV.STAGE_RAISE_HAND]: e2,
    [eC.uaV.STAGE_TOPIC]: e0,
    [eC.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: N.Z,
    [eC.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: C.P,
    [eC.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: C.e,
    [eC.uaV.PREMIUM_REFERRAL]: void 0,
    [eC.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: e3,
    [eC.uaV.CUSTOM_GIFT]: void 0,
    [eC.uaV.GUILD_GAMING_STATS_PROMPT]: e5,
    [eC.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eC.uaV.POLL_RESULT]: A.Z,
    [eC.uaV.CHANGELOG]: void 0,
    [eC.uaV.NITRO_NOTIFICATION]: e8,
    [eC.uaV.CHANNEL_LINKED_TO_LOBBY]: e9,
    [eC.uaV.GIFTING_PROMPT]: e7,
    [eC.uaV.IN_GAME_MESSAGE_NUX]: te,
    [eC.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: y.Cn,
    [eC.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: y.Ue,
    [eC.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: y.R6,
    [eC.uaV.HD_STREAMING_UPGRADED]: e6,
    [eC.uaV.EMOJI_ADDED]: tr,
    [eC.uaV.CHAT_WALLPAPER_SET]: tt,
    [eC.uaV.CHAT_WALLPAPER_REMOVED]: tn,
    [eC.uaV.REPORT_TO_MOD_BAN_USER]: w.Z,
    [eC.uaV.REPORT_TO_MOD_KICK_USER]: w.Z,
    [eC.uaV.REPORT_TO_MOD_TIMEOUT_USER]: w.Z,
    [eC.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: w.Z,
    [eC.uaV.REPORT_TO_MOD_CLOSED_REPORT]: w.Z
});
function ta(e) {
    let { message: t, channel: n, compact: i, disableInteraction: a } = e,
        { type: o } = t,
        s = ti[o];
    return null == s
        ? (ek(Error('unknown message type '.concat(t.type))), null)
        : (0, r.jsx)(J.ZP, {
              message: t,
              content: (0, $.ZP)(t).content,
              compact: null != i && i,
              children: (0, r.jsx)(s, {
                  message: t,
                  channel: n,
                  compact: i,
                  disableInteraction: a
              })
          });
}
let to = i.memo(ta);
