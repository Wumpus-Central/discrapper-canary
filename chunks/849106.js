"use strict";
n.d(t, { A: () => P, i: () => M }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(459838),
    a = n(451988),
    o = n(439372),
    l = n(77729),
    u = n(608960),
    c = n(952818),
    d = n(209932),
    _ = n(495544),
    h = n(309010),
    f = n(287809),
    p = n(274372);
class E {
    timeline = [];
    timelineLength;
    constructor(e = 3e5) {
        this.timelineLength = e;
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
        let e = Date.now() - this.timelineLength;
        for (; this.timeline.length > 0 && this.timeline[0].timestamp < e; ) this.timeline.shift();
    }
}
var m = n(372684),
    g = n(572164);
function A() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
}
function I(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
n(775443);
var T = n(717247);
class S {
    gameEvents;
    gameStateTimeline = [];
    constructor(e) {
        (this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_proper_game: !1, in_game_guess: !1, spectating: !1, bomb_planted: !1 },
                    n = [{ ...t, timestamp_ms: 0 }],
                    i = null,
                    r = null,
                    s = (e, i) => {
                        let r = { ...t, ...e };
                        (r.in_proper_game !== t.in_proper_game ||
                            r.in_game_guess !== t.in_game_guess ||
                            r.spectating !== t.spectating ||
                            r.bomb_planted !== t.bomb_planted) &&
                            (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                    },
                    a = (e) => {
                        for (;;) {
                            let n = 1 / 0,
                                a = null;
                            if (t.in_proper_game && null != i) {
                                let e = i + 175e3;
                                e < n && ((n = e), (a = "round"));
                            }
                            if (t.in_game_guess && null != r) {
                                let e = r + 135e3;
                                e <= n && ((n = e), (a = "out_of_game"));
                            }
                            if (null == a || n > e) break;
                            "round" === a
                                ? s({ in_proper_game: !1, bomb_planted: !1, spectating: !1 }, n)
                                : s({ in_proper_game: !1, in_game_guess: !1, bomb_planted: !1, spectating: !1 }, n);
                        }
                    };
                for (let n of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms)) {
                    var o;
                    switch (
                        (a(n.timestamp_ms),
                        null == (o = n.name)
                            ? "other"
                            : (0, T.MK)(o)
                              ? "round"
                              : o === T.BC
                                ? "bomb_plant"
                                : o === T.cU || o === T.hK
                                  ? "bomb_end"
                                  : o === T.Z8
                                    ? "death"
                                    : T.KO.has(o)
                                      ? "kill"
                                      : "other")
                    ) {
                        case "round":
                            s(
                                { in_proper_game: !0, in_game_guess: !0, bomb_planted: !1, spectating: !1 },
                                n.timestamp_ms,
                            ),
                                (i = Math.max(i ?? n.timestamp_ms, n.timestamp_ms));
                            break;
                        case "bomb_plant":
                            s({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !0 }, n.timestamp_ms);
                            break;
                        case "bomb_end":
                            s({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !1 }, n.timestamp_ms);
                            break;
                        case "death":
                            s({ in_game_guess: !0, spectating: t.in_proper_game || t.spectating }, n.timestamp_ms);
                            break;
                        case "kill":
                            s({ in_game_guess: !0 }, n.timestamp_ms);
                    }
                    r = Math.max(r ?? n.timestamp_ms, n.timestamp_ms);
                }
                return a(1 / 0), n;
            })(this.gameEvents));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            s = null,
            a = null,
            o = (t - e) / 1e3 + 1;
        for (let t = 0; t < o; t++) {
            let o = e + 1e3 * t,
                l = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return r()(n, "bad timeline!"), n;
                })(n, o);
            (null != s ? I(this.gameEvents, s, o) : []).some((e) => e.name === T.Z8) && (a = o);
            let u = 1;
            l.in_game_guess
                ? l.spectating && (null == a || o - a > 15e3)
                    ? (u /= 3)
                    : l.bomb_planted && (u *= 2)
                : (u /= 4),
                i.push({ timestamp_ms: o, modifier: u }),
                (s = o);
        }
        return i;
    }
    rescoreEvent(e) {
        return null != e.name ? T.hz[e.name]?.scoreBoost : void 0;
    }
}
let y = { applicationIds: ["1158877933042143272", "356875057940791296"], create: (e) => new S(e) };
var C = n(876474),
    N = n(801344);
class v {
    gameEvents;
    gameStateTimeline = [];
    constructor(e) {
        (this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_game: !1, is_dead: !1 },
                    n = [{ ...t, timestamp_ms: 0 }],
                    i = (e, i) => {
                        let r = { ...t, ...e };
                        (r.in_game !== t.in_game || r.is_dead !== t.is_dead) &&
                            (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                    };
                for (let t of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms))
                    switch (
                        (function (e) {
                            switch (e) {
                                case N.rS:
                                    return "game_start";
                                case N.oy:
                                    return "game_end";
                                case N.mJ:
                                    return "death";
                                case N.Ou:
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
            s = (t - e) / 1e3 + 1;
        for (let t = 0; t < s; t++) {
            let s = e + 1e3 * t,
                a = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return r()(n, "bad timeline!"), n;
                })(n, s),
                o = 1;
            a.in_game ? a.is_dead && (o *= N.pw) : (o *= N.ym), i.push({ timestamp_ms: s, modifier: o });
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.name !== N.WU) return 1;
        let t = e.additionalData?.[N.kt];
        return "number" != typeof t ? 1 : (0, N.nS)(t);
    }
    rescoreEvent(e) {
        return null != e.name ? N.j3[e.name]?.scoreBoost : void 0;
    }
}
let R = [y, { applicationIds: [C.m], create: (e) => new v(e) }];
function O(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function b(e, t, n, i) {
    let s,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: o = 3, preTrimmedSignalsByFilepath: l } = a,
        u = [],
        c = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        d = (function (e, t) {
            if (null == e) return;
            let n = R.find((t) => t.applicationIds.includes(e));
            return n?.create(t);
        })(i, c),
        _ = Number.MAX_VALUE,
        h = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((_ = Math.min(_, e[0].timestamp_ms)), (h = Math.max(h, e[e.length - 1].timestamp_ms)));
    }
    null != d && _ <= h && (s = d.calculateModifiers?.(_, h));
    let f = (function (e) {
            if (null == e) return () => 1;
            let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
            return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
        })(s),
        p = (e) => d?.eventScoreMultiplier?.(e) ?? 1;
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let s = i.decision.timestamp - i.length,
            { startMs: a, endMs: o } = O(i);
        {
            let n = l?.[i.filepath];
            if (
                ((e = { audioModelDataPerUser: null != n ? n.audioModelDataPerUser : {}, gameEventData: [] }),
                null != n)
            ) {
                let t = 1e3 * Math.floor(s / 1e3),
                    i = (e) =>
                        D(
                            e.map((e) => ({ ...e, timestamp_ms: e.timestamp_ms + t })),
                            a,
                            o,
                        );
                for (let t in ((e.audioModelDataPerUser = {}), n.audioModelDataPerUser)) {
                    let r = n.audioModelDataPerUser[t];
                    e.audioModelDataPerUser[t] = {
                        laughterData: i(r.laughterData),
                        shoutingData: i(r.shoutingData),
                        rmsData: i(r.rmsData),
                    };
                }
            } else
                for (let n in t.audioModelDataPerUser) {
                    let i = t.audioModelDataPerUser[n];
                    e.audioModelDataPerUser[n] = {
                        laughterData: D(i.laughterData, a, o),
                        shoutingData: D(i.shoutingData, a, o),
                        rmsData: D(i.rmsData, a, o),
                    };
                }
            (e.audioModelDataPerUser = (function (e) {
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
                        s = 0;
                    for (let a = 0; a < n; a++) {
                        let n = t + 1e3 * a,
                            o = e[s];
                        null != o && o.timestamp_ms === n
                            ? (i.push({ ...o }), s++)
                            : (null != o && r()(o.timestamp_ms % 1e3 == 0, `bad timestamp! ${o.timestamp_ms}`),
                              i.push({ value: 0, timestamp_ms: n }));
                    }
                    return r()(i.length === n, "bad track!"), i;
                }
                r()(t % 1e3 == 0 && n % 1e3 == 0, "bad timestamps!");
                let s = (n - t) / 1e3 + 1,
                    a = {};
                for (let n in e) {
                    let r = e[n];
                    a[n] = {
                        laughterData: i(r.laughterData, t, s),
                        shoutingData: i(r.shoutingData, t, s),
                        rmsData: i(r.rmsData, t, s),
                    };
                }
                return a;
            })(e.audioModelDataPerUser)),
                (e.gameEventData = I(c, a, o));
        }
        let d = new Map();
        for (let t in e.audioModelDataPerUser) {
            let n = e.audioModelDataPerUser[t];
            if (0 === n.laughterData.length && 0 === n.shoutingData.length && 0 === n.rmsData.length) continue;
            let i = (function (e, t) {
                if (0 === e.length || 0 === t.length) return [];
                r()(e.length === t.length, "track length doesn't match rms length?");
                let n = e.map((e) => +(e.value > 0.7)),
                    i = -1;
                for (let e = 0; e <= n.length; e++) {
                    let t = e < n.length && 1 === n[e];
                    t && -1 === i && (i = e), t || -1 === i || (e - i < 2 && n.fill(0, i, e), (i = -1));
                }
                return e.map((e, i) => {
                    let r = Math.min(4 * t[i].value, 1);
                    return { timestamp_ms: e.timestamp_ms, value: r * n[i] };
                });
            })(n.laughterData, n.rmsData).map((e) => ({ ...e, value: e.value * f(e.timestamp_ms) }));
            d.set(
                t,
                (function (e) {
                    if (0 === e.length) return 0;
                    let t = 0;
                    for (let n of e) t += n.value;
                    return t / e.length;
                })(i),
            );
        }
        let _ = 0;
        if (d.size > 1) {
            let e = 0;
            for (let [t, i] of d) t !== n && ((_ += i), e++);
            _ /= e;
        }
        let h = d.get(n);
        null == h && (h = 0);
        let E =
            (h * (1 + _) + 1) *
                ((function (e, t, n) {
                    let i = 0;
                    for (let r of e) {
                        let e = t(r.timestamp_ms),
                            s = n(r);
                        i += r.score * e * s;
                    }
                    return i;
                })(e.gameEventData, f, p) +
                    1) -
            1;
        u.push({ clip: i, score: E });
    }
    u.sort((e, t) => t.score - e.score);
    let E = [];
    for (let e of u) {
        let { startMs: t, endMs: n } = O(e.clip),
            i = !1;
        for (let e of E) {
            let { startMs: r, endMs: s } = O(e.clip);
            if (Math.min(n, s) - Math.max(t, r) >= 5e3) {
                i = !0;
                break;
            }
        }
        if ((i || E.push(e), E.length === o)) break;
    }
    return { allClipsRanked: u, selected: E };
}
function D(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
var L = n(315240),
    w = n(696016);
class M extends o.A {
    timeline;
    scheduledClips = [];
    decisionSignals = A();
    sessionEndTimeout = new a.Ep();
    currentSessionGameKey = null;
    pendingSessionGameKey = null;
    constructor() {
        super(), (this.timeline = new E(Math.max(p.Ay.getSettings().clipsLength, 6e4)));
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
                      n.confidence > 0.55 &&
                          this.process(
                              { type: m.Gy.LAUGHTER, label: n.label, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence })
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, g.TD)() || e.context !== s.x.DEFAULT) return;
        let t = p.Ay.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === _.default.getId() || t) &&
            this.process({ type: m.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, g.TD)()) return;
        let t = d.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = u.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: m.Gy.SOUNDBOARD,
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
        if (!(0, g.TD)()) return;
        let t = d.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = u.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: m.Gy.SOUNDBOARD,
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
            case m.Gy.DISTRIBUTED:
                return p.Ay.getSettings().clipSignals.enableDistributedSignals;
            case m.Gy.GAME_EVENT:
                return p.Ay.getSettings().clipSignals.enableGameSignals;
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
            { trimStartMs: i, trimEndMs: s } = e,
            a = new Map();
        for (let e of Object.values(this.decisionSignals.audioModelDataPerUser))
            for (let i of D(e.rmsData, t, n)) {
                r()(i.timestamp_ms % 1e3 == 0, "bad rms data");
                let e = a.get(i.timestamp_ms) ?? 0;
                a.set(i.timestamp_ms, e + i.value);
            }
        let o = (e, t, n) => {
                let i = null,
                    r = Number.MAX_VALUE;
                for (let s = e; s <= t; s += 1e3) {
                    let e = a.get(s) ?? 0;
                    ((n && e < r) || (!n && e <= r)) &&
                        ((r = e), (i = s), !n && e < 0.001 && (i = Math.min(i + 2e3, t)));
                }
                return i;
            },
            l = I(this.decisionSignals.gameEventData, i, s);
        {
            let e = l.length > 0 ? Math.min(...l.map((e) => e.timestamp_ms)) : null,
                t = i + 5e3;
            null != e && (t = Math.min(t, e - 3e3)), (i = o(1e3 * Math.floor((i - 5e3) / 1e3), t, !1) ?? i);
        }
        {
            let e = l.length > 0 ? Math.max(...l.map((e) => e.timestamp_ms)) : null,
                t = s - 5e3;
            null != e && (t = Math.max(t, e + 3e3)), (s = o(1e3 * Math.ceil(t / 1e3), s + 5e3, !0) ?? s);
        }
        return (
            (i = Math.max(i, t)) >= (s = Math.min(s, n)) && ((i = e.startMs), (s = e.endMs)),
            { startMs: t, endMs: n, trimStartMs: i, trimEndMs: s }
        );
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case m.Gy.MANUAL:
            case m.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case m.Gy.LAUGHTER:
            case m.Gy.GAME_EVENT: {
                let n = 0;
                if (e.type === m.Gy.GAME_EVENT) {
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
                    n = Math.max(Date.now(), t + 1e4);
                } else n = Date.now() + 1e4;
                if (
                    this.scheduledClips.some(
                        (e) =>
                            (e.signal.type === m.Gy.GAME_EVENT || e.signal.type === m.Gy.LAUGHTER) &&
                            t >= e.request.trimStartMs &&
                            t <= e.request.trimEndMs,
                    )
                ) {
                    w.nx.info(
                        `decider: suppressing ${e.type} clip \u{2014} timestamp ${t} falls within an existing scheduled candidate's trimmed range`,
                    );
                    break;
                }
                this.scheduleClip(e, this.calculateAutoclipRequest(n), !0, !0);
            }
        }
    }
    clear() {
        w.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${p.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey} candidates=${p.Ay.getClipCandidates().length}`,
        ),
            this.unscheduleClip(),
            this.sessionEndTimeout.stop(),
            this.processClipCandidates(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            (0, L.YV)(),
            this.timeline.clear();
    }
    unscheduleClip() {
        for (let e of this.scheduledClips) e.timeout.stop();
        this.scheduledClips = [];
    }
    canScheduleClipCandidate(e) {
        let t = p.Ay.getCurrentClipsSession();
        if (null == t) return !1;
        if (null != h.A.getVoiceChannelId()) return !0;
        let n = f.default.getCurrentUser(),
            i = n?.isStaff() === !0 || n?.isStaffPersonal() === !0,
            r = null != t.gameId && y.applicationIds.includes(t.gameId);
        return e.type === m.Gy.GAME_EVENT && i && r;
    }
    scheduleClip(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = p.Ay.getCurrentClipsSession()?.id;
        if (n && !this.canScheduleClipCandidate(e)) return;
        let s = Date.now(),
            o = t?.endMs != null ? t.endMs : s,
            l = t?.startMs != null ? t.startMs : o - Number(p.Ay.getSettings().clipsLength),
            u = {
                startMs: l,
                endMs: o,
                trimStartMs: t?.trimStartMs != null ? t.trimStartMs : l,
                trimEndMs: t?.trimEndMs != null ? t.trimEndMs : o,
            };
        w.nx.info(`decider: scheduleClip signal=${e.type}, request=${JSON.stringify(t)}`);
        let c = { timeout: new a.Ep(), request: u, signal: e };
        this.scheduledClips.push(c),
            c.timeout.start(o > s ? o - s : 0, async () => {
                try {
                    let t = i ? this.adjustTrimForRms(u) : u;
                    w.nx.info(
                        `decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type}, finalRequest=${JSON.stringify(t)})`,
                    ),
                        await (0, L.yd)({
                            clipMethod: e.type === m.Gy.MANUAL ? "manual" : "auto",
                            request: t,
                            timeline: [...this.timeline.read(t.startMs, t.endMs)],
                            decision: { signal: e, timestamp: Date.now() },
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
        this.clear();
        let e = c.Ay.getVisibleGame();
        if (null == e) return;
        this.currentSessionGameKey = (0, c.Es)(e);
        let t = crypto.randomUUID();
        (0, L.mN)(t, e.id ?? null),
            w.nx.info(
                `decider: handleVoiceChannelSelect \u{2014} new gaming session id: ${t}, for game: ${this.currentSessionGameKey}`,
            );
    }
    handleRunningGamesChange() {
        let e = c.Ay.getVisibleGame(),
            t = null != e ? (0, c.Es)(e) : null;
        if (
            (w.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${p.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        ) {
            if (null != t) {
                this.currentSessionGameKey = t;
                let n = crypto.randomUUID();
                (0, L.mN)(n, e?.id ?? null),
                    w.nx.info(`decider: handleRunningGamesChange \u{2014} starting session for ${t} (id=${n})`);
            } else w.nx.info(`decider: handleRunningGamesChange \u{2014} not starting session (newPrimaryKey=${t})`);
            return;
        }
        if (t === this.currentSessionGameKey) {
            w.nx.info("decider: handleRunningGamesChange \u2014 same primary, cancelling pending end"),
                this.sessionEndTimeout.stop(),
                (this.pendingSessionGameKey = null);
            return;
        }
        if (null === t) {
            w.nx.info(
                "decider: handleRunningGamesChange \u2014 visible game became null, finalizing session immediately",
            ),
                this.sessionEndTimeout.stop(),
                this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                (0, L.YV)(),
                (this.pendingSessionGameKey = null);
            return;
        }
        this.pendingSessionGameKey === t
            ? w.nx.info("decider: handleRunningGamesChange \u2014 already debouncing for this key")
            : (w.nx.info(
                  `decider: handleRunningGamesChange \u{2014} primary game changed from ${this.currentSessionGameKey} to ${t}, debouncing 30000ms`,
              ),
              (this.pendingSessionGameKey = t),
              this.sessionEndTimeout.start(3e4, () => {
                  this.processClipCandidates(), (this.currentSessionGameKey = t);
                  let n = crypto.randomUUID();
                  (0, L.mN)(n, e?.id ?? null),
                      (this.pendingSessionGameKey = null),
                      w.nx.info(
                          `decider: sessionEndTimeout fired after debounce \u{2014} finalizing previous session, started new session (newPrimaryKey=${t}, id=${n})`,
                      );
              }));
    }
    async debugStashDeciderData() {
        let e = p.Ay.getClipCandidates();
        if (0 === e.length) return void alert("no candidates to stash");
        let t = {
            decisionSignals: this.decisionSignals,
            clipCandidates: [...e],
            localUserId: _.default.getId(),
            gameId: p.Ay.getCurrentClipsSession()?.gameId ?? void 0,
        };
        await l.A.clips.debugStashClipDeciderData(t),
            w.nx.info(`debugStashDeciderData: stashed ${e.length} candidates`);
    }
    static async debugRerunRanking() {
        w.nx.info("DEBUG RERUN RANKING");
        let e = await l.A.clips.debugReadStashedClipDeciderData(),
            t = b(e.clipCandidates, e.decisionSignals, e.localUserId, e.gameId);
        w.nx.info("ranked clips:", t),
            t.selected.forEach((e, t) => {
                w.nx.info(`Clip ${t + 1} score ${e.score}, ${l.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    processClipCandidates() {
        let e = p.Ay.getClipCandidates(),
            t = b(e, this.decisionSignals, _.default.getId(), p.Ay.getCurrentClipsSession()?.gameId ?? void 0);
        w.nx.info("ranked clips:", t);
        let n = new Set();
        for (let e of t.selected) (0, L.K7)(e.clip, e.score), n.add(e.clip.id);
        for (let t of e) n.has(t.id) || (0, L.oH)(t, !1);
        this.decisionSignals = A();
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(Math.max(p.Ay.getSettings().clipsLength, 6e4));
    }
}
let P = new M();
