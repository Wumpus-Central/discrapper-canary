"use strict";
n.d(t, { Ht: () => ei, Vc: () => ea, as: () => er }), n(321073);
var r = n(835245),
    i = n(71931),
    a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(237774),
    u = n(626584),
    c = n(142120),
    d = n(961350),
    _ = n(885576),
    f = n(383501),
    p = n(954571),
    h = n(927813),
    m = n(728458),
    g = n(616005),
    E = n(789999),
    A = n(604594),
    I = n(565783),
    T = n(652215);
let y = 27,
    S = 15 * h.A.Millis.MINUTE,
    v = h.A.Millis.SECOND,
    C = "LAST_CLIENT_HEARTBEAT_SESSION",
    b = "user",
    N = new u.A("SessionHeartbeatScheduler"),
    R = null,
    O = null,
    D = 0,
    L = 0,
    w = { state: "uninitialized" },
    x = f.A.getState(),
    P = (0, E.R)(),
    M = d.default.getToken();
function k() {
    if (null != R) return;
    let e = 0 === L ? 0 : S - (performance.now() - L);
    m.A.addBreadcrumb({
        message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
    }),
        (R = {
            type: "timeout",
            id: setTimeout(() => {
                F(),
                    (R = {
                        type: "interval",
                        id: setInterval(() => {
                            F();
                        }, S),
                    });
            }, e),
        });
}
function U() {
    if (null == R) return !1;
    switch (R.type) {
        case "timeout":
            clearTimeout(R.id);
            break;
        case "interval":
            clearInterval(R.id);
            break;
        default:
            R.type;
    }
    return (R = null), !0;
}
function G() {
    U() && (m.A.addBreadcrumb({ category: b, message: "Stopping Analytics Heartbeat" }), (0, l.p)());
}
function V() {
    let e = _.A.getIdleSince() ?? 0;
    return {
        is_idle: _.A.isIdle(),
        idle_duration_ms: Date.now() - e,
        is_afk: _.A.isAFK(),
        is_system_suspended: _.A.getSystemSuspended(),
        is_system_locked: _.A.getSystemLocked(),
    };
}
async function F() {
    let e = Date.now(),
        t = await ei(),
        n = Date.now();
    if (null == t)
        return void m.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${n - e}ms`));
    m.A.addBreadcrumb({ category: b, message: "Tracking Heartbeat", data: { initialized: t.createdAtTimestamp } });
    let r = {
        client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
        client_heartbeat_version: y,
        ...(0, g.Q)(),
        ...V(),
    };
    p.default.track(T.HAw.CLIENT_HEARTBEAT, r), (L = performance.now()), (0, l.p)();
}
function B() {
    if (!(null != M && (0, I.$)()) || performance.now() - L <= S) return;
    let e = { client_heartbeat_version: y };
    p.default.track(T.HAw.CLIENT_HEARTBEAT_SKIPPED, e);
}
function j() {}
function H() {
    let e = [];
    return (
        null != M && (P && e.push("foregrounded"), x === T.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: y, reasons: e }
    );
}
function Y() {
    return H().active;
}
function W() {
    Y() ? k() : G(), Z();
}
function K() {
    null == O &&
        (O = {
            id: setInterval(() => {
                B();
            }, S),
            type: "interval",
        });
}
function z(e) {
    let t = performance.now();
    if (!(t - D < v))
        try {
            s.w.set(C, e), (D = t);
        } catch (e) {
            m.A.captureException(e);
        }
}
function $(e) {
    return null == e
        ? null
        : e.version !== A.Ir
          ? (N.warn(`Throwing away client session with invalid version: ${e.version}, expected ${A.Ir}`), null)
          : e;
}
function q() {
    s.w.remove(C), (w = { state: "loaded", session: null }), G(), (L = 0);
}
function Z() {
    c.A.getSocket()?.handleActiveStateChange(H());
}
async function Q() {
    let e = await ei(!1);
    null != e && c.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C);
}
function X() {
    let e = d.default.getToken();
    M !== e && ((M = e), q()), W();
}
function J() {
    let e = f.A.getState();
    x !== e && ((x = e), W());
}
function ee(e) {
    let { focused: t } = e;
    P !== t && ((P = t), W());
}
function et(e) {
    let { state: t } = e,
        n = t === T.g6G.ACTIVE;
    P !== n && ((P = n), W());
}
function en() {
    (x = f.A.getState()), (P = (0, E.R)()), X();
}
function er() {
    m.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        f.A.addChangeListener(J),
        d.default.addChangeListener(X),
        o.h.subscribe("WINDOW_FOCUS", ee),
        o.h.subscribe("APP_STATE_UPDATE", et),
        o.h.subscribe("CONNECTION_OPEN", Q),
        W(),
        K(),
        a.Ay.initialized.then(en);
}
async function ei() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === w.state ? w.session?.uuid : null;
    try {
        t = "uninitialized" === w.state ? $(await s.w.getAfterRefresh(C)) : w.session;
    } catch (e) {
        m.A.captureException(e);
    }
    return (() => {
        let a = Date.now();
        return (
            Y()
                ? ((null == t || (0, A.aE)(t)) &&
                      ((t = { uuid: (0, r.A)(), createdAtTimestamp: a, lastUsedTimestamp: a, version: A.Ir }), (D = 0)),
                  (t.lastUsedTimestamp = a),
                  z(t))
                : null != t && (0, A.aE)(t) && (t = null),
            (w = { state: "loaded", session: t }),
            null != t &&
                n !== t.uuid &&
                e &&
                c.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, i.C),
            t
        );
    })();
}
function ea() {
    let e = "uninitialized" === w.state ? $(s.w.get(C)) : w.session;
    return null == e || (0, A.aE)(e) ? null : e;
}
