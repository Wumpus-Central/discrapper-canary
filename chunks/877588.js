i.r(t), i.d(t, { default: () => v }), i(321073);
var l = i(19575),
    a = i(372684),
    r = i(696016),
    n = i(801344),
    s = i(375708);
async function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await l.Ay.fetchRiotGamesLiveClientData(e, t);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error(`HTTP ${i.status}: ${i.body}`);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = n.j3[e],
        l = t.triggerOverride ?? i.triggerClipCandidate;
    return {
        type: a.Gy.GAME_EVENT,
        eventType: i.eventType,
        eventName: e,
        score: t.scoreOverride ?? i.scoreBoost,
        importance: +!!l,
        title: t.title,
        description: t.description,
    };
}
class c {
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
            let e = await o("activeplayer");
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
                r.nx.info(
                    `[LoL] connected to Live Client API \u{2014} game started (player=${this.activePlayerName ?? "?"})`,
                ),
                this.emitLifecycleEvent(n.rS)),
            (this.currentHealthFraction = (function (e) {
                let { currentHealth: t, maxHealth: i } = e.championStats;
                return i <= 0 ? 1 : Math.max(0, Math.min(1, t / i));
            })(e));
    }
    handlePollFailure() {
        this.isInGame &&
            ((this.consecutiveFailures += 1),
            r.nx.info(`[LoL] active-player poll failed (${this.consecutiveFailures}/10)`),
            this.consecutiveFailures >= 10 &&
                (r.nx.info("[LoL] game ended (no API response)"),
                this.emitLifecycleEvent(n.oy),
                this.resetGameState()));
    }
    async pollPlayerState(e) {
        let t;
        if (null == this.activePlayerRiotId) return;
        try {
            t = await o("playerlist");
        } catch (e) {
            return;
        }
        if (!Array.isArray(t)) return;
        let i = t.find((e) => e.riotId === this.activePlayerRiotId || e.riotIdGameName === this.activePlayerName);
        if (null == i) return;
        this.updateDeadState(i.isDead);
        let l = new Map();
        for (let e of i.items) l.set(e.itemID, e);
        let a = { level: e.level ?? 1, currentGold: e.currentGold ?? 0, items: l };
        (this.gameTime += 1),
            null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, a),
            (this.previousPlayerState = a);
    }
    updateDeadState(e) {
        e !== this.isDead && ((this.isDead = e), this.emitLifecycleEvent(e ? n.mJ : n.Ou));
    }
    emitLifecycleEvent(e) {
        r.nx.info(`[LoL] lifecycle marker: ${e}`),
            this.emitSignal({
                type: a.Gy.GAME_EVENT,
                eventType: a.rb.UNCLASSIFIED,
                eventName: e,
                score: 0,
                importance: 0,
            });
    }
    async pollEvents() {
        try {
            let e = await o("eventdata", { eventID: this.nextEventId });
            if (e.Events?.length > 0) {
                if (
                    (r.nx.info(`[LoL] eventdata received: ${e.Events.map((e) => e.EventName).join(", ")}`),
                    this.isFirstPoll)
                )
                    r.nx.info(`[LoL] first poll \u{2014} skipping ${e.Events.length} historical events`),
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
                        return m(n.WU, {
                            title: s.intl.string(s.t.ky6syM),
                            description: s.intl.formatToPlainString(s.t["2sxvfW"], { name: e.victimName }),
                        });
                    if (e.playerIsAssister)
                        return m(n.ve, {
                            title: s.intl.string(s.t.ky6syM),
                            description: s.intl.formatToPlainString(s.t.NyJvKf, { name: e.victimName }),
                        });
                    if (e.victimIsActivePlayer)
                        return m(n.Wi, {
                            title: s.intl.string(s.t.ky6syM),
                            description: s.intl.formatToPlainString(s.t["wZ/IFO"], { name: e.killerName }),
                        });
                    return null;
                case "Multikill":
                    if (e.killerIsActivePlayer) {
                        let t = Math.max(2, Math.min(5, e.killStreak)),
                            i = n.Br[t],
                            { title: l, description: a } = (() => {
                                switch (t) {
                                    case 2:
                                        return {
                                            title: s.intl.string(s.t["+K7bbR"]),
                                            description: s.intl.string(s.t["+zq0aZ"]),
                                        };
                                    case 3:
                                        return {
                                            title: s.intl.string(s.t.fzI1wr),
                                            description: s.intl.string(s.t.brXPUX),
                                        };
                                    case 4:
                                        return {
                                            title: s.intl.string(s.t.ntn0Eu),
                                            description: s.intl.string(s.t.GcWpwl),
                                        };
                                    case 5:
                                        return {
                                            title: s.intl.string(s.t.JMxzCr),
                                            description: s.intl.string(s.t["9yXGOS"]),
                                        };
                                    default:
                                        return { title: void 0, description: void 0 };
                                }
                            })();
                        return m(i, { title: l, description: a });
                    }
                    return null;
                case "LevelUp":
                    return m(n.Ur, {
                        title: s.intl.string(s.t["cp+kpc"]),
                        description: s.intl.formatToPlainString(s.t["le5/P1"], { level: e.newLevel }),
                    });
                case "ItemPurchase":
                    return m(n.Zv, {
                        title: s.intl.string(s.t["89CDAj"]),
                        description: s.intl.formatToPlainString(s.t.cpRNkD, { itemName: e.itemName }),
                    });
                case "TurretKill":
                    if (e.playerHelpedKill) return m(n.Nv, { title: s.intl.string(s.t["SoivN/"]) });
                    return null;
                case "InhibitorKill":
                    if (e.playerHelpedKill) return m(n.fH, { title: s.intl.string(s.t["0Ttct6"]) });
                    return null;
                case "DragonKill":
                    if (e.playerHelpedKill) {
                        if (e.stolen)
                            return m(n.d4, {
                                title: s.intl.formatToPlainString(s.t.DUQK8U, { drakeName: e.drakeName }),
                                description: s.intl.formatToPlainString(s.t["8qsedd"], { killerName: e.killerName }),
                            });
                        return m(n.Cq, {
                            title: s.intl.formatToPlainString(s.t["AjNN1/"], { drakeName: e.drakeName }),
                            description: s.intl.formatToPlainString(s.t.HlopAO, { killerName: e.killerName }),
                        });
                    }
                    return null;
                case "BaronKill":
                    if (e.playerHelpedKill) {
                        if (e.stolen)
                            return m(n.oB, {
                                title: s.intl.string(s.t["+WhzbK"]),
                                description: s.intl.formatToPlainString(s.t.FUBbYu, { killerName: e.killerName }),
                            });
                        return m(n.zy, {
                            title: s.intl.string(s.t.KohKss),
                            description: s.intl.formatToPlainString(s.t["4yYLUi"], { killerName: e.killerName }),
                        });
                    }
                    return null;
                case "GameEnd":
                    if (e.win)
                        return m(n.aP, { title: s.intl.string(s.t.vS7yZW), description: s.intl.string(s.t.qkARs9) });
                    return m(n.j7, { title: s.intl.string(s.t["+sdglm"]), description: s.intl.string(s.t.xdsqBt) });
                default:
                    return null;
            }
        })(e);
        null != t &&
            (t.type === a.Gy.GAME_EVENT &&
                (t.eventName === n.WU && (t.additionalData = { [n.kt]: this.currentHealthFraction }),
                r.nx.info(`[LoL] emit event: ${t.eventName} score=${t.score?.toFixed(2)} importance=${t.importance}`)),
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
class h {
    pollIntervalId = null;
    isPolling = !1;
    eventPoller;
    constructor(e) {
        this.eventPoller = new c(e);
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
let v = (e) => new h(e);
