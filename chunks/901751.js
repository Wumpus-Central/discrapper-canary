n.d(t, { ZP: () => P }), n(47120);
var i = n(754700),
    r = n(147913),
    a = n(317381),
    s = n(16609),
    o = n(594190),
    l = n(569545),
    u = n(199902),
    c = n(314897),
    d = n(77498),
    f = n(938475),
    _ = n(70956),
    p = n(272008),
    h = n(569984),
    m = n(918701),
    g = n(5881),
    E = n(566078),
    v = n(46140),
    y = n(70722);
function I(e, t, n) {
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
let T = 1 * _.Z.Millis.MINUTE,
    b = 2,
    S = 1 * _.Z.Millis.SECOND,
    A = (0, g.T)({ location: v.dr.QUESTS_MANAGER }),
    N = (e) =>
        (0, l.V9)({
            streamType: y.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function C() {
    let e = u.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let t = d.Z.getDetectableGame(e.id);
    if ((null == t ? void 0 : t.id) == null) return null;
    let n = (0, m.lQ)(h.Z.quests, t.id);
    return null != n && O(n) ? n : null;
}
function R(e) {
    return f.ZP.countVoiceStatesForChannel(e) >= b;
}
function O(e) {
    return !(0, m.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function D(e) {
    var t;
    let { questId: n, streamKey: i, applicationId: r } = e,
        { channelId: a } = (0, l.my)(i),
        c = R(a),
        d = h.Z.quests.get(n);
    if (null == d || !O(d)) return 'STOP';
    let f = null === (t = C()) || void 0 === t ? void 0 : t.config,
        _ = null != u.Z.getRTCStream(i) && null != f && E.r.build(f).application.id === r && c,
        { quest: p, activity: g } = x(),
        v = (0, s.p)(null == g ? void 0 : g.location),
        y = null != (null == p ? void 0 : p.config) && (null == p ? void 0 : p.id) === n && (0, m.UZ)(r, p) && v === a,
        I = o.ZP.getRunningGames().map((e) => e.id),
        T = (0, m.$H)(d) && I.includes(r);
    return _ || y || T ? 'BEAT' : 'BEAT_TERMINAL';
}
function x(e) {
    let t = {
        quest: null,
        activity: null
    };
    for (let i of a.ZP.getSelfEmbeddedActivities().values()) {
        var n;
        if (null != e && i.location.id !== e.id) continue;
        let r = null !== (n = (0, m.tF)(h.Z.quests, i)) && void 0 !== n ? n : null;
        if (null != r && O(r))
            return {
                quest: r,
                activity: i
            };
        t = {
            quest: null,
            activity: i
        };
    }
    return t;
}
class L extends r.Z {
    constructor(...e) {
        super(...e),
            I(this, 'streamKeyToHeartbeatState', new Map()),
            I(this, 'initiateHeartbeat', (e) => {
                let { questId: t, streamKey: n, applicationId: i } = e;
                if (this.streamKeyToHeartbeatState.has(n)) {
                    A.log('~ initiateHeartbeat -> Heartbeat already initiated:', n);
                    return;
                }
                let r = () => {
                    let e = D({
                        questId: t,
                        streamKey: n,
                        applicationId: i
                    });
                    if ((A.log('~ initiateHeartbeat -> streamkey '.concat(n, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, p.m0)({
                            questId: t,
                            streamKey: n
                        });
                        let e = this.calculateHeartbeatDurationMs(t),
                            i = window.setTimeout(r, e);
                        this.streamKeyToHeartbeatState.set(n, {
                            heartbeatTimeoutId: i,
                            questId: t
                        });
                    } else
                        this.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: 'BEAT_TERMINAL' === e
                        });
                };
                r();
            }),
            I(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = h.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return T;
                let { progressSeconds: n, targetSeconds: r } = (0, m.il)(t, i.T.DESKTOP),
                    a = Math.max(0, (r - n) * _.Z.Millis.SECOND);
                return a <= T ? a + S : T;
            }),
            I(this, 'terminateHeartbeat', (e) => {
                let { streamKey: t, sendTerminalHeartbeat: n } = e,
                    i = this.streamKeyToHeartbeatState.get(t);
                if (null != i) {
                    A.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: t,
                        sendTerminalHeartbeat: n
                    });
                    let { questId: e, heartbeatTimeoutId: r } = i;
                    window.clearTimeout(r),
                        this.streamKeyToHeartbeatState.delete(t),
                        n &&
                            (0, p.m0)({
                                questId: e,
                                streamKey: t,
                                terminal: !0
                            });
                }
            }),
            I(this, 'terminateHeartbeatForQuestId', (e) => {
                let { previewQuestUserStatus: t } = e,
                    { questId: n, enrolledAt: i, completedAt: r } = t;
                (null === i || null === r) &&
                    this.streamKeyToHeartbeatState.forEach((e, t) => {
                        e.questId === n &&
                            (A.log('terminateHeartbeatForQuestId - terminating heartbeat for quest ID '.concat(n)),
                            this.terminateHeartbeat({
                                streamKey: t,
                                sendTerminalHeartbeat: !0
                            }));
                    });
            }),
            I(this, 'handleEnrollmentSuccess', (e) => {
                let {
                        enrolledQuestUserStatus: { questId: t }
                    } = e,
                    n = u.Z.getCurrentUserActiveStream(),
                    i = C();
                if (null != n && null != i && i.id === t && O(i)) {
                    A.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateHeartbeat({
                            streamKey: (0, l.V9)(n),
                            applicationId: E.r.build(i.config).application.id,
                            questId: i.id
                        });
                    return;
                }
                let { quest: r, activity: a } = x(),
                    c = (0, s.p)(null == a ? void 0 : a.location);
                if (null != a && null != c && null != r && O(r) && r.id === t) {
                    A.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateHeartbeat({
                            streamKey: N(c),
                            applicationId: E.r.build(r.config).application.id,
                            questId: r.id
                        });
                    return;
                }
                o.ZP.getRunningGames().forEach((e) => {
                    if (null != e.id) {
                        for (let t of (0, m.dh)(h.Z.quests, e.id))
                            if (null != t && O(t) && (0, m.$H)(t)) {
                                A.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                                let e = N(t.id);
                                this.initiateHeartbeat({
                                    streamKey: e,
                                    applicationId: E.r.build(t.config).application.id,
                                    questId: t.id
                                });
                            }
                    }
                });
            }),
            I(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: t, userStatus: n } = e;
                A.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t),
                    null != n.completedAt &&
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
            }),
            I(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: t } = e;
                A.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t);
            }),
            I(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
                let { quests: t } = e;
                A.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', t);
                let n = o.ZP.getRunningGames().map((e) => e.id);
                t.forEach((e) => {
                    if (O(e) && (0, m.$H)(e)) {
                        let t = N(e.id),
                            i = n.includes(E.r.build(e.config).application.id),
                            r = !this.streamKeyToHeartbeatState.has(t) && i;
                        this.streamKeyToHeartbeatState.has(t) && !i
                            ? this.terminateHeartbeat({
                                  streamKey: t,
                                  sendTerminalHeartbeat: !0
                              })
                            : r &&
                              (A.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
                              this.initiateHeartbeat({
                                  streamKey: t,
                                  applicationId: E.r.build(e.config).application.id,
                                  questId: e.id
                              }));
                    }
                });
            }),
            I(this, 'handleRunningGamesChange', (e) => {
                let { removed: t, games: n } = e;
                A.log('~ handleRunningGamesChange -> Games detected:', {
                    runningGames: n,
                    removedGames: t
                }),
                    n.forEach((e) => {
                        if (null != e.id)
                            for (let t of (0, m.dh)(h.Z.quests, e.id)) {
                                if (!O(t)) continue;
                                let e = N(t.id);
                                (0, m.$H)(t) &&
                                    !this.streamKeyToHeartbeatState.has(e) &&
                                    (A.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
                                    this.initiateHeartbeat({
                                        streamKey: e,
                                        applicationId: E.r.build(t.config).application.id,
                                        questId: t.id
                                    }));
                            }
                    }),
                    t.forEach((e) => {
                        if (null != e.id)
                            for (let t of (0, m.dh)(h.Z.quests, e.id)) {
                                if (!O(t)) continue;
                                let e = N(t.id);
                                (0, m.$H)(t) &&
                                    this.streamKeyToHeartbeatState.has(e) &&
                                    this.terminateHeartbeat({
                                        streamKey: e,
                                        sendTerminalHeartbeat: !0
                                    });
                            }
                    });
            }),
            I(this, 'handleVoiceStateChange', () => {
                let e = u.Z.getCurrentUserActiveStream(),
                    t = C();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, l.V9)(e),
                        channelId: e.channelId,
                        quest: t
                    });
            }),
            I(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: t, channelId: n, quest: i } = e,
                    r = null == i || !R(n),
                    a = R(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && O(i) && !(0, m.$H)(i);
                r
                    ? (A.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(t)),
                      this.terminateHeartbeat({
                          streamKey: t,
                          sendTerminalHeartbeat: !0
                      }))
                    : a &&
                      (A.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: t,
                          applicationId: E.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            I(this, 'handleEmbeddedActivityUpdate', (e) => {
                let { quest: t, activity: n } = x(e),
                    i = (0, s.p)(e);
                if (null == i) return;
                let r = N(i),
                    a = (null == n || null == t) && this.streamKeyToHeartbeatState.has(r),
                    o = null != n && null != t && O(t) && !this.streamKeyToHeartbeatState.has(r);
                a
                    ? (A.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateHeartbeat({
                          streamKey: r,
                          sendTerminalHeartbeat: !0
                      }))
                    : o &&
                      (A.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateHeartbeat({
                          streamKey: r,
                          applicationId: E.r.build(t.config).application.id,
                          questId: t.id
                      }));
            }),
            I(this, 'handleStreamCreate', (e) => {
                let { streamKey: t } = e,
                    { channelId: n, ownerId: i } = (0, l.my)(t);
                if (i !== c.default.getId()) return;
                let r = C();
                if (null == r) {
                    A.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(t)),
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                R(n) &&
                    O(r) &&
                    !(0, m.$H)(r) &&
                    !this.streamKeyToHeartbeatState.has(t) &&
                    (A.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateHeartbeat({
                        streamKey: t,
                        applicationId: E.r.build(r.config).application.id,
                        questId: r.id
                    }));
            }),
            I(this, 'handleStreamStart', (e) => {
                let { streamType: t, guildId: n, channelId: i } = e,
                    r = C(),
                    a = (0, l.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: c.default.getId()
                    });
                null == r
                    ? (A.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(a)),
                      this.terminateHeartbeat({
                          streamKey: a,
                          sendTerminalHeartbeat: !0
                      }))
                    : R(i) &&
                      O(r) &&
                      !(0, m.$H)(r) &&
                      !this.streamKeyToHeartbeatState.has(a) &&
                      (A.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: a,
                          applicationId: E.r.build(r.config).application.id,
                          questId: r.id
                      }));
            }),
            I(this, 'handleStreamClose', (e) => {
                let { streamKey: t } = e;
                A.log('handleStreamClose - terminating heartbeat'),
                    this.terminateHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !0
                    });
            }),
            I(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                QUESTS_PREVIEW_UPDATE_SUCCESS: this.terminateHeartbeatForQuestId,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_START: this.handleStreamStart,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V2: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange,
                EMBEDDED_ACTIVITY_UPDATE_V2: (e) => {
                    let { location: t } = e;
                    return this.handleEmbeddedActivityUpdate(t);
                }
            });
    }
}
let P = new L();
