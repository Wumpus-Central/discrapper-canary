n.d(t, { D: () => A }), n(415506);
var r = n(903772),
    i = n(433517),
    l = n(570140),
    a = n(188471),
    o = n(581567),
    s = n(594190),
    c = n(709706),
    u = n(517100),
    d = n(19780),
    p = n(626135),
    h = n(70956),
    f = n(848479),
    g = n(960048),
    m = n(844889),
    b = n(686325),
    _ = n(981631);
let E = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    O = 'user',
    y = null,
    I = null,
    v = !1;
async function C() {
    if (v) return;
    (v = !0), (0, m.fr)(!0);
    let e = await i.K.getAfterRefresh(E).then(b.Hg);
    if (!v) return;
    let t = Date.now(),
        n = 15 * h.Z.Millis.MINUTE + e - t;
    n > h.Z.Millis.HOUR && g.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        g.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        S(),
        (I = setTimeout(
            () => {
                N(),
                    (y = setInterval(() => {
                        N();
                    }, 15 * h.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function S() {
    null != I && (clearTimeout(I), (I = null)), null != y && (clearInterval(y), (y = null));
}
async function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now(),
        n = await (0, m.Gg)(),
        l = Date.now();
    if (null == n) return void g.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(l - t, 'ms')));
    if (!v && !e) {
        g.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), S();
        return;
    }
    g.Z.addBreadcrumb({
        category: O,
        message: 'Tracking Heartbeat',
        data: { initialized: n.initialized }
    });
    let d = (function (e) {
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
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })(
        {
            client_heartbeat_initialization_timestamp: n.initialized,
            client_heartbeat_version: 20
        },
        (function () {
            let e = {};
            {
                let N = f.Z.getMemoryUsageElectronRenderer();
                null != N && (e.client_heartbeat_renderer_memory = N);
                let T = f.Z.getMemoryUsageElectronRendererUsedHeapSize();
                null != T && (e.client_heartbeat_renderer_memory_used_heap = T);
                let P = f.Z.getMemoryUsageElectronProcessTypeDetails();
                if (null != P) {
                    var t, n, r, i, l, a, o, s, c, u, d, p, h, g, m, b, _, E, O, y, I, v, C, S;
                    (e.electron_process_memory_private = [null != (h = null == (t = P.unknown) ? void 0 : t.wss_priv_kb) ? h : -1, null != (g = null == (n = P.main) ? void 0 : n.wss_priv_kb) ? g : -1, null != (m = null == (r = P.renderer) ? void 0 : r.wss_priv_kb) ? m : -1, null != (b = null == (i = P.gpu) ? void 0 : i.wss_priv_kb) ? b : -1, null != (_ = null == (l = P.crashpad) ? void 0 : l.wss_priv_kb) ? _ : -1, null != (E = null == (a = P.utility) ? void 0 : a.wss_priv_kb) ? E : -1]), (e.electron_process_memory_private_and_shared = [null != (O = null == (o = P.unknown) ? void 0 : o.wss_kb) ? O : -1, null != (y = null == (s = P.main) ? void 0 : s.wss_kb) ? y : -1, null != (I = null == (c = P.renderer) ? void 0 : c.wss_kb) ? I : -1, null != (v = null == (u = P.gpu) ? void 0 : u.wss_kb) ? v : -1, null != (C = null == (d = P.crashpad) ? void 0 : d.wss_kb) ? C : -1, null != (S = null == (p = P.utility) ? void 0 : p.wss_kb) ? S : -1]);
                }
            }
            return e;
        })(),
        (function () {
            let e = {};
            {
                let t = s.ZP.getCurrentGameForAnalytics();
                null != t && ((e.client_heartbeat_current_game_id = t.id), (e.client_heartbeat_current_game_name = t.name), (e.client_heartbeat_current_game_executable = (0, o.N6)(t.exePath)), (e.client_heartbeat_current_game_distributor = t.distributor), (e.uses_client_mods = (0, r.e)())), c.Z.isNativeModuleLoaded() && (e.voice_filters_native_module_loaded = !0);
            }
            return e;
        })(),
        (function () {
            var e;
            let t = null != (e = u.Z.getIdleSince()) ? e : 0;
            return {
                is_idle: u.Z.isIdle(),
                idle_duration_ms: Date.now() - t,
                is_afk: u.Z.isAFK(),
                is_system_suspended: u.Z.getSystemSuspended(),
                is_system_locked: u.Z.getSystemLocked()
            };
        })()
    );
    p.default.track(_.rMx.CLIENT_HEARTBEAT, d), i.K.set(E, Date.now().toString()), (0, a.Z)();
}
let T = null,
    P = !0;
function j() {
    if (P || (null != T && T !== _.hes.DISCONNECTED && T !== _.hes.RTC_DISCONNECTED))
        try {
            C();
        } catch (e) {
            g.Z.captureException(e);
        }
    else
        v &&
            ((v = !1),
            g.Z.addBreadcrumb({
                category: O,
                message: 'Stopping Analytics Heartbeat'
            }),
            (0, m.fr)(!1),
            S(),
            (0, a.Z)());
}
function A() {
    g.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), d.Z.addChangeListener(x), l.Z.subscribe('WINDOW_FOCUS', w), l.Z.subscribe('APP_STATE_UPDATE', L), l.Z.subscribe('LOGIN_SUCCESS', Z), j();
}
function Z() {
    N(!0);
}
function x() {
    let e = d.Z.getState();
    T !== e && ((T = e), j());
}
function w(e) {
    let { focused: t } = e;
    (P = t), j();
}
function L(e) {
    let { state: t } = e;
    (P = t === _.$7l.ACTIVE), j();
}
