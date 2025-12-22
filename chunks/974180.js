n.d(t, {
    Ay: () => ee,
    yk: () => et,
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
    T = n(601992),
    _ = n(864060),
    m = n(687272),
    I = n(703656),
    S = n(359110),
    b = n(922482),
    v = n(427679),
    x = n(488131),
    P = n(695346),
    Z = n(601964),
    A = n(592125),
    j = n(430824),
    D = n(375954),
    R = n(292959),
    w = n(496675),
    k = n(306680),
    U = n(699516),
    M = n(944486),
    L = n(885110),
    G = n(246946),
    F = n(594174),
    V = n(979651),
    B = n(626135),
    W = n(5192),
    H = n(358085),
    K = n(51144),
    Q = n(654769),
    Y = n(981631),
    z = n(765305),
    X = n(987650),
    q = n(388032);
function J(e, t, n) {
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
function $(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
let ee = "message1",
    et = 0.4,
    en = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports("notifications")) ? 20 : 1,
    el = "discord_dismissed_notification_shown",
    ei = document.hasFocus(),
    er = null,
    ea = new Set(),
    eo = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    es = new (class {
        track(e, t, n) {
            let l = this._channels[e];
            for (
                null == l && ((l = []), (this._channels[e] = l)),
                    l.push({
                        notification: t,
                        trackingProps: n,
                    });
                l.length > en;
            ) {
                var i;
                let e = l.shift();
                (null == e || null == (i = e.notification) ? void 0 : i.close) != null &&
                    (e.notification.close(),
                    B.default.track(Y.rMx.NOTIFICATION_ACTION, $({ action: "REMOVE" }, e.trackingProps)));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), B.default.track(Y.rMx.NOTIFICATION_ACTION, $({ action: "ACK" }, n));
                }));
        }
        constructor() {
            J(this, "_channels", {});
        }
    })();
function eu() {
    return !!(R.Z.getDesktopType() === Y.qrD.NEVER || L.Z.getStatus() === Y.Skl.DND || P.QZ.getSetting());
}
function ec(e) {
    return null != V.Z.getVoiceStateForChannel(e);
}
class ed extends (l = r.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, A.Z, j.Z, y.Z, D.Z, R.Z, w.Z, U.Z, M.Z, L.Z, v.Z, G.Z, F.default, V.Z);
    }
}
J(ed, "displayName", "NotificationStore"),
    new ed(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      if (t === Y.$Ab.ENABLED && !H.isPlatformEmbedded) {
                          let e = !(0, m.QU)("NotificationStore.handleSetHavePermission");
                          Q.Z.showNotification(
                              n(910653),
                              q.intl.string(q.t.VSgOVg),
                              q.intl.string(q.t["1UJvqc"]),
                              { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                              {
                                  omitViewTracking: e,
                                  sound: ee,
                                  volume: et,
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
                      return !eu() && (Q.Z.showNotification(t, n, l, i, r), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((ei = e.focused)) {
                          let e = M.Z.getChannelId();
                          null != e && es.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, l, i;
                      let { channelId: r, message: a, optimistic: s } = e;
                      if (s) return !1;
                      let c = A.Z.getChannel(r),
                          f = F.default.getUser(null == (t = a.author) ? void 0 : t.id),
                          g = F.default.getCurrentUser();
                      if (null == c || null == f || null == g) return !1;
                      let p = (0, _.eF)(a, r, !ei),
                          E = R.Z.getNotifyMessagesInSelectedChannel() && (0, _.N_)(a, r);
                      if (
                          (!p && !E) ||
                          (a.type === Y.uaV.CHANGELOG &&
                              (null == a.changelog_id || h.Z.latestChangelogId() !== a.changelog_id))
                      )
                          return !1;
                      let N = !R.Z.isSoundDisabled(ee);
                      if ((E && (N && Q.Z.playNotificationSound("message3", 0.4), !ei)) || !p) return !1;
                      let O = n(808506).default,
                          y = n(624864).Z;
                      if (
                          null != O.getFocusedPID() &&
                          !y.isNotificationDisabled(X.n0.TextChat) &&
                          !G.Z.disableNotifications
                      )
                          return !1;
                      let { icon: I, title: b, body: v, emoji: x } = (0, _.Xi)(c, a, f),
                          P = !(0, m._x)("NotificationStore.handleMessage", null == g ? void 0 : g.id);
                      if (
                          (o.Z.dispatch({
                              type: "RPC_NOTIFICATION_CREATE",
                              channelId: c.id,
                              message: a,
                              icon: I,
                              title: b,
                              body: v,
                          }),
                          (0, T.R)(a, c.guild_id),
                          R.Z.getDesktopType() === Y.qrD.NEVER)
                      )
                          return N && Q.Z.playNotificationSound(ee, et), !1;
                      let Z = null != (i = D.Z.getMessage(r, a.id)) ? i : (0, C.e5)(a);
                      Q.Z.showNotification(
                          I,
                          b,
                          v,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: null == (l = a.author) ? void 0 : l.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: c.id,
                              channel_type: c.type,
                              guild_id: c.guild_id,
                              badge: (0, k.Ex)(Z, g),
                          },
                          {
                              omitViewTracking: P,
                              tag: a.id,
                              sound: N ? ee : void 0,
                              volume: et,
                              onClick() {
                                  (0, S.Kh)(c.id),
                                      (c.type === Y.d4z.GUILD_VOICE || c.type === Y.d4z.GUILD_STAGE_VOICE) &&
                                          u.Z.updateChatOpen(c.id, !0),
                                      d.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: Z,
                              fallbackDeepLink: (0, Q.W)(Y.Z5c.CHANNEL(c.guild_id, c.id, a.id)),
                              emoji: x,
                          },
                      ).then((e) => {
                          null != e && es.track(c.id, e.notification, e.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && es.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return es.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (eu() || n.type !== Y.IIU.PLAYING) return !1;
                      {
                          let e = F.default.getUser(t);
                          if (null == e) return !1;
                          let l = K.ZP.getName(e),
                              i = n.name,
                              r = e.getAvatarURL(void 0, 128),
                              a = q.intl.string(q.t.XoTWsI),
                              o = q.intl.formatToPlainString(q.t.o4Aipn, {
                                  username: l,
                                  gameName: i,
                              });
                          return (
                              Q.Z.showNotification(
                                  r,
                                  a,
                                  o,
                                  {
                                      notif_type: "ACTIVITY_START",
                                      activity_type: Y.IIU.PLAYING,
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
                      if (eu()) return;
                      let n = F.default.getCurrentUser();
                      if (null == n) return;
                      let l = t.find((e) => e.userId === n.id);
                      if (null == l) return;
                      let { channelId: i, guildId: r, suppress: a, requestToSpeakTimestamp: o } = l;
                      if (null == i || null == r || !(!a && null != o)) return;
                      let s = j.Z.getGuild(r),
                          u = A.Z.getChannel(i),
                          c = v.Z.getStageInstanceByChannel(i);
                      null != s &&
                          null != u &&
                          null != c &&
                          Q.Z.showNotification(
                              (0, Z.EB)(s, 128),
                              u.name,
                              q.intl.formatToPlainString(q.t.sqnsSP, {
                                  channelName: (0, p.F6)(u, F.default, U.Z),
                                  channelTopic: null == c ? void 0 : c.topic,
                              }),
                              { notif_type: "Stage Speak Invite" },
                              { isUserAvatar: !1 },
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (eu() || !t.send_start_notification || ec(t.channel_id)) return !1;
                      let n = F.default.getCurrentUser(),
                          l = j.Z.getGuild(t.guild_id),
                          r = A.Z.getChannel(t.channel_id),
                          a = F.default.getUser(t.host_id);
                      if (
                          null == n ||
                          null == r ||
                          null == l ||
                          null == a ||
                          !(0, _.LL)(n, a, r) ||
                          !w.Z.can(i.$e(Y.Plq.CONNECT, Y.Plq.VIEW_CHANNEL), r) ||
                          ea.has(t.id)
                      )
                          return !1;
                      ea.add(t.id),
                          Q.Z.showNotification(
                              (0, Z.EB)(l, 128),
                              q.intl.formatToPlainString(q.t.bZ4Okd, { guildName: l.name }),
                              q.intl.formatToPlainString(q.t.qTelnO, {
                                  username: W.ZP.getName(l.id, r.id, a),
                                  topic: t.topic,
                              }),
                              {
                                  notif_type: "STAGE_INSTANCE_CREATE",
                                  guild_id: l.id,
                                  channel_id: r.id,
                              },
                              {
                                  onClick() {
                                      (0, b.Cq)(r);
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      ea.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (eu() || null == t.notification_type) return !1;
                      t.notification_type === z.sy.EVENT_START &&
                          (t.entity_type === z.WX.STAGE_INSTANCE || t.entity_type === z.WX.VOICE
                              ? (function (e) {
                                    if (eu()) return;
                                    let t = e.channel_id;
                                    if (null == t || ec(t)) return;
                                    let n = F.default.getCurrentUser(),
                                        l = j.Z.getGuild(e.guild_id),
                                        r = A.Z.getChannel(e.channel_id),
                                        a = F.default.getUser(e.host_id);
                                    if (
                                        null != n &&
                                        null != r &&
                                        null != l &&
                                        null != a &&
                                        w.Z.can(i.$e(Y.Plq.CONNECT, Y.Plq.VIEW_CHANNEL), r)
                                    )
                                        Q.Z.showNotification(
                                            (0, Z.EB)(l, 128),
                                            q.intl.formatToPlainString(q.t.bOu6Wn, { guildName: l.name }),
                                            q.intl.formatToPlainString(q.t.GV9L8u, {
                                                topic: e.name,
                                                username: W.ZP.getName(l.id, r.id, a),
                                            }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: l.id,
                                                channel_id: r.id,
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === z.WX.STAGE_INSTANCE && (0, b.Cq)(r),
                                                        e.entity_type === z.WX.VOICE &&
                                                            f.default.selectVoiceChannel(r.id);
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(t)
                              : t.entity_type === z.WX.EXTERNAL &&
                                (function (e) {
                                    if (eu()) return;
                                    let t = F.default.getCurrentUser(),
                                        n = j.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        Q.Z.showNotification(
                                            (0, Z.EB)(n, 128),
                                            q.intl.formatToPlainString(q.t.bOu6Wn, { guildName: n.name }),
                                            q.intl.formatToPlainString(q.t.mYyaRB, { topic: e.name }),
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
                      if (eu()) return !1;
                      let i = A.Z.getChannel(n.parent_id);
                      if (null == i || !Y.TPd.GUILD_THREADS_ONLY.has(i.type) || !l || !(0, _.FI)(n, i, !ei)) return !1;
                      let { author: r, user: a } = (0, E.MC)(n);
                      if (null == a) return !1;
                      let o = j.Z.getGuild(i.guild_id);
                      if (null == o) return !1;
                      let s = q.intl.formatToPlainString(q.t["2IGVl5"], {
                              channelName: i.name,
                              guildName: o.name,
                          }),
                          u = q.intl.formatToPlainString(q.t.jPhTvT, {
                              channelName: n.name,
                              userUsername:
                                  null != (t = null == r ? void 0 : r.nick) ? t : null == a ? void 0 : a.username,
                          }),
                          c = a.getAvatarURL(void 0, 128);
                      Q.Z.showNotification(
                          c,
                          s,
                          u,
                          {
                              notif_type: "THREAD_CREATE",
                              notif_user_id: a.id,
                          },
                          {
                              onClick() {
                                  (0, x.ok)(n);
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: l, body: i, route: r, trackingType: a, tag: o } = e;
                      if (
                          eu() ||
                          null == l ||
                          null == i ||
                          null == a ||
                          "reactions_push_notification" === a.toLowerCase()
                      )
                          return !1;
                      Q.Z.showNotification(
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
                          null != e && null != t && es.track(t, e.notification, e.trackingProps);
                      });
                  },
                  REACTION_NOTIFICATION_SENT: function (e) {
                      let { icon: t, title: n, body: l, route: i, trackingType: r, message: a } = e;
                      if (eu() || null == n || null == l || null == r) return !1;
                      let o = a.channel_id;
                      if (null == o || (M.Z.getCurrentlySelectedChannelId() === o && ei)) return !1;
                      Q.Z.showNotification(
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
                          null != e && null != o && es.track(o, e.notification, e.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, H.isWindows)(),
                          t = (0, H.isLinux)();
                      if (!(!a.K.get(el, !1) && H.isPlatformEmbedded && (e || t))) return !1;
                      let l = !1;
                      return (
                          null != er && (l = eo.includes(er)),
                          !!l &&
                              (Q.Z.showNotification(
                                  n(95045),
                                  q.intl.string(q.t.VSgOVg),
                                  q.intl.string(q.t["+J/F66"]),
                                  { notif_type: "WINDOW_HIDDEN" },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, I.uL)(Y.Z5c.SETTINGS(e ? "windows" : "linux"));
                                      },
                                      onShown: () => {
                                          a.K.set(el, !0);
                                      },
                                      isUserAvatar: !1,
                                  },
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove(el), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (er = t), ea.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ea.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (eu()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let l = A.Z.getChannel(t.saveData.channelId);
                      if (null == l) return !1;
                      let { icon: i, body: r } = (0, _.Xi)(l, n, n.author);
                      Q.Z.showNotification(
                          i,
                          q.intl.string(q.t.IjZJB5),
                          r,
                          { notif_type: "MESSAGE_REMINDER_DUE" },
                          {
                              onClick() {
                                  (0, O.Z)(Y.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), l.id, n.id));
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
              },
    );
