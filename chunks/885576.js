"use strict";
let r;
n.d(t, { A: () => v });
var i = n(111956),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l = n(956793),
    u = n(77729),
    d = n(253932),
    c = n(927813),
    _ = n(723702),
    f = n(961350),
    E = n(652215),
    h = n(731854);
let p = Date.now(),
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
    Date.now() - p > E.sdF || S()
        ? m || o.h.dispatch({ type: "IDLE", idle: !0, idleSince: p })
        : m && o.h.dispatch({ type: "IDLE", idle: !1 }),
        0 === (e = d.cU.getSetting()) || null != r || Date.now() - p > Math.min(e * c.A.Millis.SECOND, E.sdF) || S()
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
                  (null == r || n > r) && ((p = Math.max(n, p)), (r = null)),
                      y(),
                      setTimeout(e, 10 * c.A.Millis.SECOND);
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
        : setInterval(y, 30 * c.A.Millis.SECOND);
    let e = s()(() => {
        O({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function O(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: i } = e,
        s = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!s || !(t <= p)) &&
        !i &&
        ((r = null),
        (p = s ? t : Date.now()),
        __OVERLAY__ ? o.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: p }) : y(),
        !1)
    );
}
class R extends a.Ay.Store {
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
        return m ? p : null;
    }
    getSystemSuspended() {
        return A;
    }
    getSystemLocked() {
        return I;
    }
}
let v = new R(o.h, {
    IDLE: function (e) {
        m = e.idle;
    },
    AFK: function (e) {
        g = e.afk;
    },
    SPEAKING: function (e) {
        let { userId: t, speakingFlags: n } = e;
        return n !== h.ME.NONE && t === f.default.getId() && O({}), !1;
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return (T = t === E.g6G.BACKGROUND), (r = null), (p = Date.now()), y(), !1;
    },
    OVERLAY_SET_NOT_IDLE: O,
    CHANNEL_SELECT: O,
    VOICE_CHANNEL_SELECT: O,
    WINDOW_FOCUS: O,
    OVERLAY_INITIALIZE: O,
    OVERLAY_SET_INPUT_LOCKED: O,
});
