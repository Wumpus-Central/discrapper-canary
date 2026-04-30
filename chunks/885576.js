let i;
n.d(t, { A: () => L });
var r = n(111956),
    a = n.n(r),
    l = n(17928),
    s = n(228366),
    E = n(956793),
    _ = n(77729),
    o = n(253932),
    u = n(927813),
    A = n(723702),
    d = n(495544),
    c = n(652215),
    I = n(731854);
let T = Date.now(),
    N = !1,
    S = !1,
    O = !1,
    C = !1,
    p = !1;
function R() {
    return O || C || ((0, A.isAndroid)() && p);
}
function g() {
    let e;
    Date.now() - T > c.sdF || R()
        ? N || s.h.dispatch({ type: "IDLE", idle: !0, idleSince: T })
        : N && s.h.dispatch({ type: "IDLE", idle: !1 }),
        0 === (e = o.cU.getSetting()) || null != i || Date.now() - T > Math.min(e * u.A.Millis.SECOND, c.sdF) || R()
            ? S || s.h.dispatch({ type: "AFK", afk: !0 })
            : S && s.h.dispatch({ type: "AFK", afk: !1 });
}
function M(e) {
    e && (i = Date.now()), g();
}
if (!__OVERLAY__) {
    A.isPlatformEmbedded && _.A?.powerMonitor != null
        ? (!(function e() {
              let t = (t) => {
                  let n = Date.now() - t;
                  (null == i || n > i) && ((T = Math.max(n, T)), (i = null)),
                      g(),
                      setTimeout(e, 10 * u.A.Millis.SECOND);
              };
              if (_.A?.powerMonitor?.getSystemIdleTimeMs != null) {
                  let e = _.A.powerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(t) : t(e);
              }
          })(),
          _.A.powerMonitor.on("resume", () => {
              (O = !1), M(!1);
          }),
          _.A.powerMonitor.on("suspend", () => {
              (O = !0), M(!0), E.default.disconnect();
          }),
          _.A.powerMonitor.on("lock-screen", () => {
              (C = !0), M(!0);
          }),
          _.A.powerMonitor.on("unlock-screen", () => {
              (C = !1), M(!1);
          }))
        : setInterval(g, 30 * u.A.Millis.SECOND);
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
        __OVERLAY__ ? s.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: T }) : g(),
        !1)
    );
}
class m extends l.Ay.Store {
    initialize() {
        this.waitFor(d.default);
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
        return O;
    }
    getSystemLocked() {
        return C;
    }
}
let L = new m(s.h, {
    IDLE: function (e) {
        N = e.idle;
    },
    AFK: function (e) {
        S = e.afk;
    },
    SPEAKING: function (e) {
        let { userId: t, speakingFlags: n } = e;
        return n !== I.ME.NONE && t === d.default.getId() && h({}), !1;
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return (p = t === c.g6G.BACKGROUND), (i = null), (T = Date.now()), g(), !1;
    },
    OVERLAY_SET_NOT_IDLE: h,
    CHANNEL_SELECT: h,
    VOICE_CHANNEL_SELECT: h,
    WINDOW_FOCUS: h,
    OVERLAY_INITIALIZE: h,
    OVERLAY_SET_INPUT_LOCKED: h,
});
