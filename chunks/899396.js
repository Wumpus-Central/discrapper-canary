"use strict";
n.d(t, { A: () => Z, i: () => q }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(459838),
    s = n(451988),
    l = n(439372),
    o = n(77729),
    d = n(608960),
    c = n(952818),
    u = n(311043),
    _ = n(209932),
    E = n(280450),
    A = n(309010),
    h = n(287809),
    I = n(915725);
class f {
    timeline = [];
    timelineLength;
    clipNow;
    constructor(e = 3e5, t) {
        (this.timelineLength = e), (this.clipNow = t);
    }
    clear() {
        this.timeline.length = 0;
    }
    updateLength(e) {
        (this.timelineLength = e), this.cull();
    }
    add(e) {
        if (0 === this.timeline.length || this.timeline[this.timeline.length - 1].timestamp <= e.timestamp) {
            this.timeline.push(e), this.cull();
            return;
        }
        let t = this.timeline.length;
        for (let n = this.timeline.length - 1; n >= 0; n--)
            if (this.timeline[n].timestamp <= e.timestamp) {
                t = n + 1;
                break;
            }
        t === this.timeline.length && this.timeline[0].timestamp > e.timestamp && (t = 0),
            this.timeline.splice(t, 0, e),
            this.cull();
    }
    read(e, t) {
        return this.cull(), this.timeline.filter((n) => n.timestamp >= e && n.timestamp <= t);
    }
    cull() {
        let e = this.clipNow() - this.timelineLength;
        for (; this.timeline.length > 0 && this.timeline[0].timestamp < e; ) this.timeline.shift();
    }
}
var p = n(372684),
    T = n(439818),
    m = n(572164);
function g() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
}
function S(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
n(775443);
var N = n(717247);
class C {
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
                let s = (e) => {
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
                };
                for (let n of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms)) {
                    switch ((s(n.timestamp_ms), O(n.name))) {
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
            a = null,
            s = null,
            l = (t - e) / 1e3 + 1;
        for (let t = 0; t < l; t++) {
            let l = e + 1e3 * t,
                o = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return r()(n, "bad timeline!"), n;
                })(n, l);
            (null != a ? S(this.gameEvents, a, l) : []).some((e) => e.name === N.Z8) && (s = l);
            let d = 1;
            o.in_game_guess
                ? o.spectating && (null == s || l - s > 15e3)
                    ? (d /= 3)
                    : o.bomb_planted && (d *= 2)
                : (d /= 4),
                i.push({ timestamp_ms: l, modifier: d }),
                (a = l);
        }
        return i;
    }
    rescoreEvent(e) {
        return null != e.name ? N.hz[e.name]?.scoreBoost : void 0;
    }
    canAnchorReaction(e) {
        let t = O(e.name);
        return "kill" === t || "death" === t || "bomb_end" === t;
    }
}
let R = { applicationIds: ["1158877933042143272", "356875057940791296"], create: (e) => new C(e) };
function O(e) {
    return null == e
        ? "other"
        : (0, N.MK)(e)
          ? "round"
          : e === N.BC
            ? "bomb_plant"
            : e === N.cU || e === N.hK
              ? "bomb_end"
              : e === N.Z8
                ? "death"
                : N.KO.has(e)
                  ? "kill"
                  : "other";
}
var L = n(876474),
    y = n(801344);
let D = new Set([y.WU, y.Wi, y.QK, y.Bs, y.Bt, y.p5, y.d4, y.oB]);
class v {
    gameEvents;
    gameAxisScoreThreshold = 0.17;
    gameStateTimeline = [];
    constructor(e) {
        (this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_game: !1, is_dead: !1 },
                    n = [{ ...t, timestamp_ms: 0 }];
                function i(e, i) {
                    let r = { ...t, ...e };
                    (r.in_game !== t.in_game || r.is_dead !== t.is_dead) &&
                        (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                }
                for (let t of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms))
                    switch (
                        (function (e) {
                            switch (e) {
                                case y.rS:
                                    return "game_start";
                                case y.oy:
                                    return "game_end";
                                case y.Wi:
                                    return "death";
                                case y.Ou:
                                    return "respawn";
                                default:
                                    return "gameplay";
                            }
                        })(t.name)
                    ) {
                        case "game_start":
                        case "respawn":
                            i({ in_game: !0, is_dead: !1 }, t.timestamp_ms);
                            break;
                        case "game_end":
                            i({ in_game: !1, is_dead: !1 }, t.timestamp_ms);
                            break;
                        case "death":
                            i({ in_game: !0, is_dead: !0 }, t.timestamp_ms);
                            break;
                        case "gameplay":
                            i({ in_game: !0 }, t.timestamp_ms);
                    }
                return n;
            })(this.gameEvents));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            a = (t - e) / 1e3 + 1;
        for (let t = 0; t < a; t++) {
            let a = e + 1e3 * t,
                s = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return r()(n, "bad timeline!"), n;
                })(n, a),
                l = 1;
            s.in_game ? s.is_dead && (l *= y.pw) : (l *= y.ym), i.push({ timestamp_ms: a, modifier: l });
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.name !== y.WU) return 1;
        let t = e.additionalData?.[y.kt];
        return "number" != typeof t ? 1 : (0, y.nS)(t);
    }
    rescoreEvent(e) {
        return null != e.name ? y.j3[e.name]?.scoreBoost : void 0;
    }
    canAnchorReaction(e) {
        return null != e.name && D.has(e.name);
    }
}
let b = { applicationIds: [L.m], create: (e) => new v(e) };
var M = n(435558);
function P(e, t, n) {
    return e.map((e) => {
        let i = Array(e.length).fill(!1),
            r = -1;
        for (let a = 0; a <= e.length; a++) {
            let s = a < e.length && e[a] >= n;
            if ((s && -1 === r && (r = a), !s && -1 !== r)) {
                if (a - r >= t.minConsecutiveChunks) for (let e = r; e < a; e++) i[e] = !0;
                r = -1;
            }
        }
        return e.map((e, t) => (i[t] ? e : 0));
    });
}
function U(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = e.length,
        r = i > 0 ? e[0].length : 0,
        a = e.map((e) =>
            (function (e, t) {
                if (0 === e.length) return 0;
                if (1 === e.length) return e[0];
                let n = [...e].sort((e, t) => e - t),
                    i = ((0, M.clamp)(t, 0, 100) / 100) * (n.length - 1),
                    r = Math.floor(i),
                    a = Math.ceil(i);
                if (r === a) return n[r];
                let s = i - r;
                return n[r] * (1 - s) + n[a] * s;
            })(e, t.noiseFloorPercentile),
        ),
        s = e.map(() => Array(r).fill(!1));
    for (let l = 0; l < r; l++) {
        let r = 0;
        for (let t = 0; t < i; t++) r = Math.max(r, e[t][l]);
        if (0 !== r)
            for (let o = 0; o < i; o++) {
                let i = e[o][l] >= t.noiseFloorMultiplier * a[o],
                    d = i && e[o][l] > 0;
                if (!n) {
                    s[o][l] = d;
                    continue;
                }
                let c = e[o][l] / r;
                s[o][l] = c >= t.minDominanceRatio && i;
            }
    }
    return s;
}
function w(e, t) {
    return e.map((e, n) => e.map((e, i) => (t[n][i] ? e : 0)));
}
function G(e, t, n, i) {
    if (!i.requireAttribution) return { laughter: e, shouting: t };
    let r = U(n, i, !1);
    return { laughter: w(e, r), shouting: w(t, r) };
}
function x(e, t) {
    return e.map((e, n) => e.map((e, i) => e * t[n][i]));
}
function k(e, t) {
    if (0 === e.length) return [];
    let n = [...e].sort((e, t) => e.tStart - t.tStart),
        i = [{ ...n[0] }];
    for (let e = 1; e < n.length; e++) {
        let r = i[i.length - 1],
            a = n[e];
        a.tStart - r.tEnd <= t ? (r.tEnd = Math.max(r.tEnd, a.tEnd)) : i.push({ ...a });
    }
    return i;
}
function F(e, t, n) {
    let i = e[t];
    for (let r = t + 1; r <= n; r++) i = Math.max(i, e[r]);
    return i;
}
function V(e, t, n) {
    return k(
        (function (e, t) {
            let n = [],
                i = -1;
            for (let r = 0; r <= e.length; r++) {
                let a = r < e.length && e[r] >= t;
                a && -1 === i && (i = r), a || -1 === i || (n.push({ tStart: i, tEnd: r - 1 }), (i = -1));
            }
            return n;
        })(e, t),
        n.eventChainGapChunks,
    ).map((t) => {
        let { tStart: n, tEnd: i } = t;
        return {
            tStart: n,
            tEnd: i,
            peakT: (function (e, t, n) {
                let i = t;
                for (let r = t + 1; r <= n; r++) e[r] > e[i] && (i = r);
                return i;
            })(e, n, i),
            peakV: F(e, n, i),
        };
    });
}
let B = [R, b];
function H(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function j(e, t, n, i) {
    let a,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: l = 3, preTrimmedSignalsByFilepath: o, debug: d = !1 } = s,
        c = {
            minConsecutiveChunks: 2,
            minDominanceRatio: 0.4,
            noiseFloorMultiplier: 3,
            noiseFloorPercentile: 10,
            requireAttribution: !0,
            rmsScale: 4,
            laughterEventThreshold: 0.5,
            shoutingEventThreshold: 0.35,
            laughterWeight: 1,
            shoutingWeight: 0.7,
            eventChainGapChunks: 2,
            lagPreChunks: 1,
            lagPostChunks: 3,
            gameEventsAsReactionAnchors: !0,
            mainWeight: 1,
            reactionWeight: 0.4,
            coOccurrenceWeight: 0.6,
            normalizeComponents: !0,
            sMainMedian: 0.891,
            sMainIqr: 0.739,
            sReactionMedian: 0.825,
            sReactionIqr: 0.426,
            sCoMedianPerPair: 1.2,
            sCoIqrPerPair: 1.2,
            soloReactionWeight: 0,
            soloCoOccurrenceWeight: 0,
            gameSquashScale: 1.5,
            audioThreshold: 0,
            mixedThreshold: 0.5,
            ...s.config,
        },
        u = [],
        _ = Object.keys(t.audioModelDataPerUser).length,
        E = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        A = (function (e, t) {
            if (null == e) return;
            let n = B.find((t) => t.applicationIds.includes(e));
            return n?.create(t);
        })(i, E),
        h = null != A ? E : [],
        I = Number.MAX_VALUE,
        f = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((I = Math.min(I, e[0].timestamp_ms)), (f = Math.max(f, e[e.length - 1].timestamp_ms)));
    }
    null != A && I <= f && (a = A.calculateModifiers?.(I, f));
    let T = (function (e) {
        if (null == e) return () => 1;
        let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
        return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
    })(a);
    function m(e) {
        return A?.eventScoreMultiplier?.(e) ?? 1;
    }
    function g(e) {
        return A?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let a = i.decision.timestamp - i.length;
        function N(e, n) {
            let s = o?.[i.filepath],
                l = {};
            if (null != s) {
                let t = 1e3 * Math.floor(a / 1e3),
                    i = (i) =>
                        W(
                            i.map((e) => ({ ...e, timestamp_ms: e.timestamp_ms + t })),
                            e,
                            n,
                        );
                for (let e in s.audioModelDataPerUser) {
                    let t = s.audioModelDataPerUser[e];
                    l[e] = { laughterData: i(t.laughterData), shoutingData: i(t.shoutingData), rmsData: i(t.rmsData) };
                }
            } else
                for (let i in t.audioModelDataPerUser) {
                    let r = t.audioModelDataPerUser[i];
                    l[i] = {
                        laughterData: W(r.laughterData, e, n),
                        shoutingData: W(r.shoutingData, e, n),
                        rmsData: W(r.rmsData, e, n),
                    };
                }
            let d = (function (e) {
                    let t = Number.MAX_VALUE,
                        n = -Number.MAX_VALUE;
                    for (let i in e) {
                        let r = e[i];
                        for (let e of [r.laughterData, r.shoutingData, r.rmsData])
                            0 !== e.length &&
                                (e[0].timestamp_ms < t && (t = e[0].timestamp_ms),
                                e[e.length - 1].timestamp_ms > n && (n = e[e.length - 1].timestamp_ms));
                    }
                    if (t === Number.MAX_VALUE || n === -Number.MAX_VALUE) return e;
                    function i(e, t, n) {
                        let i = [],
                            a = 0;
                        for (let s = 0; s < n; s++) {
                            let n = t + 1e3 * s,
                                l = e[a];
                            null != l && l.timestamp_ms === n
                                ? (i.push({ ...l }), a++)
                                : (null != l && r()(l.timestamp_ms % 1e3 == 0, `bad timestamp! ${l.timestamp_ms}`),
                                  i.push({ value: 0, timestamp_ms: n }));
                        }
                        return r()(i.length === n, "bad track!"), i;
                    }
                    r()(t % 1e3 == 0 && n % 1e3 == 0, "bad timestamps!");
                    let a = (n - t) / 1e3 + 1,
                        s = {};
                    for (let n in e) {
                        let r = e[n];
                        s[n] = {
                            laughterData: i(r.laughterData, t, a),
                            shoutingData: i(r.shoutingData, t, a),
                            rmsData: i(r.rmsData, t, a),
                        };
                    }
                    return s;
                })(l),
                c = Object.keys(d),
                u = [],
                _ = [],
                E = [];
            for (let e of c) {
                let t = d[e];
                u.push(t.laughterData.map((e) => e.value)),
                    _.push(t.shoutingData.map((e) => e.value)),
                    E.push(t.rmsData.map((e) => e.value));
            }
            let A = c.length > 0 ? d[c[0]] : void 0;
            return {
                userIds: c,
                pLaughter: u,
                pShouting: _,
                rms: E,
                gridStartMs: A?.laughterData[0]?.timestamp_ms,
                chunkCount: A?.laughterData.length ?? 0,
            };
        }
        let { startMs: s, endMs: l } = H(i),
            { userIds: E, pLaughter: A, pShouting: I, rms: f, gridStartMs: C, chunkCount: R } = N(s, l),
            O = E.indexOf(n),
            L = S(h, s, l),
            y = L.filter(g);
        null != C &&
            R > 0 &&
            y.length > 0 &&
            (e = y.map((e) => Math.max(0, Math.min(R - 1, Math.round((e.timestamp_ms - C) / 1e3)))));
        let D = (function (e, t) {
                let n,
                    { pLaughter: i, pShouting: r, rms: a, main: s, gameEventChunks: l } = e,
                    o = e.participantCount ?? i.length;
                if (0 === i.length)
                    return {
                        audioScore: 0,
                        components: { mainEventScore: 0, reactionScore: 0, coOccurrenceScore: 0 },
                        debug: {
                            pGatedLaughter: [],
                            pGatedShouting: [],
                            intensityLaughter: [],
                            intensityShouting: [],
                            rmsWeighted: [],
                            mainEvents: [],
                            reactionAnchors: [],
                            coContribPerChunk: [],
                        },
                    };
                let d = P(i, t, t.laughterEventThreshold),
                    c = P(r, t, t.shoutingEventThreshold),
                    u = t.requireAttribution ? U(a, t) : void 0,
                    _ = null != u ? w(d, u) : d,
                    E = null != u ? w(c, u) : c,
                    A =
                        0 === t.rmsScale
                            ? a.map((e) => e.map(() => 1))
                            : a.map((e) => e.map((e) => (0, M.clamp)(e * t.rmsScale, 0, 1))),
                    h = x(_, A),
                    I = x(E, A),
                    {
                        mainEventScore: f,
                        anchors: p,
                        events: T,
                    } = (function (e, t, n, i) {
                        if (n < 0 || n >= e.laughter.length) return { mainEventScore: 0, anchors: [], events: [] };
                        let r = [],
                            a = [],
                            s = [
                                {
                                    emotion: "laughter",
                                    gated: e.laughter[n],
                                    intensity: t.laughter[n],
                                    threshold: i.laughterEventThreshold,
                                    weight: i.laughterWeight,
                                },
                                {
                                    emotion: "shouting",
                                    gated: e.shouting[n],
                                    intensity: t.shouting[n],
                                    threshold: i.shoutingEventThreshold,
                                    weight: i.shoutingWeight,
                                },
                            ],
                            l = 0;
                        for (let { emotion: e, gated: t, intensity: n, threshold: o, weight: d } of s) {
                            let s;
                            if (0 === t.length) continue;
                            let c = V(t, o, i);
                            if (0 === c.length) continue;
                            for (let e of (a.push(
                                ...c.map((e) => {
                                    let { tStart: t, tEnd: n } = e;
                                    return { tStart: t, tEnd: n };
                                }),
                            ),
                            c)) {
                                let t = e.tEnd - e.tStart + 1,
                                    i = F(n, e.tStart, e.tEnd) * Math.log1p(t);
                                (null == s || i > s.mag) && (s = { mag: i, window: e });
                            }
                            if (null == s) continue;
                            l += d * s.mag;
                            let { tStart: u, tEnd: _, peakT: E, peakV: A } = s.window;
                            r.push({ emotion: e, peakT: E, peakV: A, sustain: _ - u + 1, tStart: u, tEnd: _ });
                        }
                        return { mainEventScore: l, anchors: k(a, i.eventChainGapChunks), events: r };
                    })({ laughter: _, shouting: E }, { laughter: h, shouting: I }, s, t),
                    m = k(
                        [
                            ...p,
                            ...(t.gameEventsAsReactionAnchors && null != l
                                ? l.map((e) => ({ tStart: e, tEnd: e }))
                                : []),
                        ],
                        t.eventChainGapChunks,
                    ),
                    g = (function (e, t, n, i, r) {
                        if (0 === e.length) return 0;
                        let a = t.length,
                            s = a > 0 ? t[0].length : 0;
                        if (0 === s) return 0;
                        let l = [];
                        for (let o of e) {
                            let e = (0, M.clamp)(o.tStart - r.lagPreChunks, 0, s - 1),
                                d = (0, M.clamp)(o.tEnd + r.lagPostChunks, 0, s - 1),
                                c = 1;
                            for (let r = 0; r < a; r++) {
                                if (r === i) continue;
                                let a = 0;
                                for (let i = e; i <= d; i++) a = Math.max(a, t[r][i], n[r][i]);
                                c *= 1 - a;
                            }
                            l.push(1 - c);
                        }
                        return Math.max(0, ...l);
                    })(m, h, I, s, t),
                    { laughter: S, shouting: N } = G(d, c, a, t),
                    { coOccurrenceScore: C, coContribPerChunk: R } = (function (e, t, n) {
                        let i = e.length,
                            r = i > 0 ? e[0].length : 0,
                            a = Array(r).fill(0),
                            s = 0;
                        for (let l = 0; l < r; l++) {
                            let r = 0;
                            for (let a = 0; a < i; a++)
                                (e[a][l] >= n.laughterEventThreshold || t[a][l] >= n.shoutingEventThreshold) && r++;
                            let o = Math.max(0, r - 1);
                            (a[l] = o), (s += o);
                        }
                        return { coOccurrenceScore: s, coContribPerChunk: a };
                    })(S, N, t),
                    O = f,
                    L = g;
                if (t.normalizeComponents) {
                    (O = (f - t.sMainMedian) / t.sMainIqr), (L = (g - t.sReactionMedian) / t.sReactionIqr);
                    let e = Math.max(1, o - 1);
                    n = (C - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(C);
                let y = o <= 1,
                    D = y ? t.soloReactionWeight : t.reactionWeight,
                    v = y ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * O + D * L + v * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: O, reactionScore: L, coOccurrenceScore: n }
                        : { mainEventScore: f, reactionScore: g, coOccurrenceScore: C },
                    debug: {
                        pGatedLaughter: _,
                        pGatedShouting: E,
                        intensityLaughter: h,
                        intensityShouting: I,
                        rmsWeighted: A,
                        mainEvents: T,
                        reactionAnchors: m,
                        coContribPerChunk: R,
                    },
                };
            })({ pLaughter: A, pShouting: I, rms: f, main: O, gameEventChunks: e, participantCount: _ }, c),
            v = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        a = n(r);
                    i += r.score * e * a;
                }
                return i;
            })(L, T, m),
            b = (0.5 + 1 / (1 + Math.exp(-D.audioScore))) * (1 + Math.tanh(v / c.gameSquashScale)) - 0.5,
            B = N(a, i.decision.timestamp),
            j = B.gridStartMs,
            Y =
                null != j
                    ? (function (e, t) {
                          let { pLaughter: n, pShouting: i, rms: r } = e;
                          return 0 === n.length
                              ? []
                              : (function (e, t) {
                                    let n = [];
                                    for (let { emotion: i, matrix: r, threshold: a } of [
                                        {
                                            emotion: "laughter",
                                            matrix: e.laughter,
                                            threshold: t.laughterEventThreshold,
                                        },
                                        {
                                            emotion: "shouting",
                                            matrix: e.shouting,
                                            threshold: t.shoutingEventThreshold,
                                        },
                                    ])
                                        for (let e = 0; e < r.length; e++) {
                                            let s = r[e];
                                            if (0 !== s.length)
                                                for (let { tStart: r, tEnd: l, peakT: o, peakV: d } of V(s, a, t))
                                                    n.push({
                                                        channel: e,
                                                        emotion: i,
                                                        tStart: r,
                                                        tEnd: l,
                                                        peakT: o,
                                                        peakV: d,
                                                    });
                                        }
                                    return n;
                                })(G(P(n, t, t.laughterEventThreshold), P(i, t, t.shoutingEventThreshold), r, t), t);
                      })({ pLaughter: B.pLaughter, pShouting: B.pShouting, rms: B.rms }, c).map((e) => ({
                          type: "laughter" === e.emotion ? p.Gy.LAUGHTER : p.Gy.SHOUTING,
                          userId: B.userIds[e.channel],
                          startMs: j + 1e3 * e.tStart,
                          endMs: j + (e.tEnd + 1) * 1e3,
                          peakMs: j + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            K = {
                clip: i,
                score: b,
                audioScore: D.audioScore,
                gameEventsScore: v,
                hasAudio: A.length > 0,
                hasGameEvents: L.length > 0,
                audioEvents: Y,
            };
        if (d) {
            K.components = { ...D.components, gameEventsScore: v };
            let e = null != C ? (C - s) / 1e3 : 0;
            K.debug = {
                ...D.debug,
                userIds: E,
                tsSec: Array.from({ length: R }, (t, n) => e + n),
                pLaughter: A,
                pShouting: I,
                rms: f,
            };
        }
        u.push(K);
    }
    u.sort((e, t) => t.score - e.score);
    let C = (function (e, t, n, i) {
        function r(t) {
            return [...e].sort((e, n) => t(n) - t(e));
        }
        let a = {
                axis: "mixed",
                ranked: r((e) => e.score),
                eligible: (e) => e.hasAudio && e.hasGameEvents && e.score >= t.mixedThreshold,
                quota: 2,
            },
            s = {
                axis: "audio",
                ranked: r((e) => e.audioScore),
                eligible: (e) => e.hasAudio && e.audioScore > t.audioThreshold,
                quota: n,
            },
            l =
                null != i
                    ? [
                          a,
                          {
                              axis: "game",
                              ranked: r((e) => e.gameEventsScore),
                              eligible: (e) => e.gameEventsScore >= i,
                              quota: 1,
                          },
                      ]
                    : [{ ...a, quota: n }, s],
            o = [],
            d = new Set(),
            c = (e) => {
                let t = e.ranked.find(
                    (t) =>
                        !d.has(t) &&
                        e.eligible(t) &&
                        !((e) => {
                            let { startMs: t, endMs: n } = H(e.clip);
                            for (let e of o) {
                                let { startMs: i, endMs: r } = H(e.clip);
                                if (Math.min(n, r) - Math.max(t, i) >= 5e3) return !0;
                            }
                            return !1;
                        })(t),
                );
                return null != t && ((t.selectedVia = e.axis), o.push(t), d.add(t), !0);
            },
            u = l.map((e) => e.quota),
            _ = !0;
        for (; o.length < n && _; ) {
            _ = !1;
            for (let e = 0; e < l.length && o.length !== n; e++) !(u[e] <= 0) && c(l[e]) && (u[e]--, (_ = !0));
        }
        for (_ = !0; o.length < n && _; )
            for (let e of ((_ = !1), l)) {
                if (o.length === n) break;
                c(e) && (_ = !0);
            }
        return o;
    })(u, c, l, A?.gameAxisScoreThreshold);
    return { allClipsRanked: u, selected: C };
}
function W(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
var Y = n(430795),
    K = n(186295);
function $() {
    return K.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
}
var z = n(696016);
class q extends l.A {
    timeline;
    scheduledClips = [];
    decisionSignals = g();
    sessionEndTimeout = new s.Ep();
    currentSessionGameKey = null;
    pendingSessionGameKey = null;
    sessionTransition = Promise.resolve();
    constructor() {
        super(), (this.timeline = new f(Math.max(I.Ay.getSettings().clipsLength, 6e4), $));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        RUNNING_GAMES_CHANGE: () => this.handleRunningGamesChange(),
        VOICE_CHANNEL_SELECT: () => this.handleVoiceChannelSelect(),
        CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate(),
    };
    handleClipsSignalCreated(e, t) {
        this.isSignalEnabled(e.type) && this.process(e, t);
    }
    handleMlDetection(e) {
        for (let t of e) {
            let e = this.decisionSignals.audioModelDataPerUser[t.user_id];
            for (let n of (null == e &&
                ((e = { laughterData: [], shoutingData: [], rmsData: [] }),
                (this.decisionSignals.audioModelDataPerUser[t.user_id] = e)),
            t.data_points))
                "laughter" === n.label
                    ? (e.laughterData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                      n.confidence > 0.5 &&
                          this.process(
                              { type: p.Gy.LAUGHTER, userId: t.user_id, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? (e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                        n.confidence > 0.35 &&
                            this.process(
                                { type: p.Gy.SHOUTING, userId: t.user_id, confidence: n.confidence },
                                n.timestamp_ms,
                            ))
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, m.TD)() || e.context !== a.x.DEFAULT) return;
        let t = I.Ay.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === E.default.getId() || t) &&
            this.process({ type: p.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, m.TD)()) return;
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = d.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: p.Gy.SOUNDBOARD,
            playing: !0,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name ?? t.emojiName,
            name: t.name,
            userId: e.userId,
        });
    }
    handleSoundboardPlayEnd(e) {
        if (!(0, m.TD)()) return;
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = d.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: p.Gy.SOUNDBOARD,
            playing: !1,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name,
            name: t.name,
            userId: e.userId,
        });
    }
    isSignalEnabled(e) {
        switch (e) {
            case p.Gy.DISTRIBUTED:
                return I.Ay.getSettings().clipSignals.enableDistributedSignals;
            case p.Gy.GAME_EVENT:
                return I.Ay.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    calculateAutoclipRequest(e) {
        let t = e - 3e4,
            n = Math.round(t + 15e3),
            i = Math.round(3e4);
        return { startMs: n - i, endMs: n + i, trimStartMs: t, trimEndMs: e };
    }
    adjustTrimForRms(e) {
        let { startMs: t, endMs: n } = e,
            { trimStartMs: i, trimEndMs: a } = e,
            s = new Map();
        for (let e of Object.values(this.decisionSignals.audioModelDataPerUser))
            for (let i of W(e.rmsData, t, n)) {
                r()(i.timestamp_ms % 1e3 == 0, "bad rms data");
                let e = s.get(i.timestamp_ms) ?? 0;
                s.set(i.timestamp_ms, e + i.value);
            }
        function l(e, t, n) {
            let i = null,
                r = Number.MAX_VALUE;
            for (let a = e; a <= t; a += 1e3) {
                let e = s.get(a) ?? 0;
                ((n && e < r) || (!n && e <= r)) && ((r = e), (i = a), !n && e < 0.001 && (i = Math.min(i + 2e3, t)));
            }
            return i;
        }
        let o = S(this.decisionSignals.gameEventData, i, a);
        {
            let e = o.length > 0 ? Math.min(...o.map((e) => e.timestamp_ms)) : null,
                t = i + 5e3;
            null != e && (t = Math.min(t, e - 3e3)), (i = l(1e3 * Math.floor((i - 5e3) / 1e3), t, !1) ?? i);
        }
        {
            let e = o.length > 0 ? Math.max(...o.map((e) => e.timestamp_ms)) : null,
                t = a - 5e3;
            null != e && (t = Math.max(t, e + 3e3)), (a = l(1e3 * Math.ceil(t / 1e3), a + 5e3, !0) ?? a);
        }
        return (
            (i = Math.max(i, t)) >= (a = Math.min(a, n)) && ((i = e.startMs), (a = e.endMs)),
            { startMs: t, endMs: n, trimStartMs: i, trimEndMs: a }
        );
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case p.Gy.MANUAL:
            case p.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case p.Gy.SHOUTING:
            case p.Gy.LAUGHTER:
            case p.Gy.GAME_EVENT: {
                let n = 0;
                if (e.type === p.Gy.GAME_EVENT) {
                    if (
                        (this.decisionSignals.gameEventData.push({
                            timestamp_ms: t,
                            score: e.score ?? 0,
                            name: e.eventName ?? e.eventIconTag,
                            additionalData: e.additionalData,
                        }),
                        1 !== e.importance)
                    )
                        break;
                    n = Math.max($(), t + 1e4);
                } else n = $() + 1e4;
                if (
                    this.scheduledClips.some(
                        (e) =>
                            (e.signal.type === p.Gy.GAME_EVENT ||
                                e.signal.type === p.Gy.LAUGHTER ||
                                e.signal.type === p.Gy.SHOUTING) &&
                            t >= e.request.trimStartMs &&
                            t <= e.request.trimEndMs,
                    )
                ) {
                    z.nx.info(
                        `decider: suppressing ${e.type} clip \u{2014} timestamp ${t} falls within an existing scheduled candidate's trimmed range`,
                    );
                    break;
                }
                this.scheduleClip(e, this.calculateAutoclipRequest(n), !0, !0);
            }
        }
    }
    clear() {
        this.enqueueSessionTransition("clear", () => this.clearAsync());
    }
    enqueueSessionTransition(e, t) {
        this.sessionTransition = this.sessionTransition
            .catch(() => {})
            .then(t)
            .catch((t) => z.nx.error(`decider: ${e} failed`, t));
    }
    async clearAsync() {
        z.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${I.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey} candidates=${I.Ay.getClipCandidates().length}`,
        ),
            this.unscheduleClip(),
            this.sessionEndTimeout.stop(),
            await this.processClipCandidates(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            await (0, Y.YV)(),
            this.timeline.clear();
    }
    unscheduleClip() {
        for (let e of this.scheduledClips) e.timeout.stop();
        this.scheduledClips = [];
    }
    canScheduleClipCandidate(e) {
        let t = I.Ay.getCurrentClipsSession();
        if (null == t || c.Ay.getVisibleGame()?.isLauncher === !0) return !1;
        if (null != A.Ay.getVoiceChannelId()) return !0;
        let n = h.default.getCurrentUser(),
            i = n?.isStaff() === !0 || n?.isStaffPersonal() === !0,
            r = null != t.gameId && R.applicationIds.includes(t.gameId);
        return e.type === p.Gy.GAME_EVENT && i && r;
    }
    scheduleClip(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = I.Ay.getCurrentClipsSession()?.id;
        if (n && !this.canScheduleClipCandidate(e)) return;
        let a = $(),
            l = t?.endMs != null ? t.endMs : a,
            o = t?.startMs != null ? t.startMs : l - Number(I.Ay.getSettings().clipsLength),
            d = {
                startMs: o,
                endMs: l,
                trimStartMs: t?.trimStartMs != null ? t.trimStartMs : o,
                trimEndMs: t?.trimEndMs != null ? t.trimEndMs : l,
            };
        z.nx.info(`decider: scheduleClip signal=${e.type}, request=${JSON.stringify(t)}`);
        let c = { timeout: new s.Ep(), request: d, signal: e };
        this.scheduledClips.push(c),
            c.timeout.start(l > a ? l - a : 0, async () => {
                try {
                    let t = i ? this.adjustTrimForRms(d) : d;
                    z.nx.info(
                        `decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type}, finalRequest=${JSON.stringify(t)})`,
                    ),
                        await (0, Y.yd)({
                            clipMethod: e.type === p.Gy.MANUAL ? "manual" : "auto",
                            request: t,
                            timeline: [...this.timeline.read(t.startMs, t.endMs)],
                            decision: { signal: e, timestamp: $() },
                            isCandidate: n,
                            gameSessionId: r ?? void 0,
                        });
                } finally {
                    let e = this.scheduledClips.indexOf(c);
                    -1 !== e && this.scheduledClips.splice(e, 1);
                }
            });
    }
    handleVoiceChannelSelect() {
        this.enqueueSessionTransition("handleVoiceChannelSelect", () => this.handleVoiceChannelSelectAsync());
    }
    async handleVoiceChannelSelectAsync() {
        await this.clearAsync();
        let e = c.Ay.getVisibleGame();
        if (null == e) return;
        this.currentSessionGameKey = (0, c.Es)(e);
        let t = crypto.randomUUID();
        (0, Y.Vp)(t, e.id ?? null),
            z.nx.info(
                `decider: handleVoiceChannelSelect \u{2014} new gaming session id: ${t}, for game: ${this.currentSessionGameKey}`,
            );
    }
    handleRunningGamesChange() {
        this.enqueueSessionTransition("handleRunningGamesChange", () => this.handleRunningGamesChangeAsync());
    }
    async handleRunningGamesChangeAsync() {
        let e = c.Ay.getVisibleGame(),
            t = null != e ? (0, c.Es)(e) : null;
        if (
            (z.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${I.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        ) {
            if (null != t) {
                this.currentSessionGameKey = t;
                let n = crypto.randomUUID();
                (0, Y.Vp)(n, e?.id ?? null),
                    z.nx.info(`decider: handleRunningGamesChange \u{2014} starting session for ${t} (id=${n})`);
            } else z.nx.info(`decider: handleRunningGamesChange \u{2014} not starting session (newPrimaryKey=${t})`);
            return;
        }
        if (t === this.currentSessionGameKey) {
            z.nx.info("decider: handleRunningGamesChange \u2014 same primary, cancelling pending end"),
                this.sessionEndTimeout.stop(),
                (this.pendingSessionGameKey = null);
            return;
        }
        if (null === t) {
            z.nx.info(
                "decider: handleRunningGamesChange \u2014 visible game became null, finalizing session immediately",
            ),
                this.sessionEndTimeout.stop(),
                this.unscheduleClip(),
                await this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                await (0, Y.YV)(),
                (this.pendingSessionGameKey = null);
            return;
        }
        this.pendingSessionGameKey === t
            ? z.nx.info("decider: handleRunningGamesChange \u2014 already debouncing for this key")
            : (z.nx.info(
                  `decider: handleRunningGamesChange \u{2014} primary game changed from ${this.currentSessionGameKey} to ${t}, debouncing 30000ms`,
              ),
              (this.pendingSessionGameKey = t),
              this.sessionEndTimeout.start(3e4, () => {
                  this.enqueueSessionTransition("sessionEndTimeout", async () => {
                      this.unscheduleClip(), await this.processClipCandidates(), (this.currentSessionGameKey = t);
                      let n = crypto.randomUUID();
                      (0, Y.Vp)(n, e?.id ?? null),
                          (this.pendingSessionGameKey = null),
                          z.nx.info(
                              `decider: sessionEndTimeout fired after debounce \u{2014} finalizing previous session, started new session (newPrimaryKey=${t}, id=${n})`,
                          );
                  });
              }));
    }
    async stashDeciderData(e, t, n, i) {
        let r = {
                decisionSignals: t,
                clipCandidates: [...e],
                localUserId: E.default.getId(),
                gameId: n?.gameId ?? void 0,
            },
            a = o.A.clips.debugStashClipDeciderData;
        null != a && (await a(r, i), z.nx.info(`stashDeciderData: stashed ${e.length} candidates to ${i}`));
    }
    static async debugRerunRanking(e) {
        z.nx.info(`DEBUG RERUN RANKING${null != e ? ` (${e})` : ""}`);
        let t = o.A.clips.debugReadStashedClipDeciderData;
        if (null == t) return;
        let n = await t(e),
            i = j(n.clipCandidates, n.decisionSignals, n.localUserId, n.gameId);
        z.nx.info("ranked clips:", i),
            i.selected.forEach((e, t) => {
                z.nx.info(`Clip ${t + 1} score ${e.score}, ${o.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    async processClipCandidates() {
        let e = I.Ay.getCurrentClipsSession(),
            t = I.Ay.getClipCandidates(),
            n = null == e ? [] : t.filter((t) => t.gameSessionId === e.id),
            i = null == e ? t : t.filter((t) => t.gameSessionId !== e.id),
            r = this.decisionSignals;
        if (((this.decisionSignals = g()), I.Ay.isAutoStashEnabled()))
            try {
                let t, i, a;
                await this.stashDeciderData(
                    n,
                    r,
                    e,
                    ((t = e?.id ?? "no-session"),
                    (i = u.A.getGame(e?.gameId)?.name),
                    (a = null != i ? (0, T.A)(i).slice(0, 40) : ""),
                    "" !== a ? `${t}_${a}` : t),
                );
            } catch (e) {
                z.nx.error("decider: auto-stash failed", e);
            }
        let a = j(n, r, E.default.getId(), e?.gameId ?? void 0);
        z.nx.info("ranked clips:", a);
        let s = new Set(a.selected.map((e) => e.clip.id));
        await Promise.all(
            a.selected.map(async (e) => {
                try {
                    await (0, Y.K7)(e.clip, e.score, e.audioEvents);
                } catch (e) {
                    z.nx.error("decider: failed to promote clip candidate", e);
                }
            }),
        ),
            await Promise.all(
                [...n, ...i].map(async (e) => {
                    if (!s.has(e.id))
                        try {
                            await (0, Y.oH)(e, !1);
                        } catch (e) {
                            z.nx.error("decider: failed to delete unpromoted clip candidate", e);
                        }
                }),
            );
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(Math.max(I.Ay.getSettings().clipsLength, 6e4));
    }
}
let Z = new q();
