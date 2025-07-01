(n.d(t, {
    Ai: () => el,
    DL: () => eo,
    Gg: () => es
}),
    n(415506),
    n(539854));
var r = n(772848),
    i = n(923452),
    a = n(259443),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(188471),
    u = n(38618),
    d = n(314897),
    f = n(517100),
    _ = n(19780),
    p = n(626135),
    h = n(70956),
    m = n(960048),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            }));
    }
    return e;
}
let T = 24,
    S = 15 * h.Z.Millis.MINUTE,
    A = h.Z.Millis.SECOND,
    N = 'LAST_CLIENT_HEARTBEAT_SESSION',
    C = 'user',
    R = new a.Yd('SessionHeartbeatScheduler'),
    P = null,
    w = null,
    D = 0,
    L = 0,
    x = { state: 'uninitialized' },
    k = _.Z.getState(),
    M = (0, E.H)(),
    j = d.default.getToken();
function U() {
    (Z(),
        (P = {
            type: 'interval',
            id: setInterval(() => {
                Z();
            }, S)
        }));
}
function G() {
    if (null != P) return;
    let e = 0 === L ? 0 : S - (performance.now() - L);
    (m.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(e / 1000, ' seconds. Scheduling Heartbeat') }),
        0 === e
            ? U()
            : (P = {
                  type: 'timeout',
                  id: setTimeout(() => {
                      U();
                  }, e)
              }));
}
function B() {
    if (null == P) return !1;
    switch (P.type) {
        case 'timeout':
            clearTimeout(P.id);
            break;
        case 'interval':
            clearInterval(P.id);
            break;
        default:
            P.type;
    }
    return ((P = null), !0);
}
function V() {
    B() &&
        (m.Z.addBreadcrumb({
            category: C,
            message: 'Stopping Analytics Heartbeat'
        }),
        (0, c.Z)());
}
function F() {
    var e;
    let t = null != (e = f.Z.getIdleSince()) ? e : 0;
    return {
        is_idle: f.Z.isIdle(),
        idle_duration_ms: Date.now() - t,
        is_afk: f.Z.isAFK(),
        is_system_suspended: f.Z.getSystemSuspended(),
        is_system_locked: f.Z.getSystemLocked()
    };
}
async function Z() {
    let e = Date.now(),
        t = await es(),
        n = Date.now();
    if (null == t) return void m.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(n - e, 'ms')));
    m.Z.addBreadcrumb({
        category: C,
        message: 'Tracking Heartbeat',
        data: { initialized: t.createdAtTimestamp }
    });
    let r = I(
        {
            client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
            client_heartbeat_version: T
        },
        (0, g.O)(),
        F()
    );
    (p.default.track(O.rMx.CLIENT_HEARTBEAT, r), (L = performance.now()), (0, c.Z)());
}
function H() {
    if (!(null != j && (0, y.y)()) || performance.now() - L <= S) return;
    let e = { client_heartbeat_version: T };
    p.default.track(O.rMx.CLIENT_HEARTBEAT_SKIPPED, e);
}
function Y() {}
function W() {
    let e = [];
    return (
        null != j && (M && e.push('foregrounded'), k !== O.hes.DISCONNECTED && k !== O.hes.RTC_DISCONNECTED && e.push('rtc_connected')),
        {
            active: e.length > 0,
            ver: T,
            reasons: e
        }
    );
}
function K() {
    return W().active;
}
function z() {
    (K() ? G() : V(), $());
}
function q() {
    null == w &&
        (w = {
            id: setInterval(() => {
                H();
            }, S),
            type: 'interval'
        });
}
function X(e) {
    let t = performance.now();
    if (!(t - D < A))
        try {
            (s.K.set(N, e), (D = t));
        } catch (e) {
            m.Z.captureException(e);
        }
}
function Q(e) {
    return null == e ? null : e.version !== b.EI ? (R.warn('Throwing away client session with invalid version: '.concat(e.version, ', expected ').concat(b.EI)), null) : e;
}
function J() {
    (s.K.remove(N),
        (x = {
            state: 'loaded',
            session: null
        }),
        V(),
        (L = 0));
}
function $() {
    var e;
    null == (e = u.Z.getSocket()) || e.handleActiveStateChange(W());
}
async function ee() {
    let e = await es(!1);
    if (null != e) {
        var t;
        null == (t = u.Z.getSocket()) || t.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.s);
    }
}
function et() {
    let e = d.default.getToken();
    (j !== e && ((j = e), J()), z());
}
function en() {
    ((k = _.Z.getState()), z());
}
function er(e) {
    let { focused: t } = e;
    ((M = t), z());
}
function ei(e) {
    let { state: t } = e;
    ((M = t === O.$7l.ACTIVE), z());
}
function ea() {
    ((k = _.Z.getState()), (M = (0, E.H)()), et());
}
function eo() {
    (m.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), _.Z.addChangeListener(en), d.default.addChangeListener(et), l.Z.subscribe('WINDOW_FOCUS', er), l.Z.subscribe('APP_STATE_UPDATE', ei), l.Z.subscribe('CONNECTION_OPEN', ee), z(), q(), o.ZP.initialized.then(ea));
}
async function es() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = null,
        a = 'loaded' === x.state ? (null == (e = x.session) ? void 0 : e.uuid) : null;
    try {
        n = 'uninitialized' === x.state ? Q(await s.K.getAfterRefresh(N)) : x.session;
    } catch (e) {
        m.Z.captureException(e);
    }
    return (() => {
        let e = Date.now();
        if (
            (K()
                ? ((null == n || (0, b.qK)(n)) &&
                      ((n = {
                          uuid: (0, r.Z)(),
                          createdAtTimestamp: e,
                          lastUsedTimestamp: e,
                          version: b.EI
                      }),
                      (D = 0)),
                  (n.lastUsedTimestamp = e),
                  X(n))
                : null != n && (0, b.qK)(n) && (n = null),
            (x = {
                state: 'loaded',
                session: n
            }),
            null != n && a !== n.uuid && t)
        ) {
            var o;
            null == (o = u.Z.getSocket()) || o.handleUpdateTimeSpentSessionId(n.createdAtTimestamp, n.uuid, i.s);
        }
        return n;
    })();
}
function el() {
    let e = 'uninitialized' === x.state ? Q(s.K.get(N)) : x.session;
    return null == e || (0, b.qK)(e) ? null : e;
}
