n.d(t, {
    Ay: () => es,
    yk: () => ed
}),
    n(388685),
    n(539854);
var i,
    l = n(392711),
    a = n(149765),
    r = n(442837),
    u = n(524437),
    o = n(433517),
    s = n(570140),
    d = n(493683),
    c = n(475179),
    f = n(749210),
    g = n(292556),
    _ = n(287734),
    E = n(232567),
    S = n(579806),
    T = n(761781),
    p = n(728345),
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
    U = n(786761),
    D = n(601992),
    R = n(864060),
    O = n(687272),
    L = n(691294),
    b = n(11352),
    M = n(671105),
    k = n(106371),
    G = n(703656),
    w = n(359110),
    V = n(922482),
    F = n(427679),
    H = n(488131),
    W = n(695346),
    x = n(592125),
    Y = n(430824),
    z = n(375954),
    q = n(292959),
    X = n(496675),
    B = n(699516),
    J = n(944486),
    Q = n(885110),
    j = n(246946),
    K = n(594174),
    $ = n(979651),
    ee = n(5192),
    et = n(912101),
    en = n(358085),
    ei = n(74538),
    el = n(51144),
    ea = n(981631),
    er = n(765305),
    eu = n(388032);
function eo(e, t, n) {
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
let es = 'message1',
    ed = 0.4,
    ec = (null === S.Z || void 0 === S.Z ? void 0 : S.Z.features.supports('notifications')) ? 20 : 1,
    ef = 'discord_dismissed_notification_shown',
    eg = document.hasFocus(),
    e_ = null,
    eE = new Set(),
    eS = {},
    eT = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    ep = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > ec; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            eo(this, '_channels', {});
        }
    })();
function eN(e, t) {
    let { gameActivityNotificationType: n, excludeSteamGames: i } = t,
        l = e;
    i &&
        (l = e.filter((e) => {
            var t;
            return null == (t = e.metadata) || !t.distributor || e.metadata.distributor !== ea.GQo.STEAM;
        }));
    let a = l.filter((e) => e.type === ea.IIU.PLAYING && null != e.application_id).map((e) => e.application_id);
    return n === u.Tv.ONLY_GAMES_PLAYED && (a = a.filter((e) => T.Z.currentUserApplicationIds.has(e))), a;
}
async function eI(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, A.MH)(),
        i = (0, A.j4)(),
        a = (0, Z.X)(e);
    if (t) {
        let e = new Set();
        a.forEach((t) => {
            let { activities: l, user: a } = t;
            if (0 === l.length || B.Z.isIgnored(a.id)) return;
            let r = eN(l, {
                gameActivityNotificationType: n,
                excludeSteamGames: i
            });
            0 !== r.length && (e = new Set([...e, ...r]));
        }),
            await p.ZP.fetchApplications([...e], !1);
    }
    a.forEach((e) => {
        let { activities: a, user: r, guildId: u } = e;
        !(function (e, t, n, i) {
            let a = eh(t);
            if (0 === e.length && 0 === a.length) return;
            let r = (0, l.difference)(e, a).filter((e) => {
                var n;
                return null != e && (null == (n = eS[t]) ? void 0 : n[e]) == null;
            });
            (0, l.difference)(a, e)
                .filter((e) => {
                    var n;
                    return null != e && (null == (n = eS[t]) ? void 0 : n[e]) === i;
                })
                .forEach((e) => {
                    delete eS[t][e];
                }),
                r.forEach((e) => {
                    if ((null == eS[t] ? (eS[t] = { [e]: i }) : null == eS[t][e] && (eS[t][e] = i), n)) {
                        var l, a;
                        let n = N.Z.getApplication(e);
                        null != n &&
                            ((l = n),
                            (a = t),
                            (0, E.PR)(a).then((e) => {
                                var t;
                                (0, L.m)(e.getAvatarURL(null, 64), null != (t = l.getIconURL(64)) ? t : null).then((t) => {
                                    et.Z.showNotification(
                                        t,
                                        eu.intl.formatToPlainString(eu.t.SRy0Cg, { username: ee.ZP.getName(null, null, e) }),
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
                0 === eh(t).length && delete eS[t];
        })(
            eN(a, {
                gameActivityNotificationType: n,
                excludeSteamGames: i
            }),
            r.id,
            t,
            null != u ? u : 0
        );
    });
}
function eh(e) {
    var t;
    return Object.keys(null != (t = eS[e]) ? t : {});
}
function eC() {
    return !!(q.Z.getDesktopType() === ea.qrD.NEVER || Q.Z.getStatus() === ea.Skl.DND || W.QZ.getSetting());
}
function eZ(e) {
    return null != $.Z.getVoiceStateForChannel(e);
}
class eA extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(K.default, x.Z, q.Z, Y.Z, F.Z, B.Z, X.Z, $.Z, P.Z);
    }
}
eo(eA, 'displayName', 'NotificationStore'),
    new eA(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      if (t === ea.$Ab.ENABLED && !en.isPlatformEmbedded) {
                          let e = !(0, O.QU)('NotificationStore.handleSetHavePermission');
                          et.Z.showNotification(
                              n(910653),
                              eu.intl.string(eu.t.VSgOVl),
                              eu.intl.string(eu.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: e,
                                  sound: es,
                                  volume: ed,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1
                              }
                          );
                      }
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: i, trackingProps: l, options: a } = e;
                      return !eC() && (et.Z.showNotification(t, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((eg = e.focused)) {
                          let e = J.Z.getChannelId();
                          null != e && ep.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, a, r;
                      let { channelId: u, message: o, optimistic: d } = e;
                      if (d) return !1;
                      let f = x.Z.getChannel(u),
                          _ = K.default.getUser(null == (t = o.author) ? void 0 : t.id),
                          E = K.default.getCurrentUser();
                      if (null == f || null == _) return !1;
                      let S = (0, R.eF)(o, u, !eg),
                          T = q.Z.getNotifyMessagesInSelectedChannel() && (0, R.N_)(o, u);
                      if ((!S && !T) || (o.type === ea.uaV.CHANGELOG && (null == o.changelog_id || I.Z.latestChangelogId() !== o.changelog_id))) return !1;
                      let p = !q.Z.isSoundDisabled(es),
                          N = ei.ZP.canUseCustomNotificationSounds(E),
                          h = b.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          C = N && h && p ? (null != (a = (0, M.bb)(null != (l = f.guild_id) ? l : ea.aIL, u)) ? a : (0, M.iD)(f.guild_id)) : void 0;
                      if ((T && (p && et.Z.playNotificationSound('message3', 0.4, C), !eg)) || !S) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: v } = n(486016);
                      if (null != Z.getFocusedPID() && !A.isNotificationDisabled(v.TEXT_CHAT) && !j.Z.disableNotifications) return !1;
                      let { icon: m, title: y, body: P } = (0, R.Xi)(f, o, _),
                          L = !(0, O._x)('NotificationStore.handleMessage', null == E ? void 0 : E.id);
                      if (
                          (s.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: o,
                              icon: m,
                              title: y,
                              body: P
                          }),
                          (0, D.R)(o, f.guild_id),
                          q.Z.getDesktopType() === ea.qrD.NEVER)
                      )
                          return p && et.Z.playNotificationSound(es, ed, C), !1;
                      let k = null != (r = z.Z.getMessage(u, o.id)) ? r : (0, U.e5)(o);
                      et.Z.showNotification(
                          m,
                          y,
                          P,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null == (i = o.author) ? void 0 : i.id,
                              message_id: o.id,
                              message_type: o.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id
                          },
                          {
                              omitViewTracking: L,
                              tag: o.id,
                              sound: p ? es : void 0,
                              soundpack: C,
                              volume: ed,
                              onClick() {
                                  (0, w.Kh)(f.id), (f.type === ea.d4z.GUILD_VOICE || f.type === ea.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: k
                          }
                      ).then((e) => {
                          null != e && ep.track(f.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && ep.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return ep.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (eC() || n.type !== ea.IIU.PLAYING) return !1;
                      {
                          let e = K.default.getUser(t);
                          if (null == e) return !1;
                          let i = el.ZP.getName(e),
                              l = n.name,
                              a = e.getAvatarURL(void 0, 128),
                              r = eu.intl.string(eu.t.XoTWsL),
                              u = eu.intl.formatToPlainString(eu.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              et.Z.showNotification(
                                  a,
                                  r,
                                  u,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: ea.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          d.Z.openPrivateChannel({ recipientIds: t });
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
                      if (eC()) return;
                      let n = K.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: u } = i;
                      if (null == l || null == a || !(!r && null != u)) return;
                      let o = Y.Z.getGuild(a),
                          s = x.Z.getChannel(l),
                          d = F.Z.getStageInstanceByChannel(l);
                      null != o &&
                          null != s &&
                          null != d &&
                          et.Z.showNotification(
                              o.getIconURL(128),
                              s.name,
                              eu.intl.formatToPlainString(eu.t.sqnsSE, {
                                  channelName: (0, h.F6)(s, K.default, B.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (eC() || !t.send_start_notification || eZ(t.channel_id)) return !1;
                      let n = K.default.getCurrentUser(),
                          i = Y.Z.getGuild(t.guild_id),
                          l = x.Z.getChannel(t.channel_id),
                          r = K.default.getUser(t.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, R.LL)(n, r, l) || !X.Z.can(a.$e(ea.Plq.CONNECT, ea.Plq.VIEW_CHANNEL), l) || eE.has(t.id)) return !1;
                      eE.add(t.id),
                          et.Z.showNotification(
                              i.getIconURL(128),
                              eu.intl.formatToPlainString(eu.t.bZ4OkZ, { guildName: i.name }),
                              eu.intl.formatToPlainString(eu.t.qTelnJ, {
                                  username: ee.ZP.getName(i.id, l.id, r),
                                  topic: t.topic
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
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      eE.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (eC() || null == t.notification_type) return !1;
                      t.notification_type === er.sy.EVENT_START &&
                          (t.entity_type === er.WX.STAGE_INSTANCE || t.entity_type === er.WX.VOICE
                              ? (function (e) {
                                    if (eC()) return;
                                    let t = e.channel_id;
                                    if (null == t || eZ(t)) return;
                                    let n = K.default.getCurrentUser(),
                                        i = Y.Z.getGuild(e.guild_id),
                                        l = x.Z.getChannel(e.channel_id),
                                        r = K.default.getUser(e.host_id);
                                    if (null != n && null != l && null != i && null != r && X.Z.can(a.$e(ea.Plq.CONNECT, ea.Plq.VIEW_CHANNEL), l))
                                        et.Z.showNotification(
                                            i.getIconURL(128),
                                            eu.intl.formatToPlainString(eu.t.bOu6Wl, { guildName: i.name }),
                                            eu.intl.formatToPlainString(eu.t.GV9L8v, {
                                                topic: e.name,
                                                username: ee.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === er.WX.STAGE_INSTANCE && (0, V.Cq)(l), e.entity_type === er.WX.VOICE && _.default.selectVoiceChannel(l.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t)
                              : t.entity_type === er.WX.EXTERNAL &&
                                (function (e) {
                                    if (eC()) return;
                                    let t = K.default.getCurrentUser(),
                                        n = Y.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        et.Z.showNotification(
                                            n.getIconURL(128),
                                            eu.intl.formatToPlainString(eu.t.bOu6Wl, { guildName: n.name }),
                                            eu.intl.formatToPlainString(eu.t.mYyaRE, { topic: e.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    f.Z.transitionToGuildSync(e.guild_id), (0, v.bO)({ eventId: e.id });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (eC()) return !1;
                      let l = x.Z.getChannel(n.parent_id);
                      if (null == l || !ea.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, R.FI)(n, l, !eg)) return !1;
                      let { author: a, user: r } = (0, C.MC)(n);
                      if (null == r) return !1;
                      let u = Y.Z.getGuild(l.guild_id);
                      if (null == u) return !1;
                      let o = eu.intl.formatToPlainString(eu.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: u.name
                          }),
                          s = eu.intl.formatToPlainString(eu.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (t = null == a ? void 0 : a.nick) ? t : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      et.Z.showNotification(
                          d,
                          o,
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
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: u } = e;
                      if (eC() || null == i || null == l || null == r) return !1;
                      let o = 'reactions_push_notification' === r;
                      if (o) {
                          var s;
                          let { enableInAppNotifications: e } = k.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null != (s = (0, m.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (J.Z.getCurrentlySelectedChannelId() === t && eg)) return !1;
                      }
                      et.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != a && ((0, y.Z)(a), g.default.clickedNotification());
                              },
                              tag: u,
                              isUserAvatar: o
                          }
                      ).then((e) => {
                          null != e && null != t && ep.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, en.isWindows)(),
                          t = (0, en.isLinux)();
                      if (!(!o.K.get(ef, !1) && en.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != e_ && (i = eT.includes(e_)),
                          !!i &&
                              (et.Z.showNotification(
                                  n(95045),
                                  eu.intl.string(eu.t.VSgOVl),
                                  eu.intl.string(eu.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, G.uL)(ea.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          o.K.set(ef, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return o.K.remove(ef), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n, presences: i } = e;
                      (e_ = t), eE.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eE.add(e.id))), (0, Z.uw)('NotificationStore') && (0, A.MH)() !== u.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && eI(i, !1);
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (eC()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = x.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, R.Xi)(i, n, n.author);
                      et.Z.showNotification(
                          l,
                          eu.intl.string(eu.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, y.Z)(ea.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  PRESENCE_UPDATES: function (e) {
                      let { updates: t } = e;
                      (0, Z.uw)('handlePresenceUpdates') && (0, A.MH)() !== u.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && eI(t);
                  }
              }
    );
