n.d(t, {
    Ay: () => eo,
    yk: () => eu
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
    O = n(11352),
    L = n(671105),
    b = n(106371),
    M = n(703656),
    G = n(359110),
    k = n(922482),
    w = n(427679),
    V = n(488131),
    F = n(695346),
    H = n(592125),
    W = n(430824),
    z = n(375954),
    Y = n(292959),
    x = n(496675),
    q = n(699516),
    X = n(944486),
    B = n(885110),
    J = n(246946),
    K = n(594174),
    $ = n(979651),
    j = n(5192),
    Q = n(912101),
    ee = n(358085),
    et = n(74538),
    en = n(51144),
    ei = n(981631),
    el = n(765305),
    ea = n(388032);
function er(e, t, n) {
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
    eu = 0.4,
    es = (null === T.Z || void 0 === T.Z ? void 0 : T.Z.features.supports('notifications')) ? 20 : 1,
    ed = 'discord_dismissed_notification_shown',
    ec = document.hasFocus(),
    ef = null,
    eg = new Set(),
    eE = {},
    e_ = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    eT = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > es; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            er(this, '_channels', {});
        }
    })();
async function eN(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = new Set(),
        i = (0, Z.W7)(e),
        a = (0, A.MH)();
    t &&
        (i.forEach((e) => {
            let { activities: t, user: i } = e;
            if (0 === t.length || q.Z.isIgnored(i.id)) return !1;
            let l = eS(t);
            a === o.Tv.ONLY_GAMES_PLAYED && (l = l.filter((e) => N.Z.currentUserApplicationIds.has(e))), (n = new Set([...n, ...l]));
        }),
        await S.ZP.fetchApplications([...n], !1)),
        i.forEach((e) => {
            let { activities: n, user: i } = e;
            if (0 === n.length || q.Z.isIgnored(i.id)) return !1;
            !(function (e, t, n) {
                var i, a;
                if (0 === e.length && null == eE[t]) return;
                let r = (0, l.difference)(e, [...(null != (i = eE[t]) ? i : [])]).filter((e) => null != e);
                (0, l.difference)([...(null != (a = eE[t]) ? a : [])], e)
                    .filter((e) => null != e)
                    .forEach((e) => eE[t].delete(e)),
                    r.length > 0 && null == eE[t] && (eE[t] = new Set()),
                    r.forEach((e) => {
                        if ((eE[t].add(e), n)) {
                            var i, l;
                            let n = p.Z.getApplication(e);
                            null != n &&
                                ((i = n),
                                (l = t),
                                (0, _.PR)(l).then((e) => {
                                    var t;
                                    Q.Z.showNotification(
                                        i.getIconURL(64),
                                        ea.intl.formatToPlainString(ea.t.SRy0Cg, { username: null != (t = e.globalName) ? t : e.username }),
                                        i.name,
                                        { notif_type: 'game_notif' },
                                        {
                                            onClick: () => {
                                                d.Z.openPrivateChannel({ recipientIds: l });
                                            },
                                            isUserAvatar: !0
                                        }
                                    );
                                }));
                        }
                    }),
                    0 === eE[t].size && delete eE[t];
            })(eS(n), i.id, t);
        });
}
function eS(e) {
    return e.filter((e) => e.type === ei.IIU.PLAYING && null != e.application_id).map((e) => e.application_id);
}
function ep() {
    return !!(Y.Z.getDesktopType() === ei.qrD.NEVER || B.Z.getStatus() === ei.Skl.DND || F.QZ.getSetting());
}
function eI(e) {
    return null != $.Z.getVoiceStateForChannel(e);
}
class eC extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(K.default, H.Z, Y.Z, W.Z, w.Z, q.Z, x.Z, $.Z, P.Z);
    }
}
er(eC, 'displayName', 'NotificationStore'),
    new eC(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== ei.$Ab.ENABLED ||
                          ee.isPlatformEmbedded ||
                          Q.Z.showNotification(
                              n(185672),
                              ea.intl.string(ea.t.VSgOVl),
                              ea.intl.string(ea.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: eo,
                                  volume: eu,
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
                      return !ep() && (Q.Z.showNotification(t, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((ec = e.focused)) {
                          let e = X.Z.getChannelId();
                          null != e && eT.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, a, r;
                      let { channelId: o, message: u, optimistic: d } = e;
                      if (d) return !1;
                      let f = H.Z.getChannel(o),
                          E = K.default.getUser(null == (t = u.author) ? void 0 : t.id),
                          _ = K.default.getCurrentUser();
                      if (null == f || null == E) return !1;
                      let T = (0, R.eF)(u, o, !ec),
                          N = Y.Z.getNotifyMessagesInSelectedChannel() && (0, R.N_)(u, o);
                      if ((!T && !N) || (u.type === ei.uaV.CHANGELOG && (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let S = !Y.Z.isSoundDisabled(eo),
                          p = et.ZP.canUseCustomNotificationSounds(_),
                          C = O.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          h = p && C && S ? (null != (a = (0, L.bb)(null != (l = f.guild_id) ? l : ei.aIL, o)) ? a : (0, L.iD)(f.guild_id)) : void 0;
                      if ((N && (S && Q.Z.playNotificationSound('message3', 0.4, h), !ec)) || !T) return !1;
                      let Z = n(808506).default,
                          A = n(624864).Z,
                          { OverlayNotificationDisabledSetting: m } = n(486016);
                      if (null != Z.getFocusedPID() && !A.isNotificationDisabled(m.TEXT_CHAT) && !J.Z.disableNotifications) return !1;
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
                          Y.Z.getDesktopType() === ei.qrD.NEVER)
                      )
                          return S && Q.Z.playNotificationSound(eo, eu, h), !1;
                      let b = null != (r = z.Z.getMessage(o, u.id)) ? r : (0, D.e5)(u);
                      Q.Z.showNotification(
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
                              sound: S ? eo : void 0,
                              soundpack: h,
                              volume: eu,
                              onClick() {
                                  (0, G.Kh)(f.id), (f.type === ei.d4z.GUILD_VOICE || f.type === ei.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: b
                          }
                      ).then((e) => {
                          null != e && eT.track(f.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && eT.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return eT.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (ep() || n.type !== ei.IIU.PLAYING) return !1;
                      {
                          let e = K.default.getUser(t);
                          if (null == e) return !1;
                          let i = en.ZP.getName(e),
                              l = n.name,
                              a = e.getAvatarURL(void 0, 128),
                              r = ea.intl.string(ea.t.XoTWsL),
                              o = ea.intl.formatToPlainString(ea.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              Q.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: ei.IIU.PLAYING,
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
                      if (ep()) return;
                      let n = K.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = W.Z.getGuild(a),
                          s = H.Z.getChannel(l),
                          d = w.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          Q.Z.showNotification(
                              u.getIconURL(128),
                              s.name,
                              ea.intl.formatToPlainString(ea.t.sqnsSE, {
                                  channelName: (0, C.F6)(s, K.default, q.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (ep() || !t.send_start_notification || eI(t.channel_id)) return !1;
                      let n = K.default.getCurrentUser(),
                          i = W.Z.getGuild(t.guild_id),
                          l = H.Z.getChannel(t.channel_id),
                          r = K.default.getUser(t.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, R.LL)(n, r, l) || !x.Z.can(a.$e(ei.Plq.CONNECT, ei.Plq.VIEW_CHANNEL), l) || eg.has(t.id)) return !1;
                      eg.add(t.id),
                          Q.Z.showNotification(
                              i.getIconURL(128),
                              ea.intl.formatToPlainString(ea.t.bZ4OkZ, { guildName: i.name }),
                              ea.intl.formatToPlainString(ea.t.qTelnJ, {
                                  username: j.ZP.getName(i.id, l.id, r),
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
                      eg.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (ep() || null == t.notification_type) return !1;
                      t.notification_type === el.sy.EVENT_START &&
                          (t.entity_type === el.WX.STAGE_INSTANCE || t.entity_type === el.WX.VOICE
                              ? (function (e) {
                                    if (ep()) return;
                                    let t = e.channel_id;
                                    if (null == t || eI(t)) return;
                                    let n = K.default.getCurrentUser(),
                                        i = W.Z.getGuild(e.guild_id),
                                        l = H.Z.getChannel(e.channel_id),
                                        r = K.default.getUser(e.host_id);
                                    if (null != n && null != l && null != i && null != r && x.Z.can(a.$e(ei.Plq.CONNECT, ei.Plq.VIEW_CHANNEL), l))
                                        Q.Z.showNotification(
                                            i.getIconURL(128),
                                            ea.intl.formatToPlainString(ea.t.bOu6Wl, { guildName: i.name }),
                                            ea.intl.formatToPlainString(ea.t.GV9L8v, {
                                                topic: e.name,
                                                username: j.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === el.WX.STAGE_INSTANCE && (0, k.Cq)(l), e.entity_type === el.WX.VOICE && E.default.selectVoiceChannel(l.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t)
                              : t.entity_type === el.WX.EXTERNAL &&
                                (function (e) {
                                    if (ep()) return;
                                    let t = K.default.getCurrentUser(),
                                        n = W.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        Q.Z.showNotification(
                                            n.getIconURL(128),
                                            ea.intl.formatToPlainString(ea.t.bOu6Wl, { guildName: n.name }),
                                            ea.intl.formatToPlainString(ea.t.mYyaRE, { topic: e.name }),
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
                      if (ep()) return !1;
                      let l = H.Z.getChannel(n.parent_id);
                      if (null == l || !ei.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, R.FI)(n, l, !ec)) return !1;
                      let { author: a, user: r } = (0, h.MC)(n);
                      if (null == r) return !1;
                      let o = W.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = ea.intl.formatToPlainString(ea.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = ea.intl.formatToPlainString(ea.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (t = null == a ? void 0 : a.nick) ? t : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      Q.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: r.id
                          },
                          {
                              onClick() {
                                  (0, V.ok)(n);
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = e;
                      if (ep() || null == i || null == l || null == r) return !1;
                      let u = 'reactions_push_notification' === r;
                      if (u) {
                          var s;
                          let { enableInAppNotifications: e } = b.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null != (s = (0, v.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (X.Z.getCurrentlySelectedChannelId() === t && ec)) return !1;
                      }
                      Q.Z.showNotification(
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
                      ).then((e) => {
                          null != e && null != t && eT.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, ee.isWindows)(),
                          t = (0, ee.isLinux)();
                      if (!(!u.K.get(ed, !1) && ee.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != ef && (i = e_.includes(ef)),
                          !!i &&
                              (Q.Z.showNotification(
                                  n(95045),
                                  ea.intl.string(ea.t.VSgOVl),
                                  ea.intl.string(ea.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, M.uL)(ei.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          u.K.set(ed, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return u.K.remove(ed), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n, presences: i } = e;
                      (ef = t), eg.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eg.add(e.id))), (0, Z.uw)('NotificationStore') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && eN(i, !1);
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (ep()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = H.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, R.Xi)(i, n, n.author);
                      Q.Z.showNotification(
                          l,
                          ea.intl.string(ea.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, y.Z)(ei.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  PRESENCE_UPDATES: function (e) {
                      let { updates: t } = e;
                      (0, Z.uw)('handlePresenceUpdates') && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && eN(t);
                  }
              }
    );
