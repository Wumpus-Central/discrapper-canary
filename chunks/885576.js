"use strict";
let r;
n.d(t, { A: () => O });
var i = n(111956),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l = n(956793),
    u = n(77729),
    c = n(253932),
    d = n(927813),
    _ = n(723702),
    f = n(961350),
    p = n(652215),
    h = n(731854);
let E = Date.now(),
    m = !1,
    g = !1,
    A = !1,
    I = !1,
    T = !1;
function S() {
    return A || I || ((0, _.isAndroid)() && T);
}
function y() {
    let e;
    Date.now() - E > p.sdF || S()
        ? m || o.h.dispatch({ type: "IDLE", idle: !0, idleSince: E })
        : m && o.h.dispatch({ type: "IDLE", idle: !1 }),
        0 === (e = c.cU.getSetting()) || null != r || Date.now() - E > Math.min(e * d.A.Millis.SECOND, p.sdF) || S()
            ? g || o.h.dispatch({ type: "AFK", afk: !0 })
            : g && o.h.dispatch({ type: "AFK", afk: !1 });
}
function N(e) {
    e && (r = Date.now()), y();
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && u.A?.powerMonitor != null
        ? (!(function e() {
              let t = (t) => {
                  let n = Date.now() - t;
                  (null == r || n > r) && ((E = Math.max(n, E)), (r = null)),
                      y(),
                      setTimeout(e, 10 * d.A.Millis.SECOND);
              };
              if (u.A?.powerMonitor?.getSystemIdleTimeMs != null) {
                  let e = u.A.powerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(t) : t(e);
              }
          })(),
          u.A.powerMonitor.on("resume", () => {
              (A = !1), N(!1);
          }),
          u.A.powerMonitor.on("suspend", () => {
              (A = !0), N(!0), l.default.disconnect();
          }),
          u.A.powerMonitor.on("lock-screen", () => {
              (I = !0), N(!0);
          }),
          u.A.powerMonitor.on("unlock-screen", () => {
              (I = !1), N(!1);
          }))
        : setInterval(y, 30 * d.A.Millis.SECOND);
    let e = s()(() => {
        v({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function v(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: i } = e,
        s = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!s || !(t <= E)) &&
        !i &&
        ((r = null),
        (E = s ? t : Date.now()),
        __OVERLAY__ ? o.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: E }) : y(),
        !1)
    );
}
class C extends a.Ay.Store {
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
let O = new C(o.h, {
    IDLE: function (e) {
        m = e.idle;
    },
    AFK: function (e) {
        g = e.afk;
    },
    SPEAKING: function (e) {
        let { userId: t, speakingFlags: n } = e;
        return n !== h.ME.NONE && t === f.default.getId() && v({}), !1;
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return (T = t === p.g6G.BACKGROUND), (r = null), (E = Date.now()), y(), !1;
    },
    OVERLAY_SET_NOT_IDLE: v,
    CHANNEL_SELECT: v,
    VOICE_CHANNEL_SELECT: v,
    WINDOW_FOCUS: v,
    OVERLAY_INITIALIZE: v,
    OVERLAY_SET_INPUT_LOCKED: v,
});
