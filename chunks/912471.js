n.d(t, { D: () => S }), n(411104);
var r = n(903772),
    i = n(433517),
    l = n(570140),
    o = n(188471),
    a = n(581567),
    s = n(594190),
    c = n(19780),
    u = n(626135),
    d = n(70956),
    p = n(848479),
    h = n(960048),
    f = n(844889),
    g = n(981631);
let m = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    b = null,
    _ = null,
    E = !1;
async function O() {
    if (E) return;
    (E = !0), (0, f.fr)(!0), h.Z.addBreadcrumb({ message: 'Start Analytics Heartbeat' });
    let e = await i.K.getAfterRefresh(m).then(f.Hg);
    if (!E) return;
    let t = Date.now(),
        n = 15 * d.Z.Millis.MINUTE + e - t;
    n > d.Z.Millis.HOUR && h.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        h.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        N(),
        (_ = setTimeout(
            () => {
                v(),
                    (b = setInterval(() => {
                        v();
                    }, 15 * d.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function N() {
    null != _ && (clearTimeout(_), (_ = null)), null != b && (clearInterval(b), (b = null));
}
async function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now(),
        n = await (0, f.Gg)(),
        l = Date.now();
    if (null == n) {
        h.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(l - t, 'ms')));
        return;
    }
    if (!E && !e) {
        h.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), N();
        return;
    }
    h.Z.addBreadcrumb({
        message: 'Tracking Heartbeat',
        data: { initialized: n.initialized }
    });
    let c = {
            client_heartbeat_initialization_timestamp: n.initialized,
            client_heartbeat_version: 17
        },
        d = p.Z.getMemoryUsageElectronRenderer();
    null != d && (c.client_heartbeat_renderer_memory = d);
    let b = p.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != b && (c.client_heartbeat_renderer_memory_used_heap = b);
    {
        let e = s.ZP.getCurrentGameForAnalytics();
        null != e && ((c.client_heartbeat_current_game_id = e.id), (c.client_heartbeat_current_game_name = e.name), (c.client_heartbeat_current_game_executable = (0, a.N6)(e.exePath)), (c.client_heartbeat_current_game_distributor = e.distributor), (c.uses_client_mods = (0, r.e)()));
    }
    u.default.track(g.rMx.CLIENT_HEARTBEAT, c), i.K.set(m, Date.now().toString()), (0, o.Z)();
}
let y = null,
    I = !0;
function C() {
    if (I || (null != y && y !== g.hes.DISCONNECTED && y !== g.hes.RTC_DISCONNECTED))
        try {
            O();
        } catch (e) {
            h.Z.captureException(e);
        }
    else !E || ((E = !1), h.Z.addBreadcrumb({ message: 'Stopping Analytics Heartbeat' }), (0, f.fr)(!1), N(), (0, o.Z)());
}
function S() {
    h.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), c.Z.addChangeListener(P), l.Z.subscribe('WINDOW_FOCUS', j), l.Z.subscribe('APP_STATE_UPDATE', A), l.Z.subscribe('LOGIN_SUCCESS', T), C();
}
function T() {
    v(!0);
}
function P() {
    let e = c.Z.getState();
    y !== e && ((y = e), C());
}
function j(e) {
    let { focused: t } = e;
    (I = t), C();
}
function A(e) {
    let { state: t } = e;
    (I = t === g.$7l.ACTIVE), C();
}
