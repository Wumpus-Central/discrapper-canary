(i.r(t), i.d(t, { default: () => _ }));
var l = i(72611),
    n = i(31048);
i(321073);
var r = i(132500),
    a = i(309470),
    s = i(115171);
function o(e) {
    return "radiant" === e ? "LEFT" : "dire" === e ? "RIGHT" : null;
}
var m = i(144705),
    h = i(696016),
    d = i(826685),
    u = i(185973),
    p = i(105292);
let c = new Map([
    ...[0, 1, 2, 3, 4].map((e) => [String(e), "LEFT"]),
    ...[5, 6, 7, 8, 9].map((e) => [String(e), "RIGHT"]),
]);
function f(e) {
    return !0 === e ? void 0 : e;
}
function S(e, t) {
    return ("DOTA_GAMERULES_STATE_GAME_IN_PROGRESS" === e || "DOTA_GAMERULES_STATE_PRE_GAME" === e) && !1 !== t;
}
function T(e, t, i) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return {
        type: h.Gy.GAME_EVENT,
        eventType: t,
        eventName: e,
        score: 0,
        importance: 0,
        hiddenFromTimeline: l.hiddenFromTimeline ?? !1,
        description: l.description,
        clipWindow: l.clipWindow,
        additionalData: i,
    };
}
class I {
    multiKillChain = [];
    lastKillMs = null;
    wasInMatch = !0;
    handledRoshanKillTimes = new Set();
    teamFightTracker = new a.Ay(d.L);
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
            l(T(m.I.InMatchChange, h.rb.UNCLASSIFIED, { id: (0, r.A)(), inMatch: n }, { hiddenFromTimeline: !0 }))),
            null == e.map &&
                ((this.handledRoshanKillTimes = new Set()),
                (this.multiKillChain = []),
                (this.lastKillMs = null),
                this.teamFightTracker.reset(),
                (this.handledHeroKillKeys = new Set()),
                (this.heroKillsPrimed = !1)));
        let a = f(e.previously?.player),
            o = f(e.previously?.map),
            d = f(e.previously?.hero),
            u = a?.kills,
            p = e.player?.kills;
        if ("number" == typeof u && "number" == typeof p && p > u)
            for (let e = 0; e < p - u; e++) {
                let e = (0, r.A)();
                (l(T(m.I.Kill, h.rb.KILL, { id: e })),
                    null != this.lastKillMs && t - this.lastKillMs <= 18e3
                        ? this.multiKillChain.push(e)
                        : (this.multiKillChain = [e]),
                    (this.lastKillMs = t),
                    this.multiKillChain.length >= 2 &&
                        l(T(m.I.MultiKill, h.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.multiKillChain] })));
            }
        let c = a?.assists,
            I = e.player?.assists,
            _ = "number" == typeof c && "number" == typeof I && I > c ? I - c : 0;
        for (let e = 0; e < _; e++) l(T(m.I.Assist, h.rb.ASSIST, { id: (0, r.A)() }));
        let y = a?.deaths,
            K = e.player?.deaths;
        if ("number" == typeof y && "number" == typeof K && K > y) {
            for (let e = 0; e < K - y; e++) l(T(m.I.Death, h.rb.DEATH, { id: (0, r.A)() }));
            ((this.multiKillChain = []), (this.lastKillMs = null));
        }
        for (let t of e.events ?? [])
            "roshan_killed" === t.event_type &&
                t.killer_player_id === e.player?.player_slot &&
                (null == t.game_time ||
                    this.handledRoshanKillTimes.has(t.game_time) ||
                    (this.handledRoshanKillTimes.add(t.game_time),
                    l(T(m.I.RoshanKill, h.rb.OBJECTIVE_KILL, { id: (0, r.A)() }))));
        let A = e.map?.clock_time;
        if ("number" == typeof A)
            for (let i of (this.trackHeroKills(e, _), this.teamFightTracker.onTick(A)))
                this.emitTeamFight(i, e, A, t, l);
        let E = e.map?.game_state,
            g = o?.game_state ?? E;
        if ("DOTA_GAMERULES_STATE_POST_GAME" === E && "DOTA_GAMERULES_STATE_POST_GAME" !== g) {
            if ("number" == typeof A)
                for (let i of this.teamFightTracker.onGameEnd()) this.emitTeamFight(i, e, A, t, l);
            let i = e.map?.win_team != null && e.map.win_team === e.player?.team_name;
            l(T(m.I.GameEnd, h.rb.UNCLASSIFIED, { id: (0, r.A)(), win: i }));
        }
        let b = e.hero?.alive,
            M = d?.alive ?? b,
            v = S(E, b);
        return (
            v !== S(g, M) &&
                l(
                    T(
                        m.I.PlayStateChange,
                        h.rb.UNCLASSIFIED,
                        { id: (0, r.A)(), playing: v },
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
                let { type: i, time: l, playerid1: n, playerid2: r } = t;
                return "CHAT_MESSAGE_HERO_KILL" === i &&
                    "number" == typeof l &&
                    Number.isFinite(l) &&
                    "number" == typeof n &&
                    "number" == typeof r
                    ? { timeS: l, victimId: n, killerId: r }
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
                r = t > 0 && null != l && e.killerId !== l && c.get(i) === n,
                a = {
                    eventTimeS: e.timeS,
                    killerName: i,
                    victimName: String(e.victimId),
                    assisters: r ? [String(l)] : [],
                };
            this.teamFightTracker.onKill(a, c);
        }
    }
    emitTeamFight(e, t, i, l, n) {
        let s = t.player?.player_slot,
            d = o(t.player?.team_name);
        if (!e.qualified || null == s || null == d || !e.participants.has(String(s))) return;
        let c = l - (i - e.endTimeS) * 1e3,
            {
                allyKills: f,
                enemyKills: S,
                winning: I,
                clipWindow: _,
                additionalData: y,
            } = (0, a.Jo)(e, d, l - (i - e.startTimeS) * 1e3, c),
            K = { id: (0, r.A)(), ...y },
            A = I
                ? T(m.I.TeamFightWin, h.rb.UNCLASSIFIED, K, {
                      description: p.intl.formatToPlainString(u.default.h9gDdS, { allyKills: f, enemyKills: S }),
                      clipWindow: _,
                  })
                : T(m.I.TeamFight, h.rb.UNCLASSIFIED, K, {
                      description: p.intl.formatToPlainString(u.default.no2oEG, { allyKills: f, enemyKills: S }),
                      clipWindow: _,
                  });
        n(A, c);
    }
}
function _(e) {
    let t = !1,
        i = new I();
    function r(t) {
        let l = (0, n.l)();
        for (let { signal: n, timestampMs: r } of i.processPayload(t, l))
            (h.nx.info(`[Dota2] emit event: ${n.eventName} score=${n.score} importance=${n.importance}`), e(n, r));
    }
    return {
        start() {
            t || ((t = !0), (i = new I()), h.nx.info("[Dota2] starting GSI listener"), (0, l.$D)(r));
        },
        stop() {
            t && ((t = !1), h.nx.info("[Dota2] stopping GSI listener"), (0, l.US)());
        },
        getState: () => null,
    };
}
