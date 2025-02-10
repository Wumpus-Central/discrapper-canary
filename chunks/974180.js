n.d(e, {
    Ay: () => Q,
    yk: () => $
}),
    n(47120),
    n(653041);
var i,
    l = n(149765),
    a = n(442837),
    o = n(433517),
    r = n(570140),
    u = n(493683),
    d = n(475179),
    s = n(749210),
    c = n(292556),
    f = n(287734),
    g = n(579806),
    E = n(802098),
    _ = n(933557),
    N = n(456269),
    S = n(15274),
    T = n(754688),
    h = n(336197),
    I = n(355298),
    Z = n(601992),
    C = n(11352),
    v = n(671105),
    p = n(106371),
    m = n(703656),
    A = n(359110),
    y = n(922482),
    U = n(427679),
    P = n(488131),
    D = n(695346),
    R = n(592125),
    O = n(430824),
    G = n(292959),
    L = n(496675),
    M = n(699516),
    k = n(944486),
    w = n(885110),
    b = n(246946),
    V = n(594174),
    F = n(979651),
    H = n(5192),
    W = n(150097),
    q = n(912101),
    z = n(358085),
    x = n(74538),
    Y = n(51144),
    X = n(981631),
    B = n(765305),
    J = n(388032);
function K(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let Q = 'message1',
    $ = 0.4,
    j = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports('notifications')) ? 20 : 1,
    tt = 'discord_dismissed_notification_shown',
    te = document.hasFocus(),
    tn = null,
    ti = new Set(),
    tl = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    ta = new (class {
        track(t, e) {
            let n = this._channels[t];
            for (null == n && ((n = []), (this._channels[t] = n)), n.push(e); n.length > j; ) {
                let t = n.shift();
                null != t && null != t.close && t.close();
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e && (delete this._channels[t], e.forEach((t) => t.close()));
        }
        constructor() {
            K(this, '_channels', {});
        }
    })();
function to() {
    return !!(G.Z.getDesktopType() === X.qrD.NEVER || w.Z.getStatus() === X.Skl.DND || D.QZ.getSetting());
}
function tr(t) {
    return null != F.Z.getVoiceStateForChannel(t);
}
class tu extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(V.default, R.Z, G.Z, O.Z, U.Z, M.Z, L.Z, F.Z, I.Z);
    }
}
K(tu, 'displayName', 'NotificationStore'),
    new tu(
        r.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      e !== X.$Ab.ENABLED ||
                          z.isPlatformEmbedded ||
                          q.Z.showNotification(
                              n(185672),
                              J.intl.string(J.t.VSgOVl),
                              J.intl.string(J.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: Q,
                                  volume: $,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (t) {
                      let { icon: e, title: n, body: i, trackingProps: l, options: a } = t;
                      return !to() && (q.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((te = t.focused)) {
                          let t = k.Z.getChannelId();
                          null != t && ta.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, a;
                      let { channelId: o, message: u, optimistic: s } = t;
                      if (s) return !1;
                      let f = R.Z.getChannel(o),
                          g = V.default.getUser(null === (e = u.author) || void 0 === e ? void 0 : e.id),
                          _ = V.default.getCurrentUser();
                      if (null == f || null == g) return !1;
                      let N = (0, W.eF)(u, o, !te),
                          S = G.Z.getNotifyMessagesInSelectedChannel() && (0, W.N_)(u, o);
                      if ((!N && !S) || (u.type === X.uaV.CHANGELOG && (null == u.changelog_id || E.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let T = !G.Z.isSoundDisabled(Q),
                          h = x.ZP.canUseCustomNotificationSounds(_),
                          I = C.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          p = h && I && T ? (null !== (a = (0, v.bb)(null !== (l = f.guild_id) && void 0 !== l ? l : X.aIL, o)) && void 0 !== a ? a : (0, v.iD)(f.guild_id)) : void 0;
                      if ((S && (T && q.Z.playNotificationSound('message3', 0.4, p), !te)) || !N) return !1;
                      let m = n(808506).Z,
                          y = n(237997).Z;
                      if (null != m.getFocusedPID() && y.getTextChatNotificationMode() === X.Ypu.ENABLED && !b.Z.disableNotifications) return !1;
                      let { icon: U, title: P, body: D } = (0, W.Xi)(f, u, g);
                      if (
                          (r.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: u,
                              icon: U,
                              title: P,
                              body: D
                          }),
                          (0, Z.R)(u, f.guild_id),
                          G.Z.getDesktopType() === X.qrD.NEVER)
                      )
                          return T && q.Z.playNotificationSound(Q, $, p), !1;
                      q.Z.showNotification(
                          U,
                          P,
                          D,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (i = u.author) || void 0 === i ? void 0 : i.id,
                              message_id: u.id,
                              message_type: u.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: u.id,
                              sound: T ? Q : void 0,
                              soundpack: p,
                              volume: $,
                              onClick() {
                                  (0, A.Kh)(f.id), (f.type === X.d4z.GUILD_VOICE || f.type === X.d4z.GUILD_STAGE_VOICE) && d.Z.updateChatOpen(f.id, !0), c.default.clickedNotification();
                              },
                              isUserAvatar: !0
                          }
                      ).then((t) => {
                          null != t && ta.track(f.id, t);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return null != e && ta.clearChannel(e), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return ta.clearChannel(e), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (to()) return !1;
                      if (n.type === X.IIU.PLAYING) {
                          let t = V.default.getUser(e);
                          if (null == t) return !1;
                          let i = Y.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              o = J.intl.string(J.t.XoTWsL),
                              r = J.intl.formatToPlainString(J.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              q.Z.showNotification(
                                  a,
                                  o,
                                  r,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: X.IIU.PLAYING,
                                      notif_user_id: e,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          u.Z.openPrivateChannel(e);
                                      },
                                      isUserAvatar: !0
                                  }
                              ),
                              !1
                          );
                      }
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (t) {
                      let { voiceStates: e } = t;
                      if (to()) return;
                      let n = V.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: o, requestToSpeakTimestamp: r } = i;
                      if (null == l || null == a || !(!o && null != r)) return;
                      let u = O.Z.getGuild(a),
                          d = R.Z.getChannel(l),
                          s = U.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != d &&
                          null != s &&
                          q.Z.showNotification(
                              u.getIconURL(128),
                              d.name,
                              J.intl.formatToPlainString(J.t.sqnsSE, {
                                  channelName: (0, _.F6)(d, V.default, M.Z),
                                  channelTopic: null == s ? void 0 : s.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (to() || !e.send_start_notification || tr(e.channel_id)) return !1;
                      let n = V.default.getCurrentUser(),
                          i = O.Z.getGuild(e.guild_id),
                          a = R.Z.getChannel(e.channel_id),
                          o = V.default.getUser(e.host_id);
                      if (null == n || null == a || null == i || null == o || !(0, W.LL)(n, o, a) || !L.Z.can(l.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), a) || ti.has(e.id)) return !1;
                      ti.add(e.id),
                          q.Z.showNotification(
                              i.getIconURL(128),
                              J.intl.formatToPlainString(J.t.bZ4OkZ, { guildName: i.name }),
                              J.intl.formatToPlainString(J.t.qTelnJ, {
                                  username: H.ZP.getName(i.id, a.id, o),
                                  topic: e.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: a.id
                              },
                              {
                                  onClick() {
                                      (0, y.Cq)(a);
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: e } = t;
                      ti.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (to() || null == e.notification_type) return !1;
                      e.notification_type === B.sy.EVENT_START &&
                          (e.entity_type === B.WX.STAGE_INSTANCE || e.entity_type === B.WX.VOICE
                              ? (function (t) {
                                    if (to()) return !1;
                                    let e = t.channel_id;
                                    if (null == e || tr(e)) return !1;
                                    let n = V.default.getCurrentUser(),
                                        i = O.Z.getGuild(t.guild_id),
                                        a = R.Z.getChannel(t.channel_id),
                                        o = V.default.getUser(t.host_id);
                                    if (null == n || null == a || null == i || null == o || !L.Z.can(l.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), a)) return !1;
                                    q.Z.showNotification(
                                        i.getIconURL(128),
                                        J.intl.formatToPlainString(J.t.bOu6Wl, { guildName: i.name }),
                                        J.intl.formatToPlainString(J.t.GV9L8v, {
                                            topic: t.name,
                                            username: H.ZP.getName(i.id, a.id, o)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: a.id
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === B.WX.STAGE_INSTANCE && (0, y.Cq)(a), t.entity_type === B.WX.VOICE && f.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1
                                        }
                                    );
                                })(e)
                              : e.entity_type === B.WX.EXTERNAL &&
                                (function (t) {
                                    if (to()) return !1;
                                    let e = V.default.getCurrentUser(),
                                        n = O.Z.getGuild(t.guild_id);
                                    if (null == e || null == n) return !1;
                                    q.Z.showNotification(
                                        n.getIconURL(128),
                                        J.intl.formatToPlainString(J.t.bOu6Wl, { guildName: n.name }),
                                        J.intl.formatToPlainString(J.t.mYyaRE, { topic: t.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id
                                        },
                                        {
                                            onClick() {
                                                s.Z.transitionToGuildSync(t.guild_id), (0, S.bO)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1
                                        }
                                    );
                                })(e));
                  },
                  THREAD_CREATE: function (t) {
                      var e;
                      let { channel: n, isNewlyCreated: i } = t;
                      if (to()) return !1;
                      let l = R.Z.getChannel(n.parent_id);
                      if (null == l || !X.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, W.FI)(n, l, !te)) return !1;
                      let { author: a, user: o } = (0, N.MC)(n);
                      if (null == o) return !1;
                      let r = O.Z.getGuild(l.guild_id);
                      if (null == r) return !1;
                      let u = J.intl.formatToPlainString(J.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: r.name
                          }),
                          d = J.intl.formatToPlainString(J.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null !== (e = null == a ? void 0 : a.nick) && void 0 !== e ? e : null == o ? void 0 : o.username
                          }),
                          s = o.getAvatarURL(void 0, 128);
                      q.Z.showNotification(
                          s,
                          u,
                          d,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: o.id
                          },
                          {
                              onClick() {
                                  (0, P.ok)(n);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let e,
                          { icon: n, title: i, body: l, route: a, trackingType: o, tag: r } = t;
                      if (to() || null == i || null == l || null == o) return !1;
                      let u = 'reactions_push_notification' === o;
                      if (u) {
                          var d;
                          let { enableInAppNotifications: t } = p.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!t) return !1;
                          let n =
                              null !== (d = (0, T.Qj)(a)) && void 0 !== d
                                  ? d
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (e = n.channelId) || null == n.guildId || (k.Z.getCurrentlySelectedChannelId() === e && te)) return !1;
                      }
                      q.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: o },
                          {
                              onClick() {
                                  null != a && ((0, h.Z)(a), c.default.clickedNotification());
                              },
                              tag: r,
                              isUserAvatar: u
                          }
                      ).then((t) => {
                          null != t && null != e && ta.track(e, t);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, z.isWindows)(),
                          e = (0, z.isLinux)();
                      if (!(!o.K.get(tt, !1) && z.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tn && (i = tl.includes(tn)),
                          !!i &&
                              (q.Z.showNotification(
                                  n(95045),
                                  J.intl.string(J.t.VSgOVl),
                                  J.intl.string(J.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, m.uL)(X.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          o.K.set(tt, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return o.K.remove(tt), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n } = t;
                      (tn = e), ti.clear(), n.forEach((t) => t.stage_instances.forEach((t) => ti.add(t.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (to()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = R.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, W.Xi)(i, n, n.author);
                      q.Z.showNotification(
                          l,
                          J.intl.string(J.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, h.Z)(X.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  }
              }
    );
