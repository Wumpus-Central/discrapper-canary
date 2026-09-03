n.d(t, { tA: () => y, Ly: () => D, Q4: () => R, pn: () => b, Tv: () => v, GC: () => L, lq: () => M }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(997649),
    s = n(786661);
n(775443);
var l = n(861343),
    o = n(876474),
    d = n(801344);
let c = new Set([d.WU, d.Wi, d.QK, d.Bs, d.Bt, d.p5, d.d4, d.oB]);
class u {
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
                                case d.rS:
                                    return "game_start";
                                case d.oy:
                                    return "game_end";
                                case d.Wi:
                                    return "death";
                                case d.Ou:
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
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = E(n, r),
                s = 1;
            a.in_game ? a.is_dead && (s *= d.pw) : (s *= d.ym), i.push({ timestamp_ms: r, modifier: s });
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.eventName !== d.WU) return 1;
        let t = e.additionalData?.[d.kt];
        return "number" != typeof t ? 1 : (0, d.nS)(t);
    }
    getInGameState(e, t) {
        return (0, l.r)(this.gameStateTimeline, e, t, (e) => e.in_game);
    }
    rescoreEvent(e) {
        return null != e.eventName ? d.j3[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return E(this.gameStateTimeline, e).in_game;
    }
    canAnchorReaction(e) {
        return null != e.eventName && c.has(e.eventName);
    }
}
let _ = { applicationIds: [o.m], create: (e) => new u(e) };
function E(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return r()(null != n, "bad timeline!"), n;
}
var A = n(190443),
    h = n(979563);
let I = 1 / 4,
    f = new Set([h.d.Goal, h.d.Save, h.d.EpicSave, h.d.Demolition, h.d.Demolished, h.d.BicycleHit, h.d.FlipReset]);
class p {
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
                    case h.d.MatchStart:
                        i(!0, t.timestamp_ms);
                        break;
                    case h.d.MatchEnd:
                        i(!1, t.timestamp_ms);
                        break;
                    default:
                        null != t.eventName && null != h._[t.eventName] && i(!0, t.timestamp_ms);
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = [],
            i = (t - e) / 1e3 + 1;
        for (let t = 0; t < i; t++) {
            let i = e + 1e3 * t,
                r = m(this.gameStateTimeline, i);
            n.push({ timestamp_ms: i, modifier: r.inMatch ? 1 : I });
        }
        return n;
    }
    getInGameState(e, t) {
        return (0, l.r)(this.gameStateTimeline, e, t, (e) => e.inMatch);
    }
    rescoreEvent(e) {
        return null != e.eventName ? h._[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return m(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        return null != e.eventName && f.has(e.eventName);
    }
}
let T = { applicationIds: [A.e], create: (e) => new p(e) };
function m(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return r()(null != n, "bad timeline!"), n;
}
var g = n(45926),
    S = n(557329),
    N = n(781183),
    C = n(696016);
let O = [s.E, _, T];
function R(e, t) {
    if (null == e) return;
    let n = O.find((t) => t.applicationIds.includes(e));
    return n?.create(t);
}
function L(e) {
    return null != e && O.some((t) => t.applicationIds.includes(e));
}
function y(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function D(e, t, n, i) {
    let s,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: o = 3, preTrimmedSignalsByFilepath: d, debug: c = !1 } = l,
        u = { ...(0, g.A)(), ...l.config },
        _ = [],
        E = Object.keys(t.audioModelDataPerUser).length,
        A = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        h = R(i, A),
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
    function m(e) {
        return h?.eventScoreMultiplier?.(e) ?? 1;
    }
    function O(e) {
        return h?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let s = i.decision.timestamp - i.length;
        function L(e, n) {
            let a = d?.[i.filepath],
                l = {};
            if (null != a) {
                let t = 1e3 * Math.floor(s / 1e3);
                function o(i) {
                    return v(
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
                        laughterData: v(r.laughterData, e, n),
                        shoutingData: v(r.shoutingData, e, n),
                        rmsData: v(r.rmsData, e, n),
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
                    r()(t % b == 0 && n % b == 0, "bad timestamps!");
                    let i = (n - t) / b + 1,
                        a = {};
                    for (let n in e) {
                        let r = e[n];
                        a[n] = {
                            laughterData: M(r.laughterData, t, i),
                            shoutingData: M(r.shoutingData, t, i),
                            rmsData: M(r.rmsData, t, i),
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
                _.push(t.laughterData.map((e) => e.value)),
                    E.push(t.shoutingData.map((e) => e.value)),
                    A.push(t.rmsData.map((e) => e.value));
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
        let { startMs: l, endMs: o } = y(i),
            { userIds: A, pLaughter: h, pShouting: f, rms: p, gridStartMs: g, chunkCount: R } = L(l, o),
            D = A.indexOf(n),
            P = (0, a.p)(I, l, o),
            U = P.filter(O);
        null != g &&
            R > 0 &&
            U.length > 0 &&
            (e = U.map((e) => Math.max(0, Math.min(R - 1, Math.round((e.timestamp_ms - g) / 1e3)))));
        let w = (function (e, t) {
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
                let d = (0, S.br)(i, t, t.laughterEventThreshold),
                    c = (0, S.br)(r, t, t.shoutingEventThreshold),
                    u = t.requireAttribution ? (0, S.bU)(a, t) : void 0,
                    _ = null != u ? (0, S.ei)(d, u) : d,
                    E = null != u ? (0, S.ei)(c, u) : c,
                    A = (0, S.v$)(a, t),
                    h = (0, S.Dk)(_, A),
                    I = (0, S.Dk)(E, A),
                    {
                        mainEventScore: f,
                        anchors: p,
                        events: T,
                    } = (0, S.aT)({ laughter: _, shouting: E }, { laughter: h, shouting: I }, s, t),
                    m = t.gameEventsAsReactionAnchors && null != l ? l.map((e) => ({ tStart: e, tEnd: e })) : [],
                    g = (0, S.Mf)([...p, ...m], t.eventChainGapChunks),
                    N = (0, S.tf)(g, h, I, s, t),
                    { laughter: C, shouting: O } = (0, S.Lj)(d, c, a, t),
                    { coOccurrenceScore: R, coContribPerChunk: L } = (0, S.k0)(C, O, t),
                    y = f,
                    D = N;
                if (t.normalizeComponents) {
                    (y = (f - t.sMainMedian) / t.sMainIqr), (D = (N - t.sReactionMedian) / t.sReactionIqr);
                    let e = Math.max(1, o - 1);
                    n = (R - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(R);
                let v = o <= 1,
                    b = v ? t.soloReactionWeight : t.reactionWeight,
                    M = v ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * y + b * D + M * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: y, reactionScore: D, coOccurrenceScore: n }
                        : { mainEventScore: f, reactionScore: N, coOccurrenceScore: R },
                    debug: {
                        pGatedLaughter: _,
                        pGatedShouting: E,
                        intensityLaughter: h,
                        intensityShouting: I,
                        rmsWeighted: A,
                        mainEvents: T,
                        reactionAnchors: g,
                        coContribPerChunk: L,
                    },
                };
            })({ pLaughter: h, pShouting: f, rms: p, main: D, gameEventChunks: e, participantCount: E }, u),
            G = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        a = n(r);
                    i += (r.score ?? 0) * e * a;
                }
                return i;
            })(P, T, m),
            x = (0.5 + (0, N.ry)(w.audioScore)) * (1 + Math.tanh(G / u.gameSquashScale)) - 0.5,
            k = L(s, i.decision.timestamp),
            F = k.gridStartMs,
            V =
                null != F
                    ? (function (e, t) {
                          let { pLaughter: n, pShouting: i, rms: r } = e;
                          if (0 === n.length) return [];
                          let a = (0, S.br)(n, t, t.laughterEventThreshold),
                              s = (0, S.br)(i, t, t.shoutingEventThreshold);
                          return (0, S.e3)((0, S.Lj)(a, s, r, t), t);
                      })({ pLaughter: k.pLaughter, pShouting: k.pShouting, rms: k.rms }, u).map((e) => ({
                          type: "laughter" === e.emotion ? C.Gy.LAUGHTER : C.Gy.SHOUTING,
                          userId: k.userIds[e.channel],
                          startMs: F + 1e3 * e.tStart,
                          endMs: F + (e.tEnd + 1) * 1e3,
                          peakMs: F + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            B = {
                clip: i,
                score: x,
                audioScore: w.audioScore,
                gameEventsScore: G,
                hasAudio: h.length > 0,
                hasGameEvents: P.length > 0,
                audioEvents: V,
            };
        if (c) {
            B.components = { ...w.components, gameEventsScore: G };
            let e = null != g ? (g - l) / 1e3 : 0;
            B.debug = {
                ...w.debug,
                userIds: A,
                tsSec: Array.from({ length: R }, (t, n) => e + n),
                pLaughter: h,
                pShouting: f,
                rms: p,
            };
        }
        _.push(B);
    }
    _.sort((e, t) => t.score - e.score);
    let D = (function (e, t, n, i) {
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
                        let { startMs: t, endMs: n } = y(e.clip);
                        for (let e of o) {
                            let { startMs: i, endMs: r } = y(e.clip);
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
    })(_, u, o, h?.gameAxisScoreThreshold);
    return { allClipsRanked: _, selected: D };
}
function v(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
let b = 1e3;
function M(e, t, n) {
    let i = [],
        a = 0;
    for (let s = 0; s < n; s++) {
        let n = t + b * s,
            l = e[a];
        null != l && l.timestamp_ms === n
            ? (i.push({ ...l }), a++)
            : (null != l && r()(l.timestamp_ms % b == 0, `bad timestamp! ${l.timestamp_ms}`),
              i.push({ value: 0, timestamp_ms: n }));
    }
    return r()(i.length === n, "bad track!"), i;
}
