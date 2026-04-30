"use strict";
let i;
n.d(t, { A: () => O });
var r = n(111956),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(730852),
    u = n(77729),
    c = n(885386),
    d = n(927813),
    _ = n(723702),
    f = n(495544),
    h = n(652215),
    p = n(731854);
let E = Date.now(),
    m = !1,
    g = !1,
    A = !1,
    I = !1,
    T = !1;
function S() {
    return A || I || ((0, _.isAndroid)() && T);
}
function N() {
    let e;
    Date.now() - E > h.sdF || S()
        ? m || o.h.dispatch({ type: "IDLE", idle: !0, idleSince: E })
        : m && o.h.dispatch({ type: "IDLE", idle: !1 }),
        0 === (e = c.cU.getSetting()) || null != i || Date.now() - E > Math.min(e * d.A.Millis.SECOND, h.sdF) || S()
            ? g || o.h.dispatch({ type: "AFK", afk: !0 })
            : g && o.h.dispatch({ type: "AFK", afk: !1 });
}
function y(e) {
    e && (i = Date.now()), N();
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && u.A?.powerMonitor != null
        ? (!(function e() {
              let t = (t) => {
                  let n = Date.now() - t;
                  (null == i || n > i) && ((E = Math.max(n, E)), (i = null)),
                      N(),
                      setTimeout(e, 10 * d.A.Millis.SECOND);
              };
              if (u.A?.powerMonitor?.getSystemIdleTimeMs != null) {
                  let e = u.A.powerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(t) : t(e);
              }
          })(),
          u.A.powerMonitor.on("resume", () => {
              (A = !1), y(!1);
          }),
          u.A.powerMonitor.on("suspend", () => {
              (A = !0), y(!0), l.default.disconnect();
          }),
          u.A.powerMonitor.on("lock-screen", () => {
              (I = !0), y(!0);
          }),
          u.A.powerMonitor.on("unlock-screen", () => {
              (I = !1), y(!1);
          }))
        : setInterval(N, 30 * d.A.Millis.SECOND);
    let e = s()(() => {
        C({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function C(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: r } = e,
        s = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!s || !(t <= E)) &&
        !r &&
        ((i = null),
        (E = s ? t : Date.now()),
        __OVERLAY__ ? o.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: E }) : N(),
        !1)
    );
}
class v extends a.Ay.Store {
    initialize() {
        this.waitFor(f.default);
    }
    static displayName = "IdleStore";
    isIdle() {
        return m;
    }
    isAFK() {
        return g;
    }
    getIdleSince() {
        return m ? E : null;
    }
    getSystemSuspended() {
        return A;
    }
    getSystemLocked() {
        return I;
    }
}
let O = new v(o.h, {
    IDLE: function (e) {
        m = e.idle;
    },
    AFK: function (e) {
        g = e.afk;
    },
    SPEAKING: function (e) {
        let { userId: t, speakingFlags: n } = e;
        return n !== p.ME.NONE && t === f.default.getId() && C({}), !1;
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return (T = t === h.g6G.BACKGROUND), (i = null), (E = Date.now()), N(), !1;
    },
    OVERLAY_SET_NOT_IDLE: C,
    CHANNEL_SELECT: C,
    VOICE_CHANNEL_SELECT: C,
    WINDOW_FOCUS: C,
    OVERLAY_INITIALIZE: C,
    OVERLAY_SET_INPUT_LOCKED: C,
});
