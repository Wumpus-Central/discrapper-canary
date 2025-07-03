(n.d(e, {
    Ay: () => tg,
    yk: () => tE
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
    b = n(687272),
    R = n(691294),
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
    z = n(430824),
    q = n(375954),
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
    ti = n(5192),
    tl = n(358085),
    ta = n(74538),
    tr = n(51144),
    to = n(654769),
    tu = n(981631),
    ts = n(765305),
    td = n(388032);
function tc(t, e, n) {
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
function tf(t) {
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
                tc(t, e, n[e]);
            }));
    }
    return t;
}
let tg = 'message1',
    tE = 0.4,
    t_ = (null === p.Z || void 0 === p.Z ? void 0 : p.Z.features.supports('notifications')) ? 20 : 1,
    tp = 'discord_dismissed_notification_shown',
    tT = document.hasFocus(),
    tS = null,
    tN = new Set(),
    tI = {},
    th = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    tC = new (class {
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)),
                    i.push({
                        notification: e,
                        trackingProps: n
                    });
                i.length > t_;

            ) {
                var l;
                let t = i.shift();
                (null == t || null == (l = t.notification) ? void 0 : l.close) != null && (t.notification.close(), tn.default.track(tu.rMx.NOTIFICATION_ACTION, tf({ action: 'REMOVE' }, t.trackingProps)));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    (e.close(), tn.default.track(tu.rMx.NOTIFICATION_ACTION, tf({ action: 'ACK' }, n)));
                }));
        }
        constructor() {
            tc(this, '_channels', {});
        }
    })();
function tZ(t, e) {
    let { gameActivityNotificationType: n, excludeSteamGames: i } = e,
        l = t;
    i &&
        (l = t.filter((t) => {
            var e;
            return null == (e = t.metadata) || !e.distributor || t.metadata.distributor !== tu.GQo.STEAM;
        }));
    let a = l.filter((t) => t.type === tu.IIU.PLAYING && null != t.application_id).map((t) => t.application_id);
    return (n === o.Tv.ONLY_GAMES_PLAYED && (a = a.filter((t) => T.Z.currentUserApplicationIds.has(t))), a);
}
async function tA(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, A.MH)(),
        i = (0, A.j4)(),
        a = (0, Z.X)(t);
    if (e) {
        let t = new Set();
        (a.forEach((e) => {
            let { activities: l, user: a } = e;
            if (0 === l.length || J.Z.isIgnored(a.id)) return;
            let r = tZ(l, {
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
            let a = tv(e);
            if (0 === t.length && 0 === a.length) return;
            let r = (0, l.difference)(t, a).filter((t) => {
                var n;
                return null != t && (null == (n = tI[e]) ? void 0 : n[t]) == null;
            });
            ((0, l.difference)(a, t)
                .filter((t) => {
                    var n;
                    return null != t && (null == (n = tI[e]) ? void 0 : n[t]) === i;
                })
                .forEach((t) => {
                    delete tI[e][t];
                }),
                r.forEach((t) => {
                    if ((null == tI[e] ? (tI[e] = { [t]: i }) : null == tI[e][t] && (tI[e][t] = i), n)) {
                        let n = N.Z.getApplication(t);
                        null != n && tm(n, e);
                    }
                }),
                0 === tv(e).length && delete tI[e]);
        })(
            tZ(a, {
                gameActivityNotificationType: n,
                excludeSteamGames: i
            }),
            r.id,
            e,
            null != o ? o : 0
        );
    });
}
function tv(t) {
    var e;
    return Object.keys(null != (e = tI[t]) ? e : {});
}
async function tm(t, e) {
    var n;
    let i = await (0, _.PR)(e),
        l = await (0, R.m)(i.getAvatarURL(null, 64), null != (n = t.getIconURL(64)) ? n : null);
    to.Z.showNotification(
        l,
        td.intl.formatToPlainString(td.t.kO0pfX, {
            username: ti.ZP.getName(null, null, i),
            activity: t.name
        }),
        '',
        { notif_type: 'game_notif' },
        {
            onClick: () => {
                d.Z.openPrivateChannel({ recipientIds: e });
            },
            isUserAvatar: !1
        }
    );
}
function ty() {
    return !!(B.Z.getDesktopType() === tu.qrD.NEVER || K.Z.getStatus() === tu.Skl.DND || W.QZ.getSetting());
}
function tP(t) {
    return null != te.Z.getVoiceStateForChannel(t);
}
class tO extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(tt.default, Y.Z, B.Z, z.Z, F.Z, J.Z, X.Z, te.Z, P.Z);
    }
}
(tc(tO, 'displayName', 'NotificationStore'),
    new tO(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      if (e === tu.$Ab.ENABLED && !tl.isPlatformEmbedded) {
                          let t = !(0, b.QU)('NotificationStore.handleSetHavePermission');
                          to.Z.showNotification(
                              n(910653),
                              td.intl.string(td.t.VSgOVl),
                              td.intl.string(td.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: t,
                                  sound: tg,
                                  volume: tE,
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
                      return !ty() && (to.Z.showNotification(e, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tT = t.focused)) {
                          let t = Q.Z.getChannelId();
                          null != t && tC.clearChannel(t);
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
                      let p = (0, U.eF)(u, o, !tT),
                          T = B.Z.getNotifyMessagesInSelectedChannel() && (0, U.N_)(u, o);
                      if ((!p && !T) || (u.type === tu.uaV.CHANGELOG && (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let S = !B.Z.isSoundDisabled(tg),
                          N = ta.ZP.canUseCustomNotificationSounds(_),
                          h = k.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          C = N && h && S ? (null != (a = (0, L.bb)(null != (l = f.guild_id) ? l : tu.aIL, o)) ? a : (0, L.iD)(f.guild_id)) : void 0;
                      if ((T && (S && to.Z.playNotificationSound('message3', 0.4, C), !tT)) || !p) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: v } = n(486016);
                      if (null != Z.getFocusedPID() && !A.isNotificationDisabled(v.TEXT_CHAT) && !$.Z.disableNotifications) return !1;
                      let { icon: m, title: y, body: P } = (0, U.Xi)(f, u, E),
                          R = !(0, b._x)('NotificationStore.handleMessage', null == _ ? void 0 : _.id);
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
                          B.Z.getDesktopType() === tu.qrD.NEVER)
                      )
                          return (S && to.Z.playNotificationSound(tg, tE, C), !1);
                      let M = null != (r = q.Z.getMessage(o, u.id)) ? r : (0, O.e5)(u);
                      to.Z.showNotification(
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
                              omitViewTracking: R,
                              tag: u.id,
                              sound: S ? tg : void 0,
                              soundpack: C,
                              volume: tE,
                              onClick() {
                                  ((0, G.Kh)(f.id), (f.type === tu.d4z.GUILD_VOICE || f.type === tu.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                              messageRecord: M
                          }
                      ).then((t) => {
                          null != t && tC.track(f.id, t.notification, t.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return (null != e && tC.clearChannel(e), !1);
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return (tC.clearChannel(e), !1);
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (ty() || n.type !== tu.IIU.PLAYING) return !1;
                      {
                          let t = tt.default.getUser(e);
                          if (null == t) return !1;
                          let i = tr.ZP.getName(t),
                              l = n.name,
                              a = t.getAvatarURL(void 0, 128),
                              r = td.intl.string(td.t.XoTWsL),
                              o = td.intl.formatToPlainString(td.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              to.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: tu.IIU.PLAYING,
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
                      if (ty()) return;
                      let n = tt.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = z.Z.getGuild(a),
                          s = Y.Z.getChannel(l),
                          d = F.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          to.Z.showNotification(
                              (0, x.EB)(u, 128),
                              s.name,
                              td.intl.formatToPlainString(td.t.sqnsSE, {
                                  channelName: (0, h.F6)(s, tt.default, J.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (ty() || !e.send_start_notification || tP(e.channel_id)) return !1;
                      let n = tt.default.getCurrentUser(),
                          i = z.Z.getGuild(e.guild_id),
                          l = Y.Z.getChannel(e.channel_id),
                          r = tt.default.getUser(e.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, U.LL)(n, r, l) || !X.Z.can(a.$e(tu.Plq.CONNECT, tu.Plq.VIEW_CHANNEL), l) || tN.has(e.id)) return !1;
                      (tN.add(e.id),
                          to.Z.showNotification(
                              (0, x.EB)(i, 128),
                              td.intl.formatToPlainString(td.t.bZ4OkZ, { guildName: i.name }),
                              td.intl.formatToPlainString(td.t.qTelnJ, {
                                  username: ti.ZP.getName(i.id, l.id, r),
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
                      tN.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (ty() || null == e.notification_type) return !1;
                      e.notification_type === ts.sy.EVENT_START &&
                          (e.entity_type === ts.WX.STAGE_INSTANCE || e.entity_type === ts.WX.VOICE
                              ? (function (t) {
                                    if (ty()) return;
                                    let e = t.channel_id;
                                    if (null == e || tP(e)) return;
                                    let n = tt.default.getCurrentUser(),
                                        i = z.Z.getGuild(t.guild_id),
                                        l = Y.Z.getChannel(t.channel_id),
                                        r = tt.default.getUser(t.host_id);
                                    if (null != n && null != l && null != i && null != r && X.Z.can(a.$e(tu.Plq.CONNECT, tu.Plq.VIEW_CHANNEL), l))
                                        to.Z.showNotification(
                                            (0, x.EB)(i, 128),
                                            td.intl.formatToPlainString(td.t.bOu6Wl, { guildName: i.name }),
                                            td.intl.formatToPlainString(td.t.GV9L8v, {
                                                topic: t.name,
                                                username: ti.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    (t.entity_type === ts.WX.STAGE_INSTANCE && (0, V.Cq)(l), t.entity_type === ts.WX.VOICE && E.default.selectVoiceChannel(l.id));
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(e)
                              : e.entity_type === ts.WX.EXTERNAL &&
                                (function (t) {
                                    if (ty()) return;
                                    let e = tt.default.getCurrentUser(),
                                        n = z.Z.getGuild(t.guild_id);
                                    if (null != e && null != n)
                                        to.Z.showNotification(
                                            (0, x.EB)(n, 128),
                                            td.intl.formatToPlainString(td.t.bOu6Wl, { guildName: n.name }),
                                            td.intl.formatToPlainString(td.t.mYyaRE, { topic: t.name }),
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
                      if (ty()) return !1;
                      let l = Y.Z.getChannel(n.parent_id);
                      if (null == l || !tu.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, U.FI)(n, l, !tT)) return !1;
                      let { author: a, user: r } = (0, C.MC)(n);
                      if (null == r) return !1;
                      let o = z.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = td.intl.formatToPlainString(td.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = td.intl.formatToPlainString(td.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      to.Z.showNotification(
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
                      if (ty() || null == i || null == l || null == r) return !1;
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
                          if (null == (e = n.channelId) || null == n.guildId || (Q.Z.getCurrentlySelectedChannelId() === e && tT)) return !1;
                      }
                      to.Z.showNotification(
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
                          null != t && null != e && tC.track(e, t.notification, t.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, tl.isWindows)(),
                          e = (0, tl.isLinux)();
                      if (!(!u.K.get(tp, !1) && tl.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != tS && (i = th.includes(tS)),
                          !!i &&
                              (to.Z.showNotification(
                                  n(95045),
                                  td.intl.string(td.t.VSgOVl),
                                  td.intl.string(td.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, w.uL)(tu.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          u.K.set(tp, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return (u.K.remove(tp), !1);
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n, presences: i } = t;
                      ((tS = e), tN.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tN.add(t.id))), (0, Z.uw)('NotificationStore') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tA(i, !1));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (ty()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = Y.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, U.Xi)(i, n, n.author);
                      to.Z.showNotification(
                          l,
                          td.intl.string(td.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, y.Z)(tu.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  PRESENCE_UPDATES: function (t) {
                      let { updates: e } = t;
                      (0, Z.uw)('handlePresenceUpdates') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tA(e);
                  }
              }
    ));
