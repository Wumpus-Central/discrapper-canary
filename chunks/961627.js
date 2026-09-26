(i.r(e), i.d(e, { default: () => ev }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(132500),
    r = i(17928),
    s = i(228366),
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
    k = i(9302),
    M = i(93465),
    U = i(589051),
    V = i(296027),
    P = i(592598),
    j = i(489277),
    w = i(897720),
    K = i(243612),
    G = i(780907),
    F = i(581730),
    Y = i(672396),
    H = i(375708),
    J = i(486020),
    B = i(652215),
    z = i(477900),
    $ = i(582128),
    X = i(176781),
    W = i(974293),
    q = i(458977),
    Q = i(532624),
    Z = i(350535),
    tt = i(696016);
function te(t) {
    let { trackView: e, trackClick: i } = (0, F.Y9)(t, { notif_type: t });
    return {
        icon: (0, z.jsx)(X.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => e(),
        onDismissClick: () => i("dismiss"),
    };
}
function ti(t, e) {
    return `${t} ${e ? "\u2713" : "\u2717"}`;
}
function tn() {
    return d.Ay.getSettings().debugTooltipsEnabled;
}
var tl = i(572164),
    ta = i(22802);
function tr(t) {
    let { trackView: e, trackClick: i } = (0, F.Y9)(Y.KS.ClipsNotification, { notif_type: Y.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, z.jsx)(X.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var ts = i(429913),
    to = i(263577),
    tu = i(744893),
    tc = i(188321),
    td = i(825502),
    tf = i(818023),
    tA = i(141531);
function tp(t) {
    let { game: e } = t,
        i = (0, ts.h)(e.id);
    return null == i ? null : (0, z.jsx)(to.V, { src: i.getIconURL(tf.iu.LARGE), size: 40 });
}
var ty = i(387755),
    tm = i(730852),
    tE = i(571694),
    tg = i(47167),
    tI = i(621436),
    t_ = i(778712),
    tN = i(834730),
    tS = i(966327),
    tC = i(769015),
    th = i(562153),
    tT = i(41984),
    tv = i(222506),
    tO = i(145567),
    tb = i(34773),
    tL = i(308368),
    tx = i(334738),
    tD = i(481484),
    tR = i(258585),
    tk = i(560595),
    tM = i(929921),
    tU = i(753070),
    tV = i(905322),
    tP = i(941971),
    tj = i(521981),
    tw = i(976860),
    tK = i(400492),
    tG = i(625494),
    tF = i(723702),
    tY = i(19575),
    tH = i(366032),
    tJ = i(148494),
    tB = i(964486),
    tz = i(480870),
    t$ = i(355622),
    tX = i(408018),
    tW = i(959070),
    tq = i(451909),
    tQ = i(135621),
    tZ = i(381941),
    t0 = i(158602);
function t1(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tQ.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tz.A)({ channel: n }),
        [u, c] = $.useState(() => (0, tX.N3)()),
        { textValue: d, richValue: f } = u,
        [A, p] = $.useState(!1),
        y = $.useCallback(() => p(!0), []),
        m = $.useCallback(() => p(!1), []);
    (0, tB.Ay)(() => {
        (0, tx.ack)(
            n.id,
            {
                section: B.JJy.OVERLAY,
                object: B.ZSU.ACK_INLINE_REPLY,
                objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            i,
        );
    });
    let E = $.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        g = $.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, B.yFH.ACTIVE);
            },
            [e],
        ),
        I = $.useCallback(
            () => (
                d.length > a ||
                    (tJ.A.sendMessage(n.id, tq.Ay.parse(n, d), !1, { location: tZ.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, j.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, B.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, z.jsx)("div", {
        className: t0.k,
        children: (0, z.jsx)(tW.Ay, {
            innerClassName: t0.T,
            onChange: E,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: f,
            type: t$.oU.OVERLAY_INLINE_REPLY,
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
var t2 = i(119191),
    t8 = i(671210);
function t5(t) {
    t && (0, tK.Ak)(D.cH, D.pD, void 0, void 0, { trackNotificationFailure: !0 });
}
var t9 = i(554146),
    t7 = i(298990),
    t3 = i(826673),
    t4 = i(25578),
    t6 = i(308726),
    et = i(46282),
    ee = i(731854),
    ei = i(709946),
    en = i(302933);
function el(t) {
    let { game: e } = t,
        i = (0, ts.h)(e.id);
    return null == i ? null : (0, z.jsx)(to.V, { src: i.getIconURL(tf.iu.LARGE), size: 40 });
}
let ea = 5 * R.A.Millis.SECOND,
    er = 8 * R.A.Millis.SECOND,
    es = 30 * R.A.Millis.SECOND,
    eo = 30 * R.A.Millis.SECOND,
    eu = Object.freeze({
        timestamp: 0,
        priority: w.In.NORMAL,
        duration: ea,
        expirationExternallyManaged: !1,
        type: w.zb.GENERIC,
    }),
    ec = [],
    ed = !1,
    ef = [],
    eA = {};
function ep(t, e, i) {
    (null == eA[t] && (eA[t] = {}), (eA[t][e] = i));
}
let ey = 30 * R.A.Millis.MINUTE,
    em = 2 * R.A.Millis.MINUTE;
function eE() {
    if (ed && null == ec.find((t) => t.status === B.yFH.FOCUSED))
        for (let t of ((ed = !1), (ec = [...ec, ...ef]), (ef = []), ec.length > 40 && (ec.length = 40), ec))
            t.timer.start();
}
function eg() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    ec.filter((t) => t.type === w.zb.TEXT && t.status === B.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - es) && e_(e.id, B.yFH.DISMISSED);
        });
}
function eI() {
    let t = new Set();
    ec.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? e_(e.id, B.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function e_(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B.yFH.DISMISSED;
    if (null == t) return !1;
    let i = ec.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = ec[i];
    if ((n.timer.stop(), (ec = [...ec]), e === B.yFH.FOCUSED)) {
        let [t] = ec.splice(i, 1);
        ((t = { ...t, status: e }), ec.unshift(t), (ed = !0));
        return;
    }
    (e === B.yFH.DISMISSED ? ec.splice(i, 1) : (ec[i] = { ...n, status: e }), eE());
}
function eN(t) {
    let e = ec.find((e) => e.type === w.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eS(t, e) {
    let i = { ...eu, timestamp: Date.now(), ...e },
        n = (0, a.A)(),
        l = !1,
        r = {
            id: n,
            status: B.yFH.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            a = l ? B.yFH.TIMED_OUT : B.yFH.DISMISSED;
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : ea));
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
        s = ed ? ef : [...ec],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        ed || t.timer.stop();
    }
    return (ed || ((ec = s), r.timer.start()), n);
}
function eC() {
    if (P.A.isNotificationDisabled(Y.KS.NowPlayingNotification)) return !1;
    let t = N.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in eA) t.push(...Object.keys(eA[e]).map((t) => t));
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
                    return null == i || i.type !== B.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < em
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, U.NI)("nowPlayingNotification"),
                    c = P.A.isNotificationDisabledBySetting(M.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = T.Ay.getVoiceChannelId(),
                    A = L.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != A && d === A) return !1;
                let p = (0, K.qv)();
                if (null == p) return !1;
                let y = p.id !== a;
                return (
                    (!y || (!!s && !c)) &&
                    (!!(x.A.hasApplicationStatistic(a) || f.Ay.isGameSeen(a)) || !y) &&
                    (null == (n = eA[a]?.[t]?.lastSentTimestamp) || Date.now() - n > ey
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (P.A.isNotificationDisabled(Y.KS.NowPlayingNotification)) return null;
                                  let n = b.default.getUser(t);
                                  if (null == n) return null;
                                  let l = T.Ay.getCurrentlySelectedChannelId(),
                                      a = g.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = f.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, th.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let A = (0, z.jsxs)("div", {
                                          className: tb.Ql,
                                          children: [
                                              (0, z.jsx)("div", {
                                                  className: tb.bf,
                                                  children: (0, z.jsx)(tS.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: t_._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, z.jsx)("div", {
                                                  className: tb.rf,
                                                  children: (0, z.jsx)(tN.E, {
                                                      variant: "text-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tb.G3,
                                                      children: H.intl.format(H.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: c,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, z.jsx)(tC.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: tC.M.XSMALL,
                                                                        className: tb.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: p, trackClick: y } = (0, F.Y9)(Y.KS.NowPlayingNotification, {
                                          notif_type: Y.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: c,
                                      }),
                                      { hasChat: m } = (0, U.NI)("nowPlayingNotification");
                                  return {
                                      body: A,
                                      className: tb.dn,
                                      wrapperClassName: tb.P6,
                                      animationWrapperClassName: tb.VG,
                                      clickZoneClassName: tb.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !m,
                                      onNotificationShow: () => {
                                          p();
                                      },
                                      onNotificationClick: (t, e) => {
                                          m &&
                                              (async () => {
                                                  try {
                                                      await (0, tO.D$)({
                                                          target: {
                                                              kind: tO.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tT.B9.NOTIFICATION_CLICK,
                                                          widgetType: B.uss.NOTIFICATIONS,
                                                      });
                                                      let t = j.A.getTargetPID();
                                                      (tv.A.isInputLocked(t)
                                                          ? (y("unlock"), o.A.setInputLocked(!1, t))
                                                          : y("jump"),
                                                          o.A.updateNotificationStatus(e, B.yFH.DISMISSED));
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          y("dismiss");
                                      },
                                  };
                              })(t, a, r)) &&
                              (ep(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eS(l, { type: w.zb.GENERIC, priority: w.In.NORMAL })),
                          !0)
                        : (ep(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
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
                let i = (0, K.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in eA) {
                let i = eA[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eh(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = eN(e);
    if (!Object.keys(i).includes(E.default.getId())) return e_(n);
    if (null != n) return !1;
    let l = g.A.getChannel(e);
    if (null == l || !l.isRingable() || v.A.getStatus() === B.clD.DND || y.NO.getSetting()) return !1;
    let a = ec.find((t) => t.type === w.zb.TEXT && t.channelId === e && t.messageType === B.lAJ.CALL);
    (null != a && e_(a.id),
        eS(
            (function (t) {
                let e = (0, tg.m1)(t, b.default, h.A),
                    i = H.intl.string(H.t.ssrVzG),
                    n = (0, tE.Y)(t),
                    l = (0, tI.A)(t),
                    { trackView: a, trackClick: r } = (0, F.Y9)(Y.KS.IncomingCall, {
                        notif_type: Y.KS.IncomingCall,
                        notif_user_id: l,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: n,
                    title: e,
                    body: i,
                    confirmText: H.intl.string(H.t["0D/6Rz"]),
                    cancelText: H.intl.string(H.t.BVN4pL),
                    onNotificationShow: () => {
                        a();
                    },
                    onConfirmClick: (e, i) => {
                        if ((r("join"), B.kvI.CALLABLE.has(t.type))) ty.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== B.rbe.GUILD_VOICE) return;
                            tm.default.selectVoiceChannel(t.id);
                        }
                        (o.A.updateNotificationStatus(i),
                            o.A.track(B.HAw.VOICE_CHANNEL_SELECTED, {
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
            { priority: w.In.HIGH, expirationExternallyManaged: !0, type: w.zb.INCOMING_CALL, channelId: l.id },
        ));
}
class eT extends r.Ay.Store {
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
            V.default,
            P.A,
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
            this.syncWith([N.A], eC));
    }
    getNotifications() {
        return ec;
    }
    hasNotificationForChannel(t) {
        return ec.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...ec].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return ec.filter((i) => i.channelId === t && i.type === e);
    }
}
let ev = new eT(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        e_(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        eg(0);
        let n = j.A.getFocusedPID() ?? k.UNSET_PID;
        if (V.default.hasChangedRenderMode(n)) return;
        let l = (0, K.qv)(),
            a = (function (t, e) {
                if (P.A.isNotificationDisabled(Y.KS.WelcomeNudge)) return null;
                t4.Ay.supports(ee.O5.VIDEO) ||
                    (e = e.filter((t) => t.type !== Y.Jr.GO_LIVE_VOICE && t.type !== Y.Jr.GO_LIVE_NON_VOICE));
                let { trackView: n, trackClick: l } = (0, F.Y9)(Y.KS.WelcomeNudge, {
                        notif_type: Y.KS.WelcomeNudge,
                        secondary_notif_types: e.map((t) => Y.Jr[t.type]),
                    }),
                    a = {};
                for (let i of e)
                    switch (i.type) {
                        case Y.Jr.WELCOME: {
                            let e = (0, K.tg)(t?.altId ?? t?.id);
                            null != e &&
                                ((a.cancelText = H.intl.string(H.t["6F9ivu"])),
                                (a.onCancelClick = (t, i) => {
                                    (l("unlock"),
                                        o.A.updateNotificationStatus(i),
                                        o.A.setInputLocked(!1, j.A.getTargetPID()),
                                        (0, t7.qf)(e, !1, B.BRT.POPOUT));
                                }));
                            break;
                        }
                        case Y.Jr.GO_LIVE_VOICE:
                        case Y.Jr.GO_LIVE_NON_VOICE:
                            ((a.confirmText = H.intl.string(H.t.U76Ft2)),
                                (a.onConfirmClick = (t, e) => {
                                    function i() {
                                        (l("go-live-modal"), o.A.setInputLocked(!1, j.A.getTargetPID()));
                                    }
                                    function n() {
                                        l("one-click-go-live");
                                    }
                                    (o.A.updateNotificationStatus(e),
                                        (0, et.H)({
                                            pid: j.A.getTargetPID(),
                                            analyticsLocation: B.ThZ.OVERLAY_NUDGE,
                                            allowOneClickGoLive: !0,
                                            onBeforeShowModal: i,
                                            onOneClickGoLive: n,
                                            appContext: B.BRT.POPOUT,
                                        }));
                                }));
                            break;
                        case Y.Jr.CONTENT_INVENTORY:
                            ((a.onNotificationShow = () => {
                                o.A.track(B.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                    user_ids: i.entries.map((t) => t.author_id),
                                    entry_ids: i.entries.map((t) => t.id),
                                });
                            }),
                                (a.renderFooter = () =>
                                    (0, z.jsx)(t6.ru, {
                                        gamingId: t?.altId ?? t?.id,
                                        maxUserShowCount: 5,
                                        variant: "default",
                                        className: en.kL,
                                    })));
                    }
                let r = (0, t3.k8)(t9.M.OVERLAY_OOP_WELCOME_NUX),
                    s = H.intl.string(H.t.KWDIrh);
                return {
                    icon:
                        null != t
                            ? (0, z.jsx)(el, { game: t })
                            : (0, z.jsx)("img", { src: i(513653), className: ei.Kk, alt: "" }),
                    title: s,
                    hint: function () {
                        return (0, t2.sI)((0, F.Jn)(), H.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                    },
                    ...a,
                    onNotificationShow: (t) => {
                        (n(), r || (0, t3.Dr)(t9.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                    },
                    onNotificationClick: (t, e) => {
                        (l("unlock"),
                            o.A.setInputLocked(!1, j.A.getTargetPID()),
                            r || (0, t3.Dr)(t9.M.OVERLAY_OOP_WELCOME_NUX),
                            a.onNotificationClick?.(t, e));
                    },
                    onDismissClick: (t, e) => {
                        (l("dismiss"), r || (0, t3.Dr)(t9.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                    },
                };
            })(l, e);
        null != a && eS(a, { priority: w.In.URGENT, type: w.zb.NUDGE, duration: er });
        let r = (function (t) {
            if (null == t || !(0, td.T)("gameModeNotification") || tc.A.enabled || tc.A.isPromptSuppressedForGame(t.id))
                return null;
            function e() {
                null != t && tu.fT(t.id);
            }
            return {
                icon: (0, z.jsx)(tp, { game: t }),
                title: H.intl.string(tA.default.HJcyIC),
                body: H.intl.string(tA.default.PEFk1b),
                confirmText: H.intl.string(tA.default.jw65bq),
                cancelText: H.intl.string(tA.default["/sw6q+"]),
                onNotificationShow: () => {},
                onConfirmClick: (t, e) => {
                    (tu.kv(!0), o.A.updateNotificationStatus(e));
                },
                onCancelClick: (t, i) => {
                    (e(), o.A.updateNotificationStatus(i));
                },
                onDismissClick: () => {
                    e();
                },
            };
        })(l);
        null != r && eS(r, { priority: w.In.NORMAL, type: w.zb.NUDGE, duration: er });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of ec) t.status === B.yFH.FOCUSED && e_(t.id, B.yFH.ACTIVE);
            return !0;
        }
        for (let t of (eg(), ec))
            t.type === w.zb.NUDGE
                ? e_(t.id, B.yFH.DISMISSED)
                : t.status !== B.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (ec.length > 0)
            return e_(
                ec.filter((t) => t.type === w.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                B.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = g.A.getChannel(e),
            a = b.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([B.xL.JOIN, B.xL.JOIN_REQUEST, B.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, p.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, c;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                let d = (0, K.qv)();
                if (null == d || null == d.id) return !1;
                let f = u.A.getApplication(d.id),
                    A = [d.id];
                (null != d.altId && A.push(d.altId),
                    f?.linkedGames != null && A.push(...f.linkedGames.map((t) => t.id)));
                let y = e.activity.party_id;
                switch (e.activity.type) {
                    case B.xL.JOIN:
                        ((n = (t) => S.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case B.xL.JOIN_REQUEST:
                        ((n = (t) => v.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case B.xL.STREAM_REQUEST:
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
                    case B.xL.JOIN:
                        c = (function (t, e, i, n, l) {
                            if (P.A.isNotificationDisabled(Y.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: u, body: c } = (0, p.TB)(t, e, i),
                                { trackView: d, trackClick: f } = (0, F.Y9)(Y.KS.ActivityInvite, {
                                    notif_type: Y.KS.ActivityInvite,
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
                                confirmText: H.intl.string(H.t.VJlc0S),
                                onConfirmClick: (n, a) => {
                                    (G.Ay.join({
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
                    case B.xL.JOIN_REQUEST:
                        c = (function (t, e, i, n) {
                            if (P.A.isNotificationDisabled(Y.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = H.intl.format(H.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, F.Y9)(Y.KS.ActivityInvite, {
                                    notif_type: Y.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: B.xL.JOIN_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: H.intl.string(H.t["fgP/wX"]),
                                cancelText: H.intl.string(H.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (e, i) => {
                                    (tL.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: B.xL.JOIN,
                                        activity: n,
                                        location: (0, tD.y)() ? B.ThZ.LOCKED_OVERLAY : B.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tx.ack)(
                                        t.id,
                                        {
                                            section: B.JJy.OVERLAY,
                                            object: B.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                    case B.xL.STREAM_REQUEST:
                        c = (function (t, e, i, n) {
                            if (
                                P.A.isNotificationDisabled(Y.KS.RequestToStream) ||
                                null != m.A.getCurrentUserActiveStream()
                            )
                                return null;
                            let l = e.username,
                                a = H.intl.format(tV.default.jTbTAF, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, F.Y9)(Y.KS.RequestToStream, {
                                    notif_type: Y.KS.RequestToStream,
                                    notif_user_id: e.id,
                                    activity_type: B.xL.STREAM_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: H.intl.string(tV.default.UGbmBp),
                                cancelText: H.intl.string(H.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (t, e) => {
                                    let i = tM.A.getState().preset;
                                    if (i === tU.jQ.PRESET_DOCUMENTS) {
                                        let { allowAutoQuality: t } = (0, tR.eO)({
                                            location: "requestToStreamNotification",
                                        });
                                        i = t ? tU.jQ.PRESET_AUTO : tU.jQ.PRESET_VIDEO;
                                    }
                                    ((0, tk.A)(j.A.getTargetPID(), { preset: i }),
                                        u("request-to-stream"),
                                        o.A.updateNotificationStatus(e));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tx.ack)(
                                        t.id,
                                        {
                                            section: B.JJy.OVERLAY,
                                            object: B.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                                            objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                    (eS(c, {
                        priority: w.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: eo,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    eI(),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (P.A.isNotificationDisabled(Y.KS.TextChat) || O.A.disableNotifications || !(0, p.lx)(i, e)) return !1;
        let r = !_.A.isSoundDisabled(D.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, U.NI)("textChatNotification");
                if (P.A.isNotificationDisabled(Y.KS.TextChat)) return (t5(!0), null);
                let { icon: a, title: r, body: s } = (0, p.TB)(t, e, i),
                    { trackView: u, trackClick: c } = (0, F.Y9)(Y.KS.TextChat, {
                        notif_type: Y.KS.TextChat,
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
                    unreadAccessory: (t) => (l ? (0, z.jsx)(tP.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tH.$)())
                            ? null
                            : (0, t2.sI)((0, F.Jn)(), l ? t8.default.VMcw8s : H.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tH.$)()
                            ? null
                            : i && !a
                              ? (0, z.jsx)(t1, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (t5(n), u());
                    },
                    onNotificationClick: (i, n) => {
                        let a = j.A.getTargetPID();
                        if (
                            ((0, tx.ack)(
                                t.id,
                                {
                                    section: B.JJy.OVERLAY,
                                    object: B.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                                e.id,
                            ),
                            l)
                        ) {
                            ((0, tO.D$)({
                                target: {
                                    kind: tO.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tT.B9.NOTIFICATION_CLICK,
                                widgetType: B.uss.TEXT_CHAT_V3,
                            }),
                                tv.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tG._.dispatchToLastSubscribed(B.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, B.yFH.DISMISSED));
                            return;
                        }
                        tv.A.isInputLocked(a) && !(0, tH.$)()
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tw.pX)(B.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tF.isPlatformEmbedded && tY.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, I.A.getMessage(e, i.id) ?? (0, A.rh)(i), a, r);
        if (null == s) return !1;
        (eS(s, { type: w.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), eg());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = ec.length),
            (i = (ec = ec.filter((t) => t.type !== w.zb.TEXT || t.channelId !== n)).length !== e) && eE(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eh,
    CALL_UPDATE: eh,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        e_(eN(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, K.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === B.xL.JOIN &&
                (e = (function (t, e) {
                    if (P.A.isNotificationDisabled(Y.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = H.intl.format(H.t["Yk+uYG"], { username: "" }),
                        l = (0, J.ku)(t),
                        a = H.intl.string(H.t.WRj1Wn),
                        { trackView: r, trackClick: s } = (0, F.Y9)(Y.KS.ActivityUserJoin, {
                            notif_type: Y.KS.ActivityUserJoin,
                            notif_user_id: t.id,
                            activity_type: B.xL.JOIN,
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
            null != e && void eS(e, { priority: w.In.URGENT, type: w.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eS(tr(H.intl.string(H.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tn() &&
                    eS(
                        ((e = t.signal),
                        {
                            ...te(Y.KS.ClipsDebugAutoSignal),
                            title: `Auto-clip: ${(function (t) {
                                switch (t.type) {
                                    case tt.Gy.MANUAL:
                                        return "Manual";
                                    case tt.Gy.SHOUTING:
                                        return `Shouting detected (${t.confidence.toFixed(2)})`;
                                    case tt.Gy.LAUGHTER:
                                        return `Laughter detected (${t.confidence.toFixed(2)})`;
                                    case tt.Gy.GAME_EVENT:
                                        return `Game event: ${t.title ?? t.eventType}`;
                                    case tt.Gy.DISTRIBUTED:
                                        return "Distributed clip from another user";
                                    case tt.Gy.SPEAKING:
                                        return "Speaking detected";
                                    case tt.Gy.SOUNDBOARD:
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
        if (tn()) {
            var e;
            let i;
            eS(
                ((i = (e = t.clip).type === tt.nQ.SCREENSHOT ? "screenshot" : "clip"),
                {
                    ...te(Y.KS.ClipsDebugSaveSuccess),
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
            (eS(tr(H.intl.string(H.t["1ZbZuh"]))),
                tn() &&
                    null != t.errorMessage &&
                    eS(
                        ((e = t.errorMessage),
                        (i = t.errorAt),
                        (n = (() => {
                            if (null != e) return null != i ? `[${i}] ${e}` : e;
                        })()),
                        { ...te(Y.KS.ClipsDebugSaveError), title: "Clip save failed", body: n, maxBodyLines: 4 }),
                    ));
        }
    },
    CLIPS_SAVE_CLIP_NO_OP: function (t) {
        if ("manual" === t.clipMethod && tn()) {
            var e, i;
            let n;
            eS(
                ((e = t.reason),
                (i = t.sourceChecks),
                (n = (() => {
                    switch (e) {
                        case tt.RC.MAX_CONCURRENT_SAVES:
                            return `Too many clips saving at once (${tt.VP} in flight). Wait for one to finish.`;
                        case tt.RC.NO_ELIGIBLE_SOURCE:
                            let t, n;
                            return null != i
                                ? ((t = [ti("clips enabled", i.clipsEnabled), ti("streaming", i.hasActiveStream)].join(
                                      ", ",
                                  )),
                                  (n = [
                                      ti("visible game window", i.hasVisibleGameWindow),
                                      ti("clips source", i.hasClipsSource),
                                  ].join(",\n")),
                                  `No capture source. Need any branch satisfied:
\u{2022} GoLive \u{2014} ${t}
\u{2022} Decoupled \u{2014} ${n}`)
                                : "No capture source available. Need an active stream, a decoupled game capture, or a voice channel.";
                        case tt.RC.MODULE_NOT_LOADED:
                            return "discord_clips is still downloading. Try again once the module finishes installing.";
                        case tt.RC.BUFFER_WARMING_UP:
                            return "No encoded video frames yet \u2014 the capture pipeline just started or reset. Try again in a couple of seconds.";
                        case tt.RC.BRIDGE_SHUTDOWN:
                            return "Clips bridge shut down before the save completed (process exited or v3 was disabled). Try again once clips is back up.";
                        case tt.RC.RECORDING_NOT_READY:
                            return "Clips recorder is not recording yet (still cold-starting, or it idle-shut-down). Try again in a couple of seconds.";
                    }
                })()),
                { ...te(Y.KS.ClipsDebugSaveNoOp), title: "Clip hotkey ignored", body: n, maxBodyLines: 8 }),
            );
        }
    },
    CLIPS_SAVE_CLIP_TIMEOUT: function (t) {
        if ("manual" === t.clipMethod && tn()) {
            var e;
            eS(
                ((e = t.elapsedMs),
                {
                    ...te(Y.KS.ClipsDebugSaveTimeout),
                    title: "Clip save stalled",
                    body: `No success or failure after ${Math.round(e / 1e3)}s. The native saveClip callback likely never fired \u{2014} check the media engine / voice engine logs.`,
                    maxBodyLines: 4,
                }),
            );
        }
    },
    CLIPS_INIT: function (t) {
        var e;
        if (!tn()) return;
        let i =
            0 ===
            (e = (function () {
                let t = [],
                    e = d.Ay.getSettings(),
                    i = (0, W.$i)("getEnabledClipsFeatures"),
                    { enableDistributedClips: n } = q.A.getConfig({ location: "getEnabledClipsFeatures" }),
                    l = Q.Ay.getKeybindForAction(B.hCu.SAVE_CLIP);
                if ((null != l && t.push(`Manual (${Z.dI(l.shortcut, !0)})`), i)) {
                    let e = ["laughter"];
                    e.length > 0 && t.push(`Auto (${e.join(", ")})`);
                }
                return (n && e.clipSignals.enableDistributedSignals && t.push("Distributed"), t);
            })()).length
                ? null
                : {
                      ...te(Y.KS.ClipsDebugFeaturesEnabled),
                      title: "Clips engine ready",
                      body: `Clips features active: ${e.join("\n\u2022 ")}`,
                      maxBodyLines: 8,
                  };
        null != i &&
            (eS(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * R.A.Millis.SECOND }), eI());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (P.A.isNotificationDisabled(Y.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, F.Y9)(Y.KS.ClipsReminderNotification, {
                    notif_type: Y.KS.ClipsReminderNotification,
                }),
                i = Q.Ay.getKeybindForAction(B.hCu.SAVE_CLIP),
                n = (0, tl.T)();
            if (null == i || !n) return null;
            let l = Z.dI(i.shortcut, !0);
            return {
                title: H.intl.format(H.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, z.jsx)(ta.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, z.jsx)(X.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eS(e);
    },
});
