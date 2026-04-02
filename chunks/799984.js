i.d(t, { A: () => m });
var s = i(719129),
    a = i(626584),
    n = i(572009),
    r = i(287809),
    l = i(723702),
    c = i(837921);
let o = new a.A("SteamEventsManager"),
    d = { pollingIntervalMs: 1e4, enabled: !0 };
class h {
    config;
    pollingInterval = null;
    trackedProcesses = new Map();
    isInitialized = !1;
    timelineEventCallbacks = new Set();
    constructor(e = {}) {
        this.config = { ...d, ...e };
    }
    initialize() {
        if (this.isInitialized || !this.config.enabled || !(0, l.isWindows)()) return;
        let e = r.default.getCurrentUser();
        (0, n.I9)(e) && (o.info("Initializing Steam Events Manager"), this.startPolling(), (this.isInitialized = !0));
    }
    destroy() {
        this.isInitialized &&
            (o.info("Destroying Steam Game Events Manager"),
            this.stopPolling(),
            this.trackedProcesses.clear(),
            (this.isInitialized = !1));
    }
    startPolling() {
        null == this.pollingInterval &&
            (this.checkForSteamProcess(),
            (this.pollingInterval = setInterval(() => {
                this.checkForSteamProcess();
            }, this.config.pollingIntervalMs)));
    }
    stopPolling() {
        null != this.pollingInterval && (clearInterval(this.pollingInterval), (this.pollingInterval = null));
    }
    async checkForSteamProcess() {
        try {
            let e = await s.r6();
            null != e && e > 0 ? this.handleSteamProcessDiscovered(e) : this.handleNoSteamProcessFound();
        } catch (e) {
            o.error("Error checking for Steam game events process", e);
        }
    }
    handleSteamProcessDiscovered(e) {
        this.trackedProcesses.has(e) ||
            (o.info("Steam game events process discovered", { pid: e }),
            this.trackedProcesses.set(e, Date.now()),
            this.watchSteamProcess(e));
    }
    handleNoSteamProcessFound() {
        this.trackedProcesses.size > 0 && (o.info("Steam game events process exited"), this.trackedProcesses.clear());
    }
    async watchSteamProcess(e) {
        try {
            let t = await s.GH(e);
            if (null != t) {
                o.warn("Steam game events watcher failed to attach", { pid: e, error: t }),
                    this.trackedProcesses.delete(e);
                return;
            }
            o.info("Steam game events watcher attached successfully", { pid: e }), this.setupGameEventsListener(e);
        } catch (t) {
            o.error("Steam game events watcher error", { pid: e, error: t }), this.trackedProcesses.delete(e);
        }
    }
    setupGameEventsListener(e) {
        let t = c.Ay.getDiscordUtils();
        null == t.startGameEvents
            ? o.warn("Steam game events native API not available")
            : t.startGameEvents(
                  e,
                  (e) => this.handleGameEvent(e),
                  (e) => this.handleHelloMessage(e),
              );
    }
    handleGameEvent(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (t) {
            o.warn("Failed to parse Steam game event", { eventJson: e, error: t });
            return;
        }
        "string" != typeof t.type || "object" != typeof t.payload
            ? o.warn("Invalid Steam game event format", { steamGameEvent: t })
            : "steam_timeline" === t.type
              ? this.handleSteamTimeline(t.payload)
              : o.warn(`Unknown Steam game event type: ${t.type}`);
    }
    handleSteamTimeline(e) {
        for (let t of (o.info("Steam timeline event received", { timelineEntry: e }), this.timelineEventCallbacks))
            try {
                t(e);
            } catch (e) {
                o.warn("Steam timeline event callback failed", { error: e });
            }
    }
    handleHelloMessage(e) {
        o.info("Steam game events hello message received", e);
    }
    getTrackedProcesses() {
        return Array.from(this.trackedProcesses).map((e) => {
            let [t, i] = e;
            return { pid: t, discovered: i };
        });
    }
    isTrackingProcess(e) {
        return this.trackedProcesses.has(e);
    }
    updateConfig(e) {
        let t = this.config.enabled;
        (this.config = { ...this.config, ...e }),
            !t && this.config.enabled ? this.initialize() : t && !this.config.enabled && this.destroy();
    }
    addTimelineEventCallback(e) {
        this.timelineEventCallbacks.add(e);
    }
    removeTimelineEventCallback(e) {
        this.timelineEventCallbacks.delete(e);
    }
}
let m = h;
