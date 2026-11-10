(i.d(e, { default: () => ew }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(115560),
    r = i(350835),
    o = i(855986),
    s = i(73153),
    u = i(684013),
    c = i(587895),
    d = i(628983),
    f = i(419490),
    A = i(644727),
    p = i(432005),
    y = i(411238),
    m = i(208284),
    g = i(253932),
    I = i(616356),
    E = i(46653),
    _ = i(734057),
    S = i(596344),
    N = i(803224),
    C = i(783592),
    h = i(290863),
    T = i(495867),
    v = i(994500),
    O = i(309010),
    b = i(894768),
    L = i(351906),
    x = i(287809),
    D = i(977997),
    R = i(90165),
    k = i(534765),
    U = i(927813),
    M = i(93465),
    V = i(589051),
    j = i(861862),
    w = i(592598),
    P = i(887287),
    K = i(897720),
    G = i(243612),
    Y = i(273626),
    F = i(581730),
    H = i(672396),
    J = i(792996),
    B = i(486020),
    z = i(652215),
    $ = i(477900),
    X = i(582128),
    W = i(176781),
    q = i(458977),
    Z = i(341923),
    Q = i(532624),
    tt = i(350535),
    te = i(696016);
function ti(t) {
    let { trackView: e, trackClick: i } = (0, F.Y9)(t, { notif_type: t });
    return {
        icon: (0, $.jsx)(W.ClipsIcon, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => e(),
        onDismissClick: () => i("dismiss"),
    };
}
function tn(t, e) {
    return `${t} ${e ? "\u2713" : "\u2717"}`;
}
function tl() {
    return f.Ay.getSettings().debugTooltipsEnabled;
}
var ta = i(572164),
    tr = i(22802);
function to(t) {
    let { trackView: e, trackClick: i } = (0, F.Y9)(H.KS.ClipsNotification, { notif_type: H.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, $.jsx)(W.ClipsIcon, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var ts = i(621466),
    tu = i(192308),
    tc = i(934058),
    td = i(71393),
    tf = i(427589),
    tA = i(191850),
    tp = i(985966),
    ty = i(387755),
    tm = i(597798),
    tg = i(571694),
    tI = i(47167),
    tE = i(621436),
    t_ = i(870373),
    tS = i(778712),
    tN = i(834730),
    tC = i(966327),
    th = i(769015),
    tT = i(562153),
    tv = i(41984),
    tO = i(222506),
    tb = i(145567),
    tL = i(34773),
    tx = i(308368),
    tD = i(334738),
    tR = i(481484),
    tk = i(793574),
    tU = i(486350),
    tM = i(485045),
    tV = i(609145),
    tj = i(46282),
    tw = i(861089);
function tP(t, e, i, n, l) {
    if (w.A.isNotificationDisabled(H.KS.RequestToStream) || null != I.A.getCurrentUserActiveStream()) return null;
    let a = i.username,
        r =
            null != n
                ? J.intl.format(tw.default.jTbTAF, { username: "", game: n.name })
                : J.intl.format(tw.default["d/qbC0"], { username: "" }),
        o = i.getAvatarURL(t.guild_id, 80),
        { trackView: s, trackClick: c } = (0, F.Y9)(H.KS.RequestToStream, {
            notif_type: H.KS.RequestToStream,
            notif_user_id: i.id,
            activity_type: z.xL.STREAM_REQUEST,
            activity_name: l?.name,
        }),
        d = { section: z.JJy.OVERLAY, objectType: z.btD.ACK_SEMI_AUTOMATIC };
    return {
        icon: o,
        title: a,
        body: r,
        confirmText: J.intl.string(tw.default.UGbmBp),
        cancelText: J.intl.string(J.t["tpXzJ+"]),
        onNotificationShow: () => {
            s();
        },
        onConfirmClick: (i, n) => {
            let l = (0, tM.n)({ location: "requestToStreamNotification" });
            ((0, tj.H)({
                pid: P.A.getTargetPID(),
                analyticsLocations: [tk.A.OVERLAY, tk.A.REQUEST_TO_STREAM_OVERLAY_NOTIFICATION],
                allowOneClickGoLive: !l,
                onBeforeShowModal: () => {
                    u.A.setInputLocked(!1, P.A.getTargetPID());
                },
                onModalStreamStart: () => {
                    u.A.setInputLocked(!0, P.A.getTargetPID());
                },
                appContext: z.BRT.OVERLAY,
                selectSource: !0,
            }),
                (0, tV.A)(e, t.id, { ...d, object: z.ZSU.ACK_ACCEPT_REQUEST_TO_STREAM }));
            let a = "request-to-stream";
            (c(l ? `${a}-go-live-modal` : a), u.A.updateNotificationStatus(n));
        },
        onCancelClick: (i, n) => {
            ((0, tV.A)(e, t.id, { ...d, object: z.ZSU.ACK_DECLINE_REQUEST_TO_STREAM }),
                (0, tU.q)(e),
                u.A.updateNotificationStatus(n),
                c("decline"));
        },
        onDismissClick: () => {
            c("dismiss");
        },
    };
}
var tK = i(941971),
    tG = i(997141),
    tY = i(146849),
    tF = i(647660),
    tH = i(88484),
    tJ = i(976860),
    tB = i(400492),
    tz = i(188567),
    t$ = i(723702),
    tX = i(253400),
    tW = i(366032),
    tq = i(138399),
    tZ = i(964486),
    tQ = i(480870),
    t0 = i(355622),
    t1 = i(408018),
    t8 = i(989161),
    t2 = i(451909),
    t9 = i(135621),
    t4 = i(381941),
    t7 = i(158602);
function t5(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, t9.A)(),
        { placeholder: r, accessibilityLabel: o } = (0, tQ.A)({ channel: n }),
        [s, c] = X.useState(() => (0, t1.N3)()),
        { textValue: d, richValue: f } = s,
        [A, p] = X.useState(!1),
        y = X.useCallback(() => p(!0), []),
        m = X.useCallback(() => p(!1), []);
    (0, tZ.Ay)(() => {
        (0, tD.I_)(
            n.id,
            { section: z.JJy.OVERLAY, object: z.ZSU.ACK_INLINE_REPLY, objectType: z.btD.ACK_SEMI_AUTOMATIC },
            !0,
            !0,
            i,
        );
    });
    let g = X.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        I = X.useCallback(
            (t) => {
                "Escape" === t.key && u.A.updateNotificationStatus(e, z.yFH.ACTIVE);
            },
            [e],
        ),
        E = X.useCallback(
            () => (
                d.length > a ||
                    (tq.A.sendMessage(n.id, t2.Ay.parse(n, d), !1, { location: t4.Hx.OVERLAY }),
                    u.A.setInputLocked(!0, P.A.getTargetPID()),
                    u.A.updateNotificationStatus(e, z.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, $.jsx)("div", {
        className: t7.k,
        children: (0, $.jsx)(t8.Ay, {
            innerClassName: t7.T,
            onChange: g,
            placeholder: r,
            accessibilityLabel: o,
            channel: n,
            textValue: d,
            richValue: f,
            type: t0.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: y,
            focused: A,
            onSubmit: E,
            onKeyDown: I,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var t3 = i(119191),
    t6 = i(361729);
function et(t) {
    t && (0, tB.Ak)(k.c, 0.4, void 0, void 0, { trackNotificationFailure: !0 });
}
let ee = { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 };
function ei(t) {
    let { message: e } = t,
        i = (0, tY.I2)({ location: "textChatNotification" }).enabled,
        n = (0, tG.j)({ excluded: tG.Z }),
        l = (0, tF.N)(e.content, { enabled: i, syntax: n });
    return (0, $.jsx)(tH.Ay, { message: e, options: ee, parsed: l });
}
var en = i(554146),
    el = i(298990),
    ea = i(429913),
    er = i(263577),
    eo = i(826673),
    es = i(754712),
    eu = i(907357),
    ec = i(487887),
    ed = i(731854),
    ef = i(709946),
    eA = i(302933);
function ep(t) {
    let { game: e } = t,
        i = (0, ea.h)(e.id);
    return null == i ? null : (0, $.jsx)(er.V, { src: i.getIconURL(ec.iu.LARGE), size: 40 });
}
let ey = 5 * U.A.Millis.SECOND,
    em = 8 * U.A.Millis.SECOND,
    eg = 30 * U.A.Millis.SECOND,
    eI = 30 * U.A.Millis.SECOND,
    eE = 30 * U.A.Millis.SECOND,
    e_ = Object.freeze({
        timestamp: 0,
        priority: K.In.NORMAL,
        duration: ey,
        expirationExternallyManaged: !1,
        type: K.zb.GENERIC,
    }),
    eS = [],
    eN = !1,
    eC = [],
    eh = {};
function eT(t, e, i) {
    (null == eh[t] && (eh[t] = {}), (eh[t][e] = i));
}
let ev = 30 * U.A.Millis.MINUTE,
    eO = 2 * U.A.Millis.MINUTE;
function eb() {
    if (eN && null == eS.find((t) => t.status === z.yFH.FOCUSED))
        for (let t of ((eN = !1), (eS = [...eS, ...eC]), (eC = []), eS.length > 40 && (eS.length = 40), eS))
            t.timer.start();
}
function eL() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eS.filter((t) => t.type === K.zb.TEXT && t.status === z.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - eg) && eD(e.id, z.yFH.DISMISSED);
        });
}
function ex() {
    let t = new Set();
    eS.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eD(e.id, z.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eD(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z.yFH.DISMISSED;
    if (null == t) return !1;
    let i = eS.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = eS[i];
    if ((n.timer.stop(), (eS = [...eS]), e === z.yFH.FOCUSED)) {
        let [t] = eS.splice(i, 1);
        ((t = { ...t, status: e }), eS.unshift(t), (eN = !0));
        return;
    }
    (e === z.yFH.DISMISSED ? eS.splice(i, 1) : (eS[i] = { ...n, status: e }), eb());
}
function eR(t) {
    let e = eS.find((e) => e.type === K.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function ek(t, e) {
    let i = { ...e_, timestamp: Date.now(), ...e },
        n = (0, a.A)(),
        l = !1,
        r = {
            id: n,
            status: z.yFH.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            a = l ? z.yFH.TIMED_OUT : z.yFH.DISMISSED;
                        -1 === n && (n = setTimeout(() => u.A.updateNotificationStatus(t, a), null != i ? i : ey));
                    },
                    stop() {
                        (clearTimeout(n), (n = -1));
                    },
                };
            })(n, i.expirationExternallyManaged, i.duration),
            props: {
                ...t,
                onNotificationShow: () => {
                    l || ((l = !0), t.onNotificationShow?.(n));
                },
            },
            ...i,
        },
        o = eN ? eC : [...eS],
        s = o.findIndex((t) => t.priority <= i.priority);
    if ((-1 === s ? o.push(r) : o.splice(s, 0, r), o.length > 40)) {
        let t = o.pop();
        eN || t.timer.stop();
    }
    return (eN || ((eS = o), r.timer.start()), n);
}
function eU(t, e, i, n, l) {
    return (
        null != n &&
        (ek(n, {
            priority: K.In.URGENT,
            expirationExternallyManaged: !0,
            channelId: t.id,
            duration: eI,
            uniqueKey: `activity-${e}-${i.id}-${t.id}-${l ?? "none"}`,
        }),
        ex(),
        !0)
    );
}
function eM() {
    if (w.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return !1;
    let t = C.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in eh) t.push(...Object.keys(eh[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        ((n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!v.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let o = (function (t) {
                    let e = C.A.getUserGame(t);
                    if (null == e) return null;
                    let i = C.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== r.$.PLAYING ? null : i;
                })(t);
                if (
                    null == o ||
                    !(
                        null != (i = o.timestamps?.start != null ? o.timestamps.start : o.created_at) &&
                        Date.now() - i < eO
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, V.NI)("nowPlayingNotification"),
                    d = w.A.isNotificationDisabledBySetting(M.M.NOW_PLAYING_DIFFERENT_GAMES),
                    f = O.Ay.getVoiceChannelId(),
                    p = D.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != f && null != p && f === p) return !1;
                let y = (0, G.qv)();
                if (null == y) return !1;
                let m = y.id !== a;
                return (
                    (!m || (!!s && !d)) &&
                    (!!(R.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !m) &&
                    (null == (n = eh[a]?.[t]?.lastSentTimestamp) || Date.now() - n > ev
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (w.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return null;
                                  let n = x.default.getUser(t);
                                  if (null == n) return null;
                                  let l = O.Ay.getCurrentlySelectedChannelId(),
                                      a = _.A.getChannel(l),
                                      r = c.A.getApplication(e),
                                      o = A.Ay.getRunningGames().find((t) => t.id === e),
                                      s = o?.name ?? r?.name ?? i.name,
                                      d = (0, tT.mG)(a?.guild_id, a?.id, n);
                                  if (null == s || 0 === s.trim().length) return null;
                                  let f = (0, $.jsxs)("div", {
                                          className: tL.Ql,
                                          children: [
                                              (0, $.jsx)("div", {
                                                  className: tL.bf,
                                                  children: (0, $.jsx)(tC.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: tS._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, $.jsx)("div", {
                                                  className: tL.rf,
                                                  children: (0, $.jsx)(tN.E, {
                                                      variant: "body-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tL.G3,
                                                      children: J.intl.format(J.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: s,
                                                          gameIcon: () =>
                                                              null != r || null != o
                                                                  ? (0, $.jsx)(th.A, {
                                                                        game: r,
                                                                        pid: o?.pid,
                                                                        size: th.M.XSMALL,
                                                                        className: tL.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: p, trackClick: y } = (0, F.Y9)(H.KS.NowPlayingNotification, {
                                          notif_type: H.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: s,
                                      }),
                                      { hasChat: m } = (0, V.NI)("nowPlayingNotification");
                                  return {
                                      body: f,
                                      className: tL.dn,
                                      wrapperClassName: tL.P6,
                                      animationWrapperClassName: tL.VG,
                                      clickZoneClassName: tL.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !m,
                                      onNotificationShow: () => {
                                          p();
                                      },
                                      onNotificationClick: (t, e) => {
                                          m &&
                                              (async () => {
                                                  try {
                                                      await (0, tb.D$)({
                                                          target: {
                                                              kind: tb.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tv.B9.NOTIFICATION_CLICK,
                                                          widgetType: z.uss.NOTIFICATIONS,
                                                      });
                                                      let t = P.A.getTargetPID();
                                                      (tO.A.isInputLocked(t)
                                                          ? (y("unlock"), u.A.setInputLocked(!1, t))
                                                          : y("jump"),
                                                          u.A.updateNotificationStatus(e, z.yFH.DISMISSED));
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          y("dismiss");
                                      },
                                  };
                              })(t, a, o)) &&
                              (eT(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              ek(l, { type: K.zb.GENERIC, priority: K.In.NORMAL })),
                          !0)
                        : (eT(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i));
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = P.A.isOverlayV3EnabledForPID(P.A.getTargetPID()) || null != P.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = h.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, G.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in eh) {
                let i = eh[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eV(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = eR(e);
    if (!Object.keys(i).includes(E.default.getId())) return eD(n);
    if (null != n) return !1;
    let l = _.A.getChannel(e);
    if (null == l || !l.isRingable() || b.A.getStatus() === z.clD.DND || g.NO.getSetting()) return !1;
    let a = eS.find((t) => t.type === K.zb.TEXT && t.channelId === e && t.messageType === z.lAJ.CALL);
    (null != a && eD(a.id),
        ek(
            (function (t) {
                let e = (0, tI.m1)(t, x.default, v.A),
                    i = J.intl.string(J.t.ssrVzG),
                    n = (0, tg.Y)(t),
                    l = (0, tE.A)(t),
                    { trackView: a, trackClick: r } = (0, F.Y9)(H.KS.IncomingCall, {
                        notif_type: H.KS.IncomingCall,
                        notif_user_id: l,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: n,
                    title: e,
                    body: i,
                    confirmText: J.intl.string(J.t["0D/6Rz"]),
                    cancelText: J.intl.string(J.t.BVN4pL),
                    onNotificationShow: () => {
                        a();
                    },
                    onConfirmClick: (e, i) => {
                        if ((r("join"), z.kvI.CALLABLE.has(t.type))) ty.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== z.rbe.GUILD_VOICE) return;
                            tm.default.selectVoiceChannel(t.id);
                        }
                        (u.A.updateNotificationStatus(i),
                            (0, t_.g)(z.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            }));
                    },
                    onCancelClick: () => {
                        (r("decline"), ty.A.stopRinging(t.id));
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: K.In.HIGH, expirationExternallyManaged: !0, type: K.zb.INCOMING_CALL, channelId: l.id },
        ));
}
class ej extends o.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        (this.waitFor(
            c.A,
            I.A,
            E.default,
            d.A,
            _.A,
            f.Ay,
            R.A,
            S.A,
            N.A,
            C.A,
            j.default,
            w.A,
            P.A,
            h.A,
            T.A,
            v.A,
            A.Ay,
            O.Ay,
            b.A,
            L.A,
            x.default,
            D.A,
        ),
            this.syncWith([C.A], eM));
    }
    getNotifications() {
        return eS;
    }
    hasNotificationForChannel(t) {
        return eS.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...eS].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return eS.filter((i) => i.channelId === t && i.type === e);
    }
}
let ew = new ej(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eD(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        eL(0);
        let n = P.A.getFocusedPID() ?? -1;
        if (j.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (w.A.isNotificationDisabled(H.KS.WelcomeNudge)) return null;
            es.Ay.supports(ed.O5.VIDEO) ||
                (e = e.filter((t) => t.type !== H.Jr.GO_LIVE_VOICE && t.type !== H.Jr.GO_LIVE_NON_VOICE));
            let { trackView: n, trackClick: l } = (0, F.Y9)(H.KS.WelcomeNudge, {
                    notif_type: H.KS.WelcomeNudge,
                    secondary_notif_types: e.map((t) => H.Jr[t.type]),
                }),
                a = {};
            for (let i of e)
                switch (i.type) {
                    case H.Jr.WELCOME: {
                        let e = (0, G.tg)(t?.altId ?? t?.id);
                        null != e &&
                            ((a.cancelText = J.intl.string(J.t["6F9ivu"])),
                            (a.onCancelClick = (t, i) => {
                                (l("unlock"),
                                    u.A.updateNotificationStatus(i),
                                    u.A.setInputLocked(!1, P.A.getTargetPID()),
                                    (0, el.qf)(e, !1, z.BRT.POPOUT));
                            }));
                        break;
                    }
                    case H.Jr.GO_LIVE_VOICE:
                    case H.Jr.GO_LIVE_NON_VOICE:
                        ((a.confirmText = J.intl.string(J.t.U76Ft2)),
                            (a.onConfirmClick = (t, e) => {
                                function i() {
                                    (l("go-live-modal"), u.A.setInputLocked(!1, P.A.getTargetPID()));
                                }
                                function n() {
                                    l("one-click-go-live");
                                }
                                (u.A.updateNotificationStatus(e),
                                    (0, tj.H)({
                                        pid: P.A.getTargetPID(),
                                        allowOneClickGoLive: !0,
                                        onBeforeShowModal: i,
                                        onOneClickGoLive: n,
                                        appContext: z.BRT.POPOUT,
                                    }));
                            }));
                        break;
                    case H.Jr.CONTENT_INVENTORY:
                        ((a.onNotificationShow = () => {
                            (0, t_.g)(z.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, $.jsx)(eu.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: eA.kL,
                                })));
                }
            let r = (0, eo.k8)(en.M.OVERLAY_OOP_WELCOME_NUX),
                o = J.intl.string(J.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, $.jsx)(ep, { game: t })
                        : (0, $.jsx)("img", { src: i(513653), className: ef.Kk, alt: "" }),
                title: o,
                hint: function () {
                    return (0, t3.sI)((0, F.Jn)(), J.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    (n(), r || (0, eo.Dr)(en.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                },
                onNotificationClick: (t, e) => {
                    (l("unlock"),
                        u.A.setInputLocked(!1, P.A.getTargetPID()),
                        r || (0, eo.Dr)(en.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e));
                },
                onDismissClick: (t, e) => {
                    (l("dismiss"), r || (0, eo.Dr)(en.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                },
            };
        })((0, G.qv)(), e);
        null != l && ek(l, { priority: K.In.URGENT, type: K.zb.NUDGE, duration: em });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of eS) t.status === z.yFH.FOCUSED && eD(t.id, z.yFH.ACTIVE);
            return !0;
        }
        for (let t of (eL(), eS))
            t.type === K.zb.NUDGE
                ? eD(t.id, z.yFH.DISMISSED)
                : t.status !== z.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (eS.length > 0)
            return eD(
                eS.filter((t) => t.type === K.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                z.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = _.A.getChannel(e),
            a = x.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([z.xL.JOIN, z.xL.JOIN_REQUEST, z.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, y.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, o, s;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                if (e.activity.type === z.xL.STREAM_REQUEST && null == e.application) {
                    let { enabled: n } = m.A.getConfig({ guildId: t.guild_id, location: "OverlayNotificationsStore" });
                    return !!n && eU(t, e.activity.type, i, tP(t, e.id, i, null, null), null);
                }
                let d = (0, G.qv)();
                if (null == d || null == d.id) return !1;
                let f = c.A.getApplication(d.id),
                    A = [d.id];
                (null != d.altId && A.push(d.altId),
                    f?.linkedGames != null && A.push(...f.linkedGames.map((t) => t.id)));
                let p = e.activity.party_id;
                switch (e.activity.type) {
                    case z.xL.JOIN:
                        ((n = (t) => h.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === p));
                        break;
                    case z.xL.JOIN_REQUEST:
                        ((n = (t) => b.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === p));
                        break;
                    case z.xL.STREAM_REQUEST:
                        ((n = (t) => b.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e));
                        break;
                    default:
                        return !1;
                }
                for (let t of A) {
                    if (null != (r = n(t)) && a(r, t)) {
                        o = t;
                        break;
                    }
                    r = void 0;
                }
                if (null == r || null == o) return !1;
                switch (e.activity.type) {
                    case z.xL.JOIN:
                        s = (function (t, e, i, n, l) {
                            if (w.A.isNotificationDisabled(H.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: o, title: s, body: c } = (0, y.TB)(t, e, i),
                                { trackView: d, trackClick: f } = (0, F.Y9)(H.KS.ActivityInvite, {
                                    notif_type: H.KS.ActivityInvite,
                                    notif_user_id: i.id,
                                    message_id: e.id,
                                    message_type: e.type,
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    channel_type: t.type,
                                    activity_type: a,
                                    activity_name: n.name,
                                });
                            return {
                                icon: o,
                                title: s,
                                body: c,
                                onNotificationShow: () => {
                                    d();
                                },
                                confirmText: J.intl.string(J.t.VJlc0S),
                                onConfirmClick: (n, a) => {
                                    (Y.A.join({
                                        userId: i.id,
                                        sessionId: r,
                                        applicationId: l,
                                        channelId: t.id,
                                        messageId: e.id,
                                    }),
                                        u.A.updateNotificationStatus(a),
                                        f("join"));
                                },
                                onDismissClick: () => {
                                    f("dismiss");
                                },
                            };
                        })(t, e, i, r, o);
                        break;
                    case z.xL.JOIN_REQUEST:
                        s = (function (t, e, i, n) {
                            if (w.A.isNotificationDisabled(H.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = J.intl.format(J.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: o, trackClick: s } = (0, F.Y9)(H.KS.ActivityInvite, {
                                    notif_type: H.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: z.xL.JOIN_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: J.intl.string(J.t["fgP/wX"]),
                                cancelText: J.intl.string(J.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    o();
                                },
                                onConfirmClick: (e, i) => {
                                    (tx.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: z.xL.JOIN,
                                        activity: n,
                                        location: (0, tR.y)() ? z.ThZ.LOCKED_OVERLAY : z.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        s("join"),
                                        u.A.updateNotificationStatus(i));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tD.I_)(
                                        t.id,
                                        {
                                            section: z.JJy.OVERLAY,
                                            object: z.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: z.btD.ACK_SEMI_AUTOMATIC,
                                        },
                                        !0,
                                        !0,
                                    ),
                                        u.A.updateNotificationStatus(i),
                                        s("decline"));
                                },
                                onDismissClick: () => {
                                    s("dismiss");
                                },
                            };
                        })(t, i, d, r);
                        break;
                    case z.xL.STREAM_REQUEST:
                        s = tP(t, e.id, i, d, r);
                }
                return eU(t, e.activity.type, i, s, o);
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (w.A.isNotificationDisabled(H.KS.TextChat) || L.A.disableNotifications || !(0, y.lx)(i, e)) return !1;
        let r = !N.A.isSoundDisabled(k.c),
            o = (function (t, e, i, n) {
                let { hasChat: l } = (0, V.NI)("textChatNotification");
                if (w.A.isNotificationDisabled(H.KS.TextChat)) return (et(!0), null);
                let { icon: a, title: r, body: o } = (0, y.TB)(t, e, i),
                    { trackView: s, trackClick: c } = (0, F.Y9)(H.KS.TextChat, {
                        notif_type: H.KS.TextChat,
                        notif_user_id: e.author?.id,
                        message_id: e.id,
                        message_type: e.type,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: a,
                    title: r,
                    body: e.content.length > 0 ? (0, $.jsx)(ei, { message: e }) : o,
                    unreadAccessory: (t) => (l ? (0, $.jsx)(tK.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tW.$)())
                            ? null
                            : (0, t3.sI)((0, F.Jn)(), l ? t6.default.VMcw8s : J.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tW.$)()
                            ? null
                            : i && !a
                              ? (0, $.jsx)(t5, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (et(n), s());
                    },
                    onNotificationClick: (i, n) => {
                        let a = P.A.getTargetPID();
                        if (
                            ((0, tD.I_)(
                                t.id,
                                {
                                    section: z.JJy.OVERLAY,
                                    object: z.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: z.btD.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                                e.id,
                            ),
                            l)
                        ) {
                            ((0, tb.D$)({
                                target: {
                                    kind: tb.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tv.B9.NOTIFICATION_CLICK,
                                widgetType: z.uss.TEXT_CHAT_V3,
                            }),
                                tO.A.isInputLocked(a) ? (c("unlock"), u.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tz._.dispatchToLastSubscribed(z.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                u.A.updateNotificationStatus(n, z.yFH.DISMISSED));
                            return;
                        }
                        tO.A.isInputLocked(a) && !(0, tW.$)()
                            ? (c("unlock"), u.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tJ.pX)(z.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              t$.isPlatformEmbedded && tX.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, S.A.getMessage(e, i.id) ?? (0, p.rh)(i), a, r);
        if (null == o) return !1;
        (ek(o, { type: K.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), eL());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = eS.length),
            (i = (eS = eS.filter((t) => t.type !== K.zb.TEXT || t.channelId !== n)).length !== e) && eb(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eV,
    CALL_UPDATE: eV,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eD(eR(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, G.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === z.xL.JOIN &&
                (e = (function (t, e) {
                    if (w.A.isNotificationDisabled(H.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = J.intl.format(J.t["Yk+uYG"], { username: "" }),
                        l = (0, B.ku)(t),
                        a = J.intl.string(J.t.WRj1Wn),
                        { trackView: r, trackClick: o } = (0, F.Y9)(H.KS.ActivityUserJoin, {
                            notif_type: H.KS.ActivityUserJoin,
                            notif_user_id: t.id,
                            activity_type: z.xL.JOIN,
                            activity_name: e.name,
                        });
                    return {
                        icon: l,
                        title: i,
                        body: n,
                        hint: a,
                        onNotificationShow: () => {
                            r();
                        },
                        onDismissClick: () => {
                            o("dismiss");
                        },
                    };
                })(n, a)),
            null != e && void ek(e, { priority: K.In.URGENT, type: K.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                ek(to(J.intl.string(J.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tl() &&
                    ek(
                        ((e = t.signal),
                        {
                            ...ti(H.KS.ClipsDebugAutoSignal),
                            title: `Auto-clip: ${(function (t) {
                                switch (t.type) {
                                    case te.Gy.MANUAL:
                                        return "Manual";
                                    case te.Gy.SHOUTING:
                                        return `Shouting detected (${t.confidence.toFixed(2)})`;
                                    case te.Gy.LAUGHTER:
                                        return `Laughter detected (${t.confidence.toFixed(2)})`;
                                    case te.Gy.GAME_EVENT:
                                        return `Game event: ${t.eventName ?? t.eventType}`;
                                    case te.Gy.DISTRIBUTED:
                                        return "Distributed clip from another user";
                                    case te.Gy.SPEAKING:
                                        return "Speaking detected";
                                    case te.Gy.SOUNDBOARD:
                                        return `Soundboard: ${t.name}`;
                                }
                            })(e)}`,
                        }),
                    );
                break;
            default:
                t.clipMethod;
        }
    },
    CLIPS_SAVE_CLIP: function (t) {
        if (tl()) {
            var e;
            let i;
            ek(
                ((i = (e = t.clip).type === te.nQ.SCREENSHOT ? "screenshot" : "clip"),
                {
                    ...ti(H.KS.ClipsDebugSaveSuccess),
                    title: "Clip saved",
                    body: `${i} \u{2022} ${e.clipMethod} \u{2022} ${e.decision?.signal?.type ?? ""}`,
                }),
            );
        }
    },
    CLIPS_SAVE_CLIP_ERROR: function (t) {
        if ("manual" === t.clipMethod) {
            var e, i;
            let n;
            (ek(to(J.intl.string(J.t["1ZbZuh"]))),
                tl() &&
                    null != t.errorMessage &&
                    ek(
                        ((e = t.errorMessage),
                        (i = t.errorAt),
                        (n = (() => {
                            if (null != e) return null != i ? `[${i}] ${e}` : e;
                        })()),
                        { ...ti(H.KS.ClipsDebugSaveError), title: "Clip save failed", body: n, maxBodyLines: 4 }),
                    ));
        }
    },
    CLIPS_SAVE_CLIP_NO_OP: function (t) {
        if ("manual" === t.clipMethod && tl()) {
            var e, i;
            let n;
            ek(
                ((e = t.reason),
                (i = t.sourceChecks),
                (n = (() => {
                    switch (e) {
                        case te.RC.MAX_CONCURRENT_SAVES:
                            return "Too many clips saving at once (15 in flight). Wait for one to finish.";
                        case te.RC.NO_ELIGIBLE_SOURCE:
                            let t, n;
                            return null != i
                                ? ((t = [tn("clips enabled", i.clipsEnabled), tn("streaming", i.hasActiveStream)].join(
                                      ", ",
                                  )),
                                  (n = [
                                      tn("visible game window", i.hasVisibleGameWindow),
                                      tn("clips source", i.hasClipsSource),
                                  ].join(",\n")),
                                  `No capture source. Need any branch satisfied:
\u{2022} GoLive \u{2014} ${t}
\u{2022} Decoupled \u{2014} ${n}`)
                                : "No capture source available. Need an active stream, a decoupled game capture, or a voice channel.";
                        case te.RC.MODULE_NOT_LOADED:
                            return "discord_clips is still downloading. Try again once the module finishes installing.";
                        case te.RC.BUFFER_WARMING_UP:
                            return "No encoded video frames yet \u2014 the capture pipeline just started or reset. Try again in a couple of seconds.";
                        case te.RC.BRIDGE_SHUTDOWN:
                            return "Clips bridge shut down before the save completed (process exited or v3 was disabled). Try again once clips is back up.";
                        case te.RC.RECORDING_NOT_READY:
                            return "Clips recorder is not recording yet (still cold-starting, or it idle-shut-down). Try again in a couple of seconds.";
                    }
                })()),
                { ...ti(H.KS.ClipsDebugSaveNoOp), title: "Clip hotkey ignored", body: n, maxBodyLines: 8 }),
            );
        }
    },
    CLIPS_SAVE_CLIP_TIMEOUT: function (t) {
        if ("manual" === t.clipMethod && tl()) {
            var e;
            ek(
                ((e = t.elapsedMs),
                {
                    ...ti(H.KS.ClipsDebugSaveTimeout),
                    title: "Clip save stalled",
                    body: `No success or failure after ${Math.round(e / 1e3)}s. The native saveClip callback likely never fired \u{2014} check the media engine / voice engine logs.`,
                    maxBodyLines: 4,
                }),
            );
        }
    },
    CLIPS_INIT: function (t) {
        var e;
        if (!tl()) return;
        let i =
            0 ===
            (e = (function () {
                let t = [],
                    e = f.Ay.getSettings(),
                    i = (0, Z.s)(),
                    { enableDistributedClips: n } = q.A.getConfig({ location: "getEnabledClipsFeatures" }),
                    l = Q.Ay.getKeybindForAction(z.hCu.SAVE_CLIP);
                if ((null != l && t.push(`Manual (${tt.dI(l.shortcut, !0)})`), i)) {
                    let e = ["laughter"];
                    e.length > 0 && t.push(`Auto (${e.join(", ")})`);
                }
                return (n && e.clipSignals.enableDistributedSignals && t.push("Distributed"), t);
            })()).length
                ? null
                : {
                      ...ti(H.KS.ClipsDebugFeaturesEnabled),
                      title: "Clips engine ready",
                      body: `Clips features active: ${e.join("\n\u2022 ")}`,
                      maxBodyLines: 8,
                  };
        null != i &&
            (ek(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * U.A.Millis.SECOND }), ex());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (w.A.isNotificationDisabled(H.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, F.Y9)(H.KS.ClipsReminderNotification, {
                    notif_type: H.KS.ClipsReminderNotification,
                }),
                i = Q.Ay.getKeybindForAction(z.hCu.SAVE_CLIP),
                n = (0, ta.T)();
            if (null == i || !n) return null;
            let l = tt.dI(i.shortcut, !0);
            return {
                title: J.intl.format(J.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, $.jsx)(tr.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, $.jsx)(W.ClipsIcon, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && ek(e);
    },
    CONJURE_SERVER_OVERLAY_WIDGET_NOTIFY: function (t) {
        let { project: e } = t,
            n = (function (t) {
                let e = null != t.guild_id ? td.A.getGuild(t.guild_id) : null;
                if (null == e) return null;
                let n = t.application_id;
                function l() {
                    s.h.dispatch({ type: "CONJURE_SERVER_OVERLAY_WIDGET_NOTICE_DISMISS", applicationId: n });
                }
                return {
                    className: tp.E,
                    icon: (0, $.jsx)(tf.A, { project: t, size: 40, className: tp.K }),
                    title: J.intl.string(tA.default.Gs0CAV),
                    body: J.intl.formatToPlainString(tA.default.s2vNx0, { appName: t.name, guildName: e.name }),
                    confirmText: J.intl.string(tA.default.IHEjZ9),
                    confirmVariant: "primary",
                    cancelText: J.intl.string(tA.default["+XhinA"]),
                    onNotificationShow: () => {},
                    onConfirmClick: (e, l) => {
                        let a = (function (t) {
                            let e = (function (t) {
                                for (let e = (0, ts.vq)(t) ? t : null; null != e; e = e.parentElement)
                                    if (e.classList.contains(tp.E)) return e;
                                return null;
                            })(t);
                            if (null == e) return;
                            let i = e.getBoundingClientRect();
                            return { top: Math.round(i.bottom + 16), left: Math.round(i.left) };
                        })(e.currentTarget);
                        if ((u.A.updateNotificationStatus(l), !tc.A.isServerProjectEnabled(n)))
                            return (async function (t, e) {
                                let { default: n } = await Promise.all([i.e(462155), i.e(651428)]).then(
                                    i.bind(i, 490630),
                                );
                                await n(t, { modalContextKey: (0, tu.TI)(z.BRT.OVERLAY), position: e });
                            })(t, a);
                    },
                    onCancelClick: (t, e) => {
                        (l(), u.A.updateNotificationStatus(e));
                    },
                    onDismissClick: l,
                };
            })(e);
        if (null == n) return !1;
        (ek(n, { duration: eE, uniqueKey: `conjure-server-overlay-widget-${e.application_id}` }), ex());
    },
});
