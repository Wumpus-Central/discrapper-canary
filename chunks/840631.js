(i.r(t), i.d(t, { default: () => g }));
var l = i(72611),
    n = i(31048);
i(321073);
var a = i(132500),
    r = i(309470),
    s = i(115171);
function o(e) {
    return "radiant" === e ? "LEFT" : "dire" === e ? "RIGHT" : null;
}
var h = i(144705),
    m = i(696016),
    u = i(826685),
    d = i(268378),
    c = i(660183);
let p = new Map([
    ...[0, 1, 2, 3, 4].map((e) => [String(e), "LEFT"]),
    ...[5, 6, 7, 8, 9].map((e) => [String(e), "RIGHT"]),
]);
function f(e) {
    return !0 === e ? void 0 : e;
}
function I(e, t) {
    return ("DOTA_GAMERULES_STATE_GAME_IN_PROGRESS" === e || "DOTA_GAMERULES_STATE_PRE_GAME" === e) && !1 !== t;
}
function S(e, t, i) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        n = {
            type: m.Gy.GAME_EVENT,
            eventType: t,
            eventName: e,
            score: 0,
            importance: 0,
            hiddenFromTimeline: l.hiddenFromTimeline ?? !1,
            description: l.description,
            clipWindow: l.clipWindow,
            additionalData: i,
        };
    return {
        ...n,
        title: (function (e) {
            switch (e.eventName) {
                case h.I.Kill:
                    return c.intl.string(d.default.gQErX1);
                case h.I.MultiKill:
                    return c.intl.string(d.default.Y7CAoY);
                case h.I.Assist:
                    return c.intl.string(d.default.CuzcRY);
                case h.I.Death:
                    return c.intl.string(d.default.NEFeB0);
                case h.I.RoshanKill:
                    return c.intl.string(d.default.bzNi8X);
                case h.I.TeamFightWin:
                    return c.intl.string(d.default["3RgAlG"]);
                case h.I.TeamFight:
                    return c.intl.string(d.default.Qm57HT);
                case h.I.GameEnd:
                    return c.intl.string(e.additionalData.win ? d.default.fyRdwo : d.default.TcGz5R);
                case h.I.InMatchChange:
                case h.I.PlayStateChange:
                    return;
            }
        })(n),
    };
}
class T {
    multiKillChain = [];
    lastKillMs = null;
    wasInMatch = !0;
    handledRoshanKillTimes = new Set();
    teamFightTracker = new r.Ay(u.L);
    handledHeroKillKeys = new Set();
    heroKillsPrimed = !1;
    processPayload(e, t) {
        let i = [];
        function l(e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
            i.push({ signal: (0, s.d)(e), timestampMs: l });
        }
        let n = null != e.map;
        (n !== this.wasInMatch &&
            ((this.wasInMatch = n),
            l(S(h.I.InMatchChange, m.rb.UNCLASSIFIED, { id: (0, a.A)(), inMatch: n }, { hiddenFromTimeline: !0 }))),
            null == e.map &&
                ((this.handledRoshanKillTimes = new Set()),
                (this.multiKillChain = []),
                (this.lastKillMs = null),
                this.teamFightTracker.reset(),
                (this.handledHeroKillKeys = new Set()),
                (this.heroKillsPrimed = !1)));
        let r = f(e.previously?.player),
            o = f(e.previously?.map),
            u = f(e.previously?.hero),
            d = r?.kills,
            c = e.player?.kills;
        if ("number" == typeof d && "number" == typeof c && c > d)
            for (let e = 0; e < c - d; e++) {
                let e = (0, a.A)();
                (l(S(h.I.Kill, m.rb.KILL, { id: e })),
                    null != this.lastKillMs && t - this.lastKillMs <= 18e3
                        ? this.multiKillChain.push(e)
                        : (this.multiKillChain = [e]),
                    (this.lastKillMs = t),
                    this.multiKillChain.length >= 2 &&
                        l(S(h.I.MultiKill, m.rb.MULTIKILL, { id: (0, a.A)(), killIds: [...this.multiKillChain] })));
            }
        let p = r?.assists,
            T = e.player?.assists,
            g = "number" == typeof p && "number" == typeof T && T > p ? T - p : 0;
        for (let e = 0; e < g; e++) l(S(h.I.Assist, m.rb.ASSIST, { id: (0, a.A)() }));
        let y = r?.deaths,
            K = e.player?.deaths;
        if ("number" == typeof y && "number" == typeof K && K > y) {
            for (let e = 0; e < K - y; e++) l(S(h.I.Death, m.rb.DEATH, { id: (0, a.A)() }));
            ((this.multiKillChain = []), (this.lastKillMs = null));
        }
        for (let t of e.events ?? [])
            "roshan_killed" === t.event_type &&
                t.killer_player_id === e.player?.player_slot &&
                (null == t.game_time ||
                    this.handledRoshanKillTimes.has(t.game_time) ||
                    (this.handledRoshanKillTimes.add(t.game_time),
                    l(S(h.I.RoshanKill, m.rb.OBJECTIVE_KILL, { id: (0, a.A)() }))));
        let _ = e.map?.clock_time;
        if ("number" == typeof _)
            for (let i of (this.trackHeroKills(e, g), this.teamFightTracker.onTick(_)))
                this.emitTeamFight(i, e, _, t, l);
        let A = e.map?.game_state,
            E = o?.game_state ?? A;
        if ("DOTA_GAMERULES_STATE_POST_GAME" === A && "DOTA_GAMERULES_STATE_POST_GAME" !== E) {
            if ("number" == typeof _)
                for (let i of this.teamFightTracker.onGameEnd()) this.emitTeamFight(i, e, _, t, l);
            let i = e.map?.win_team != null && e.map.win_team === e.player?.team_name;
            l(S(h.I.GameEnd, m.rb.UNCLASSIFIED, { id: (0, a.A)(), win: i }));
        }
        let b = e.hero?.alive,
            M = u?.alive ?? b,
            F = I(A, b);
        return (
            F !== I(E, M) &&
                l(
                    S(
                        h.I.PlayStateChange,
                        m.rb.UNCLASSIFIED,
                        { id: (0, a.A)(), playing: F },
                        { hiddenFromTimeline: !0 },
                    ),
                ),
            i
        );
    }
    collectNewHeroKills(e) {
        let t = [];
        for (let i of e.events ?? []) {
            let e = (function (e) {
                let t;
                if ("generic_event" !== e.event_type || null == e.data) return null;
                try {
                    t = JSON.parse(e.data);
                } catch {
                    return null;
                }
                if ("object" != typeof t || null == t) return null;
                let { type: i, time: l, playerid1: n, playerid2: a } = t;
                return "CHAT_MESSAGE_HERO_KILL" === i &&
                    "number" == typeof l &&
                    Number.isFinite(l) &&
                    "number" == typeof n &&
                    "number" == typeof a
                    ? { timeS: l, victimId: n, killerId: a }
                    : null;
            })(i);
            if (null == e) continue;
            let l = `${e.timeS}:${e.victimId}:${e.killerId}`;
            this.handledHeroKillKeys.has(l) || (this.handledHeroKillKeys.add(l), t.push(e));
        }
        return t.sort((e, t) => e.timeS - t.timeS);
    }
    trackHeroKills(e, t) {
        let i = this.collectNewHeroKills(e);
        if (!this.heroKillsPrimed) {
            this.heroKillsPrimed = !0;
            return;
        }
        let l = e.player?.player_slot,
            n = o(e.player?.team_name);
        for (let e of i) {
            let i = String(e.killerId),
                a = t > 0 && null != l && e.killerId !== l && p.get(i) === n,
                r = {
                    eventTimeS: e.timeS,
                    killerName: i,
                    victimName: String(e.victimId),
                    assisters: a ? [String(l)] : [],
                };
            this.teamFightTracker.onKill(r, p);
        }
    }
    emitTeamFight(e, t, i, l, n) {
        let s = t.player?.player_slot,
            u = o(t.player?.team_name);
        if (!e.qualified || null == s || null == u || !e.participants.has(String(s))) return;
        let p = l - (i - e.endTimeS) * 1e3,
            {
                allyKills: f,
                enemyKills: I,
                winning: T,
                clipWindow: g,
                additionalData: y,
            } = (0, r.Jo)(e, u, l - (i - e.startTimeS) * 1e3, p),
            K = { id: (0, a.A)(), ...y },
            _ = T
                ? S(h.I.TeamFightWin, m.rb.UNCLASSIFIED, K, {
                      description: c.intl.formatToPlainString(d.default.h9gDdS, { allyKills: f, enemyKills: I }),
                      clipWindow: g,
                  })
                : S(h.I.TeamFight, m.rb.UNCLASSIFIED, K, {
                      description: c.intl.formatToPlainString(d.default.no2oEG, { allyKills: f, enemyKills: I }),
                      clipWindow: g,
                  });
        n(_, p);
    }
}
function g(e) {
    let t = !1,
        i = new T();
    function a(t) {
        let l = (0, n.l)();
        for (let { signal: n, timestampMs: a } of i.processPayload(t, l))
            (m.nx.info(`[Dota2] emit event: ${n.eventName} score=${n.score} importance=${n.importance}`), e(n, a));
    }
    return {
        start() {
            t || ((t = !0), (i = new T()), m.nx.info("[Dota2] starting GSI listener"), (0, l.$D)(a));
        },
        stop() {
            t && ((t = !1), m.nx.info("[Dota2] stopping GSI listener"), (0, l.US)());
        },
        getState: () => null,
    };
}
