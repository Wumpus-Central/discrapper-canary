(n.d(e, {
    Ay: () => tf,
    yk: () => tg
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
    T = n(579806),
    p = n(761781),
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
    U = n(601992),
    D = n(864060),
    R = n(687272),
    b = n(691294),
    L = n(11352),
    k = n(671105),
    M = n(106371),
    w = n(703656),
    G = n(359110),
    V = n(922482),
    F = n(427679),
    H = n(488131),
    W = n(695346),
    x = n(592125),
    Y = n(430824),
    z = n(375954),
    q = n(292959),
    X = n(496675),
    B = n(306680),
    j = n(699516),
    J = n(944486),
    Q = n(885110),
    K = n(246946),
    $ = n(594174),
    tt = n(979651),
    te = n(626135),
    tn = n(5192),
    ti = n(358085),
    tl = n(74538),
    ta = n(51144),
    tr = n(654769),
    to = n(981631),
    tu = n(765305),
    ts = n(388032);
function td(t, e, n) {
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
function tc(t) {
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
                td(t, e, n[e]);
            }));
    }
    return t;
}
let tf = 'message1',
    tg = 0.4,
    tE = (null === T.Z || void 0 === T.Z ? void 0 : T.Z.features.supports('notifications')) ? 20 : 1,
    t_ = 'discord_dismissed_notification_shown',
    tT = document.hasFocus(),
    tp = null,
    tS = new Set(),
    tN = {},
    tI = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    th = new (class {
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)),
                    i.push({
                        notification: e,
                        trackingProps: n
                    });
                i.length > tE;

            ) {
                var l;
                let t = i.shift();
                (null == t || null == (l = t.notification) ? void 0 : l.close) != null && (t.notification.close(), te.default.track(to.rMx.NOTIFICATION_ACTION, tc({ action: 'REMOVE' }, t.trackingProps)));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    (e.close(), te.default.track(to.rMx.NOTIFICATION_ACTION, tc({ action: 'ACK' }, n)));
                }));
        }
        constructor() {
            td(this, '_channels', {});
        }
    })();
function tC(t, e) {
    let { gameActivityNotificationType: n, excludeSteamGames: i } = e,
        l = t;
    i &&
        (l = t.filter((t) => {
            var e;
            return null == (e = t.metadata) || !e.distributor || t.metadata.distributor !== to.GQo.STEAM;
        }));
    let a = l.filter((t) => t.type === to.IIU.PLAYING && null != t.application_id).map((t) => t.application_id);
    return (n === o.Tv.ONLY_GAMES_PLAYED && (a = a.filter((t) => p.Z.currentUserApplicationIds.has(t))), a);
}
async function tZ(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, A.MH)(),
        i = (0, A.j4)(),
        a = (0, Z.X)(t);
    if (e) {
        let t = new Set();
        (a.forEach((e) => {
            let { activities: l, user: a } = e;
            if (0 === l.length || j.Z.isIgnored(a.id)) return;
            let r = tC(l, {
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
            let a = tA(e);
            if (0 === t.length && 0 === a.length) return;
            let r = (0, l.difference)(t, a).filter((t) => {
                var n;
                return null != t && (null == (n = tN[e]) ? void 0 : n[t]) == null;
            });
            ((0, l.difference)(a, t)
                .filter((t) => {
                    var n;
                    return null != t && (null == (n = tN[e]) ? void 0 : n[t]) === i;
                })
                .forEach((t) => {
                    delete tN[e][t];
                }),
                r.forEach((t) => {
                    if ((null == tN[e] ? (tN[e] = { [t]: i }) : null == tN[e][t] && (tN[e][t] = i), n)) {
                        var l, a;
                        let n = N.Z.getApplication(t);
                        null != n &&
                            ((l = n),
                            (a = e),
                            (0, _.PR)(a).then((t) => {
                                var e;
                                (0, b.m)(t.getAvatarURL(null, 64), null != (e = l.getIconURL(64)) ? e : null).then((e) => {
                                    tr.Z.showNotification(
                                        e,
                                        ts.intl.formatToPlainString(ts.t.SRy0Cg, { username: tn.ZP.getName(null, null, t) }),
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
                0 === tA(e).length && delete tN[e]);
        })(
            tC(a, {
                gameActivityNotificationType: n,
                excludeSteamGames: i
            }),
            r.id,
            e,
            null != o ? o : 0
        );
    });
}
function tA(t) {
    var e;
    return Object.keys(null != (e = tN[t]) ? e : {});
}
function tv() {
    return !!(q.Z.getDesktopType() === to.qrD.NEVER || Q.Z.getStatus() === to.Skl.DND || W.QZ.getSetting());
}
function tm(t) {
    return null != tt.Z.getVoiceStateForChannel(t);
}
class ty extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor($.default, x.Z, q.Z, Y.Z, F.Z, j.Z, X.Z, tt.Z, P.Z);
    }
}
(td(ty, 'displayName', 'NotificationStore'),
    new ty(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      if (e === to.$Ab.ENABLED && !ti.isPlatformEmbedded) {
                          let t = !(0, R.QU)('NotificationStore.handleSetHavePermission');
                          tr.Z.showNotification(
                              n(910653),
                              ts.intl.string(ts.t.VSgOVl),
                              ts.intl.string(ts.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: t,
                                  sound: tf,
                                  volume: tg,
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
                      return !tv() && (tr.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tT = t.focused)) {
                          let t = J.Z.getChannelId();
                          null != t && th.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, a, r;
                      let { channelId: o, message: u, optimistic: d } = t;
                      if (d) return !1;
                      let f = x.Z.getChannel(o),
                          E = $.default.getUser(null == (e = u.author) ? void 0 : e.id),
                          _ = $.default.getCurrentUser();
                      if (null == f || null == E || null == _) return !1;
                      let T = (0, D.eF)(u, o, !tT),
                          p = q.Z.getNotifyMessagesInSelectedChannel() && (0, D.N_)(u, o);
                      if ((!T && !p) || (u.type === to.uaV.CHANGELOG && (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let S = !q.Z.isSoundDisabled(tf),
                          N = tl.ZP.canUseCustomNotificationSounds(_),
                          h = L.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          C = N && h && S ? (null != (a = (0, k.bb)(null != (l = f.guild_id) ? l : to.aIL, o)) ? a : (0, k.iD)(f.guild_id)) : void 0;
                      if ((p && (S && tr.Z.playNotificationSound('message3', 0.4, C), !tT)) || !T) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: v } = n(486016);
                      if (null != Z.getFocusedPID() && !A.isNotificationDisabled(v.TEXT_CHAT) && !K.Z.disableNotifications) return !1;
                      let { icon: m, title: y, body: P } = (0, D.Xi)(f, u, E),
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
                          (0, U.R)(u, f.guild_id),
                          q.Z.getDesktopType() === to.qrD.NEVER)
                      )
                          return (S && tr.Z.playNotificationSound(tf, tg, C), !1);
                      let M = null != (r = z.Z.getMessage(o, u.id)) ? r : (0, O.e5)(u);
                      tr.Z.showNotification(
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
                              badge: (0, B.Ex)(M, _)
                          },
                          {
                              omitViewTracking: b,
                              tag: u.id,
                              sound: S ? tf : void 0,
                              soundpack: C,
                              volume: tg,
                              onClick() {
                                  ((0, G.Kh)(f.id), (f.type === to.d4z.GUILD_VOICE || f.type === to.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                              messageRecord: M
                          }
                      ).then((t) => {
                          null != t && th.track(f.id, t.notification, t.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return (null != e && th.clearChannel(e), !1);
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return (th.clearChannel(e), !1);
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (tv() || n.type !== to.IIU.PLAYING) return !1;
                      {
                          let t = $.default.getUser(e);
                          if (null == t) return !1;
                          let i = ta.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              r = ts.intl.string(ts.t.XoTWsL),
                              o = ts.intl.formatToPlainString(ts.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              tr.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: to.IIU.PLAYING,
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
                      if (tv()) return;
                      let n = $.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = Y.Z.getGuild(a),
                          s = x.Z.getChannel(l),
                          d = F.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          tr.Z.showNotification(
                              u.getIconURL(128),
                              s.name,
                              ts.intl.formatToPlainString(ts.t.sqnsSE, {
                                  channelName: (0, h.F6)(s, $.default, j.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (tv() || !e.send_start_notification || tm(e.channel_id)) return !1;
                      let n = $.default.getCurrentUser(),
                          i = Y.Z.getGuild(e.guild_id),
                          l = x.Z.getChannel(e.channel_id),
                          r = $.default.getUser(e.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, D.LL)(n, r, l) || !X.Z.can(a.$e(to.Plq.CONNECT, to.Plq.VIEW_CHANNEL), l) || tS.has(e.id)) return !1;
                      (tS.add(e.id),
                          tr.Z.showNotification(
                              i.getIconURL(128),
                              ts.intl.formatToPlainString(ts.t.bZ4OkZ, { guildName: i.name }),
                              ts.intl.formatToPlainString(ts.t.qTelnJ, {
                                  username: tn.ZP.getName(i.id, l.id, r),
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
                      tS.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (tv() || null == e.notification_type) return !1;
                      e.notification_type === tu.sy.EVENT_START &&
                          (e.entity_type === tu.WX.STAGE_INSTANCE || e.entity_type === tu.WX.VOICE
                              ? (function (t) {
                                    if (tv()) return;
                                    let e = t.channel_id;
                                    if (null == e || tm(e)) return;
                                    let n = $.default.getCurrentUser(),
                                        i = Y.Z.getGuild(t.guild_id),
                                        l = x.Z.getChannel(t.channel_id),
                                        r = $.default.getUser(t.host_id);
                                    if (null != n && null != l && null != i && null != r && X.Z.can(a.$e(to.Plq.CONNECT, to.Plq.VIEW_CHANNEL), l))
                                        tr.Z.showNotification(
                                            i.getIconURL(128),
                                            ts.intl.formatToPlainString(ts.t.bOu6Wl, { guildName: i.name }),
                                            ts.intl.formatToPlainString(ts.t.GV9L8v, {
                                                topic: t.name,
                                                username: tn.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    (t.entity_type === tu.WX.STAGE_INSTANCE && (0, V.Cq)(l), t.entity_type === tu.WX.VOICE && E.default.selectVoiceChannel(l.id));
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e)
                              : e.entity_type === tu.WX.EXTERNAL &&
                                (function (t) {
                                    if (tv()) return;
                                    let e = $.default.getCurrentUser(),
                                        n = Y.Z.getGuild(t.guild_id);
                                    if (null != e && null != n)
                                        tr.Z.showNotification(
                                            n.getIconURL(128),
                                            ts.intl.formatToPlainString(ts.t.bOu6Wl, { guildName: n.name }),
                                            ts.intl.formatToPlainString(ts.t.mYyaRE, { topic: t.name }),
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
                      if (tv()) return !1;
                      let l = x.Z.getChannel(n.parent_id);
                      if (null == l || !to.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, D.FI)(n, l, !tT)) return !1;
                      let { author: a, user: r } = (0, C.MC)(n);
                      if (null == r) return !1;
                      let o = Y.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = ts.intl.formatToPlainString(ts.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = ts.intl.formatToPlainString(ts.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      tr.Z.showNotification(
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
                      if (tv() || null == i || null == l || null == r) return !1;
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
                          if (null == (e = n.channelId) || null == n.guildId || (J.Z.getCurrentlySelectedChannelId() === e && tT)) return !1;
                      }
                      tr.Z.showNotification(
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
                          null != t && null != e && th.track(e, t.notification, t.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, ti.isWindows)(),
                          e = (0, ti.isLinux)();
                      if (!(!u.K.get(t_, !1) && ti.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tp && (i = tI.includes(tp)),
                          !!i &&
                              (tr.Z.showNotification(
                                  n(95045),
                                  ts.intl.string(ts.t.VSgOVl),
                                  ts.intl.string(ts.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, w.uL)(to.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          u.K.set(t_, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return (u.K.remove(t_), !1);
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n, presences: i } = t;
                      ((tp = e), tS.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tS.add(t.id))), (0, Z.uw)('NotificationStore') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tZ(i, !1));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (tv()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = x.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, D.Xi)(i, n, n.author);
                      tr.Z.showNotification(
                          l,
                          ts.intl.string(ts.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, y.Z)(to.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  PRESENCE_UPDATES: function (t) {
                      let { updates: e } = t;
                      (0, Z.uw)('handlePresenceUpdates') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tZ(e);
                  }
              }
    ));
