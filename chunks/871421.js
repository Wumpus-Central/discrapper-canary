"use strict";
n.d(t, { ih: () => S, LZ: () => T, Ay: () => N }), n(321073);
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
var f = n(372684),
    h = n(572164),
    p = n(284009),
    E = n.n(p);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        i = [];
    for (let n of e) {
        E()(null != n.decision, "candidate clip missing .decision");
        let e = n.decision.timestamp,
            r = e - n.length,
            s = [];
        for (let n in t.audioModelDataPerUser) {
            let i = (function (e, t, n) {
                return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
            })(t.audioModelDataPerUser[n].laughterData, r, e);
            i.length > 0 && s.push(i);
        }
        let a = [];
        for (let e of s) {
            let t = 0,
                n = 0;
            for (let i of e) i.value > T && t++, (n += i.value);
            (n /= e.length), (t += n), a.push(t);
        }
        let o = 1;
        for (let e of a) o *= Math.max(e, 1);
        i.push({ clip: n, score: o });
    }
    i.sort((e, t) => t.score - e.score);
    let r = [];
    for (let e of i) {
        E()(null != e.clip.decision, "clip missing .decision");
        let t = e.clip.decision.timestamp,
            i = t - e.clip.length,
            s = !1;
        for (let e of r) {
            E()(null != e.clip.decision, "clip missing .decision");
            let n = e.clip.decision.timestamp,
                r = n - e.clip.length;
            if (Math.min(t, n) - Math.max(i, r) >= 5e3) {
                s = !0;
                break;
            }
        }
        if ((s || r.push(e), r.length === n)) break;
    }
    return { allClipsRanked: i, selected: r };
}
var g = n(607814);
function A() {
    return { audioModelDataPerUser: {} };
}
var I = n(696016);
let T = 0.5;
class S extends s.A {
    timeline;
    scheduledClipTimeout = new r.Ep();
    scheduledClipSignal = null;
    lastClipTimestamp = 0;
    pendingCandidateDiscards = new Set();
    decisionSignals = A();
    sessionEndTimeout = new r.Ep();
    currentSessionGamePid = null;
    constructor() {
        super(), (this.timeline = new _(d.A.getSettings().clipsLength));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChange(e),
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
                ((e = { laughterData: [], shoutingData: [] }),
                (this.decisionSignals.audioModelDataPerUser[t.user_id] = e)),
            t.data_points))
                "laughter" === n.label
                    ? (e.laughterData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                      n.confidence > T &&
                          this.process(
                              { type: f.Gy.LAUGHTER, label: n.label, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label &&
                      e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, h.TD)() || e.context !== i.x.DEFAULT) return;
        let t = d.A.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === c.default.getId() || t) &&
            this.process({ type: f.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, h.TD)()) return;
        let t = u.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: f.Gy.SOUNDBOARD,
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
        if (!(0, h.TD)()) return;
        let t = u.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: f.Gy.SOUNDBOARD,
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
            case f.Gy.DISTRIBUTED:
                return d.A.getSettings().clipSignals.enableDistributedSignals;
            case f.Gy.PHRASE:
                return d.A.getSettings().clipSignals.enablePhraseSignals;
            case f.Gy.GAME_EVENT:
                return d.A.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case f.Gy.MANUAL:
            case f.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case f.Gy.GAME_EVENT:
                1 === e.importance && this.scheduleClip(e, 1e4);
                break;
            case f.Gy.PHRASE:
                if (
                    this.scheduledClipSignal?.type === f.Gy.GAME_EVENT ||
                    performance.now() - this.lastClipTimestamp < 1e4
                )
                    return;
                this.scheduleClip(e);
                break;
            case f.Gy.LAUGHTER:
                if (
                    this.scheduledClipSignal?.type === f.Gy.GAME_EVENT ||
                    this.scheduledClipSignal?.type === f.Gy.PHRASE ||
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
        this.sessionEndTimeout.stop(),
            (this.currentSessionGamePid = null),
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
        this.unscheduleClip(),
            (this.scheduledClipSignal = e),
            (this.lastClipTimestamp = performance.now() + t),
            this.scheduledClipTimeout.start(t, () => {
                (this.scheduledClipSignal = null),
                    (0, g.yd)(
                        e.type === f.Gy.MANUAL ? "manual" : "auto",
                        [...this.timeline.read()],
                        { signal: e, timestamp: Date.now(), emotionHistory: [] },
                        n,
                    );
            });
    }
    handleRunningGamesChange(e) {
        let t = e.games[0]?.pid ?? null;
        if (t === this.currentSessionGamePid) return void this.sessionEndTimeout.stop();
        if (null === this.currentSessionGamePid) {
            this.currentSessionGamePid = t;
            return;
        }
        this.sessionEndTimeout.start(1e4, () => {
            this.processClipCandidates(), (this.currentSessionGamePid = l.Ay.getVisibleGame()?.pid ?? null);
        });
    }
    async debugStashDeciderData() {
        if (d.A.getPendingClipCandidates().length > 0)
            return void alert("wait for pending candidates to finish saving!");
        let e = d.A.getClipCandidates();
        if (0 === e.length) return void alert("no candidates to stash");
        let t = { decisionSignals: this.decisionSignals, clipCandidates: e };
        await a.A.clips.debugStashClipDeciderData(t),
            I.nx.info(`debugStashDeciderData: stashed ${e.length} candidates`);
    }
    static async debugRerunRanking() {
        I.nx.info("DEBUG RERUN RANKING");
        let e = await a.A.clips.debugReadStashedClipDeciderData(),
            t = m(e.clipCandidates, e.decisionSignals);
        I.nx.info("ranked clips:", t),
            t.selected.forEach((e, t) => {
                I.nx.info(`Clip ${t + 1} score ${e.score}, ${a.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    processClipCandidates() {
        let e = d.A.getClipCandidates(),
            t = m(e, this.decisionSignals);
        for (let n of (I.nx.info("ranked clips:", t), e))
            null != t.selected.find((e) => e.clip.id === n.id) ? (0, g.K7)(n) : (0, g.oH)(n.filepath, n.id);
        for (let e of d.A.getPendingClipCandidates()) this.pendingCandidateDiscards.add(e.id);
        this.decisionSignals = A();
    }
    handleLateCandidateSave(e) {
        let { clip: t } = e;
        this.pendingCandidateDiscards.has(t.id) &&
            (this.pendingCandidateDiscards.delete(t.id), (0, g.oH)(t.filepath, t.id));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(d.A.getSettings().clipsLength);
    }
}
let N = new S();
