n.d(e, {
    Ay: () => tg,
    yk: () => t_,
}),
    n(388685),
    n(539854);
var i,
    l = n(392711),
    a = n(149765),
    r = n(442837),
    o = n(524437),
    u = n(433517),
    s = n(570140),
    d = n(493683),
    c = n(475179),
    f = n(749210),
    g = n(292556),
    _ = n(287734),
    E = n(232567),
    p = n(579806),
    T = n(761781),
    N = n(728345),
    S = n(812206),
    I = n(802098),
    h = n(933557),
    C = n(456269),
    Z = n(890022),
    A = n(688907),
    v = n(15274),
    m = n(336197),
    y = n(355298),
    P = n(786761),
    O = n(601992),
    D = n(864060),
    U = n(687272),
    R = n(691294),
    b = n(11352),
    k = n(671105),
    L = n(106371),
    w = n(703656),
    M = n(359110),
    G = n(922482),
    V = n(427679),
    F = n(488131),
    H = n(695346),
    W = n(601964),
    x = n(592125),
    Y = n(430824),
    q = n(375954),
    z = n(292959),
    B = n(496675),
    X = n(306680),
    j = n(699516),
    J = n(944486),
    K = n(885110),
    Q = n(246946),
    $ = n(594174),
    tt = n(979651),
    te = n(626135),
    tn = n(70956),
    ti = n(5192),
    tl = n(358085),
    ta = n(74538),
    tr = n(51144),
    to = n(654769),
    tu = n(981631),
    ts = n(765305),
    td = n(388032);
function tc(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function tf(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                tc(t, e, n[e]);
            });
    }
    return t;
}
let tg = "message1",
    t_ = 0.4,
    tE = (null === p.Z || void 0 === p.Z ? void 0 : p.Z.features.supports("notifications")) ? 20 : 1,
    tp = "discord_dismissed_notification_shown",
    tT = document.hasFocus(),
    tN = null,
    tS = new Set(),
    tI = {},
    th = {},
    tC = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    tZ = new (class {
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)),
                    i.push({
                        notification: e,
                        trackingProps: n,
                    });
                i.length > tE;
            ) {
                var l;
                let t = i.shift();
                (null == t || null == (l = t.notification) ? void 0 : l.close) != null &&
                    (t.notification.close(),
                    te.default.track(tu.rMx.NOTIFICATION_ACTION, tf({ action: "REMOVE" }, t.trackingProps)));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    e.close(), te.default.track(tu.rMx.NOTIFICATION_ACTION, tf({ action: "ACK" }, n));
                }));
        }
        constructor() {
            tc(this, "_channels", {});
        }
    })();
function tA(t, e) {
    let { gameActivityNotificationType: n, excludeSteamGames: i } = e,
        l = t;
    i &&
        (l = t.filter((t) => {
            var e;
            return null == (e = t.metadata) || !e.distributor || t.metadata.distributor !== tu.GQo.STEAM;
        }));
    let a = l.filter((t) => t.type === tu.IIU.PLAYING && null != t.application_id).map((t) => t.application_id);
    return n === o.Tv.ONLY_GAMES_PLAYED && (a = a.filter((t) => T.Z.currentUserApplicationIds.has(t))), a;
}
async function tv(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, A.MH)(),
        i = (0, A.j4)(),
        a = (0, Z.dm)(t);
    if (e) {
        let t = new Set();
        a.forEach((e) => {
            let { activities: l, user: a } = e;
            if (0 === l.length || j.Z.isIgnored(a.id)) return;
            let r = tA(l, {
                gameActivityNotificationType: n,
                excludeSteamGames: i,
            });
            0 !== r.length && (t = new Set([...t, ...r]));
        }),
            await N.ZP.fetchApplications([...t], !1);
    }
    a.forEach((t) => {
        let { activities: a, user: r, guildId: o } = t;
        !(function (t, e, n, i) {
            let a = tm(e);
            if (0 === t.length && 0 === a.length) return;
            let r = (0, l.difference)(t, a).filter((t) => {
                var n;
                return null != t && (null == (n = tI[e]) ? void 0 : n[t]) == null;
            });
            (0, l.difference)(a, t)
                .filter((t) => {
                    var n;
                    return null != t && (null == (n = tI[e]) ? void 0 : n[t]) === i;
                })
                .forEach((t) => {
                    delete tI[e][t];
                }),
                r.forEach((t) => {
                    var l, a;
                    if ((null == tI[e] ? (tI[e] = { [t]: i }) : null == tI[e][t] && (tI[e][t] = i), !n || tP())) return;
                    let r = null != (a = null == (l = th[e]) ? void 0 : l[t]) ? a : 0;
                    if (Date.now() - r < tn.Z.Millis.HOUR) return;
                    let o = S.Z.getApplication(t);
                    null != o && (null == th[e] && (th[e] = {}), (th[e][t] = Date.now()), ty(o, e));
                }),
                0 === tm(e).length && delete tI[e];
        })(
            tA(a, {
                gameActivityNotificationType: n,
                excludeSteamGames: i,
            }),
            r.id,
            e,
            null != o ? o : 0,
        );
    });
}
function tm(t) {
    var e;
    return Object.keys(null != (e = tI[t]) ? e : {});
}
async function ty(t, e) {
    var n;
    let i = await (0, E.PR)(e),
        l = await (0, R.m)(i.getAvatarURL(null, 64), null != (n = t.getIconURL(64)) ? n : null);
    to.Z.showNotification(
        l,
        td.intl.formatToPlainString(td.t.kO0pfX, {
            name: ti.ZP.getName(null, null, i),
            activity: t.name,
        }),
        "",
        {
            notif_type: "game_notif",
            application_id: t.id,
            affine_user_id: e,
        },
        {
            onClick: (t) => {
                d.Z.openPrivateChannel({ recipientIds: e });
            },
            isUserAvatar: !1,
            actions: [
                {
                    content: td.intl.string(td.t["E+yYpq"]),
                    args: "open_message_action",
                },
            ],
        },
    );
}
function tP() {
    return !!(z.Z.getDesktopType() === tu.qrD.NEVER || K.Z.getStatus() === tu.Skl.DND || H.QZ.getSetting());
}
function tO(t) {
    return null != tt.Z.getVoiceStateForChannel(t);
}
class tD extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor($.default, x.Z, z.Z, Y.Z, V.Z, j.Z, B.Z, tt.Z, y.Z);
    }
}
tc(tD, "displayName", "NotificationStore"),
    new tD(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      if (e === tu.$Ab.ENABLED && !tl.isPlatformEmbedded) {
                          let t = !(0, U.QU)("NotificationStore.handleSetHavePermission");
                          to.Z.showNotification(
                              n(910653),
                              td.intl.string(td.t.VSgOVl),
                              td.intl.string(td.t["1UJvqa"]),
                              { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                              {
                                  omitViewTracking: t,
                                  sound: tg,
                                  volume: t_,
                                  tag: "hello",
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                      }
                  },
                  NOTIFICATION_CREATE: function (t) {
                      let { icon: e, title: n, body: i, trackingProps: l, options: a } = t;
                      return !tP() && (to.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tT = t.focused)) {
                          let t = J.Z.getChannelId();
                          null != t && tZ.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, a, r;
                      let { channelId: o, message: u, optimistic: d } = t;
                      if (d) return !1;
                      let f = x.Z.getChannel(o),
                          _ = $.default.getUser(null == (e = u.author) ? void 0 : e.id),
                          E = $.default.getCurrentUser();
                      if (null == f || null == _ || null == E) return !1;
                      let p = (0, D.eF)(u, o, !tT),
                          T = z.Z.getNotifyMessagesInSelectedChannel() && (0, D.N_)(u, o);
                      if (
                          (!p && !T) ||
                          (u.type === tu.uaV.CHANGELOG &&
                              (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id))
                      )
                          return !1;
                      let N = !z.Z.isSoundDisabled(tg),
                          S = ta.ZP.canUseCustomNotificationSounds(E),
                          h = b.Y.getCurrentConfig({ location: "NotificationStore" }).enabled,
                          C =
                              S && h && N
                                  ? null != (a = (0, k.bb)(null != (l = f.guild_id) ? l : tu.aIL, o))
                                      ? a
                                      : (0, k.iD)(f.guild_id)
                                  : void 0;
                      if ((T && (N && to.Z.playNotificationSound("message3", 0.4, C), !tT)) || !p) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: v } = n(486016);
                      if (
                          null != Z.getFocusedPID() &&
                          !A.isNotificationDisabled(v.TEXT_CHAT) &&
                          !Q.Z.disableNotifications
                      )
                          return !1;
                      let { icon: m, title: y, body: R } = (0, D.Xi)(f, u, _),
                          L = !(0, U._x)("NotificationStore.handleMessage", null == E ? void 0 : E.id);
                      if (
                          (s.Z.dispatch({
                              type: "RPC_NOTIFICATION_CREATE",
                              channelId: f.id,
                              message: u,
                              icon: m,
                              title: y,
                              body: R,
                          }),
                          (0, O.R)(u, f.guild_id),
                          z.Z.getDesktopType() === tu.qrD.NEVER)
                      )
                          return N && to.Z.playNotificationSound(tg, t_, C), !1;
                      let w = null != (r = q.Z.getMessage(o, u.id)) ? r : (0, P.e5)(u);
                      to.Z.showNotification(
                          m,
                          y,
                          R,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: null == (i = u.author) ? void 0 : i.id,
                              message_id: u.id,
                              message_type: u.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id,
                              badge: (0, X.Ex)(w, E),
                          },
                          {
                              omitViewTracking: L,
                              tag: u.id,
                              sound: N ? tg : void 0,
                              soundpack: C,
                              volume: t_,
                              onClick() {
                                  (0, M.Kh)(f.id),
                                      (f.type === tu.d4z.GUILD_VOICE || f.type === tu.d4z.GUILD_STAGE_VOICE) &&
                                          c.Z.updateChatOpen(f.id, !0),
                                      g.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: w,
                              fallbackDeepLink: (0, to.W)(tu.Z5c.CHANNEL(f.guild_id, f.id, u.id)),
                          },
                      ).then((t) => {
                          null != t && tZ.track(f.id, t.notification, t.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return null != e && tZ.clearChannel(e), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return tZ.clearChannel(e), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (tP() || n.type !== tu.IIU.PLAYING) return !1;
                      {
                          let t = $.default.getUser(e);
                          if (null == t) return !1;
                          let i = tr.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              r = td.intl.string(td.t.XoTWsL),
                              o = td.intl.formatToPlainString(td.t.o4Aipq, {
                                  username: i,
                                  gameName: l,
                              });
                          return (
                              to.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: "ACTIVITY_START",
                                      activity_type: tu.IIU.PLAYING,
                                      notif_user_id: e,
                                      activity_name: l,
                                  },
                                  {
                                      sound: "message2",
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          d.Z.openPrivateChannel({ recipientIds: e });
                                      },
                                      isUserAvatar: !0,
                                  },
                              ),
                              !1
                          );
                      }
                  },
                  VOICE_STATE_UPDATES: function (t) {
                      let { voiceStates: e } = t;
                      if (tP()) return;
                      let n = $.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = Y.Z.getGuild(a),
                          s = x.Z.getChannel(l),
                          d = V.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          to.Z.showNotification(
                              (0, W.EB)(u, 128),
                              s.name,
                              td.intl.formatToPlainString(td.t.sqnsSE, {
                                  channelName: (0, h.F6)(s, $.default, j.Z),
                                  channelTopic: null == d ? void 0 : d.topic,
                              }),
                              { notif_type: "Stage Speak Invite" },
                              { isUserAvatar: !1 },
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (tP() || !e.send_start_notification || tO(e.channel_id)) return !1;
                      let n = $.default.getCurrentUser(),
                          i = Y.Z.getGuild(e.guild_id),
                          l = x.Z.getChannel(e.channel_id),
                          r = $.default.getUser(e.host_id);
                      if (
                          null == n ||
                          null == l ||
                          null == i ||
                          null == r ||
                          !(0, D.LL)(n, r, l) ||
                          !B.Z.can(a.$e(tu.Plq.CONNECT, tu.Plq.VIEW_CHANNEL), l) ||
                          tS.has(e.id)
                      )
                          return !1;
                      tS.add(e.id),
                          to.Z.showNotification(
                              (0, W.EB)(i, 128),
                              td.intl.formatToPlainString(td.t.bZ4OkZ, { guildName: i.name }),
                              td.intl.formatToPlainString(td.t.qTelnJ, {
                                  username: ti.ZP.getName(i.id, l.id, r),
                                  topic: e.topic,
                              }),
                              {
                                  notif_type: "STAGE_INSTANCE_CREATE",
                                  guild_id: i.id,
                                  channel_id: l.id,
                              },
                              {
                                  onClick() {
                                      (0, G.Cq)(l);
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: e } = t;
                      tS.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (tP() || null == e.notification_type) return !1;
                      e.notification_type === ts.sy.EVENT_START &&
                          (e.entity_type === ts.WX.STAGE_INSTANCE || e.entity_type === ts.WX.VOICE
                              ? (function (t) {
                                    if (tP()) return;
                                    let e = t.channel_id;
                                    if (null == e || tO(e)) return;
                                    let n = $.default.getCurrentUser(),
                                        i = Y.Z.getGuild(t.guild_id),
                                        l = x.Z.getChannel(t.channel_id),
                                        r = $.default.getUser(t.host_id);
                                    if (
                                        null != n &&
                                        null != l &&
                                        null != i &&
                                        null != r &&
                                        B.Z.can(a.$e(tu.Plq.CONNECT, tu.Plq.VIEW_CHANNEL), l)
                                    )
                                        to.Z.showNotification(
                                            (0, W.EB)(i, 128),
                                            td.intl.formatToPlainString(td.t.bOu6Wl, { guildName: i.name }),
                                            td.intl.formatToPlainString(td.t.GV9L8v, {
                                                topic: t.name,
                                                username: ti.ZP.getName(i.id, l.id, r),
                                            }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: i.id,
                                                channel_id: l.id,
                                            },
                                            {
                                                onClick() {
                                                    t.entity_type === ts.WX.STAGE_INSTANCE && (0, G.Cq)(l),
                                                        t.entity_type === ts.WX.VOICE &&
                                                            _.default.selectVoiceChannel(l.id);
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(e)
                              : e.entity_type === ts.WX.EXTERNAL &&
                                (function (t) {
                                    if (tP()) return;
                                    let e = $.default.getCurrentUser(),
                                        n = Y.Z.getGuild(t.guild_id);
                                    if (null != e && null != n)
                                        to.Z.showNotification(
                                            (0, W.EB)(n, 128),
                                            td.intl.formatToPlainString(td.t.bOu6Wl, { guildName: n.name }),
                                            td.intl.formatToPlainString(td.t.mYyaRE, { topic: t.name }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: n.id,
                                            },
                                            {
                                                onClick() {
                                                    f.Z.transitionToGuildSync(t.guild_id), (0, v.bO)({ eventId: t.id });
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(e));
                  },
                  THREAD_CREATE: function (t) {
                      var e;
                      let { channel: n, isNewlyCreated: i } = t;
                      if (tP()) return !1;
                      let l = x.Z.getChannel(n.parent_id);
                      if (null == l || !tu.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, D.FI)(n, l, !tT)) return !1;
                      let { author: a, user: r } = (0, C.MC)(n);
                      if (null == r) return !1;
                      let o = Y.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = td.intl.formatToPlainString(td.t["2IGVl5"], {
                              channelName: l.name,
                              guildName: o.name,
                          }),
                          s = td.intl.formatToPlainString(td.t.jPhTvb, {
                              channelName: n.name,
                              userUsername:
                                  null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username,
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      to.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: "THREAD_CREATE",
                              notif_user_id: r.id,
                          },
                          {
                              onClick() {
                                  (0, F.ok)(n);
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let e,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                      if (tP() || null == i || null == l || null == r || "reactions_push_notification" === r) return !1;
                      to.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != a && ((0, m.Z)(a), g.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: !1,
                          },
                      ).then((t) => {
                          null != t && null != e && tZ.track(e, t.notification, t.trackingProps);
                      });
                  },
                  REACTION_NOTIFICATION_SENT: function (t) {
                      let { icon: e, title: n, body: i, route: l, trackingType: a, message: r } = t;
                      if (tP() || null == n || null == i || null == a) return !1;
                      let { enableInAppNotifications: o } = L.Z.getCurrentConfig(
                          { location: "desktopNotification" },
                          { autoTrackExposure: !0 },
                      );
                      if (!o) return !1;
                      let u = r.channel_id;
                      if (null == u || (J.Z.getCurrentlySelectedChannelId() === u && tT)) return !1;
                      to.Z.showNotification(
                          e,
                          n,
                          i,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != l && ((0, m.Z)(l), g.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                          },
                      ).then((t) => {
                          null != t && null != u && tZ.track(u, t.notification, t.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, tl.isWindows)(),
                          e = (0, tl.isLinux)();
                      if (!(!u.K.get(tp, !1) && tl.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tN && (i = tC.includes(tN)),
                          !!i &&
                              (to.Z.showNotification(
                                  n(95045),
                                  td.intl.string(td.t.VSgOVl),
                                  td.intl.string(td.t["+J/F6+"]),
                                  { notif_type: "WINDOW_HIDDEN" },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, w.uL)(tu.Z5c.SETTINGS(t ? "windows" : "linux"));
                                      },
                                      onShown: () => {
                                          u.K.set(tp, !0);
                                      },
                                      isUserAvatar: !1,
                                  },
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return u.K.remove(tp), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n, presences: i } = t;
                      (tN = e),
                          tS.clear(),
                          n.forEach((t) => t.stage_instances.forEach((t) => tS.add(t.id))),
                          (0, Z.uw)("NotificationStore") &&
                              (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED &&
                              tv(i, !1);
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (tP()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = x.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, D.Xi)(i, n, n.author);
                      to.Z.showNotification(
                          l,
                          td.intl.string(td.t.IjZJBw),
                          a,
                          { notif_type: "MESSAGE_REMINDER_DUE" },
                          {
                              onClick() {
                                  (0, m.Z)(tu.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
                  PRESENCE_UPDATES: function (t) {
                      let { updates: e } = t;
                      (0, Z.uw)("handlePresenceUpdates") &&
                          (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED &&
                          tv(e);
                  },
              },
    );
