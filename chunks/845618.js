n.d(t, { cH: () => Z, pD: () => X }), n(321073);
var i = n(136722),
    l = n(311907),
    a = n(506774),
    s = n(73153),
    r = n(308528),
    o = n(367513),
    c = n(686956),
    d = n(264686),
    u = n(956793),
    h = n(77729),
    m = n(883600),
    A = n(47167),
    p = n(435470),
    g = n(707592),
    f = n(22007),
    _ = n(380335),
    E = n(141468),
    C = n(535586),
    x = n(742984),
    S = n(277628),
    T = n(976860),
    I = n(378570),
    N = n(323443),
    v = n(446600),
    y = n(747926),
    b = n(253932),
    R = n(260509),
    j = n(734057),
    M = n(71393),
    D = n(320501),
    O = n(803224),
    L = n(576705),
    P = n(222823),
    w = n(994500),
    k = n(309010),
    U = n(461213),
    G = n(351906),
    F = n(287809),
    H = n(977997),
    B = n(954571),
    V = n(562153),
    W = n(723702),
    K = n(427262),
    z = n(970061),
    Y = n(652215),
    q = n(988794),
    J = n(672396),
    $ = n(985018);
let Z = "message1",
    X = 0.4,
    Q = h.A?.features.supports("notifications") ? 20 : 1,
    ee = "discord_dismissed_notification_shown",
    et = document.hasFocus(),
    en = null,
    ei = new Set(),
    el = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ea = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > Q;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    B.default.track(Y.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), B.default.track(Y.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function es() {
    return !!(O.A.getDesktopType() === Y.nRU.NEVER || U.A.getStatus() === Y.clD.DND || b.NO.getSetting());
}
function er(e) {
    return null != H.A.getVoiceStateForChannel(e);
}
class eo extends l.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(m.A, j.A, M.A, _.A, D.A, O.A, L.A, w.A, k.A, U.A, v.A, G.A, F.default, H.A);
    }
}
new eo(
    s.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== Y.kCE.ENABLED ||
                      W.isPlatformEmbedded ||
                      z.A.showNotification(
                          n(705194),
                          $.intl.string($.t.VSgOVg),
                          $.intl.string($.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: Z,
                              volume: X,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (e) {
                  let { icon: t, title: n, body: i, trackingProps: l, options: a } = e;
                  return !es() && (z.A.showNotification(t, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((et = e.focused)) {
                      let e = k.A.getChannelId();
                      null != e && ea.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: i, optimistic: l } = e;
                  if (l) return !1;
                  let a = j.A.getChannel(t),
                      r = F.default.getUser(i.author?.id),
                      c = F.default.getCurrentUser();
                  if (null == a || null == r || null == c) return !1;
                  let u = (0, x.lx)(i, t, !et),
                      h = O.A.getNotifyMessagesInSelectedChannel() && (0, x.kY)(i, t);
                  if (
                      (!u && !h) ||
                      (i.type === Y.lAJ.CHANGELOG &&
                          (null == i.changelog_id || m.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let A = !O.A.isSoundDisabled(Z);
                  if ((h && (A && z.A.playNotificationSound("message3", 0.4), !et)) || !u) return !1;
                  let p = n(242286).default,
                      g = n(592598).A;
                  if (
                      null != p.getFocusedPID() &&
                      !g.isNotificationDisabled(J.KS.TextChat) &&
                      !G.A.disableNotifications
                  )
                      return !1;
                  let { icon: f, title: _, body: T, emoji: N } = (0, x.TB)(a, i, r),
                      v = !(0, S.Z)("NotificationStore.handleMessage", c?.id);
                  if (
                      (s.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: a.id,
                          message: i,
                          icon: f,
                          title: _,
                          body: T,
                      }),
                      (0, C.n)(i, a.guild_id),
                      O.A.getDesktopType() === Y.nRU.NEVER)
                  )
                      return A && z.A.playNotificationSound(Z, X), !1;
                  let y = D.A.getMessage(t, i.id) ?? (0, E.rh)(i);
                  z.A.showNotification(
                      f,
                      _,
                      T,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: a.id,
                          channel_type: a.type,
                          guild_id: a.guild_id,
                          badge: (0, P.Wm)(y, c),
                      },
                      {
                          omitViewTracking: v,
                          tag: i.id,
                          sound: A ? Z : void 0,
                          volume: X,
                          onClick() {
                              (0, I.iN)(a.id),
                                  (a.type === Y.rbe.GUILD_VOICE || a.type === Y.rbe.GUILD_STAGE_VOICE) &&
                                      o.A.updateChatOpen(a.id, !0),
                                  d.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: y,
                          fallbackDeepLink: (0, z.I)(Y.BVt.CHANNEL(a.guild_id, a.id, i.id)),
                          emoji: N,
                      },
                  ).then((e) => {
                      null != e && ea.track(a.id, e.notification, e.trackingProps);
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
                  if (es() || n.type !== Y.$pd.PLAYING) return !1;
                  {
                      let e = F.default.getUser(t);
                      if (null == e) return !1;
                      let i = K.Ay.getName(e),
                          l = n.name,
                          a = e.getAvatarURL(void 0, 128),
                          s = $.intl.string($.t.XoTWsI),
                          o = $.intl.formatToPlainString($.t.o4Aipn, { username: i, gameName: l });
                      return (
                          z.A.showNotification(
                              a,
                              s,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: Y.$pd.PLAYING,
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
                  if (es()) return;
                  let n = F.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: s, requestToSpeakTimestamp: r } = i;
                  if (null == l || null == a || !(!s && null != r)) return;
                  let o = M.A.getGuild(a),
                      c = j.A.getChannel(l),
                      d = v.A.getStageInstanceByChannel(l);
                  null != o &&
                      null != c &&
                      null != d &&
                      z.A.showNotification(
                          (0, R.Iv)(o, 128),
                          c.name,
                          $.intl.formatToPlainString($.t.sqnsSP, {
                              channelName: (0, A.m1)(c, F.default, w.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (es() || !t.send_start_notification || er(t.channel_id)) return !1;
                  let n = F.default.getCurrentUser(),
                      l = M.A.getGuild(t.guild_id),
                      a = j.A.getChannel(t.channel_id),
                      s = F.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == l ||
                      null == s ||
                      !(0, x.Wv)(n, s, a) ||
                      !L.A.can(i.kg(Y.xBc.CONNECT, Y.xBc.VIEW_CHANNEL), a) ||
                      ei.has(t.id)
                  )
                      return !1;
                  ei.add(t.id),
                      z.A.showNotification(
                          (0, R.Iv)(l, 128),
                          $.intl.formatToPlainString($.t.bZ4Okd, { guildName: l.name }),
                          $.intl.formatToPlainString($.t.qTelnO, {
                              username: V.Ay.getName(l.id, a.id, s),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: l.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, N.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  ei.delete(t.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (es() || null == t.notification_type) return !1;
                  t.notification_type === q.b8.EVENT_START &&
                      (t.entity_type === q.Ps.STAGE_INSTANCE || t.entity_type === q.Ps.VOICE
                          ? (function (e) {
                                if (es()) return;
                                let t = e.channel_id;
                                if (null == t || er(t)) return;
                                let n = F.default.getCurrentUser(),
                                    l = M.A.getGuild(e.guild_id),
                                    a = j.A.getChannel(e.channel_id),
                                    s = F.default.getUser(e.host_id);
                                null != n &&
                                    null != a &&
                                    null != l &&
                                    null != s &&
                                    L.A.can(i.kg(Y.xBc.CONNECT, Y.xBc.VIEW_CHANNEL), a) &&
                                    z.A.showNotification(
                                        (0, R.Iv)(l, 128),
                                        $.intl.formatToPlainString($.t.bOu6Wn, { guildName: l.name }),
                                        $.intl.formatToPlainString($.t.GV9L8u, {
                                            topic: e.name,
                                            username: V.Ay.getName(l.id, a.id, s),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: l.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === q.Ps.STAGE_INSTANCE && (0, N.av)(a),
                                                    e.entity_type === q.Ps.VOICE && u.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === q.Ps.EXTERNAL &&
                            (function (e) {
                                if (es()) return;
                                let t = F.default.getCurrentUser(),
                                    n = M.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    z.A.showNotification(
                                        (0, R.Iv)(n, 128),
                                        $.intl.formatToPlainString($.t.bOu6Wn, { guildName: n.name }),
                                        $.intl.formatToPlainString($.t.mYyaRB, { topic: e.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                c.A.transitionToGuildSync(e.guild_id), (0, g.uR)({ eventId: e.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t));
              },
              THREAD_CREATE: function (e) {
                  let { channel: t, isNewlyCreated: n } = e;
                  if (es()) return !1;
                  let i = j.A.getChannel(t.parent_id);
                  if (null == i || !Y.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, x.q1)(t, i, !et)) return !1;
                  let { author: l, user: a } = (0, p.tY)(t);
                  if (null == a) return !1;
                  let s = M.A.getGuild(i.guild_id);
                  if (null == s) return !1;
                  let r = $.intl.formatToPlainString($.t["2IGVl5"], { channelName: i.name, guildName: s.name }),
                      o = $.intl.formatToPlainString($.t.jPhTvT, {
                          channelName: t.name,
                          userUsername: l?.nick ?? a?.username,
                      }),
                      c = a.getAvatarURL(void 0, 128);
                  z.A.showNotification(
                      c,
                      r,
                      o,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, y.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: l, route: a, trackingType: s, tag: r } = e;
                  if (es() || null == i || null == l || null == s || "reactions_push_notification" === s.toLowerCase())
                      return !1;
                  z.A.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: s },
                      {
                          onClick() {
                              null != a && ((0, f.A)(a), d.default.clickedNotification());
                          },
                          tag: r,
                          isUserAvatar: !1,
                      },
                  ).then((e) => {
                      null != e && null != t && ea.track(t, e.notification, e.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (e) {
                  let { icon: t, title: n, body: i, route: l, trackingType: a, message: s } = e;
                  if (es() || null == n || null == i || null == a) return !1;
                  let r = s.channel_id;
                  if (null == r || (k.A.getCurrentlySelectedChannelId() === r && et)) return !1;
                  z.A.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: a },
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
                  if (!(!a.w.get(ee, !1) && W.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != en && (i = el.includes(en)),
                      !!i &&
                          (z.A.showNotification(
                              n(608598),
                              $.intl.string($.t.VSgOVg),
                              $.intl.string($.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, T.pX)(Y.BVt.SETTINGS(e ? "windows" : "linux"));
                                  },
                                  onShown: () => {
                                      a.w.set(ee, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return a.w.remove(ee), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (en = t), ei.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ei.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (es()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = j.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, x.TB)(i, n, n.author);
                  z.A.showNotification(
                      l,
                      $.intl.string($.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, f.A)(Y.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
          },
);
