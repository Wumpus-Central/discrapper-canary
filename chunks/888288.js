"use strict";
n.d(t, { A: () => et }), n(321073);
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
    g = n(102037),
    _ = n(274372),
    m = n(747189),
    E = n(742984),
    x = n(764559),
    y = n(833551),
    v = n(592598),
    S = n(253932),
    I = n(164891),
    C = n(961350),
    N = n(734057),
    T = n(803224),
    O = n(290863),
    b = n(309010),
    D = n(461213),
    j = n(351906),
    R = n(287809),
    w = n(845618),
    L = n(242286),
    k = n(256415),
    M = n(927813),
    P = n(9302),
    G = n(157257),
    U = n(652215),
    V = n(672396),
    z = n(985018);
let H = new r.Vy("LegacyOverlayNotificationsStore"),
    W = 5 * M.A.Millis.SECOND,
    K = 8 * M.A.Millis.SECOND,
    B = 30 * M.A.Millis.SECOND,
    Y = Object.freeze({ priority: 0, duration: W, expirationExternallyManaged: !1, type: 0 }),
    F = [],
    Z = (e, t, n) => {
        let i = t ? U.yFH.TIMED_OUT : U.yFH.DISMISSED;
        return setTimeout(() => d.A.updateNotificationStatus(e, i), null != n ? n : W);
    };
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.yFH.DISMISSED;
    if (null == e) return !1;
    let n = F.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = F[n];
    clearTimeout(i.timerId), (F = [...F]), t === U.yFH.DISMISSED ? F.splice(n, 1) : (F[n] = { ...i, status: t });
}
function X(e) {
    let t = F.length;
    return (F = F.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function Q(e) {
    let t = F.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function q(e, t) {
    let n = { ...Y, ...t };
    if (2 !== n.priority && !k.default.isInstanceFocused()) return null;
    let i = (0, l.A)(),
        s = { id: i, status: U.yFH.ACTIVE, timerId: Z(i, n.expirationExternallyManaged, n.duration), props: e, ...n },
        a = (F = [...F]).findIndex((e) => e.priority <= n.priority);
    return -1 === a ? F.push(s) : F.splice(a, 0, s), F.length > 10 && clearTimeout(F.pop().timerId), i;
}
function $(e) {
    let { channelId: t, ringing: n } = e,
        i = Q(t);
    if (!n.includes(C.default.getId())) return J(i);
    if (null != i) return !1;
    let s = N.A.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !I.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayStartRinging" }).enabled) ||
        D.A.getStatus() === U.clD.DND ||
        S.NO.getSetting()
    )
        return !1;
    let l = F.find((e) => 1 === e.type && e.channelId === t && e.messageType === U.lAJ.CALL);
    null != l && J(l.id), q((0, p.A)(s), { priority: 1, expirationExternallyManaged: !0, type: 2, channelId: s.id });
}
class ee extends a.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            C.default,
            N.A,
            _.A,
            T.A,
            L.default,
            y.default,
            G.A,
            v.A,
            k.default,
            O.A,
            b.A,
            D.A,
            j.A,
            R.default,
        );
    }
    getNotifications() {
        return F;
    }
}
let et = new ee(
    o.h,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  J(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  let { nudges: t } = e;
                  if (y.default.hasChangedRenderMode(L.default.getFocusedPID() ?? (0, P.getPID)()))
                      return void H.info("Overlay mounted, but render modes have changed", { nudges: t });
                  let n = t[0];
                  if ((H.info("Overlay mounted", { nudges: t, selectedNudge: n }), null == n)) return;
                  let i = (function (e) {
                      switch (e.type) {
                          case V.Jr.GO_LIVE_VOICE:
                          case V.Jr.GO_LIVE_NON_VOICE:
                              return (0, h.A)(e);
                          case V.Jr.KEYBIND_INDICATORS:
                              return (0, x.A)(e);
                          case V.Jr.NEWS:
                          default:
                              return (0, g.A)(e);
                      }
                  })(n);
                  null != i && q(i, { priority: 2, duration: K });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  F = F.map((e) =>
                      e.status === U.yFH.ACTIVE
                          ? (clearTimeout(e.timerId), { ...e, timerId: Z(e.id, e.expirationExternallyManaged) })
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: n } = e,
                      i = N.A.getChannel(t),
                      l = R.default.getUser(n.author?.id);
                  if (null == i || null == l) return !1;
                  if (n.activity?.type === U.xL.JOIN || n.activity?.type === U.xL.JOIN_REQUEST) {
                      if (!(0, E.lx)(n, t, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, l;
                          if ((s()(null != t.activity, "received null message activity"), n.id === C.default.getId()))
                              return !1;
                          let a = G.A.getGame();
                          if (null == a) return !1;
                          switch (t.activity.type) {
                              case U.xL.JOIN:
                                  if (
                                      null == (i = O.A.getApplicationActivity(n.id, a.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  l = (0, c.A)(e, t, n, a, i);
                                  break;
                              case U.xL.JOIN_REQUEST:
                                  if (
                                      null == (i = D.A.getApplicationActivity(a.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  l = (0, A.A)(e, n, a, i);
                          }
                          if (null == l) return !1;
                          let r = q(l, { priority: 2, expirationExternallyManaged: !0, channelId: e.id });
                          return null != r && Z(r, !1, B), !0;
                      })(i, n, l);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!k.default.isInstanceLocked() || k.default.isPinned(U.uss.TEXT)) && t === b.A.getChannelId()) ||
                      v.A.isNotificationDisabled(V.KS.TextChat) ||
                      j.A.disableNotifications ||
                      !(0, E.lx)(n, t)
                  )
                      return !1;
                  let a = !T.A.isSoundDisabled(w.cH);
                  q((0, f.A)(i, n, l, a), { type: 1, channelId: i.id, messageType: n.type });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && X(t);
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return X(t);
              },
              CALL_CREATE: $,
              CALL_UPDATE: $,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  J(Q(t));
              },
              GUILD_RING_START: $,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (!I.A.getCurrentConfig({ guildId: n, location: "OverlayStopRinging" }).enabled) return !1;
                  i.includes(C.default.getId()) && J(Q(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: s } = e,
                      l = G.A.getGame();
                  return (
                      null != l &&
                      l.id === s &&
                      (n === U.xL.JOIN && (t = (0, u.A)(i, l)), null != t && void q(t, { priority: 2, type: 0 }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function (e) {
                  "manual" === e.clipMethod && q((0, m.V)(z.intl.string(z.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  q((0, m.V)(z.intl.string(z.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (0, m.t)();
                  null != t && q(t);
              },
          },
);
