"use strict";
n.d(t, { A: () => N, i: () => y }), n(321073);
var i = n(459838),
    r = n(451988),
    s = n(439372),
    a = n(77729),
    o = n(608960),
    l = n(952818),
    u = n(209932),
    c = n(495544),
    d = n(309010),
    _ = n(274372);
class h {
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
    p = n(572164),
    E = n(284009),
    m = n.n(E);
function g(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
        r = arguments.length > 4 ? arguments[4] : void 0,
        s = [];
    for (let i of e) {
        let e;
        m()(null != i.decision, "candidate clip missing .decision");
        let a = i.decision.timestamp,
            o = a - i.length;
        {
            let n = r?.[i.filepath];
            if (((e = n ?? { audioModelDataPerUser: {}, gameEventData: [] }), null == n))
                for (let n in t.audioModelDataPerUser) {
                    let i = t.audioModelDataPerUser[n];
                    e.audioModelDataPerUser[n] = {
                        laughterData: A(i.laughterData, o, a),
                        shoutingData: A(i.shoutingData, o, a),
                        rmsData: A(i.rmsData, o, a),
                    };
                }
            (function (e) {
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
                              (m()(e[i].timestamp_ms % 1e3 == 0, `bad timestamp! ${e[i].timestamp_ms}`),
                              e.splice(i, 0, { value: 0, timestamp_ms: n }));
                    }
                    m()(e.length === n, "bad track!");
                }
                m()(t % 1e3 == 0 && n % 1e3 == 0, "bad timestamps!");
                let r = (n - t) / 1e3 + 1;
                for (let n in e.audioModelDataPerUser) {
                    let s = e.audioModelDataPerUser[n];
                    i(s.laughterData, t, r), i(s.shoutingData, t, r), i(s.rmsData, t, r);
                }
            })(e),
                (e.gameEventData = (function (e, t, n) {
                    let i = [];
                    for (let r of e) r.timestamp_ms < t || r.timestamp_ms > n || i.push(r);
                    return i;
                })(t.gameEventData, o, a));
        }
        let l = new Map();
        for (let t in e.audioModelDataPerUser) {
            let n = e.audioModelDataPerUser[t];
            if (0 === n.laughterData.length && 0 === n.shoutingData.length && 0 === n.rmsData.length) continue;
            let i = (function (e, t) {
                if (0 === e.length || 0 === t.length) return [];
                m()(e.length === t.length, "track length doesn't match rms length?");
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
            })(n.laughterData, n.rmsData);
            l.set(
                t,
                (function (e) {
                    if (0 === e.length) return 0;
                    let t = 0;
                    for (let n of e) t += n.value;
                    return t / e.length;
                })(i),
            );
        }
        let u = 0;
        if (l.size > 1) {
            let e = 0;
            for (let [t, i] of l) t !== n && ((u += i), e++);
            u /= e;
        }
        let c = l.get(n);
        null == c && (c = 0);
        let d = c * (1 + u);
        (d +=
            0 *
            (function (e) {
                let t = 1;
                for (let n of e) t *= 1 - Math.max(0, Math.min(1, n.score));
                return +(1 - t);
            })(e.gameEventData)),
            s.push({ clip: i, score: d });
    }
    s.sort((e, t) => t.score - e.score);
    let a = [];
    for (let e of s) {
        m()(null != e.clip.decision, "clip missing .decision");
        let t = e.clip.decision.timestamp,
            n = t - e.clip.length,
            r = !1;
        for (let e of a) {
            m()(null != e.clip.decision, "clip missing .decision");
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
function A(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
var I = n(116671);
function T() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
}
var S = n(696016);
class y extends s.A {
    timeline;
    scheduledClipTimeout = new r.Ep();
    scheduledClipSignal = null;
    lastClipTimestamp = 0;
    pendingCandidateDiscards = new Set();
    decisionSignals = T();
    sessionEndTimeout = new r.Ep();
    currentSessionGameKey = null;
    currentSessionId = null;
    pendingSessionGameKey = null;
    constructor() {
        super(), (this.timeline = new h(_.Ay.getSettings().clipsLength));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        RUNNING_GAMES_CHANGE: () => this.handleRunningGamesChange(),
        CLIPS_SAVE_CLIP: (e) => this.handleLateCandidateSave(e),
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
                              { type: f.Gy.LAUGHTER, label: n.label, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence })
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, p.TD)() || e.context !== i.x.DEFAULT) return;
        let t = _.Ay.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === c.default.getId() || t) &&
            this.process({ type: f.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, p.TD)()) return;
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
        if (!(0, p.TD)()) return;
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
                return _.Ay.getSettings().clipSignals.enableDistributedSignals;
            case f.Gy.PHRASE:
                return _.Ay.getSettings().clipSignals.enablePhraseSignals;
            case f.Gy.GAME_EVENT:
                return _.Ay.getSettings().clipSignals.enableGameSignals;
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
        S.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${this.currentSessionId} pendingSessionGameKey=${this.pendingSessionGameKey} pendingCandidates=${_.Ay.getPendingClipCandidates().length} candidates=${_.Ay.getClipCandidates().length}`,
        ),
            this.unscheduleClip(),
            this.sessionEndTimeout.stop(),
            this.processClipCandidates(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            (this.currentSessionId = null),
            (this.lastClipTimestamp = 0),
            this.timeline.clear();
    }
    unscheduleClip() {
        this.scheduledClipTimeout.stop(), (this.scheduledClipSignal = null);
    }
    scheduleClip(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (n && (null === this.currentSessionId || null == d.A.getVoiceChannelId())) ||
            (S.nx.info(`decider: scheduleClip signal=${e.type} delay=${t}ms isCandidate=${n}`),
            this.unscheduleClip(),
            (this.scheduledClipSignal = e),
            (this.lastClipTimestamp = performance.now() + t),
            this.scheduledClipTimeout.start(t, () => {
                S.nx.info(`decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type} isCandidate=${n})`),
                    (this.scheduledClipSignal = null),
                    (0, I.yd)(
                        e.type === f.Gy.MANUAL ? "manual" : "auto",
                        [...this.timeline.read()],
                        { signal: e, timestamp: Date.now() },
                        n,
                        this.currentSessionId ?? void 0,
                    );
            }));
    }
    handleVoiceChannelSelect() {
        this.clear();
        let e = l.Ay.getVisibleGame();
        null != e &&
            ((this.currentSessionGameKey = (0, l.Es)(e)),
            (this.currentSessionId = crypto.randomUUID()),
            S.nx.info(
                `decider: handleVoiceChannelSelect \u{2014} new gaming session id: ${this.currentSessionId}, for game: ${this.currentSessionGameKey}`,
            ));
    }
    handleRunningGamesChange() {
        let e = l.Ay.getVisibleGame(),
            t = null != e ? (0, l.Es)(e) : null;
        if (
            (S.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${this.currentSessionId} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        )
            return void (null != t
                ? ((this.currentSessionGameKey = t),
                  (this.currentSessionId = crypto.randomUUID()),
                  S.nx.info(
                      `decider: handleRunningGamesChange \u{2014} starting session for ${t} (id=${this.currentSessionId})`,
                  ))
                : S.nx.info(`decider: handleRunningGamesChange \u{2014} not starting session (newPrimaryKey=${t})`));
        if (t === this.currentSessionGameKey) {
            S.nx.info("decider: handleRunningGamesChange \u2014 same primary, cancelling pending end"),
                this.sessionEndTimeout.stop(),
                (this.pendingSessionGameKey = null);
            return;
        }
        if (null === t) {
            S.nx.info(
                "decider: handleRunningGamesChange \u2014 visible game became null, finalizing session immediately",
            ),
                this.sessionEndTimeout.stop(),
                this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                (this.currentSessionId = null),
                (this.pendingSessionGameKey = null);
            return;
        }
        this.pendingSessionGameKey === t
            ? S.nx.info("decider: handleRunningGamesChange \u2014 already debouncing for this key")
            : (S.nx.info(
                  `decider: handleRunningGamesChange \u{2014} primary game changed from ${this.currentSessionGameKey} to ${t}, debouncing 30000ms`,
              ),
              (this.pendingSessionGameKey = t),
              this.sessionEndTimeout.start(3e4, () => {
                  this.processClipCandidates(),
                      (this.currentSessionGameKey = t),
                      (this.currentSessionId = crypto.randomUUID()),
                      (this.pendingSessionGameKey = null),
                      S.nx.info(
                          `decider: sessionEndTimeout fired after debounce \u{2014} finalizing previous session, started new session (newPrimaryKey=${t}, id=${this.currentSessionId})`,
                      );
              }));
    }
    async debugStashDeciderData() {
        if (_.Ay.getPendingClipCandidates().length > 0)
            return void alert("wait for pending candidates to finish saving!");
        let e = _.Ay.getClipCandidates();
        if (0 === e.length) return void alert("no candidates to stash");
        let t = { decisionSignals: this.decisionSignals, clipCandidates: e, localUserId: c.default.getId() };
        await a.A.clips.debugStashClipDeciderData(t),
            S.nx.info(`debugStashDeciderData: stashed ${e.length} candidates`);
    }
    static async debugRerunRanking() {
        S.nx.info("DEBUG RERUN RANKING");
        let e = await a.A.clips.debugReadStashedClipDeciderData(),
            t = g(e.clipCandidates, e.decisionSignals, e.localUserId);
        S.nx.info("ranked clips:", t),
            t.selected.forEach((e, t) => {
                S.nx.info(`Clip ${t + 1} score ${e.score}, ${a.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    processClipCandidates() {
        let e = _.Ay.getClipCandidates(),
            t = g(e, this.decisionSignals, c.default.getId());
        for (let n of (S.nx.info("ranked clips:", t), e))
            null != t.selected.find((e) => e.clip.id === n.id) ? (0, I.K7)(n) : (0, I.oH)(n.filepath, n.id);
        for (let e of _.Ay.getPendingClipCandidates()) this.pendingCandidateDiscards.add(e.id);
        this.decisionSignals = T();
    }
    handleLateCandidateSave(e) {
        let { clip: t } = e;
        this.pendingCandidateDiscards.has(t.id) &&
            (this.pendingCandidateDiscards.delete(t.id), (0, I.oH)(t.filepath, t.id));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(_.Ay.getSettings().clipsLength);
    }
}
let N = new y();
