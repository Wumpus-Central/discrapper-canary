n.d(t, {
    Ai: () => J,
    DL: () => X,
    Gg: () => Q
}),
    n(415506);
var r = n(772848),
    i = n(259443),
    a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(188471),
    c = n(314897),
    u = n(517100),
    d = n(19780),
    f = n(626135),
    _ = n(70956),
    p = n(960048),
    h = n(343420),
    m = n(127438),
    g = n(686325),
    E = n(733879),
    b = n(981631);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let v = 22,
    I = 15 * _.Z.Millis.MINUTE,
    T = _.Z.Millis.SECOND,
    S = 'LAST_CLIENT_HEARTBEAT_SESSION',
    A = 'user',
    N = new i.Yd('SessionHeartbeatScheduler'),
    C = null,
    R = null,
    P = 0,
    w = 0,
    D = { state: 'uninitialized' },
    L = d.Z.getState(),
    x = (0, m.H)(),
    k = c.default.isAuthenticated();
function M() {
    (L = d.Z.getState()), (x = (0, m.H)()), (k = c.default.isAuthenticated()), Y();
}
function j() {
    if (null != C) return;
    let e = 0 === w ? 0 : I - (performance.now() - w);
    p.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(e / 1000, ' seconds. Scheduling Heartbeat') }),
        (C = {
            type: 'timeout',
            id: setTimeout(() => {
                V(),
                    (C = {
                        type: 'interval',
                        id: setInterval(() => {
                            V();
                        }, I)
                    });
            }, e)
        });
}
function U() {
    if (null == C) return !1;
    switch (C.type) {
        case 'timeout':
            clearTimeout(C.id);
            break;
        case 'interval':
            clearInterval(C.id);
            break;
        default:
            C.type;
    }
    return (C = null), !0;
}
function G() {
    U() &&
        (p.Z.addBreadcrumb({
            category: A,
            message: 'Stopping Analytics Heartbeat'
        }),
        (0, l.Z)());
}
function B() {
    var e;
    let t = null != (e = u.Z.getIdleSince()) ? e : 0;
    return {
        is_idle: u.Z.isIdle(),
        idle_duration_ms: Date.now() - t,
        is_afk: u.Z.isAFK(),
        is_system_suspended: u.Z.getSystemSuspended(),
        is_system_locked: u.Z.getSystemLocked()
    };
}
async function V() {
    let e = Date.now(),
        t = await Q(),
        n = Date.now();
    if (null == t) return void p.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(n - e, 'ms')));
    p.Z.addBreadcrumb({
        category: A,
        message: 'Tracking Heartbeat',
        data: { initialized: t.createdAtTimestamp }
    });
    let r = O(
        {
            client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
            client_heartbeat_version: v
        },
        (0, h.O)(),
        B()
    );
    f.default.track(b.rMx.CLIENT_HEARTBEAT, r), (w = performance.now()), (0, l.Z)();
}
function F() {
    if (!(k && (0, E.y)()) || performance.now() - w <= I) return;
    let e = { client_heartbeat_version: v };
    f.default.track(b.rMx.CLIENT_HEARTBEAT_SKIPPED, e);
}
function Z() {}
function H() {
    return k && (x || (L !== b.hes.DISCONNECTED && L !== b.hes.RTC_DISCONNECTED));
}
function Y() {
    H() ? j() : G();
}
function W() {
    null == R &&
        (R = {
            id: setInterval(() => {
                F();
            }, I),
            type: 'interval'
        });
}
function K(e) {
    let t = performance.now();
    if (!(t - P < T))
        try {
            o.K.set(S, e), (P = t);
        } catch (e) {
            p.Z.captureException(e);
        }
}
function z(e) {
    return null == e ? null : e.version !== g.EI ? (N.warn('Throwing away client session with invalid version: '.concat(e.version, ', expected ').concat(g.EI)), null) : e;
}
function q() {
    o.K.remove(S),
        (D = {
            state: 'loaded',
            session: null
        }),
        G(),
        (w = 0);
}
function X() {
    function e() {
        (k = c.default.isAuthenticated()), Y();
    }
    function t() {
        (k = !1), q();
    }
    function n() {
        (L = d.Z.getState()), Y();
    }
    function r(e) {
        let { focused: t } = e;
        (x = t), Y();
    }
    function i(e) {
        let { state: t } = e;
        (x = t === b.$7l.ACTIVE), Y();
    }
    p.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), d.Z.addChangeListener(n), c.default.addChangeListener(e), s.Z.subscribe('WINDOW_FOCUS', r), s.Z.subscribe('APP_STATE_UPDATE', i), s.Z.subscribe('LOGOUT', t), Y(), W(), a.ZP.initialized.then(M);
}
async function Q() {
    let e = null;
    try {
        e = 'uninitialized' === D.state ? z(await o.K.getAfterRefresh(S)) : D.session;
    } catch (e) {
        p.Z.captureException(e);
    }
    return (() => {
        let t = Date.now();
        return (
            H()
                ? ((null == e || (0, g.qK)(e)) &&
                      ((e = {
                          uuid: (0, r.Z)(),
                          createdAtTimestamp: t,
                          lastUsedTimestamp: t,
                          version: g.EI
                      }),
                      (P = 0)),
                  (e.lastUsedTimestamp = t),
                  K(e))
                : null != e && (0, g.qK)(e) && (e = null),
            (D = {
                state: 'loaded',
                session: e
            }),
            e
        );
    })();
}
function J() {
    let e = 'uninitialized' === D.state ? z(o.K.get(S)) : D.session;
    return null == e || (0, g.qK)(e) ? null : e;
}
