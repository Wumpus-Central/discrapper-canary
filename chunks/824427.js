"use strict";
n.d(t, { Ht: () => ei, as: () => en, Vc: () => er }), n(321073);
var i = n(132500),
    r = n(71931),
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(311964),
    d = n(626584),
    c = n(493560),
    u = n(280450),
    _ = n(885576),
    E = n(763827),
    A = n(174459),
    h = n(927813),
    I = n(38405),
    f = n(70298),
    p = n(973522),
    T = n(952818),
    m = n(321034),
    g = n(789999),
    S = n(976860),
    N = n(569745);
function C() {
    return !__OVERLAY__ && (0, N.Q)(window.location.pathname);
}
var R = n(604594),
    O = n(4043),
    L = n(287809),
    y = n(652215);
let D = 15 * h.A.Millis.MINUTE,
    v = h.A.Millis.SECOND,
    b = "LAST_CLIENT_HEARTBEAT_SESSION",
    M = "user",
    P = new d.A("SessionHeartbeatScheduler"),
    U = null,
    w = null,
    G = 0,
    x = 0,
    k = { state: "uninitialized" },
    F = E.A.getState(),
    V = (0, g.R)(),
    B = C(),
    H = u.default.getToken();
function j() {
    (function () {
        if (null == U) return !1;
        switch (U.type) {
            case "timeout":
                clearTimeout(U.id);
                break;
            case "interval":
                clearInterval(U.id);
                break;
            default:
                U.type;
        }
        return (U = null), !0;
    })() && (I.A.addBreadcrumb({ category: M, message: "Stopping Analytics Heartbeat" }), (0, o.p)());
}
async function W() {
    let e,
        t,
        n,
        i,
        r,
        a,
        s,
        l = Date.now(),
        d = await ei(),
        c = Date.now();
    if (null == d)
        return void I.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${c - l}ms`));
    I.A.addBreadcrumb({ category: M, message: "Tracking Heartbeat", data: { initialized: d.createdAtTimestamp } });
    let u = {
        client_heartbeat_initialization_timestamp: d.createdAtTimestamp,
        client_heartbeat_version: 30,
        ...{
            ...((e = {}),
            null != (t = m.A.getMemoryUsageElectronRenderer()) && (e.client_heartbeat_renderer_memory = t),
            null != (n = m.A.getMemoryUsageElectronRendererUsedHeapSize()) &&
                (e.client_heartbeat_renderer_memory_used_heap = n),
            null != (i = m.A.getMemoryUsageElectronProcessTypeDetails()) &&
                ((e.electron_process_memory_private = [
                    i.unknown?.wss_priv_kb ?? -1,
                    i.main?.wss_priv_kb ?? -1,
                    i.renderer?.wss_priv_kb ?? -1,
                    i.gpu?.wss_priv_kb ?? -1,
                    i.crashpad?.wss_priv_kb ?? -1,
                    i.utility?.wss_priv_kb ?? -1,
                    i.clips?.wss_priv_kb ?? -1,
                ]),
                (e.electron_process_memory_private_and_shared = [
                    i.unknown?.wss_kb ?? -1,
                    i.main?.wss_kb ?? -1,
                    i.renderer?.wss_kb ?? -1,
                    i.gpu?.wss_kb ?? -1,
                    i.crashpad?.wss_kb ?? -1,
                    i.utility?.wss_kb ?? -1,
                    i.clips?.wss_kb ?? -1,
                ])),
            e),
            ...((r = {}),
            null != (a = T.Ay.getCurrentGameForAnalytics()) &&
                ((r.client_heartbeat_current_game_id = a.id),
                (r.client_heartbeat_current_game_name = a.name),
                (r.client_heartbeat_current_game_executable = (0, p.Ic)(a.exePath)),
                (r.client_heartbeat_current_game_distributor = a.distributor),
                (r.uses_client_mods = (0, f.b)())),
            r),
        },
        ...((s = _.A.getIdleSince() ?? 0),
        {
            is_idle: _.A.isIdle(),
            idle_duration_ms: Date.now() - s,
            is_afk: _.A.isAFK(),
            is_system_suspended: _.A.getSystemSuspended(),
            is_system_locked: _.A.getSystemLocked(),
        }),
    };
    A.default.track(y.HAw.CLIENT_HEARTBEAT, u), (x = performance.now()), (0, o.p)();
}
function Y() {
    let e = [];
    return (
        null != H && B && (V && e.push("foregrounded"), F === y.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: 30, reasons: e }
    );
}
function K() {
    return Y().active;
}
function $() {
    K()
        ? (function () {
              if (null != U) return;
              let e = 0 === x ? 0 : D - (performance.now() - x);
              I.A.addBreadcrumb({
                  message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                  (U = {
                      type: "timeout",
                      id: setTimeout(() => {
                          W(),
                              (U = {
                                  type: "interval",
                                  id: setInterval(() => {
                                      W();
                                  }, D),
                              });
                      }, e),
                  });
          })()
        : j(),
        c.A.getSocket()?.handleActiveStateChange(Y());
}
function z(e) {
    return null == e
        ? null
        : e.version !== R.Ir
          ? (P.warn(`Throwing away client session with invalid version: ${e.version}, expected ${R.Ir}`), null)
          : e;
}
async function Z() {
    let e = await ei(!1);
    null != e && c.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, r.C);
}
function q() {
    let e = u.default.getToken();
    H !== e && ((H = e), s.w.remove(b), (k = { state: "loaded", session: null }), j(), (x = 0)), $();
}
function X() {
    let e = E.A.getState();
    F !== e && ((F = e), $());
}
function Q(e) {
    let { focused: t } = e;
    V !== t && ((V = t), $());
}
function J() {
    let e = C();
    B !== e && ((B = e), $());
}
function ee(e) {
    let { state: t } = e,
        n = t === y.g6G.ACTIVE;
    V !== n && ((V = n), $());
}
function et() {
    (F = E.A.getState()), (V = (0, g.R)()), (B = C()), q();
}
function en() {
    I.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        E.A.addChangeListener(X),
        u.default.addChangeListener(q),
        l.h.subscribe("WINDOW_FOCUS", Q),
        l.h.subscribe("APP_STATE_UPDATE", ee),
        l.h.subscribe("CONNECTION_OPEN", Z),
        (0, S.JK)().listen(J),
        $(),
        null == w &&
            (w = {
                id: setInterval(() => {
                    let e;
                    !(null != H && null != (e = L.default.getCurrentUser()) && (e.isStaff() || (0, O.r)(e.id, 0.02))) ||
                        performance.now() - x <= D ||
                        A.default.track(y.HAw.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 30 });
                }, D),
                type: "interval",
            }),
        a.Ay.initialized.then(et);
}
async function ei() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === k.state ? k.session?.uuid : null;
    try {
        t = "uninitialized" === k.state ? z(await s.w.getAfterRefresh(b)) : k.session;
    } catch (e) {
        I.A.captureException(e);
    }
    let a = Date.now();
    if (K()) {
        (null == t || (0, R.aE)(t)) &&
            ((t = { uuid: (0, i.A)(), createdAtTimestamp: a, lastUsedTimestamp: a, version: R.Ir }), (G = 0)),
            (t.lastUsedTimestamp = a);
        var l = t;
        let e = performance.now();
        if (!(e - G < v))
            try {
                s.w.set(b, l), (G = e);
            } catch (e) {
                I.A.captureException(e);
            }
    } else null != t && (0, R.aE)(t) && (t = null);
    return (
        (k = { state: "loaded", session: t }),
        null != t &&
            n !== t.uuid &&
            e &&
            c.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, r.C),
        t
    );
}
function er() {
    let e = "uninitialized" === k.state ? z(s.w.get(b)) : k.session;
    return null == e || (0, R.aE)(e) ? null : e;
}
