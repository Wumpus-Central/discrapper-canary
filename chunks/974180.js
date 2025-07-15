(n.d(e, {
    Ay: () => tE,
    yk: () => t_
}),
    n(388685),
    n(539854));
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
    p = n(579806),
    T = n(761781),
    S = n(728345),
    N = n(812206),
    I = n(802098),
    h = n(933557),
    C = n(456269),
    Z = n(890022),
    A = n(688907),
    v = n(15274),
    m = n(754688),
    y = n(336197),
    P = n(355298),
    O = n(786761),
    D = n(601992),
    U = n(864060),
    R = n(687272),
    b = n(691294),
    k = n(11352),
    L = n(671105),
    M = n(106371),
    w = n(703656),
    G = n(359110),
    V = n(922482),
    F = n(427679),
    H = n(488131),
    W = n(695346),
    x = n(601964),
    Y = n(592125),
    q = n(430824),
    z = n(375954),
    B = n(292959),
    X = n(496675),
    j = n(306680),
    J = n(699516),
    Q = n(944486),
    K = n(885110),
    $ = n(246946),
    tt = n(594174),
    te = n(979651),
    tn = n(626135),
    ti = n(70956),
    tl = n(5192),
    ta = n(358085),
    tr = n(74538),
    to = n(51144),
    tu = n(654769),
    ts = n(981631),
    td = n(765305),
    tc = n(388032);
function tf(t, e, n) {
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
function tg(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            i.forEach(function (e) {
                tf(t, e, n[e]);
            }));
    }
    return t;
}
let tE = 'message1',
    t_ = 0.4,
    tp = (null === p.Z || void 0 === p.Z ? void 0 : p.Z.features.supports('notifications')) ? 20 : 1,
    tT = 'discord_dismissed_notification_shown',
    tS = document.hasFocus(),
    tN = null,
    tI = new Set(),
    th = {},
    tC = {},
    tZ = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    tA = new (class {
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)),
                    i.push({
                        notification: e,
                        trackingProps: n
                    });
                i.length > tp;

            ) {
                var l;
                let t = i.shift();
                (null == t || null == (l = t.notification) ? void 0 : l.close) != null && (t.notification.close(), tn.default.track(ts.rMx.NOTIFICATION_ACTION, tg({ action: 'REMOVE' }, t.trackingProps)));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    (e.close(), tn.default.track(ts.rMx.NOTIFICATION_ACTION, tg({ action: 'ACK' }, n)));
                }));
        }
        constructor() {
            tf(this, '_channels', {});
        }
    })();
function tv(t, e) {
    let { gameActivityNotificationType: n, excludeSteamGames: i } = e,
        l = t;
    i &&
        (l = t.filter((t) => {
            var e;
            return null == (e = t.metadata) || !e.distributor || t.metadata.distributor !== ts.GQo.STEAM;
        }));
    let a = l.filter((t) => t.type === ts.IIU.PLAYING && null != t.application_id).map((t) => t.application_id);
    return (n === o.Tv.ONLY_GAMES_PLAYED && (a = a.filter((t) => T.Z.currentUserApplicationIds.has(t))), a);
}
async function tm(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, A.MH)(),
        i = (0, A.j4)(),
        a = (0, Z.dm)(t);
    if (e) {
        let t = new Set();
        (a.forEach((e) => {
            let { activities: l, user: a } = e;
            if (0 === l.length || J.Z.isIgnored(a.id)) return;
            let r = tv(l, {
                gameActivityNotificationType: n,
                excludeSteamGames: i
            });
            0 !== r.length && (t = new Set([...t, ...r]));
        }),
            await S.ZP.fetchApplications([...t], !1));
    }
    a.forEach((t) => {
        let { activities: a, user: r, guildId: o } = t;
        !(function (t, e, n, i) {
            let a = ty(e);
            if (0 === t.length && 0 === a.length) return;
            let r = (0, l.difference)(t, a).filter((t) => {
                var n;
                return null != t && (null == (n = th[e]) ? void 0 : n[t]) == null;
            });
            ((0, l.difference)(a, t)
                .filter((t) => {
                    var n;
                    return null != t && (null == (n = th[e]) ? void 0 : n[t]) === i;
                })
                .forEach((t) => {
                    delete th[e][t];
                }),
                r.forEach((t) => {
                    var l, a;
                    if ((null == th[e] ? (th[e] = { [t]: i }) : null == th[e][t] && (th[e][t] = i), !n || tO())) return;
                    let r = null != (a = null == (l = tC[e]) ? void 0 : l[t]) ? a : 0;
                    if (Date.now() - r < ti.Z.Millis.HOUR) return;
                    let o = N.Z.getApplication(t);
                    null != o && (null == tC[e] && (tC[e] = {}), (tC[e][t] = Date.now()), tP(o, e));
                }),
                0 === ty(e).length && delete th[e]);
        })(
            tv(a, {
                gameActivityNotificationType: n,
                excludeSteamGames: i
            }),
            r.id,
            e,
            null != o ? o : 0
        );
    });
}
function ty(t) {
    var e;
    return Object.keys(null != (e = th[t]) ? e : {});
}
async function tP(t, e) {
    var n;
    let i = await (0, _.PR)(e),
        l = await (0, b.m)(i.getAvatarURL(null, 64), null != (n = t.getIconURL(64)) ? n : null);
    tu.Z.showNotification(
        l,
        tc.intl.formatToPlainString(tc.t.kO0pfX, {
            name: tl.ZP.getName(null, null, i),
            activity: t.name
        }),
        '',
        { notif_type: 'game_notif' },
        {
            onClick: (t) => {
                d.Z.openPrivateChannel({ recipientIds: e });
            },
            isUserAvatar: !1,
            actions: [
                {
                    content: tc.intl.string(tc.t['E+yYpq']),
                    args: 'open_message_action'
                }
            ]
        }
    );
}
function tO() {
    return !!(B.Z.getDesktopType() === ts.qrD.NEVER || K.Z.getStatus() === ts.Skl.DND || W.QZ.getSetting());
}
function tD(t) {
    return null != te.Z.getVoiceStateForChannel(t);
}
class tU extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(tt.default, Y.Z, B.Z, q.Z, F.Z, J.Z, X.Z, te.Z, P.Z);
    }
}
(tf(tU, 'displayName', 'NotificationStore'),
    new tU(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      if (e === ts.$Ab.ENABLED && !ta.isPlatformEmbedded) {
                          let t = !(0, R.QU)('NotificationStore.handleSetHavePermission');
                          tu.Z.showNotification(
                              n(910653),
                              tc.intl.string(tc.t.VSgOVl),
                              tc.intl.string(tc.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: t,
                                  sound: tE,
                                  volume: t_,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1
                              }
                          );
                      }
                  },
                  NOTIFICATION_CREATE: function (t) {
                      let { icon: e, title: n, body: i, trackingProps: l, options: a } = t;
                      return !tO() && (tu.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tS = t.focused)) {
                          let t = Q.Z.getChannelId();
                          null != t && tA.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, a, r;
                      let { channelId: o, message: u, optimistic: d } = t;
                      if (d) return !1;
                      let f = Y.Z.getChannel(o),
                          E = tt.default.getUser(null == (e = u.author) ? void 0 : e.id),
                          _ = tt.default.getCurrentUser();
                      if (null == f || null == E || null == _) return !1;
                      let p = (0, U.eF)(u, o, !tS),
                          T = B.Z.getNotifyMessagesInSelectedChannel() && (0, U.N_)(u, o);
                      if ((!p && !T) || (u.type === ts.uaV.CHANGELOG && (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let S = !B.Z.isSoundDisabled(tE),
                          N = tr.ZP.canUseCustomNotificationSounds(_),
                          h = k.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          C = N && h && S ? (null != (a = (0, L.bb)(null != (l = f.guild_id) ? l : ts.aIL, o)) ? a : (0, L.iD)(f.guild_id)) : void 0;
                      if ((T && (S && tu.Z.playNotificationSound('message3', 0.4, C), !tS)) || !p) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: v } = n(486016);
                      if (null != Z.getFocusedPID() && !A.isNotificationDisabled(v.TEXT_CHAT) && !$.Z.disableNotifications) return !1;
                      let { icon: m, title: y, body: P } = (0, U.Xi)(f, u, E),
                          b = !(0, R._x)('NotificationStore.handleMessage', null == _ ? void 0 : _.id);
                      if (
                          (s.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: u,
                              icon: m,
                              title: y,
                              body: P
                          }),
                          (0, D.R)(u, f.guild_id),
                          B.Z.getDesktopType() === ts.qrD.NEVER)
                      )
                          return (S && tu.Z.playNotificationSound(tE, t_, C), !1);
                      let M = null != (r = z.Z.getMessage(o, u.id)) ? r : (0, O.e5)(u);
                      tu.Z.showNotification(
                          m,
                          y,
                          P,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null == (i = u.author) ? void 0 : i.id,
                              message_id: u.id,
                              message_type: u.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id,
                              badge: (0, j.Ex)(M, _)
                          },
                          {
                              omitViewTracking: b,
                              tag: u.id,
                              sound: S ? tE : void 0,
                              soundpack: C,
                              volume: t_,
                              onClick() {
                                  ((0, G.Kh)(f.id), (f.type === ts.d4z.GUILD_VOICE || f.type === ts.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                              messageRecord: M
                          }
                      ).then((t) => {
                          null != t && tA.track(f.id, t.notification, t.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return (null != e && tA.clearChannel(e), !1);
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return (tA.clearChannel(e), !1);
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (tO() || n.type !== ts.IIU.PLAYING) return !1;
                      {
                          let t = tt.default.getUser(e);
                          if (null == t) return !1;
                          let i = to.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              r = tc.intl.string(tc.t.XoTWsL),
                              o = tc.intl.formatToPlainString(tc.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              tu.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: ts.IIU.PLAYING,
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
                      if (tO()) return;
                      let n = tt.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = q.Z.getGuild(a),
                          s = Y.Z.getChannel(l),
                          d = F.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          tu.Z.showNotification(
                              (0, x.EB)(u, 128),
                              s.name,
                              tc.intl.formatToPlainString(tc.t.sqnsSE, {
                                  channelName: (0, h.F6)(s, tt.default, J.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (tO() || !e.send_start_notification || tD(e.channel_id)) return !1;
                      let n = tt.default.getCurrentUser(),
                          i = q.Z.getGuild(e.guild_id),
                          l = Y.Z.getChannel(e.channel_id),
                          r = tt.default.getUser(e.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, U.LL)(n, r, l) || !X.Z.can(a.$e(ts.Plq.CONNECT, ts.Plq.VIEW_CHANNEL), l) || tI.has(e.id)) return !1;
                      (tI.add(e.id),
                          tu.Z.showNotification(
                              (0, x.EB)(i, 128),
                              tc.intl.formatToPlainString(tc.t.bZ4OkZ, { guildName: i.name }),
                              tc.intl.formatToPlainString(tc.t.qTelnJ, {
                                  username: tl.ZP.getName(i.id, l.id, r),
                                  topic: e.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: l.id
                              },
                              {
                                  onClick() {
                                      (0, V.Cq)(l);
                                  },
                                  isUserAvatar: !1
                              }
                          ));
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: e } = t;
                      tI.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (tO() || null == e.notification_type) return !1;
                      e.notification_type === td.sy.EVENT_START &&
                          (e.entity_type === td.WX.STAGE_INSTANCE || e.entity_type === td.WX.VOICE
                              ? (function (t) {
                                    if (tO()) return;
                                    let e = t.channel_id;
                                    if (null == e || tD(e)) return;
                                    let n = tt.default.getCurrentUser(),
                                        i = q.Z.getGuild(t.guild_id),
                                        l = Y.Z.getChannel(t.channel_id),
                                        r = tt.default.getUser(t.host_id);
                                    if (null != n && null != l && null != i && null != r && X.Z.can(a.$e(ts.Plq.CONNECT, ts.Plq.VIEW_CHANNEL), l))
                                        tu.Z.showNotification(
                                            (0, x.EB)(i, 128),
                                            tc.intl.formatToPlainString(tc.t.bOu6Wl, { guildName: i.name }),
                                            tc.intl.formatToPlainString(tc.t.GV9L8v, {
                                                topic: t.name,
                                                username: tl.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    (t.entity_type === td.WX.STAGE_INSTANCE && (0, V.Cq)(l), t.entity_type === td.WX.VOICE && E.default.selectVoiceChannel(l.id));
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e)
                              : e.entity_type === td.WX.EXTERNAL &&
                                (function (t) {
                                    if (tO()) return;
                                    let e = tt.default.getCurrentUser(),
                                        n = q.Z.getGuild(t.guild_id);
                                    if (null != e && null != n)
                                        tu.Z.showNotification(
                                            (0, x.EB)(n, 128),
                                            tc.intl.formatToPlainString(tc.t.bOu6Wl, { guildName: n.name }),
                                            tc.intl.formatToPlainString(tc.t.mYyaRE, { topic: t.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    (f.Z.transitionToGuildSync(t.guild_id), (0, v.bO)({ eventId: t.id }));
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e));
                  },
                  THREAD_CREATE: function (t) {
                      var e;
                      let { channel: n, isNewlyCreated: i } = t;
                      if (tO()) return !1;
                      let l = Y.Z.getChannel(n.parent_id);
                      if (null == l || !ts.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, U.FI)(n, l, !tS)) return !1;
                      let { author: a, user: r } = (0, C.MC)(n);
                      if (null == r) return !1;
                      let o = q.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = tc.intl.formatToPlainString(tc.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = tc.intl.formatToPlainString(tc.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      tu.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: r.id
                          },
                          {
                              onClick() {
                                  (0, H.ok)(n);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let e,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                      if (tO() || null == i || null == l || null == r) return !1;
                      let u = 'reactions_push_notification' === r;
                      if (u) {
                          var s;
                          let { enableInAppNotifications: t } = M.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!t) return !1;
                          let n =
                              null != (s = (0, m.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (e = n.channelId) || null == n.guildId || (Q.Z.getCurrentlySelectedChannelId() === e && tS)) return !1;
                      }
                      tu.Z.showNotification(
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
                          null != t && null != e && tA.track(e, t.notification, t.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, ta.isWindows)(),
                          e = (0, ta.isLinux)();
                      if (!(!u.K.get(tT, !1) && ta.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tN && (i = tZ.includes(tN)),
                          !!i &&
                              (tu.Z.showNotification(
                                  n(95045),
                                  tc.intl.string(tc.t.VSgOVl),
                                  tc.intl.string(tc.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, w.uL)(ts.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          u.K.set(tT, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return (u.K.remove(tT), !1);
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n, presences: i } = t;
                      ((tN = e), tI.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tI.add(t.id))), (0, Z.uw)('NotificationStore') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tm(i, !1));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (tO()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = Y.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, U.Xi)(i, n, n.author);
                      tu.Z.showNotification(
                          l,
                          tc.intl.string(tc.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, y.Z)(ts.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  PRESENCE_UPDATES: function (t) {
                      let { updates: e } = t;
                      (0, Z.uw)('handlePresenceUpdates') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tm(e);
                  }
              }
    ));
