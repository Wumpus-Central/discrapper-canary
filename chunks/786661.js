"use strict";
n.d(t, { E: () => d }), n(321073), n(775443);
var i = n(284009),
    r = n.n(i),
    a = n(997649),
    s = n(861343),
    l = n(717247);
class o {
    gameEvents;
    gameAxisScoreThreshold = 0.35;
    gameStateTimeline = [];
    constructor(e) {
        (this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_proper_game: !1, in_game_guess: !1, spectating: !1, bomb_planted: !1 },
                    n = [{ ...t, timestamp_ms: 0 }],
                    i = null,
                    r = null;
                function a(e, i) {
                    let r = { ...t, ...e };
                    (r.in_proper_game !== t.in_proper_game ||
                        r.in_game_guess !== t.in_game_guess ||
                        r.spectating !== t.spectating ||
                        r.bomb_planted !== t.bomb_planted) &&
                        (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                }
                function s(e) {
                    for (;;) {
                        let n = 1 / 0,
                            s = null;
                        if (t.in_proper_game && null != i) {
                            let e = i + 175e3;
                            e < n && ((n = e), (s = "round"));
                        }
                        if (t.in_game_guess && null != r) {
                            let e = r + 135e3;
                            e <= n && ((n = e), (s = "out_of_game"));
                        }
                        if (null == s || n > e) break;
                        "round" === s
                            ? a({ in_proper_game: !1, bomb_planted: !1, spectating: !1 }, n)
                            : a({ in_proper_game: !1, in_game_guess: !1, bomb_planted: !1, spectating: !1 }, n);
                    }
                }
                for (let n of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms)) {
                    switch ((s(n.timestamp_ms), c(n.name))) {
                        case "round":
                            a(
                                { in_proper_game: !0, in_game_guess: !0, bomb_planted: !1, spectating: !1 },
                                n.timestamp_ms,
                            ),
                                (i = Math.max(i ?? n.timestamp_ms, n.timestamp_ms));
                            break;
                        case "bomb_plant":
                            a({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !0 }, n.timestamp_ms);
                            break;
                        case "bomb_end":
                            a({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !1 }, n.timestamp_ms);
                            break;
                        case "death":
                            a({ in_game_guess: !0, spectating: t.in_proper_game || t.spectating }, n.timestamp_ms);
                            break;
                        case "kill":
                            a({ in_game_guess: !0 }, n.timestamp_ms);
                    }
                    r = Math.max(r ?? n.timestamp_ms, n.timestamp_ms);
                }
                return s(1 / 0), n;
            })(this.gameEvents));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            s = null,
            o = null,
            d = (t - e) / 1e3 + 1;
        for (let t = 0; t < d; t++) {
            let d = e + 1e3 * t,
                c = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return r()(null != n, "bad timeline!"), n;
                })(n, d);
            (null != s ? (0, a.p)(this.gameEvents, s, d) : []).some((e) => e.name === l.Z8) && (o = d);
            let u = 1;
            c.in_game_guess
                ? c.spectating && (null == o || d - o > 15e3)
                    ? (u /= 3)
                    : c.bomb_planted && (u *= 2)
                : (u /= 4),
                i.push({ timestamp_ms: d, modifier: u }),
                (s = d);
        }
        return i;
    }
    getInGameState(e, t) {
        return (0, s.r)(this.gameStateTimeline, e, t, (e) => e.in_game_guess);
    }
    rescoreEvent(e) {
        return null != e.name ? l.hz[e.name]?.scoreBoost : void 0;
    }
    canAnchorReaction(e) {
        let t = c(e.name);
        return "kill" === t || "death" === t || "bomb_end" === t;
    }
}
let d = { applicationIds: ["1158877933042143272", "356875057940791296"], create: (e) => new o(e) };
function c(e) {
    return null == e
        ? "other"
        : (0, l.MK)(e)
          ? "round"
          : e === l.BC
            ? "bomb_plant"
            : e === l.cU || e === l.hK
              ? "bomb_end"
              : e === l.Z8
                ? "death"
                : l.KO.has(e)
                  ? "kill"
                  : "other";
}
