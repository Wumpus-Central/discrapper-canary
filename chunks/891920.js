i.r(t), i.d(t, { default: () => u });
var n = i(626584),
    a = i(719129),
    s = i(572009),
    r = i(287809),
    l = i(723702),
    o = i(19575);
let c = new n.A("SteamEventsManager"),
    m = { pollingIntervalMs: 1e4, enabled: !0 };
class d {
    config;
    pollingInterval = null;
    trackedProcesses = new Map();
    isInitialized = !1;
    timelineEventCallbacks = new Set();
    constructor(e = {}) {
        this.config = { ...m, ...e };
    }
    initialize() {
        if (this.isInitialized || !this.config.enabled || !(0, l.isWindows)()) return;
        let e = r.default.getCurrentUser();
        (0, s.I9)(e) && (c.info("Initializing Steam Events Manager"), this.startPolling(), (this.isInitialized = !0));
    }
    destroy() {
        this.isInitialized &&
            (c.info("Destroying Steam Game Events Manager"),
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
            let e = await a.r6();
            null != e && e > 0 ? this.handleSteamProcessDiscovered(e) : this.handleNoSteamProcessFound();
        } catch (e) {
            c.error("Error checking for Steam game events process", e);
        }
    }
    handleSteamProcessDiscovered(e) {
        this.trackedProcesses.has(e) ||
            (c.info("Steam game events process discovered", { pid: e }),
            this.trackedProcesses.set(e, Date.now()),
            this.watchSteamProcess(e));
    }
    handleNoSteamProcessFound() {
        this.trackedProcesses.size > 0 && (c.info("Steam game events process exited"), this.trackedProcesses.clear());
    }
    async watchSteamProcess(e) {
        try {
            let t = await a.GH(e);
            if (null != t) {
                c.warn("Steam game events watcher failed to attach", { pid: e, error: t }),
                    this.trackedProcesses.delete(e);
                return;
            }
            c.info("Steam game events watcher attached successfully", { pid: e }), this.setupGameEventsListener(e);
        } catch (t) {
            c.error("Steam game events watcher error", { pid: e, error: t }), this.trackedProcesses.delete(e);
        }
    }
    setupGameEventsListener(e) {
        let t = o.Ay.getDiscordUtils();
        null == t.startGameEvents
            ? c.warn("Steam game events native API not available")
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
            c.warn("Failed to parse Steam game event", { eventJson: e, error: t });
            return;
        }
        "string" != typeof t.type || "object" != typeof t.payload
            ? c.warn("Invalid Steam game event format", { steamGameEvent: t })
            : "steam_timeline" === t.type
              ? this.handleSteamTimeline(t.payload)
              : c.warn(`Unknown Steam game event type: ${t.type}`);
    }
    handleSteamTimeline(e) {
        for (let t of (c.info("Steam timeline event received", { timelineEntry: e }), this.timelineEventCallbacks))
            try {
                t(e);
            } catch (e) {
                c.warn("Steam timeline event callback failed", { error: e });
            }
    }
    handleHelloMessage(e) {
        c.info("Steam game events hello message received", e);
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
let h = new d();
var g = i(372684),
    v = i(717247);
let p = new n.A("SteamSignalHandler");
function u(e) {
    let t = !1,
        i = (i) => {
            if (!t) return;
            p.info("Steam timeline event arrived at handler", {
                gameId: i.gameId,
                gameIdType: typeof i.gameId,
                icon: i.icon,
                iconType: typeof i.icon,
                iconLength: i.icon?.length,
                title: i.title,
                isUserMarker: i.isUserMarker,
                timestamp: i.timestamp,
            });
            let n = 1 === i.isUserMarker,
                a = (function (e) {
                    if (e.gameId === v.VG) {
                        var t;
                        let i;
                        if ((0, v.MK)(e.icon)) return { match: v.Xb, eventName: e.icon };
                        let n =
                                e.icon === v.oe
                                    ? ((t = e.description),
                                      (i = Math.min(5, Math.max(t?.match(/,/g)?.length ?? 0, 1) + 2)),
                                      v.$c[i] ?? v.WX)
                                    : e.icon,
                            a = v.hz[n];
                        return null != a ? { match: a, eventName: n } : null;
                    }
                    return null;
                })(i);
            if (null == a && !n) {
                let e = i.gameId === v.VG ? "cs2" : i.gameId === v.o ? "dota2" : "unknown";
                p.info("Unrecognized Steam timeline event; ignoring", {
                    gameId: i.gameId,
                    knownGame: e,
                    icon: i.icon,
                    title: i.title,
                    reason:
                        "unknown" === e
                            ? "gameId not in CS2_APP_ID/DOTA_2_APP_ID"
                            : `icon "${i.icon}" not in ${e.toUpperCase()} icon table`,
                });
                return;
            }
            let s = a?.match.eventType ?? g.rb.UNCLASSIFIED,
                r = (function (e, t) {
                    if (1 === e.isUserMarker || t?.match.triggerClipCandidate) return 1;
                    switch (e.possibleClipPriority) {
                        case 3:
                            return 1;
                        case 2:
                            return 0.5;
                        default:
                            return 0;
                    }
                })(i, a),
                l = {
                    type: g.Gy.GAME_EVENT,
                    eventType: s,
                    title: i.title,
                    description: i.description,
                    eventIconTag: i.icon,
                    eventName: a?.eventName ?? i.icon,
                    score: a?.match.scoreBoost ?? +!!n,
                    importance: r,
                };
            p.info("Converting Steam timeline event to clip signal", {
                gameId: i.gameId?.toString(),
                icon: i.icon,
                eventName: l.eventName,
                eventType: s,
                scoreBoost: a?.match.scoreBoost,
                importance: r,
                isUserMarker: n,
                timestamp: i.timestamp,
            }),
                e(l, i.timestamp);
        };
    return {
        start() {
            t || ((0, l.isWindows)() && ((t = !0), h.initialize(), h.addTimelineEventCallback(i)));
        },
        stop() {
            t && (p.info("Stopping Steam signal handler"), (t = !1), h.removeTimelineEventCallback(i));
        },
        getState() {
            let e = (0, l.isWindows)();
            return { isActive: t, processesTracked: h.getTrackedProcesses().length, isAvailableForUser: e };
        },
    };
}
