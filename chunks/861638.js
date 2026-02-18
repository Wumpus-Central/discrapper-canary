"use strict";
n.d(t, { Ht: () => ei, Vc: () => es, as: () => er }), n(321073);
var r = n(835245),
    i = n(71931),
    s = n(311907),
    a = n(506774),
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
    E = n(616005),
    g = n(789999),
    A = n(604594),
    I = n(565783),
    T = n(652215);
let S = 27,
    y = 15 * h.A.Millis.MINUTE,
    v = h.A.Millis.SECOND,
    N = "LAST_CLIENT_HEARTBEAT_SESSION",
    C = "user",
    b = new u.A("SessionHeartbeatScheduler"),
    R = null,
    O = null,
    D = 0,
    L = 0,
    w = { state: "uninitialized" },
    x = f.A.getState(),
    M = (0, g.R)(),
    P = d.default.getToken();
function k() {
    if (null != R) return;
    let e = 0 === L ? 0 : y - (performance.now() - L);
    m.A.addBreadcrumb({
        message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
    }),
        (R = {
            type: "timeout",
            id: setTimeout(() => {
                V(),
                    (R = {
                        type: "interval",
                        id: setInterval(() => {
                            V();
                        }, y),
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
    U() && (m.A.addBreadcrumb({ category: C, message: "Stopping Analytics Heartbeat" }), (0, l.p)());
}
function F() {
    let e = _.A.getIdleSince() ?? 0;
    return {
        is_idle: _.A.isIdle(),
        idle_duration_ms: Date.now() - e,
        is_afk: _.A.isAFK(),
        is_system_suspended: _.A.getSystemSuspended(),
        is_system_locked: _.A.getSystemLocked(),
    };
}
async function V() {
    let e = Date.now(),
        t = await ei(),
        n = Date.now();
    if (null == t)
        return void m.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${n - e}ms`));
    m.A.addBreadcrumb({ category: C, message: "Tracking Heartbeat", data: { initialized: t.createdAtTimestamp } });
    let r = {
        client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
        client_heartbeat_version: S,
        ...(0, E.Q)(),
        ...F(),
    };
    p.default.track(T.HAw.CLIENT_HEARTBEAT, r), (L = performance.now()), (0, l.p)();
}
function B() {
    if (!(null != P && (0, I.$)()) || performance.now() - L <= y) return;
    let e = { client_heartbeat_version: S };
    p.default.track(T.HAw.CLIENT_HEARTBEAT_SKIPPED, e);
}
function H() {}
function j() {
    let e = [];
    return (
        null != P && (M && e.push("foregrounded"), x === T.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: S, reasons: e }
    );
}
function Y() {
    return j().active;
}
function W() {
    Y() ? k() : G(), Z();
}
function K() {
    null == O &&
        (O = {
            id: setInterval(() => {
                B();
            }, y),
            type: "interval",
        });
}
function z(e) {
    let t = performance.now();
    if (!(t - D < v))
        try {
            a.w.set(N, e), (D = t);
        } catch (e) {
            m.A.captureException(e);
        }
}
function $(e) {
    return null == e
        ? null
        : e.version !== A.Ir
          ? (b.warn(`Throwing away client session with invalid version: ${e.version}, expected ${A.Ir}`), null)
          : e;
}
function q() {
    a.w.remove(N), (w = { state: "loaded", session: null }), G(), (L = 0);
}
function Z() {
    c.A.getSocket()?.handleActiveStateChange(j());
}
async function X() {
    let e = await ei(!1);
    null != e && c.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C);
}
function Q() {
    let e = d.default.getToken();
    P !== e && ((P = e), q()), W();
}
function J() {
    let e = f.A.getState();
    x !== e && ((x = e), W());
}
function ee(e) {
    let { focused: t } = e;
    M !== t && ((M = t), W());
}
function et(e) {
    let { state: t } = e,
        n = t === T.g6G.ACTIVE;
    M !== n && ((M = n), W());
}
function en() {
    (x = f.A.getState()), (M = (0, g.R)()), Q();
}
function er() {
    m.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        f.A.addChangeListener(J),
        d.default.addChangeListener(Q),
        o.h.subscribe("WINDOW_FOCUS", ee),
        o.h.subscribe("APP_STATE_UPDATE", et),
        o.h.subscribe("CONNECTION_OPEN", X),
        W(),
        K(),
        s.Ay.initialized.then(en);
}
async function ei() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === w.state ? w.session?.uuid : null;
    try {
        t = "uninitialized" === w.state ? $(await a.w.getAfterRefresh(N)) : w.session;
    } catch (e) {
        m.A.captureException(e);
    }
    return (() => {
        let s = Date.now();
        return (
            Y()
                ? ((null == t || (0, A.aE)(t)) &&
                      ((t = { uuid: (0, r.A)(), createdAtTimestamp: s, lastUsedTimestamp: s, version: A.Ir }), (D = 0)),
                  (t.lastUsedTimestamp = s),
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
function es() {
    let e = "uninitialized" === w.state ? $(a.w.get(N)) : w.session;
    return null == e || (0, A.aE)(e) ? null : e;
}
