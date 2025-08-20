n.d(t, { Z: () => tl }), n(415506);
var r = n(951288),
    i = n(647438),
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
    C = n(686380),
    N = n(504733),
    R = n(563959),
    P = n(917318),
    w = n(703656),
    D = n(471253),
    x = n(565799),
    L = n(590415),
    j = n(911560),
    M = n(488131),
    k = n(814820),
    U = n(314897),
    G = n(523746),
    B = n(592125),
    Z = n(430824),
    V = n(496675),
    F = n(158776),
    H = n(944486),
    Y = n(594174),
    W = n(979651),
    K = n(585483),
    z = n(5192),
    q = n(960048),
    X = n(709054),
    Q = n(937889),
    J = n(15642),
    $ = n(260736),
    ee = n(930282),
    et = n(818570),
    en = n(942951),
    er = n(9423),
    ei = n(789267),
    ea = n(262),
    eo = n(303135),
    es = n(673052),
    el = n(385063),
    ec = n(253118),
    eu = n(54817),
    ed = n(502115),
    ef = n(27103),
    e_ = n(396252),
    ep = n(522860),
    eh = n(600397),
    em = n(73352),
    eg = n(507962),
    eE = n(857640),
    eb = n(614972),
    ey = n(701181),
    eO = n(29338),
    ev = n(461135),
    eI = n(296571),
    eT = n(587737),
    eS = n(482239),
    eA = n(328749),
    eC = n(4305),
    eN = n(910548),
    eR = n(981631),
    eP = n(70722),
    ew = n(388032);
function eD(e, t, n) {
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
function ex(e) {
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
                eD(e, t, n[t]);
            });
    }
    return e;
}
function eL(e, t) {
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
function ej(e, t) {
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
function eM(e) {
    q.Z.captureException(e), new m.Z("SystemMessage").error("", e);
}
function ek(e) {
    let { message: t, compact: n, channel: o } = e,
        { id: s, author: l } = t,
        u = U.default.getId(),
        d = t.getChannelId(),
        f = (0, a.e7)([G.Z], () => G.Z.isCallActive(d, s), [d, s]),
        _ = (0, a.e7)([W.Z], () => W.Z.getVoiceState(eR.ME, u)),
        p = !f && null != t.call && !t.call.participants.includes(u),
        h = f && (null == _ || _.channelId !== d),
        m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        g = (0, en.l)({
            user: l,
            channelId: d,
            guildId: o.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ei.Z, {
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
        s = (0, en.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(el.Z, {
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
        s = (0, en.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eo.Z, {
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
            if (H.Z.getChannelId() !== s) {
                let e = B.Z.getChannel(s);
                null != e && (0, w.XU)(e.guild_id, e.id);
            }
            setTimeout(() => K.S.dispatch(eR.CkL.TOGGLE_CHANNEL_PINS), 0);
        }, [s]),
        c = (0, en.l)({
            user: o,
            channelId: s,
            guildId: a.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ec.Z, {
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
        l = (0, a.e7)([Y.default], () => Y.default.getUser(t.mentions[0]), [t]),
        c = z.ZP.getName(null, s, l),
        u = (0, en.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        d = (0, en.l)({
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
        : (0, r.jsx)(em.Z, {
              message: t,
              compact: i,
              otherUsername: c,
              usernameHook: u,
              otherUsernameHook: d,
          });
}
function eV(e) {
    let { message: t, channel: a, compact: l } = e,
        c = (0, en.l)({
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
                    await j.Z.loadThread(r);
                    let t = B.Z.getChannel(r);
                    null != t && (0, M.ok)(t, e.shiftKey);
                }
            },
            [t],
        ),
        d = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("91315"), n.e("219")]).then(n.bind(n, 223901));
                return (t) => (0, r.jsx)(e, ex({ channel: a }, t));
            });
        }, [a]),
        f = i.useCallback(
            (e) => {
                var i;
                let a = B.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                null != a &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("90508"), n.e("99534"), n.e("71350")]).then(
                            n.bind(n, 422200),
                        );
                        return (t) => (0, r.jsx)(e, ej(ex({}, t), { channel: a }));
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
function eF(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = (0, a.e7)([Y.default], () => Y.default.getUser(t.mentions[0]), [t]),
        c = (0, en.l)({
            user: o,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        u = (0, en.l)({
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
          ? (0, r.jsx)(eg.Z, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: c,
                otherUser: l,
                otherUsernameHook: u,
            })
          : (0, r.jsx)(eg.Z, {
                message: t,
                channel: n,
                usernameHook: c,
            });
}
function eH(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, en.l)({
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
        u = (0, a.e7)([Z.Z], () => Z.Z.getGuild(l), [l]),
        d = i.useCallback(() => {
            null != u &&
                (0, b.f)({
                    guildId: u.id,
                    location: {
                        section: eR.jXE.CHANNEL_TEXT_AREA,
                        object: eR.qAy.BOOST_ANNOUNCEMENT_UPSELL,
                    },
                });
        }, [u]),
        f = (0, en.l)({
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
        s = (0, en.l)({
            user: a,
            channelId: o,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ea.Z, {
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
        _ = (0, a.e7)([B.Z], () => (null != c ? B.Z.getChannel(c.channel_id) : null), [c]),
        p = null == c ? void 0 : c.guild_id,
        h = (0, en.l)({
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
        ? (0, r.jsx)(ep.Z, {
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
        o = (0, a.e7)([B.Z], () => B.Z.getChannel(i), [i]),
        s = null != o ? o.getGuildId() : null,
        l = () => {
            null != s && S.Z.open(s, eR.pNK.ACCESS, eR.KsC.ACCESS_DISCOVERABLE);
        };
    return (0, r.jsx)(ed.FJ, {
        message: t,
        compact: n,
        onClick: l,
    });
}
function eq(e) {
    let { message: t, compact: n, channel: i } = e;
    return (0, E.nY)(t)
        ? (0, r.jsx)(er.Z, {
              message: t,
              compact: n,
              channel: i,
          })
        : null;
}
function eX(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, en.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eu.Z, {
        message: t,
        compact: n,
        usernameHook: a,
    });
}
function eQ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, en.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(e_.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a,
    });
}
function eJ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, en.l)({
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
function e$(e) {
    let { message: t, channel: n, compact: i } = e,
        o = (0, en.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        s = (0, a.e7)([I.ZP], () => I.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eO.Z, {
                message: t,
                compact: i,
                usernameHook: o,
            }),
            null != s && s.name === t.content
                ? (0, r.jsx)(T.Z, { code: "".concat(n.guild_id, "-").concat(s.id) })
                : null,
        ],
    });
}
function e0(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, en.l)({
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
function e1(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, en.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ev.Z, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}
function e2(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, en.l)({
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
function e3(e) {
    var t, n;
    let { message: i, channel: s, compact: c } = e,
        u = (0, en.l)({
            user: i.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: i.id,
        }),
        d = (0, a.e7)([V.Z], () => V.Z.can(eR.Plq.MUTE_MEMBERS, s)),
        f = () => {
            (0, D.DT)(s, i.author.id, !1), l.Z.deleteMessage(s.id, i.id, !0);
        },
        _ = (0, a.e7)([x.Z], () => x.Z.getParticipant(s.id, i.author.id)),
        p =
            new Date(X.default.extractTimestamp(i.id)).toISOString() ===
            new Date(
                null != (n = null == _ || null == (t = _.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0,
            ).toISOString(),
        h = d && (null == _ ? void 0 : _.rtsState) === L.xO.REQUESTED_TO_SPEAK && p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eb.Z, {
                message: i,
                compact: c,
                usernameHook: u,
            }),
            h
                ? (0, r.jsx)(o.zxk, {
                      variant: "secondary",
                      onClick: f,
                      text: ew.intl.string(ew.t.f0T7hI),
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
function e8(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e6(e) {
    var t;
    let { message: n, channel: i, compact: a } = e;
    return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
        ? (0, r.jsx)(O.Z, {
              message: n,
              channel: i,
              compact: a,
          })
        : null;
}
function e5(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)($.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function e7(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(et.Z, {
        message: t,
        channel: n,
    });
}
function e9(e) {
    let { message: t, channel: n } = e,
        i = t.giftingPrompt,
        o = (0, a.e7)([Y.default], () => Y.default.getUser(null == i ? void 0 : i.recipientUserId));
    return null == i || null == o
        ? null
        : (0, r.jsx)(J.Z, {
              giftIntentType: i.giftIntentType,
              recipientUser: o,
              channel: n,
              giftIntentSecondaryAction: i.giftIntentSecondaryAction,
          });
}
function te(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(es.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function tt(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(eh.Z, {
        message: t,
        channel: n,
        author: t.author,
        compact: i,
    });
}
function tn(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(h.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function tr(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(C.Z, {
        userTrialOfferId: t.referralTrialOfferId,
        canRenderReferralEmbed: !0,
        compact: n,
    });
}
function ti(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(p.Z, {
        message: t,
        channel: n,
        compact: i,
    });
}
function ta(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, en.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(g.iq, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: a,
    });
}
let to = Object.freeze({
    [eR.uaV.DEFAULT]: void 0,
    [eR.uaV.REPLY]: void 0,
    [eR.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eR.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eR.uaV.RECIPIENT_ADD]: eZ,
    [eR.uaV.RECIPIENT_REMOVE]: eF,
    [eR.uaV.CALL]: ek,
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
    [eR.uaV.GUILD_DISCOVERY_REQUALIFIED]: ed.xe,
    [eR.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ed.HL,
    [eR.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ed.Yc,
    [eR.uaV.THREAD_CREATED]: eV,
    [eR.uaV.THREAD_STARTER_MESSAGE]: eA.Z,
    [eR.uaV.GUILD_INVITE_REMINDER]: void 0,
    [eR.uaV.AUTO_MODERATION_ACTION]: eq,
    [eR.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eX,
    [eR.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eX,
    [eR.uaV.GUILD_INCIDENT_REPORT_RAID]: eQ,
    [eR.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eJ,
    [eR.uaV.ROLE_SUBSCRIPTION_PURCHASE]: v.Z,
    [eR.uaV.PURCHASE_NOTIFICATION]: e6,
    [eR.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eR.uaV.STAGE_START]: e$,
    [eR.uaV.STAGE_END]: e0,
    [eR.uaV.STAGE_SPEAKER]: e2,
    [eR.uaV.STAGE_RAISE_HAND]: e3,
    [eR.uaV.STAGE_TOPIC]: e1,
    [eR.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: N.Z,
    [eR.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: R.P,
    [eR.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: R.e,
    [eR.uaV.PREMIUM_REFERRAL]: tr,
    [eR.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: e4,
    [eR.uaV.CUSTOM_GIFT]: void 0,
    [eR.uaV.GUILD_GAMING_STATS_PROMPT]: e8,
    [eR.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eR.uaV.POLL_RESULT]: A.Z,
    [eR.uaV.CHANGELOG]: void 0,
    [eR.uaV.NITRO_NOTIFICATION]: e7,
    [eR.uaV.CHANNEL_LINKED_TO_LOBBY]: te,
    [eR.uaV.GIFTING_PROMPT]: e9,
    [eR.uaV.IN_GAME_MESSAGE_NUX]: tt,
    [eR.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: y.Cn,
    [eR.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: y.Ue,
    [eR.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: y.R6,
    [eR.uaV.HD_STREAMING_UPGRADED]: e5,
    [eR.uaV.EMOJI_ADDED]: ta,
    [eR.uaV.CHAT_WALLPAPER_SET]: tn,
    [eR.uaV.CHAT_WALLPAPER_REMOVED]: ti,
    [eR.uaV.REPORT_TO_MOD_BAN_USER]: P.Z,
    [eR.uaV.REPORT_TO_MOD_KICK_USER]: P.Z,
    [eR.uaV.REPORT_TO_MOD_TIMEOUT_USER]: P.Z,
    [eR.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: P.Z,
    [eR.uaV.REPORT_TO_MOD_CLOSED_REPORT]: P.Z,
});
function ts(e) {
    let { message: t, channel: n, compact: i, disableInteraction: a } = e,
        { type: o } = t,
        s = to[o];
    return null == s
        ? (eM(Error("unknown message type ".concat(t.type))), null)
        : (0, r.jsx)(ee.ZP, {
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
let tl = i.memo(ts);
