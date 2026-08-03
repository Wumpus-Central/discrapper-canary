i.r(t), i.d(t, { default: () => h }), i(321073);
var l = i(19575),
    n = i(696016),
    r = i(801344),
    a = i(375708);
async function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await l.Ay.fetchRiotGamesLiveClientData(e, t);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error(`HTTP ${i.status}: ${i.body}`);
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = r.j3[e],
        l = t.triggerOverride ?? i.triggerClipCandidate;
    return {
        type: n.Gy.GAME_EVENT,
        eventType: i.eventType,
        eventName: e,
        score: t.scoreOverride ?? i.scoreBoost,
        importance: +!!l,
        title: t.title,
        description: t.description,
        hiddenFromTimeline: t.hiddenFromTimeline,
    };
}
class m {
    activePlayerRiotId = null;
    activePlayerName = null;
    nextEventId = 0;
    eventWindow = [];
    EVENT_WINDOW_SIZE = 100;
    previousPlayerState = null;
    gameTime = 0;
    isFirstPoll = !0;
    isInGame = !1;
    isDead = !1;
    currentHealthFraction = 1;
    consecutiveFailures = 0;
    emitSignal;
    constructor(e) {
        this.emitSignal = e;
    }
    async poll() {
        let e = await this.fetchActivePlayerData();
        return (
            null == e
                ? (this.isInGame && (await this.pollEvents()), this.handlePollFailure())
                : (this.handleInGame(e), await this.pollPlayerState(e), await this.pollEvents()),
            !0
        );
    }
    async fetchActivePlayerData() {
        try {
            let e = await s("activeplayer");
            if (null == e.riotId) return null;
            return e;
        } catch (e) {
            return null;
        }
    }
    handleInGame(e) {
        (this.consecutiveFailures = 0),
            null == this.activePlayerRiotId &&
                ((this.activePlayerRiotId = e.riotId ?? null), (this.activePlayerName = e.riotIdGameName ?? "")),
            this.isInGame ||
                ((this.isInGame = !0),
                n.nx.info(
                    `[LoL] connected to Live Client API \u{2014} game started (player=${this.activePlayerName ?? "?"})`,
                ),
                this.emitLifecycleEvent(r.rS, a.intl.string(a.t["94Kji7"]), a.intl.string(a.t.fyCsox))),
            (this.currentHealthFraction = (function (e) {
                let { currentHealth: t, maxHealth: i } = e.championStats;
                return i <= 0 ? 1 : Math.max(0, Math.min(1, t / i));
            })(e));
    }
    handlePollFailure() {
        this.isInGame &&
            ((this.consecutiveFailures += 1),
            n.nx.info(`[LoL] active-player poll failed (${this.consecutiveFailures}/10)`),
            this.consecutiveFailures >= 10 &&
                (n.nx.info("[LoL] game ended (no API response)"),
                this.emitLifecycleEvent(r.oy, a.intl.string(a.t.hlOYoA), a.intl.string(a.t.NxavgD)),
                this.resetGameState()));
    }
    async pollPlayerState(e) {
        let t;
        if (null == this.activePlayerRiotId) return;
        try {
            t = await s("playerlist");
        } catch (e) {
            return;
        }
        if (!Array.isArray(t)) return;
        let i = t.find((e) => e.riotId === this.activePlayerRiotId || e.riotIdGameName === this.activePlayerName);
        if (null == i) return;
        this.updateDeadState(i.isDead);
        let l = new Map();
        for (let e of i.items) l.set(e.itemID, e);
        let n = { level: e.level ?? 1, currentGold: e.currentGold ?? 0, items: l };
        (this.gameTime += 1),
            null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, n),
            (this.previousPlayerState = n);
    }
    updateDeadState(e) {
        e !== this.isDead &&
            ((this.isDead = e),
            e || this.emitLifecycleEvent(r.Ou, a.intl.string(a.t.ebbBDl), a.intl.string(a.t.CCiFY7)));
    }
    emitLifecycleEvent(e, t, i) {
        n.nx.info(`[LoL] lifecycle marker: ${e}`),
            this.emitSignal({
                type: n.Gy.GAME_EVENT,
                eventType: n.rb.UNCLASSIFIED,
                eventName: e,
                title: t,
                description: i,
                score: 0,
                importance: 0,
            });
    }
    async pollEvents() {
        try {
            let e = await s("eventdata", { eventID: this.nextEventId });
            if (e.Events?.length > 0) {
                if (
                    (n.nx.info(`[LoL] eventdata received: ${e.Events.map((e) => e.EventName).join(", ")}`),
                    this.isFirstPoll)
                )
                    n.nx.info(`[LoL] first poll \u{2014} skipping ${e.Events.length} historical events`),
                        (this.isFirstPoll = !1);
                else
                    for (let t of e.Events) {
                        let e;
                        if ("ChampionKill" === t.EventName) {
                            let i = (t.KillerName ?? "") === this.activePlayerName,
                                l = (t.Assisters ?? []).some((e) => e === this.activePlayerName);
                            e = {
                                type: "ChampionKill",
                                timestamp: this.gameTime,
                                killerName: t.KillerName,
                                victimName: t.VictimName,
                                playerIsKiller: i,
                                playerIsAssister: l,
                                victimIsActivePlayer: t.VictimName === this.activePlayerName,
                            };
                        } else if ("Multikill" === t.EventName)
                            e = {
                                type: "Multikill",
                                timestamp: this.gameTime,
                                killStreak: t.KillStreak || 1,
                                killerName: t.KillerName ?? "",
                                killerIsActivePlayer: t.KillerName === this.activePlayerName,
                            };
                        else if ("TurretKilled" === t.EventName) {
                            let i = (t.KillerName ?? "") === this.activePlayerName,
                                l = (t.Assisters ?? []).some((e) => e === this.activePlayerName);
                            e = { type: "TurretKill", timestamp: this.gameTime, playerHelpedKill: i || l };
                        } else if ("InhibKilled" === t.EventName) {
                            let i = (t.KillerName ?? "") === this.activePlayerName,
                                l = (t.Assisters ?? []).some((e) => e === this.activePlayerName);
                            e = { type: "InhibitorKill", timestamp: this.gameTime, playerHelpedKill: i || l };
                        } else if ("DragonKill" === t.EventName) {
                            let i = (t.KillerName ?? "") === this.activePlayerName,
                                l = (t.Assisters ?? []).some((e) => e === this.activePlayerName);
                            e = {
                                type: "DragonKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: i || l,
                                killerName: t.KillerName ?? "",
                                drakeName: t.DragonType,
                                stolen: (t.Stolen ?? "") === "True",
                            };
                        } else if ("BaronKill" === t.EventName) {
                            let i = (t.KillerName ?? "") === this.activePlayerName,
                                l = (t.Assisters ?? []).some((e) => e === this.activePlayerName);
                            e = {
                                type: "BaronKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: i || l,
                                stolen: (t.Stolen ?? "") === "True",
                                killerName: t.KillerName ?? "",
                            };
                        } else
                            "GameEnd" === t.EventName &&
                                (e = { type: "GameEnd", timestamp: this.gameTime, win: (t.Result ?? "") === "Win" });
                        null != e && this.addEventToWindow(e);
                    }
                let t = e.Events[e.Events.length - 1];
                this.nextEventId = t.EventID + 1;
            }
        } catch (e) {}
    }
    addEventToWindow(e) {
        this.eventWindow.push(e), this.eventWindow.length > this.EVENT_WINDOW_SIZE && this.eventWindow.shift();
        let t = (function (e) {
            switch (e.type) {
                case "ChampionKill":
                    if (e.playerIsKiller)
                        return o(r.WU, {
                            title: a.intl.string(a.t.ky6syM),
                            description: a.intl.formatToPlainString(a.t["2sxvfW"], { name: e.victimName }),
                        });
                    if (e.playerIsAssister)
                        return o(r.ve, {
                            title: a.intl.string(a.t["3CK6jo"]),
                            description: a.intl.formatToPlainString(a.t.NyJvKf, { name: e.victimName }),
                        });
                    if (e.victimIsActivePlayer)
                        return o(r.Wi, {
                            title: a.intl.string(a.t["C/WqTT"]),
                            description: a.intl.formatToPlainString(a.t["wZ/IFO"], { name: e.killerName }),
                        });
                    return null;
                case "Multikill":
                    if (e.killerIsActivePlayer) {
                        let t = Math.max(2, Math.min(5, e.killStreak)),
                            i = r.Br[t],
                            { title: l, description: n } = (() => {
                                switch (t) {
                                    case 2:
                                        return {
                                            title: a.intl.string(a.t["+K7bbR"]),
                                            description: a.intl.string(a.t["+zq0aZ"]),
                                        };
                                    case 3:
                                        return {
                                            title: a.intl.string(a.t.fzI1wr),
                                            description: a.intl.string(a.t.brXPUX),
                                        };
                                    case 4:
                                        return {
                                            title: a.intl.string(a.t.ntn0Eu),
                                            description: a.intl.string(a.t.GcWpwl),
                                        };
                                    case 5:
                                        return {
                                            title: a.intl.string(a.t.JMxzCr),
                                            description: a.intl.string(a.t["9yXGOS"]),
                                        };
                                    default:
                                        return { title: void 0, description: void 0 };
                                }
                            })();
                        return o(i, { title: l, description: n });
                    }
                    return null;
                case "LevelUp":
                    return o(r.Ur, {
                        title: a.intl.string(a.t["cp+kpc"]),
                        description: a.intl.formatToPlainString(a.t["le5/P1"], { level: e.newLevel }),
                    });
                case "ItemPurchase":
                    return o(r.Zv, {
                        title: a.intl.string(a.t["89CDAj"]),
                        description: a.intl.formatToPlainString(a.t.cpRNkD, { itemName: e.itemName }),
                        hiddenFromTimeline: !0,
                    });
                case "TurretKill":
                    if (e.playerHelpedKill)
                        return o(r.Nv, { title: a.intl.string(a.t["SoivN/"]), description: a.intl.string(a.t.eZ1OSn) });
                    return null;
                case "InhibitorKill":
                    if (e.playerHelpedKill)
                        return o(r.fH, { title: a.intl.string(a.t["0Ttct6"]), description: a.intl.string(a.t.Pewjjq) });
                    return null;
                case "DragonKill":
                    if (e.playerHelpedKill) {
                        if (e.stolen)
                            return o(r.d4, {
                                title: a.intl.formatToPlainString(a.t.DUQK8U, { drakeName: e.drakeName }),
                                description: a.intl.formatToPlainString(a.t["8qsedd"], { killerName: e.killerName }),
                            });
                        return o(r.Cq, {
                            title: a.intl.formatToPlainString(a.t["AjNN1/"], { drakeName: e.drakeName }),
                            description: a.intl.formatToPlainString(a.t.HlopAO, { killerName: e.killerName }),
                        });
                    }
                    return null;
                case "BaronKill":
                    if (e.playerHelpedKill) {
                        if (e.stolen)
                            return o(r.oB, {
                                title: a.intl.string(a.t["+WhzbK"]),
                                description: a.intl.formatToPlainString(a.t.FUBbYu, { killerName: e.killerName }),
                            });
                        return o(r.zy, {
                            title: a.intl.string(a.t.KohKss),
                            description: a.intl.formatToPlainString(a.t["4yYLUi"], { killerName: e.killerName }),
                        });
                    }
                    return null;
                case "GameEnd":
                    if (e.win)
                        return o(r.aP, { title: a.intl.string(a.t.vS7yZW), description: a.intl.string(a.t.qkARs9) });
                    return o(r.j7, { title: a.intl.string(a.t["+sdglm"]), description: a.intl.string(a.t.xdsqBt) });
                default:
                    return null;
            }
        })(e);
        null != t &&
            (t.type === n.Gy.GAME_EVENT &&
                (t.eventName === r.WU && (t.additionalData = { [r.kt]: this.currentHealthFraction }),
                n.nx.info(`[LoL] emit event: ${t.eventName} score=${t.score?.toFixed(2)} importance=${t.importance}`)),
            this.emitSignal(t));
    }
    detectStateChanges(e, t) {
        if (t.level > e.level) {
            let e = { type: "LevelUp", timestamp: this.gameTime, newLevel: t.level };
            this.addEventToWindow(e);
        }
        if (t.currentGold < e.currentGold) {
            for (let [, i] of t.items)
                if (null == e.items.get(i.itemID)) {
                    let e = {
                        type: "ItemPurchase",
                        timestamp: this.gameTime,
                        itemId: i.itemID,
                        itemName: i.displayName,
                        itemCount: i.count,
                    };
                    this.addEventToWindow(e);
                }
        }
    }
    resetGameState() {
        (this.activePlayerRiotId = null),
            (this.activePlayerName = null),
            (this.nextEventId = 0),
            (this.eventWindow = []),
            (this.previousPlayerState = null),
            (this.gameTime = 0),
            (this.isFirstPoll = !0),
            (this.isInGame = !1),
            (this.isDead = !1),
            (this.currentHealthFraction = 1),
            (this.consecutiveFailures = 0);
    }
    reset() {
        this.resetGameState();
    }
    getEventWindow() {
        return this.eventWindow;
    }
}
i(876474);
class c {
    pollIntervalId = null;
    isPolling = !1;
    eventPoller;
    constructor(e) {
        this.eventPoller = new m(e);
    }
    start() {
        this.isPolling ||
            ((this.isPolling = !0),
            (this.pollIntervalId = setInterval(() => {
                this.poll();
            }, 1e3)));
    }
    stop() {
        this.isPolling &&
            ((this.isPolling = !1),
            null != this.pollIntervalId && (clearInterval(this.pollIntervalId), (this.pollIntervalId = null)),
            this.eventPoller.reset());
    }
    getState() {
        return { isPolling: this.isPolling };
    }
    async poll() {
        await this.eventPoller.poll();
    }
}
let h = (e) => new c(e);
