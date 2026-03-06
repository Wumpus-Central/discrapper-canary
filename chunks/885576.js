"use strict";
let r;
n.d(t, { A: () => x });
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
let m = Date.now(),
    E = !1,
    g = !1,
    A = !1,
    I = !1,
    T = !1;
function S() {
    return A || I || ((0, _.isAndroid)() && T);
}
function y() {
    let e = c.cU.getSetting();
    0 === e || null != r || Date.now() - m > Math.min(e * d.A.Millis.SECOND, p.sdF) || S()
        ? g || o.h.dispatch({ type: "AFK", afk: !0 })
        : g && o.h.dispatch({ type: "AFK", afk: !1 });
}
function v() {
    Date.now() - m > p.sdF || S()
        ? E || o.h.dispatch({ type: "IDLE", idle: !0, idleSince: m })
        : E && o.h.dispatch({ type: "IDLE", idle: !1 });
}
function N() {
    v(), y();
}
function C() {
    let e = (e) => {
        let t = Date.now() - e;
        (null == r || t > r) && ((m = Math.max(t, m)), (r = null)), N(), setTimeout(C, 10 * d.A.Millis.SECOND);
    };
    if (u.A?.powerMonitor?.getSystemIdleTimeMs != null) {
        let t = u.A.powerMonitor.getSystemIdleTimeMs();
        t instanceof Promise ? t.then(e) : e(t);
    }
}
function R(e) {
    e && (r = Date.now()), N();
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && u.A?.powerMonitor != null
        ? (C(),
          u.A.powerMonitor.on("resume", () => {
              (A = !1), R(!1);
          }),
          u.A.powerMonitor.on("suspend", () => {
              (A = !0), R(!0), l.default.disconnect();
          }),
          u.A.powerMonitor.on("lock-screen", () => {
              (I = !0), R(!0);
          }),
          u.A.powerMonitor.on("unlock-screen", () => {
              (I = !1), R(!1);
          }))
        : setInterval(N, 30 * d.A.Millis.SECOND);
    let e = s()(() => {
        w({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function O(e) {
    E = e.idle;
}
function b(e) {
    g = e.afk;
}
function D(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== h.ME.NONE && t === f.default.getId() && w({}), !1;
}
function L(e) {
    let { state: t } = e;
    return (T = t === p.g6G.BACKGROUND), (r = null), (m = Date.now()), N(), !1;
}
function w(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: i } = e,
        s = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!s || !(t <= m)) &&
        !i &&
        ((r = null),
        (m = s ? t : Date.now()),
        __OVERLAY__ ? o.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: m }) : N(),
        !1)
    );
}
class M extends a.Ay.Store {
    initialize() {
        this.waitFor(f.default);
    }
    static displayName = "IdleStore";
    isIdle() {
        return E;
    }
    isAFK() {
        return g;
    }
    getIdleSince() {
        return E ? m : null;
    }
    getSystemSuspended() {
        return A;
    }
    getSystemLocked() {
        return I;
    }
}
let x = new M(o.h, {
    IDLE: O,
    AFK: b,
    SPEAKING: D,
    APP_STATE_UPDATE: L,
    OVERLAY_SET_NOT_IDLE: w,
    CHANNEL_SELECT: w,
    VOICE_CHANNEL_SELECT: w,
    WINDOW_FOCUS: w,
    OVERLAY_INITIALIZE: w,
    OVERLAY_SET_INPUT_LOCKED: w,
});
