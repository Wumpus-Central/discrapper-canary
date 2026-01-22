n.d(t, {
    Ht: () => es,
    Vc: () => eo,
    as: () => ea,
}),
    n(65821),
    n(321073);
var r = n(835245),
    i = n(71931),
    a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(237774),
    c = n(626584),
    u = n(142120),
    d = n(961350),
    f = n(885576),
    p = n(383501),
    _ = n(954571),
    h = n(927813),
    m = n(728458),
    g = n(616005),
    E = n(789999),
    b = n(604594),
    y = n(565783),
    O = n(652215);

function A(e, t, n) {
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

function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
let S = 27,
    I = 15 * h.A.Millis.MINUTE,
    T = h.A.Millis.SECOND,
    C = "LAST_CLIENT_HEARTBEAT_SESSION",
    N = "user",
    R = new c.A("SessionHeartbeatScheduler"),
    w = null,
    P = null,
    D = 0,
    x = 0,
    L = {
        state: "uninitialized",
    },
    j = p.A.getState(),
    M = (0, E.R)(),
    k = d.default.getToken();

function U() {
    if (null != w) return;
    let e = 0 === x ? 0 : I - (performance.now() - x);
    m.A.addBreadcrumb({
        message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(
            e / 1e3,
            " seconds. Scheduling Heartbeat",
        ),
    }),
        (w = {
            type: "timeout",
            id: setTimeout(() => {
                B(),
                    (w = {
                        type: "interval",
                        id: setInterval(() => {
                            B();
                        }, I),
                    });
            }, e),
        });
}

function G() {
    if (null == w) return !1;
    switch (w.type) {
        case "timeout":
            clearTimeout(w.id);
            break;
        case "interval":
            clearInterval(w.id);
            break;
        default:
            w.type;
    }
    return (w = null), !0;
}

function V() {
    G() &&
        (m.A.addBreadcrumb({
            category: N,
            message: "Stopping Analytics Heartbeat",
        }),
        (0, l.p)());
}

function F() {
    var e;
    let t = null != (e = f.A.getIdleSince()) ? e : 0;
    return {
        is_idle: f.A.isIdle(),
        idle_duration_ms: Date.now() - t,
        is_afk: f.A.isAFK(),
        is_system_suspended: f.A.getSystemSuspended(),
        is_system_locked: f.A.getSystemLocked(),
    };
}
async function B() {
    let e = Date.now(),
        t = await es(),
        n = Date.now();
    if (null == t)
        return void m.A.captureException(
            Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")),
        );
    m.A.addBreadcrumb({
        category: N,
        message: "Tracking Heartbeat",
        data: {
            initialized: t.createdAtTimestamp,
        },
    });
    let r = v(
        {
            client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
            client_heartbeat_version: S,
        },
        (0, g.Q)(),
        F(),
    );
    _.default.track(O.HAw.CLIENT_HEARTBEAT, r), (x = performance.now()), (0, l.p)();
}

function H() {
    if (!(null != k && (0, y.$)()) || performance.now() - x <= I) return;
    let e = {
        client_heartbeat_version: S,
    };
    _.default.track(O.HAw.CLIENT_HEARTBEAT_SKIPPED, e);
}

function Y() {}

function W() {
    let e = [];
    return (
        null != k && (M && e.push("foregrounded"), j === O.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        {
            active: e.length > 0,
            ver: S,
            reasons: e,
        }
    );
}

function K() {
    return W().active;
}

function z() {
    K() ? U() : V(), $();
}

function q() {
    null == P &&
        (P = {
            id: setInterval(() => {
                H();
            }, I),
            type: "interval",
        });
}

function X(e) {
    let t = performance.now();
    if (!(t - D < T))
        try {
            s.w.set(C, e), (D = t);
        } catch (e) {
            m.A.captureException(e);
        }
}

function Z(e) {
    return null == e
        ? null
        : e.version !== b.Ir
          ? (R.warn(
                "Throwing away client session with invalid version: ".concat(e.version, ", expected ").concat(b.Ir),
            ),
            null)
          : e;
}

function Q() {
    s.w.remove(C),
        (L = {
            state: "loaded",
            session: null,
        }),
        V(),
        (x = 0);
}

function $() {
    var e;
    null == (e = u.A.getSocket()) || e.handleActiveStateChange(W());
}
async function J() {
    let e = await es(!1);
    if (null != e) {
        var t;
        null == (t = u.A.getSocket()) || t.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C);
    }
}

function ee() {
    let e = d.default.getToken();
    k !== e && ((k = e), Q()), z();
}

function et() {
    let e = p.A.getState();
    j !== e && ((j = e), z());
}

function en(e) {
    let { focused: t } = e;
    M !== t && ((M = t), z());
}

function er(e) {
    let { state: t } = e,
        n = t === O.g6G.ACTIVE;
    M !== n && ((M = n), z());
}

function ei() {
    (j = p.A.getState()), (M = (0, E.R)()), ee();
}

function ea() {
    m.A.addBreadcrumb({
        message: "Initializing SessionHeartbeatScheduler",
    }),
        p.A.addChangeListener(et),
        d.default.addChangeListener(ee),
        o.h.subscribe("WINDOW_FOCUS", en),
        o.h.subscribe("APP_STATE_UPDATE", er),
        o.h.subscribe("CONNECTION_OPEN", J),
        z(),
        q(),
        a.Ay.initialized.then(ei);
}
async function es() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = null,
        a = "loaded" === L.state ? (null == (e = L.session) ? void 0 : e.uuid) : null;
    try {
        n = "uninitialized" === L.state ? Z(await s.w.getAfterRefresh(C)) : L.session;
    } catch (e) {
        m.A.captureException(e);
    }
    return (() => {
        let e = Date.now();
        if (
            (K()
                ? ((null == n || (0, b.aE)(n)) &&
                      ((n = {
                          uuid: (0, r.A)(),
                          createdAtTimestamp: e,
                          lastUsedTimestamp: e,
                          version: b.Ir,
                      }),
                      (D = 0)),
                  (n.lastUsedTimestamp = e),
                  X(n))
                : null != n && (0, b.aE)(n) && (n = null),
            (L = {
                state: "loaded",
                session: n,
            }),
            null != n && a !== n.uuid && t)
        ) {
            var s;
            null == (s = u.A.getSocket()) || s.handleUpdateTimeSpentSessionId(n.createdAtTimestamp, n.uuid, i.C);
        }
        return n;
    })();
}

function eo() {
    let e = "uninitialized" === L.state ? Z(s.w.get(C)) : L.session;
    return null == e || (0, b.aE)(e) ? null : e;
}
