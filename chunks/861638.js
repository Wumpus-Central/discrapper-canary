"use strict";
n.d(t, { Ht: () => z, Vc: () => q, as: () => $ }), n(321073);
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
    E = n(728458),
    m = n(616005),
    g = n(789999),
    A = n(604594),
    I = n(565783),
    T = n(652215);
let S = 15 * h.A.Millis.MINUTE,
    y = h.A.Millis.SECOND,
    N = "LAST_CLIENT_HEARTBEAT_SESSION",
    v = "user",
    C = new u.A("SessionHeartbeatScheduler"),
    O = null,
    R = null,
    b = 0,
    D = 0,
    L = { state: "uninitialized" },
    w = f.A.getState(),
    M = (0, g.R)(),
    P = d.default.getToken();
function x() {
    (function () {
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
    })() && (E.A.addBreadcrumb({ category: v, message: "Stopping Analytics Heartbeat" }), (0, l.p)());
}
async function k() {
    let e,
        t = Date.now(),
        n = await z(),
        r = Date.now();
    if (null == n)
        return void E.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${r - t}ms`));
    E.A.addBreadcrumb({ category: v, message: "Tracking Heartbeat", data: { initialized: n.createdAtTimestamp } });
    let i = {
        client_heartbeat_initialization_timestamp: n.createdAtTimestamp,
        client_heartbeat_version: 27,
        ...(0, m.Q)(),
        ...((e = _.A.getIdleSince() ?? 0),
        {
            is_idle: _.A.isIdle(),
            idle_duration_ms: Date.now() - e,
            is_afk: _.A.isAFK(),
            is_system_suspended: _.A.getSystemSuspended(),
            is_system_locked: _.A.getSystemLocked(),
        }),
    };
    p.default.track(T.HAw.CLIENT_HEARTBEAT, i), (D = performance.now()), (0, l.p)();
}
function U() {
    let e = [];
    return (
        null != P && (M && e.push("foregrounded"), w === T.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: 27, reasons: e }
    );
}
function G() {
    return U().active;
}
function F() {
    G()
        ? (function () {
              if (null != O) return;
              let e = 0 === D ? 0 : S - (performance.now() - D);
              E.A.addBreadcrumb({
                  message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                  (O = {
                      type: "timeout",
                      id: setTimeout(() => {
                          k(),
                              (O = {
                                  type: "interval",
                                  id: setInterval(() => {
                                      k();
                                  }, S),
                              });
                      }, e),
                  });
          })()
        : x(),
        c.A.getSocket()?.handleActiveStateChange(U());
}
function V(e) {
    return null == e
        ? null
        : e.version !== A.Ir
          ? (C.warn(`Throwing away client session with invalid version: ${e.version}, expected ${A.Ir}`), null)
          : e;
}
async function B() {
    let e = await z(!1);
    null != e && c.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C);
}
function H() {
    let e = d.default.getToken();
    P !== e && ((P = e), a.w.remove(N), (L = { state: "loaded", session: null }), x(), (D = 0)), F();
}
function j() {
    let e = f.A.getState();
    w !== e && ((w = e), F());
}
function Y(e) {
    let { focused: t } = e;
    M !== t && ((M = t), F());
}
function W(e) {
    let { state: t } = e,
        n = t === T.g6G.ACTIVE;
    M !== n && ((M = n), F());
}
function K() {
    (w = f.A.getState()), (M = (0, g.R)()), H();
}
function $() {
    E.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        f.A.addChangeListener(j),
        d.default.addChangeListener(H),
        o.h.subscribe("WINDOW_FOCUS", Y),
        o.h.subscribe("APP_STATE_UPDATE", W),
        o.h.subscribe("CONNECTION_OPEN", B),
        F(),
        null == R &&
            (R = {
                id: setInterval(() => {
                    !(null != P && (0, I.$)()) ||
                        performance.now() - D <= S ||
                        p.default.track(T.HAw.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 27 });
                }, S),
                type: "interval",
            }),
        s.Ay.initialized.then(K);
}
async function z() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === L.state ? L.session?.uuid : null;
    try {
        t = "uninitialized" === L.state ? V(await a.w.getAfterRefresh(N)) : L.session;
    } catch (e) {
        E.A.captureException(e);
    }
    let s = Date.now();
    if (G()) {
        (null == t || (0, A.aE)(t)) &&
            ((t = { uuid: (0, r.A)(), createdAtTimestamp: s, lastUsedTimestamp: s, version: A.Ir }), (b = 0)),
            (t.lastUsedTimestamp = s);
        var o = t;
        let e = performance.now();
        if (!(e - b < y))
            try {
                a.w.set(N, o), (b = e);
            } catch (e) {
                E.A.captureException(e);
            }
    } else null != t && (0, A.aE)(t) && (t = null);
    return (
        (L = { state: "loaded", session: t }),
        null != t &&
            n !== t.uuid &&
            e &&
            c.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, i.C),
        t
    );
}
function q() {
    let e = "uninitialized" === L.state ? V(a.w.get(N)) : L.session;
    return null == e || (0, A.aE)(e) ? null : e;
}
