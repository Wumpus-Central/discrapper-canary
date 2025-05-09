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
    N = n(579806),
    p = n(761781),
    S = n(728345),
    T = n(812206),
    h = n(802098),
    C = n(933557),
    I = n(456269),
    Z = n(890022),
    m = n(688907),
    A = n(15274),
    v = n(754688),
    y = n(336197),
    P = n(355298),
    U = n(786761),
    D = n(601992),
    R = n(864060),
    O = n(11352),
    L = n(671105),
    b = n(106371),
    G = n(703656),
    M = n(359110),
    k = n(922482),
    w = n(427679),
    V = n(488131),
    F = n(695346),
    H = n(592125),
    W = n(430824),
    z = n(375954),
    x = n(292959),
    q = n(496675),
    Y = n(699516),
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
    es = (null === N.Z || void 0 === N.Z ? void 0 : N.Z.features.supports('notifications')) ? 20 : 1,
    ed = 'discord_dismissed_notification_shown',
    ec = document.hasFocus(),
    ef = null,
    eg = new Set(),
    eE = {},
    e_ = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    eN = new (class {
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
async function ep(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = new Set(),
        i = (0, Z.W7)(e),
        a = (0, m.MH)();
    t &&
        (i.forEach((e) => {
            let { activities: t, user: i } = e;
            if (0 === t.length || Y.Z.isIgnored(i.id)) return !1;
            let l = eS(t);
            a === o.Tv.ONLY_GAMES_PLAYED && (l = l.filter((e) => p.Z.currentUserApplicationIds.has(e))), (n = new Set([...n, ...l]));
        }),
        await S.ZP.fetchApplications([...n], !1)),
        i.forEach((e) => {
            let { activities: n, user: i } = e;
            if (0 === n.length || Y.Z.isIgnored(i.id)) return !1;
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
                            let n = T.Z.getApplication(e);
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
function eT() {
    return !!(x.Z.getDesktopType() === ei.qrD.NEVER || B.Z.getStatus() === ei.Skl.DND || F.QZ.getSetting());
}
function eh(e) {
    return null != $.Z.getVoiceStateForChannel(e);
}
class eC extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(K.default, H.Z, x.Z, W.Z, w.Z, Y.Z, q.Z, $.Z, P.Z);
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
                      return !eT() && (Q.Z.showNotification(t, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((ec = e.focused)) {
                          let e = X.Z.getChannelId();
                          null != e && eN.clearChannel(e);
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
                      let N = (0, R.eF)(u, o, !ec),
                          p = x.Z.getNotifyMessagesInSelectedChannel() && (0, R.N_)(u, o);
                      if ((!N && !p) || (u.type === ei.uaV.CHANGELOG && (null == u.changelog_id || h.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let S = !x.Z.isSoundDisabled(eo),
                          T = et.ZP.canUseCustomNotificationSounds(_),
                          C = O.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          I = T && C && S ? (null != (a = (0, L.bb)(null != (l = f.guild_id) ? l : ei.aIL, o)) ? a : (0, L.iD)(f.guild_id)) : void 0;
                      if ((p && (S && Q.Z.playNotificationSound('message3', 0.4, I), !ec)) || !N) return !1;
                      let Z = n(808506).default,
                          m = n(624864).Z,
                          { OverlayNotificationDisabledSetting: A } = n(486016);
                      if (null != Z.getFocusedPID() && !m.isNotificationDisabled(A.TEXT_CHAT) && !J.Z.disableNotifications) return !1;
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
                          (0, D.R)(u, f.guild_id),
                          x.Z.getDesktopType() === ei.qrD.NEVER)
                      )
                          return S && Q.Z.playNotificationSound(eo, eu, I), !1;
                      let b = null != (r = z.Z.getMessage(o, u.id)) ? r : (0, U.e5)(u);
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
                              soundpack: I,
                              volume: eu,
                              onClick() {
                                  (0, M.Kh)(f.id), (f.type === ei.d4z.GUILD_VOICE || f.type === ei.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: b
                          }
                      ).then((e) => {
                          null != e && eN.track(f.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && eN.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return eN.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (eT() || n.type !== ei.IIU.PLAYING) return !1;
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
                      if (eT()) return;
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
                                  channelName: (0, C.F6)(s, K.default, Y.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (eT() || !t.send_start_notification || eh(t.channel_id)) return !1;
                      let n = K.default.getCurrentUser(),
                          i = W.Z.getGuild(t.guild_id),
                          l = H.Z.getChannel(t.channel_id),
                          r = K.default.getUser(t.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, R.LL)(n, r, l) || !q.Z.can(a.$e(ei.Plq.CONNECT, ei.Plq.VIEW_CHANNEL), l) || eg.has(t.id)) return !1;
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
                      if (eT() || null == t.notification_type) return !1;
                      t.notification_type === el.sy.EVENT_START &&
                          (t.entity_type === el.WX.STAGE_INSTANCE || t.entity_type === el.WX.VOICE
                              ? (function (e) {
                                    if (eT()) return;
                                    let t = e.channel_id;
                                    if (null == t || eh(t)) return;
                                    let n = K.default.getCurrentUser(),
                                        i = W.Z.getGuild(e.guild_id),
                                        l = H.Z.getChannel(e.channel_id),
                                        r = K.default.getUser(e.host_id);
                                    if (null != n && null != l && null != i && null != r && q.Z.can(a.$e(ei.Plq.CONNECT, ei.Plq.VIEW_CHANNEL), l))
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
                                    if (eT()) return;
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
                                                    f.Z.transitionToGuildSync(e.guild_id), (0, A.bO)({ eventId: e.id });
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (eT()) return !1;
                      let l = H.Z.getChannel(n.parent_id);
                      if (null == l || !ei.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, R.FI)(n, l, !ec)) return !1;
                      let { author: a, user: r } = (0, I.MC)(n);
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
                      if (eT() || null == i || null == l || null == r) return !1;
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
                          null != e && null != t && eN.track(t, e);
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
                                          (0, G.uL)(ei.Z5c.SETTINGS(e ? 'windows' : 'linux'));
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
                      (ef = t), eg.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eg.add(e.id))), (0, Z.uw)('NotificationStore') && ep(i, !1);
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (eT()) return !1;
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
                      (0, Z.uw)('handlePresenceUpdates') && ep(t);
                  }
              }
    );
