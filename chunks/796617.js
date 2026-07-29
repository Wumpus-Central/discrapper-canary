"use strict";
n.d(t, { Ly: () => L, Q4: () => C, Tv: () => y, pn: () => D, GC: () => O, lq: () => v }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(372684),
    s = n(997649),
    l = n(786661);
n(775443);
var o = n(861343),
    d = n(876474),
    c = n(801344);
let u = new Set([c.WU, c.Wi, c.QK, c.Bs, c.Bt, c.p5, c.d4, c.oB]);
class _ {
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
                                case c.rS:
                                    return "game_start";
                                case c.oy:
                                    return "game_end";
                                case c.Wi:
                                    return "death";
                                case c.Ou:
                                    return "respawn";
                                default:
                                    return "gameplay";
                            }
                        })(t.eventName)
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
                    return r()(null != n, "bad timeline!"), n;
                })(n, a),
                l = 1;
            s.in_game ? s.is_dead && (l *= c.pw) : (l *= c.ym), i.push({ timestamp_ms: a, modifier: l });
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.eventName !== c.WU) return 1;
        let t = e.additionalData?.[c.kt];
        return "number" != typeof t ? 1 : (0, c.nS)(t);
    }
    getInGameState(e, t) {
        return (0, o.r)(this.gameStateTimeline, e, t, (e) => e.in_game);
    }
    rescoreEvent(e) {
        return null != e.eventName ? c.j3[e.eventName]?.scoreBoost : void 0;
    }
    canAnchorReaction(e) {
        return null != e.eventName && u.has(e.eventName);
    }
}
let E = { applicationIds: [d.m], create: (e) => new _(e) };
var A = n(435558);
function h(e, t, n) {
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
function I(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = e.length,
        r = i > 0 ? e[0].length : 0,
        a = e.map((e) =>
            (function (e, t) {
                if (0 === e.length) return 0;
                if (1 === e.length) return e[0];
                let n = [...e].sort((e, t) => e - t),
                    i = ((0, A.clamp)(t, 0, 100) / 100) * (n.length - 1),
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
function f(e, t) {
    return e.map((e, n) => e.map((e, i) => (t[n][i] ? e : 0)));
}
function p(e, t, n, i) {
    if (!i.requireAttribution) return { laughter: e, shouting: t };
    let r = I(n, i, !1);
    return { laughter: f(e, r), shouting: f(t, r) };
}
function T(e, t) {
    return e.map((e, n) => e.map((e, i) => e * t[n][i]));
}
function m(e, t) {
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
function g(e, t, n) {
    let i = e[t];
    for (let r = t + 1; r <= n; r++) i = Math.max(i, e[r]);
    return i;
}
function S(e, t, n) {
    return m(
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
            peakV: g(e, n, i),
        };
    });
}
let N = [l.E, E];
function C(e, t) {
    if (null == e) return;
    let n = N.find((t) => t.applicationIds.includes(e));
    return n?.create(t);
}
function O(e) {
    return null != e && N.some((t) => t.applicationIds.includes(e));
}
function R(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function L(e, t, n, i) {
    let l,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: d = 3, preTrimmedSignalsByFilepath: c, debug: u = !1 } = o,
        _ = {
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
            sMainMedian: 0.386,
            sMainIqr: 0.695,
            sReactionMedian: 0.535,
            sReactionIqr: 0.475,
            sCoMedianPerPair: 1,
            sCoIqrPerPair: 1.5,
            soloReactionWeight: 0,
            soloCoOccurrenceWeight: 0,
            gameSquashScale: 1.5,
            audioThreshold: 0,
            mixedThreshold: 0.5,
            ...o.config,
        },
        E = [],
        N = Object.keys(t.audioModelDataPerUser).length,
        O = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        L = C(i, O),
        b = null != L ? O : [],
        M = Number.MAX_VALUE,
        P = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((M = Math.min(M, e[0].timestamp_ms)), (P = Math.max(P, e[e.length - 1].timestamp_ms)));
    }
    null != L && M <= P && (l = L.calculateModifiers?.(M, P));
    let U = (function (e) {
        if (null == e) return () => 1;
        let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
        return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
    })(l);
    function w(e) {
        return L?.eventScoreMultiplier?.(e) ?? 1;
    }
    function G(e) {
        return L?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let l = i.decision.timestamp - i.length;
        function x(e, n) {
            let a = c?.[i.filepath],
                s = {};
            if (null != a) {
                let t = 1e3 * Math.floor(l / 1e3);
                function o(i) {
                    return y(
                        i.map((e) => ({ ...e, timestamp_ms: e.timestamp_ms + t })),
                        e,
                        n,
                    );
                }
                for (let e in a.audioModelDataPerUser) {
                    let t = a.audioModelDataPerUser[e];
                    s[e] = { laughterData: o(t.laughterData), shoutingData: o(t.shoutingData), rmsData: o(t.rmsData) };
                }
            } else
                for (let i in t.audioModelDataPerUser) {
                    let r = t.audioModelDataPerUser[i];
                    s[i] = {
                        laughterData: y(r.laughterData, e, n),
                        shoutingData: y(r.shoutingData, e, n),
                        rmsData: y(r.rmsData, e, n),
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
                    r()(t % D == 0 && n % D == 0, "bad timestamps!");
                    let i = (n - t) / D + 1,
                        a = {};
                    for (let n in e) {
                        let r = e[n];
                        a[n] = {
                            laughterData: v(r.laughterData, t, i),
                            shoutingData: v(r.shoutingData, t, i),
                            rmsData: v(r.rmsData, t, i),
                        };
                    }
                    return a;
                })(s),
                u = Object.keys(d),
                _ = [],
                E = [],
                A = [];
            for (let e of u) {
                let t = d[e];
                _.push(t.laughterData.map((e) => e.value)),
                    E.push(t.shoutingData.map((e) => e.value)),
                    A.push(t.rmsData.map((e) => e.value));
            }
            let h = u.length > 0 ? d[u[0]] : void 0;
            return {
                userIds: u,
                pLaughter: _,
                pShouting: E,
                rms: A,
                gridStartMs: h?.laughterData[0]?.timestamp_ms,
                chunkCount: h?.laughterData.length ?? 0,
            };
        }
        let { startMs: o, endMs: d } = R(i),
            { userIds: C, pLaughter: O, pShouting: L, rms: M, gridStartMs: P, chunkCount: k } = x(o, d),
            F = C.indexOf(n),
            V = (0, s.p)(b, o, d),
            B = V.filter(G);
        null != P &&
            k > 0 &&
            B.length > 0 &&
            (e = B.map((e) => Math.max(0, Math.min(k - 1, Math.round((e.timestamp_ms - P) / 1e3)))));
        let H = (function (e, t) {
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
                let d = h(i, t, t.laughterEventThreshold),
                    c = h(r, t, t.shoutingEventThreshold),
                    u = t.requireAttribution ? I(a, t) : void 0,
                    _ = null != u ? f(d, u) : d,
                    E = null != u ? f(c, u) : c,
                    N =
                        0 === t.rmsScale
                            ? a.map((e) => e.map(() => 1))
                            : a.map((e) => e.map((e) => (0, A.clamp)(e * t.rmsScale, 0, 1))),
                    C = T(_, N),
                    O = T(E, N),
                    {
                        mainEventScore: R,
                        anchors: L,
                        events: y,
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
                            let c = S(t, o, i);
                            if (0 === c.length) continue;
                            for (let e of (a.push(
                                ...c.map((e) => {
                                    let { tStart: t, tEnd: n } = e;
                                    return { tStart: t, tEnd: n };
                                }),
                            ),
                            c)) {
                                let t = e.tEnd - e.tStart + 1,
                                    i = g(n, e.tStart, e.tEnd) * Math.log1p(t);
                                (null == s || i > s.mag) && (s = { mag: i, window: e });
                            }
                            if (null == s) continue;
                            l += d * s.mag;
                            let { tStart: u, tEnd: _, peakT: E, peakV: A } = s.window;
                            r.push({ emotion: e, peakT: E, peakV: A, sustain: _ - u + 1, tStart: u, tEnd: _ });
                        }
                        return { mainEventScore: l, anchors: m(a, i.eventChainGapChunks), events: r };
                    })({ laughter: _, shouting: E }, { laughter: C, shouting: O }, s, t),
                    D = m(
                        [
                            ...L,
                            ...(t.gameEventsAsReactionAnchors && null != l
                                ? l.map((e) => ({ tStart: e, tEnd: e }))
                                : []),
                        ],
                        t.eventChainGapChunks,
                    ),
                    v = (function (e, t, n, i, r) {
                        if (0 === e.length) return 0;
                        let a = t.length,
                            s = a > 0 ? t[0].length : 0;
                        if (0 === s) return 0;
                        let l = [];
                        for (let o of e) {
                            let e = (0, A.clamp)(o.tStart - r.lagPreChunks, 0, s - 1),
                                d = (0, A.clamp)(o.tEnd + r.lagPostChunks, 0, s - 1),
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
                    })(D, C, O, s, t),
                    { laughter: b, shouting: M } = p(d, c, a, t),
                    { coOccurrenceScore: P, coContribPerChunk: U } = (function (e, t, n) {
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
                    })(b, M, t),
                    w = R,
                    G = v;
                if (t.normalizeComponents) {
                    (w = (R - t.sMainMedian) / t.sMainIqr), (G = (v - t.sReactionMedian) / t.sReactionIqr);
                    let e = Math.max(1, o - 1);
                    n = (P - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(P);
                let x = o <= 1,
                    k = x ? t.soloReactionWeight : t.reactionWeight,
                    F = x ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * w + k * G + F * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: w, reactionScore: G, coOccurrenceScore: n }
                        : { mainEventScore: R, reactionScore: v, coOccurrenceScore: P },
                    debug: {
                        pGatedLaughter: _,
                        pGatedShouting: E,
                        intensityLaughter: C,
                        intensityShouting: O,
                        rmsWeighted: N,
                        mainEvents: y,
                        reactionAnchors: D,
                        coContribPerChunk: U,
                    },
                };
            })({ pLaughter: O, pShouting: L, rms: M, main: F, gameEventChunks: e, participantCount: N }, _),
            j = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        a = n(r);
                    i += (r.score ?? 0) * e * a;
                }
                return i;
            })(V, U, w),
            W = (0.5 + 1 / (1 + Math.exp(-H.audioScore))) * (1 + Math.tanh(j / _.gameSquashScale)) - 0.5,
            Y = x(l, i.decision.timestamp),
            K = Y.gridStartMs,
            $ =
                null != K
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
                                                for (let { tStart: r, tEnd: l, peakT: o, peakV: d } of S(s, a, t))
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
                                })(p(h(n, t, t.laughterEventThreshold), h(i, t, t.shoutingEventThreshold), r, t), t);
                      })({ pLaughter: Y.pLaughter, pShouting: Y.pShouting, rms: Y.rms }, _).map((e) => ({
                          type: "laughter" === e.emotion ? a.Gy.LAUGHTER : a.Gy.SHOUTING,
                          userId: Y.userIds[e.channel],
                          startMs: K + 1e3 * e.tStart,
                          endMs: K + (e.tEnd + 1) * 1e3,
                          peakMs: K + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            z = {
                clip: i,
                score: W,
                audioScore: H.audioScore,
                gameEventsScore: j,
                hasAudio: O.length > 0,
                hasGameEvents: V.length > 0,
                audioEvents: $,
            };
        if (u) {
            z.components = { ...H.components, gameEventsScore: j };
            let e = null != P ? (P - o) / 1e3 : 0;
            z.debug = {
                ...H.debug,
                userIds: C,
                tsSec: Array.from({ length: k }, (t, n) => e + n),
                pLaughter: O,
                pShouting: L,
                rms: M,
            };
        }
        E.push(z);
    }
    E.sort((e, t) => t.score - e.score);
    let k = (function (e, t, n, i) {
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
            d = new Set();
        function c(e) {
            let t = e.ranked.find(
                (t) =>
                    !d.has(t) &&
                    e.eligible(t) &&
                    !(function (e) {
                        let { startMs: t, endMs: n } = R(e.clip);
                        for (let e of o) {
                            let { startMs: i, endMs: r } = R(e.clip);
                            if (Math.min(n, r) - Math.max(t, i) >= 5e3) return !0;
                        }
                        return !1;
                    })(t),
            );
            return null != t && ((t.selectedVia = e.axis), o.push(t), d.add(t), !0);
        }
        let u = l.map((e) => e.quota),
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
    })(E, _, d, L?.gameAxisScoreThreshold);
    return { allClipsRanked: E, selected: k };
}
function y(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
let D = 1e3;
function v(e, t, n) {
    let i = [],
        a = 0;
    for (let s = 0; s < n; s++) {
        let n = t + D * s,
            l = e[a];
        null != l && l.timestamp_ms === n
            ? (i.push({ ...l }), a++)
            : (null != l && r()(l.timestamp_ms % D == 0, `bad timestamp! ${l.timestamp_ms}`),
              i.push({ value: 0, timestamp_ms: n }));
    }
    return r()(i.length === n, "bad track!"), i;
}
