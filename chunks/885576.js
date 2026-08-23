"use strict";
let i;
n.d(t, { A: () => L });
var r = n(649852),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = n(730852),
    d = n(77729),
    c = n(885386),
    u = n(927813),
    _ = n(723702),
    E = n(280450),
    A = n(652215),
    h = n(731854);
let I = Date.now(),
    f = !1,
    p = !1,
    T = !1,
    m = !1,
    g = !1;
function S() {
    return T || m || ((0, _.isAndroid)() && g);
}
function N() {
    let e;
    Date.now() - I > A.sdF || S()
        ? f || l.h.dispatch({ type: "IDLE", idle: !0, idleSince: I })
        : f && l.h.dispatch({ type: "IDLE", idle: !1 }),
        0 === (e = c.cU.getSetting()) || null != i || Date.now() - I > Math.min(e * u.A.Millis.SECOND, A.sdF) || S()
            ? p || l.h.dispatch({ type: "AFK", afk: !0 })
            : p && l.h.dispatch({ type: "AFK", afk: !1 });
}
function C(e) {
    e && (i = Date.now()), N();
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && d.A?.powerMonitor != null
        ? (!(function e() {
              function t(t) {
                  let n = Date.now() - t;
                  (null == i || n > i) && ((I = Math.max(n, I)), (i = null)),
                      N(),
                      setTimeout(e, 10 * u.A.Millis.SECOND);
              }
              if (d.A?.powerMonitor?.getSystemIdleTimeMs != null) {
                  let e = d.A.powerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(t) : t(e);
              }
          })(),
          d.A.powerMonitor.on("resume", () => {
              (T = !1), C(!1);
          }),
          d.A.powerMonitor.on("suspend", () => {
              (T = !0), C(!0), o.default.disconnect();
          }),
          d.A.powerMonitor.on("lock-screen", () => {
              (m = !0), C(!0);
          }),
          d.A.powerMonitor.on("unlock-screen", () => {
              (m = !1), C(!1);
          }))
        : setInterval(N, 30 * u.A.Millis.SECOND);
    let e = a()(() => {
        R({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function R(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: r } = e,
        a = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!a || !(t <= I)) &&
        !r &&
        ((i = null),
        (I = a ? t : Date.now()),
        __OVERLAY__ ? l.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: I }) : N(),
        !1)
    );
}
class O extends s.Ay.Store {
    initialize() {
        this.waitFor(E.default);
    }
    static displayName = "IdleStore";
    isIdle() {
        return f;
    }
    isAFK() {
        return p;
    }
    getIdleSince() {
        return f ? I : null;
    }
    getSystemSuspended() {
        return T;
    }
    getSystemLocked() {
        return m;
    }
}
let L = new O(l.h, {
    IDLE: function (e) {
        f = e.idle;
    },
    AFK: function (e) {
        p = e.afk;
    },
    SPEAKING: function (e) {
        let { userId: t, speakingFlags: n } = e;
        return n !== h.ME.NONE && t === E.default.getId() && R({}), !1;
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return (g = t === A.g6G.BACKGROUND), (i = null), (I = Date.now()), N(), !1;
    },
    OVERLAY_SET_NOT_IDLE: R,
    CHANNEL_SELECT: R,
    VOICE_CHANNEL_SELECT: R,
    WINDOW_FOCUS: R,
    OVERLAY_INITIALIZE: R,
    OVERLAY_SET_INPUT_LOCKED: R,
});
