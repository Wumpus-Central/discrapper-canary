n.d(t, { Ht: () => K, Vc: () => Z, as: () => W }), n(321073);
var i = n(132500),
    l = n(71931),
    a = n(17928),
    r = n(506774),
    s = n(228366),
    o = n(237774),
    d = n(626584),
    u = n(446458),
    c = n(495544),
    h = n(885576),
    E = n(763827),
    A = n(954571),
    _ = n(927813),
    p = n(38405),
    g = n(616005),
    f = n(789999),
    I = n(604594),
    S = n(565783),
    T = n(652215);
let m = 15 * _.A.Millis.MINUTE,
    C = _.A.Millis.SECOND,
    O = "LAST_CLIENT_HEARTBEAT_SESSION",
    N = "user",
    y = new d.A("SessionHeartbeatScheduler"),
    R = null,
    L = null,
    v = 0,
    D = 0,
    U = { state: "uninitialized" },
    P = E.A.getState(),
    b = (0, f.R)(),
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
    })() && (p.A.addBreadcrumb({ category: N, message: "Stopping Analytics Heartbeat" }), (0, o.p)());
}
async function G() {
    let e,
        t = Date.now(),
        n = await K(),
        i = Date.now();
    if (null == n)
        return void p.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${i - t}ms`));
    p.A.addBreadcrumb({ category: N, message: "Tracking Heartbeat", data: { initialized: n.createdAtTimestamp } });
    let l = {
        client_heartbeat_initialization_timestamp: n.createdAtTimestamp,
        client_heartbeat_version: 27,
        ...(0, g.Q)(),
        ...((e = h.A.getIdleSince() ?? 0),
        {
            is_idle: h.A.isIdle(),
            idle_duration_ms: Date.now() - e,
            is_afk: h.A.isAFK(),
            is_system_suspended: h.A.getSystemSuspended(),
            is_system_locked: h.A.getSystemLocked(),
        }),
    };
    A.default.track(T.HAw.CLIENT_HEARTBEAT, l), (D = performance.now()), (0, o.p)();
}
function F() {
    let e = [];
    return (
        null != M && (b && e.push("foregrounded"), P === T.S7L.RTC_CONNECTED && e.push("rtc_connected")),
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
              p.A.addBreadcrumb({
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
function H(e) {
    return null == e
        ? null
        : e.version !== I.Ir
          ? (y.warn(`Throwing away client session with invalid version: ${e.version}, expected ${I.Ir}`), null)
          : e;
}
async function x() {
    let e = await K(!1);
    null != e && u.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, l.C);
}
function B() {
    let e = c.default.getToken();
    M !== e && ((M = e), r.w.remove(O), (U = { state: "loaded", session: null }), w(), (D = 0)), k();
}
function Y() {
    let e = E.A.getState();
    P !== e && ((P = e), k());
}
function j(e) {
    let { focused: t } = e;
    b !== t && ((b = t), k());
}
function $(e) {
    let { state: t } = e,
        n = t === T.g6G.ACTIVE;
    b !== n && ((b = n), k());
}
function z() {
    (P = E.A.getState()), (b = (0, f.R)()), B();
}
function W() {
    p.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        E.A.addChangeListener(Y),
        c.default.addChangeListener(B),
        s.h.subscribe("WINDOW_FOCUS", j),
        s.h.subscribe("APP_STATE_UPDATE", $),
        s.h.subscribe("CONNECTION_OPEN", x),
        k(),
        null == L &&
            (L = {
                id: setInterval(() => {
                    !(null != M && (0, S.$)()) ||
                        performance.now() - D <= m ||
                        A.default.track(T.HAw.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 27 });
                }, m),
                type: "interval",
            }),
        a.Ay.initialized.then(z);
}
async function K() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === U.state ? U.session?.uuid : null;
    try {
        t = "uninitialized" === U.state ? H(await r.w.getAfterRefresh(O)) : U.session;
    } catch (e) {
        p.A.captureException(e);
    }
    let a = Date.now();
    if (V()) {
        (null == t || (0, I.aE)(t)) &&
            ((t = { uuid: (0, i.A)(), createdAtTimestamp: a, lastUsedTimestamp: a, version: I.Ir }), (v = 0)),
            (t.lastUsedTimestamp = a);
        var s = t;
        let e = performance.now();
        if (!(e - v < C))
            try {
                r.w.set(O, s), (v = e);
            } catch (e) {
                p.A.captureException(e);
            }
    } else null != t && (0, I.aE)(t) && (t = null);
    return (
        (U = { state: "loaded", session: t }),
        null != t &&
            n !== t.uuid &&
            e &&
            u.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, l.C),
        t
    );
}
function Z() {
    let e = "uninitialized" === U.state ? H(r.w.get(O)) : U.session;
    return null == e || (0, I.aE)(e) ? null : e;
}
