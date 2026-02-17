n.d(t, { cH: () => Q, pD: () => ee }), n(321073);
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
    S = n(571524),
    T = n(277628),
    N = n(695515),
    I = n(976860),
    v = n(378570),
    y = n(323443),
    b = n(446600),
    j = n(747926),
    R = n(253932),
    M = n(260509),
    D = n(734057),
    O = n(71393),
    L = n(320501),
    P = n(803224),
    w = n(576705),
    k = n(222823),
    U = n(994500),
    G = n(309010),
    F = n(461213),
    H = n(351906),
    B = n(287809),
    V = n(977997),
    K = n(954571),
    W = n(562153),
    z = n(723702),
    Y = n(427262),
    q = n(970061),
    J = n(652215),
    $ = n(988794),
    X = n(672396),
    Z = n(985018);
let Q = "message1",
    ee = 0.4,
    et = h.A?.features.supports("notifications") ? 20 : 1,
    en = "discord_dismissed_notification_shown",
    ei = document.hasFocus(),
    el = null,
    es = new Set(),
    ea = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    er = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > et;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    K.default.track(J.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), K.default.track(J.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function eo() {
    return !!(
        P.A.getDesktopType() === J.nRU.NEVER ||
        F.A.getStatus() === J.clD.DND ||
        R.NO.getSetting() ||
        N.A.isCurrentUserInRestrictedHours()
    );
}
function ec(e) {
    return null != V.A.getVoiceStateForChannel(e);
}
class ed extends l.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(m.A, D.A, N.A, O.A, _.A, L.A, P.A, w.A, U.A, G.A, F.A, b.A, H.A, B.default, V.A);
    }
}
new ed(
    a.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== J.kCE.ENABLED ||
                      z.isPlatformEmbedded ||
                      q.A.showNotification(
                          n(705194),
                          Z.intl.string(Z.t.VSgOVg),
                          Z.intl.string(Z.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: Q,
                              volume: ee,
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
                  return !eo() && (q.A.showNotification(t, n, i, l, s), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((ei = e.focused)) {
                      let e = G.A.getChannelId();
                      null != e && er.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: i, optimistic: l } = e;
                  if (l) return !1;
                  let s = D.A.getChannel(t),
                      r = B.default.getUser(i.author?.id),
                      c = B.default.getCurrentUser();
                  if (null == s || null == r || null == c) return !1;
                  let u = (0, x.lx)(i, t, !ei),
                      h = P.A.getNotifyMessagesInSelectedChannel() && (0, x.kY)(i, t);
                  if (
                      (!u && !h) ||
                      (i.type === J.lAJ.CHANGELOG &&
                          (null == i.changelog_id || m.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let A = !P.A.isSoundDisabled(Q);
                  if ((h && (A && q.A.playNotificationSound("message3", 0.4), !ei)) || !u) return !1;
                  let g = n(242286).default,
                      p = n(592598).A;
                  if (
                      null != g.getFocusedPID() &&
                      !p.isNotificationDisabled(X.KS.TextChat) &&
                      !H.A.disableNotifications
                  )
                      return !1;
                  let { icon: f, title: _, body: S, emoji: N } = (0, x.TB)(s, i, r),
                      I = !(0, T.Z)("NotificationStore.handleMessage", c?.id);
                  if (
                      (a.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: s.id,
                          message: i,
                          icon: f,
                          title: _,
                          body: S,
                      }),
                      (0, C.n)(i, s.guild_id),
                      P.A.getDesktopType() === J.nRU.NEVER)
                  )
                      return A && q.A.playNotificationSound(Q, ee), !1;
                  let y = L.A.getMessage(t, i.id) ?? (0, E.rh)(i);
                  q.A.showNotification(
                      f,
                      _,
                      S,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: s.id,
                          channel_type: s.type,
                          guild_id: s.guild_id,
                          badge: (0, k.Wm)(y, c),
                      },
                      {
                          omitViewTracking: I,
                          tag: i.id,
                          sound: A ? Q : void 0,
                          volume: ee,
                          onClick() {
                              (0, v.iN)(s.id),
                                  (s.type === J.rbe.GUILD_VOICE || s.type === J.rbe.GUILD_STAGE_VOICE) &&
                                      o.A.updateChatOpen(s.id, !0),
                                  d.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: y,
                          fallbackDeepLink: (0, q.I)(J.BVt.CHANNEL(s.guild_id, s.id, i.id)),
                          emoji: N,
                      },
                  ).then((e) => {
                      null != e && er.track(s.id, e.notification, e.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && er.clearChannel(t), !1;
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return er.clearChannel(t), !1;
              },
              ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (eo() || n.type !== J.$pd.PLAYING) return !1;
                  {
                      let e = B.default.getUser(t);
                      if (null == e) return !1;
                      let i = Y.Ay.getName(e),
                          l = n.name,
                          s = e.getAvatarURL(void 0, 128),
                          a = Z.intl.string(Z.t.XoTWsI),
                          o = Z.intl.formatToPlainString(Z.t.o4Aipn, { username: i, gameName: l });
                      return (
                          q.A.showNotification(
                              s,
                              a,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: J.$pd.PLAYING,
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
                  if (eo()) return;
                  let n = B.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: s, suppress: a, requestToSpeakTimestamp: r } = i;
                  if (null == l || null == s || !(!a && null != r)) return;
                  let o = O.A.getGuild(s),
                      c = D.A.getChannel(l),
                      d = b.A.getStageInstanceByChannel(l);
                  null != o &&
                      null != c &&
                      null != d &&
                      q.A.showNotification(
                          (0, M.Iv)(o, 128),
                          c.name,
                          Z.intl.formatToPlainString(Z.t.sqnsSP, {
                              channelName: (0, A.m1)(c, B.default, U.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (eo() || !t.send_start_notification || ec(t.channel_id)) return !1;
                  let n = B.default.getCurrentUser(),
                      l = O.A.getGuild(t.guild_id),
                      s = D.A.getChannel(t.channel_id),
                      a = B.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == s ||
                      null == l ||
                      null == a ||
                      !(0, x.Wv)(n, a, s) ||
                      !w.A.can(i.kg(J.xBc.CONNECT, J.xBc.VIEW_CHANNEL), s) ||
                      es.has(t.id)
                  )
                      return !1;
                  es.add(t.id),
                      q.A.showNotification(
                          (0, M.Iv)(l, 128),
                          Z.intl.formatToPlainString(Z.t.bZ4Okd, { guildName: l.name }),
                          Z.intl.formatToPlainString(Z.t.qTelnO, {
                              username: W.Ay.getName(l.id, s.id, a),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: l.id, channel_id: s.id },
                          {
                              onClick() {
                                  (0, y.av)(s);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  es.delete(t.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (eo() || null == t.notification_type) return !1;
                  t.notification_type === $.b8.EVENT_START &&
                      (t.entity_type === $.Ps.STAGE_INSTANCE || t.entity_type === $.Ps.VOICE
                          ? (function (e) {
                                if (eo()) return;
                                let t = e.channel_id;
                                if (null == t || ec(t)) return;
                                let n = B.default.getCurrentUser(),
                                    l = O.A.getGuild(e.guild_id),
                                    s = D.A.getChannel(e.channel_id),
                                    a = B.default.getUser(e.host_id);
                                null != n &&
                                    null != s &&
                                    null != l &&
                                    null != a &&
                                    w.A.can(i.kg(J.xBc.CONNECT, J.xBc.VIEW_CHANNEL), s) &&
                                    q.A.showNotification(
                                        (0, M.Iv)(l, 128),
                                        Z.intl.formatToPlainString(Z.t.bOu6Wn, { guildName: l.name }),
                                        Z.intl.formatToPlainString(Z.t.GV9L8u, {
                                            topic: e.name,
                                            username: W.Ay.getName(l.id, s.id, a),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: l.id,
                                            channel_id: s.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === $.Ps.STAGE_INSTANCE && (0, y.av)(s),
                                                    e.entity_type === $.Ps.VOICE && u.default.selectVoiceChannel(s.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === $.Ps.EXTERNAL &&
                            (function (e) {
                                if (eo()) return;
                                let t = B.default.getCurrentUser(),
                                    n = O.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    q.A.showNotification(
                                        (0, M.Iv)(n, 128),
                                        Z.intl.formatToPlainString(Z.t.bOu6Wn, { guildName: n.name }),
                                        Z.intl.formatToPlainString(Z.t.mYyaRB, { topic: e.name }),
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
                  if (eo()) return !1;
                  let i = D.A.getChannel(t.parent_id);
                  if (null == i || !J.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, x.q1)(t, i, !ei)) return !1;
                  let { author: l, user: s } = (0, g.tY)(t);
                  if (null == s) return !1;
                  let a = O.A.getGuild(i.guild_id);
                  if (null == a) return !1;
                  let r = Z.intl.formatToPlainString(Z.t["2IGVl5"], { channelName: i.name, guildName: a.name }),
                      o = Z.intl.formatToPlainString(Z.t.jPhTvT, {
                          channelName: t.name,
                          userUsername: l?.nick ?? s?.username,
                      }),
                      c = s.getAvatarURL(void 0, 128);
                  q.A.showNotification(
                      c,
                      r,
                      o,
                      { notif_type: "THREAD_CREATE", notif_user_id: s.id },
                      {
                          onClick() {
                              (0, j.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: l, route: s, trackingType: a, tag: r } = e;
                  if (eo() || null == i || null == l || null == a || "reactions_push_notification" === a.toLowerCase())
                      return !1;
                  q.A.showNotification(
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
                      null != e && null != t && er.track(t, e.notification, e.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (e) {
                  let { icon: t, title: n, body: i, route: l, trackingType: s, message: a } = e;
                  if (eo() || null == n || null == i || null == s) return !1;
                  let r = a.channel_id;
                  if (null == r || (G.A.getCurrentlySelectedChannelId() === r && ei)) return !1;
                  let o = D.A.getChannel(r);
                  if (null == o) return !1;
                  if (o.type === J.rbe.GROUP_DM) {
                      let e = B.default.getCurrentUser();
                      if (
                          a.author?.id !== e?.id &&
                          !S.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  q.A.showNotification(
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
                      null != e && null != r && er.track(r, e.notification, e.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let e = (0, z.isWindows)(),
                      t = (0, z.isLinux)();
                  if (!(!s.w.get(en, !1) && z.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != el && (i = ea.includes(el)),
                      !!i &&
                          (q.A.showNotification(
                              n(608598),
                              Z.intl.string(Z.t.VSgOVg),
                              Z.intl.string(Z.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, I.pX)(J.BVt.SETTINGS(e ? "windows" : "linux"));
                                  },
                                  onShown: () => {
                                      s.w.set(en, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return s.w.remove(en), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (el = t), es.clear(), n.forEach((e) => e.stage_instances.forEach((e) => es.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (eo()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = D.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: s } = (0, x.TB)(i, n, n.author);
                  q.A.showNotification(
                      l,
                      Z.intl.string(Z.t.IjZJB5),
                      s,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, f.A)(J.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
          },
);
