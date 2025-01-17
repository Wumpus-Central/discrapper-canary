i.d(n, {
    Ay: function () {
        return j;
    },
    yk: function () {
        return Q;
    }
}),
    i(47120),
    i(653041);
var e,
    l = i(149765),
    o = i(442837),
    a = i(433517),
    u = i(570140),
    r = i(493683),
    s = i(475179),
    d = i(749210),
    c = i(292556),
    f = i(287734),
    g = i(579806),
    _ = i(802098),
    N = i(933557),
    E = i(456269),
    I = i(15274),
    h = i(754688),
    v = i(336197),
    T = i(355298),
    p = i(601992),
    Z = i(11352),
    S = i(671105),
    C = i(106371),
    m = i(703656),
    A = i(359110),
    y = i(922482),
    O = i(427679),
    P = i(488131),
    R = i(695346),
    w = i(592125),
    D = i(430824),
    b = i(292959),
    k = i(496675),
    F = i(699516),
    U = i(944486),
    L = i(885110),
    G = i(246946),
    M = i(594174),
    V = i(979651),
    W = i(5192),
    H = i(150097),
    z = i(912101),
    q = i(358085),
    x = i(74538),
    Y = i(51144),
    B = i(981631),
    X = i(765305),
    K = i(388032);
function J(t, n, i) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = i),
        t
    );
}
let j = 'message1',
    Q = 0.4,
    $ = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports('notifications')) ? 20 : 1,
    tt = 'discord_dismissed_notification_shown',
    tn = document.hasFocus(),
    ti = null,
    te = new Set(),
    tl = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    to = new (class {
        track(t, n) {
            let i = this._channels[t];
            for (null == i && ((i = []), (this._channels[t] = i)), i.push(n); i.length > $; ) {
                let t = i.shift();
                null != t && null != t.close && t.close();
            }
        }
        clearChannel(t) {
            let n = this._channels[t];
            null != n && (delete this._channels[t], n.forEach((t) => t.close()));
        }
        constructor() {
            J(this, '_channels', {});
        }
    })();
function ta() {
    return !!(b.Z.getDesktopType() === B.qrD.NEVER || L.Z.getStatus() === B.Skl.DND || R.QZ.getSetting()) || !1;
}
function tu(t) {
    return null != V.Z.getVoiceStateForChannel(t);
}
class tr extends (e = o.ZP.Store) {
    initialize() {
        this.waitFor(M.default, w.Z, b.Z, D.Z, O.Z, F.Z, k.Z, V.Z, T.Z);
    }
}
J(tr, 'displayName', 'NotificationStore'),
    new tr(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: n } = t;
                      n === B.$Ab.ENABLED &&
                          !q.isPlatformEmbedded &&
                          z.Z.showNotification(
                              i(185672),
                              K.intl.string(K.t.VSgOVl),
                              K.intl.string(K.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: j,
                                  volume: Q,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (t) {
                      let { icon: n, title: i, body: e, trackingProps: l, options: o } = t;
                      return !ta() && (z.Z.showNotification(n, i, e, l, o), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tn = t.focused)) {
                          let t = U.Z.getChannelId();
                          null != t && to.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var n, e, l, o;
                      let { channelId: a, message: r, optimistic: d } = t;
                      if (d) return !1;
                      let f = w.Z.getChannel(a),
                          g = M.default.getUser(null === (n = r.author) || void 0 === n ? void 0 : n.id),
                          N = M.default.getCurrentUser();
                      if (null == f || null == g) return !1;
                      let E = (0, H.eF)(r, a, !tn),
                          I = b.Z.getNotifyMessagesInSelectedChannel() && (0, H.N_)(r, a);
                      if ((!E && !I) || (r.type === B.uaV.CHANGELOG && (null == r.changelog_id || _.Z.latestChangelogId() !== r.changelog_id))) return !1;
                      let h = !b.Z.isSoundDisabled(j),
                          v = x.ZP.canUseCustomNotificationSounds(N),
                          T = Z.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          C = v && T && h ? (null !== (o = (0, S.bb)(null !== (l = f.guild_id) && void 0 !== l ? l : B.aIL, a)) && void 0 !== o ? o : (0, S.iD)(f.guild_id)) : void 0;
                      if ((I && (h && z.Z.playNotificationSound('message3', 0.4, C), !tn)) || !E) return !1;
                      let m = i(808506).Z,
                          y = i(237997).Z;
                      if (null != m.getFocusedPID() && y.getTextChatNotificationMode() === B.Ypu.ENABLED && !G.Z.disableNotifications) return !1;
                      let { icon: O, title: P, body: R } = (0, H.Xi)(f, r, g);
                      if (
                          (u.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: r,
                              icon: O,
                              title: P,
                              body: R
                          }),
                          (0, p.R)(r, f.guild_id),
                          b.Z.getDesktopType() === B.qrD.NEVER)
                      )
                          return h && z.Z.playNotificationSound(j, Q, C), !1;
                      z.Z.showNotification(
                          O,
                          P,
                          R,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (e = r.author) || void 0 === e ? void 0 : e.id,
                              message_id: r.id,
                              message_type: r.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: r.id,
                              sound: h ? j : void 0,
                              soundpack: C,
                              volume: Q,
                              onClick() {
                                  (0, A.Kh)(f.id), (f.type === B.d4z.GUILD_VOICE || f.type === B.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(f.id, !0), c.default.clickedNotification();
                              }
                          }
                      ).then((t) => {
                          null != t && to.track(f.id, t);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: n } = t;
                      return null != n && to.clearChannel(n), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: n } = t;
                      return to.clearChannel(n), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: n, activity: i } = t;
                      if (ta()) return !1;
                      if (i.type === B.IIU.PLAYING) {
                          let t = M.default.getUser(n);
                          if (null == t) return !1;
                          let e = Y.ZP.getName(t),
                              l = i.name,
                              o = t.getAvatarURL(void 0, 128),
                              a = K.intl.string(K.t.XoTWsL),
                              u = K.intl.formatToPlainString(K.t.o4Aipq, {
                                  username: e,
                                  gameName: l
                              });
                          return (
                              z.Z.showNotification(
                                  o,
                                  a,
                                  u,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: B.IIU.PLAYING,
                                      notif_user_id: n,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          r.Z.openPrivateChannel(n);
                                      }
                                  }
                              ),
                              !1
                          );
                      }
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (t) {
                      let { voiceStates: n } = t;
                      if (ta()) return;
                      let i = M.default.getCurrentUser();
                      if (null == i) return;
                      let e = n.find((t) => t.userId === i.id);
                      if (null == e) return;
                      let { channelId: l, guildId: o, suppress: a, requestToSpeakTimestamp: u } = e;
                      if (null == l || null == o || !(!a && null != u)) return;
                      let r = D.Z.getGuild(o),
                          s = w.Z.getChannel(l),
                          d = O.Z.getStageInstanceByChannel(l);
                      null != r &&
                          null != s &&
                          null != d &&
                          z.Z.showNotification(
                              r.getIconURL(128),
                              s.name,
                              K.intl.formatToPlainString(K.t.sqnsSE, {
                                  channelName: (0, N.F6)(s, M.default, F.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: n } = t;
                      if (ta() || !n.send_start_notification || tu(n.channel_id)) return !1;
                      let i = M.default.getCurrentUser(),
                          e = D.Z.getGuild(n.guild_id),
                          o = w.Z.getChannel(n.channel_id),
                          a = M.default.getUser(n.host_id);
                      if (null == i || null == o || null == e || null == a || !(0, H.LL)(i, a, o) || !k.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o) || te.has(n.id)) return !1;
                      te.add(n.id),
                          z.Z.showNotification(
                              e.getIconURL(128),
                              K.intl.formatToPlainString(K.t.bZ4OkZ, { guildName: e.name }),
                              K.intl.formatToPlainString(K.t.qTelnJ, {
                                  username: W.ZP.getName(e.id, o.id, a),
                                  topic: n.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: e.id,
                                  channel_id: o.id
                              },
                              {
                                  onClick() {
                                      (0, y.Cq)(o);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: n } = t;
                      te.delete(n.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: n } = t;
                      if (ta() || null == n.notification_type) return !1;
                      n.notification_type === X.sy.EVENT_START &&
                          (n.entity_type === X.WX.STAGE_INSTANCE || n.entity_type === X.WX.VOICE
                              ? !(function (t) {
                                    if (ta()) return !1;
                                    let n = t.channel_id;
                                    if (null == n || tu(n)) return !1;
                                    let i = M.default.getCurrentUser(),
                                        e = D.Z.getGuild(t.guild_id),
                                        o = w.Z.getChannel(t.channel_id),
                                        a = M.default.getUser(t.host_id);
                                    if (null == i || null == o || null == e || null == a || !k.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o)) return !1;
                                    z.Z.showNotification(
                                        e.getIconURL(128),
                                        K.intl.formatToPlainString(K.t.bOu6Wl, { guildName: e.name }),
                                        K.intl.formatToPlainString(K.t.GV9L8v, {
                                            topic: t.name,
                                            username: W.ZP.getName(e.id, o.id, a)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: e.id,
                                            channel_id: o.id
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === X.WX.STAGE_INSTANCE && (0, y.Cq)(o), t.entity_type === X.WX.VOICE && f.default.selectVoiceChannel(o.id);
                                            }
                                        }
                                    );
                                })(n)
                              : n.entity_type === X.WX.EXTERNAL &&
                                !(function (t) {
                                    if (ta()) return !1;
                                    let n = M.default.getCurrentUser(),
                                        i = D.Z.getGuild(t.guild_id);
                                    if (null == n || null == i) return !1;
                                    z.Z.showNotification(
                                        i.getIconURL(128),
                                        K.intl.formatToPlainString(K.t.bOu6Wl, { guildName: i.name }),
                                        K.intl.formatToPlainString(K.t.mYyaRE, { topic: t.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(t.guild_id), (0, I.bO)({ eventId: t.id });
                                            }
                                        }
                                    );
                                })(n));
                  },
                  THREAD_CREATE: function (t) {
                      var n;
                      let { channel: i, isNewlyCreated: e } = t;
                      if (ta()) return !1;
                      let l = w.Z.getChannel(i.parent_id);
                      if (null == l || !B.TPd.GUILD_THREADS_ONLY.has(l.type) || !e || !(0, H.FI)(i, l, !tn)) return !1;
                      let { author: o, user: a } = (0, E.MC)(i);
                      if (null == a) return !1;
                      let u = D.Z.getGuild(l.guild_id);
                      if (null == u) return !1;
                      let r = K.intl.formatToPlainString(K.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: u.name
                          }),
                          s = K.intl.formatToPlainString(K.t.jPhTvb, {
                              channelName: i.name,
                              userUsername: null !== (n = null == o ? void 0 : o.nick) && void 0 !== n ? n : null == a ? void 0 : a.username
                          }),
                          d = a.getAvatarURL(void 0, 128);
                      z.Z.showNotification(
                          d,
                          r,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: a.id
                          },
                          {
                              onClick() {
                                  (0, P.ok)(i);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let n,
                          { icon: i, title: e, body: l, route: o, trackingType: a, tag: u } = t;
                      if (ta() || null == e || null == l || null == a) return !1;
                      if ('reactions_push_notification' === a) {
                          var r;
                          let { enableInAppNotifications: t } = C.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!t) return !1;
                          let i =
                              null !== (r = (0, h.Qj)(o)) && void 0 !== r
                                  ? r
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (n = i.channelId) || null == i.guildId || (U.Z.getCurrentlySelectedChannelId() === n && tn)) return !1;
                      }
                      z.Z.showNotification(
                          i,
                          e,
                          l,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != o && ((0, v.Z)(o), c.default.clickedNotification());
                              },
                              tag: u
                          }
                      ).then((t) => {
                          null != t && null != n && to.track(n, t);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, q.isWindows)(),
                          n = (0, q.isLinux)();
                      if (!(!a.K.get(tt, !1) && q.isPlatformEmbedded && (t || n))) return !1;
                      let e = !1;
                      return (
                          null != ti && (e = tl.includes(ti)),
                          !!e &&
                              (z.Z.showNotification(
                                  i(95045),
                                  K.intl.string(K.t.VSgOVl),
                                  K.intl.string(K.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, m.uL)(B.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          a.K.set(tt, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove(tt), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: n, guilds: i } = t;
                      (ti = n), te.clear(), i.forEach((t) => t.stage_instances.forEach((t) => te.add(t.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: n } = t;
                      if (ta()) return !1;
                      let i = n.message;
                      if (null == i || null == i.author) return !1;
                      let e = w.Z.getChannel(n.saveData.channelId);
                      if (null == e) return !1;
                      let { icon: l, body: o } = (0, H.Xi)(e, i, i.author);
                      z.Z.showNotification(
                          l,
                          K.intl.string(K.t.IjZJBw),
                          o,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, v.Z)(B.Z5c.CHANNEL(null == e ? void 0 : e.getGuildId(), e.id, i.id));
                              }
                          }
                      );
                  }
              }
    );
