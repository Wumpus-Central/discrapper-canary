(n.d(t, {
    Ai: () => es,
    DL: () => ea,
    Gg: () => eo
}),
    n(415506),
    n(539854));
var r = n(772848),
    i = n(923452),
    a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(188471),
    c = n(710845),
    u = n(38618),
    d = n(314897),
    _ = n(517100),
    f = n(19780),
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
let T = 25,
    S = 15 * h.Z.Millis.MINUTE,
    A = h.Z.Millis.SECOND,
    N = 'LAST_CLIENT_HEARTBEAT_SESSION',
    C = 'user',
    R = new c.Z('SessionHeartbeatScheduler'),
    P = null,
    w = null,
    D = 0,
    L = 0,
    x = { state: 'uninitialized' },
    k = f.Z.getState(),
    M = (0, E.H)(),
    j = d.default.getToken();
function U() {
    if (null != P) return;
    let e = 0 === L ? 0 : S - (performance.now() - L);
    (m.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(e / 1000, ' seconds. Scheduling Heartbeat') }),
        (P = {
            type: 'timeout',
            id: setTimeout(() => {
                (F(),
                    (P = {
                        type: 'interval',
                        id: setInterval(() => {
                            F();
                        }, S)
                    }));
            }, e)
        }));
}
function G() {
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
function B() {
    G() &&
        (m.Z.addBreadcrumb({
            category: C,
            message: 'Stopping Analytics Heartbeat'
        }),
        (0, l.Z)());
}
function V() {
    var e;
    let t = null != (e = _.Z.getIdleSince()) ? e : 0;
    return {
        is_idle: _.Z.isIdle(),
        idle_duration_ms: Date.now() - t,
        is_afk: _.Z.isAFK(),
        is_system_suspended: _.Z.getSystemSuspended(),
        is_system_locked: _.Z.getSystemLocked()
    };
}
async function F() {
    let e = Date.now(),
        t = await eo(),
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
        V()
    );
    (p.default.track(O.rMx.CLIENT_HEARTBEAT, r), (L = performance.now()), (0, l.Z)());
}
function Z() {
    if (!(null != j && (0, y.y)()) || performance.now() - L <= S) return;
    let e = { client_heartbeat_version: T };
    p.default.track(O.rMx.CLIENT_HEARTBEAT_SKIPPED, e);
}
function H() {}
function Y() {
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
function W() {
    return Y().active;
}
function K() {
    (W() ? U() : B(), J());
}
function z() {
    null == w &&
        (w = {
            id: setInterval(() => {
                Z();
            }, S),
            type: 'interval'
        });
}
function q(e) {
    let t = performance.now();
    if (!(t - D < A))
        try {
            (o.K.set(N, e), (D = t));
        } catch (e) {
            m.Z.captureException(e);
        }
}
function X(e) {
    return null == e ? null : e.version !== b.EI ? (R.warn('Throwing away client session with invalid version: '.concat(e.version, ', expected ').concat(b.EI)), null) : e;
}
function Q() {
    (o.K.remove(N),
        (x = {
            state: 'loaded',
            session: null
        }),
        B(),
        (L = 0));
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
    (j !== e && ((j = e), Q()), K());
}
function et() {
    ((k = f.Z.getState()), K());
}
function en(e) {
    let { focused: t } = e;
    ((M = t), K());
}
function er(e) {
    let { state: t } = e;
    ((M = t === O.$7l.ACTIVE), K());
}
function ei() {
    ((k = f.Z.getState()), (M = (0, E.H)()), ee());
}
function ea() {
    (m.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), f.Z.addChangeListener(et), d.default.addChangeListener(ee), s.Z.subscribe('WINDOW_FOCUS', en), s.Z.subscribe('APP_STATE_UPDATE', er), s.Z.subscribe('CONNECTION_OPEN', $), K(), z(), a.ZP.initialized.then(ei));
}
async function eo() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = null,
        a = 'loaded' === x.state ? (null == (e = x.session) ? void 0 : e.uuid) : null;
    try {
        n = 'uninitialized' === x.state ? X(await o.K.getAfterRefresh(N)) : x.session;
    } catch (e) {
        m.Z.captureException(e);
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
                          version: b.EI
                      }),
                      (D = 0)),
                  (n.lastUsedTimestamp = e),
                  q(n))
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
function es() {
    let e = 'uninitialized' === x.state ? X(o.K.get(N)) : x.session;
    return null == e || (0, b.qK)(e) ? null : e;
}
