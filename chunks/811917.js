"use strict";
n.d(t, { A: () => D });
var r = n(835245),
    i = n(141931),
    s = n(451988),
    a = n(439372),
    o = n(626584),
    l = n(206885),
    u = n(41984),
    c = n(833551),
    d = n(680243),
    _ = n(847521),
    f = n(760751),
    p = n(383501),
    h = n(531685),
    m = n(954571),
    E = n(927813),
    g = n(973522),
    A = n(670632),
    I = n(15285),
    T = n(932492),
    S = n(652215);
let y = new o.A("RunningGameHeartbeatManager"),
    v = 5 * E.A.Millis.MINUTE;
function N(e) {
    return e.distributor === S.d3x.ROBLOX ? (0, _.hD)(e) : null;
}
function C(e) {
    let t = null != e.name ? e.name : "",
        n = `${e.id ?? e.exePath}:${t}`,
        r = N(e);
    return null != r && (n += `:${r}`), n;
}
function R(e) {
    if (!l.O) return null;
    let t = c.default.getTrackedGameByPid(e);
    return {
        overlay_state: t?.state ?? null,
        overlay_method: null != t ? u.Ue[t.overlayMethod] : null,
        overlay_version: d.A.getNativeModule()?.version() ?? 0,
    };
}
function O() {
    let e,
        t = h.A.isFocused(),
        n = h.A.isVisible();
    return { discord_window_state: (e = t ? "focused" : n ? "visible" : "hidden") };
}
class b extends a.A {
    heartbeatInterval = new s.IX();
    gameSessions = new Map();
    actions = {
        LOGOUT: () => this.handleLogout(),
        POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
        SYSTEM_SERVICE_INITIALIZE: (e) => this.handleSystemServiceInitialize(e),
    };
    handleSystemServiceInitialize(e) {
        let { status: t, modules: n } = e;
        n.includes("tool-service") && ("running" === t.state ? A.A.enable() : A.A.reset());
    }
    _terminate() {
        this.heartbeatInterval.stop(), A.A.disable(), T.A.disable();
    }
    handleLogout() {
        A.A.disable(), T.A.disable(), this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        if ((this.processSessionChanges(), 0 === this.gameSessions.size)) {
            this.heartbeatInterval.stop(), T.A.disable();
            return;
        }
        T.A.enable(),
            this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(v, this.logRunningGameHeartbeats);
    }
    handleRunningGamesChanged = (e) => {
        this.scheduleHeartbeatTracking();
    };
    logHeartbeat(e, t, n, r) {
        let s = e.runningGame,
            a = performance.now(),
            o = t ? 0 : Math.round(a - e.lastHeartbeatTime),
            l = s.id ?? f.A.findGame(s)?.id;
        e.lastHeartbeatTime = a;
        let u = {
                game_id: l,
                game_name: s.name,
                game_distributor: s.distributor,
                game_distributor_game_id: s.sku,
                game_metadata: (0, _.MT)(s),
                game_executable: (0, g.Ic)(s.exePath),
                game_detection_enabled: (0, I.Xr)(s),
                initial_heartbeat: t,
                final_heartbeat: n,
                game_session_id: e.sessionId,
                duration_tracked_ms: o,
                rtc_connection_id: p.A.getRTCConnectionId(),
                media_session_id: p.A.getMediaSessionId(),
            },
            c = R(s.pid),
            d = O();
        return A.A.getSnapshot(s.pid)
            .then((e) => {
                m.default.track(S.HAw.RUNNING_GAME_HEARTBEAT, { ...u, ...d, ...(e ?? {}), ...(r ?? {}), ...(c ?? {}) });
            })
            .catch((e) => {
                t || e instanceof i.Fh || y.warn(`Failed to get performance snapshot for game ${s.id}`, e.message),
                    m.default.track(S.HAw.RUNNING_GAME_HEARTBEAT, { ...u, ...d, ...(r ?? {}), ...(c ?? {}) });
            });
    }
    processSessionChanges() {
        let e = I.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            if (i.isLauncher) continue;
            let e = C(i);
            if ((n.add(e), this.gameSessions.has(e))) {
                let n = this.gameSessions.get(e);
                if (n.runningGame.pid !== i.pid) {
                    let s = n.runningGame.pid,
                        a = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                    this.gameSessions.set(e, a),
                        A.A.startMonitoringPid(i.pid),
                        this.logHeartbeat(n, !1, !0, null).finally(() => {
                            A.A.stopMonitoringPid(s);
                        }),
                        this.logHeartbeat(a, !0, !1, null);
                }
            } else {
                let n = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                this.gameSessions.set(e, n), A.A.startMonitoringPid(i.pid), this.logHeartbeat(n, !0, !1, null);
            }
        }
        for (let [e, t] of this.gameSessions)
            if (!n.has(e)) {
                this.gameSessions.delete(e);
                let n = t.runningGame.pid;
                this.logHeartbeat(t, !1, !0, null).finally(() => {
                    A.A.stopMonitoringPid(n);
                });
            }
    }
    logRunningGameHeartbeats = () => {
        let e = T.A.getSnapshot();
        for (let t of this.gameSessions.values()) this.logHeartbeat(t, !1, !1, e);
    };
}
let D = new b();
