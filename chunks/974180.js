n.d(t, {
    Ay: () => j,
    yk: () => Q
}),
    n(47120),
    n(653041);
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
    S = n(15274),
    T = n(754688),
    I = n(336197),
    p = n(355298),
    h = n(601992),
    C = n(11352),
    Z = n(671105),
    v = n(106371),
    m = n(703656),
    A = n(359110),
    y = n(922482),
    P = n(427679),
    U = n(488131),
    D = n(695346),
    R = n(592125),
    O = n(430824),
    b = n(292959),
    G = n(496675),
    L = n(699516),
    k = n(944486),
    M = n(885110),
    w = n(246946),
    W = n(594174),
    F = n(979651),
    V = n(5192),
    H = n(150097),
    z = n(912101),
    q = n(358085),
    x = n(74538),
    Y = n(51144),
    X = n(981631),
    B = n(765305),
    J = n(388032);
function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let j = 'message1',
    Q = 0.4,
    $ = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports('notifications')) ? 20 : 1,
    ee = 'discord_dismissed_notification_shown',
    et = document.hasFocus(),
    en = null,
    ei = new Set(),
    el = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    ea = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > $; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            K(this, '_channels', {});
        }
    })();
function er() {
    return !!(b.Z.getDesktopType() === X.qrD.NEVER || M.Z.getStatus() === X.Skl.DND || D.QZ.getSetting());
}
function eo(e) {
    return null != F.Z.getVoiceStateForChannel(e);
}
class eu extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(W.default, R.Z, b.Z, O.Z, P.Z, L.Z, G.Z, F.Z, p.Z);
    }
}
K(eu, 'displayName', 'NotificationStore'),
    new eu(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== X.$Ab.ENABLED ||
                          q.isPlatformEmbedded ||
                          z.Z.showNotification(
                              n(185672),
                              J.NW.string(J.t.VSgOVl),
                              J.NW.string(J.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: j,
                                  volume: Q,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: i, trackingProps: l, options: a } = e;
                      return !er() && (z.Z.showNotification(t, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((et = e.focused)) {
                          let e = k.Z.getChannelId();
                          null != e && ea.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, a;
                      let { channelId: r, message: u, optimistic: d } = e;
                      if (d) return !1;
                      let f = R.Z.getChannel(r),
                          g = W.default.getUser(null === (t = u.author) || void 0 === t ? void 0 : t.id),
                          _ = W.default.getCurrentUser();
                      if (null == f || null == g) return !1;
                      let N = (0, H.eF)(u, r, !et),
                          S = b.Z.getNotifyMessagesInSelectedChannel() && (0, H.N_)(u, r);
                      if ((!N && !S) || (u.type === X.uaV.CHANGELOG && (null == u.changelog_id || E.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let T = !b.Z.isSoundDisabled(j),
                          I = x.ZP.canUseCustomNotificationSounds(_),
                          p = C.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          v = I && p && T ? (null !== (a = (0, Z.bb)(null !== (l = f.guild_id) && void 0 !== l ? l : X.aIL, r)) && void 0 !== a ? a : (0, Z.iD)(f.guild_id)) : void 0;
                      if ((S && (T && z.Z.playNotificationSound('message3', 0.4, v), !et)) || !N) return !1;
                      let m = n(808506).default,
                          y = n(624864).Z,
                          { OverlayNotificationDisabledSetting: P } = n(486016);
                      if (null != m.getFocusedPID() && !y.isNotificationDisabled(P.TEXT_CHAT) && !w.Z.disableNotifications) return !1;
                      let { icon: U, title: D, body: O } = (0, H.Xi)(f, u, g);
                      if (
                          (o.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: u,
                              icon: U,
                              title: D,
                              body: O
                          }),
                          (0, h.R)(u, f.guild_id),
                          b.Z.getDesktopType() === X.qrD.NEVER)
                      )
                          return T && z.Z.playNotificationSound(j, Q, v), !1;
                      z.Z.showNotification(
                          U,
                          D,
                          O,
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
                              sound: T ? j : void 0,
                              soundpack: v,
                              volume: Q,
                              onClick() {
                                  (0, A.Kh)(f.id), (f.type === X.d4z.GUILD_VOICE || f.type === X.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(f.id, !0), c.default.clickedNotification();
                              },
                              isUserAvatar: !0
                          }
                      ).then((e) => {
                          null != e && ea.track(f.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && ea.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return ea.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (er()) return !1;
                      if (n.type === X.IIU.PLAYING) {
                          let e = W.default.getUser(t);
                          if (null == e) return !1;
                          let i = Y.ZP.getName(e),
                              l = n.name,
                              a = e.getAvatarURL(void 0, 128),
                              r = J.NW.string(J.t.XoTWsL),
                              o = J.NW.formatToPlainString(J.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              z.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: X.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          u.Z.openPrivateChannel(t);
                                      },
                                      isUserAvatar: !0
                                  }
                              ),
                              !1
                          );
                      }
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (e) {
                      let { voiceStates: t } = e;
                      if (er()) return;
                      let n = W.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = O.Z.getGuild(a),
                          s = R.Z.getChannel(l),
                          d = P.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          z.Z.showNotification(
                              u.getIconURL(128),
                              s.name,
                              J.NW.formatToPlainString(J.t.sqnsSE, {
                                  channelName: (0, _.F6)(s, W.default, L.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (er() || !t.send_start_notification || eo(t.channel_id)) return !1;
                      let n = W.default.getCurrentUser(),
                          i = O.Z.getGuild(t.guild_id),
                          a = R.Z.getChannel(t.channel_id),
                          r = W.default.getUser(t.host_id);
                      if (null == n || null == a || null == i || null == r || !(0, H.LL)(n, r, a) || !G.Z.can(l.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), a) || ei.has(t.id)) return !1;
                      ei.add(t.id),
                          z.Z.showNotification(
                              i.getIconURL(128),
                              J.NW.formatToPlainString(J.t.bZ4OkZ, { guildName: i.name }),
                              J.NW.formatToPlainString(J.t.qTelnJ, {
                                  username: V.ZP.getName(i.id, a.id, r),
                                  topic: t.topic
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
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      ei.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (er() || null == t.notification_type) return !1;
                      t.notification_type === B.sy.EVENT_START &&
                          (t.entity_type === B.WX.STAGE_INSTANCE || t.entity_type === B.WX.VOICE
                              ? (function (e) {
                                    if (er()) return !1;
                                    let t = e.channel_id;
                                    if (null == t || eo(t)) return !1;
                                    let n = W.default.getCurrentUser(),
                                        i = O.Z.getGuild(e.guild_id),
                                        a = R.Z.getChannel(e.channel_id),
                                        r = W.default.getUser(e.host_id);
                                    if (null == n || null == a || null == i || null == r || !G.Z.can(l.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), a)) return !1;
                                    z.Z.showNotification(
                                        i.getIconURL(128),
                                        J.NW.formatToPlainString(J.t.bOu6Wl, { guildName: i.name }),
                                        J.NW.formatToPlainString(J.t.GV9L8v, {
                                            topic: e.name,
                                            username: V.ZP.getName(i.id, a.id, r)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: a.id
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === B.WX.STAGE_INSTANCE && (0, y.Cq)(a), e.entity_type === B.WX.VOICE && f.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1
                                        }
                                    );
                                })(t)
                              : t.entity_type === B.WX.EXTERNAL &&
                                (function (e) {
                                    if (er()) return !1;
                                    let t = W.default.getCurrentUser(),
                                        n = O.Z.getGuild(e.guild_id);
                                    if (null == t || null == n) return !1;
                                    z.Z.showNotification(
                                        n.getIconURL(128),
                                        J.NW.formatToPlainString(J.t.bOu6Wl, { guildName: n.name }),
                                        J.NW.formatToPlainString(J.t.mYyaRE, { topic: e.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(e.guild_id), (0, S.bO)({ eventId: e.id });
                                            },
                                            isUserAvatar: !1
                                        }
                                    );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (er()) return !1;
                      let l = R.Z.getChannel(n.parent_id);
                      if (null == l || !X.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, H.FI)(n, l, !et)) return !1;
                      let { author: a, user: r } = (0, N.MC)(n);
                      if (null == r) return !1;
                      let o = O.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = J.NW.formatToPlainString(J.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = J.NW.formatToPlainString(J.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      z.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: r.id
                          },
                          {
                              onClick() {
                                  (0, U.ok)(n);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = e;
                      if (er() || null == i || null == l || null == r) return !1;
                      let u = 'reactions_push_notification' === r;
                      if (u) {
                          var s;
                          let { enableInAppNotifications: e } = v.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null !== (s = (0, T.Qj)(a)) && void 0 !== s
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (k.Z.getCurrentlySelectedChannelId() === t && et)) return !1;
                      }
                      z.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != a && ((0, I.Z)(a), c.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: u
                          }
                      ).then((e) => {
                          null != e && null != t && ea.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, q.isWindows)(),
                          t = (0, q.isLinux)();
                      if (!(!r.K.get(ee, !1) && q.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != en && (i = el.includes(en)),
                          !!i &&
                              (z.Z.showNotification(
                                  n(95045),
                                  J.NW.string(J.t.VSgOVl),
                                  J.NW.string(J.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, m.uL)(X.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          r.K.set(ee, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return r.K.remove(ee), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (en = t), ei.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ei.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (er()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = R.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, H.Xi)(i, n, n.author);
                      z.Z.showNotification(
                          l,
                          J.NW.string(J.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, I.Z)(X.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  }
              }
    );
