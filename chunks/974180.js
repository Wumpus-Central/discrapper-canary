n(388685), n(539854);
var r,
    i = n(149765),
    l = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(493683),
    c = n(475179),
    u = n(749210),
    d = n(292556),
    p = n(287734),
    h = n(579806),
    f = n(802098),
    g = n(933557),
    m = n(456269),
    b = n(15274),
    _ = n(754688),
    E = n(336197),
    O = n(355298),
    y = n(786761),
    I = n(601992),
    v = n(622733),
    C = n(864060),
    S = n(173345),
    N = n(817876),
    T = n(106371),
    P = n(703656),
    j = n(359110),
    A = n(922482),
    Z = n(427679),
    x = n(488131),
    w = n(695346),
    L = n(592125),
    R = n(430824),
    D = n(375954),
    k = n(292959),
    M = n(496675),
    U = n(699516),
    G = n(944486),
    V = n(885110),
    B = n(246946),
    H = n(594174),
    F = n(979651),
    z = n(5192),
    W = n(912101),
    Y = n(358085),
    K = n(74538),
    q = n(51144),
    X = n(981631),
    Q = n(765305),
    J = n(468788),
    $ = n(388032);
function ee(e, t, n) {
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
let et = (null === h.Z || void 0 === h.Z ? void 0 : h.Z.features.supports('notifications')) ? 20 : 1,
    en = 'discord_dismissed_notification_shown',
    er = document.hasFocus(),
    ei = null,
    el = new Set(),
    ea = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
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
            ee(this, '_channels', {});
        }
    })();
function es() {
    return !!(k.Z.getDesktopType() === X.qrD.NEVER || V.Z.getStatus() === X.Skl.DND || w.QZ.getSetting());
}
function ec(e) {
    return null != F.Z.getVoiceStateForChannel(e);
}
class eu extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(H.default, L.Z, k.Z, R.Z, Z.Z, U.Z, M.Z, F.Z, O.Z);
    }
}
ee(eu, 'displayName', 'NotificationStore'),
    new eu(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== X.$Ab.ENABLED ||
                          Y.isPlatformEmbedded ||
                          W.Z.showNotification(
                              n(185672),
                              $.intl.string($.t.VSgOVl),
                              $.intl.string($.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: J.Ay,
                                  volume: J.yk,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: r, trackingProps: i, options: l } = e;
                      return !es() && (W.Z.showNotification(t, n, r, i, l), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((er = e.focused)) {
                          let e = G.Z.getChannelId();
                          null != e && eo.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, r, i, l, a;
                      let { channelId: s, message: u, optimistic: p } = e;
                      if (p) return !1;
                      let h = L.Z.getChannel(s),
                          g = H.default.getUser(null == (t = u.author) ? void 0 : t.id),
                          m = H.default.getCurrentUser();
                      if (null == h || null == g) return !1;
                      let b = (0, C.eF)(u, s, !er),
                          _ = k.Z.getNotifyMessagesInSelectedChannel() && (0, C.N_)(u, s);
                      if ((!b && !_) || (u.type === X.uaV.CHANGELOG && (null == u.changelog_id || f.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let E = !k.Z.isSoundDisabled(J.Ay),
                          O = K.ZP.canUseCustomNotificationSounds(m),
                          T = S.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          P = O && T && E ? (null != (l = (0, N.bb)(null != (i = h.guild_id) ? i : X.aIL, s)) ? l : (0, N.iD)(h.guild_id)) : void 0;
                      if ((_ && (E && W.Z.playNotificationSound('message3', 0.4, P), !er)) || !b) return !1;
                      let A = n(808506).default,
                          Z = n(624864).Z,
                          { OverlayNotificationDisabledSetting: x } = n(486016);
                      if (null != A.getFocusedPID() && !Z.isNotificationDisabled(x.TEXT_CHAT) && !B.Z.disableNotifications) return !1;
                      let { icon: w, title: R, body: M } = (0, C.Xi)(h, u, g);
                      if (
                          (o.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: h.id,
                              message: u,
                              icon: w,
                              title: R,
                              body: M
                          }),
                          (0, I.R)(u, h.guild_id),
                          k.Z.getDesktopType() === X.qrD.NEVER)
                      )
                          return E && (0, v.t)(u, !0), !1;
                      let U = null != (a = D.Z.getMessage(s, u.id)) ? a : (0, y.e5)(u);
                      W.Z.showNotification(
                          w,
                          R,
                          M,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null == (r = u.author) ? void 0 : r.id,
                              message_id: u.id,
                              message_type: u.type,
                              channel_id: h.id,
                              channel_type: h.type,
                              guild_id: h.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: u.id,
                              onPlaySound: () => {
                                  (0, v.t)(u);
                              },
                              onClick() {
                                  (0, j.Kh)(h.id), (h.type === X.d4z.GUILD_VOICE || h.type === X.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(h.id, !0), d.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: U
                          }
                      ).then((e) => {
                          null != e && eo.track(h.id, e);
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
                      if (es() || n.type !== X.IIU.PLAYING) return !1;
                      {
                          let e = H.default.getUser(t);
                          if (null == e) return !1;
                          let r = q.ZP.getName(e),
                              i = n.name,
                              l = e.getAvatarURL(void 0, 128),
                              a = $.intl.string($.t.XoTWsL),
                              o = $.intl.formatToPlainString($.t.o4Aipq, {
                                  username: r,
                                  gameName: i
                              });
                          return (
                              W.Z.showNotification(
                                  l,
                                  a,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: X.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: i
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          s.Z.openPrivateChannel({ recipientIds: t });
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
                      if (es()) return;
                      let n = H.default.getCurrentUser();
                      if (null == n) return;
                      let r = t.find((e) => e.userId === n.id);
                      if (null == r) return;
                      let { channelId: i, guildId: l, suppress: a, requestToSpeakTimestamp: o } = r;
                      if (null == i || null == l || !(!a && null != o)) return;
                      let s = R.Z.getGuild(l),
                          c = L.Z.getChannel(i),
                          u = Z.Z.getStageInstanceByChannel(i);
                      null != s &&
                          null != c &&
                          null != u &&
                          W.Z.showNotification(
                              s.getIconURL(128),
                              c.name,
                              $.intl.formatToPlainString($.t.sqnsSE, {
                                  channelName: (0, g.F6)(c, H.default, U.Z),
                                  channelTopic: null == u ? void 0 : u.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (es() || !t.send_start_notification || ec(t.channel_id)) return !1;
                      let n = H.default.getCurrentUser(),
                          r = R.Z.getGuild(t.guild_id),
                          l = L.Z.getChannel(t.channel_id),
                          a = H.default.getUser(t.host_id);
                      if (null == n || null == l || null == r || null == a || !(0, C.LL)(n, a, l) || !M.Z.can(i.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), l) || el.has(t.id)) return !1;
                      el.add(t.id),
                          W.Z.showNotification(
                              r.getIconURL(128),
                              $.intl.formatToPlainString($.t.bZ4OkZ, { guildName: r.name }),
                              $.intl.formatToPlainString($.t.qTelnJ, {
                                  username: z.ZP.getName(r.id, l.id, a),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: r.id,
                                  channel_id: l.id
                              },
                              {
                                  onClick() {
                                      (0, A.Cq)(l);
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      el.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (es() || null == t.notification_type) return !1;
                      t.notification_type === Q.sy.EVENT_START &&
                          (t.entity_type === Q.WX.STAGE_INSTANCE || t.entity_type === Q.WX.VOICE
                              ? (function (e) {
                                    if (es()) return;
                                    let t = e.channel_id;
                                    if (null == t || ec(t)) return;
                                    let n = H.default.getCurrentUser(),
                                        r = R.Z.getGuild(e.guild_id),
                                        l = L.Z.getChannel(e.channel_id),
                                        a = H.default.getUser(e.host_id);
                                    if (null != n && null != l && null != r && null != a && M.Z.can(i.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), l))
                                        W.Z.showNotification(
                                            r.getIconURL(128),
                                            $.intl.formatToPlainString($.t.bOu6Wl, { guildName: r.name }),
                                            $.intl.formatToPlainString($.t.GV9L8v, {
                                                topic: e.name,
                                                username: z.ZP.getName(r.id, l.id, a)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: r.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === Q.WX.STAGE_INSTANCE && (0, A.Cq)(l), e.entity_type === Q.WX.VOICE && p.default.selectVoiceChannel(l.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t)
                              : t.entity_type === Q.WX.EXTERNAL &&
                                (function (e) {
                                    if (es()) return;
                                    let t = H.default.getCurrentUser(),
                                        n = R.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        W.Z.showNotification(
                                            n.getIconURL(128),
                                            $.intl.formatToPlainString($.t.bOu6Wl, { guildName: n.name }),
                                            $.intl.formatToPlainString($.t.mYyaRE, { topic: e.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    u.Z.transitionToGuildSync(e.guild_id), (0, b.bO)({ eventId: e.id });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: r } = e;
                      if (es()) return !1;
                      let i = L.Z.getChannel(n.parent_id);
                      if (null == i || !X.TPd.GUILD_THREADS_ONLY.has(i.type) || !r || !(0, C.FI)(n, i, !er)) return !1;
                      let { author: l, user: a } = (0, m.MC)(n);
                      if (null == a) return !1;
                      let o = R.Z.getGuild(i.guild_id);
                      if (null == o) return !1;
                      let s = $.intl.formatToPlainString($.t['2IGVl5'], {
                              channelName: i.name,
                              guildName: o.name
                          }),
                          c = $.intl.formatToPlainString($.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (t = null == l ? void 0 : l.nick) ? t : null == a ? void 0 : a.username
                          }),
                          u = a.getAvatarURL(void 0, 128);
                      W.Z.showNotification(
                          u,
                          s,
                          c,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: a.id
                          },
                          {
                              onClick() {
                                  (0, x.ok)(n);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: r, body: i, route: l, trackingType: a, tag: o } = e;
                      if (es() || null == r || null == i || null == a) return !1;
                      let s = 'reactions_push_notification' === a;
                      if (s) {
                          var c;
                          let { enableInAppNotifications: e } = T.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null != (c = (0, _.Qj)(l))
                                  ? c
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (G.Z.getCurrentlySelectedChannelId() === t && er)) return !1;
                      }
                      W.Z.showNotification(
                          n,
                          r,
                          i,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != l && ((0, E.Z)(l), d.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: s
                          }
                      ).then((e) => {
                          null != e && null != t && eo.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, Y.isWindows)(),
                          t = (0, Y.isLinux)();
                      if (!(!a.K.get(en, !1) && Y.isPlatformEmbedded && (e || t))) return !1;
                      let r = !1;
                      return (
                          null != ei && (r = ea.includes(ei)),
                          !!r &&
                              (W.Z.showNotification(
                                  n(95045),
                                  $.intl.string($.t.VSgOVl),
                                  $.intl.string($.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, P.uL)(X.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          a.K.set(en, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove(en), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (ei = t), el.clear(), n.forEach((e) => e.stage_instances.forEach((e) => el.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (es()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let r = L.Z.getChannel(t.saveData.channelId);
                      if (null == r) return !1;
                      let { icon: i, body: l } = (0, C.Xi)(r, n, n.author);
                      W.Z.showNotification(
                          i,
                          $.intl.string($.t.IjZJBw),
                          l,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, E.Z)(X.Z5c.CHANNEL(null == r ? void 0 : r.getGuildId(), r.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  }
              }
    );
