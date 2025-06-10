n.d(t, {
    Ay: () => eo,
    yk: () => es
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
    E = n(287734),
    _ = n(232567),
    T = n(579806),
    S = n(761781),
    p = n(728345),
    I = n(812206),
    N = n(802098),
    h = n(933557),
    C = n(456269),
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
    w = n(359110),
    k = n(922482),
    V = n(427679),
    F = n(488131),
    H = n(695346),
    W = n(592125),
    Y = n(430824),
    z = n(375954),
    q = n(292959),
    x = n(496675),
    X = n(699516),
    B = n(944486),
    J = n(885110),
    j = n(246946),
    K = n(594174),
    Q = n(979651),
    $ = n(5192),
    ee = n(912101),
    et = n(358085),
    en = n(74538),
    ei = n(51144),
    el = n(981631),
    ea = n(765305),
    er = n(388032);
function eu(e, t, n) {
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
let eo = 'message1',
    es = 0.4,
    ed = (null === T.Z || void 0 === T.Z ? void 0 : T.Z.features.supports('notifications')) ? 20 : 1,
    ec = 'discord_dismissed_notification_shown',
    ef = document.hasFocus(),
    eg = null,
    eE = new Set(),
    e_ = {},
    eT = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    eS = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > ed; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            eu(this, '_channels', {});
        }
    })();
function ep(e, t, n) {
    let i = e.filter((e) => e.type === el.IIU.PLAYING && null != e.application_id).map((e) => e.application_id);
    return n === u.Tv.ONLY_GAMES_PLAYED ? i.filter((e) => S.Z.currentUserApplicationIds.has(e)) : i;
}
async function eI(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = new Set(),
        i = (0, Z.W7)(e),
        a = (0, A.MH)();
    t &&
        (i.forEach((e) => {
            let { activities: t, user: i } = e;
            if (0 === t.length || X.Z.isIgnored(i.id)) return;
            let l = ep(t, i, a);
            0 !== l.length && (n = new Set([...n, ...l]));
        }),
        await p.ZP.fetchApplications([...n], !1)),
        i.forEach((e) => {
            let { activities: n, user: i, guildId: r } = e;
            !(function (e, t, n, i) {
                let a = eN(t);
                if (0 === e.length && 0 === a.length) return;
                let r = (0, l.difference)(e, a).filter((e) => {
                    var n;
                    return null != e && (null == (n = e_[t]) ? void 0 : n[e]) == null;
                });
                (0, l.difference)(a, e)
                    .filter((e) => {
                        var n;
                        return null != e && (null == (n = e_[t]) ? void 0 : n[e]) === i;
                    })
                    .forEach((e) => {
                        delete e_[t][e];
                    }),
                    r.forEach((e) => {
                        if ((null == e_[t] ? (e_[t] = { [e]: i }) : null == e_[t][e] && (e_[t][e] = i), n)) {
                            var l, a;
                            let n = I.Z.getApplication(e);
                            null != n &&
                                ((l = n),
                                (a = t),
                                (0, _.PR)(a).then((e) => {
                                    var t;
                                    (0, O.m)(e.getAvatarURL(null, 64), null != (t = l.getIconURL(64)) ? t : null).then((t) => {
                                        ee.Z.showNotification(
                                            t,
                                            er.intl.formatToPlainString(er.t.SRy0Cg, { username: $.ZP.getName(null, null, e) }),
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
                    0 === eN(t).length && delete e_[t];
            })(ep(n, i, a), i.id, t, null != r ? r : 0);
        });
}
function eN(e) {
    var t;
    return Object.keys(null != (t = e_[e]) ? t : {});
}
function eh() {
    return !!(q.Z.getDesktopType() === el.qrD.NEVER || J.Z.getStatus() === el.Skl.DND || H.QZ.getSetting());
}
function eC(e) {
    return null != Q.Z.getVoiceStateForChannel(e);
}
class eZ extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(K.default, W.Z, q.Z, Y.Z, V.Z, X.Z, x.Z, Q.Z, P.Z);
    }
}
eu(eZ, 'displayName', 'NotificationStore'),
    new eZ(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== el.$Ab.ENABLED ||
                          et.isPlatformEmbedded ||
                          ee.Z.showNotification(
                              n(185672),
                              er.intl.string(er.t.VSgOVl),
                              er.intl.string(er.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: eo,
                                  volume: es,
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
                      return !eh() && (ee.Z.showNotification(t, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((ef = e.focused)) {
                          let e = B.Z.getChannelId();
                          null != e && eS.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, a, r;
                      let { channelId: u, message: o, optimistic: d } = e;
                      if (d) return !1;
                      let f = W.Z.getChannel(u),
                          E = K.default.getUser(null == (t = o.author) ? void 0 : t.id),
                          _ = K.default.getCurrentUser();
                      if (null == f || null == E) return !1;
                      let T = (0, R.eF)(o, u, !ef),
                          S = q.Z.getNotifyMessagesInSelectedChannel() && (0, R.N_)(o, u);
                      if ((!T && !S) || (o.type === el.uaV.CHANGELOG && (null == o.changelog_id || N.Z.latestChangelogId() !== o.changelog_id))) return !1;
                      let p = !q.Z.isSoundDisabled(eo),
                          I = en.ZP.canUseCustomNotificationSounds(_),
                          h = L.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          C = I && h && p ? (null != (a = (0, b.bb)(null != (l = f.guild_id) ? l : el.aIL, u)) ? a : (0, b.iD)(f.guild_id)) : void 0;
                      if ((S && (p && ee.Z.playNotificationSound('message3', 0.4, C), !ef)) || !T) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: m } = n(486016);
                      if (null != Z.getFocusedPID() && !A.isNotificationDisabled(m.TEXT_CHAT) && !j.Z.disableNotifications) return !1;
                      let { icon: v, title: y, body: P } = (0, R.Xi)(f, o, E);
                      if (
                          (s.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: o,
                              icon: v,
                              title: y,
                              body: P
                          }),
                          (0, U.R)(o, f.guild_id),
                          q.Z.getDesktopType() === el.qrD.NEVER)
                      )
                          return p && ee.Z.playNotificationSound(eo, es, C), !1;
                      let O = null != (r = z.Z.getMessage(u, o.id)) ? r : (0, D.e5)(o);
                      ee.Z.showNotification(
                          v,
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
                              omitViewTracking: !0,
                              tag: o.id,
                              sound: p ? eo : void 0,
                              soundpack: C,
                              volume: es,
                              onClick() {
                                  (0, w.Kh)(f.id), (f.type === el.d4z.GUILD_VOICE || f.type === el.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: O
                          }
                      ).then((e) => {
                          null != e && eS.track(f.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && eS.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return eS.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (eh() || n.type !== el.IIU.PLAYING) return !1;
                      {
                          let e = K.default.getUser(t);
                          if (null == e) return !1;
                          let i = ei.ZP.getName(e),
                              l = n.name,
                              a = e.getAvatarURL(void 0, 128),
                              r = er.intl.string(er.t.XoTWsL),
                              u = er.intl.formatToPlainString(er.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              ee.Z.showNotification(
                                  a,
                                  r,
                                  u,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: el.IIU.PLAYING,
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
                      if (eh()) return;
                      let n = K.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: u } = i;
                      if (null == l || null == a || !(!r && null != u)) return;
                      let o = Y.Z.getGuild(a),
                          s = W.Z.getChannel(l),
                          d = V.Z.getStageInstanceByChannel(l);
                      null != o &&
                          null != s &&
                          null != d &&
                          ee.Z.showNotification(
                              o.getIconURL(128),
                              s.name,
                              er.intl.formatToPlainString(er.t.sqnsSE, {
                                  channelName: (0, h.F6)(s, K.default, X.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (eh() || !t.send_start_notification || eC(t.channel_id)) return !1;
                      let n = K.default.getCurrentUser(),
                          i = Y.Z.getGuild(t.guild_id),
                          l = W.Z.getChannel(t.channel_id),
                          r = K.default.getUser(t.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, R.LL)(n, r, l) || !x.Z.can(a.$e(el.Plq.CONNECT, el.Plq.VIEW_CHANNEL), l) || eE.has(t.id)) return !1;
                      eE.add(t.id),
                          ee.Z.showNotification(
                              i.getIconURL(128),
                              er.intl.formatToPlainString(er.t.bZ4OkZ, { guildName: i.name }),
                              er.intl.formatToPlainString(er.t.qTelnJ, {
                                  username: $.ZP.getName(i.id, l.id, r),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: l.id
                              },
                              {
                                  onClick() {
                                      (0, k.Cq)(l);
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
                      if (eh() || null == t.notification_type) return !1;
                      t.notification_type === ea.sy.EVENT_START &&
                          (t.entity_type === ea.WX.STAGE_INSTANCE || t.entity_type === ea.WX.VOICE
                              ? (function (e) {
                                    if (eh()) return;
                                    let t = e.channel_id;
                                    if (null == t || eC(t)) return;
                                    let n = K.default.getCurrentUser(),
                                        i = Y.Z.getGuild(e.guild_id),
                                        l = W.Z.getChannel(e.channel_id),
                                        r = K.default.getUser(e.host_id);
                                    if (null != n && null != l && null != i && null != r && x.Z.can(a.$e(el.Plq.CONNECT, el.Plq.VIEW_CHANNEL), l))
                                        ee.Z.showNotification(
                                            i.getIconURL(128),
                                            er.intl.formatToPlainString(er.t.bOu6Wl, { guildName: i.name }),
                                            er.intl.formatToPlainString(er.t.GV9L8v, {
                                                topic: e.name,
                                                username: $.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === ea.WX.STAGE_INSTANCE && (0, k.Cq)(l), e.entity_type === ea.WX.VOICE && E.default.selectVoiceChannel(l.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t)
                              : t.entity_type === ea.WX.EXTERNAL &&
                                (function (e) {
                                    if (eh()) return;
                                    let t = K.default.getCurrentUser(),
                                        n = Y.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        ee.Z.showNotification(
                                            n.getIconURL(128),
                                            er.intl.formatToPlainString(er.t.bOu6Wl, { guildName: n.name }),
                                            er.intl.formatToPlainString(er.t.mYyaRE, { topic: e.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    f.Z.transitionToGuildSync(e.guild_id), (0, m.bO)({ eventId: e.id });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (eh()) return !1;
                      let l = W.Z.getChannel(n.parent_id);
                      if (null == l || !el.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, R.FI)(n, l, !ef)) return !1;
                      let { author: a, user: r } = (0, C.MC)(n);
                      if (null == r) return !1;
                      let u = Y.Z.getGuild(l.guild_id);
                      if (null == u) return !1;
                      let o = er.intl.formatToPlainString(er.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: u.name
                          }),
                          s = er.intl.formatToPlainString(er.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (t = null == a ? void 0 : a.nick) ? t : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      ee.Z.showNotification(
                          d,
                          o,
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
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: u } = e;
                      if (eh() || null == i || null == l || null == r) return !1;
                      let o = 'reactions_push_notification' === r;
                      if (o) {
                          var s;
                          let { enableInAppNotifications: e } = M.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null != (s = (0, v.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (B.Z.getCurrentlySelectedChannelId() === t && ef)) return !1;
                      }
                      ee.Z.showNotification(
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
                          null != e && null != t && eS.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, et.isWindows)(),
                          t = (0, et.isLinux)();
                      if (!(!o.K.get(ec, !1) && et.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != eg && (i = eT.includes(eg)),
                          !!i &&
                              (ee.Z.showNotification(
                                  n(95045),
                                  er.intl.string(er.t.VSgOVl),
                                  er.intl.string(er.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, G.uL)(el.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          o.K.set(ec, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return o.K.remove(ec), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n, presences: i } = e;
                      (eg = t), eE.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eE.add(e.id))), (0, Z.uw)('NotificationStore') && (0, A.MH)() !== u.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && eI(i, !1);
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (eh()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = W.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, R.Xi)(i, n, n.author);
                      ee.Z.showNotification(
                          l,
                          er.intl.string(er.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, y.Z)(el.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
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
