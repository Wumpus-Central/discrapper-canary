n.d(e, {
    Ay: () => Q,
    yk: () => tt
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
    S = n(754688),
    p = n(336197),
    C = n(355298),
    I = n(786761),
    h = n(601992),
    Z = n(864060),
    m = n(11352),
    A = n(671105),
    v = n(106371),
    y = n(703656),
    P = n(359110),
    D = n(922482),
    U = n(427679),
    R = n(488131),
    O = n(695346),
    b = n(592125),
    L = n(430824),
    G = n(375954),
    k = n(292959),
    M = n(496675),
    w = n(699516),
    V = n(944486),
    F = n(885110),
    H = n(246946),
    W = n(594174),
    x = n(979651),
    z = n(5192),
    q = n(912101),
    Y = n(358085),
    X = n(74538),
    B = n(51144),
    J = n(981631),
    K = n(765305),
    $ = n(388032);
function j(t, e, n) {
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
    tt = 0.4,
    te = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports('notifications')) ? 20 : 1,
    tn = 'discord_dismissed_notification_shown',
    ti = document.hasFocus(),
    tl = null,
    ta = new Set(),
    tr = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    to = new (class {
        track(t, e) {
            let n = this._channels[t];
            for (null == n && ((n = []), (this._channels[t] = n)), n.push(e); n.length > te; ) {
                let t = n.shift();
                null != t && null != t.close && t.close();
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e && (delete this._channels[t], e.forEach((t) => t.close()));
        }
        constructor() {
            j(this, '_channels', {});
        }
    })();
function tu() {
    return !!(k.Z.getDesktopType() === J.qrD.NEVER || F.Z.getStatus() === J.Skl.DND || O.QZ.getSetting());
}
function ts(t) {
    return null != x.Z.getVoiceStateForChannel(t);
}
class td extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(W.default, b.Z, k.Z, L.Z, U.Z, w.Z, M.Z, x.Z, C.Z);
    }
}
j(td, 'displayName', 'NotificationStore'),
    new td(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      e !== J.$Ab.ENABLED ||
                          Y.isPlatformEmbedded ||
                          q.Z.showNotification(
                              n(185672),
                              $.intl.string($.t.VSgOVl),
                              $.intl.string($.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: Q,
                                  volume: tt,
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
                      return !tu() && (q.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((ti = t.focused)) {
                          let t = V.Z.getChannelId();
                          null != t && to.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, a, r;
                      let { channelId: u, message: d, optimistic: f } = t;
                      if (f) return !1;
                      let g = b.Z.getChannel(u),
                          _ = W.default.getUser(null == (e = d.author) ? void 0 : e.id),
                          N = W.default.getCurrentUser();
                      if (null == g || null == _) return !1;
                      let T = (0, Z.eF)(d, u, !ti),
                          S = k.Z.getNotifyMessagesInSelectedChannel() && (0, Z.N_)(d, u);
                      if ((!T && !S) || (d.type === J.uaV.CHANGELOG && (null == d.changelog_id || E.Z.latestChangelogId() !== d.changelog_id))) return !1;
                      let p = !k.Z.isSoundDisabled(Q),
                          C = X.ZP.canUseCustomNotificationSounds(N),
                          v = m.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          y = C && v && p ? (null != (a = (0, A.bb)(null != (l = g.guild_id) ? l : J.aIL, u)) ? a : (0, A.iD)(g.guild_id)) : void 0;
                      if ((S && (p && q.Z.playNotificationSound('message3', 0.4, y), !ti)) || !T) return !1;
                      let D = n(808506).default,
                          U = n(624864).Z,
                          { OverlayNotificationDisabledSetting: R } = n(486016);
                      if (null != D.getFocusedPID() && !U.isNotificationDisabled(R.TEXT_CHAT) && !H.Z.disableNotifications) return !1;
                      let { icon: O, title: L, body: M } = (0, Z.Xi)(g, d, _);
                      if (
                          (o.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: g.id,
                              message: d,
                              icon: O,
                              title: L,
                              body: M
                          }),
                          (0, h.R)(d, g.guild_id),
                          k.Z.getDesktopType() === J.qrD.NEVER)
                      )
                          return p && q.Z.playNotificationSound(Q, tt, y), !1;
                      let w = null != (r = G.Z.getMessage(u, d.id)) ? r : (0, I.e5)(d);
                      q.Z.showNotification(
                          O,
                          L,
                          M,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null == (i = d.author) ? void 0 : i.id,
                              message_id: d.id,
                              message_type: d.type,
                              channel_id: g.id,
                              channel_type: g.type,
                              guild_id: g.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: d.id,
                              sound: p ? Q : void 0,
                              soundpack: y,
                              volume: tt,
                              onClick() {
                                  (0, P.Kh)(g.id), (g.type === J.d4z.GUILD_VOICE || g.type === J.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(g.id, !0), c.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: w
                          }
                      ).then((t) => {
                          null != t && to.track(g.id, t);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return null != e && to.clearChannel(e), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return to.clearChannel(e), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (tu() || n.type !== J.IIU.PLAYING) return !1;
                      {
                          let t = W.default.getUser(e);
                          if (null == t) return !1;
                          let i = B.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              r = $.intl.string($.t.XoTWsL),
                              o = $.intl.formatToPlainString($.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              q.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: J.IIU.PLAYING,
                                      notif_user_id: e,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          u.Z.openPrivateChannel({ recipientIds: e });
                                      },
                                      isUserAvatar: !0
                                  }
                              ),
                              !1
                          );
                      }
                  },
                  VOICE_STATE_UPDATES: function (t) {
                      let { voiceStates: e } = t;
                      if (tu()) return;
                      let n = W.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = L.Z.getGuild(a),
                          s = b.Z.getChannel(l),
                          d = U.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          q.Z.showNotification(
                              u.getIconURL(128),
                              s.name,
                              $.intl.formatToPlainString($.t.sqnsSE, {
                                  channelName: (0, _.F6)(s, W.default, w.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (tu() || !e.send_start_notification || ts(e.channel_id)) return !1;
                      let n = W.default.getCurrentUser(),
                          i = L.Z.getGuild(e.guild_id),
                          a = b.Z.getChannel(e.channel_id),
                          r = W.default.getUser(e.host_id);
                      if (null == n || null == a || null == i || null == r || !(0, Z.LL)(n, r, a) || !M.Z.can(l.$e(J.Plq.CONNECT, J.Plq.VIEW_CHANNEL), a) || ta.has(e.id)) return !1;
                      ta.add(e.id),
                          q.Z.showNotification(
                              i.getIconURL(128),
                              $.intl.formatToPlainString($.t.bZ4OkZ, { guildName: i.name }),
                              $.intl.formatToPlainString($.t.qTelnJ, {
                                  username: z.ZP.getName(i.id, a.id, r),
                                  topic: e.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: a.id
                              },
                              {
                                  onClick() {
                                      (0, D.Cq)(a);
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: e } = t;
                      ta.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (tu() || null == e.notification_type) return !1;
                      e.notification_type === K.sy.EVENT_START &&
                          (e.entity_type === K.WX.STAGE_INSTANCE || e.entity_type === K.WX.VOICE
                              ? (function (t) {
                                    if (tu()) return;
                                    let e = t.channel_id;
                                    if (null == e || ts(e)) return;
                                    let n = W.default.getCurrentUser(),
                                        i = L.Z.getGuild(t.guild_id),
                                        a = b.Z.getChannel(t.channel_id),
                                        r = W.default.getUser(t.host_id);
                                    if (null != n && null != a && null != i && null != r && M.Z.can(l.$e(J.Plq.CONNECT, J.Plq.VIEW_CHANNEL), a))
                                        q.Z.showNotification(
                                            i.getIconURL(128),
                                            $.intl.formatToPlainString($.t.bOu6Wl, { guildName: i.name }),
                                            $.intl.formatToPlainString($.t.GV9L8v, {
                                                topic: t.name,
                                                username: z.ZP.getName(i.id, a.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: a.id
                                            },
                                            {
                                                onClick() {
                                                    t.entity_type === K.WX.STAGE_INSTANCE && (0, D.Cq)(a), t.entity_type === K.WX.VOICE && f.default.selectVoiceChannel(a.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e)
                              : e.entity_type === K.WX.EXTERNAL &&
                                (function (t) {
                                    if (tu()) return;
                                    let e = W.default.getCurrentUser(),
                                        n = L.Z.getGuild(t.guild_id);
                                    if (null != e && null != n)
                                        q.Z.showNotification(
                                            n.getIconURL(128),
                                            $.intl.formatToPlainString($.t.bOu6Wl, { guildName: n.name }),
                                            $.intl.formatToPlainString($.t.mYyaRE, { topic: t.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    d.Z.transitionToGuildSync(t.guild_id), (0, T.bO)({ eventId: t.id });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e));
                  },
                  THREAD_CREATE: function (t) {
                      var e;
                      let { channel: n, isNewlyCreated: i } = t;
                      if (tu()) return !1;
                      let l = b.Z.getChannel(n.parent_id);
                      if (null == l || !J.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, Z.FI)(n, l, !ti)) return !1;
                      let { author: a, user: r } = (0, N.MC)(n);
                      if (null == r) return !1;
                      let o = L.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = $.intl.formatToPlainString($.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = $.intl.formatToPlainString($.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      q.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: r.id
                          },
                          {
                              onClick() {
                                  (0, R.ok)(n);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let e,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                      if (tu() || null == i || null == l || null == r) return !1;
                      let u = 'reactions_push_notification' === r;
                      if (u) {
                          var s;
                          let { enableInAppNotifications: t } = v.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!t) return !1;
                          let n =
                              null != (s = (0, S.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (e = n.channelId) || null == n.guildId || (V.Z.getCurrentlySelectedChannelId() === e && ti)) return !1;
                      }
                      q.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != a && ((0, p.Z)(a), c.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: u
                          }
                      ).then((t) => {
                          null != t && null != e && to.track(e, t);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, Y.isWindows)(),
                          e = (0, Y.isLinux)();
                      if (!(!r.K.get(tn, !1) && Y.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tl && (i = tr.includes(tl)),
                          !!i &&
                              (q.Z.showNotification(
                                  n(95045),
                                  $.intl.string($.t.VSgOVl),
                                  $.intl.string($.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, y.uL)(J.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          r.K.set(tn, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return r.K.remove(tn), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n } = t;
                      (tl = e), ta.clear(), n.forEach((t) => t.stage_instances.forEach((t) => ta.add(t.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (tu()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = b.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, Z.Xi)(i, n, n.author);
                      q.Z.showNotification(
                          l,
                          $.intl.string($.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, p.Z)(J.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  }
              }
    );
