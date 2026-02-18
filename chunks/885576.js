"use strict";
let r;
n.d(t, { A: () => M });
var i = n(111956),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(956793),
    u = n(77729),
    c = n(253932),
    d = n(927813),
    _ = n(723702),
    f = n(961350),
    h = n(652215),
    p = n(731854);
let g = Date.now(),
    E = !1,
    A = !1,
    I = !1,
    T = !1,
    y = !1;
function S() {
    return I || T || ((0, _.isAndroid)() && y);
}
function v() {
    let e = c.cU.getSetting();
    0 === e || null != r || Date.now() - g > Math.min(e * d.A.Millis.SECOND, h.sdF) || S()
        ? A || o.h.dispatch({ type: "AFK", afk: !0 })
        : A && o.h.dispatch({ type: "AFK", afk: !1 });
}
function C() {
    Date.now() - g > h.sdF || S()
        ? E || o.h.dispatch({ type: "IDLE", idle: !0, idleSince: g })
        : E && o.h.dispatch({ type: "IDLE", idle: !1 });
}
function b() {
    C(), v();
}
function N() {
    let e = (e) => {
        let t = Date.now() - e;
        (null == r || t > r) && ((g = Math.max(t, g)), (r = null)), b(), setTimeout(N, 10 * d.A.Millis.SECOND);
    };
    if (u.A?.remotePowerMonitor?.getSystemIdleTimeMs != null) {
        let t = u.A.remotePowerMonitor.getSystemIdleTimeMs();
        t instanceof Promise ? t.then(e) : e(t);
    }
}
function R(e) {
    e && (r = Date.now()), b();
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && u.A?.remotePowerMonitor != null
        ? (N(),
          u.A.remotePowerMonitor.on("resume", () => {
              (I = !1), R(!1);
          }),
          u.A.remotePowerMonitor.on("suspend", () => {
              (I = !0), R(!0), l.default.disconnect();
          }),
          u.A.remotePowerMonitor.on("lock-screen", () => {
              (T = !0), R(!0);
          }),
          u.A.remotePowerMonitor.on("unlock-screen", () => {
              (T = !1), R(!1);
          }))
        : setInterval(b, 30 * d.A.Millis.SECOND);
    let e = a()(() => {
        x({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function O(e) {
    E = e.idle;
}
function D(e) {
    A = e.afk;
}
function L(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== p.ME.NONE && t === f.default.getId() && x({}), !1;
}
function w(e) {
    let { state: t } = e;
    return (y = t === h.g6G.BACKGROUND), (r = null), (g = Date.now()), b(), !1;
}
function x(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: i } = e,
        a = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!a || !(t <= g)) &&
        !i &&
        ((r = null),
        (g = a ? t : Date.now()),
        __OVERLAY__ ? o.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: g }) : b(),
        !1)
    );
}
class P extends s.Ay.Store {
    initialize() {
        this.waitFor(f.default);
    }
    static displayName = "IdleStore";
    isIdle() {
        return E;
    }
    isAFK() {
        return A;
    }
    getIdleSince() {
        return E ? g : null;
    }
    getSystemSuspended() {
        return I;
    }
    getSystemLocked() {
        return T;
    }
}
let M = new P(o.h, {
    IDLE: O,
    AFK: D,
    SPEAKING: L,
    APP_STATE_UPDATE: w,
    OVERLAY_SET_NOT_IDLE: x,
    CHANNEL_SELECT: x,
    VOICE_CHANNEL_SELECT: x,
    WINDOW_FOCUS: x,
    OVERLAY_INITIALIZE: x,
    OVERLAY_SET_INPUT_LOCKED: x,
});
