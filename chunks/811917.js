"use strict";
n.d(t, { A: () => S });
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
    m = n(652215);
let E = new o.A("RunningGameHeartbeatManager"),
    g = 5 * _.A.Millis.MINUTE;
function A(e) {
    return e.distributor === m.d3x.ROBLOX ? (0, l.hD)(e) : null;
}
function I(e) {
    let t = null != e.name ? e.name : "",
        n = `${e.id ?? e.exePath}:${t}`,
        r = A(e);
    return null != r && (n += `:${r}`), n;
}
class T extends a.A {
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
        this.heartbeatInterval.stop(), p.A.disable();
    }
    handleLogout() {
        p.A.disable(), this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        (this.processSessionChanges(), 0 === this.gameSessions.size)
            ? this.heartbeatInterval.stop()
            : this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(g, this.logRunningGameHeartbeats);
    }
    handleRunningGamesChanged = (e) => {
        this.scheduleHeartbeatTracking();
    };
    logHeartbeat(e, t, n) {
        let r = e.runningGame,
            s = performance.now(),
            a = t ? 0 : Math.round(s - e.lastHeartbeatTime),
            o = r.id ?? u.A.findGame(r)?.id;
        e.lastHeartbeatTime = s;
        let _ = {
            game_id: o,
            game_name: r.name,
            game_distributor: r.distributor,
            game_distributor_game_id: r.sku,
            game_metadata: (0, l.MT)(r),
            game_executable: (0, f.Ic)(r.exePath),
            game_detection_enabled: (0, h.Xr)(r),
            initial_heartbeat: t,
            final_heartbeat: n,
            game_session_id: e.sessionId,
            duration_tracked_ms: a,
            rtc_connection_id: c.A.getRTCConnectionId(),
            media_session_id: c.A.getMediaSessionId(),
        };
        return p.A.getSnapshot(r.pid)
            .then((e) => {
                d.default.track(m.HAw.RUNNING_GAME_HEARTBEAT, { ..._, ...(e ?? {}) });
            })
            .catch((e) => {
                t || e instanceof i.Fh || E.warn(`Failed to get performance snapshot for game ${r.id}`, e.message),
                    d.default.track(m.HAw.RUNNING_GAME_HEARTBEAT, _);
            });
    }
    processSessionChanges() {
        let e = h.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            if (i.isLauncher) continue;
            let e = I(i);
            if ((n.add(e), this.gameSessions.has(e))) {
                let n = this.gameSessions.get(e);
                if (n.runningGame.pid !== i.pid) {
                    let s = n.runningGame.pid,
                        a = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                    this.gameSessions.set(e, a),
                        p.A.startMonitoringPid(i.pid),
                        this.logHeartbeat(n, !1, !0).finally(() => {
                            p.A.stopMonitoringPid(s);
                        }),
                        this.logHeartbeat(a, !0, !1);
                }
            } else {
                let n = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                this.gameSessions.set(e, n), p.A.startMonitoringPid(i.pid), this.logHeartbeat(n, !0, !1);
            }
        }
        for (let [e, t] of this.gameSessions)
            if (!n.has(e)) {
                this.gameSessions.delete(e);
                let n = t.runningGame.pid;
                this.logHeartbeat(t, !1, !0).finally(() => {
                    p.A.stopMonitoringPid(n);
                });
            }
    }
    logRunningGameHeartbeats = () => {
        for (let e of this.gameSessions.values()) this.logHeartbeat(e, !1, !1);
    };
}
let S = new T();
