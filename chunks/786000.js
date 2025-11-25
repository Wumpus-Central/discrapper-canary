i.d(t, { Z: () => o }), i(415506), i(953529), i(388685), i(539854);
var l = i(998502),
    n = i(894694),
    r = i(388032);
function a(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
async function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await l.ZP.fetchRiotGamesLiveClientData(e, t);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error("HTTP ".concat(i.status, ": ").concat(i.body));
}
class o {
    async poll() {
        return (
            !(null != this.activePlayerRiotId || (await this.fetchActivePlayer())) ||
            (await this.pollEvents(), await this.pollPlayerState(), !0)
        );
    }
    async pollEvents() {
        try {
            var e, t, i, l, n, r, a, o, m, p, c, u, v, h, y, d;
            let E = await s("eventdata", { eventID: this.nextEventId });
            if ((null == (e = E.Events) ? void 0 : e.length) > 0) {
                if (this.isFirstPoll) this.isFirstPoll = !1;
                else
                    for (let e of E.Events) {
                        let s;
                        if ("ChampionKill" === e.EventName) {
                            let l = (null != (t = e.KillerName) ? t : "") === this.activePlayerName,
                                n = (null != (i = e.Assisters) ? i : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "ChampionKill",
                                timestamp: this.gameTime,
                                killerName: e.KillerName,
                                victimName: e.VictimName,
                                playerIsKiller: l,
                                playerIsAssister: n,
                                victimIsActivePlayer: e.VictimName === this.activePlayerName,
                            };
                        } else if ("Multikill" === e.EventName)
                            s = {
                                type: "Multikill",
                                timestamp: this.gameTime,
                                killStreak: e.KillStreak || 1,
                                killerName: null != (l = e.KillerName) ? l : "",
                                killerIsActivePlayer: e.KillerName === this.activePlayerName,
                            };
                        else if ("TurretKilled" === e.EventName) {
                            let t = (null != (n = e.KillerName) ? n : "") === this.activePlayerName,
                                i = (null != (r = e.Assisters) ? r : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "TurretKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                            };
                        } else if ("InhibKilled" === e.EventName) {
                            let t = (null != (a = e.KillerName) ? a : "") === this.activePlayerName,
                                i = (null != (o = e.Assisters) ? o : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "InhibitorKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                            };
                        } else if ("DragonKill" === e.EventName) {
                            let t = (null != (m = e.KillerName) ? m : "") === this.activePlayerName,
                                i = (null != (p = e.Assisters) ? p : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "DragonKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                                killerName: null != (c = e.KillerName) ? c : "",
                                drakeName: e.DragonType,
                                stolen: (null != (u = e.Stolen) ? u : "") === "True",
                            };
                        } else if ("BaronKill" === e.EventName) {
                            let t = (null != (v = e.KillerName) ? v : "") === this.activePlayerName,
                                i = (null != (h = e.Assisters) ? h : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "BaronKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                                stolen: (null != (y = e.Stolen) ? y : "") === "True",
                                killerName: null != (d = e.KillerName) ? d : "",
                            };
                        }
                        null != s && this.addEventToWindow(s);
                    }
                let e = E.Events[E.Events.length - 1];
                this.nextEventId = e.EventID + 1;
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
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.KILL,
                            importance: 0.5,
                            title: r.intl.string(r.t.ky6syM),
                            description: r.intl.formatToPlainString(r.t["2sxvfW"], { name: e.victimName }),
                        };
                    if (e.playerIsAssister)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.ASSIST,
                            importance: 0.5,
                            title: r.intl.string(r.t.ky6syM),
                            description: r.intl.formatToPlainString(r.t.NyJvKf, { name: e.victimName }),
                        };
                    if (e.victimIsActivePlayer)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.DEATH,
                            importance: 0.5,
                            title: r.intl.string(r.t.ky6syM),
                            description: r.intl.formatToPlainString(r.t["wZ/IFO"], { name: e.killerName }),
                        };
                    return null;
                case "Multikill":
                    if (e.killerIsActivePlayer) {
                        let { title: t, description: i } = (() => {
                            switch (e.killStreak) {
                                case 2:
                                    return {
                                        title: r.intl.string(r.t["+K7bbR"]),
                                        description: r.intl.string(r.t["+zq0aZ"]),
                                    };
                                case 3:
                                    return {
                                        title: r.intl.string(r.t.fzI1wr),
                                        description: r.intl.string(r.t.brXPUX),
                                    };
                                case 4:
                                    return {
                                        title: r.intl.string(r.t.ntn0Eu),
                                        description: r.intl.string(r.t.GcWpwl),
                                    };
                                case 5:
                                    return {
                                        title: r.intl.string(r.t.JMxzCr),
                                        description: r.intl.string(r.t["9yXGOS"]),
                                    };
                                default:
                                    return {
                                        title: void 0,
                                        description: void 0,
                                    };
                            }
                        })();
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.MULTIKILL,
                            importance: e.killStreak >= 4 && e.killerIsActivePlayer ? 1 : 0.5,
                            title: t,
                            description: i,
                        };
                    }
                    return null;
                case "LevelUp":
                    return {
                        type: n.Bs.GAME_EVENT,
                        eventType: n.x0.LEVEL_UP,
                        importance: 0,
                        title: r.intl.string(r.t["cp+kpc"]),
                        description: r.intl.formatToPlainString(r.t["le5/P1"], { level: e.newLevel }),
                    };
                case "ItemPurchase":
                    return {
                        type: n.Bs.GAME_EVENT,
                        eventType: n.x0.ITEM,
                        importance: 0,
                        title: r.intl.string(r.t["89CDAj"]),
                        description: r.intl.formatToPlainString(r.t.cpRNkD, { itemName: e.itemName }),
                    };
                case "TurretKill":
                    if (e.playerHelpedKill)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: r.intl.string(r.t["SoivN/"]),
                        };
                    return null;
                case "InhibitorKill":
                    if (e.playerHelpedKill)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: r.intl.string(r.t["0Ttct6"]),
                        };
                    return null;
                case "DragonKill":
                    if (e.stolen)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.OBJECTIVE_KILL,
                            importance: 1,
                            title: r.intl.formatToPlainString(r.t.DUQK8U, { drakeName: e.drakeName }),
                            description: r.intl.formatToPlainString(r.t["8qsedd"], { killerName: e.killerName }),
                        };
                    if (e.playerHelpedKill)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: r.intl.formatToPlainString(r.t["AjNN1/"], { drakeName: e.drakeName }),
                            description: r.intl.formatToPlainString(r.t.HlopAO, { killerName: e.killerName }),
                        };
                    return null;
                case "BaronKill":
                    if (e.stolen)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.OBJECTIVE_KILL,
                            importance: e.playerHelpedKill ? 1 : 0.8,
                            title: r.intl.string(r.t["+WhzbK"]),
                            description: r.intl.formatToPlainString(r.t.FUBbYu, { killerName: e.killerName }),
                        };
                    if (e.playerHelpedKill)
                        return {
                            type: n.Bs.GAME_EVENT,
                            eventType: n.x0.OBJECTIVE_KILL,
                            importance: e.playerHelpedKill ? 0.8 : 0.5,
                            title: r.intl.string(r.t.KohKss),
                            description: r.intl.formatToPlainString(r.t["4yYLUi"], { killerName: e.killerName }),
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
                var e, t;
                let [i, l] = await Promise.all([
                        s("activeplayer"),
                        s("playeritems", { riotId: this.activePlayerRiotId }),
                    ]),
                    n = new Map();
                if (Array.isArray(l)) for (let e of l) n.set(e.itemID, e);
                let r = {
                    level: null != (e = i.level) ? e : 1,
                    currentGold: null != (t = i.currentGold) ? t : 0,
                    items: n,
                };
                (this.gameTime += 1),
                    null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, r),
                    (this.previousPlayerState = r);
            } catch (e) {}
    }
    detectStateChanges(e, t) {
        if (t.level > e.level) {
            let e = {
                type: "LevelUp",
                timestamp: this.gameTime,
                newLevel: t.level,
            };
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
            let t = await s("activeplayer");
            if (null != t.riotId) {
                var e;
                return (
                    (this.activePlayerRiotId = t.riotId),
                    (this.activePlayerName = null != (e = t.riotIdGameName) ? e : ""),
                    !0
                );
            }
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
    constructor(e) {
        a(this, "activePlayerRiotId", null),
            a(this, "activePlayerName", null),
            a(this, "nextEventId", 0),
            a(this, "eventWindow", []),
            a(this, "EVENT_WINDOW_SIZE", 100),
            a(this, "previousPlayerState", null),
            a(this, "gameTime", 0),
            a(this, "isFirstPoll", !0),
            a(this, "emitSignal", void 0),
            (this.emitSignal = e);
    }
}
