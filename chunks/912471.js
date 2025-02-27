n.d(t, { D: () => T }), n(411104);
var r = n(903772),
    i = n(433517),
    l = n(570140),
    o = n(188471),
    a = n(581567),
    s = n(594190),
    c = n(709706),
    u = n(19780),
    d = n(626135),
    p = n(70956),
    h = n(848479),
    f = n(960048),
    g = n(844889),
    m = n(981631);
let b = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    _ = null,
    E = null,
    O = !1;
async function N() {
    if (O) return;
    (O = !0), (0, g.fr)(!0), f.Z.addBreadcrumb({ message: 'Start Analytics Heartbeat' });
    let e = await i.K.getAfterRefresh(b).then(g.Hg);
    if (!O) return;
    let t = Date.now(),
        n = 15 * p.Z.Millis.MINUTE + e - t;
    n > p.Z.Millis.HOUR && f.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        f.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        v(),
        (E = setTimeout(
            () => {
                y(),
                    (_ = setInterval(() => {
                        y();
                    }, 15 * p.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function v() {
    null != E && (clearTimeout(E), (E = null)), null != _ && (clearInterval(_), (_ = null));
}
async function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now(),
        n = await (0, g.Gg)(),
        l = Date.now();
    if (null == n) {
        f.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(l - t, 'ms')));
        return;
    }
    if (!O && !e) {
        f.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), v();
        return;
    }
    f.Z.addBreadcrumb({
        message: 'Tracking Heartbeat',
        data: { initialized: n.initialized }
    });
    let u = {
            client_heartbeat_initialization_timestamp: n.initialized,
            client_heartbeat_version: 17
        },
        p = h.Z.getMemoryUsageElectronRenderer();
    null != p && (u.client_heartbeat_renderer_memory = p);
    let _ = h.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != _ && (u.client_heartbeat_renderer_memory_used_heap = _);
    {
        let e = s.ZP.getCurrentGameForAnalytics();
        null != e && ((u.client_heartbeat_current_game_id = e.id), (u.client_heartbeat_current_game_name = e.name), (u.client_heartbeat_current_game_executable = (0, a.N6)(e.exePath)), (u.client_heartbeat_current_game_distributor = e.distributor), (u.uses_client_mods = (0, r.e)())), c.Z.isNativeModuleLoaded() && (u.voice_filters_native_module_loaded = !0);
    }
    d.default.track(m.rMx.CLIENT_HEARTBEAT, u), i.K.set(b, Date.now().toString()), (0, o.Z)();
}
let I = null,
    C = !0;
function S() {
    if (C || (null != I && I !== m.hes.DISCONNECTED && I !== m.hes.RTC_DISCONNECTED))
        try {
            N();
        } catch (e) {
            f.Z.captureException(e);
        }
    else !O || ((O = !1), f.Z.addBreadcrumb({ message: 'Stopping Analytics Heartbeat' }), (0, g.fr)(!1), v(), (0, o.Z)());
}
function T() {
    f.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), u.Z.addChangeListener(j), l.Z.subscribe('WINDOW_FOCUS', A), l.Z.subscribe('APP_STATE_UPDATE', Z), l.Z.subscribe('LOGIN_SUCCESS', P), S();
}
function P() {
    y(!0);
}
function j() {
    let e = u.Z.getState();
    I !== e && ((I = e), S());
}
function A(e) {
    let { focused: t } = e;
    (C = t), S();
}
function Z(e) {
    let { state: t } = e;
    (C = t === m.$7l.ACTIVE), S();
}
