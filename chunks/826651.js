(n.d(t, { tA: () => M, Ly: () => P, Q4: () => v, pn: () => w, Tv: () => U, GC: () => b, lq: () => G }), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(997649),
    s = n(786661);
n(775443);
var l = n(115171),
    o = n(144705),
    d = n(861343);
class c {
    gameAxisScoreThreshold = 0.35;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = { playing: !1, inMatch: !1 },
                n = [{ ...t, timestamp_ms: 0 }];
            function i(e, i) {
                let r = { ...t, ...e };
                (r.playing !== t.playing || r.inMatch !== t.inMatch) &&
                    (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
            }
            for (let t of e)
                switch (t.eventName) {
                    case o.I.PlayStateChange:
                        i({ playing: t.additionalData?.playing === !0 }, t.timestamp_ms);
                        break;
                    case o.I.InMatchChange: {
                        let e = t.additionalData?.inMatch === !0;
                        i(e ? { inMatch: e } : { inMatch: e, playing: !1 }, t.timestamp_ms);
                    }
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
                a = u(n, r).playing ? 1 : 1 / 4;
            i.push({ timestamp_ms: r, modifier: a });
        }
        return i;
    }
    getInGameState(e, t) {
        return (0, d.r)(this.gameStateTimeline, e, t, (e) => e.playing);
    }
    rescoreEvent(e) {
        return (0, o.j)(e) ? (0, l.d)(e).score : void 0;
    }
    isInGame(e) {
        return u(this.gameStateTimeline, e).playing;
    }
    isInMatch(e) {
        return u(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        let t = e.eventName;
        return t === o.I.Kill || t === o.I.MultiKill || t === o.I.Death || t === o.I.RoshanKill;
    }
}
function u(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
var _ = n(876474),
    E = n(801344);
let A = new Set([E.WU, E.Wi, E.QK, E.Bs, E.Bt, E.p5, E.d4, E.oB]);
class h {
    gameEvents;
    gameAxisScoreThreshold = 0.17;
    gameStateTimeline = [];
    constructor(e) {
        ((this.gameEvents = e),
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
                                case E.rS:
                                    return "game_start";
                                case E.oy:
                                    return "game_end";
                                case E.Wi:
                                    return "death";
                                case E.Ou:
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
            })(this.gameEvents)));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = f(n, r),
                s = 1;
            (a.in_game ? a.is_dead && (s *= E.pw) : (s *= E.ym), i.push({ timestamp_ms: r, modifier: s }));
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.eventName !== E.WU) return 1;
        let t = e.additionalData?.[E.kt];
        return "number" != typeof t ? 1 : (0, E.nS)(t);
    }
    getInGameState(e, t) {
        return (0, d.r)(this.gameStateTimeline, e, t, (e) => e.in_game);
    }
    rescoreEvent(e) {
        return null != e.eventName ? E.j3[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return f(this.gameStateTimeline, e).in_game;
    }
    canAnchorReaction(e) {
        return null != e.eventName && A.has(e.eventName);
    }
}
let I = { applicationIds: [_.m], create: (e) => new h(e) };
function f(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
var p = n(190443),
    T = n(979563);
let g = 1 / 4,
    m = new Set([T.d.Goal, T.d.Save, T.d.EpicSave, T.d.Demolition, T.d.Demolished, T.d.BicycleHit, T.d.FlipReset]);
class S {
    gameAxisScoreThreshold = 0.25;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = !1,
                n = [{ inMatch: !1, timestamp_ms: 0 }];
            function i(e, i) {
                e !== t && ((t = e), n.push({ inMatch: t, timestamp_ms: i }));
            }
            for (let t of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms))
                switch (t.eventName) {
                    case T.d.MatchStart:
                        i(!0, t.timestamp_ms);
                        break;
                    case T.d.MatchEnd:
                        i(!1, t.timestamp_ms);
                        break;
                    default:
                        null != t.eventName && null != T._[t.eventName] && i(!0, t.timestamp_ms);
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = [],
            i = (t - e) / 1e3 + 1;
        for (let t = 0; t < i; t++) {
            let i = e + 1e3 * t,
                r = C(this.gameStateTimeline, i);
            n.push({ timestamp_ms: i, modifier: r.inMatch ? 1 : g });
        }
        return n;
    }
    getInGameState(e, t) {
        return (0, d.r)(this.gameStateTimeline, e, t, (e) => e.inMatch);
    }
    rescoreEvent(e) {
        return null != e.eventName ? T._[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return C(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        return null != e.eventName && m.has(e.eventName);
    }
}
let N = { applicationIds: [p.e], create: (e) => new S(e) };
function C(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
var O = n(45926),
    R = n(557329),
    L = n(781183),
    y = n(696016);
let D = [s.E, { applicationIds: ["356875988589740042"], create: (e) => new c(e) }, I, N];
function v(e, t) {
    if (null == e) return;
    let n = D.find((t) => t.applicationIds.includes(e));
    return n?.create(t);
}
function b(e) {
    return null != e && D.some((t) => t.applicationIds.includes(e));
}
function M(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function P(e, t, n, i) {
    let s,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: o = 3, preTrimmedSignalsByFilepath: d, debug: c = !1 } = l,
        u = { ...(0, O.A)(), ...l.config },
        _ = [],
        E = Object.keys(t.audioModelDataPerUser).length,
        A = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        h = v(i, A),
        I = null != h ? A : [],
        f = Number.MAX_VALUE,
        p = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((f = Math.min(f, e[0].timestamp_ms)), (p = Math.max(p, e[e.length - 1].timestamp_ms)));
    }
    null != h && f <= p && (s = h.calculateModifiers?.(f, p));
    let T = (function (e) {
        if (null == e) return () => 1;
        let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
        return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
    })(s);
    function g(e) {
        return h?.eventScoreMultiplier?.(e) ?? 1;
    }
    function m(e) {
        return h?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let s = i.decision.timestamp - i.length;
        function S(e, n) {
            let a = d?.[i.filepath],
                l = {};
            if (null != a) {
                let t = 1e3 * Math.floor(s / 1e3);
                function o(i) {
                    return U(
                        i.map((e) => ({ ...e, timestamp_ms: e.timestamp_ms + t })),
                        e,
                        n,
                    );
                }
                for (let e in a.audioModelDataPerUser) {
                    let t = a.audioModelDataPerUser[e];
                    l[e] = { laughterData: o(t.laughterData), shoutingData: o(t.shoutingData), rmsData: o(t.rmsData) };
                }
            } else
                for (let i in t.audioModelDataPerUser) {
                    let r = t.audioModelDataPerUser[i];
                    l[i] = {
                        laughterData: U(r.laughterData, e, n),
                        shoutingData: U(r.shoutingData, e, n),
                        rmsData: U(r.rmsData, e, n),
                    };
                }
            let c = (function (e) {
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
                    r()(t % w == 0 && n % w == 0, "bad timestamps!");
                    let i = (n - t) / w + 1,
                        a = {};
                    for (let n in e) {
                        let r = e[n];
                        a[n] = {
                            laughterData: G(r.laughterData, t, i),
                            shoutingData: G(r.shoutingData, t, i),
                            rmsData: G(r.rmsData, t, i),
                        };
                    }
                    return a;
                })(l),
                u = Object.keys(c),
                _ = [],
                E = [],
                A = [];
            for (let e of u) {
                let t = c[e];
                (_.push(t.laughterData.map((e) => e.value)),
                    E.push(t.shoutingData.map((e) => e.value)),
                    A.push(t.rmsData.map((e) => e.value)));
            }
            let h = u.length > 0 ? c[u[0]] : void 0;
            return {
                userIds: u,
                pLaughter: _,
                pShouting: E,
                rms: A,
                gridStartMs: h?.laughterData[0]?.timestamp_ms,
                chunkCount: h?.laughterData.length ?? 0,
            };
        }
        let { startMs: l, endMs: o } = M(i),
            { userIds: A, pLaughter: h, pShouting: f, rms: p, gridStartMs: N, chunkCount: C } = S(l, o),
            O = A.indexOf(n),
            D = (0, a.p)(I, l, o),
            v = D.filter(m);
        null != N &&
            C > 0 &&
            v.length > 0 &&
            (e = v.map((e) => Math.max(0, Math.min(C - 1, Math.round((e.timestamp_ms - N) / 1e3)))));
        let b = (function (e, t) {
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
                let d = (0, R.br)(i, t, t.laughterEventThreshold),
                    c = (0, R.br)(r, t, t.shoutingEventThreshold),
                    u = t.requireAttribution ? (0, R.bU)(a, t) : void 0,
                    _ = null != u ? (0, R.ei)(d, u) : d,
                    E = null != u ? (0, R.ei)(c, u) : c,
                    A = (0, R.v$)(a, t),
                    h = (0, R.Dk)(_, A),
                    I = (0, R.Dk)(E, A),
                    {
                        mainEventScore: f,
                        anchors: p,
                        events: T,
                    } = (0, R.aT)({ laughter: _, shouting: E }, { laughter: h, shouting: I }, s, t),
                    g = t.gameEventsAsReactionAnchors && null != l ? l.map((e) => ({ tStart: e, tEnd: e })) : [],
                    m = (0, R.Mf)([...p, ...g], t.eventChainGapChunks),
                    S = (0, R.tf)(m, h, I, s, t),
                    { laughter: N, shouting: C } = (0, R.Lj)(d, c, a, t),
                    { coOccurrenceScore: O, coContribPerChunk: L } = (0, R.k0)(N, C, t),
                    y = f,
                    D = S;
                if (t.normalizeComponents) {
                    ((y = (f - t.sMainMedian) / t.sMainIqr), (D = (S - t.sReactionMedian) / t.sReactionIqr));
                    let e = Math.max(1, o - 1);
                    n = (O - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(O);
                let v = o <= 1,
                    b = v ? t.soloReactionWeight : t.reactionWeight,
                    M = v ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * y + b * D + M * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: y, reactionScore: D, coOccurrenceScore: n }
                        : { mainEventScore: f, reactionScore: S, coOccurrenceScore: O },
                    debug: {
                        pGatedLaughter: _,
                        pGatedShouting: E,
                        intensityLaughter: h,
                        intensityShouting: I,
                        rmsWeighted: A,
                        mainEvents: T,
                        reactionAnchors: m,
                        coContribPerChunk: L,
                    },
                };
            })({ pLaughter: h, pShouting: f, rms: p, main: O, gameEventChunks: e, participantCount: E }, u),
            P = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        a = n(r);
                    i += (r.score ?? 0) * e * a;
                }
                return i;
            })(D, T, g),
            x = (0.5 + (0, L.ry)(b.audioScore)) * (1 + Math.tanh(P / u.gameSquashScale)) - 0.5,
            k = S(s, i.decision.timestamp),
            F = k.gridStartMs,
            B =
                null != F
                    ? (function (e, t) {
                          let { pLaughter: n, pShouting: i, rms: r } = e;
                          if (0 === n.length) return [];
                          let a = (0, R.br)(n, t, t.laughterEventThreshold),
                              s = (0, R.br)(i, t, t.shoutingEventThreshold);
                          return (0, R.e3)((0, R.Lj)(a, s, r, t), t);
                      })({ pLaughter: k.pLaughter, pShouting: k.pShouting, rms: k.rms }, u).map((e) => ({
                          type: "laughter" === e.emotion ? y.Gy.LAUGHTER : y.Gy.SHOUTING,
                          userId: k.userIds[e.channel],
                          startMs: F + 1e3 * e.tStart,
                          endMs: F + (e.tEnd + 1) * 1e3,
                          peakMs: F + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            V = {
                clip: i,
                score: x,
                audioScore: b.audioScore,
                gameEventsScore: P,
                hasAudio: h.length > 0,
                hasGameEvents: D.length > 0,
                audioEvents: B,
            };
        if (c) {
            V.components = { ...b.components, gameEventsScore: P };
            let e = null != N ? (N - l) / 1e3 : 0;
            V.debug = {
                ...b.debug,
                userIds: A,
                tsSec: Array.from({ length: C }, (t, n) => e + n),
                pLaughter: h,
                pShouting: f,
                rms: p,
            };
        }
        _.push(V);
    }
    _.sort((e, t) => t.score - e.score);
    let N = (function (e, t, n, i) {
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
                        let { startMs: t, endMs: n } = M(e.clip);
                        for (let e of o) {
                            let { startMs: i, endMs: r } = M(e.clip);
                            if (Math.min(n, r) - Math.max(t, i) >= 5e3) return !0;
                        }
                        return !1;
                    })(t),
            );
            return null != t && ((t.selectedVia = e.axis), o.push(t), d.add(t), !0);
        }
        let u = l.map((e) => e.quota),
            _ = !0;
        for (; o.length < n && _;) {
            _ = !1;
            for (let e = 0; e < l.length && o.length !== n; e++) !(u[e] <= 0) && c(l[e]) && (u[e]--, (_ = !0));
        }
        for (_ = !0; o.length < n && _;)
            for (let e of ((_ = !1), l)) {
                if (o.length === n) break;
                c(e) && (_ = !0);
            }
        return o;
    })(_, u, o, h?.gameAxisScoreThreshold);
    return { allClipsRanked: _, selected: N };
}
function U(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
let w = 1e3;
function G(e, t, n) {
    let i = [],
        a = 0;
    for (let s = 0; s < n; s++) {
        let n = t + w * s,
            l = e[a];
        null != l && l.timestamp_ms === n
            ? (i.push({ ...l }), a++)
            : (null != l && r()(l.timestamp_ms % w == 0, `bad timestamp! ${l.timestamp_ms}`),
              i.push({ value: 0, timestamp_ms: n }));
    }
    return (r()(i.length === n, "bad track!"), i);
}
