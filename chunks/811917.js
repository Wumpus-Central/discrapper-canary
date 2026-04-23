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
    h = n(531685),
    E = n(954571),
    m = n(927813),
    g = n(973522),
    A = n(670632),
    I = n(15285),
    T = n(932492),
    S = n(652215);
let y = new o.A("RunningGameHeartbeatManager"),
    N = 5 * m.A.Millis.MINUTE;
function v() {
    let e = h.A.isFocused(),
        t = h.A.isVisible();
    return e ? "focused" : t ? "visible" : "hidden";
}
class C extends a.A {
    heartbeatInterval = new s.IX();
    gameSessions = new Map();
    windowStateDurations = { focused: 0, visible: 0, hidden: 0 };
    windowStateTrackingState = "hidden";
    windowStateLastChangeTime = 0;
    windowTrackingEnabled = !1;
    actions = {
        LOGOUT: () => this.handleLogout(),
        POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
        SYSTEM_SERVICE_INITIALIZE: (e) => this.handleSystemServiceInitialize(e),
        WINDOW_FOCUS: () => this.handleWindowStateChange(),
        WINDOW_VISIBILITY_CHANGE: () => this.handleWindowStateChange(),
    };
    handleSystemServiceInitialize(e) {
        let { status: t, modules: n } = e;
        n.includes("tool-service") && ("running" === t.state ? A.A.enable() : A.A.reset());
    }
    _terminate() {
        this.heartbeatInterval.stop(), A.A.disable(), T.A.disable(), this.disableWindowTracking();
    }
    handleLogout() {
        A.A.disable(),
            T.A.disable(),
            this.disableWindowTracking(),
            this.gameSessions.clear(),
            this.heartbeatInterval.stop();
    }
    enableWindowTracking() {
        this.windowTrackingEnabled ||
            ((this.windowTrackingEnabled = !0),
            (this.windowStateDurations = { focused: 0, visible: 0, hidden: 0 }),
            (this.windowStateTrackingState = v()),
            (this.windowStateLastChangeTime = performance.now()));
    }
    disableWindowTracking() {
        this.windowTrackingEnabled = !1;
    }
    handleWindowStateChange() {
        if (!this.windowTrackingEnabled) return;
        let e = performance.now();
        (this.windowStateDurations[this.windowStateTrackingState] += e - this.windowStateLastChangeTime),
            (this.windowStateLastChangeTime = e),
            (this.windowStateTrackingState = v());
    }
    getWindowStateDurationsSnapshot() {
        let e = performance.now();
        (this.windowStateDurations[this.windowStateTrackingState] += e - this.windowStateLastChangeTime),
            (this.windowStateLastChangeTime = e);
        let t = {
            discord_window_focused_duration_ms: Math.round(this.windowStateDurations.focused),
            discord_window_visible_duration_ms: Math.round(this.windowStateDurations.visible),
            discord_window_hidden_duration_ms: Math.round(this.windowStateDurations.hidden),
        };
        return (this.windowStateDurations = { focused: 0, visible: 0, hidden: 0 }), t;
    }
    peekWindowStateDurations() {
        let e = performance.now() - this.windowStateLastChangeTime;
        return {
            discord_window_focused_duration_ms: Math.round(
                this.windowStateDurations.focused + ("focused" === this.windowStateTrackingState ? e : 0),
            ),
            discord_window_visible_duration_ms: Math.round(
                this.windowStateDurations.visible + ("visible" === this.windowStateTrackingState ? e : 0),
            ),
            discord_window_hidden_duration_ms: Math.round(
                this.windowStateDurations.hidden + ("hidden" === this.windowStateTrackingState ? e : 0),
            ),
        };
    }
    scheduleHeartbeatTracking() {
        if ((this.processSessionChanges(), 0 === this.gameSessions.size)) {
            this.heartbeatInterval.stop(), T.A.disable(), this.disableWindowTracking();
            return;
        }
        T.A.enable(),
            this.enableWindowTracking(),
            this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(N, this.logRunningGameHeartbeats);
    }
    handleRunningGamesChanged = (e) => {
        this.scheduleHeartbeatTracking();
    };
    logHeartbeat(e, t, n, r, s) {
        let a = e.runningGame,
            o = performance.now(),
            h = t ? 0 : Math.round(o - e.lastHeartbeatTime),
            m = a.id ?? f.A.findGame(a)?.id;
        e.lastHeartbeatTime = o;
        let T = {
                game_id: m,
                game_name: a.name,
                game_distributor: a.distributor,
                game_distributor_game_id: a.sku,
                game_metadata: (0, _.MT)(a),
                game_executable: (0, g.Ic)(a.exePath),
                game_detection_enabled: (0, I.Xr)(a),
                initial_heartbeat: t,
                final_heartbeat: n,
                game_session_id: e.sessionId,
                duration_tracked_ms: h,
                rtc_connection_id: p.A.getRTCConnectionId(),
                media_session_id: p.A.getMediaSessionId(),
            },
            N = (function (e) {
                if (!l.O) return null;
                let t = c.default.getTrackedGameByPid(e);
                return {
                    overlay_state: t?.state ?? null,
                    overlay_method: null != t ? u.Ue[t.overlayMethod] : null,
                    overlay_version: d.A.getNativeModule()?.version() ?? 0,
                };
            })(a.pid),
            C = { discord_window_state: v() };
        return A.A.getSnapshot(a.pid)
            .then((e) => {
                E.default.track(S.HAw.RUNNING_GAME_HEARTBEAT, {
                    ...T,
                    ...C,
                    ...(s ?? {}),
                    ...(e ?? {}),
                    ...(r ?? {}),
                    ...(N ?? {}),
                });
            })
            .catch((e) => {
                t || e instanceof i.Fh || y.warn(`Failed to get performance snapshot for game ${a.id}`, e.message),
                    E.default.track(S.HAw.RUNNING_GAME_HEARTBEAT, {
                        ...T,
                        ...C,
                        ...(s ?? {}),
                        ...(r ?? {}),
                        ...(N ?? {}),
                    });
            });
    }
    processSessionChanges() {
        let e = I.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set(),
            i = this.windowTrackingEnabled ? this.peekWindowStateDurations() : null;
        for (let s of e) {
            if (s.isLauncher) continue;
            let e = (function (e) {
                let t = null != e.name ? e.name : "",
                    n = `${e.id ?? e.exePath}:${t}`,
                    r = e.distributor === S.d3x.ROBLOX ? (0, _.hD)(e) : null;
                return null != r && (n += `:${r}`), n;
            })(s);
            if ((n.add(e), this.gameSessions.has(e))) {
                let n = this.gameSessions.get(e);
                if (n.runningGame.pid !== s.pid) {
                    let a = n.runningGame.pid,
                        o = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: s };
                    this.gameSessions.set(e, o),
                        A.A.startMonitoringPid(s.pid),
                        this.logHeartbeat(n, !1, !0, null, i).finally(() => {
                            A.A.stopMonitoringPid(a);
                        }),
                        this.logHeartbeat(o, !0, !1, null, null);
                }
            } else {
                let n = { sessionId: (0, r.A)(), lastHeartbeatTime: t, runningGame: s };
                this.gameSessions.set(e, n), A.A.startMonitoringPid(s.pid), this.logHeartbeat(n, !0, !1, null, null);
            }
        }
        for (let [e, t] of this.gameSessions)
            if (!n.has(e)) {
                this.gameSessions.delete(e);
                let n = t.runningGame.pid;
                this.logHeartbeat(t, !1, !0, null, i).finally(() => {
                    A.A.stopMonitoringPid(n);
                });
            }
    }
    logRunningGameHeartbeats = () => {
        let e = T.A.getSnapshot(),
            t = this.getWindowStateDurationsSnapshot();
        for (let n of this.gameSessions.values()) this.logHeartbeat(n, !1, !1, e, t);
    };
}
let O = new C();
