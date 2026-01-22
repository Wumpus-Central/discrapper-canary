n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(835245),
    i = n(451988),
    a = n(439372),
    s = n(847521),
    o = n(760751),
    l = n(383501),
    c = n(954571),
    u = n(927813),
    d = n(973522),
    f = n(15285),
    p = n(652215);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = 5 * u.A.Millis.MINUTE;

function m(e) {
    return e.distributor === p.d3x.ROBLOX ? (0, s.hD)(e) : null;
}

function g(e) {
    var t;
    let n = null != e.name ? e.name : "",
        r = "".concat(null != (t = e.id) ? t : e.exePath, ":").concat(n),
        i = m(e);
    return null != i && (r += ":".concat(i)), r;
}
class E extends a.A {
    _terminate() {
        this.heartbeatInterval.stop();
    }
    handleLogout() {
        this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        (this.processSessionChanges(), 0 === this.gameSessions.size)
            ? this.heartbeatInterval.stop()
            : this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(h, this.logRunningGameHeartbeats);
    }
    logHeartbeat(e, t, n) {
        var r, i;
        let a = e.runningGame,
            u = performance.now(),
            _ = t ? 0 : Math.round(u - e.lastHeartbeatTime),
            h = null != (r = a.id) ? r : null == (i = o.A.getGameByName(a.name)) ? void 0 : i.id;
        c.default.track(p.HAw.RUNNING_GAME_HEARTBEAT, {
            game_id: h,
            game_name: a.name,
            game_distributor: a.distributor,
            game_distributor_game_id: a.sku,
            game_metadata: (0, s.MT)(a),
            game_executable: (0, d.Ic)(a.exePath),
            game_detection_enabled: (0, f.Xr)(a),
            initial_heartbeat: t,
            final_heartbeat: n,
            game_session_id: e.sessionId,
            duration_tracked_ms: _,
            rtc_connection_id: l.A.getRTCConnectionId(),
            media_session_id: l.A.getMediaSessionId(),
        }),
            (e.lastHeartbeatTime = u);
    }
    processSessionChanges() {
        let e = f.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            if (i.isLauncher) continue;
            let e = g(i);
            if ((n.add(e), !this.gameSessions.has(e))) {
                let n = {
                    sessionId: (0, r.A)(),
                    lastHeartbeatTime: t,
                    runningGame: i,
                };
                this.gameSessions.set(e, n), this.logHeartbeat(n, !0, !1);
            }
        }
        for (let [e, t] of this.gameSessions) n.has(e) || (this.logHeartbeat(t, !1, !0), this.gameSessions.delete(e));
    }
    constructor(...e) {
        super(...e),
            _(this, "heartbeatInterval", new i.IX()),
            _(this, "gameSessions", new Map()),
            _(this, "actions", {
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
                POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
                LOGOUT: () => this.handleLogout(),
            }),
            _(this, "handleRunningGamesChanged", (e) => {
                this.scheduleHeartbeatTracking();
            }),
            _(this, "logRunningGameHeartbeats", () => {
                for (let e of this.gameSessions.values()) this.logHeartbeat(e, !1, !1);
            });
    }
}
let b = new E();
