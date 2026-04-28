"use strict";
n.d(t, { ih: () => S, LZ: () => T, Ay: () => N }), n(321073);
var i = n(205693),
    r = n(451988),
    s = n(439372),
    a = n(77729),
    o = n(608960),
    l = n(652896),
    _ = n(209932),
    d = n(495544),
    u = n(274372);
class c {
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
var E = n(372684),
    h = n(572164),
    m = n(284009),
    f = n.n(m);
function g(e, t) {
    let n = [];
    for (let i of e) {
        f()(null != i.decision, "candidate clip missing .decision");
        let e = i.decision.timestamp,
            r = e - i.length,
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
        n.push({ clip: i, score: o });
    }
    return n.sort((e, t) => t.score - e.score), n;
}
var I = n(399925);
function A() {
    return { audioModelDataPerUser: {} };
}
var p = n(696016);
let T = 0.035;
class S extends s.A {
    timeline;
    scheduledClipTimeout = new r.Ep();
    scheduledClipSignal = null;
    lastClipTimestamp = 0;
    pendingCandidateDiscards = new Set();
    decisionSignals = A();
    constructor() {
        super(), (this.timeline = new c(u.A.getSettings().clipsLength));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        STREAM_STOP: (e) => this.handleStreamStop(e),
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
                              { type: E.Gy.LAUGHTER, label: n.label, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label &&
                      e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, h.TD)() || e.context !== i.x.DEFAULT) return;
        let t = u.A.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === d.default.getId() || t) &&
            this.process({ type: E.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, h.TD)()) return;
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: E.Gy.SOUNDBOARD,
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
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: E.Gy.SOUNDBOARD,
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
            case E.Gy.DISTRIBUTED:
                return u.A.getSettings().clipSignals.enableDistributedSignals;
            case E.Gy.PHRASE:
                return u.A.getSettings().clipSignals.enablePhraseSignals;
            case E.Gy.GAME_EVENT:
                return u.A.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case E.Gy.MANUAL:
            case E.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case E.Gy.GAME_EVENT:
                1 === e.importance && this.scheduleClip(e, 1e4);
                break;
            case E.Gy.PHRASE:
                if (
                    this.scheduledClipSignal?.type === E.Gy.GAME_EVENT ||
                    performance.now() - this.lastClipTimestamp < 1e4
                )
                    return;
                this.scheduleClip(e);
                break;
            case E.Gy.LAUGHTER:
                if (
                    this.scheduledClipSignal?.type === E.Gy.GAME_EVENT ||
                    this.scheduledClipSignal?.type === E.Gy.PHRASE ||
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
        this.processClipCandidates(), this.unscheduleClip(), (this.lastClipTimestamp = 0), this.timeline.clear();
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
                    (0, I.yd)(
                        e.type === E.Gy.MANUAL ? "manual" : "auto",
                        [...this.timeline.read()],
                        { signal: e, timestamp: Date.now(), emotionHistory: [] },
                        n,
                    );
            });
    }
    handleStreamStop(e) {
        (0, l.Iy)(e.streamKey).ownerId === d.default.getId() && this.processClipCandidates();
    }
    async debugStashDeciderData() {
        if (u.A.getPendingClipCandidates().length > 0)
            return void alert("wait for pending candidates to finish saving!");
        let e = u.A.getClipCandidates();
        if (0 === e.length) return void alert("no candidates to stash");
        let t = { decisionSignals: this.decisionSignals, clipCandidates: e };
        await a.A.clips.debugStashClipDeciderData(t),
            p.nx.info(`debugStashDeciderData: stashed ${e.length} candidates`);
    }
    static async debugRerunRanking() {
        p.nx.info("DEBUG RERUN RANKING");
        let e = await a.A.clips.debugReadStashedClipDeciderData(),
            t = g(e.clipCandidates, e.decisionSignals);
        p.nx.info("ranked clips:", t);
        for (let e = 0; e < Math.min(3, t.length); e++)
            p.nx.info(`Clip ${e + 1} score ${t[e].score}, ${a.A.fileManager.basename(t[e].clip.filepath)}`);
    }
    processClipCandidates() {
        let e = u.A.getClipCandidates(),
            t = [],
            n = [],
            i = g(e, this.decisionSignals);
        p.nx.info("ranked clips:", i);
        for (let e = 0; e < i.length; e++) e < 3 ? t.push(i[e].clip) : n.push(i[e].clip);
        for (let e of t) (0, I.K7)(e);
        for (let e of n) (0, I.oH)(e.filepath, e.id);
        for (let e of u.A.getPendingClipCandidates()) this.pendingCandidateDiscards.add(e.id);
        this.decisionSignals = A();
    }
    handleLateCandidateSave(e) {
        let { clip: t } = e;
        this.pendingCandidateDiscards.has(t.id) &&
            (this.pendingCandidateDiscards.delete(t.id), (0, I.oH)(t.filepath, t.id));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(u.A.getSettings().clipsLength);
    }
}
let N = new S();
