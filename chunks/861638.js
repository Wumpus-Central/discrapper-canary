"use strict";
n.d(t, { Ht: () => z, Vc: () => q, as: () => $ }), n(321073);
var r = n(835245),
    i = n(71931),
    s = n(311907),
    a = n(506774),
    o = n(73153),
    l = n(237774),
    u = n(626584),
    d = n(142120),
    c = n(961350),
    _ = n(885576),
    f = n(383501),
    E = n(954571),
    h = n(927813),
    p = n(728458),
    m = n(616005),
    g = n(789999),
    A = n(604594),
    I = n(565783),
    T = n(652215);
let S = 15 * h.A.Millis.MINUTE,
    y = h.A.Millis.SECOND,
    N = "LAST_CLIENT_HEARTBEAT_SESSION",
    O = "user",
    R = new u.A("SessionHeartbeatScheduler"),
    v = null,
    C = null,
    b = 0,
    D = 0,
    L = { state: "uninitialized" },
    w = f.A.getState(),
    M = (0, g.R)(),
    P = c.default.getToken();
function U() {
    (function () {
        if (null == v) return !1;
        switch (v.type) {
            case "timeout":
                clearTimeout(v.id);
                break;
            case "interval":
                clearInterval(v.id);
                break;
            default:
                v.type;
        }
        return (v = null), !0;
    })() && (p.A.addBreadcrumb({ category: O, message: "Stopping Analytics Heartbeat" }), (0, l.p)());
}
async function k() {
    let e,
        t = Date.now(),
        n = await z(),
        r = Date.now();
    if (null == n)
        return void p.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${r - t}ms`));
    p.A.addBreadcrumb({ category: O, message: "Tracking Heartbeat", data: { initialized: n.createdAtTimestamp } });
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
    E.default.track(T.HAw.CLIENT_HEARTBEAT, i), (D = performance.now()), (0, l.p)();
}
function x() {
    let e = [];
    return (
        null != P && (M && e.push("foregrounded"), w === T.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: 27, reasons: e }
    );
}
function G() {
    return x().active;
}
function V() {
    G()
        ? (function () {
              if (null != v) return;
              let e = 0 === D ? 0 : S - (performance.now() - D);
              p.A.addBreadcrumb({
                  message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                  (v = {
                      type: "timeout",
                      id: setTimeout(() => {
                          k(),
                              (v = {
                                  type: "interval",
                                  id: setInterval(() => {
                                      k();
                                  }, S),
                              });
                      }, e),
                  });
          })()
        : U(),
        d.A.getSocket()?.handleActiveStateChange(x());
}
function F(e) {
    return null == e
        ? null
        : e.version !== A.Ir
          ? (R.warn(`Throwing away client session with invalid version: ${e.version}, expected ${A.Ir}`), null)
          : e;
}
async function B() {
    let e = await z(!1);
    null != e && d.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C);
}
function H() {
    let e = c.default.getToken();
    P !== e && ((P = e), a.w.remove(N), (L = { state: "loaded", session: null }), U(), (D = 0)), V();
}
function Y() {
    let e = f.A.getState();
    w !== e && ((w = e), V());
}
function W(e) {
    let { focused: t } = e;
    M !== t && ((M = t), V());
}
function j(e) {
    let { state: t } = e,
        n = t === T.g6G.ACTIVE;
    M !== n && ((M = n), V());
}
function K() {
    (w = f.A.getState()), (M = (0, g.R)()), H();
}
function $() {
    p.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        f.A.addChangeListener(Y),
        c.default.addChangeListener(H),
        o.h.subscribe("WINDOW_FOCUS", W),
        o.h.subscribe("APP_STATE_UPDATE", j),
        o.h.subscribe("CONNECTION_OPEN", B),
        V(),
        null == C &&
            (C = {
                id: setInterval(() => {
                    !(null != P && (0, I.$)()) ||
                        performance.now() - D <= S ||
                        E.default.track(T.HAw.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 27 });
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
        t = "uninitialized" === L.state ? F(await a.w.getAfterRefresh(N)) : L.session;
    } catch (e) {
        p.A.captureException(e);
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
                p.A.captureException(e);
            }
    } else null != t && (0, A.aE)(t) && (t = null);
    return (
        (L = { state: "loaded", session: t }),
        null != t &&
            n !== t.uuid &&
            e &&
            d.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, i.C),
        t
    );
}
function q() {
    let e = "uninitialized" === L.state ? F(a.w.get(N)) : L.session;
    return null == e || (0, A.aE)(e) ? null : e;
}
