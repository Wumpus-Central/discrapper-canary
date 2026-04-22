i.d(e, { cH: () => te, pD: () => ti }), i(321073);
var n = i(136722),
    a = i(311907),
    l = i(506774),
    o = i(73153),
    r = i(308528),
    c = i(367513),
    _ = i(686956),
    s = i(264686),
    d = i(956793),
    u = i(77729),
    f = i(883600),
    g = i(47167),
    p = i(435470),
    h = i(707592),
    A = i(22007),
    b = i(380335),
    T = i(141468),
    m = i(535586),
    C = i(742984),
    S = i(571524),
    I = i(277628),
    E = i(695515),
    N = i(976860),
    y = i(378570),
    v = i(323443),
    O = i(446600),
    P = i(747926),
    R = i(253932),
    D = i(718446),
    k = i(260509),
    L = i(734057),
    U = i(71393),
    x = i(320501),
    w = i(803224),
    G = i(576705),
    V = i(222823),
    M = i(994500),
    W = i(309010),
    F = i(461213),
    B = i(351906),
    H = i(287809),
    q = i(977997),
    Y = i(954571),
    K = i(562153),
    j = i(723702),
    z = i(427262),
    J = i(970061),
    X = i(652215),
    Q = i(988794),
    Z = i(672396),
    $ = i(355097),
    tt = i(985018);
let te = "message1",
    ti = 0.4,
    tn = u.A?.features.supports("notifications") ? 20 : 1,
    ta = "discord_dismissed_notification_shown",
    tl = document.hasFocus(),
    to = null,
    tr = new Set(),
    tc = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    t_ = new (class {
        _channels = {};
        track(t, e, i) {
            let n = this._channels[t];
            for (
                null == n && ((n = []), (this._channels[t] = n)), n.push({ notification: e, trackingProps: i });
                n.length > tn;
            ) {
                let t = n.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    Y.default.track(X.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: i } = t;
                    e.close(), Y.default.track(X.HAw.NOTIFICATION_ACTION, { action: "ACK", ...i });
                }));
        }
    })();
function ts() {
    return !!(
        w.A.getDesktopType() === X.nRU.NEVER ||
        F.A.getStatus() === X.clD.DND ||
        R.NO.getSetting() ||
        E.A.isCurrentUserInRestrictedHours()
    );
}
function td(t) {
    return null != q.A.getVoiceStateForChannel(t);
}
class tu extends a.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(f.A, L.A, E.A, U.A, b.A, x.A, w.A, G.A, M.A, W.A, F.A, O.A, B.A, H.default, q.A);
    }
}
new tu(
    o.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== X.kCE.ENABLED ||
                      j.isPlatformEmbedded ||
                      J.A.showNotification(
                          i(705194),
                          tt.intl.string(tt.t.VSgOVg),
                          tt.intl.string(tt.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: te,
                              volume: ti,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (t) {
                  let { icon: e, title: i, body: n, trackingProps: a, options: l } = t;
                  return !ts() && (J.A.showNotification(e, i, n, a, l), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((tl = t.focused)) {
                      let t = W.A.getChannelId();
                      null != t && t_.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  let { channelId: e, message: n, optimistic: a } = t;
                  if (a) return !1;
                  let l = L.A.getChannel(e),
                      r = H.default.getUser(n.author?.id),
                      _ = H.default.getCurrentUser();
                  if (null == l || null == r || null == _) return !1;
                  let d = (0, C.lx)(n, e, !tl),
                      u = w.A.getNotifyMessagesInSelectedChannel() && (0, C.kY)(n, e);
                  if (
                      (!d && !u) ||
                      ts() ||
                      (n.type === X.lAJ.CHANGELOG &&
                          (null == n.changelog_id || f.A.latestChangelogId() !== n.changelog_id))
                  )
                      return !1;
                  let g = !w.A.isSoundDisabled(te);
                  if ((u && (g && J.A.playNotificationSound("message3", 0.4), !tl)) || !d) return !1;
                  let p = i(242286).default,
                      h = i(592598).A;
                  if (
                      null != p.getFocusedPID() &&
                      !h.isNotificationDisabled(Z.KS.TextChat) &&
                      !B.A.disableNotifications
                  )
                      return !1;
                  let { icon: A, title: b, body: S, emoji: E } = (0, C.TB)(l, n, r),
                      N = !(0, I.Z)("NotificationStore.handleMessage", _?.id);
                  if (
                      (o.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: l.id,
                          message: n,
                          icon: A,
                          title: b,
                          body: S,
                      }),
                      (0, m.n)(n, l.guild_id),
                      w.A.getDesktopType() === X.nRU.NEVER)
                  )
                      return g && J.A.playNotificationSound(te, ti), !1;
                  let v = x.A.getMessage(e, n.id) ?? (0, T.rh)(n);
                  J.A.showNotification(
                      A,
                      b,
                      S,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: n.author?.id,
                          message_id: n.id,
                          message_type: n.type,
                          channel_id: l.id,
                          channel_type: l.type,
                          guild_id: l.guild_id,
                          badge: (0, V.Wm)(v, _),
                      },
                      {
                          omitViewTracking: N,
                          tag: n.id,
                          sound: g ? te : void 0,
                          volume: ti,
                          onClick() {
                              (0, y.iN)(l.id),
                                  (l.type === X.rbe.GUILD_VOICE || l.type === X.rbe.GUILD_STAGE_VOICE) &&
                                      c.A.updateChatOpen(l.id, !0),
                                  s.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: v,
                          fallbackDeepLink: (0, J.I)(X.BVt.CHANNEL(l.guild_id, l.id, n.id)),
                          emoji: E,
                      },
                  ).then((t) => {
                      null != t && t_.track(l.id, t.notification, t.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return null != e && t_.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return t_.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: i } = t;
                  if (ts() || i.type !== X.$pd.PLAYING) return !1;
                  {
                      let t = H.default.getUser(e);
                      if (null == t) return !1;
                      let n = z.Ay.getName(t),
                          a = i.name,
                          l = t.getAvatarURL(void 0, 128),
                          o = tt.intl.string(tt.t.XoTWsI),
                          c = tt.intl.formatToPlainString(tt.t.o4Aipn, { username: n, gameName: a });
                      return (
                          J.A.showNotification(
                              l,
                              o,
                              c,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: X.$pd.PLAYING,
                                  notif_user_id: e,
                                  activity_name: a,
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
                  if (ts()) return;
                  let i = H.default.getCurrentUser();
                  if (null == i) return;
                  let n = e.find((t) => t.userId === i.id);
                  if (null == n) return;
                  let { channelId: a, guildId: l, suppress: o, requestToSpeakTimestamp: r } = n;
                  if (null == a || null == l || !(!o && null != r)) return;
                  let c = U.A.getGuild(l),
                      _ = L.A.getChannel(a),
                      s = O.A.getStageInstanceByChannel(a);
                  null != c &&
                      null != _ &&
                      null != s &&
                      J.A.showNotification(
                          (0, k.Iv)(c, 128),
                          (0, g.m1)(_, H.default, M.A),
                          tt.intl.formatToPlainString(tt.t.sqnsSP, {
                              channelName: (0, g.m1)(_, H.default, M.A),
                              channelTopic: s?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (ts() || !e.send_start_notification || td(e.channel_id)) return !1;
                  let i = H.default.getCurrentUser(),
                      a = U.A.getGuild(e.guild_id),
                      l = L.A.getChannel(e.channel_id),
                      o = H.default.getUser(e.host_id);
                  if (
                      null == i ||
                      null == l ||
                      null == a ||
                      null == o ||
                      !(0, C.Wv)(i, o, l) ||
                      !G.A.can(n.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), l) ||
                      tr.has(e.id)
                  )
                      return !1;
                  tr.add(e.id),
                      J.A.showNotification(
                          (0, k.Iv)(a, 128),
                          tt.intl.formatToPlainString(tt.t.bZ4Okd, { guildName: a.name }),
                          tt.intl.formatToPlainString(tt.t.qTelnO, {
                              username: K.Ay.getName(a.id, l.id, o),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: a.id, channel_id: l.id },
                          {
                              onClick() {
                                  (0, v.av)(l);
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
                  if (ts() || null == e.notification_type) return !1;
                  e.notification_type === Q.b8.EVENT_START &&
                      (e.entity_type === Q.Ps.STAGE_INSTANCE || e.entity_type === Q.Ps.VOICE
                          ? (function (t) {
                                if (ts()) return;
                                let e = t.channel_id;
                                if (null == e || td(e)) return;
                                let i = H.default.getCurrentUser(),
                                    a = U.A.getGuild(t.guild_id),
                                    l = L.A.getChannel(t.channel_id),
                                    o = H.default.getUser(t.host_id);
                                null != i &&
                                    null != l &&
                                    null != a &&
                                    null != o &&
                                    G.A.can(n.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), l) &&
                                    J.A.showNotification(
                                        (0, k.Iv)(a, 128),
                                        tt.intl.formatToPlainString(tt.t.bOu6Wn, { guildName: a.name }),
                                        tt.intl.formatToPlainString(tt.t.GV9L8u, {
                                            topic: t.name,
                                            username: K.Ay.getName(a.id, l.id, o),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: a.id,
                                            channel_id: l.id,
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === Q.Ps.STAGE_INSTANCE && (0, v.av)(l),
                                                    t.entity_type === Q.Ps.VOICE && d.default.selectVoiceChannel(l.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === Q.Ps.EXTERNAL &&
                            (function (t) {
                                if (ts()) return;
                                let e = H.default.getCurrentUser(),
                                    i = U.A.getGuild(t.guild_id);
                                null == e ||
                                    null == i ||
                                    J.A.showNotification(
                                        (0, k.Iv)(i, 128),
                                        tt.intl.formatToPlainString(tt.t.bOu6Wn, { guildName: i.name }),
                                        tt.intl.formatToPlainString(tt.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: i.id },
                                        {
                                            onClick() {
                                                _.A.transitionToGuildSync(t.guild_id), (0, h.uR)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e));
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: i } = t;
                  if (ts()) return !1;
                  let n = L.A.getChannel(e.parent_id);
                  if (null == n || !X.kvI.GUILD_THREADS_ONLY.has(n.type) || !i || !(0, C.q1)(e, n, !tl)) return !1;
                  let { author: a, user: l } = (0, p.tY)(e);
                  if (null == l) return !1;
                  let o = U.A.getGuild(n.guild_id);
                  if (null == o) return !1;
                  let r = tt.intl.formatToPlainString(tt.t["2IGVl5"], {
                          channelName: (0, g.m1)(n, H.default, M.A),
                          guildName: o.name,
                      }),
                      c = tt.intl.formatToPlainString(tt.t.jPhTvT, {
                          channelName: (0, g.m1)(e, H.default, M.A),
                          userUsername: a?.nick ?? l?.username,
                      }),
                      _ = l.getAvatarURL(void 0, 128);
                  J.A.showNotification(
                      _,
                      r,
                      c,
                      { notif_type: "THREAD_CREATE", notif_user_id: l.id },
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
                      { icon: i, title: n, body: a, route: l, trackingType: o, tag: r } = t;
                  if (ts() || null == n || null == a || null == o || "reactions_push_notification" === o.toLowerCase())
                      return !1;
                  J.A.showNotification(
                      i,
                      n,
                      a,
                      { notif_type: o },
                      {
                          onClick() {
                              null != l && ((0, A.A)(l), s.default.clickedNotification());
                          },
                          tag: r,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && t_.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: i, body: n, route: a, trackingType: l, message: o, reactorUserId: r } = t;
                  if (ts() || null == i || null == n || null == l) return !1;
                  let c = o.channel_id;
                  if (null == c || (W.A.getCurrentlySelectedChannelId() === c && tl)) return !1;
                  let _ = L.A.getChannel(c);
                  if (null == _) return !1;
                  if (_.type === X.rbe.GROUP_DM) {
                      let t = H.default.getCurrentUser();
                      if (
                          o.author?.id !== t?.id &&
                          !S.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  J.A.showNotification(
                      e,
                      i,
                      n,
                      { notif_type: l, notif_user_id: r, message_id: o.id },
                      {
                          onClick() {
                              null != a && ((0, A.A)(a), s.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != c && t_.track(c, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, j.isWindows)(),
                      e = (0, j.isLinux)();
                  if (!(!l.w.get(ta, !1) && j.isPlatformEmbedded && (t || e))) return !1;
                  let n = !1;
                  return (
                      null != to && (n = tc.includes(to)),
                      !!n &&
                          (J.A.showNotification(
                              i(608598),
                              tt.intl.string(tt.t.VSgOVg),
                              tt.intl.string(tt.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, N.pX)((0, D.settingsPathToRoute)(t ? $.od.WINDOWS : $.od.LINUX));
                                  },
                                  onShown: () => {
                                      l.w.set(ta, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return l.w.remove(ta), !1;
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: i } = t;
                  (to = e), tr.clear(), i.forEach((t) => t.stage_instances.forEach((t) => tr.add(t.id)));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (ts()) return !1;
                  let i = e.message;
                  if (null == i || null == i.author) return !1;
                  let n = L.A.getChannel(e.saveData.channelId);
                  if (null == n) return !1;
                  let { icon: a, body: l } = (0, C.TB)(n, i, i.author);
                  J.A.showNotification(
                      a,
                      tt.intl.string(tt.t.IjZJB5),
                      l,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, A.A)(X.BVt.CHANNEL(n?.getGuildId(), n.id, i.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: n } = t;
                  if (ts()) return !1;
                  J.A.showNotification(
                      i(608598),
                      e,
                      n,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
