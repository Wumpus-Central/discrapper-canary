n.d(t, { Z: () => to }), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(904245),
    c = n(287734),
    u = n(872810),
    d = n(911969),
    f = n(376484),
    p = n(362604),
    _ = n(710845),
    h = n(387188),
    m = n(825829),
    g = n(623624),
    E = n(29887),
    b = n(533694),
    y = n(345114),
    O = n(924301),
    v = n(225890),
    S = n(434404),
    I = n(507435),
    T = n(579832),
    C = n(686380),
    A = n(504733),
    N = n(563959),
    P = n(917318),
    w = n(703656),
    R = n(471253),
    D = n(565799),
    x = n(590415),
    L = n(911560),
    j = n(488131),
    M = n(814820),
    k = n(314897),
    U = n(523746),
    G = n(592125),
    Z = n(430824),
    F = n(496675),
    B = n(158776),
    V = n(944486),
    H = n(594174),
    Y = n(979651),
    W = n(585483),
    K = n(5192),
    z = n(960048),
    q = n(709054),
    Q = n(937889),
    X = n(15642),
    J = n(930282),
    $ = n(818570),
    ee = n(942951),
    et = n(9423),
    en = n(789267),
    er = n(262),
    ei = n(303135),
    ea = n(673052),
    eo = n(385063),
    es = n(253118),
    el = n(54817),
    ec = n(502115),
    eu = n(27103),
    ed = n(396252),
    ef = n(522860),
    ep = n(600397),
    e_ = n(73352),
    eh = n(507962),
    em = n(857640),
    eg = n(614972),
    eE = n(701181),
    eb = n(29338),
    ey = n(461135),
    eO = n(523453),
    ev = n(296571),
    eS = n(587737),
    eI = n(482239),
    eT = n(328749),
    eC = n(4305),
    eA = n(910548),
    eN = n(981631),
    eP = n(70722),
    ew = n(388032);
function eR(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eD(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eR(e, t, n[t]);
            });
    }
    return e;
}
function ex(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eL(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ex(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ej(e) {
    z.Z.captureException(e), new _.Z("SystemMessage").error("", e);
}
function eM(e) {
    let { message: t, compact: n, channel: o } = e,
        { id: s, author: l } = t,
        u = k.default.getId(),
        d = t.getChannelId(),
        f = (0, a.e7)([U.Z], () => U.Z.isCallActive(d, s), [d, s]),
        p = (0, a.e7)([Y.Z], () => Y.Z.getVoiceState(eN.ME, u)),
        _ = !f && null != t.call && !t.call.participants.includes(u),
        h = f && (null == p || p.channelId !== d),
        m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        g = (0, ee.l)({
            user: l,
            channelId: d,
            guildId: o.guild_id,
            messageId: t.id,
            enableDisplayNameStyles: !0,
        });
    return (0, r.jsx)(en.Z, {
        compact: n,
        message: t,
        missed: _,
        joinable: h,
        usernameHook: g,
        onClickJoinCall: m,
    });
}
function ek(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, ee.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eo.Z, {
        compact: n,
        message: t,
        usernameHook: s,
        isForumPost: i.isForumPost(),
    });
}
function eU(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, ee.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ei.Z, {
        compact: n,
        message: t,
        usernameHook: s,
    });
}
function eG(e) {
    let { message: t, compact: n, channel: a } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = i.useCallback(() => {
            if (V.Z.getChannelId() !== s) {
                let e = G.Z.getChannel(s);
                null != e && (0, w.XU)(e.guild_id, e.id);
            }
            setTimeout(() => W.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0);
        }, [s]),
        c = (0, ee.l)({
            user: o,
            channelId: s,
            guildId: a.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(es.Z, {
        message: t,
        compact: n,
        usernameHook: c,
        onClickPins: __OVERLAY__ ? null : l,
    });
}
function eZ(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = (0, a.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
        c = K.ZP.getName(null, s, l),
        u = (0, ee.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        d = (0, ee.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return n.isThread()
        ? (0, r.jsx)(eS.Z, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
              actorUsernameHook: u,
              targetUsernameHook: d,
          })
        : (0, r.jsx)(e_.Z, {
              message: t,
              compact: i,
              otherUsername: c,
              usernameHook: u,
              otherUsernameHook: d,
          });
}
function eF(e) {
    let { message: t, channel: a, compact: l } = e,
        c = (0, ee.l)({
            user: t.author,
            channelId: t.channel_id,
            guildId: a.guild_id,
            messageId: t.id,
        }),
        u = i.useCallback(
            async (e) => {
                var n;
                let r = null == (n = t.messageReference) ? void 0 : n.channel_id;
                if (null != r) {
                    await L.Z.loadThread(r);
                    let t = G.Z.getChannel(r);
                    null != t && (0, j.ok)(t, e.shiftKey);
                }
            },
            [t],
        ),
        d = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("91315"), n.e("32683")]).then(n.bind(n, 223901));
                return (t) => (0, r.jsx)(e, eD({ channel: a }, t));
            });
        }, [a]),
        f = i.useCallback(
            (e) => {
                var i;
                let a = G.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                null != a &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("90508"), n.e("92091"), n.e("12632")]).then(
                            n.bind(n, 422200),
                        );
                        return (t) => (0, r.jsx)(e, eL(eD({}, t), { channel: a }));
                    });
            },
            [t],
        );
    return (0, r.jsx)(ev.Z, {
        message: t,
        compact: l,
        usernameHook: c,
        onClickThread: u,
        onClickViewThreads: d,
        onContextMenuThread: f,
    });
}
function eB(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = (0, a.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
        c = (0, ee.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        u = (0, ee.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return n.isThread()
        ? (0, r.jsx)(eI.Z, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
              actorUsernameHook: c,
              targetUsernameHook: u,
          })
        : null != l && l.id !== o.id
          ? (0, r.jsx)(eh.Z, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: c,
                otherUser: l,
                otherUsernameHook: u,
            })
          : (0, r.jsx)(eh.Z, {
                message: t,
                channel: n,
                usernameHook: c,
            });
}
function eV(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, ee.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eC.Z, {
                message: t,
                compact: n,
                usernameHook: s,
            }),
            (0, r.jsx)(M.f, {
                channel: i,
                message: t,
            }),
        ],
    });
}
function eH(e) {
    let { message: t, channel: n, compact: o } = e,
        { author: s } = t,
        { guild_id: l } = n,
        c = t.getChannelId(),
        u = (0, a.e7)([Z.Z], () => Z.Z.getGuild(l), [l]),
        d = i.useCallback(() => {
            null != u &&
                (0, g.f)({
                    guildId: u.id,
                    location: {
                        section: eN.jXE.CHANNEL_TEXT_AREA,
                        object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL,
                    },
                });
        }, [u]),
        f = (0, ee.l)({
            user: s,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0,
        });
    return (0, r.jsx)(eA.ZP, {
        message: t,
        compact: o,
        guild: u,
        usernameHook: f,
        onClickMessage: d,
    });
}
function eY(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, ee.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(er.Z, {
        message: t,
        compact: n,
        usernameHook: s,
    });
}
function eW(e) {
    let { message: t, compact: n, channel: o } = e,
        {
            author: s,
            author: { id: l },
            messageReference: c,
        } = t,
        d = t.getChannelId(),
        f = (0, a.e7)([B.Z], () => B.Z.findActivity(l, (e) => e.type === eN.IIU.PLAYING), [l]),
        p = (0, a.e7)([G.Z], () => (null != c ? G.Z.getChannel(c.channel_id) : null), [c]),
        _ = null == c ? void 0 : c.guild_id,
        h = (0, ee.l)({
            user: s,
            channelId: d,
            guildId: o.guild_id,
            messageId: t.id,
        }),
        m = i.useCallback(() => {
            null != p &&
                null != _ &&
                (0, u.iV)({
                    streamType: eP.lo.GUILD,
                    ownerId: l,
                    channelId: p.id,
                    guildId: _,
                });
        }, [l, p, _]);
    return null != c && null != p && null != c.guild_id
        ? (0, r.jsx)(ef.Z, {
              message: t,
              compact: n,
              channel: p,
              playingActivity: f,
              onJoinStream: m,
              usernameHook: h,
          })
        : null;
}
function eK(e) {
    let { message: t, compact: n } = e,
        i = t.getChannelId(),
        o = (0, a.e7)([G.Z], () => G.Z.getChannel(i), [i]),
        s = null != o ? o.getGuildId() : null,
        l = () => {
            null != s && S.Z.open(s, eN.pNK.ACCESS, eN.KsC.ACCESS_DISCOVERABLE);
        };
    return (0, r.jsx)(ec.FJ, {
        message: t,
        compact: n,
        onClick: l,
    });
}
function ez(e) {
    let { message: t, compact: n, channel: i } = e;
    return (0, m.nY)(t)
        ? (0, r.jsx)(et.Z, {
              message: t,
              compact: n,
              channel: i,
          })
        : null;
}
function eq(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, ee.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(el.Z, {
        message: t,
        compact: n,
        usernameHook: a,
    });
}
function eQ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, ee.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ed.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a,
    });
}
function eX(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, ee.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eu.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a,
    });
}
function eJ(e) {
    let { message: t, channel: n, compact: i } = e,
        o = (0, ee.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        s = (0, a.e7)([O.ZP], () => O.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eb.Z, {
                message: t,
                compact: i,
                usernameHook: o,
            }),
            null != s && s.name === t.content
                ? (0, r.jsx)(v.Z, { code: "".concat(n.guild_id, "-").concat(s.id) })
                : null,
        ],
    });
}
function e$(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(em.Z, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}
function e0(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ey.Z, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}
function e1(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eE.Z, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}
function e3(e) {
    var t, n;
    let { message: i, channel: s, compact: c } = e,
        u = (0, ee.l)({
            user: i.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: i.id,
        }),
        d = (0, a.e7)([F.Z], () => F.Z.can(eN.Plq.MUTE_MEMBERS, s)),
        f = () => {
            (0, R.DT)(s, i.author.id, !1), l.Z.deleteMessage(s.id, i.id, !0);
        },
        p = (0, a.e7)([D.Z], () => D.Z.getParticipant(s.id, i.author.id)),
        _ =
            new Date(q.default.extractTimestamp(i.id)).toISOString() ===
            new Date(
                null != (n = null == p || null == (t = p.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0,
            ).toISOString(),
        h = d && (null == p ? void 0 : p.rtsState) === x.xO.REQUESTED_TO_SPEAK && _;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eg.Z, {
                message: i,
                compact: c,
                usernameHook: u,
            }),
            h
                ? (0, r.jsx)(o.Button, {
                      variant: "secondary",
                      onClick: f,
                      text: ew.intl.string(ew.t.f0T7hI),
                      icon: o.Lrb,
                  })
                : null,
        ],
    });
}
function e2(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(p.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e4(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e5(e) {
    var t;
    let { message: n, channel: i, compact: a } = e;
    return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
        ? (0, r.jsx)(b.Z, {
              message: n,
              channel: i,
              compact: a,
          })
        : null;
}
function e8(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)($.Z, {
        message: t,
        channel: n,
    });
}
function e6(e) {
    let { message: t, channel: n } = e,
        i = t.giftingPrompt,
        o = (0, a.e7)([H.default], () => H.default.getUser(null == i ? void 0 : i.recipientUserId));
    return null == i || null == o
        ? null
        : (0, r.jsx)(X.Z, {
              giftIntentType: i.giftIntentType,
              recipientUser: o,
              channel: n,
          });
}
function e7(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ea.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e9(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ep.Z, {
        message: t,
        channel: n,
        author: t.author,
        compact: i,
    });
}
function te(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(C.Z, {
        userTrialOfferId: t.referralTrialOfferId,
        canRenderReferralEmbed: !0,
        compact: n,
    });
}
function tt(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(h.iq, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: a,
    });
}
function tn(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(eO.Z, {
        message: t,
        compact: n,
    });
}
function tr(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(T.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
let ti = Object.freeze({
    [eN.uaV.DEFAULT]: void 0,
    [eN.uaV.REPLY]: void 0,
    [eN.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eN.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eN.uaV.RECIPIENT_ADD]: eZ,
    [eN.uaV.RECIPIENT_REMOVE]: eB,
    [eN.uaV.CALL]: eM,
    [eN.uaV.CHANNEL_NAME_CHANGE]: ek,
    [eN.uaV.CHANNEL_ICON_CHANGE]: eU,
    [eN.uaV.CHANNEL_PINNED_MESSAGE]: eG,
    [eN.uaV.USER_JOIN]: eV,
    [eN.uaV.GUILD_BOOST]: eH,
    [eN.uaV.GUILD_BOOST_TIER_1]: eH,
    [eN.uaV.GUILD_BOOST_TIER_2]: eH,
    [eN.uaV.GUILD_BOOST_TIER_3]: eH,
    [eN.uaV.CHANNEL_FOLLOW_ADD]: eY,
    [eN.uaV.GUILD_STREAM]: eW,
    [eN.uaV.GUILD_DISCOVERY_DISQUALIFIED]: eK,
    [eN.uaV.GUILD_DISCOVERY_REQUALIFIED]: ec.xe,
    [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ec.HL,
    [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ec.Yc,
    [eN.uaV.THREAD_CREATED]: eF,
    [eN.uaV.THREAD_STARTER_MESSAGE]: eT.Z,
    [eN.uaV.GUILD_INVITE_REMINDER]: void 0,
    [eN.uaV.AUTO_MODERATION_ACTION]: ez,
    [eN.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eq,
    [eN.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eq,
    [eN.uaV.GUILD_INCIDENT_REPORT_RAID]: eQ,
    [eN.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eX,
    [eN.uaV.ROLE_SUBSCRIPTION_PURCHASE]: y.Z,
    [eN.uaV.PURCHASE_NOTIFICATION]: e5,
    [eN.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eN.uaV.STAGE_START]: eJ,
    [eN.uaV.STAGE_END]: e$,
    [eN.uaV.STAGE_SPEAKER]: e1,
    [eN.uaV.STAGE_RAISE_HAND]: e3,
    [eN.uaV.STAGE_TOPIC]: e0,
    [eN.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: A.Z,
    [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: N.P,
    [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: N.e,
    [eN.uaV.PREMIUM_REFERRAL]: te,
    [eN.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: e2,
    [eN.uaV.CUSTOM_GIFT]: void 0,
    [eN.uaV.GUILD_GAMING_STATS_PROMPT]: e4,
    [eN.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eN.uaV.POLL_RESULT]: I.Z,
    [eN.uaV.CHANGELOG]: void 0,
    [eN.uaV.NITRO_NOTIFICATION]: e8,
    [eN.uaV.CHANNEL_LINKED_TO_LOBBY]: e7,
    [eN.uaV.GIFTING_PROMPT]: e6,
    [eN.uaV.IN_GAME_MESSAGE_NUX]: e9,
    [eN.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: E.Cn,
    [eN.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: E.Ue,
    [eN.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: E.R6,
    [eN.uaV.HD_STREAMING_UPGRADED]: void 0,
    [eN.uaV.EMOJI_ADDED]: tt,
    [eN.uaV.CHAT_WALLPAPER_SET]: void 0,
    [eN.uaV.CHAT_WALLPAPER_REMOVED]: void 0,
    [eN.uaV.REPORT_TO_MOD_BAN_USER]: P.Z,
    [eN.uaV.REPORT_TO_MOD_KICK_USER]: P.Z,
    [eN.uaV.REPORT_TO_MOD_TIMEOUT_USER]: P.Z,
    [eN.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: P.Z,
    [eN.uaV.REPORT_TO_MOD_CLOSED_REPORT]: P.Z,
    [eN.uaV.PREMIUM_GROUP_INVITE]: tr,
    [eN.uaV.VOICE_SESSION]: void 0,
    66: tn,
});
function ta(e) {
    let { message: t, channel: n, compact: i, disableInteraction: a } = e,
        { type: o } = t,
        s = ti[o];
    return null == s
        ? (ej(Error("unknown message type ".concat(t.type))), null)
        : (0, r.jsx)(J.ZP, {
              message: t,
              content: (0, Q.ZP)(t).content,
              compact: null != i && i,
              children: (0, r.jsx)(s, {
                  message: t,
                  channel: n,
                  compact: i,
                  disableInteraction: a,
              }),
          });
}
let to = i.memo(ta);
