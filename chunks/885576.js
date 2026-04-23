let i;
n.d(t, { A: () => f });
var r = n(111956),
    a = n.n(r),
    l = n(17928),
    s = n(228366),
    o = n(956793),
    u = n(77729),
    _ = n(253932),
    E = n(927813),
    A = n(723702),
    c = n(495544),
    d = n(652215),
    I = n(731854);
let T = Date.now(),
    N = !1,
    S = !1,
    p = !1,
    O = !1,
    C = !1;
function g() {
    return p || O || ((0, A.isAndroid)() && C);
}
function R() {
    let e;
    Date.now() - T > d.sdF || g()
        ? N || s.h.dispatch({ type: "IDLE", idle: !0, idleSince: T })
        : N && s.h.dispatch({ type: "IDLE", idle: !1 }),
        0 === (e = _.cU.getSetting()) || null != i || Date.now() - T > Math.min(e * E.A.Millis.SECOND, d.sdF) || g()
            ? S || s.h.dispatch({ type: "AFK", afk: !0 })
            : S && s.h.dispatch({ type: "AFK", afk: !1 });
}
function m(e) {
    e && (i = Date.now()), R();
}
if (!__OVERLAY__) {
    A.isPlatformEmbedded && u.A?.powerMonitor != null
        ? (!(function e() {
              let t = (t) => {
                  let n = Date.now() - t;
                  (null == i || n > i) && ((T = Math.max(n, T)), (i = null)),
                      R(),
                      setTimeout(e, 10 * E.A.Millis.SECOND);
              };
              if (u.A?.powerMonitor?.getSystemIdleTimeMs != null) {
                  let e = u.A.powerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(t) : t(e);
              }
          })(),
          u.A.powerMonitor.on("resume", () => {
              (p = !1), m(!1);
          }),
          u.A.powerMonitor.on("suspend", () => {
              (p = !0), m(!0), o.default.disconnect();
          }),
          u.A.powerMonitor.on("lock-screen", () => {
              (O = !0), m(!0);
          }),
          u.A.powerMonitor.on("unlock-screen", () => {
              (O = !1), m(!1);
          }))
        : setInterval(R, 30 * E.A.Millis.SECOND);
    let e = a()(() => {
        h({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function h(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: r } = e,
        a = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!a || !(t <= T)) &&
        !r &&
        ((i = null),
        (T = a ? t : Date.now()),
        __OVERLAY__ ? s.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: T }) : R(),
        !1)
    );
}
class M extends l.Ay.Store {
    initialize() {
        this.waitFor(c.default);
    }
    static displayName = "IdleStore";
    isIdle() {
        return N;
    }
    isAFK() {
        return S;
    }
    getIdleSince() {
        return N ? T : null;
    }
    getSystemSuspended() {
        return p;
    }
    getSystemLocked() {
        return O;
    }
}
let f = new M(s.h, {
    IDLE: function (e) {
        N = e.idle;
    },
    AFK: function (e) {
        S = e.afk;
    },
    SPEAKING: function (e) {
        let { userId: t, speakingFlags: n } = e;
        return n !== I.ME.NONE && t === c.default.getId() && h({}), !1;
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return (C = t === d.g6G.BACKGROUND), (i = null), (T = Date.now()), R(), !1;
    },
    OVERLAY_SET_NOT_IDLE: h,
    CHANNEL_SELECT: h,
    VOICE_CHANNEL_SELECT: h,
    WINDOW_FOCUS: h,
    OVERLAY_INITIALIZE: h,
    OVERLAY_SET_INPUT_LOCKED: h,
});
