n.d(e, {
    Ay: () => ti,
    yk: () => tl,
}),
    n(388685),
    n(539854);
var i,
    l = n(149765),
    a = n(442837),
    r = n(433517),
    o = n(570140),
    u = n(493683),
    s = n(475179),
    d = n(749210),
    c = n(292556),
    f = n(287734),
    g = n(579806),
    E = n(802098),
    _ = n(933557),
    N = n(456269),
    T = n(15274),
    S = n(336197),
    p = n(355298),
    C = n(786761),
    I = n(601992),
    h = n(864060),
    Z = n(687272),
    A = n(11352),
    m = n(671105),
    v = n(106371),
    y = n(703656),
    P = n(359110),
    O = n(922482),
    D = n(427679),
    U = n(488131),
    b = n(695346),
    R = n(601964),
    k = n(592125),
    L = n(430824),
    M = n(375954),
    G = n(292959),
    w = n(496675),
    V = n(306680),
    F = n(699516),
    H = n(944486),
    W = n(885110),
    x = n(246946),
    z = n(594174),
    q = n(979651),
    B = n(626135),
    Y = n(5192),
    X = n(358085),
    j = n(74538),
    J = n(51144),
    K = n(654769),
    Q = n(981631),
    $ = n(765305),
    tt = n(388032);
function te(t, e, n) {
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
function tn(t) {
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
                te(t, e, n[e]);
            });
    }
    return t;
}
let ti = "message1",
    tl = 0.4,
    ta = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports("notifications")) ? 20 : 1,
    tr = "discord_dismissed_notification_shown",
    to = document.hasFocus(),
    tu = null,
    ts = new Set(),
    td = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    tc = new (class {
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)),
                    i.push({
                        notification: e,
                        trackingProps: n,
                    });
                i.length > ta;
            ) {
                var l;
                let t = i.shift();
                (null == t || null == (l = t.notification) ? void 0 : l.close) != null &&
                    (t.notification.close(),
                    B.default.track(Q.rMx.NOTIFICATION_ACTION, tn({ action: "REMOVE" }, t.trackingProps)));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    e.close(), B.default.track(Q.rMx.NOTIFICATION_ACTION, tn({ action: "ACK" }, n));
                }));
        }
        constructor() {
            te(this, "_channels", {});
        }
    })();
function tf() {
    return !!(G.Z.getDesktopType() === Q.qrD.NEVER || W.Z.getStatus() === Q.Skl.DND || b.QZ.getSetting());
}
function tg(t) {
    return null != q.Z.getVoiceStateForChannel(t);
}
class tE extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(z.default, k.Z, G.Z, L.Z, D.Z, F.Z, w.Z, q.Z, p.Z);
    }
}
te(tE, "displayName", "NotificationStore"),
    new tE(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      if (e === Q.$Ab.ENABLED && !X.isPlatformEmbedded) {
                          let t = !(0, Z.QU)("NotificationStore.handleSetHavePermission");
                          K.Z.showNotification(
                              n(910653),
                              tt.intl.string(tt.t.VSgOVl),
                              tt.intl.string(tt.t["1UJvqa"]),
                              { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                              {
                                  omitViewTracking: t,
                                  sound: ti,
                                  volume: tl,
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
                      return !tf() && (K.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((to = t.focused)) {
                          let t = H.Z.getChannelId();
                          null != t && tc.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, a, r;
                      let { channelId: u, message: d, optimistic: f } = t;
                      if (f) return !1;
                      let g = k.Z.getChannel(u),
                          _ = z.default.getUser(null == (e = d.author) ? void 0 : e.id),
                          N = z.default.getCurrentUser();
                      if (null == g || null == _ || null == N) return !1;
                      let T = (0, h.eF)(d, u, !to),
                          S = G.Z.getNotifyMessagesInSelectedChannel() && (0, h.N_)(d, u);
                      if (
                          (!T && !S) ||
                          (d.type === Q.uaV.CHANGELOG &&
                              (null == d.changelog_id || E.Z.latestChangelogId() !== d.changelog_id))
                      )
                          return !1;
                      let p = !G.Z.isSoundDisabled(ti),
                          v = j.ZP.canUseCustomNotificationSounds(N),
                          y = A.Y.getCurrentConfig({ location: "NotificationStore" }).enabled,
                          O =
                              v && y && p
                                  ? null != (a = (0, m.bb)(null != (l = g.guild_id) ? l : Q.aIL, u))
                                      ? a
                                      : (0, m.iD)(g.guild_id)
                                  : void 0;
                      if ((S && (p && K.Z.playNotificationSound("message3", 0.4, O), !to)) || !T) return !1;
                      let D = n(808506).default,
                          U = n(624864).Z,
                          { OverlayNotificationDisabledSetting: b } = n(486016);
                      if (
                          null != D.getFocusedPID() &&
                          !U.isNotificationDisabled(b.TEXT_CHAT) &&
                          !x.Z.disableNotifications
                      )
                          return !1;
                      let { icon: R, title: L, body: w } = (0, h.Xi)(g, d, _),
                          F = !(0, Z._x)("NotificationStore.handleMessage", null == N ? void 0 : N.id);
                      if (
                          (o.Z.dispatch({
                              type: "RPC_NOTIFICATION_CREATE",
                              channelId: g.id,
                              message: d,
                              icon: R,
                              title: L,
                              body: w,
                          }),
                          (0, I.R)(d, g.guild_id),
                          G.Z.getDesktopType() === Q.qrD.NEVER)
                      )
                          return p && K.Z.playNotificationSound(ti, tl, O), !1;
                      let H = null != (r = M.Z.getMessage(u, d.id)) ? r : (0, C.e5)(d);
                      K.Z.showNotification(
                          R,
                          L,
                          w,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: null == (i = d.author) ? void 0 : i.id,
                              message_id: d.id,
                              message_type: d.type,
                              channel_id: g.id,
                              channel_type: g.type,
                              guild_id: g.guild_id,
                              badge: (0, V.Ex)(H, N),
                          },
                          {
                              omitViewTracking: F,
                              tag: d.id,
                              sound: p ? ti : void 0,
                              soundpack: O,
                              volume: tl,
                              onClick() {
                                  (0, P.Kh)(g.id),
                                      (g.type === Q.d4z.GUILD_VOICE || g.type === Q.d4z.GUILD_STAGE_VOICE) &&
                                          s.Z.updateChatOpen(g.id, !0),
                                      c.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: H,
                              fallbackDeepLink: (0, K.W)(Q.Z5c.CHANNEL(g.guild_id, g.id, d.id)),
                          },
                      ).then((t) => {
                          null != t && tc.track(g.id, t.notification, t.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return null != e && tc.clearChannel(e), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return tc.clearChannel(e), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (tf() || n.type !== Q.IIU.PLAYING) return !1;
                      {
                          let t = z.default.getUser(e);
                          if (null == t) return !1;
                          let i = J.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              r = tt.intl.string(tt.t.XoTWsL),
                              o = tt.intl.formatToPlainString(tt.t.o4Aipq, {
                                  username: i,
                                  gameName: l,
                              });
                          return (
                              K.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: "ACTIVITY_START",
                                      activity_type: Q.IIU.PLAYING,
                                      notif_user_id: e,
                                      activity_name: l,
                                  },
                                  {
                                      sound: "message2",
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          u.Z.openPrivateChannel({ recipientIds: e });
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
                      if (tf()) return;
                      let n = z.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = L.Z.getGuild(a),
                          s = k.Z.getChannel(l),
                          d = D.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          K.Z.showNotification(
                              (0, R.EB)(u, 128),
                              s.name,
                              tt.intl.formatToPlainString(tt.t.sqnsSE, {
                                  channelName: (0, _.F6)(s, z.default, F.Z),
                                  channelTopic: null == d ? void 0 : d.topic,
                              }),
                              { notif_type: "Stage Speak Invite" },
                              { isUserAvatar: !1 },
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (tf() || !e.send_start_notification || tg(e.channel_id)) return !1;
                      let n = z.default.getCurrentUser(),
                          i = L.Z.getGuild(e.guild_id),
                          a = k.Z.getChannel(e.channel_id),
                          r = z.default.getUser(e.host_id);
                      if (
                          null == n ||
                          null == a ||
                          null == i ||
                          null == r ||
                          !(0, h.LL)(n, r, a) ||
                          !w.Z.can(l.$e(Q.Plq.CONNECT, Q.Plq.VIEW_CHANNEL), a) ||
                          ts.has(e.id)
                      )
                          return !1;
                      ts.add(e.id),
                          K.Z.showNotification(
                              (0, R.EB)(i, 128),
                              tt.intl.formatToPlainString(tt.t.bZ4OkZ, { guildName: i.name }),
                              tt.intl.formatToPlainString(tt.t.qTelnJ, {
                                  username: Y.ZP.getName(i.id, a.id, r),
                                  topic: e.topic,
                              }),
                              {
                                  notif_type: "STAGE_INSTANCE_CREATE",
                                  guild_id: i.id,
                                  channel_id: a.id,
                              },
                              {
                                  onClick() {
                                      (0, O.Cq)(a);
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: e } = t;
                      ts.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (tf() || null == e.notification_type) return !1;
                      e.notification_type === $.sy.EVENT_START &&
                          (e.entity_type === $.WX.STAGE_INSTANCE || e.entity_type === $.WX.VOICE
                              ? (function (t) {
                                    if (tf()) return;
                                    let e = t.channel_id;
                                    if (null == e || tg(e)) return;
                                    let n = z.default.getCurrentUser(),
                                        i = L.Z.getGuild(t.guild_id),
                                        a = k.Z.getChannel(t.channel_id),
                                        r = z.default.getUser(t.host_id);
                                    if (
                                        null != n &&
                                        null != a &&
                                        null != i &&
                                        null != r &&
                                        w.Z.can(l.$e(Q.Plq.CONNECT, Q.Plq.VIEW_CHANNEL), a)
                                    )
                                        K.Z.showNotification(
                                            (0, R.EB)(i, 128),
                                            tt.intl.formatToPlainString(tt.t.bOu6Wl, { guildName: i.name }),
                                            tt.intl.formatToPlainString(tt.t.GV9L8v, {
                                                topic: t.name,
                                                username: Y.ZP.getName(i.id, a.id, r),
                                            }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: i.id,
                                                channel_id: a.id,
                                            },
                                            {
                                                onClick() {
                                                    t.entity_type === $.WX.STAGE_INSTANCE && (0, O.Cq)(a),
                                                        t.entity_type === $.WX.VOICE &&
                                                            f.default.selectVoiceChannel(a.id);
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(e)
                              : e.entity_type === $.WX.EXTERNAL &&
                                (function (t) {
                                    if (tf()) return;
                                    let e = z.default.getCurrentUser(),
                                        n = L.Z.getGuild(t.guild_id);
                                    if (null != e && null != n)
                                        K.Z.showNotification(
                                            (0, R.EB)(n, 128),
                                            tt.intl.formatToPlainString(tt.t.bOu6Wl, { guildName: n.name }),
                                            tt.intl.formatToPlainString(tt.t.mYyaRE, { topic: t.name }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: n.id,
                                            },
                                            {
                                                onClick() {
                                                    d.Z.transitionToGuildSync(t.guild_id), (0, T.bO)({ eventId: t.id });
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(e));
                  },
                  THREAD_CREATE: function (t) {
                      var e;
                      let { channel: n, isNewlyCreated: i } = t;
                      if (tf()) return !1;
                      let l = k.Z.getChannel(n.parent_id);
                      if (null == l || !Q.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, h.FI)(n, l, !to)) return !1;
                      let { author: a, user: r } = (0, N.MC)(n);
                      if (null == r) return !1;
                      let o = L.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = tt.intl.formatToPlainString(tt.t["2IGVl5"], {
                              channelName: l.name,
                              guildName: o.name,
                          }),
                          s = tt.intl.formatToPlainString(tt.t.jPhTvb, {
                              channelName: n.name,
                              userUsername:
                                  null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username,
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      K.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: "THREAD_CREATE",
                              notif_user_id: r.id,
                          },
                          {
                              onClick() {
                                  (0, U.ok)(n);
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let e,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                      if (tf() || null == i || null == l || null == r || "reactions_push_notification" === r) return !1;
                      K.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != a && ((0, S.Z)(a), c.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: !1,
                          },
                      ).then((t) => {
                          null != t && null != e && tc.track(e, t.notification, t.trackingProps);
                      });
                  },
                  REACTION_NOTIFICATION_SENT: function (t) {
                      let { icon: e, title: n, body: i, route: l, trackingType: a, message: r } = t;
                      if (tf() || null == n || null == i || null == a) return !1;
                      let { enableInAppNotifications: o } = v.Z.getCurrentConfig(
                          { location: "desktopNotification" },
                          { autoTrackExposure: !0 },
                      );
                      if (!o) return !1;
                      let u = r.channel_id;
                      if (null == u || (H.Z.getCurrentlySelectedChannelId() === u && to)) return !1;
                      K.Z.showNotification(
                          e,
                          n,
                          i,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != l && ((0, S.Z)(l), c.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                          },
                      ).then((t) => {
                          null != t && null != u && tc.track(u, t.notification, t.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, X.isWindows)(),
                          e = (0, X.isLinux)();
                      if (!(!r.K.get(tr, !1) && X.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tu && (i = td.includes(tu)),
                          !!i &&
                              (K.Z.showNotification(
                                  n(95045),
                                  tt.intl.string(tt.t.VSgOVl),
                                  tt.intl.string(tt.t["+J/F6+"]),
                                  { notif_type: "WINDOW_HIDDEN" },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, y.uL)(Q.Z5c.SETTINGS(t ? "windows" : "linux"));
                                      },
                                      onShown: () => {
                                          r.K.set(tr, !0);
                                      },
                                      isUserAvatar: !1,
                                  },
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return r.K.remove(tr), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n } = t;
                      (tu = e), ts.clear(), n.forEach((t) => t.stage_instances.forEach((t) => ts.add(t.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (tf()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = k.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, h.Xi)(i, n, n.author);
                      K.Z.showNotification(
                          l,
                          tt.intl.string(tt.t.IjZJBw),
                          a,
                          { notif_type: "MESSAGE_REMINDER_DUE" },
                          {
                              onClick() {
                                  (0, S.Z)(Q.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
              },
    );
