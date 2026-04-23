i.r(t), i.d(t, { default: () => m }), i(321073);
var l = i(19575),
    r = i(372684),
    a = i(985018);
async function n(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await l.Ay.fetchRiotGamesLiveClientData(e, t);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error(`HTTP ${i.status}: ${i.body}`);
}
class s {
    activePlayerRiotId = null;
    activePlayerName = null;
    nextEventId = 0;
    eventWindow = [];
    EVENT_WINDOW_SIZE = 100;
    previousPlayerState = null;
    gameTime = 0;
    isFirstPoll = !0;
    emitSignal;
    constructor(e) {
        this.emitSignal = e;
    }
    async poll() {
        return (
            !(null != this.activePlayerRiotId || (await this.fetchActivePlayer())) ||
            (await this.pollEvents(), await this.pollPlayerState(), !0)
        );
    }
    async pollEvents() {
        try {
            let e = await n("eventdata", { eventID: this.nextEventId });
            if (e.Events?.length > 0) {
                if (this.isFirstPoll) this.isFirstPoll = !1;
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
                        }
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
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.KILL,
                            importance: 0.5,
                            title: a.intl.string(a.t.ky6syM),
                            description: a.intl.formatToPlainString(a.t["2sxvfW"], { name: e.victimName }),
                        };
                    if (e.playerIsAssister)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.ASSIST,
                            importance: 0.5,
                            title: a.intl.string(a.t.ky6syM),
                            description: a.intl.formatToPlainString(a.t.NyJvKf, { name: e.victimName }),
                        };
                    if (e.victimIsActivePlayer)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.DEATH,
                            importance: 0.5,
                            title: a.intl.string(a.t.ky6syM),
                            description: a.intl.formatToPlainString(a.t["wZ/IFO"], { name: e.killerName }),
                        };
                    return null;
                case "Multikill":
                    if (e.killerIsActivePlayer) {
                        let { title: t, description: i } = (() => {
                            switch (e.killStreak) {
                                case 2:
                                    return {
                                        title: a.intl.string(a.t["+K7bbR"]),
                                        description: a.intl.string(a.t["+zq0aZ"]),
                                    };
                                case 3:
                                    return { title: a.intl.string(a.t.fzI1wr), description: a.intl.string(a.t.brXPUX) };
                                case 4:
                                    return { title: a.intl.string(a.t.ntn0Eu), description: a.intl.string(a.t.GcWpwl) };
                                case 5:
                                    return {
                                        title: a.intl.string(a.t.JMxzCr),
                                        description: a.intl.string(a.t["9yXGOS"]),
                                    };
                                default:
                                    return { title: void 0, description: void 0 };
                            }
                        })();
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.MULTIKILL,
                            importance: e.killStreak >= 4 ? 1 : 0.5,
                            title: t,
                            description: i,
                        };
                    }
                    return null;
                case "LevelUp":
                    return {
                        type: r.Gy.GAME_EVENT,
                        eventType: r.rb.LEVEL_UP,
                        importance: 0,
                        title: a.intl.string(a.t["cp+kpc"]),
                        description: a.intl.formatToPlainString(a.t["le5/P1"], { level: e.newLevel }),
                    };
                case "ItemPurchase":
                    return {
                        type: r.Gy.GAME_EVENT,
                        eventType: r.rb.ITEM,
                        importance: 0,
                        title: a.intl.string(a.t["89CDAj"]),
                        description: a.intl.formatToPlainString(a.t.cpRNkD, { itemName: e.itemName }),
                    };
                case "TurretKill":
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: a.intl.string(a.t["SoivN/"]),
                        };
                    return null;
                case "InhibitorKill":
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: a.intl.string(a.t["0Ttct6"]),
                        };
                    return null;
                case "DragonKill":
                    if (e.stolen)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 1,
                            title: a.intl.formatToPlainString(a.t.DUQK8U, { drakeName: e.drakeName }),
                            description: a.intl.formatToPlainString(a.t["8qsedd"], { killerName: e.killerName }),
                        };
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: a.intl.formatToPlainString(a.t["AjNN1/"], { drakeName: e.drakeName }),
                            description: a.intl.formatToPlainString(a.t.HlopAO, { killerName: e.killerName }),
                        };
                    return null;
                case "BaronKill":
                    if (e.stolen)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: e.playerHelpedKill ? 1 : 0.8,
                            title: a.intl.string(a.t["+WhzbK"]),
                            description: a.intl.formatToPlainString(a.t.FUBbYu, { killerName: e.killerName }),
                        };
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 0.8,
                            title: a.intl.string(a.t.KohKss),
                            description: a.intl.formatToPlainString(a.t["4yYLUi"], { killerName: e.killerName }),
                        };
                    return null;
                default:
                    return null;
            }
        })(e);
        null != t && this.emitSignal(t);
    }
    async pollPlayerState() {
        if (null != this.activePlayerRiotId)
            try {
                let [e, t] = await Promise.all([
                        n("activeplayer"),
                        n("playeritems", { riotId: this.activePlayerRiotId }),
                    ]),
                    i = new Map();
                if (Array.isArray(t)) for (let e of t) i.set(e.itemID, e);
                let l = { level: e.level ?? 1, currentGold: e.currentGold ?? 0, items: i };
                (this.gameTime += 1),
                    null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, l),
                    (this.previousPlayerState = l);
            } catch (e) {}
    }
    detectStateChanges(e, t) {
        if (t.level > e.level) {
            let e = { type: "LevelUp", timestamp: this.gameTime, newLevel: t.level };
            this.addEventToWindow(e);
        }
        for (let [i, l] of t.items)
            if (null == e.items.get(i)) {
                let e = {
                    type: "ItemPurchase",
                    timestamp: this.gameTime,
                    itemId: l.itemID,
                    itemName: l.displayName,
                    itemCount: l.count,
                };
                this.addEventToWindow(e);
            }
    }
    async fetchActivePlayer() {
        try {
            let e = await n("activeplayer");
            if (null != e.riotId)
                return (this.activePlayerRiotId = e.riotId), (this.activePlayerName = e.riotIdGameName ?? ""), !0;
            return !1;
        } catch (e) {
            return !1;
        }
    }
    reset() {
        (this.activePlayerRiotId = null),
            (this.nextEventId = 0),
            (this.eventWindow = []),
            (this.previousPlayerState = null),
            (this.gameTime = 0),
            (this.isFirstPoll = !0);
    }
    getEventWindow() {
        return this.eventWindow;
    }
}
i(64683);
class o {
    pollIntervalId = null;
    isPolling = !1;
    eventPoller;
    constructor(e) {
        this.eventPoller = new s(e);
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
let m = (e) => new o(e);
