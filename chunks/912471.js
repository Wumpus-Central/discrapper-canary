n.d(t, {
    DL: () => K,
    Gg: () => z,
    hn: () => q
}),
    n(415506);
var r = n(772848),
    i = n(990547),
    a = n(259443),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(188471),
    u = n(314897),
    d = n(517100),
    f = n(19780),
    _ = n(626135),
    p = n(70956),
    h = n(960048),
    m = n(343420),
    g = n(127438),
    E = n(686325),
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
let v = 21,
    I = 15 * p.Z.Millis.MINUTE,
    S = p.Z.Millis.SECOND,
    T = 'LAST_CLIENT_HEARTBEAT_SESSION',
    A = 'user',
    N = new a.Yd('SessionHeartbeatScheduler'),
    C = null,
    P = 0,
    R = 0,
    w = { state: 'uninitialized' },
    D = f.Z.getState(),
    L = (0, g.H)(),
    x = u.default.isAuthenticated();
function k() {
    (D = f.Z.getState()), (L = (0, g.H)()), (x = u.default.isAuthenticated()), Z();
}
function M() {
    if (null != C) return;
    let e = 0 === R ? 0 : I - (performance.now() - R);
    h.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(e / 1000, ' seconds. Scheduling Heartbeat') }),
        (C = {
            type: 'timeout',
            id: setTimeout(() => {
                B(),
                    (C = {
                        type: 'interval',
                        id: setInterval(() => {
                            B();
                        }, I)
                    });
            }, e)
        });
}
function j() {
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
function U() {
    j() &&
        (h.Z.addBreadcrumb({
            category: A,
            message: 'Stopping Analytics Heartbeat'
        }),
        (0, c.Z)());
}
function G() {
    var e;
    let t = null != (e = d.Z.getIdleSince()) ? e : 0;
    return {
        is_idle: d.Z.isIdle(),
        idle_duration_ms: Date.now() - t,
        is_afk: d.Z.isAFK(),
        is_system_suspended: d.Z.getSystemSuspended(),
        is_system_locked: d.Z.getSystemLocked()
    };
}
async function B() {
    let e = Date.now(),
        t = await z(),
        n = Date.now();
    if (null == t) return void h.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(n - e, 'ms')));
    h.Z.addBreadcrumb({
        category: A,
        message: 'Tracking Heartbeat',
        data: { initialized: t.createdAtTimestamp }
    });
    let r = O(
        {
            client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
            client_heartbeat_version: v
        },
        (0, m.O)(),
        G()
    );
    _.default.track(b.rMx.CLIENT_HEARTBEAT, r), (R = performance.now()), (0, c.Z)();
}
function F() {}
function V() {
    return x && (L || (D !== b.hes.DISCONNECTED && D !== b.hes.RTC_DISCONNECTED));
}
function Z() {
    V() ? M() : U();
}
function H(e) {
    let t = performance.now();
    if (!(t - P < S))
        try {
            s.K.set(T, e), (P = t);
        } catch (e) {
            h.Z.captureException(e);
        }
}
function Y(e) {
    return null == e ? null : e.version !== E.EI ? (N.warn('Throwing away client session with invalid version: '.concat(e.version, ', expected ').concat(E.EI)), null) : e;
}
function W() {
    s.K.remove(T),
        (w = {
            state: 'loaded',
            session: null
        }),
        U(),
        (R = 0);
}
function K() {
    function e() {
        (x = u.default.isAuthenticated()), Z();
    }
    function t() {
        (x = !1), W();
    }
    function n() {
        (D = f.Z.getState()), Z();
    }
    function r(e) {
        let { focused: t } = e;
        (L = t), Z();
    }
    function i(e) {
        let { state: t } = e;
        (L = t === b.$7l.ACTIVE), Z();
    }
    h.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), f.Z.addChangeListener(n), u.default.addChangeListener(e), l.Z.subscribe('WINDOW_FOCUS', r), l.Z.subscribe('APP_STATE_UPDATE', i), l.Z.subscribe('LOGOUT', t), Z(), o.ZP.initialized.then(k);
}
async function z() {
    let e = null;
    try {
        e = 'uninitialized' === w.state ? Y(await s.K.getAfterRefresh(T)) : w.session;
    } catch (e) {
        h.Z.captureException(e);
    }
    return (() => {
        let t = Date.now();
        return (
            V()
                ? ((null == e || (0, E.qK)(e)) &&
                      ((e = {
                          uuid: (0, r.Z)(),
                          createdAtTimestamp: t,
                          lastUsedTimestamp: t,
                          version: E.EI
                      }),
                      (P = 0)),
                  (e.lastUsedTimestamp = t),
                  H(e))
                : null != e && (0, E.qK)(e) && (e = null),
            (w = {
                state: 'loaded',
                session: e
            }),
            e
        );
    })();
}
function q() {
    let e = 'uninitialized' === w.state ? Y(s.K.get(T)) : w.session,
        t = null == e || (0, E.qK)(e) ? void 0 : e.uuid,
        n = (0, i.getSuperProperties)();
    (null == n ? void 0 : n.client_heartbeat_session_id) !== t && (0, i.extendSuperProperties)({ client_heartbeat_session_id: t });
}
