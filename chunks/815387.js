n.d(t, { Z: () => tl }), n(415506);
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
    _ = n(362604),
    p = n(710845),
    h = n(387188),
    m = n(825829),
    g = n(623624),
    E = n(29887),
    b = n(533694),
    y = n(345114),
    O = n(924301),
    v = n(225890),
    I = n(434404),
    T = n(507435),
    S = n(579832),
    A = n(686380),
    C = n(504733),
    N = n(563959),
    R = n(917318),
    P = n(703656),
    D = n(471253),
    w = n(565799),
    L = n(590415),
    x = n(911560),
    M = n(488131),
    k = n(814820),
    j = n(314897),
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
    X = n(937889),
    Q = n(15642),
    J = n(260736),
    $ = n(930282),
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
    ev = n(523453),
    eI = n(296571),
    eT = n(587737),
    eS = n(482239),
    eA = n(328749),
    eC = n(4305),
    eN = n(910548),
    eR = n(981631),
    eP = n(70722),
    eD = n(388032);
function ew(e, t, n) {
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
function eL(e) {
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
                ew(e, t, n[t]);
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
function eM(e, t) {
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
function ek(e) {
    z.Z.captureException(e), new p.Z("SystemMessage").error("", e);
}
function ej(e) {
    let { message: t, compact: n, channel: o } = e,
        { id: s, author: l } = t,
        u = j.default.getId(),
        d = t.getChannelId(),
        f = (0, a.e7)([U.Z], () => U.Z.isCallActive(d, s), [d, s]),
        _ = (0, a.e7)([Y.Z], () => Y.Z.getVoiceState(eR.ME, u)),
        p = !f && null != t.call && !t.call.participants.includes(u),
        h = f && (null == _ || _.channelId !== d),
        m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        g = (0, et.l)({
            user: l,
            channelId: d,
            guildId: o.guild_id,
            messageId: t.id,
            enableDisplayNameStyles: !0,
        });
    return (0, r.jsx)(er.Z, {
        compact: n,
        message: t,
        missed: p,
        joinable: h,
        usernameHook: g,
        onClickJoinCall: m,
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
            messageId: t.id,
        });
    return (0, r.jsx)(es.Z, {
        compact: n,
        message: t,
        usernameHook: s,
        isForumPost: i.isForumPost(),
    });
}
function eG(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, et.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ea.Z, {
        compact: n,
        message: t,
        usernameHook: s,
    });
}
function eB(e) {
    let { message: t, compact: n, channel: a } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = i.useCallback(() => {
            if (V.Z.getChannelId() !== s) {
                let e = G.Z.getChannel(s);
                null != e && (0, P.XU)(e.guild_id, e.id);
            }
            setTimeout(() => W.S.dispatch(eR.CkL.TOGGLE_CHANNEL_PINS), 0);
        }, [s]),
        c = (0, et.l)({
            user: o,
            channelId: s,
            guildId: a.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(el.Z, {
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
        u = (0, et.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        d = (0, et.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return n.isThread()
        ? (0, r.jsx)(eT.Z, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
              actorUsernameHook: u,
              targetUsernameHook: d,
          })
        : (0, r.jsx)(eh.Z, {
              message: t,
              compact: i,
              otherUsername: c,
              usernameHook: u,
              otherUsernameHook: d,
          });
}
function eF(e) {
    let { message: t, channel: a, compact: l } = e,
        c = (0, et.l)({
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
                    await x.Z.loadThread(r);
                    let t = G.Z.getChannel(r);
                    null != t && (0, M.ok)(t, e.shiftKey);
                }
            },
            [t],
        ),
        d = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("91315"), n.e("219")]).then(n.bind(n, 223901));
                return (t) => (0, r.jsx)(e, eL({ channel: a }, t));
            });
        }, [a]),
        f = i.useCallback(
            (e) => {
                var i;
                let a = G.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                null != a &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("90508"), n.e("89250"), n.e("18308")]).then(
                            n.bind(n, 422200),
                        );
                        return (t) => (0, r.jsx)(e, eM(eL({}, t), { channel: a }));
                    });
            },
            [t],
        );
    return (0, r.jsx)(eI.Z, {
        message: t,
        compact: l,
        usernameHook: c,
        onClickThread: u,
        onClickViewThreads: d,
        onContextMenuThread: f,
    });
}
function eV(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = (0, a.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
        c = (0, et.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        u = (0, et.l)({
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
              actorUsernameHook: c,
              targetUsernameHook: u,
          })
        : null != l && l.id !== o.id
          ? (0, r.jsx)(em.Z, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: c,
                otherUser: l,
                otherUsernameHook: u,
            })
          : (0, r.jsx)(em.Z, {
                message: t,
                channel: n,
                usernameHook: c,
            });
}
function eH(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, et.l)({
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
            (0, r.jsx)(k.f, {
                channel: i,
                message: t,
            }),
        ],
    });
}
function eY(e) {
    let { message: t, channel: n, compact: o } = e,
        { author: s } = t,
        { guild_id: l } = n,
        c = t.getChannelId(),
        u = (0, a.e7)([B.Z], () => B.Z.getGuild(l), [l]),
        d = i.useCallback(() => {
            null != u &&
                (0, g.f)({
                    guildId: u.id,
                    location: {
                        section: eR.jXE.CHANNEL_TEXT_AREA,
                        object: eR.qAy.BOOST_ANNOUNCEMENT_UPSELL,
                    },
                });
        }, [u]),
        f = (0, et.l)({
            user: s,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0,
        });
    return (0, r.jsx)(eN.ZP, {
        message: t,
        compact: o,
        guild: u,
        usernameHook: f,
        onClickMessage: d,
    });
}
function eW(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, et.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ei.Z, {
        message: t,
        compact: n,
        usernameHook: s,
    });
}
function eK(e) {
    let { message: t, compact: n, channel: o } = e,
        {
            author: s,
            author: { id: l },
            messageReference: c,
        } = t,
        d = t.getChannelId(),
        f = (0, a.e7)([F.Z], () => F.Z.findActivity(l, (e) => e.type === eR.IIU.PLAYING), [l]),
        _ = (0, a.e7)([G.Z], () => (null != c ? G.Z.getChannel(c.channel_id) : null), [c]),
        p = null == c ? void 0 : c.guild_id,
        h = (0, et.l)({
            user: s,
            channelId: d,
            guildId: o.guild_id,
            messageId: t.id,
        }),
        m = i.useCallback(() => {
            null != _ &&
                null != p &&
                (0, u.iV)({
                    streamType: eP.lo.GUILD,
                    ownerId: l,
                    channelId: _.id,
                    guildId: p,
                });
        }, [l, _, p]);
    return null != c && null != _ && null != c.guild_id
        ? (0, r.jsx)(e_.Z, {
              message: t,
              compact: n,
              channel: _,
              playingActivity: f,
              onJoinStream: m,
              usernameHook: h,
          })
        : null;
}
function ez(e) {
    let { message: t, compact: n } = e,
        i = t.getChannelId(),
        o = (0, a.e7)([G.Z], () => G.Z.getChannel(i), [i]),
        s = null != o ? o.getGuildId() : null,
        l = () => {
            null != s && I.Z.open(s, eR.pNK.ACCESS, eR.KsC.ACCESS_DISCOVERABLE);
        };
    return (0, r.jsx)(eu.FJ, {
        message: t,
        compact: n,
        onClick: l,
    });
}
function eq(e) {
    let { message: t, compact: n, channel: i } = e;
    return (0, m.nY)(t)
        ? (0, r.jsx)(en.Z, {
              message: t,
              compact: n,
              channel: i,
          })
        : null;
}
function eX(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ec.Z, {
        message: t,
        compact: n,
        usernameHook: a,
    });
}
function eQ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ef.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a,
    });
}
function eJ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, et.l)({
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
function e$(e) {
    let { message: t, channel: n, compact: i } = e,
        o = (0, et.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        s = (0, a.e7)([O.ZP], () => O.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ey.Z, {
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
function e0(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eg.Z, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}
function e1(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eO.Z, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}
function e3(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eb.Z, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}
function e2(e) {
    var t, n;
    let { message: i, channel: s, compact: c } = e,
        u = (0, et.l)({
            user: i.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: i.id,
        }),
        d = (0, a.e7)([Z.Z], () => Z.Z.can(eR.Plq.MUTE_MEMBERS, s)),
        f = () => {
            (0, D.DT)(s, i.author.id, !1), l.Z.deleteMessage(s.id, i.id, !0);
        },
        _ = (0, a.e7)([w.Z], () => w.Z.getParticipant(s.id, i.author.id)),
        p =
            new Date(q.default.extractTimestamp(i.id)).toISOString() ===
            new Date(
                null != (n = null == _ || null == (t = _.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0,
            ).toISOString(),
        h = d && (null == _ ? void 0 : _.rtsState) === L.xO.REQUESTED_TO_SPEAK && p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eE.Z, {
                message: i,
                compact: c,
                usernameHook: u,
            }),
            h
                ? (0, r.jsx)(o.Button, {
                      variant: "secondary",
                      onClick: f,
                      text: eD.intl.string(eD.t.f0T7hI),
                      icon: o.Lrb,
                  })
                : null,
        ],
    });
}
function e4(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(_.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e5(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e8(e) {
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
function e6(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(J.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e7(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(ee.Z, {
        message: t,
        channel: n,
    });
}
function e9(e) {
    let { message: t, channel: n } = e,
        i = t.giftingPrompt,
        o = (0, a.e7)([H.default], () => H.default.getUser(null == i ? void 0 : i.recipientUserId));
    return null == i || null == o
        ? null
        : (0, r.jsx)(Q.Z, {
              giftIntentType: i.giftIntentType,
              recipientUser: o,
              channel: n,
              giftIntentSecondaryAction: i.giftIntentSecondaryAction,
          });
}
function te(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(eo.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function tt(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ep.Z, {
        message: t,
        channel: n,
        author: t.author,
        compact: i,
    });
}
function tn(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(A.Z, {
        userTrialOfferId: t.referralTrialOfferId,
        canRenderReferralEmbed: !0,
        compact: n,
    });
}
function tr(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, et.l)({
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
function ti(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(ev.Z, {
        message: t,
        compact: n,
    });
}
function ta(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(S.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
let to = Object.freeze({
    [eR.uaV.DEFAULT]: void 0,
    [eR.uaV.REPLY]: void 0,
    [eR.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eR.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eR.uaV.RECIPIENT_ADD]: eZ,
    [eR.uaV.RECIPIENT_REMOVE]: eV,
    [eR.uaV.CALL]: ej,
    [eR.uaV.CHANNEL_NAME_CHANGE]: eU,
    [eR.uaV.CHANNEL_ICON_CHANGE]: eG,
    [eR.uaV.CHANNEL_PINNED_MESSAGE]: eB,
    [eR.uaV.USER_JOIN]: eH,
    [eR.uaV.GUILD_BOOST]: eY,
    [eR.uaV.GUILD_BOOST_TIER_1]: eY,
    [eR.uaV.GUILD_BOOST_TIER_2]: eY,
    [eR.uaV.GUILD_BOOST_TIER_3]: eY,
    [eR.uaV.CHANNEL_FOLLOW_ADD]: eW,
    [eR.uaV.GUILD_STREAM]: eK,
    [eR.uaV.GUILD_DISCOVERY_DISQUALIFIED]: ez,
    [eR.uaV.GUILD_DISCOVERY_REQUALIFIED]: eu.xe,
    [eR.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eu.HL,
    [eR.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eu.Yc,
    [eR.uaV.THREAD_CREATED]: eF,
    [eR.uaV.THREAD_STARTER_MESSAGE]: eA.Z,
    [eR.uaV.GUILD_INVITE_REMINDER]: void 0,
    [eR.uaV.AUTO_MODERATION_ACTION]: eq,
    [eR.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eX,
    [eR.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eX,
    [eR.uaV.GUILD_INCIDENT_REPORT_RAID]: eQ,
    [eR.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eJ,
    [eR.uaV.ROLE_SUBSCRIPTION_PURCHASE]: y.Z,
    [eR.uaV.PURCHASE_NOTIFICATION]: e8,
    [eR.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eR.uaV.STAGE_START]: e$,
    [eR.uaV.STAGE_END]: e0,
    [eR.uaV.STAGE_SPEAKER]: e3,
    [eR.uaV.STAGE_RAISE_HAND]: e2,
    [eR.uaV.STAGE_TOPIC]: e1,
    [eR.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: C.Z,
    [eR.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: N.P,
    [eR.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: N.e,
    [eR.uaV.PREMIUM_REFERRAL]: tn,
    [eR.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: e4,
    [eR.uaV.CUSTOM_GIFT]: void 0,
    [eR.uaV.GUILD_GAMING_STATS_PROMPT]: e5,
    [eR.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eR.uaV.POLL_RESULT]: T.Z,
    [eR.uaV.CHANGELOG]: void 0,
    [eR.uaV.NITRO_NOTIFICATION]: e7,
    [eR.uaV.CHANNEL_LINKED_TO_LOBBY]: te,
    [eR.uaV.GIFTING_PROMPT]: e9,
    [eR.uaV.IN_GAME_MESSAGE_NUX]: tt,
    [eR.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: E.Cn,
    [eR.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: E.Ue,
    [eR.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: E.R6,
    [eR.uaV.HD_STREAMING_UPGRADED]: e6,
    [eR.uaV.EMOJI_ADDED]: tr,
    [eR.uaV.CHAT_WALLPAPER_SET]: void 0,
    [eR.uaV.CHAT_WALLPAPER_REMOVED]: void 0,
    [eR.uaV.REPORT_TO_MOD_BAN_USER]: R.Z,
    [eR.uaV.REPORT_TO_MOD_KICK_USER]: R.Z,
    [eR.uaV.REPORT_TO_MOD_TIMEOUT_USER]: R.Z,
    [eR.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: R.Z,
    [eR.uaV.REPORT_TO_MOD_CLOSED_REPORT]: R.Z,
    [eR.uaV.PREMIUM_GROUP_INVITE]: ta,
    65: ti,
});
function ts(e) {
    let { message: t, channel: n, compact: i, disableInteraction: a } = e,
        { type: o } = t,
        s = to[o];
    return null == s
        ? (ek(Error("unknown message type ".concat(t.type))), null)
        : (0, r.jsx)($.ZP, {
              message: t,
              content: (0, X.ZP)(t).content,
              compact: null != i && i,
              children: (0, r.jsx)(s, {
                  message: t,
                  channel: n,
                  compact: i,
                  disableInteraction: a,
              }),
          });
}
let tl = i.memo(ts);
