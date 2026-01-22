n.d(t, {
    cH: () => ee,
    pD: () => et,
}),
    n(896048),
    n(321073);
var l,
    r = n(136722),
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(308528),
    c = n(367513),
    u = n(686956),
    d = n(264686),
    f = n(956793),
    p = n(77729),
    b = n(883600),
    g = n(47167),
    m = n(435470),
    h = n(707592),
    A = n(22007),
    y = n(380335),
    _ = n(141468),
    E = n(535586),
    v = n(742984),
    O = n(277628),
    x = n(976860),
    S = n(378570),
    N = n(323443),
    C = n(446600),
    j = n(747926),
    T = n(253932),
    I = n(260509),
    w = n(734057),
    R = n(71393),
    P = n(320501),
    D = n(803224),
    k = n(576705),
    L = n(222823),
    M = n(994500),
    U = n(309010),
    V = n(461213),
    F = n(351906),
    G = n(287809),
    H = n(977997),
    B = n(954571),
    Y = n(562153),
    W = n(723702),
    z = n(427262),
    K = n(970061),
    X = n(652215),
    Z = n(988794),
    J = n(672396),
    q = n(985018);

function Q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                Q(e, t, n[t]);
            });
    }
    return e;
}
let ee = "message1",
    et = 0.4,
    en = (null === p.A || void 0 === p.A ? void 0 : p.A.features.supports("notifications")) ? 20 : 1,
    el = "discord_dismissed_notification_shown",
    er = document.hasFocus(),
    ei = null,
    ea = new Set(),
    es = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    eo = new (class {
        track(e, t, n) {
            let l = this._channels[e];
            for (
                null == l && ((l = []), (this._channels[e] = l)),
                    l.push({
                        notification: t,
                        trackingProps: n,
                    });
                l.length > en;
            ) {
                var r;
                let e = l.shift();
                (null == e || null == (r = e.notification) ? void 0 : r.close) != null &&
                    (e.notification.close(),
                    B.default.track(
                        X.HAw.NOTIFICATION_ACTION,
                        $(
                            {
                                action: "REMOVE",
                            },
                            e.trackingProps,
                        ),
                    ));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(),
                        B.default.track(
                            X.HAw.NOTIFICATION_ACTION,
                            $(
                                {
                                    action: "ACK",
                                },
                                n,
                            ),
                        );
                }));
        }
        constructor() {
            Q(this, "_channels", {});
        }
    })();

function ec() {
    return !!(D.A.getDesktopType() === X.nRU.NEVER || V.A.getStatus() === X.clD.DND || T.NO.getSetting());
}

function eu(e) {
    return null != H.A.getVoiceStateForChannel(e);
}
class ed extends (l = i.Ay.Store) {
    initialize() {
        this.waitFor(b.A, w.A, R.A, y.A, P.A, D.A, k.A, M.A, U.A, V.A, C.A, F.A, G.default, H.A);
    }
}
Q(ed, "displayName", "NotificationStore"),
    new ed(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t !== X.kCE.ENABLED ||
                          W.isPlatformEmbedded ||
                          K.A.showNotification(
                              n(705194),
                              q.intl.string(q.t.VSgOVg),
                              q.intl.string(q.t["1UJvqc"]),
                              {
                                  notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                              },
                              {
                                  sound: ee,
                                  volume: et,
                                  tag: "hello",
                                  onClick: () => {
                                      window.focus();
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: l, trackingProps: r, options: i } = e;
                      return !ec() && (K.A.showNotification(t, n, l, r, i), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((er = e.focused)) {
                          let e = U.A.getChannelId();
                          null != e && eo.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, l, r;
                      let { channelId: i, message: a, optimistic: o } = e;
                      if (o) return !1;
                      let u = w.A.getChannel(i),
                          f = G.default.getUser(null == (l = a.author) ? void 0 : l.id),
                          p = G.default.getCurrentUser();
                      if (null == u || null == f || null == p) return !1;
                      let g = (0, v.lx)(a, i, !er),
                          m = D.A.getNotifyMessagesInSelectedChannel() && (0, v.kY)(a, i);
                      if (
                          (!g && !m) ||
                          (a.type === X.lAJ.CHANGELOG &&
                              (null == a.changelog_id || b.A.latestChangelogId() !== a.changelog_id))
                      )
                          return !1;
                      let h = !D.A.isSoundDisabled(ee);
                      if ((m && (h && K.A.playNotificationSound("message3", 0.4), !er)) || !g) return !1;
                      let A = n(242286).default,
                          y = n(592598).A;
                      if (
                          null != A.getFocusedPID() &&
                          !y.isNotificationDisabled(J.KS.TextChat) &&
                          !F.A.disableNotifications
                      )
                          return !1;
                      let { icon: x, title: N, body: C, emoji: j } = (0, v.TB)(u, a, f),
                          T = !(0, O.Z)("NotificationStore.handleMessage", null == p ? void 0 : p.id);
                      if (
                          (s.h.dispatch({
                              type: "RPC_NOTIFICATION_CREATE",
                              channelId: u.id,
                              message: a,
                              icon: x,
                              title: N,
                              body: C,
                          }),
                          (0, E.n)(a, u.guild_id),
                          D.A.getDesktopType() === X.nRU.NEVER)
                      )
                          return h && K.A.playNotificationSound(ee, et), !1;
                      let I = null != (t = P.A.getMessage(i, a.id)) ? t : (0, _.rh)(a);
                      K.A.showNotification(
                          x,
                          N,
                          C,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: null == (r = a.author) ? void 0 : r.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: u.id,
                              channel_type: u.type,
                              guild_id: u.guild_id,
                              badge: (0, L.Wm)(I, p),
                          },
                          {
                              omitViewTracking: T,
                              tag: a.id,
                              sound: h ? ee : void 0,
                              volume: et,
                              onClick() {
                                  (0, S.iN)(u.id),
                                      (u.type === X.rbe.GUILD_VOICE || u.type === X.rbe.GUILD_STAGE_VOICE) &&
                                          c.A.updateChatOpen(u.id, !0),
                                      d.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: I,
                              fallbackDeepLink: (0, K.I)(X.BVt.CHANNEL(u.guild_id, u.id, a.id)),
                              emoji: j,
                          },
                      ).then((e) => {
                          null != e && eo.track(u.id, e.notification, e.trackingProps);
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && eo.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return eo.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (ec() || n.type !== X.$pd.PLAYING) return !1;
                      {
                          let e = G.default.getUser(t);
                          if (null == e) return !1;
                          let l = z.Ay.getName(e),
                              r = n.name,
                              i = e.getAvatarURL(void 0, 128),
                              a = q.intl.string(q.t.XoTWsI),
                              s = q.intl.formatToPlainString(q.t.o4Aipn, {
                                  username: l,
                                  gameName: r,
                              });
                          return (
                              K.A.showNotification(
                                  i,
                                  a,
                                  s,
                                  {
                                      notif_type: "ACTIVITY_START",
                                      activity_type: X.$pd.PLAYING,
                                      notif_user_id: t,
                                      activity_name: r,
                                  },
                                  {
                                      sound: "message2",
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          o.A.openPrivateChannel({
                                              recipientIds: t,
                                          });
                                      },
                                      isUserAvatar: !0,
                                  },
                              ),
                              !1
                          );
                      }
                  },
                  VOICE_STATE_UPDATES: function (e) {
                      let { voiceStates: t } = e;
                      if (ec()) return;
                      let n = G.default.getCurrentUser();
                      if (null == n) return;
                      let l = t.find((e) => e.userId === n.id);
                      if (null == l) return;
                      let { channelId: r, guildId: i, suppress: a, requestToSpeakTimestamp: s } = l;
                      if (null == r || null == i || !(!a && null != s)) return;
                      let o = R.A.getGuild(i),
                          c = w.A.getChannel(r),
                          u = C.A.getStageInstanceByChannel(r);
                      null != o &&
                          null != c &&
                          null != u &&
                          K.A.showNotification(
                              (0, I.Iv)(o, 128),
                              c.name,
                              q.intl.formatToPlainString(q.t.sqnsSP, {
                                  channelName: (0, g.m1)(c, G.default, M.A),
                                  channelTopic: null == u ? void 0 : u.topic,
                              }),
                              {
                                  notif_type: "Stage Speak Invite",
                              },
                              {
                                  isUserAvatar: !1,
                              },
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (ec() || !t.send_start_notification || eu(t.channel_id)) return !1;
                      let n = G.default.getCurrentUser(),
                          l = R.A.getGuild(t.guild_id),
                          i = w.A.getChannel(t.channel_id),
                          a = G.default.getUser(t.host_id);
                      if (
                          null == n ||
                          null == i ||
                          null == l ||
                          null == a ||
                          !(0, v.Wv)(n, a, i) ||
                          !k.A.can(r.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), i) ||
                          ea.has(t.id)
                      )
                          return !1;
                      ea.add(t.id),
                          K.A.showNotification(
                              (0, I.Iv)(l, 128),
                              q.intl.formatToPlainString(q.t.bZ4Okd, {
                                  guildName: l.name,
                              }),
                              q.intl.formatToPlainString(q.t.qTelnO, {
                                  username: Y.Ay.getName(l.id, i.id, a),
                                  topic: t.topic,
                              }),
                              {
                                  notif_type: "STAGE_INSTANCE_CREATE",
                                  guild_id: l.id,
                                  channel_id: i.id,
                              },
                              {
                                  onClick() {
                                      (0, N.av)(i);
                                  },
                                  isUserAvatar: !1,
                              },
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      ea.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (ec() || null == t.notification_type) return !1;
                      t.notification_type === Z.b8.EVENT_START &&
                          (t.entity_type === Z.Ps.STAGE_INSTANCE || t.entity_type === Z.Ps.VOICE
                              ? (function (e) {
                                    if (ec()) return;
                                    let t = e.channel_id;
                                    if (null == t || eu(t)) return;
                                    let n = G.default.getCurrentUser(),
                                        l = R.A.getGuild(e.guild_id),
                                        i = w.A.getChannel(e.channel_id),
                                        a = G.default.getUser(e.host_id);
                                    null != n &&
                                        null != i &&
                                        null != l &&
                                        null != a &&
                                        k.A.can(r.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), i) &&
                                        K.A.showNotification(
                                            (0, I.Iv)(l, 128),
                                            q.intl.formatToPlainString(q.t.bOu6Wn, {
                                                guildName: l.name,
                                            }),
                                            q.intl.formatToPlainString(q.t.GV9L8u, {
                                                topic: e.name,
                                                username: Y.Ay.getName(l.id, i.id, a),
                                            }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: l.id,
                                                channel_id: i.id,
                                            },
                                            {
                                                onClick() {
                                                    e.entity_type === Z.Ps.STAGE_INSTANCE && (0, N.av)(i),
                                                        e.entity_type === Z.Ps.VOICE &&
                                                            f.default.selectVoiceChannel(i.id);
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(t)
                              : t.entity_type === Z.Ps.EXTERNAL &&
                                (function (e) {
                                    if (ec()) return;
                                    let t = G.default.getCurrentUser(),
                                        n = R.A.getGuild(e.guild_id);
                                    null == t ||
                                        null == n ||
                                        K.A.showNotification(
                                            (0, I.Iv)(n, 128),
                                            q.intl.formatToPlainString(q.t.bOu6Wn, {
                                                guildName: n.name,
                                            }),
                                            q.intl.formatToPlainString(q.t.mYyaRB, {
                                                topic: e.name,
                                            }),
                                            {
                                                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                                guild_id: n.id,
                                            },
                                            {
                                                onClick() {
                                                    u.A.transitionToGuildSync(e.guild_id),
                                                        (0, h.uR)({
                                                            eventId: e.id,
                                                        });
                                                },
                                                isUserAvatar: !1,
                                            },
                                        );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: l } = e;
                      if (ec()) return !1;
                      let r = w.A.getChannel(n.parent_id);
                      if (null == r || !X.kvI.GUILD_THREADS_ONLY.has(r.type) || !l || !(0, v.q1)(n, r, !er)) return !1;
                      let { author: i, user: a } = (0, m.tY)(n);
                      if (null == a) return !1;
                      let s = R.A.getGuild(r.guild_id);
                      if (null == s) return !1;
                      let o = q.intl.formatToPlainString(q.t["2IGVl5"], {
                              channelName: r.name,
                              guildName: s.name,
                          }),
                          c = q.intl.formatToPlainString(q.t.jPhTvT, {
                              channelName: n.name,
                              userUsername:
                                  null != (t = null == i ? void 0 : i.nick) ? t : null == a ? void 0 : a.username,
                          }),
                          u = a.getAvatarURL(void 0, 128);
                      K.A.showNotification(
                          u,
                          o,
                          c,
                          {
                              notif_type: "THREAD_CREATE",
                              notif_user_id: a.id,
                          },
                          {
                              onClick() {
                                  (0, j.JA)(n);
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: l, body: r, route: i, trackingType: a, tag: s } = e;
                      if (
                          ec() ||
                          null == l ||
                          null == r ||
                          null == a ||
                          "reactions_push_notification" === a.toLowerCase()
                      )
                          return !1;
                      K.A.showNotification(
                          n,
                          l,
                          r,
                          {
                              notif_type: a,
                          },
                          {
                              onClick() {
                                  null != i && ((0, A.A)(i), d.default.clickedNotification());
                              },
                              tag: s,
                              isUserAvatar: !1,
                          },
                      ).then((e) => {
                          null != e && null != t && eo.track(t, e.notification, e.trackingProps);
                      });
                  },
                  REACTION_NOTIFICATION_SENT: function (e) {
                      let { icon: t, title: n, body: l, route: r, trackingType: i, message: a } = e;
                      if (ec() || null == n || null == l || null == i) return !1;
                      let s = a.channel_id;
                      if (null == s || (U.A.getCurrentlySelectedChannelId() === s && er)) return !1;
                      K.A.showNotification(
                          t,
                          n,
                          l,
                          {
                              notif_type: i,
                          },
                          {
                              onClick() {
                                  null != r && ((0, A.A)(r), d.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                          },
                      ).then((e) => {
                          null != e && null != s && eo.track(s, e.notification, e.trackingProps);
                      });
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, W.isWindows)(),
                          t = (0, W.isLinux)();
                      if (!(!a.w.get(el, !1) && W.isPlatformEmbedded && (e || t))) return !1;
                      let l = !1;
                      return (
                          null != ei && (l = es.includes(ei)),
                          !!l &&
                              (K.A.showNotification(
                                  n(608598),
                                  q.intl.string(q.t.VSgOVg),
                                  q.intl.string(q.t["+J/F66"]),
                                  {
                                      notif_type: "WINDOW_HIDDEN",
                                  },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, x.pX)(X.BVt.SETTINGS(e ? "windows" : "linux"));
                                      },
                                      onShown: () => {
                                          a.w.set(el, !0);
                                      },
                                      isUserAvatar: !1,
                                  },
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.w.remove(el), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (ei = t), ea.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ea.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (ec()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let l = w.A.getChannel(t.saveData.channelId);
                      if (null == l) return !1;
                      let { icon: r, body: i } = (0, v.TB)(l, n, n.author);
                      K.A.showNotification(
                          r,
                          q.intl.string(q.t.IjZJB5),
                          i,
                          {
                              notif_type: "MESSAGE_REMINDER_DUE",
                          },
                          {
                              onClick() {
                                  (0, A.A)(X.BVt.CHANNEL(null == l ? void 0 : l.getGuildId(), l.id, n.id));
                              },
                              isUserAvatar: !0,
                          },
                      );
                  },
              },
    );
