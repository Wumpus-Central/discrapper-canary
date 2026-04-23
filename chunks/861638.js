n.d(t, { Ht: () => j, Vc: () => q, as: () => K }), n(321073);
var i = n(132500),
    r = n(71931),
    l = n(17928),
    a = n(506774),
    s = n(228366),
    o = n(237774),
    d = n(626584),
    u = n(366853),
    c = n(495544),
    h = n(885576),
    E = n(763827),
    _ = n(954571),
    p = n(927813),
    A = n(38405),
    f = n(616005),
    g = n(789999),
    I = n(604594),
    T = n(565783),
    S = n(652215);
let m = 15 * p.A.Millis.MINUTE,
    O = p.A.Millis.SECOND,
    C = "LAST_CLIENT_HEARTBEAT_SESSION",
    N = "user",
    y = new d.A("SessionHeartbeatScheduler"),
    R = null,
    L = null,
    v = 0,
    D = 0,
    b = { state: "uninitialized" },
    U = E.A.getState(),
    P = (0, g.R)(),
    M = c.default.getToken();
function w() {
    (function () {
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
    })() && (A.A.addBreadcrumb({ category: N, message: "Stopping Analytics Heartbeat" }), (0, o.p)());
}
async function G() {
    let e,
        t = Date.now(),
        n = await j(),
        i = Date.now();
    if (null == n)
        return void A.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${i - t}ms`));
    A.A.addBreadcrumb({ category: N, message: "Tracking Heartbeat", data: { initialized: n.createdAtTimestamp } });
    let r = {
        client_heartbeat_initialization_timestamp: n.createdAtTimestamp,
        client_heartbeat_version: 27,
        ...(0, f.Q)(),
        ...((e = h.A.getIdleSince() ?? 0),
        {
            is_idle: h.A.isIdle(),
            idle_duration_ms: Date.now() - e,
            is_afk: h.A.isAFK(),
            is_system_suspended: h.A.getSystemSuspended(),
            is_system_locked: h.A.getSystemLocked(),
        }),
    };
    _.default.track(S.HAw.CLIENT_HEARTBEAT, r), (D = performance.now()), (0, o.p)();
}
function F() {
    let e = [];
    return (
        null != M && (P && e.push("foregrounded"), U === S.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: 27, reasons: e }
    );
}
function V() {
    return F().active;
}
function k() {
    V()
        ? (function () {
              if (null != R) return;
              let e = 0 === D ? 0 : m - (performance.now() - D);
              A.A.addBreadcrumb({
                  message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                  (R = {
                      type: "timeout",
                      id: setTimeout(() => {
                          G(),
                              (R = {
                                  type: "interval",
                                  id: setInterval(() => {
                                      G();
                                  }, m),
                              });
                      }, e),
                  });
          })()
        : w(),
        u.A.getSocket()?.handleActiveStateChange(F());
}
function x(e) {
    return null == e
        ? null
        : e.version !== I.Ir
          ? (y.warn(`Throwing away client session with invalid version: ${e.version}, expected ${I.Ir}`), null)
          : e;
}
async function H() {
    let e = await j(!1);
    null != e && u.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, r.C);
}
function B() {
    let e = c.default.getToken();
    M !== e && ((M = e), a.w.remove(C), (b = { state: "loaded", session: null }), w(), (D = 0)), k();
}
function Y() {
    let e = E.A.getState();
    U !== e && ((U = e), k());
}
function W(e) {
    let { focused: t } = e;
    P !== t && ((P = t), k());
}
function $(e) {
    let { state: t } = e,
        n = t === S.g6G.ACTIVE;
    P !== n && ((P = n), k());
}
function z() {
    (U = E.A.getState()), (P = (0, g.R)()), B();
}
function K() {
    A.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        E.A.addChangeListener(Y),
        c.default.addChangeListener(B),
        s.h.subscribe("WINDOW_FOCUS", W),
        s.h.subscribe("APP_STATE_UPDATE", $),
        s.h.subscribe("CONNECTION_OPEN", H),
        k(),
        null == L &&
            (L = {
                id: setInterval(() => {
                    !(null != M && (0, T.$)()) ||
                        performance.now() - D <= m ||
                        _.default.track(S.HAw.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 27 });
                }, m),
                type: "interval",
            }),
        l.Ay.initialized.then(z);
}
async function j() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === b.state ? b.session?.uuid : null;
    try {
        t = "uninitialized" === b.state ? x(await a.w.getAfterRefresh(C)) : b.session;
    } catch (e) {
        A.A.captureException(e);
    }
    let l = Date.now();
    if (V()) {
        (null == t || (0, I.aE)(t)) &&
            ((t = { uuid: (0, i.A)(), createdAtTimestamp: l, lastUsedTimestamp: l, version: I.Ir }), (v = 0)),
            (t.lastUsedTimestamp = l);
        var s = t;
        let e = performance.now();
        if (!(e - v < O))
            try {
                a.w.set(C, s), (v = e);
            } catch (e) {
                A.A.captureException(e);
            }
    } else null != t && (0, I.aE)(t) && (t = null);
    return (
        (b = { state: "loaded", session: t }),
        null != t &&
            n !== t.uuid &&
            e &&
            u.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, r.C),
        t
    );
}
function q() {
    let e = "uninitialized" === b.state ? x(a.w.get(C)) : b.session;
    return null == e || (0, I.aE)(e) ? null : e;
}
