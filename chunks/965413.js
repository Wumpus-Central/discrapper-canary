"use strict";
n.d(t, { A: () => E });
var r = n(439372),
    i = n(587895),
    a = n(25528),
    s = n(616356),
    o = n(961350),
    l = n(977997),
    u = n(430363),
    c = n(161256),
    d = n(610393),
    _ = n(659416),
    f = n(4149),
    p = n(276976),
    h = n(652215);
let m = 1e3;
class g extends r.A {
    currentUserId = null;
    voiceStateByUserId = {};
    runningTimedGameByTargetId = {};
    lastProcessedCommandBySenderId = {};
    autoCompletedDareIds = new Set();
    tickIntervalId = null;
    elapsedByTargetId = {};
    _initialize() {
        this.currentUserId = o.default.getId();
    }
    _terminate() {
        this.stopTicking(),
            (this.currentUserId = null),
            (this.voiceStateByUserId = {}),
            (this.runningTimedGameByTargetId = {}),
            (this.lastProcessedCommandBySenderId = {}),
            this.autoCompletedDareIds.clear(),
            (this.elapsedByTargetId = {});
    }
    actions = {
        PRESENCE_UPDATES: (e) => this.handlePresenceUpdates(e),
        VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
        VOICE_DARES_LOCAL_ACCEPT_OFFER: (e) => this.handleLocalAcceptOffer(e),
        VOICE_DARES_LOCAL_DECLINE_OFFER: (e) => this.handleLocalDeclineOffer(e),
        VOICE_DARES_LOCAL_COMPLETE: (e) => this.handleLocalComplete(e),
        VOICE_DARES_LOCAL_CHICKEN_OUT: (e) => this.handleLocalChickenOut(e),
        VOICE_DARES_LOCAL_CLEARED: (e) => this.handleLocalCleared(e),
        VOICE_DARES_LOCAL_REQUEST_CANCEL: (e) => this.handleLocalRequestCancel(e),
        LOGOUT: () => this.handleLogout(),
    };
    handlePresenceUpdates(e) {
        if (!this.isVoiceDaresEnabled()) return;
        let t = { ...this.runningTimedGameByTargetId },
            n = { ...this.elapsedByTargetId },
            r = !1;
        for (let i of e.updates) {
            let e = i.user?.id;
            if (null == e) continue;
            let a = this.extractVoiceDareFromPresence(i);
            if (null == a) {
                null != t[e] && (delete t[e], delete n[e], (r = !0));
                continue;
            }
            if (a.messageKind === _.cn.COMMAND) {
                this.handleCommandVoiceDarePresence(a);
                continue;
            }
            if (a.messageKind !== _.cn.STATE || !this.isVoiceDarePresenceTargetingUserId(e, a)) {
                null != t[e] && (delete t[e], delete n[e], (r = !0));
                continue;
            }
            this.isTimedOrGameRunning(a)
                ? null == t[e] || t[e].dareId !== a.dareId
                    ? ((t[e] = a), (n[e] = { dareId: a.dareId, elapsedMs: 0, lastTickMs: Date.now() }), (r = !0))
                    : (t[e] = a)
                : null != t[e] && (delete t[e], delete n[e], (r = !0));
        }
        r && ((this.runningTimedGameByTargetId = t), (this.elapsedByTargetId = n), this.updateTickingState());
    }
    handleVoiceStateUpdates(e) {
        let t = { ...this.voiceStateByUserId },
            n = { ...this.runningTimedGameByTargetId },
            r = !1;
        for (let n of e.voiceStates) {
            let { userId: e, guildId: i, channelId: a } = n,
                s = { guildId: i, channelId: a };
            this.isVoiceStateSame(t[e], s) || ((t[e] = s), (r = !0));
        }
        r && ((this.voiceStateByUserId = t), (this.runningTimedGameByTargetId = n), this.updateTickingState());
    }
    handleLogout() {
        (this.currentUserId = null),
            (this.voiceStateByUserId = {}),
            (this.runningTimedGameByTargetId = {}),
            (this.lastProcessedCommandBySenderId = {}),
            this.autoCompletedDareIds.clear(),
            (this.elapsedByTargetId = {}),
            this.stopTicking();
    }
    handleLocalAcceptOffer(e) {
        if (!this.isVoiceDaresEnabled()) return;
        let t = o.default.getId();
        if (null == t) return;
        this.currentUserId = t;
        let n = Date.now(),
            r = { ...e.voiceDare, messageKind: _.cn.STATE, phase: _.Ob.RUNNING, startedAtMs: n };
        this.isTimedOrGameRunning(r) &&
            ((this.runningTimedGameByTargetId = { ...this.runningTimedGameByTargetId, [t]: r }),
            (this.elapsedByTargetId = {
                ...this.elapsedByTargetId,
                [t]: { dareId: r.dareId, elapsedMs: 0, lastTickMs: n },
            }),
            this.updateTickingState());
    }
    handleLocalDeclineOffer(e) {
        this.clearRunningForCurrentUser();
    }
    handleLocalComplete(e) {
        this.clearRunningForCurrentUser();
    }
    handleLocalChickenOut(e) {
        (0, d.U)(e.voiceDare), this.clearRunningForCurrentUser();
    }
    handleLocalCleared(e) {
        this.clearRunningForCurrentUser();
    }
    handleLocalRequestCancel(e) {
        this.clearRunningForCurrentUser();
    }
    clearRunningForCurrentUser() {
        let e = o.default.getId();
        if (null == e || null == this.runningTimedGameByTargetId[e]) return;
        let t = { ...this.runningTimedGameByTargetId };
        delete t[e], (this.runningTimedGameByTargetId = t);
        let n = { ...this.elapsedByTargetId };
        delete n[e], (this.elapsedByTargetId = n), this.updateTickingState();
    }
    handleCommandVoiceDarePresence(e) {
        if (null == this.currentUserId || e.targetId !== this.currentUserId) return;
        let t = `${e.dareId}:${e.commandType}`;
        if (this.lastProcessedCommandBySenderId[e.senderId] !== t)
            switch (((this.lastProcessedCommandBySenderId[e.senderId] = t), e.commandType)) {
                case _.Cy.COMPLETE_REQUESTED:
                    (0, c.Mq)(e);
                    break;
                case _.Cy.CANCEL_REQUESTED:
                    (0, c.qr)();
            }
    }
    updateTickingState() {
        Object.keys(this.runningTimedGameByTargetId).length > 0
            ? null == this.tickIntervalId &&
              (this.tickIntervalId = window.setInterval(() => {
                  this.handleTick();
              }, m))
            : this.stopTicking();
    }
    handleTick() {
        let e = Date.now(),
            t = { ...this.elapsedByTargetId };
        for (let [n, r] of Object.entries(this.runningTimedGameByTargetId)) {
            let i = t[n],
                a = null == i || i.dareId !== r.dareId ? { dareId: r.dareId, elapsedMs: 0, lastTickMs: e } : i,
                s = Math.max(0, e - a.lastTickMs),
                o = this.isProgressConditionSatisfied(r) ? a.elapsedMs + s : a.elapsedMs;
            if (
                ((t[n] = { dareId: a.dareId, elapsedMs: o, lastTickMs: e }),
                null != this.currentUserId && r.targetId === this.currentUserId && r.phase === _.Ob.RUNNING)
            ) {
                let t = Math.max(1, 1e3 * r.durationSec);
                if (!this.autoCompletedDareIds.has(r.dareId)) {
                    if (o >= t) {
                        this.autoCompletedDareIds.add(r.dareId), (0, c.Mq)(r);
                        continue;
                    }
                    let n = r.startedAtMs;
                    if (null != n && e - n >= (0, p.Xm)(r)) {
                        this.autoCompletedDareIds.add(r.dareId), (0, c.T2)(r);
                        continue;
                    }
                }
            }
        }
        this.elapsedByTargetId = t;
        let n = {};
        for (let [e, r] of Object.entries(t)) n[e] = r.elapsedMs;
        (0, c.jP)(e, n);
    }
    stopTicking() {
        null != this.tickIntervalId && (clearInterval(this.tickIntervalId), (this.tickIntervalId = null));
    }
    extractVoiceDareFromPresence(e) {
        let t = e.activities?.find((e) => e.type === h.$pd.CUSTOM_STATUS);
        return null == t ? null : (0, f.aF)(t);
    }
    isVoiceDarePresenceTargetingUserId(e, t) {
        return t.targetId === e;
    }
    isTimedOrGameRunning(e) {
        return (0, p.NC)(e);
    }
    isProgressConditionSatisfied(e) {
        switch ((0, p.k1)(e.kind).progressSignal) {
            case p.wX.TimeElapsed:
                return !0;
            case p.wX.TimeWhileSameGameAsSender:
                return this.isSameGameAsSender(e);
            case p.wX.TimeWhileInDareVoiceChannel:
                return this.isTargetInDareVoiceChannel(e);
            case p.wX.TimeWhileStreamingInDareVoiceChannel:
                return this.isTargetStreamingInDareVoiceChannel(e);
            case p.wX.TimeWhileVideoEnabledInDareVoiceChannel:
                return this.isTargetVideoEnabledInDareVoiceChannel(e);
            case p.wX.ManualNoProgress:
                return !1;
        }
    }
    isTargetInDareVoiceChannel(e) {
        return null != e.channelId && 0 !== `${e.channelId}`.length && l.A.isInChannel(e.channelId, e.targetId);
    }
    isTargetStreamingInDareVoiceChannel(e) {
        if (!this.isTargetInDareVoiceChannel(e)) return !1;
        let t = s.A.getStreamForUser(e.targetId, e.guildId);
        return null != t && t.channelId === e.channelId;
    }
    isTargetVideoEnabledInDareVoiceChannel(e) {
        return !!this.isTargetInDareVoiceChannel(e) && l.A.getUsersWithVideo(e.guildId).has(e.targetId);
    }
    isSameGameAsSender(e) {
        let t = (0, a.n)(e.senderId, e.guildId)[0],
            n = (0, a.n)(e.targetId, e.guildId)[0],
            r = t?.application_id,
            s = n?.application_id;
        return null != r && null != s && r === s && null != i.A.getApplication(r);
    }
    isVoiceStateSame(e, t) {
        return null != e && e.guildId === t.guildId && e.channelId === t.channelId;
    }
    isVoiceDaresEnabled() {
        return (0, u.PA)("VoiceDareTrackingManager").enabled;
    }
}
let E = new g();
