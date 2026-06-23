n.r(t), n.d(t, { default: () => u });
var i = n(626584),
    a = n(719129),
    s = n(572009),
    r = n(287809),
    l = n(723702),
    o = n(19575);
let c = new i.A("SteamEventsManager"),
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
            let [t, n] = e;
            return { pid: t, discovered: n };
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
var g = n(372684),
    v = n(717247);
let p = new i.A("SteamSignalHandler");
function u(e) {
    let t = !1;
    function n(n) {
        if (!t) return;
        p.info("Steam timeline event arrived at handler", {
            gameId: n.gameId,
            gameIdType: typeof n.gameId,
            icon: n.icon,
            iconType: typeof n.icon,
            iconLength: n.icon?.length,
            title: n.title,
            isUserMarker: n.isUserMarker,
            timestamp: n.timestamp,
        });
        let i = 1 === n.isUserMarker,
            a = (function (e) {
                if (e.gameId === v.VG) {
                    var t;
                    let n;
                    if ((0, v.MK)(e.icon)) return { match: v.Xb, eventName: e.icon };
                    let i =
                            e.icon === v.oe
                                ? ((t = e.description),
                                  (n = Math.min(5, Math.max(t?.match(/,/g)?.length ?? 0, 1) + 2)),
                                  v.$c[n] ?? v.WX)
                                : e.icon,
                        a = v.hz[i];
                    return null != a ? { match: a, eventName: i } : null;
                }
                return null;
            })(n);
        if (null == a && !i) {
            let e = n.gameId === v.VG ? "cs2" : n.gameId === v.o ? "dota2" : "unknown";
            p.info("Unrecognized Steam timeline event; ignoring", {
                gameId: n.gameId,
                knownGame: e,
                icon: n.icon,
                title: n.title,
                reason:
                    "unknown" === e
                        ? "gameId not in CS2_APP_ID/DOTA_2_APP_ID"
                        : `icon "${n.icon}" not in ${e.toUpperCase()} icon table`,
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
            })(n, a),
            l = {
                type: g.Gy.GAME_EVENT,
                eventType: s,
                title: n.title,
                description: n.description,
                eventIconTag: n.icon,
                eventName: a?.eventName ?? n.icon,
                score: a?.match.scoreBoost ?? +!!i,
                importance: r,
            };
        p.info("Converting Steam timeline event to clip signal", {
            gameId: n.gameId?.toString(),
            icon: n.icon,
            eventName: l.eventName,
            eventType: s,
            scoreBoost: a?.match.scoreBoost,
            importance: r,
            isUserMarker: i,
            timestamp: n.timestamp,
        }),
            e(l, n.timestamp);
    }
    return {
        start() {
            t || ((0, l.isWindows)() && ((t = !0), h.initialize(), h.addTimelineEventCallback(n)));
        },
        stop() {
            t && (p.info("Stopping Steam signal handler"), (t = !1), h.removeTimelineEventCallback(n));
        },
        getState() {
            let e = (0, l.isWindows)();
            return { isActive: t, processesTracked: h.getTrackedProcesses().length, isAvailableForUser: e };
        },
    };
}
