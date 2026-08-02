"use strict";
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
            let t = !0,
                n = !1,
                i = [{ inGame: !0, bombPlanted: !1, timestamp_ms: 0 }];
            function r(e, r, a) {
                (e !== t || r !== n) && ((t = e), (n = r), i.push({ inGame: t, bombPlanted: n, timestamp_ms: a }));
            }
            for (let i of e)
                switch (i.eventName) {
                    case s.C.PlayStateChange: {
                        let e = i.additionalData?.playing === !0;
                        r(e, e && n, i.timestamp_ms);
                        break;
                    }
                    case s.C.BombPlant:
                        r(t, !0, i.timestamp_ms);
                        break;
                    case s.C.BombDefused:
                    case s.C.BombExploded:
                    case s.C.RoundEnd:
                        r(t, !1, i.timestamp_ms);
                }
            return i;
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
