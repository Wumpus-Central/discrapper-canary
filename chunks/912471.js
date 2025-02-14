n.d(t, { D: () => Z }), n(411104);
var i = n(903772),
    l = n(433517),
    r = n(570140),
    a = n(188471),
    s = n(581567),
    o = n(594190),
    d = n(19780),
    c = n(626135),
    u = n(70956),
    h = n(848479),
    m = n(960048),
    p = n(844889),
    g = n(981631);
let _ = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    f = null,
    E = null,
    I = !1;
async function C() {
    if (I) return;
    (I = !0), (0, p.fr)(!0), m.Z.addBreadcrumb({ message: 'Start Analytics Heartbeat' });
    let e = await l.K.getAfterRefresh(_).then(p.Hg);
    if (!I) return;
    let t = Date.now(),
        n = 15 * u.Z.Millis.MINUTE + e - t;
    n > u.Z.Millis.HOUR && m.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        m.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        N(),
        (E = setTimeout(
            () => {
                v(),
                    (f = setInterval(() => {
                        v();
                    }, 15 * u.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function N() {
    null != E && (clearTimeout(E), (E = null)), null != f && (clearInterval(f), (f = null));
}
async function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now(),
        n = await (0, p.Gg)(),
        r = Date.now();
    if (null == n) {
        m.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(r - t, 'ms')));
        return;
    }
    if (!I && !e) {
        m.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), N();
        return;
    }
    m.Z.addBreadcrumb({
        message: 'Tracking Heartbeat',
        data: { initialized: n.initialized }
    });
    let d = {
            client_heartbeat_initialization_timestamp: n.initialized,
            client_heartbeat_version: 17
        },
        u = h.Z.getMemoryUsageElectronRenderer();
    null != u && (d.client_heartbeat_renderer_memory = u);
    let f = h.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != f && (d.client_heartbeat_renderer_memory_used_heap = f);
    {
        let e = o.ZP.getCurrentGameForAnalytics();
        null != e && ((d.client_heartbeat_current_game_id = e.id), (d.client_heartbeat_current_game_name = e.name), (d.client_heartbeat_current_game_executable = (0, s.N6)(e.exePath)), (d.client_heartbeat_current_game_distributor = e.distributor), (d.uses_client_mods = (0, i.e)()));
    }
    c.default.track(g.rMx.CLIENT_HEARTBEAT, d), l.K.set(_, Date.now().toString()), (0, a.Z)();
}
let T = null,
    S = !0;
function A() {
    if (S || (null != T && T !== g.hes.DISCONNECTED && T !== g.hes.RTC_DISCONNECTED))
        try {
            C();
        } catch (e) {
            m.Z.captureException(e);
        }
    else !I || ((I = !1), m.Z.addBreadcrumb({ message: 'Stopping Analytics Heartbeat' }), (0, p.fr)(!1), N(), (0, a.Z)());
}
function Z() {
    m.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), d.Z.addChangeListener(b), r.Z.subscribe('WINDOW_FOCUS', L), r.Z.subscribe('APP_STATE_UPDATE', y), r.Z.subscribe('LOGIN_SUCCESS', x), A();
}
function x() {
    v(!0);
}
function b() {
    let e = d.Z.getState();
    T !== e && ((T = e), A());
}
function L(e) {
    let { focused: t } = e;
    (S = t), A();
}
function y(e) {
    let { state: t } = e;
    (S = t === g.$7l.ACTIVE), A();
}
