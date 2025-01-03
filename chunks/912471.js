n.d(t, {
    D: function () {
        return A;
    }
}),
    n(411104);
var i = n(903772),
    r = n(433517),
    l = n(570140),
    a = n(188471),
    s = n(581567),
    o = n(594190),
    c = n(19780),
    d = n(626135),
    u = n(70956),
    h = n(848479),
    m = n(960048),
    p = n(844889),
    g = n(981631);
let f = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    _ = null,
    E = null,
    I = !1;
async function C() {
    if (I) return;
    (I = !0), (0, p.fr)(!0), m.Z.addBreadcrumb({ message: 'Start Analytics Heartbeat' });
    let e = await r.K.getAfterRefresh(f).then(p.Hg);
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
                    (_ = setInterval(() => {
                        v();
                    }, 15 * u.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function N() {
    null != E && (clearTimeout(E), (E = null)), null != _ && (clearInterval(_), (_ = null));
}
async function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now(),
        n = await (0, p.Gg)(),
        l = Date.now();
    if (null == n) {
        m.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(l - t, 'ms')));
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
    let c = {
            client_heartbeat_initialization_timestamp: n.initialized,
            client_heartbeat_version: 17
        },
        u = h.Z.getMemoryUsageElectronRenderer();
    null != u && (c.client_heartbeat_renderer_memory = u);
    let _ = h.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != _ && (c.client_heartbeat_renderer_memory_used_heap = _);
    {
        let e = o.ZP.getCurrentGameForAnalytics();
        null != e && ((c.client_heartbeat_current_game_id = e.id), (c.client_heartbeat_current_game_name = e.name), (c.client_heartbeat_current_game_executable = (0, s.N6)(e.exePath)), (c.client_heartbeat_current_game_distributor = e.distributor), (c.uses_client_mods = (0, i.e)()));
    }
    d.default.track(g.rMx.CLIENT_HEARTBEAT, c), r.K.set(f, Date.now().toString()), (0, a.Z)();
}
let S = null,
    T = !0;
function b() {
    if (T || (null != S && S !== g.hes.DISCONNECTED && S !== g.hes.RTC_DISCONNECTED))
        try {
            C();
        } catch (e) {
            m.Z.captureException(e);
        }
    else
        !(function () {
            if (!!I) (I = !1), m.Z.addBreadcrumb({ message: 'Stopping Analytics Heartbeat' }), (0, p.fr)(!1), N(), (0, a.Z)();
        })();
}
function A() {
    m.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), c.Z.addChangeListener(x), l.Z.subscribe('WINDOW_FOCUS', L), l.Z.subscribe('APP_STATE_UPDATE', P), l.Z.subscribe('LOGIN_SUCCESS', Z), b();
}
function Z() {
    v(!0);
}
function x() {
    let e = c.Z.getState();
    S !== e && ((S = e), b());
}
function L(e) {
    let { focused: t } = e;
    (T = t), b();
}
function P(e) {
    let { state: t } = e;
    (T = t === g.$7l.ACTIVE), b();
}
