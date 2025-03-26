i.d(t, {
    Ay: () => Q,
    yk: () => ee
}),
    i(47120),
    i(653041);
var n,
    l = i(149765),
    a = i(442837),
    o = i(433517),
    r = i(570140),
    u = i(493683),
    s = i(475179),
    d = i(749210),
    c = i(292556),
    f = i(287734),
    g = i(579806),
    E = i(802098),
    _ = i(933557),
    N = i(456269),
    T = i(15274),
    S = i(754688),
    p = i(336197),
    C = i(355298),
    I = i(786761),
    v = i(601992),
    h = i(864060),
    Z = i(11352),
    m = i(671105),
    A = i(106371),
    y = i(703656),
    P = i(359110),
    D = i(922482),
    U = i(427679),
    R = i(488131),
    O = i(695346),
    b = i(592125),
    L = i(430824),
    G = i(375954),
    k = i(292959),
    M = i(496675),
    W = i(699516),
    w = i(944486),
    V = i(885110),
    F = i(246946),
    H = i(594174),
    x = i(979651),
    z = i(5192),
    q = i(912101),
    Y = i(358085),
    X = i(74538),
    B = i(51144),
    J = i(981631),
    K = i(765305),
    $ = i(388032);
function j(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let Q = 'message1',
    ee = 0.4,
    et = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports('notifications')) ? 20 : 1,
    ei = 'discord_dismissed_notification_shown',
    en = document.hasFocus(),
    el = null,
    ea = new Set(),
    eo = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    er = new (class {
        track(e, t) {
            let i = this._channels[e];
            for (null == i && ((i = []), (this._channels[e] = i)), i.push(t); i.length > et; ) {
                let e = i.shift();
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
class ed extends (n = a.ZP.Store) {
    initialize() {
        this.waitFor(H.default, b.Z, k.Z, L.Z, U.Z, W.Z, M.Z, x.Z, C.Z);
    }
}
j(ed, 'displayName', 'NotificationStore'),
    new ed(
        r.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== J.$Ab.ENABLED ||
                          Y.isPlatformEmbedded ||
                          q.Z.showNotification(
                              i(185672),
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
                      let { icon: t, title: i, body: n, trackingProps: l, options: a } = e;
                      return !eu() && (q.Z.showNotification(t, i, n, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((en = e.focused)) {
                          let e = w.Z.getChannelId();
                          null != e && er.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, n, l, a, o;
                      let { channelId: u, message: d, optimistic: f } = e;
                      if (f) return !1;
                      let g = b.Z.getChannel(u),
                          _ = H.default.getUser(null === (t = d.author) || void 0 === t ? void 0 : t.id),
                          N = H.default.getCurrentUser();
                      if (null == g || null == _) return !1;
                      let T = (0, h.eF)(d, u, !en),
                          S = k.Z.getNotifyMessagesInSelectedChannel() && (0, h.N_)(d, u);
                      if ((!T && !S) || (d.type === J.uaV.CHANGELOG && (null == d.changelog_id || E.Z.latestChangelogId() !== d.changelog_id))) return !1;
                      let p = !k.Z.isSoundDisabled(Q),
                          C = X.ZP.canUseCustomNotificationSounds(N),
                          A = Z.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          y = C && A && p ? (null !== (a = (0, m.bb)(null !== (l = g.guild_id) && void 0 !== l ? l : J.aIL, u)) && void 0 !== a ? a : (0, m.iD)(g.guild_id)) : void 0;
                      if ((S && (p && q.Z.playNotificationSound('message3', 0.4, y), !en)) || !T) return !1;
                      let D = i(808506).default,
                          U = i(624864).Z,
                          { OverlayNotificationDisabledSetting: R } = i(486016);
                      if (null != D.getFocusedPID() && !U.isNotificationDisabled(R.TEXT_CHAT) && !F.Z.disableNotifications) return !1;
                      let { icon: O, title: L, body: M } = (0, h.Xi)(g, d, _);
                      if (
                          (r.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: g.id,
                              message: d,
                              icon: O,
                              title: L,
                              body: M
                          }),
                          (0, v.R)(d, g.guild_id),
                          k.Z.getDesktopType() === J.qrD.NEVER)
                      )
                          return p && q.Z.playNotificationSound(Q, ee, y), !1;
                      let W = null !== (o = G.Z.getMessage(u, d.id)) && void 0 !== o ? o : (0, I.e5)(d);
                      q.Z.showNotification(
                          O,
                          L,
                          M,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (n = d.author) || void 0 === n ? void 0 : n.id,
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
                          null != e && er.track(g.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && er.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return er.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: i } = e;
                      if (eu()) return !1;
                      if (i.type === J.IIU.PLAYING) {
                          let e = H.default.getUser(t);
                          if (null == e) return !1;
                          let n = B.ZP.getName(e),
                              l = i.name,
                              a = e.getAvatarURL(void 0, 128),
                              o = $.NW.string($.t.XoTWsL),
                              r = $.NW.formatToPlainString($.t.o4Aipq, {
                                  username: n,
                                  gameName: l
                              });
                          return (
                              q.Z.showNotification(
                                  a,
                                  o,
                                  r,
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
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (e) {
                      let { voiceStates: t } = e;
                      if (eu()) return;
                      let i = H.default.getCurrentUser();
                      if (null == i) return;
                      let n = t.find((e) => e.userId === i.id);
                      if (null == n) return;
                      let { channelId: l, guildId: a, suppress: o, requestToSpeakTimestamp: r } = n;
                      if (null == l || null == a || !(!o && null != r)) return;
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
                      let i = H.default.getCurrentUser(),
                          n = L.Z.getGuild(t.guild_id),
                          a = b.Z.getChannel(t.channel_id),
                          o = H.default.getUser(t.host_id);
                      if (null == i || null == a || null == n || null == o || !(0, h.LL)(i, o, a) || !M.Z.can(l.$e(J.Plq.CONNECT, J.Plq.VIEW_CHANNEL), a) || ea.has(t.id)) return !1;
                      ea.add(t.id),
                          q.Z.showNotification(
                              n.getIconURL(128),
                              $.NW.formatToPlainString($.t.bZ4OkZ, { guildName: n.name }),
                              $.NW.formatToPlainString($.t.qTelnJ, {
                                  username: z.ZP.getName(n.id, a.id, o),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: n.id,
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
                                    if (eu()) return !1;
                                    let t = e.channel_id;
                                    if (null == t || es(t)) return !1;
                                    let i = H.default.getCurrentUser(),
                                        n = L.Z.getGuild(e.guild_id),
                                        a = b.Z.getChannel(e.channel_id),
                                        o = H.default.getUser(e.host_id);
                                    if (null == i || null == a || null == n || null == o || !M.Z.can(l.$e(J.Plq.CONNECT, J.Plq.VIEW_CHANNEL), a)) return !1;
                                    q.Z.showNotification(
                                        n.getIconURL(128),
                                        $.NW.formatToPlainString($.t.bOu6Wl, { guildName: n.name }),
                                        $.NW.formatToPlainString($.t.GV9L8v, {
                                            topic: e.name,
                                            username: z.ZP.getName(n.id, a.id, o)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id,
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
                                    if (eu()) return !1;
                                    let t = H.default.getCurrentUser(),
                                        i = L.Z.getGuild(e.guild_id);
                                    if (null == t || null == i) return !1;
                                    q.Z.showNotification(
                                        i.getIconURL(128),
                                        $.NW.formatToPlainString($.t.bOu6Wl, { guildName: i.name }),
                                        $.NW.formatToPlainString($.t.mYyaRE, { topic: e.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id
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
                      let { channel: i, isNewlyCreated: n } = e;
                      if (eu()) return !1;
                      let l = b.Z.getChannel(i.parent_id);
                      if (null == l || !J.TPd.GUILD_THREADS_ONLY.has(l.type) || !n || !(0, h.FI)(i, l, !en)) return !1;
                      let { author: a, user: o } = (0, N.MC)(i);
                      if (null == o) return !1;
                      let r = L.Z.getGuild(l.guild_id);
                      if (null == r) return !1;
                      let u = $.NW.formatToPlainString($.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: r.name
                          }),
                          s = $.NW.formatToPlainString($.t.jPhTvb, {
                              channelName: i.name,
                              userUsername: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : null == o ? void 0 : o.username
                          }),
                          d = o.getAvatarURL(void 0, 128);
                      q.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: o.id
                          },
                          {
                              onClick() {
                                  (0, R.ok)(i);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: i, title: n, body: l, route: a, trackingType: o, tag: r } = e;
                      if (eu() || null == n || null == l || null == o) return !1;
                      let u = 'reactions_push_notification' === o;
                      if (u) {
                          var s;
                          let { enableInAppNotifications: e } = A.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let i =
                              null !== (s = (0, S.Qj)(a)) && void 0 !== s
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = i.channelId) || null == i.guildId || (w.Z.getCurrentlySelectedChannelId() === t && en)) return !1;
                      }
                      q.Z.showNotification(
                          i,
                          n,
                          l,
                          { notif_type: o },
                          {
                              onClick() {
                                  null != a && ((0, p.Z)(a), c.default.clickedNotification());
                              },
                              tag: r,
                              isUserAvatar: u
                          }
                      ).then((e) => {
                          null != e && null != t && er.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, Y.isWindows)(),
                          t = (0, Y.isLinux)();
                      if (!(!o.K.get(ei, !1) && Y.isPlatformEmbedded && (e || t))) return !1;
                      let n = !1;
                      return (
                          null != el && (n = eo.includes(el)),
                          !!n &&
                              (q.Z.showNotification(
                                  i(95045),
                                  $.NW.string($.t.VSgOVl),
                                  $.NW.string($.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, y.uL)(J.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          o.K.set(ei, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return o.K.remove(ei), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: i } = e;
                      (el = t), ea.clear(), i.forEach((e) => e.stage_instances.forEach((e) => ea.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (eu()) return !1;
                      let i = t.message;
                      if (null == i || null == i.author) return !1;
                      let n = b.Z.getChannel(t.saveData.channelId);
                      if (null == n) return !1;
                      let { icon: l, body: a } = (0, h.Xi)(n, i, i.author);
                      q.Z.showNotification(
                          l,
                          $.NW.string($.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, p.Z)(J.Z5c.CHANNEL(null == n ? void 0 : n.getGuildId(), n.id, i.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  }
              }
    );
