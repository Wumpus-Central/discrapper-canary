n.d(t, { E: () => d }), n(321073), n(775443);
var i = n(284009),
    r = n.n(i),
    a = n(260549),
    s = n(106983),
    l = n(861343);
class o {
    gameAxisScoreThreshold = 0.35;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = { inGame: !0, inMatch: !0, bombPlanted: !1 },
                n = [{ ...t, timestamp_ms: 0 }];
            function i(e, i) {
                let r = { ...t, ...e };
                (r.inGame !== t.inGame || r.inMatch !== t.inMatch || r.bombPlanted !== t.bombPlanted) &&
                    (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
            }
            for (let n of e)
                switch (n.eventName) {
                    case s.C.PlayStateChange: {
                        let e = n.additionalData?.playing === !0;
                        i({ inGame: e, bombPlanted: e && t.bombPlanted }, n.timestamp_ms);
                        break;
                    }
                    case s.C.InMatchChange: {
                        let e = n.additionalData?.inMatch === !0;
                        i(e ? { inMatch: e } : { inMatch: e, inGame: !1, bombPlanted: !1 }, n.timestamp_ms);
                        break;
                    }
                    case s.C.BombPlant:
                        i({ bombPlanted: !0 }, n.timestamp_ms);
                        break;
                    case s.C.BombDefused:
                    case s.C.BombExploded:
                    case s.C.RoundEnd:
                        i({ bombPlanted: !1 }, n.timestamp_ms);
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = c(n, r),
                s = 1;
            a.inGame ? a.bombPlanted && (s *= 2) : (s /= 4), i.push({ timestamp_ms: r, modifier: s });
        }
        return i;
    }
    getInGameState(e, t) {
        return (0, l.r)(this.gameStateTimeline, e, t, (e) => e.inGame);
    }
    rescoreEvent(e) {
        return (0, s.z)(e) ? (0, a.n)(e).score : void 0;
    }
    isInGame(e) {
        return c(this.gameStateTimeline, e).inGame;
    }
    isInMatch(e) {
        return c(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        let t = e.eventName;
        return (
            t === s.C.Kill || t === s.C.MultiKill || t === s.C.Death || t === s.C.BombDefused || t === s.C.BombExploded
        );
    }
}
let d = { applicationIds: ["1158877933042143272", "356875057940791296"], create: (e) => new o(e) };
function c(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return r()(null != n, "bad timeline!"), n;
}
