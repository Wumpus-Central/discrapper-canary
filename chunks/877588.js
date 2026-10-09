(i.r(t), i.d(t, { default: () => T }), i(321073));
var l = i(132500),
    a = i(19575),
    n = i(31048),
    r = i(309470),
    s = i(612638),
    m = i(696016),
    o = i(801344),
    h = i(660183);
async function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await a.Ay.fetchRiotGamesLiveClientData(e, t);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error(`HTTP ${i.status}: ${i.body}`);
}
function u(e) {
    return "ORDER" === e ? "LEFT" : "CHAOS" === e ? "RIGHT" : null;
}
function v(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (0, s.b)({
        type: m.Gy.GAME_EVENT,
        eventType: t,
        eventName: e,
        score: 0,
        importance: 0,
        title: i.title,
        description: i.description,
        hiddenFromTimeline: i.hiddenFromTimeline,
        clipWindow: i.clipWindow,
        additionalData: i.additionalData,
    });
}
function d(e) {
    return Math.max(2, Math.min(5, e));
}
class p {
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
    activePlayerKillIds = [];
    consecutiveFailures = 0;
    teamFightTracker = new r.Ay(o.yO);
    playerTeamByName = new Map();
    activePlayerTeam = null;
    lastEventGameTimeS = null;
    lastEventWallMs = 0;
    emitSignal;
    constructor(e) {
        this.emitSignal = e;
    }
    async poll() {
        let e = await this.fetchActivePlayerData();
        if (null == e && !this.isInGame) return !0;
        (null != e && (this.handleInGame(e), await this.pollPlayerState(e)), await this.pollEvents());
        let t = this.estimateGameTimeS();
        if (null != t) for (let e of this.teamFightTracker.onTick(t)) this.emitTeamFightResult(e);
        return (null == e && this.handlePollFailure(), !0);
    }
    estimateGameTimeS() {
        return null == this.lastEventGameTimeS
            ? null
            : this.lastEventGameTimeS + (Date.now() - this.lastEventWallMs) / 1e3;
    }
    gameTimeToClipTs(e) {
        return null == this.lastEventGameTimeS
            ? null
            : this.lastEventWallMs - (this.lastEventGameTimeS - e) * 1e3 - (0, n.p)();
    }
    async fetchActivePlayerData() {
        try {
            let e = await c("activeplayer");
            if (null == e.riotId) return null;
            return e;
        } catch (e) {
            return null;
        }
    }
    handleInGame(e) {
        ((this.consecutiveFailures = 0),
            null == this.activePlayerRiotId &&
                ((this.activePlayerRiotId = e.riotId ?? null), (this.activePlayerName = e.riotIdGameName ?? "")),
            this.isInGame ||
                ((this.isInGame = !0),
                m.nx.info(
                    `[LoL] connected to Live Client API \u{2014} game started (player=${this.activePlayerName ?? "?"})`,
                ),
                this.emitLifecycleEvent(o.n_.GameStart, h.intl.string(h.t["94Kji7"]), h.intl.string(h.t.fyCsox))),
            (this.currentHealthFraction = (function (e) {
                let { currentHealth: t, maxHealth: i } = e.championStats;
                return i <= 0 ? 1 : Math.max(0, Math.min(1, t / i));
            })(e)));
    }
    handlePollFailure() {
        if (
            this.isInGame &&
            ((this.consecutiveFailures += 1),
            m.nx.info(`[LoL] active-player poll failed (${this.consecutiveFailures}/10)`),
            this.consecutiveFailures >= 10)
        ) {
            for (let e of (m.nx.info("[LoL] game ended (no API response)"), this.teamFightTracker.onGameEnd()))
                this.emitTeamFightResult(e);
            (this.emitLifecycleEvent(o.n_.GameEnd, h.intl.string(h.t.hlOYoA), h.intl.string(h.t.NxavgD)),
                this.resetGameState());
        }
    }
    async pollPlayerState(e) {
        let t;
        if (null == this.activePlayerRiotId) return;
        try {
            t = await c("playerlist");
        } catch (e) {
            return;
        }
        if (!Array.isArray(t)) return;
        let i = t.find((e) => e.riotId === this.activePlayerRiotId || e.riotIdGameName === this.activePlayerName);
        if (null == i) return;
        (this.updateTeamRoster(t, i), this.updateDeadState(i.isDead));
        let l = new Map();
        for (let e of i.items) l.set(e.itemID, e);
        let a = { level: e.level ?? 1, currentGold: e.currentGold ?? 0, items: l };
        ((this.gameTime += 1),
            null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, a),
            (this.previousPlayerState = a));
    }
    updateTeamRoster(e, t) {
        for (let t of e) {
            let e = u(t.team);
            null != e &&
                null != t.riotIdGameName &&
                "" !== t.riotIdGameName &&
                this.playerTeamByName.set(t.riotIdGameName, e);
        }
        this.activePlayerTeam = u(t.team);
    }
    updateDeadState(e) {
        e !== this.isDead &&
            ((this.isDead = e),
            e || this.emitLifecycleEvent(o.n_.Respawn, h.intl.string(h.t.ebbBDl), h.intl.string(h.t.CCiFY7)));
    }
    emitLifecycleEvent(e, t, i) {
        (m.nx.info(`[LoL] lifecycle marker: ${e}`),
            this.emitSignal({
                type: m.Gy.GAME_EVENT,
                eventType: m.rb.UNCLASSIFIED,
                eventName: e,
                title: t,
                description: i,
                score: 0,
                importance: 0,
            }));
    }
    async pollEvents() {
        try {
            let e = await c("eventdata", { eventID: this.nextEventId });
            if (e.Events?.length > 0) {
                m.nx.info(`[LoL] eventdata received: ${e.Events.map((e) => e.EventName).join(", ")}`);
                let t = null;
                for (let i of e.Events)
                    "number" == typeof i.EventTime && (null == t || i.EventTime > t) && (t = i.EventTime);
                if (
                    (null != t &&
                        (null == this.lastEventGameTimeS || t > this.lastEventGameTimeS) &&
                        ((this.lastEventGameTimeS = t), (this.lastEventWallMs = Date.now())),
                    this.isFirstPoll)
                )
                    (m.nx.info(`[LoL] first poll \u{2014} skipping ${e.Events.length} historical events`),
                        (this.isFirstPoll = !1));
                else
                    for (let t of e.Events) {
                        let e;
                        if ("ChampionKill" === t.EventName) {
                            let i = (t.KillerName ?? "") === this.activePlayerName,
                                l = (t.Assisters ?? []).some((e) => e === this.activePlayerName);
                            ((e = {
                                type: "ChampionKill",
                                timestamp: this.gameTime,
                                killerName: t.KillerName,
                                victimName: t.VictimName,
                                playerIsKiller: i,
                                playerIsAssister: l,
                                victimIsActivePlayer: t.VictimName === this.activePlayerName,
                            }),
                                "number" == typeof t.EventTime &&
                                    Number.isFinite(t.EventTime) &&
                                    this.teamFightTracker.onKill(
                                        {
                                            eventTimeS: t.EventTime,
                                            killerName: t.KillerName ?? "",
                                            victimName: t.VictimName ?? "",
                                            assisters: t.Assisters ?? [],
                                        },
                                        this.playerTeamByName,
                                    ));
                        } else if ("Ace" === t.EventName)
                            for (let e of this.teamFightTracker.onAce(t.EventTime)) this.emitTeamFightResult(e);
                        else if ("Multikill" === t.EventName)
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
                        } else if ("GameEnd" === t.EventName) {
                            for (let e of this.teamFightTracker.onGameEnd()) this.emitTeamFightResult(e);
                            e = { type: "GameEnd", timestamp: this.gameTime, win: (t.Result ?? "") === "Win" };
                        }
                        null != e && this.addEventToWindow(e);
                    }
                let i = e.Events[e.Events.length - 1];
                this.nextEventId = i.EventID + 1;
            }
        } catch (e) {}
    }
    addEventToWindow(e) {
        (this.eventWindow.push(e), this.eventWindow.length > this.EVENT_WINDOW_SIZE && this.eventWindow.shift());
        let t = (function (e) {
            switch (e.type) {
                case "ChampionKill":
                    if (e.playerIsKiller)
                        return v(o.n_.ChampionKill, m.rb.KILL, {
                            title: h.intl.string(h.t.ky6syM),
                            description: h.intl.formatToPlainString(h.t["2sxvfW"], { name: e.victimName }),
                        });
                    if (e.playerIsAssister)
                        return v(o.n_.ChampionAssist, m.rb.ASSIST, {
                            title: h.intl.string(h.t["3CK6jo"]),
                            description: h.intl.formatToPlainString(h.t.NyJvKf, { name: e.victimName }),
                        });
                    if (e.victimIsActivePlayer)
                        return v(o.n_.ChampionDeath, m.rb.DEATH, {
                            title: h.intl.string(h.t["C/WqTT"]),
                            description: h.intl.formatToPlainString(h.t["wZ/IFO"], { name: e.killerName }),
                        });
                    return null;
                case "Multikill":
                    if (e.killerIsActivePlayer) {
                        let t = d(e.killStreak),
                            i = o.Br[t],
                            { title: l, description: a } = (() => {
                                switch (t) {
                                    case 2:
                                        return {
                                            title: h.intl.string(h.t["+K7bbR"]),
                                            description: h.intl.string(h.t["+zq0aZ"]),
                                        };
                                    case 3:
                                        return {
                                            title: h.intl.string(h.t.fzI1wr),
                                            description: h.intl.string(h.t.brXPUX),
                                        };
                                    case 4:
                                        return {
                                            title: h.intl.string(h.t.ntn0Eu),
                                            description: h.intl.string(h.t.GcWpwl),
                                        };
                                    case 5:
                                        return {
                                            title: h.intl.string(h.t.JMxzCr),
                                            description: h.intl.string(h.t["9yXGOS"]),
                                        };
                                    default:
                                        return { title: void 0, description: void 0 };
                                }
                            })();
                        return v(i, m.rb.MULTIKILL, { title: l, description: a });
                    }
                    return null;
                case "LevelUp":
                    return v(o.n_.LevelUp, m.rb.LEVEL_UP, {
                        title: h.intl.string(h.t["cp+kpc"]),
                        description: h.intl.formatToPlainString(h.t["le5/P1"], { level: e.newLevel }),
                    });
                case "ItemPurchase":
                    return v(o.n_.ItemPurchase, m.rb.ITEM, {
                        title: h.intl.string(h.t["89CDAj"]),
                        description: h.intl.formatToPlainString(h.t.cpRNkD, { itemName: e.itemName }),
                        hiddenFromTimeline: !0,
                    });
                case "TurretKill":
                    if (e.playerHelpedKill)
                        return v(o.n_.TurretKill, m.rb.OBJECTIVE_KILL, {
                            title: h.intl.string(h.t["SoivN/"]),
                            description: h.intl.string(h.t.eZ1OSn),
                        });
                    return null;
                case "InhibitorKill":
                    if (e.playerHelpedKill)
                        return v(o.n_.InhibitorKill, m.rb.OBJECTIVE_KILL, {
                            title: h.intl.string(h.t["0Ttct6"]),
                            description: h.intl.string(h.t.Pewjjq),
                        });
                    return null;
                case "DragonKill":
                    if (e.playerHelpedKill) {
                        if (e.stolen)
                            return v(o.n_.DragonSteal, m.rb.OBJECTIVE_KILL, {
                                title: h.intl.formatToPlainString(h.t.DUQK8U, { drakeName: e.drakeName }),
                                description: h.intl.formatToPlainString(h.t["8qsedd"], { killerName: e.killerName }),
                            });
                        return v(o.n_.DragonKill, m.rb.OBJECTIVE_KILL, {
                            title: h.intl.formatToPlainString(h.t["AjNN1/"], { drakeName: e.drakeName }),
                            description: h.intl.formatToPlainString(h.t.HlopAO, { killerName: e.killerName }),
                        });
                    }
                    return null;
                case "BaronKill":
                    if (e.playerHelpedKill) {
                        if (e.stolen)
                            return v(o.n_.BaronSteal, m.rb.OBJECTIVE_KILL, {
                                title: h.intl.string(h.t["+WhzbK"]),
                                description: h.intl.formatToPlainString(h.t.FUBbYu, { killerName: e.killerName }),
                            });
                        return v(o.n_.BaronKill, m.rb.OBJECTIVE_KILL, {
                            title: h.intl.string(h.t.KohKss),
                            description: h.intl.formatToPlainString(h.t["4yYLUi"], { killerName: e.killerName }),
                        });
                    }
                    return null;
                case "GameEnd":
                    if (e.win)
                        return v(o.n_.Victory, m.rb.VICTORY, {
                            title: h.intl.string(h.t.vS7yZW),
                            description: h.intl.string(h.t.qkARs9),
                        });
                    return v(o.n_.Defeat, m.rb.DEFEAT, {
                        title: h.intl.string(h.t["+sdglm"]),
                        description: h.intl.string(h.t.xdsqBt),
                    });
                default:
                    return null;
            }
        })(e);
        if (null != t) {
            if (t.type === m.Gy.GAME_EVENT) {
                if (t.eventName === o.n_.ChampionKill) {
                    let e = (0, l.A)();
                    (this.activePlayerKillIds.push(e),
                        (t.additionalData = { [m.gy]: e, health: this.currentHealthFraction }));
                } else
                    "Multikill" === e.type &&
                        (t.additionalData = {
                            [m.gy]: (0, l.A)(),
                            [m.A_]: this.activePlayerKillIds.slice(-d(e.killStreak)),
                        });
                m.nx.info(`[LoL] emit event: ${t.eventName} score=${t.score?.toFixed(2)} importance=${t.importance}`);
            }
            this.emitSignal(t);
        }
    }
    activePlayerInFight(e) {
        return null != this.activePlayerName && e.has(this.activePlayerName);
    }
    emitTeamFightResult(e) {
        if (!e.qualified || null == this.activePlayerTeam || !this.activePlayerInFight(e.participants)) return;
        let t = (0, r.PW)(this.activePlayerTeam),
            i = this.gameTimeToClipTs(e.endTimeS),
            l = this.gameTimeToClipTs(e.startTimeS),
            {
                allyKills: a,
                enemyKills: n,
                winning: s,
                fightScore: c,
                clipWindow: u,
                additionalData: d,
            } = (0, r.Jo)(e, this.activePlayerTeam, l, i);
        m.nx.info(
            `[LoL] team fight ended (${e.endedBy}): ally ${a} - ${n} enemy, participants=${e.participants.size} (${e.participantsByTeam[this.activePlayerTeam].size}v${e.participantsByTeam[t].size}), score=${c} (event ${(0, r.VD)(c, o.yO).toFixed(3)}), lasted ${(e.endTimeS - e.startTimeS).toFixed(1)}s, winning=${s}`,
        );
        let p = s
            ? v(o.n_.TeamFightWin, m.rb.UNCLASSIFIED, {
                  title: h.intl.string(h.t["+1CM/5"]),
                  description: h.intl.formatToPlainString(h.t["2bu+0V"], { allyKills: a, enemyKills: n }),
                  clipWindow: u,
                  additionalData: d,
              })
            : v(o.n_.TeamFight, m.rb.UNCLASSIFIED, {
                  title: h.intl.string(h.t.zi28x1),
                  description: h.intl.formatToPlainString(h.t.HTJgep, { allyKills: a, enemyKills: n }),
                  clipWindow: u,
                  additionalData: d,
              });
        null == i ? this.emitSignal(p) : this.emitSignal(p, i);
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
        ((this.activePlayerRiotId = null),
            (this.activePlayerName = null),
            (this.nextEventId = 0),
            (this.eventWindow = []),
            (this.previousPlayerState = null),
            (this.gameTime = 0),
            (this.isFirstPoll = !0),
            (this.isInGame = !1),
            (this.isDead = !1),
            (this.currentHealthFraction = 1),
            (this.activePlayerKillIds = []),
            (this.consecutiveFailures = 0),
            this.teamFightTracker.reset(),
            this.playerTeamByName.clear(),
            (this.activePlayerTeam = null),
            (this.lastEventGameTimeS = null),
            (this.lastEventWallMs = 0));
    }
    reset() {
        this.resetGameState();
    }
    getEventWindow() {
        return this.eventWindow;
    }
}
i(876474);
class y {
    pollIntervalId = null;
    isPolling = !1;
    eventPoller;
    constructor(e) {
        this.eventPoller = new p(e);
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
let T = (e) => new y(e);
