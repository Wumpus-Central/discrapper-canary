n.d(t, { cH: () => Z, pD: () => Q }), n(321073);
var i = n(136722),
    l = n(311907),
    s = n(506774),
    a = n(73153),
    r = n(308528),
    o = n(367513),
    c = n(686956),
    d = n(264686),
    u = n(956793),
    h = n(77729),
    m = n(883600),
    A = n(47167),
    g = n(435470),
    p = n(707592),
    f = n(22007),
    _ = n(380335),
    E = n(141468),
    C = n(535586),
    x = n(742984),
    S = n(277628),
    T = n(695515),
    N = n(976860),
    I = n(378570),
    v = n(323443),
    y = n(446600),
    b = n(747926),
    j = n(253932),
    R = n(260509),
    M = n(734057),
    D = n(71393),
    O = n(320501),
    L = n(803224),
    P = n(576705),
    w = n(222823),
    k = n(994500),
    U = n(309010),
    G = n(461213),
    F = n(351906),
    H = n(287809),
    B = n(977997),
    V = n(954571),
    K = n(562153),
    W = n(723702),
    z = n(427262),
    Y = n(970061),
    q = n(652215),
    J = n(988794),
    $ = n(672396),
    X = n(985018);
let Z = "message1",
    Q = 0.4,
    ee = h.A?.features.supports("notifications") ? 20 : 1,
    et = "discord_dismissed_notification_shown",
    en = document.hasFocus(),
    ei = null,
    el = new Set(),
    es = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ea = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > ee;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    V.default.track(q.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), V.default.track(q.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function er() {
    return !!(
        L.A.getDesktopType() === q.nRU.NEVER ||
        G.A.getStatus() === q.clD.DND ||
        j.NO.getSetting() ||
        T.A.isCurrentUserInRestrictedHours()
    );
}
function eo(e) {
    return null != B.A.getVoiceStateForChannel(e);
}
class ec extends l.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(m.A, M.A, T.A, D.A, _.A, O.A, L.A, P.A, k.A, U.A, G.A, y.A, F.A, H.default, B.A);
    }
}
new ec(
    a.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== q.kCE.ENABLED ||
                      W.isPlatformEmbedded ||
                      Y.A.showNotification(
                          n(705194),
                          X.intl.string(X.t.VSgOVg),
                          X.intl.string(X.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: Z,
                              volume: Q,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (e) {
                  let { icon: t, title: n, body: i, trackingProps: l, options: s } = e;
                  return !er() && (Y.A.showNotification(t, n, i, l, s), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((en = e.focused)) {
                      let e = U.A.getChannelId();
                      null != e && ea.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: i, optimistic: l } = e;
                  if (l) return !1;
                  let s = M.A.getChannel(t),
                      r = H.default.getUser(i.author?.id),
                      c = H.default.getCurrentUser();
                  if (null == s || null == r || null == c) return !1;
                  let u = (0, x.lx)(i, t, !en),
                      h = L.A.getNotifyMessagesInSelectedChannel() && (0, x.kY)(i, t);
                  if (
                      (!u && !h) ||
                      (i.type === q.lAJ.CHANGELOG &&
                          (null == i.changelog_id || m.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let A = !L.A.isSoundDisabled(Z);
                  if ((h && (A && Y.A.playNotificationSound("message3", 0.4), !en)) || !u) return !1;
                  let g = n(242286).default,
                      p = n(592598).A;
                  if (
                      null != g.getFocusedPID() &&
                      !p.isNotificationDisabled($.KS.TextChat) &&
                      !F.A.disableNotifications
                  )
                      return !1;
                  let { icon: f, title: _, body: T, emoji: N } = (0, x.TB)(s, i, r),
                      v = !(0, S.Z)("NotificationStore.handleMessage", c?.id);
                  if (
                      (a.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: s.id,
                          message: i,
                          icon: f,
                          title: _,
                          body: T,
                      }),
                      (0, C.n)(i, s.guild_id),
                      L.A.getDesktopType() === q.nRU.NEVER)
                  )
                      return A && Y.A.playNotificationSound(Z, Q), !1;
                  let y = O.A.getMessage(t, i.id) ?? (0, E.rh)(i);
                  Y.A.showNotification(
                      f,
                      _,
                      T,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: s.id,
                          channel_type: s.type,
                          guild_id: s.guild_id,
                          badge: (0, w.Wm)(y, c),
                      },
                      {
                          omitViewTracking: v,
                          tag: i.id,
                          sound: A ? Z : void 0,
                          volume: Q,
                          onClick() {
                              (0, I.iN)(s.id),
                                  (s.type === q.rbe.GUILD_VOICE || s.type === q.rbe.GUILD_STAGE_VOICE) &&
                                      o.A.updateChatOpen(s.id, !0),
                                  d.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: y,
                          fallbackDeepLink: (0, Y.I)(q.BVt.CHANNEL(s.guild_id, s.id, i.id)),
                          emoji: N,
                      },
                  ).then((e) => {
                      null != e && ea.track(s.id, e.notification, e.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && ea.clearChannel(t), !1;
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return ea.clearChannel(t), !1;
              },
              ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (er() || n.type !== q.$pd.PLAYING) return !1;
                  {
                      let e = H.default.getUser(t);
                      if (null == e) return !1;
                      let i = z.Ay.getName(e),
                          l = n.name,
                          s = e.getAvatarURL(void 0, 128),
                          a = X.intl.string(X.t.XoTWsI),
                          o = X.intl.formatToPlainString(X.t.o4Aipn, { username: i, gameName: l });
                      return (
                          Y.A.showNotification(
                              s,
                              a,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: q.$pd.PLAYING,
                                  notif_user_id: t,
                                  activity_name: l,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      r.A.openPrivateChannel({ recipientIds: t });
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
                  if (er()) return;
                  let n = H.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: s, suppress: a, requestToSpeakTimestamp: r } = i;
                  if (null == l || null == s || !(!a && null != r)) return;
                  let o = D.A.getGuild(s),
                      c = M.A.getChannel(l),
                      d = y.A.getStageInstanceByChannel(l);
                  null != o &&
                      null != c &&
                      null != d &&
                      Y.A.showNotification(
                          (0, R.Iv)(o, 128),
                          c.name,
                          X.intl.formatToPlainString(X.t.sqnsSP, {
                              channelName: (0, A.m1)(c, H.default, k.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (er() || !t.send_start_notification || eo(t.channel_id)) return !1;
                  let n = H.default.getCurrentUser(),
                      l = D.A.getGuild(t.guild_id),
                      s = M.A.getChannel(t.channel_id),
                      a = H.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == s ||
                      null == l ||
                      null == a ||
                      !(0, x.Wv)(n, a, s) ||
                      !P.A.can(i.kg(q.xBc.CONNECT, q.xBc.VIEW_CHANNEL), s) ||
                      el.has(t.id)
                  )
                      return !1;
                  el.add(t.id),
                      Y.A.showNotification(
                          (0, R.Iv)(l, 128),
                          X.intl.formatToPlainString(X.t.bZ4Okd, { guildName: l.name }),
                          X.intl.formatToPlainString(X.t.qTelnO, {
                              username: K.Ay.getName(l.id, s.id, a),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: l.id, channel_id: s.id },
                          {
                              onClick() {
                                  (0, v.av)(s);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  el.delete(t.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (er() || null == t.notification_type) return !1;
                  t.notification_type === J.b8.EVENT_START &&
                      (t.entity_type === J.Ps.STAGE_INSTANCE || t.entity_type === J.Ps.VOICE
                          ? (function (e) {
                                if (er()) return;
                                let t = e.channel_id;
                                if (null == t || eo(t)) return;
                                let n = H.default.getCurrentUser(),
                                    l = D.A.getGuild(e.guild_id),
                                    s = M.A.getChannel(e.channel_id),
                                    a = H.default.getUser(e.host_id);
                                null != n &&
                                    null != s &&
                                    null != l &&
                                    null != a &&
                                    P.A.can(i.kg(q.xBc.CONNECT, q.xBc.VIEW_CHANNEL), s) &&
                                    Y.A.showNotification(
                                        (0, R.Iv)(l, 128),
                                        X.intl.formatToPlainString(X.t.bOu6Wn, { guildName: l.name }),
                                        X.intl.formatToPlainString(X.t.GV9L8u, {
                                            topic: e.name,
                                            username: K.Ay.getName(l.id, s.id, a),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: l.id,
                                            channel_id: s.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === J.Ps.STAGE_INSTANCE && (0, v.av)(s),
                                                    e.entity_type === J.Ps.VOICE && u.default.selectVoiceChannel(s.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === J.Ps.EXTERNAL &&
                            (function (e) {
                                if (er()) return;
                                let t = H.default.getCurrentUser(),
                                    n = D.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    Y.A.showNotification(
                                        (0, R.Iv)(n, 128),
                                        X.intl.formatToPlainString(X.t.bOu6Wn, { guildName: n.name }),
                                        X.intl.formatToPlainString(X.t.mYyaRB, { topic: e.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                c.A.transitionToGuildSync(e.guild_id), (0, p.uR)({ eventId: e.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t));
              },
              THREAD_CREATE: function (e) {
                  let { channel: t, isNewlyCreated: n } = e;
                  if (er()) return !1;
                  let i = M.A.getChannel(t.parent_id);
                  if (null == i || !q.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, x.q1)(t, i, !en)) return !1;
                  let { author: l, user: s } = (0, g.tY)(t);
                  if (null == s) return !1;
                  let a = D.A.getGuild(i.guild_id);
                  if (null == a) return !1;
                  let r = X.intl.formatToPlainString(X.t["2IGVl5"], { channelName: i.name, guildName: a.name }),
                      o = X.intl.formatToPlainString(X.t.jPhTvT, {
                          channelName: t.name,
                          userUsername: l?.nick ?? s?.username,
                      }),
                      c = s.getAvatarURL(void 0, 128);
                  Y.A.showNotification(
                      c,
                      r,
                      o,
                      { notif_type: "THREAD_CREATE", notif_user_id: s.id },
                      {
                          onClick() {
                              (0, b.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: l, route: s, trackingType: a, tag: r } = e;
                  if (er() || null == i || null == l || null == a || "reactions_push_notification" === a.toLowerCase())
                      return !1;
                  Y.A.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: a },
                      {
                          onClick() {
                              null != s && ((0, f.A)(s), d.default.clickedNotification());
                          },
                          tag: r,
                          isUserAvatar: !1,
                      },
                  ).then((e) => {
                      null != e && null != t && ea.track(t, e.notification, e.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (e) {
                  let { icon: t, title: n, body: i, route: l, trackingType: s, message: a } = e;
                  if (er() || null == n || null == i || null == s) return !1;
                  let r = a.channel_id;
                  if (null == r || (U.A.getCurrentlySelectedChannelId() === r && en)) return !1;
                  Y.A.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: s },
                      {
                          onClick() {
                              null != l && ((0, f.A)(l), d.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((e) => {
                      null != e && null != r && ea.track(r, e.notification, e.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let e = (0, W.isWindows)(),
                      t = (0, W.isLinux)();
                  if (!(!s.w.get(et, !1) && W.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != ei && (i = es.includes(ei)),
                      !!i &&
                          (Y.A.showNotification(
                              n(608598),
                              X.intl.string(X.t.VSgOVg),
                              X.intl.string(X.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, N.pX)(q.BVt.SETTINGS(e ? "windows" : "linux"));
                                  },
                                  onShown: () => {
                                      s.w.set(et, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return s.w.remove(et), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (ei = t), el.clear(), n.forEach((e) => e.stage_instances.forEach((e) => el.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (er()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = M.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: s } = (0, x.TB)(i, n, n.author);
                  Y.A.showNotification(
                      l,
                      X.intl.string(X.t.IjZJB5),
                      s,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, f.A)(q.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
          },
);
