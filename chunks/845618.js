n.d(e, { cH: () => te, pD: () => tn }), n(321073);
var i = n(136722),
    l = n(311907),
    a = n(506774),
    o = n(73153),
    r = n(308528),
    u = n(367513),
    s = n(686956),
    c = n(264686),
    d = n(956793),
    f = n(77729),
    A = n(883600),
    _ = n(47167),
    g = n(435470),
    T = n(707592),
    E = n(22007),
    h = n(380335),
    N = n(141468),
    I = n(535586),
    S = n(742984),
    C = n(571524),
    p = n(277628),
    m = n(695515),
    y = n(976860),
    R = n(378570),
    O = n(323443),
    D = n(446600),
    P = n(747926),
    U = n(253932),
    b = n(718446),
    v = n(260509),
    L = n(734057),
    k = n(71393),
    V = n(320501),
    w = n(803224),
    G = n(576705),
    M = n(222823),
    F = n(994500),
    H = n(309010),
    W = n(461213),
    Y = n(351906),
    q = n(287809),
    x = n(977997),
    B = n(954571),
    K = n(562153),
    J = n(723702),
    Z = n(427262),
    z = n(970061),
    X = n(652215),
    j = n(988794),
    Q = n(672396),
    $ = n(355097),
    tt = n(985018);
let te = "message1",
    tn = 0.4,
    ti = f.A?.features.supports("notifications") ? 20 : 1,
    tl = "discord_dismissed_notification_shown",
    ta = document.hasFocus(),
    to = null,
    tr = new Set(),
    tu = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ts = new (class {
        _channels = {};
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)), i.push({ notification: e, trackingProps: n });
                i.length > ti;
            ) {
                let t = i.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    B.default.track(X.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    e.close(), B.default.track(X.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function tc() {
    return !!(
        w.A.getDesktopType() === X.nRU.NEVER ||
        W.A.getStatus() === X.clD.DND ||
        U.NO.getSetting() ||
        m.A.isCurrentUserInRestrictedHours()
    );
}
function td(t) {
    return null != x.A.getVoiceStateForChannel(t);
}
class tf extends l.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(A.A, L.A, m.A, k.A, h.A, V.A, w.A, G.A, F.A, H.A, W.A, D.A, Y.A, q.default, x.A);
    }
}
new tf(
    o.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== X.kCE.ENABLED ||
                      J.isPlatformEmbedded ||
                      z.A.showNotification(
                          n(705194),
                          tt.intl.string(tt.t.VSgOVg),
                          tt.intl.string(tt.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: te,
                              volume: tn,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (t) {
                  let { icon: e, title: n, body: i, trackingProps: l, options: a } = t;
                  return !tc() && (z.A.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((ta = t.focused)) {
                      let t = H.A.getChannelId();
                      null != t && ts.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  let { channelId: e, message: i, optimistic: l } = t;
                  if (l) return !1;
                  let a = L.A.getChannel(e),
                      r = q.default.getUser(i.author?.id),
                      s = q.default.getCurrentUser();
                  if (null == a || null == r || null == s) return !1;
                  let d = (0, S.lx)(i, e, !ta),
                      f = w.A.getNotifyMessagesInSelectedChannel() && (0, S.kY)(i, e);
                  if (
                      (!d && !f) ||
                      tc() ||
                      (i.type === X.lAJ.CHANGELOG &&
                          (null == i.changelog_id || A.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let _ = !w.A.isSoundDisabled(te);
                  if ((f && (_ && z.A.playNotificationSound("message3", 0.4), !ta)) || !d) return !1;
                  let g = n(242286).default,
                      T = n(592598).A;
                  if (
                      null != g.getFocusedPID() &&
                      !T.isNotificationDisabled(Q.KS.TextChat) &&
                      !Y.A.disableNotifications
                  )
                      return !1;
                  let { icon: E, title: h, body: C, emoji: m } = (0, S.TB)(a, i, r),
                      y = !(0, p.Z)("NotificationStore.handleMessage", s?.id);
                  if (
                      (o.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: a.id,
                          message: i,
                          icon: E,
                          title: h,
                          body: C,
                      }),
                      (0, I.n)(i, a.guild_id),
                      w.A.getDesktopType() === X.nRU.NEVER)
                  )
                      return _ && z.A.playNotificationSound(te, tn), !1;
                  let O = V.A.getMessage(e, i.id) ?? (0, N.rh)(i);
                  z.A.showNotification(
                      E,
                      h,
                      C,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: a.id,
                          channel_type: a.type,
                          guild_id: a.guild_id,
                          badge: (0, M.Wm)(O, s),
                      },
                      {
                          omitViewTracking: y,
                          tag: i.id,
                          sound: _ ? te : void 0,
                          volume: tn,
                          onClick() {
                              (0, R.iN)(a.id),
                                  (a.type === X.rbe.GUILD_VOICE || a.type === X.rbe.GUILD_STAGE_VOICE) &&
                                      u.A.updateChatOpen(a.id, !0),
                                  c.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: O,
                          fallbackDeepLink: (0, z.I)(X.BVt.CHANNEL(a.guild_id, a.id, i.id)),
                          emoji: m,
                      },
                  ).then((t) => {
                      null != t && ts.track(a.id, t.notification, t.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return null != e && ts.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return ts.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (tc() || n.type !== X.$pd.PLAYING) return !1;
                  {
                      let t = q.default.getUser(e);
                      if (null == t) return !1;
                      let i = Z.Ay.getName(t),
                          l = n.name,
                          a = t.getAvatarURL(void 0, 128),
                          o = tt.intl.string(tt.t.XoTWsI),
                          u = tt.intl.formatToPlainString(tt.t.o4Aipn, { username: i, gameName: l });
                      return (
                          z.A.showNotification(
                              a,
                              o,
                              u,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: X.$pd.PLAYING,
                                  notif_user_id: e,
                                  activity_name: l,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      r.A.openPrivateChannel({ recipientIds: e });
                                  },
                                  isUserAvatar: !0,
                              },
                          ),
                          !1
                      );
                  }
              },
              VOICE_STATE_UPDATES: function (t) {
                  let { voiceStates: e } = t;
                  if (tc()) return;
                  let n = q.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: o, requestToSpeakTimestamp: r } = i;
                  if (null == l || null == a || !(!o && null != r)) return;
                  let u = k.A.getGuild(a),
                      s = L.A.getChannel(l),
                      c = D.A.getStageInstanceByChannel(l);
                  null != u &&
                      null != s &&
                      null != c &&
                      z.A.showNotification(
                          (0, v.Iv)(u, 128),
                          (0, _.m1)(s, q.default, F.A),
                          tt.intl.formatToPlainString(tt.t.sqnsSP, {
                              channelName: (0, _.m1)(s, q.default, F.A),
                              channelTopic: c?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (tc() || !e.send_start_notification || td(e.channel_id)) return !1;
                  let n = q.default.getCurrentUser(),
                      l = k.A.getGuild(e.guild_id),
                      a = L.A.getChannel(e.channel_id),
                      o = q.default.getUser(e.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == l ||
                      null == o ||
                      !(0, S.Wv)(n, o, a) ||
                      !G.A.can(i.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), a) ||
                      tr.has(e.id)
                  )
                      return !1;
                  tr.add(e.id),
                      z.A.showNotification(
                          (0, v.Iv)(l, 128),
                          tt.intl.formatToPlainString(tt.t.bZ4Okd, { guildName: l.name }),
                          tt.intl.formatToPlainString(tt.t.qTelnO, {
                              username: K.Ay.getName(l.id, a.id, o),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: l.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, O.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  tr.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (tc() || null == e.notification_type) return !1;
                  e.notification_type === j.b8.EVENT_START &&
                      (e.entity_type === j.Ps.STAGE_INSTANCE || e.entity_type === j.Ps.VOICE
                          ? (function (t) {
                                if (tc()) return;
                                let e = t.channel_id;
                                if (null == e || td(e)) return;
                                let n = q.default.getCurrentUser(),
                                    l = k.A.getGuild(t.guild_id),
                                    a = L.A.getChannel(t.channel_id),
                                    o = q.default.getUser(t.host_id);
                                null != n &&
                                    null != a &&
                                    null != l &&
                                    null != o &&
                                    G.A.can(i.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), a) &&
                                    z.A.showNotification(
                                        (0, v.Iv)(l, 128),
                                        tt.intl.formatToPlainString(tt.t.bOu6Wn, { guildName: l.name }),
                                        tt.intl.formatToPlainString(tt.t.GV9L8u, {
                                            topic: t.name,
                                            username: K.Ay.getName(l.id, a.id, o),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: l.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === j.Ps.STAGE_INSTANCE && (0, O.av)(a),
                                                    t.entity_type === j.Ps.VOICE && d.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === j.Ps.EXTERNAL &&
                            (function (t) {
                                if (tc()) return;
                                let e = q.default.getCurrentUser(),
                                    n = k.A.getGuild(t.guild_id);
                                null == e ||
                                    null == n ||
                                    z.A.showNotification(
                                        (0, v.Iv)(n, 128),
                                        tt.intl.formatToPlainString(tt.t.bOu6Wn, { guildName: n.name }),
                                        tt.intl.formatToPlainString(tt.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                s.A.transitionToGuildSync(t.guild_id), (0, T.uR)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e));
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: n } = t;
                  if (tc()) return !1;
                  let i = L.A.getChannel(e.parent_id);
                  if (null == i || !X.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, S.q1)(e, i, !ta)) return !1;
                  let { author: l, user: a } = (0, g.tY)(e);
                  if (null == a) return !1;
                  let o = k.A.getGuild(i.guild_id);
                  if (null == o) return !1;
                  let r = tt.intl.formatToPlainString(tt.t["2IGVl5"], {
                          channelName: (0, _.m1)(i, q.default, F.A),
                          guildName: o.name,
                      }),
                      u = tt.intl.formatToPlainString(tt.t.jPhTvT, {
                          channelName: (0, _.m1)(e, q.default, F.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  z.A.showNotification(
                      s,
                      r,
                      u,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, P.JA)(e);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let e,
                      { icon: n, title: i, body: l, route: a, trackingType: o, tag: r } = t;
                  if (tc() || null == i || null == l || null == o || "reactions_push_notification" === o.toLowerCase())
                      return !1;
                  z.A.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: o },
                      {
                          onClick() {
                              null != a && ((0, E.A)(a), c.default.clickedNotification());
                          },
                          tag: r,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && ts.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: n, body: i, route: l, trackingType: a, message: o, reactorUserId: r } = t;
                  if (tc() || null == n || null == i || null == a) return !1;
                  let u = o.channel_id;
                  if (null == u || (H.A.getCurrentlySelectedChannelId() === u && ta)) return !1;
                  let s = L.A.getChannel(u);
                  if (null == s) return !1;
                  if (s.type === X.rbe.GROUP_DM) {
                      let t = q.default.getCurrentUser();
                      if (
                          o.author?.id !== t?.id &&
                          !C.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  z.A.showNotification(
                      e,
                      n,
                      i,
                      { notif_type: a, notif_user_id: r, message_id: o.id },
                      {
                          onClick() {
                              null != l && ((0, E.A)(l), c.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != u && ts.track(u, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, J.isWindows)(),
                      e = (0, J.isLinux)();
                  if (!(!a.w.get(tl, !1) && J.isPlatformEmbedded && (t || e))) return !1;
                  let i = !1;
                  return (
                      null != to && (i = tu.includes(to)),
                      !!i &&
                          (z.A.showNotification(
                              n(608598),
                              tt.intl.string(tt.t.VSgOVg),
                              tt.intl.string(tt.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, y.pX)((0, b.settingsPathToRoute)(t ? $.od.WINDOWS : $.od.LINUX));
                                  },
                                  onShown: () => {
                                      a.w.set(tl, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return a.w.remove(tl), !1;
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  (to = e), tr.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tr.add(t.id)));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (tc()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = L.A.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, S.TB)(i, n, n.author);
                  z.A.showNotification(
                      l,
                      tt.intl.string(tt.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, E.A)(X.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: i } = t;
                  if (tc()) return !1;
                  z.A.showNotification(
                      n(608598),
                      e,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
