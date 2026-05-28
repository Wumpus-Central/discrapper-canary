"use strict";
n.d(t, { A: () => O, i: () => R }), n(321073);
var i = n(459838),
    r = n(451988),
    s = n(439372),
    a = n(77729),
    o = n(608960),
    l = n(952818),
    u = n(209932),
    c = n(495544),
    d = n(274372);
class _ {
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
    read() {
        return this.cull(), this.timeline;
    }
    cull() {
        let e = Date.now() - this.timelineLength;
        for (; this.timeline.length > 0 && this.timeline[0].timestamp < e; ) this.timeline.shift();
    }
}
var h = n(372684),
    f = n(572164),
    p = n(284009),
    E = n.n(p);
function m(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
        r = arguments.length > 4 ? arguments[4] : void 0,
        s = [];
    for (let i of e) {
        let e;
        E()(null != i.decision, "candidate clip missing .decision");
        let a = i.decision.timestamp,
            o = a - i.length;
        {
            let n = r?.[i.filepath];
            if (((e = n ?? { audioModelDataPerUser: {}, gameEventData: [] }), null == n)) {
                for (let n in t.audioModelDataPerUser) {
                    let i = t.audioModelDataPerUser[n];
                    e.audioModelDataPerUser[n] = {
                        laughterData: g(i.laughterData, o, a),
                        shoutingData: g(i.shoutingData, o, a),
                        rmsData: g(i.rmsData, o, a),
                    };
                }
                e.gameEventData = (function (e, t, n) {
                    let i = [];
                    for (let r of e) r.timestamp_ms < t || r.timestamp_ms > n || i.push(r);
                    return i;
                })(t.gameEventData, o, a);
            }
            !(function (e) {
                let t = Number.MAX_VALUE,
                    n = -Number.MAX_VALUE;
                for (let i in e.audioModelDataPerUser) {
                    let r = e.audioModelDataPerUser[i];
                    for (let e of [r.laughterData, r.shoutingData, r.rmsData])
                        0 !== e.length &&
                            (e[0].timestamp_ms < t && (t = e[0].timestamp_ms),
                            e[e.length - 1].timestamp_ms > n && (n = e[e.length - 1].timestamp_ms));
                }
                if (t === Number.MAX_VALUE || n === -Number.MAX_VALUE) return;
                function i(e, t, n) {
                    for (let i = 0; i < n; i++) {
                        let n = t + 1e3 * i;
                        null == e[i]
                            ? e.splice(i, 0, { value: 0, timestamp_ms: n })
                            : e[i].timestamp_ms !== n &&
                              (E()(e[i].timestamp_ms % 1e3 == 0, `bad timestamp! ${e[i].timestamp_ms}`),
                              e.splice(i, 0, { value: 0, timestamp_ms: n }));
                    }
                    E()(e.length === n, "bad track!");
                }
                E()(t % 1e3 == 0 && n % 1e3 == 0, "bad timestamps!");
                let r = (n - t) / 1e3 + 1;
                for (let n in e.audioModelDataPerUser) {
                    let s = e.audioModelDataPerUser[n];
                    i(s.laughterData, t, r), i(s.shoutingData, t, r), i(s.rmsData, t, r);
                }
            })(e);
        }
        let l = [],
            u = [],
            c = 0,
            d = 0,
            _ = 0,
            h = 0,
            f = 0;
        for (let t in e.audioModelDataPerUser) {
            let i = e.audioModelDataPerUser[t];
            if (0 === i.laughterData.length && 0 === i.shoutingData.length && 0 === i.rmsData.length) continue;
            let r = S(i.laughterData, i.rmsData),
                s = S(i.shoutingData, i.rmsData),
                a = t === n ? 3 : 1;
            (c += a * T(r, 4, 0.8)),
                (d += a * T(s, 4, 0.2)),
                (_ += a * A(i.rmsData)),
                (h +=
                    a *
                    (function (e) {
                        if (e.length < 2) return 0;
                        let t = 0;
                        for (let n of e) t += n.value;
                        t /= e.length;
                        let n = 0;
                        for (let i of e) n += (i.value - t) * (i.value - t);
                        return n / e.length;
                    })(r)),
                r.length > 0 && l.push(r),
                s.length > 0 && u.push(s),
                (f += a);
        }
        let p = 0;
        f > 0 &&
            ((c /= f),
            (d /= f),
            (_ /= f),
            (h /= f),
            (p = +c + 0.08 * y(l, 0.8, 3) + 0 * y(u, 0.2, 3) + 0 * d + 2 * _ + 6.25 * h)),
            (p += +(function (e) {
                let t = 1;
                for (let n of e) t *= 1 - Math.max(0, Math.min(1, n.score));
                return +(1 - t);
            })(e.gameEventData)),
            s.push({ clip: i, score: p });
    }
    s.sort((e, t) => t.score - e.score);
    let a = [];
    for (let e of s) {
        E()(null != e.clip.decision, "clip missing .decision");
        let t = e.clip.decision.timestamp,
            n = t - e.clip.length,
            r = !1;
        for (let e of a) {
            E()(null != e.clip.decision, "clip missing .decision");
            let i = e.clip.decision.timestamp,
                s = i - e.clip.length;
            if (Math.min(t, i) - Math.max(n, s) >= 5e3) {
                r = !0;
                break;
            }
        }
        if ((r || a.push(e), a.length === i)) break;
    }
    return { allClipsRanked: s, selected: a };
}
function g(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
function A(e) {
    if (0 === e.length) return 0;
    let t = 0;
    for (let n of e) t += n.value;
    return t / e.length;
}
function I(e, t) {
    let n = 0;
    for (let i of e) i.value > t && n++;
    return n;
}
function T(e, t, n) {
    if (0 === e.length) return 0;
    if (e.length <= t) return I(e, n) + A(e);
    let i = -Number.MAX_VALUE;
    for (let r = 0; r <= e.length - t; r++) {
        let s = e.slice(r, r + t),
            a = I(s, n) + A(s);
        a > i && (i = a);
    }
    return i;
}
function S(e, t) {
    if (0 === e.length || 0 === t.length) return e;
    E()(e.length === t.length, "track length doesn't match rms length?");
    let n = Array(e.length);
    for (let i = 0; i < e.length; i++) n[i] = { timestamp_ms: e[i].timestamp_ms, value: e[i].value * (1 + t[i].value) };
    return n;
}
function y(e, t, n) {
    if (e.length < 2) return 0;
    let i = e.map((e) =>
            (function (e, t) {
                if (0 === e.length || t <= 1) return e;
                let n = Math.floor(t / 2),
                    i = Array(e.length);
                for (let t = 0; t < e.length; t++) {
                    let r = Math.max(0, t - n),
                        s = Math.min(e.length - 1, t + n),
                        a = 0;
                    for (let t = r; t <= s; t++) a += e[t].value;
                    i[t] = { timestamp_ms: e[t].timestamp_ms, value: a / (s - r + 1) };
                }
                return i;
            })(e, n),
        ),
        r = Math.min(...i.map((e) => e.length)),
        s = 0;
    for (let e = 0; e < r; e++) {
        let n = 0;
        for (let r of i) r[e].value > t && n++;
        n >= 2 && s++;
    }
    return s;
}
var N = n(315240);
function v() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
}
var C = n(696016);
class R extends s.A {
    timeline;
    scheduledClipTimeout = new r.Ep();
    scheduledClipSignal = null;
    lastClipTimestamp = 0;
    pendingCandidateDiscards = new Set();
    decisionSignals = v();
    sessionEndTimeout = new r.Ep();
    currentSessionGameKey = null;
    pendingSessionGameKey = null;
    constructor() {
        super(), (this.timeline = new _(d.A.getSettings().clipsLength));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        RUNNING_GAMES_CHANGE: () => this.handleRunningGamesChange(),
        CLIPS_SAVE_CLIP: (e) => this.handleLateCandidateSave(e),
        VOICE_CHANNEL_SELECT: () => this.clear(),
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
                              { type: h.Gy.LAUGHTER, label: n.label, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence })
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, f.TD)() || e.context !== i.x.DEFAULT) return;
        let t = d.A.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === c.default.getId() || t) &&
            this.process({ type: h.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, f.TD)()) return;
        let t = u.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: h.Gy.SOUNDBOARD,
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
        if (!(0, f.TD)()) return;
        let t = u.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: h.Gy.SOUNDBOARD,
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
            case h.Gy.DISTRIBUTED:
                return d.A.getSettings().clipSignals.enableDistributedSignals;
            case h.Gy.PHRASE:
                return d.A.getSettings().clipSignals.enablePhraseSignals;
            case h.Gy.GAME_EVENT:
                return d.A.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case h.Gy.MANUAL:
            case h.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case h.Gy.GAME_EVENT:
                if (
                    (this.decisionSignals.gameEventData.push({
                        timestamp_ms: t,
                        score: e.score ?? 0,
                        name: e.eventIconTag,
                    }),
                    1 === e.importance)
                ) {
                    let n = Math.max(0, 1e4 - Math.max(0, Date.now() - t));
                    this.scheduleClip(e, n, !0);
                }
                break;
            case h.Gy.PHRASE:
                if (
                    this.scheduledClipSignal?.type === h.Gy.GAME_EVENT ||
                    performance.now() - this.lastClipTimestamp < 1e4
                )
                    return;
                this.scheduleClip(e);
                break;
            case h.Gy.LAUGHTER:
                if (
                    this.scheduledClipSignal?.type === h.Gy.GAME_EVENT ||
                    this.scheduledClipSignal?.type === h.Gy.PHRASE ||
                    performance.now() - this.lastClipTimestamp < 15e3
                )
                    return;
                this.scheduleClip(e, 0, !0);
        }
    }
    read() {
        return {
            timeline: this.timeline.read(),
            scheduledClipSignal: this.scheduledClipSignal,
            phraseCooldown: Math.max(0, 1e4 - (performance.now() - this.lastClipTimestamp)),
        };
    }
    clear() {
        C.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} pendingSessionGameKey=${this.pendingSessionGameKey} pendingCandidates=${d.A.getPendingClipCandidates().length} candidates=${d.A.getClipCandidates().length}`,
        ),
            this.sessionEndTimeout.stop(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            this.processClipCandidates(),
            this.unscheduleClip(),
            (this.lastClipTimestamp = 0),
            this.timeline.clear();
    }
    unscheduleClip() {
        this.scheduledClipTimeout.stop(), (this.scheduledClipSignal = null);
    }
    scheduleClip(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        C.nx.info(`decider: scheduleClip signal=${e.type} delay=${t}ms isCandidate=${n}`),
            this.unscheduleClip(),
            (this.scheduledClipSignal = e),
            (this.lastClipTimestamp = performance.now() + t),
            this.scheduledClipTimeout.start(t, () => {
                C.nx.info(`decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type} isCandidate=${n})`),
                    (this.scheduledClipSignal = null),
                    (0, N.yd)(
                        e.type === h.Gy.MANUAL ? "manual" : "auto",
                        [...this.timeline.read()],
                        { signal: e, timestamp: Date.now() },
                        n,
                    );
            });
    }
    handleRunningGamesChange() {
        let e = l.Ay.getVisibleGame(),
            t = null != e ? (0, l.Es)(e) : null;
        if (
            (C.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        ) {
            C.nx.info(`decider: handleRunningGamesChange \u{2014} starting session for ${t}`),
                (this.currentSessionGameKey = t);
            return;
        }
        if (t === this.currentSessionGameKey) {
            C.nx.info("decider: handleRunningGamesChange \u2014 same primary, cancelling pending end"),
                this.sessionEndTimeout.stop(),
                (this.pendingSessionGameKey = null);
            return;
        }
        if (null === t) {
            C.nx.info(
                "decider: handleRunningGamesChange \u2014 visible game became null, finalizing session immediately",
            ),
                this.sessionEndTimeout.stop(),
                this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                (this.pendingSessionGameKey = null);
            return;
        }
        this.pendingSessionGameKey === t
            ? C.nx.info("decider: handleRunningGamesChange \u2014 already debouncing for this key")
            : (C.nx.info(
                  `decider: handleRunningGamesChange \u{2014} primary game changed from ${this.currentSessionGameKey} to ${t}, debouncing 30000ms`,
              ),
              (this.pendingSessionGameKey = t),
              this.sessionEndTimeout.start(3e4, () => {
                  C.nx.info(
                      `decider: sessionEndTimeout fired after debounce \u{2014} finalizing session (newPrimaryKey=${t})`,
                  ),
                      this.processClipCandidates(),
                      (this.currentSessionGameKey = t),
                      (this.pendingSessionGameKey = null);
              }));
    }
    async debugStashDeciderData() {
        if (d.A.getPendingClipCandidates().length > 0)
            return void alert("wait for pending candidates to finish saving!");
        let e = d.A.getClipCandidates();
        if (0 === e.length) return void alert("no candidates to stash");
        let t = { decisionSignals: this.decisionSignals, clipCandidates: e, localUserId: c.default.getId() };
        await a.A.clips.debugStashClipDeciderData(t),
            C.nx.info(`debugStashDeciderData: stashed ${e.length} candidates`);
    }
    static async debugRerunRanking() {
        C.nx.info("DEBUG RERUN RANKING");
        let e = await a.A.clips.debugReadStashedClipDeciderData(),
            t = m(e.clipCandidates, e.decisionSignals, e.localUserId);
        C.nx.info("ranked clips:", t),
            t.selected.forEach((e, t) => {
                C.nx.info(`Clip ${t + 1} score ${e.score}, ${a.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    processClipCandidates() {
        let e = d.A.getClipCandidates(),
            t = m(e, this.decisionSignals, c.default.getId());
        for (let n of (C.nx.info("ranked clips:", t), e))
            null != t.selected.find((e) => e.clip.id === n.id) ? (0, N.K7)(n) : (0, N.oH)(n.filepath, n.id);
        for (let e of d.A.getPendingClipCandidates()) this.pendingCandidateDiscards.add(e.id);
        this.decisionSignals = v();
    }
    handleLateCandidateSave(e) {
        let { clip: t } = e;
        this.pendingCandidateDiscards.has(t.id) &&
            (this.pendingCandidateDiscards.delete(t.id), (0, N.oH)(t.filepath, t.id));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(d.A.getSettings().clipsLength);
    }
}
let O = new R();
