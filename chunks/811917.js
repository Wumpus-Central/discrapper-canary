"use strict";
n.d(t, { A: () => O });
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
    h = n(954571),
    m = n(927813),
    E = n(973522),
    g = n(670632),
    A = n(15285),
    I = n(932492),
    T = n(652215);
let S = new o.A("RunningGameHeartbeatManager"),
    y = 5 * m.A.Millis.MINUTE;
function v(e) {
    return e.distributor === T.d3x.ROBLOX ? (0, _.hD)(e) : null;
}
function N(e) {
    let t = null != e.name ? e.name : "",
        n = `${e.id ?? e.exePath}:${t}`,
        r = v(e);
    return null != r && (n += `:${r}`), n;
}
function C(e) {
    if (!l.O) return null;
    let t = c.default.getTrackedGameByPid(e);
    return {
        overlay_state: t?.state ?? null,
        overlay_method: null != t ? u.Ue[t.overlayMethod] : null,
        overlay_version: d.A.getNativeModule()?.version() ?? 0,
    };
}
class R extends a.A {
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
        n.includes("tool-service") && ("running" === t.state ? g.A.enable() : g.A.reset());
    }
    _terminate() {
        this.heartbeatInterval.stop(), g.A.disable(), I.A.disable();
    }
    handleLogout() {
        g.A.disable(), I.A.disable(), this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        if ((this.processSessionChanges(), 0 === this.gameSessions.size)) {
            this.heartbeatInterval.stop(), I.A.disable();
            return;
        }
        I.A.enable(),
            this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(y, this.logRunningGameHeartbeats);
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
                game_executable: (0, E.Ic)(s.exePath),
                game_detection_enabled: (0, A.Xr)(s),
                initial_heartbeat: t,
                final_heartbeat: n,
                game_session_id: e.sessionId,
                duration_tracked_ms: o,
                rtc_connection_id: p.A.getRTCConnectionId(),
                media_session_id: p.A.getMediaSessionId(),
            },
            c = C(s.pid);
        return g.A.getSnapshot(s.pid)
            .then((e) => {
                h.default.track(T.HAw.RUNNING_GAME_HEARTBEAT, { ...u, ...(e ?? {}), ...(r ?? {}), ...(c ?? {}) });
            })
            .catch((e) => {
                t || e instanceof i.Fh || S.warn(`Failed to get performance snapshot for game ${s.id}`, e.message),
                    h.default.track(T.HAw.RUNNING_GAME_HEARTBEAT, { ...u, ...(r ?? {}), ...(c ?? {}) });
            });
    }
    processSessionChanges() {
        let e = A.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            if (i.isLauncher) continue;
            let e = N(i);
            if ((n.add(e), this.gameSessions.has(e))) {
                let n = this.gameSessions.get(e);
                if (n.runningGame.pid !== i.pid) {
                    let s = n.runningGame.pid,
                        a = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                    this.gameSessions.set(e, a),
                        g.A.startMonitoringPid(i.pid),
                        this.logHeartbeat(n, !1, !0, null).finally(() => {
                            g.A.stopMonitoringPid(s);
                        }),
                        this.logHeartbeat(a, !0, !1, null);
                }
            } else {
                let n = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                this.gameSessions.set(e, n), g.A.startMonitoringPid(i.pid), this.logHeartbeat(n, !0, !1, null);
            }
        }
        for (let [e, t] of this.gameSessions)
            if (!n.has(e)) {
                this.gameSessions.delete(e);
                let n = t.runningGame.pid;
                this.logHeartbeat(t, !1, !0, null).finally(() => {
                    g.A.stopMonitoringPid(n);
                });
            }
    }
    logRunningGameHeartbeats = () => {
        let e = I.A.getSnapshot();
        for (let t of this.gameSessions.values()) this.logHeartbeat(t, !1, !1, e);
    };
}
let O = new R();
