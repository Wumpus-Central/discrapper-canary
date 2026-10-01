(i.r(e), i.d(e, { default: () => eT }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(132500),
    r = i(17928),
    s = i(73153),
    o = i(684013),
    u = i(587895),
    c = i(198052),
    d = i(915725),
    f = i(952818),
    A = i(320095),
    p = i(176154),
    y = i(885386),
    m = i(616356),
    E = i(280450),
    g = i(734057),
    I = i(232835),
    _ = i(803224),
    N = i(783592),
    S = i(290863),
    C = i(763827),
    h = i(994500),
    T = i(309010),
    v = i(461213),
    O = i(351906),
    b = i(287809),
    L = i(977997),
    x = i(90165),
    D = i(592329),
    R = i(927813),
    k = i(93465),
    M = i(589051),
    U = i(296027),
    V = i(592598),
    j = i(489277),
    P = i(897720),
    w = i(243612),
    K = i(780907),
    G = i(581730),
    F = i(672396),
    Y = i(375708),
    H = i(486020),
    J = i(652215),
    B = i(477900),
    z = i(582128),
    $ = i(176781),
    X = i(974293),
    W = i(458977),
    q = i(532624),
    Q = i(350535),
    Z = i(696016);
function tt(t) {
    let { trackView: e, trackClick: i } = (0, G.Y9)(t, { notif_type: t });
    return {
        icon: (0, B.jsx)($.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => e(),
        onDismissClick: () => i("dismiss"),
    };
}
function te(t, e) {
    return `${t} ${e ? "\u2713" : "\u2717"}`;
}
function ti() {
    return d.Ay.getSettings().debugTooltipsEnabled;
}
var tn = i(572164),
    tl = i(22802);
function ta(t) {
    let { trackView: e, trackClick: i } = (0, G.Y9)(F.KS.ClipsNotification, { notif_type: F.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, B.jsx)($.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var tr = i(429913),
    ts = i(263577),
    to = i(744893),
    tu = i(188321),
    tc = i(825502),
    td = i(818023),
    tf = i(141531);
function tA(t) {
    let { game: e } = t,
        i = (0, tr.h)(e.id);
    return null == i ? null : (0, B.jsx)(ts.V, { src: i.getIconURL(td.iu.LARGE), size: 40 });
}
var tp = i(387755),
    ty = i(730852),
    tm = i(571694),
    tE = i(47167),
    tg = i(621436),
    tI = i(778712),
    t_ = i(834730),
    tN = i(966327),
    tS = i(769015),
    tC = i(562153),
    th = i(41984),
    tT = i(222506),
    tv = i(145567),
    tO = i(34773),
    tb = i(308368),
    tL = i(334738),
    tx = i(481484),
    tD = i(258585),
    tR = i(560595),
    tk = i(929921),
    tM = i(753070),
    tU = i(905322),
    tV = i(941971),
    tj = i(521981),
    tP = i(976860),
    tw = i(400492),
    tK = i(625494),
    tG = i(723702),
    tF = i(19575),
    tY = i(366032),
    tH = i(148494),
    tJ = i(964486),
    tB = i(480870),
    tz = i(355622),
    t$ = i(408018),
    tX = i(479909),
    tW = i(451909),
    tq = i(135621),
    tQ = i(381941),
    tZ = i(158602);
function t0(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tq.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tB.A)({ channel: n }),
        [u, c] = z.useState(() => (0, t$.N3)()),
        { textValue: d, richValue: f } = u,
        [A, p] = z.useState(!1),
        y = z.useCallback(() => p(!0), []),
        m = z.useCallback(() => p(!1), []);
    (0, tJ.Ay)(() => {
        (0, tL.ack)(
            n.id,
            {
                section: J.JJy.OVERLAY,
                object: J.ZSU.ACK_INLINE_REPLY,
                objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            i,
        );
    });
    let E = z.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        g = z.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, J.yFH.ACTIVE);
            },
            [e],
        ),
        I = z.useCallback(
            () => (
                d.length > a ||
                    (tH.A.sendMessage(n.id, tW.Ay.parse(n, d), !1, { location: tQ.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, j.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, J.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, B.jsx)("div", {
        className: tZ.k,
        children: (0, B.jsx)(tX.Ay, {
            innerClassName: tZ.T,
            onChange: E,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: f,
            type: tz.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: y,
            focused: A,
            onSubmit: I,
            onKeyDown: g,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var t1 = i(119191),
    t2 = i(671210);
function t5(t) {
    t && (0, tw.Ak)(D.cH, D.pD, void 0, void 0, { trackNotificationFailure: !0 });
}
var t8 = i(554146),
    t9 = i(298990),
    t7 = i(826673),
    t3 = i(25578),
    t4 = i(308726),
    t6 = i(46282),
    et = i(731854),
    ee = i(709946),
    ei = i(302933);
function en(t) {
    let { game: e } = t,
        i = (0, tr.h)(e.id);
    return null == i ? null : (0, B.jsx)(ts.V, { src: i.getIconURL(td.iu.LARGE), size: 40 });
}
let el = 5 * R.A.Millis.SECOND,
    ea = 8 * R.A.Millis.SECOND,
    er = 30 * R.A.Millis.SECOND,
    es = 30 * R.A.Millis.SECOND,
    eo = Object.freeze({
        timestamp: 0,
        priority: P.In.NORMAL,
        duration: el,
        expirationExternallyManaged: !1,
        type: P.zb.GENERIC,
    }),
    eu = [],
    ec = !1,
    ed = [],
    ef = {};
function eA(t, e, i) {
    (null == ef[t] && (ef[t] = {}), (ef[t][e] = i));
}
let ep = 30 * R.A.Millis.MINUTE,
    ey = 2 * R.A.Millis.MINUTE;
function em() {
    if (ec && null == eu.find((t) => t.status === J.yFH.FOCUSED))
        for (let t of ((ec = !1), (eu = [...eu, ...ed]), (ed = []), eu.length > 40 && (eu.length = 40), eu))
            t.timer.start();
}
function eE() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eu.filter((t) => t.type === P.zb.TEXT && t.status === J.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - er) && eI(e.id, J.yFH.DISMISSED);
        });
}
function eg() {
    let t = new Set();
    eu.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eI(e.id, J.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eI(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J.yFH.DISMISSED;
    if (null == t) return !1;
    let i = eu.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = eu[i];
    if ((n.timer.stop(), (eu = [...eu]), e === J.yFH.FOCUSED)) {
        let [t] = eu.splice(i, 1);
        ((t = { ...t, status: e }), eu.unshift(t), (ec = !0));
        return;
    }
    (e === J.yFH.DISMISSED ? eu.splice(i, 1) : (eu[i] = { ...n, status: e }), em());
}
function e_(t) {
    let e = eu.find((e) => e.type === P.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eN(t, e) {
    let i = { ...eo, timestamp: Date.now(), ...e },
        n = (0, a.A)(),
        l = !1,
        r = {
            id: n,
            status: J.yFH.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            a = l ? J.yFH.TIMED_OUT : J.yFH.DISMISSED;
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : el));
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
        s = ec ? ed : [...eu],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        ec || t.timer.stop();
    }
    return (ec || ((eu = s), r.timer.start()), n);
}
function eS() {
    if (V.A.isNotificationDisabled(F.KS.NowPlayingNotification)) return !1;
    let t = N.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in ef) t.push(...Object.keys(ef[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        ((n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!h.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = N.A.getUserGame(t);
                    if (null == e) return null;
                    let i = N.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== J.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < ey
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, M.NI)("nowPlayingNotification"),
                    c = V.A.isNotificationDisabledBySetting(k.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = T.Ay.getVoiceChannelId(),
                    A = L.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != A && d === A) return !1;
                let p = (0, w.qv)();
                if (null == p) return !1;
                let y = p.id !== a;
                return (
                    (!y || (!!s && !c)) &&
                    (!!(x.A.hasApplicationStatistic(a) || f.Ay.isGameSeen(a)) || !y) &&
                    (null == (n = ef[a]?.[t]?.lastSentTimestamp) || Date.now() - n > ep
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (V.A.isNotificationDisabled(F.KS.NowPlayingNotification)) return null;
                                  let n = b.default.getUser(t);
                                  if (null == n) return null;
                                  let l = T.Ay.getCurrentlySelectedChannelId(),
                                      a = g.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = f.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, tC.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let A = (0, B.jsxs)("div", {
                                          className: tO.Ql,
                                          children: [
                                              (0, B.jsx)("div", {
                                                  className: tO.bf,
                                                  children: (0, B.jsx)(tN.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: tI._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, B.jsx)("div", {
                                                  className: tO.rf,
                                                  children: (0, B.jsx)(t_.E, {
                                                      variant: "text-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tO.G3,
                                                      children: Y.intl.format(Y.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: c,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, B.jsx)(tS.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: tS.M.XSMALL,
                                                                        className: tO.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: p, trackClick: y } = (0, G.Y9)(F.KS.NowPlayingNotification, {
                                          notif_type: F.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: c,
                                      }),
                                      { hasChat: m } = (0, M.NI)("nowPlayingNotification");
                                  return {
                                      body: A,
                                      className: tO.dn,
                                      wrapperClassName: tO.P6,
                                      animationWrapperClassName: tO.VG,
                                      clickZoneClassName: tO.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !m,
                                      onNotificationShow: () => {
                                          p();
                                      },
                                      onNotificationClick: (t, e) => {
                                          m &&
                                              (async () => {
                                                  try {
                                                      await (0, tv.D$)({
                                                          target: {
                                                              kind: tv.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: th.B9.NOTIFICATION_CLICK,
                                                          widgetType: J.uss.NOTIFICATIONS,
                                                      });
                                                      let t = j.A.getTargetPID();
                                                      (tT.A.isInputLocked(t)
                                                          ? (y("unlock"), o.A.setInputLocked(!1, t))
                                                          : y("jump"),
                                                          o.A.updateNotificationStatus(e, J.yFH.DISMISSED));
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          y("dismiss");
                                      },
                                  };
                              })(t, a, r)) &&
                              (eA(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eN(l, { type: P.zb.GENERIC, priority: P.In.NORMAL })),
                          !0)
                        : (eA(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i));
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = j.A.isOverlayV3EnabledForPID(j.A.getTargetPID()) || null != j.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = S.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, w.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in ef) {
                let i = ef[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eC(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = e_(e);
    if (!Object.keys(i).includes(E.default.getId())) return eI(n);
    if (null != n) return !1;
    let l = g.A.getChannel(e);
    if (null == l || !l.isRingable() || v.A.getStatus() === J.clD.DND || y.NO.getSetting()) return !1;
    let a = eu.find((t) => t.type === P.zb.TEXT && t.channelId === e && t.messageType === J.lAJ.CALL);
    (null != a && eI(a.id),
        eN(
            (function (t) {
                let e = (0, tE.m1)(t, b.default, h.A),
                    i = Y.intl.string(Y.t.ssrVzG),
                    n = (0, tm.Y)(t),
                    l = (0, tg.A)(t),
                    { trackView: a, trackClick: r } = (0, G.Y9)(F.KS.IncomingCall, {
                        notif_type: F.KS.IncomingCall,
                        notif_user_id: l,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: n,
                    title: e,
                    body: i,
                    confirmText: Y.intl.string(Y.t["0D/6Rz"]),
                    cancelText: Y.intl.string(Y.t.BVN4pL),
                    onNotificationShow: () => {
                        a();
                    },
                    onConfirmClick: (e, i) => {
                        if ((r("join"), J.kvI.CALLABLE.has(t.type))) tp.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== J.rbe.GUILD_VOICE) return;
                            ty.default.selectVoiceChannel(t.id);
                        }
                        (o.A.updateNotificationStatus(i),
                            o.A.track(J.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            }));
                    },
                    onCancelClick: () => {
                        (r("decline"), tp.A.stopRinging(t.id));
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: P.In.HIGH, expirationExternallyManaged: !0, type: P.zb.INCOMING_CALL, channelId: l.id },
        ));
}
class eh extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        (this.waitFor(
            u.A,
            m.A,
            E.default,
            c.A,
            g.A,
            d.Ay,
            x.A,
            I.A,
            _.A,
            N.A,
            U.default,
            V.A,
            j.A,
            S.A,
            C.A,
            h.A,
            f.Ay,
            T.Ay,
            v.A,
            O.A,
            b.default,
            L.A,
        ),
            this.syncWith([N.A], eS));
    }
    getNotifications() {
        return eu;
    }
    hasNotificationForChannel(t) {
        return eu.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...eu].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return eu.filter((i) => i.channelId === t && i.type === e);
    }
}
let eT = new eh(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eI(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        eE(0);
        let n = j.A.getFocusedPID() ?? -1;
        if (U.default.hasChangedRenderMode(n)) return;
        let l = (0, w.qv)(),
            a = (function (t, e) {
                if (V.A.isNotificationDisabled(F.KS.WelcomeNudge)) return null;
                t3.Ay.supports(et.O5.VIDEO) ||
                    (e = e.filter((t) => t.type !== F.Jr.GO_LIVE_VOICE && t.type !== F.Jr.GO_LIVE_NON_VOICE));
                let { trackView: n, trackClick: l } = (0, G.Y9)(F.KS.WelcomeNudge, {
                        notif_type: F.KS.WelcomeNudge,
                        secondary_notif_types: e.map((t) => F.Jr[t.type]),
                    }),
                    a = {};
                for (let i of e)
                    switch (i.type) {
                        case F.Jr.WELCOME: {
                            let e = (0, w.tg)(t?.altId ?? t?.id);
                            null != e &&
                                ((a.cancelText = Y.intl.string(Y.t["6F9ivu"])),
                                (a.onCancelClick = (t, i) => {
                                    (l("unlock"),
                                        o.A.updateNotificationStatus(i),
                                        o.A.setInputLocked(!1, j.A.getTargetPID()),
                                        (0, t9.qf)(e, !1, J.BRT.POPOUT));
                                }));
                            break;
                        }
                        case F.Jr.GO_LIVE_VOICE:
                        case F.Jr.GO_LIVE_NON_VOICE:
                            ((a.confirmText = Y.intl.string(Y.t.U76Ft2)),
                                (a.onConfirmClick = (t, e) => {
                                    function i() {
                                        (l("go-live-modal"), o.A.setInputLocked(!1, j.A.getTargetPID()));
                                    }
                                    function n() {
                                        l("one-click-go-live");
                                    }
                                    (o.A.updateNotificationStatus(e),
                                        (0, t6.H)({
                                            pid: j.A.getTargetPID(),
                                            analyticsLocation: J.ThZ.OVERLAY_NUDGE,
                                            allowOneClickGoLive: !0,
                                            onBeforeShowModal: i,
                                            onOneClickGoLive: n,
                                            appContext: J.BRT.POPOUT,
                                        }));
                                }));
                            break;
                        case F.Jr.CONTENT_INVENTORY:
                            ((a.onNotificationShow = () => {
                                o.A.track(J.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                    user_ids: i.entries.map((t) => t.author_id),
                                    entry_ids: i.entries.map((t) => t.id),
                                });
                            }),
                                (a.renderFooter = () =>
                                    (0, B.jsx)(t4.ru, {
                                        gamingId: t?.altId ?? t?.id,
                                        maxUserShowCount: 5,
                                        variant: "default",
                                        className: ei.kL,
                                    })));
                    }
                let r = (0, t7.k8)(t8.M.OVERLAY_OOP_WELCOME_NUX),
                    s = Y.intl.string(Y.t.KWDIrh);
                return {
                    icon:
                        null != t
                            ? (0, B.jsx)(en, { game: t })
                            : (0, B.jsx)("img", { src: i(513653), className: ee.Kk, alt: "" }),
                    title: s,
                    hint: function () {
                        return (0, t1.sI)((0, G.Jn)(), Y.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                    },
                    ...a,
                    onNotificationShow: (t) => {
                        (n(), r || (0, t7.Dr)(t8.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                    },
                    onNotificationClick: (t, e) => {
                        (l("unlock"),
                            o.A.setInputLocked(!1, j.A.getTargetPID()),
                            r || (0, t7.Dr)(t8.M.OVERLAY_OOP_WELCOME_NUX),
                            a.onNotificationClick?.(t, e));
                    },
                    onDismissClick: (t, e) => {
                        (l("dismiss"), r || (0, t7.Dr)(t8.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                    },
                };
            })(l, e);
        null != a && eN(a, { priority: P.In.URGENT, type: P.zb.NUDGE, duration: ea });
        let r = (function (t) {
            if (null == t || !(0, tc.T)("gameModeNotification") || tu.A.enabled || tu.A.isPromptSuppressedForGame(t.id))
                return null;
            function e() {
                null != t && to.fT(t.id);
            }
            return {
                icon: (0, B.jsx)(tA, { game: t }),
                title: Y.intl.string(tf.default.HJcyIC),
                body: Y.intl.string(tf.default.PEFk1b),
                confirmText: Y.intl.string(tf.default.jw65bq),
                cancelText: Y.intl.string(tf.default["/sw6q+"]),
                onNotificationShow: () => {},
                onConfirmClick: (t, e) => {
                    (to.kv(!0), o.A.updateNotificationStatus(e));
                },
                onCancelClick: (t, i) => {
                    (e(), o.A.updateNotificationStatus(i));
                },
                onDismissClick: () => {
                    e();
                },
            };
        })(l);
        null != r && eN(r, { priority: P.In.NORMAL, type: P.zb.NUDGE, duration: ea });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of eu) t.status === J.yFH.FOCUSED && eI(t.id, J.yFH.ACTIVE);
            return !0;
        }
        for (let t of (eE(), eu))
            t.type === P.zb.NUDGE
                ? eI(t.id, J.yFH.DISMISSED)
                : t.status !== J.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (eu.length > 0)
            return eI(
                eu.filter((t) => t.type === P.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                J.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = g.A.getChannel(e),
            a = b.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([J.xL.JOIN, J.xL.JOIN_REQUEST, J.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, p.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, c;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                let d = (0, w.qv)();
                if (null == d || null == d.id) return !1;
                let f = u.A.getApplication(d.id),
                    A = [d.id];
                (null != d.altId && A.push(d.altId),
                    f?.linkedGames != null && A.push(...f.linkedGames.map((t) => t.id)));
                let y = e.activity.party_id;
                switch (e.activity.type) {
                    case J.xL.JOIN:
                        ((n = (t) => S.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case J.xL.JOIN_REQUEST:
                        ((n = (t) => v.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case J.xL.STREAM_REQUEST:
                        ((n = (t) => v.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e));
                        break;
                    default:
                        return !1;
                }
                for (let t of A) {
                    if (null != (r = n(t)) && a(r, t)) {
                        s = t;
                        break;
                    }
                    r = void 0;
                }
                if (null == r || null == s) return !1;
                switch (e.activity.type) {
                    case J.xL.JOIN:
                        c = (function (t, e, i, n, l) {
                            if (V.A.isNotificationDisabled(F.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: u, body: c } = (0, p.TB)(t, e, i),
                                { trackView: d, trackClick: f } = (0, G.Y9)(F.KS.ActivityInvite, {
                                    notif_type: F.KS.ActivityInvite,
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
                                icon: s,
                                title: u,
                                body: c,
                                onNotificationShow: () => {
                                    d();
                                },
                                confirmText: Y.intl.string(Y.t.VJlc0S),
                                onConfirmClick: (n, a) => {
                                    (K.Ay.join({
                                        userId: i.id,
                                        sessionId: r,
                                        applicationId: l,
                                        channelId: t.id,
                                        messageId: e.id,
                                    }),
                                        o.A.updateNotificationStatus(a),
                                        f("join"));
                                },
                                onDismissClick: () => {
                                    f("dismiss");
                                },
                            };
                        })(t, e, i, r, s);
                        break;
                    case J.xL.JOIN_REQUEST:
                        c = (function (t, e, i, n) {
                            if (V.A.isNotificationDisabled(F.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = Y.intl.format(Y.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, G.Y9)(F.KS.ActivityInvite, {
                                    notif_type: F.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: J.xL.JOIN_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: Y.intl.string(Y.t["fgP/wX"]),
                                cancelText: Y.intl.string(Y.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (e, i) => {
                                    (tb.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: J.xL.JOIN,
                                        activity: n,
                                        location: (0, tx.y)() ? J.ThZ.LOCKED_OVERLAY : J.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tL.ack)(
                                        t.id,
                                        {
                                            section: J.JJy.OVERLAY,
                                            object: J.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                        },
                                        !0,
                                        !0,
                                    ),
                                        o.A.updateNotificationStatus(i),
                                        u("decline"));
                                },
                                onDismissClick: () => {
                                    u("dismiss");
                                },
                            };
                        })(t, i, d, r);
                        break;
                    case J.xL.STREAM_REQUEST:
                        c = (function (t, e, i, n) {
                            if (
                                V.A.isNotificationDisabled(F.KS.RequestToStream) ||
                                null != m.A.getCurrentUserActiveStream()
                            )
                                return null;
                            let l = e.username,
                                a = Y.intl.format(tU.default.jTbTAF, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, G.Y9)(F.KS.RequestToStream, {
                                    notif_type: F.KS.RequestToStream,
                                    notif_user_id: e.id,
                                    activity_type: J.xL.STREAM_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: Y.intl.string(tU.default.UGbmBp),
                                cancelText: Y.intl.string(Y.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (t, e) => {
                                    let i = tk.A.getState().preset;
                                    if (i === tM.jQ.PRESET_DOCUMENTS) {
                                        let { allowAutoQuality: t } = (0, tD.eO)({
                                            location: "requestToStreamNotification",
                                        });
                                        i = t ? tM.jQ.PRESET_AUTO : tM.jQ.PRESET_VIDEO;
                                    }
                                    ((0, tR.A)(j.A.getTargetPID(), { preset: i }),
                                        u("request-to-stream"),
                                        o.A.updateNotificationStatus(e));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tL.ack)(
                                        t.id,
                                        {
                                            section: J.JJy.OVERLAY,
                                            object: J.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                                            objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                        },
                                        !0,
                                        !0,
                                    ),
                                        o.A.updateNotificationStatus(i),
                                        u("decline"));
                                },
                                onDismissClick: () => {
                                    u("dismiss");
                                },
                            };
                        })(t, i, d, r);
                }
                return (
                    null != c &&
                    (eN(c, {
                        priority: P.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: es,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    eg(),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (V.A.isNotificationDisabled(F.KS.TextChat) || O.A.disableNotifications || !(0, p.lx)(i, e)) return !1;
        let r = !_.A.isSoundDisabled(D.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, M.NI)("textChatNotification");
                if (V.A.isNotificationDisabled(F.KS.TextChat)) return (t5(!0), null);
                let { icon: a, title: r, body: s } = (0, p.TB)(t, e, i),
                    { trackView: u, trackClick: c } = (0, G.Y9)(F.KS.TextChat, {
                        notif_type: F.KS.TextChat,
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
                    body:
                        e.content.length > 0
                            ? (0, tj.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, B.jsx)(tV.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tY.$)())
                            ? null
                            : (0, t1.sI)((0, G.Jn)(), l ? t2.default.VMcw8s : Y.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tY.$)()
                            ? null
                            : i && !a
                              ? (0, B.jsx)(t0, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (t5(n), u());
                    },
                    onNotificationClick: (i, n) => {
                        let a = j.A.getTargetPID();
                        if (
                            ((0, tL.ack)(
                                t.id,
                                {
                                    section: J.JJy.OVERLAY,
                                    object: J.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                                e.id,
                            ),
                            l)
                        ) {
                            ((0, tv.D$)({
                                target: {
                                    kind: tv.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: th.B9.NOTIFICATION_CLICK,
                                widgetType: J.uss.TEXT_CHAT_V3,
                            }),
                                tT.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tK._.dispatchToLastSubscribed(J.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, J.yFH.DISMISSED));
                            return;
                        }
                        tT.A.isInputLocked(a) && !(0, tY.$)()
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tP.pX)(J.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tG.isPlatformEmbedded && tF.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, I.A.getMessage(e, i.id) ?? (0, A.rh)(i), a, r);
        if (null == s) return !1;
        (eN(s, { type: P.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), eE());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = eu.length),
            (i = (eu = eu.filter((t) => t.type !== P.zb.TEXT || t.channelId !== n)).length !== e) && em(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eC,
    CALL_UPDATE: eC,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eI(e_(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, w.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === J.xL.JOIN &&
                (e = (function (t, e) {
                    if (V.A.isNotificationDisabled(F.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = Y.intl.format(Y.t["Yk+uYG"], { username: "" }),
                        l = (0, H.ku)(t),
                        a = Y.intl.string(Y.t.WRj1Wn),
                        { trackView: r, trackClick: s } = (0, G.Y9)(F.KS.ActivityUserJoin, {
                            notif_type: F.KS.ActivityUserJoin,
                            notif_user_id: t.id,
                            activity_type: J.xL.JOIN,
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
                            s("dismiss");
                        },
                    };
                })(n, a)),
            null != e && void eN(e, { priority: P.In.URGENT, type: P.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eN(ta(Y.intl.string(Y.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    ti() &&
                    eN(
                        ((e = t.signal),
                        {
                            ...tt(F.KS.ClipsDebugAutoSignal),
                            title: `Auto-clip: ${(function (t) {
                                switch (t.type) {
                                    case Z.Gy.MANUAL:
                                        return "Manual";
                                    case Z.Gy.SHOUTING:
                                        return `Shouting detected (${t.confidence.toFixed(2)})`;
                                    case Z.Gy.LAUGHTER:
                                        return `Laughter detected (${t.confidence.toFixed(2)})`;
                                    case Z.Gy.GAME_EVENT:
                                        return `Game event: ${t.title ?? t.eventType}`;
                                    case Z.Gy.DISTRIBUTED:
                                        return "Distributed clip from another user";
                                    case Z.Gy.SPEAKING:
                                        return "Speaking detected";
                                    case Z.Gy.SOUNDBOARD:
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
        if (ti()) {
            var e;
            let i;
            eN(
                ((i = (e = t.clip).type === Z.nQ.SCREENSHOT ? "screenshot" : "clip"),
                {
                    ...tt(F.KS.ClipsDebugSaveSuccess),
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
            (eN(ta(Y.intl.string(Y.t["1ZbZuh"]))),
                ti() &&
                    null != t.errorMessage &&
                    eN(
                        ((e = t.errorMessage),
                        (i = t.errorAt),
                        (n = (() => {
                            if (null != e) return null != i ? `[${i}] ${e}` : e;
                        })()),
                        { ...tt(F.KS.ClipsDebugSaveError), title: "Clip save failed", body: n, maxBodyLines: 4 }),
                    ));
        }
    },
    CLIPS_SAVE_CLIP_NO_OP: function (t) {
        if ("manual" === t.clipMethod && ti()) {
            var e, i;
            let n;
            eN(
                ((e = t.reason),
                (i = t.sourceChecks),
                (n = (() => {
                    switch (e) {
                        case Z.RC.MAX_CONCURRENT_SAVES:
                            return `Too many clips saving at once (${Z.VP} in flight). Wait for one to finish.`;
                        case Z.RC.NO_ELIGIBLE_SOURCE:
                            let t, n;
                            return null != i
                                ? ((t = [te("clips enabled", i.clipsEnabled), te("streaming", i.hasActiveStream)].join(
                                      ", ",
                                  )),
                                  (n = [
                                      te("visible game window", i.hasVisibleGameWindow),
                                      te("clips source", i.hasClipsSource),
                                  ].join(",\n")),
                                  `No capture source. Need any branch satisfied:
\u{2022} GoLive \u{2014} ${t}
\u{2022} Decoupled \u{2014} ${n}`)
                                : "No capture source available. Need an active stream, a decoupled game capture, or a voice channel.";
                        case Z.RC.MODULE_NOT_LOADED:
                            return "discord_clips is still downloading. Try again once the module finishes installing.";
                        case Z.RC.BUFFER_WARMING_UP:
                            return "No encoded video frames yet \u2014 the capture pipeline just started or reset. Try again in a couple of seconds.";
                        case Z.RC.BRIDGE_SHUTDOWN:
                            return "Clips bridge shut down before the save completed (process exited or v3 was disabled). Try again once clips is back up.";
                        case Z.RC.RECORDING_NOT_READY:
                            return "Clips recorder is not recording yet (still cold-starting, or it idle-shut-down). Try again in a couple of seconds.";
                    }
                })()),
                { ...tt(F.KS.ClipsDebugSaveNoOp), title: "Clip hotkey ignored", body: n, maxBodyLines: 8 }),
            );
        }
    },
    CLIPS_SAVE_CLIP_TIMEOUT: function (t) {
        if ("manual" === t.clipMethod && ti()) {
            var e;
            eN(
                ((e = t.elapsedMs),
                {
                    ...tt(F.KS.ClipsDebugSaveTimeout),
                    title: "Clip save stalled",
                    body: `No success or failure after ${Math.round(e / 1e3)}s. The native saveClip callback likely never fired \u{2014} check the media engine / voice engine logs.`,
                    maxBodyLines: 4,
                }),
            );
        }
    },
    CLIPS_INIT: function (t) {
        var e;
        if (!ti()) return;
        let i =
            0 ===
            (e = (function () {
                let t = [],
                    e = d.Ay.getSettings(),
                    i = (0, X.$i)("getEnabledClipsFeatures"),
                    { enableDistributedClips: n } = W.A.getConfig({ location: "getEnabledClipsFeatures" }),
                    l = q.Ay.getKeybindForAction(J.hCu.SAVE_CLIP);
                if ((null != l && t.push(`Manual (${Q.dI(l.shortcut, !0)})`), i)) {
                    let e = ["laughter"];
                    e.length > 0 && t.push(`Auto (${e.join(", ")})`);
                }
                return (n && e.clipSignals.enableDistributedSignals && t.push("Distributed"), t);
            })()).length
                ? null
                : {
                      ...tt(F.KS.ClipsDebugFeaturesEnabled),
                      title: "Clips engine ready",
                      body: `Clips features active: ${e.join("\n\u2022 ")}`,
                      maxBodyLines: 8,
                  };
        null != i &&
            (eN(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * R.A.Millis.SECOND }), eg());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (V.A.isNotificationDisabled(F.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, G.Y9)(F.KS.ClipsReminderNotification, {
                    notif_type: F.KS.ClipsReminderNotification,
                }),
                i = q.Ay.getKeybindForAction(J.hCu.SAVE_CLIP),
                n = (0, tn.T)();
            if (null == i || !n) return null;
            let l = Q.dI(i.shortcut, !0);
            return {
                title: Y.intl.format(Y.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, B.jsx)(tl.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, B.jsx)($.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eN(e);
    },
});
