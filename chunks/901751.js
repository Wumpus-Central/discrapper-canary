n.d(t, { ZP: () => k }), n(47120);
var r = n(754700),
    i = n(147913),
    o = n(317381),
    a = n(594190),
    s = n(569545),
    l = n(199902),
    c = n(314897),
    u = n(77498),
    d = n(938475),
    f = n(70956),
    _ = n(823379),
    p = n(272008),
    h = n(569984),
    m = n(918701),
    g = n(5881),
    E = n(566078),
    b = n(46140),
    v = n(70722);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = +f.Z.Millis.MINUTE,
    I = 2,
    S = +f.Z.Millis.SECOND,
    T = (0, g.T)({ location: b.dr.QUESTS_MANAGER }),
    N = (e) =>
        (0, s.V9)({
            streamType: v.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function A() {
    let e = l.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let t = u.Z.getDetectableGame(e.id);
    if ((null == t ? void 0 : t.id) == null) return null;
    let n = (0, m.lQ)(h.Z.quests, t.id);
    return null != n && R(n) && (0, m.Dr)({ quest: n }) ? n : null;
}
function C(e) {
    return d.ZP.countVoiceStatesForChannel(e) >= I;
}
function R(e) {
    return !(0, m.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function P(e) {
    var t;
    let { questId: n, streamKey: r, applicationId: i } = e,
        { channelId: o } = (0, s.my)(r),
        a = C(o),
        c = h.Z.quests.get(n);
    if (null == c || !R(c)) return 'STOP';
    let u = null === (t = A()) || void 0 === t ? void 0 : t.config,
        d = null != l.Z.getRTCStream(r) && null != u && E.r.build(u).application.id === i && a,
        f = null != D(c);
    return d || f ? 'BEAT' : 'BEAT_TERMINAL';
}
function w(e) {
    let t = h.Z.quests.get(e);
    return null == t
        ? {
              quest: null,
              activity: null
          }
        : {
              quest: t,
              activity: D(t)
          };
}
function D(e) {
    let t = E.r.build(e.config);
    if (!(0, m.pO)(e)) return null;
    let n = o.ZP.getSelfEmbeddedActivities();
    if (0 === n.size) return null;
    if ((0, m.KM)(e)) {
        var r;
        return null !== (r = n.values().next().value) && void 0 !== r ? r : null;
    }
    for (let e of n.values()) if (e.applicationId === t.application.id) return e;
    return null;
}
function L(e, t) {
    let n = (0, m.lQ)(e, t);
    if (null != n && (0, m.pO)(n)) return n;
    for (let [t, n] of e) if (!(0, m.zi)(n) && (0, m.KM)(n)) return n;
}
function x(e) {
    let t = L(h.Z.quests, e);
    if (null == t)
        return {
            quest: null,
            activity: null
        };
    let n = o.ZP.getSelfEmbeddedActivities().get(e);
    return {
        quest: t,
        activity: null != n ? n : null
    };
}
class M extends i.Z {
    syncHeartbeats(e) {
        for (let t of (T.log('syncHeartbeats - syncing heartbeats for taskTypes:', e), e)) {
            let e = this.heartbeats.get(t);
            if (null == e) continue;
            let n = this.getActivelyProgressingQuestIds(t),
                r = new Set(e.keys());
            for (let e of r) n.has(e) || (T.log('syncHeartbeats - terminating heartbeat for questId', e), this.terminateHeartbeatV2(e, t));
            for (let e of n) T.log('syncHeartbeats - initiating heartbeat for questId', e), r.has(e) || this.initiateHeartbeatV2(e, t);
        }
    }
    getActivelyProgressingQuestIds(e) {
        switch (e) {
            case r.X.PLAY_ON_DESKTOP:
                return this.getActivelyProgressingPlayOnDesktopQuestIds();
            case r.X.STREAM_ON_DESKTOP:
                return this.getActivelyProgressingStreamOnDesktopQuestIds();
            case r.X.PLAY_ACTIVITY:
                return this.getActivelyProgressingActivityQuestIds();
            default:
                (0, _.vE)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuestIds() {
        let e = new Set(),
            t = a.ZP.getRunningGames(),
            n = h.Z.quests;
        for (let r of t) if (null != r.id) for (let t of n.values()) R(t) && (0, m.Nj)({ quest: t }) && t.config.application.id === r.id && e.add(t.id);
        return e;
    }
    getActivelyProgressingStreamOnDesktopQuestIds() {
        return new Set();
    }
    getActivelyProgressingActivityQuestIds() {
        return new Set();
    }
    constructor(...e) {
        super(...e),
            y(this, 'legacyStreamKeyToHeartbeatState', new Map()),
            y(
                this,
                'heartbeats',
                new Map([
                    [r.X.PLAY_ON_DESKTOP, new Map()],
                    [r.X.STREAM_ON_DESKTOP, new Map()],
                    [r.X.PLAY_ACTIVITY, new Map()]
                ])
            ),
            y(this, 'initiateLegacyHeartbeat', (e) => {
                let { questId: t, streamKey: n, applicationId: r } = e;
                if (this.legacyStreamKeyToHeartbeatState.has(n)) {
                    T.log('~ initiateLegacyHeartbeat -> Heartbeat already initiated:', n);
                    return;
                }
                let i = () => {
                    let e = P({
                        questId: t,
                        streamKey: n,
                        applicationId: r
                    });
                    if ((T.log('~ initiateLegacyHeartbeat -> streamkey '.concat(n, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, p.m0)({
                            questId: t,
                            streamKey: n
                        });
                        let e = this.calculateHeartbeatDurationMs(t),
                            r = window.setTimeout(i, e);
                        this.legacyStreamKeyToHeartbeatState.set(n, {
                            heartbeatTimeoutId: r,
                            questId: t
                        });
                    } else
                        this.terminateLegacyHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: 'BEAT_TERMINAL' === e
                        });
                };
                i();
            }),
            y(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = h.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return O;
                let { progressSeconds: n, targetSeconds: i } = (0, m.il)(t, r.T.DESKTOP),
                    o = Math.max(0, (i - n) * f.Z.Millis.SECOND);
                return o <= O ? o + S : O;
            }),
            y(this, 'terminateLegacyHeartbeat', (e) => {
                let { streamKey: t, sendTerminalHeartbeat: n } = e,
                    r = this.legacyStreamKeyToHeartbeatState.get(t);
                if (null != r) {
                    T.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: t,
                        sendTerminalHeartbeat: n
                    });
                    let { questId: e, heartbeatTimeoutId: i } = r;
                    window.clearTimeout(i),
                        this.legacyStreamKeyToHeartbeatState.delete(t),
                        n &&
                            (0, p.m0)({
                                questId: e,
                                streamKey: t,
                                terminal: !0
                            });
                }
            }),
            y(this, 'initiateHeartbeatV2', (e, t) => {
                let n = this.heartbeats.get(t);
                if (null == n) return;
                if (n.has(e)) {
                    T.log('initiateHeartbeatV2 - heartbeat already initiated for questId', e);
                    return;
                }
                let r = () => {
                    if (this.getActivelyProgressingQuestIds(t).has(e)) {
                        let t = N(e);
                        (0, p.m0)({
                            questId: e,
                            streamKey: t
                        });
                        let i = this.calculateHeartbeatDurationMs(e),
                            o = window.setTimeout(r, i);
                        n.set(e, o);
                    } else T.log('initiateHeartbeatV2 - Quest '.concat(e, ' is no longer actively progressing, terminating heartbeat')), this.terminateHeartbeatV2(e, t);
                };
                T.log('initiateHeartbeatV2 - Initiating heartbeat for Quest '.concat(e)), r();
            }),
            y(this, 'terminateHeartbeatV2', (e, t) => {
                let n = this.heartbeats.get(t);
                if (null == n) return;
                let r = h.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    T.log('terminateHeartbeatV2 - terminating heartbeat for questId', e), window.clearTimeout(i), n.delete(e);
                    let t = r.get(e);
                    if (null != t && R(t)) {
                        T.log('terminateHeartbeatV2 - sending terminal heartbeat for questId', e);
                        let t = N(e);
                        (0, p.m0)({
                            questId: e,
                            streamKey: t,
                            terminal: !0
                        });
                    }
                }
            }),
            y(this, 'terminateLegacyHeartbeatForQuest', (e) => {
                let { questId: t, enrolledAt: n, completedAt: r } = e;
                (null === n || null === r) &&
                    this.legacyStreamKeyToHeartbeatState.forEach((e, n) => {
                        e.questId === t &&
                            (T.log('terminateHeartbeatForQuestId - terminating heartbeat for quest ID '.concat(t)),
                            this.terminateLegacyHeartbeat({
                                streamKey: n,
                                sendTerminalHeartbeat: !0
                            }));
                    });
            }),
            y(this, 'handleQuestsPreviewUpdateSuccess', (e) => {
                let { previewQuestUserStatus: t } = e;
                this.syncHeartbeats([r.X.PLAY_ON_DESKTOP]), this.terminateLegacyHeartbeatForQuest(t);
            }),
            y(this, 'handleEnrollmentSuccess', (e) => {
                let {
                    enrolledQuestUserStatus: { questId: t }
                } = e;
                this.syncHeartbeats([r.X.PLAY_ON_DESKTOP]);
                let n = l.Z.getCurrentUserActiveStream(),
                    i = A();
                if (null != n && null != i && i.id === t && R(i)) {
                    T.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateLegacyHeartbeat({
                            streamKey: (0, s.V9)(n),
                            applicationId: E.r.build(i.config).application.id,
                            questId: i.id
                        });
                    return;
                }
                let { quest: o, activity: a } = w(t);
                if (null != a && null != o && R(o)) {
                    T.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateLegacyHeartbeat({
                            streamKey: N(o.id),
                            applicationId: a.applicationId,
                            questId: o.id
                        });
                    return;
                }
            }),
            y(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: t, questId: n, userStatus: r } = e;
                if ((T.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t), null != r.completedAt))
                    for (let e of (this.terminateLegacyHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !1
                    }),
                    this.heartbeats.keys()))
                        this.terminateHeartbeatV2(n, e);
            }),
            y(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: t } = e;
                T.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t);
            }),
            y(this, 'handleVoiceStateChange', () => {
                let e = l.Z.getCurrentUserActiveStream(),
                    t = A();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, s.V9)(e),
                        channelId: e.channelId,
                        quest: t
                    });
            }),
            y(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: t, channelId: n, quest: r } = e,
                    i = null == r || !C(n),
                    o = C(n) && !this.legacyStreamKeyToHeartbeatState.has(t) && null != r && R(r) && !(0, m.$H)(r);
                i
                    ? (T.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(t)),
                      this.terminateLegacyHeartbeat({
                          streamKey: t,
                          sendTerminalHeartbeat: !0
                      }))
                    : o &&
                      (T.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateLegacyHeartbeat({
                          streamKey: t,
                          applicationId: E.r.build(r.config).application.id,
                          questId: r.id
                      }));
            }),
            y(this, 'handleEmbeddedActivityUpdate', (e) => {
                let { quest: t, activity: n } = x(e);
                if (null == t || !(0, m.pO)(t)) return;
                let r = N(t.id),
                    i = null == n && this.legacyStreamKeyToHeartbeatState.has(r),
                    o = null != n && R(t) && !this.legacyStreamKeyToHeartbeatState.has(r);
                i
                    ? (T.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateLegacyHeartbeat({
                          streamKey: r,
                          sendTerminalHeartbeat: !0
                      }))
                    : o &&
                      (T.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateLegacyHeartbeat({
                          streamKey: r,
                          applicationId: e,
                          questId: t.id
                      }));
            }),
            y(this, 'handleStreamCreate', (e) => {
                let { streamKey: t } = e,
                    { channelId: n, ownerId: r } = (0, s.my)(t);
                if (r !== c.default.getId()) return;
                let i = A();
                if (null == i) {
                    T.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(t)),
                        this.terminateLegacyHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                C(n) &&
                    R(i) &&
                    !(0, m.$H)(i) &&
                    !this.legacyStreamKeyToHeartbeatState.has(t) &&
                    (T.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateLegacyHeartbeat({
                        streamKey: t,
                        applicationId: E.r.build(i.config).application.id,
                        questId: i.id
                    }));
            }),
            y(this, 'handleStreamStart', (e) => {
                let { streamType: t, guildId: n, channelId: r } = e,
                    i = A(),
                    o = (0, s.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: c.default.getId()
                    });
                null == i
                    ? (T.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(o)),
                      this.terminateLegacyHeartbeat({
                          streamKey: o,
                          sendTerminalHeartbeat: !0
                      }))
                    : C(r) &&
                      R(i) &&
                      !(0, m.$H)(i) &&
                      !this.legacyStreamKeyToHeartbeatState.has(o) &&
                      (T.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateLegacyHeartbeat({
                          streamKey: o,
                          applicationId: E.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            y(this, 'handleStreamClose', (e) => {
                let { streamKey: t } = e;
                T.log('handleStreamClose - terminating heartbeat'),
                    this.terminateLegacyHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !0
                    });
            }),
            y(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP]),
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                QUESTS_PREVIEW_UPDATE_SUCCESS: this.handleQuestsPreviewUpdateSuccess,
                RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP]),
                STREAM_START: this.handleStreamStart,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V2: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange,
                EMBEDDED_ACTIVITY_UPDATE_V2: (e) => {
                    let { applicationId: t } = e;
                    return this.handleEmbeddedActivityUpdate(t);
                }
            });
    }
}
let k = new M();
