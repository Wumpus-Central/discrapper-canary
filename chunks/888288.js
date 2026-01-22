n.d(t, {
    A: () => es,
}),
    n(896048),
    n(321073);
var i,
    r = n(284009),
    s = n.n(r),
    l = n(835245),
    o = n(311907),
    a = n(118356),
    c = n(73153),
    d = n(684013),
    u = n(504139),
    h = n(175333),
    p = n(242363),
    f = n(729843),
    b = n(996797),
    g = n(942236),
    y = n(102037),
    A = n(274372),
    m = n(747189),
    O = n(742984),
    v = n(764559),
    E = n(833551),
    x = n(592598),
    S = n(253932),
    j = n(164891),
    _ = n(961350),
    I = n(734057),
    C = n(803224),
    w = n(290863),
    N = n(309010),
    P = n(461213),
    D = n(351906),
    T = n(287809),
    R = n(845618),
    k = n(242286),
    L = n(256415),
    M = n(927813),
    G = n(9302),
    V = n(157257),
    U = n(652215),
    z = n(672396),
    K = n(985018);

function H(e, t, n) {
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

function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                H(e, t, n[t]);
            });
    }
    return e;
}

function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = new a.Vy("LegacyOverlayNotificationsStore"),
    F = 5 * M.A.Millis.SECOND,
    Z = 8 * M.A.Millis.SECOND,
    J = 30 * M.A.Millis.SECOND,
    X = Object.freeze({
        priority: 0,
        duration: F,
        expirationExternallyManaged: !1,
        type: 0,
    }),
    Q = [],
    q = (e, t, n) => {
        let i = t ? U.yFH.TIMED_OUT : U.yFH.DISMISSED;
        return setTimeout(() => d.A.updateNotificationStatus(e, i), null != n ? n : F);
    };

function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.yFH.DISMISSED;
    if (null == e) return !1;
    let n = Q.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = Q[n];
    clearTimeout(i.timerId),
        (Q = [...Q]),
        t === U.yFH.DISMISSED
            ? Q.splice(n, 1)
            : (Q[n] = B(W({}, i), {
                  status: t,
              }));
}

function ee(e) {
    let t = Q.length;
    return (Q = Q.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}

function et(e) {
    let t = Q.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}

function en(e, t) {
    let n = W({}, X, t);
    if (2 !== n.priority && !L.default.isInstanceFocused()) return null;
    let i = (0, l.A)(),
        r = W(
            {
                id: i,
                status: U.yFH.ACTIVE,
                timerId: q(i, n.expirationExternallyManaged, n.duration),
                props: e,
            },
            n,
        ),
        s = (Q = [...Q]).findIndex((e) => e.priority <= n.priority);
    return -1 === s ? Q.push(r) : Q.splice(s, 0, r), Q.length > 10 && clearTimeout(Q.pop().timerId), i;
}

function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(_.default.getId())) return $(i);
    if (null != i) return !1;
    let r = I.A.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !j.A.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayStartRinging",
            }).enabled) ||
        P.A.getStatus() === U.clD.DND ||
        S.NO.getSetting()
    )
        return !1;
    let s = Q.find((e) => 1 === e.type && e.channelId === t && e.messageType === U.lAJ.CALL);
    null != s && $(s.id),
        en((0, f.A)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id,
        });
}
class er extends (i = o.Ay.Store) {
    initialize() {
        this.waitFor(
            _.default,
            I.A,
            A.A,
            C.A,
            k.default,
            E.default,
            V.A,
            x.A,
            L.default,
            w.A,
            N.A,
            P.A,
            D.A,
            T.default,
        );
    }
    getNotifications() {
        return Q;
    }
}
H(er, "displayName", "OverlayNotificationsStore");
let es = new er(
    c.h,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  $(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  var t;
                  let { nudges: n } = e;
                  if (E.default.hasChangedRenderMode(null != (t = k.default.getFocusedPID()) ? t : (0, G.getPID)()))
                      return void Y.info("Overlay mounted, but render modes have changed", {
                          nudges: n,
                      });
                  let i = n[0];
                  if (
                      (Y.info("Overlay mounted", {
                          nudges: n,
                          selectedNudge: i,
                      }),
                      null == i)
                  )
                      return;
                  let r = (function (e) {
                      switch (e.type) {
                          case z.Jr.GO_LIVE_VOICE:
                          case z.Jr.GO_LIVE_NON_VOICE:
                              return (0, p.A)(e);
                          case z.Jr.KEYBIND_INDICATORS:
                              return (0, v.A)(e);
                          case z.Jr.NEWS:
                          default:
                              return (0, y.A)(e);
                      }
                  })(i);
                  null != r &&
                      en(r, {
                          priority: 2,
                          duration: Z,
                      });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  Q = Q.map((e) =>
                      e.status === U.yFH.ACTIVE
                          ? (clearTimeout(e.timerId),
                            B(W({}, e), {
                                timerId: q(e.id, e.expirationExternallyManaged),
                            }))
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  var t, n, i;
                  let { channelId: r, message: l } = e,
                      o = I.A.getChannel(r),
                      a = T.default.getUser(null == (t = l.author) ? void 0 : t.id);
                  if (null == o || null == a) return !1;
                  if (
                      (null == (n = l.activity) ? void 0 : n.type) === U.xL.JOIN ||
                      (null == (i = l.activity) ? void 0 : i.type) === U.xL.JOIN_REQUEST
                  ) {
                      if (!(0, O.lx)(l, r, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, r;
                          if ((s()(null != t.activity, "received null message activity"), n.id === _.default.getId()))
                              return !1;
                          let l = V.A.getGame();
                          if (null == l) return !1;
                          switch (t.activity.type) {
                              case U.xL.JOIN:
                                  if (
                                      null == (i = w.A.getApplicationActivity(n.id, l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, u.A)(e, t, n, l, i);
                                  break;
                              case U.xL.JOIN_REQUEST:
                                  if (
                                      null == (i = P.A.getApplicationActivity(l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, b.A)(e, n, l, i);
                          }
                          if (null == r) return !1;
                          let o = en(r, {
                              priority: 2,
                              expirationExternallyManaged: !0,
                              channelId: e.id,
                          });
                          return null != o && q(o, !1, J), !0;
                      })(o, l, a);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!L.default.isInstanceLocked() || L.default.isPinned(U.uss.TEXT)) && r === N.A.getChannelId()) ||
                      x.A.isNotificationDisabled(z.KS.TextChat) ||
                      D.A.disableNotifications ||
                      !(0, O.lx)(l, r)
                  )
                      return !1;
                  let c = !C.A.isSoundDisabled(R.cH);
                  en((0, g.A)(o, l, a, c), {
                      type: 1,
                      channelId: o.id,
                      messageType: l.type,
                  });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && ee(t);
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return ee(t);
              },
              CALL_CREATE: ei,
              CALL_UPDATE: ei,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  $(et(t));
              },
              GUILD_RING_START: ei,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (
                      !j.A.getCurrentConfig({
                          guildId: n,
                          location: "OverlayStopRinging",
                      }).enabled
                  )
                      return !1;
                  i.includes(_.default.getId()) && $(et(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: r } = e,
                      s = V.A.getGame();
                  return (
                      null != s &&
                      s.id === r &&
                      (n === U.xL.JOIN && (t = (0, h.A)(i, s)),
                      null != t &&
                          void en(t, {
                              priority: 2,
                              type: 0,
                          }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function (e) {
                  "manual" === e.clipMethod && en((0, m.V)(K.intl.string(K.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  en((0, m.V)(K.intl.string(K.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (0, m.t)();
                  null != t && en(t);
              },
          },
);
