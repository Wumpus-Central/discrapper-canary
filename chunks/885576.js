let r;
n.d(t, {
    A: () => U,
});
var i,
    a = n(111956),
    o = n.n(a),
    s = n(311907),
    l = n(73153),
    c = n(956793),
    u = n(77729),
    d = n(253168),
    f = n(253932),
    p = n(927813),
    _ = n(723702),
    h = n(961350),
    m = n(652215),
    g = n(731854);

function E(e, t, n) {
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
let y = Date.now(),
    b = !1,
    O = !1,
    v = !1,
    A = !1,
    I = !1;

function S() {
    return v || A || ((0, _.isAndroid)() && I);
}

function T() {
    let e = f.cU.getSetting();
    0 === e || null != r || Date.now() - y > Math.min(e * p.A.Millis.SECOND, m.sdF) || S()
        ? O ||
          l.h.dispatch({
              type: "AFK",
              afk: !0,
          })
        : O &&
          l.h.dispatch({
              type: "AFK",
              afk: !1,
          });
}

function C() {
    Date.now() - y > m.sdF || S()
        ? b ||
          l.h.dispatch({
              type: "IDLE",
              idle: !0,
              idleSince: y,
          })
        : b &&
          l.h.dispatch({
              type: "IDLE",
              idle: !1,
          });
}

function N() {
    C(), T();
}

function w() {
    var e;
    let t = (e) => {
        if (
            d.A.getConfig({
                location: "checkNativeIdle",
            }).system_wide_input
        ) {
            let t = Date.now() - e;
            (null == r || t > r) && ((y = Math.max(t, y)), (r = null));
        }
        N(), setTimeout(w, 10 * p.A.Millis.SECOND);
    };
    if (
        (null === u.A || void 0 === u.A || null == (e = u.A.remotePowerMonitor) ? void 0 : e.getSystemIdleTimeMs) !=
        null
    ) {
        let e = u.A.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(t) : t(e);
    }
}

function R(e) {
    d.A.getConfig({
        location: "handlePowerEvent",
    }).power_events
        ? M({})
        : (e && (r = Date.now()), N());
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && (null === u.A || void 0 === u.A ? void 0 : u.A.remotePowerMonitor) != null
        ? (w(),
          u.A.remotePowerMonitor.on("resume", () => {
              (v = !1), R(!1);
          }),
          u.A.remotePowerMonitor.on("suspend", () => {
              (v = !0), R(!0), c.default.disconnect();
          }),
          u.A.remotePowerMonitor.on("lock-screen", () => {
              (A = !0), R(!0);
          }),
          u.A.remotePowerMonitor.on("unlock-screen", () => {
              (A = !1), R(!1);
          }))
        : setInterval(N, 30 * p.A.Millis.SECOND);
    let e = o()(() => {
        d.A.getConfig({
            location: "handleGenericInput",
        }).generic_inputs && M({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}

function P(e) {
    b = e.idle;
}

function D(e) {
    O = e.afk;
}

function L(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== g.ME.NONE && t === h.default.getId() && M({}), !1;
}

function x(e) {
    let { state: t } = e;
    return (I = t === m.g6G.BACKGROUND), (r = null), (y = Date.now()), N(), !1;
}

function M(e) {
    let { timestamp: t, type: n, bypassIdleUpdate: i } = e,
        a = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!a || !(t <= y)) &&
        !i &&
        ((r = null),
        (y = a ? t : Date.now()),
        __OVERLAY__
            ? l.h.dispatch({
                  type: "OVERLAY_SET_NOT_IDLE",
                  timestamp: y,
              })
            : N(),
        !1)
    );
}

function j() {
    if (
        !d.A.getConfig({
            location: "handleSettingsProtoUpdate",
        }).settings_updates
    )
        return !1;
    M({});
}
class k extends (i = s.Ay.Store) {
    initialize() {
        this.waitFor(h.default);
    }
    isIdle() {
        return b;
    }
    isAFK() {
        return O;
    }
    getIdleSince() {
        return b ? y : null;
    }
    getSystemSuspended() {
        return v;
    }
    getSystemLocked() {
        return A;
    }
}
E(k, "displayName", "IdleStore");
let U = new k(l.h, {
    IDLE: P,
    AFK: D,
    SPEAKING: L,
    APP_STATE_UPDATE: x,
    OVERLAY_SET_NOT_IDLE: M,
    CHANNEL_SELECT: M,
    VOICE_CHANNEL_SELECT: M,
    WINDOW_FOCUS: M,
    OVERLAY_INITIALIZE: M,
    OVERLAY_SET_INPUT_LOCKED: M,
    USER_SETTINGS_PROTO_UPDATE: j,
});
