n.d(t, {
    Ai: () => z,
    DL: () => W,
    Gg: () => K
}),
    n(415506);
var r = n(772848),
    i = n(259443),
    o = n(442837),
    a = n(433517),
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
    E = n(981631);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = 21,
    v = 15 * _.Z.Millis.MINUTE,
    I = _.Z.Millis.SECOND,
    S = 'LAST_CLIENT_HEARTBEAT_SESSION',
    T = 'user',
    A = new i.Yd('SessionHeartbeatScheduler'),
    N = null,
    C = 0,
    P = 0,
    R = { state: 'uninitialized' },
    w = d.Z.getState(),
    D = (0, m.H)(),
    L = c.default.isAuthenticated();
function x() {
    (w = d.Z.getState()), (D = (0, m.H)()), (L = c.default.isAuthenticated()), V();
}
function k() {
    if (null != N) return;
    let e = 0 === P ? 0 : v - (performance.now() - P);
    p.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(e / 1000, ' seconds. Scheduling Heartbeat') }),
        (N = {
            type: 'timeout',
            id: setTimeout(() => {
                G(),
                    (N = {
                        type: 'interval',
                        id: setInterval(() => {
                            G();
                        }, v)
                    });
            }, e)
        });
}
function M() {
    if (null == N) return !1;
    switch (N.type) {
        case 'timeout':
            clearTimeout(N.id);
            break;
        case 'interval':
            clearInterval(N.id);
            break;
        default:
            N.type;
    }
    return (N = null), !0;
}
function j() {
    M() &&
        (p.Z.addBreadcrumb({
            category: T,
            message: 'Stopping Analytics Heartbeat'
        }),
        (0, l.Z)());
}
function U() {
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
async function G() {
    let e = Date.now(),
        t = await K(),
        n = Date.now();
    if (null == t) return void p.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(n - e, 'ms')));
    p.Z.addBreadcrumb({
        category: T,
        message: 'Tracking Heartbeat',
        data: { initialized: t.createdAtTimestamp }
    });
    let r = y(
        {
            client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
            client_heartbeat_version: O
        },
        (0, h.O)(),
        U()
    );
    f.default.track(E.rMx.CLIENT_HEARTBEAT, r), (P = performance.now()), (0, l.Z)();
}
function B() {}
function F() {
    return L && (D || (w !== E.hes.DISCONNECTED && w !== E.hes.RTC_DISCONNECTED));
}
function V() {
    F() ? k() : j();
}
function Z(e) {
    let t = performance.now();
    if (!(t - C < I))
        try {
            a.K.set(S, e), (C = t);
        } catch (e) {
            p.Z.captureException(e);
        }
}
function H(e) {
    return null == e ? null : e.version !== g.EI ? (A.warn('Throwing away client session with invalid version: '.concat(e.version, ', expected ').concat(g.EI)), null) : e;
}
function Y() {
    a.K.remove(S),
        (R = {
            state: 'loaded',
            session: null
        }),
        j(),
        (P = 0);
}
function W() {
    function e() {
        (L = c.default.isAuthenticated()), V();
    }
    function t() {
        (L = !1), Y();
    }
    function n() {
        (w = d.Z.getState()), V();
    }
    function r(e) {
        let { focused: t } = e;
        (D = t), V();
    }
    function i(e) {
        let { state: t } = e;
        (D = t === E.$7l.ACTIVE), V();
    }
    p.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), d.Z.addChangeListener(n), c.default.addChangeListener(e), s.Z.subscribe('WINDOW_FOCUS', r), s.Z.subscribe('APP_STATE_UPDATE', i), s.Z.subscribe('LOGOUT', t), V(), o.ZP.initialized.then(x);
}
async function K() {
    let e = null;
    try {
        e = 'uninitialized' === R.state ? H(await a.K.getAfterRefresh(S)) : R.session;
    } catch (e) {
        p.Z.captureException(e);
    }
    return (() => {
        let t = Date.now();
        return (
            F()
                ? ((null == e || (0, g.qK)(e)) &&
                      ((e = {
                          uuid: (0, r.Z)(),
                          createdAtTimestamp: t,
                          lastUsedTimestamp: t,
                          version: g.EI
                      }),
                      (C = 0)),
                  (e.lastUsedTimestamp = t),
                  Z(e))
                : null != e && (0, g.qK)(e) && (e = null),
            (R = {
                state: 'loaded',
                session: e
            }),
            e
        );
    })();
}
function z() {
    let e = 'uninitialized' === R.state ? H(a.K.get(S)) : R.session;
    return null == e || (0, g.qK)(e) ? null : e;
}
