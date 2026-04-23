"use strict";
n.d(t, { A: () => ee }), n(321073);
var i = n(284009),
    s = n.n(i),
    l = n(835245),
    a = n(311907),
    r = n(118356),
    o = n(73153),
    d = n(684013),
    c = n(504139),
    u = n(175333),
    h = n(242363),
    p = n(729843),
    A = n(996797),
    f = n(942236),
    _ = n(102037),
    g = n(274372),
    m = n(747189),
    E = n(742984),
    x = n(833551),
    y = n(592598),
    v = n(253932),
    S = n(164891),
    C = n(961350),
    I = n(734057),
    N = n(803224),
    T = n(290863),
    b = n(309010),
    O = n(461213),
    D = n(351906),
    j = n(287809),
    L = n(845618),
    R = n(242286),
    w = n(256415),
    k = n(927813),
    M = n(9302),
    P = n(157257),
    G = n(652215),
    V = n(672396),
    U = n(985018);
let z = new r.Vy("LegacyOverlayNotificationsStore"),
    H = 5 * k.A.Millis.SECOND,
    W = 8 * k.A.Millis.SECOND,
    K = 30 * k.A.Millis.SECOND,
    B = Object.freeze({ priority: 0, duration: H, expirationExternallyManaged: !1, type: 0 }),
    F = [],
    Y = (e, t, n) => {
        let i = t ? G.yFH.TIMED_OUT : G.yFH.DISMISSED;
        return setTimeout(() => d.A.updateNotificationStatus(e, i), null != n ? n : H);
    };
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.yFH.DISMISSED;
    if (null == e) return !1;
    let n = F.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = F[n];
    clearTimeout(i.timerId), (F = [...F]), t === G.yFH.DISMISSED ? F.splice(n, 1) : (F[n] = { ...i, status: t });
}
function X(e) {
    let t = F.length;
    return (F = F.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function J(e) {
    let t = F.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function Q(e, t) {
    let n = { ...B, ...t };
    if (2 !== n.priority && !w.default.isInstanceFocused()) return null;
    let i = (0, l.A)(),
        s = { id: i, status: G.yFH.ACTIVE, timerId: Y(i, n.expirationExternallyManaged, n.duration), props: e, ...n },
        a = (F = [...F]).findIndex((e) => e.priority <= n.priority);
    return -1 === a ? F.push(s) : F.splice(a, 0, s), F.length > 10 && clearTimeout(F.pop().timerId), i;
}
function q(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = J(t);
    if (!Object.keys(n).includes(C.default.getId())) return Z(i);
    if (null != i) return !1;
    let s = I.A.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !S.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayStartRinging" }).enabled) ||
        O.A.getStatus() === G.clD.DND ||
        v.NO.getSetting()
    )
        return !1;
    let l = F.find((e) => 1 === e.type && e.channelId === t && e.messageType === G.lAJ.CALL);
    null != l && Z(l.id), Q((0, p.A)(s), { priority: 1, expirationExternallyManaged: !0, type: 2, channelId: s.id });
}
class $ extends a.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            C.default,
            I.A,
            g.A,
            N.A,
            R.default,
            x.default,
            P.A,
            y.A,
            w.default,
            T.A,
            b.A,
            O.A,
            D.A,
            j.default,
        );
    }
    getNotifications() {
        return F;
    }
}
let ee = new $(
    o.h,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  Z(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  let { nudges: t } = e;
                  if (x.default.hasChangedRenderMode(R.default.getFocusedPID() ?? (0, M.getPID)()))
                      return void z.info("Overlay mounted, but render modes have changed", { nudges: t });
                  let n = t[0];
                  if ((z.info("Overlay mounted", { nudges: t, selectedNudge: n }), null == n)) return;
                  let i = (function (e) {
                      switch (e.type) {
                          case V.Jr.GO_LIVE_VOICE:
                          case V.Jr.GO_LIVE_NON_VOICE:
                              return (0, h.A)(e);
                          case V.Jr.NEWS:
                          default:
                              return (0, _.A)(e);
                      }
                  })(n);
                  null != i && Q(i, { priority: 2, duration: W });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  F = F.map((e) =>
                      e.status === G.yFH.ACTIVE
                          ? (clearTimeout(e.timerId), { ...e, timerId: Y(e.id, e.expirationExternallyManaged) })
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: n } = e,
                      i = I.A.getChannel(t),
                      l = j.default.getUser(n.author?.id);
                  if (null == i || null == l) return !1;
                  if (n.activity?.type === G.xL.JOIN || n.activity?.type === G.xL.JOIN_REQUEST) {
                      if (!(0, E.lx)(n, t, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, l;
                          if ((s()(null != t.activity, "received null message activity"), n.id === C.default.getId()))
                              return !1;
                          let a = P.A.getGame();
                          if (null == a) return !1;
                          switch (t.activity.type) {
                              case G.xL.JOIN:
                                  if (
                                      null == (i = T.A.getApplicationActivity(n.id, a.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  l = (0, c.A)(e, t, n, a, i);
                                  break;
                              case G.xL.JOIN_REQUEST:
                                  if (
                                      null == (i = O.A.getApplicationActivity(a.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  l = (0, A.A)(e, n, a, i);
                          }
                          if (null == l) return !1;
                          let r = Q(l, { priority: 2, expirationExternallyManaged: !0, channelId: e.id });
                          return null != r && Y(r, !1, K), !0;
                      })(i, n, l);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!w.default.isInstanceLocked() || w.default.isPinned(G.uss.TEXT)) && t === b.A.getChannelId()) ||
                      y.A.isNotificationDisabled(V.KS.TextChat) ||
                      D.A.disableNotifications ||
                      !(0, E.lx)(n, t)
                  )
                      return !1;
                  let a = !N.A.isSoundDisabled(L.cH);
                  Q((0, f.A)(i, n, l, a), { type: 1, channelId: i.id, messageType: n.type });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && X(t);
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return X(t);
              },
              CALL_CREATE: q,
              CALL_UPDATE: q,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  Z(J(t));
              },
              GUILD_RING_START: q,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (!S.A.getCurrentConfig({ guildId: n, location: "OverlayStopRinging" }).enabled) return !1;
                  i.includes(C.default.getId()) && Z(J(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: s } = e,
                      l = P.A.getGame();
                  return (
                      null != l &&
                      l.id === s &&
                      (n === G.xL.JOIN && (t = (0, u.A)(i, l)), null != t && void Q(t, { priority: 2, type: 0 }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function (e) {
                  "manual" === e.clipMethod && Q((0, m.V)(U.intl.string(U.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  Q((0, m.V)(U.intl.string(U.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (0, m.t)();
                  null != t && Q(t);
              },
          },
);
