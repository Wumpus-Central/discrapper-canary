let r;
n.d(t, {
    A: () => U,
});
var i,
    a = n(111956),
    s = n.n(a),
    o = n(311907),
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
let b = Date.now(),
    y = !1,
    O = !1,
    A = !1,
    v = !1,
    S = !1;

function I() {
    return A || v || ((0, _.isAndroid)() && S);
}

function T() {
    let e = f.cU.getSetting();
    0 === e || null != r || Date.now() - b > Math.min(e * p.A.Millis.SECOND, m.sdF) || I()
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
    Date.now() - b > m.sdF || I()
        ? y ||
          l.h.dispatch({
              type: "IDLE",
              idle: !0,
              idleSince: b,
          })
        : y &&
          l.h.dispatch({
              type: "IDLE",
              idle: !1,
          });
}

function N() {
    C(), T();
}

function R() {
    var e;
    let t = (e) => {
        if (
            d.A.getConfig({
                location: "checkNativeIdle",
            }).system_wide_input
        ) {
            let t = Date.now() - e;
            (null == r || t > r) && ((b = Math.max(t, b)), (r = null));
        }
        N(), setTimeout(R, 10 * p.A.Millis.SECOND);
    };
    if (
        (null === u.A || void 0 === u.A || null == (e = u.A.remotePowerMonitor) ? void 0 : e.getSystemIdleTimeMs) !=
        null
    ) {
        let e = u.A.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(t) : t(e);
    }
}

function w(e) {
    d.A.getConfig({
        location: "handlePowerEvent",
    }).power_events
        ? j({})
        : (e && (r = Date.now()), N());
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && (null === u.A || void 0 === u.A ? void 0 : u.A.remotePowerMonitor) != null
        ? (R(),
          u.A.remotePowerMonitor.on("resume", () => {
              (A = !1), w(!1);
          }),
          u.A.remotePowerMonitor.on("suspend", () => {
              (A = !0), w(!0), c.default.disconnect();
          }),
          u.A.remotePowerMonitor.on("lock-screen", () => {
              (v = !0), w(!0);
          }),
          u.A.remotePowerMonitor.on("unlock-screen", () => {
              (v = !1), w(!1);
          }))
        : setInterval(N, 30 * p.A.Millis.SECOND);
    let e = s()(() => {
        d.A.getConfig({
            location: "handleGenericInput",
        }).generic_inputs && j({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}

function P(e) {
    y = e.idle;
}

function D(e) {
    O = e.afk;
}

function x(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== g.ME.NONE && t === h.default.getId() && j({}), !1;
}

function L(e) {
    let { state: t } = e;
    return (S = t === m.g6G.BACKGROUND), (r = null), (b = Date.now()), N(), !1;
}

function j(e) {
    let { timestamp: t, type: n } = e,
        i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!i || !(t <= b)) &&
        ((r = null),
        (b = i ? t : Date.now()),
        __OVERLAY__
            ? l.h.dispatch({
                  type: "OVERLAY_SET_NOT_IDLE",
                  timestamp: b,
              })
            : N(),
        !1)
    );
}

function M() {
    if (
        !d.A.getConfig({
            location: "handleSettingsProtoUpdate",
        }).settings_updates
    )
        return !1;
    j({});
}
class k extends (i = o.Ay.Store) {
    initialize() {
        this.waitFor(h.default);
    }
    isIdle() {
        return y;
    }
    isAFK() {
        return O;
    }
    getIdleSince() {
        return y ? b : null;
    }
    getSystemSuspended() {
        return A;
    }
    getSystemLocked() {
        return v;
    }
}
E(k, "displayName", "IdleStore");
let U = new k(l.h, {
    IDLE: P,
    AFK: D,
    SPEAKING: x,
    APP_STATE_UPDATE: L,
    OVERLAY_SET_NOT_IDLE: j,
    CHANNEL_SELECT: j,
    VOICE_CHANNEL_SELECT: j,
    WINDOW_FOCUS: j,
    OVERLAY_INITIALIZE: j,
    OVERLAY_SET_INPUT_LOCKED: j,
    USER_SETTINGS_PROTO_UPDATE: M,
});
