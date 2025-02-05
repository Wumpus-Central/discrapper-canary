n.d(t, { ZP: () => M }), n(47120);
var i = n(754700),
    r = n(147913),
    a = n(317381),
    s = n(594190),
    o = n(569545),
    l = n(199902),
    u = n(314897),
    c = n(77498),
    d = n(938475),
    f = n(70956),
    _ = n(272008),
    p = n(569984),
    h = n(918701),
    m = n(5881),
    g = n(566078),
    E = n(46140),
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
let I = 1 * f.Z.Millis.MINUTE,
    b = 2,
    T = 1 * f.Z.Millis.SECOND,
    S = (0, m.T)({ location: E.dr.QUESTS_MANAGER }),
    A = (e) =>
        (0, o.V9)({
            streamType: v.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function N() {
    let e = l.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let t = c.Z.getDetectableGame(e.id);
    if ((null == t ? void 0 : t.id) == null) return null;
    let n = (0, h.lQ)(p.Z.quests, t.id);
    return null != n && R(n) ? n : null;
}
function C(e) {
    return d.ZP.countVoiceStatesForChannel(e) >= b;
}
function R(e) {
    return !(0, h.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function O(e) {
    var t;
    let { questId: n, streamKey: i, applicationId: r } = e,
        { channelId: a } = (0, o.my)(i),
        u = C(a),
        c = p.Z.quests.get(n);
    if (null == c || !R(c)) return 'STOP';
    let d = null === (t = N()) || void 0 === t ? void 0 : t.config,
        f = null != l.Z.getRTCStream(i) && null != d && g.r.build(d).application.id === r && u,
        _ = null != x(c),
        m = s.ZP.getRunningGames().map((e) => e.id),
        E = (0, h.$H)(c) && m.includes(r);
    return f || _ || E ? 'BEAT' : 'BEAT_TERMINAL';
}
function D(e) {
    let t = p.Z.quests.get(e);
    return null == t
        ? {
              quest: null,
              activity: null
          }
        : {
              quest: t,
              activity: x(t)
          };
}
function x(e) {
    let t = g.r.build(e.config);
    if (!(0, h.pO)(e)) return null;
    let n = a.ZP.getSelfEmbeddedActivities();
    if (0 === n.size) return null;
    if ((0, h.KM)(e)) {
        var i;
        return null !== (i = n.values().next().value) && void 0 !== i ? i : null;
    }
    for (let e of n.values()) if (e.applicationId === t.application.id) return e;
    return null;
}
function L(e, t) {
    let n = (0, h.lQ)(e, t);
    if (null != n && (0, h.pO)(n)) return n;
    for (let [t, n] of e) if (!(0, h.zi)(n) && (0, h.KM)(n)) return n;
}
function P(e) {
    let t = L(p.Z.quests, e);
    if (null == t)
        return {
            quest: null,
            activity: null
        };
    let n = a.ZP.getSelfEmbeddedActivities().get(e);
    return {
        quest: t,
        activity: null != n ? n : null
    };
}
class w extends r.Z {
    constructor(...e) {
        super(...e),
            y(this, 'streamKeyToHeartbeatState', new Map()),
            y(this, 'initiateHeartbeat', (e) => {
                let { questId: t, streamKey: n, applicationId: i } = e;
                if (this.streamKeyToHeartbeatState.has(n)) {
                    S.log('~ initiateHeartbeat -> Heartbeat already initiated:', n);
                    return;
                }
                let r = () => {
                    let e = O({
                        questId: t,
                        streamKey: n,
                        applicationId: i
                    });
                    if ((S.log('~ initiateHeartbeat -> streamkey '.concat(n, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, _.m0)({
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
            y(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = p.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return I;
                let { progressSeconds: n, targetSeconds: r } = (0, h.il)(t, i.T.DESKTOP),
                    a = Math.max(0, (r - n) * f.Z.Millis.SECOND);
                return a <= I ? a + T : I;
            }),
            y(this, 'terminateHeartbeat', (e) => {
                let { streamKey: t, sendTerminalHeartbeat: n } = e,
                    i = this.streamKeyToHeartbeatState.get(t);
                if (null != i) {
                    S.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: t,
                        sendTerminalHeartbeat: n
                    });
                    let { questId: e, heartbeatTimeoutId: r } = i;
                    window.clearTimeout(r),
                        this.streamKeyToHeartbeatState.delete(t),
                        n &&
                            (0, _.m0)({
                                questId: e,
                                streamKey: t,
                                terminal: !0
                            });
                }
            }),
            y(this, 'terminateHeartbeatForQuestId', (e) => {
                let { previewQuestUserStatus: t } = e,
                    { questId: n, enrolledAt: i, completedAt: r } = t;
                (null === i || null === r) &&
                    this.streamKeyToHeartbeatState.forEach((e, t) => {
                        e.questId === n &&
                            (S.log('terminateHeartbeatForQuestId - terminating heartbeat for quest ID '.concat(n)),
                            this.terminateHeartbeat({
                                streamKey: t,
                                sendTerminalHeartbeat: !0
                            }));
                    });
            }),
            y(this, 'handleEnrollmentSuccess', (e) => {
                let {
                        enrolledQuestUserStatus: { questId: t }
                    } = e,
                    n = l.Z.getCurrentUserActiveStream(),
                    i = N();
                if (null != n && null != i && i.id === t && R(i)) {
                    S.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateHeartbeat({
                            streamKey: (0, o.V9)(n),
                            applicationId: g.r.build(i.config).application.id,
                            questId: i.id
                        });
                    return;
                }
                let { quest: r, activity: a } = D(t);
                if (null != a && null != r && R(r)) {
                    S.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateHeartbeat({
                            streamKey: A(r.id),
                            applicationId: a.applicationId,
                            questId: r.id
                        });
                    return;
                }
                s.ZP.getRunningGames().forEach((e) => {
                    if (null != e.id) {
                        for (let t of (0, h.dh)(p.Z.quests, e.id))
                            if (null != t && R(t) && (0, h.$H)(t)) {
                                S.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                                let e = A(t.id);
                                this.initiateHeartbeat({
                                    streamKey: e,
                                    applicationId: g.r.build(t.config).application.id,
                                    questId: t.id
                                });
                            }
                    }
                });
            }),
            y(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: t, userStatus: n } = e;
                S.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t),
                    null != n.completedAt &&
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
            }),
            y(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: t } = e;
                S.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t);
            }),
            y(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
                let { quests: t } = e;
                S.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', t);
                let n = s.ZP.getRunningGames().map((e) => e.id);
                t.forEach((e) => {
                    if (R(e) && (0, h.$H)(e)) {
                        let t = A(e.id),
                            i = n.includes(g.r.build(e.config).application.id),
                            r = !this.streamKeyToHeartbeatState.has(t) && i;
                        this.streamKeyToHeartbeatState.has(t) && !i
                            ? this.terminateHeartbeat({
                                  streamKey: t,
                                  sendTerminalHeartbeat: !0
                              })
                            : r &&
                              (S.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
                              this.initiateHeartbeat({
                                  streamKey: t,
                                  applicationId: g.r.build(e.config).application.id,
                                  questId: e.id
                              }));
                    }
                });
            }),
            y(this, 'handleRunningGamesChange', (e) => {
                let { removed: t, games: n } = e;
                S.log('~ handleRunningGamesChange -> Games detected:', {
                    runningGames: n,
                    removedGames: t
                }),
                    n.forEach((e) => {
                        if (null != e.id)
                            for (let t of (0, h.dh)(p.Z.quests, e.id)) {
                                if (!R(t)) continue;
                                let e = A(t.id);
                                (0, h.$H)(t) &&
                                    !this.streamKeyToHeartbeatState.has(e) &&
                                    (S.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
                                    this.initiateHeartbeat({
                                        streamKey: e,
                                        applicationId: g.r.build(t.config).application.id,
                                        questId: t.id
                                    }));
                            }
                    }),
                    t.forEach((e) => {
                        if (null != e.id)
                            for (let t of (0, h.dh)(p.Z.quests, e.id)) {
                                if (!R(t)) continue;
                                let e = A(t.id);
                                (0, h.$H)(t) &&
                                    this.streamKeyToHeartbeatState.has(e) &&
                                    this.terminateHeartbeat({
                                        streamKey: e,
                                        sendTerminalHeartbeat: !0
                                    });
                            }
                    });
            }),
            y(this, 'handleVoiceStateChange', () => {
                let e = l.Z.getCurrentUserActiveStream(),
                    t = N();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, o.V9)(e),
                        channelId: e.channelId,
                        quest: t
                    });
            }),
            y(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: t, channelId: n, quest: i } = e,
                    r = null == i || !C(n),
                    a = C(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && R(i) && !(0, h.$H)(i);
                r
                    ? (S.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(t)),
                      this.terminateHeartbeat({
                          streamKey: t,
                          sendTerminalHeartbeat: !0
                      }))
                    : a &&
                      (S.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: t,
                          applicationId: g.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            y(this, 'handleEmbeddedActivityUpdate', (e) => {
                let { quest: t, activity: n } = P(e);
                if (null == t || !(0, h.pO)(t)) return;
                let i = A(t.id),
                    r = null == n && this.streamKeyToHeartbeatState.has(i),
                    a = null != n && R(t) && !this.streamKeyToHeartbeatState.has(i);
                r
                    ? (S.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateHeartbeat({
                          streamKey: i,
                          sendTerminalHeartbeat: !0
                      }))
                    : a &&
                      (S.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateHeartbeat({
                          streamKey: i,
                          applicationId: e,
                          questId: t.id
                      }));
            }),
            y(this, 'handleStreamCreate', (e) => {
                let { streamKey: t } = e,
                    { channelId: n, ownerId: i } = (0, o.my)(t);
                if (i !== u.default.getId()) return;
                let r = N();
                if (null == r) {
                    S.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(t)),
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                C(n) &&
                    R(r) &&
                    !(0, h.$H)(r) &&
                    !this.streamKeyToHeartbeatState.has(t) &&
                    (S.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateHeartbeat({
                        streamKey: t,
                        applicationId: g.r.build(r.config).application.id,
                        questId: r.id
                    }));
            }),
            y(this, 'handleStreamStart', (e) => {
                let { streamType: t, guildId: n, channelId: i } = e,
                    r = N(),
                    a = (0, o.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: u.default.getId()
                    });
                null == r
                    ? (S.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(a)),
                      this.terminateHeartbeat({
                          streamKey: a,
                          sendTerminalHeartbeat: !0
                      }))
                    : C(i) &&
                      R(r) &&
                      !(0, h.$H)(r) &&
                      !this.streamKeyToHeartbeatState.has(a) &&
                      (S.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: a,
                          applicationId: g.r.build(r.config).application.id,
                          questId: r.id
                      }));
            }),
            y(this, 'handleStreamClose', (e) => {
                let { streamKey: t } = e;
                S.log('handleStreamClose - terminating heartbeat'),
                    this.terminateHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !0
                    });
            }),
            y(this, 'actions', {
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
                    let { applicationId: t } = e;
                    return this.handleEmbeddedActivityUpdate(t);
                }
            });
    }
}
let M = new w();
