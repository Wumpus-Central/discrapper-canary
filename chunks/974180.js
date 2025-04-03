n.d(t, {
    Ay: () => Q,
    yk: () => ee
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
    W = n(699516),
    w = n(944486),
    V = n(885110),
    F = n(246946),
    H = n(594174),
    x = n(979651),
    z = n(5192),
    q = n(912101),
    Y = n(358085),
    X = n(74538),
    B = n(51144),
    J = n(981631),
    K = n(765305),
    $ = n(388032);
function j(e, t, n) {
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
let Q = 'message1',
    ee = 0.4,
    et = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports('notifications')) ? 20 : 1,
    en = 'discord_dismissed_notification_shown',
    ei = document.hasFocus(),
    el = null,
    ea = new Set(),
    er = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    eo = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > et; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            j(this, '_channels', {});
        }
    })();
function eu() {
    return !!(k.Z.getDesktopType() === J.qrD.NEVER || V.Z.getStatus() === J.Skl.DND || O.QZ.getSetting());
}
function es(e) {
    return null != x.Z.getVoiceStateForChannel(e);
}
class ed extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(H.default, b.Z, k.Z, L.Z, U.Z, W.Z, M.Z, x.Z, C.Z);
    }
}
j(ed, 'displayName', 'NotificationStore'),
    new ed(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== J.$Ab.ENABLED ||
                          Y.isPlatformEmbedded ||
                          q.Z.showNotification(
                              n(185672),
                              $.NW.string($.t.VSgOVl),
                              $.NW.string($.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: Q,
                                  volume: ee,
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
                      return !eu() && (q.Z.showNotification(t, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((ei = e.focused)) {
                          let e = w.Z.getChannelId();
                          null != e && eo.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, a, r;
                      let { channelId: u, message: d, optimistic: f } = e;
                      if (f) return !1;
                      let g = b.Z.getChannel(u),
                          _ = H.default.getUser(null == (t = d.author) ? void 0 : t.id),
                          N = H.default.getCurrentUser();
                      if (null == g || null == _) return !1;
                      let T = (0, Z.eF)(d, u, !ei),
                          S = k.Z.getNotifyMessagesInSelectedChannel() && (0, Z.N_)(d, u);
                      if ((!T && !S) || (d.type === J.uaV.CHANGELOG && (null == d.changelog_id || E.Z.latestChangelogId() !== d.changelog_id))) return !1;
                      let p = !k.Z.isSoundDisabled(Q),
                          C = X.ZP.canUseCustomNotificationSounds(N),
                          v = m.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          y = C && v && p ? (null != (a = (0, A.bb)(null != (l = g.guild_id) ? l : J.aIL, u)) ? a : (0, A.iD)(g.guild_id)) : void 0;
                      if ((S && (p && q.Z.playNotificationSound('message3', 0.4, y), !ei)) || !T) return !1;
                      let D = n(808506).default,
                          U = n(624864).Z,
                          { OverlayNotificationDisabledSetting: R } = n(486016);
                      if (null != D.getFocusedPID() && !U.isNotificationDisabled(R.TEXT_CHAT) && !F.Z.disableNotifications) return !1;
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
                          return p && q.Z.playNotificationSound(Q, ee, y), !1;
                      let W = null != (r = G.Z.getMessage(u, d.id)) ? r : (0, I.e5)(d);
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
                              volume: ee,
                              onClick() {
                                  (0, P.Kh)(g.id), (g.type === J.d4z.GUILD_VOICE || g.type === J.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(g.id, !0), c.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: W
                          }
                      ).then((e) => {
                          null != e && eo.track(g.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && eo.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return eo.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (eu() || n.type !== J.IIU.PLAYING) return !1;
                      {
                          let e = H.default.getUser(t);
                          if (null == e) return !1;
                          let i = B.ZP.getName(e),
                              l = n.name,
                              a = e.getAvatarURL(void 0, 128),
                              r = $.NW.string($.t.XoTWsL),
                              o = $.NW.formatToPlainString($.t.o4Aipq, {
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
                  },
                  VOICE_STATE_UPDATES: function (e) {
                      let { voiceStates: t } = e;
                      if (eu()) return;
                      let n = H.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
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
                              $.NW.formatToPlainString($.t.sqnsSE, {
                                  channelName: (0, _.F6)(s, H.default, W.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (eu() || !t.send_start_notification || es(t.channel_id)) return !1;
                      let n = H.default.getCurrentUser(),
                          i = L.Z.getGuild(t.guild_id),
                          a = b.Z.getChannel(t.channel_id),
                          r = H.default.getUser(t.host_id);
                      if (null == n || null == a || null == i || null == r || !(0, Z.LL)(n, r, a) || !M.Z.can(l.$e(J.Plq.CONNECT, J.Plq.VIEW_CHANNEL), a) || ea.has(t.id)) return !1;
                      ea.add(t.id),
                          q.Z.showNotification(
                              i.getIconURL(128),
                              $.NW.formatToPlainString($.t.bZ4OkZ, { guildName: i.name }),
                              $.NW.formatToPlainString($.t.qTelnJ, {
                                  username: z.ZP.getName(i.id, a.id, r),
                                  topic: t.topic
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
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      ea.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (eu() || null == t.notification_type) return !1;
                      t.notification_type === K.sy.EVENT_START &&
                          (t.entity_type === K.WX.STAGE_INSTANCE || t.entity_type === K.WX.VOICE
                              ? (function (e) {
                                    if (eu()) return;
                                    let t = e.channel_id;
                                    if (null == t || es(t)) return;
                                    let n = H.default.getCurrentUser(),
                                        i = L.Z.getGuild(e.guild_id),
                                        a = b.Z.getChannel(e.channel_id),
                                        r = H.default.getUser(e.host_id);
                                    if (null != n && null != a && null != i && null != r && M.Z.can(l.$e(J.Plq.CONNECT, J.Plq.VIEW_CHANNEL), a))
                                        q.Z.showNotification(
                                            i.getIconURL(128),
                                            $.NW.formatToPlainString($.t.bOu6Wl, { guildName: i.name }),
                                            $.NW.formatToPlainString($.t.GV9L8v, {
                                                topic: e.name,
                                                username: z.ZP.getName(i.id, a.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: a.id
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === K.WX.STAGE_INSTANCE && (0, D.Cq)(a), e.entity_type === K.WX.VOICE && f.default.selectVoiceChannel(a.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t)
                              : t.entity_type === K.WX.EXTERNAL &&
                                (function (e) {
                                    if (eu()) return;
                                    let t = H.default.getCurrentUser(),
                                        n = L.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        q.Z.showNotification(
                                            n.getIconURL(128),
                                            $.NW.formatToPlainString($.t.bOu6Wl, { guildName: n.name }),
                                            $.NW.formatToPlainString($.t.mYyaRE, { topic: e.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    d.Z.transitionToGuildSync(e.guild_id), (0, T.bO)({ eventId: e.id });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (eu()) return !1;
                      let l = b.Z.getChannel(n.parent_id);
                      if (null == l || !J.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, Z.FI)(n, l, !ei)) return !1;
                      let { author: a, user: r } = (0, N.MC)(n);
                      if (null == r) return !1;
                      let o = L.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = $.NW.formatToPlainString($.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = $.NW.formatToPlainString($.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (t = null == a ? void 0 : a.nick) ? t : null == r ? void 0 : r.username
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
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = e;
                      if (eu() || null == i || null == l || null == r) return !1;
                      let u = 'reactions_push_notification' === r;
                      if (u) {
                          var s;
                          let { enableInAppNotifications: e } = v.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null != (s = (0, S.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (w.Z.getCurrentlySelectedChannelId() === t && ei)) return !1;
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
                      ).then((e) => {
                          null != e && null != t && eo.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, Y.isWindows)(),
                          t = (0, Y.isLinux)();
                      if (!(!r.K.get(en, !1) && Y.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != el && (i = er.includes(el)),
                          !!i &&
                              (q.Z.showNotification(
                                  n(95045),
                                  $.NW.string($.t.VSgOVl),
                                  $.NW.string($.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, y.uL)(J.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          r.K.set(en, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return r.K.remove(en), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (el = t), ea.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ea.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (eu()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = b.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, Z.Xi)(i, n, n.author);
                      q.Z.showNotification(
                          l,
                          $.NW.string($.t.IjZJBw),
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
