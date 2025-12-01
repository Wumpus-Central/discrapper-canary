n.d(t, {
    Ay: () => et,
    yk: () => en,
}),
    n(388685),
    n(539854);
var l,
    i = n(149765),
    r = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(493683),
    u = n(475179),
    c = n(749210),
    d = n(292556),
    f = n(287734),
    g = n(579806),
    h = n(802098),
    p = n(933557),
    E = n(456269),
    N = n(15274),
    O = n(336197),
    y = n(355298),
    C = n(786761),
    _ = n(601992),
    T = n(864060),
    m = n(687272),
    I = n(106371),
    S = n(703656),
    b = n(359110),
    v = n(922482),
    x = n(427679),
    P = n(488131),
    Z = n(695346),
    A = n(601964),
    j = n(592125),
    R = n(430824),
    D = n(375954),
    w = n(292959),
    k = n(496675),
    U = n(306680),
    M = n(699516),
    L = n(944486),
    G = n(885110),
    V = n(246946),
    F = n(594174),
    B = n(979651),
    W = n(626135),
    H = n(5192),
    K = n(358085),
    Q = n(51144),
    Y = n(654769),
    z = n(981631),
    X = n(765305),
    q = n(987650),
    J = n(388032);
function $(e, t, n) {
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
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                $(e, t, n[t]);
            });
    }
    return e;
}
let et = "message1",
    en = 0.4,
    el = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports("notifications")) ? 20 : 1,
    ei = "discord_dismissed_notification_shown",
    er = document.hasFocus(),
    ea = null,
    eo = new Set(),
    es = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    eu = new (class {
        track(e, t, n) {
            let l = this._channels[e];
            for (
                null == l && ((l = []), (this._channels[e] = l)),
                    l.push({
                        notification: t,
                        trackingProps: n,
                    });
                l.length > el;
            ) {
                var i;
                let e = l.shift();
                (null == e || null == (i = e.notification) ? void 0 : i.close) != null &&
                    (e.notification.close(),
                    W.default.track(z.rMx.NOTIFICATION_ACTION, ee({ action: "REMOVE" }, e.trackingProps)));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), W.default.track(z.rMx.NOTIFICATION_ACTION, ee({ action: "ACK" }, n));
                }));
        }
        constructor() {
            $(this, "_channels", {});
        }
    })();
function ec() {
    return !!(w.Z.getDesktopType() === z.qrD.NEVER || G.Z.getStatus() === z.Skl.DND || Z.QZ.getSetting());
}
function ed(e) {
    return null != B.Z.getVoiceStateForChannel(e);
}
class ef extends (l = r.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, j.Z, R.Z, y.Z, D.Z, w.Z, k.Z, M.Z, L.Z, G.Z, x.Z, V.Z, F.default, B.Z);
    }
}
$(ef, "displayName", "NotificationStore"),
    new ef(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      if (t === z.$Ab.ENABLED && !K.isPlatformEmbedded) {
                          let e = !(0, m.QU)("NotificationStore.handleSetHavePermission");
                          Y.Z.showNotification(
                              n(910653),
                              J.intl.string(J.t.VSgOVg),
                              J.intl.string(J.t["1UJvqc"]),
                              { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                              {
                                  omitViewTracking: e,
                                  sound: et,
                                  volume: en,
                                  tag: "hello",
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                      }
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: l, trackingProps: i, options: r } = e;
                      return !ec() && (Y.Z.showNotification(t, n, l, i, r), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((er = e.focused)) {
                          let e = L.Z.getChannelId();
                          null != e && eu.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, l, i;
                      let { channelId: r, message: a, optimistic: s } = e;
                      if (s) return !1;
                      let c = j.Z.getChannel(r),
                          f = F.default.getUser(null == (t = a.author) ? void 0 : t.id),
                          g = F.default.getCurrentUser();
                      if (null == c || null == f || null == g) return !1;
                      let p = (0, T.eF)(a, r, !er),
                          E = w.Z.getNotifyMessagesInSelectedChannel() && (0, T.N_)(a, r);
                      if (
                          (!p && !E) ||
                          (a.type === z.uaV.CHANGELOG &&
                              (null == a.changelog_id || h.Z.latestChangelogId() !== a.changelog_id))
                      )
                          return !1;
                      let N = !w.Z.isSoundDisabled(et);
                      if ((E && (N && Y.Z.playNotificationSound("message3", 0.4), !er)) || !p) return !1;
                      let O = n(808506).default,
                          y = n(624864).Z;
                      if (
                          null != O.getFocusedPID() &&
                          !y.isNotificationDisabled(q.n0.TextChat) &&
                          !V.Z.disableNotifications
                      )
                          return !1;
                      let { icon: I, title: S, body: v, emoji: x } = (0, T.Xi)(c, a, f),
                          P = !(0, m._x)("NotificationStore.handleMessage", null == g ? void 0 : g.id);
                      if (
                          (o.Z.dispatch({
                              type: "RPC_NOTIFICATION_CREATE",
                              channelId: c.id,
                              message: a,
                              icon: I,
                              title: S,
                              body: v,
                          }),
                          (0, _.R)(a, c.guild_id),
                          w.Z.getDesktopType() === z.qrD.NEVER)
                      )
                          return N && Y.Z.playNotificationSound(et, en), !1;
                      let Z = null != (i = D.Z.getMessage(r, a.id)) ? i : (0, C.e5)(a);
                      Y.Z.showNotification(
                          I,
                          S,
                          v,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: null == (l = a.author) ? void 0 : l.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: c.id,
                              channel_type: c.type,
                              guild_id: c.guild_id,
                              badge: (0, U.Ex)(Z, g),
                          },
                          {
                              omitViewTracking: P,
                              tag: a.id,
                              sound: N ? et : void 0,
                              volume: en,
                              onClick() {
                                  (0, b.Kh)(c.id),
                                      (c.type === z.d4z.GUILD_VOICE || c.type === z.d4z.GUILD_STAGE_VOICE) &&
                                          u.Z.updateChatOpen(c.id, !0),
                                      d.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: Z,
                              fallbackDeepLink: (0, Y.W)(z.Z5c.CHANNEL(c.guild_id, c.id, a.id)),
                              emoji: x,
                          },
                      ).then((e) => {
                          null != e && eu.track(c.id, e.notification, e.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && eu.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return eu.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (ec() || n.type !== z.IIU.PLAYING) return !1;
                      {
                          let e = F.default.getUser(t);
                          if (null == e) return !1;
                          let l = Q.ZP.getName(e),
                              i = n.name,
                              r = e.getAvatarURL(void 0, 128),
                              a = J.intl.string(J.t.XoTWsI),
                              o = J.intl.formatToPlainString(J.t.o4Aipn, {
                                  username: l,
                                  gameName: i,
                              });
                          return (
                              Y.Z.showNotification(
                                  r,
                                  a,
                                  o,
                                  {
                                      notif_type: "ACTIVITY_START",
                                      activity_type: z.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: i,
                                  },
                                  {
                                      sound: "message2",
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          s.Z.openPrivateChannel({ recipientIds: t });
                                      },
                                      isUserAvatar: !0,
                                  },
                              ),
                              !1
                          );
                      }
                  },
                  VOICE_STATE_UPDATES: function (e) {
                      let { voiceStates: t } = e;
                      if (ec()) return;
                      let n = F.default.getCurrentUser();
                      if (null == n) return;
                      let l = t.find((e) => e.userId === n.id);
                      if (null == l) return;
                      let { channelId: i, guildId: r, suppress: a, requestToSpeakTimestamp: o } = l;
                      if (null == i || null == r || !(!a && null != o)) return;
                      let s = R.Z.getGuild(r),
                          u = j.Z.getChannel(i),
                          c = x.Z.getStageInstanceByChannel(i);
                      null != s &&
                          null != u &&
                          null != c &&
                          Y.Z.showNotification(
                              (0, A.EB)(s, 128),
                              u.name,
                              J.intl.formatToPlainString(J.t.sqnsSP, {
                                  channelName: (0, p.F6)(u, F.default, M.Z),
                                  channelTopic: null == c ? void 0 : c.topic,
                              }),
                              { notif_type: "Stage Speak Invite" },
                              { isUserAvatar: !1 },
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (ec() || !t.send_start_notification || ed(t.channel_id)) return !1;
                      let n = F.default.getCurrentUser(),
                          l = R.Z.getGuild(t.guild_id),
                          r = j.Z.getChannel(t.channel_id),
                          a = F.default.getUser(t.host_id);
                      if (
                          null == n ||
                          null == r ||
                          null == l ||
                          null == a ||
                          !(0, T.LL)(n, a, r) ||
                          !k.Z.can(i.$e(z.Plq.CONNECT, z.Plq.VIEW_CHANNEL), r) ||
                          eo.has(t.id)
                      )
                          return !1;
                      eo.add(t.id),
                          Y.Z.showNotification(
                              (0, A.EB)(l, 128),
                              J.intl.formatToPlainString(J.t.bZ4Okd, { guildName: l.name }),
                              J.intl.formatToPlainString(J.t.qTelnO, {
                                  username: H.ZP.getName(l.id, r.id, a),
                                  topic: t.topic,
                              }),
                              {
                                  notif_type: "STAGE_INSTANCE_CREATE",
                                  guild_id: l.id,
                                  channel_id: r.id,
                              },
                              {
                                  onClick() {
                                      (0, v.Cq)(r);
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      eo.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (ec() || null == t.notification_type) return !1;
                      t.notification_type === X.sy.EVENT_START &&
                          (t.entity_type === X.WX.STAGE_INSTANCE || t.entity_type === X.WX.VOICE
                              ? (function (e) {
                                    if (ec()) return;
                                    let t = e.channel_id;
                                    if (null == t || ed(t)) return;
                                    let n = F.default.getCurrentUser(),
                                        l = R.Z.getGuild(e.guild_id),
                                        r = j.Z.getChannel(e.channel_id),
                                        a = F.default.getUser(e.host_id);
                                    if (
                                        null != n &&
                                        null != r &&
                                        null != l &&
                                        null != a &&
                                        k.Z.can(i.$e(z.Plq.CONNECT, z.Plq.VIEW_CHANNEL), r)
                                    )
                                        Y.Z.showNotification(
                                            (0, A.EB)(l, 128),
                                            J.intl.formatToPlainString(J.t.bOu6Wn, { guildName: l.name }),
                                            J.intl.formatToPlainString(J.t.GV9L8u, {
                                                topic: e.name,
                                                username: H.ZP.getName(l.id, r.id, a),
                                            }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: l.id,
                                                channel_id: r.id,
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === X.WX.STAGE_INSTANCE && (0, v.Cq)(r),
                                                        e.entity_type === X.WX.VOICE &&
                                                            f.default.selectVoiceChannel(r.id);
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(t)
                              : t.entity_type === X.WX.EXTERNAL &&
                                (function (e) {
                                    if (ec()) return;
                                    let t = F.default.getCurrentUser(),
                                        n = R.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        Y.Z.showNotification(
                                            (0, A.EB)(n, 128),
                                            J.intl.formatToPlainString(J.t.bOu6Wn, { guildName: n.name }),
                                            J.intl.formatToPlainString(J.t.mYyaRB, { topic: e.name }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: n.id,
                                            },
                                            {
                                                onClick() {
                                                    c.Z.transitionToGuildSync(e.guild_id), (0, N.bO)({ eventId: e.id });
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: l } = e;
                      if (ec()) return !1;
                      let i = j.Z.getChannel(n.parent_id);
                      if (null == i || !z.TPd.GUILD_THREADS_ONLY.has(i.type) || !l || !(0, T.FI)(n, i, !er)) return !1;
                      let { author: r, user: a } = (0, E.MC)(n);
                      if (null == a) return !1;
                      let o = R.Z.getGuild(i.guild_id);
                      if (null == o) return !1;
                      let s = J.intl.formatToPlainString(J.t["2IGVl5"], {
                              channelName: i.name,
                              guildName: o.name,
                          }),
                          u = J.intl.formatToPlainString(J.t.jPhTvT, {
                              channelName: n.name,
                              userUsername:
                                  null != (t = null == r ? void 0 : r.nick) ? t : null == a ? void 0 : a.username,
                          }),
                          c = a.getAvatarURL(void 0, 128);
                      Y.Z.showNotification(
                          c,
                          s,
                          u,
                          {
                              notif_type: "THREAD_CREATE",
                              notif_user_id: a.id,
                          },
                          {
                              onClick() {
                                  (0, P.ok)(n);
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: l, body: i, route: r, trackingType: a, tag: o } = e;
                      if (
                          ec() ||
                          null == l ||
                          null == i ||
                          null == a ||
                          "reactions_push_notification" === a.toLowerCase()
                      )
                          return !1;
                      Y.Z.showNotification(
                          n,
                          l,
                          i,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != r && ((0, O.Z)(r), d.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: !1,
                          },
                      ).then((e) => {
                          null != e && null != t && eu.track(t, e.notification, e.trackingProps);
                      });
                  },
                  REACTION_NOTIFICATION_SENT: function (e) {
                      let { icon: t, title: n, body: l, route: i, trackingType: r, message: a } = e;
                      if (ec() || null == n || null == l || null == r) return !1;
                      let { enableInAppNotifications: o } = I.Z.getCurrentConfig(
                          { location: "desktopNotification" },
                          { autoTrackExposure: !0 },
                      );
                      if (!o) return !1;
                      let s = a.channel_id;
                      if (null == s || (L.Z.getCurrentlySelectedChannelId() === s && er)) return !1;
                      Y.Z.showNotification(
                          t,
                          n,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != i && ((0, O.Z)(i), d.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                          },
                      ).then((e) => {
                          null != e && null != s && eu.track(s, e.notification, e.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, K.isWindows)(),
                          t = (0, K.isLinux)();
                      if (!(!a.K.get(ei, !1) && K.isPlatformEmbedded && (e || t))) return !1;
                      let l = !1;
                      return (
                          null != ea && (l = es.includes(ea)),
                          !!l &&
                              (Y.Z.showNotification(
                                  n(95045),
                                  J.intl.string(J.t.VSgOVg),
                                  J.intl.string(J.t["+J/F66"]),
                                  { notif_type: "WINDOW_HIDDEN" },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, S.uL)(z.Z5c.SETTINGS(e ? "windows" : "linux"));
                                      },
                                      onShown: () => {
                                          a.K.set(ei, !0);
                                      },
                                      isUserAvatar: !1,
                                  },
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove(ei), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (ea = t), eo.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eo.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (ec()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let l = j.Z.getChannel(t.saveData.channelId);
                      if (null == l) return !1;
                      let { icon: i, body: r } = (0, T.Xi)(l, n, n.author);
                      Y.Z.showNotification(
                          i,
                          J.intl.string(J.t.IjZJB5),
                          r,
                          { notif_type: "MESSAGE_REMINDER_DUE" },
                          {
                              onClick() {
                                  (0, O.Z)(z.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), l.id, n.id));
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
              },
    );
