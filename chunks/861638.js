"use strict";
n.d(t, { Ht: () => ea, Vc: () => es, as: () => ei }), n(321073);
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
    h = n(954571),
    p = n(927813),
    g = n(728458),
    E = n(616005),
    A = n(789999),
    I = n(604594),
    T = n(565783),
    y = n(652215);
let S = 27,
    v = 15 * p.A.Millis.MINUTE,
    C = p.A.Millis.SECOND,
    b = "LAST_CLIENT_HEARTBEAT_SESSION",
    N = "user",
    R = new u.A("SessionHeartbeatScheduler"),
    O = null,
    D = null,
    L = 0,
    w = 0,
    x = { state: "uninitialized" },
    P = f.A.getState(),
    M = (0, A.R)(),
    k = d.default.getToken();
function U() {
    if (null != O) return;
    let e = 0 === w ? 0 : v - (performance.now() - w);
    g.A.addBreadcrumb({
        message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
    }),
        (O = {
            type: "timeout",
            id: setTimeout(() => {
                B(),
                    (O = {
                        type: "interval",
                        id: setInterval(() => {
                            B();
                        }, v),
                    });
            }, e),
        });
}
function G() {
    if (null == O) return !1;
    switch (O.type) {
        case "timeout":
            clearTimeout(O.id);
            break;
        case "interval":
            clearInterval(O.id);
            break;
        default:
            O.type;
    }
    return (O = null), !0;
}
function F() {
    G() && (g.A.addBreadcrumb({ category: N, message: "Stopping Analytics Heartbeat" }), (0, l.p)());
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
async function B() {
    let e = Date.now(),
        t = await ea(),
        n = Date.now();
    if (null == t)
        return void g.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${n - e}ms`));
    g.A.addBreadcrumb({ category: N, message: "Tracking Heartbeat", data: { initialized: t.createdAtTimestamp } });
    let r = {
        client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
        client_heartbeat_version: S,
        ...(0, E.Q)(),
        ...V(),
    };
    h.default.track(y.HAw.CLIENT_HEARTBEAT, r), (w = performance.now()), (0, l.p)();
}
function j() {
    if (!(null != k && (0, T.$)()) || performance.now() - w <= v) return;
    let e = { client_heartbeat_version: S };
    h.default.track(y.HAw.CLIENT_HEARTBEAT_SKIPPED, e);
}
function H() {}
function Y() {
    let e = [];
    return (
        null != k && (M && e.push("foregrounded"), P === y.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: S, reasons: e }
    );
}
function W() {
    return Y().active;
}
function K() {
    W() ? U() : F(), Z();
}
function $() {
    null == D &&
        (D = {
            id: setInterval(() => {
                j();
            }, v),
            type: "interval",
        });
}
function z(e) {
    let t = performance.now();
    if (!(t - L < C))
        try {
            s.w.set(b, e), (L = t);
        } catch (e) {
            g.A.captureException(e);
        }
}
function q(e) {
    return null == e
        ? null
        : e.version !== I.Ir
          ? (R.warn(`Throwing away client session with invalid version: ${e.version}, expected ${I.Ir}`), null)
          : e;
}
function X() {
    s.w.remove(b), (x = { state: "loaded", session: null }), F(), (w = 0);
}
function Z() {
    c.A.getSocket()?.handleActiveStateChange(Y());
}
async function Q() {
    let e = await ea(!1);
    null != e && c.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C);
}
function J() {
    let e = d.default.getToken();
    k !== e && ((k = e), X()), K();
}
function ee() {
    let e = f.A.getState();
    P !== e && ((P = e), K());
}
function et(e) {
    let { focused: t } = e;
    M !== t && ((M = t), K());
}
function en(e) {
    let { state: t } = e,
        n = t === y.g6G.ACTIVE;
    M !== n && ((M = n), K());
}
function er() {
    (P = f.A.getState()), (M = (0, A.R)()), J();
}
function ei() {
    g.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        f.A.addChangeListener(ee),
        d.default.addChangeListener(J),
        o.h.subscribe("WINDOW_FOCUS", et),
        o.h.subscribe("APP_STATE_UPDATE", en),
        o.h.subscribe("CONNECTION_OPEN", Q),
        K(),
        $(),
        a.Ay.initialized.then(er);
}
async function ea() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === x.state ? x.session?.uuid : null;
    try {
        t = "uninitialized" === x.state ? q(await s.w.getAfterRefresh(b)) : x.session;
    } catch (e) {
        g.A.captureException(e);
    }
    return (() => {
        let a = Date.now();
        return (
            W()
                ? ((null == t || (0, I.aE)(t)) &&
                      ((t = { uuid: (0, r.A)(), createdAtTimestamp: a, lastUsedTimestamp: a, version: I.Ir }), (L = 0)),
                  (t.lastUsedTimestamp = a),
                  z(t))
                : null != t && (0, I.aE)(t) && (t = null),
            (x = { state: "loaded", session: t }),
            null != t &&
                n !== t.uuid &&
                e &&
                c.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, i.C),
            t
        );
    })();
}
function es() {
    let e = "uninitialized" === x.state ? q(s.w.get(b)) : x.session;
    return null == e || (0, I.aE)(e) ? null : e;
}
