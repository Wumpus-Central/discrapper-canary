(t.r(a), t.d(a, { default: () => T }));
var r,
    n = t(158390);
t(253400);
var l = t(31048);
t(321073);
var i = t(626333),
    o =
        (((r = {}).GoalScored = "GoalScored"),
        (r.StatfeedEvent = "StatfeedEvent"),
        (r.MatchCreated = "MatchCreated"),
        (r.MatchEnded = "MatchEnded"),
        (r.MatchDestroyed = "MatchDestroyed"),
        (r.UpdateState = "UpdateState"),
        r),
    m = t(696016),
    s = t(979563);
let d = {
    Save: { eventName: s.d.Save, eventType: m.rb.OBJECTIVE_KILL },
    EpicSave: { eventName: s.d.EpicSave, eventType: m.rb.OBJECTIVE_KILL },
    BicycleHit: { eventName: s.d.BicycleHit, eventType: m.rb.UNCLASSIFIED, hiddenFromTimeline: !0 },
    FlipReset: { eventName: s.d.FlipReset, eventType: m.rb.UNCLASSIFIED },
    AerialGoal: { eventName: s.d.AerialGoal, eventType: m.rb.UNCLASSIFIED },
    BackwardsGoal: { eventName: s.d.BackwardsGoal, eventType: m.rb.UNCLASSIFIED },
    BicycleGoal: { eventName: s.d.BicycleGoal, eventType: m.rb.UNCLASSIFIED },
    LongGoal: { eventName: s.d.LongGoal, eventType: m.rb.UNCLASSIFIED },
    TurtleGoal: { eventName: s.d.TurtleGoal, eventType: m.rb.UNCLASSIFIED },
    PoolShot: { eventName: s.d.PoolShot, eventType: m.rb.UNCLASSIFIED },
    OvertimeGoal: { eventName: s.d.OvertimeGoal, eventType: m.rb.UNCLASSIFIED },
    HoopsSwishGoal: { eventName: s.d.SwishGoal, eventType: m.rb.UNCLASSIFIED },
    HatTrick: { eventName: s.d.HatTrick, eventType: m.rb.UNCLASSIFIED },
    Playmaker: { eventName: s.d.Playmaker, eventType: m.rb.UNCLASSIFIED },
    Savior: { eventName: s.d.Savior, eventType: m.rb.UNCLASSIFIED },
    Demolition: { eventName: s.d.Extermination, eventType: m.rb.UNCLASSIFIED },
    HighFive: { eventName: s.d.HighFive, eventType: m.rb.UNCLASSIFIED, matchEitherTarget: !0, hiddenFromTimeline: !0 },
    LowFive: { eventName: s.d.LowFive, eventType: m.rb.UNCLASSIFIED, matchEitherTarget: !0, hiddenFromTimeline: !0 },
    BreakoutDamage: { eventName: s.d.BreakoutDamage, eventType: m.rb.UNCLASSIFIED, hiddenFromTimeline: !0 },
    BreakoutDamageLarge: { eventName: s.d.BreakoutDamageLarge, eventType: m.rb.UNCLASSIFIED, hiddenFromTimeline: !0 },
    Shot: { eventName: s.d.Shot, eventType: m.rb.UNCLASSIFIED },
    Center: { eventName: s.d.Center, eventType: m.rb.UNCLASSIFIED, hiddenFromTimeline: !0 },
    Clear: { eventName: s.d.Clear, eventType: m.rb.UNCLASSIFIED, hiddenFromTimeline: !0 },
    FirstTouch: { eventName: s.d.FirstTouch, eventType: m.rb.UNCLASSIFIED, hiddenFromTimeline: !0 },
};
function c(e, a) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (0, i.K)({
        type: m.Gy.GAME_EVENT,
        eventType: a,
        eventName: e,
        score: 0,
        importance: 0,
        additionalData: t.additionalData,
        hiddenFromTimeline: t.hiddenFromTimeline,
    });
}
class S {
    localPlayerName = null;
    localTeamNum = null;
    teamScores = null;
    pendingGoal = null;
    processMessage(e) {
        switch (e.Event) {
            case o.UpdateState: {
                let a = e.Data?.Game,
                    t = [],
                    r = this.updateTeamScores(a?.Teams);
                return (
                    null != r &&
                        null != this.pendingGoal &&
                        (t.push(...this.resolveGoal(this.pendingGoal, r)), (this.pendingGoal = null)),
                    a?.bReplay !== !0 &&
                        a?.bHasTarget === !0 &&
                        a.Target?.Name != null &&
                        "" !== a.Target.Name &&
                        (this.localPlayerName !== a.Target.Name &&
                            m.GU.info(`[RL] local player identified: ${a.Target.Name} (team ${a.Target.TeamNum})`),
                        (this.localPlayerName = a.Target.Name),
                        (this.localTeamNum =
                            null != a.Target.TeamNum && 255 !== a.Target.TeamNum
                                ? a.Target.TeamNum
                                : this.localTeamNum)),
                    t
                );
            }
            case o.MatchCreated:
                return (this.resetGoalTracking(), [c(s.d.MatchStart, m.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })]);
            case o.MatchEnded: {
                let a = [];
                if (null != this.localTeamNum && e.Data?.WinnerTeamNum != null) {
                    let t = e.Data.WinnerTeamNum === this.localTeamNum;
                    a.push(c(t ? s.d.Victory : s.d.Defeat, t ? m.rb.VICTORY : m.rb.DEFEAT));
                }
                return (a.push(c(s.d.MatchEnd, m.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })), a);
            }
            case o.MatchDestroyed:
                return (this.resetGoalTracking(), [c(s.d.MatchEnd, m.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })]);
            case o.GoalScored: {
                let a = e.Data;
                if (a?.Scorer?.Name == null || "" === a.Scorer.Name) return [];
                return ((this.pendingGoal = a), []);
            }
            case o.StatfeedEvent: {
                let a = e.Data,
                    t = a?.EventName;
                if (null == t) return [];
                if ("Demolish" === t) {
                    if (this.isLocal(a?.MainTarget)) return [c(s.d.Demolition, m.rb.KILL)];
                    if (this.isLocal(a?.SecondaryTarget)) return [c(s.d.Demolished, m.rb.DEATH)];
                }
                let r = d[t];
                if (
                    null != r &&
                    (this.isLocal(a?.MainTarget) || (!0 === r.matchEitherTarget && this.isLocal(a?.SecondaryTarget)))
                )
                    return [c(r.eventName, r.eventType, { hiddenFromTimeline: !0 === r.hiddenFromTimeline })];
                return (
                    m.GU.info(
                        `[RL] statfeed ${t} by ${a?.MainTarget?.Name} ignored (localPlayer=${this.localPlayerName})`,
                    ),
                    []
                );
            }
            default:
                return [];
        }
    }
    resetGoalTracking() {
        ((this.teamScores = null), (this.pendingGoal = null));
    }
    updateTeamScores(e) {
        if (null == e) return null;
        let a = this.teamScores,
            t = new Map();
        for (let a of e) null != a.TeamNum && null != a.Score && t.set(a.TeamNum, a.Score);
        if (((this.teamScores = t), null == a)) return null;
        for (let [e, r] of t) if (r > (a.get(e) ?? r)) return e;
        return null;
    }
    resolveGoal(e, a) {
        return e.Scorer?.TeamNum !== a
            ? this.isLocal(e.Scorer)
                ? [c(s.d.OwnGoal, m.rb.UNCLASSIFIED)]
                : (m.GU.info(`[RL] own goal by ${e.Scorer?.Name} ignored (localPlayer=${this.localPlayerName})`), [])
            : this.isLocal(e.Scorer)
              ? ((this.localTeamNum = e.Scorer?.TeamNum ?? this.localTeamNum),
                [
                    c(s.d.Goal, m.rb.OBJECTIVE_KILL, {
                        additionalData: { goalSpeed: e.GoalSpeed, goalTime: e.GoalTime },
                    }),
                ])
              : this.isLocal(e.Assister)
                ? [c(s.d.Assist, m.rb.ASSIST)]
                : (m.GU.info(`[RL] goal by ${e.Scorer?.Name} ignored (localPlayer=${this.localPlayerName})`), []);
    }
    isLocal(e) {
        return null != this.localPlayerName && e?.Name === this.localPlayerName;
    }
}
var u = t(775363);
function T(e) {
    let a = !1,
        t = null,
        r = new S(),
        i = new n.A(5e3, 2e4);
    function o(a) {
        let t = (function (e) {
            try {
                let a = JSON.parse(e);
                return ("string" == typeof a?.Data && (a.Data = JSON.parse(a.Data)), a);
            } catch (e) {
                return null;
            }
        })(String(a.data));
        if (null == t) return;
        let n = (0, l.l)();
        for (let a of r.processMessage(t))
            (m.GU.info(`[RL] emit event: ${a.eventName} score=${a.score} importance=${a.importance}`), e(a, n));
    }
    return {
        start() {
            a ||
                ((a = !0),
                i.succeed(),
                m.GU.info("[RL] starting stats API listener"),
                (function e() {
                    if (!a) return;
                    let r = new WebSocket((0, u.S)());
                    ((t = r),
                        (r.onopen = () => {
                            (i.succeed(), m.GU.info("[RL] stats API connected"));
                        }),
                        (r.onmessage = o),
                        (r.onclose = () => {
                            t === r &&
                                ((t = null),
                                (function () {
                                    if (a && !i.pending) {
                                        if (i.fails >= 5)
                                            return m.GU.info(
                                                "[RL] stats API unreachable, giving up for this game session",
                                            );
                                        i.fail(e);
                                    }
                                })());
                        }));
                })());
        },
        stop() {
            if (!a) return;
            ((a = !1), m.GU.info("[RL] stopping stats API listener"), i.cancel());
            let e = t;
            ((t = null), e?.close(), (r = new S()));
        },
        getState: () => null,
    };
}
t(190443);
