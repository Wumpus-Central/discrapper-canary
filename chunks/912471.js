n.d(t, {
    Ai: () => es,
    DL: () => ea,
    Gg: () => eo,
}),
    n(415506),
    n(539854);
var r = n(772848),
    i = n(923452),
    a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(188471),
    c = n(710845),
    u = n(38618),
    d = n(314897),
    f = n(517100),
    p = n(19780),
    _ = n(626135),
    m = n(70956),
    h = n(960048),
    g = n(343420),
    E = n(127438),
    b = n(686325),
    y = n(733879),
    O = n(981631);
function v(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
let I = 27,
    T = 15 * m.Z.Millis.MINUTE,
    A = m.Z.Millis.SECOND,
    C = "LAST_CLIENT_HEARTBEAT_SESSION",
    N = "user",
    P = new c.Z("SessionHeartbeatScheduler"),
    R = null,
    w = null,
    D = 0,
    x = 0,
    L = { state: "uninitialized" },
    j = p.Z.getState(),
    M = (0, E.H)(),
    k = d.default.getToken();
function U() {
    if (null != R) return;
    let e = 0 === x ? 0 : T - (performance.now() - x);
    h.Z.addBreadcrumb({
        message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(
            e / 1000,
            " seconds. Scheduling Heartbeat",
        ),
    }),
        (R = {
            type: "timeout",
            id: setTimeout(() => {
                F(),
                    (R = {
                        type: "interval",
                        id: setInterval(() => {
                            F();
                        }, T),
                    });
            }, e),
        });
}
function G() {
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
function Z() {
    G() &&
        (h.Z.addBreadcrumb({
            category: N,
            message: "Stopping Analytics Heartbeat",
        }),
        (0, l.Z)());
}
function B() {
    var e;
    let t = null != (e = f.Z.getIdleSince()) ? e : 0;
    return {
        is_idle: f.Z.isIdle(),
        idle_duration_ms: Date.now() - t,
        is_afk: f.Z.isAFK(),
        is_system_suspended: f.Z.getSystemSuspended(),
        is_system_locked: f.Z.getSystemLocked(),
    };
}
async function F() {
    let e = Date.now(),
        t = await eo(),
        n = Date.now();
    if (null == t)
        return void h.Z.captureException(
            Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")),
        );
    h.Z.addBreadcrumb({
        category: N,
        message: "Tracking Heartbeat",
        data: { initialized: t.createdAtTimestamp },
    });
    let r = S(
        {
            client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
            client_heartbeat_version: I,
        },
        (0, g.O)(),
        B(),
    );
    _.default.track(O.rMx.CLIENT_HEARTBEAT, r), (x = performance.now()), (0, l.Z)();
}
function V() {
    if (!(null != k && (0, y.y)()) || performance.now() - x <= T) return;
    let e = { client_heartbeat_version: I };
    _.default.track(O.rMx.CLIENT_HEARTBEAT_SKIPPED, e);
}
function H() {}
function Y() {
    let e = [];
    return (
        null != k && (M && e.push("foregrounded"), j === O.hes.RTC_CONNECTED && e.push("rtc_connected")),
        {
            active: e.length > 0,
            ver: I,
            reasons: e,
        }
    );
}
function W() {
    return Y().active;
}
function K() {
    W() ? U() : Z(), J();
}
function z() {
    null == w &&
        (w = {
            id: setInterval(() => {
                V();
            }, T),
            type: "interval",
        });
}
function q(e) {
    let t = performance.now();
    if (!(t - D < A))
        try {
            o.K.set(C, e), (D = t);
        } catch (e) {
            h.Z.captureException(e);
        }
}
function X(e) {
    return null == e
        ? null
        : e.version !== b.EI
          ? (P.warn(
                "Throwing away client session with invalid version: ".concat(e.version, ", expected ").concat(b.EI),
            ),
            null)
          : e;
}
function Q() {
    o.K.remove(C),
        (L = {
            state: "loaded",
            session: null,
        }),
        Z(),
        (x = 0);
}
function J() {
    var e;
    null == (e = u.Z.getSocket()) || e.handleActiveStateChange(Y());
}
async function $() {
    let e = await eo(!1);
    if (null != e) {
        var t;
        null == (t = u.Z.getSocket()) || t.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.s);
    }
}
function ee() {
    let e = d.default.getToken();
    k !== e && ((k = e), Q()), K();
}
function et() {
    let e = p.Z.getState();
    j !== e && ((j = e), K());
}
function en(e) {
    let { focused: t } = e;
    M !== t && ((M = t), K());
}
function er(e) {
    let { state: t } = e,
        n = t === O.$7l.ACTIVE;
    M !== n && ((M = n), K());
}
function ei() {
    (j = p.Z.getState()), (M = (0, E.H)()), ee();
}
function ea() {
    h.Z.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        p.Z.addChangeListener(et),
        d.default.addChangeListener(ee),
        s.Z.subscribe("WINDOW_FOCUS", en),
        s.Z.subscribe("APP_STATE_UPDATE", er),
        s.Z.subscribe("CONNECTION_OPEN", $),
        K(),
        z(),
        a.ZP.initialized.then(ei);
}
async function eo() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = null,
        a = "loaded" === L.state ? (null == (e = L.session) ? void 0 : e.uuid) : null;
    try {
        n = "uninitialized" === L.state ? X(await o.K.getAfterRefresh(C)) : L.session;
    } catch (e) {
        h.Z.captureException(e);
    }
    return (() => {
        let e = Date.now();
        if (
            (W()
                ? ((null == n || (0, b.qK)(n)) &&
                      ((n = {
                          uuid: (0, r.Z)(),
                          createdAtTimestamp: e,
                          lastUsedTimestamp: e,
                          version: b.EI,
                      }),
                      (D = 0)),
                  (n.lastUsedTimestamp = e),
                  q(n))
                : null != n && (0, b.qK)(n) && (n = null),
            (L = {
                state: "loaded",
                session: n,
            }),
            null != n && a !== n.uuid && t)
        ) {
            var o;
            null == (o = u.Z.getSocket()) || o.handleUpdateTimeSpentSessionId(n.createdAtTimestamp, n.uuid, i.s);
        }
        return n;
    })();
}
function es() {
    let e = "uninitialized" === L.state ? X(o.K.get(C)) : L.session;
    return null == e || (0, b.qK)(e) ? null : e;
}
