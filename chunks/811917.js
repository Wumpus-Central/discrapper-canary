"use strict";
n.d(t, { A: () => E });
var r = n(835245),
    i = n(451988),
    a = n(439372),
    s = n(847521),
    o = n(760751),
    l = n(383501),
    u = n(954571),
    c = n(927813),
    d = n(973522),
    _ = n(15285),
    f = n(652215);
let p = 5 * c.A.Millis.MINUTE;
function h(e) {
    return e.distributor === f.d3x.ROBLOX ? (0, s.hD)(e) : null;
}
function m(e) {
    let t = null != e.name ? e.name : "",
        n = `${e.id ?? e.exePath}:${t}`,
        r = h(e);
    return null != r && (n += `:${r}`), n;
}
class g extends a.A {
    heartbeatInterval = new i.IX();
    gameSessions = new Map();
    actions = {
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
        POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
        LOGOUT: () => this.handleLogout(),
    };
    _terminate() {
        this.heartbeatInterval.stop();
    }
    handleLogout() {
        this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        (this.processSessionChanges(), 0 === this.gameSessions.size)
            ? this.heartbeatInterval.stop()
            : this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(p, this.logRunningGameHeartbeats);
    }
    handleRunningGamesChanged = (e) => {
        this.scheduleHeartbeatTracking();
    };
    logHeartbeat(e, t, n) {
        let r = e.runningGame,
            i = performance.now(),
            a = t ? 0 : Math.round(i - e.lastHeartbeatTime),
            c = r.id ?? o.A.getGameByName(r.name)?.id;
        u.default.track(f.HAw.RUNNING_GAME_HEARTBEAT, {
            game_id: c,
            game_name: r.name,
            game_distributor: r.distributor,
            game_distributor_game_id: r.sku,
            game_metadata: (0, s.MT)(r),
            game_executable: (0, d.Ic)(r.exePath),
            game_detection_enabled: (0, _.Xr)(r),
            initial_heartbeat: t,
            final_heartbeat: n,
            game_session_id: e.sessionId,
            duration_tracked_ms: a,
            rtc_connection_id: l.A.getRTCConnectionId(),
            media_session_id: l.A.getMediaSessionId(),
        }),
            (e.lastHeartbeatTime = i);
    }
    processSessionChanges() {
        let e = _.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            if (i.isLauncher) continue;
            let e = m(i);
            if ((n.add(e), !this.gameSessions.has(e))) {
                let n = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: i };
                this.gameSessions.set(e, n), this.logHeartbeat(n, !0, !1);
            }
        }
        for (let [e, t] of this.gameSessions) n.has(e) || (this.logHeartbeat(t, !1, !0), this.gameSessions.delete(e));
    }
    logRunningGameHeartbeats = () => {
        for (let e of this.gameSessions.values()) this.logHeartbeat(e, !1, !1);
    };
}
let E = new g();
