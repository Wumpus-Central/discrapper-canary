n.d(t, {
    Ay: () => el,
    yk: () => ea
}),
    n(388685),
    n(539854);
var i,
    l = n(392711),
    a = n(149765),
    r = n(442837),
    o = n(433517),
    u = n(570140),
    s = n(493683),
    d = n(475179),
    c = n(749210),
    f = n(292556),
    g = n(287734),
    E = n(232567),
    _ = n(579806),
    p = n(728345),
    N = n(812206),
    T = n(802098),
    S = n(933557),
    C = n(456269),
    h = n(890022),
    I = n(15274),
    m = n(754688),
    Z = n(336197),
    A = n(355298),
    y = n(786761),
    v = n(601992),
    P = n(864060),
    U = n(11352),
    D = n(671105),
    R = n(106371),
    O = n(703656),
    b = n(359110),
    L = n(922482),
    w = n(427679),
    G = n(488131),
    k = n(695346),
    M = n(592125),
    V = n(430824),
    F = n(375954),
    H = n(292959),
    W = n(496675),
    z = n(699516),
    q = n(944486),
    x = n(885110),
    Y = n(246946),
    X = n(594174),
    B = n(979651),
    J = n(5192),
    K = n(912101),
    $ = n(358085),
    j = n(74538),
    Q = n(51144),
    ee = n(981631),
    et = n(765305),
    en = n(388032);
function ei(e, t, n) {
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
let el = 'message1',
    ea = 0.4,
    er = (null === _.Z || void 0 === _.Z ? void 0 : _.Z.features.supports('notifications')) ? 20 : 1,
    eo = 'discord_dismissed_notification_shown',
    eu = document.hasFocus(),
    es = null,
    ed = new Set(),
    ec = {},
    ef = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    eg = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > er; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            ei(this, '_channels', {});
        }
    })();
async function eE(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = new Set(),
        i = (0, h.W7)(e);
    t &&
        (i.forEach((e) => {
            let { activities: t, user: i } = e;
            if (0 === t.length || z.Z.isIgnored(i.id)) return !1;
            let l = e_(t);
            n = new Set([...n, ...l]);
        }),
        await p.ZP.fetchApplications([...n], !1)),
        i.forEach((e) => {
            let { activities: n, user: i } = e;
            if (0 === n.length || z.Z.isIgnored(i.id)) return !1;
            !(function (e, t, n) {
                var i, a;
                if (0 === e.length && null == ec[t]) return;
                let r = (0, l.difference)(e, [...(null != (i = ec[t]) ? i : [])]).filter((e) => null != e);
                (0, l.difference)([...(null != (a = ec[t]) ? a : [])], e)
                    .filter((e) => null != e)
                    .forEach((e) => ec[t].delete(e)),
                    r.length > 0 && null == ec[t] && (ec[t] = new Set()),
                    r.forEach((e) => {
                        if ((ec[t].add(e), n)) {
                            var i, l;
                            let n = N.Z.getApplication(e);
                            null != n &&
                                ((i = n),
                                (l = t),
                                (0, E.PR)(l).then((e) => {
                                    var t, n;
                                    K.Z.showNotification(
                                        i.getIconURL(64),
                                        null != (t = e.globalName) ? t : e.username,
                                        en.intl.formatToPlainString(en.t.o4Aipq, {
                                            username: null != (n = e.globalName) ? n : e.username,
                                            gameName: i.name
                                        }),
                                        { notif_type: 'game_notif' },
                                        {
                                            onClick: () => {
                                                s.Z.openPrivateChannel({ recipientIds: l });
                                            },
                                            isUserAvatar: !0
                                        }
                                    );
                                }));
                        }
                    }),
                    0 === ec[t].size && delete ec[t];
            })(e_(n), i.id, t);
        });
}
function e_(e) {
    return e.filter((e) => e.type === ee.IIU.PLAYING && null != e.application_id).map((e) => e.application_id);
}
function ep() {
    return !!(H.Z.getDesktopType() === ee.qrD.NEVER || x.Z.getStatus() === ee.Skl.DND || k.QZ.getSetting());
}
function eN(e) {
    return null != B.Z.getVoiceStateForChannel(e);
}
class eT extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(X.default, M.Z, H.Z, V.Z, w.Z, z.Z, W.Z, B.Z, A.Z);
    }
}
ei(eT, 'displayName', 'NotificationStore'),
    new eT(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== ee.$Ab.ENABLED ||
                          $.isPlatformEmbedded ||
                          K.Z.showNotification(
                              n(185672),
                              en.intl.string(en.t.VSgOVl),
                              en.intl.string(en.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: el,
                                  volume: ea,
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
                      return !ep() && (K.Z.showNotification(t, n, i, l, a), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((eu = e.focused)) {
                          let e = q.Z.getChannelId();
                          null != e && eg.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, a, r;
                      let { channelId: o, message: s, optimistic: c } = e;
                      if (c) return !1;
                      let g = M.Z.getChannel(o),
                          E = X.default.getUser(null == (t = s.author) ? void 0 : t.id),
                          _ = X.default.getCurrentUser();
                      if (null == g || null == E) return !1;
                      let p = (0, P.eF)(s, o, !eu),
                          N = H.Z.getNotifyMessagesInSelectedChannel() && (0, P.N_)(s, o);
                      if ((!p && !N) || (s.type === ee.uaV.CHANGELOG && (null == s.changelog_id || T.Z.latestChangelogId() !== s.changelog_id))) return !1;
                      let S = !H.Z.isSoundDisabled(el),
                          C = j.ZP.canUseCustomNotificationSounds(_),
                          h = U.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          I = C && h && S ? (null != (a = (0, D.bb)(null != (l = g.guild_id) ? l : ee.aIL, o)) ? a : (0, D.iD)(g.guild_id)) : void 0;
                      if ((N && (S && K.Z.playNotificationSound('message3', 0.4, I), !eu)) || !p) return !1;
                      let m = n(808506).default,
                          Z = n(624864).Z,
                          { OverlayNotificationDisabledSetting: A } = n(486016);
                      if (null != m.getFocusedPID() && !Z.isNotificationDisabled(A.TEXT_CHAT) && !Y.Z.disableNotifications) return !1;
                      let { icon: R, title: O, body: L } = (0, P.Xi)(g, s, E);
                      if (
                          (u.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: g.id,
                              message: s,
                              icon: R,
                              title: O,
                              body: L
                          }),
                          (0, v.R)(s, g.guild_id),
                          H.Z.getDesktopType() === ee.qrD.NEVER)
                      )
                          return S && K.Z.playNotificationSound(el, ea, I), !1;
                      let w = null != (r = F.Z.getMessage(o, s.id)) ? r : (0, y.e5)(s);
                      K.Z.showNotification(
                          R,
                          O,
                          L,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null == (i = s.author) ? void 0 : i.id,
                              message_id: s.id,
                              message_type: s.type,
                              channel_id: g.id,
                              channel_type: g.type,
                              guild_id: g.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: s.id,
                              sound: S ? el : void 0,
                              soundpack: I,
                              volume: ea,
                              onClick() {
                                  (0, b.Kh)(g.id), (g.type === ee.d4z.GUILD_VOICE || g.type === ee.d4z.GUILD_STAGE_VOICE) && d.Z.updateChatOpen(g.id, !0), f.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: w
                          }
                      ).then((e) => {
                          null != e && eg.track(g.id, e);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && eg.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return eg.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (ep() || n.type !== ee.IIU.PLAYING) return !1;
                      {
                          let e = X.default.getUser(t);
                          if (null == e) return !1;
                          let i = Q.ZP.getName(e),
                              l = n.name,
                              a = e.getAvatarURL(void 0, 128),
                              r = en.intl.string(en.t.XoTWsL),
                              o = en.intl.formatToPlainString(en.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              K.Z.showNotification(
                                  a,
                                  r,
                                  o,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: ee.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: l
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
                      if (ep()) return;
                      let n = X.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                      if (null == l || null == a || !(!r && null != o)) return;
                      let u = V.Z.getGuild(a),
                          s = M.Z.getChannel(l),
                          d = w.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != s &&
                          null != d &&
                          K.Z.showNotification(
                              u.getIconURL(128),
                              s.name,
                              en.intl.formatToPlainString(en.t.sqnsSE, {
                                  channelName: (0, S.F6)(s, X.default, z.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              { isUserAvatar: !1 }
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (ep() || !t.send_start_notification || eN(t.channel_id)) return !1;
                      let n = X.default.getCurrentUser(),
                          i = V.Z.getGuild(t.guild_id),
                          l = M.Z.getChannel(t.channel_id),
                          r = X.default.getUser(t.host_id);
                      if (null == n || null == l || null == i || null == r || !(0, P.LL)(n, r, l) || !W.Z.can(a.$e(ee.Plq.CONNECT, ee.Plq.VIEW_CHANNEL), l) || ed.has(t.id)) return !1;
                      ed.add(t.id),
                          K.Z.showNotification(
                              i.getIconURL(128),
                              en.intl.formatToPlainString(en.t.bZ4OkZ, { guildName: i.name }),
                              en.intl.formatToPlainString(en.t.qTelnJ, {
                                  username: J.ZP.getName(i.id, l.id, r),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: l.id
                              },
                              {
                                  onClick() {
                                      (0, L.Cq)(l);
                                  },
                                  isUserAvatar: !1
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      ed.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (ep() || null == t.notification_type) return !1;
                      t.notification_type === et.sy.EVENT_START &&
                          (t.entity_type === et.WX.STAGE_INSTANCE || t.entity_type === et.WX.VOICE
                              ? (function (e) {
                                    if (ep()) return;
                                    let t = e.channel_id;
                                    if (null == t || eN(t)) return;
                                    let n = X.default.getCurrentUser(),
                                        i = V.Z.getGuild(e.guild_id),
                                        l = M.Z.getChannel(e.channel_id),
                                        r = X.default.getUser(e.host_id);
                                    if (null != n && null != l && null != i && null != r && W.Z.can(a.$e(ee.Plq.CONNECT, ee.Plq.VIEW_CHANNEL), l))
                                        K.Z.showNotification(
                                            i.getIconURL(128),
                                            en.intl.formatToPlainString(en.t.bOu6Wl, { guildName: i.name }),
                                            en.intl.formatToPlainString(en.t.GV9L8v, {
                                                topic: e.name,
                                                username: J.ZP.getName(i.id, l.id, r)
                                            }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: i.id,
                                                channel_id: l.id
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === et.WX.STAGE_INSTANCE && (0, L.Cq)(l), e.entity_type === et.WX.VOICE && g.default.selectVoiceChannel(l.id);
                                                },
                                                isUserAvatar: !1
                                            }
                                        );
                                })(t)
                              : t.entity_type === et.WX.EXTERNAL &&
                                (function (e) {
                                    if (ep()) return;
                                    let t = X.default.getCurrentUser(),
                                        n = V.Z.getGuild(e.guild_id);
                                    if (null != t && null != n)
                                        K.Z.showNotification(
                                            n.getIconURL(128),
                                            en.intl.formatToPlainString(en.t.bOu6Wl, { guildName: n.name }),
                                            en.intl.formatToPlainString(en.t.mYyaRE, { topic: e.name }),
                                            {
                                                notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                                guild_id: n.id
                                            },
                                            {
                                                onClick() {
                                                    c.Z.transitionToGuildSync(e.guild_id), (0, I.bO)({ eventId: e.id });
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
                      let l = M.Z.getChannel(n.parent_id);
                      if (null == l || !ee.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, P.FI)(n, l, !eu)) return !1;
                      let { author: a, user: r } = (0, C.MC)(n);
                      if (null == r) return !1;
                      let o = V.Z.getGuild(l.guild_id);
                      if (null == o) return !1;
                      let u = en.intl.formatToPlainString(en.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: o.name
                          }),
                          s = en.intl.formatToPlainString(en.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null != (t = null == a ? void 0 : a.nick) ? t : null == r ? void 0 : r.username
                          }),
                          d = r.getAvatarURL(void 0, 128);
                      K.Z.showNotification(
                          d,
                          u,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: r.id
                          },
                          {
                              onClick() {
                                  (0, G.ok)(n);
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
                          let { enableInAppNotifications: e } = R.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null != (s = (0, m.Qj)(a))
                                  ? s
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (q.Z.getCurrentlySelectedChannelId() === t && eu)) return !1;
                      }
                      K.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: r },
                          {
                              onClick() {
                                  null != a && ((0, Z.Z)(a), f.default.clickedNotification());
                              },
                              tag: o,
                              isUserAvatar: u
                          }
                      ).then((e) => {
                          null != e && null != t && eg.track(t, e);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, $.isWindows)(),
                          t = (0, $.isLinux)();
                      if (!(!o.K.get(eo, !1) && $.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != es && (i = ef.includes(es)),
                          !!i &&
                              (K.Z.showNotification(
                                  n(95045),
                                  en.intl.string(en.t.VSgOVl),
                                  en.intl.string(en.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, O.uL)(ee.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          o.K.set(eo, !0);
                                      },
                                      isUserAvatar: !1
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return o.K.remove(eo), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n, presences: i } = e;
                      (es = t), ed.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ed.add(e.id))), (0, h.uw)('handleConnectionOpen') && eE(i, !1);
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (ep()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = M.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: a } = (0, P.Xi)(i, n, n.author);
                      K.Z.showNotification(
                          l,
                          en.intl.string(en.t.IjZJBw),
                          a,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, Z.Z)(ee.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              },
                              isUserAvatar: !0
                          }
                      );
                  },
                  PRESENCE_UPDATES: function (e) {
                      let { updates: t } = e;
                      (0, h.uw)('handlePresenceUpdates') && eE(t);
                  }
              }
    );
