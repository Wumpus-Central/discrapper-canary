n.d(t, { D: () => j }), n(415506);
var r = n(903772),
    i = n(433517),
    l = n(570140),
    a = n(188471),
    o = n(581567),
    s = n(594190),
    c = n(709706),
    u = n(19780),
    d = n(626135),
    p = n(70956),
    h = n(848479),
    f = n(960048),
    g = n(844889),
    m = n(686325),
    b = n(981631);
let _ = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    E = 'user',
    O = null,
    y = null,
    I = !1;
async function v() {
    if (I) return;
    (I = !0), (0, g.f)(!0);
    let e = await i.K.getAfterRefresh(_).then(m.Hg);
    if (!I) return;
    let t = Date.now(),
        n = 15 * p.Z.Millis.MINUTE + e - t;
    n > p.Z.Millis.HOUR && f.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        f.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        C(),
        (y = setTimeout(
            () => {
                S(),
                    (O = setInterval(() => {
                        S();
                    }, 15 * p.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function C() {
    null != y && (clearTimeout(y), (y = null)), null != O && (clearInterval(O), (O = null));
}
async function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now(),
        n = await (0, g.G)(),
        l = Date.now();
    if (null == n) return void f.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(l - t, 'ms')));
    if (!I && !e) {
        f.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), C();
        return;
    }
    f.Z.addBreadcrumb({
        category: E,
        message: 'Tracking Heartbeat',
        data: { initialized: n.initialized }
    });
    let u = {
        client_heartbeat_initialization_timestamp: n.initialized,
        client_heartbeat_version: 17
    };
    {
        let e = h.Z.getMemoryUsageElectronRenderer();
        null != e && (u.client_heartbeat_renderer_memory = e);
        let t = h.Z.getMemoryUsageElectronRendererUsedHeapSize();
        null != t && (u.client_heartbeat_renderer_memory_used_heap = t);
        let n = h.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null != n) {
            var p, m, O, y, v, S, N, T, P, j, A, Z, x, w, L, R, D, k, M, U, G, V, B, H;
            (u.electron_process_memory_private = [null != (x = null == (p = n.unknown) ? void 0 : p.wss_priv_kb) ? x : -1, null != (w = null == (m = n.main) ? void 0 : m.wss_priv_kb) ? w : -1, null != (L = null == (O = n.renderer) ? void 0 : O.wss_priv_kb) ? L : -1, null != (R = null == (y = n.gpu) ? void 0 : y.wss_priv_kb) ? R : -1, null != (D = null == (v = n.crashpad) ? void 0 : v.wss_priv_kb) ? D : -1, null != (k = null == (S = n.utility) ? void 0 : S.wss_priv_kb) ? k : -1]), (u.electron_process_memory_private_and_shared = [null != (M = null == (N = n.unknown) ? void 0 : N.wss_kb) ? M : -1, null != (U = null == (T = n.main) ? void 0 : T.wss_kb) ? U : -1, null != (G = null == (P = n.renderer) ? void 0 : P.wss_kb) ? G : -1, null != (V = null == (j = n.gpu) ? void 0 : j.wss_kb) ? V : -1, null != (B = null == (A = n.crashpad) ? void 0 : A.wss_kb) ? B : -1, null != (H = null == (Z = n.utility) ? void 0 : Z.wss_kb) ? H : -1]);
        }
        let i = s.ZP.getCurrentGameForAnalytics();
        null != i && ((u.client_heartbeat_current_game_id = i.id), (u.client_heartbeat_current_game_name = i.name), (u.client_heartbeat_current_game_executable = (0, o.N6)(i.exePath)), (u.client_heartbeat_current_game_distributor = i.distributor), (u.uses_client_mods = (0, r.e)())), c.Z.isNativeModuleLoaded() && (u.voice_filters_native_module_loaded = !0);
    }
    d.default.track(b.rMx.CLIENT_HEARTBEAT, u), i.K.set(_, Date.now().toString()), (0, a.Z)();
}
let N = null,
    T = !0;
function P() {
    if (T || (null != N && N !== b.hes.DISCONNECTED && N !== b.hes.RTC_DISCONNECTED))
        try {
            v();
        } catch (e) {
            f.Z.captureException(e);
        }
    else
        I &&
            ((I = !1),
            f.Z.addBreadcrumb({
                category: E,
                message: 'Stopping Analytics Heartbeat'
            }),
            (0, g.f)(!1),
            C(),
            (0, a.Z)());
}
function j() {
    f.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), u.Z.addChangeListener(Z), l.Z.subscribe('WINDOW_FOCUS', x), l.Z.subscribe('APP_STATE_UPDATE', w), l.Z.subscribe('LOGIN_SUCCESS', A), P();
}
function A() {
    S(!0);
}
function Z() {
    let e = u.Z.getState();
    N !== e && ((N = e), P());
}
function x(e) {
    let { focused: t } = e;
    (T = t), P();
}
function w(e) {
    let { state: t } = e;
    (T = t === b.$7l.ACTIVE), P();
}
