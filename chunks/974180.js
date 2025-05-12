n.d(e, {
    Ay: () => tu,
    yk: () => ts
}),
    n(388685),
    n(539854);
var i,
    l = n(392711),
    a = n(149765),
    r = n(442837),
    o = n(524437),
    u = n(433517),
    s = n(570140),
    d = n(493683),
    c = n(475179),
    f = n(749210),
    g = n(292556),
    E = n(287734),
    _ = n(232567),
    T = n(579806),
    N = n(761781),
    S = n(728345),
    p = n(812206),
    I = n(802098),
    C = n(933557),
    h = n(456269),
    Z = n(890022),
    A = n(688907),
    m = n(15274),
    v = n(754688),
    y = n(336197),
    P = n(355298),
    D = n(786761),
    U = n(601992),
    R = n(864060),
    O = n(691294),
    L = n(11352),
    b = n(671105),
    M = n(106371),
    G = n(703656),
    k = n(359110),
    w = n(922482),
    V = n(427679),
    F = n(488131),
    H = n(695346),
    W = n(592125),
    Y = n(430824),
    x = n(375954),
    z = n(292959),
    q = n(496675),
    X = n(699516),
    B = n(944486),
    J = n(885110),
    j = n(246946),
    K = n(594174),
    $ = n(979651),
    Q = n(5192),
    tt = n(912101),
    te = n(358085),
    tn = n(74538),
    ti = n(51144),
    tl = n(981631),
    ta = n(765305),
    tr = n(388032);
function to(t, e, n) {
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
let tu = 'message1',
    ts = 0.4,
    td = (null === T.Z || void 0 === T.Z ? void 0 : T.Z.features.supports('notifications')) ? 20 : 1,
    tc = 'discord_dismissed_notification_shown',
    tf = document.hasFocus(),
    tg = null,
    tE = new Set(),
    t_ = {},
    tT = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    tN = new (class {
        track(t, e) {
            let n = this._channels[t];
            for (null == n && ((n = []), (this._channels[t] = n)), n.push(e); n.length > td; ) {
                let t = n.shift();
                null != t && null != t.close && t.close();
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e && (delete this._channels[t], e.forEach((t) => t.close()));
        }
        constructor() {
            to(this, '_channels', {});
        }
    })();
async function tS(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = new Set(),
        i = (0, Z.W7)(t),
        a = (0, A.MH)();
    e &&
        (i.forEach((t) => {
            let { activities: e, user: i } = t;
            if (0 === e.length || X.Z.isIgnored(i.id)) return !1;
            let l = tp(e);
            a === o.Tv.ONLY_GAMES_PLAYED && (l = l.filter((t) => N.Z.currentUserApplicationIds.has(t))), (n = new Set([...n, ...l]));
        }),
        await S.ZP.fetchApplications([...n], !1)),
        i.forEach((t) => {
            let { activities: n, user: i, guildId: a } = t;
            if (0 === n.length || X.Z.isIgnored(i.id)) return !1;
            !(function (t, e, n, i) {
                let a = tI(e);
                if (0 === t.length && 0 === a.length) return;
                let r = (0, l.difference)(t, a).filter((t) => null != t && null == t_[e][t]);
                (0, l.difference)(a, t)
                    .filter((t) => null != t && t_[e][t] === i)
                    .forEach((t) => {
                        delete t_[e][t];
                    }),
                    r.forEach((t) => {
                        if ((null == t_[e] ? (t_[e] = { [t]: i }) : null == t_[e][t] && (t_[e][t] = i), n)) {
                            var l, a;
                            let n = p.Z.getApplication(t);
                            null != n &&
                                ((l = n),
                                (a = e),
                                (0, _.PR)(a).then((t) => {
                                    var e;
                                    (0, O.m)(t.getAvatarURL(null, 64), null != (e = l.getIconURL(64)) ? e : null).then((e) => {
                                        tt.Z.showNotification(
                                            e,
                                            tr.intl.formatToPlainString(tr.t.SRy0Cg, { username: Q.ZP.getName(null, null, t) }),
                                            l.name,
                                            { notif_type: 'game_notif' },
                                            {
                                                onClick: () => {
                                                    d.Z.openPrivateChannel({ recipientIds: a });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                    });
                                }));
                        }
                    }),
                    0 === tI(e).length && delete t_[e];
            })(tp(n), i.id, e, null != a ? a : 0);
        });
}
function tp(t) {
    return t.filter((t) => t.type === tl.IIU.PLAYING && null != t.application_id).map((t) => t.application_id);
}
function tI(t) {
    var e;
    return Object.keys(null != (e = t_[t]) ? e : {});
}
function tC() {
    return !!(z.Z.getDesktopType() === tl.qrD.NEVER || J.Z.getStatus() === tl.Skl.DND || H.QZ.getSetting());
}
function th(t) {
    return null != $.Z.getVoiceStateForChannel(t);
}
class tZ extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(K.default, W.Z, z.Z, Y.Z, V.Z, X.Z, q.Z, $.Z, P.Z);
    }
}
to(tZ, 'displayName', 'NotificationStore'),
    new tZ(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      e !== tl.$Ab.ENABLED ||
                          te.isPlatformEmbedded ||
                          tt.Z.showNotification(
                              n(185672),
                              tr.intl.string(tr.t.VSgOVl),
                              tr.intl.string(tr.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: tu,
                                  volume: ts,
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
                      return !tC() && (tt.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tf = t.focused)) {
                          let t = B.Z.getChannelId();
                          null != t && tN.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, a, r;
                      let { channelId: o, message: u, optimistic: d } = t;
                      if (d) return !1;
                      let f = W.Z.getChannel(o),
                          E = K.default.getUser(null == (e = u.author) ? void 0 : e.id),
                          _ = K.default.getCurrentUser();
                      if (null == f || null == E) return !1;
                      let T = (0, R.eF)(u, o, !tf),
                          N = z.Z.getNotifyMessagesInSelectedChannel() && (0, R.N_)(u, o);
                      if ((!T && !N) || (u.type === tl.uaV.CHANGELOG && (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let S = !z.Z.isSoundDisabled(tu),
                          p = tn.ZP.canUseCustomNotificationSounds(_),
                          C = L.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          h = p && C && S ? (null != (a = (0, b.bb)(null != (l = f.guild_id) ? l : tl.aIL, o)) ? a : (0, b.iD)(f.guild_id)) : void 0;
                      if ((N && (S && tt.Z.playNotificationSound('message3', 0.4, h), !tf)) || !T) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: m } = n(486016);
                      if (null != Z.getFocusedPID() && !A.isNotificationDisabled(m.TEXT_CHAT) && !j.Z.disableNotifications) return !1;
                      let { icon: v, title: y, body: P } = (0, R.Xi)(f, u, E);
                      if (
                          (s.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: u,
                              icon: v,
                              title: y,
                              body: P
                          }),
                          (0, U.R)(u, f.guild_id),
                          z.Z.getDesktopType() === tl.qrD.NEVER)
                      )
                          return S && tt.Z.playNotificationSound(tu, ts, h), !1;
                      let O = null != (r = x.Z.getMessage(o, u.id)) ? r : (0, D.e5)(u);
                      tt.Z.showNotification(
                          v,
                          y,
                          P,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null == (i = u.author) ? void 0 : i.id,
                              message_id: u.id,
                              message_type: u.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: u.id,
                              sound: S ? tu : void 0,
                              soundpack: h,
                              volume: ts,
                              onClick() {
                                  (0, k.Kh)(f.id), (f.type === tl.d4z.GUILD_VOICE || f.type === tl.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: O
                          }
                      ).then((t) => {
                          null != t && tN.track(f.id, t);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return null != e && tN.clearChannel(e), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return tN.clearChannel(e), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (tC() || n.type !== tl.IIU.PLAYING) return !1;
                      {
                          let t = K.default.getUser(e);
                          if (null == t) return !1;
                          let i = ti.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              r = tr.intl.string(tr.t.XoTWsL),
                              o = tr.intl.formatToPlainString(tr.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              tt.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: tl.IIU.PLAYING,
                                      notif_user_id: e,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          d.Z.openPrivateChannel({ recipientIds: e });
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
                      if (tC()) return;
                      let n = K.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = Y.Z.getGuild(a),
                          s = W.Z.getChannel(l),
                          d = V.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          tt.Z.showNotification(
                              u.getIconURL(128),
                              s.name,
                              tr.intl.formatToPlainString(tr.t.sqnsSE, {
                                  channelName: (0, C.F6)(s, K.default, X.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (tC() || !e.send_start_notification || th(e.channel_id)) return !1;
                      let n = K.default.getCurrentUser(),
                          i = Y.Z.getGuild(e.guild_id),
                          l = W.Z.getChannel(e.channel_id),
                          r = K.default.getUser(e.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, R.LL)(n, r, l) || !q.Z.can(a.$e(tl.Plq.CONNECT, tl.Plq.VIEW_CHANNEL), l) || tE.has(e.id)) return !1;
                      tE.add(e.id),
                          tt.Z.showNotification(
                              i.getIconURL(128),
                              tr.intl.formatToPlainString(tr.t.bZ4OkZ, { guildName: i.name }),
                              tr.intl.formatToPlainString(tr.t.qTelnJ, {
                                  username: Q.ZP.getName(i.id, l.id, r),
                                  topic: e.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: l.id
                              },
                              {
                                  onClick() {
                                      (0, w.Cq)(l);
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: e } = t;
                      tE.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (tC() || null == e.notification_type) return !1;
                      e.notification_type === ta.sy.EVENT_START &&
                          (e.entity_type === ta.WX.STAGE_INSTANCE || e.entity_type === ta.WX.VOICE
                              ? (function (t) {
                                    if (tC()) return;
                                    let e = t.channel_id;
                                    if (null == e || th(e)) return;
                                    let n = K.default.getCurrentUser(),
                                        i = Y.Z.getGuild(t.guild_id),
                                        l = W.Z.getChannel(t.channel_id),
                                        r = K.default.getUser(t.host_id);
                                    if (null != n && null != l && null != i && null != r && q.Z.can(a.$e(tl.Plq.CONNECT, tl.Plq.VIEW_CHANNEL), l))
                                        tt.Z.showNotification(
                                            i.getIconURL(128),
                                            tr.intl.formatToPlainString(tr.t.bOu6Wl, { guildName: i.name }),
                                            tr.intl.formatToPlainString(tr.t.GV9L8v, {
                                                topic: t.name,
                                                username: Q.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    t.entity_type === ta.WX.STAGE_INSTANCE && (0, w.Cq)(l), t.entity_type === ta.WX.VOICE && E.default.selectVoiceChannel(l.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e)
                              : e.entity_type === ta.WX.EXTERNAL &&
                                (function (t) {
                                    if (tC()) return;
                                    let e = K.default.getCurrentUser(),
                                        n = Y.Z.getGuild(t.guild_id);
                                    if (null != e && null != n)
                                        tt.Z.showNotification(
                                            n.getIconURL(128),
                                            tr.intl.formatToPlainString(tr.t.bOu6Wl, { guildName: n.name }),
                                            tr.intl.formatToPlainString(tr.t.mYyaRE, { topic: t.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    f.Z.transitionToGuildSync(t.guild_id), (0, m.bO)({ eventId: t.id });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e));
                  },
                  THREAD_CREATE: function (t) {
                      var e;
                      let { channel: n, isNewlyCreated: i } = t;
                      if (tC()) return !1;
                      let l = W.Z.getChannel(n.parent_id);
                      if (null == l || !tl.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, R.FI)(n, l, !tf)) return !1;
                      let { author: a, user: r } = (0, h.MC)(n);
                      if (null == r) return !1;
                      let o = Y.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = tr.intl.formatToPlainString(tr.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = tr.intl.formatToPlainString(tr.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      tt.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: r.id
                          },
                          {
                              onClick() {
                                  (0, F.ok)(n);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let e,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                      if (tC() || null == i || null == l || null == r) return !1;
                      let u = 'reactions_push_notification' === r;
                      if (u) {
                          var s;
                          let { enableInAppNotifications: t } = M.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!t) return !1;
                          let n =
                              null != (s = (0, v.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (e = n.channelId) || null == n.guildId || (B.Z.getCurrentlySelectedChannelId() === e && tf)) return !1;
                      }
                      tt.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != a && ((0, y.Z)(a), g.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: u
                          }
                      ).then((t) => {
                          null != t && null != e && tN.track(e, t);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, te.isWindows)(),
                          e = (0, te.isLinux)();
                      if (!(!u.K.get(tc, !1) && te.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tg && (i = tT.includes(tg)),
                          !!i &&
                              (tt.Z.showNotification(
                                  n(95045),
                                  tr.intl.string(tr.t.VSgOVl),
                                  tr.intl.string(tr.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, G.uL)(tl.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          u.K.set(tc, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return u.K.remove(tc), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n, presences: i } = t;
                      (tg = e), tE.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tE.add(t.id))), (0, Z.uw)('NotificationStore') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tS(i, !1);
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (tC()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = W.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, R.Xi)(i, n, n.author);
                      tt.Z.showNotification(
                          l,
                          tr.intl.string(tr.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, y.Z)(tl.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  PRESENCE_UPDATES: function (t) {
                      let { updates: e } = t;
                      (0, Z.uw)('handlePresenceUpdates') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tS(e);
                  }
              }
    );
