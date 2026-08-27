"use strict";
n.d(t, { A: () => L, i: () => R }), n(321073);
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
var p = n(439818),
    T = n(572164),
    m = n(363144),
    g = n(539572),
    S = n(31048),
    N = n(997649),
    C = n(696016);
function O(e, t) {
    if (e.length < 2) return !1;
    for (let n = e.length - 2; n < e.length; n++) if (e[n].value <= t) return !1;
    return !0;
}
class R extends l.A {
    timeline;
    scheduledClips = [];
    decisionSignals = (0, N.A)();
    sessionEndTimeout = new s.Ep();
    currentSessionGameKey = null;
    pendingSessionGameKey = null;
    sessionTransition = Promise.resolve();
    constructor() {
        super(), (this.timeline = new f(Math.max(I.Ay.getSettings().clipsLength, 6e4), S.l));
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
                      O(e.laughterData, 0.5) &&
                          this.process(
                              { type: C.Gy.LAUGHTER, userId: t.user_id, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? (e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                        O(e.shoutingData, 0.35) &&
                            this.process(
                                { type: C.Gy.SHOUTING, userId: t.user_id, confidence: n.confidence },
                                n.timestamp_ms,
                            ))
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, T.T)() || e.context !== a.x.DEFAULT) return;
        let t = I.Ay.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === E.default.getId() || t) &&
            this.process({ type: C.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, T.T)()) return;
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = d.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: C.Gy.SOUNDBOARD,
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
        if (!(0, T.T)()) return;
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = d.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: C.Gy.SOUNDBOARD,
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
            case C.Gy.DISTRIBUTED:
                return I.Ay.getSettings().clipSignals.enableDistributedSignals;
            case C.Gy.GAME_EVENT:
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
            for (let i of (0, m.Tv)(e.rmsData, t, n)) {
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
        let o = (0, N.p)(this.decisionSignals.gameEventData, i, a);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, S.l)();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case C.Gy.MANUAL:
            case C.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case C.Gy.SHOUTING:
            case C.Gy.LAUGHTER:
            case C.Gy.GAME_EVENT: {
                let n = 0;
                if (e.type === C.Gy.GAME_EVENT) {
                    if ((this.decisionSignals.gameEventData.push({ ...e, timestamp_ms: t }), 1 !== e.importance)) break;
                    n = Math.max((0, S.l)(), t + 1e4);
                } else n = (0, S.l)() + 1e4;
                if (
                    this.scheduledClips.some(
                        (e) =>
                            (e.signal.type === C.Gy.GAME_EVENT ||
                                e.signal.type === C.Gy.LAUGHTER ||
                                e.signal.type === C.Gy.SHOUTING) &&
                            t >= e.request.trimStartMs &&
                            t <= e.request.trimEndMs,
                    )
                ) {
                    C.nx.info(
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
            .catch((t) => C.nx.error(`decider: ${e} failed`, t));
    }
    async clearAsync() {
        C.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${I.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey} candidates=${I.Ay.getClipCandidates().length}`,
        ),
            this.unscheduleClip(),
            this.sessionEndTimeout.stop(),
            await this.processClipCandidates(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            await (0, g.YV)(),
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
            i = n?.isStaff() === !0 || n?.isStaffPersonal() === !0;
        return e.type === C.Gy.GAME_EVENT && i && (0, m.GC)(t.gameId ?? void 0);
    }
    scheduleClip(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = I.Ay.getCurrentClipsSession()?.id;
        if (n && !this.canScheduleClipCandidate(e)) return;
        let a = (0, S.l)(),
            l = t?.endMs != null ? t.endMs : a,
            o = t?.startMs != null ? t.startMs : l - Number(I.Ay.getSettings().clipsLength),
            d = {
                startMs: o,
                endMs: l,
                trimStartMs: t?.trimStartMs != null ? t.trimStartMs : o,
                trimEndMs: t?.trimEndMs != null ? t.trimEndMs : l,
            };
        C.nx.info(`decider: scheduleClip signal=${e.type}, request=${JSON.stringify(t)}`);
        let c = { timeout: new s.Ep(), request: d, signal: e };
        this.scheduledClips.push(c),
            c.timeout.start(l > a ? l - a : 0, async () => {
                try {
                    let t = i ? this.adjustTrimForRms(d) : d;
                    C.nx.info(
                        `decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type}, finalRequest=${JSON.stringify(t)})`,
                    ),
                        await (0, g.yd)({
                            clipMethod: e.type === C.Gy.MANUAL ? "manual" : "auto",
                            request: t,
                            timeline: [...this.timeline.read(t.startMs, t.endMs)],
                            decision: { signal: e, timestamp: (0, S.l)() },
                            isCandidate: n,
                            gameSessionId: r ?? void 0,
                            decisionSignals: n ? this.decisionSignals : void 0,
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
        (0, g.Vp)(t, e.id ?? null),
            C.nx.info(
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
            (C.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${I.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        ) {
            if (null != t) {
                this.currentSessionGameKey = t;
                let n = crypto.randomUUID();
                (0, g.Vp)(n, e?.id ?? null),
                    C.nx.info(`decider: handleRunningGamesChange \u{2014} starting session for ${t} (id=${n})`);
            } else C.nx.info(`decider: handleRunningGamesChange \u{2014} not starting session (newPrimaryKey=${t})`);
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
                this.unscheduleClip(),
                await this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                await (0, g.YV)(),
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
                  this.enqueueSessionTransition("sessionEndTimeout", async () => {
                      this.unscheduleClip(), await this.processClipCandidates(), (this.currentSessionGameKey = t);
                      let n = crypto.randomUUID();
                      (0, g.Vp)(n, e?.id ?? null),
                          (this.pendingSessionGameKey = null),
                          C.nx.info(
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
        null != a && (await a(r, i), C.nx.info(`stashDeciderData: stashed ${e.length} candidates to ${i}`));
    }
    static async debugRerunRanking(e) {
        C.nx.info(`DEBUG RERUN RANKING${null != e ? ` (${e})` : ""}`);
        let t = o.A.clips.debugReadStashedClipDeciderData;
        if (null == t) return;
        let n = await t(e),
            i = (0, m.Ly)(n.clipCandidates, n.decisionSignals, n.localUserId, n.gameId);
        C.nx.info("ranked clips:", i),
            i.selected.forEach((e, t) => {
                C.nx.info(`Clip ${t + 1} score ${e.score}, ${o.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    debugCreateRankableLaughterClip() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.default.getId(),
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4,
            n = (0, S.l)(),
            i = this.decisionSignals.audioModelDataPerUser[e];
        if (null != i) {
            for (let e of i.laughterData) e.timestamp_ms >= n - t && (e.value = 1);
            for (let e of i.rmsData) e.timestamp_ms >= n - t && (e.value = 0.9);
        } else
            C.nx.warn(
                "debugCreateRankableLaughterClip: no ML audio samples for the local user yet \u2014 join a VC and wait a moment before invoking",
            );
        this.process({ type: C.Gy.LAUGHTER, userId: e, confidence: 1 });
    }
    async processClipCandidates() {
        let e = I.Ay.getCurrentClipsSession(),
            t = I.Ay.getClipCandidates(),
            n = null == e ? [] : t.filter((t) => t.gameSessionId === e.id),
            i = null == e ? t : t.filter((t) => t.gameSessionId !== e.id),
            r = this.decisionSignals;
        if (
            ((this.decisionSignals = (0, N.A)()),
            C.nx.info(
                `decider: processClipCandidates \u{2014} sessionId=${e?.id} candidates=${n.length} staleCandidates=${i.length} autoStashEnabled=${I.Ay.isAutoStashEnabled()}`,
            ),
            I.Ay.isAutoStashEnabled())
        )
            try {
                let t, i, a;
                await this.stashDeciderData(
                    n,
                    r,
                    e,
                    ((t = e?.id ?? "no-session"),
                    (i = u.A.getGame(e?.gameId)?.name),
                    (a = null != i ? (0, p.A)(i).slice(0, 40) : ""),
                    "" !== a ? `${t}_${a}` : t),
                );
            } catch (e) {
                C.nx.error("decider: auto-stash failed", e);
            }
        let a = (0, m.Ly)(n, r, E.default.getId(), e?.gameId ?? void 0);
        C.nx.info("ranked clips:", a);
        let s = new Set(a.selected.map((e) => e.clip.id));
        await Promise.all(
            a.selected.map(async (e) => {
                try {
                    await (0, g.K7)(e.clip, e.score, e.audioEvents);
                } catch (e) {
                    C.nx.error("decider: failed to promote clip candidate", e);
                }
            }),
        ),
            await Promise.all(
                [...n, ...i].map(async (e) => {
                    if (!s.has(e.id))
                        try {
                            await (0, g.oH)(e, !1);
                        } catch (e) {
                            C.nx.error("decider: failed to delete unpromoted clip candidate", e);
                        }
                }),
            );
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(Math.max(I.Ay.getSettings().clipsLength, 6e4));
    }
}
let L = new R();
