"use strict";
n.d(t, { A: () => y });
var r = n(835245),
    i = n(141931),
    s = n(451988),
    a = n(439372),
    o = n(626584),
    l = n(847521),
    u = n(760751),
    c = n(383501),
    d = n(954571),
    _ = n(927813),
    f = n(973522),
    p = n(670632),
    h = n(15285),
    m = n(932492),
    E = n(652215);
let g = new o.A("RunningGameHeartbeatManager"),
    A = 5 * _.A.Millis.MINUTE;
function I(e) {
    return e.distributor === E.d3x.ROBLOX ? (0, l.hD)(e) : null;
}
function T(e) {
    let t = null != e.name ? e.name : "",
        n = `${e.id ?? e.exePath}:${t}`,
        r = I(e);
    return null != r && (n += `:${r}`), n;
}
class S extends a.A {
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
        n.includes("tool-service") && ("running" === t.state ? p.A.enable() : p.A.reset());
    }
    _terminate() {
        this.heartbeatInterval.stop(), p.A.disable(), m.A.disable();
    }
    handleLogout() {
        p.A.disable(), m.A.disable(), this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        if ((this.processSessionChanges(), 0 === this.gameSessions.size)) {
            this.heartbeatInterval.stop(), m.A.disable();
            return;
        }
        m.A.enable(),
            this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(A, this.logRunningGameHeartbeats);
    }
    handleRunningGamesChanged = (e) => {
        this.scheduleHeartbeatTracking();
    };
    logHeartbeat(e, t, n, r) {
        let s = e.runningGame,
            a = performance.now(),
            o = t ? 0 : Math.round(a - e.lastHeartbeatTime),
            _ = s.id ?? u.A.findGame(s)?.id;
        e.lastHeartbeatTime = a;
        let m = {
            game_id: _,
            game_name: s.name,
            game_distributor: s.distributor,
            game_distributor_game_id: s.sku,
            game_metadata: (0, l.MT)(s),
            game_executable: (0, f.Ic)(s.exePath),
            game_detection_enabled: (0, h.Xr)(s),
            initial_heartbeat: t,
            final_heartbeat: n,
            game_session_id: e.sessionId,
            duration_tracked_ms: o,
            rtc_connection_id: c.A.getRTCConnectionId(),
            media_session_id: c.A.getMediaSessionId(),
        };
        return p.A.getSnapshot(s.pid)
            .then((e) => {
                d.default.track(E.HAw.RUNNING_GAME_HEARTBEAT, { ...m, ...(e ?? {}), ...(r ?? {}) });
            })
            .catch((e) => {
                t || e instanceof i.Fh || g.warn(`Failed to get performance snapshot for game ${s.id}`, e.message),
                    d.default.track(E.HAw.RUNNING_GAME_HEARTBEAT, { ...m, ...(r ?? {}) });
            });
    }
    processSessionChanges() {
        let e = h.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            if (i.isLauncher) continue;
            let e = T(i);
            if ((n.add(e), this.gameSessions.has(e))) {
                let n = this.gameSessions.get(e);
                if (n.runningGame.pid !== i.pid) {
                    let s = n.runningGame.pid,
                        a = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                    this.gameSessions.set(e, a),
                        p.A.startMonitoringPid(i.pid),
                        this.logHeartbeat(n, !1, !0, null).finally(() => {
                            p.A.stopMonitoringPid(s);
                        }),
                        this.logHeartbeat(a, !0, !1, null);
                }
            } else {
                let n = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                this.gameSessions.set(e, n), p.A.startMonitoringPid(i.pid), this.logHeartbeat(n, !0, !1, null);
            }
        }
        for (let [e, t] of this.gameSessions)
            if (!n.has(e)) {
                this.gameSessions.delete(e);
                let n = t.runningGame.pid;
                this.logHeartbeat(t, !1, !0, null).finally(() => {
                    p.A.stopMonitoringPid(n);
                });
            }
    }
    logRunningGameHeartbeats = () => {
        let e = m.A.getSnapshot();
        for (let t of this.gameSessions.values()) this.logHeartbeat(t, !1, !1, e);
    };
}
let y = new S();
